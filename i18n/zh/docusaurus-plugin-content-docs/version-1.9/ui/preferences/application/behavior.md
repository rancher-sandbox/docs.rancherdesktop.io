---
sidebar_label: 行为
title: 行为
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

允许配置应用程序启动时的行为、后台进程行为和通知图标显示。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](rd-versioned-asset://preferences/Windows_application_tabBehavior.png)

#### Startup

Rancher Desktop 可以作为用户登录的一部分自动启动。同时也将考虑页面中的其他行为设置。

#### Background

Rancher Desktop 在后台启动时不会显示应用程序窗口，也不会在任务切换程序或任务栏中显示条目。应用程序窗口可以通过通知图标的右键菜单打开。

已经在后台运行的 Rancher Desktop 再次启动时将显示应用程序窗口，而且应用程序将添加到任务切换程序和任务栏中。通知图标也不可用时，这方法可用于再次访问后台应用程序。

即使主应用程序窗口关闭（应用程序因此从任务切换程序和任务栏中删除），Rancher Desktop 通常仍然在后台运行，但也可以配置为在主窗口关闭时终止程序。

#### Notification Icon

Rancher Desktop 通过通知图标来显示应用程序的状态。图标的右键菜单提供了更多状态信息，并提供了应用程序其他功能的快速访问入口。此选项将禁用通知图标的创建。

#### 已知问题和限制

* 对于 Ubuntu 操作系统，特别是 >= 20.04.5 LTS 的版本，在偏好设置中隐藏托盘图标存在一个已知问题。请参阅此 [issue comment](https://github.com/rancher-sandbox/rancher-desktop/issues/4205#issuecomment-1533750167) 以获取更多信息。

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://preferences/macOS_application_tabBehavior.png)

#### Startup

Rancher Desktop 可以作为用户登录的一部分自动启动。同时也将考虑页面中的其他行为设置。

#### Background

Rancher Desktop 在后台启动时不会显示应用程序窗口，也不会出现在应用切换程序或停靠栏（Dock）中。应用程序窗口仍然可以通过菜单栏中通知图标的右键菜单打开。

已经在后台运行的 Rancher Desktop 再次启动时将显示应用程序窗口，而且应用程序将添加到应用切换程序和停靠栏中。通知图标也不可用时，这方法可用于再次访问后台应用程序。

即使主应用程序窗口关闭（应用程序因此从应用切换程序和停靠栏中删除），Rancher Desktop 通常仍然在后台运行，但也可以配置为在主窗口关闭时终止程序。

#### Notification Icon

Rancher Desktop 通过菜单栏中的通知图标来显示应用程序状态。图标的右键菜单提供了更多状态信息，并提供了应用程序其他功能的快速访问入口。此选项将禁用通知图标的创建。

#### 已知问题和限制

* 对于 Ubuntu 操作系统，特别是 >= 20.04.5 LTS 的版本，在偏好设置中隐藏托盘图标存在一个已知问题。请参阅此 [issue comment](https://github.com/rancher-sandbox/rancher-desktop/issues/4205#issuecomment-1533750167) 以获取更多信息。

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://preferences/Linux_application_tabBehavior.png)

#### Startup

Rancher Desktop 可以作为用户登录的一部分自动启动。同时也将考虑页面中的其他行为设置。

#### Background

Rancher Desktop 在后台启动时不会显示应用程序窗口，也不会在任务切换程序或任务栏中显示条目。应用程序窗口可以通过通知图标的右键菜单打开。

已经在后台运行的 Rancher Desktop 再次启动时将显示应用程序窗口，而且应用程序将添加到任务切换程序和任务栏中。通知图标也不可用时，这方法可用于再次访问后台应用程序。

即使主应用程序窗口关闭（应用程序因此从任务切换程序和任务栏中删除），Rancher Desktop 通常仍然在后台运行，但也可以配置为在主窗口关闭时终止程序。

#### Notification Icon

Rancher Desktop 通过通知图标来显示应用程序的状态。图标的右键菜单提供了更多状态信息，并提供了应用程序其他功能的快速访问入口。此选项将禁用通知图标的创建。

#### 已知问题和限制

* 对于 Ubuntu 操作系统，特别是 >= 20.04.5 LTS 的版本，在偏好设置中隐藏托盘图标存在一个已知问题。请参阅此 [issue comment](https://github.com/rancher-sandbox/rancher-desktop/issues/4205#issuecomment-1533750167) 以获取更多信息。

</TabItem>
</Tabs>
