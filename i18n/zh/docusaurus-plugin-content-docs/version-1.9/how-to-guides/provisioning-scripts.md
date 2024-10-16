---
title: 配置脚本
---

import TabsConstants from '@site/core/TabsConstants';

配置脚本可以覆盖 Rancher Desktop 的一些内部流程。例如，脚本可用于向 K3s 提供某些命令行参数、添加额外的挂载、增加 ulimit 值等。本指南将介绍如何为 macOS、Linux 和 Windows 主机设置脚本。

## macOS & Linux

在 macOS 和 Linux 上，你可以使用 lima override.yaml 来编写配置脚本。

- 在以下路径创建 `override.yaml` 文件。

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

- 在上一步中创建的 `override.yaml` 文件中编写配置脚本。例如，你可以使用以下脚本来增加容器的 ulimit：

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

- 你还可以使用 `override.yaml` 来覆盖/修改 lima 配置设置。下面的示例创建了额外的挂载：

```
mounts:
  - location: /some/path
    writable: true
```

- 另一个示例使用 `override.yaml` 文件允许用户通过 Rancher Desktop 的 `K3S_EXEC` 语法（类似 `K3s` 语法 [`INSTALL_K3S_EXEC`](https://docs.k3s.io/reference/env-variables#:~:text=as%20the%20default.-,INSTALL_K3S_EXEC,-Command%20with%20flags)）来实现 [`K3s`](https://k3s.io/?ref=traefik.io) 环境的自定义设置。请参阅 [agent](https://docs.k3s.io/cli/agent) 和 [server](https://docs.k3s.io/cli/server) 命令行标志文档了解更多安装选项。以下是使用 [`--tls-san value`](https://docs.k3s.io/cli/server#:~:text=of%20the%20cluster-,%2D%2Dtls%2Dsan%20value,-N/A) 标志来将其他主机名添加为 TLS 认证上的 Subject Alternative Name 的示例设置：

```
env:
  K3S_EXEC: --tls-san value
```

## Windows

**注意**：在 Windows 上，你只能为 1.1.0 或更高版本的 Rancher Desktop 使用这些配置脚本。

- 你需要至少运行 Rancher Desktop 一次以允许它创建配置。

- 打开 `%LOCALAPPDATA%\\rancher-desktop\\provisioning` 目录。完整路径的示例：`C:\\Users\\Joe\\AppData\\Local\\rancher-desktop\\provisioning`。

- 请注意，任何文件扩展名为 `.start` 的文件（例如 `k3s-overrides.start`）都可以在 _Rancher Desktop 启动 Kubernetes 后端（如果启用）_ 时执行。此类文件将在 Rancher Desktop WSL 上下文中运行。

`.start` 文件的示例流程：
- Rancher Desktop 内部设置
- 运行配置脚本
- 在 UI 中启用 `dockerd` 或 `containerd`
- Kubernetes (K3s)

例如，使用 `%LOCALAPPDATA%\\rancher-desktop\\provisioning\\insecure-registry.start` 将允许 `nerdctl` 默认使用不安全的镜像仓库：

```
#!/bin/sh

mkdir -p /etc/nerdctl
cat >  /etc/nerdctl/nerdctl.toml <<EOF
insecure_registry = true
EOF
```

- 请注意，文件扩展名为 `.stop` 的文件（例如 `wipe-data.stop`）可以在 _Rancher Desktop 关闭 Kubernetes 后端（如果启用）后_ 执行。此类文件将在相同的 Rancher Desktop WSL 上下文中运行。

`.stop` 文件的示例流程：
- 停止 `k3s`、`dockerd` 或 `containerd`
- 运行取消配置的脚本

**重要提示**：脚本需要以 Unix 行结尾保存，未完成行尾转换，且具有 DOS 行结尾的文件可能会产生意想不到的结果。你可以使用配置脚本更改的内容是有限制的。例如，你不能使用配置脚本更改 WSL2 上的硬 ulimit。请谨慎使用配置脚本，如果你对配置脚本有任何具体问题，请随时在 Slack/Github 上与 Rancher Desktop 团队联系。
