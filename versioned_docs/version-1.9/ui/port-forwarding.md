---
sidebar_label: Port Forwarding
title: Port Forwarding
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/ui-main/Windows_PortForwarding.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/ui-main/macOS_PortForwarding.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/ui-main/Linux_PortForwarding.png)

</TabItem>
</Tabs>

### How to Forward a Port

The steps below outline how to forward a port:

1. Find the service and click **Forward**.
1. Specify a port to use or use the randomly assigned port.
1. Click the &check; button to confirm your selection.
1. Optional: click **Cancel** to remove the port assigned.

### Admin vs Non-Admin Port Mappings

Rancher Desktop includes automated port forwarding for versions `1.9` and later. For a non-admin Rancher Desktop installation, the port mappings are configured to the localhost and ports > 1024. If you have an admin Rancher Desktop installation, then port mappings can be configured for priviliged ports <= 1024 as well.
