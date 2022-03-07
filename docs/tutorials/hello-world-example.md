---
title: Hello World Example
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.

Rancher Desktop works with two container engines, [`containerd`](https://containerd.io/) and [Moby](https://mobyproject.org/), the open-sourced components of the Docker ecosystem. For `nerdctl`, use the containerd runtime. For `docker`, use the Moby (`dockerd`) runtime.

### Hello World example

**Create a folder:**
```
mkdir ../hello-world
cd ../hello-world
```

**Create a Dockerfile with the command below.**
```
FROM alpine  
CMD ["echo", "Hello World!!"]
```

**Build and run the image for verification purposes:**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build -t helloworld:v1.0 .
nerdctl images | grep helloworld
nerdctl run --rm helloworld:v1.0
nerdctl rmi helloworld:v1.0 #To remove the image
```

  </TabItem>
  <TabItem value="docker">

```
docker build -t helloworld:v1.0 .
docker images | grep helloworld
docker run --rm helloworld:v1.0
docker rmi helloworld:v1.0 #To remove the image
```

  </TabItem>
</Tabs>

### NGINX example

Make sure that you switch the `container runtime` setting in the **Kubernetes Settings** panel to either `dockerd` or `containerd` as needed.

**Create a folder and add a sample index.html file as follows:**
```
mkdir ../nginx
cd ../nginx
echo "<h1>Hello World from NGINX!!</h1>" > index.html
```

**Create a Dockerfile with the command below.**
```
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

**Build and run the image for verification purposes:**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build -t nginx-helloworld:v1.0 .
nerdctl images | grep nginx-helloworld
nerdctl run -d -p 8080:80 --name my-site nginx-helloworld:v1.0
```

  </TabItem>
  <TabItem value="docker">

```
docker build -t nginx-helloworld:v1.0 .
docker images | grep nginx-helloworld
docker run -d -p 8080:80 --name my-site nginx-helloworld:v1.0
```
  </TabItem>
</Tabs>

**Check your list of running containers:**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl ps
CONTAINER ID    IMAGE                                      COMMAND                   CREATED           STATUS    PORTS                   NAMES
b6775a69ab93    docker.io/library/nginx-helloworld:v1.0    "/docker-entrypoint.…"    48 seconds ago    Up        0.0.0.0:8080->80/tcp    my-site
```

  </TabItem>
  <TabItem value="docker">

```
docker ps 
CONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS          PORTS                                   NAMES
5f50ba3f504c   nginx-helloworld:v1.0   "/docker-entrypoint.…"   7 seconds ago    Up 6 seconds    0.0.0.0:8080->80/tcp, :::8080->80/tcp   my-site
```
  </TabItem>
</Tabs>

Point your web browser to `localhost:8080`, and you will see the nginx intro screen. If you prefer to stay on the command line, use `curl localhost:8080`.

**To stop, remove the container and delete the image:**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl stop <container-id>
nerdctl rm <container-id>
nerdctl ps #to verify nothing is running 
nerdctl rmi nginx-helloworld:v1.0 #to remove the image
```
 
  </TabItem>
  <TabItem value="docker">

```
docker stop <container-id>
docker rm <container-id>
docker ps #to verify nothing is running 
docker rmi nginx-helloworld:v1.0 #to remove the image
```

  </TabItem>
</Tabs>