---
title: Migrating Moby Images Between Storage Drivers
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/migrating-images"/>
</head>

Rancher Desktop stores images using two storage drivers when running the moby (docker) container engine: the **classic storage driver** and the **containerd snapshotter**. This page explains why images become hidden and how to access them.

## Background

Starting with version 1.21, Rancher Desktop uses the containerd snapshotter for new installations. The containerd snapshotter integrates better with containerd-based tooling and enables WebAssembly support.

Images stored in one storage driver remain invisible when using the other. Your images may appear missing but actually exist in a different location.

## How Images Become Hidden

Images can accumulate in both storage drivers through several paths:

1. **Upgrading Rancher Desktop on Windows**: In version 1.21, a bug switched all Windows moby users with existing images to the containerd snapshotter. Those images became inaccessible.

2. **Enabling WebAssembly support**: Enabling WebAssembly switches to the containerd snapshotter. Existing images in the classic storage driver become inaccessible.

## Detecting Hidden Images

Rancher Desktop includes a diagnostic check that detects images in an inactive storage driver. View diagnostics in the **Troubleshooting** tab or run:

```
rdctl api /v1/diagnostic_checks
```

The `MOBY_IMAGE_STORE` diagnostic reports whether images exist in both storage locations or only in the inactive driver.

## Switching Between Storage Drivers

Switch storage drivers using the `--container-engine.moby-storage-driver` setting. This setting accepts three values:

| Value | Behavior |
|-------|----------|
| `auto` | (Default) Uses the containerd snapshotter if WebAssembly is enabled, if data exists in the snapshotter, or if no data exists in the classic driver. Otherwise uses the classic driver. |
| `classic` | Always uses the classic storage driver. |
| `snapshotter` | Always uses the containerd snapshotter. |

To switch to the classic driver and access older images:

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

1. Switch to the storage driver containing the images you want to migrate.

2. Export the images to a tar archive:
   ```
   docker save -o images.tar image1:tag1 image2:tag2
   ```

3. Switch to the target storage driver.

4. Import the images:
   ```
   docker load -i images.tar
   ```

See [Transfer Container Images](./transfer-container-images.md) for details on saving and loading images.

## Reclaiming Disk Space

To reclaim disk space by removing images from an inactive storage driver:

1. Switch to the storage driver containing the images you want to delete.

2. Remove the images:
   ```
   docker image prune -a
   ```

3. Switch back to your preferred storage driver.

Alternatively, perform a [factory reset](../ui/troubleshooting.md#factory-reset) to remove all data and start fresh with the containerd snapshotter.

## Recommendation

The containerd snapshotter is the recommended storage driver for most users. It provides:

- Better integration with containerd-based tools
- WebAssembly workload support
- Alignment with the container ecosystem's direction

After migrating all needed images, set:

```
rdctl set --container-engine.moby-storage-driver=snapshotter
```

This ensures consistent behavior and lets you delete any remaining data in the classic storage location.
