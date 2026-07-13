---
title: Rancher Desktop is a Kubernetes API server
slug: rancher-desktop-is-a-kubernetes-api-server
date: "2026-07-10T09:00:00"
authors: [jan]
discussion: https://github.com/rancher-sandbox/rancher-desktop-2/discussions/PLACEHOLDER
---

Enable Kubernetes in Rancher Desktop and you get a cluster; no surprise there.
But the daemon that runs it, `rdd`, is itself a Kubernetes API server, holding
Rancher Desktop's own state as objects you can query. So there are actually two
Kubernetes API servers on your machine, and only one of them runs your pods.

<!-- truncate -->

Back in the [install walkthrough](/blog/installing-rancher-desktop-2) I ran `rdd
ctl get app`, watched Rancher Desktop's own state print as a Kubernetes object,
and said it deserved a post of its own. So here it is.

This may sound like a riddle; that second API server is up before you enable
Kubernetes, and it stays up after you turn Kubernetes off again. But it gets
simpler once you know that Kubernetes really is two separate things sharing a
single name.

## Kubernetes is two things

The part everyone meets is the workload layer: the kubelet on each node, the
pods, and your containers. You hand it a Deployment, and it finds a node and
runs the thing. But the other part is the control plane, where an API server
holds resources and controllers reconcile them. You write down what you want,
and the controllers work to make it true.

The control plane knows nothing about containers; it just stores objects and
runs reconcile loops. The containers themselves only show up when the workload
layer acts on those objects. So if you pull the two halves apart, the control
plane turns out to be a general engine for "here is the state I want, go make
it so," and that engine is the part `rdd` keeps.

## The App object

Everything Rancher Desktop needs to know about itself lives in a single object
called `App`.[^singleton] You can ask for it the same way you would ask any
cluster for a resource:

```yaml
# rdd ctl get app app -o yaml   (trimmed)
apiVersion: app.rancherdesktop.io/v1alpha1
kind: App
metadata:
  name: app
spec:
  containerEngine:
    name: moby
  kubernetes:
    enabled: true
    version: 1.34.6
  running: true
status:
  kubernetesPort: 7443
  conditions:
  - type: ContainerEngineReady
    status: "True"
    reason: Connected
  - type: KubernetesReady
    status: "True"
    reason: Ready
  - type: Settled
    status: "True"
    reason: Settled
```

The object has two halves. The `spec` is what you asked for: the moby engine,
Kubernetes enabled at version 1.34.6, and the VM running. The `status` is what
`rdd` observed: the port it put the cluster on (7443), and a list of conditions
reporting how far along it got. You only ever edit the `spec`; the controllers
write the `status`. Every Kubernetes resource works this way, from a pod to a
deployment, and now Rancher Desktop itself does too.

## A control plane with nothing to run

Ask this API server what kinds of objects it holds, and the list is short:

```
# rdd ctl api-resources   (trimmed)
NAME               APIVERSION                              KIND
configmaps         v1                                      ConfigMap
secrets            v1                                      Secret
apps               app.rancherdesktop.io/v1alpha1          App
limavms            lima.rancherdesktop.io/v1alpha1         LimaVM
containers         containers.rancherdesktop.io/v1alpha1   Container
images             containers.rancherdesktop.io/v1alpha1   Image
volumes            containers.rancherdesktop.io/v1alpha1   Volume
```

The standard building blocks are there (ConfigMaps, Secrets, and the rest),
right next to Rancher Desktop's own kinds. But the whole workload layer is
missing; there are no pods, no deployments, and no nodes. Ask for a node, and
the server has never heard of one:

```
# rdd ctl get nodes
error: the server doesn't have a resource type "nodes"
```

`rdd` runs no containers, so it needs no kubelet, no scheduler, and none of the
other machinery that ties Kubernetes to a Linux host. And what is left over is
portable; the same control plane runs natively on macOS, Windows, and Linux.
The [history post](/blog/history-of-rancher-desktop) made the case for a single
backend on every platform, and a control plane with nothing to schedule is a
big part of what makes that possible.

It does still need somewhere to keep its objects. Kubernetes stores them in
etcd;[^etcd] `rdd` uses SQLite instead, which is the same swap k3s makes so it
can ship as a single binary.

## So where is the cluster?

You did start a cluster, and it is real; `rdd ctl get nodes` came up empty
because the cluster lives somewhere else. It runs inside the virtual machine,
as a separate Kubernetes with its own API server. Point `kubectl` at that one,
and the node is right there:

```
# kubectl --context rancher-desktop-2 get nodes
NAME      STATUS   ROLES           AGE   VERSION
lima-rd   Ready    control-plane   44s   v1.34.6+k3s1
```

The two API servers do different jobs. The one `rdd ctl` talks to is Rancher
Desktop describing itself; the one `kubectl` talks to is the k3s cluster where
your workloads run. And the first one manages the second; setting
`kubernetes.enabled: true` on the `App` object is how you tell the control
plane to bring the k3s cluster into existence.

## Your tools already work

Because Rancher Desktop represents itself as Kubernetes objects, and serves
them from a real Kubernetes API server, everything that already speaks that API
can drive `rdd`. `rdd ctl` is not a bespoke tool; it really is just `kubectl`,
pointed at the control plane. So `get`, `-o yaml`, `-o jsonpath`, label
selectors, and watches all work, because there was never anything custom to
support.

This is quite different from a normal application API. There is no `rdd` SDK to
import, and no private protocol to reverse-engineer; your tools already speak
the Kubernetes API, and Rancher Desktop answers it like any other cluster
would.

This post leaves two questions open: how the control plane turns a one-line
change to the `App` object into a running cluster, and how you find your way
around this API when there are no docs for it. I take both up in a
[companion post](/blog/watching-rancher-desktop-reconcile).

[^singleton]: There is only ever one, it is cluster-scoped, and it must be named `app`. Hence `get app app`, the kind followed by the name.

[^etcd]: The distributed key-value store a normal Kubernetes cluster keeps its objects in. The shim that swaps it for SQLite is kine, borrowed from k3s.

---

💬 Questions or feedback? **[Discuss this post on GitHub →](https://github.com/rancher-sandbox/rancher-desktop-2/discussions/PLACEHOLDER)**
