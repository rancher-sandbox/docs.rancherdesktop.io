---
title: Hello World Example
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.

Rancher Desktop works with two container engines, [containerd](https://containerd.io/) and [Moby](https://mobyproject.org/), the open-sourced components of the Docker ecosystem. For `nerdctl`, use the **containerd** runtime. For `docker`, use the **dockerd(moby)** runtime.

### Example#1 - Build Image & Run Container

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

### Example#2 - Build Image & Deploy Container to Kubernetes

Make sure that you switch the **Container Runtime** setting in the **Kubernetes Settings** panel to either `dockerd` or `containerd` as needed.

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

**Build Image from code locally:**

:warning: **Note:** Please note that you need to pass the flag `--namespace k8s.io` to the `nerdctl` build command, so that `nerdctl` builds the image and then makes it available in the `k8s.io` namespace.

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build --namespace k8s.io -t nginx-helloworld:latest .
nerdctl images --namespace k8s.io | grep nginx-helloworld
```

  </TabItem>
  <TabItem value="docker">

```
docker build -t nginx-helloworld:latest .
docker images | grep nginx-helloworld
```
  </TabItem>
</Tabs>

**Deploy to Kubernetes**

Run below command to create and run a pod using the image built in the previous step. 

:warning: **Note:** Please note that you need to pass the flag `--image-pull-policy=Never` to use a local image with `:latest` tag, as `:latest` tag will always try to pull the images from a remote repository.

```
kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80
kubectl port-forward pods/hello-world 8080:80
```

Point your web browser to `localhost:8080`, and you will see the message `Hello World from NGINX!!`. If you prefer to stay on the command line, use `curl localhost:8080`.

**To delete the pod and the image:**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
kubectl delete pod hello-world
nerdctl rmi nginx-helloworld:latest --namespace k8s.io #to remove the image
```
 
  </TabItem>
  <TabItem value="docker">

```
kubectl delete pod hello-world 
docker rmi nginx-helloworld:latest #to remove the image
```

  </TabItem>
</Tabs>
