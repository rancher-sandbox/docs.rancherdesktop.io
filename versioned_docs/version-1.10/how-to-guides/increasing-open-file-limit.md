---
title: Increasing Open File Limit
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/increasing-open-file-limit"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

You may wish to increase the open file limit as Rancher Desktop's default `ulimit` setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes.

## macOS & Linux Steps

First, use lima override.yaml to write the provisioning scripts.

- Create `override.yaml` file at below path

<Tabs groupId="os">
  <TabItem value="macOS">

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

You can then use the script below to increase the `ulimit` for containers inside your created `override.yaml` file.

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

If using the Elastic platform, please use the script below to set the `vm.max_map_count` parameter as well.

```
provision:
- mode: system
  script: |
    #!/bin/sh
    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf
    * soft     nofile         82920
    * hard     nofile         82920
    EOF
    sysctl -w vm.max_map_count=262144
```

Lastly, please stop and restart Rancher Desktop in order for the updated limits to take effect.

## Windows Steps

First, be sure that you have run Rancher Desktop at least once in order for the configurations to initialize.

You can then create a provisioning script, say `map_count.start`, at `%AppData%\rancher-desktop\provisioning` with the below code to update the open file limit by increasing the `max_map_count` parameter.

```
#!/bin/sh

sysctl -w vm.max_map_count=262144
```

Lastly, please stop and restart Rancher Desktop for these changes to take effect.
