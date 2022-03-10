---
title: Skaffold and Rancher Desktop
---

Skaffold is a command line tool that optimizes your development workflow by automating the creation, configuration, and debugging of your Kubernetes cluster. Skaffold also provides an efficient way of building, pushing, testing, and deploying your app. 

The combination of Skaffold and Rancher Desktop can help make your workflow easier and more efficient. These tools enable developers to focus on apps by giving a simplified approach to working in a Kubernetes environment and deploying to it, rather than having to manage the repetitive steps required during the edit-debug-deploy "inner loop".

In order to demonstrate the steps to set up Skaffold with Rancher Desktop, a sample nodejs app example is provided within the Rancher Desktop docs repository [here](https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample). 

>**Important: Skaffold only works with `dockerd` (Moby).** Therefore, make sure to select your runtime as `dockerd` from the **Kubernetes Settings** panel in the Rancher Desktop UI. 

1. Visit https://skaffold.dev/docs/install/ to install Skaffold.

1. Clone the [Rancher Desktop docs repository](https://github.com/rancher-sandbox/docs.rancherdesktop.io.git) and navigate to the `express-sample` in a terminal as follows: 
    ```
    cd docs.rancherdesktop.io/assets/express-sample
    ```

1. Run `skaffold init`. 

1. Specify the builder you want to build the image, e.g., Dockerfile.

1. Specify the buildpacks you want to use, e.g., `package.json`. This will generate the initial configuration file that you can modify as needed. When prompted, select `yes` to write your config to `skaffold.yaml`. 

1. In your editor, review your `app.js` and `manifests.yaml` files. Note that in `manifests.yaml`, you will have a deployment config as well as a service config. It is only necessary to have 1 `replica` for testing purposes.

1. Back in your terminal, you'll notice that you will have two options: `skaffold run` that lets you build and deploy, and `skaffold dev` that allows you to enter development mode with auto-redeploy. Choose `skaffold dev` for this example. 

    As you go through your development, Skaffold will detect any changes and will automatically go through the build and deployment process again. You will be able to see any changes reflected in the cluster.

1. Point your web browser to `localhost:3000`, and you will see the `express-sample` screen.

