---
sidebar_label: Network
title: Network (macOS)
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/virtual-machine/network"/>
</head>

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/preferences/macOS_virtualMachine_tabNetwork.png)

### Enable `socket-vmnet`

:::caution warning

This is an **experimental** setting.

:::

Network settings can be enabled or disabled from this view. Users have the initial option of enabling `socket-vmnet` which will allow for adding another guest IP that is accessible from the host and other guests. The enabled option also provides [`vmnet` framework](https://developer.apple.com/documentation/vmnet) support for QEMU and does not depend on VDE.

### `vmnet` and `mDNSResponder`

When using the `vmnet` framework with Rancher Desktop, the macOS component [`mDNSResponder`](https://github.com/apple-oss-distributions/mDNSResponder#mdns-responder-daemon) will automatically start and make use of your machine's port `53`. The port is used to get a routable IP address for the virtual machine running the application's container engine.

If you need access to port `53`, or do not wish to make use of routable IP addresses, then you can achieve this by disabling [`Administrative Access`](../../../ui/preferences/application/general.md#administrative-access) from the *Preferences* dialog. Using `vmnet` requires starting a daemon via `sudo`, and with administrative access removed this will free port `53` from the `mDNSResponder` daemon.

:::caution warning
Please note that with `Administrative Access` disabled, Rancher Desktop will no longer be able to create the Docker socket in the default location at `/var/run/docker.sock`. Instead, the application will create a [`docker context`](https://docs.docker.com/engine/context/working-with-contexts/) called `rancher-desktop` and switch to it automatically. Please be aware of this in the event you are running software that expects the default location and may not know about `docker contexts`.
:::
