---
title: Glossary
---

### containerd
Daemon process in charge of managing containers. Is it the default container engine in Rancher-Desktop.

### dockerd
#### On Windows
On the host, `wslhelper.exe` spawns a Docker socket proxy for communication with WSL. For the different distributions, a separate socket is set up in each distro (see [*windowsIntegrationManager.ts*](https://github.com/rancher-sandbox/rancher-desktop/blob/main/pkg/rancher-desktop/integrations/windowsIntegrationManager.ts)).
#### On macOS
The dockerd process runs directly in the alpine-lima distro.
#### On Linux
The dockerd process runs directly in the alpine-lima distro.

### docker CLI
The Docker interface that allows to issue commands to dockerd.

### DNS resolver
A process that listens through both UDP and TCP ports on WSL and communicates with a peer process on the host machine (through `AF_VSOCK` sockets) to perform DNS resolution. Makes use of split tunneling to redirect requests to either VPN or to the internet (see [corresponding repository](https://github.com/rancher-sandbox/rancher-desktop-host-resolver)).

### helm
The interface to Helm. Helm is a tool that helps install and configure Kubernetes resources in a cluster using [charts](https://helm.sh/docs/topics/charts/).

### host-switch
#### Windows specific
The host switch process is used to provide DNS, DHCP and port forwarding to the VM through `AF_VSOCK` by communicating with the VM switch (`vm-switch` process) that is running on WSL. It is part of the experimental networking layer that makes use of the gVisor networking stack.

### k3s
k3s is a lightweight Kubernetes implementation. It is an optional component to Rancher-Desktop.

### k8s manager
A module that is responsible for setting up Kubernetes and creating an image processor depending on the runtime and thus container engine in use.

### Lima
#### macOS and Linux specific
Lima is a virtual machine manager used to run the Linux images necessary to Rancher-Desktop's functioning. 

### nerdctl
The process running on the host acts as an interface and is a wrapper for the containerd engine commands that run on the WSL virtual machine.

### rancher-desktop (distro)
Distro that is prepackaged and started by default on WSL when Rancher-Desktop is started. Used to run the main components of Rancher-Desktop.

### rancher-desktop-data
#### Windows specific
Accompanying volume to the rancher-desktop distro, used to persist configuration and data needed by Rancher-Desktop. Different distros may use separate instances of WSL as storage volumes as well.

### rdctl
Command line interface allowing access to Rancher-Desktop features.

### Traefik
Load balancer and proxy handler; used as the default ingress controller for the Kubernetes cluster. It is installed with k3s.

### Trivy
A security scanner used to find vulnerabilities or configuration issues in images.

### vm-switch
#### Windows specific
Daemon that that runs in WSL and connects to the host switch via `AF_VSOCK`. When it first starts the vm switch will create both a tap device (ethernet) and a loopback device. It is part of the experimental networking layer that makes use of the gVisor networking stack.

### WSL
#### Windows specific
WSL is a tool that makes uses of a lightweight virtual machine to run Linux distributions and binaries needed by Rancher-Desktop on Windows.