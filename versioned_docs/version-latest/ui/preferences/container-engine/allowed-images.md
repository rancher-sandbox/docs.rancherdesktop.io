---
sidebar_label: Allowed Images
title: Allowed Images
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/container-engine/allowed-images"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

The `Allowed Images` tab lets you control which registry artifacts you can access within Rancher Desktop. For example, you may want to pull container images only from your organization's private registry or only from your department-specific namespace in your organization's registry, etc. You can specify image name patterns to allow accessing images only from specific registries and/or repositories.

<Tabs groupId="os">
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/preferences/Windows_containerEngine_tabAllowedImages.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.12/preferences/macOS_containerEngine_tabAllowedImages.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/preferences/Linux_containerEngine_tabAllowedImages.png)

</TabItem>
</Tabs>

#### Allowed image patterns

Check the **Enable** checkbox to enable Rancher Desktop to apply the specified patterns while pulling or pushing images, which means only images whose names match at least one of the specified patterns will be allowed.

You can use the **+** and **-** buttons to add/remove image name patterns.

##### How to specify Allowed Image patterns

You can specify Allowed Image patterns using the format `[registry/][:port/][organization/]repository[:tag]`.

> If not specified in an Allowed Image pattern,
> * `registry` defaults to Docker Hub (`docker.io`).
> * `port` defaults to 433. 
> * `organization` for Docker Hub defaults to `library`, and does not apply to other registries.
> * `tag` defaults to anything and **not** just to `latest`.

**Note:** Filtering by `tag` does not actually work; the corresponding digests (`repository@digest`) will have to be added to the allow list as well, making this impractical. Please file a Github issue if you have a use-case that requires filtering based on tags!

#### Examples

| Pattern                   | Meaning                                                                                                                                                                                                             |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `busybox`                 | Allow the `busybox` repository in the `library` organization of the `docker.io` registry.                                                                                                       |
| `suse/`                   | Allow any image in the `suse` organization of the `docker.io` registry. <br/> **Note:** A trailing slash at the end of the repository means a single segment follows, e.g. `suse/nginx`, but not `suse/cap/uaa`.    |
| `suse//`                  | Allow any image in the `suse` organization of the `docker.io` registry. <br/> **Note:** A trailing double slash at the end of the repository means one or more segments follow, e.g. `suse/cap/uaa`.                |
| `registry.internal:5000`  | Allow any image from the `registry.internal:5000` registry.                                                                                                                                                         |
| `registry.suse.com/nginx` | Allow the image `nginx` from the `registry.suse.com` registry. <br/> **Note:** Non-DockerHub registries do not have the concept of organizations at the top level, so no default `library` organization is implied. |
