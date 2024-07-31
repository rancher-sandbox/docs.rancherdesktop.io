---
title: Using Persistent Storage
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/tutorials/working-with-storage"/>
</head>

Containers are, by design, ephemeral and stateless. However, most real-world use cases require containers to produce or consume data that often needs to be persisted. To address this challenge, container engines offer mechanisms such as **Bind mounts** and **Volumes**. Both the docker and nerdctl CLIs provide options `-v` and `--mount` to start a container with a bind mount or a volume.

## Bind mount

**Bind mount** mounts a file or directory on the host machine into a container. For example, to mount the current directory of the host machine to `/app/src` directory of a container, you can use `-v` or the slightly verbose `--mount` as shown below.

### Using `-v`

#### macOS & Linux

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl container run --rm -it -v $(pwd)/src:/app/src alpine:latest /bin/sh
```
  </TabItem>
  <TabItem value="docker">

```console
docker container run --rm -it -v $(pwd)/src:/app/src alpine:latest /bin/sh
```
  </TabItem>
</Tabs>

#### Windows

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
// Cmd
nerdctl container run --rm -it -v %cd%/src:/app/src alpine:latest /bin/sh

// Powershell
nerdctl container run --rm -it -v ${pwd}/src:/app/src alpine:latest /bin/sh
```
  </TabItem>
  <TabItem value="docker">

```console
// Cmd
docker container run --rm -it -v %cd%/src:/app/src alpine:latest /bin/sh

// Powershell
docker container run --rm -it -v ${pwd}/src:/app/src alpine:latest /bin/sh
```
  </TabItem>
</Tabs>

### Using `--mount`

#### macOS & Linux

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl container run --rm -it --mount=type=bind,source=$(pwd)/src,target=/app/src alpine:latest /bin/sh
```
  </TabItem>
  <TabItem value="docker">

```console
docker container run --rm -it --mount=type=bind,source=$(pwd)/src,target=/app/src alpine:latest /bin/sh
```
  </TabItem>
</Tabs>

#### Windows

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
// Cmd
nerdctl container run --rm -it --mount=type=bind,source=%cd%/src,target=/app/src alpine:latest /bin/sh

// Powershell
nerdctl container run --rm -it --mount=type=bind,source=${pwd}/src,target=/app/src alpine:latest /bin/sh
```
  </TabItem>
  <TabItem value="docker">

```console
// Cmd
docker container run --rm -it --mount=type=bind,source=%cd%/src,target=/app/src alpine:latest /bin/sh

// Powershell
docker container run --rm -it --mount=type=bind,source=${pwd}/src,target=/app/src alpine:latest /bin/sh
```
  </TabItem>
</Tabs>

If `/app/src` is not available on the host machine then the command creates it. Anything you create inside the directory `/app/src` on the host machine is available at `/app/src` inside the container and vice versa. Try adding or modifying content inside `/app/src` in the container and exit the container by typing `exit` in the shell. On restarting the container, you will notice that the content of `/app/src`  is persisted and same would be the case for container engine, and host machine restarts.
.

:::info

Currently, Rancher Desktop allows creating bind mounts only on the following directories by default: `/Users/$USER` on macOS, `/home/$USER` on Linux, and `/tmp/rancher-desktop` on both. For Windows, all files are automatically shared via WSL2.

If you want to change the behavior of the mounts, you can use provisioning scripts as described in the [thread](https://github.com/rancher-sandbox/rancher-desktop/issues/1209#issuecomment-1370181132).

:::

## Volume

**Volume** is an another mechanism to achieve persistance for container workloads. While Bind mounts link to the host's file system, volumes on the otherhand are managed by the container engine and provide data persistence and isolation from the host. For example, to create a named volume and start a container using the volume, you can use `-v` or the slightly verbose `--mount` as shown below.


- Create a named volume

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl volume create my-persistent-data
```
  </TabItem>
  <TabItem value="docker">

```console
docker volume create my-persistent-data
```
  </TabItem>
</Tabs>

- Start a container using the named volume created in the previous step

### Using `-v`

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl container run --rm -it -v my-persistent-data:/app/src alpine:latest /bin/sh
```
  </TabItem>
  <TabItem value="docker">

```console
docker container run --rm -it -v my-persistent-data:/app/src alpine:latest /bin/sh
```
  </TabItem>
</Tabs>

### Using `--mount`

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl container run --rm -it --mount=type=volume,source=my-persistent-data,target=/app/src alpine:latest /bin/sh
```
  </TabItem>
  <TabItem value="docker">

```console
docker container run --rm -it --mount=type=volume,source=my-persistent-data,target=/app/src alpine:latest /bin/sh
```
  </TabItem>
</Tabs>

Try adding or modifying content inside `/app/src` in the container and exit the container by typing `exit` in the shell. On restarting the container, you will notice that the content of `/app/src`  is persisted and same would be the case for container engine, and host machine restarts.
