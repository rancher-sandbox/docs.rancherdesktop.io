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

单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡。你可以在此处搜索可用的扩展，并单击 **Install** 按钮进行下载和安装。

![](rd-versioned-asset://ui-main/Windows_Extensions.png)

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

单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡。你可以在此处搜索可用的扩展，并单击 **Install** 按钮进行下载和安装。

![](rd-versioned-asset://ui-main/macOS_Extensions.png)

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

单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡。你可以在此处搜索可用的扩展，并单击 **Install** 按钮进行下载和安装。

![](rd-versioned-asset://ui-main/Linux_Extensions.png)

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

单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡。在此视图中，你可以搜索可用的扩展，并卸载已安装的扩展。你还可以通过单击 **Uninstall** 按钮从 **Installed** 选项卡卸载扩展。

<Tabs>
<TabItem value="Catalog">

![](rd-versioned-asset://ui-main/Windows_Extensions.png)

</TabItem>
<TabItem value="Installed">

![](rd-versioned-asset://ui-main/Windows_Extensions-Installed.png)

</TabItem>
</Tabs>

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

单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡。在此视图中，你可以搜索可用的扩展，并卸载已安装的扩展。你还可以通过单击 **Uninstall** 按钮从 **Installed** 选项卡卸载扩展。

<Tabs>
<TabItem value="Catalog">

![](rd-versioned-asset://ui-main/macOS_Extensions.png)

</TabItem>
<TabItem value="Installed">

![](rd-versioned-asset://ui-main/macOS_Extensions-Installed.png)

</TabItem>
</Tabs>

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

单击主 UI 中的 **Extensions** 并导航到 **Catalog** 选项卡。在此视图中，你可以搜索可用的扩展，并卸载已安装的扩展。你还可以通过单击 **Uninstall** 按钮从 **Installed** 选项卡卸载扩展。

<Tabs>
<TabItem value="Catalog">

![](rd-versioned-asset://ui-main/Linux_Extensions.png)

</TabItem>
<TabItem value="Installed">

![](rd-versioned-asset://ui-main/Linux_Extensions-Installed.png)

</TabItem>
</Tabs>

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
