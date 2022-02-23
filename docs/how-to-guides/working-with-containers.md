---
title: Working with Containers
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`nerdctl` is a Docker-compatible CLI for containerd. The primary goal of `nerdctl` is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker.

[Moby](https://github.com/moby/moby) is an open-source project that was created by Docker to enable and accelerate software containerization. Components include container build tools, a container registry, orchestration tools, and a runtime, et al. The Docker CLI uses the Moby runtime. 

## Running Containers

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

To run a container with the default `bridge` CNI network (10.4.0.0/24):
```
nerdctl run -it --rm alpine
```

To build an image using BuildKit:
```
nerdctl build -t foo /some-dockerfile-directory
nerdctl run -it --rm foo
```

To build and send output to a local directory uding BuiltKit:
```
nerdctl build -o type=local,dest=. /some-dockerfile-directory
```

To run containers from `docker-compose-yaml`:
```
nerdctl compose -f ./examples/compose-wordpress/docker-compose.yaml up
```
  </TabItem>
  <TabItem value="docker-cli" default>

To run a container with the default `bridge` CNI network (10.4.0.0/24):
```
docker run -it --rm alpine
```

To build an image using BuildKit:
```
docker build -t foo /some-dockerfile-directory
docker run -it --rm foo
```

To build and send output to a local directory uding BuiltKit:
```
docker build -o type=local,dest=. /some-dockerfile-directory
```

To run containers from `docker-compose-yaml`:
```
docker -f ./examples/compose-wordpress/docker-compose.yaml up
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
  <TabItem value="docker-cli">

The `compose` command in the Docker CLI supports most of the `docker-compose` commands and flags. It is expected to be a drop-in replacement for `docker-compose`.
```
docker compose up -d
docker compose down
```
  </TabItem>
</Tabs>

## Exposing a Port

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

To expose port 8000 for a container:
```
nerdctl run -d -p 8000:80 nginx
```

You can then access the container via the browser here: [http://localhost:8080/](http://localhost:8080/).

```
nerdctl build -t demo:latest /code/demos/rd/anvil-app
```
  </TabItem>
  <TabItem value="docker-cli" default>

To expose port 8000 for a container:
```
docker run -d -p 8000:80 nginx
```

You can then access the container via the browser here: [http://localhost:8080/](http://localhost:8080/).

```
docker build -t demo:latest /code/demos/rd/anvil-app
```
  </TabItem>
</Tabs>

## Targeting a Kubernetes Namespace

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

You may also target a Kubernetes namespace with the `--namespace` parameter:
```
nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app
nerdctl --namespace k8s.io ps
```
  </TabItem>
  <TabItem value="docker-cli" default>

You may also target a Kubernetes namespace with the `--namespace` parameter:
```
docker --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app
docker --namespace k8s.io ps
```
  </TabItem>
</Tabs>