---
title: Welcome to Rancher Desktop 2.0
slug: welcome-to-rancher-desktop-2
authors: [jan]
discussion: https://github.com/rancher-sandbox/rancher-desktop-2/discussions/473
---

Rancher Desktop 2.0 is a full rewrite, and the first build is ready for you
to try. There is an alpha you can download today and run on your own machine.

<!-- truncate -->

Let's call it what it is: an early tech preview. It is rough, and not meant for
production. It exists so you can see that 2.0 is real and already running, and
so you can tell us what you would like while the architecture is still soft
enough to change.

## What 2.0 is

We rewrote Rancher Desktop because the old design made every new feature take
more effort than the one before it. The [history
post](/blog/history-of-rancher-desktop) tells that story; the short version is
one backend instead of two, the engine lifted out of the GUI, and a different
guest OS underneath. 2.0 is that idea, built from scratch.

At the center is a new background program called `rdd`, the Rancher Desktop
Daemon, and it is the part that does the real work. It runs the virtual machine
(using Lima on all platforms now, including Windows), it starts your container
engine, and it manages your Kubernetes cluster. `rdd` exposes all of this
through an API, but not a custom one; it actually speaks the Kubernetes API, so
you can talk to it directly with `kubectl` or any of the standard client
libraries, and there is no new SDK to learn. The desktop app is really just
another client without any special privileges; it talks to `rdd` the same way
any other tool would.

Because the work lives in `rdd` instead of inside a window, you can run the
whole thing without ever opening the GUI. And `rdd` is one self-contained
executable; there is no installer and no separate daemon and command-line tool,
just one file that is both the backend and the way you drive it. Download it,
start it from the command line, and you have a container engine and a cluster:
on a headless server, on a CI runner, or in your own terminal. Deploying it
just means copying one file. Rancher Desktop never had a way to do this,
because the engine lived inside the app, and the app had to be on screen.

The guest VM runs openSUSE Leap now instead of Alpine, and the reason is glibc;
much of the GPU and AI tooling people ask for needs it, and Alpine's musl does
not provide it. GPU support is not built yet, but the guest OS no longer rules
it out.

## Why an alpha, and why now

We could have kept this private until it looked polished, but we would rather
not. Putting it out now, rough edges and all, does two things for us.

It shows that "we will do that in 2.0" means a workstream already running, not a
promise about some distant year. And it puts the design in front of you early,
when your feedback still counts. If your setup depends on something specific,
this is the moment to say so, before we lock in decisions.

## What you can do today

This is a working preview, not a finished product. Here is what runs right now:

- Start, stop, and delete Rancher Desktop 2.0, from the GUI or the command line.
- Install and run it with no GUI at all: the daemon with your local
  command-line tools.
- Build and run containers with the Docker (moby) engine.
- Manage containers from the dashboard: start, stop, pause, resume, delete.
- Turn on Kubernetes (version 1.31 or newer), switch versions, and browse the
  cluster in the built-in dashboard.

## What is not there yet

So you are not caught off guard:

- moby is the only container engine for now.
- There is no settings screen. You pick your Kubernetes version from the command
  line.
- So far, the interface covers containers, images, and volumes, plus the
  cluster dashboard.
- There is no upgrade path between previews. Each new build means a clean slate:
  factory reset, then install fresh. It stays that way until 2.0 reaches a real
  release.

## It can be installed beside Rancher Desktop 1.x

You do not have to choose. 2.0 installs next to Rancher Desktop 1.x, and the
two ignore each other, with a separate package and separate data. Install or
remove them in either order. The Linux RPM and DEB packages are the exception
in this alpha.[^linux] Don't run them both at once, though; there are likely to
be port and socket conflicts.

## How to try it

The full app, GUI plus bundled tools, comes from the [latest
release](https://github.com/rancher-sandbox/rancher-desktop-2/releases/latest)
on GitHub for Windows and macOS (Intel and Apple silicon), and from our RPM and
DEB repositories and AppImages on Linux, the same places you would reach for
Rancher Desktop 1.x. If all you want is the daemon, download the single `rdd`
binary for your platform and you are two commands away from a running
container.

A real [installation and usage
walkthrough](/blog/installing-rancher-desktop-2) is a separate post in this
series.

This is alpha software. Things will break, especially in corners we have never
tested on a machine configured like yours. When they do, please tell us; that
feedback is a big part of why we are shipping this early.

## Staying in the loop

There are no docs for 2.0 yet, so for now this blog takes their place. As the
work moves, we will write about how the pieces fit and what becomes newly
possible: the daemon and its API, networking, snapshots, the AI story, whatever
we just released. To find out when the next preview drops, subscribe to the
feed.

Curious, and feeling adventurous? Give it a try. Cautious? Follow along, and
jump in when it looks ready for you.

[^linux]: The RPM and DEB packages share files with the Rancher Desktop 1.x package, such as `/usr/bin/rancher-desktop`, so the two will not install together. Use the AppImage to run 2.0 alongside 1.x. [Issue #509](https://github.com/rancher-sandbox/rancher-desktop-2/issues/509).

---

💬 Questions or feedback? **[Discuss this post on GitHub →](https://github.com/rancher-sandbox/rancher-desktop-2/discussions/473)**
