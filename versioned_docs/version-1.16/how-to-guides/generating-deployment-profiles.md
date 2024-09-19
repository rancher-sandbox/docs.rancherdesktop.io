---
title: Generating Deployment Profiles
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/hello-world-example"/>
</head>

Deployment Profiles are a way of both providing first-time default settings for Rancher Desktop, and locking down any or all of the application settings. The purpose of this guide is to demonstrate how to create deployment profiles. General information about deployment profiles are further detailed in [Getting Started > Deployment Profiles](../getting-started/deployment.md).

:::note
If your organization has its own methods of remotely configuring users' systems, it is out of the scope of this document.
:::

## Where do deployment profiles get installed?

The profile locations vary for each platform. We'll cover them from the simplest to most complex, and it is worth noting the file generation steps below will refer to these locations:

### Linux

User deployments are stored in:

```bash
~/.config/rancher-desktop.defaults.json
~/.config/rancher-desktop.locked.json
```

If the `XDG_CONFIG_HOME` environment variable is set, the user deployments are stored there instead of in `~/.config/...`.

System deployments always go in:

```bash
/etc/rancher-desktop/defaults.json
/etc/rancher-desktop/locked.json
```

As is apparent from the filenames' extensions, they are `json` files.

### macOS

User deployments are stored in:

```bash
~/Library/Preferences/io.rancherdesktop.profile.defaults.plist
~/Library/Preferences/io.rancherdesktop.profile.locked.plist
```

System deployments always go in:

```bash
/Library/Preferences/io.rancherdesktop.profile.defaults.plist
/Library/Preferences/io.rancherdesktop.profile.locked.plist
```

These two lists look similar but differ in permissions. The user-deployments go under the user's home directory, while the system deployments are in the common `/Library/` tree, and cannot be modified by users without root privileges.

These files are all in a plain-text form of Apple's `plist` format, an XML-based language. It is possible to manually create these files, and the process is described below in "Generating Deployments".

### Windows

The Windows deployments are stored in the registry. User deployments are stored at:

```shell
HKEY_CURRENT_USER\SOFTWARE\Policies\Rancher Desktop\Defaults
HKEY_CURRENT_USER\SOFTWARE\Policies\Rancher Desktop\Locked
```

And the system deployments are stored at:

```shell
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Rancher Desktop\Defaults
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Rancher Desktop\Locked
```

The structure of the registry instances follows the structure of the JSON files for the other platforms. The name of a non-leaf node in the JSON structure (a name to the left of a ":") will appear as a registry key. Leaf nodes appear as key-value pairs in the right-hand pane of a key's view where the key is the field's name. And hash-like objects (like `WSL.integrations`) also appear as key-value pairs, in this case for the key `...\WSL\integrations`.

Additionally, if you're coding against the registry, names are always case-insensitive. Feel free to use all lower-case, UPPER-CASE, or spOnGeBoBCasE.

## Generating deployments

The easiest way to do this is on a system already running Rancher Desktop, mainly for its `rdctl` command-line tool, and the default list of settings.

First, you're going to want to verify that the deployments you create make sense on a working Rancher Desktop, so the rest of this document assumes you'll have access to it. Rancher Desktop runs on air-gapped systems, so if you're creating deployments for security-related reasons, security shouldn't be a concern while creating them.

### Prerequisite

We also assume you've installed the `jq` json tool. If you have a preferred variant, simply substitute it for `jq` in the following text.

### Crafting JSON deployment files

Let's assume you want to create both default-value and locked-value deployment profiles.

:::note
If you want to start with Rancher Desktop's default values, and don't have your own workloads you need to preserve, you can run `rdctl factory-reset` first.
:::

Start up Rancher Desktop, and run the following commands in your preferred shell:

```shell
rdctl list-settings | jq . > working-defaults.txt
rdctl list-settings | jq . > working-locked.txt
```

If you're only making one type of profile, you'll only need one of the above lines, of course. It also is not necessary to create both a user and system profile for the same type of deployment. If Rancher Desktop sees a system-profile, it won't load the user-profile of the same kind. However, if Rancher Desktop finds, for example, a user-defaults and a system-locked profile, but no system-defaults profile, it will load the user-defaults and system-locked profiles.

Next, you can edit each of the JSON files to contain only the values you care about. You can use the `jq` command to validate the final outputs:

```shell
jq  -e . working-defaults.txt >/dev/null 2>&1
```

The command will have a 0 status if the file is valid (`True` on Powershell), 1 or `False` otherwise.

Here's a sample locked-field JSON file:

```json
{
  "containerEngine": {
    "allowedImages": {
      "enabled": true,
      "patterns": [
        "PATTERN1",
        "PATTERN2"
      ]
    },
    "name": "moby"
  },
  "kubernetes": {
    "version": "1.24.10"
  }
}
```

:::caution Warning
Users with this locked file will be able to use only `moby`, not `containerd`, and will only be able to pull container images that match the supplied patterns. They will also be constrained to using the specified kubernetes version.
:::

If you're on a Linux system, you can quickly test these files with the following steps:

```bash
# Shut down Rancher Desktop
rdctl factory-reset
cp working-defaults.txt ~/.config/rancher-desktop.defaults.json
cp working-locked.txt ~/.config/rancher-desktop.locked.json
```

Now bring up Rancher Desktop, and bring up the `Preferences` window. Verify that the fields you entered in the `locked` file have the specified values, appear with a padlock icon in the UI, and can't be changed. Verify that the fields from the `defaults` value appear with the specified values in the UI,
and can be changed (as expected, if a field appears in both the `defaults` and `locked` deployment profile, the `locked` value takes precedence).

### Targeting other systems

If all your users are on Linux systems, you're done, but if not, the rest is straightforward. `rdctl` can take a JSON file and generate a deployment for either macOS or Windows. Windows uses the registry, so we generate *registry import files*, and you can then use the `reg` command in a terminal to install them.

#### macOS

For macOS, you would run the following commands to generate either system or user deployment files:

```bash
rdctl create-profile --output plist --input working-defaults.txt > io.rancherdesktop.profile.defaults.plist
rdctl create-profile --output plist --input working-locked.txt > io.rancherdesktop.profile.locked.plist
```

And the `io.*.plist` files just need to be deployed to the users' systems, as described above.

#### Windows

Windows differs from the other platforms. Here you specify the type of profile ("locked" or "defaults") and hive (`HKLM` or `HKCU`) on the command-line, and let the `run.exe` command decide which part of the registry to update:

```bash
rdctl create-profile --output reg --hive hklm --type defaults working-defaults.txt > reg-system-defaults.txt
rdctl create-profile --output reg --hive hkcu --type defaults working-defaults.txt > reg-user-defaults.txt
rdctl create-profile --output reg --hive hklm --type locked working-locked.txt > reg-system-locked.txt
rdctl create-profile --output reg --hive hkcu --type locked working-locked.txt > reg-user-locked.txt
```

The above commands generate four different files, but as explained before, system takes precedence over user profiles, so there's only need to generate at most two files.

You would then deploy the files to the target Windows systems, and in a shell with administrative privileges run the command:

```bash
reg import FILENAME
```

## Troubleshooting

System profiles are loaded only when there is no `settings.json` in the config area - so these typically are loaded only on first-run and after a factory-reset.

Locked profiles are loaded at the start of every run, and take precedence over the values in existing `settings.json` files (which means a crafty user can't shut down Rancher Desktop and manually edit the `settings.json` file to get around the locked-deployment-profile restrictions).

### Running `reg.exe`

Running `reg.exe` - registry entries under the `Policies` key can only be loaded with the `reg import` command when the user is running as an administrator.
