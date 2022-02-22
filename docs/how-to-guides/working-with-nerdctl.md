---
title: Working with nerdctl
---

`nerdctl` is a Docker-compatible CLI for containerd. The primary goal of `nerdctl` is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker.

## Images

Please refer to the [documentation](./how-to-guides/working-with-images.md) to learn how to build, list, tag, and remove images using `nerdctl` and the containerd runtime.

## Running Containers

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

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. 

The `nerdctl-compose` CLI is designed to be compatible with `docker-compose`:
```
nerdctl compose up -d
nerdctl compose down
```

## Other Uses for nerdctl

To expose port 8000 for a container:
```
nerdctl run -d -p 8000:80 nginx
```

You can then access the container via the browser here: [http://localhost:8080/](http://localhost:8080/).

```
nerdctl build -t demo:latest /code/demos/rd/anvil-app
```

You may also target a Kubernetes namespace with the `--namespace` parameter:
```
nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app
nerdctl --namespace k8s.io ps
```

