---
sidebar_label: Images
title: Images
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Images** tab, allows you to manage the images on your virtual machine.

To manage your images using nerdctl instead, refer to the [Images](../tutorials/working-with-images) section.

<Tabs groupId="os">
<TabItem value="Windows">

![](../img/ui-main/Windows_Images.png)

</TabItem>
<TabItem value="macOS">

![](../img/ui-main/macOS_Images.png)

</TabItem>
<TabItem value="Linux">

![](../img/ui-main/Linux_Images.png)

</TabItem>
</Tabs>

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

1. Click the **+** button in the top-right corner.
1. Click on the **Pull** tab.
1. Enter the name of the image to pull.
    > Note: By default, images are pulled from [Docker Hub] which uses the `repo/image[:tag]` format. To pull from other registries, include the hostname `registry.example.com/repo/image[:tag]`.
1. Click **Pull**.

[Docker Hub]:
https://hub.docker.com/

#### Building Images

Use this option to build an image and add it to your virtual machine.

To build an image:

1. Click the **+** button in the top-right corner.
1. Click on the **Build** tab.
1. Enter a name for the image being built. E.g., `repo/image`, `repo/image:tag`, `registry.example.com/repo/image`, or `registry.example.com/repo/image:tag`.
1. Click **Build**.
1. In the file browser, select the Dockerfile to build an image with.
