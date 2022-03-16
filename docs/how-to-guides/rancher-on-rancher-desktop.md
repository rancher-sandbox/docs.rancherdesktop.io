---
title: Rancher on Rancher Desktop
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

While [Rancher](https://rancher.com/) and [Rancher Desktop](https://rancherdesktop.io/) share the _Rancher_ name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop.

This guide outlines steps to install Rancher Dashboard on Rancher Desktop using `container runtime` or `helm` (local environment):

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```console
nerdctl run --privileged -d --restart=no -p 8080:80 -p 8443:443 rancher/rancher
```

  </TabItem>
  <TabItem value="docker" default>

```console
docker run --privileged -d --restart=no -p 8080:80 -p 8443:443 rancher/rancher
```

  </TabItem>
  <TabItem value="helm" default>

1: Add Jetstack charts:
```console
helm repo add jetstack https://charts.jetstack.io
```

2: Add latest Rancher charts:
```console
helm repo add rancher-latest https://releases.rancher.com/server-charts/latest
```

3: Create cert-manager namespace:
```console
kubectl create namespace cert-manager
```

4: Install cert-manager services:
```console
helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.1.0 --set installCRDs=true
```

5: Create cattle-system namespace:
```console
kubectl create namespace cattle-system
```

6: Install Rancher application:
```console
helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=rancher.rd.localhost --wait --timeout=10m
```

  </TabItem>
</Tabs>

The installation takes a few minutes to complete. After the installation, you can access the Rancher UI as follows: 
* Installed through `container runtime`: [https://localhost:8443/](https://localhost:8443/) 
* Installed through `helm` [https://rancher.rd.localhost/](https://rancher.rd.localhost/)

![](/img/examples/rancherUiWelcomePage.png)


<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

In order to access the Rancher UI, you need to get the Bootstrap Password:

1: Get Rancher UI container ID/Name:
```console
nerdctl ps
```
2: Get the Bootstrap Password:
```console
nerdctl logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"
```
3: Bootstrap Password example:
```console
[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq
```

  </TabItem>
  <TabItem value="docker" default>

In order to access the Rancher UI, you need to get the Bootstrap Password:

1: Get Rancher UI container ID/Name:
```console
docker ps
```
2: Get the Bootstrap Password:
```console
docker logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"
```
3: Bootstrap Password example:
```console
[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq
```
  </TabItem>
</Tabs>

Follow the wizard instructions and click on `Continue` to land on the main Rancher UI page.

![](/img/examples/rancherUiMainPage.png)

From the Rancher UI, you can manage your local cluster, node, and more. For more information, see [Rancher Docs](https://rancher.com/docs/).