---
sidebar_label: Images
title: Images
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/images"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Windows_Images.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/macOS_Images.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Linux_Images.png)

</TabItem>
</Tabs>

The **Images** tab allows you to manage local container images via the application Graphical User Interface. Depending on the container engine selected, the options include:

- Building container images from a local Dockerfile.
- Pull images from a registry and push images to a registry.
- Delete, and scan local images.

To view how to manage container images using the command line, refer to the [Images section](../tutorials/working-with-images.md) in the Tutorials.

### Image Management Options

- `Delete`: This option is only available using the container engine `dockerd (moby)`. Images can be selected from the display view and deleted using the `Delete` button.

- `All Images`: This option is only available using the container engine `containerd (nerdctl)` and `k8s.io` namespace. This checkbox can be marked to list all images including default application images in the `Rancher` resource group.

- `Namespace`: This option is only available using the container engine `containerd (nerdctl)`. You can select a specific namespace in the cluster via the dropdown, which will then display the associated images.

- `Filter`: Accepts either text or numbered input to display filtered images.

### Scanning Images

This feature uses [Trivy] to scan your images for vulnerabilities and configuration issues.

To scan an image:

1. From the image list, find the image you want to scan.
1. Click **⋮ > Scan**.
1. A summary of the vulnerabilities, sorted by the level of severity, are displayed.
1. Click **>** to view the details of each vulnerability, including reference links to learn more about the particular vulnerability.

[Trivy]:
https://github.com/aquasecurity/trivy

### Adding Images

#### Pulling Images

Use this option to pull images from a registry to your virtual machine.

To pull an image:

1. Click the **Add Image** button in the top-right corner.
1. Click on the **Pull** tab.
1. Enter the name of the image to pull.
    > Note: By default, images are pulled from [Docker Hub] which uses the `repo/image[:tag]` format. To pull from other registries, include the hostname `registry.example.com/repo/image[:tag]`.
1. Click **Pull**.

[Docker Hub]:
https://hub.docker.com/

#### Building Images

Use this option to build an image and add it to your virtual machine.

To build an image:

1. Click the **Add Image** button in the top-right corner.
1. Click on the **Build** tab.
1. Enter a name for the image being built. E.g., `repo/image`, `repo/image:tag`, `registry.example.com/repo/image`, or `registry.example.com/repo/image:tag`.
1. Click **Build**.
1. In the file browser, select the Dockerfile to build an image with.
