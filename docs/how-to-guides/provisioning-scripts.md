---
title: Provisioning Scripts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Provisioning scripts can be used to override some of Rancher Desktop's internal processes. For example, scripts can be used to provide certain command line parameters to K3s, add additional mounts, increase ulimit value etc. This guide will explain how to set up your provisioning scripts for macOS, Linux, and Windows.

## macOS & Linux
On macOS and Linux, you can use lima override.yaml to write provisioning scripts. 

- Create `override.yaml` file at below path

<Tabs groupId="os">
  <TabItem value="macOS" default>

```
~/Library/Application Support/rancher-desktop/lima/_config/override.yaml
```

  </TabItem>
  <TabItem value="Linux">

```
~/.local/share/rancher-desktop/lima/_config/override.yaml
```

  </TabItem>
</Tabs>

- Write a provisioning script in the `override.yaml` file created in the previous step. For example, you can use the below script to increase ulimit for containers.

```
provision:
- mode: system
  script: |
    #!/bin/sh
    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf
    * soft     nofile         82920
    * hard     nofile         82920
    EOF
```
- You can also use `override.yaml` to override/modify a lima configuration setting, for example, to create additional mounts as shown below.
```
mounts:
  - location: /some/path 
    writable: true
```

## Windows 
**Caution:** You can only utilize these provisioning scripts for Rancher Desktop, version 1.1.0 or later, on Windows.

- Run Rancher Desktop at least once to allow it to create its configuration.

- Open the `%AppData%\rancher-desktop\provisioning` directory. An example of the full path: `C:\Users\Joe\AppData\Roaming\rancher-desktop\provisioning`.

- Note that any files with a file extension of `.start`, such as `k3s-overrides.start`, can be executed when _Rancher Desktop starts its Kubernetes backend_ (if enabled). Such files will run within the Rancher Desktop WSL context.

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

- Note that files with a file extension of `.stop`, such as `wipe-data.stop`, can be executed _after Rancher Desktop shuts down its Kubernetes backend_ (if enabled). Such files will run within the same Rancher Desktop WSL context.

Example flow for `.stop` files:
- Stop `k3s`, `dockerd` or `containerd`
- Run deprovisioning scripts

**Important to note:** Scripts need to be saved with Unix line endings; line-ending conversion is not done; and files with DOS line endings may produce unexpected results. There are some limitations to the things you can change using provisioning scripts. For example, you cannot change the hard ulimits on WSL2 using provisioning scripts. Please use provisioning scripts with caution and feel free to reach out to the Rancher Desktop team on Slack/Github if you have a specific question about provisioning scripts.
