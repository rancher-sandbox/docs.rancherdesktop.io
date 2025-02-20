---
sidebar_label: 故障排除
title: 故障排除
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

### Show Logs

使用此选项打开包含所有 Rancher Desktop 日志文件的文件夹。

#### Enable Debug Mode

启用 debug 级别日志记录。

### Reset Kubernetes

重置 Kubernetes 并删除所有工作负载和配置。在重置之前，用户会看到确认信息以及删除容器镜像的选项。

要重置 Kubernetes：

1. 单击 **Reset Kubernetes**，然后，你会看到一个确认窗口。
1. 可选：选择是否同时删除容器镜像。
1. 单击 **Reset**。Kubernetes 会停止并重新启动。

### Factory Reset

删除集群和所有其他 Rancher Desktop 设置。必须再次执行初始设置流程。

要恢复出厂设置：

1. 单击 **Reset**。然后，你会看到一个确认窗口。
1. 可选：选择是否保留缓存的 Kubernetes 镜像。
1. 单击 **Factory Reset**。Kubernetes 会停止，Rancher Desktop 会关闭。
1. 可选：再次启动 Rancher Desktop。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](rd-versioned-asset://ui-main/Windows_Troubleshooting.png)

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://ui-main/macOS_Troubleshooting.png)

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://ui-main/Linux_Troubleshooting.png)

</TabItem>
</Tabs>
