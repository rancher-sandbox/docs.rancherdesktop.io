---
title: Create a Multi-Node Cluster with k3d
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/create-multi-node-cluster"/>
</head>

Rancher Desktop provides a **single cluster with single node** setup, which is adequate for most local development scenarios. However, there are use cases where, the ability to create a multi node cluster or spin up multiple clusters with flexibilty to switch between clusters is required. Eventhough Rancher Desktop doesn't have in-built multi node/cluster functionality, you can use [k3d](https://k3d.io) with Rancher Desktop to accomplish the same. k3d is a lightweight wrapper to run k3s (a minimal Kubernetes distribution, which is used by Rancher Desktop as well) in docker. k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes.

### Steps to spin up a multi-node cluster

1. Make sure **dockerd(moby)** is selected as the Container Runtime in the **Kubernetes Settings** page.

2. Install k3d.

<Tabs groupId="installation-approach">
  <TabItem value="wget" default>

```
wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
```

  </TabItem>
  <TabItem value="curl">

```
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
```

  </TabItem>
</Tabs>

3. Run `k3d cluster create` command to spin up multi node clusters. For example:

```
k3d cluster create two-node-cluster --agents 2
k3d cluster create three-node-cluster --agents 3
```

4. k3d sets the newly created cluster as active. You can switch between clusters via `kubectl config use-context` command. For example:

```
kubectl config use-context k3d-two-node-cluster
```
To learn more about **k3s** and **k3d**, refer to these projects' docs at [k3s docs](https://docs.k3s.io/) and [k3d docs](https://k3d.io/).

**:warning: Please note that the clusters created by `k3d` are not managed by Rancher Desktop GUI.**
