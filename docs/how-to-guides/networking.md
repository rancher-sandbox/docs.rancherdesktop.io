---
title: Networking
---

Rancher Desktop runs containers and Kubernetes inside a virtual machine, so traffic between your host, the virtual machine, and your containers crosses a network boundary. This guide explains how to reach host services from a container, how published container ports are exposed, and how to use host networking.

## Reaching host services from a container

To connect from inside a container to a service running on your host machine, use the hostname `host.docker.internal` or `host.rancher-desktop.internal`. Both resolve to the host from within a container.

On Windows you may need to allow the traffic through the firewall. Run the following in an elevated PowerShell:

```powershell
New-NetFirewallRule -DisplayName "WSL" -Direction Inbound -InterfaceAlias "vEthernet (WSL)" -Action Allow
```

The `--add-host=host-gateway` flag is specific to Docker Desktop and is not supported in Rancher Desktop. Use `host.docker.internal` or `host.rancher-desktop.internal` instead, without passing `--add-host`.

## Publishing container ports

Ports published with `-p` (for example `docker run -p 8080:80`) bind to all host interfaces (`0.0.0.0`) by default, so the container is reachable from other machines on your network once the host firewall allows the connection.

To restrict a published port to the host itself, give the bind address explicitly:

```console
docker run -p 127.0.0.1:8080:80 nginx
```

This binds the port to `127.0.0.1` only. On Linux, port publishing follows the standard container-engine behavior.

## Using host networking

Containers started with `--network=host` share the virtual machine's network namespace rather than your host's, because the container engine runs inside the virtual machine. Rancher Desktop forwards the host-network ports it detects to your host machine, so a service listening inside a host-network container is reachable from the host. Host networking works with both the `dockerd (moby)` and `containerd` engines.

## Accessing the container engine

By default, with Administrative Access enabled, the Docker socket is at `/var/run/docker.sock`. Without Administrative Access, the socket is at `~/.rd/docker.sock` and is reachable through the `rancher-desktop` Docker context. Most applications support Docker contexts and do not require the socket at the default location. See [Administrative Access](../ui/preferences/application/general.md) for details.
