---
sidebar_label: Proxy
title: Proxy
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/wsl/proxy"/>
</head>

![](rd-versioned-asset://preferences/Windows_wsl_tabProxy.png)

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

### Known Issues

There is a known issue with using Rancher Desktop and the `wsl-vpnkit` distribution for WSL. If the distro is installed, Rancher Desktop will be unable to run.

As a workaround while this issue is being investigated, please uninstall the distribution in order to run Rancher Desktop. This can be achieved by the command below in a powershell terminal:

```shell
wsl --unregister wsl-vpnkit
```

Please see this [issue thread](https://github.com/rancher-sandbox/rancher-desktop/issues/4966) for further information.
