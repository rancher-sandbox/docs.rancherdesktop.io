---
sidebar_label: Emulation
title: Emulation (macOS)
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/virtual-machine/emulation"/>
</head>

### QEMU

 ![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_virtualMachine_tabEmulation.png)

The [**QEMU**](https://www.qemu.org/documentation/) option is enabled by default and is used to run a guest operating system. You can switch the virtual machine type after the first run.

### VZ

 ![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_virtualMachine_tabEmulation_vz.png)

:::caution warning

This is an *experimental* setting. The setting is available for ARM machines on  macOS 13.3 or later, and Intel machines on macOS 13.0 or later.

:::

You can also enable the **VZ** option to use the native macOS [Virtualization.Framework](https://developer.apple.com/documentation/virtualization) for running a guest machine.

The suboption **VZ option** can also be enabled if using **VZ** as your virtual machine type. The suboption allows for you to enable [Rosetta support](https://developer.apple.com/documentation/virtualization/running_intel_binaries_in_linux_vms_with_rosetta) and makes it possible for users to run applications that contain x86_64 instructions on Apple hardware.
