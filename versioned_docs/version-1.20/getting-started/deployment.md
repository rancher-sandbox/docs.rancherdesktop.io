---
title: Deployment Profiles
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/getting-started/deployment"/>
</head>

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
  "version": 10,
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

For versions `1.9` and later of Rancher Desktop, all preferences values can be locked when configuring a deployment profile. Depending on the directory or registry used for the lock file creation, users may need to have super user permissions for MacOS/Linux or execute from an admin shell for Windows in order to access privileged paths. Once pinned, the various locked values will not be accessible from the application as seen in the UI examples below:

<details>
<summary>Locked Fields UI Examples</summary>

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
reg add "HKCU\Software\Policies\Rancher Desktop\Defaults" /v version /t REG_DWORD -d 10
reg add "HKCU\Software\Policies\Rancher Desktop\Defaults\containerEngine" /v name /t REG_SZ -d moby
reg add "HKCU\Software\Policies\Rancher Desktop\Defaults\kubernetes" /v enabled /t REG_DWORD -d 0
```

#### Lock allowed images list to only allow "busybox" and "nginx"

```
reg add "HKCU\Software\Policies\Rancher Desktop\Locked" /v version /t REG_DWORD -d 10
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
"version"=dword:a

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Defaults\containerEngine]
"name"="moby"

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Defaults\kubernetes]
"enabled"=dword:00000000

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Locked]
"version"=dword:a

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Locked\containerEngine]

[HKEY_CURRENT_USER\Software\Policies\Rancher Desktop\Locked\containerEngine\allowedImages]
"enabled"=dword:00000001
"patterns"=hex(7):62,00,75,00,73,00,79,00,62,00,6f,00,78,00,00,00,6e,00,67,00,\
  69,00,6e,00,78,00,00,00,00,00
```

</TabItem>
<TabItem value="macOS">

On macOS the deployment profiles are stored as plist files.

The locations for the system profiles are:

```
/Library/Managed Preferences/io.rancherdesktop.profile.defaults.plist
/Library/Managed Preferences/io.rancherdesktop.profile.locked.plist
```

If neither of these exists, then Rancher Desktop will check the backup locations (which were the default until Rancher Desktop 1.19):

```
/Library/Preferences/io.rancherdesktop.profile.defaults.plist
/Library/Preferences/io.rancherdesktop.profile.locked.plist
```

The locations for the user profiles are:

```
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

plutil -insert version -integer 10 "$DEFAULTS"

plutil -insert containerEngine -dictionary "$DEFAULTS"
plutil -insert containerEngine.name -string moby "$DEFAULTS"

plutil -insert kubernetes -dictionary "$DEFAULTS"
plutil -insert kubernetes.enabled -bool false "$DEFAULTS"
```

#### Lock allowed images list to only allow "busybox" and "nginx"

```
LOCKED=~/Library/Preferences/io.rancherdesktop.profile.locked.plist
plutil -create xml1 "$LOCKED"

plutil -insert version -integer 10 "$LOCKED"

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
	<key>version</key>
	<integer>10</integer>
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
	<key>version</key>
	<integer>10</integer>
</dict>
</plist>
```

</TabItem>
<TabItem value="Linux">

On Linux the deployment profiles are stored in JSON format.

The locations for the system profiles are:

```
/etc/rancher-desktop/defaults.json
/etc/rancher-desktop/locked.json
```

If neither of these exists, then Rancher Desktop will check the backup locations (starting with Rancher Desktop 1.20):

```
/usr/etc/rancher-desktop/defaults.json
/usr/etc/rancher-desktop/locked.json
```

The locations for the user profiles are:

```
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
  "version": 10,
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
  "version": 10,
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

### `version` Field

Rancher Desktop version 1.12 introduces an explicit deployment profile `version` field in generated profiles using `rdctl`.

If you are using deployment profiles created in previous Rancher Desktop versions, please either regenerate the file with the latest installation, or explicitly add the `version` field to your existing file. See below for updating instructions for various operating systems:

#### Linux

User deployments are stored in:

```console
~/.config/rancher-desktop.defaults.json
~/.config/rancher-desktop.locked.json
```

If the `XDG_CONFIG_HOME` environment variable is set, the user deployments are stored there instead of in `~/.config/....`.

System deployments are stored in:

```console
/etc/rancher-desktop/defaults.json
/etc/rancher-desktop/locked.json
```

Then add `"version": 10` at the very start of your JSON-formatted file immediately after the initial open brace `(})`.

#### macOS

User deployments are stored in:

```console
~/Library/Preferences/io.rancherdesktop.profile.defaults.plist
~/Library/Preferences/io.rancherdesktop.profile.locked.plist
```

System deployments are stored in:

```console
/Library/Preferences/io.rancherdesktop.profile.defaults.plist
/Library/Preferences/io.rancherdesktop.profile.locked.plist
```

Then add `<key>version</key><integer>10</integer>` after the initial `<dict>` tag into your respective `.plist` file.

#### Windows

The Windows deployments are stored in the registry. User deployments are stored at:

```console
HKEY_CURRENT_USER\SOFTWARE\Policies\Rancher Desktop\Defaults
HKEY_CURRENT_USER\SOFTWARE\Policies\Rancher Desktop\Locked
```

And the system deployments are stored at:

```console
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Rancher Desktop\Defaults
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Rancher Desktop\Locked
```

Then add a `DWORD` value named `version`, with value `10` (hexadecimal `a`) at the top level of each profile that needs updating:

```console
"version"=dword:a
```

### Known Issues and Limitations

* You can set default values for `diagnostics.showMuted` (and on Windows `WSL.integrations`) via deployment profile, but currently can't lock them.
