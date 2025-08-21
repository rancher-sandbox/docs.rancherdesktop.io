---
title: Working with LLMs using Open WebUI
---

The **Rancher Desktop Open WebUI extension** provides an easy-to-install setup, comprising the components listed below, for local GenAI use and development.

- [Ollama](https://ollama.com/) to pull, run, and fine-tune open-source LLMs
- [Open WebUI](https://openwebui.com/) to chat with the LLMs, use custom knowledge, web search, etc., via a feature rich Graphical User Interface (GUI)
- A lightweight LLM called [tinyllama](https://ollama.com/library/tinyllama) to enable you to kickstart your LLM exploration
- [SearXNG](https://github.com/searxng/searxng) for web search, to enhance retrieval augmented generation (RAG) results
- [mcpo](https://github.com/open-webui/mcpo) to run [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) servers in a container

## Installing the Open WebUI extension

:::important
The Open WebUI extension depends on the host machine's ports 11434, 11500 and 11505 for the Ollama, Open WebUI, and the SearXNG services respectively. Please ensure other applications or services on your machine do not occupy these host ports.
:::

### Minimum Requirements

In addition to the general Rancher Desktop [installation requirements](../getting-started/installation.md), you should meet the requirements listed below for the Open WebUI extension. 

- Rancher Desktop version 1.17 or above
- 7 GB available disk space
- 16 GB RAM (recommended)

### Steps to install

You can install the Open WebUI extension via the [Extensions Catalog](../ui/extensions.md#catalog) GUI or via the [rdctl CLI](../references/rdctl-command-reference.md#rdctl-extension-install).

:::caution
Please note that the installation process can take several minutes depending on your internet speed, machine performance etc. 
:::

<Tabs groupId="container-runtime">
  <TabItem value="Extension Catalog (GUI)" default>

    Installing the Open WebUI extension is simple. 

    - Navigate to the `Extensions` page
    - Install the Open WebUI extension

    ![](../img/working-with-open-webui/install-extension.png)

  </TabItem>
  <TabItem value="CLI">

Run the command below to install the extension.

```
rdctl extension install ghcr.io/rancher-sandbox/rancher-desktop-rdx-open-webui:latest
```

:::caution
It is recommended to use a specific release tag of the extension instead of the `latest` tag as your Rancher Desktop version may not have features that the `latest` tag depends on. You can find the release tag names on the [GitHub Tags page](https://github.com/rancher-sandbox/rancher-desktop-rdx-open-webui/tags)
:::

  </TabItem>
</Tabs>

:::note
- The extension will skip the Ollama installation if it is already available on your machine in the default installation location. Otherwise, it downloads and installs Ollama into the extension's installation directory.
- Ollama will utilize the host machine's GPU to run inferences if the host has an NVIDIA GPU and the respective drivers, or an Apple CPU.
:::

## Using Open WebUI

This section provides information and instructions to help you navigate some of Open WebUI's most commonly used features. For up-to-date information about the full capabilities and usage instructions, please refer to the [Open WebUI documentation](https://docs.openwebui.com).

### Pulling Ollama Open Source LLMs

The extension provides a lightweight LLM called [tinyllama](https://ollama.com/library/tinyllama) out of the box that you can use to start your LLM exploration. Tinyllama is a basic language model good enough to try out simpler text generation and summarization tasks. If you want to perform more advanced tasks, then you need to download bigger models such as llama, mistral, gemma, etc.

You can pull Ollama models via the `Admin Panel > Settings > Connections` page. Simply enter the name:tag of the model you want to pull and click on the `pull` button. You can find the full list of available models on the [Ollama Models Library page](https://ollama.com/library).

![](../img/working-with-open-webui/pulling-models.png)

### Using GGUF models from Huggingface

GGUF (Generic GPT Unified Format) is a binary format that is optimized for quick loading and saving of models, making it highly efficient for inference purposes. You can learn more about the format on this [Huggingface docs page](https://huggingface.co/docs/hub/gguf).

Recent developments from Ollama and Huggingface make it very simple to use `GGUF` models from Huggingface with Ollama. Follow the steps below to pull a `GGUF` model in the Open WebUI GUI.

- Select a model in `GGUF` format on Huggingface and navigate to the model's page.
- On the page, Click on the `Use this model` button and select `Ollama` in the menu.
- From the pop-up dialog, take the full model name along with the tag. For example, the full model name shown in the image below is `hf.co/QuantFactory/Ministral-3b-instruct-GGUF:Q4_K_M`.

:::tip
Pick the `Q4_K_M` quantization of the `GGUF` models on Huggingface, as this variant generally seems to strike a good balance between the model size and the performance for local usage.
:::

![](../img/working-with-open-webui/gguf-model-page-hf.png)

- Navigate to the Models page in the Open WebUI, `Admin Panel > Settings > Connections`.
- Enter the full model name in the `Pull a model from Ollama.com` field and click on the download button. Once the model is downloaded, you can use it with the Chat and the Playground features.

![](../img/working-with-open-webui/download-gguf-from-hf.png)

### Using OpenAI-compatible APIs

You can use OpenAI-compatible APIs from a local server such as [localai](https://localai.io/), [llamafile](https://github.com/Mozilla-Ocho/llamafile), or cloud providers such as [Groq](https://groq.com/), [OpenAI](https://openai.com/api/), etc.

For example, you can set up the OpenAI-compatible API from [Groq](https://groq.com/) by following the steps below:

- Create a Groq cloud account at https://console.groq.com.
- Create an API key at https://console.groq.com/keys.
- Navigate to `Admin Panel > Settings > Connections` in the Open WebUI extension and add Groq as an OpenAI-compatible API provider. Use `https://api.groq.com/openai/v1` as the base URL and use the API key generated in the previous step.

You should be able to see the available models from Groq in the model selector drop-down.

![](../img/working-with-open-webui/openai-api-setting.png)

![](../img/working-with-open-webui/groq-models-list.png)

### Interacting with the local LLMs

Open WebUI provides a couple of GUI features to let you interact with the local LLMs.

#### Chat Interface

Open WebUI provides a ChatGPT-style chat interface to interact with the local LLMs. 

- Select the LLM you want to interact with in the LLM selector dropdown. 

:::tip
- Set your preferred LLM model as default to persist the model selection between Rancher Desktop's restarts.
- You can interact with multiple models at the same time. You can select multiple LLM models using the `+` button next to the model selector dropdown. 
:::

- You can now chat with the LLM using the chat interface.

![](../img/working-with-open-webui/multi-model-chat.png)

One of the interesting features of the OpenWebUI's chat interface is that when the chat response contains HTML, CSS, and JS code snippets, a live preview of the code is generated, which you can also interactively update by modifying and saving the code in the code snippets.

![](../img/working-with-open-webui/live-html-preview.png)

#### Playground Interface

The Playground functionality provides Chat and Text Completion features to interact with the local LLMs. You can select a LLM to interact with in the LLM selector dropdown on the Playground screen.

Using the Playground's Chat feature, you can provide a system prompt to let the LLM generate responses in a certain way or in a specific context.

![](../img/working-with-open-webui/playground-chat.png)

Using the Playground's Sentence Completion feature, you can provide the initial prompt text and let the LLM complete the provided prompt.

![](../img/working-with-open-webui/playground-sentence-completion.png)

### Adjusting LLM parameters

Ollama provides flexibility for adjusting LLM parameters to fine-tune model performance for specific tasks. Open WebUI makes it easy to apply the LLM parameters and customize the system prompt at different levels (per-chat basis, per-model basis, and per-account basis) as Chat Parameters. Refer to the [Open WebUI documentation](https://docs.openwebui.com) to learn about the different levels you can apply the chat parameters and their overriding behavior.

:::info
Refer to [Ollama Model File documentation](https://github.com/ollama/ollama/blob/main/docs/modelfile.md#parameter) for the full list of LLM parameters, their intended purpose, and example usage.
:::

For example, you can use the sliding control panel on the right to set the system prompt and adjust LLM parameters at the individual chat level.

![](../img/working-with-open-webui/setting-chat-parameters.png)

### Augmenting LLMs with Custom Knowledge & Web Search

Open WebUI provides features to augment LLM responses using the Retrieval Augmented Generation (RAG) technique. You can provide custom knowledge to the LLM via.  Knowledge Collections and/or Web Search.

#### Knowledge Collections
You can create knowledge collections by simply uploading documents containing your custom knowledge. You can access the Knowledge Collections management page via `Workspace > Knowledge`.

![](../img/working-with-open-webui/knowedge-collections.png)

#### Web Search

In addition to using local knowledge collections, Open WebUI allows you to perform LIVE web searches to retrieve relevant information to generate better responses. Please refer to the [Open WebUI documentation](https://docs.openwebui.com) to learn about the available web search providers.

Rancher Desktop's Open WebUI extension installs and configures [SearXNG](https://docs.searxng.org/), a free internet metasearch engine, to enable you use web search out of the box. 

#### Using Knowledge Collections and/or Web Search in chats

To use a Knowledge Collection in the chat, simply type `#` in the chat input field which shows the available knowledge collections on your machine. You can pick one or more knowledge collections as knowledge source(s) to retrieve relevant context.

:::tip
You can also include a web page's content in your conversations using the `#` command followed by the web page's URL.
:::

![](../img/working-with-open-webui/selecting-knowedge-collections.png)

To use the web search in the chat, click the `+` button to the left of the chat input field and enable the web search feature. This allows the chat to perform a web search to get relevant information and generate responses.

![](../img/working-with-open-webui/enabling-web-search.png)

:::tip
You can use both Knowledge Collections and Web Search to augment the LLM's response to a single question.
:::

:::info
Open WebUI provides advanced configuration to fine-tune the Retrieval Augmented Generation process, which allows you to use alternate embedding models, provide a more suitable prompt template, configure the chunk parameters, and much more. You can perform this advanced configuration on the `Admin Panel > Settings > Documents` page. To learn more, refer to the [Open WebUI documentation](https://docs.openwebui.com).
:::

### Customizing Models

Open WebUI provides features to let you customize the downloaded models for your specific domain, use cases, etc. You can customize models on the `Workspace > Models` page. You can create a model by extending one of the existing models. You can customize the models by tweaking the chat parameters, including knowledge collections, etc. The custom models created here can then be used with the Chat and Playground features.

![](../img/working-with-open-webui/customize-models.png)

### Using Model Context Protocol (MCP)

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open standard introduced by [Anthropic](https://www.anthropic.com/) that aims to make connecting LLMs to tools and data sources as easy as plugging in a device. The Open WebUI extension includes an MCP-to-OpenAPI proxy called [mcpo](https://github.com/open-webui/mcpo), which takes an MCP tool server (which typically communicates via a local stdio interface) and exposes it as a standard RESTful OpenAPI endpoint. The extension also bundles 2 sample MCP servers, [mcp-server-docker](https://github.com/ckreiling/mcp-server-docker), [mcp-server-kubernetes](https://github.com/Flux159/mcp-server-kubernetes) that let you interact with the local container engine (dockerd(moby) only) and Kubernetes. You need to enable dockerd(moby) and/or Kubernetes to use the respective MCP server.

#### Steps to enable the bundled MCP servers

- Navigate to the `Admin Panel > Settings > Tools` section.
- Click on the `+` to add a new MCP server tool. 
- Add the Docker MCP server.
  - Add `http://host.docker.internal:11600/docker-mcp` in the URL field and leave the rest of fields to their defaults.
- Add the Kubernetes MCP server.
  - Add `http://host.docker.internal:11600/docker-mcp` in the URL field and leave the rest of fields to their defaults.
- Navigate to `Admin Panel > Settings > Models` and click on the edit button (pencil icon) for the model you want to use. 
- Under the `Advanced Params`, set the `Function Calling` paramater to `Native`.
- On the same page, You should see `Docker-MCP` and `Kubernetes-Mcp-Server` under Tools. Select both of them.
- Click `Save & Update` to save the changes.
- Click on `New Chat` at the top left corner of the window. Select the model you just edited. 
- Try a prompt such as `List my docker volumes in a table`


#### Steps to add MCP servers

:::danger
IMPORTANT: Don't install MCP servers that you don't trust
:::

- You can try other MCP servers by adding the respective server configuration in the file `<extension-installation-dir>/compose/linux/mcpo/config.json`. You can find a number of community provided MCP servers on this page - https://github.com/modelcontextprotocol/servers.


- For example, you can add a community developed MCP server, [mcp-searxng](https://github.com/ihor-sokoliuk/mcp-searxng), to the config.json as shown below.

```
{
  "mcpServers": {
    "docker-mcp": {
      "command": "uvx",
      "args": [
        "docker-mcp"
      ]
    },
    "kubernetes": {
      "command": "npx",
      "args": [
        "-y",
        "kubernetes-mcp-server@latest"
      ]
    },
    "searxng": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-searxng"
      ],
      "env": {
        "SEARXNG_URL": "http://host.docker.internal:11505"
      }
    }
  }
}
```
- Restart the mcpo container to make it use the updated config.json. You can use Rancher Desktop's Containers page to stop and start the mcpo container.

- Finally, follow the steps provided in the previous section to add the new MCP server endpoint as a tool, and enable the tool for a desired model. The URL of the MCP server tool would be `http://host.docker.internal:11600/<mcp-server-name>`. You can find the MCP server's name on `http://localhost:11600/docs`


:::note
The MCP servers added to the config.json file are not persisted between Rancher Desktop restarts at this time.
:::

## Uninstalling the extension

You can uninstall the Open WebUI extension via the [Extensions Catalog](../ui/extensions.md#catalog) GUI or using the [rdctl CLI](../references/rdctl-command-reference.md#rdctl-extension-install).

:::note
- Ollama, if installed by the extension, will be removed as part of the extension uninstallation process.
- Ollama model files, stored at the locations listed below, are not removed as part of the extension uninstallation process, allowing for their reuse if desired. If you want to delete the model files, you need to delete the models folder manually.
  - macOS & Linux: `~/.ollama/models`
  - Windows: `%USERPROFILE%/.ollama/models`
:::

<Tabs groupId="container-runtime">
  <TabItem value="Extension Catalog (GUI)" default>

    Installing the Open WebUI extension is simple. 

    - Navigate to the `Extensions` page
    - Remove the Open WebUI extension from either the `Catalog` or the `Installed` tab

    ![](../img/working-with-open-webui/uninstall-extension-from-catalog-tab.png)

    ![](../img/working-with-open-webui/uninstall-extension-from-installed-tab.png)

  </TabItem>
  <TabItem value="CLI">

Run the command below to uninstall the extension.

```
rdctl extension uninstall ghcr.io/rancher-sandbox/rancher-desktop-rdx-open-webui:<tag>
```
  </TabItem>
</Tabs>
