---
title: Watching Rancher Desktop reconcile
slug: watching-rancher-desktop-reconcile
date: "2026-07-28T12:00:00"
authors: [jan]
description: >-
  Rancher Desktop 2.0's settings screen covers a handful of fields, and the API
  underneath it has no reference docs. But you don't really need them; you can
  ask rdd itself what you can change, and once you change something, you can
  watch it reshape the virtual machine, step by step, until the actual state
  matches what you asked for.
discussion: https://github.com/rancher-sandbox/rancher-desktop-2/discussions/PLACEHOLDER
---

Rancher Desktop 2.0's settings screen covers a handful of fields, and the API
underneath it has no reference docs. But you don't really need them; you can
ask `rdd` itself what you can change, and once you change something, you can
watch it reshape the virtual machine, step by step, until the actual state
matches what you asked for.

<!-- truncate -->

The [companion post](/blog/rancher-desktop-is-a-kubernetes-api-server) explains
why Rancher Desktop can behave this way. `rdd` is a Kubernetes API server, and
Rancher Desktop's own configuration lives in it as a single object called
`App`. This post is about what that buys you in practice.

## The API describes itself

There are no external docs for the `App` object, but it doesn't need any,
because you can query the API itself for documentation. You can read it with
`explain`, for example:

```console
$ rdd ctl explain app.spec.kubernetes
FIELD: kubernetes <Object>

DESCRIPTION:
    kubernetes specifies the Kubernetes configuration.

FIELDS:
  enabled   <boolean> -required-
    enabled specifies whether Kubernetes should be enabled in the VM.
  version   <string>
    version is the Kubernetes version to use (e.g. "1.32.2").
```

You can walk any part of the object, from `app.spec` down to a single field.
The descriptions are not baked into `explain`; they come straight from [the Go
source](https://github.com/rancher-sandbox/rancher-desktop-2/blob/8810bada2a02d88f91391cc7d6c56f305239d04b/rdd/pkg/apis/app/v1alpha1/app_types.go#L164-L171).
Each field on the `App` type carries a comment, a build step turns those types
into the CRD[^crd] and copies the comments into its OpenAPI schema, and the API
server hands that schema to any client that asks (`explain` is just one such
client). So the documentation is generated from the code, and it cannot drift
out of sync with it.

The writable side works the same way. `rdd set` is how you change the `App`
object, and it says up front where its knobs come from: "Valid property names
and types are derived from the App CRD at runtime." So the property list in its
help comes straight from the CRD too:

```console
$ rdd set --help   # trimmed to the property list
Available properties:
  containerEngine.name  (moby|containerd)
  kubernetes.enabled    (boolean)
  kubernetes.version    (string)
  running               (boolean)
```

Each of those shows the same description you'd get from `explain`, and
nobody maintains this list by hand; when we add a field to the `App` type,
it turns up here, typed and documented, in the next build.

## One setting in motion

So let's change something, and turn Kubernetes on:

```bash
rdd set kubernetes.enabled=true
```

The command doesn't return right away. It writes your one-line change into the
`App` object's `spec` and then waits, quietly, until everything has settled.
`rdd` logs at warn level by default, and a condition changing is only info, so
you see nothing unless you ask for it. Ask, and you can watch it work:

```console
$ rdd --log-level=info set kubernetes.enabled=true   # trimmed
INFO[0000] App updated
INFO[0000] Waiting for App to settle
INFO[0000] ContainerEngineReady=True: Container engine synced (Connected)
INFO[0000] Settled=False: Applying the configuration change to the VM (ApplyingTemplate)
INFO[0000] ContainerEngineReady=False: failed to ping Docker: ... no such file or directory (ConnectFailed)
INFO[0002] Running=False: Stopped for restart (Stopped)
INFO[0002] Running=False: Lima instance is starting (Starting)
INFO[0002] ContainerEngineReady=False: Container engine stopped (Stopped)
INFO[0022] Running=True: Lima instance is running (Started)
INFO[0022] KubernetesReady=False: Waiting for k3s API server (Probing)
INFO[0022] ContainerEngineReady=True: Container engine synced (Connected)
INFO[0027] KubernetesReady=True: Kubernetes cluster is ready (Ready)
INFO[0027] Settled=True: App has reached the desired state (Settled)
```

The whole change took 27 seconds,[^clock] and 20 of those were the VM
restarting. The Docker error partway through comes from that same restart.
The container engine goes down with the VM, so its socket disappears for a
while, and `ContainerEngineReady` goes from connected to failed to stopped and
back again. Conditions describe the state at that moment. They change as often
as the state does.

That's all ordinary Kubernetes behaviour. You wrote down a desired state. A
controller saw the gap between what you asked for and what was actually true,
and closed it. To do that, it reconfigured the virtual machine and
restarted it, waited for k3s to answer, and merged the new cluster into your
kubeconfig. Most of those lines are a condition changing on the `App` object's
`status`; these are the same conditions you'd watch on a Deployment rolling
out. `rdd set` returns once `Settled` reaches `True`. The cluster is up at that
point.

That's the reconcile loop, the pattern Kubernetes itself is built on. Rancher
Desktop manages a VM and a cluster the same way Kubernetes manages your pods;
the approach survives interruption. Kill `rdd` in the middle of a change, and
the next start should pick up from wherever the world actually is. A script
would have to remember which steps it had already run, because a crash loses
that record.

## Why build it this way

Modelling the app as a controller puts everything it can do behind an API, and
Rancher Desktop's own GUI is just another client of it. Nothing is locked
inside the window. Anything you can do by clicking, you can do from a script,
with `kubectl` or with the standard Kubernetes client libraries, and our own
integration tests exercise the application the same way a GUI user would.

The API also describes itself, which is what `explain` was doing earlier. You
can find out what a field is for without hunting down a separate document that
has since gone stale, and so can an autonomous AI agent working on your behalf.

[^crd]: A CustomResourceDefinition, the way you teach a Kubernetes API server about a new kind of object. The build step that writes it from the Go types is controller-gen.

[^clock]: The number in brackets is seconds since the command started.

---

💬 Questions or feedback? **[Discuss this post on GitHub →](https://github.com/rancher-sandbox/rancher-desktop-2/discussions/PLACEHOLDER)**
