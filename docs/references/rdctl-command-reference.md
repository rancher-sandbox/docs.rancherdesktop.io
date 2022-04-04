---
title: rdctl Command Reference
---

`rdctl` is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. `rdctl` is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of `rdctl` supports the below commands (with support for more commands to be added in upcoming releases):
 
**:warning: As the current version of `rdctl` is experimental, all subcommands names, their arguments, and their output are still subjected to change.**

**:warning: Rancher Desktop app must be running on your machine to use `rdctl` commands.**

## rdctl or rdctl help

Run `rdctl` or `rdctl help` to see the list of available commands.

```
> rdctl help
The eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.

Usage:
  rdctl [command]

Available Commands:
  completion    Generate the autocompletion script for the specified shell
  help          Help about any command
  list-settings Lists the current settings.
  set           Update selected fields in the Rancher Desktop UI and restart the backend.
  shutdown      Shuts down the running Rancher Desktop application
  version       Shows the CLI version.

Flags:
      --config-path string   config file (default C:\Users\GunasekharMatamalam\AppData\Roaming\rancher-desktop\rd-engine.json)
  -h, --help                 help for rdctl
      --host string          default is localhost; most useful for WSL
      --password string      overrides the password setting in the config file
      --port string          overrides the port setting in the config file
      --user string          overrides the user setting in the config file

Use "rdctl [command] --help" for more information about a command.
```

## rdctl version

Run `rdctl version` to see the current rdctl CLI version.

```
> rdctl version
rdctl client version: 1.0.0, targeting server version: v0
```

## rdctl list-settings

Run `rdctl list-settings` to see the current active configuration.

```
> rdctl list-settings
{
  "version": 4,
  "kubernetes": {
    "version": "1.22.7",
    "memoryInGB": 2,
    "numberCPUs": 2,
    "port": 6443,
    "containerEngine": "moby",
    "checkForExistingKimBuilder": false,
    "enabled": true,
    "WSLIntegrations": {},
    "options": {
      "traefik": true
    }
  },
  "portForwarding": {
    "includeKubernetesServices": false
  },
  "images": {
    "showAll": true,
    "namespace": "k8s.io"
  },
  "telemetry": true,
  "updater": true,
  "debug": false
}
``` 

## rdctl set

Run `rdctl set [flags]` to set properties. In most of the cases, Kubernetes would be reset on running the `set` command. You can set multiple properties by chaining in a single command. See some examples below.

```
> rdctl set --kubernetes-enabled false
> rdctl set --container-runtime dockerd --kubernetes-version 1.21.2
```

## rdctl shutdown

Run `rdctl shutdown` to gracefully shutdown Rancher Desktop.

```
> rdctl shutdown
Shutting down.
```
