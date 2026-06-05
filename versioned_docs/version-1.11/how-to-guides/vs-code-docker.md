---
title: Debugging a Container App with VS Code Docker extension
---

The VS Code Docker extension makes it easy to build, manage, debug and deploy containerized applications in Visual Studio Code.

### Steps to debug a sample application running within a container

1. Install and launch Rancher Desktop. Select `dockerd (moby)` as the Container Runtime from the `Kubernetes Settings` menu.

![](../img/vscodedocker/rd-main.png)

2. Install and launch Visual Studio Code or Visual Studio Code Insiders. This tutorial uses Visual Studio Code.

![](../img/vscodedocker/vscode-main.png)

[VS Code Docker]: https://code.visualstudio.com/docs/containers/overview

3. Install the VS Code Docker extension from the marketplace. 

![](../img/vscodedocker/vscode-docker-marketplace.png) 

4. You can use the samples provided at this Github repository, https://github.com/bwateratmsft/samples. Clone this repository and open `expressapp` folder in your VS Code session. 

6. Open the command palette (Ctrl+Shift+P, F1, or Cmd+Shift+P) and run "Add Docker Files to Workspace". Since this is an Express app, Select `Node.js` as the Application Platform and `3000` (or any other available port) as the `port`. As it's a simple example, select `No` for the `Include optional Docker Compose files` prompt. This step adds a `Dockerfile` and `Launch Configuration` required to debug the application.

![](../img/vscodedocker/vscode-docker-add-docker-files-1.png)

7. Insert a breakpoint in the code.

![](../img/vscodedocker/vscode-docker-debug-breakpoint.png)

8. In the Debug window at the top, switch the active debug configuration to "Docker Node.js Launch". Press `F5` to start the application container in `Debug` mode. You will see the sample application's landing page opening in your browser, and the code execution stopping at the breakpoint. From here, you can debug the application as if it's running on your host.

![](../img/vscodedocker/vscode-docker-debug-configuration.png)

![](../img/vscodedocker/vscode-docker-debug-breakpoint-hit.png)

9. Sometimes, the application might not break at the set breakpoint on the first run as the debugging process may not have started. In this case, refresh the browser to trigger the execution again to hit the breakpoint. You can also get around this behavior by setting the property `inspectMode: 'break'` in `task.json` file to prevent the app from running until the debugger attaches.

10. On some machines, the firewall settings might prevent the debugging process from establishing a connection between the host and the container processes. In this case, you can add a firewall rule to allow communication between the VM where the container is running and the host where you have the VS Code session running. On Windows, you can add a firewall rule by running the below command from a privileged powershell:

```powershell
New-NetFirewallRule -Action Allow -Description 'Allow communication from WSL containers' -Direction Inbound -Enabled True -InterfaceAlias 'vEthernet (WSL)' -Name 'WSL Inbound' -DisplayName 'WSL Inbound'
```
