---
title: Setup NGINX Ingress Controller
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/setup-NGINX-Ingress-Controller"/>
</head>

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/setup-NGINX-Ingress-Controller"/>
</head>

Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default ingress controller for your Kubernetes cluster. However, there are unique use cases where NGINX may be required or preferred. Below steps show how to use NGINX Ingress controller for a sample deployment.

### Steps

1. Uncheck `Enable Traefik` from the `Kubernetes Settings` page to disable Traefik. You may need to exit and restart Rancher Desktop for the change to take effect.

2. Deploy the NGINX ingress controller via `helm` or `kubectl`.

<Tabs groupId="deployment-approach">
  <TabItem value="helm" default>

```
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace
```

  </TabItem>
  <TabItem value="kubectl">

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml
```

  </TabItem>
</Tabs>

3. Wait for the ingress pods to come up and running.

```
kubectl get pods --namespace=ingress-nginx
```

4. Create a sample deployment and the associated service.

```
kubectl create deployment demo --image=nginx --port=80
kubectl expose deployment demo
```

5. Create an ingress resource. The following command uses a host that maps to localhost.

```
kubectl create ingress demo-localhost --class=nginx --rule="demo.localdev.me/*=demo:80"
```

6. Forward a local port to the ingress controller.

```
kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80
```

If you access http://demo.localdev.me:8080/, you should see NGINX Welcome page.
