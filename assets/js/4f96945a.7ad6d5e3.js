"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[49399],{23465:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return t},default:function(){return h},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return l}});var r=i(85893),s=i(11151);const o={title:"Working with Images"},t=void 0,a={id:"tutorials/working-with-images",title:"Working with Images",description:"Rancher Desktop provides the ability to build, push, and pull images via the",source:"@site/versioned_docs/version-1.13/tutorials/working-with-images.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-images",permalink:"/1.13/tutorials/working-with-images",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.13/tutorials/working-with-images.md",tags:[],version:"1.13",frontMatter:{title:"Working with Images"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/1.13/ui/preferences/kubernetes"},next:{title:"Working with Containers",permalink:"/1.13/tutorials/working-with-containers"}},c={},l=[{value:"General Usage",id:"general-usage",level:2},{value:"Listing Images",id:"listing-images",level:2},{value:"Building Images",id:"building-images",level:2},{value:"Building Local Images",id:"building-local-images",level:3},{value:"Tagging Images",id:"tagging-images",level:2},{value:"Removing Images",id:"removing-images",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{Head:i,TabItem:o,Tabs:t}=n;return i||u("Head",!0),o||u("TabItem",!0),t||u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/tutorials/working-with-images"})}),"\n",(0,r.jsxs)(n.p,{children:["Rancher Desktop provides the ability to build, push, and pull images via the\n",(0,r.jsx)(n.a,{href:"https://github.com/containerd/nerdctl",children:"NERDCTL"})," project and the Docker CLI."]}),"\n",(0,r.jsxs)(n.p,{children:["Note, both ",(0,r.jsx)(n.code,{children:"nerdctl"})," and ",(0,r.jsx)(n.code,{children:"docker"})," are put into the path automatically. This occurs during the installer on Windows, and upon first run on macOS and Linux."]}),"\n",(0,r.jsx)(n.h2,{id:"general-usage",children:"General Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Using either tool requires Rancher Desktop to be running with the appropriate container runtime. For ",(0,r.jsx)(n.code,{children:"nerdctl"}),", use the containerd runtime. For ",(0,r.jsx)(n.code,{children:"docker"}),", use the Moby runtime."]}),"\n",(0,r.jsx)(n.p,{children:"You can learn about all of the command options and display the help documentation by running:"}),"\n",(0,r.jsxs)(t,{groupId:"container-runtime",children:[(0,r.jsxs)(o,{value:"nerdctl",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"nerdctl -h\n"})}),(0,r.jsxs)(n.p,{children:["Unlike Docker, containerd features its own namespaces. By default, nerdctl images are stored in the ",(0,r.jsx)(n.code,{children:"default"})," namespace. If you want your images available for use by Kubernetes, use the ",(0,r.jsx)(n.code,{children:"--namespace k8s.io"})," or ",(0,r.jsx)(n.code,{children:"-n k8s.io"})," CLI argument. You can also switch to a namespace called ",(0,r.jsx)(n.code,{children:"default"})," or any other name using the option ",(0,r.jsx)(n.code,{children:"--namespace <NAMESPACE_NAME>"}),".  Note that nerdctl namespaces are separate and independent from Kubernetes and ",(0,r.jsx)(n.code,{children:"kubectl"})," namespaces."]})]}),(0,r.jsx)(o,{value:"docker",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"docker --help\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"listing-images",children:"Listing Images"}),"\n",(0,r.jsx)(n.p,{children:"To see the images currently available, run the following command:"}),"\n",(0,r.jsxs)(t,{groupId:"container-runtime",children:[(0,r.jsx)(o,{value:"nerdctl",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"nerdctl images\n"})})}),(0,r.jsx)(o,{value:"docker",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"docker images\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"building-images",children:"Building Images"}),"\n",(0,r.jsxs)(t,{groupId:"container-runtime",children:[(0,r.jsxs)(o,{value:"nerdctl",default:!0,children:[(0,r.jsxs)(n.p,{children:["Building images has a similar feel to existing tools. For example, consider\nrunning ",(0,r.jsx)(n.code,{children:"nerdctl"})," from a directory with a ",(0,r.jsx)(n.code,{children:"Dockerfile"})," where the ",(0,r.jsx)(n.code,{children:"Dockerfile"})," is\nusing a scratch image."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"nerdctl build .\n[+] Building 0.1s (4/4) FINISHED\n => [internal] load build definition from Dockerfile\n => => transferring dockerfile: 31B\n => [internal] load .dockerignore\n => => transferring context: 2B\n => [internal] load build context\n => => transferring context: 33B\n => CACHED [1/1] ADD anvil-app /\n"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"nerdctl"})," has options for tagging at the same time as building and other options you've\ncome to expect."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"nerdctl build -t TAG .\n"})}),(0,r.jsxs)(n.p,{children:["To build an image for use with Kubernetes, specify the ",(0,r.jsx)(n.code,{children:"k8s.io"})," namespace as follows:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"nerdctl build -n k8s.io .\n"})})]}),(0,r.jsxs)(o,{value:"docker",children:[(0,r.jsxs)(n.p,{children:["Consider running ",(0,r.jsx)(n.code,{children:"docker"})," from a directory with a ",(0,r.jsx)(n.code,{children:"Dockerfile"})," where the ",(0,r.jsx)(n.code,{children:"Dockerfile"})," is\nusing a scratch image."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"docker build .\nSending build context to Docker daemon  13.93MB\nStep 1/5 : FROM some-repo/some-image\n ---\x3e e57ace221dff\n...\n ---\x3e fd984c4cbf97\nSuccessfully built fd984c4cbf97\n"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"docker"})," has options for tagging at the same time as building and other options you've\ncome to expect."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"docker build -t TAG .\n"})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"building-local-images",children:"Building Local Images"}),"\n",(0,r.jsxs)(n.p,{children:["In order to demonstrate the steps to build local images and run apps, a sample nodejs app is provided within the ",(0,r.jsx)(n.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git",children:"Rancher Desktop docs repository"}),". To get started, clone the repository and cd into ",(0,r.jsx)(n.code,{children:"assets/express-sample"})," in a terminal."]}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to build image from Dockerfile:"}),"\n",(0,r.jsxs)(t,{groupId:"container-runtime",children:[(0,r.jsx)(o,{value:"nerdctl",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nerdctl --namespace k8s.io build -t expressapp:v1.0 .\n"})})}),(0,r.jsx)(o,{value:"docker",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker build -t expressapp:v1.0 .\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to run container:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl run --image expressapp:v1.0 expressapp\nkubectl port-forward pods/expressapp 3000:3000\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," When adding the ",(0,r.jsx)(n.code,{children:"latest"})," tag, be sure to also specify the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"imagePullPolicy: Never\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tagging-images",children:"Tagging Images"}),"\n",(0,r.jsx)(n.p,{children:"If you want to tag an existing image you've built you can use the following\ncommand:"}),"\n",(0,r.jsxs)(t,{groupId:"container-runtime",children:[(0,r.jsx)(o,{value:"nerdctl",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"nerdctl tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n"})})}),(0,r.jsx)(o,{value:"docker",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"removing-images",children:"Removing Images"}),"\n",(0,r.jsx)(n.p,{children:"To remove an image, run the following command:"}),"\n",(0,r.jsxs)(t,{groupId:"container-runtime",children:[(0,r.jsx)(o,{value:"nerdctl",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"nerdctl rmi IMAGE\n"})})}),(0,r.jsx)(o,{value:"docker",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"docker rmi IMAGE\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return t}});var r=i(67294);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);