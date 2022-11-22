---
sidebar_label: Kubernetes
title: Kubernetes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Preferences

This page allows you to modify the settings of your Rancher Desktop instance.

1. To access the **Preferences**, click on the &#9881; icon in the upper-right corner.
1. Use the tabs on the left to access different categories of Rancher Desktop preferences.
1. Update preferences as needed. The preferences available are outlined below.
1. To apply the updates, click **Apply**.

### Kubernetes

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

#### Enable Traefik

This option allows you to enable or disable Traefik. By disabling Traefik, you can free up port 80 and 443 for alternate ingress configuration. By default, Traefik is enabled.

Disabling Traefik will not delete existing resources.