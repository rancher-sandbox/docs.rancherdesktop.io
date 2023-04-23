---
title: 安装
---

Rancher Desktop 作为桌面应用程序交付，你可以从 [GitHub Releases 页面](https://github.com/rancher-sandbox/rancher-desktop/releases)下载它。

首次运行或更改版本时会下载 Kubernetes 容器镜像。因此，首次运行新的 Kubernetes 版本时可能需要一些时间来加载这些镜像。

安装 Rancher Desktop 后，用户可以访问以下支持的工具：

- [Helm](https://helm.sh/)
- [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)
- [nerdctl](https://github.com/containerd/nerdctl)
- [Moby](https://github.com/moby/moby)
- [Docker Compose](https://docs.docker.com/compose/)

## macOS

### 要求

Rancher Desktop 在 macOS 上运行需要以下条件：

- macOS Catalina 10.15 或更高版本。
- 带有 VT-x 的 Apple 芯片 (M1) 或 Intel CPU。
- 连接到互联网。

还建议具备以下条件：

- 8 GB 内存
- 4 个 CPU

你要运行的工作负载可能还需要一些额外的资源。

### 在 macOS 上安装 Rancher Desktop

1. 转到 GitHub 上的 [Releases 页面]。
1. 找到要下载的 Rancher Desktop 版本。
1. 展开 **Assets** 部分并下载 `Rancher.Desktop-X.Y.Z.dmg`，其中 `X.Y.Z` 是 Rancher Desktop 的版本。
1. 导航到下载安装程序的目录，并运行安装程序。这个目录通常是`下载`文件夹。
1. 双击 DMG 文件。
1. 在打开的**访达**窗口中，将 Rancher Desktop 图标拖到**应用程序**文件夹中。
1. 导航到`应用程序`文件夹，然后双击 Rancher Desktop 来启动它。

[Releases 页面]: https://github.com/rancher-sandbox/rancher-desktop/releases

安装 Rancher Desktop 后，用户可以访问以下支持的工具：

- [Helm](https://helm.sh/)
- [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)
- [nerdctl](https://github.com/containerd/nerdctl)
- [docker (moby)](https://github.com/moby/moby)

### 在 macOS 上卸载 Rancher Desktop

1. 打开**访达** > **应用程序**。
1. 找到 Rancher Desktop。
1. 选中它，然后选择**文件 > 移到废纸篓**。
1. 要删除应用程序，选择**访达 > 清倒废纸篓**。

## Windows

### 要求

Rancher Desktop 在 Windows 上运行需要以下条件：

- Windows 10 build 1909 或更高版本。支持家庭版。
- 在具有[虚拟化功能]的主机上运行。
- 连接到互联网。

Rancher Desktop 在 Windows 上需要 [Windows Subsystem for Linux]，它将作为 Rancher Desktop 设置的一部分自动安装。你不需要手动下载发行版。

[Windows Subsystem for Linux]: https://docs.microsoft.com/en-us/windows/wsl/install-win10

[虚拟化功能]: https://docs.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed

还建议具备以下条件：

- 8 GB 内存
- 4 个 CPU

你要运行的工作负载可能还需要一些额外的资源。

**注意**：你可以在 Windows 主机上以非管理员用户身份使用 Rancher Desktop。但是，以下组件的安装过程需要管理员的干预：

- **WSL2**：你需要管理员权限才能安装 WSL2，它是 Rancher Desktop 的重要组件。
- **Rancher Desktop Privileged Service**：你需要管理员权限才能安装 Rancher Desktop Privileged Service，这是在主机的所有接口上公开运行在容器内的应用程序/服务所必需的。你也可以跳过 Rancher Desktop Privileged Service 的安装，这样的话，你将无法在 `127.0.0.1` 之外的任何接口上公开应用程序/服务。

### 在 Windows 上安装 Rancher Desktop

1. 转到 GitHub 上的 [Releases 页面]。
1. 找到要下载的 Rancher Desktop 版本。
1. 展开 **Assets** 部分并下载 Windows 安装程序。它的名称是 `Rancher.Desktop.Setup.X.Y.Z.exe`，其中 `X.Y.Z` 是 Rancher Desktop 的版本。
1. 导航到下载安装程序的目录，并运行安装程序。这个目录通常是`下载`文件夹。
1. 查看许可协议并单击 **I Agree** 来继续安装。
1. 安装完成后，单击 **Finish** 来关闭安装向导。

[release page]: https://github.com/rancher-sandbox/rancher-desktop/releases

### 在 Windows 上卸载 Rancher Desktop

1. 在任务栏中，单击**开始**菜单。
1. 转到**设置 > 应用程序 > 应用程序和功能**。
1. 找到并选择 Rancher Desktop。
1. 点击**卸载**，出现确认信息时再次点击。
1. 按照 Rancher Desktop 卸载程序上的提示继续。
1. 完成后点击**完成**。

## Linux

### 要求

Rancher Desktop 在 Linux 上运行需要以下条件：

- 一个可以安装 .deb 或 .rpm 包或 AppImages 的发行版。
- 连接到互联网。
- 带有 AMD-V 或 VT-x 的 x86_64 处理器。
- `/dev/kvm` 上的读写权限。详情见下文。

还建议具备以下条件：

- 8 GB 内存
- 4 个 CPU

你要运行的工作负载可能还需要一些额外的资源。


### 确保你可以访问 `/dev/kvm`

Rancher Desktop 需要 `/dev/kvm` 的权限，而在某些发行版（例如 Ubuntu 18.04）上，用户没有足够的权限。
要检查你是否具有所需的权限，请执行以下操作：

```
[ -r /dev/kvm ] && [ -w /dev/kvm ] || echo 'insufficient privileges'
```

如果输出是 `insufficientprivilege`，你需要将你的用户添加到 `kvm` 组。你可以执行以下操作：

```
sudo usermod -a -G kvm "$USER"
```

然后重新启动使更改生效。


### `pass` 设置

默认情况下，Rancher Desktop 使用 `pass` 来安全地存储通过 `docker login` 和 `nerdctl login` 传递的凭证。在第一次在主机上使用时，`pass` 需要你进行少量的设置。如果你不打算使用 `docker login` 或 `nerdctl login`，你不需要设置 `pass`。但请记住，如果你以后需要使用它们，你必须设置它们，否则会出现错误。

安装 Rancher Desktop 后，你应该创建一个 GPG 密钥。`pass` 会使用它来保护密文。要创建 GPG 密钥：

```
gpg --generate-key
```

输出应该与 `8D818FB37A9279E341F01506ED96AD27A40C9C73` 类似。
这是你的密钥 ID。然后，你可以通过将此密钥 ID 传递给它来初始化 `pass`：

```
pass init 8D818FB37A9279E341F01506ED96AD27A40C9C73
```

关于 `pass` 的更多信息，请参阅[此处]。

[此处]: https://www.passwordstore.org/


### Traefik 端口绑定访问

Rancher Desktop 使用 Traefik 作为默认 Ingress Controller。由于 Traefik Ingress 上的端口访问受限，用户在部署 Rancher Desktop 后可能会遇到 `permission denied` 错误。大多数 Linux 发行版（例如 Ubuntu 20.04）不允许非 root 用户监听 `1024` 以下的 TCP 和 UDP 端口。为了让 Traefik 监听本地主机上的特权端口，请运行以下命令：

```
sudo sysctl -w net.ipv4.ip_unprivileged_port_start=80
```

命令运行后，`80` 及以上的所有端口都将变为非特权端口，Traefik 将能够成功访问这些端口。

要在重启后将此更改保留为自定义内核参数设置，请在 `/etc/sysctl.conf` 文件中添加相同的命令。

### 通过 .deb 包安装

添加 Rancher Desktop 仓库并使用以下命令安装 Rancher Desktop：

```
curl -s https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/Release.key | gpg --dearmor | sudo dd status=none of=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg
echo 'deb [signed-by=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg] https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/ ./' | sudo dd status=none of=/etc/apt/sources.list.d/isv-rancher-stable.list
sudo apt update
sudo apt install rancher-desktop
```


### 卸载 .deb 包

你可以使用以下命令删除包、仓库和密钥：

```
sudo apt remove --autoremove rancher-desktop
sudo rm /etc/apt/sources.list.d/isv-rancher-stable.list
sudo rm /usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg
sudo apt update
```


### 通过 .rpm 包安装

**注意**：Rancher Desktop 在 Linux 上使用 QEMU，而 RHEL、Fedora 和相关发行版打包 QEMU 的方式与其他发行版不同。要在这些发行版上使用 Rancher Desktop，请使用 AppImage。

在 openSUSE 上添加仓库并安装：

```
sudo zypper addrepo https://download.opensuse.org/repositories/isv:/Rancher:/stable/rpm/isv:Rancher:stable.repo
sudo zypper install rancher-desktop
```


### 卸载 .rpm 包

确保 Rancher Desktop 已退出（如果没有，它应该出现在 Dock 中），然后执行：

```
sudo zypper remove --clean-deps rancher-desktop
sudo zypper removerepo isv_Rancher_stable
```


### 通过 AppImage 安装

首先，确保安装了 `pass` 和 `gpg`。例如，在 Fedora 上：

```
dnf install pass gnupg2
```

你可以在[此处]下载 AppImage。要运行它，只需要添加可执行权限，然后执行即可。为了更好地与你的桌面集成，你可以使用 [AppImageLauncher]。

[此处]: https://download.opensuse.org/repositories/isv:/Rancher:/stable/AppImage/rancher-desktop-latest-x86_64.AppImage
[AppImageLauncher]: https://github.com/TheAssassin/AppImageLauncher


### 卸载 AppImage

只需删除 AppImage。
