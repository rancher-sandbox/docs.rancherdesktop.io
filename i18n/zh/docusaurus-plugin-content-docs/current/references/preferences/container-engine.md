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

### Container Runtime

为 Rancher Desktop 设置[容器运行时]。用户可以选择 [containerd] 为容器提供命名空间，也可以使用 nerdctl 或 [dockerd (moby)] 来启用 D​​ocker API 和 Docker CLI。一次只能运行一个容器运行时。

切换到不同的容器运行时：

- 使用现有容器运行时构建或拉取的工作负载和镜像在切换的容器运行时不可用。

[容器运行时]: https://kubernetes.io/docs/setup/production-environment/container-runtimes/

[containerd]: https://containerd.io/

[dockerd (moby)]: https://mobyproject.org/
