---
sidebar_label: Application
title: Application
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

### General

Allows for enablement of automatic updates, as well as an optional field to allow Rancher Desktop to collect anonymous statistics to help improve the application.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Windows_application_tabGeneral.png)

#### Automatic Updates

When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started.

#### Statistics

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/macOS_application_tabGeneral.png)

#### Administrative Access

Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts.

#### Automatic Updates

When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started.

#### Statistics

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Linux_application_tabGeneral.png)

#### Administrative Access

Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts.

#### Automatic Updates

When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started.

#### Statistics

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

</TabItem>
</Tabs>

### Behavior

Allows for configuration of application behavior upon startup, background process behavior, and notification icon display.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Windows_application_tabBehavior.png)

#### Startup

Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well.

#### Background

When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon.

When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well.

Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed.

#### Notification Icon

Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon.

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/macOS_application_tabBehavior.png)

#### Startup

Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well.

#### Background

When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the app switcher or the dock. The application window can still be opened via the context menu of the notification icon in the menu bar.

When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the app switcher and the dock. This can be used to gain access to the background application again when the notification icon is unavailable as well.

Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the app switcher and the dock), but can be configured to terminate the application as well when the main window is closed.

#### Notification Icon

Rancher Desktop shows the application status with a notification icon in the menu bar. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon.

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Linux_application_tabBehavior.png)

#### Startup

Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well.

#### Background

When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon.

When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well.

Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed.

#### Notification Icon

Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon.

</TabItem>
</Tabs>

### Environment

Allows for configuration of the `$PATH` variable in the users shell in order to interact with Rancher Desktop installed utilities.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/macOS_application_tabEnvironment.png)

#### Configure PATH

A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are `docker`, `nerdctl`, `kubectl`, and `helm`. These utilities are located in `~/.rd/bin` - you may see which utilities are included in your installation by running `ls ~/.rd/bin`.

In order to use the utilities, `~/.rd/bin` must be in the `PATH` variable in your shell.

There are two options for doing this:

- **Automatic**: `PATH` management will add `~/.rd/bin` to your `PATH` by modifying your shell .rc files for you.
- **Manual**: `PATH` management does not change anything - in this mode, you must add `~/.rd/bin` to your `PATH` yourself.

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/1.9-tech-preview/preferences/Linux_application_tabEnvironment.png)

#### Configure PATH

A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are `docker`, `nerdctl`, `kubectl`, and `helm`. These utilities are located in `~/.rd/bin` - you may see which utilities are included in your installation by running `ls ~/.rd/bin`.

In order to use the utilities, `~/.rd/bin` must be in the `PATH` variable in your shell.

There are two options for doing this:

- **Automatic**: `PATH` management will add `~/.rd/bin` to your `PATH` by modifying your shell .rc files for you.
- **Manual**: `PATH` management does not change anything - in this mode, you must add `~/.rd/bin` to your `PATH` yourself.

</TabItem>
</Tabs>
