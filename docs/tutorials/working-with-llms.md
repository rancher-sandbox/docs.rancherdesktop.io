---
title: Working with LLMs using Open WebUI
---

The **Rancher Desktop's Open WebUI extension**  enables you to work with Large Language Models (LLMs) on your machine.

The Open WebUI extension installs and configures the components listed below:

- [Ollama](https://ollama.com/) to pull, run, fine tune, and share open source LLMs
- [Open WebUI](https://openwebui.com/) to interact with the LLMs via a feature rich Graphical User Interface (GUI)
- A light weight LLM called [tinyllama](https://ollama.com/library/tinyllama) to enable you kickstart your LLM exploration
- [searxng](https://github.com/searxng/searxng) for web search to enhance retrieval augmented generation (RAG) results

## Installing the Open WebUI extension

:::important
The Open WebUI extension depends on the hose machine's ports 11434, 11500 and 11505 for the Ollama, Open WebUI and the searxng services respectively. Please ensure these host ports are not occupied by other applications or services.
:::

### Minimum Requirements

In addition to the general Rancher Desktop [installation requirements](../getting-started/installation.md), you should meet the requirements listed below for the Open WebUI extension. 

- Rancher Desktop version 1.17 or above
- 7 GB available disk space
- 16 GB RAM (Recommended)

### Steps to install

You can install the Open WebUI extension via the [Extensions Catalog](../ui/extensions#catalog) GUI or via the [rdctl CLI](../references/rdctl-command-reference#rdctl-extension-install).

:::note
Please note that the installation process can take several minutes depending on your internet speed, machine performance etc. 
:::

<Tabs groupId="container-runtime">
  <TabItem value="Extension Catalog (GUI)" default>

    Installing the Open WebUI extension is simple. 

    - Navigate to the `Extensions` page
    - Install the Open WebUI extension

  </TabItem>
  <TabItem value="CLI">

```
rdctl extension install ghcr.io/rancher-sandbox/rancher-desktop-rdx-open-webui:latest
```
  </TabItem>
</Tabs>

:::note
Ollama installation will be skipped by the extension if Ollama is already available on your machine. Otherwise, the extension downloads and installs Ollama into the extension directory. 

Ollama, if installed by the extension, will be removed as part of the extension uninstallation process.
:::

:::note
Ollama model files are stored at the locations listed below. The model files are not removed as part of the extension uninstallation process. If you want to delete the model files then you need to manually delete the models folders.
:::

:::note
If you have NVIDIA GPUs and the respective drivers on the host machine then Ollama makes use of the host machine's GPU for running inferences.
:::

## Interesting things you can do/build with Open WebUI

### Pull Open Source LLMs

The extension provides a light weight LLM called [tinyllama](https://ollama.com/library/tinyllama) out of the box that you can use to start your LLM exploration. The tinyllama is a basic lanaguage model good enough to try out simpler text generation, summarization, translations tasks. If you want to perform more advanced tasks then you need to download bigger models such as llama, mistral, gemma etc.

You can pull Ollama models via the `Admin Settings > Models` page. Simply enter the name:tag of the model you want to pull and click on the `pull` button. You can find the full list of available models on the [Ollama Models Library page](https://ollama.com/library).