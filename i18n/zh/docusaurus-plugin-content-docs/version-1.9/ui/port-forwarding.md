---
sidebar_label: 端口转发
title: 端口转发
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/ui-main/Windows_PortForwarding.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/ui-main/macOS_PortForwarding.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/ui-main/Linux_PortForwarding.png)

</TabItem>
</Tabs>

### 如何转发端口

以下步骤概述了如何转发端口：

1. 找到 Service 并单击 **Forward**，
1. 指定要使用的端口或使用随机分配的端口。
1. 点击 &check; 按钮来确认你的选择。
1. 可选：单击 **Cancel** 来移除分配的端口。

### Admin 与非 Admin 端口映射

Rancher Desktop `1.9` 及更高版本包括了自动端口转发。对于非 admin 端口访问，端口映射配置为 `> 1024` 的 localhost 和非特权端口。具有 admin 权限的用户也可以为 `<= 1024` 的端口配置特权端口映射。

:::note

请参阅 [Traefik 端口绑定访问](../getting-started/installation#traefik-端口绑定访问)以在操作系统级别配置端口。

:::
