---
sidebar_label: 镜像
title: 镜像
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Images** 选项卡允许你管理虚拟机上的镜像。

要改用 nerdctl 管理镜像，请参阅[镜像](../tutorials/working-with-images)。

### Scanning Images

此功能使用 [Trivy] 来扫描你的镜像，从而查找漏洞和配置问题。

要扫描镜像：

1. 从镜像列表中，找到要扫描的镜像。
1. 单击 **⋮ > Scan**。
1. 将显示按严重程度排序的漏洞摘要。
1. 单击 **>** 查看​​每个漏洞的详细信息，其中包括漏洞详情的链接。

[Trivy]: https://github.com/aquasecurity/trivy

### Adding Images

#### Pulling Images

此选项可以让你将镜像从镜像仓库拉取到你的虚拟机中。

要拉取镜像：

1. 单击右上角的 **+** 按钮。
1. 单击 **Pull** 选项卡。
1. 输入要拉取的镜像的名称。
   > 注意：默认情况下，镜像是从 [Docker Hub] 中提取的（格式：`repo/image[:tag]`）。要从其他镜像仓库中拉取，请包含主机名 `registry.example.com/repo/image[:tag]`。
1. 单击 **Pull**。

[Docker Hub]: https://hub.docker.com/

#### Building Images

使用此选项构建镜像并将其添加到你的虚拟机。

要构建镜像：

1. 单击右上角的 **+** 按钮。
1. 单击 **Build** 选项卡。
1. 输入构建的镜像的名称，例如 `repo/image`、`repo/image:tag`、`registry.example.com/repo/image` 或 `registry.example.com/repo/image:tag`。
1. 单击 **Build**。
1. 在文件浏览器中，选择要用来构建镜像的 Dockerfile。
