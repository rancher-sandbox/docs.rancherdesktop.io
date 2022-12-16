---
sidebar_label: Kubernetes
title: Kubernetes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Enable Kubernetes

此选项允许你启用或禁用 Kubernetes。禁用 Kubernetes 后，你可以只运行 `containerd` 或 `dockerd` 来减少资源消耗。默认情况下，Kubernetes 是启用的。

要启用/禁用 Kubernetes，只需选中/取消选中 `Enable Kubernetes` 复选框。启用/禁用 Kubernetes 时，该应用程序将重新启动。禁用 Kubernetes 不会删除现有资源，重新启用 Kubernetes 时，你可以再次使用这些资源。

### Kubernetes Version

该选项显示了 Rancher Desktop 实例可以使用的 Kubernetes 版本列表。

升级时：

- 会进行检查，看目标 Kubernetes 版本是否可以在本地使用。如果没有，它会下载对应文件。
- 保留工作负载。
- 保留镜像。

降级时：

- 移除工作负载。
- 保留镜像。

要切换版本：

1. 点击 **Kubernetes version** 下拉菜单。
1. 选择要转换的版本。

### Kubernetes Port

设置 Kubernetes 暴露的端口。如果有多个 K3s 实例正在运行，使用此设置可以避免端口冲突。

### Enable Traefik

此选项允许你启用或禁用 Traefik。禁用 Traefik 后，你可以释放端口 80 和 443，以便将其用于备用 ingress 配置。默认情况下，Traefik 是启用的。

禁用 Traefik 不会删除现有资源。