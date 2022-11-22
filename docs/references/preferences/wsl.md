---
sidebar_label: Virtual machine / WSL
title: Virtual machine / WSL
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Preferences

This page allows you to modify the settings of your Rancher Desktop instance.

1. To access the **Preferences**, click on the &#9881; icon in the upper-right corner.
1. Use the tabs on the left to access different categories of Rancher Desktop preferences.
1. Update preferences as needed. The preferences available are outlined below.
1. To apply the updates, click **Apply**.

### WSL (Windows)

The option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can communicate with the Rancher Desktop Kubernetes cluster using tools like `kubectl` from within the WSL distribution.

With WSL, memory and CPU allocation is configured globally across all Linux distributions. Refer to the [WSL documentation] for instructions.

[WSL documentation]:
https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig
