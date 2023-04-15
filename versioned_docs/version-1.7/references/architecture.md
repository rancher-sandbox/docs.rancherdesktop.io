---
title: Architecture
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Rancher Desktop Architecture](../img/how-it-works-rancher-desktop.svg)

Rancher Desktop is an electron-based application that wraps other tools while it also provides the user experience to create a simple experience. On macOS and Linux, Rancher Desktop leverages a virtual machine to run containerd or dockerd and Kubernetes. Windows Subsystem for Linux v2 is leveraged for Windows systems. All you need to do is download and run the application.

<Tabs>
<TabItem value="Windows">

## Functional Architecture

```mermaid
flowchart TD
    subgraph WSL
        subgraph RD_distro[rancher-desktop]
            RD_data_distro[volume]
            dockerd(dockerd)
        end
        subgraph kubernetes_components[kubernetes components]
        direction TB
            kubectl(kubectl) --- k3s(k3s)
            traefik(traefik)
        end
        trivy(trivy)
    end
	subgraph RD
        GUI(GUI) --- rdctl(rdctl)
        subgraph backend[interfaces to backend]
        direction TB
            nerdctl(nerdctl)
            docker_CLI(docker CLI)
            helm(helm)
            k8s_manager(k8s manager)
        end
        rdctl(rdctl) --- backend
        subgraph communication_layer[communication layer]
        direction TB
            HTTP_cmd_server(HTTP command server)
            ipc_proxy(IPC Proxy server)
        end
        backend --- communication_layer
    end
    communication_layer --- WSL
```
</TabItem>

<TabItem value="macOS">

```mermaid
flowchart TD
    subgraph RD
        GUI(GUI) --- rdctl
        rdctl(rdctl) --- backend  
        subgraph backend[interfaces to backend]
        direction TB
            nerdctl(nerdctl)
            docker_CLI(docker CLI)
            helm(helm)
            k8s_manager(k8s manager)
            LimaCTL
        end
        subgraph communication_layer[communication layer]
        direction TB
            HTTP_cmd_server(HTTP command server)
            ipc_proxy(IPC proxy server)
        end    
        backend --- communication_layer
    end
    subgraph Lima
        data_volume(data volume)
        dockerd(dockerd)
        subgraph kubernetes_components[kubernetes components]
        direction TB
	        kubectl(kubectl)
	        k3s(k3s)
	        kubectl --- k3s
	        traefik(Traefik)
	    end
        trivy(Trivy)
    end
    communication_layer --- Lima
```
</TabItem>

<TabItem value="Linux">

```mermaid
flowchart TD
    subgraph RD
        GUI(GUI) --- rdctl
        rdctl(rdctl) --- backend  
        subgraph backend[interfaces to backend]
            nerdctl(nerdctl)
            docker_CLI(docker CLI)
            helm(helm)
            k8s_manager(k8s manager)
            LimaCTL
        end
        subgraph communication_layer[communication layer]
            HTTP_cmd_server(HTTP command server)
            ipc_proxy(IPC proxy server)
        end    
        backend --- communication_layer
    end
    subgraph Lima
        data_volume(data volume)
        dockerd(dockerd)
        subgraph kubernetes_components[kubernetes components]
        direction TB
	        kubectl(kubectl)
	        k3s(k3s)
	        kubectl --- k3s
	        traefik(Traefik)
	    end
        trivy(Trivy)
    end
    communication_layer --- Lima
``` 
</TabItem>
</Tabs>
