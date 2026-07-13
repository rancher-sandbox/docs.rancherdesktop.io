---
title: Watching Rancher Desktop reconcile
slug: watching-rancher-desktop-reconcile
date: "2026-07-10T12:00:00"
authors: [jan]
discussion: https://github.com/rancher-sandbox/rancher-desktop-2/discussions/PLACEHOLDER
---

Rancher Desktop 2.0 has no settings screen yet, and there are no reference docs
for its API either. But it turns out you don't really need them; you can ask
`rdd` itself what you can change, and once you change something, you can watch
it reshape the virtual machine, step by step, until the actual state matches
what you asked for.

<!-- truncate -->

The [companion post](/blog/rancher-desktop-is-a-kubernetes-api-server) explains
why Rancher Desktop can behave this way. `rdd` is a Kubernetes API server, and
Rancher Desktop's own configuration lives in it as a single object called
`App`. This post is about what that buys you in practice, which turns out to be
two things: you can read the API without any docs, and you can watch it do its
work.

## The API describes itself

There are no docs for the `App` object, but it doesn't really need any, because
the API carries its own documentation. You can read it with `explain`:

```
# rdd ctl explain app.spec.kubernetes
FIELD: kubernetes <Object>

DESCRIPTION:
    kubernetes specifies the Kubernetes configuration.

FIELDS:
  enabled   <boolean> -required-
    enabled specifies whether Kubernetes should be enabled in the VM.
  version   <string>
    version is the Kubernetes version to use (e.g. "1.32.2").
```

You can walk any part of the object this way, from `app.spec` down to a single
field. The descriptions are not baked into `explain`; they come straight from
the Go source. Each field on the `App` type carries a comment, a build step
turns those types into the CRD[^crd] and copies the comments into its OpenAPI
schema, and the API server hands that schema to any client that asks (`explain`
is just one such client). So the documentation is generated from the code, and
it cannot drift out of sync with it.

The writable side works the same way. `rdd set` is how you change the `App`
object, and it says up front where its knobs come from: "Valid property names
and types are derived from the App CRD at runtime." So its help writes itself:

```
# rdd set --help   (trimmed to the property list)
Available properties:
  containerEngine.name  (moby|containerd)
  kubernetes.enabled    (boolean)
  kubernetes.version    (string)
  running               (boolean)
```

Each of those carries the same description you would get from `explain`, and
nobody maintains this list by hand; add a field to the `App` type in the Go
source, and it turns up here, typed and documented, the next time you build.

## One setting in motion

So let's change something, and turn Kubernetes on:

```
rdd set kubernetes.enabled=true
```

The command does not return right away; it writes your one-line change into the
`App` object's `spec` and then waits, reporting each condition as it flips:

```
# rdd set kubernetes.enabled=true
App updated
Settled=False: Applying the configuration change to the VM
Running=False: Stopped for restart
Running=False: Lima instance is starting
Running=True: Lima instance is running
KubernetesReady=False: Waiting for k3s API server
KubernetesReady=True: Kubernetes cluster is ready
Settled=True: App has reached the desired state
```

None of that is special to Rancher Desktop. You wrote down a desired state, and
a controller saw the gap between what you asked for and what was actually true,
and then closed it. To do that, it reconfigured the virtual machine and
restarted it, waited for k3s to answer, and merged the new cluster into your
kubeconfig. Every line of output is a condition changing on the `App` object's
`status`; these are the same conditions you would watch on a Deployment rolling
out. `rdd set` returns once `Settled` reaches `True`, and then the cluster is
up.

That is the reconcile loop, the pattern Kubernetes itself is built on. You do
not script the steps; you record the destination in `spec`, and a controller
drives `status` toward it, telling you how far it got. Rancher Desktop manages
a VM and a cluster this way for the same reason Kubernetes manages your pods
this way; the approach survives interruption. Kill `rdd` in the middle of a
change, and the next start picks up from wherever the world actually is, and
not from where a script assumed it would be.

## Why build it this way

None of this is a trick for one setting; it is the shape of the whole system.
Rancher Desktop's state is a declarative object, so you name the end state and
leave the steps to the controller. The API describes itself, so you can find
your way around it without any documentation. And because it is the ordinary
Kubernetes API, the tools already exist: there is `explain` to read it,
`--dry-run` and `--wait` to script it,[^wait] and `rdd ctl get app -w` to watch
it change.

The same properties make Rancher Desktop easy to automate, from a shell script
all the way up to an agent that explores the API on its own. That was never an
explicit goal, though; Rancher Desktop just set out to keep its backend out of
the GUI and to speak a standard API, and being simple to automate came along
for the ride.

That is what you get from building on the Kubernetes control plane instead of
building something similar next to it. You get an API that explains itself and
a loop that makes your requests come true, and you did not have to write either
of them.

[^crd]: A CustomResourceDefinition, the way you teach a Kubernetes API server about a new kind of object. The build step that writes it from the Go types is controller-gen.

[^wait]: There is also `rdd ctl wait-condition`, which blocks until one named condition is met, so a script can wait for exactly the state it needs.

---

💬 Questions or feedback? **[Discuss this post on GitHub →](https://github.com/rancher-sandbox/rancher-desktop-2/discussions/PLACEHOLDER)**
