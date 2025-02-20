---
sidebar_label: 应用程序
title: 应用程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

### Automatic Updates

当一个新版本发布时，用户会得到一个通知和升级目标的发行版说明。无论是否启用了自动更新，用户都会收到通知。如果启用此选项，更新会被下载，然后在下次启动 Rancher Desktop 时安装更新。

### Statistics

该选项允许 Rancher Desktop 收集关于你与 Rancher Desktop 应用程序交互的信息，但不会收集你运行的工作负载等信息。

![](rd-versioned-asset://preferences/Windows_application.png)

</TabItem>
<TabItem value="macOS">

### Behavior

#### Administrative Access

允许 Rancher Desktop 在启动某些操作时获得管理访问权限（sudo 权限）。这能用于增强功能，包括桥接网络和默认 docker socket 支持。更改会在 Rancher Desktop 下次启动时应用。

#### Automatic Updates

当一个新版本发布时，用户会得到一个通知和升级目标的发行版说明。无论是否启用了自动更新，用户都会收到通知。如果启用此选项，更新会被下载，然后在下次启动 Rancher Desktop 时安装更新。

#### Statistics

该选项允许 Rancher Desktop 收集关于你与 Rancher Desktop 应用程序交互的信息，但不会收集你运行的工作负载等信息。

![](rd-versioned-asset://preferences/macOS_application_tabBehavior.png)

### Environment

#### 配置 PATH

Rancher Desktop 附带命令行实用程序，用于与其各种功能交互。这些实用程序包括 `docker`、`nerdctl`、`kubectl` 和 `helm` 等。这些实用程序位于 `~/.rd/bin`，因此你可以通过运行 `ls ~/.rd/bin` 来查看你的安装中包含了哪些实用程序。

要使用这些实用程序，`~/.rd/bin` 必须位于 shell 的 `PATH` 变量中。

有两种执行此操作的选项：

- **Automatic**：`PATH` 管理将通过修改你的 shell .rc 文件来将 `~/.rd/bin` 添加到 `PATH` 中。
- **Manual**：`PATH` 管理不会改变任何东西 - 在这种模式下，你必须手动将 `~/.rd/bin` 添加到 `PATH` 中。

![](rd-versioned-asset://preferences/macOS_application_tabEnvironment.png)

</TabItem>
<TabItem value="Linux">

### Behavior

#### Administrative Access

允许 Rancher Desktop 在启动某些操作时获得管理访问权限（sudo 权限）。这能用于增强功能，包括桥接网络和默认 docker socket 支持。更改会在 Rancher Desktop 下次启动时应用。

#### Automatic Updates

当一个新版本发布时，用户会得到一个通知和升级目标的发行版说明。无论是否启用了自动更新，用户都会收到通知。如果启用此选项，更新会被下载，然后在下次启动 Rancher Desktop 时安装更新。

#### Statistics

该选项允许 Rancher Desktop 收集关于你与 Rancher Desktop 应用程序交互的信息，但不会收集你运行的工作负载等信息。

![](rd-versioned-asset://preferences/Linux_application_tabBehavior.png)

### Environment

#### 配置 PATH

Rancher Desktop 附带命令行实用程序，用于与其各种功能交互。这些实用程序包括 `docker`、`nerdctl`、`kubectl` 和 `helm` 等。这些实用程序位于 `~/.rd/bin`，因此你可以通过运行 `ls ~/.rd/bin` 来查看你的安装中包含了哪些实用程序。

要使用这些实用程序，`~/.rd/bin` 必须位于 shell 的 `PATH` 变量中。

有两种执行此操作的选项：

- **Automatic**：`PATH` 管理将通过修改你的 shell .rc 文件来将 `~/.rd/bin` 添加到 `PATH` 中。
- **Manual**：`PATH` 管理不会改变任何东西 - 在这种模式下，你必须手动将 `~/.rd/bin` 添加到 `PATH` 中。

![](rd-versioned-asset://preferences/Linux_application_tabEnvironment.png)

</TabItem>
</Tabs>
