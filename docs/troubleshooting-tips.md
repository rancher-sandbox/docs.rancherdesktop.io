---
title: Troubleshooting Tips
---

This page provides tips to troubleshoot issues you may have with Rancher Desktop.

#### Q: Why do I not see my WSL distro under Rancher Desktop's WSL Integration page?

**A:** You are likely using a WSL 1 distro. Rancher Desktop supports only WSL 2 distros. You can convert your WSL 1 distro into a WSL 2 distro by running the command `wsl --set-version <distro-name> 2`. You can also run the command `wsl --set-default-version 2` to set all the future distributions you might install to use WSL 2.

#### Q: I do not see an entry for Rancher Desktop when running `kubectl config get-contexts`, where is it?

**A:** Rancher Desktop places its configuration in the default location, `~/.kube/config,` and uses that. Your `KUBECONFIG` environment variable may be set to look elsewhere for configuration files.

#### Q: Rancher Desktop is stuck on `Waiting for Kubernetes API`, what do I do?

**A:** The cause is hard to determine without additional information. Navigate to the Troubleshooting tab and use the button to access the logs. Then go to the [Rancher Desktop GitHub] page and file an issue with the logs attached.

[Rancher Desktop Github]:
https://github.com/rancher-sandbox/rancher-desktop/issues

<!-- RD #1262 -->
#### Q: I can no longer run `docker compose` after installing Rancher Desktop and uninstalling Docker Desktop, what happened?

**A:** This was an issue related to earlier versions (prior to 1.1.0) of Rancher Desktop.  Rancher Desktop version 1.1.0 and above comes bundled with `docker-compose` for you, and makes the cli plugins available at `~/.docker/cli-plugins`. We strongly recommend you to be on the latest version of Rancher Desktop.

If you still don't see `docker-compose` available then please file a bug on [Github](https://github.com/rancher-sandbox/rancher-desktop/issues/new?assignees=&labels=kind%2Fbug&template=bug_report.yml).

<!-- #966 -->
#### Q: I'm using Homebrew to install Rancher Desktop, but `brew install rancher-desktop` is failing, why?

**A:** Due to the Homebrew cask naming conventions, the `-desktop` suffix is dropped from the cask formula name. Use `brew install rancher` instead.

<!-- #1156 -->
#### Q: How do I fix `permission denied` errors when trying to use Docker on WSL?

**A:** You need write-permission to access the docker socket. There are many ways to go about that, but this is one of the more common approaches. Using the Ubuntu WSL command-line:

```bash
sudo groupadd docker
sudo adduser $USER docker
sudo chown root:docker /var/run/docker.sock
sudo chmod g+w /var/run/docker.sock
newgrp docker
```

#### Q: How do I fix `kubectl: command not found` issue on Linux?

**A:** By default, Rancher Desktop creates symlinks of `kubectl`, `docker`, `helm` and `nerdctl` binaries in the `/home/<user>/.local/bin` directory on Linux. To be able to call these commands directly from the console you may add the directory to your `PATH` environment variable by executing the following command in console and performing logout and login:

```bash
echo "export PATH=\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc
```
#### Q: How do I fix `FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space` when running a container using `nerdctl run`?

**A:** You will see this error if there's a route rule with an IP address from a conflicting subnet on the Iptables. The conflicting routes could be either from the host network (bridge mode) or the Kubernetes network. A quick workaround to this issue is to shutdown WSL via the command `wsl --shutdown`. 

**:warning: Please note that shutting down WSL will stop all other distros along with the `rancher-desktop` distro.**

#### Q: How do I fix the `Installation Aborted` error while downgrading from an existing MSI installation to an older EXE version (1.6.x or earlier) on Windows?

**A:** You will see this error if the Windows registry key `HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/EventLog/Application/RancherDesktopPrivilegedService` that is supposed to be deleted during the MSI uninstallation process is not deleted for some reason. Please manually delete the registry key and try installing the EXE version. You can run the below command in a privileged shell to delete the registry key.

```
reg.exe delete HKLM\System\CurrentControlSet\Services\EventLog\Application\RancherDesktopPrivilegedService /reg:64
```