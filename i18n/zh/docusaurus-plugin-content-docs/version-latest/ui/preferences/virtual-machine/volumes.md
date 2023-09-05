---
sidebar_label: 卷
title: 卷（macOS 和 Linux）
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

## Mount Type

### reverse-sshfs

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabVolumes.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_virtualMachine_tabVolumes.png)

</TabItem>
</Tabs>

你可以从 `Volumes` 选项卡启用 [reverse-sshfs](https://github.com/lima-vm/lima/blob/master/docs/mount.md#reverse-sshfs) 挂载类型。这会通过在主机上运行 SFTP 服务器来公开文件系统。然后，主机实例将启动与来宾的 SSH 连接来允许其连接到 SFTP 服务器。这是应用程序中使用的默认挂载类型。

### 9p

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabVolumes_9P.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_virtualMachine_tabVolumes_9P.png)

</TabItem>
</Tabs>

:::caution 警告

这是一个**实验性**设置。

:::

你可以从 `Volumes` 选项卡启用 [9p](https://www.kernel.org/doc/Documentation/filesystems/9p.txt) 挂载类型。这将通过使用 QEMU 的 `virtio-9p-pci` 设备来公开文件系统。

* Cache Mode：
   指定默认设置为 `mmap` 的缓存策略。缓存选项为 `[none、loose、fscache、mmap]`。

* Memory Size In KiB:
   用户可以指定 `9p` 数据包大小的字节数。最小值为 4 KiB，默认值为 128 KiB。

* Protocol Version：
   用户可以选择 `9p` 协议版本。选项包括 `[9p2000, 9p2000.u, 9p2000.L]`，默认协议为 `9p200.L`。

* Security Model：
   用户可以选择受支持的安全模型，选项包括 `[passthrough、mapped-xattr、mapped-file、none]`。默认安全设置值为 `none`。

### virtiofs

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabVolumes_virtiofs.png)

</TabItem>
</Tabs>

:::caution 警告

这是一个**实验性**设置。

:::

你可以从 `Volumes` 选项卡启用 [virtiofs](https://virtio-fs.gitlab.io/) 挂载类型。这是使用 Apple `Virtualization.Framework` 共享目录设备实现的。
