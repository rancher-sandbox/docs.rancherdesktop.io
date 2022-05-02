---
title: Windows Provisioning Scripts
---

On Windows, scripts can be written to override some of Rancher Desktop's internal processes. For example, scripts can be used to provide certain command line parameters to K3s. This guide will explain how to set up your provisioning scripts for Windows.

**Caution:** You can only utilize these provisioning scripts for Rancher Desktop, version 1.1.0 or later, on Windows.

1. Run Rancher Desktop at least once to allow it to create its configuration.

1. Open the `%AppData%\rancher-desktop\provisioning` directory. An example of the full path: `C:\Users\Joe\AppData\Roaming\rancher-desktop\provisioning`.

1. Note that any files with a file extension of `.start`, such as `k3s-overrides.start`, can be executed when _Rancher Desktop starts its Kubernetes backend_ (if enabled). Such files will run within the Rancher Desktop WSL context.

Example flow for `.start` files:
- Rancher Desktop internal setup
- Run provisioning scripts
- Enable `dockerd` or `containerd` in the UI
- Kubernetes (K3s)

As an example, using `%AppData%\rancher-desktop\provisioning\insecure-registry.start` will allow `nerdctl` to use insecure registries by default:

```
#!/bin/sh

mkdir -p /etc/nerdctl
cat >  /etc/nerdctl/nerdctl.toml <<EOF
insecure_registry = true
EOF
```

1. Note that files with a file extension of `.stop`, such as `wipe-data.stop`, can be executed _after Rancher Desktop shuts down its Kubernetes backend_ (if enabled). Such files will run within the same Rancher Desktop WSL context.

Example flow for `.stop` files:
- Stop `k3s`, `dockerd` or `containerd`
- Run deprovisioning scripts

**Important to note:** Scripts need to be saved with Unix line endings; line-ending conversion is not done; and files with DOS line endings may produce unexpected results.