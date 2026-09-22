---
title: Using Rancher Desktop Behind a Proxy
---

If your network requires an HTTP(S) proxy to reach the internet, the container engine and Kubernetes inside Rancher Desktop's virtual machine need to route their traffic through it. How you configure the proxy depends on your platform.

## Windows

Configure the proxy from **Preferences > WSL > Proxy**. Rancher Desktop routes the virtual machine's traffic through the proxy you enter there. See [Proxy](../ui/preferences/wsl/proxy.md) for the available fields and the bypass list.

## macOS and Linux

Rancher Desktop does not yet provide a built-in proxy control on macOS and Linux. Progress on first-class support is tracked in [rancher-sandbox/rancher-desktop#2259](https://github.com/rancher-sandbox/rancher-desktop/issues/2259).

As a workaround, configure proxy settings for the container engine inside the virtual machine with a [provisioning script](./provisioning-scripts.md). A provisioning script runs inside the virtual machine while it starts, so it can set the engine's proxy environment.

## Proxies for image builds

To pass proxy settings to the steps of an image build, on any platform, use build arguments:

```console
docker build \
  --build-arg HTTP_PROXY=http://proxy.example:3128 \
  --build-arg HTTPS_PROXY=http://proxy.example:3128 \
  --build-arg NO_PROXY=localhost,127.0.0.1 \
  -t myimage .
```

## Trusting a proxy's certificate

If your proxy intercepts TLS connections, the container engine must trust the proxy's certificate authority. Rancher Desktop copies the certificate authorities from your host system into the virtual machine, so adding your proxy's CA certificate to the host's trust store makes it trusted inside the virtual machine as well. Restart Rancher Desktop after changing the host trust store so it picks up the new certificate.
