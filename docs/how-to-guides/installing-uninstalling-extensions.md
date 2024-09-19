---
title: Installing and Uninstalling Rancher Desktop Extensions
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/installing-uninstalling-extensions"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

The **Extensions** feature introduced in the `v1.9.0-tech-preview` release enables you to use **Docker Desktop Extensions** within Rancher Desktop. The feature helps you extend Rancher Desktop's functionality to meet your additional needs. This guide will demonstrate how to install and uninstall Docker extensions in Rancher Desktop.

### Prerequisites

Rancher Desktop Extensions are available as part of release `v1.9.0-tech-preview` or later.

### Installing Extensions

There are two ways in which you can install extensions, a method using the UI and another using the `rdctl extension install` command.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

#### Using the UI

Click **Extensions** from the main UI to navigate to the **Catalog** tab. Here you can search through extensions available for use which can be downloaded and installed using the **Install** button.

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.16/ui-main/Windows_Extensions.png) 

#### Using the Command Line

We have also extended the `rdctl` command line in the `v1.9.0-tech-preview` release to install extensions. Please use the command below to install extensions:

:::note

The use of the `<tag>` parameter is optional.

:::

```
rdctl extension install <image-id>:<tag>
```

</TabItem>
<TabItem value="macOS">

#### Using the UI

Click **Extensions** from the main UI to navigate to the **Catalog** tab. Here you can search through extensions available for use which can be downloaded and installed using the **Install** button.

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.16/ui-main/macOS_Extensions.png)

#### Using the Command Line

We have also extended the `rdctl` command line in the `v1.9.0-tech-preview` release to install extensions. Please use the command below to install extensions:

:::note

The use of the `<tag>` parameter is optional.

:::

```
rdctl extension install <image-id>:<tag>
```

</TabItem>
<TabItem value="Linux">

#### Using the UI

Click **Extensions** from the main UI to navigate to the **Catalog** tab. Here you can search through extensions available for use which can be downloaded and installed using the **Install** button.

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.16/ui-main/Linux_Extensions.png)

#### Using the Command Line

We have also extended the `rdctl` command line in the `v1.9.0-tech-preview` release to install extensions. Please use the command below to install extensions:

:::note

The use of the `<tag>` parameter is optional.

:::

```
rdctl extension install <image-id>:<tag>
```

</TabItem>
</Tabs>

### Uninstalling Extensions

Additionally, there are two ways in which you can uninstall extensions, a method using the UI and another using the `rdctl extension uninstall` command.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

#### Using the UI

Click **Extensions** from the main UI to navigate to the **Catalog** tab. On this view, you can search through the available extensions, and uninstall the already installed extensions. Extensions can also be uninstalled from the **Installed** tab by clicking the **Remove** button.

<Tabs>
<TabItem value="Catalog">

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.16/ui-main/Windows_Extensions.png)

</TabItem>
<TabItem value="Installed">

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.16/ui-main/Windows_Extensions-Installed.png)

</TabItem>
</Tabs>

#### Using the Command Line

We have also extended the `rdctl` command line in the `v1.9.0-tech-preview` release to uninstall extensions. Please use the command below to uninstall extensions:

:::note

The use of the `<tag>` parameter is optional.

:::

```
rdctl extension uninstall <image-id>:<tag>
```

</TabItem>
<TabItem value="macOS">

#### Using the UI

Click **Extensions** from the main UI to navigate to the **Catalog** tab. On this view, you can search through the available extensions, and uninstall the already installed extensions. Extensions can also be uninstalled from the **Installed** tab by clicking the **Remove** button.

<Tabs>
<TabItem value="Catalog">

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.16/ui-main/macOS_Extensions.png)

</TabItem>
<TabItem value="Installed">

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.16/ui-main/macOS_Extensions-Installed.png)

</TabItem>
</Tabs>

#### Using the Command Line

We have also extended the `rdctl` command line in the `v1.9.0-tech-preview` release to uninstall extensions. Please use the command below to uninstall extensions:

:::note

The use of the `<tag>` parameter is optional.

:::

```
rdctl extension uninstall <image-id>:<tag>
```

</TabItem>
<TabItem value="Linux">

#### Using the UI

Click **Extensions** from the main UI to navigate to the **Catalog** tab. On this view, you can search through the available extensions, and uninstall the already installed extensions. Extensions can also be uninstalled from the **Installed** tab by clicking the **Remove** button.

<Tabs>
<TabItem value="Catalog">

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.16/ui-main/Linux_Extensions.png)

</TabItem>
<TabItem value="Installed">

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.16/ui-main/Linux_Extensions-Installed.png)

</TabItem>
</Tabs>

#### Using the Command Line

We have also extended the `rdctl` command line in the `v1.9.0-tech-preview` release to uninstall extensions. Please use the command below to uninstall extensions:

:::note

The use of the `<tag>` parameter is optional.

:::

```
rdctl extension uninstall <image-id>:<tag>
```

</TabItem>
</Tabs>
