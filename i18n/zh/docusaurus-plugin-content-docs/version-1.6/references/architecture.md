---
title: 架构
---

![Rancher Desktop 架构](/img/how-it-works-rancher-desktop.svg)

Ranche Desktop 是一个基于 Electron 的应用程序，它包装了其他工具，同时还提供了简单的用户体验。在 macOS 和 Linux 上，Rancher Desktop 利用虚拟机运行 containerd 或 dockerd 和 Kubernetes。适用于 Linux v2 的 Windows Subsystem 可用于 Windows 系统。你只需要下载并运行该应用程序即可。