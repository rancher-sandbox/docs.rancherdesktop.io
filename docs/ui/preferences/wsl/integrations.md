---
sidebar_label: Integrations
title: Integrations
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/wsl/integrations"/>
</head>

The Integrations tab allows for the option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can communicate with the Rancher Desktop Kubernetes cluster using tools like `kubectl` from within the WSL distribution.

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/preferences/Windows_wsl_tabIntegrations.png)

With WSL, memory and CPU allocation is configured globally across all Linux distributions. Refer to the [WSL documentation] for instructions.

[WSL documentation]:
https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig

:::caution warning: breaking change

:::

Starting with version `1.11.1`, Rancher Desktop no longer supports a symlink from the `~/.kube/config` file to the instance on your Windows filesystem. This is due to the Kubernetes endpoint differing between the Windows host and inside a WSL2 distribution. The application will replace found symlinks with a separate file instead.

If the file inside the distribution is a separate file, or a symlink to any other location, then Rancher Desktop will update that file with the `rancher-desktop` context.

However, if the file is a symlink to the default location on the host, then Rancher Desktop will delete it and create a new file with the cluster configuration that works from inside the distribution.

Consequently, the "Kubernetes context" menu entry for the notification will show (and change) the context for the Win32 side only. The contexts inside distributions will need to be managed manually from a command prompt.
