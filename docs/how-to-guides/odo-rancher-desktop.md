---
title: ODO and Rancher Desktop
---

`odo` is a fast, iterative and straightforward CLI tool for developers who write, build, and deploy applications on Kubernetes. The `odo` CLI abstracts away complex Kubernetes concepts and allows developers to focus on iterating code. The helper tool can detect changes to local code and deploy them to a container orchestrated cluster automatically, giving instant feedback to validate changes in real-time. Please refer to the [`odo` project documentation](https://odo.dev/docs/introduction) to learn more.

## Prerequisites

For this guide you will use the [express-sample node.js application](https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample) in the [Rancher Desktop documentation](https://github.com/rancher-sandbox/docs.rancherdesktop.io) repository as a way to demonstrate the use of `odo` and Rancher Desktop.

:::note
`odo` works with the `dockerd (moby)` runtime, be sure to have it selected from the preferences dialog location *Preferences* > *Container Engine* > *Allowed Images*.
:::

Please ensure that Kubernetes is enabled for your application. Additionally, in order to use `odo deploy`, you will need to be able to build and push an image to a Docker container registry. Log in using your Docker credentials as noted below:

```
$ docker login docker.io
Username:
Password:
Login Succeeded!
```

### Installation

Install `odo` by visiting https://odo.dev/docs/overview/installation and perform the appropriate install for your platform. The tool can be used both as a [CLI tool](https://odo.dev/docs/overview/installation#cli-installation) or an [IDE plugin](https://odo.dev/docs/overview/installation#ide-installation), as well as a few [alternative install methods](https://odo.dev/docs/overview/installation#alternative-installation-methods) depending on your preference. This guide will focus on using the tool through the CLI.

## Example: `odo init`

1. Clone the [Rancher Desktop documentation](https://github.com/rancher-sandbox/docs.rancherdesktop.io) repository and change your directory to the [sample-express](https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample) application.

```
$ git clone https://github.com/rancher-sandbox/docs.rancherdesktop.io.git
$ cd docs.rancherdesktop.io/assets/express-sample
```

2. Before initializing, you must connect `odo` to your cluster via a namespace, which can be created with the command [`odo create namespace <name>`](https://odo.dev/docs/command-reference/create-namespace):

```
odo create namespace odo-dev
```

<details>
<summary>Sample Output</summary>

```
$ odo create namespace odo-dev
 ✓  Creating the namespace "odo-dev" [5ms]
 ✓  Namespace "odo-dev" is ready for use
 ✓  New namespace created and now using namespace: odo-dev
```

</details>

3. The command [`odo init`](https://odo.dev/docs/command-reference/init) can now be used and will auto-detect your project framework and choose the appropriate `devfile.yaml` to be used for deployment of your application. The command will allow you to confirm the Devfile (Y/n), select a container to change configuration (choose none for this example), and enter a component name (e.g. my-nodejs-app).

  Additionally, the following command has necessary flags (`--devfile-version 2.2.0`) for the use of `odo deploy` and can be used to quickly initialize `odo` for this example application as well:

```
odo init --name my-nodejs-app --devfile nodejs --devfile-registry DefaultDevfileRegistry --devfile-version 2.2.0
```

<details>
<summary>Sample Output</summary>

```
  __
 /  \__     Initializing a new component
 \__/  \    
 /  \__/    odo version: v3.13.0
 \__/

 ✓  Downloading devfile "nodejs:2.2.0" from registry "DefaultDevfileRegistry" [1s]

Your new component 'my-nodejs-app' is ready in the current directory.
To start editing your component, use 'odo dev' and open this folder in your favorite IDE.
Changes will be directly reflected on the cluster.
```

</details>

```
odo init
```

<details>
<summary>Sample Output</summary>

```
$ odo init
  __
 /  \__     Initializing a new component
 \__/  \    Files: Source code detected, a Devfile will be determined based upon source code autodetection
 /  \__/    odo version: v3.13.0
 \__/

Interactive mode enabled, please answer the following questions:
 ✓  Determining a Devfile for the current directory [910ms]
Based on the files in the current directory odo detected
Language: JavaScript
Project type: Node.js
Application ports: 3000
The devfile "nodejs:2.1.1" from the registry "DefaultDevfileRegistry" will be downloaded.
? Is this correct? Yes
 ✓  Downloading devfile "nodejs:2.1.1" from registry "DefaultDevfileRegistry" [933ms]

↪ Container Configuration "runtime":
  OPEN PORTS:
    - 3000
    - 5858
  ENVIRONMENT VARIABLES:
    - DEBUG_PORT = 5858

? Select container for which you want to change configuration? NONE - configuration is correct
? Enter component name: my-nodejs-app

You can automate this command by executing:
   odo init --name my-nodejs-app --devfile nodejs --devfile-registry DefaultDevfileRegistry --devfile-version 2.1.1

Your new component 'my-nodejs-app' is ready in the current directory.
To start editing your component, use 'odo dev' and open this folder in your favorite IDE.
Changes will be directly reflected on the cluster.
```

</details>

## Example: `odo dev`

Now, you can run the command [`odo dev`](https://odo.dev/docs/command-reference/dev) to continuously deploy applications as you make changes to your code through your preferred IDE.

:::caution
You may run into an `ErrImagePull` error as the image may not be covered by Rancher Desktop's allowed images list. To resolve the error, please add the necessary image in *Preferences* > *Container Engine* > *Allowed Images* and hit apply to update allowed images immediately.
:::

```
odo dev
```

<details>
<summary>Sample Output</summary>

```
$ odo dev
  __
 /  \__     Developing using the "my-nodejs-app" Devfile
 \__/  \    Namespace: odo-dev
 /  \__/    odo version: v3.13.0
 \__/

↪ Running on the cluster in Dev mode
I0728 13:50:53.115137   92567 starterserver.go:123] API Server started at localhost:20000/api/v1
 •  Waiting for Kubernetes resources  ...
 ⚠  Pod is Pending
 ✓  Pod is Running
 ✓  Syncing files into the container [306ms]
 ✓  Building your application in container (command: install) [3s]
 •  Executing the application (command: run)  ...
 ✓  Waiting for the application to be ready [1s]
 -  Forwarding from 127.0.0.1:20001 -> 3000


↪ Dev mode
 Status:
 Watching for changes in the current directory /Users/docs.rancherdesktop.io/assets/express-sample

 Keyboard Commands:
[Ctrl+c] - Exit and delete resources from the cluster
     [p] - Manually apply local changes to the application on the cluster
```

</details>

The `express-sample` application can now be accessed by the local port (127.0.0.1:20001) created by `odo dev`. As an example, you can make a text change to the `index.jade` file in the *views* folder to see a real-time update to the application.

## Example: `odo deploy`

1. Be sure to be logged into the Docker container registry to push the application to, and set your container image build arguments to be the same as your container architecture using the [`ODO_IMAGE_BUILD_ARGS`](https://odo.dev/docs/overview/configure/#environment-variables-controlling-odo-behavior:~:text=ODO_IMAGE_BUILD_ARGS) environment variable:

<Tabs>
<TabItem value="AMD64">

```
export ODO_IMAGE_BUILD_ARGS="--platform=linux/amd64"
```

</TabItem>
<TabItem value="ARM">

```
export ODO_IMAGE_BUILD_ARGS="--platform=linux/arm64"
```

</TabItem>
</Tabs>

2. Update the `Dockerfile` in the `express-sample` directory to containerize the application with correct variables in order to build and push to a registry:

<details>
<summary>Sample Dockerfile</summary>

```
# Install the app dependencies in a full SLE Node image
FROM registry.suse.com/bci/nodejs:16

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Install app dependencies
COPY . /opt/app-root/src

ENV NODE_ENV production
ENV PORT 3000

CMD ["npm", "start"]
```

</details>

3. Modify the `devfile.yaml` to the example noted below for your container cluster.

* Update the variables to access your container registry:

```
# Add the following variables code anywhere in devfile.yaml
# This MUST be a container registry you are able to access
variables:
  CONTAINER_IMAGE: docker.io/<INSERTUSERNAME>/nodejs-odo-example
  RESOURCE_NAME: my-nodejs-app
  CONTAINER_PORT: "3000"
  DOMAIN_NAME: nodejs.example.com
```

* Update the Devfile schema to `2.2.0` as `odo deploy` makes use of this version. Additionally, there is a command to initialize `odo` with the correct `schemaVersion: 2.2.0` noted above in the installation:

```
# Deploy "kind" ID's use schema 2.2.0+
schemaVersion: 2.2.0
```

* Below is a sample `devfile.yaml` that helps to illustrate command and variable settings changes:

<details>
<summary>Sample Devfile</summary>

```
commands:
- exec:
    commandLine: npm install
    component: runtime
    group:
      isDefault: true
      kind: build
    workingDir: ${PROJECT_SOURCE}
  id: install
- exec:
    commandLine: npm start
    component: runtime
    group:
      isDefault: true
      kind: run
    workingDir: ${PROJECT_SOURCE}
  id: run
- exec:
    commandLine: npm run debug
    component: runtime
    group:
      isDefault: true
      kind: debug
    workingDir: ${PROJECT_SOURCE}
  id: debug
- exec:
    commandLine: npm test
    component: runtime
    group:
      isDefault: true
      kind: test
    workingDir: ${PROJECT_SOURCE}
  id: test
# This is the main "composite" command that will run all below commands
- id: deploy
  composite:
    commands:
    - build-image
    - k8s-deployment
    - k8s-service
    - k8s-url
    group:
      isDefault: true
      kind: deploy
# Below are the commands and their respective components that they are "linked" to deploy
- id: build-image
  apply:
    component: outerloop-build
- id: k8s-deployment
  apply:
    component: outerloop-deployment
- id: k8s-service
  apply:
    component: outerloop-service
- id: k8s-url
  apply:
    component: outerloop-url
components:
- container:
    args:
    - tail
    - -f
    - /dev/null
    endpoints:
    - name: http-node
      targetPort: 3000
    - exposure: none
      name: debug
      targetPort: 5858
    env:
    - name: DEBUG_PORT
      value: "5858"
    image: registry.suse.com/bci/nodejs:16:latest
    memoryLimit: 1024Mi
    mountSources: true
  name: runtime
# This will build the container image before deployment
- name: outerloop-build
  image:
    dockerfile:
      buildContext: ${PROJECT_SOURCE}
      rootRequired: false
      uri: ./Dockerfile
    imageName: "{{CONTAINER_IMAGE}}"
# This will create a Deployment in order to run your container image across
# the cluster.
- name: outerloop-deployment
  kubernetes:
    inlined: |
      kind: Deployment
      apiVersion: apps/v1
      metadata:
        name: {{RESOURCE_NAME}}
      spec:
        replicas: 1
        selector:
          matchLabels:
            app: {{RESOURCE_NAME}}
        template:
          metadata:
            labels:
              app: {{RESOURCE_NAME}}
          spec:
            containers:
              - name: {{RESOURCE_NAME}}
                image: {{CONTAINER_IMAGE}}
                ports:
                  - name: http
                    containerPort: {{CONTAINER_PORT}}
                    protocol: TCP
                resources:
                  limits:
                    memory: "1024Mi"
                    cpu: "500m"

# This will create a Service so your Deployment is accessible.
# Depending on your cluster, you may modify this code so it's a
# NodePort, ClusterIP or a LoadBalancer service.
- name: outerloop-service
  kubernetes:
    inlined: |
      apiVersion: v1
      kind: Service
      metadata:
        name: {{RESOURCE_NAME}}
      spec:
        ports:
        - name: "{{CONTAINER_PORT}}"
          port: {{CONTAINER_PORT}}
          protocol: TCP
          targetPort: {{CONTAINER_PORT}}
        selector:
          app: {{RESOURCE_NAME}}
        type: NodePort
- name: outerloop-url
  kubernetes:
    inlined: |
      apiVersion: networking.k8s.io/v1
      kind: Ingress
      metadata:
        name: {{RESOURCE_NAME}}
      spec:
        rules:
          - host: "{{DOMAIN_NAME}}"
            http:
              paths:
                - path: "/"
                  pathType: Prefix
                  backend:
                    service:
                      name: {{RESOURCE_NAME}}
                      port:
                        number: {{CONTAINER_PORT}}
metadata:
  description: Stack with Node.js 16
  displayName: Node.js Runtime
  icon: https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg
  language: JavaScript
  name: my-node-app
  projectType: Node.js
  tags:
  - Node.js
  - Express
  - ubi8
  version: 2.1.1
schemaVersion: 2.2.0
starterProjects:
- git:
    remotes:
      origin: https://github.com/odo-devfiles/nodejs-ex.git
  name: nodejs-starter
# Add the following variables code anywhere in devfile.yaml
# This MUST be a container registry you are able to access
variables:
  CONTAINER_IMAGE: docker.io/<INSERTUSERNAME>/node-odo-example
  RESOURCE_NAME: my-node-app
  CONTAINER_PORT: "3000"
  DOMAIN_NAME: node.example.com
  ```

</details>

4. Now, you can run the command [`odo deploy`](https://odo.dev/docs/command-reference/deploy) to deploy the application to the cluster:

:::caution
You may run into an `unauthorized: image` error as the image may not be covered by Rancher Desktop's allowed images list. To resolve the error, please add the necessary image in *Preferences* > *Container Engine* > *Allowed Images* and hit apply to update allowed images immediately.
:::

<details>
<summary>Sample Output</summary>

```
$ odo deploy
  __
 /  \__     Running the application in Deploy mode using my-node-app Devfile
 \__/  \    Namespace: odo-dev
 /  \__/    odo version: v3.13.0
 \__/

↪ Building & Pushing Image: docker.io/arjsin/nodejs-odo-example
 •  Building image locally  ...
[+] Building 2.7s (9/9) FINISHED                                                
 => [internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 405B                                       0.0s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 364B                                          0.0s
 => [internal] load metadata for registry.suse.com/bci/nodejs:16           2.2s
 => [1/4] FROM registry.suse.com/bci/nodejs:16@sha256:dda0e616a0fcb3dc589  0.0s
 => [internal] load build context                                          0.0s
 => => transferring context: 5.14kB                                        0.0s
 => CACHED [2/4] COPY package*.json ./                                     0.0s
 => CACHED [3/4] RUN npm install --production                              0.0s
 => [4/4] COPY . /opt/app-root/src                                         0.0s
 => exporting to image                                                     0.4s
 => => exporting layers                                                    0.4s
 => => writing image sha256:c6d3ed7d9fb4736d3c4e95b54054533f79d64d3a01e65  0.0s
 => => naming to docker.io/arjsin/nodejs-odo-example                       0.0s
 ✓  Building image locally [3s]
 •  Pushing image to container registry  ...
Using default tag: latest
The push refers to repository [docker.io/arjsin/nodejs-odo-example]
20658d9b13ba: Pushed 
7b1ee26c3aea: Pushed 
067890bef08d: Pushed 
d08e96dfc7bc: Pushed 
174c0e293bd0: Pushed 
latest: digest: sha256:ca598fc0c5278e8d00cba41e14914f1d3f7a3561bd4a324f2ffcd33b166135ad size: 1368
 ✓  Pushing image to container registry [30s]

↪ Deploying Kubernetes Component: my-node-app
 ✓  Creating resource Deployment/my-node-app 

↪ Deploying Kubernetes Component: my-node-app
 ✓  Creating resource Service/my-node-app 

↪ Deploying Kubernetes Component: my-node-app
 ✓  Creating resource Ingress/my-node-app 

Your Devfile has been successfully deployed
```

</details>

### Example: `odo describe component`

Now, the command [`odo describe component`](https://odo.dev/docs/command-reference/describe-component) can be used to view information from the Devfile such as Kubernetes components, ingresses, and the URL to access the application:

```
odo describe component
```

<details>
<summary>Sample Output</summary>

```
$ odo describe component
Name: my-nodejs-app
Display Name: Node.js Runtime
Project Type: Node.js
Language: JavaScript
Version: 2.2.0
Description: Node.js 18 application
Tags: Node.js, Express, ubi8

Running in: None

Supported odo features:
 •  Dev: true
 •  Deploy: false
 •  Debug: true

Commands:
 •  install
      Type: exec
      Group: build
      Command Line: "npm install"
      Component: runtime
      Component Type: container
 •  run
      Type: exec
      Group: run
      Command Line: "npm start"
      Component: runtime
      Component Type: container
 •  debug
      Type: exec
      Group: debug
      Command Line: "npm run debug"
      Component: runtime
      Component Type: container
 •  test
      Type: exec
      Group: test
      Command Line: "npm test"
      Component: runtime
      Component Type: container

Container components:
 •  runtime
    Source Mapping: /projects
```

</details>

## Example: `odo delete component`

After you have completed testing, you can free the resources used by `odo` by using the command [`odo delete component`](https://odo.dev/docs/command-reference/delete-component):

```
odo delete component
```

<details>
<summary>Sample Output</summary>

```
$ odo delete component
Searching resources to delete, please wait...
This will delete "my-node-app" from the namespace "odo-dev".
 •  The following resources will get deleted from cluster:
 •  	- Deployment: my-node-app
 •  	- Service: my-node-app
 •  	- Ingress: my-node-app

? Are you sure you want to delete "my-node-app" and all its resources? Yes
 ✓  Deleting resources from cluster [52ms]
The component "my-node-app" is successfully deleted from namespace "odo-dev"
```

</details>
