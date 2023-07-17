---
title: rdctl Command Reference
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/references/rdctl-command-reference"/>
</head>

`rdctl` is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. `rdctl` is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of `rdctl` supports the below commands (with support for more commands to be added in upcoming releases):
 
**:warning: As the current version of `rdctl` is experimental, all subcommands names, their arguments, and their output are still subjected to change.**

**:warning: Rancher Desktop app must be running on your machine to use `rdctl` commands.**

**Note:** For many `rdctl` commands, there are corresponding `API` calls that can be applied. Listed below are the available commands shown in both formats. The `api` examples will assume `curl` as the tool being used to talk to the API.

## rdctl or rdctl help

Run `rdctl` or `rdctl help` to see the list of available commands.

```
> rdctl help
The eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.

Usage:
  rdctl [command]

Available Commands:
  api           Runs API endpoints directly
  api /vX       Enables you to see the endpoints for a particular version; e.g., v0
  completion    Generates the autocompletion script for the specified shell
  help          Help about any command
  list-settings Lists the current settings
  set           Updates selected fields in the Rancher Desktop UI and restart the backend
  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM
  shutdown      Shuts down the running Rancher Desktop application
  start         Start up Rancher Desktop or update its settings
  version       Shows the CLI version

Flags:
      --config-path string   config file (default C:\Users\GunasekharMatamalam\AppData\Roaming\rancher-desktop\rd-engine.json)
  -h, --help                 help for rdctl
      --host string          default is localhost; most useful for WSL
      --password string      overrides the password setting in the config file
      --port string          overrides the port setting in the config file
      --user string          overrides the user setting in the config file

Use "rdctl [command] --help" for more information about a command.
```

## rdctl api

Run `rdctl api` to list all endpoints globally.

```
$ ../../../resources/darwin/bin/rdctl api / | jq -r .
[
  "GET /",
  "GET /v0",
  "GET /v0/settings",
  "PUT /v0/settings",
  "PUT /v0/shutdown"
]
```
## rdctl api /vX

Run `rdctl api /v0` to list all endpoints in a specified version.

```
$ rdctl api /v0 | jq -r .
[
  "GET /v0",
  "GET /v0/settings",
  "PUT /v0/settings",
  "PUT /v0/shutdown"
]
```
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
## rdctl list-settings

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

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
  </TabItem>
  <TabItem value="API" default>

Run the following API call to see the current active configuration:

```
curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET
```

**Note:** Using `-X GET` is optional. You could also just use the preceding command by itself.

  </TabItem>
</Tabs>

## rdctl set

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

Run `rdctl set [flags]` to set properties. In most of the cases, Kubernetes would be reset on running the `set` command. You can set multiple properties by chaining in a single command. See some examples below.

```
> rdctl set --kubernetes-enabled=false
> rdctl set --container-engine docker --kubernetes-version 1.21.2
```
  </TabItem>
  <TabItem value="API" default>

Run the following API call to set properties:

```
curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d '{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}' -X PUT
```
  </TabItem>
</Tabs>

## rdctl shutdown

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

Run `rdctl shutdown` to gracefully shut down Rancher Desktop.

```
> rdctl shutdown
Shutting down.
```

  </TabItem>
  <TabItem value="API" default>


Run the following API call to shut down Rancher Desktop:

```
shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT
```
  </TabItem>
</Tabs>

## rdctl start

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

Run `rdctl start` to ensure that Rancher Desktop is running and configured as requested.

```
> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3
```

  </TabItem>
  <TabItem value="API" default>


Run the following API call to ensure Rancher Desktop is running and configured, making sure to fill in your respective user and password values:

```
curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"
```
  </TabItem>
</Tabs>

## rdctl version

Run `rdctl version` to see the current rdctl CLI version.

```
> rdctl version
rdctl client version: 1.0.0, targeting server version: v0
```