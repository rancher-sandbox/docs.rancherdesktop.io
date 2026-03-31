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

- [Java (JDK)](https://www.java.com/)
- [Apache Maven](https://maven.apache.org/install.html)

## Configuration

<Tabs groupId="os">
<TabItem value="macOS-Linux" label="macOS & Linux">

Rancher Desktop runs containers inside a virtual machine. Testcontainers needs three environment variables to locate the Docker socket and connect to container ports inside the VM:

```bash
export DOCKER_HOST="unix://$HOME/.rd/docker.sock"
export TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE=/var/run/docker.sock
export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl info --field ip-address)
```

Add these lines to your shell profile (`~/.zshrc`, `~/.bashrc`, etc.) to set them automatically.

**What each variable does:**

- `DOCKER_HOST` tells Testcontainers where to find the Docker socket. Rancher Desktop places it at `~/.rd/docker.sock` rather than the default `/var/run/docker.sock`.
- `TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE` tells Testcontainers which socket path to mount into helper containers (like Ryuk). Inside the VM the socket is at the standard `/var/run/docker.sock` path.
- `TESTCONTAINERS_HOST_OVERRIDE` tells Testcontainers which host to connect to for mapped ports. The `rdctl info --field ip-address` command returns the VM's routable IP address.

:::note
These variables work with all virtual machine types (VZ and QEMU), with or without Rosetta support, and regardless of whether administrative access is enabled.
:::

</TabItem>
<TabItem value="Windows" label="Windows">

On Windows, Testcontainers works both from native Win32 programs and from inside WSL2 distributions.

**Native Win32 (PowerShell, CMD, Git Bash):**

Tell Testcontainers to connect via the Windows named pipe. In PowerShell:

```powershell
$env:DOCKER_HOST = "npipe:////./pipe/docker_engine"
```

In Git Bash / MSYS2:

```bash
export DOCKER_HOST="npipe:////./pipe/docker_engine"
```

No other environment variables are needed. Container ports are accessible on `localhost`.

**WSL2:**

No environment variables are needed when running from a WSL2 distribution where Rancher Desktop integration is enabled. The Docker socket is at `/var/run/docker.sock` (the default location) and container ports are accessible on `localhost`.

:::note
The `rdctl` Linux binary does not work inside WSL2. Use `rdctl.exe` instead if you need to run `rdctl` commands from your WSL2 shell.
:::

</TabItem>
</Tabs>

## Running the example

Clone the [Testcontainers Java example repository](https://github.com/testcontainers/testcontainers-java-repro) and run its tests:

```console
$ git clone https://github.com/testcontainers/testcontainers-java-repro
$ cd testcontainers-java-repro
$ mvn verify
```

:::tip
If you see `"client version 1.32 is too old"`, the example repository's Testcontainers version needs to be updated. Edit `pom.xml` and change the `testcontainers-bom` version to `2.0.4` (or later), then run `mvn verify` again. See [Troubleshooting](#client-version-132-is-too-old) for details.
:::

A successful run produces output like this:

```
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO]
[INFO] BUILD SUCCESS
```

## Troubleshooting

### "Could not find a valid Docker environment"

Testcontainers cannot connect to the Docker daemon.

On macOS and Linux, verify that `DOCKER_HOST` is set and that the socket file exists:

```console
$ echo $DOCKER_HOST
unix:///Users/yourname/.rd/docker.sock

$ ls -la ~/.rd/docker.sock
srw-------  1 yourname  staff  0 Jan  1 00:00 /Users/yourname/.rd/docker.sock
```

On Windows (native), verify that `DOCKER_HOST` is set to `npipe:////./pipe/docker_engine`.

On Windows (WSL2), verify the default socket exists:

```console
$ ls -la /var/run/docker.sock
srwxrwxrwx  1 root  root  0 Jan  1 00:00 /var/run/docker.sock
```

If the socket file is missing, check that Rancher Desktop is running and that the container engine is set to **moby (dockerd)**.

### "client version 1.32 is too old"

The Docker Java client library bundled with older Testcontainers versions defaults to API version 1.32, which is below the minimum required by current Docker Engine versions. Upgrade your project's Testcontainers dependency to version 2.0 or later.

### "Connection refused" on mapped ports

On macOS and Linux, container ports are exposed on the VM's IP address, not `localhost`. Verify that `TESTCONTAINERS_HOST_OVERRIDE` is set:

```console
$ echo $TESTCONTAINERS_HOST_OVERRIDE
192.168.64.2
```

If the variable is empty, run `rdctl info --field ip-address` to confirm Rancher Desktop is running and returning an IP address.

On Windows, `TESTCONTAINERS_HOST_OVERRIDE` should **not** be set. Container ports are accessible on `localhost` by default.

### "Can not connect to Ryuk"

On macOS and Linux, the Ryuk helper container needs to reach the Docker socket inside the VM. Verify that `TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE` is set to `/var/run/docker.sock`.
