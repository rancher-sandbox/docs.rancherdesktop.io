---
sidebar_label: Snapshots
title: Snapshots
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/snapshots"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![Snapshots_Example](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/ui-main/Windows_Snapshots-List.png)

</TabItem>
<TabItem value="macOS">

![Snapshots_Example](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/ui-main/macOS_Snapshots-List.png)

</TabItem>
<TabItem value="Linux">

![Snapshots_Example](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/ui-main/Linux_Snapshots-List.png)

</TabItem>
</Tabs>

:::caution warning

This is an **experimental** feature.

:::

A snapshot can be used to store the current configuration of your virtual machine and all associated settings. Snapshots are stored in a `snapshots` directory which are created at the below paths respective to your operating system:

- macOS: `~/Library/Application\ Support/rancher-desktop/snapshots`
- Linux: `~/.local/share/rancher-desktop/snapshots`
- Windows: `%LOCALAPPDATA%\rancher-desktop\snapshots`

The `snapshots` directory may be moved by creating a symlink from your system's default path to your preferred location.

### Snapshot Management

The following actions can be taken on the tab:

- `Create Snapshot`:
  You can choose to create a snapshot through the user interface from the Snapshots tab by clicking the `Create Snapshot` button. This will launch a dialog and provides a note alerting that Rancher Desktop will be unavailable during the creation of a new Snapshot.
  - `Snapshot Name`:
  Text can be entered into this field to name your snapshot.
  - `Description`:
  Text can be entered into the Description field that describes your snapshot.

- `Restore`:
  The `Restore` button can be used to restore a snapshot and will replace your current snapshot installation including preference settings. Rancher Desktop will be unavailable while this process is running.

- `Delete`:
  The `Delete` button can be used to remove snapshots permanently.

### Command Line - `rdctl snapshot`

All commands available through the user interface are also available using the `rdctl snapshot` command. Please see the [reference page](../references/rdctl-command-reference.md) for more information.
