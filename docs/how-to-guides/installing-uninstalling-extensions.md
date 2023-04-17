---
title: Installing and Uninstalling Rancher Desktop Extensions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

The **Extensions** feature introduced in the `v1.9.0-tech-preview` release enables you to use **Docker Desktop Extensions** within Rancher Desktop. The feature helps you extend Rancher Desktop's functionality to meet your additional needs. This guide will demonstrate how to install and uninstall Docker extensions in Rancher Desktop.

### Prerequisites

Rancher Desktop Extensions are available as part of release `v1.9.0-tech-preview` or later.

### Installing Extensions

There are two ways in which you can install extensions, a method using the UI and another using the `rdctl extension install` command.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

#### Using the UI

1. Click **Extensions** from the main UI to navigate to the **Catalog** tab. Here you can search through extensions available for use.

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Windows_Extensions.png)

2. When you find an extension you want to use, click on the extension to open the **Detail** view, then click on the **Install** button on the right hand side as seen in the image below. 

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Windows_Extensions-Details.png)

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

1. Click **Extensions** from the main UI to navigate to the **Catalog** tab. Here you can search through extensions available for use.

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/macOS_ExtensionsCatalog.png)

2. When you find an extension you want to use, click on the extension to open the **Detail** view, then click on the **Install** button on the right hand side as seen in the image below. 

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/macOS_ExtensionsDetails.png)

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

1. Click **Extensions** from the main UI to navigate to the **Catalog** tab. Here you can search through extensions available for use.

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Linux_Extensions.png)

2. When you find an extension you want to use, click on the extension to open the **Detail** view, then click on the **Install** button on the right hand side as seen in the image below. 

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Linux_Extensions-Details.png)

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

1. Click **Extensions** from the main UI to navigate to the **Catalog** tab, then click on the **Installed** tab.

2. Once under the **Installed** tab, you can uninstall extensions by clicking on the **Uninstall** button on the right hand side as pictured below.

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Windows_Extensions-Installed.png)

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

1. Click **Extensions** from the main UI to navigate to the **Catalog** tab, then click on the **Installed** tab.

2. Once under the **Installed** tab, you can uninstall extensions by clicking on the **Uninstall** button on the right hand side as pictured below.

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/macOS_ExtensionsInstalled.png)

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

1. Click **Extensions** from the main UI to navigate to the **Catalog** tab, then click on the **Installed** tab.

2. Once under the **Installed** tab, you can uninstall extensions by clicking on the **Uninstall** button on the right hand side as pictured below.

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Linux_Extensions-Installed.png)

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
