---
sidebar_label: 环境
title: 环境
---

import TabsConstants from '@site/core/TabsConstants';

允许在用户 shell 中配置 `$PATH` 变量，以便与 Rancher Desktop 安装的实用程序进行交互。

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_application_tabEnvironment.png)

#### 配置 PATH

Rancher Desktop 附带命令行实用程序，用于与其各种功能交互。这些实用程序包括 `docker`、`nerdctl`、`kubectl` 和 `helm` 等。这些实用程序位于 `~/.rd/bin`，因此你可以通过运行 `ls ~/.rd/bin` 来查看你的安装中包含了哪些实用程序。

要使用这些实用程序，`~/.rd/bin` 必须位于 shell 的 `PATH` 变量中。

有两种执行此操作的选项：

- **Automatic**：`PATH` 管理将通过修改你的 shell .rc 文件来将 `~/.rd/bin` 添加到 `PATH` 中。
- **Manual**：`PATH` 管理不会改变任何东西 - 在这种模式下，你必须手动将 `~/.rd/bin` 添加到 `PATH` 中。

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Linux_application_tabEnvironment.png)

#### 配置 PATH

Rancher Desktop 附带命令行实用程序，用于与其各种功能交互。这些实用程序包括 `docker`、`nerdctl`、`kubectl` 和 `helm` 等。这些实用程序位于 `~/.rd/bin`，因此你可以通过运行 `ls ~/.rd/bin` 来查看你的安装中包含了哪些实用程序。

要使用这些实用程序，`~/.rd/bin` 必须位于 shell 的 `PATH` 变量中。

有两种执行此操作的选项：

- **Automatic**：`PATH` 管理将通过修改你的 shell .rc 文件来将 `~/.rd/bin` 添加到 `PATH` 中。
- **Manual**：`PATH` 管理不会改变任何东西 - 在这种模式下，你必须手动将 `~/.rd/bin` 添加到 `PATH` 中。

</TabItem>
</Tabs>
