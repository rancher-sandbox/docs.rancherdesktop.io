---
title: 安装和卸载 Rancher Desktop 扩展
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

`v1.9.0-tech-preview` 版本引入了 **Extension** 功能，让你能够在 Rancher Desktop 中使用 **Docker Desktop 扩展**。有了该功能，你可以通过扩展 Rancher Desktop 的功能来满足额外的需求。本指南将演示如何在 Rancher Desktop 中安装和卸载 Docker 扩展。

### 前提

Rancher Desktop 扩展在 `v1.9.0-tech-preview` 或更高版本中提供。

### 安装扩展

你可以通过两种方式安装扩展：使用 UI 或使用 `rdctl extension install` 命令。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

#### 使用 UI

1. 单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡。你可以在此处搜索可用的扩展。

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Windows_Extensions.png)

2. 找到要使用的扩展程序，单击该扩展打开 **Detail** 视图，然后单击右侧的 **Install** 按钮，如下所示。

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Windows_Extensions-Details.png)

#### 使用命令行

`v1.9.0-tech-preview` 版本还扩展了 `rdctl` 命令行，你可以使用命令来安装扩展。请使用以下命令安装扩展：

:::note

`<tag>` 参数是可选的。

:::

```
rdctl extension install <image-id>:<tag>
```

</TabItem>
<TabItem value="macOS">

#### 使用 UI

1. 单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡。你可以在此处搜索可用的扩展。

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/macOS_ExtensionsCatalog.png)

2. 找到要使用的扩展程序，单击该扩展打开 **Detail** 视图，然后单击右侧的 **Install** 按钮，如下所示。

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/macOS_ExtensionsDetails.png)

#### 使用命令行

`v1.9.0-tech-preview` 版本还扩展了 `rdctl` 命令行，你可以使用命令来安装扩展。请使用以下命令安装扩展：

:::note

`<tag>` 参数是可选的。

:::

```
rdctl extension install <image-id>:<tag>
```

</TabItem>
<TabItem value="Linux">

#### 使用 UI

1. 单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡。你可以在此处搜索可用的扩展。

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Linux_Extensions.png)

2. 找到要使用的扩展程序，单击该扩展打开 **Detail** 视图，然后单击右侧的 **Install** 按钮，如下所示。

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Linux_Extensions-Details.png)

#### 使用命令行

`v1.9.0-tech-preview` 版本还扩展了 `rdctl` 命令行，你可以使用命令来安装扩展。请使用以下命令安装扩展：

:::note

`<tag>` 参数是可选的。

:::

```
rdctl extension install <image-id>:<tag>
```

</TabItem>
</Tabs>

### 卸载扩展

你可以通过两种方式卸载扩展：使用 UI 或使用 `rdctl extension uninstall` 命令。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

#### 使用 UI

1. 单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡，然后单击 **Installed** 选项卡。

2. 在 **Installed** 选项卡下，单击右侧的 **Uninstall** 按钮来卸载扩展，如下图所示。

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Windows_Extensions-Installed.png)

#### 使用命令行

`v1.9.0-tech-preview` 版本还扩展了 `rdctl` 命令行，你可以使用命令来卸载扩展。请使用以下命令卸载扩展：

:::note

`<tag>` 参数是可选的。

:::

```
rdctl extension uninstall <image-id>:<tag>
```

</TabItem>
<TabItem value="macOS">

#### 使用 UI

1. 单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡，然后单击 **Installed** 选项卡。

2. 在 **Installed** 选项卡下，单击右侧的 **Uninstall** 按钮来卸载扩展，如下图所示。

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/macOS_ExtensionsInstalled.png)

#### 使用命令行

`v1.9.0-tech-preview` 版本还扩展了 `rdctl` 命令行，你可以使用命令来卸载扩展。请使用以下命令卸载扩展：

:::note

`<tag>` 参数是可选的。

:::

```
rdctl extension uninstall <image-id>:<tag>
```

</TabItem>
<TabItem value="Linux">

#### 使用 UI

1. 单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡，然后单击 **Installed** 选项卡。

2. 在 **Installed** 选项卡下，单击右侧的 **Uninstall** 按钮来卸载扩展，如下图所示。

![](https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Linux_Extensions-Installed.png)

#### 使用命令行

`v1.9.0-tech-preview` 版本还扩展了 `rdctl` 命令行，你可以使用命令来卸载扩展。请使用以下命令卸载扩展：

:::note

`<tag>` 参数是可选的。

:::

```
rdctl extension uninstall <image-id>:<tag>
```

</TabItem>
</Tabs>
