---
title: 故障排除提示
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

此页面提供了 Rancher Desktop 相关问题的故障排除提示。

#### 问：为什么我在 Rancher Desktop 的 WSL 集成页面下看不到我的 WSL 发行版？

**答**：你可能使用的是 WSL 1 发行版。Rancher Desktop 仅支持 WSL 2 发行版。你可以通过运行 `wsl --set-version <distro-name> 2` 命令将 WSL 1 发行版转换为 WSL 2 发行版。你还可以运行 `wsl --set-default-version 2` 命令来将你之后可能安装的所有发行版设置为使用 WSL 2。

#### 问：运行 `kubectl config get-contexts` 时，我没有看到 Rancher Desktop 的条目，它在哪里？

**答**：Rancher Desktop 将配置放置在默认位置 `~/.kube/config`。你的 `KUBECONFIG` 环境变量可能被设置为在其他位置查找配置文件。

#### 问：Rancher Desktop 卡在 `Waiting for Kubernetes API`，我该怎么办？

**答**：没有额外信息我们很难确定原因。导航到 **Troubleshooting** 选项卡并访问日志。然后，转到 [Rancher Desktop GitHub] 页面并提交附加了你的日志的 Issue。

[Rancher Desktop Github]: https://github.com/rancher-sandbox/rancher-desktop/issues

<!-- RD #1262 -->
#### 问：安装 Rancher Desktop 并卸载 Docker Desktop 后，我无法再运行 `docker compose`，为什么？

**答**：这是 Rancher Desktop 早期版本（1.1.0 之前）的问题。Rancher Desktop 1.1.0 及以上版本附带了 `docker-compose`，并在 `~/.docker/cli-plugins` 提供了 CLI 插件。我们强烈建议你升级到最新版本的 Rancher Desktop。

如果你仍然无法使用 `docker-compose`，请在 [Github](https://github.com/rancher-sandbox/rancher-desktop/issues/new?assignees=&labels=kind%2Fbug&template=bug_report.yml)上报告这个 Bug。

<!-- #966 -->
#### 问：我使用 Homebrew 来安装 Rancher Desktop，但是 `brew install rancher-desktop` 提示失败，为什么？

**答**：Homebrew cask 的命名约定规定了 `-desktop` 后缀要从 cask formula 名称中删除。因此，请改用 `brew install rancher`。

<!-- #1156 -->
#### 问：尝试在 WSL 上使用 Docker 时，如何修复 `permission denied` 错误？

**答**：你需要写权限才能访问 docker socket。解决这个问题的方法有很多，以下是常见的方法之一。使用 Ubuntu WSL 命令行：

```bash
sudo groupadd docker
sudo adduser $USER docker
sudo chown root:docker /var/run/docker.sock
sudo chmod g+w /var/run/docker.sock
newgrp docker
```

#### 问：如何解决 Linux 上的 `kubectl: command not found` 问题？

**A:** 默认情况下，Rancher Desktop 会在 Linux 的 `/home/<user>/.local/bin` 下创建 `kubectl`、`docker`、`helm` 和 `nerdctl` 二进制文件的符号链接。要直接从控制台调用这些命令，你可以在控制台中执行以下命令，并执行注销和登录来将目录添加到你的 `PATH` 环境变量中：

```bash
echo "export PATH=\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc
```
#### 问：使用 `nerdctl run` 运行容器时，如何修复 `FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space` 问题？

**答**：如果路由规则的 IP 地址来自 Iptables 上的冲突子网，你将看到此错误。冲突的路由可能来自主机网络（桥接模式）或 Kubernetes 网络。此问题的快速解决方法是通过命令 `wsl --shutdown` 关闭 WSL。

**警告：关闭 WSL 将停止所有其他发行版以及 `rancher-desktop` 发行版。**

#### 问：在 Windows 上将现有 MSI 降级到较旧的 EXE 版本（1.6.x 或更早版本）时，如何修复 `Installation Aborted` 错误？

**答**：在 MSI 卸载过程中，如果应该删除的 Windows 注册表项 `HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\EventLog\\Application\\RancherDesktopPrivilegedService` 没有被删除，你将看到此错误。请手动删除注册表项并尝试安装 EXE 版本。你可以在特权 shell 中运行以下命令来删除注册表项：

```
reg.exe delete HKLM\System\CurrentControlSet\Services\EventLog\Application\RancherDesktopPrivilegedService /reg:64 /f
```

#### 问：为什么启动 Cluster Dashboard 时会出现空白屏幕？

**答**：Cluster Dashboard 可能无法正常运行，因为你主机上的另一个进程正在使用 Dashboard 进程（`steve`）所依赖的 `9080` 或 `9443` 端口。要解决此问题，请识别并终止使用这些端口的进程。你可以使用下面的命令来识别使用主机上特定端口的进程。请注意，在 macOS 和 Linux 上，Rancher Dashboard 进程名为 `steve`，而在 Windows 上，它是 `steve.exe`。如果 `steve` 是唯一使用端口 9080 或 9443 的进程，请不要终止它。

查找使用特定端口的进程的命令。

<Tabs groupId="os">
<TabItem value="Windows">

```
netstat -ano | findstr :9443
```

</TabItem>
<TabItem value="macOS">

```
lsof -nP -iTCP -sTCP:LISTEN | grep 9443
```

</TabItem>
<TabItem value="Linux">

```
lsof -nP -iTCP -sTCP:LISTEN | grep 9443
```

</TabItem>
</Tabs>
