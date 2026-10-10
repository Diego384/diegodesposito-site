#!/usr/bin/env bash
set -Eeuo pipefail

# Run once as root on the IONOS VPS to let the restricted SFTP user publish
# only the proposal-preview tree beneath the existing website document root.

readonly DEPLOY_USER='site-deploy'
readonly DEPLOY_GROUP='site-deploy'
readonly WEB_ROOT='/var/www/portfolio'
readonly PROPOSALS_ROOT="${WEB_ROOT}/proposte"

fail() {
  printf 'ERROR: %s\n' "$1" >&2
  exit 1
}

[[ "$(id -u)" -eq 0 ]] || fail 'Run this script as root.'
[[ -d "$WEB_ROOT" && ! -L "$WEB_ROOT" && -f "$WEB_ROOT/index.html" ]] \
  || fail 'The expected website directory or homepage is missing.'
getent passwd "$DEPLOY_USER" >/dev/null || fail "User $DEPLOY_USER does not exist."
getent group "$DEPLOY_GROUP" >/dev/null || fail "Group $DEPLOY_GROUP does not exist."
[[ "$(id -gn "$DEPLOY_USER")" == "$DEPLOY_GROUP" ]] \
  || fail "User $DEPLOY_USER is not using group $DEPLOY_GROUP."
command -v nginx >/dev/null || fail 'nginx is not installed.'
command -v sshd >/dev/null || fail 'sshd is not available.'

nginx_dump="$(nginx -T 2>/dev/null)"
grep -Fq 'server_name diegodesposito.it www.diegodesposito.it;' <<<"$nginx_dump" \
  || fail 'The diegodesposito.it Nginx server block was not found.'
grep -Fq 'root /var/www/portfolio;' <<<"$nginx_dump" \
  || fail 'Nginx no longer references /var/www/portfolio.'

webroot_owner_group_mode="$(stat -c '%U:%G %a' "$WEB_ROOT")"
[[ "$(awk '{print $1}' <<<"$webroot_owner_group_mode")" == 'root:root' ]] \
  || fail "$WEB_ROOT must remain owned by root:root."
webroot_mode="$(awk '{print $2}' <<<"$webroot_owner_group_mode")"
(( (8#$webroot_mode & 022) == 0 )) \
  || fail "$WEB_ROOT must not be group- or world-writable."

effective_sshd="$(sshd -T -C "user=$DEPLOY_USER,host=localhost,addr=127.0.0.1")"
grep -Fxq "chrootdirectory $WEB_ROOT" <<<"$effective_sshd" \
  || fail 'The deploy account is not confined to the expected website directory.'
grep -Fxq 'forcecommand internal-sftp -d /' <<<"$effective_sshd" \
  || fail 'The deploy account is not restricted to internal SFTP.'
grep -Fxq 'authenticationmethods publickey' <<<"$effective_sshd" \
  || fail 'The deploy account is not restricted to public-key authentication.'

[[ ! -L "$PROPOSALS_ROOT" ]] || fail "$PROPOSALS_ROOT must not be a symlink."
if [[ -e "$PROPOSALS_ROOT" ]]; then
  [[ -d "$PROPOSALS_ROOT" ]] || fail "$PROPOSALS_ROOT exists and is not a directory."
  chown "root:$DEPLOY_GROUP" "$PROPOSALS_ROOT"
  chmod 2775 "$PROPOSALS_ROOT"
else
  install -d -o root -g "$DEPLOY_GROUP" -m 2775 "$PROPOSALS_ROOT"
fi

printf '\nSFTP can now create and update files under this proposal directory:\n'
stat -c '%A %U:%G %n' "$PROPOSALS_ROOT"
printf '\nSSH access remains restricted to internal SFTP, public-key authentication, and the website chroot.\n'
