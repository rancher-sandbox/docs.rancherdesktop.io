---
title: Configuring the Docker Daemon
---

When you select the `dockerd (moby)` container engine, the Docker daemon runs inside Rancher Desktop's virtual machine. This guide explains where to find the Docker socket, how external tools connect to it, and how to customize the daemon's configuration.

## The Docker socket and context

With **Administrative Access** enabled, Rancher Desktop creates the Docker socket at the default location, `/var/run/docker.sock`. Without Administrative Access, it creates the socket at `~/.rd/docker.sock` and registers a Docker context named `rancher-desktop` that points to it. Most tools support Docker contexts and do not require the socket at the default location. See [Administrative Access](../ui/preferences/application/general.md) for details.

To point a tool that reads `DOCKER_HOST` at the Rancher Desktop socket, set:

```console
export DOCKER_HOST="unix://$HOME/.rd/docker.sock"
```

(When Administrative Access is enabled, you can use `unix:///var/run/docker.sock` instead, or simply rely on the default.)

## Customizing the daemon configuration

The daemon reads its configuration from `/etc/docker/daemon.json` **inside the virtual machine**. Rancher Desktop manages this file and rewrites it when it starts, so editing it directly does not persist. To add your own settings, use a [provisioning script](./provisioning-scripts.md), which runs while the virtual machine starts.

For example, to allow an insecure registry, a provisioning script can merge a key into `daemon.json` before the daemon starts. Provisioning scripts run inside the virtual machine, where the `jq` utility is available:

```sh
#!/bin/sh
set -e
config=/etc/docker/daemon.json
tmp="$(mktemp)"
[ -f "$config" ] || echo '{}' > "$config"
jq '. + { "insecure-registries": ["my.registry.example:5000"] }' "$config" > "$tmp"
mv "$tmp" "$config"
```

:::note
Rancher Desktop manages some keys in `daemon.json` itself (for example the storage driver). Avoid overriding keys that Rancher Desktop sets, and re-test your configuration after upgrading.
:::

To mirror or configure registries for the `containerd` engine instead, see [Mirror a private registry](./mirror-private-registry.md).
