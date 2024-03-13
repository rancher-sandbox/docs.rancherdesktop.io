---
title: Working with WebAssembly
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/tutorials/working-with-webassembly"/>
</head>

Rancher Desktop 1.13.0 added experimental support for running WebAssembly (WASM) applications. This feature needs to be enabled in  [Preferences > Container Engine > General](../ui/preferences/container-engine/general.md).

:::caution warning
Note that when using the `moby` container engine, enabling the WASM feature switches to a different image store, so previously built or downloaded images will not be available and must be built or downloaded again. The images are not lost; Rancher Desktop will switch back to the old image store when WASM is disabled again.
:::

## Managing containerd WASM shims

Running WebAssembly applications on a container runtime requires a specific containerd "shim" for each WASM runtime/framework used.

Rancher Desktop 1.13 comes bundled with the `containerd-spin-shim-v2` shim preinstalled. Future releases are expected to download additional shims automatically when the feature is enabled.

For now additional shims can be installed by the user into the `containerd-shims` cache directory on the host. The location is

- Linux: `~/.local/share/rancher-desktop/containerd-shims`
- macOS: `~/Library/Application Support/rancher-desktop/containerd-shims`
- Windows: `%LOCALAPPDATA%\rancher-desktop\containerd-shims`

Any shim installed there will automatically be copied into the VM and configured for the container engine when Rancher Desktop is started (installing a newer version of the `spin` shim will override the bundled version).

## Running WASM apps with the container engine

Running WebAssembly applications directly is currently only supported with the `moby` container engine; there is a bug in `nerdctl` that prevents it from working with `containerd`.

The following command runs the `spin-rust-hello` sample `spin` application on the `moby` engine (note the final `/` on the last line; it is the command to run, and `docker run` will fail if it is omitted):

```
docker run \
    --detach \
    --name spin-demo \
    --runtime io.containerd.spin.v2 \
    --platform wasi/wasm \
    --publish 8080:80 \
    ghcr.io/deislabs/containerd-wasm-shims/examples/spin-rust-hello:v0.11.1 \
    /
```

The internal port `80` has been mapped to `8080` and can be tested from the host:

```
$ curl http:////localhost:8080/hello
Hello world from Spin!
```

## Running WASM apps with Kubernetes

Running WebAssembly applications on Kubernetes is currently only supported with the `containerd` runtime; it doesn't work with the `cri-dockerd` shim used to run Kubernetes on top of `moby`.

Create a deployment for the `spin-rust-hello` sample app:

```console
kubectl apply --filename - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-spin
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-spin
  template:
    metadata:
      labels:
        app: hello-spin
    spec:
      runtimeClassName: spin
      containers:
      - name: hello-spin
        image: ghcr.io/deislabs/containerd-wasm-shims/examples/spin-rust-hello:v0.11.1
        command: ["/"]
EOF
```

It should print

```
deployment.apps/hello-spin created
```

Then create a ClusterIP service and a Traefik ingress contoller:

```console
kubectl apply --filename - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: hello-spin
spec:
  type: ClusterIP
  selector:
    app: hello-spin
  ports:
  - port: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: hello-spin
  annotations:
    traefik.ingress.kubernetes.io/router.entrypoints: web
spec:
  rules:
  - host: localhost
    http:
      paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              name: hello-spin
              port:
                number: 80
EOF
```

Which will print

```
service/hello-spin created
ingress.networking.k8s.io/hello-spin created
```

Testing it from the host:

```console
$ curl http://localhost/hello
Hello world from Spin!
```

### Ingress IP on Windows

:::info
On Windows using `localhost` for the Traefik ingress will not work.
:::

Instead the ingress IP address should be determined from the Traefik loadbalancer:

```
C:\>kubectl get service traefik --namespace kube-system --output "jsonpath={.status.loadBalancer.ingress[0].ip}"
192.168.127.2
```

The `sslip.io` "magic" DNS service can be used to create a corresponding DNS name for it: `192.168.127.2.sslip.io`. This name should be used instead of `localhost` in the Ingress spec `host` field.

After deploying the deployment, service, and ingress the app should be available under this domain name:

```
C:\>curl http://192.168.127.2.sslip.io/hello
Hello world from Spin!
```
