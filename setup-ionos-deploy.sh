#!/usr/bin/env bash
set -Eeuo pipefail

# Run once as root on the IONOS VPS. This creates a chrooted SFTP-only account
# and grants it write access to the two website files only.

readonly DEPLOY_USER='site-deploy'
readonly DEPLOY_GROUP='site-deploy'
readonly WEB_ROOT='/var/www/portfolio'
readonly SSH_DROPIN='/etc/ssh/sshd_config.d/99-site-deploy.conf'
readonly DEPLOY_PUBLIC_KEY='ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPI07aFvmrJc+Vki8D1QQMPe9eRd9HhwF1jIRC1iBPqx github-actions:Diego384/diegodesposito-site'

fail() {
  printf 'ERROR: %s\n' "$1" >&2
  exit 1
}

[[ "$(id -u)" -eq 0 ]] || fail 'Run this script as root.'
[[ -d "$WEB_ROOT" && -f "$WEB_ROOT/index.html" && ! -L "$WEB_ROOT/index.html" ]] \
  || fail "$WEB_ROOT/index.html is missing or is not a regular file."
[[ ! -e "$WEB_ROOT/styles.css" && ! -L "$WEB_ROOT/styles.css" ]] \
  || fail "$WEB_ROOT/styles.css already exists; inspect it before proceeding."
[[ ! -e "/home/$DEPLOY_USER" ]] || fail "/home/$DEPLOY_USER already exists; inspect it before proceeding."
[[ ! -e "$SSH_DROPIN" ]] || fail "$SSH_DROPIN already exists; inspect it before proceeding."
getent passwd "$DEPLOY_USER" >/dev/null && fail "User $DEPLOY_USER already exists; inspect it before proceeding."
getent group "$DEPLOY_GROUP" >/dev/null && fail "Group $DEPLOY_GROUP already exists; inspect it before proceeding."
command -v nginx >/dev/null || fail 'nginx is not installed.'
command -v groupadd >/dev/null || fail 'groupadd is not available.'
command -v useradd >/dev/null || fail 'useradd is not available.'
command -v openssl >/dev/null || fail 'openssl is not available.'
command -v chpasswd >/dev/null || fail 'chpasswd is not available.'
command -v sshd >/dev/null || fail 'sshd is not available.'
command -v systemctl >/dev/null || fail 'systemctl is not available.'

# Confirm the expected site is still configured and the chroot path is safe.
nginx_dump="$(nginx -T 2>/dev/null)"
grep -Fq 'server_name diegodesposito.it www.diegodesposito.it;' <<<"$nginx_dump" \
  || fail 'The diegodesposito.it Nginx server block was not found.'
grep -Fq 'root /var/www/portfolio;' <<<"$nginx_dump" \
  || fail 'Nginx no longer references /var/www/portfolio.'

for path in / /var /var/www "$WEB_ROOT"; do
  [[ -d "$path" ]] || fail "Chroot path component $path is missing."
  owner_group_mode="$(stat -c '%U:%G %a' "$path")"
  owner_group="${owner_group_mode% *}"
  mode="${owner_group_mode##* }"
  [[ "$owner_group" == 'root:root' ]] || fail "$path must be owned by root:root (found $owner_group)."
  (( (8#$mode & 022) == 0 )) || fail "$path must not be group- or world-writable (mode $mode)."
done

grep -Eq '^[[:space:]]*Include[[:space:]]+/etc/ssh/sshd_config\.d/\*\.conf' /etc/ssh/sshd_config \
  || fail 'sshd_config does not include /etc/ssh/sshd_config.d/*.conf.'

groupadd --system "$DEPLOY_GROUP"
useradd --create-home --home-dir "/home/$DEPLOY_USER" --shell /bin/sh --gid "$DEPLOY_GROUP" "$DEPLOY_USER"

install -d -o root -g root -m 755 /etc/ssh/sshd_config.d
cat >"$SSH_DROPIN" <<'EOF'
Match User site-deploy
    ChrootDirectory /var/www/portfolio
    ForceCommand internal-sftp -d /
    AuthenticationMethods publickey
    PasswordAuthentication no
    KbdInteractiveAuthentication no
    PermitTTY no
    AllowTcpForwarding no
    X11Forwarding no
    PermitTunnel no
Match all
EOF
chmod 644 "$SSH_DROPIN"

if ! sshd -t; then
  rm -f "$SSH_DROPIN"
  fail 'sshd configuration validation failed; the new SSH drop-in was removed.'
fi

effective_sshd="$(sshd -T -C "user=$DEPLOY_USER,host=localhost,addr=127.0.0.1")"
grep -Fxq 'chrootdirectory /var/www/portfolio' <<<"$effective_sshd" \
  || { rm -f "$SSH_DROPIN"; fail 'The effective SSH configuration does not apply the expected chroot.'; }
grep -Fxq 'forcecommand internal-sftp -d /' <<<"$effective_sshd" \
  || { rm -f "$SSH_DROPIN"; fail 'The effective SSH configuration does not force internal-sftp.'; }
grep -Fxq 'authenticationmethods publickey' <<<"$effective_sshd" \
  || { rm -f "$SSH_DROPIN"; fail 'The effective SSH configuration does not require a public key.'; }

systemctl reload ssh

# Give the account an unguessable password so public-key authentication is
# accepted by PAM; the SSH match above disables password and keyboard login.
random_password="$(openssl rand -base64 48)"
printf '%s:%s\n' "$DEPLOY_USER" "$random_password" | chpasswd
unset random_password

install -d -o "$DEPLOY_USER" -g "$DEPLOY_GROUP" -m 700 "/home/$DEPLOY_USER/.ssh"
printf '%s\n' "restrict $DEPLOY_PUBLIC_KEY" >"/home/$DEPLOY_USER/.ssh/authorized_keys"
chown "$DEPLOY_USER:$DEPLOY_GROUP" "/home/$DEPLOY_USER/.ssh/authorized_keys"
chmod 600 "/home/$DEPLOY_USER/.ssh/authorized_keys"

# Pre-create the missing file so SFTP never needs write permission on the webroot directory.
install -o root -g "$DEPLOY_GROUP" -m 664 /dev/null "$WEB_ROOT/styles.css"
chown "root:$DEPLOY_GROUP" "$WEB_ROOT/index.html"
chmod 664 "$WEB_ROOT/index.html"

printf '\nSFTP account configured. Effective restrictions:\n'
sshd -T -C "user=$DEPLOY_USER,host=localhost,addr=127.0.0.1" \
  | grep -E '^(chrootdirectory|forcecommand|authenticationmethods|passwordauthentication|kbdinteractiveauthentication|permittty|allowtcpforwarding|x11forwarding|permittunnel) '
printf '\nWebsite file permissions:\n'
stat -c '%A %U:%G %n' "$WEB_ROOT" "$WEB_ROOT/index.html" "$WEB_ROOT/styles.css"
printf '\nUser groups:\n'
id "$DEPLOY_USER"
