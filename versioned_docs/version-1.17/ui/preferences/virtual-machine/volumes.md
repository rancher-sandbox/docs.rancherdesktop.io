---
sidebar_label: Volumes
title: Volumes (macOS & Linux)
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/virtual-machine/volumes"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

## Mount Type

### reverse-sshfs

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/macOS_virtualMachine_tabVolumes.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/Linux_virtualMachine_tabVolumes.png)

</TabItem>
</Tabs>

Users can enable the "[reverse-sshfs](https://github.com/lima-vm/lima/blob/master/docs/mount.md#reverse-sshfs)" mount type from the `Volumes` tab. This exposes the filesystem by running an SFTP server on the host. The host instance will then intitiate an SSH connection into the guest allowing it to connect to the SFTP server. This is the default mount type used in the application.

### 9p

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/macOS_virtualMachine_tabVolumes_9P.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/Linux_virtualMachine_tabVolumes_9P.png)

</TabItem>
</Tabs>

:::caution warning

This is an **experimental** setting.

:::

Users can enable the "[9p](https://www.kernel.org/doc/Documentation/filesystems/9p.txt)" mount type from the `Volumes` tab. This will expose the filesystem by using QEMU's `virtio-9p-pci` devices.

* Cache Mode:
Specifies a caching policy that has a default setting as `mmap`. The caching options are `[none, loose, fscache, mmap]`.

* Memory Size In KiB:
Users can specify the number of bytes to use for the "9p" packet size. The minimum value is 4 KiB and the default size is 128 KiB.

* Protocol Version:
Users can select the "9p" protocol version. The options include `[9p2000, 9p2000.u, 9p2000.L]` and the default protocol setting is `9p200.L`.

* Security Model:
Users can select a supported security model with options being `[passthrough, mapped-xattr, mapped-file, none]`. The default security setting value is `none`.

### virtiofs

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/macOS_virtualMachine_tabVolumes.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/Linux_virtualMachine_tabVolumes.png)

</TabItem>
</Tabs>

:::caution warning

This is an **experimental** setting.

:::

Users can enable the [`virtiofs`](https://virtio-fs.gitlab.io/) mount type from the `Volumes` tab. This is implemented using the Apple `Virtualization.Framework` shared directory device.
