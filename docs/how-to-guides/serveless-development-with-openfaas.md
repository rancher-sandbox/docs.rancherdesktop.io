---
title: Serverless Functions with OpenFaaS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[OpenFaaS®](https://docs.openfaas.com/) makes it easy for developers to deploy event-driven functions and microservices to Kubernetes without repetitive, boiler-plate coding. To learn more about OpenFaaS, visit the project's homepage [here](https://www.openfaas.com/). This guide walks you through the steps to set up a local development workflow to build Serverless Functions using OpenFaaS and Rancher Desktop.

#### Setup Local Registry
<Tabs groupId="container-runtime">
  <TabItem value="nerdctl" default>

```
nerdctl run -d \
  -p 5000:5000 \
  --restart=always \
  --name registry \
  registry:2
```

  </TabItem>
  <TabItem value="docker">

```
docker run -d \
  -p 5000:5000 \
  --restart=always \
  --name registry \
  registry:2
```

  </TabItem>
</Tabs>

#### Deploy OpenFaaS to the Rancher Desktop's K3S cluster
```
kubectl apply -f https://raw.githubusercontent.com/openfaas/faas-netes/master/namespaces.yml
helm repo add openfaas https://openfaas.github.io/faas-netes/
helm repo update \
 && helm upgrade openfaas --install openfaas/openfaas \
    --namespace openfaas  \
    --set functionNamespace=openfaas-fn \
    --set generateBasicAuth=true
kubectl port-forward -n openfaas svc/gateway 8080:8080
```
#### Install OpenFaaS CLI (faas-cli)
```
curl -SLs cli.openfaas.com | sh
```
#### Login to the local OpenFaaS environment
```
export PASSWORD=$(kubectl -n openfaas get secret basic-auth -o jsonpath="{.data.basic-auth-password}"|base64 --decode)
faas-cli login --username admin --password=$PASSWORD
```
#### Create a new Serverless Function
Create a folder for your function and `cd` into the folder. Run the below command to bootstrap your function. You can choose csharp, go, java, php, node, ruby etc to write the function. Please refer to [OpenFaaS docs](https://docs.openfaas.com/) to know about the full list of supported languages.
```
faas-cli new openfaas-helloworld --lang python3 --prefix localhost:5000/openfaas-helloworld
```
#### Build, Push and Deploy the Function
**Note:** If you selected **nerdctl** as the container runtime then you need to create a **docker** alias to **nerdctl** before running the below command.
```
faas-cli up -f openfaas-helloworld.yml
```
#### Invoke the Function
```
echo Hello World! | faas-cli invoke openfaas-helloworld
```
You can also trigger the function via the web client at http://localhost:8080. Use `admin` as the username and $PASSWORD obtained above as the password to login to the web client.
#### Redeploy the Function
After code changes, you can redeploy the function using `--update=false --replace` flags.
```
faas-cli up -f openfaas-helloworld.yml --update=false --replace
```
