---
sidebar_label: 网络
title: 网络（macOS）
---

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabNetwork.png)

### 启用 socket-vmnet

:::caution 警告

这是一个**实验性**设置。

:::

你可以从此视图启用或禁用网络设置。用户可以选择启用 `socket-vmnet`，这将允许添加另一个可从主机和其他来宾访问的来宾 IP。启用的选项还为 QEMU 提供 [vmnet.framework](https://developer.apple.com/documentation/vmnet) 支持，并且不依赖于 VDE。
