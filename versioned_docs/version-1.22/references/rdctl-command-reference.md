---
title: "Command Reference: rdctl"
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/references/rdctl-command-reference"/>
</head>

`rdctl` is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. `rdctl` is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of `rdctl` supports the below commands (with support for more commands to be added in upcoming releases):

:::info
As the current version of `rdctl` is experimental, all subcommand names, their arguments, and their output are still subject to change.

For many `rdctl` commands, there are corresponding `API` calls that can be applied. Listed below are the available commands shown in both formats. The `api` examples will assume `curl` as the tool being used to talk to the API.

Additionally, some examples make use of credentials which can be found in these locations across platforms:

- Linux: ~/.local/share/rancher-desktop/
- macOS: ~/Library/Application\ Support/rancher-desktop/
- Windows: %LOCALAPPDATA%\rancher-desktop\

:::

:::caution warning

The Rancher Desktop application must be running for the following commands:

<details>
<summary>Command List</summary>

* rdctl list-settings
* rdctl set
* rdctl shutdown

</details>
:::

## rdctl or rdctl help

Run `rdctl` or `rdctl help` to see the list of available commands.

<details>

**Options**

```console autoupdate=true
$ rdctl help
The eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.

Usage:
  rdctl [command]

Available Commands:
  api            Run API endpoints directly
  completion     Generate the autocompletion script for the specified shell
  create-profile Generate a deployment profile in either macOS plist or Windows registry format
  extension      Manage extensions
  help           Help about any command
  info           Return information about Rancher Desktop
  list-settings  Lists the current settings.
  reset          Reset Rancher Desktop
  set            Update selected fields in the Rancher Desktop UI and restart the backend.
  shell          Run an interactive shell or a command in a Rancher Desktop-managed VM
  shutdown       Shuts down the running Rancher Desktop application
  snapshot       Manage Rancher Desktop snapshots
  start          Start up Rancher Desktop, or update its settings.
  version        Shows the CLI version.

Flags:
      --config-path string   config file (default .../rancher-desktop/rd-engine.json)
  -h, --help                 help for rdctl
      --host string          default is 127.0.0.1; most useful for WSL
      --password string      overrides the password setting in the config file
      --port int             overrides the port setting in the config file
      --user string          overrides the user setting in the config file
      --verbose              Be verbose

Use "rdctl [command] --help" for more information about a command.
```

</details>

## rdctl api

Run `rdctl api /` to list all endpoints globally.

<details>

**Example**

```console autoupdate=true
$ rdctl api / | jq -r .[]
GET /
GET /v0
GET /v1
GET /v1/about
GET /v1/backend_state
PUT /v1/backend_state
GET /v1/diagnostic_categories
GET /v1/diagnostic_checks
POST /v1/diagnostic_checks
GET /v1/diagnostic_ids
GET /v1/extensions
POST /v1/extensions/install
POST /v1/extensions/uninstall
PUT /v1/factory_reset
PUT /v1/k8s_reset
DELETE /v1/port_forwarding
POST /v1/port_forwarding
PUT /v1/propose_settings
GET /v1/settings
PUT /v1/settings
GET /v1/settings/locked
PUT /v1/shutdown
POST /v1/snapshot/restore
GET /v1/snapshots
DELETE /v1/snapshots
POST /v1/snapshots
POST /v1/snapshots/cancel
GET /v1/transient_settings
PUT /v1/transient_settings
```

</details>

## rdctl api /vX

Run `rdctl api /v1` to list all endpoints in version 1.

<details>

**Example**

```console autoupdate=true
$ rdctl api /v1 | jq -r .[]
GET /v1
GET /v1/about
GET /v1/backend_state
PUT /v1/backend_state
GET /v1/diagnostic_categories
GET /v1/diagnostic_checks
POST /v1/diagnostic_checks
GET /v1/diagnostic_ids
GET /v1/extensions
POST /v1/extensions/install
POST /v1/extensions/uninstall
PUT /v1/factory_reset
PUT /v1/k8s_reset
DELETE /v1/port_forwarding
POST /v1/port_forwarding
PUT /v1/propose_settings
GET /v1/settings
PUT /v1/settings
GET /v1/settings/locked
PUT /v1/shutdown
POST /v1/snapshot/restore
GET /v1/snapshots
DELETE /v1/snapshots
POST /v1/snapshots
POST /v1/snapshots/cancel
GET /v1/transient_settings
PUT /v1/transient_settings
```

</details>

## rdctl api /v1/settings

`rdctl api [endpoints]` are commands that are most useful for users working directly with the API itself, and therefore they would not be for everyday use, such as `rdctl set` might be. For example,

a command such as

```console
$ rdctl api /v1/settings --method PUT --body '{"kubernetes": {"enabled": false}}'
```

is the same as

```console
$ rdctl set --kubernetes-enabled=false
```

but less concise and user-friendly.

## rdctl create-profile

Generates a deployment profile for Rancher Desktop settings in either macOS `.plist` or Windows `.reg` format.

```console
$ rdctl create-profile <options> <options-input>
```

<details>

**Options**

```console auto-update=true
$ rdctl create-profile --help
--input [FILE]              File containing a JSON document.
--body [JSON]               Command-line option containing a JSON document
--from-settings             Use current settings.
--output [plist, reg]       An output of .plist files for macOS and .reg files for Windows.

Additional options for --output reg:
--type [locked, defaults]   The locked field is set as default, otherwise the default type can be specified.
--hive [hklm, hkcu]         The hklm field is set as default, otherwise hkcu can be specified.
```

**Example**

```console
$ rdctl create-profile --output reg --hive=hkcu --from-settings
```

</details>

## rdctl extension install

Installs a Rancher Desktop extension.

```console
$ rdctl extension install <image-id>
```

<details>

**Options**

```console auto-update=true
$ rdctl extension install --help
--force               Avoids any interactivity.
<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.
```

**Example**

```console autoupdate=true
$ rdctl extension install docker/logs-explorer-extension:0.2.2
Installing image docker/logs-explorer-extension:0.2.2: Created
```

</details>

## rdctl extension ls

Lists currently installed images.

```console
$ rdctl extension ls
```

<details>

**Example**

```console autoupdate=true
$ rdctl extension ls
Extension IDs

docker/logs-explorer-extension:0.2.2
```

</details>

## rdctl extension uninstall

Uninstalls a Rancher Desktop extension.

```console
$ rdctl extension uninstall <image-id>
```

<details>

**Options**

```console autoupdate=true
$ rdctl extension uninstall --help
rdctl extension uninstall <image-id>
The <image-id> is an image reference, e.g. splatform/epinio-docker-desktop:latest (the tag is optional).

Usage:
  rdctl extension uninstall [flags]

Flags:
  -h, --help   help for uninstall

Global Flags:
      --config-path string   config file (default .../rancher-desktop/rd-engine.json)
      --host string          default is 127.0.0.1; most useful for WSL
      --password string      overrides the password setting in the config file
      --port int             overrides the port setting in the config file
      --user string          overrides the user setting in the config file
      --verbose              Be verbose
```

**Example**

```console autoupdate=true
$ rdctl extension uninstall docker/logs-explorer-extension:0.2.2
Uninstalling image docker/logs-explorer-extension:0.2.2: Deleted docker/logs-explorer-extension:0.2.2
```

</details>

## rdctl list-settings

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

Run `rdctl list-settings` to see the current active configuration.

<details>

**Options**

```console autoupdate=true
$ rdctl list-settings --help 
Lists the current settings in JSON format.

Usage:
  rdctl list-settings [flags]

Flags:
  -h, --help   help for list-settings

Global Flags:
      --config-path string   config file (default .../rancher-desktop/rd-engine.json)
      --host string          default is 127.0.0.1; most useful for WSL
      --password string      overrides the password setting in the config file
      --port int             overrides the port setting in the config file
      --user string          overrides the user setting in the config file
      --verbose              Be verbose
```

**Example Output Using macOS Environment**

```console autoupdate=true
$ rdctl list-settings
{
  "version": 17,
  "application": {
    "adminAccess": false,
    "debug": false,
    "extensions": {
      "allowed": {
        "enabled": false,
        "list": []
      },
      "installed": {}
    },
    "pathManagementStrategy": "rcfiles",
    "telemetry": {
      "enabled": true
    },
    "updater": {
      "enabled": true
    },
    "autoStart": false,
    "startInBackground": false,
    "hideNotificationIcon": false,
    "window": {
      "quitOnClose": false
    }
  },
  "containerEngine": {
    "allowedImages": {
      "enabled": false,
      "patterns": []
    },
    "mobyStorageDriver": "auto",
    "name": "moby"
  },
  "virtualMachine": {
    "memoryInGB": 6,
    "numberCPUs": 2,
    "type": "vz",
    "useRosetta": false,
    "mount": {
      "type": "virtiofs"
    }
  },
  "WSL": {
    "integrations": {}
  },
  "kubernetes": {
    "version": "1.34.3",
    "port": 6443,
    "enabled": true,
    "options": {
      "traefik": true,
      "flannel": true
    },
    "ingress": {
      "localhostOnly": false
    }
  },
  "portForwarding": {
    "includeKubernetesServices": false
  },
  "images": {
    "showAll": true,
    "namespace": "default"
  },
  "containers": {
    "showAll": true,
    "namespace": "default"
  },
  "diagnostics": {
    "showMuted": false,
    "mutedChecks": {},
    "connectivity": {
      "interval": 5000,
      "timeout": 5000
    }
  },
  "experimental": {
    "containerEngine": {
      "webAssembly": {
        "enabled": false
      }
    },
    "kubernetes": {
      "options": {
        "spinkube": false
      }
    },
    "virtualMachine": {
      "diskSize": "100GiB",
      "mount": {
        "9p": {
          "securityModel": "none",
          "protocolVersion": "9p2000.L",
          "msizeInKib": 128,
          "cacheMode": "mmap"
        }
      },
      "proxy": {
        "enabled": false,
        "address": "",
        "password": "",
        "port": 3128,
        "username": "",
        "noproxy": [
          "0.0.0.0/8",
          "10.0.0.0/8",
          "127.0.0.0/8",
          "169.254.0.0/16",
          "172.16.0.0/12",
          "192.168.0.0/16",
          "224.0.0.0/4",
          "240.0.0.0/4"
        ]
      },
      "sshPortForwarder": true
    }
  }
}

```

</details>

  </TabItem>
  <TabItem value="API" default>

Run the following API call to see the current active configuration:

<details>
<summary>Example Command</summary>

```console
$ curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v1/settings -X GET
```

</details>

**Note:** Using `-X GET` is optional. You could also just use the preceding command by itself.

  </TabItem>
</Tabs>

## rdctl set

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

Run `rdctl set [flags]` to set properties. In most of the cases, Kubernetes would be reset on running the `set` command. You can set multiple properties by chaining in a single command. See some examples below.

<details>
<summary>Example Command</summary>

```console
$ rdctl set --kubernetes-enabled=false
$ rdctl set --container-engine docker --kubernetes-version 1.21.2
```

</details>

  </TabItem>
  <TabItem value="API" default>

Run the following API call to set properties:

<details>
<summary>Example Command</summary>

```console
$ curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v1/settings -d '{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}' -X PUT
```

</details>

  </TabItem>
</Tabs>

## rdctl shutdown

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

Run `rdctl shutdown` to gracefully shut down Rancher Desktop.

<details>
<summary>Example Output</summary>

```console
$ rdctl shutdown
Shutting down.
```

</details>

  </TabItem>
  <TabItem value="API" default>

Run the following API call to shut down Rancher Desktop:

<details>
<summary>Example Command</summary>

```shell
$ curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v1/shutdown -X PUT
```

</details>

  </TabItem>
</Tabs>

## rdctl snapshot

Run `rdctl snapshot` to store the current configuration of your virtual machine and all associated settings as a snapshot.

<details>

**Options**

```console autoupdate=true
$ rdctl snapshot --help
Manage Rancher Desktop snapshots

Usage:
  rdctl snapshot [command]

Available Commands:
  create      Create a snapshot
  delete      Delete a snapshot
  list        List snapshots
  restore     Restore a snapshot
  unlock      Remove snapshot lock

Flags:
  -h, --help   help for snapshot

Global Flags:
      --config-path string   config file (default .../rancher-desktop/rd-engine.json)
      --host string          default is 127.0.0.1; most useful for WSL
      --password string      overrides the password setting in the config file
      --port int             overrides the port setting in the config file
      --user string          overrides the user setting in the config file
      --verbose              Be verbose

Use "rdctl snapshot [command] --help" for more information about a command.
```

**Example**

```console autoupdate=true
$ rdctl snapshot create example_snapshot
$ rdctl snapshot delete example_snapshot
$ rdctl snapshot list --json
```

</details>

## rdctl start

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

Run `rdctl start` to ensure that Rancher Desktop is running and configured as requested.

<details>

**Options:**

```console autoupdate=true
$ rdctl start --help
Starts up Rancher Desktop with the specified settings.
If it's running, behaves the same as 'rdctl set ...'.

Usage:
  rdctl start [flags]

Flags:
      --application.admin-access                                        enable privileged operations
      --application.auto-start                                          start app when logging in
      --application.debug                                               generate more verbose logging
      --application.hide-notification-icon                              don't show notification icon
      --application.path-management-strategy string                     update PATH to include ~/.rd/bin (allowed values: [manual, rcfiles])
      --application.start-in-background                                 start app without window
      --application.telemetry.enabled                                   allow collection of anonymous statistics
      --application.updater.enabled                                     automatically update to the latest release
      --application.window.quit-on-close                                terminate app when the main window is closed
      --container-engine.allowed-images.enabled                         only allow images to be pulled that match the allowed patterns
      --container-engine.moby-storage-driver string                     override Moby storage driver selection (allowed values: [classic, snapshotter, auto])
      --container-engine.name string                                    set engine (allowed values: [containerd, docker, moby])
      --containers.namespace string                                     select only namespaces from this namespace (containerd only)
      --containers.show-all                                             show system containers on Containers page
      --diagnostics.connectivity.interval int                           Number of milliseconds before polling for network access; set this to zero to disable background connectivity checking
      --diagnostics.connectivity.timeout int                            Number of milliseconds to wait before timing out
      --diagnostics.show-muted                                          unhide muted diagnostics
      --experimental.container-engine.web-assembly.enabled              enable support for containerd-wasm shims
      --experimental.kubernetes.options.spinkube                        install spin operator
      --experimental.virtual-machine.disk-size string                   desired size of the disk; changing this setting will not shrink existing disks (example: 10GiB)
      --experimental.virtual-machine.mount.9p.cache-mode string         (allowed values: [none, loose, fscache, mmap])
      --experimental.virtual-machine.mount.9p.msize-in-kib int          maximum packet size
      --experimental.virtual-machine.mount.9p.protocol-version string   (allowed values: [9p2000, 9p2000.u, 9p2000.L])
      --experimental.virtual-machine.mount.9p.security-model string     (allowed values: [passthrough, mapped-xattr, mapped-file, none])
      --experimental.virtual-machine.ssh-port-forwarder                 use SSH for port forwarding instead of gRPC
  -h, --help                                                            help for start
      --images.namespace string                                         select only images from this namespace (containerd only)
      --images.show-all                                                 show system images on Images page
      --kubernetes.enabled                                              run Kubernetes
      --kubernetes.options.flannel                                      use flannel networking; disable to install your own CNI
      --kubernetes.options.traefik                                      install and run traefik
      --kubernetes.port int                                             apiserver port
      --kubernetes.version string                                       choose which version of Kubernetes to run
      --no-modal-dialogs                                                avoid displaying dialog boxes
  -p, --path string                                                     path to main executable
      --port-forwarding.include-kubernetes-services                     show Kubernetes system services on Port Forwarding page
      --virtual-machine.memory-in-gb int                                reserved RAM size
      --virtual-machine.mount.type string                               how directories are shared; 9p is experimental (allowed values: [reverse-sshfs, 9p, virtiofs])
      --virtual-machine.number-cpus int                                 reserved number of CPUs
      --virtual-machine.type string                                     (allowed values: [qemu, vz])
      --virtual-machine.use-rosetta

Global Flags:
      --config-path string   config file (default .../rancher-desktop/rd-engine.json)
      --host string          default is 127.0.0.1; most useful for WSL
      --password string      overrides the password setting in the config file
      --port int             overrides the port setting in the config file
      --user string          overrides the user setting in the config file
      --verbose              Be verbose
```

**Example:**

```console
$ rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3
```

</details>

  </TabItem>
  <TabItem value="API" default>

Run the following API call to ensure Rancher Desktop is running and configured, making sure to fill in your respective user and password values:

<details>
<summary>Example Command</summary>

```shell
$ curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"
```

</details>

  </TabItem>
</Tabs>

## rdctl version

Run `rdctl version` to see the current rdctl CLI version.

<details>
<summary>Example Output</summary>

```console autoupdate=true
$ rdctl version
rdctl client version: v1.22.0, targeting server version: v1
```

</details>
