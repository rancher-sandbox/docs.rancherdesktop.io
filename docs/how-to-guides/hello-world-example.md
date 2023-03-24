---
title: Hello World Example
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.

Rancher Desktop works with two container engines, [containerd](https://containerd.io/) and [Moby](https://mobyproject.org/), the open-sourced components of the Docker ecosystem. For `nerdctl`, use the **containerd** runtime. For `docker`, use the **dockerd(moby)** runtime.

### Example#1 - Build Image & Run Container

#### Create a folder
```
mkdir hello-world
cd hello-world
```

#### Create a blank Dockerfile

On Windows, Create a blank file named `Dockerfile`

On Linux, You can use below command to create a blank `Dockerfile`

```
vi Dockerfile
```

#### Populate the Dockerfile with the command below
```
FROM alpine  
CMD ["echo", "Hello World!!"]
```

#### Build and run the image for verification purposes

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build --tag helloworld:v1.0 .
nerdctl images | grep helloworld
nerdctl run --rm helloworld:v1.0
# Remove the image
nerdctl rmi helloworld:v1.0 
```

  </TabItem>
  <TabItem value="docker">

```
docker build --tag helloworld:v1.0 .
docker images | grep helloworld
docker run --rm helloworld:v1.0
# Remove the image
docker rmi helloworld:v1.0 
```

  </TabItem>
</Tabs>

### Example#2 - Build Image & Deploy Container to Kubernetes

Make sure that you switch the **Container Runtime** setting in the **Kubernetes Settings** panel to either `dockerd` or `containerd` as needed.

#### Create a folder and add a sample index.html file as follows
```
mkdir nginx
cd nginx
echo "<h1>Hello World from NGINX!!</h1>" > index.html
```

#### Create a blank Dockerfile

On Windows, Create a blank file named `Dockerfile`

On Linux, You can use below command to create a blank `Dockerfile`

```
vi Dockerfile
```

#### Populate the Dockerfile with the command below
```
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

#### Build image from code locally

:warning: **Note:** Please note that you need to pass the flag `--namespace k8s.io` to the `nerdctl` build command, so that `nerdctl` builds the image and then makes it available in the `k8s.io` namespace.

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl --namespace k8s.io build --tag nginx-helloworld:latest .
nerdctl --namespace k8s.io images | grep nginx-helloworld
```

  </TabItem>
  <TabItem value="docker">

```
docker build --tag nginx-helloworld:latest .
docker images | grep nginx-helloworld
```
  </TabItem>
</Tabs>

#### Deploy to Kubernetes

Run below command to create and run a pod using the image built in the previous step. 

:warning: **Note:** Please note that you need to pass the flag `--image-pull-policy=Never` to use a local image with `:latest` tag, as `:latest` tag will always try to pull the images from a remote repository.

```
kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80
kubectl port-forward pods/hello-world 8080:80
```

Point your web browser to `localhost:8080`, and you will see the message `Hello World from NGINX!!`. If you prefer to stay on the command line, use `curl localhost:8080`.

#### Delete the pod and the image

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
kubectl delete pod hello-world
# Remove the image
nerdctl --namespace k8s.io rmi nginx-helloworld:latest 
```
 
  </TabItem>
  <TabItem value="docker">

```
kubectl delete pod hello-world 
# Remove the image
docker rmi nginx-helloworld:latest
```

  </TabItem>
</Tabs>
