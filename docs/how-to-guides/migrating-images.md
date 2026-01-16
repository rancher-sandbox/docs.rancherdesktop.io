---
title: Migrating Moby Images Between Storage Drivers
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/migrating-images"/>
</head>

Rancher Desktop stores images using two storage drivers when running the moby (docker) container engine: the **classic storage driver** and the **containerd snapshotter**. This page explains why images become hidden and how to access them.

## Background

Starting with version 1.21, Rancher Desktop uses the containerd snapshotter for new installations.

Images stored in one storage driver remain invisible when using the other. Images may seem missing but exist in a different location.

## How Images Become Hidden

Images can accumulate in both storage drivers through several paths:

1. **Upgrading Rancher Desktop on Windows**
   In version 1.21, a bug switched all Windows moby users with existing images to the containerd snapshotter. Those images became inaccessible.

2. **Enabling WebAssembly support**
   Enabling WebAssembly switches to the containerd snapshotter. Existing images in the classic storage driver become inaccessible.

## Detecting Hidden Images

Rancher Desktop includes a diagnostic check that detects images in an inactive storage driver. View the [**Diagnostics**](../ui/diagnostics) tab to see whether images exist in both storage locations or only in the inactive driver.

## Switching Between Storage Drivers

Switch storage drivers using the `--container-engine.moby-storage-driver` setting. This setting accepts three values:

| Value | Behavior |
|-------|----------|
| `auto` | (Default) Selects the best driver based on the algorithm below. |
| `classic` | Always uses the classic storage driver. |
| `snapshotter` | Always uses the containerd snapshotter. |

With `auto`, Rancher Desktop selects the containerd snapshotter if any of the following is true:

- WebAssembly is enabled
- Data exists in the containerd snapshotter
- No data exists in the classic driver

Otherwise, the classic storage driver is used.

To switch to the classic storage driver and access older images:

```
rdctl set --container-engine.moby-storage-driver=classic
```

To switch to the containerd snapshotter:

```
rdctl set --container-engine.moby-storage-driver=snapshotter
```

Rancher Desktop restarts after you change this setting.

## Migrating Images Between Storage Drivers

To transfer images from one storage driver to the other:

1. Switch to the storage driver containing the images you want to migrate away from.

2. Export the images to a tar archive:
   ```
   docker save --output images.tar image1:tag1 image2:tag2
   ```

3. Switch to the target storage driver.

4. Import the images:
   ```
   docker load --input images.tar
   ```

See [Transfer Container Images](./transfer-container-images.md) for details on saving and loading images.

## Reclaiming Disk Space

To reclaim disk space used by an inactive storage driver, either perform a manual cleanup or a factory reset.

### Manual Cleanup

1. Switch to the storage driver containing the images you want to delete.

2. Stop and remove all containers (required before removing images they use):
   ```
   docker stop $(docker ps --quiet)
   docker container prune
   ```

3. Remove the images:
   ```
   docker image prune --all
   ```

4. Switch back to `auto`:
   ```
   rdctl set --container-engine.moby-storage-driver=auto
   ```

### Factory Reset

Perform a [factory reset](../ui/troubleshooting.md#factory-reset) to remove all data and start fresh with the containerd snapshotter.

## Recommendation

The containerd snapshotter is the recommended storage driver for most users. It provides:

- Tighter integration with containerd-based tools
- Full support for multi-platform images
- WebAssembly workload support
- Alignment with the container ecosystem's direction

After migrating images to the snapshotter, delete the remaining data in the classic storage as described above. With no data in the classic storage driver, the `auto` setting will select the containerd snapshotter.
