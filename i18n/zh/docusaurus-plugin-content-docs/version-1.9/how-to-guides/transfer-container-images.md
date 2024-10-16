---
title: 传输容器镜像
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Rancher Desktop 提供 `dockerd` 和 `containerd` 容器引擎选项来管理容器。有时候，你可能希望将镜像从一个容器引擎环境传输到另一个容器引擎环境。你也可能已经从不同的容器管理应用程序迁移到 Rancher Desktop，并且希望将本地镜像从以前的应用程序环境带到 Rancher Desktop 环境中。本指南介绍了使用 `save` 和 `load` 命令传输镜像的步骤。

### 步骤

**1. 将源环境的镜像保存为 tar 包**。

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

- 保存单个镜像
```
nerdctl save -o local-image.tar image:tag
```

- 保存多个镜像
```
nerdctl save -o local-images.tar image1:tag1 image2:tag2
```

- 将所有镜像保存在命名空间中

下面两个命令使用 [jq](https://stedolan.github.io/jq/) 进行 JSON 解析。长命令会执行以下步骤：

- `nerdctl -n k8s.io image ls` 子命令会获取 `k8s.io` 命名空间中所有镜像的列表，因此不包括其他命名空间的镜像（例如 `default`）。
- `jq` 子命令会过滤并格式化上一步获取的镜像列表。
   - 命令的 `select(.Repository!=\"<none>\")` 部分会跳过仓库值为 `<none>` 的镜像。
   - 根据镜像标签的值是否为 `<none>`，命令的 `if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end')` 部分会将镜像的名称格式化为 `<Repository>` 或 `<Repository>:<Tag>`。
- 最后，命令的 `nerdctl -n k8s.io save -o all-local-images-in-namespace.tar` 部分会将前两步过滤和格式化的镜像列表保存到 tar 文件中。

<Tabs groupId="shell">
  <TabItem value="Bash" default>

```
nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format '{{json .}}' | jq -r 'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end')
```

</TabItem>
  <TabItem value="PowerShell">

```
nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format '{{json .}}' | jq -r 'select(.Repository!=\"<none>\") | if (.Tag==\"<none>\") then .Repository else (.Repository+\":\"+.Tag) end')
```

</TabItem>
</Tabs>

</TabItem>
  <TabItem value="docker">

- 保存单个镜像
```
docker save -o local-image.tar image:tag
```

- 保存多个镜像
```
docker save -o local-images.tar image1:tag1 image2:tag2
```

- 保存所有本地镜像

下面两个命令使用 [jq](https://stedolan.github.io/jq/) 进行 JSON 解析。长命令会执行以下步骤：

- `docker image ls` 子命令会获取所有本地镜像的列表。
- `jq` 子命令会过滤并格式化上一步获取的镜像列表。
   - 命令的 `select(.Repository!=\"<none>\")` 部分会跳过仓库值为 `<none>` 的镜像。
   - 根据镜像标签的值是否为 `<none>`，命令的 `if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end')` 部分会将镜像的名称格式化为 `<Repository>` 或 `<Repository>:<Tag>`。
- 最后，命令的 `docker save -o all-local-images-in-namespace.tar` 部分会将前两步过滤和格式化的镜像列表保存到 tar 文件中。

<Tabs groupId="shell">
  <TabItem value="Bash" default>

```
docker save -o all-local-images-in-namespace.tar $(docker image ls --format '{{json .}}' | jq -r 'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end')
```

</TabItem>
  <TabItem value="PowerShell">

```
docker save -o all-local-images-in-namespace.tar $(docker image ls --format '{{json .}}' | jq -r 'select(.Repository!=\"<none>\") | if (.Tag==\"<none>\") then .Repository else (.Repository+\":\"+.Tag) end')
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

**2. 使用目标环境中保存的 tar 包加载镜像**。

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl load < local-images.tar
```

</TabItem>
  <TabItem value="docker">

```
docker load -i local-images.tar
```

</TabItem>
</Tabs>
