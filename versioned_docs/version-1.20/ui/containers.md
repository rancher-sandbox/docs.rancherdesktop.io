---
sidebar_label: Containers
title: Containers
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/containers"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![Containers_Example](rd-versioned-asset://ui-main/Windows_Containers.png)

</TabItem>
<TabItem value="macOS">

![Containers_Example](rd-versioned-asset://ui-main/macOS_Containers.png)

</TabItem>
<TabItem value="Linux">

![Containers_Example](rd-versioned-asset://ui-main/Linux_Containers.png)

</TabItem>
</Tabs>

:::caution warning

This is an **experimental** feature.

:::

The **Containers** tab offers quick access to manage containers and view key information such as:

 - `State`:
  The container state(s) will be listed in this field, and by default running containers are presented first.
- `Name`:
  The container name(s) will be listed in this field and can be sorted.
- `Image`:
  All image names will be listed in this field and can be sorted.
- `Port(s)`:
  Ports are listed in this field and can be clicked for quick access to a localhost port.
- `Started`:
  Container start-up times will be listed in this field and can be sorted.

The information is updated automatically as containers are created, started, stopped, or deleted.

Containers are grouped together by Kubernetes pod, or by `docker-compose` deployment. The remaining containers are grouped as "Standalone Containers".

The listed information can be sorted in ascending or descending order. Containers can also be filtered with input text in the `Filter` field located at the top right. Bulk selection is available for managing multiple instances at once.

Additionally, when using the `containerd` engine, you can use the `Namespace` dropdown selector to help with filtering containers. The dropdown will be located next to the `Filter` field and shows namespaces in your cluster when clicked.

### Container Management

The buttons located at the top of the page will be highlighted when a container is selected and depend on the container's state.

Bulk selection and actions can also be performed on instances with the same state.

The following actions are available:

- `Stop`:
  You can terminate container instances using the `Stop` button.
- `Start`:
  You can initiate container instances using the `Start` button.
- `Delete`:
  You can delete container instances from your system entirely by using the `Delete` button.
- `⋮`:
  This button is located on the right side of the tab view. You can start, stop, or delete container instances depending on their state, and you can also view the logs of a container.

### Container Logs

The **Logs** view shows an automatically updating, scrolling view of the logs of a container. The **Search** box can be used to locate a string in the logs.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![Container Logs_Example](rd-versioned-asset://ui-main/Windows_Container-Logs.png)

</TabItem>
<TabItem value="macOS">

![Container Logs_Example](rd-versioned-asset://ui-main/macOS_Container-Logs.png)

</TabItem>
<TabItem value="Linux">

![Container Logs_Example](rd-versioned-asset://ui-main/Linux_Container-Logs.png)

</TabItem>
</Tabs>
