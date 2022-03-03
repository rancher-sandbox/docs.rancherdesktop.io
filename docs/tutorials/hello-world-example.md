---
title: Hello World Example
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.

Rancher Desktop works with two container engines, [`containerd`](https://containerd.io/) and [Moby](https://mobyproject.org/), the open-sourced components of the Docker ecosystem. For `nerdctl`, use the containerd runtime. For `docker`, use the Moby (`dockerd`) runtime.

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

`nerdctl` can be used to demonstrate a more elaborate Hello World example:

**Create a folder with a Dockerfile and the following content:**

FROM alpine  
CMD ["echo", "Hello, USERNAME!"] (note that you will fill **USERNAME** in with something of your choosing)

**Define your nginx image in a new directory:**
```
mkdir ../test2
cd ../test2
cat > Dockerfile <<EOF
FROM nginx
EOF
```

**Build and run the image for verification purposes:**
```
nerdctl build -t USERNAME/nginx:1.0 .
nerdctl run -d -p 8080:80 USERNAME/nginx:1.0
```

**Check your list of running containers:**
```
nerdctl ps 
```

Example output:
```
CONTAINER ID    IMAGE                          COMMAND                  CREATED        STATUS   PORTS   NAMES
fd869b8e08c5    docker.io/morspin/nginx:1.0    "/docker-entrypoint.…"   8 seconds ago  Up               nginx-fd869
```

Point your web browser to `localhost:8080` and you will see the nginx intro screen. If you prefer to stay on the command line, use `curl localhost:8080`.

**To shut down the container:**
```
nerdctl stop <fd869b8e08c5> (note that the container ID has most likely changed)
nerdctl ps (to verify nothing is running) 
```

  </TabItem>
  <TabItem value="docker">

We'll use `dockerd` to demonstrate a simple Hello World example:

**Create a folder with a Dockerfile and the following content:**

FROM alpine  
CMD ["echo", "Hello, USERNAME!"] (note that you will fill **USERNAME** in with something of your choosing)

**Build and run the image for verification purposes:**
```
docker build -t USERNAME/hello:1.0 .
docker images | grep USERNAME
docker run --rm USERNAME/hello:1.0
```

**Check your list of running containers:**
```
docker ps 
```

**To shut down the container:**
```
docker stop <container_id> (note that the container ID has most likely changed)
docker ps (to verify nothing is running)
```

  </TabItem>
</Tabs>