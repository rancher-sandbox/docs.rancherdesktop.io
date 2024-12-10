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

Below is an example [provisioning script](../how-to-guides/provisioning-scripts.md#macos--linux) that can be used to mirror private registries.

Check if you have the `override.yaml` file in the path below, otherwise you can create the file in the path with the suggested provisioning commands.

Override File Path:
`~/.local/share/rancher-desktop/lima/_config/override.yaml`

Example Script:
```bash
provision:
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

After restarting the application, you can verify the script being applied using the `rdctl shell` command below:

```bash
rdctl shell -- cat /etc/rancher/k3s/registries.yaml
```

</TabItem>
<TabItem value="macOS">

Below is an example [provisioning script](../how-to-guides/provisioning-scripts.md#macos--linux) that can be used to mirror private registries.

Check if you have the `override.yaml` file in the path below, otherwise you can create the file in the path with the suggested provisioning commands.

Override File Path:
`~/Library/Application Support/rancher-desktop/lima/_config/override.yaml`

Example Script:

```bash
provision:
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

After restarting the application, you can verify the script being applied using the `rdctl shell` command below:

```bash
rdctl shell -- cat /etc/rancher/k3s/registries.yaml
```

</TabItem>
<TabItem value="Windows">

Ensure that you have initialized the application with a first run in order to create the `\provisioning\` directory. Once created, [provisioning scripts](../how-to-guides/provisioning-scripts.md#windows) can be utilized to mirror private registries using a `.start` file.

The file path and example provisioning script are provided below. After you have created the file with the appropriate configuration, restart the Rancher Desktop application for the provisioning script to take effect.

`.start` File Path:
`$HOME\AppData\Local\rancher-desktop\provisioning\mirror-registry.start`

Example Script:

```shell
#!/bin/sh

set -eux

mkdir -p /etc/rancher/k3s

cat <<EOF >/etc/rancher/k3s/registries.yaml
mirrors:
  "localhost:5000":
  endpoint:
    - http://localhost:5000
EOF
```

Verify using the `rdctl shell` command below that the script is applied:

```shell
rdctl shell -- cat /etc/rancher/k3s/registries.yaml
```

</TabItem>
</Tabs>
