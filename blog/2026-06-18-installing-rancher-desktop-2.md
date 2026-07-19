---
title: Installing and Running Rancher Desktop 2.0
slug: installing-rancher-desktop-2
authors: [jan]
discussion: https://github.com/rancher-sandbox/rancher-desktop-2/discussions/472
---

The 2.0 alpha is out, and there are two ways to run it. You can install the
full desktop app, or you can skip the GUI and run the new `rdd` binary straight
from your terminal. Both leave Rancher Desktop 1.x alone, and both put you a
couple of commands away from a working container engine.

<!-- truncate -->

2.0 installs beside Rancher Desktop 1.x without touching it, with a
separate package and separate data. Install or remove them in any order. On
Linux, the RPM and DEB packages are the one exception in this alpha and won't
install alongside Rancher Desktop 1.x. (The
[welcome post](/blog/welcome-to-rancher-desktop-2) covers what 2.0 is and how
it differs; this one is about getting it running.)

## Install the desktop app

The full app, including the GUI and a set of bundled command-line tools, comes
from the
[latest release](https://github.com/rancher-sandbox/rancher-desktop-2/releases/latest)
on GitHub; its notes list the download for every platform. Open the **Assets**
list there.

On macOS, download the `.dmg` that matches your chip:
`Rancher.Desktop-2.0.0-alpha.1.aarch64.dmg` on Apple silicon, or the `x86_64`
build on an Intel Mac. Open it, drag the app into Applications, and launch it
from there.

On Windows, download the installer, `Rancher.Desktop.Setup.2.0.0-alpha.1.msi`,
and run it. Install WSL2 first if you haven't already; 2.0 runs its Linux VM
through WSL2, just as Rancher Desktop 1.x does.

On Linux, install from our RPM or DEB repositories[^linux], or run the AppImage,
similar to the channels used for Rancher Desktop 1.x.

The first time you launch the app, it sets up the backend and downloads the
VM image, which can take a while on a slow connection. After that the app is
talking to a running container engine, and you can manage containers, images,
and volumes from its window.

One thing the app won't do for you yet: turn on Kubernetes. It starts with
Kubernetes off, and this alpha has no settings screen or first-run dialog to
change that, so you enable it from the command line. The first run installs
`rdd` into `~/.rd2/bin`; put that on your `PATH` (or call `~/.rd2/bin/rdd`
directly) and run:

```bash
rdd set kubernetes.enabled=true
```

The VM is already running without Kubernetes, so this restarts it once. A
settings screen and first-run options are on the way; for now the command line
is the only switch.

## Or just the daemon

If you want a container engine and a cluster with no window on screen, skip the
app and download the single `rdd` binary instead. It's the whole backend in
one file; there's no installer and nothing to unpack.

The binaries are in the same GitHub release. The name is `rdd-` followed by the
version, the operating system, and the CPU architecture: on an Apple silicon
Mac you want `rdd-2.0.0-alpha.1.darwin.aarch64`; on x86_64 Linux,
`rdd-2.0.0-alpha.1.linux.x86_64`. Download the one for your machine, put it on
your `PATH`, and make it executable:

```bash
curl --location --output /usr/local/bin/rdd \
  https://github.com/rancher-sandbox/rancher-desktop-2/releases/download/v2.0.0-alpha.1/rdd-2.0.0-alpha.1.darwin.aarch64
chmod +x /usr/local/bin/rdd
```

From there, one command gets you a running container:

```bash
rdd run docker run --rm hello-world
```

`rdd run` is the no-commitment way to use 2.0. It starts the daemon if it's
not already up, then runs your command with the `PATH` and the Docker and
Kubernetes contexts pointed at 2.0 for that command only. It leaves your own
configuration untouched. So if your machine is already set up for Rancher
Desktop 1.x, leave it that way and reach for 2.0 with `rdd run` when you want
to try something. The very first start downloads the openSUSE Leap image and
brings the VM up, which can take a while on a slow connection; after that it's
quick.

Kubernetes works the same way. On a fresh setup, `rdd run kubectl get node`
enables Kubernetes at the default version and runs against the new cluster,
with no separate step to turn it on:

```bash
rdd run kubectl get node
```

That shortcut fires only the first time, while nothing is configured yet. Once
Rancher Desktop exists, turn Kubernetes on with `rdd set`:

```bash
rdd set kubernetes.enabled=true
```

The version defaults to the latest stable; pass `kubernetes.version=1.32.2` to
pin a specific one (1.31 or newer).

## Driving it

The same `rdd` commands drive 2.0 whether you installed the full app or only the
binary. The GUI is an additional client; underneath, it runs the same daemon
as you do.

`rdd run` is fine for the occasional command. If you use 2.0 a lot, add
`~/.rd2/bin` to your `PATH` and call the tools directly. The first start
populates that directory; add it to your `PATH` yourself, in this shell and in
your profile:

```bash
export PATH="$HOME/.rd2/bin:$PATH"
```

What you find there depends on how you installed. `rdd` provides `kubectl`
itself, so it's there either way. `docker` and `helm` come with the full app,
which links them into `~/.rd2/bin` alongside its other bundled tools and the
credential helpers; with the daemon-only download, supply `docker` and `helm`
yourself.

Both the Docker and Kubernetes contexts are
named `rancher-desktop-2`, and 2.0 won't take over a context you already
have selected. If you run both side by side, move between them by switching
contexts:

```bash
docker context use rancher-desktop-2
kubectl config use-context rancher-desktop-2
```

You don't need `rdd run` to manage the backend itself; `rdd start` brings it up
and `rdd stop` takes it down, keeping your data for next time:

```bash
rdd start   # bring the backend up
rdd stop    # take it down, keep your data
```

There's no upgrade path between previews yet, so each new alpha starts from a
clean slate. `rdd svc delete` stops the daemon and removes everything 2.0
created (the VM, the cluster, your settings, and the daemon's own data),
keeping only the download cache so a reinstall doesn't refetch the VM image.
It's also how you uninstall; after it runs, just delete the `rdd` binary or
remove the app. The cache it leaves behind is Lima's, not ours
(`~/Library/Caches/lima` on macOS, `~/.cache/lima` on Linux,
`~/AppData/Local/lima` on Windows); delete it too if you want to reclaim all
the space. A later release will handle that for you, clearing distro images
from earlier previews automatically and adding a command to empty the cache.

That's the alpha: install it one of two ways, start it, and run a container.
It may break on setups we've never seen, and if it does, please tell us.

## A glimpse underneath

`rdd` is a Kubernetes API server in its own right, and Rancher Desktop's own
state lives inside it as Kubernetes objects. `rdd ctl` is `kubectl` aimed at that
API. Ask it for the App object and the whole machine prints as YAML: the
container engine, the requested Kubernetes version, and the conditions
tracking its progress toward the state you asked for.

```yaml
# rdd ctl get app -o yaml
apiVersion: v1
items:
- apiVersion: app.rancherdesktop.io/v1alpha1
  kind: App
  metadata:
    creationTimestamp: "2026-06-17T17:44:58Z"
    finalizers:
    - rdd.rancherdesktop.io/cleanup
    generation: 4
    name: app
    resourceVersion: "507"
    uid: 3ab44aec-8949-41b8-8432-03224fe38ce5
  spec:
    containerEngine:
      name: moby
    kubernetes:
      enabled: true
      version: 1.34.6
    namespace: rancher-desktop
    running: true
  status:
    conditions:
    - lastTransitionTime: "2026-06-19T00:57:05Z"
      message: Container engine synced
      observedGeneration: 4
      reason: Connected
      status: "True"
      type: ContainerEngineReady
    - lastTransitionTime: "2026-06-19T00:57:10Z"
      message: Kubernetes cluster is ready
      observedGeneration: 4
      reason: Ready
      status: "True"
      type: KubernetesReady
    - lastTransitionTime: "2026-06-17T17:45:19Z"
      message: Lima instance created successfully
      observedGeneration: 4
      reason: Created
      status: "True"
      type: Created
    - lastTransitionTime: "2026-06-19T00:57:10Z"
      message: App has reached the desired state
      observedGeneration: 4
      reason: Settled
      status: "True"
      type: Settled
    - lastTransitionTime: "2026-06-19T00:57:05Z"
      message: Lima instance is running
      observedGeneration: 4
      reason: Started
      status: "True"
      type: Running
    kubernetesPort: 7443
kind: List
metadata:
  resourceVersion: ""
```

This is not the cluster you turned on earlier; it's Rancher Desktop
representing itself through the same API your tools already speak. That means
anything that drives Kubernetes can also drive Rancher Desktop, without a
bespoke SDK or a private protocol. There's a lot to say about that, and it
gets a post of its own.

## The commands in one place

<div className="command-reference">

| Command | What it does |
| --- | --- |
| `rdd run <cmd>` | Run one command against 2.0, starting the daemon if needed and leaving your own setup untouched |
| `rdd start` | Bring the backend up |
| `rdd stop` | Take the backend down, keeping your data |
| `rdd set <key>=<value>` | Change a setting, such as `rdd set kubernetes.enabled=true` |
| `rdd svc delete` | Stop the daemon and remove everything 2.0 created (also how you uninstall) |
| `rdd ctl` | `kubectl` aimed at the `rdd` API, where Rancher Desktop keeps its own state |

</div>

<style>{`
  .command-reference td:first-child {
    white-space: nowrap;
  }
`}</style>

[^linux]: The RPM and DEB packages share a few files with the Rancher Desktop 1.x package, such as `/usr/bin/rancher-desktop`, so the two will not install together. Use the AppImage to run 2.0 alongside 1.x. [Issue #509](https://github.com/rancher-sandbox/rancher-desktop-2/issues/509).

---

💬 Questions or feedback? **[Discuss this post on GitHub →](https://github.com/rancher-sandbox/rancher-desktop-2/discussions/472)**
