---
title: Reclaiming Disk Space
---

Rancher Desktop runs containers and Kubernetes inside a virtual machine. The VM's disk grows as you pull and build images, but it does not shrink when you delete them. This guide explains how to free space inside the VM, grow the VM disk when you need more room, and move the VM storage to another disk.

## Why the disk grows but never shrinks

Container images, build layers, and volumes live inside the virtual machine's disk image. The disk image starts small and grows on demand as the VM writes to it. Deleting images and containers frees space *inside* the VM, but the disk image on your host keeps its larger size; the freed space is reused by future images rather than returned to the host.

To return space to the host, delete the virtual machine and let Rancher Desktop recreate it (see [Factory Reset](#factory-reset)).

## Freeing space inside the VM

Removing unused images, containers, and volumes stops the disk from growing further and makes room for new data.

Prune everything the engine no longer needs:

```
docker system prune --all --volumes
```

With the `containerd (nerdctl)` engine, run the same command with `nerdctl` in place of `docker`.

To target specific resources:

```
docker image prune --all      # remove all unused images
docker container prune        # remove all stopped containers
docker volume prune           # remove all unused volumes
```

You can also delete images from the **Images** tab in the Rancher Desktop UI. With the `dockerd (moby)` engine, select one or more images and click **Delete**. See [Images](../ui/images.md) for details.

To remove images hidden in an inactive storage driver, see [Migrating Moby Images Between Storage Drivers](./migrating-images.md#reclaiming-disk-space).

### Reset Kubernetes

[Resetting Kubernetes](../ui/troubleshooting.md#reset-kubernetes) offers an option to delete container images at the same time. This clears the images without touching the rest of your data.

### Factory Reset

A [factory reset](../ui/troubleshooting.md#factory-reset) deletes the virtual machine and recreates it from scratch. This is the only action that returns the disk image's space to the host. It removes all images, containers, volumes, and settings, so treat it as a last resort.

## Growing the VM disk

The VM disk is 100 GiB by default. To enlarge it, set a larger size and restart Rancher Desktop:

```
rdctl set --experimental.virtual-machine.disk-size=200GiB
```

The disk only grows, so a value smaller than the current size has no effect. No GUI control exists for this setting.

:::note
Growing the disk applies to macOS and Linux. On Windows, WSL2 manages the disk and grows it automatically.
:::

## Moving the VM storage to another disk

The virtual machine can occupy tens of gigabytes. To keep it off your system drive, move its directory to another disk and leave a link behind. Quit Rancher Desktop before you start.

### macOS

```
mv ~/Library/Application\ Support/rancher-desktop/lima /Volumes/External/rd-lima
ln -s /Volumes/External/rd-lima ~/Library/Application\ Support/rancher-desktop/lima
```

### Linux

```
mv ~/.local/share/rancher-desktop/lima /mnt/external/rd-lima
ln -s /mnt/external/rd-lima ~/.local/share/rancher-desktop/lima
```

### Windows

Rancher Desktop stores its data in two WSL distributions: `rancher-desktop`, which holds the software and stays roughly fixed in size, and `rancher-desktop-data`, which holds your container images and grows. Export each distribution you want to move, unregister it, and re-import it at the new location. The export file is large, so write it to a disk with enough free space:

```
wsl --shutdown
wsl --export rancher-desktop-data rancher-desktop-data.tar
wsl --unregister rancher-desktop-data
wsl --import rancher-desktop-data D:\rancher-desktop-data rancher-desktop-data.tar --version 2
```

Move the `rancher-desktop` distribution the same way if you need to. Once Rancher Desktop starts and works, delete the `.tar` file.

:::caution
A factory reset recreates the virtual machine in its default location, undoing the move. Rancher Desktop leaves the relocated data in place rather than deleting it, so remove it yourself after a reset if you no longer need it.
:::
