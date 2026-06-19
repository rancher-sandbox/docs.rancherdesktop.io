---
title: Installing and Running Rancher Desktop 2.0
slug: installing-rancher-desktop-2
authors: [jan]
discussion: https://github.com/rancher-sandbox/rancher-desktop-2/discussions/472
---

The 2.0 alpha is out, and there are two ways to run it. Install the full
desktop app, or skip the GUI and run the new rdd binary straight from your
terminal. Both leave Rancher Desktop alone, and both put you a couple of
commands from a working container engine.

<!-- truncate -->

2.0 installs beside Rancher Desktop without touching it: separate package,
separate data, nothing shared. Install or remove them in any order. (The
[welcome post](/blog/welcome-to-rancher-desktop-2) covers what 2.0 is and how
it differs; this one is about getting it running.)

## Install the desktop app

The full app, the GUI plus a set of bundled command-line tools, comes from the
[latest release](https://github.com/rancher-sandbox/rancher-desktop-2/releases/latest)
on GitHub; its notes list the download for every platform. Open the **Assets**
list there.

On macOS, download the `.dmg` that matches your chip:
`Rancher.Desktop-2.0.0-alpha.1.aarch64.dmg` on Apple silicon, or the `x86_64`
build on an Intel Mac. Open it, drag the app into Applications, and launch it
from there.

On Windows, download the installer, `Rancher.Desktop.Setup.2.0.0-alpha.1.msi`,
and run it. Install WSL2 first if you have not already; 2.0 runs its Linux VM
through WSL2, just as Rancher Desktop does.

On Linux, install from our RPM or DEB repositories or run the AppImage, the
same channels as Rancher Desktop.

The first time you launch the app, it sets up the backend and downloads the
VM image, which can take a while on a slow connection. After that the app is
talking to a running container engine, and you can manage containers, images,
and volumes from its window.

One thing the app will not do for you yet: turn on Kubernetes. It starts with
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
app and download the single `rdd` binary instead. It is the whole backend in
one file: no installer, nothing to unpack.

The binaries are in the same release. The name is `rdd-` followed by the
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

`rdd run` is the no-commitment way to use 2.0. It starts the daemon if it is
not already up, then runs your command with the `PATH` and the Docker and
Kubernetes contexts pointed at 2.0 for that command only. It leaves your own
configuration untouched. So if your machine is already set up for Rancher
Desktop, leave it that way and reach for 2.0 with `rdd run` when you want to
try something. The very first start downloads the openSUSE Leap image and
brings the VM up, which can take a while on a slow connection; after that it is
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

The same `rdd` commands drive 2.0 whether you installed the app or only the
binary. The GUI is one more client; underneath, it runs the daemon you do.

`rdd run` is fine for the occasional command. If you reach for 2.0 a lot, put
`docker`, `kubectl`, and `helm` on your `PATH` directly. The first start
populates `~/.rd2/bin` with them; add that directory to your `PATH` yourself,
in this shell and in your profile:

```bash
export PATH="$HOME/.rd2/bin:$PATH"
```

This alpha sets up no paths for you, so that line is your job. Both the Docker
and Kubernetes contexts are named `rancher-desktop-2`, and 2.0 will not take
over a context you already have selected. If you run both side by side, move
between them by switching contexts:

```bash
docker context use rancher-desktop-2
kubectl config use-context rancher-desktop-2
```

Managing the backend itself needs no `rdd run`. `rdd start` brings it up and
`rdd stop` takes it down, keeping your data for next time:

```bash
rdd start   # bring the backend up
rdd stop    # take it down, keep your data
```

There is no upgrade path between previews yet, so each new alpha starts from a
clean slate. `rdd svc delete` stops the daemon and removes everything 2.0
created, the VM, the cluster, your settings, and the daemon's own data, keeping
only the download cache so a reinstall does not refetch the VM image. It is
also how you uninstall: after it runs, delete the `rdd` binary or remove the
app. The cache it leaves is Lima's, not ours (`~/Library/Caches/lima` on macOS,
`~/.cache/lima` on Linux, `~/AppData/Local/lima` on Windows); delete it too for
a full reclaim. A later release will handle that for you, clearing distro
images from earlier previews automatically and adding a command to empty the
cache. For the next preview instead, install the new build and start again.

That is the alpha: install it one of two ways, start it, run a container. It
will break on setups we have never seen, and when it does, tell us. Finding out
where it breaks is much of why we shipped it this early.

## A glimpse underneath

rdd is a Kubernetes API server in its own right, and Rancher Desktop's own
state lives inside it as Kubernetes objects. `rdd ctl` is kubectl aimed at that
API. Ask it for the App object and the whole machine prints as YAML: the
container engine, the Kubernetes version it settled on, and the conditions
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

This is not the cluster you turned on earlier. It is Rancher Desktop
representing itself through the same API your tools already speak, which means
anything that drives Kubernetes can drive it, no bespoke SDK and no private
protocol. There is a lot to say about that, and it gets a post of its own.

---

💬 **[Join the discussion on GitHub →](https://github.com/rancher-sandbox/rancher-desktop-2/discussions/472)**
