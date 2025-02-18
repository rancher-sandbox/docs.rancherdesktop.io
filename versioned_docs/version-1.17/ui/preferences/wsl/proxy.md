---
sidebar_label: Proxy
title: Proxy
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/wsl/proxy"/>
</head>

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.17/preferences/Windows_wsl_tabProxy.png)

### WSL Proxy

:::caution warning

This is an **experimental** setting.

:::

Rancher Desktop now allows local, corporate, or VPN proxy server support for Windows users. The implementation can be enabled or disabled through the `Proxy` tab to capture network traffic and forward it to an http proxy. Once all information has been input, click the `Apply` button to have changes immediately take effect.

### Proxy address

Users can input their proxy IP address and port number in the `Proxy address` fields.

### Authentication information

If your proxy requires authentication then users can input their username and password in the `Authentication information` fields.

### No proxy hostname list

Default hostnames that should not be proxied will be displayed in this text area.
