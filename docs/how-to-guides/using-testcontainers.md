---
title: Using Testcontainers on Rancher Desktop
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/using-testcontainers"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

Rancher Desktop can be used with [Testcontainers](https://testcontainers.com/) to execute ephemeral tests and containers that work inside Docker. This guide demonstrates the use of Testcontainers with a sample repository.

### Prerequisites

[Testcontainers](https://testcontainers.com/) can only be used with the `moby (dockerd)` runtime as it requires a Docker-API compatible container runtime. Kubernetes must be disabled for machines on Apple Silicon. The setting can be disabled via the **Preferences > Kubernetes** dialog, or by using the `rdctl` command below:

```bash
rdctl set --kubernetes-enabled=false
```

 Please also ensure that [Apache Maven](https://maven.apache.org/install.html) is installed on your machine in order to make use of the [`mvn verify`](https://maven.apache.org/run-maven/index.html) command.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Linux">

You can download a sample test repository in the `testcontainers-java-repro` located here: https://github.com/testcontainers/testcontainers-java-repro

After the repository is downloaded, please navigate to the `testcontainers-java-repro` folder and run the command `mvn verify`.

```bash
mvn verify
```

After the command has been run, you should see a `BUILD SUCCESS` with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors.

</TabItem>
<TabItem value="macOS">

You can download a sample test repository in the `testcontainers-java-repro` located here: https://github.com/testcontainers/testcontainers-java-repro

<Tabs groupId="os">
<TabItem value="Apple Silicon">

Currently, workarounds are needed for using Testcontainers on macOS M1 machines. Below are methods for using Testcontainers on either runtime, depending on administrative access.

#### [QEMU](https://docs.rancherdesktop.io/ui/preferences/virtual-machine/emulation#qemu)

<details>
<summary>Workaround Summary</summary>

This runtime can be used with administrative access enabled which can be set via the [**Preferences > Application > General**](https://docs.rancherdesktop.io/ui/preferences/application/general) dialog. This will ensure that routable IP's are allocated.

Next, export the virtual machine port explicitly using the command below:

```bash
export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl shell ip a show rd0 | awk '/inet / {sub("/.*",""); print $2}')
```

</details>

#### [VZ](https://docs.rancherdesktop.io/ui/preferences/virtual-machine/emulation#vz)

<details>
<summary>Workaround Summary</summary>

This runtime can be used with administrative access enabled which can be set via the [**Preferences > Application > General**](https://docs.rancherdesktop.io/ui/preferences/application/general) dialog. This will ensure that routable IP's are allocated.

Next, export the virtual machine port explicitly using the command below:

```bash
export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl shell ip a show vznat | awk '/inet / {sub("/.*",""); print $2}')
```

For `VZ` virtual machines, you can also use Testcontainers without the need for administrative access by exporting the settings below:

```bash
export DOCKER_HOST=unix://$HOME/.rd/docker.sock
export TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE=/var/run/docker.sock
export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl shell ip a show vznat | awk '/inet / {sub("/.*",""); print $2}')
```

</details>

After the respective virtual machine settings have been applied, and the repository is downloaded, please navigate to the `testcontainers-java-repro` folder and run the command `mvn verify`.

```shell
mvn verify
```

After the command has been run, you should see a `BUILD SUCCESS` with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors.

</TabItem>
<TabItem value="Intel">

After the repository is downloaded, please navigate to the `testcontainers-java-repro` folder and run the command `mvn verify`.

```shell
mvn verify
```

After the command has been run, you should see a `BUILD SUCCESS` with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors.

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Windows">

You can download a sample test repository in the `testcontainers-java-repro` located here: https://github.com/testcontainers/testcontainers-java-repro

After the repository is downloaded, please navigate to the `testcontainers-java-repro` folder and run the command `mvn verify`.

```shell
mvn verify
```

After the command has been run, you should see a `BUILD SUCCESS` with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors.

</TabItem>
</Tabs>
