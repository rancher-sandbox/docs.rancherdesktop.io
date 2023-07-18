---
title: FAQ
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop.

#### **Q: Is Rancher Desktop a desktop version of Rancher?**

**A:** No. Rancher Desktop is not Rancher on the Desktop.

While [Rancher](https://rancher.com/) and [Rancher Desktop](https://rancherdesktop.io/) share the _Rancher_ name, they do different things. But, the two solutions do complement each other:

Rancher is a complete software stack for managing multiple Kubernetes clusters across any infrastructure.

Rancher Desktop provides container management and a Kubernetes instance on the desktop to support local development use cases.

#### **Q: Is there a Kubernetes Cluster Explorer available in Rancher Desktop?**

**A:** Yes, the Rancher Dashboard is included as a feature preview in the release 1.2.1. Invoke the dashboard by clicking on **Dashboard** option in the system tray menu.

Learn more about [Rancher Desktop](https://docs.rancherdesktop.io/).
Learn more about [Rancher](https://rancher.com/why-rancher).

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

**A:** Yes, but they cannot be run at the same time as both Rancher Desktop and Docker Desktop use the same Docker socket (`/var/run/docker.sock`). Be sure to stop one before starting the other.

<!-- #1074
#### **Q: After uninstalling Rancher Desktop I noticed there are still some resources left behind. What are all the things that I need to manually remove and how?**

**A:**
-->

<!-- #640 -->
#### **Q: How can I perform a clean uninstall of Rancher Desktop?**

**A:** First, perform a [Factory Reset](ui/troubleshooting.md#factory-reset), and then uninstall the app. The uninstall process varies based on the operating system. For more information, please refer [here](./getting-started/installation.md).

#### **Q: What support, if any, is available for DNS over VPN on Windows?**

**A:** An alternative DNS resolver for Windows has been implemented to address some of the VPN issues on Windows. It should support DNS lookup over VPN connections. It has to be enabled manually by editing an internal [configuration file](https://github.com/rancher-sandbox/rancher-desktop/issues/1899#issuecomment-1109128277).

#### **Q: What does the "WSL Integration" tab do?**

**A:** This makes the Kubernetes configuration accessible in the displayed WSL distributions so that you can use commands such as `kubectl` to communicate with Kubernetes.

#### **Q: Where can I find detailed logs?**

**A:** Click on the **Troubleshooting** tab, then click on **Show Logs**.

#### **Q: How can I enable the dashboard for the Traefik ingress controller?**

**A:** For security reasons, the Traefik dashboard is not exposed by default. However, it is possible to expose the dashboard in multiple ways. For instance, you can use one of the two approaches shown below.

##### Using `port-forward` to enable dashboard access

```
kubectl port-forward -n kube-system $(kubectl -n kube-system get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000
```

Visit [http://127.0.0.1:9000/dashboard/](http://127.0.0.1:9000/dashboard/) in your browser to view the Traefik dashboard.

##### Using `HelmChartConfig` to enable dashboard access

Copy the instructions below into a file, for example, `expose-traefik.yaml`

```yaml
apiVersion: helm.cattle.io/v1
kind: HelmChartConfig
metadata:
  name: traefik
  namespace: kube-system
spec:
  valuesContent: |-
    dashboard:
      enabled: true
    ports:
      traefik:
        expose: true # Avoid this in production deployments
    logs:
      access:
        enabled: true
```

Run the command

```
kubectl apply -f expose-traefik.yaml
```

Visit [http://127.0.0.1:9000/dashboard/](http://127.0.0.1:9000/dashboard/) in your browser to view the Traefik dashboard.

#### **Q: Can I disable Traefik, and will doing so remove Traefik resources?**

**A:** Yes, you can disable Traefik in order to free up port 80 and 443 for alternate ingress configuration. Disabling Traefik will _not_ delete existing resources. By default, the `Enable Traefik` feature is selected under **Kubernetes Settings**; uncheck this box to disable it.

If you want to delete Traefik resources, click on `Reset Kubernetes` on the **Kubernetes Settings** panel of the UI.

#### **Q: Is there support for internal container port forwarding?**

**A:** Yes, support for this feature is available on all three platforms, Windows, Linux, and macOS, as of [v1.1.0](https://github.com/rancher-sandbox/rancher-desktop/releases/tag/v1.1.0).

#### **Q: Does file sharing work similarly to Docker Desktop? Do I have to do any additional configuration to mount volumes to VMs?**

**A:** Currently, the following directories are shared by default: `/Users/$USER` on macOS, `/home/$USER` on Linux, and `/tmp/rancher-desktop` on both. For Windows, all files are automatically shared via WSL2.

Standard Docker volumes that are not generally accessible from the host computer work out of the box.

To access other directories on Linux/macOS, you will have to perform additional configuration.

If you want to change the behavior of the mounts, that will also require [additional configuration](https://github.com/rancher-sandbox/rancher-desktop/issues/1209#issuecomment-1370181132).

#### **Q: Can containers reach back to host services via `host.docker.internal`?**

**A:** Yes. On Windows, you may need to create a firewall rule to allow communication between the host and the container. You can run below command in a privileged powershell to create the firewall rule.

```
New-NetFirewallRule -DisplayName "WSL" -Direction Inbound -InterfaceAlias "vEthernet (WSL)" -Action Allow
```

<!-- #985 -->
#### **Q: I don't need the Kubernetes cluster deployed by Rancher Desktop; how do I disable it to save resources?**

**A:** Open **Rancher Desktop** settings, click the cog to open **Preferences**, select **Kuberentes**, uncheck `Enable Kubernetes` feature is selected under **Kubernetes Settings**; uncheck this box to disable it.

This will allow you to run just `containerd` or `dockerd` by without allocating resources for Kubernetes.

<!-- #726 -->
#### **Q: What's happening to the Kubernetes Image Manager (kim)?**

**A:** As of version 1.0, Kim is no longer shipped and has been replaced by nerdctl and the Docker CLI.

<!-- #776 -->
#### **Q: Running `brew install rancher` is failing with a `It seems there is already a Binary at '/usr/local/bin/<BINARY>'` error, why?**

**A:** If any of the Rancher Desktop supporting utilities (Helm, kubectl, nerdctl, docker) are already managed by Homebrew, then the installation fails due to how the Homebrew cask formula is defined. Installing using the Mac app will avoid this issue.

#### Q: I installed `nerdctl` through the Arch User Repository, but it doesn't work with Rancher Desktop, why?

**A:** For Rancher Desktop, `nerdctl` must run inside the VM and not on the host. The host version distributed with Rancher Desktop is just a shell wrapper to execute the command inside the VM.

<!-- #1155 -->
#### **Q: The tools on the Support Utilities page (in Rancher Desktop <1.3.0) are not installed and I see an `Insufficient permission to manipulate /usr/local/bin` error, how do I fix it?**

**A:** This occurs when you do not have ownership of `/usr/local/bin`. A long-term solution to improve the handling of permissions is in the works. In the meantime, a temporary workaround is to change ownership of `/usr/local/bin` by running `sudo chown $USER /usr/local/bin`. When you are able to write to the directory, Rancher Desktop should be able to create the symlinks.

From versions 1.3.0 and above, we no longer create symlinks in `/usr/local/bin` but in `~/.rd/bin` and put that directory on the PATH instead, to avoid having to deal with write permissions to `/usr/local/bin` and file conflicts. We strongly recommend you to upgrade to the latest version of Rancher Desktop.

<!-- #981 -->
#### **Q: Is Cygwin compatible with Rancher Desktop?**

**A:** No, but there are plans to add compatibility.

#### **Q: How can I add Rancher Desktop to the startup programs list on Windows?**

**A:** On Windows, you can add a program to startup programs list in a number of ways. For example, you can use the following steps.

1. Press Windows+R to open the Run dialog box.
2. Type `shell:startup` and then hit Enter to open the Startup folder.
3. Copy "Rancher Desktop" shortcut from Desktop and paste in Startup folder.
4. Restart your machine.

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
#### **Q: How can I downgrade Rancher Desktop to a non-current (older) release version**

**A:** We strongly recommend you use the current release version as it has the latest features and bug fixes included. However, if you want to downgrade to an earlier version, please follow the steps below.

1. Perform `Troubleshooting > Factory Reset` from the current installation. Please make sure the `Keep cached Kubernetes images` box is *not* checked in the `Factory Reset` pop up dialog.
2. Uninstall the current version by following [uninstallation instructions](https://docs.rancherdesktop.io/getting-started/installation) for your OS.
3. Install the older version that you need.

#### Q: Rancher Desktop becomes unresponsive after my Windows machine wakes up from hibernation. How can I get my Rancher Desktop session working again with out having to reboot my machine?

**A:** This is because of a WSL [bug](https://github.com/microsoft/WSL/issues/8696) that makes WSL unresponsive after hibernation on some Windows configurations. While the WSL bug itself is not yet resolved, various workarounds discussed on the GitHub issue thread make the problem a bit less frustrating; you can at least avoid a machine restart to get WSL and Rancher Desktop working again. You can follow the below steps.

1. Shutdown WSL via the command `wsl --shutdown`. If the `wsl --shutdown` command is successful then jump to step 3.
2. Stop and Restart the LxssManager service.

<Tabs groupId="mode">
  <TabItem value="Powershell" default>

- Stop the LxssManager service.
```
stop-service lxssmanager
```

- Start the LxssManager service.
```
start-service lxssmanager
```

  </TabItem>
  <TabItem value="GUI">

Open the list of services running on your machine using the command `services.msc`. Locate the lxssmanager service in the list, right-click on it, and select `Stop`, `Start` to stop and start the service.

  </TabItem>
</Tabs>

3. Exit and Restart Rancher Desktop.
