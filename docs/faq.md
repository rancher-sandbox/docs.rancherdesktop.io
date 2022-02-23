---
title: FAQ
---

This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop.

**Q: Is Rancher Desktop a desktop version of Rancher?**

**A:** No, Rancher Desktop is not [Rancher] on the desktop. Installing Rancher Desktop does not install Rancher, but you can install Rancher as a workload.

Rancher is a unified multi-cluster management stack, whereas Rancher Desktop is similar to applications like [minikube], [kind], or [Docker Desktop], where the goal is to have an easy to set up local Kubernetes environment to manage containers. 

**Q: Can I open Cluster Manager in Rancher Desktop?**

**A:** No, the Cluster Manager feature is currently a Rancher-only concept. We are working on an early integration of the Rancher Dashboard in an upcoming release and will notify the community when this becomes available.  

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
**Q: Can I have Docker Desktop installed alongside Rancher Desktop?**

**A:** Yes, but they cannot be run at the same time as both Rancher Desktop and Docker Desktop use the same Docker socket (`/var/run/docker.sock`). Before starting one, be sure to stop the other first.

<!-- #1074
**Q: After uninstalling Rancher Desktop I noticed there are still some resources left behind. What are all the things that I need to manually remove and how?**

**A:**
-->

<!-- #640 -->
**Q: How can I perform a clean uninstall of Rancher Desktop?**

**A:** First, perform a [Factory Reset](./getting-started/features.md#factory-reset), and then you will uninstall the app. The uninstall process varies based on the operating system. For more information, please refer [here](./getting-started/installation.md).

**Q: What does the "WSL Integration" tab do?**

**A:** This makes the Kubernetes configuration accessible in the displayed WSL distributions so that you can use commands such as `kubectl` to communicate with Kubernetes.

**Q: Where can I find detailed logs?**

**A:** Click on the **Troubleshooting** tab, then click on **Show Logs**.

**Q: I am receiving a startup read permissions error and a `kubeconfig` copy permissions error when I try to launch Rancher Desktop. How can I resolve these?**

**A:** 

<!-- #896 -->
**Q: How can I enable the dashboard for the Traefik ingress controller?**

**A:** The Traefik dashboard is not exposed by default, for security reasons. However, it is possible to expose the dashboard in multiple ways. For instance, using `port-forward` will enable dashboard access:

```
kubectl port-forward -n kube-system $(kubectl -n kube-system get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000
```
Visit [http://127.0.0.1:9000/dashboard/](http://127.0.0.1:9000/dashboard/) in your browser to view the Traefik dashboard.

**Q: Does file sharing work similarly to Docker Desktop? Do I have to do any additional configuration to mount volumes to VMs?**

**A:** Currently, the following directories are shared by default: `/Users/$USER` on macOS, `/home/$USER` on Linux, and `/tmp/rancher-desktop` on both. For Windows, these files are automatically shared via WSL2. We will update the community as additional mounted directories are added.

**Q: I do not see an entry for Rancher Desktop when running `kubectl config get-contexts`, where is it?**

**A:** Rancher Desktop places its configuration in the default location, `~/.kube/config,` and uses that. Your `KUBECONFIG` environment variable may be set to look elsewhere for configuration files.

**Q: Rancher Desktop is stuck on `Waiting for Kubernetes API`, what do I do?**

**A:** The cause is hard to determine without additional information. Navigate to the Troubleshooting tab and use the button to access the logs. Then go to the [Rancher Desktop GitHub] page and file an issue with the logs attached.

[Rancher Desktop Github]:
https://github.com/rancher-sandbox/rancher-desktop/issues

<!-- RD #1262 -->
**Q: I can no longer run `docker compose` after installing Rancher Desktop and uninstalling Docker Desktop, what happened?**

**A:** The `docker compose` subcommand is bundled as part of a Docker Desktop installation and is removed when uninstalled. Future versions of Rancher Desktop will include and automatically `docker compose` for you, but until then you can install it using this procedure:

For MacOS:
```shell
$ cd /tmp
$ mkdir dc-work
$ cd dc-work
$ curl -o docker-compose -kL https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-darwin-x86_64
$ chmod +x docker-compose
$ mkdir -p ~/.docker/cli-plugins/
$ mv docker-compose ~/.docker/cli-plugins/
$ cd ..
$ rmdir dc-work
```

For Linux, and in a Linux subsystem on Windows:
```shell
$ cd /tmp
$ mkdir dc-work
$ cd dc-work
$ curl -o docker-compose -kL https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-linux-x86_64
$ chmod +x docker-compose
$ mkdir -p ~/.docker/cli-plugins/
$ mv docker-compose ~/.docker/cli-plugins/
$ cd ..
$ rmdir dc-work
```

For Windows, in a powershell session:
```shell
$ cd $Env:TEMP # (or $Env:TMP)
$ mkdir dc-work
$ cd dc-work
$ iwr -UseBasicParsing -OutFile docker-compose.exe https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-windows-x86_64.exe 
$ mkdir $ENV:HOMEPATH/.docker/cli-plugins -Force
$ mv docker-compose.exe $ENV:HOMEPATH/.docker/cli-plugins/
$ cd ..
$ rmdir dc-work
```

Also, on Windows, don't forget to also set up `docker-compose` on the Linux side as well, described above.

<!-- #985 -->
**Q: I don't need the Kubernetes cluster deployed by Rancher Desktop, how do I disable it to save resources?**

**A:** As a temporary workaround, you can _disable_ Kubernetes in Rancher Desktop with these commands:

```bash
kubectl config use-context rancher-desktop
kubectl delete node lima-rancher-desktop
```

<!-- #726 -->
**Q: What's happening to the Kubernetes Image Manager (kim)?**

**A:** As of version 1.0 Kim is no longer shipped and has been replaced by nerdctl and the Docker CLI.

<!-- #966 -->
**Q: I'm using Homebrew to install Rancher Desktop, but `brew install rancher-desktop` is failing, why?**

**A:** Due to the Homebrew cask naming conventions, the `-desktop` suffix is dropped from the cask formula name. Use `brew install rancher` instead.

<!-- #776 -->
**Q: Running `brew install rancher` is failing with a `It seems there is already a Binary at '/usr/local/bin/<BINARY>'` error, why?**

**A:** If any of the Rancher Desktop supporting utilities (Helm, kubectl, nerdctl, docker) are already managed by Homebrew, then the installation fails due to how the Homebrew cask formula is defined. Installing using the Mac app will avoid this issue.

<!-- #1155 -->
**Q: The tools on the Support Utilities page are not installed and I see a `Insufficient permission to manipulate /usr/local/bin` error, how do I fix it?**

**A:** This occurs when you do not have ownership of `/usr/local/bin`. A long-term solution to improve the handling of permissions is in the works. In the meantime, a temporary workaround is to change ownership of `/usr/local/bin` by running `sudo chown $USER /usr/local/bin`. When you are able to write to the directory, Rancher Desktop is able to create the symlinks.

<!-- #981 -->
**Q: Is Cygwin compatible with Rancher Desktop?**

**A:** No, but there are plans to add compatibility.

<!-- #1156 -->
**Q: How do I fix `permission denied` errors when trying to use Docker on WSL?**

**A:** You need write-permission to access the docker socket. There are many ways to go about that, but this is one of the more common approaches. Using the Ubuntu WSL command-line:

```bash
sudo groupadd docker
sudo adduser $USER docker
sudo chown root:docker /var/run/docker.sock
sudo chmod g+w /var/run/docker.sock
newgrp docker
```

**Q: How do I fix `kubectl: command not found` issue on Linux?**

**A:** By default, Rancher Desktop creates symlinks of `kubectl`, `docker`, `helm` and `nerdctl` binaries in the `/home/<user>/.local/bin` directory on Linux. To be able to call these commands directly from the console you may add the directory to your `PATH` environment variable by executing the following command in console and performing logout and login:

```bash
echo "export PATH=\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc
```