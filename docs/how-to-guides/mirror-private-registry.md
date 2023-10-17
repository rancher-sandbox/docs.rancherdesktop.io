---
title: Mirroring Private Registries
---

import TabsConstants from '@site/core/TabsConstants';

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/mirror-private-registry"/>
</head>

Rancher Desktop can be configured to mirror private registries using either container runtime (`containerd` or `dockerd`) via provisioning scripts or updating the registry file used by `k3s`. Please see the `k3s` documentation for further information on [private registry configuration](https://docs.k3s.io/installation/private-registry).

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Linux">

Below is an example [provisioning script](https://docs.rancherdesktop.io/how-to-guides/provisioning-scripts) that can be used to mirror private registries.

Check if you have the `override.yaml` file in the path below, otherwise you can create the file in the path with the suggested provisioning commands:

Override File Path:
`$HOME/.local/share/rancher-desktop/lima/_config/override.yaml`

```bash
provision:
...
  - mode: system
    script: |
      #!/bin/sh
      set -eux
      mkdir -p /etc/rancher/k3s
      cat <<EOF >/etc/rancher/k3s/registries.yaml
      mirrors:
        "<my.private.registry>:5000":
          endpoint:
          - http://<my.private.registry>:5000
      EOF
```

</TabItem>
<TabItem value="macOS">

Below is an example [provisioning script](https://docs.rancherdesktop.io/how-to-guides/provisioning-scripts) that can be used to mirror private registries.

Check if you have the `override.yaml` file in the path below, otherwise you can create the file in the path with the suggested provisioning commands:

Override File Path:
`$HOME/Library/Application Support/rancher-desktop/lima/_config/override.yaml`

```bash
provision:
...
  - mode: system
    script: |
      #!/bin/sh
      set -eux
      mkdir -p /etc/rancher/k3s
      cat <<EOF >/etc/rancher/k3s/registries.yaml
      mirrors:
        "<my.private.registry>:5000":
          endpoint:
          - http://<my.private.registry>:5000
      EOF
```

</TabItem>
<TabItem value="Windows">

Check if you have the directory below that may have been created upon `k3s` spinning up. If not, create the directory and `registries.yaml` file using the powershell commands below:

```shell
wsl -d rancher-desktop mkdir -p /etc/rancher/k3s
wsl -d rancher-desktop cp registries.yaml /etc/rancher/k3s
```

Here is an example of the mirrored private registries configuration in your `registries.yaml` file:

```yaml
mirrors:
  "docker.io":
    endpoint:
      - https://<my-private-registry>:5000
```

</TabItem>
</Tabs>
