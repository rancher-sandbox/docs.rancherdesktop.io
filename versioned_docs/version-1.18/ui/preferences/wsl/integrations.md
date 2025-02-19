---
sidebar_label: Integrations
title: Integrations
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/wsl/integrations"/>
</head>

The Integrations tab allows for the option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can communicate with the Rancher Desktop Kubernetes cluster using tools like `kubectl` from within the WSL distribution.

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.18/preferences/Windows_wsl_tabIntegrations.png)

With WSL, memory and CPU allocation is configured globally across all Linux distributions. Refer to the [WSL documentation] for instructions.

[WSL documentation]:
https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig

### `~/.kube/config`

Rancher Desktop will create a symlink from `~/.kube/config` inside the distro to the corresponding `%USERPROFILE%\.kube\config` file on the Windows filesystem.

If the `~/.kube/config` file already exists inside the distro and contains only `rancher-desktop` contexts, users, and clusters then it will be deleted and replaced with the symlink.

If it contains any other information then the file will not be modified and the user has to update the Rancher Desktop cluster information manually. In that case the "Kubernetes context" menu entry for the notification icon will show (and change) the context for the Win32 side only. The contexts inside distributions will need to be managed manually from a command prompt.

:::caution info

In Rancher Desktop `1.11.1` and `1.12.*` the `~/.kube/config` file was converted from a symlink into a regular file because the network tunnelling option required a different Kubernetes endpoint inside WSL clusters than on the host.

Rancher Desktop `1.13.0` added a network proxy between the cluster and the other distros, so the endpoint is the same again as on the host. If the `~/.kube/config` file only references the `rancher-desktop` cluster then it will automatically be converted into a symlink again. Otherwise the user need to consolidate the different files manually. 

:::
