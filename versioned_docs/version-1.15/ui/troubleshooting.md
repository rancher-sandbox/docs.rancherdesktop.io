---
sidebar_label: Troubleshooting
title: Troubleshooting
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/troubleshooting"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.15/ui-main/Windows_Troubleshooting.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.15/ui-main/macOS_Troubleshooting.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.15/ui-main/Linux_Troubleshooting.png)

</TabItem>
</Tabs>

### Show Logs

Use this option to open the folder containing all Rancher Desktop log files.

#### Enable Debug Mode

Enable debug level logging.

### Reset Kubernetes

Reset Kubernetes and remove all workloads and configurations. Before the reset occurs, users are presented with a confirmation and the option to also delete container images.

To reset Kubernetes:

1. Click **Reset Kubernetes**. A confirmation window appears.
1. Optional: select whether to also delete container images.
1. Click **Reset** to proceed. Kubernetes stops and starts again.

### Factory Reset

Remove the cluster and all other Rancher Desktop settings. To continue The initial setup procedure must be done again.

To perform a factory reset:

1. Click **Reset**. A confirmation window appears.
1. Optional: select whether cached Kubernetes images are kept.
1. Click **Factory Reset** to proceed. Kubernetes stops and Rancher Desktop closes.
1. Optional: start Rancher Desktop again.

