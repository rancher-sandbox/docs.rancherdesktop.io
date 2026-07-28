---
title: Non-GUI Settings
---

Rancher Desktop settings can be changed three ways: the **Preferences** window, the `rdctl set` command, and [deployment profiles](../getting-started/deployment.md). Most settings have a control in the Preferences window. This page documents the settings that do **not**, so you can configure them from `rdctl` or a deployment profile.

To see every current setting and its value, run:

```console
rdctl list-settings
```

When you create a deployment profile, generate it with `rdctl create-profile` (or from the output of `rdctl list-settings`) so the schema `version` field is set correctly. Do not pick the version by hand. See [Deployment Profiles](../getting-started/deployment.md) for the profile format and location.

In the tables below, the **Setting** column is the dotted key used in deployment profiles and `rdctl list-settings` output; the **`rdctl` flag** column is the corresponding `rdctl set` flag, which hyphenates multi-word names.

## Settings without a GUI control

| Setting | `rdctl` flag | Default | Description |
|---|---|---|---|
| `kubernetes.options.flannel` | `--kubernetes.options.flannel` | `true` | Use flannel networking. Disable it to install your own CNI. |
| `kubernetes.ingress.localhostOnly` | `--kubernetes.ingress.localhost-only` | `false` | Windows only. Bind Kubernetes ingress and `LoadBalancer` services to `127.0.0.1` instead of all interfaces. See [Kubernetes preferences](../ui/preferences/kubernetes.md). |
| `images.showAll` | `--images.show-all` | `true` | Show system images on the **Images** page. |
| `containers.showAll` | `--containers.show-all` | `true` | Show system containers on the **Containers** page. |
| `diagnostics.connectivity.interval` | `--diagnostics.connectivity.interval` | `5000` | Milliseconds between background network-connectivity checks. Set to `0` to disable the check (useful when running [air-gapped](../how-to-guides/running-air-gapped.md)). |
| `diagnostics.connectivity.timeout` | `--diagnostics.connectivity.timeout` | `5000` | Milliseconds to wait before a connectivity check times out. |
| `application.extensions.allowed.enabled` | deployment profile | `false` | Restrict which extensions can be installed. When enabled, only the patterns in `application.extensions.allowed.list` may be installed. |
| `application.extensions.allowed.list` | deployment profile | `[]` | The list of allowed extension image patterns. Set through a deployment profile. |

## Experimental settings

These keys live under `experimental.*` and may change or be removed between releases.

| Setting | `rdctl` flag | Default | Description |
|---|---|---|---|
| `experimental.virtualMachine.diskSize` | `--experimental.virtual-machine.disk-size` | `100GiB` | macOS and Linux only. Grow the virtual machine's disk (for example `200GiB`). Existing disks are not shrunk, and a restart is required. |
| `experimental.virtualMachine.sshPortForwarder` | `--experimental.virtual-machine.ssh-port-forwarder` | `true` | macOS and Linux only. Use SSH for port forwarding instead of gRPC. |
| `experimental.virtualMachine.proxy.*` | deployment profile | — | Route virtual-machine and container traffic through an HTTP(S) proxy. On Windows this is configured in [Preferences > WSL > Proxy](../ui/preferences/wsl/proxy.md); on macOS and Linux it is set only through a deployment profile. |

### Proxy bypass defaults

When a proxy is configured, `experimental.virtualMachine.proxy.noproxy` controls the addresses that bypass it. It defaults to:

```
0.0.0.0/8, 10.0.0.0/8, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.168.0.0/16, 224.0.0.0/4, 240.0.0.0/4
```
