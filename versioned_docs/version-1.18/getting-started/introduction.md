---
title: Introduction
slug: /
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

Rancher Desktop is an app that provides container management and Kubernetes on the desktop. It is available for Mac (both on Intel and Apple Silicon), Windows, and Linux.

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.18/getting-started/introduction_preferences_tabKubernetes.png)

_The above image shows Kubernetes settings on Mac on the left and Windows on the right._

## Container Management

Rancher Desktop provides the ability to build, push, and pull container images along with the ability to run containers. This is provided by either the Docker CLI (when you choose Moby/dockerd as you engine) or nerdctl (when you choose containerd as your engine). [nerdctl](https://github.com/containerd/nerdctl) is a "Docker-compatible CLI for containerd" provided by the containerd project.

## Kubernetes

Kubernetes is built in to Rancher Desktop. Kubernetes is provided by [k3s](https://k3s.io/), a lightweight certified distribution. With Rancher Desktop you have the ability to _choose your version of Kubernetes_ and _reset Kubernetes or Kubernetes and the whole container runtime with the click of a button_.

## Rancher vs Rancher Desktop

While [Rancher](https://rancher.com/) and Rancher Desktop share the _Rancher_ name they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop provides a local Kubernetes and container management platform. The two solutions complement each other.

If you want to run Rancher on your local system, you can install Rancher into Rancher Desktop.
