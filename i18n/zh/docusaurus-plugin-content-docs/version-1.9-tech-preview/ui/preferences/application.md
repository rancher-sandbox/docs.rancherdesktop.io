---
sidebar_label: 应用程序
title: 应用程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

### General

允许启用自动更新，以及提供可选字段来允许 Rancher Desktop 收集匿名统计数据以改进应用程序。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Windows_application_tabGeneral.png)

#### Automatic Updates

当一个新版本发布时，用户会得到一个通知和升级目标的发行版说明。无论是否启用了自动更新，用户都会收到通知。如果启用此选项，更新会被下载，然后在下次启动 Rancher Desktop 时安装更新。

#### Statistics

该选项允许 Rancher Desktop 收集关于你与 Rancher Desktop 应用程序交互的信息，但不会收集你运行的工作负载等信息。

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/macOS_application_tabGeneral.png)

#### Administrative Access

允许 Rancher Desktop 在启动某些操作时获得管理访问权限（sudo 权限）。这能用于增强功能，包括桥接网络和默认 docker socket 支持。更改会在 Rancher Desktop 下次启动时应用。

#### Automatic Updates

当一个新版本发布时，用户会得到一个通知和升级目标的发行版说明。无论是否启用了自动更新，用户都会收到通知。如果启用此选项，更新会被下载，然后在下次启动 Rancher Desktop 时安装更新。

#### Statistics

该选项允许 Rancher Desktop 收集关于你与 Rancher Desktop 应用程序交互的信息，但不会收集你运行的工作负载等信息。

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Linux_application_tabGeneral.png)

#### Administrative Access

允许 Rancher Desktop 在启动某些操作时获得管理访问权限（sudo 权限）。这能用于增强功能，包括桥接网络和默认 docker socket 支持。更改会在 Rancher Desktop 下次启动时应用。

#### Automatic Updates

当一个新版本发布时，用户会得到一个通知和升级目标的发行版说明。无论是否启用了自动更新，用户都会收到通知。如果启用此选项，更新会被下载，然后在下次启动 Rancher Desktop 时安装更新。

#### Statistics

该选项允许 Rancher Desktop 收集关于你与 Rancher Desktop 应用程序交互的信息，但不会收集你运行的工作负载等信息。

</TabItem>
</Tabs>

### Behavior

允许配置应用程序启动时的行为、后台进程行为和通知图标显示。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Windows_application_tabBehavior.png)

#### Startup

Rancher Desktop 可以作为用户登录的一部分自动启动。同时也将考虑页面中的其他行为设置。

#### Background

Rancher Desktop 在后台启动时不会显示应用程序窗口，也不会在任务切换程序或任务栏中显示条目。应用程序窗口可以通过通知图标的右键菜单打开。

已经在后台运行的 Rancher Desktop 再次启动时将显示应用程序窗口，而且应用程序将添加到任务切换程序和任务栏中。通知图标也不可用时，这方法可用于再次访问后台应用程序。

即使主应用程序窗口关闭（应用程序因此从任务切换程序和任务栏中删除），Rancher Desktop 通常仍然在后台运行，但也可以配置为在主窗口关闭时终止程序。

#### Notification Icon

Rancher Desktop 通过通知图标来显示应用程序的状态。图标的右键菜单提供了更多状态信息，并提供了应用程序其他功能的快速访问入口。此选项将禁用通知图标的创建。

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/macOS_application_tabBehavior.png)

#### Startup

Rancher Desktop 可以作为用户登录的一部分自动启动。同时也将考虑页面中的其他行为设置。

#### Background

Rancher Desktop 在后台启动时不会显示应用程序窗口，也不会出现在应用切换程序或停靠栏（Dock）中。应用程序窗口仍然可以通过菜单栏中通知图标的右键菜单打开。

已经在后台运行的 Rancher Desktop 再次启动时将显示应用程序窗口，而且应用程序将添加到应用切换程序和停靠栏中。通知图标也不可用时，这方法可用于再次访问后台应用程序。

即使主应用程序窗口关闭（应用程序因此从应用切换程序和停靠栏中删除），Rancher Desktop 通常仍然在后台运行，但也可以配置为在主窗口关闭时终止程序。

#### Notification Icon

Rancher Desktop 通过菜单栏中的通知图标来显示应用程序状态。图标的右键菜单提供了更多状态信息，并提供了应用程序其他功能的快速访问入口。此选项将禁用通知图标的创建。

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Linux_application_tabBehavior.png)

#### Startup

Rancher Desktop 可以作为用户登录的一部分自动启动。同时也将考虑页面中的其他行为设置。

#### Background

Rancher Desktop 在后台启动时不会显示应用程序窗口，也不会在任务切换程序或任务栏中显示条目。应用程序窗口可以通过通知图标的右键菜单打开。

已经在后台运行的 Rancher Desktop 再次启动时将显示应用程序窗口，而且应用程序将添加到任务切换程序和任务栏中。通知图标也不可用时，这方法可用于再次访问后台应用程序。

即使主应用程序窗口关闭（应用程序因此从任务切换程序和任务栏中删除），Rancher Desktop 通常仍然在后台运行，但也可以配置为在主窗口关闭时终止程序。

#### Notification Icon

Rancher Desktop 通过通知图标来显示应用程序的状态。图标的右键菜单提供了更多状态信息，并提供了应用程序其他功能的快速访问入口。此选项将禁用通知图标的创建。

</TabItem>
</Tabs>

### Environment

允许在用户 shell 中配置 `$PATH` 变量，以便与 Rancher Desktop 安装的实用程序进行交互。

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/macOS_application_tabEnvironment.png)

#### 配置 PATH

Rancher Desktop 附带命令行实用程序，用于与其各种功能交互。这些实用程序包括 `docker`、`nerdctl`、`kubectl` 和 `helm` 等。这些实用程序位于 `~/.rd/bin`，因此你可以通过运行 `ls ~/.rd/bin` 来查看你的安装中包含了哪些实用程序。

要使用这些实用程序，`~/.rd/bin` 必须位于 shell 的 `PATH` 变量中。

有两种执行此操作的选项：

- **Automatic**：`PATH` 管理将通过修改你的 shell .rc 文件来将 `~/.rd/bin` 添加到 `PATH` 中。
- **Manual**：`PATH` 管理不会改变任何东西 - 在这种模式下，你必须手动将 `~/.rd/bin` 添加到 `PATH` 中。

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Linux_application_tabEnvironment.png)

#### 配置 PATH

Rancher Desktop 附带命令行实用程序，用于与其各种功能交互。这些实用程序包括 `docker`、`nerdctl`、`kubectl` 和 `helm` 等。这些实用程序位于 `~/.rd/bin`，因此你可以通过运行 `ls ~/.rd/bin` 来查看你的安装中包含了哪些实用程序。

要使用这些实用程序，`~/.rd/bin` 必须位于 shell 的 `PATH` 变量中。

有两种执行此操作的选项：

- **Automatic**：`PATH` 管理将通过修改你的 shell .rc 文件来将 `~/.rd/bin` 添加到 `PATH` 中。
- **Manual**：`PATH` 管理不会改变任何东西 - 在这种模式下，你必须手动将 `~/.rd/bin` 添加到 `PATH` 中。

</TabItem>
</Tabs>
