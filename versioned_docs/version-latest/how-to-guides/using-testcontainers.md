---
title: Using Testcontainers with Rancher Desktop
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/using-testcontainers"/>
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Testcontainers](https://testcontainers.com/) lets you run throwaway containers for integration testing. This guide explains how to configure Rancher Desktop to work with Testcontainers and includes a working example you can try yourself.

## Prerequisites

Testcontainers requires the Docker API, so you must select **moby (dockerd)** as the container engine. You can change this in **Preferences > Container Engine** or with `rdctl`:

```console
$ rdctl set --container-engine.name=moby
```

The **containerd** runtime does not expose a Docker-compatible API and will not work with Testcontainers.

### For the example below

- [Java (JDK)](https://formulae.brew.sh/formula/openjdk): `brew install openjdk`
- [Apache Maven](https://maven.apache.org/install.html): `brew install maven`

## Configuration

<Tabs groupId="os">
<TabItem value="macOS" label="macOS">

Rancher Desktop runs containers inside a virtual machine. Testcontainers needs three environment variables to locate the Docker socket and connect to container ports inside the VM:

```bash
export DOCKER_HOST="unix://$HOME/.rd/docker.sock"
export TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE=/var/run/docker.sock
export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl info --field ip-address)
```

**What each variable does:**

- `DOCKER_HOST` tells Testcontainers where to find the Docker socket. Rancher Desktop places it at `~/.rd/docker.sock` rather than the default `/var/run/docker.sock`.
- `TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE` tells Testcontainers which socket path to mount into helper containers (like Ryuk). Inside the VM the socket is at the standard `/var/run/docker.sock` path.
- `TESTCONTAINERS_HOST_OVERRIDE` tells Testcontainers which host to connect to for mapped ports. The `rdctl info --field ip-address` command returns the VM's routable IP address.

Add these lines to your `~/.zshrc` (or `~/.bashrc`) to set them automatically.

:::note
These variables work with all virtual machine types (VZ and QEMU), with or without Rosetta support, and regardless of whether administrative access is enabled.
:::

</TabItem>
<TabItem value="Linux" label="Linux">

On Linux, Rancher Desktop also runs containers inside a virtual machine. Set the same three environment variables as on macOS:

```bash
export DOCKER_HOST="unix://$HOME/.rd/docker.sock"
export TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE=/var/run/docker.sock
export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl info --field ip-address)
```

Add these lines to your `~/.bashrc` (or `~/.zshrc`) to set them automatically.

</TabItem>
<TabItem value="Windows" label="Windows">

On Windows, run Testcontainers from within a WSL2 distribution where Rancher Desktop integration is enabled. Set the same three environment variables in your WSL2 shell profile:

```bash
export DOCKER_HOST="unix://$HOME/.rd/docker.sock"
export TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE=/var/run/docker.sock
export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl info --field ip-address)
```

Add these lines to your `~/.bashrc` to set them automatically.

</TabItem>
</Tabs>

## Running the example

Clone the [Testcontainers Java example repository](https://github.com/testcontainers/testcontainers-java-repro) and run its tests:

```console
$ git clone https://github.com/testcontainers/testcontainers-java-repro
$ cd testcontainers-java-repro
$ mvn verify
```

A successful run produces output like this:

```
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO]
[INFO] BUILD SUCCESS
```

## Troubleshooting

### "Could not find a valid Docker environment"

Testcontainers cannot connect to the Docker daemon. Verify that `DOCKER_HOST` is set and that the socket file exists:

```console
$ echo $DOCKER_HOST
unix:///Users/yourname/.rd/docker.sock

$ ls -la ~/.rd/docker.sock
srw-------  1 yourname  staff  0 Jan  1 00:00 /Users/yourname/.rd/docker.sock
```

If the socket file is missing, check that Rancher Desktop is running and that the container engine is set to **moby (dockerd)**.

### "Connection refused" on mapped ports

Testcontainers connects to `localhost` by default, but container ports are exposed on the VM's IP address. Verify that `TESTCONTAINERS_HOST_OVERRIDE` is set:

```console
$ echo $TESTCONTAINERS_HOST_OVERRIDE
192.168.64.2
```

If the variable is empty, run `rdctl info --field ip-address` to confirm Rancher Desktop is running and returning an IP address.

### "Can not connect to Ryuk"

The Ryuk helper container needs to reach the Docker socket inside the VM. Verify that `TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE` is set to `/var/run/docker.sock`.
