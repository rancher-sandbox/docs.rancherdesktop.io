---
title: Skaffold and Rancher Desktop
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/how-to-guides/skaffold-and-rancher-desktop"/>
</head>

Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs [here](https://skaffold.dev/docs/).

In order to demonstrate the steps to set up Skaffold with Rancher Desktop, a sample nodejs app example is provided within the Rancher Desktop docs repository [here](https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample). 

>**Important: Skaffold only works with `dockerd` (Moby).** Therefore, make sure to select your runtime as `dockerd` from the **Kubernetes Settings** panel in the Rancher Desktop UI. 

1. Visit https://skaffold.dev/docs/install/ to install Skaffold.

1. Clone the [Rancher Desktop docs repository](https://github.com/rancher-sandbox/docs.rancherdesktop.io.git) and navigate to the `express-sample` in a terminal as follows: 
    ```
    cd docs.rancherdesktop.io/assets/express-sample
    ```

1. Run `skaffold init`.

    Per the [Skaffold docs](https://skaffold.dev/docs/pipeline-stages/init/#build-config-initialization),`skaffold init` walks through your project directory and looks for any build configuration files such as `Dockerfile`, `build.gradle/pom.xml`, `package.json`, `requirements.txt`, or `go.mod`. 
    
    We will select `Dockerfile` and `package.json` in our example. This will generate the initial configuration file that you can modify as needed. When prompted, select `yes` to write your config to `skaffold.yaml`.

1. In your editor, review your `app.js` and `manifests.yaml` files. Note that in `manifests.yaml`, you will have a deployment config as well as a service config. It is only necessary to have 1 `replica` for testing purposes.

1. Back in your terminal, you'll notice that you will have two options: `skaffold run` that lets you build and deploy, and `skaffold dev` that allows you to enter development mode with auto-redeploy. We will use `skaffold dev` in this example.

   You will need to have push access to the image repository. You can either use your docker login, set up a local registry, or build locally without pushing to an image registry:

  <Tabs>
    <TabItem value="docker-hub" label="Docker Hub" default>

    Before running `skaffold dev`, use your docker login if you have a [Docker Hub](https://hub.docker.com/) account. Then, in the files `skaffold.yaml` and `manifests.yaml` replace `matamagu/express-sample` for `YOUR_DOCKER_HUB_USERNAME/express-sample` as `skaffold dev` will push the built image to DockerHub.
   
    </TabItem>  
    <TabItem value="local-registry" label="Local Registry">
   
    You can set up a local registry by first running this command:<br/><br/>  

    ```
    docker run -d -p 5000:5000 --restart=always --name registry registry:2
    ```
  
    Then:
    ```
    skaffold dev --default-repo=localhost:5000
    ```
    </TabItem>
    <TabItem value="local-build" label="Local Build">

    You can build locally without pushing to the image registry by setting your workloads `imagePullPolicy` to `IfNotPresent` in your `manifests.yaml` file. You will also need to update your `skaffold.yaml` with the following variables in order to implement this change as noted below:
    
    <details>
    <summary>Example YAML</summary>

    ```yaml
    apiVersion: skaffold/v2beta29
    kind: Config
    metadata:
      name: skaffold
    build:
      local:
        push: false
        useDockerCLI: true
    ```

    </details>

    </TabItem>
  </Tabs>

  As you go through your development, Skaffold will detect any changes and will automatically go through the build and deployment process again. You will be able to see any changes reflected in the cluster.

1. Point your web browser to `localhost:3000`, and you will see the `express-sample` screen.

