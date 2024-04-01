---
title: Working with WebAssembly
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/tutorials/working-with-webassembly"/>
</head>

Rancher Desktop 1.13.0 added experimental support for running WebAssembly (Wasm) applications. This feature needs to be enabled in  [Preferences > Container Engine > General](../ui/preferences/container-engine/general.md).

:::caution warning
Note that when using the `moby` container engine, enabling the Wasm feature switches to a different image store, so previously built or downloaded images will not be available and must be built or downloaded again. The images are not lost; Rancher Desktop will switch back to the old image store when Wasm is disabled again.
:::

## Managing containerd Wasm shims

Running WebAssembly applications on a container runtime requires a specific containerd "shim" for each Wasm runtime/framework used.

Rancher Desktop 1.13 comes bundled with the `containerd-spin-shim-v2` shim preinstalled. Future releases are expected to download additional shims automatically when the feature is enabled.

For now additional shims can be installed by the user into the `containerd-shims` cache directory on the host. The location is

- Linux: `~/.local/share/rancher-desktop/containerd-shims`
- macOS: `~/Library/Application Support/rancher-desktop/containerd-shims`
- Windows: `%LOCALAPPDATA%\rancher-desktop\containerd-shims`

Any shim installed there will automatically be copied into the VM and configured for the container engine when Rancher Desktop is started (installing a newer version of the `spin` shim will override the bundled version).

## Developing Wasm Applications with Rancher Desktop

Developing Wasm applications on your local machine on top of Rancher Desktop typically involves below steps:

- Create an application in your programming language of choice. You can compile code written in many languages, such as C, C++, Rust, Go, and others, into Wasm modules
- Compile the code into a Wasm module
- Package the Wasm module as a OCI container image and push to a container registry
- Run the Wasm container and/or
- Deploy the Wasm container into Kubernetes

### Creating a simple app and compiling it into a Wasm module

You can use the Spin framework from Fermyon to quickly bootstrap a simple Wasm app. Install Spin on your machine following the instructions on the [Installing Spin](https://developer.fermyon.com/spin/v2/install) page.

Once you have successfully installed Spin, create a new app via the command `spin new`. 

Select the language you would like to use for development.  
```
$spin new
Pick a template to start your application with:
  http-js (HTTP request handler using Javascript)
> http-ts (HTTP request handler using Typescript)
```

Give a name to your app
```
$spin new
Pick a template to start your application with: http-ts (HTTP request handler using Typescript)
Enter a name for your new application: rd-spin-hello-world
```

Provide an optional description and leave the API route path to default
```
$spin new
Pick a template to start your application with: http-ts (HTTP request handler using Typescript)
Enter a name for your new application: rd-spin-hello-world
Description []: This is a simple typescript app that will be compiled into a Wasm module and run as a Wasm container
HTTP path:  /...
```

Once the command ran successfully, you should see a directory created with the boilerplate code for the Spin app. 

Update the `index.ts` file to return a different message than the default.

```
import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {
  return {
    status: 200,
    headers: { "content-type": "text/plain" },
    body: "Hello from Wasm container!"
  }
}
```

Change to the app diretory and run the `spin build` command to compile the app code into a Wasm module.

```
$spin build
Building component rd-spin-hello-world with `npm run build`

$ rd-spin-hello-world@1.0.0 build
$ npx webpack --mode=production && mkdir -p target && spin js2wasm -o target/rd-spin-hello-world.wasm dist/spin.js

asset spin.js 4.57 KiB [compared for emit] (name: main)
runtime modules 670 bytes 3 modules
./src/index.ts 2.86 KiB [built] [code generated]
webpack 5.91.0 compiled successfully in 1355 ms

Starting to build Spin compatible module
Spin compatible module built successfully
Finished building all Spin components
```

Once the build command ran successfully, you should see the `rd-spin-hello-world.wasm` module created inside the `target` directory.

### Package the Wasm module as a OCI contianer image and push to a container registry

Create a `Dockerfile` with below code to package the `Wasm` module as a docker image.

```
FROM scratch
COPY spin.toml /spin.toml
COPY /target/rd-spin-hello-world.wasm /target/rd-spin-hello-world.wasm
```

Run the command below to package the Wasm module as a container image.

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build \
  --namespace k8s.io \
  --platform wasi/wasm \
  -t ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0 .
```

  </TabItem>
  <TabItem value="docker">

```
docker buildx build \
  --load \
  --platform wasi/wasm \
  --provenance=false \
  -t ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0 .
```

  </TabItem>
</Tabs>

Push the image to the container registry

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl push ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0
```

  </TabItem>
  <TabItem value="docker">

```
docker push ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0
```

  </TabItem>
</Tabs>

### Running the Wasm container

Running a Wasm container directly is currently only supported with the `moby` container engine; there is a bug in `nerdctl` that prevents it from working with `containerd`. Ensure you have selected `dockerd(moby)` as the container engine under [Preferences > Container Engine > General](../ui/preferences/container-engine/general.md) to work through the steps in this section.


The following command runs the `rd-spin-hello-world` sample `spin` application, built in the previous section, on the `moby` engine (note the final `/` on the last line; it is the command to run, and `docker run` will fail if it is omitted):

```
docker run \
    --detach \
    --name spin-demo \
    --runtime io.containerd.spin.v2 \
    --platform wasi/wasm \
    --publish 8080:80 \
    ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0 \
    /
```

The internal port `80` has been mapped to `8080` and can be tested from the host:

```
$ curl http://localhost:8080/
Hello from Wasm container!
```

### Running Wasm apps with Kubernetes

Running WebAssembly applications on Kubernetes is currently only supported with the `containerd` runtime; it doesn't work with the `cri-dockerd` shim used to run Kubernetes on top of `moby`.

Create a deployment for the sample Wasm container image built in the previous section:

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
        image: ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0
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
$ curl http://localhost/
Hello from Wasm container!
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
