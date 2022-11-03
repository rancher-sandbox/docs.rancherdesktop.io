---
title: Transfer Container Images
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Rancher Desktop provides `dockerd` and `containerd` as container engine options to manage containers. There are occasions when you might want to transfer the images from one container engine environment to the other. Or you may have migrated to Rancher Desktop from a different container management application and might want to bring the local images from the previous application environment to the Rancher Desktop environment.  This guide provides steps to transfer images using the `save` and `load` commands.

### Steps

1. Save image(s) from the source environment to a tar archive.

<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
# Save a single image
nerdctl save -o local-image.tar image:tag

# Save multiple images
nerdctl save -o local-images.tar image1:tag1 image2:tag2

# Save all images in a namespace 
# Below two commands use jq for JSON parsing

# Bash command
nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format '{{json .}}' | jq -r 'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end')

# PowerShell command
nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format '{{json .}}' | jq -r 'select(.Repository!=\"<none>\") | if (.Tag==\"<none>\") then .Repository else (.Repository+\":\"+.Tag) end')

```

  </TabItem>
  <TabItem value="docker">

```
# Save a single image
docker save -o local-image.tar image:tag

# Save multiple images
docker save -o local-images.tar image1:tag1 image2:tag2

# Save all images
docker save -o all-local-images.tar $(docker image list --all --format '{{.Repository}}:{{.Tag}}') 
```

  </TabItem>
</Tabs>

2. Load images from the saved tar archive in the target environment.

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