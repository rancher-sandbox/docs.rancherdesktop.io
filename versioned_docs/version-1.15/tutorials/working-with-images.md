---
title: Working with Images
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/tutorials/working-with-images"/>
</head>

Rancher Desktop provides the ability to build, push, and pull images via the
[NERDCTL](https://github.com/containerd/nerdctl) project and the Docker CLI.

Note, both `nerdctl` and `docker` are put into the path automatically. This occurs during the installer on Windows, and upon first run on macOS and Linux.

## General Usage

Using either tool requires Rancher Desktop to be running with the appropriate container runtime. For `nerdctl`, use the containerd runtime. For `docker`, use the Moby runtime.

You can learn about all of the command options and display the help documentation by running:

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl -h
```

Unlike Docker, containerd features its own namespaces. By default, nerdctl images are stored in the `default` namespace. If you want your images available for use by Kubernetes, use the `--namespace k8s.io` or `-n k8s.io` CLI argument. You can also switch to a namespace called `default` or any other name using the option `--namespace <NAMESPACE_NAME>`.  Note that nerdctl namespaces are separate and independent from Kubernetes and `kubectl` namespaces.
 
  </TabItem>
  <TabItem value="docker" default>

```console
docker --help
```
  </TabItem>
</Tabs>

## Listing Images

To see the images currently available, run the following command:

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl images
```
  </TabItem>
  <TabItem value="docker">

```console
docker images
```
  </TabItem>
</Tabs>

## Building Images

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

Building images has a similar feel to existing tools. For example, consider
running `nerdctl` from a directory with a `Dockerfile` where the `Dockerfile` is
using a scratch image.

```console
nerdctl build .
[+] Building 0.1s (4/4) FINISHED
 => [internal] load build definition from Dockerfile
 => => transferring dockerfile: 31B
 => [internal] load .dockerignore
 => => transferring context: 2B
 => [internal] load build context
 => => transferring context: 33B
 => CACHED [1/1] ADD anvil-app /
 ```

`nerdctl` has options for tagging at the same time as building and other options you've
come to expect.

```console
nerdctl build -t TAG .
```

To build an image for use with Kubernetes, specify the `k8s.io` namespace as follows:
```console
nerdctl build -n k8s.io .
```

  </TabItem>
  <TabItem value="docker">

Consider running `docker` from a directory with a `Dockerfile` where the `Dockerfile` is
using a scratch image.

```console
docker build .
Sending build context to Docker daemon  13.93MB
Step 1/5 : FROM some-repo/some-image
 ---> e57ace221dff
...
 ---> fd984c4cbf97
Successfully built fd984c4cbf97
```

`docker` has options for tagging at the same time as building and other options you've
come to expect.

```console
docker build -t TAG .
```
  </TabItem>
</Tabs>

### Building Local Images

In order to demonstrate the steps to build local images and run apps, a sample nodejs app is provided within the [Rancher Desktop docs repository](https://github.com/rancher-sandbox/docs.rancherdesktop.io.git). To get started, clone the repository and cd into `assets/express-sample` in a terminal.

Run the following command to build image from Dockerfile:

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl --namespace k8s.io build -t expressapp:v1.0 .
```

  </TabItem>
  <TabItem value="docker">

```
docker build -t expressapp:v1.0 .
```
 
  </TabItem>
</Tabs>

Run the following command to run container:

```
kubectl run --image expressapp:v1.0 expressapp
kubectl port-forward pods/expressapp 3000:3000
```

**Note:** When adding the `latest` tag, be sure to also specify the following:
```
imagePullPolicy: Never
```

## Tagging Images

If you want to tag an existing image you've built you can use the following
command:

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
```
  </TabItem>
  <TabItem value="docker">

```console
docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
```
  </TabItem>
</Tabs>

## Removing Images

To remove an image, run the following command:

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl rmi IMAGE
```
  </TabItem>
  <TabItem value="docker">

```console
docker rmi IMAGE
```
  </TabItem>
</Tabs>