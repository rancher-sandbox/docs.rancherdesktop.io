---
title: "Command Reference: rdctl"
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/references/rdctl-command-reference"/>
</head>

`rdctl` is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. `rdctl` is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of `rdctl` supports the below commands (with support for more commands to be added in upcoming releases):

:::info

As the current version of `rdctl` is experimental, all subcommand names, their arguments, and their output are still subject to change.

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

:::note

For many `rdctl` commands, there are corresponding `API` calls that can be applied. Listed below are the available commands shown in both formats. The `api` examples will assume `curl` as the tool being used to talk to the API.

:::

## rdctl or rdctl help

Run `rdctl` or `rdctl help` to see the list of available commands.

<details>
<summary>Example Output</summary>

``` autoupdate=true
> rdctl help
The eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.

Usage:
  rdctl [command]

Available Commands:
  api           Run API endpoints directly
  completion    Generate the autocompletion script for the specified shell
  factory-reset Clear all the Rancher Desktop state and shut it down.
  help          Help about any command
  list-settings Lists the current settings.
  set           Update selected fields in the Rancher Desktop UI and restart the backend.
  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM
  shutdown      Shuts down the running Rancher Desktop application
  start         Start up Rancher Desktop, or update its settings.
  version       Shows the CLI version.

Flags:
      --config-path string   config file (default /Users/jan/Library/Application Support/rancher-desktop/rd-engine.json)
  -h, --help                 help for rdctl
      --host string          default is localhost; most useful for WSL
      --password string      overrides the password setting in the config file
      --port string          overrides the port setting in the config file
      --user string          overrides the user setting in the config file

Use "rdctl [command] --help" for more information about a command.
```

</details>

## rdctl api

Run `rdctl api /` to list all endpoints globally.

<details>
<summary>Example Output</summary>

``` autoupdate=true
$ rdctl api / | jq -r .[]
GET /
GET /v0
GET /v1
GET /v1/about
GET /v1/diagnostic_categories
GET /v1/diagnostic_checks
POST /v1/diagnostic_checks
GET /v1/diagnostic_ids
PUT /v1/factory_reset
PUT /v1/propose_settings
GET /v1/settings
PUT /v1/settings
PUT /v1/shutdown
GET /v1/transient_settings
PUT /v1/transient_settings
```

</details>

## rdctl api /vX

Run `rdctl api /v1` to list all endpoints in version 1.

<details>
<summary>Example Output</summary>

``` autoupdate=true
$ rdctl api /v1 | jq -r .[]
GET /v1
GET /v1/about
GET /v1/diagnostic_categories
GET /v1/diagnostic_checks
POST /v1/diagnostic_checks
GET /v1/diagnostic_ids
PUT /v1/factory_reset
PUT /v1/propose_settings
GET /v1/settings
PUT /v1/settings
PUT /v1/shutdown
GET /v1/transient_settings
PUT /v1/transient_settings
```

</details>

## rdctl api /v0/settings

`rdctl api [endpoints]` are commands that are most useful for users working directly with the API itself, and therefore they would not be for everyday use, such as `rdctl set` might be. For example,

a command such as

```
rdctl api /v0/settings --method PUT --body '{"kubernetes": {"enabled": false}}'
```

is the same as

```
rdctl set --kubernetes-enabled=false
```

but less concise and user-friendly.

## rdctl create-profile

Generates a deployment profile in either macOS plist or Windows registry format.

```console
rdctl create-profile <options> <options-input>
```

<details>
<summary>Options & Example Command</summary>

**Options**

```console
--input [FILE]              Input from file.
--body [JSON]               Input from JSON.
--from-settings             Default if no --input or --body specified, from user settings.
--output [plist, reg]       An output of plist files for macOS and reg files for Windows.

Additional options for --output reg:
--type [locked, defaults]   The locked field is set as default, otherwise the default type can be specified.
--hive [hklm, hkcu]         The hklm field is set as default, otherwise hkcu can be specified.
```

**Example**

```console
rdctl create-profile --output reg --hive=Hkcu --from-settings
```

</details>

## rdctl extension install

Installs a Rancher Desktop extension.

```
rdctl extension install <image-id>
```

<details>
<summary>Options & Example Output</summary>

**Options**

```
--force               Avoids any interactivity.
<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.
```

**Example**

``` autoupdate=true
$ rdctl extension install docker/logs-explorer-extension:0.2.2
Installing image docker/logs-explorer-extension:0.2.2
```

</details>

## rdctl extension ls

Lists currently installed images.

```
rdctl extension ls
```

<details>
<summary>Example Output</summary>

**Example**

``` autoupdate=true
$ rdctl extension ls
Extension IDs

docker/logs-explorer-extension:0.2.2
```

</details>

## rdctl extension uninstall

Uninstalls a Rancher Desktop extension.

```
rdctl extension uninstall <image-id>
```

<details>
<summary>Options & Example Output</summary>

**Options**

```
<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.
```

**Example**

``` autoupdate=true
$ rdctl extension uninstall docker/logs-explorer-extension:0.2.2
Uninstalling image docker/logs-explorer-extension:0.2.2: Deleted docker/logs-explorer-extension:0.2.2
```

</details>

## rdctl list-settings

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

Run `rdctl list-settings` to see the current active configuration.

<details>
<summary>Example Output</summary>

``` autoupdate=true
> rdctl list-settings
{
  "version": 6,
  "application": {
    "adminAccess": false,
    "pathManagementStrategy": "rcfiles",
    "updater": {
      "enabled": false
    },
    "debug": false,
    "telemetry": {
      "enabled": true
    },
    "autoStart": false,
    "startInBackground": false,
    "hideNotificationIcon": false,
    "window": {
      "quitOnClose": false
    }
  },
  "virtualMachine": {
    "memoryInGB": 6,
    "numberCPUs": 2,
    "hostResolver": true
  },
  "WSL": {
    "integrations": {}
  },
  "containerEngine": {
    "allowedImages": {
      "enabled": false,
      "patterns": [
        "docker.io"
      ]
    },
    "name": "moby"
  },
  "kubernetes": {
    "version": "",
    "port": 6443,
    "enabled": false,
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
    "namespace": "k8s.io"
  },
  "diagnostics": {
    "showMuted": false,
    "mutedChecks": {}
  },
  "experimental": {
    "virtualMachine": {
      "type": "qemu",
      "useRosetta": false,
      "socketVMNet": false,
      "mount": {
        "type": "reverse-sshfs",
        "9p": {
          "securityModel": "none",
          "protocolVersion": "9p2000.L",
          "msizeInKB": 128,
          "cacheMode": "mmap"
        }
      },
      "networkingTunnel": false
    }
  },
  "extensions": {
    "docker/logs-explorer-extension:0.2.2": true
  }
}

```

</details>

  </TabItem>
  <TabItem value="API" default>

Run the following API call to see the current active configuration:

<details>
<summary>Example Output</summary>

```
curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET
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
<summary>Example Output</summary>

```
> rdctl set --kubernetes-enabled=false
> rdctl set --container-engine docker --kubernetes-version 1.21.2
```

</details>

  </TabItem>
  <TabItem value="API" default>

Run the following API call to set properties:

<details>
<summary>Example Output</summary>

```
curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d '{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}' -X PUT
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

```
> rdctl shutdown
Shutting down.
```
</details>

  </TabItem>
  <TabItem value="API" default>

Run the following API call to shut down Rancher Desktop:

<details>
<summary>Example Output</summary>

```
shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT
```

</details>

  </TabItem>
</Tabs>

## rdctl start

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

Run `rdctl start` to ensure that Rancher Desktop is running and configured as requested.

<details>
<summary>Options & Example Command</summary>

**Options:**

```console
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
      --container-engine.name string                                    set engine (allowed values: [containerd, docker, moby])
      --diagnostics.show-muted                                          unhide muted diagnostics
      --experimental.virtual-machine.mount.9p.cache-mode string         (allowed values: [none, loose, fscache, mmap])
      --experimental.virtual-machine.mount.9p.msize-in-kib int          maximum packet size
      --experimental.virtual-machine.mount.9p.protocol-version string   (allowed values: [9p2000, 9p2000.u, 9p2000.L])
      --experimental.virtual-machine.mount.9p.security-model string     (allowed values: [passthrough, mapped-xattr, mapped-file, none])
      --experimental.virtual-machine.mount.type string                  how directories are shared (allowed values: [reverse-sshfs, 9p, virtiofs])
      --experimental.virtual-machine.socket-vmnet                       use socket-vmnet instead of vde-vmnet
      --experimental.virtual-machine.type string                        (allowed values: [qemu, vz])
      --experimental.virtual-machine.use-rosetta                        
      -h, --help                                                        help for start
      --images.namespace string                                         select only images from this namespace (containerd only)
      --images.show-all                                                 show system images on Images page
      --kubernetes.enabled                                              run Kubernetes
      --kubernetes.options.flannel                                      use flannel networking; disable to install your own CNI
      --kubernetes.options.traefik                                      install and run traefik
      --kubernetes.port int                                             apiserver port
      --kubernetes.version string                                       choose which version of Kubernetes to run
      --no-modal-dialogs                                                avoid displaying dialog boxes
      -p, --path string                                                 path to main executable
      --port-forwarding.include-kubernetes-services                     show Kubernetes system services on Port Forwarding page
      --virtual-machine.memory-in-gb int                                reserved RAM size
      --virtual-machine.number-cpus int                                 reserved number of CPUs

Global Flags:
      --config-path string   config file (default /Users/{username}/Library/Application Support/rancher-desktop/rd-engine.json)
      --host string          default is localhost; most useful for WSL
      --password string      overrides the password setting in the config file
      --port string          overrides the port setting in the config file
      --user string          overrides the user setting in the config file
```

**Example:**

```console
> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3
```

</details>

  </TabItem>
  <TabItem value="API" default>

Run the following API call to ensure Rancher Desktop is running and configured, making sure to fill in your respective user and password values:

<details>
<summary>Example Output</summary>

```
curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"
```

</details>

  </TabItem>
</Tabs>

## rdctl version

Run `rdctl version` to see the current rdctl CLI version.

<details>
<summary>Example Output</summary>

``` autoupdate=true
> rdctl version
rdctl client version: 1.1.0, targeting server version: v1
```

</details>
