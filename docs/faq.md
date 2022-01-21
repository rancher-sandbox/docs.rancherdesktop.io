---
---

# FAQ

This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop.

**Q: Is Rancher Desktop a desktop version of Rancher?**

**A:** No, Rancher Desktop is not [Rancher] on the desktop. Installing Rancher Desktop does not install Rancher, but you can install Rancher as a workload.

Rancher Desktop is similar to applications like [minikube], [kind], or [Docker Desktop] where the goal is to have an easy to set up local Kubernetes environment to manage containers.

[Rancher]:
https://rancher.com/

[minikube]:
https://minikube.sigs.k8s.io/docs/

[kind]:
https://kind.sigs.k8s.io/docs/user/quick-start/

[Docker Desktop]:
https://docs.docker.com/desktop/

<!-- #1221 -->
**Q: Can I have Docker Desktop installed alongside Rancher Desktop?**

**A:** Yes, but they cannot be run at the same time as both Rancher Desktop and Docker Desktop use the same Docker socket (`/var/run/docker.sock`). Before starting one, be sure to stop the other first.

<!-- #1074
**Q: After uninstalling Rancher Desktop I noticed there are still some resources left behind. What are all the things that I need to manually remove and how?**

**A:**
-->

**Q: I do not see an entry for Rancher Desktop when running `kubectl config get-contexts`, where is it?**

**A:** Rancher Desktop places its configuration in the default location, `~/.kube/config,` and uses that. Your `KUBECONFIG` environment variable may be set to look elsewhere for configuration files.

**Q: Rancher Desktop is stuck on `Waiting for Kubernetes API`, what do I do?**

**A:** The cause is hard to determine without additional information. Navigate to the Troubleshooting tab and use the button to access the logs. Then go to the [Rancher Desktop GitHub] page and file an issue with the logs attached.

[Rancher Desktop Github]:
https://github.com/rancher-sandbox/rancher-desktop/issues

**Q: I can no longer run `docker compose` after installing Rancher Desktop and uninstalling Docker Desktop, what happened?**

**A:** The `docker compose` subcommand is bundled as part of a Docker Desktop installation and is removed when uninstalled. Follow these [instructions] to install it.

[instructions]:
https://github.com/docker/compose

<!-- #985 -->
**Q: I don't need the Kubernetes cluster deployed by Rancher Desktop, how do I disable it to save resources?**

**A:** As a temporary workaround, you can _disable_ Kubernetes in Rancher Desktop with these commands:

```
kubectl config use-context rancher-desktop
kubectl delete node lima rancher-desktop
```

<!-- #726 -->
**Q: What's happening the Kubernetes Image Manager (kim)?**

**A:** Kim is now deprecated and is being replaced by nerdctl and other tools.

<!-- #966 -->
**Q: I'm using Homebrew to install Rancher Desktop, but `brew install rancher-desktop` is failing, why?**

**A:** Due to the Homebrew cask naming conventions, the `-desktop` suffix is dropped from the cask formula name. Use `brew install rancher` instead.

<!-- #776 -->
**Q: Running `brew install rancher` is failing with a `It seems there is already a Binary at '/usr/local/bin/<BINARY>'` error, why?**

**A:** If any of the Rancher Desktop supporting utilities (Helm, kubectl, nerdctl, Moby) are already managed by Homebrew, then the installation fails due to how the Homebrew cask formula is defined. Installing using the Mac app will avoid this issue.

<!-- #1155 -->
**Q: The tools on the Support Utilities page are not installed and I see a `Insufficient permission to manipulate /usr/local/bin` error, how do I fix it?**

**A:** This occurs when you do not have ownership of `/usr/local/bin`. A long-term solution to improve the handling of permissions is in the works. In the meantime, a temporary workaround is to change ownership of `/usr/local/bin` by running `sudo chown $USER /usr/local/bin`. When you are able to write to the directory, Rancher Desktop is able to create the symlinks.

<!-- #981 -->
**Q: Is Cygwin compatible with Rancher Desktop?**

**A:** No, but there are plans to add compatibility.

