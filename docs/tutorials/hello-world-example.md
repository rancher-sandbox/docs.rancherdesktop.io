---
title: Hello World example
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.

Rancher Desktop works with two container engines, `containerd` and `dockerd`, the open-sourced components of the Docker ecosystem.

First, create a folder with a Dockerfile and the following content:

FROM alpine
CMD ["echo", "Hello, USERNAME!"] (note that you will fill **USERNAME** in with something of your choosing)

Next, build and run the image for verification purposes:

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
docker build -t USERNAME/hello:1.0 .
docker images | grep USERNAME
docker run --rm USERNAME/hello:1.0
```