---
sidebar_label: General
title: General
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/application/general"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

Allows for enablement of automatic updates, as well as an optional field to allow Rancher Desktop to collect anonymous statistics to help improve the application.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](rd-versioned-asset://preferences/Windows_application_tabGeneral.png)

#### Automatic Updates

Ensure you have the setting checked and enabled on the `Preferences > Application > General` tab. You will need to click `Apply` once selected, and then manually restart the application for the settings to update.

If a new release is available, it will be downloaded upon restart and you will see a section denoted `Update Available` from the main [General](../../../ui/general.md) tab with a `Restart` button that can be clicked to have the newest version applied. A copy of the latest version’s release notes will be displayed via dropdown as well.

#### Statistics

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://preferences/macOS_application_tabGeneral.png)

#### Administrative Access

Enabling Administrative Access allows Rancher Desktop to create the Docker socket at the default location: `/var/run/docker.sock`. Without this access, the socket is instead created at `~/.rd/docker.sock` and is accessible via the `rancher-desktop` Docker context. Most applications support Docker contexts and do not require the socket to be at the default location.

Administrative Access also enables the use of a bridged IP address that is reachable from both the host and other machines on the local network. Since Rancher Desktop automatically forwards container ports to the host, this is usually not necessary—unless containers need to be accessed from other devices on the network.

:::note
The external IP address is provided via Apple’s vmnet framework. This framework starts the [mDNSResponder](https://github.com/apple-oss-distributions/mDNSResponder#mdns-responder-daemon) component of macOS, which uses port 53. As a result, when Administrative Access is enabled, running a DNS server in a container and forwarding port 53 to the host is not possible.
:::

Rancher Desktop will prompt for an administrator username and password when Administrative Access is first enabled, and again the first time it is launched after a system reboot (since /var/run/docker.sock is deleted at boot).

#### Automatic Updates

Ensure you have the setting checked and enabled on the `Preferences > Application > General` tab. You will need to click `Apply` once selected, and then manually restart the application for the settings to update.

If a new release is available, it will be downloaded upon restart and you will see a section denoted `Update Available` from the main [General](../../../ui/general.md) tab with a `Restart` button that can be clicked to have the newest version applied. A copy of the latest version’s release notes will be displayed via dropdown as well.

#### Statistics

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://preferences/Linux_application_tabGeneral.png)

#### Administrative Access

Enabling Administrative Access allows Rancher Desktop to create the Docker socket at the default location: `/var/run/docker.sock`. Without this access, the socket is instead created at `~/.rd/docker.sock` and is accessible via the `rancher-desktop` Docker context. Most applications support Docker contexts and do not require the socket to be at the default location.

Rancher Desktop will prompt for an administrator username and password when Administrative Access is first enabled, and again the first time it is launched after a system reboot (since /var/run/docker.sock is deleted at boot).

#### Automatic Updates

Ensure you have the setting checked and enabled on the `Preferences > Application > General` tab. You will need to click `Apply` once selected, and then manually restart the application for the settings to update.

If a new release is available, it will be downloaded upon restart and you will see a section denoted `Update Available` from the main [General](../../../ui/general.md) tab with a `Restart` button that can be clicked to have the newest version applied. A copy of the latest version’s release notes will be displayed via dropdown as well.

#### Statistics

This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.

</TabItem>
</Tabs>
