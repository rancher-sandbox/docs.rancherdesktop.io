---
title: 部署配置文件
---

import TabsConstants from '@site/core/TabsConstants';

部署配置文件提供 2 个功能：

* “Defaults” 提供首次运行时（或恢复出厂设置后）应用的首选项值。
* “Locked” 设置允许管理员固定首选值。

它们可以由 “admin” 或 “user” 指定。如果 “admin” 上下文中存在 “defaults” 或 “locked” 设置，则会忽略 “user” 配置文件。

### 启动首选值

Rancher Desktop 设置如下：

* 加载 “admin” 部署配置文件（“defaults” 和 “locked”）
* 如果都不存在，则加载 “user” 部署配置文件（同样是 “defaults” 和 “locked”）
* 从 `settings.json` 文件加载保存的首选项
* 如果没有保存的设置，请改用之前加载的 “defaults” 配置文件
* 将用于启动应用程序的命令行参数值复制到设置中
* 如果设置仍然完全为空，则显示首次运行对话框
* 使用内置应用程序默认值填充任何缺失的值
* 将 “locked” 配置文件中的值复制到当前设置上

用户无法通过 GUI 或 CLI 修改已被配置文件锁定的设置。

如果配置文件存在但无法正确解析，Rancher Desktop 将拒绝加载应用程序。

Rancher Desktop 不会修改或删除部署配置文件。它们不会受到恢复出厂设置或卸载的影响。

配置文件数据的结构与应用程序设置匹配：

```json title="rdctl list-settings"
{
  ...
  "containerEngine": {
    "allowedImages": {
      "enabled": false,
      "patterns": []
    },
    "name": "containerd"
  },
  ...
}
```

下面针对各系统的文档说明了如何创建部署配置文件，该配置文件将默认容器引擎更改为 `moby`，禁用 Kubernetes，并将镜像列表锁定为仅允许 `busybox` 和 `nginx`。

### 锁定的偏好字段

如果你使用的是 Rancher Desktop `1.9` 及更高版本，你可以在配置部署配置文件时锁定所有首选项值。根据用于创建锁定文件的目录或镜像仓库，你可能需要具有 MacOS/Linux 的 super user 权限或使用 Windows 的 admin shell 才能访问特权路径。一旦固定，各种锁定值将无法从应用程序访问，如下面的 UI 示例所示：

<details>
<summary>锁定字段 UI 示例</summary>

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](rd-versioned-asset://preferences/Windows_containerEngine_tabAllowedImages_lockedFields.png)

![](rd-versioned-asset://preferences/Windows_kubernetes_lockedFields.png)

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://preferences/macOS_containerEngine_tabAllowedImages_lockedFields.png)

![](rd-versioned-asset://preferences/macOS_kubernetes_lockedFields.png)

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://preferences/Linux_containerEngine_tabAllowedImages_lockedFields.png)

![](rd-versioned-asset://preferences/Linux_kubernetes_lockedFields.png)

</TabItem>
</Tabs>

</details>

### 配置文件格式和位置

不同系统使用的部署配置文件存储格式和位置不同。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

在 Windows 上，部署配置文件存储在镜像仓库中，可以通过组策略进行分发。

配置文件的位置是：

```
HKEY_LOCAL_MACHINE\Software\Policies\Rancher Desktop\Defaults
HKEY_LOCAL_MACHINE\Software\Policies\Rancher Desktop\Locked
HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Defaults
HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Locked
```

`reg` 工具可用于手动创建配置文件。要创建 “admin” 配置文件，必须从提升的 shell 中执行。

布尔值以 `REG_DWORD` 格式存储，并在 `REG_MULTI_SZ` 中列出。

#### 删除现有配置文件

```
reg delete "HKCU\Software\Policies\Rancher Desktop" /f
```

#### 默认使用 “moby” 容器引擎并禁用 Kubernetes

```
reg add "HKCU\Software\Policies\Rancher Desktop\Defaults\containerEngine" /v name /t REG_SZ -d moby
reg add "HKCU\Software\Policies\Rancher Desktop\Defaults\kubernetes" /v enabled /t REG_DWORD -d 0
```

#### 将镜像列表锁定为仅允许 “busybox” 和 “nginx”

```
reg add "HKCU\Software\Policies\Rancher Desktop\Locked\containerEngine\allowedImages" /v enabled /t REG_DWORD -d 1
reg add "HKCU\Software\Policies\Rancher Desktop\Locked\containerEngine\allowedImages" /v patterns /t REG_MULTI_SZ -d busybox\0nginx
```

#### 验证镜像仓库设置

配置文件可以导出到 `*.reg` 文件中

```
C:\>reg export "HKCU\Software\Policies\Rancher Desktop" rd.reg
The operation completed successfully.
```

该文件可用于将配置文件分发到其他机器。请注意，`REG_MULTI_SZ` 值以 UTF16LE 编码，因此不易读取：

```text title="HKCU\Software\Policies\Rancher Desktop"
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop]

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Defaults]

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Defaults\containerEngine]
"name"="moby"

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Defaults\kubernetes]
"enabled"=dword:00000000

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Locked]

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Locked\containerEngine]

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Locked\containerEngine\allowedImages]
"enabled"=dword:00000001
"patterns"=hex(7):62,00,75,00,73,00,79,00,62,00,6f,00,78,00,00,00,6e,00,67,00,\
  69,00,6e,00,78,00,00,00,00,00
```

</TabItem>
<TabItem value="macOS">

在 macOS 上，部署配置文件存储为 plist 文件。

配置文件的位置是：

```
/Library/Preferences/io.rancherdesktop.profile.defaults.plist
/Library/Preferences/io.rancherdesktop.profile.locked.plist
~/Library/Preferences/io.rancherdesktop.profile.defaults.plist
~/Library/Preferences/io.rancherdesktop.profile.locked.plist
```

#### 将所有当前设置转换为部署配置文件

要将现有设置转换为部署配置文件，一种简单方法是将它们从 JSON 转换为 plist XML 格式，然后在编辑器中手动修改。

```
rdctl list-settings | plutil -convert xml1 - -o ~/Library/Preferences/io.rancherdesktop.profile.defaults.plist
```

你也可以使用编辑器或 `plutil` 工具手动创建配置文件。`defaults` 实用程序不起作用，因为它无法创建嵌套键。

#### 默认使用 “moby” 容器引擎并禁用 Kubernetes

```
DEFAULTS=~/Library/Preferences/io.rancherdesktop.profile.defaults.plist
plutil -create xml1 "$DEFAULTS"

plutil -insert containerEngine -dictionary "$DEFAULTS"
plutil -insert containerEngine.name -string moby "$DEFAULTS"

plutil -insert kubernetes -dictionary "$DEFAULTS"
plutil -insert kubernetes.enabled -bool false "$DEFAULTS"
```

#### 将镜像列表锁定为仅允许 “busybox” 和 “nginx”

```
LOCKED=~/Library/Preferences/io.rancherdesktop.profile.locked.plist
plutil -create xml1 "$LOCKED"

plutil -insert containerEngine -dictionary "$LOCKED"
plutil -insert containerEngine.allowedImages -dictionary "$LOCKED"
plutil -insert containerEngine.allowedImages.enabled -bool true "$LOCKED"

plutil -insert containerEngine.allowedImages.patterns -array "$LOCKED"
plutil -insert containerEngine.allowedImages.patterns -string busybox -append "$LOCKED"
plutil -insert containerEngine.allowedImages.patterns -string nginx -append "$LOCKED"
```

#### 验证 plist 文件

```xml title="~/Library/Preferences/io.rancherdesktop.profile.defaults.plist"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>containerEngine</key>
	<dict>
		<key>name</key>
		<string>moby</string>
	</dict>
	<key>kubernetes</key>
	<dict>
		<key>enabled</key>
		<false/>
	</dict>
</dict>
</plist>
```

```xml title="~/Library/Preferences/io.rancherdesktop.profile.locked.plist"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>containerEngine</key>
	<dict>
		<key>allowedImages</key>
		<dict>
			<key>enabled</key>
			<true/>
			<key>patterns</key>
			<array>
				<string>busybox</string>
				<string>nginx</string>
			</array>
		</dict>
	</dict>
</dict>
</plist>
```

</TabItem>
<TabItem value="Linux">

在 Linux 上，部署配置文件以 JSON 格式存储。

配置文件的位置是：

```
/etc/rancher-desktop/defaults.json
/etc/rancher-desktop/locked.json
~/.config/rancher-desktop.defaults.json
~/.config/rancher-desktop.locked.json
```

#### 将所有当前设置转换为部署配置文件

由于部署配置文件以 JSON 格式存储，因此创建配置文件最简单的方法是将当前应用程序设置保存到配置文件位置，然后使用文本编辑器微调配置文件。

```
rdctl list-settings > ~/.config/rancher-desktop.defaults.json
```

#### 默认使用 “moby” 容器引擎并禁用 Kubernetes

```json title="~/.config/rancher-desktop.defaults.json"
{
  "containerEngine": {
    "name": "moby"
  },
  "kubernetes": {
    "enabled": false
  }
}
```

#### 将镜像列表锁定为仅允许 “busybox” 和 “nginx”

```json title="~/.config/rancher-desktop.locked.json"
{
  "containerEngine": {
    "allowedImages": {
      "enabled": true,
      "patterns": ["busybox","nginx"]
    }
  }
}
```

</TabItem>
</Tabs>

### 已知问题和限制

* 在 macOS 上，格式不正确的配置文件会被忽略，而不是阻止应用程序加载。
* 无法通过部署配置文件设置 `diagnostics.showMuted`（Windows 上的 `WSL.integrations`）。
* 在 macOS 和 Linux 上，如果 “defaults” 配置文件未为 `application.pathManagementStrategy` 配置值，则仍会显示一个简短的首次运行对话框。
