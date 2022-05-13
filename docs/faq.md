---
title: FAQ
---

This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop.

#### **Q: Is Rancher Desktop a desktop version of Rancher?**

**A:** While [Rancher](https://rancher.com/) and [Rancher Desktop](https://rancherdesktop.io/) share the _Rancher_ name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other.

#### **Q: Is there a Kubernetes Cluster Explorer available in Rancher Desktop?**

**A:** Yes, the Rancher Dashboard is included as a feature preview in the release 1.2.1. Invoke the dashboard by clicking on **Dashboard** option in the system tray menu. 

To learn more about Rancher Desktop, click [here](https://docs.rancherdesktop.io/).
To learn more about Rancher, click [here](https://rancher.com/why-rancher).

[Rancher]:
https://rancher.com/

[minikube]:
https://minikube.sigs.k8s.io/docs/

[kind]:
https://kind.sigs.k8s.io/docs/user/quick-start/

[Docker Desktop]:
https://docs.docker.com/desktop/

<!-- #1221 -->
#### **Q: Can I have Docker Desktop installed alongside Rancher Desktop?**

**A:** Yes, but they cannot be run at the same time as both Rancher Desktop and Docker Desktop use the same Docker socket (`/var/run/docker.sock`). Before starting one, be sure to stop the other first.

<!-- #1074
#### **Q: After uninstalling Rancher Desktop I noticed there are still some resources left behind. What are all the things that I need to manually remove and how?**

**A:**
-->

<!-- #640 -->
#### **Q: How can I perform a clean uninstall of Rancher Desktop?**

**A:** First, perform a [Factory Reset](./getting-started/features.md#factory-reset), and then you will uninstall the app. The uninstall process varies based on the operating system. For more information, please refer [here](./getting-started/installation.md).

#### **Q: What support, if any, is available for DNS over VPN on Windows?**

**A:** An alternative DNS resolver for Windows has been implemented to address some of the VPN issues on Windows. It should support DNS lookup over VPN connections. It has to be enabled manually by editing an internal [configuration file](https://github.com/rancher-sandbox/rancher-desktop/issues/1899#issuecomment-1109128277).

#### **Q: What does the "WSL Integration" tab do?**

**A:** This makes the Kubernetes configuration accessible in the displayed WSL distributions so that you can use commands such as `kubectl` to communicate with Kubernetes.

#### **Q: Why do I not see my WSL distro under Rancher Desktop's WSL Integration page?**

**A:** You are likely using a WSL 1 distro. Rancher Desktop supports only WSL 2 distros. You can convert your WSL 1 distro into a WSL 2 distro by running the command `wsl --set-version <distro-name> 2`. You can also run the command `wsl --set-default-version 2` to set all the future distributions you might install to use WSL 2.

#### **Q: Where can I find detailed logs?**

**A:** Click on the **Troubleshooting** tab, then click on **Show Logs**.

#### **Q: How can I enable the dashboard for the Traefik ingress controller?**

**A:** The Traefik dashboard is not exposed by default, for security reasons. However, it is possible to expose the dashboard in multiple ways. For instance, using `port-forward` will enable dashboard access:

```
kubectl port-forward -n kube-system $(kubectl -n kube-system get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000
```
Visit [http://127.0.0.1:9000/dashboard/](http://127.0.0.1:9000/dashboard/) in your browser to view the Traefik dashboard.

#### **Q: How can I disable Traefik, and will doing so remove Traefik resources?**

**A:** Yes, you can disable Traefik in order to free up port 80 and 443 for alternate ingress configuration. Disabling Traefik will _not_ delete existing resources. By default, the `Enable Traefik` feature is selected under **Kubernetes Settings**; uncheck this box to disable it.

If you want to delete Traefik resources, click on `Reset Kubernetes` on the **Kubernetes Settings** panel of the UI.

#### **Q: Is there support for internal container port forwarding?**

**A:** Yes, support has been enabled again for this feature on Linux and macOS.

#### **Q: Does file sharing work similarly to Docker Desktop? Do I have to do any additional configuration to mount volumes to VMs?**

**A:** Currently, the following directories are shared by default: `/Users/$USER` on macOS, `/home/$USER` on Linux, and `/tmp/rancher-desktop` on both. For Windows, all files are automatically shared via WSL2. 

#### **Q: I do not see an entry for Rancher Desktop when running `kubectl config get-contexts`, where is it?**

**A:** Rancher Desktop places its configuration in the default location, `~/.kube/config,` and uses that. Your `KUBECONFIG` environment variable may be set to look elsewhere for configuration files.

#### **Q: Can containers reach back to host services via `host.docker.internal`?**

**A:** Yes. On Windows, you may need to create a firewall rule to allow communication between the host and the container. You can run below command in a privileged powershell to create the firewall rule.

```
New-NetFirewallRule -DisplayName "WSL" -Direction Inbound -InterfaceAlias "vEthernet (WSL)" -Action Allow
```

#### **Q: Rancher Desktop is stuck on `Waiting for Kubernetes API`, what do I do?**

**A:** The cause is hard to determine without additional information. Navigate to the Troubleshooting tab and use the button to access the logs. Then go to the [Rancher Desktop GitHub] page and file an issue with the logs attached.

[Rancher Desktop Github]:
https://github.com/rancher-sandbox/rancher-desktop/issues

<!-- RD #1262 -->
#### **Q: I can no longer run `docker compose` after installing Rancher Desktop and uninstalling Docker Desktop, what happened?**

**A:** This was an issue related to earlier versions (prior to 1.1.0) of Rancher Desktop.  Rancher Desktop version 1.1.0 and above comes bundled with `docker-compose` for you, and makes the cli plugins available at `~/.docker/cli-plugins`. We strongly recommend you to be on the latest version of Rancher Desktop.

If you still don't see `docker-compose` available then please file a bug on [Github](https://github.com/rancher-sandbox/rancher-desktop/issues/new?assignees=&labels=kind%2Fbug&template=bug_report.yml).

<!-- #985 -->
#### **Q: I don't need the Kubernetes cluster deployed by Rancher Desktop; how do I disable it to save resources?**

**A:** Kubernetes can be disabled to run just `containerd` or `dockerd` by itself for reduced resource consumption. By default, the `Enable Kubernetes` feature is selected under **Kubernetes Settings**; uncheck this box to disable it.

<!-- #726 -->
#### **Q: What's happening to the Kubernetes Image Manager (kim)?**

**A:** As of version 1.0 Kim is no longer shipped and has been replaced by nerdctl and the Docker CLI.

<!-- #966 -->
#### **Q: I'm using Homebrew to install Rancher Desktop, but `brew install rancher-desktop` is failing, why?**

**A:** Due to the Homebrew cask naming conventions, the `-desktop` suffix is dropped from the cask formula name. Use `brew install rancher` instead.

<!-- #776 -->
#### **Q: Running `brew install rancher` is failing with a `It seems there is already a Binary at '/usr/local/bin/<BINARY>'` error, why?**

**A:** If any of the Rancher Desktop supporting utilities (Helm, kubectl, nerdctl, docker) are already managed by Homebrew, then the installation fails due to how the Homebrew cask formula is defined. Installing using the Mac app will avoid this issue.

<!-- #1155 -->
#### **Q: The tools on the Support Utilities page are not installed and I see a `Insufficient permission to manipulate /usr/local/bin` error, how do I fix it?**

**A:** This occurs when you do not have ownership of `/usr/local/bin`. A long-term solution to improve the handling of permissions is in the works. In the meantime, a temporary workaround is to change ownership of `/usr/local/bin` by running `sudo chown $USER /usr/local/bin`. When you are able to write to the directory, Rancher Desktop is able to create the symlinks.

From versions 1.3.0 and above, we no longer create symlinks in /usr/local/bin but in ~/.rd/bin and put that directory on the PATH instead, to avoid having to deal with write permissions to /usr/local/bin and file conflicts. We strongly recommend you to upgrade to the latest version of Rancher Desktop.

<!-- #981 -->
#### **Q: Is Cygwin compatible with Rancher Desktop?**

**A:** No, but there are plans to add compatibility.

<!-- #1156 -->
#### **Q: How do I fix `permission denied` errors when trying to use Docker on WSL?**

**A:** You need write-permission to access the docker socket. There are many ways to go about that, but this is one of the more common approaches. Using the Ubuntu WSL command-line:

```bash
sudo groupadd docker
sudo adduser $USER docker
sudo chown root:docker /var/run/docker.sock
sudo chmod g+w /var/run/docker.sock
newgrp docker
```

#### **Q: How do I fix `kubectl: command not found` issue on Linux?**

**A:** By default, Rancher Desktop creates symlinks of `kubectl`, `docker`, `helm` and `nerdctl` binaries in the `/home/<user>/.local/bin` directory on Linux. To be able to call these commands directly from the console you may add the directory to your `PATH` environment variable by executing the following command in console and performing logout and login:

```bash
echo "export PATH=\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc
```

#### **Q: How can I add Rancher Desktop to the startup programs list on Windows?**

**A:** On Windows, you can add a program to startup programs list in different ways. For example, you can use below steps.

```
- Press Windows+R to open the Run dialog box.
- Type `shell:startup` and then hit Enter to open the Startup folder.
- Copy "Rancher Desktop" shortcut from Desktop and paste in Startup folder.
- Restart your machine.
```
#### **Q: Where does Rancher Desktop actually put the data volumes?**

**A:** 

**Windows:**
Open Run menu (Press Windows + R) and open the path provided below, depending on the active container runtime.
```
dockerd(moby): \\wsl$\rancher-desktop-data\var\lib\docker\volumes
containerd: \\wsl$\rancher-desktop-data\var\lib\nerdctl\dbb19c5e\volumes\<namespace>
```
**macOS & Linux:**
Navigate to the path provided below in the (lima) VM, depending on the active container runtime. You can use `rdctl shell` to access these paths in the VM.
```
dockerd(moby): /var/lib/docker/volumes
containerd: /var/lib/nerdctl/dbb19c5e/volumes/<namespace>
```
