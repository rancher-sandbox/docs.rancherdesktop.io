---
title: Running When Offline
---

Rancher Desktop can be run when offline, aka in air-gapped mode. This document covers requirements
and possible problems when running in air-gapped mode.

### Network-sensitive areas

There are two areas where Rancher Desktop assumes network availability and will recover in an air-gapped situation:

1. Pulling Kubernetes `k3s` images into the `k3s` cache directory

2. Using `kuberlr` as a version-aware wrapper around `kubectl`, so the client never differs from the Kubernetes serer by more than one minor version.

### Existing Deployments

If Rancher Desktop has been installed on a machine initially with networked access, it can 
be run subsequently on that machine after network connectivity has been turned off. The main
difference in core functionality is that the list of versions of Kubernetes available in drop-down menus
is limited to those versions that have actually been downloaded and stored in the cache.

There is a problem using the `kubectl` client, because of the `kuberlr` wrapper (Windows users should add the `.exe` suffix to each executable utility file).

In this case, we're discussing a system that was initialized when connected to the internet, but we're about
to take the machine offline for future use.

Suppose there are three versions of `k3s` in the `rancher-desktop` cache.

1.24.3

1.21.14

1.19.16

But suppose that on this system we only ran `kubectl` when using versions `1.24.3` and `1.21.14`. This means that 
the `~/.kuberlr/PLATFORM-ARCH/` directory (`$HOME/windows-amd64` on Windows) will contain only two files:

kubectl1.24.3

kubectl1.21.14

If we go offline and use the UI to switch to Kubernetes `1.19.16`, when `kubectl` is run, the system will fail.
The problem is that `kubectl` is an alias for `kuberlr`, which will try to download `kubectl 1.19.16` and install it
in the `.kuberlr` directory, but won't be able to access it.

So in this case, it would be best to prepare a connected system for disconnecting by selecting each available version of 
Kubernetes currently in the cache, and running `kubectl --context rancher-desktop cluster-info` to ensure that an appropriate
version of the `kubectl` client is installed.

You _could_ install versioned `kubectl`s manually. This is covered in the next section.

### Preparing an Air-Gapped System

Here we assume you have some kind of removable media which you can populate on an internet-connected system, and then move over to the air-gapped system.

There are two directories that need to be populated in order for Rancher Desktop to function off-line:

#### The Cache directory

To populate a source disk (which we refer to here as %SOURCEDISK%, although it is probably some kind of removable medium like a USB thumb drive), you need the following files:

* `k3s-versions.json` -- this file is created by Rancher Desktop. It reads a raw JSON file from `https://update.k3s.io/v1-release/channels` and converts it into a different kind of JSON file. Currently there is no utility to do that conversion; the easiest way to get this file is to run Rancher Desktop on a connected system and save the `CACHE/k3s-versions.json` file (see below for where `CACHE` exists on different platforms).
* Tar archives of Kubernetes k3s images. These are listed at https://github.com/k3s-io/k3s/releases, and you'll want to download `k3s-airgap-images-amd64.tar` or `k3s-airgap-images-arm64.tar` (for AMD/intel and M1 machines respectively) for the versions you plan on working with. For example, the following commands will let you work with K3s v 1.24.3 build 1 offline:

```
cd .../CACHE
mkdir v1.24.3+k3s1
cd v1.24.3+k3s1
wget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/k3s-airgap-images-amd64.tar
wget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/sha256sum-amd64.txt
```

##### Windows

On Windows, the cache directory is at `%HOME%\AppData\Local\rancher-desktop\cache\k3s`, and can be created with the command

```
mkdir --Force %HOME%\AppData\Local\rancher-desktop\cache\k3s
```

Assuming you have some source media, you would also run the following commands to pre-populate the cache:

```
copy-item %SOURCEDISK%\k3s-versions.json %HOME%\AppData\Local\rancher-desktop\cache\
copy-item -Recurse %SOURCEDISK%\v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> %HOME%\AppData\Local\rancher-desktop\cache\k3s\
```

##### macOS

On macOS, the cache directory is at `$HOME/Library/Caches/rancher-desktop` and the commands to populate it would be

```
CACHEDIR=$HOME/Library/Caches/rancher-desktop
mkdir -p $CACHEDIR/k3s
cp $SOURCEDISK/k3s-versions.json $CACHEDIR/
cp -r $SOURCEDISK/v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $CACHEDIR/k3s/
```

##### Linux

On Linux, the cache directory is at `$HOME/.cache/rancher-desktop` and the commands to populate it would be

```
CACHEDIR=$HOME/.cache/rancher-desktop
mkdir -p $CACHEDIR/k3s
cp $SOURCEDISK/k3s-versions.json $CACHEDIR/
cp -r $SOURCEDISK/v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $CACHEDIR/k3s/
```

#### The kuberlr directory

The location of this directory is more straightforward. On all platforms, it's at `HOME/.kuberlr/PLATFORM-ARCH` where `HOME` is the home directory on Windows (usually `%HOMEDRIVE%\%HOMEPATH` on Windows, and `~` or `$HOME` on macOS and Linux), `PLATFORM` is one of `windows`, `linux`, or `darwin`, and `ARCH` is `aarch64` on M1 machines, and `amd64` everywhere else.

To populate it, determine which versions of Kubernetes you'll be using, and download the appropriate executables from the internet. These would be in:

`https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl`

or for Windows:

`https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl.exe`

`VERSION` will have the form `vMAJOR.MINOR.PATCH` (like `v1.22.1`),

`PLATFORM` will be one of `darwin`, `linux`, or `windows`,

`CPU` will `arm64` on M1 machines and `amd64` everywhere else.

For example, to get a kubectl for Windows that will work with Kubernetes 1.22, this Windows command-shell (not powershell) command will put it on the `SOURCEDISK`:

```
wget -O %SOURCEDISK/kubectl1.22.1.exe https://dl.k8s.io/v1.22.1/bin/windows/amd64/kubectl.exe
```

##### A note on versions

Kubectl clients are guaranteed to work with servers that are running the same MAJOR version and differ in the MINOR version by at most 1. So for example, if your organization is working with Kubernetes versions v1.21.x, v1.22.x, and v1.23.x, for any patch-version of `x`, you would only need to install `kubectl1.22.x` in the `.kuberlr` directory. But if you copy a `v1.24.x` of Kubernetes into the `CACHE` directory, you'll need to ensure there's a compatible `kubectl` in the `.kuberlr` directory as well (any of `v1.23.x`, `v1.24.x`, or `v1.25.x` would suffice). 
