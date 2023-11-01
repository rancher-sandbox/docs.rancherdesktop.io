---
title: ODO 与 Rancher Desktop
---

`odo` 是一款快速、迭代开发且简单的 CLI 工具，适合在 Kubernetes 上编写、构建和部署应用程序的开发人员。`odo` CLI 抽象出了复杂的 Kubernetes 概念，让开发人员能够专注于代码迭代。该工具可以检测本地代码的更改，并将其自动部署到容器编排的集群中，通过即时反馈来实时验证更改。有关更多信息，请参阅 [`odo` 项目文档](https://odo.dev/docs/introduction)。

## 前提

在本指南中，你将使用 [Rancher Desktop 文档](https://github.com/rancher-sandbox/docs.rancherdesktop.io)仓库中的 [express-sample node.js 应用程序](https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample)来学习如何使用 `odo` 和 Rancher Desktop。

:::note
`odo` 与 `dockerd (moby)` 运行时配合使用，请从偏好设置对话框位置中选中它：*Preferences* > *Container Engine* > *Allowed Images*。
:::

请确保你的应用程序启用了 Kubernetes。此外，要使用 `odo deploy`，你需要能够构建镜像并将其推送到 Docker 容器镜像仓库。使用 Docker 凭证登录，如下：

```shell
$ docker login docker.io
Username:
Password:
Login Succeeded!
```

### 安装

通过 https://odo.dev/docs/overview/installation 安装 `odo`，并针对你的平台进行安装。该工具既可以用作 [CLI 工具](https://odo.dev/docs/overview/installation#cli-installation)，也可以用作 [IDE 插件](https://odo.dev/docs/overview/installation#ide-installation)，你还能根据自己的喜好使用[其他安装方法](https://odo.dev/docs/overview/installation#alternative-installation-methods)。本指南将重点介绍如何通过 CLI 使用该工具。

## 步骤：`odo init`

此命令通过创建用于部署的 `devfile.yaml` 来初始化应用程序。

1. 克隆 [Rancher Desktop 文档](https://github.com/rancher-sandbox/docs.rancherdesktop.io)仓库，并进入 [sample-express](https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample) 应用程序路径。

```shell
git clone https://github.com/rancher-sandbox/docs.rancherdesktop.io.git
cd docs.rancherdesktop.io/assets/express-sample
```

2. 在初始化之前，你必须通过命名空间将 `odo` 连接到集群，该命名空间可以使用 [`odo create namespace <name>`](https://odo.dev/docs/command-reference/create-namespace) 命令创建：

```shell
odo create namespace odo-dev
```

<details>
<summary>示例输出</summary>

```shell
$ odo create namespace odo-dev
 ✓  Creating the namespace "odo-dev" [5ms]
 ✓  Namespace "odo-dev" is ready for use
 ✓  New namespace created and now using namespace: odo-dev
```

</details>

3. [`odo init`](https://odo.dev/docs/command-reference/init) 命令将自动检测你的项目框架，并选择合适的 `devfile.yaml` 来部署你的应用程序。该命令将让你确认 Devfile (Y/n)、选择容器来更改配置（在本示例中选择 `none`），然后输入组件名称（例如 `my-nodejs-app`）。

你也可以使用以下带有附加标志（例如 `--devfile-version 2.2.0`）的命令来初始化 `odo`，并允许应用部署：

```shell
odo init --name my-nodejs-app --devfile nodejs --devfile-registry DefaultDevfileRegistry --devfile-version 2.2.0
```

<details>
<summary>示例输出</summary>

```shell
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

```shell
odo init
```

<details>
<summary>示例输出</summary>

```shell
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
?Is this correct?Yes
 ✓  Downloading devfile "nodejs:2.1.1" from registry "DefaultDevfileRegistry" [933ms]

↪ Container Configuration "runtime":
  OPEN PORTS:
    - 3000
    - 5858
  ENVIRONMENT VARIABLES:
    - DEBUG_PORT = 5858

?Select container for which you want to change configuration?NONE - configuration is correct
?Enter component name: my-nodejs-app

You can automate this command by executing:
   odo init --name my-nodejs-app --devfile nodejs --devfile-registry DefaultDevfileRegistry --devfile-version 2.1.1

Your new component 'my-nodejs-app' is ready in the current directory.
To start editing your component, use 'odo dev' and open this folder in your favorite IDE.
Changes will be directly reflected on the cluster.
```

</details>

## 步骤：`odo dev`

现在，你可以运行 [`odo dev`](https://odo.dev/docs/command-reference/dev) 命令在通过 IDE 更改代码时持续部署应用程序。

:::caution
你可能会遇到 `ErrImagePull` 错误，这是因为该镜像可能未包含在 Rancher Desktop 允许的镜像列表中。要解决该错误，请在 *Preferences* > *Container Engine* > *Allowed Images* 中添加镜像，然后点击 **Apply** 立即更新允许的镜像列表。
:::

```shell
odo dev
```

<details>
<summary>示例输出</summary>

```shell
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

The `express-sample` application can now be accessed by the local port (127.0.0.1:20001). As an example, you can make a text change to the `index.jade` file in the *views* folder to see a real-time update to the application.

## 步骤：`odo deploy`

此命令将根据 `devfile.yaml` 中的说明将应用程序部署到集群中。

1. 请务必登录到要推送应用程序的 Docker 容器镜像仓库，并使用 [`ODO_IMAGE_BUILD_ARGS`](https://odo.dev/docs/overview/configure/#environment-variables-controlling-odo-behavior:~:text=ODO_IMAGE_BUILD_ARGS) 环境变量将容器镜像构建参数设置为与容器架构相同:

<Tabs>
<TabItem value="AMD64">

```shell
export ODO_IMAGE_BUILD_ARGS="--platform=linux/amd64"
```

</TabItem>
<TabItem value="ARM">

```shell
export ODO_IMAGE_BUILD_ARGS="--platform=linux/arm64"
```

</TabItem>
</Tabs>

2. 更新 `express-sample` 目录中的 `Dockerfile` 以使用正确的变量对应用程序进行容器化，以便构建并推送到镜像仓库：

<details>
<summary>示例 Dockerfile</summary>

```shell
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

3. 为你的容器集群将 `devfile.yaml` 修改为下面示例内容。

* 更新变量以访问容器镜像仓库：

```yaml
# Add the following variables code anywhere in devfile.yaml
# This MUST be a container registry you are able to access
variables:
  CONTAINER_IMAGE: docker.io/<INSERTUSERNAME>/nodejs-odo-example
  RESOURCE_NAME: my-nodejs-app
  CONTAINER_PORT: "3000"
  DOMAIN_NAME: nodejs.example.com
```

* 将 Devfile 架构更新为 `2.2.0`，这是因为 `odo deploy` 使用此版本。此外，还有一个命令可以使用安装中提到的正确 `schemaVersion: 2.2.0` 来初始化 `odo`：

```yaml
# Deploy "kind" ID's use schema 2.2.0+
schemaVersion: 2.2.0
```

* 以下命令用于部署活动：

<details>
<summary>部署命令</summary>

```yaml
# This is the main "composite" command that will run all below commands
commands:
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
```

</details>

* 以下命令用于将 Docker 镜像位置、K8s deployment 和 service 添加到`组件`：

<details>
<summary>组件命令</summary>

```yaml
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
```

</details>

* Devfile 中最后添加的是 Kubernetes ingress 组件，如下所示：

<details>
<summary>Ingress 命令</summary>

```yaml
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
```

</details>

* 下面是 `devfile.yaml` 示例，你可以通过示例文件了解如何同时使用命令和变量设置。请检查你的 Devfile 以匹配或更新变量，如下所示：

<details>
<summary>最终 Devfile</summary>

```yaml
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

4. 现在，你可以运行命令 [`odo deploy`](https://odo.dev/docs/command-reference/deploy) 将应用程序部署到集群：

:::caution
你可能会遇到 `unauthorized: image` 错误，这是因为该镜像可能未包含在 Rancher Desktop 允许的镜像列表中。要解决该错误，请在 *Preferences* > *Container Engine* > *Allowed Images* 中添加镜像，然后点击 **Apply** 立即更新允许的镜像列表。
:::

<details>
<summary>示例输出</summary>

```shell
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

### 步骤：`odo describe component`

现在，你可以使用命令 [`odo describe component`](https://odo.dev/docs/command-reference/describe-component) 查看 Devfile 中的信息，例如 Kubernetes 组件、ingress 和访问应用程序的 URL：

```shell
odo describe component
```

<details>
<summary>示例输出</summary>

```shell
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

## 步骤：`odo delete component`

测试完成后，你可以使用命令 [`odo delete component`](https://odo.dev/docs/command-reference/delete-component) 释放 `odo` 使用的资源：

```shell
odo delete component
```

<details>
<summary>示例输出</summary>

```shell
$ odo delete component
Searching resources to delete, please wait...
This will delete "my-node-app" from the namespace "odo-dev".
 •  The following resources will get deleted from cluster:
 •  	- Deployment: my-node-app
 •  	- Service: my-node-app
 •  	- Ingress: my-node-app

?Are you sure you want to delete "my-node-app" and all its resources?Yes
 ✓  Deleting resources from cluster [52ms]
The component "my-node-app" is successfully deleted from namespace "odo-dev"
```

</details>
