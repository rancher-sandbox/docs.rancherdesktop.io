---
title: Windows Provisioning Scripts
---

On Windows, scripts can be written to override some of Rancher Desktop's internal processes. For example, scripts can be used to provide certain command line parameters to K3s. This guide will explain how to set up your provisioning scripts for Windows.

**Caution:** You can only utilize these provisioning scripts for Rancher Desktop, version 1.1.0 or later, on Windows.

1. Run Rancher Desktop at least once to allow it to create its configuration.

1. Open the `%AppData%\rancher-desktop\provisioning` directory. An example of the full path: `C:\Users\Joe\AppData\Roaming\rancher-desktop\provisioning`.

1. Note that any files with a file extension of `.start`, such as `k3s-overrides.start`, will be executed when _Rancher Desktop starts its Kubernetes backend_. Such files will run within the Rancher Desktop WSL context.

1. Note that files with a file extension of `.stop`, such as `wipe-data.stop`, will be executed _after Rancher Desktop shuts down its Kubernetes backend_. Such files will run within the same Rancher Desktop WSL context.

**Important to note:**
  - Scripts with Unix line endings need to be saved
  - Line-ending conversion is not done
  - Files with DOS line endings may produce unexpected results