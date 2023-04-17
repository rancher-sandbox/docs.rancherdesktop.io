---
sidebar_label: Diagnostics
title: Diagnostics
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

The **Diagnostics** feature runs several checks in the background to detect common problems such as missing minimum requirements, misconfigurations, etc., in your environment to help you self-troubleshoot and fix Rancher Desktop application issues.

**Note:** Rancher Desktop *doesn't* send the diagnostics data to any remote server for processing or storing.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/ui-main/Windows_Diagnostics.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/ui-main/macOS_Diagnostics.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/ui-main/Linux_Diagnostics.png)

</TabItem>
</Tabs>

The diagnostics checks are run every time when the application launches. If there are any problems identified then the count of failed checks is shown next to the *Diagnostics* menu text in the left navigation bar, indicating that something needs your attention. The *Diagnostics* tab displays the results of the diagnostics tests, highlighting areas that need attention, and guides you to resolve problems.

On this tab you can mute/unmute individual checks if you have a non-standard setup and know that these checks don't apply to your situation. You can also rerun the diagnostics anytime to verify that changes you have made to your environment have rectified the problem.
