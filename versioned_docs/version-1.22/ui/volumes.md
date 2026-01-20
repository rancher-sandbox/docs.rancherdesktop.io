---
sidebar_label: Volumes
title: Volumes
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/volumes"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![Volumes_Example](rd-versioned-asset://ui-main/Windows_Volumes.png)

</TabItem>
<TabItem value="macOS">

![Volumes_Example](rd-versioned-asset://ui-main/macOS_Volumes.png)

</TabItem>
<TabItem value="Linux">

![Volumes_Example](rd-versioned-asset://ui-main/Linux_Volumes.png)

</TabItem>
</Tabs>

:::caution warning

This is an **experimental** feature.

:::

The **Volumes** tab offers quick access to manage volumes and view key information such as:

- `Volume Name`:
  The volume name.
- `Driver`:
  The volume driver.
- `Mount Point`:
  The filesystem location where the volume is located inside the VM.
- `Created`:
  The date and time the volume was created.

The information is updated automatically as volumes are created or deleted.

The listed information can be sorted in ascending or descending order. Volumes can also be filtered with input text in the `Filter` field located at the top right. Bulk selection is available for managing multiple volumes at once.

Additionally, when using the `containerd` engine, you can use the `Namespace` dropdown selector to help with filtering volumes. The dropdown will be located next to the `Filter` field and shows namespaces in your cluster when clicked.

### Volume Management

The **Delete** button located at the top of the page will be enabled when at least one volume has been selected.

This `delete` action is also available via the `⋮` button at the right side of each volume entry.
