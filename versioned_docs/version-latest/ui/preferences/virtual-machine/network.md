---
sidebar_label: Network
title: Network (macOS)
---

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/virtual-machine/macOS_virtualMachine_tabNetwork.png)

### Enable socket-vmnet

:::caution warning

This is an **experimental** setting.

:::

Network settings can be enabled or disabled from this view. Users have the initial option of enabling `socket-vmnet` which will allow for adding another guest IP that is accessible from the host and other guests. The enabled option also provides [vmnet.framework](https://developer.apple.com/documentation/vmnet) support for QEMU and does not depend on VDE.
