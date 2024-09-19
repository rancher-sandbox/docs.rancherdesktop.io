---
title: Transfer Container Images
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/transfer-container-images"/>
</head>

Rancher Desktop provides `dockerd` and `containerd` as container engine options to manage containers. There are occasions when you might want to transfer the images from one container engine environment to the other. Or you may have migrated to Rancher Desktop from a different container management application and might want to bring the local images from the previous application environment to the Rancher Desktop environment.  This guide provides steps to transfer images using the `save` and `load` commands.

### Steps

**1. Save image(s) from the source environment to a tar archive.**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

- Save a single image
```
nerdctl save -o local-image.tar image:tag
```

- Save multiple images
```
nerdctl save -o local-images.tar image1:tag1 image2:tag2
```

- Save all images in a namespace

Below two commands use [jq](https://stedolan.github.io/jq/) for JSON parsing. The long command performs the below steps:

- The `nerdctl -n k8s.io image ls` sub command gets the list of all images present in the `k8s.io` namespace, hence doesn't include images from any other namespace, `default` for instance.
- The `jq` sub command filters and formats the images list from the previous step.
  - The `select(.Repository!=\"<none>\")` part of the command skips those images with repository having a value of `<none>`.
  - The `if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end')` part of the command formats the name of the images to be just the `<Repository>` or `<Repository>:<Tag>` depending on whether a image tag has a value of `<none>` or not.
- Finally the `nerdctl -n k8s.io save -o all-local-images-in-namespace.tar` part of the command saves the filtered and formatted images list from the previous two steps into a tar file. 

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

- Save a single image
```
docker save -o local-image.tar image:tag
```

- Save multiple images
```
docker save -o local-images.tar image1:tag1 image2:tag2
```

- Save all local images

Below two commands use [jq](https://stedolan.github.io/jq/) for JSON parsing. The long command performs the below steps:

- The `docker image ls` sub command gets the list of all local images.
- The `jq` sub command filters and formats the images list from the previous step.
  - The `select(.Repository!=\"<none>\")` part of the command skips those images with repository having a value of `<none>`.
  - The `if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end')` part of the command formats the name of the images to be just the `<Repository>` or `<Repository>:<Tag>` depending on whether a image tag has a value of `<none>` or not.
- Finally the `docker save -o all-local-images-in-namespace.tar` part of the command saves the filtered and formatted images list from the previous two steps into a tar file. 

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

**2. Load images from the saved tar archive in the target environment.**

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl load < local-images.tar
```

  </TabItem>
  <TabItem value="docker">

```
docker load < local-images.tar
```

  </TabItem>
</Tabs>
