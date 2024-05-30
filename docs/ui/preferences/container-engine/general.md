---
sidebar_label: General
title: General
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/container-engine/general"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

Set the [container runtime] for Rancher Desktop. Users have the option of [containerd] which provides namespaces for containers and the use of nerdctl or [dockerd (moby)] which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/preferences/Windows_containerEngine_tabGeneral.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/preferences/macOS_containerEngine_tabGeneral.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/preferences/Linux_containerEngine_tabGeneral.png)

</TabItem>
</Tabs>

#### Container Engine

When switching to a different container runtime: Workloads and images that have been built or pulled using the current container runtime are not available on the container runtime being switched to.

#### WebAssembly (wasm)

The Wasm feature allows running WebAssembly application as containers, either directly with the container engine, or via Kubernetes. Details are available in the [Working with WebAssembly](../../../tutorials/working-with-webassembly.md) tutorial.

:::caution warning
Note that when using the `moby` container engine, enabling the Wasm feature switches to a different image store, so previously built or downloaded images will not be available and must be built or downloaded again. The images are not lost; Rancher Desktop will switch back to the old image store when Wasm is disabled again.
:::

:::info
If the machine has a [Locked Deployment Profile](../../../getting-started/deployment.md) installed, then the Wasm feature will be disabled and locked unless the profile uses schema version `11` or later.
:::

[container runtime]:
https://kubernetes.io/docs/setup/production-environment/container-runtimes/

[containerd]:
https://containerd.io/

[dockerd (moby)]:
https://mobyproject.org/
