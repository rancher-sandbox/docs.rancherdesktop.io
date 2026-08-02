---
title: "Rancher Desktop 2.0 Alpha 2: the settings screen is back"
slug: rancher-desktop-2-alpha-2
date: "2026-07-29T09:00:00"
authors: [jan]
description: >-
  Alpha 1 shipped without a settings screen, so every change went through the
  command line. Alpha 2 brings the Preferences dialog back, wired to the same
  Kubernetes object that rdd set writes to, and validated by the same admission
  webhook.
discussion: https://github.com/rancher-sandbox/rancher-desktop-2/discussions/PLACEHOLDER
---

Alpha 1 of Rancher Desktop 2.0 shipped without a settings screen. Everything
worked, but you made every change from the command line. Alpha 2 brings the
Preferences dialog back, and it reads and writes the same object the command
line does.

<!-- truncate -->

<img
  className="blog-screenshot"
  src="https://suse-rancher-media.s3.amazonaws.com/desktop/blog/2026/rancher-desktop-2-alpha-2/preferences-kubernetes.png"
  alt="The Rancher Desktop 2.0 Preferences dialog on the Kubernetes tab, showing the Enable Kubernetes checkbox and the Kubernetes version dropdown. Diagonal stripes ring the selected tab."
/>

The stripes behind the selected tab mark a pre-release build, and the app icon
wears the same pattern. Development builds of 2.0 get them too, and the stripes
come off in the final release.

## What's in it

Three sections. **Application** turns automatic update checks on or off.
**Virtual Machine** sets how many CPUs and how much memory the VM gets.
**Kubernetes** enables the cluster and picks its version.

That's a short list next to Rancher Desktop 1.x, and the missing sections are
still in the source, commented out. Each one comes back when the field behind
it exists on the `App` object and the daemon knows how to reconcile it.
Container engine selection, allowed images, and the WSL integrations are all
waiting on that.

## It's an API client

Two earlier posts explained that `rdd` is
[a Kubernetes API server](/blog/rancher-desktop-is-a-kubernetes-api-server),
and that you can
[watch it reconcile](/blog/watching-rancher-desktop-reconcile) a change you
make with `rdd set`. The Preferences dialog is another client of that same
API. Every control is bound to a field path on the `App` object, so the
checkbox you just clicked and

```bash
rdd set kubernetes.enabled=true
```

both write the same field.

## The server decides what's valid

Change a control, and before you press anything, the dialog sends your edit to
the daemon as a dry-run patch. It's a real request, with `dryRun: All` and
strict field validation, that the API server evaluates and then throws away.
Keep typing and it sends another, cancelling the one still in flight.

If the admission webhook rejects the change, the dialog shows the message the
API server returned in its `Status` object, and the **Apply** button stays
disabled. Press **Apply** once the server is happy, and it replays the same
patch for real.

So the dialog carries no copy of the rules. Ask for zero CPUs and the daemon
turns you down, whether the request comes from the dialog, from `rdd set`, or
from `kubectl` against the daemon's API. The rules live in the API server
because that's where every client meets. I'll come back to the admission
webhook in its own post.

## Where the version list comes from

The daemon publishes the Kubernetes versions it supports as a `k3s-versions`
ConfigMap, and the dropdown is a view of it. Versions that head a channel
appear under **Recommended Versions**, the rest under **Other Versions**. This
build carries k3s 1.32 through 1.35.

You can read it yourself:

```console
$ rdd ctl get configmap k3s-versions --namespace rancher-desktop --output jsonpath='{.data.channels}'
{"1.32":"1.32.13","1.33":"1.33.10","1.34":"1.34.6","1.35":"1.35.3","latest":"1.35.3","stable":"1.34.6"}
```

The channel aliases work from the command line, where the defaulting
webhook[^webhook] resolves them before anything is stored:

```bash
rdd set kubernetes.version=stable
```

That's a merge patch underneath, and you can send it yourself:

```bash
rdd ctl patch app app --type merge --patch '{"spec":{"kubernetes":{"version":"stable"}}}'
```

Read the value back afterwards, and the alias is gone:

```console
$ rdd ctl get app app --output jsonpath='{.spec.kubernetes.version}'
1.34.6
```

`rdd set` saves you the JSON. There's no `rdd get` yet, so reading stays in the
long form.

Because the list ships inside the build, a k3s release newer than the one you
installed has to wait for the next preview.

## The rest of Alpha 2

The [release notes](https://github.com/rancher-sandbox/rancher-desktop-2/releases/tag/v2.0.0-alpha.2)
have the full list; here are three of the changes. On Linux, 2.0 finally
installs beside 1.x. The RPM and DEB claimed the same file names, so the two
packages conflicted, and the launcher we shipped ran the 1.x binary. On
Windows, the host-side network bridge moved into the per-VM host agent, so its
ports and listeners now go away with the VM instead of outliving it. And
`~/.kube/config` is safe from overlapping writers, which could previously tear
it into invalid YAML or drop the clusters you use with other tools.

## Still an alpha

This is a preview, so expect rough edges, and don't put it in front of anything
you care about. There's no upgrade path between previews, and Alpha 2 refuses
to start against a backend Alpha 1 created. Clear the old one first:

```bash
rdd svc delete
```

That takes the containers, images, volumes, and cluster with it, so there's
nothing to carry across. Then uninstall Alpha 1 and install Alpha 2. It sits
alongside Rancher Desktop 1.x without touching it, though only one of them can
run at a time.

On Windows, the Virtual Machine tab shows the CPU and memory controls, but
WSL2 ignores both. Set them in `.wslconfig` until we sort that out.

Downloads and the full list of changes are in the
[release](https://github.com/rancher-sandbox/rancher-desktop-2/releases/tag/v2.0.0-alpha.2),
and the [installation post](/blog/installing-rancher-desktop-2) still covers
getting it running, GUI or backend-only.

[^webhook]: In Kubernetes terms it's a mutating admission webhook, which rewrites values on their way in. The webhook that turned down zero CPUs is a separate, validating one, and only answers yes or no.

---

💬 Questions or feedback? **[Discuss this post on GitHub →](https://github.com/rancher-sandbox/rancher-desktop-2/discussions/PLACEHOLDER)**
