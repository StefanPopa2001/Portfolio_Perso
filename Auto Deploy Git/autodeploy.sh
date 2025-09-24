#!/usr/bin/env bash

# autodeploy.sh
# Combined watcher and service toggle. Usage:
#   ./autodeploy.sh run       # run watcher in foreground
#   ./autodeploy.sh install   # install & start systemd service
#   ./autodeploy.sh uninstall # stop and remove systemd service
#   ./autodeploy.sh toggle    # installs if missing, removes if present
#   ./autodeploy.sh status    # show service status

set -o errexit
set -o pipefail
set -o nounset

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BRANCH="main"
POLL_INTERVAL_SECONDS=30
LOG_DIR="$REPO_DIR/Logs"
LOGFILE="$LOG_DIR/watch-deploy.log"
GIT_REMOTE="origin"
SERVICE_NAME="auto-deploy-portfolio.service"
SERVICE_PATH="/etc/systemd/system/$SERVICE_NAME"

usage() {
  echo "Usage: $0 {run|install|uninstall|toggle|status}"
  exit 1
}

ensure_log_dir() {
  mkdir -p "$LOG_DIR"
}

trim_log() {
  local f="$1"
  if [ -f "$f" ]; then
    tail -n 200 "$f" >"${f}.tmp" && mv "${f}.tmp" "$f" || true
  fi
}

get_remote_head() {
  git fetch --quiet "$GIT_REMOTE" "$BRANCH"
  git rev-parse --verify "${GIT_REMOTE}/${BRANCH}" 2>/dev/null || echo ""
}

run_watcher() {
  ensure_log_dir

  local deploy_script="$REPO_DIR/Deployment/deploy.sh"
  if [ ! -x "$deploy_script" ]; then
    echo "deploy script not found or not executable at: $deploy_script" | tee -a "$LOGFILE"
    exit 1
  fi

  cd "$REPO_DIR"

  local last_head
  last_head="$(get_remote_head)"
  if [ -z "$last_head" ]; then
    echo "Warning: couldn't determine remote head for $GIT_REMOTE/$BRANCH. Is remote reachable?" | tee -a "$LOGFILE"
  fi

  echo "Starting watch loop. Polling remote '$GIT_REMOTE/$BRANCH' every ${POLL_INTERVAL_SECONDS}s..." | tee -a "$LOGFILE"
  trim_log "$LOGFILE"

  while true; do
    sleep "$POLL_INTERVAL_SECONDS"
    new_head="$(get_remote_head)"
    if [ -z "$new_head" ]; then
      echo "$(date --iso-8601=seconds) - Warning: couldn't get remote head. Skipping this poll." | tee -a "$LOGFILE"
      continue
    fi

    if [ "$new_head" != "$last_head" ]; then
      echo "$(date --iso-8601=seconds) - Detected update on $GIT_REMOTE/$BRANCH: $last_head -> $new_head" | tee -a "$LOGFILE"

      # Pull latest to local main branch
      if git rev-parse --verify "$BRANCH" >/dev/null 2>&1; then
        git checkout "$BRANCH" || true
        git pull --ff-only "$GIT_REMOTE" "$BRANCH" || git pull "$GIT_REMOTE" "$BRANCH" || true
      else
        git fetch "$GIT_REMOTE" "$BRANCH"
        git checkout -b "$BRANCH" "${GIT_REMOTE}/${BRANCH}"
      fi

      echo "$(date --iso-8601=seconds) - Running deploy script: $deploy_script" | tee -a "$LOGFILE"
      if "$deploy_script" >>"$LOGFILE" 2>&1; then
        echo "$(date --iso-8601=seconds) - Deploy succeeded." | tee -a "$LOGFILE"
      else
        echo "$(date --iso-8601=seconds) - Deploy failed. See logs above." | tee -a "$LOGFILE"
      fi
      trim_log "$LOGFILE"

      last_head="$new_head"
    fi
  done
}

install_service() {
  echo "Installing systemd service ($SERVICE_PATH) to run watcher"
  # Prefer the original invoking user (SUDO_USER) so the service runs as that user when possible
  INSTALL_USER="${SUDO_USER:-$(whoami)}"
  HOME_DIR="$(eval echo "~$INSTALL_USER")"

  sudo tee "$SERVICE_PATH" >/dev/null <<EOF
[Unit]
Description=Auto Deploy Watcher for Portfolio
After=network.target

[Service]
Type=simple
User=$INSTALL_USER
Environment=HOME=$HOME_DIR
WorkingDirectory=$REPO_DIR
ExecStart=/bin/bash -lc 'cd $REPO_DIR && ./Auto\ Deploy\ Git/autodeploy.sh run'
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

  sudo systemctl daemon-reload
  sudo systemctl enable --now "$SERVICE_NAME"
  echo "Service installed and started. Use: sudo systemctl status $SERVICE_NAME"
}

remove_service() {
  echo "Stopping and removing systemd service ($SERVICE_PATH)"
  sudo systemctl stop "$SERVICE_NAME" || true
  sudo systemctl disable "$SERVICE_NAME" || true
  sudo rm -f "$SERVICE_PATH"
  sudo systemctl daemon-reload
  echo "Service removed."
}

status_service() {
  sudo systemctl status "$SERVICE_NAME" || true
}

## If no argument is given, default to toggle behavior (enable on first run, disable on next run)
case "${1:-toggle}" in
  run)
    run_watcher
    ;;
  install)
    install_service
    ;;
  uninstall|remove)
    remove_service
    ;;
  toggle)
    if [ -f "$SERVICE_PATH" ]; then
      remove_service
    else
      install_service
    fi
    ;;
  status)
    status_service
    ;;
  *)
    usage
    ;;
esac
