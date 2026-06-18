---
title: A Short History of Rancher Desktop
slug: history-of-rancher-desktop
authors: [jan]
---

In October 2020, Rancher Desktop was a tray icon and a single shell command.
Click the icon, and it ran `minikube start` to bring up a Kubernetes cluster on
your Mac. That was the whole thing: nine files, one good idea, and a note in the
source that read, more or less, *this is just a quick proof of concept*.

<!-- truncate -->

SUSE had just bought Rancher Labs, and the goal was easy to state and hard to
build: make Kubernetes easy on a developer's laptop. We called it Rancher
Desktop because, at the time, "Rancher" was how SUSE said "Kubernetes." That
branding has gotten more complicated since, the way branding does, but the name
stuck.

About seven months later, in May 2021, the first public build shipped: macOS and
Windows, k3s for Kubernetes, an image builder called kim, and a way to switch
Kubernetes versions. It was alpha software and looked like it. Five years on
it's a different program, and the story of how it got here is mostly the story
of how much work it took to keep one simple promise on three operating systems
at once.

## Two operating systems, two backends

On a Mac, Kubernetes needs a Linux virtual machine. On Windows, it needs WSL2.
So from the very first release, Rancher Desktop had two backends, and we spent
the next five years discovering how different "two backends" really are.

The Mac side never sat still. We started with minikube, dropped it to drive
Apple's Hypervisor.framework via the docker-machine-driver-hyperkit, then
replaced it with Lima and QEMU. Each move was a rebuild of the layer that
creates the VM, installs k3s, and wires up the network. When Apple later shipped
its own Virtualization framework, VZ, moving to it was mostly a matter of
telling Lima to use it. That's the difference a real foundation makes: the next
big change stops being a rebuild.

Windows went its own way, with k3s running inside a dedicated WSL distribution
we imported from an image we built ourselves. When Linux arrived as a tech
preview in late 2021, it didn't add a third backend. It joined the Mac under
Lima, which manages the VM on macOS and Linux alike, and which we got to build
on as an upstream open-source project instead of maintaining alone. That part
worked. macOS and Linux became one backend, where a fix landed once instead of
twice.

Building on Lima also meant building it. Lima started narrow: a way to run
containers with nerdctl on a Mac. The provisioning scripts we added a few weeks
in, the mechanism that runs setup inside a fresh VM, are how Rancher Desktop
installs k3s and a container engine. They also opened up Lima so you could
provision for almost anything. Other contributions are the rules-based port
forwarding configuration and host-based DNS lookup to extend VPN connections
into the VM. What we needed, we built upstream, where every Lima user got to
benefit from it.

Windows stayed separate. We tried more than once to fold the two together but
never fully managed it. The systems were too different: a VM you own end to end
on one side, a WSL distro living under someone else's rules on the other. So
most features had to be built twice, into two backends similar enough to look
the same and different enough to break in their own ways. Every new capability
had to be implemented twice.

## A small guest with sharp edges

The VM ran Alpine Linux, picked because it's tiny: a smaller download, a faster
boot. Alpine stays small by using musl and OpenRC instead of the glibc and
systemd most Linux software is built against. Usually that's invisible.
Sometimes it isn't: you can't run the NVIDIA Container Toolkit on it, which
means no CUDA, which means machines with a GPU can't run the AI workloads people
increasingly want to run. A choice that saved a few megabytes early on walled
off a whole category of work once GPUs and AI showed up.

## More than Kubernetes

We set out to ship Kubernetes, and users kept asking for the rest of the
container toolbox. The first image builder, kim, ran inside the cluster; we
replaced it with nerdctl, the standard containerd CLI, and most people never
noticed kim was gone. Then we hit something we hadn't planned for: a lot of real
projects simply wouldn't build under nerdctl and buildkit. We added moby
(dockerd and the Docker CLI) as a second engine, so those projects would build.
Later we let people turn Kubernetes off entirely and run nothing but the
container engine. Rancher Desktop had quietly grown from "Kubernetes on your
desktop" into "containers and Kubernetes on your desktop."

## Networking never got easy

Networking was the part that never stopped being hard. A container's ports, the
right DNS answers, a corporate VPN that doesn't break everything: getting all
three to coexist took years of work on each platform, and little of it carried
across. On macOS the VM reaches the network through a layer called vmnet, where
we moved from one implementation to another and carried both for a while.
Windows needed something else entirely: to keep the VM's network from fighting
the host's VPN, we built a tunnelling network that runs in its own isolated
namespace.

Some of that split is just the operating systems being different; there's no
single answer that works on both. The question a clean design has to get right
isn't how to avoid writing two of them. It's where that code should live, pushed
as far down into the shared foundation as it will go instead of tangled through
the app.

## What people actually wanted

The request for Linux support surprised us. On Linux you can already run k3s,
containerd, and Docker natively. What does a desktop app add? Not the
containers. The value was being able to throw the whole thing away: a factory
reset that wipes the VM back to nothing, worth a lot when your environment
drifts into a state you no longer understand. People didn't want another way to
run containers. They wanted an undo button for their development machine (and
later, snapshots).

## A backend trapped in the app

Two things made Rancher Desktop easier to work with, and both ran into the same
wall.

The first was rdctl, a command-line tool for driving Rancher Desktop without
touching the GUI. It let us write our integration tests as plain shell scripts
instead of clicking through the interface, and it let users automate their
setup. But not everything was reachable from it. Port forwarding, for one, still
went through private messaging between the GUI and the backend, never exposed
through the REST API, so the GUI could do things no script could.

The second was snapshots: save the VM's state, restore it later. A simple
feature, an awkward implementation, because the backend has to stop while its
disk is copied, and the backend lives inside the GUI. So taking a snapshot
turned into a small contortion. The GUI launches rdctl, which calls back into
the GUI to ask it to shut its own backend down, takes the snapshot, then asks it
to start back up. Cancelling was worse: there was no clean channel for it, so
the GUI found the running rdctl process and killed it by name.

Underneath both was the same fact: you can't run the backend without the GUI.
You can hide the window, you can tuck it into the background, but the app is
always loaded, because the engine lives inside it. There is no headless Rancher
Desktop. For something a developer wants to script, drop on a CI runner, or hand
to an AI agent to drive, that's real friction.

## What five years taught us

Step back, and a pattern runs through all of it. Every feature got a little more
difficult to implement than the last. Two backends to change in lockstep. An
engine welded to its own UI. A guest OS that couldn't reach the GPU. None of it
was a mistake exactly (each call was reasonable when we made it), but the costs
compounded, until we were spending more time maintaining the existing machinery
than building anything new.

The parts that aged well point the way. Building on Lima gave us one backend for
macOS and Linux and an upstream community to share the load. And the
command-line tool we'd built for our own tests turned out to matter more than we
planned. A tool an AI model can explore and drive on its own is also exactly
what you want now that so much work is handed to agents.

So Rancher Desktop 2.0 starts over, on purpose. One backend across every
platform, Windows included. The backend lifted out of the UI into something you
can run on its own: headless, scripted, snapshotted by itself. A guest that can
talk to your GPU. Not because the first five years were wrong, but because they
taught us exactly what the foundation needed to be. The rest of this blog is
about what we're building on it.
