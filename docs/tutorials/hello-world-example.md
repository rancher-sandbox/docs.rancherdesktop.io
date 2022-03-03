---
title: Hello World Example
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.

Rancher Desktop works with two container engines, [`containerd`](https://containerd.io/) and [Moby](https://mobyproject.org/), the open-sourced components of the Docker ecosystem. For `nerdctl`, use the containerd runtime. For `docker`, use the Moby (`dockerd`) runtime.

### Hello World example

**Create a folder as follows:** Make sure to specify your "USERNAME". For this example, USERNAME = John.
```
mkdir ../hello-world
cd ../hello-world
```

**Create a Dockerfile with the following content:**
```
FROM alpine  
CMD ["echo", "Hello, John!"]
```

**Build and run the image for verification purposes:**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build -t John/hello:1.0 .
nerdctl images | grep John
nerdctl run -d -p 8080:80 John/hello:1.0
```

  </TabItem>
  <TabItem value="docker">

```
docker build -t John/hello:1.0 .
docker images | grep John
docker run -d -p 8080:80 John/hello:1.0
```

  </TabItem>
</Tabs>

### NGINX example

Make sure that you switch the `container runtime` setting in the **Kubernetes Settings** panel to either `dockerd` or `containerd` as needed.

**Create a folder as follows:** Make sure to specify your "USERNAME". For this example, USERNAME = John.
```
mkdir ../nginx
cd ../nginx
```

**Create a Dockerfile with the following content:**
```
FROM alpine  
CMD ["echo", "Hello, John!"]
```

**Build and run the image for verification purposes:**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build -t John/nginx:1.0 .
nerdctl images | grep John
nerdctl run -d -p 8080:80 John/nginx:1.0
```

  </TabItem>
  <TabItem value="docker">

```
docker build -t John/nginx:1.0 .
docker images | grep John
docker run -d -p 8080:80 John/nginx:1.0
```
  </TabItem>
</Tabs>

**Check your list of running containers:**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl ps
CONTAINER ID    IMAGE                          COMMAND                  CREATED        STATUS   PORTS   NAMES
fd869b8e08c5    docker.io/John/nginx:1.0    "/docker-entrypoint.…"   8 seconds ago     Up               nginx-fd869
```

  </TabItem>
  <TabItem value="docker">

```
docker ps 
CONTAINER ID    IMAGE                          COMMAND                  CREATED        STATUS   PORTS   NAMES
fd869b8e08c5    docker.io/John/nginx:1.0    "/docker-entrypoint.…"      8 seconds ago  Up               nginx-fd869
```
  </TabItem>
</Tabs>

Point your web browser to `localhost:8080`, and you will see the nginx intro screen. If you prefer to stay on the command line, use `curl localhost:8080`.

**To shut down the container:**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl stop <fd869b8e08c5>
nerdctl ps #to verify nothing is running 
```
 
  </TabItem>
  <TabItem value="docker">

```
docker stop <fd869b8e08c5>
docker ps #to verify nothing is running 
```

  </TabItem>
</Tabs>