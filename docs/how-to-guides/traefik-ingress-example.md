---
title: Using the Traefik Ingress Controller
---

import TabsConstants from '@site/core/TabsConstants';

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/traefik-ingress-example"/>
</head>

Rancher Desktop uses `K3s` under the hood, which in turn uses [Traefik](https://doc.traefik.io/traefik/) as the default Ingress controller for your Kubernetes cluster. As an example, the below steps outline creating simple services that can be routed by the Ingress object.

### Example Steps: Traefik Ingress Controller

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Linux">

1. Set the node IP:

  ```console
  IP=$(kubectl get node/lima-rancher-desktop -o json | jq -r '.status.addresses[] | select(.type=="InternalIP").address')
  ```

1. To create a namespace and install a `whoami` example:

  ```console
  kubectl create ns demo
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
      - host: whoami.$IP.nip.io
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

1. Verify the ingress works by using curl:

  ```console
  curl whoami.$IP.nip.io
  Hostname: whoami-6d79cc864b-7kmmf
  IP: 127.0.0.1
  IP: ::1
  IP: 10.42.0.42
  IP: fe80::e804:41ff:feac:7eef
  RemoteAddr: 10.42.0.45:35392
  GET / HTTP/1.1
  Host: whoami.192.168.205.2.nip.io
  User-Agent: curl/7.64.1
  Accept: */*
  Accept-Encoding: gzip
  X-Forwarded-For: 10.42.0.1
  X-Forwarded-Host: whoami.192.168.205.2.nip.io
  X-Forwarded-Port: 80
  X-Forwarded-Proto: http
  X-Forwarded-Server: traefik-d497b4cb6-4vkg9
  X-Real-Ip: 10.42.0.1
  ```

1. Delete the resources:

  ```console
  kubectl delete all,ingress --all -n demo
  ```


</TabItem>
<TabItem value="macOS">

1. Set the node IP:

  ```console
  IP=$(kubectl get node/lima-rancher-desktop -o json | jq -r '.status.addresses[] | select(.type=="InternalIP").address')
  ```

1. To create a namespace and install a `whoami` example:

  ```console
  kubectl create ns demo
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
      - host: whoami.$IP.nip.io
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

1. Verify the ingress works by using curl:

  ```console
  curl whoami.$IP.nip.io
  Hostname: whoami-6d79cc864b-7kmmf
  IP: 127.0.0.1
  IP: ::1
  IP: 10.42.0.42
  IP: fe80::e804:41ff:feac:7eef
  RemoteAddr: 10.42.0.45:35392
  GET / HTTP/1.1
  Host: whoami.192.168.205.2.nip.io
  User-Agent: curl/7.64.1
  Accept: */*
  Accept-Encoding: gzip
  X-Forwarded-For: 10.42.0.1
  X-Forwarded-Host: whoami.192.168.205.2.nip.io
  X-Forwarded-Port: 80
  X-Forwarded-Proto: http
  X-Forwarded-Server: traefik-d497b4cb6-4vkg9
  X-Real-Ip: 10.42.0.1
  ```

1. Delete the resources:

  ```console
  kubectl delete all,ingress --all -n demo
  ```


</TabItem>
<TabItem value="Windows">

[Insert Windows Steps]

</TabItem>
</Tabs>
