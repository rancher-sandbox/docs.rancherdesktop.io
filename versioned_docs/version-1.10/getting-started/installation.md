---
title: Installation
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/getting-started/installation"/>
</head>

Rancher Desktop is delivered as a desktop application. You can download it from
the [releases page on GitHub](https://github.com/rancher-sandbox/rancher-desktop/releases).

When run for the first time or when changing versions, Kubernetes container
images are downloaded. It may take a little time to load on first run for a new
Kubernetes version.

After Rancher Desktop is installed, users will have access to these supporting utilities:

- [Helm](https://helm.sh/)
- [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)
- [nerdctl](https://github.com/containerd/nerdctl)
- [Moby](https://github.com/moby/moby)
- [Docker Compose](https://docs.docker.com/compose/)

## macOS

### Requirements

Rancher Desktop requires the following on macOS:

- macOS Catalina 10.15 or higher.
- Apple Silicon (M1) or Intel CPU with VT-x.
- Persistent internet connection.

It is also recommended to have:

- 8 GB of memory
- 4 CPU

Additional resources may be required depending on the workloads you plan to run.

### Installing Rancher Desktop on macOS

1. Go to the [releases page] on GitHub.
1. Find the version of Rancher Desktop you want to download.
1. Expand the **Assets** section and download `Rancher.Desktop-X.Y.Z.dmg`, where `X.Y.Z` is the version of Rancher Desktop.
1. Navigate to the directory where you downloaded the installer to and run the installer. This will usually be the `Downloads` folder.
1. Double-click the DMG file.
1. In the Finder window that opens, drag the Rancher Desktop icon to the Applications folder.
1. Navigate to the `Applications` folder and double-click the Rancher Desktop to launch it.

[releases page]:
https://github.com/rancher-sandbox/rancher-desktop/releases

After Rancher Desktop is installed, users will have access to these supporting utilities:

- [Helm](https://helm.sh/)
- [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)
- [nerdctl](https://github.com/containerd/nerdctl)
- [docker (moby)](https://github.com/moby/moby)

### Uninstalling Rancher Desktop on macOS

1. Open **Finder** > **Applications**.
1. Find Rancher Desktop.
1. Select it and choose **File > Move to Trash**.
1. To delete the app, Finder > Empty Trash.

## Windows

### Requirements

Rancher Desktop requires the following on Windows:

- Windows 10 build 1909 or higher. The Home edition is supported.
- Running on a machine with [virtualization capabilities].
- Persistent internet connection.

Rancher Desktop requires [Windows Subsystem for Linux] on Windows; this will
automatically be installed as part of the Rancher Desktop setup.  Manually
downloading a distribution is not necessary.

[Windows Subsystem for Linux]:
https://docs.microsoft.com/en-us/windows/wsl/install-win10

[virtualization capabilities]:
https://docs.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed

It is also recommended to have:

- 8 GB of memory
- 4 CPU

Additional resources may be required depending on the workloads you plan to run.

**Note:** You can use Rancher Desktop as a Non-Admin user on a Windows machine. However, an Admin's intervention is required during the installation process for the below components.

- **WSL2** - You need Admin privileges to install WSL2, which is an essential component of Rancher Desktop.
- **Rancher Desktop Privileged Service** - You need Admin privileges to install the Rancher Desktop privileged service, which is required to expose applications/services, running inside containers, on all interfaces on the host machine. However, you can skip the installation of the Rancher Desktop Privileged Service with the limitation that you will not be able to expose applications/services on any interface except `127.0.0.1`.

### Installing Rancher Desktop on Windows

1. Go to the [releases page] on GitHub.
1. Find the version of Rancher Desktop you want to download.
1. Expand the **Assets** section and download the Windows installer. It will be called `Rancher.Desktop.Setup.X.Y.Z.msi`, where `X.Y.Z` is the version of Rancher Desktop.
1. Navigate to the directory where you downloaded the installer to and run the installer. This will usually be the `Downloads` folder.
1. Review the License Agreement and click **I Agree** to proceed with the installation.
1. If prompted, choose between installing for everyone on the machine or installing
   just for the current user.  Installing for everyone is preferred in order to
   install the Rancher Desktop Privileged Service, as noted above.
1. Follow the prompts to confirm installation.
1. When the installation completes, click **Finish** to close the installation wizard.

[release page]:
https://github.com/rancher-sandbox/rancher-desktop/releases

### Uninstalling Rancher Desktop on Windows

1. From the taskbar, click the **Start** menu.
1. Go to **Settings > Apps > Apps & features**.
1. Find and select the Rancher Desktop entry.
1. Click **Uninstall** and click it again when the confirmation appears.
1. Follow the prompts on the Rancher Desktop uninstaller to proceed.
1. Click **Finish** when complete.

## Linux

### Requirements

Rancher Desktop requires the following on Linux:

- A distribution that can install .deb or .rpm packages, or AppImages.
- A persistent internet connection.
- An x86_64 processor with either AMD-V or VT-x.
- Read-write access on `/dev/kvm`. See below for details.

It is also recommended to have:

- 8 GB of memory
- 4 CPU

Additional resources may be required depending on the workloads you plan to run.

:::note
Some Linux distributions such as Ubuntu and Fedora that make use of Gnome do not support a system tray out of the box, and therefore no tray icon will be displayed for Rancher Desktop in these environments.
:::

#### Ensuring You Have Access to `/dev/kvm`

On some distributions (Ubuntu 18.04 for example) the user has insufficient
privileges to use `/dev/kvm`, which is required for Rancher Desktop.
To check whether you have the required privileges, do:

```
[ -r /dev/kvm ] && [ -w /dev/kvm ] || echo 'insufficient privileges'
```

If it outputs `insufficient privileges`, you need to add your user to the
`kvm` group. You can do this with:

```
sudo usermod -a -G kvm "$USER"
```

Then reboot in order to make these changes take effect.


#### `pass` Setup

By default, Rancher Desktop uses `pass` to securely store credentials
passed via `docker login` and `nerdctl login`. `pass` requires a small amount
of setup if this is the first time it has been used on your machine. If you don't
intend to use `docker login` or `nerdctl login` you don't have to set up
`pass` - just remember that if you use them in the future, you must set it
up or you will run into errors.

Once Rancher Desktop is installed, you should create a GPG key. This will be
used by `pass` to secure secrets. You can create a GPG key with:

```
gpg --generate-key
```

The output should contain something like `8D818FB37A9279E341F01506ED96AD27A40C9C73`.
This is your key ID. You can then initialize `pass` by passing this key ID to it:

```
pass init 8D818FB37A9279E341F01506ED96AD27A40C9C73
```

For more information on `pass`, please see [its website].

[its website]: https://www.passwordstore.org/


#### Traefik Port Binding Access

Rancher Desktop makes use of Traefik as the default ingress controller. Users may run into a `permission denied` error after deploying Rancher Desktop due to restricted port access on the Traefik ingress. Most Linux distributions (e.g. Ubuntu 20.04) do not allow non-root users to listen on TCP and UDP ports below `1024`. In order to allow Traefik to listen to privileged ports on the local host, please run the following command:

```
sudo sysctl -w net.ipv4.ip_unprivileged_port_start=80
```

After the command is run, all ports `80` and above will become unprivileged and Traefik will be able to successfully access said ports.

To preserve this change across reboots as a custom kernel parameter setting, add the same command inside your `/etc/sysctl.conf` file.

### Installation via .deb Package

Add the Rancher Desktop repository and install Rancher Desktop with:

```
curl -s https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/Release.key | gpg --dearmor | sudo dd status=none of=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg
echo 'deb [signed-by=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg] https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/ ./' | sudo dd status=none of=/etc/apt/sources.list.d/isv-rancher-stable.list
sudo apt update
sudo apt install rancher-desktop
```


### Uninstalling .deb Package

You can remove the package, repository, and key with:

```
sudo apt remove --autoremove rancher-desktop
sudo rm /etc/apt/sources.list.d/isv-rancher-stable.list
sudo rm /usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg
sudo apt update
```


### Installing via .rpm Package

**Note:** RHEL, Fedora, and related distributions package QEMU, which Rancher Desktop
uses on Linux, differently than other distributions. To use Rancher Desktop on these
distributions, please use the AppImage.

To add the repository and install on openSUSE:

```
sudo zypper addrepo https://download.opensuse.org/repositories/isv:/Rancher:/stable/rpm/isv:Rancher:stable.repo
sudo zypper install rancher-desktop
```


### Uninstalling .rpm Package

Ensure that Rancher Desktop has exited (if not, it should appear in the dock) and do:

```
sudo zypper remove --clean-deps rancher-desktop
sudo zypper removerepo isv_Rancher_stable
```


### Installing via AppImage

First, ensure that `pass` and `gpg` are installed. For example, on Fedora:

```
dnf install pass gnupg2
```

You may download the AppImage [here]. In order to run it, simply make it executable
and execute it. For better integration with your desktop, you may use [AppImageLauncher].

[here]:
https://download.opensuse.org/repositories/isv:/Rancher:/stable/AppImage/rancher-desktop-latest-x86_64.AppImage
[AppImageLauncher]:
https://github.com/TheAssassin/AppImageLauncher


### Uninstalling AppImage

Simply delete the AppImage. That's it!

## Proxy Environments: Important URL Patterns

There are situations where you may be using a secured, locked down internet environment and need to configure necessary Rancher Desktop dependencies through a proxy. Here is a list of key URL patterns you will need to allow through your proxy:

- Get available K3s releases for download: https://api.github.com/repos/k3s-io/k3s/releases
- Download K3s releases: https://github.com/k3s-io/k3s/releases/download
- `kubectl` releases downloaded by `kuberlr`: https://storage.googleapis.com/kubernetes-release/release
- Get available Upgrade Responder versions: https://github.com/longhorn/upgrade-responder/releases

These dependencies are applicable to Rancher Desktop and does not represent a standard list across the Rancher platform.
