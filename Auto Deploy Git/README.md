Auto Deploy Git (single-script)
===============================

This folder contains a single script `autodeploy.sh` that both runs the watcher and toggles installation as a systemd service.

Usage

- To toggle the auto-deploy service (install if missing, remove if present) simply run the script with no arguments:

  ./Auto\ Deploy\ Git/autodeploy.sh

- To explicitly run the watcher in the foreground:

  ./Auto\ Deploy\ Git/autodeploy.sh run

- To explicitly install the systemd service:

  ./Auto\ Deploy\ Git/autodeploy.sh install

- To explicitly uninstall/remove the systemd service:

  ./Auto\ Deploy\ Git/autodeploy.sh uninstall

- To show service status:

  ./Auto\ Deploy\ Git/autodeploy.sh status

Logs

Logs are written to `Logs/watch-deploy.log` at the repository root and are trimmed to the last 200 lines.

Notes

- Ensure `Deployment/deploy.sh` is executable and that git credentials work for non-interactive `git fetch` when run as a service.
- The systemd service file is installed to `/etc/systemd/system/auto-deploy-portfolio.service` and runs the script as the user who installed it.
