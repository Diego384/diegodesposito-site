#!/usr/bin/env bash
set -Eeuo pipefail

# Run as root on the IONOS VPS after the initial site-deploy account setup.
# This grants the SFTP-only account write access to two additional public files.

readonly DEPLOY_USER='site-deploy'
readonly DEPLOY_GROUP='site-deploy'
readonly WEB_ROOT='/var/www/portfolio'

fail() {
  printf 'ERROR: %s\n' "$1" >&2
  exit 1
}

[[ "$(id -u)" -eq 0 ]] || fail 'Run this script as root.'
[[ -d "$WEB_ROOT" && -f "$WEB_ROOT/index.html" && -f "$WEB_ROOT/styles.css" ]] \
  || fail 'The expected website directory or existing website files are missing.'
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

root_owner_group_mode="$(stat -c '%U:%G %a' "$WEB_ROOT")"
[[ "${root_owner_group_mode% *}" == 'root:root' ]] \
  || fail "$WEB_ROOT must remain owned by root:root."
root_mode="${root_owner_group_mode##* }"
(( (8#$root_mode & 022) == 0 )) || fail "$WEB_ROOT must not be group- or world-writable."

effective_sshd="$(sshd -T -C "user=$DEPLOY_USER,host=localhost,addr=127.0.0.1")"
grep -Fxq "chrootdirectory $WEB_ROOT" <<<"$effective_sshd" \
  || fail 'The deploy account is not confined to the expected website directory.'
grep -Fxq 'forcecommand internal-sftp -d /' <<<"$effective_sshd" \
  || fail 'The deploy account is not restricted to internal SFTP.'
grep -Fxq 'authenticationmethods publickey' <<<"$effective_sshd" \
  || fail 'The deploy account is not restricted to public-key authentication.'

for filename in robots.txt sitemap.xml; do
  destination="$WEB_ROOT/$filename"
  [[ ! -L "$destination" ]] || fail "$destination must not be a symlink."
  if [[ -e "$destination" ]]; then
    [[ -f "$destination" ]] || fail "$destination is not a regular file."
    chown "root:$DEPLOY_GROUP" "$destination"
    chmod 664 "$destination"
  else
    install -o root -g "$DEPLOY_GROUP" -m 664 /dev/null "$destination"
  fi
done

printf '\nExpanded SFTP write access for these website files only:\n'
stat -c '%A %U:%G %n' \
  "$WEB_ROOT/index.html" \
  "$WEB_ROOT/styles.css" \
  "$WEB_ROOT/robots.txt" \
  "$WEB_ROOT/sitemap.xml"
