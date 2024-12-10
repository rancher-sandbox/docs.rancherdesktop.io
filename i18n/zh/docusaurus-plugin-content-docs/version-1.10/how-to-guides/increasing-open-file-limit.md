---
title: 增加打开文件限制
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

由于 Rancher Desktop 为 Pod 设置的默认 `ulimit` 可能太低，因此你可能想增加打开文件的限制。本指南介绍了如何使用配置脚本和 Rancher Desktop 内部进程来增加打开文件限制。

## macOS & Linux 步骤

首先，使用 lima override.yaml 编写配置脚本。

- 在以下路径创建 `override.yaml` 文件。

<Tabs groupId="os">
  <TabItem value="macOS">

```
~/Library/Application\ Support/rancher-desktop/lima/_config/override.yaml
```

</TabItem>
  <TabItem value="Linux">

```
~/.local/share/rancher-desktop/lima/_config/override.yaml
```

</TabItem>
</Tabs>

然后，使用下面的脚本为 `override.yaml` 文件中的容器增加 `ulimit`。

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

如果你使用 Elastic 平台，请使用下面的脚本设置 `vm.max_map_count` 参数。

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

最后，停止并重启 Rancher Desktop 来让新的限制生效。

## Windows 步骤

首先，确保 Rancher Desktop 至少运行过一次来初始化配置。

然后，使用以下代码在 `%LOCALAPPDATA%\rancher-desktop\provisioning` 中创建一个配置脚本，比如 `map_count.start`，这样能通过增加 `max_map_count` 参数的值来更新打开文件的限制。

```
#!/bin/sh

sysctl -w vm.max_map_count=262144
```

最后，停止并重启 Rancher Desktop 来让变更生效。
