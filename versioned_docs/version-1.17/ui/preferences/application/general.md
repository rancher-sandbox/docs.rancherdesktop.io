---
sidebar_label: General
title: General
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/application/general"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

Allows for enablement of automatic updates, as well as an optional field to allow Rancher Desktop to collect anonymous statistics to help improve the application.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/Windows_application_tabGeneral.png)

#### Automatic Updates

Ensure you have the setting checked and enabled on the `Preferences > Application > General` tab. You will need to click `Apply` once selected, and then manually restart the application for the settings to update.

If a new release is available, it will be downloaded upon restart and you will see a section denoted `Update Available` from the main [General](../../../ui/general.md) tab with a `Restart` button that can be clicked to have the newest version applied. A copy of the latest version’s release notes will be displayed via dropdown as well.

#### Statistics

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/macOS_application_tabGeneral.png)

#### Administrative Access

Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts.

#### Automatic Updates

Ensure you have the setting checked and enabled on the `Preferences > Application > General` tab. You will need to click `Apply` once selected, and then manually restart the application for the settings to update.

If a new release is available, it will be downloaded upon restart and you will see a section denoted `Update Available` from the main [General](../../../ui/general.md) tab with a `Restart` button that can be clicked to have the newest version applied. A copy of the latest version’s release notes will be displayed via dropdown as well.

#### Statistics

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/Linux_application_tabGeneral.png)

#### Administrative Access

Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts.

#### Automatic Updates

Ensure you have the setting checked and enabled on the `Preferences > Application > General` tab. You will need to click `Apply` once selected, and then manually restart the application for the settings to update.

If a new release is available, it will be downloaded upon restart and you will see a section denoted `Update Available` from the main [General](../../../ui/general.md) tab with a `Restart` button that can be clicked to have the newest version applied. A copy of the latest version’s release notes will be displayed via dropdown as well.

#### Statistics

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

</TabItem>
</Tabs>
