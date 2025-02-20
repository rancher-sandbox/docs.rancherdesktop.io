---
sidebar_label: 通用
title: 通用
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

允许启用自动更新，以及提供可选字段来允许 Rancher Desktop 收集匿名统计数据以改进应用程序。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](rd-versioned-asset://preferences/Windows_application_tabGeneral.png)

#### Automatic Updates

当一个新版本发布时，用户会得到一个通知和升级目标的发行版说明。无论是否启用了自动更新，用户都会收到通知。如果启用此选项，更新会被下载，然后在下次启动 Rancher Desktop 时安装更新。

#### Statistics

该选项允许 Rancher Desktop 收集关于你与 Rancher Desktop 应用程序交互的信息，但不会收集你运行的工作负载等信息。

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://preferences/macOS_application_tabGeneral.png)

#### Administrative Access

允许 Rancher Desktop 在启动某些操作时获得管理访问权限（sudo 权限）。这能用于增强功能，包括桥接网络和默认 docker socket 支持。更改会在 Rancher Desktop 下次启动时应用。

#### Automatic Updates

当一个新版本发布时，用户会得到一个通知和升级目标的发行版说明。无论是否启用了自动更新，用户都会收到通知。如果启用此选项，更新会被下载，然后在下次启动 Rancher Desktop 时安装更新。

#### Statistics

该选项允许 Rancher Desktop 收集关于你与 Rancher Desktop 应用程序交互的信息，但不会收集你运行的工作负载等信息。

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://preferences/Linux_application_tabGeneral.png)

#### Administrative Access

允许 Rancher Desktop 在启动某些操作时获得管理访问权限（sudo 权限）。这能用于增强功能，包括桥接网络和默认 docker socket 支持。更改会在 Rancher Desktop 下次启动时应用。

#### Automatic Updates

当一个新版本发布时，用户会得到一个通知和升级目标的发行版说明。无论是否启用了自动更新，用户都会收到通知。如果启用此选项，更新会被下载，然后在下次启动 Rancher Desktop 时安装更新。

#### Statistics

该选项允许 Rancher Desktop 收集关于你与 Rancher Desktop 应用程序交互的信息，但不会收集你运行的工作负载等信息。

</TabItem>
</Tabs>
