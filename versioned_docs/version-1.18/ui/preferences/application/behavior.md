---
sidebar_label: Behavior
title: Behavior
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/application/behavior"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

Allows for configuration of application behavior upon startup, background process behavior, and notification icon display.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.18/preferences/Windows_application_tabBehavior.png)

#### Startup

Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well.

#### Background

When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon.

When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well.

Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed.

#### Notification Icon

Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon.

#### Known Issues and Limitations

* For Ubuntu operating systems and specifically versions >= 20.04.5 LTS, there is a known issue with hiding the tray icon in the preferences settings. Please see this [issue comment](https://github.com/rancher-sandbox/rancher-desktop/issues/4205#issuecomment-1533750167) for further information.

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.18/preferences/macOS_application_tabBehavior.png)

#### Startup

Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well.

#### Background

When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the app switcher or the dock. The application window can still be opened via the context menu of the notification icon in the menu bar.

When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the app switcher and the dock. This can be used to gain access to the background application again when the notification icon is unavailable as well.

Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the app switcher and the dock), but can be configured to terminate the application as well when the main window is closed.

#### Notification Icon

Rancher Desktop shows the application status with a notification icon in the menu bar. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon.

#### Known Issues and Limitations

* For Ubuntu operating systems and specifically versions >= 20.04.5 LTS, there is a known issue with hiding the tray icon in the preferences settings. Please see this [issue comment](https://github.com/rancher-sandbox/rancher-desktop/issues/4205#issuecomment-1533750167) for further information.

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.18/preferences/Linux_application_tabBehavior.png)

#### Startup

Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well.

#### Background

When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon.

When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well.

Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed.

#### Notification Icon

Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon.

#### Known Issues and Limitations

* For Ubuntu operating systems and specifically versions >= 20.04.5 LTS, there is a known issue with hiding the tray icon in the preferences settings. Please see this [issue comment](https://github.com/rancher-sandbox/rancher-desktop/issues/4205#issuecomment-1533750167) for further information.

</TabItem>
</Tabs>
