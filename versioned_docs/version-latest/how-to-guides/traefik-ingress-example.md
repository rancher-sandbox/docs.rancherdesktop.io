---
title: Using the Traefik Ingress Controller
---

import TabsConstants from '@site/core/TabsConstants';

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/traefik-ingress-example"/>
</head>

Rancher Desktop uses `K3s` under the hood, which in turn uses [Traefik](https://doc.traefik.io/traefik/) as the [default Ingress controller](https://docs.k3s.io/networking#traefik-ingress-controller) for your Kubernetes cluster. As an example, the below steps outline creating simple services that can be routed by the Ingress object.

### Example Steps: Traefik Ingress Controller

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Linux">

1. Open a bash session and set the node IP to your localhost address:

  ```bash
  IP=127.0.0.1
  ```

1. Create a namespace called demo:

  ```bash
  kubectl create ns demo
  ```

1. Create a `whoami` example with basic deployment, service, and Ingress objects defined:

  :::note
  Some Linux distributions don't allow listening to privileged ports by default, please see the documentation on [Traefik port binding access](/getting-started/installation#traefik-port-binding-access) to authorize ports if necessary.
  :::

  ```bash
  cat << EOF | kubectl apply -n demo -f -
  ---
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    labels:
      app: whoami
    name: whoami
  spec:
    replicas: 1
    selector:
      matchLabels:
        app: whoami
    template:
      metadata:
        labels:
          app: whoami
      spec:
        containers:
          - image: traefik/whoami:latest
            name: whoami
            ports:
              - containerPort: 80
  ---
  apiVersion: v1
  kind: Service
  metadata:
    name: whoami-svc
  spec:
    type: ClusterIP
    selector:
      app: whoami
    ports:
      - port: 80
  ---    
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: whoami-http
    annotations:
      traefik.ingress.kubernetes.io/router.entrypoints: web
  spec:
    rules:
      - host: whoami.$IP.sslip.io
        http:
          paths:
            - path: /
              pathType: Prefix
              backend:
                service:
                  name: whoami-svc
                  port:
                    number: 80
  EOF
  ```

1. Verify the ingress works by calling `curl`:

  ```bash
  curl whoami.$IP.sslip.io
  Hostname: whoami-6ff6dcfdc8-74mwq
  IP: 127.0.0.1
  IP: ::1
  IP: 10.42.0.42
  IP: fe80::e804:41ff:feac:7eef
  RemoteAddr: 10.42.0.45:35392
  GET / HTTP/1.1
  Host: whoami.127.0.0.1.sslip.io
  User-Agent: curl/7.64.1
  Accept: */*
  Accept-Encoding: gzip
  X-Forwarded-For: 10.42.0.1
  X-Forwarded-Host: whoami.127.0.0.1.sslip.io
  X-Forwarded-Port: 80
  X-Forwarded-Proto: http
  X-Forwarded-Server: traefik-d497b4cb6-4vkg9
  X-Real-Ip: 10.42.0.1
  ```

1. Delete the resources:

  ```bash
  kubectl delete all,ingress --all -n demo
  ```

</TabItem>
<TabItem value="macOS">

1. Open a bash session and set the node IP to your localhost address:

  <Tabs>
  <TabItem value="Default">

  ```bash
  IP=127.0.0.1
  ```

  </TabItem>
  <TabItem value="socket-vmnet Enabled">

  ```bash
  IP=`kubectl get node/lima-rancher-desktop -o jsonpath='{.status.addresses[?(@.type=="ExternalIP")].address}'`
  ```

  </TabItem>
</Tabs>

1. Create a namespace called demo:

  ```bash
  kubectl create ns demo
  ```

1. Create a `whoami` example with basic deployment, service, and Ingress objects defined:

  ```bash
  cat << EOF | kubectl apply -n demo -f -
  ---
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    labels:
      app: whoami
    name: whoami
  spec:
    replicas: 1
    selector:
      matchLabels:
        app: whoami
    template:
      metadata:
        labels:
          app: whoami
      spec:
        containers:
          - image: traefik/whoami:latest
            name: whoami
            ports:
              - containerPort: 80
  ---
  apiVersion: v1
  kind: Service
  metadata:
    name: whoami-svc
  spec:
    type: ClusterIP
    selector:
      app: whoami
    ports:
      - port: 80
  ---    
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: whoami-http
    annotations:
      traefik.ingress.kubernetes.io/router.entrypoints: web
  spec:
    rules:
      - host: whoami.$IP.sslip.io
        http:
          paths:
            - path: /
              pathType: Prefix
              backend:
                service:
                  name: whoami-svc
                  port:
                    number: 80
  EOF
  ```

1. Verify the ingress works by calling `curl`:

  ```bash
  curl whoami.$IP.sslip.io
  Hostname: whoami-6ff6dcfdc8-74mwq
  IP: 127.0.0.1
  IP: 10.42.0.4
  RemoteAddr: 10.42.0.250:54102
  GET / HTTP/1.1
  Host: whoami.127.0.0.1.sslip.io
  User-Agent: curl/8.1.1
  Accept: */*
  Accept-Encoding: gzip
  X-Forwarded-For: 10.42.0.246
  X-Forwarded-Host: whoami.127.0.0.1.sslip.io
  X-Forwarded-Port: 80
  X-Forwarded-Proto: http
  X-Forwarded-Server: traefik-64b96ccbcd-26wcv
  X-Real-Ip: 10.42.0.246
  ```

1. Delete the resources:

  ```bash
  kubectl delete all,ingress --all -n demo
  ```

</TabItem>
<TabItem value="Windows">

1. Open a powershell session and set the node IP to your local address:

  ```shell
  $IP = (kubectl get node/$env:COMPUTERNAME -o=jsonpath="{range .status.addresses[?(@.type == 'InternalIP')]}{.address}{end}")
  ```

1. Create a namespace called demo:

  ```shell
  kubectl create ns demo
  ```

1. Create a `whoami` example with basic deployment, service, and Ingress objects defined:

  ```shell
  echo @"
  ---
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    labels:
      app: whoami
    name: whoami
  spec:
    replicas: 1
    selector:
      matchLabels:
        app: whoami
    template:
      metadata:
        labels:
          app: whoami
      spec:
        containers:
          - image: traefik/whoami:latest
            name: whoami
            ports:
              - containerPort: 80
  ---
  apiVersion: v1
  kind: Service
  metadata:
    name: whoami-svc
  spec:
    type: ClusterIP
    selector:
      app: whoami
    ports:
      - port: 80
  ---
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: whoami-http
    annotations:
      traefik.ingress.kubernetes.io/router.entrypoints: web
  spec:
    rules:
      - host: whoami.$IP.sslip.io
        http:
          paths:
            - path: /
              pathType: Prefix
              backend:
                service:
                  name: whoami-svc
                  port:
                    number: 80
  "@ | kubectl apply -n demo -f -
  ```

1. Verify the ingress works by calling `curl`:

  ```shell
  curl whoami.$IP.sslip.io
  ```

1. Delete the resources:

  ```shell
  kubectl delete all,ingress --all -n demo
  ```

</TabItem>
</Tabs>
