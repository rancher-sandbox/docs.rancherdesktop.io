---
sidebar_label: 容器引擎
title: 容器引擎
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

### General

为 Rancher Desktop 设置[容器运行时]。用户可以选择 [containerd] 为容器提供命名空间，也可以使用 nerdctl 或 [dockerd (moby)] 来启用 D​​ocker API 和 Docker CLI。一次只能运行一个容器运行时。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](rd-versioned-asset://preferences/Windows_containerEngine_tabGeneral.png)

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://preferences/macOS_containerEngine_tabGeneral.png)

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://preferences/Linux_containerEngine_tabGeneral.png)

</TabItem>
</Tabs>

#### Container Engine

切换到不同容器运行时的时候：使用当前容器运行时构建或拉取的工作负载和镜像在切换的容器运行时不可用。


### Allowed Images

`Allowed Images` 选项卡用于控制可以在 Rancher Desktop 中访问的镜像仓库工件。例如，你可能只想从组织的私有镜像仓库，或仅从组织镜像仓库中特定部门的命名空间中拉取容器镜像。你可以指定镜像名称模式，从而仅允许访问特定镜像仓库和/或仓库的镜像。

<Tabs groupId="os">
<TabItem value="Windows">

![](rd-versioned-asset://preferences/Windows_containerEngine_tabAllowedImages.png)

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://preferences/macOS_containerEngine_tabAllowedImages.png)

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://preferences/Linux_containerEngine_tabAllowedImages.png)

</TabItem>
</Tabs>

#### Allowed image patterns

选中 **Enable** 复选框，这样，Rancher Desktop 在拉取或推送镜像时将应用指定的模式，这意味着只允许名称至少与指定模式之一匹配的镜像。

你可以使用 **+** 和 **-** 按钮来添加/删除镜像名称模式。

##### 如何指定 Allowed Image Patterns

你可以使用 `[registry/][:port/][organization/]repository[:tag]` 格式来指定 Allowed Image Pattern（允许的镜像模式）。

> 如果未指定 Allowed Image Patterns，
> * `registry` 默认为 Docker Hub (`docker.io`)。
> * `port` 默认为 433。
> * Docker Hub 的 `organization` 默认为 `library`，不适用于其他镜像仓库。
> * `tag` 默认为任何内容，**不**仅仅是 `latest`。

**注意**：按 `tag` 过滤实际上不起作用；相应的摘要 (`repository@digest`) 也必须添加到允许列表中才行，因此不实用。如果你有需要根据标签进行过滤的用例，请提交 Github issue。

#### 示例

| 模式 | 意义 |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `busybox` | 允许 `docker.io` 镜像仓库的 `library` 组织中的 `busybox` 仓库。 |
| `suse/` | 允许 `docker.io` 镜像仓库的 `suse` 组织中的任何镜像。<br/> **注意**：仓库末尾的斜杠表示后面跟着单独的一段，例如 `suse/nginx`，而不是 `suse/cap/uaa`。 |
| `suse//` | 允许 `docker.io` 镜像仓库的 `suse` 组织中的任何镜像。<br/> **注意**：仓库末尾的双斜杠表示后面跟着一个或多个段，例如 `suse/cap/uaa`。 |
| `registry.internal:5000` | 允许来自 `registry.internal:5000` 镜像仓库的任何镜像。 |
| `registry.suse.com/nginx` | 允许来自 `registry.suse.com` 镜像仓库的镜像 `nginx`。<br/> **注意**：DockerHub 之外的镜像仓库没有顶层组织的概念，因此没有默认的 `library` 组织。 |


[容器运行时]: https://kubernetes.io/docs/setup/production-environment/container-runtimes/

[containerd]: https://containerd.io/

[dockerd (moby)]: https://mobyproject.org/
