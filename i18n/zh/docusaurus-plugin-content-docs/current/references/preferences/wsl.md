---
title: 功能
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Preferences

此页面允许你修改 Rancher Desktop 实例的设置。

1. 要访问 **Preferences**，请单击右上角的 &#9881; 图标。
1. 你可以使用左侧的选项卡来访问不同类别的 Rancher Desktop 首选项。
1. 根据需要更新首选项。下方概述了可用的首选项设置。
1. 要应用更新，请单击 **Apply**。

### WSL (Windows)

该选项使 Rancher Desktop Kubernetes 配置能够被任何 WSL 配置的 Linux 发行版所访问。一旦启用，你可以使用 WSL 发行版中的 `kubectl` 等工具与 Rancher Desktop Kubernetes 集群进行通信。

WSL 让你在所有 Linux 发行版中全局配置内存和 CPU 分配。请参阅 [WSL 文档]中的说明。

[WSL 文档]: https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig
