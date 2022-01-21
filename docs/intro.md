---
slug: /
---

# Overview

Rancher Desktop is an app that provides container management and Kubernetes on the desktop. It is available for Mac (both on Intel and Apple Silicon), Windows, and Linux.

![](/img/intro/intro.png)
_The above image shows Kubernetes settings on Mac on the left and Windows on the right._

## Container Management

Rancher Desktop provides the ability to build, push, and pull container images along with the ability to run containers. This is provided by either the Docker CLI (when you choose Moby/dockerd as you engine) or nerdctl (when you choose containerd as your engine). [nerdctl](https://github.com/containerd/nerdctl) is a "Docker-compatible CLI for containerd" provided by the containerd project.

## Kubernetes

Kuberentes is built in to Rancher Desktop. Kubernetes is provided by [k3s](https://k3s.io/), a lightweight certified distribution. With Rancher Desktop you have the ability to _choose your version of Kubernetes_ and _reset Kubernetes or Kubernetes and the whole container runtime with the click of a button_.
