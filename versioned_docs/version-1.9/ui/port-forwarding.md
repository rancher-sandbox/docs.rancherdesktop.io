---
sidebar_label: Port Forwarding
title: Port Forwarding
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/port-forwarding"/>
</head>

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

### How to Forward a Port

The steps below outline how to forward a port:

1. Find the service and click **Forward**.
1. Specify a port to use or use the randomly assigned port.
1. Click the &check; button to confirm your selection.
1. Optional: click **Cancel** to remove the port assigned.

### Admin vs Non-Admin Port Mappings

Rancher Desktop includes automated port forwarding for versions `1.9` and later. For non-admin port access, port mappings are configured to the localhost and unpriviliged ports > 1024. Priviliged port mappings can also be configured by users with admin permissions for ports <= 1024.

:::note

Please see [Traefik Port Binding Access](../getting-started/installation#traefik-port-binding-access) to configure ports at the operating system level.

:::
