---
title: 使用容器
---

`nerdctl` 是一个与 Docker 兼容的容器 CLI。`nerdctl` 主要用于对 Docker 中不存在的 containerd 尖端功能进行试验。

[Moby](https://github.com/moby/moby) 是一个由 Docker 创建的开源项目，用于启用和加速软件容器化。组件包括容器构建工具、容器镜像仓库、编排工具和运行时等。Docker CLI 使用 Moby 运行时。

## 运行容器

要使用默认的 `bridge` CNI 网络 (10.4.0.0/24) 运行容器：

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl run -it --rm alpine
```

</TabItem>
  <TabItem value="docker" default>

```
docker run -it --rm alpine
```
</TabItem>
</Tabs>

要使用 BuildKit 构建镜像：

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build -t foo /some-dockerfile-directory
nerdctl run -it --rm foo
```

</TabItem>
  <TabItem value="docker" default>

```
docker build -t foo /some-dockerfile-directory
docker run -it --rm foo
```
</TabItem>
</Tabs>

要使用 BuiltKit 进行构建并将输出发送到本地目录：

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl build -o type=local,dest=. /some-dockerfile-directory
```
</TabItem>
  <TabItem value="docker" default>

```
docker build -o type=local,dest=. /some-dockerfile-directory
```
</TabItem>
</Tabs>

## Docker Compose

Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的工具。

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

`nerdctl-compose` CLI 用于与 `docker-compose` 兼容：
```
nerdctl compose up -d
nerdctl compose down
```
</TabItem>
  <TabItem value="docker">

Docker CLI 中的 `compose` 命令支持大多数 `docker-compose` 命令和标志。它有望成为 `docker-compose` 的直接替代品。
```
docker compose up -d
docker compose down
```
</TabItem>
</Tabs>

## 暴露端口

要为容器公开端口 8000：

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl run -d -p 8000:80 nginx
```
</TabItem>
  <TabItem value="docker" default>

```
docker run -d -p 8000:80 nginx
```
</TabItem>
</Tabs>

然后，你可以在浏览器中访问 [http://localhost:8000/](http://localhost:8000/) 来访问容器：

*注意：默认情况下，暴露的端口可以在 macOS 和 Linux 上的所有网络接口上访问。然而，在 Windows 上，暴露的端口只能通过 localhost 网络接口访问（参见 issue [#1180](https://github.com/rancher-sandbox/rancher-desktop/issues/1180)）。目前的一个解决方法是[在 Windows 主机上配置 `portproxy`](https://github.com/rancher-sandbox/rancher-desktop/issues/1180#issuecomment-1005514200)，从而将端口公开给其他网络接口*。

```
netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=localhost
```
### 暴露正在运行的容器端口

如果你忘记在 `run` 命令中公开端口，你可以按照以下步骤启动代理容器，将流量转发到原始容器。此技巧可以帮助你避免重启容器，并且在处理启动时间较长的容器化服务时特别有用。此技巧来自此 [stackoverflow 讨论](https://stackoverflow.com/questions/19897743/exposing-a-port-on-a-live-docker-container)和此[博客文章](https://iximiuz.com/en/posts/docker-publish-port-of-running-container/)。

1. 假设你在没有发布端口的情况下（错误地）运行了一个容器。

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl run -d --name rd-nginx nginx
```
</TabItem>
  <TabItem value="docker" default>

```
docker run -d --name rd-nginx nginx
```
</TabItem>
</Tabs>

2. 设置要在后续命令中使用的端口变量。

```
# Powershell
$HOST_PORT=8080
$CONTAINER_PORT=80

# Bash
export HOST_PORT=8080
export CONTAINER_PORT=80
```

3. 获取容器 IP 地址。如果你在启动时没有为容器指定名称，则可以在下面的命令中通过传递容器 id 来代替容器名称 `rd-nginx` 。

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
# Powershell
$CONTAINER_IP=$(nerdctl inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)

# Bash
export CONTAINER_IP=$(nerdctl inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)
```
</TabItem>
  <TabItem value="docker" default>

```
# Powershell
$CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)

# Bash
export CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rd-nginx)
```
</TabItem>
</Tabs>

4. 启动代理容器，从而将流量转发到原始容器。

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl run --rm -p ${HOST_PORT}:${CONTAINER_PORT} alpine/socat TCP-LISTEN:${CONTAINER_PORT},fork TCP-CONNECT:${CONTAINER_IP}:${CONTAINER_PORT}
```
</TabItem>
  <TabItem value="docker" default>

```
docker run --rm -p ${HOST_PORT}:${CONTAINER_PORT} alpine/socat TCP-LISTEN:${CONTAINER_PORT},fork TCP-CONNECT:${CONTAINER_IP}:${CONTAINER_PORT}
```
</TabItem>
</Tabs>

5. 代理容器成功运行后，你可以从主机通过 `localhost:8080` 访问 NGINX 服务器。

## 定位 Kubernetes 命名空间

你还可以通过 `containerd` 使用 `--namespace` 参数来定位 Kubernetes 命名空间。请注意 `docker` 不使用命名空间。

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app
nerdctl --namespace k8s.io ps
```

</TabItem>
</Tabs>
