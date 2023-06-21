---
title: Deployment Profiles
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

Deployment profiles provide 2 features:

* "Defaults" provide preference values that are applied on first run (or after a factory reset).
* "Locked" settings allow an administrator to pin preference values.

They can be specified both by an "admin" or by the "user". If either the "defaults" or the "locked" settings exists in the "admin" context, then the "user" profile is ignored.

### Preferences Values at Startup

Rancher Desktop settings are determined as follows:

* Load "admin" deployment profile (both "defaults" and "locked")
* If neither of them exist then load "user" deployment profile (again both "defaults" and "locked")
* Load saved preferences from `settings.json` file
* If there are no saved settings, use the "defaults" profile loaded earlier instead
* Copy values from command-line arguments used to launch the app into settings
* If the settings are still completely empty, show the first-run dialog
* Fill any missing values from the builtin application defaults
* Copy values from the "locked" profile over the current settings

The user cannot modify any settings (via GUI or CLI) that have been locked by the profile.

Rancher Desktop will refuse to load the application if a profile exists, but cannot be parsed correctly.

Deployment profiles will not be modified or removed by Rancher Desktop. They will not be affected by a factory reset or uninstall.

The structure of the profile data matches the application settings:

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

The platform-specific documentation below will show how to create a deployment profile that changes the default container engine to `moby`, disables Kubernetes, and locks down the list of allowed images to just `busybox` and `nginx`.

### Locked Preference Fields

For versions `1.9` and later of Rancher Desktop, all preferences values can be locked when configuring a deployment profile. Depending on the directory or registry used for the lock file creation, users may need to have super user permissions for MacOS/Linux or execute from an admin shell for Windows in order to access priviliged paths. Once pinned, the various locked values will not be accessible from the application as seen in the UI examples below:

<details>
<summary>Locked Fields UI Examples</summary>

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Windows_containerEngine_tabAllowedImages_lockedFields.png)

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Windows_kubernetes_lockedFields.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_containerEngine_tabAllowedImages_lockedFields.png)

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_kubernetes_lockedFields.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_containerEngine_tabAllowedImages_lockedFields.png)

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_kubernetes_lockedFields.png)

</TabItem>
</Tabs>

</details>

### Profile Format and Location

Deployment profiles are stored in a platform-specific format and location.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

On Windows the deployment profiles are stored in the registry and can be distributed via group policy.

The locations for the profiles are:

```
HKEY_LOCAL_MACHINE\Software\Policies\Rancher Desktop\Defaults
HKEY_LOCAL_MACHINE\Software\Policies\Rancher Desktop\Locked
HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Defaults
HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Locked
```

The `reg` tool can be used to create a profile manually. To create an "admin" profile it will have to be executed from an elevated shell.

Boolean values are stored in `REG_DWORD` format, and lists in `REG_MULTI_SZ`.

#### Delete existing profiles

```
reg delete "HKCU\Software\Policies\Rancher Desktop" /f
```

#### By default use the "moby" container engine and disable Kubernetes

```
reg add "HKCU\Software\Policies\Rancher Desktop\Defaults\containerEngine" /v name /t REG_SZ -d moby
reg add "HKCU\Software\Policies\Rancher Desktop\Defaults\kubernetes" /v enabled /t REG_DWORD -d 0
```

#### Lock allowed images list to only allow "busybox" and "nginx"

```
reg add "HKCU\Software\Policies\Rancher Desktop\Locked\containerEngine\allowedImages" /v enabled /t REG_DWORD -d 1
reg add "HKCU\Software\Policies\Rancher Desktop\Locked\containerEngine\allowedImages" /v patterns /t REG_MULTI_SZ -d busybox\0nginx
```

#### Verify registry settings

The profile can be exported into a `*.reg` file

```
C:\>reg export "HKCU\Software\Policies\Rancher Desktop" rd.reg
The operation completed successfully.
```

This file can be used to distribute the profile to other machines. Note that the `REG_MULTI_SZ` values are encoded in UTF16LE, so are not easily readable:

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

On macOS the deployment profiles are stored as plist files.

The locations for the profiles are:

```
/Library/Preferences/io.rancherdesktop.profile.defaults.plist
/Library/Preferences/io.rancherdesktop.profile.locked.plist
~/Library/Preferences/io.rancherdesktop.profile.defaults.plist
~/Library/Preferences/io.rancherdesktop.profile.locked.plist
```

#### Convert all current settings into a deployment profile

A simple way to turn existing settings into a deployment profile is by converting them from JSON into the plist XML format, and then manually trimming it down in an editor.

```
rdctl list-settings | plutil -convert xml1 - -o ~/Library/Preferences/io.rancherdesktop.profile.defaults.plist
```

Alternatively the profile can be created manually, either with an editor, or with the `plutil` tool. The `defaults` utility doesn't work because it cannot create nested keys.

#### By default use the "moby" container engine and disable Kubernetes

```
DEFAULTS=~/Library/Preferences/io.rancherdesktop.profile.defaults.plist
plutil -create xml1 "$DEFAULTS"

plutil -insert containerEngine -dictionary "$DEFAULTS"
plutil -insert containerEngine.name -string moby "$DEFAULTS"

plutil -insert kubernetes -dictionary "$DEFAULTS"
plutil -insert kubernetes.enabled -bool false "$DEFAULTS"
```

#### Lock allowed images list to only allow "busybox" and "nginx"

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

#### Verify the plist files

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

On Linux the deployment profiles are stored in JSON format.

The locations for the profiles are:

```
/etc/rancher-desktop/defaults.json
/etc/rancher-desktop/locked.json
~/.config/rancher-desktop.defaults.json
~/.config/rancher-desktop.locked.json
```

#### Convert all current settings into a deployment profile

Since deployment profiles are stored in JSON format, the simplest way to create them is by saving the current application settings to the profile location, and then fine-tuning the profile with a text editor.

```
rdctl list-settings > ~/.config/rancher-desktop.defaults.json
```

#### By default use the "moby" container engine and disable Kubernetes

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

#### Lock allowed images list to only allow "busybox" and "nginx"

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

### Known Issues and Limitations

* On macOS incorrectly formatted profiles are ignored instead of preventing the app from loading.
* There is no way to set `diagnostics.showMuted` (and on Windows `WSL.integrations`) via deployment profile.
* On macOS and Linux an abbreviated first-run dialog is still shown if the "defaults" profile does not provide a value for `application.pathManagementStrategy`.
