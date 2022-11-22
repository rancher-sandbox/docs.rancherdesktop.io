---
sidebar_label: Container engine
title: Container engine
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Preferences

This page allows you to modify the settings of your Rancher Desktop instance.

1. To access the **Preferences**, click on the &#9881; icon in the upper-right corner.
1. Use the tabs on the left to access different categories of Rancher Desktop preferences.
1. Update preferences as needed. The preferences available are outlined below.
1. To apply the updates, click **Apply**.

### Container Runtime

Set the [container runtime] for Rancher Desktop. Users have the option of [containerd] which provides namespaces for containers and the use of nerdctl or [dockerd (moby)] which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time.

When switching to a different container runtime:

- Workloads and images that have been built or pulled using the existing container runtime are not available on the container runtime being switched to.

[container runtime]:
https://kubernetes.io/docs/setup/production-environment/container-runtimes/

[containerd]:
https://containerd.io/

[dockerd (moby)]:
https://mobyproject.org/
