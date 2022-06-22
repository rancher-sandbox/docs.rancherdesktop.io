---
title: Features
---

## General

The **General** tab, provides general information about the project's status as well as links to discuss the project, report issues, or to learn more about the project.

### Check for updates automatically

When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started.

### Allow collection of anonymous statistics to help us improve Rancher Desktop

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

## Kubernetes Settings

On the **Kubernetes Settings** tab, you can manage the settings of your virtual machine.

### Kubernetes Version

This option presents a list of Kubernetes versions that your Rancher Desktop instance can use.

When upgrading:

- A check is performed to see if the target Kubernetes version is available locally. If not, it downloads the files.
- Workloads are retained.
- Images are retained.

When downgrading:

- Workloads are removed.
- Images are retained.

To switch versions:

1. Click the **Kubernetes version** drop-down menu.
1. Select the version you want to change to.
1. On the confirmation window, click **OK** to proceed.

### Enable Kubernetes

This option allows you to enable or disable Kubernetes. By disabling Kubernetes, you can run just `containerd` or `dockerd` by itself for reduced resource consumption. By default, Kubernetes is enabled.

To enable/disable Kubernetes, just check/uncheck the `Enable Kubernetes` checkbox. The app would be restarted when you enable/disable Kubernetes. Disabling Kubernetes will not delete existing resources and they will be available again when you enable Kubernetes back.

### Enable Traefik

This option allows you to enable or disable Traefik. By disabling Traefik, you can free up port 80 and 443 for alternate ingress configuration. By default, Traefik is enabled.

To enable/disable Traefik, just check/uncheck the `Enable Traefik` checkbox. The app needs to be manually restarted when you enable/disable Traefik. This behavior will be changed in an upcoming release, where a prompt will let you restart the app. Disabling Traefik will not delete existing resources.

### Container Runtime

Set the [container runtime] for Rancher Desktop. Users have the option of [containerd] which provides namespaces for containers and the use of nerdctl or [dockerd (moby)] which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time.

When switching to a different container runtime:

- A restart of Kubernetes is required.
- Workloads and images that have been built or pulled using the existing container runtime are not available on the container runtime being switched to.

[container runtime]:
https://kubernetes.io/docs/setup/production-environment/container-runtimes/

[containerd]:
https://containerd.io/

[dockerd (moby)]:
https://mobyproject.org/

### Memory (macOS & Linux)

The amount of memory to allocate to Rancher Desktop. The selectable range is based on your system. The red area within the range indicates an allocation that may affect system services.

This option is not available for Rancher Desktop on Windows. With WSL, memory allocation is configured globally across all Linux distributions. Refer to the [WSL documentation] for instructions.

[WSL documentation]:
https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig

### CPUs (macOS & Linux)

The number of CPUs to allocate to Rancher Desktop. The selectable range is based on your system. The red area within the range indicates an allocation that may affect system services.

This option is not available for Rancher Desktop on Windows. With WSL, CPU allocation is configured globally across all Linux distributions. Refer to the [WSL documentation] for instructions.

[WSL documentation]:
https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig

### Port

Set the port Kubernetes is exposed on. Use this setting to avoid port collisions if multiple instances of K3s are running.

### Reset Kubernetes/Reset Kubernetes and Container Images

This option removes all workloads and Kubernetes configurations.
Images that have been pulled are not removed when a reset occurs.
1. On the confirmation window, click **OK** to proceed.

At this point, Kubernetes is stopped then workloads and configurations are removed. Kubernetes is then be started again.

### Working with Kubernetes Clusters

**Launching a Kubernetes cluster:**

1. Launch Rancher Desktop app.

1. Click on **Kubernetes Settings**, and then select your desired **Kubernetes version**.

1. Choose either **containerd** or **dockerd** for your container runtime.

![](/img/kubernetes-settings-main-page.png)

Note the progress bar at the bottom-left of the app indicating Kubernetes download progress and API setup. Once that bar has completed initializing, your cluster is fully up.

![](/img/kubernetes-cluster-progress.png)

**Stopping a Kubernetes cluster:**

You may stop the Kubernetes cluster by quitting Rancher Desktop. You can close Rancher Desktop by right-clicking on tray icon at the bottom of the screen, or by selecting **File** > **Exit**.

**Resetting a Kubernetes cluster:**

Refer [here](#reset-kubernetesreset-kubernetes-and-container-images) to learn about resetting the Kubernetes cluster. Note that resetting will delete all workloads and configuration.

![](/img/reset-kubernetes.png)

## WSL Integration (Windows)

The **WSL Integration** tab gives the option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can use communicate with the Rancher Desktop Kubernetes cluster using tools like `kubectl` from within the WSL distribution.

## Port Forwarding (Windows)

To forward a port:

1. Find the service and click **Forward**. A random port is assigned.
1. Optional: click **Cancel** to remove the port assigned.

## Supporting Utilities (macOS & Linux)

A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are `docker`, `nerdctl`, `kubectl`, and `helm`. These utilities are located in `~/.rd/bin` - you may see which utilities are included in your installation by running `ls ~/.rd/bin`.

In order to use the utilities, `~/.rd/bin` must be in the `PATH` variable in your shell. On the **Application Settings** tab there are two options for doing this: **Automatic** or **Manual**. **Automatic** `PATH` management will add `~/.rd/bin` to your `PATH` by modifying your shell .rc files for you. **Manual** `PATH` management does not change anything - in this mode you must add `~/.rd/bin` to your `PATH` yourself.

## Images

The **Images** tab, allows you to manage the images on your virtual machine.

To manage your images using nerdctl instead, refer to the [Images](../tutorials/working-with-images.md) section.

### Scanning Images

This feature uses [Trivy] to scan your images for vulnerabilities and configuration issues.

To scan an image:

1. From the image list, find the image you want to scan.
1. Click **⋮ > Scan**.
1. Review the results then click **Close Output to Continue**.

[Trivy]:
https://github.com/aquasecurity/trivy

### Adding Images

#### Pulling Images

Use this option to pull images from a registry to your virtual machine.

To pull an image:

1. Click the **+** button in the top-right corner.
1. Click on the **Pull** tab.
1. Enter the name of the image to pull.
    > Note: By default, images are pulled from [Docker Hub] in which use the `repo/image[:tag]` format. To pull from other registries, include the hostname `registry.example.com/repo/image[:tag]`.
1. Click **Pull**.

[Docker Hub]:
https://hub.docker.com/

#### Building Images

Use this option to build an image and add it to your virtual machine.

To build an image:

1. Click the **+** button in the top-right corner.
1. Click on the **Build** tab.
1. Enter a name for the image being built. E.g., `repo/image`, `repo/image:tag`, `registry.example.com/repo/image`, or `registry.example.com/repo/image:tag`.
1. Click **Build**.
1. In the file browser, select the Dockerfile to build an image with.

## Troubleshooting

### Show Logs

Use this option to open the folder containing all Rancher Desktop log files.

### Factory Reset

Remove the cluster and all other Rancher Desktop settings. The initial setup procedure must be done again.

To perform a factory reset:

1. Click **Reset**.
1. On the confirmation window, click **OK** to proceed. Kubernetes stops and Rancher Desktop closes.
1. Start Rancher Desktop again.
