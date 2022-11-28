---
sidebar_label: 容器引擎
title: 容器引擎
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

为 Rancher Desktop 设置[容器运行时]。用户可以选择 [containerd] 为容器提供命名空间，也可以使用 nerdctl 或 [dockerd (moby)] 来启用 D​​ocker API 和 Docker CLI。一次只能运行一个容器运行时。

切换到不同的容器运行时：

- 使用现有容器运行时构建或拉取的工作负载和镜像在切换的容器运行时不可用。

[容器运行时]: https://kubernetes.io/docs/setup/production-environment/container-runtimes/

[containerd]: https://containerd.io/

[dockerd (moby)]: https://mobyproject.org/
