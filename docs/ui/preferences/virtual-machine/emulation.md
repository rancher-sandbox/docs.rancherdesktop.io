---
sidebar_label: Emulation
title: Emulation (macOS)
---

 ![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabEmulation.png)

### QEMU

The "[QEMU](https://www.qemu.org/documentation/)" option is enabled by default and is used to run a guest operating system.

 ![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabEmulation_vz.png)

### VZ

:::caution warning

This is an **experimental** setting. The setting is available for ARM machines on  macOS 13.3 or later, and Intel machines on macOS 13.0 or later.

:::

The "VZ" option can also be enabled to make use of the native macOS [Virtualization.Framework](https://developer.apple.com/documentation/virtualization) for running a guest machine.

* VZ option:
The suboption allows for users to enable [Rosetta support](https://developer.apple.com/documentation/virtualization/running_intel_binaries_in_linux_vms_with_rosetta). This makes it possible for users to run applications that contain x86_64 instructions on Apple hardware.
