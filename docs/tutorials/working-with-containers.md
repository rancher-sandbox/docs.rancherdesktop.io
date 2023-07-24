---
title: Working with Containers
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/tutorials/working-with-containers"/>
</head>

`nerdctl` is a Docker-compatible CLI for containerd. The primary goal of `nerdctl` is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker.

[Moby](https://github.com/moby/moby) is an open-source project that was created by Docker to enable and accelerate software containerization. Components include container build tools, a container registry, orchestration tools, and a runtime, and more. The Docker CLI uses the Moby runtime. 

## Running Containers

To run a container with the default `bridge` CNI network (10.4.0.0/24):

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl run -it --rm alpine
```

  </TabItem>
  <TabItem value="docker" default>

```
docker run -it --rm alpine
```
  </TabItem>
</Tabs>

To build an image using BuildKit:

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build -t foo /some-dockerfile-directory
nerdctl run -it --rm foo
```

  </TabItem>
  <TabItem value="docker" default>

  ```
docker build -t foo /some-dockerfile-directory
docker run -it --rm foo
```
  </TabItem>
</Tabs>

To build and send output to a local directory using BuiltKit:

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build -o type=local,dest=. /some-dockerfile-directory
```
  </TabItem>
  <TabItem value="docker" default>

```
docker build -o type=local,dest=. /some-dockerfile-directory
```
  </TabItem>
</Tabs>

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. 

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

The `nerdctl-compose` CLI is designed to be compatible with `docker-compose`:
```
nerdctl compose up -d
nerdctl compose down
```
  </TabItem>
  <TabItem value="docker">

The `compose` command in the Docker CLI supports most of the `docker-compose` commands and flags. It is expected to be a drop-in replacement for `docker-compose`.
```
docker compose up -d
docker compose down
```
  </TabItem>
</Tabs>

## Exposing a Port

To expose port 8000 for a container:

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl run -d -p 8000:80 nginx
```
  </TabItem>
  <TabItem value="docker" default>

```
docker run -d -p 8000:80 nginx
```
  </TabItem>
</Tabs>

You can then access the container via the browser here: [http://localhost:8000/](http://localhost:8000/).

*Note: By default the exposed ports are accessible on all network interfaces on macOS and Linux. However, on Windows, the exposed ports are currently only accessible through the localhost network interface (see issue [#1180](https://github.com/rancher-sandbox/rancher-desktop/issues/1180)).  As a workaround, you can [configure a `portproxy` on the windows host](https://github.com/rancher-sandbox/rancher-desktop/issues/1180#issuecomment-1005514200) to expose the port to additional network interfaces.*

```
netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=localhost
```

## Targeting a Kubernetes Namespace

You may also target a Kubernetes namespace with the `--namespace` parameter with `containerd`. Please note that `docker` doesn't use namespaces.

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app
nerdctl --namespace k8s.io ps
```

  </TabItem>
</Tabs>
