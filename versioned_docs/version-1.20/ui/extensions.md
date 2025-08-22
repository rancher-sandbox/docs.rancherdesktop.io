---
sidebar_label: Extensions
title: Extensions
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/extensions"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

### Catalog

The **Catalog** tab acts as a marketplace for available Rancher Desktop Extensions. Users can view and click on extensions for further description and the ability to install extensions directly through the UI.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](rd-versioned-asset://ui-main/Windows_Extensions.png)

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://ui-main/macOS_Extensions.png)

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://ui-main/Linux_Extensions.png)

</TabItem>
</Tabs>

#### Search

Users can make use of the **Search** functionality to query through available extensions.

### Installed

The **Installed** tab is a view for all installed extensions on your Rancher Desktop application.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](rd-versioned-asset://ui-main/Windows_Extensions-Installed.png)

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://ui-main/macOS_Extensions-Installed.png)

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://ui-main/Linux_Extensions-Installed.png)

</TabItem>
</Tabs>

#### Name

A list of names of installed extensions. Users can directly uninstall extensions by clicking the **Remove** button for the respective extension on the right hand side.

### Remote Debugging Extensions

The Chrome remote debugger allows you to debug Electron apps using Chrome Developer Tools. This tool can be used to also debug Docker extensions in Rancher Desktop. Please follow these instructions on [remote debugging an extension](https://github.com/rancher-sandbox/rancher-desktop/#remote-debugging-an-extension) installed in the application.
