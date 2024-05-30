---
sidebar_label: Kubernetes
title: Kubernetes
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/kubernetes"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/preferences/Windows_kubernetes.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/preferences/macOS_kubernetes.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.14/preferences/Linux_kubernetes.png)

</TabItem>
</Tabs>

#### Enable Kubernetes

This option allows you to enable or disable Kubernetes. By disabling Kubernetes, you can run just `containerd` or `dockerd` by itself for reduced resource consumption. By default, Kubernetes is enabled.

To enable/disable Kubernetes, just check/uncheck the `Enable Kubernetes` checkbox. The app will be restarted when you enable/disable Kubernetes. Disabling Kubernetes will not delete existing resources and they will be available again when you enable Kubernetes again.

#### Kubernetes Version

This option presents a list of Kubernetes versions that your Rancher Desktop instance can use.

When upgrading:

- A check is performed to see if the target Kubernetes version is available locally. If not, it downloads the files.
- Workloads are retained.
- Images are retained.

When downgrading:

- Workloads are removed.
- Images are retained.

To switch versions:

1. Click the **Kubernetes version** drop-down menu.
1. Select the version you want to change to.

#### Kubernetes Port

Set the port Kubernetes is exposed on. Use this setting to avoid port collisions if multiple instances of K3s are running.

#### Options

##### Enable Traefik

This option allows you to enable or disable Traefik. By disabling Traefik, you can free up port 80 and 443 for alternate ingress configuration. By default, Traefik is enabled.

Disabling Traefik will not delete existing resources.

##### Install Spin Operator

:::caution warning

This is an **experimental** setting.

:::

This option will install the [spinkube](https://www.spinkube.dev/) operator with the `cert-manager` prerequisite, and configure it with the `spin` RuntimeClass.

This option requires that the [WebAssembly](./container-engine/general.md) support is enabled.

:::note

Rancher Desktop automatically installs the [spin cli](https://developer.fermyon.com/spin/v2/index) and the [kube plugin](https://github.com/spinkube/spin-plugin-kube) to help develop and deploy Spin applications on Kubernetes.

:::
