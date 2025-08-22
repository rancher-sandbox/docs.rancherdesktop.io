---
sidebar_label: Emulation
title: Emulation (macOS)
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/virtual-machine/emulation"/>
</head>

### VZ

 ![](rd-versioned-asset://preferences/macOS_virtualMachine_tabEmulation_vz.png)

The **VZ** option is enabled by default and uses the native macOS [Virtualization.Framework](https://developer.apple.com/documentation/virtualization) for running a guest machine. You can switch the virtual machine type after the first run.

The suboption **VZ option** can also be enabled if using **VZ** as your virtual machine type. The suboption enables [Rosetta support](https://developer.apple.com/documentation/virtualization/running_intel_binaries_in_linux_vms_with_rosetta) and allows users to run applications that contain x86_64 instructions on Apple hardware.

### QEMU

 ![](rd-versioned-asset://preferences/macOS_virtualMachine_tabEmulation.png)

You can also enable the [**QEMU**](https://www.qemu.org/documentation/) option to use QEMU for running a guest operating system.
