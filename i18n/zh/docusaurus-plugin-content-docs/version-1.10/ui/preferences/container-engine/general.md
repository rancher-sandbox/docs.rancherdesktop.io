---
sidebar_label: 通用
title: 通用
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

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

[容器运行时]: https://kubernetes.io/docs/setup/production-environment/container-runtimes/

[containerd]: https://containerd.io/

[dockerd (moby)]: https://mobyproject.org/
