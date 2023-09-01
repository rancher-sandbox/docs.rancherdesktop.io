---
sidebar_label: 仿真
title: 仿真（macOS）
---

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_virtualMachine_tabEmulation.png)

### QEMU

[QEMU](https://www.qemu.org/documentation/) 选项默认启用，用于运行来宾操作系统。

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_virtualMachine_tabEmulation_vz.png)

### VZ

:::caution 警告

这是一个**实验性**设置。该设置适用于 macOS 13.3 或更高版本的 ARM 计算机以及 macOS 13.0 或更高版本的 Intel 计算机。

:::

你还可以启用 `VZ` 选项来使用原生 macOS [Virtualization.Framework](https://developer.apple.com/documentation/virtualization) 来运行来宾计算机。

* VZ 选项：
   该子选项允许用户启用 [Rosetta 支持](https://developer.apple.com/documentation/virtualization/running_intel_binaries_in_linux_vms_with_rosetta)。因此用户可以在 Apple 硬件上运行包含 x86_64 指令的应用程序。
