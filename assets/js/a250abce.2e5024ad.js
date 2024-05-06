"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[37601],{94353:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return h}});var t=r(85893),a=r(11151),s=r(74866),o=r(85162);const c={title:"Rancher on Rancher Desktop"},l=void 0,i={id:"how-to-guides/rancher-on-rancher-desktop",title:"Rancher on Rancher Desktop",description:"While Rancher and Rancher Desktop share the Rancher name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop.",source:"@site/versioned_docs/version-1.8/how-to-guides/rancher-on-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/rancher-on-rancher-desktop",permalink:"/1.8/how-to-guides/rancher-on-rancher-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.8/how-to-guides/rancher-on-rancher-desktop.md",tags:[],version:"1.8",frontMatter:{title:"Rancher on Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"VS Code Remote Containers",permalink:"/1.8/how-to-guides/vs-code-remote-containers"},next:{title:"Skaffold and Rancher Desktop",permalink:"/1.8/how-to-guides/skaffold-and-rancher-desktop"}},u={},h=[];function d(e){const n={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Head:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/rancher-on-rancher-desktop"})}),"\n",(0,t.jsxs)(n.p,{children:["While ",(0,t.jsx)(n.a,{href:"https://rancher.com/",children:"Rancher"})," and ",(0,t.jsx)(n.a,{href:"https://rancherdesktop.io/",children:"Rancher Desktop"})," share the ",(0,t.jsx)(n.em,{children:"Rancher"})," name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop."]}),"\n",(0,t.jsxs)(n.p,{children:["This guide outlines steps to install Rancher Dashboard on Rancher Desktop using ",(0,t.jsx)(n.code,{children:"container runtime"})," or ",(0,t.jsx)(n.code,{children:"helm"})," (local environment):"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," You may encounter issues if the supporting utilities (ex: helm), or your workload versions are incompatible with the Kubernetes version in your session. As a potential fix, you can switch to a compatible Kubernetes version via the ",(0,t.jsx)(n.a,{href:"/1.8/ui/preferences/kubernetes",children:"Preferences > Kubernetes"})," dialog. Supported Kubernetes platforms for Rancher are available on the ",(0,t.jsx)(n.a,{href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-7-1/",children:"support matrix page"}),"."]}),"\n",(0,t.jsxs)(s.Z,{groupId:"container-runtime",children:[(0,t.jsx)(o.Z,{value:"nerdctl",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"nerdctl run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"})})}),(0,t.jsx)(o.Z,{value:"docker",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"docker run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"})})}),(0,t.jsxs)(o.Z,{value:"helm",default:!0,children:[(0,t.jsx)(n.p,{children:"1: Add Jetstack charts:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"helm repo add jetstack https://charts.jetstack.io\n"})}),(0,t.jsx)(n.p,{children:"2: Add latest Rancher charts:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"})}),(0,t.jsx)(n.p,{children:"3: Create cert-manager namespace:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl create namespace cert-manager\n"})}),(0,t.jsx)(n.p,{children:"4: Install cert-manager services:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.7.1 --set installCRDs=true\n"})}),(0,t.jsx)(n.p,{children:"5: Apply CRDs:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n"})}),(0,t.jsx)(n.p,{children:"6: Create cattle-system namespace:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl create namespace cattle-system\n"})}),(0,t.jsx)(n.p,{children:"7: Install Rancher application:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=rancher.rd.localhost --wait --timeout=10m\n"})})]})]}),"\n",(0,t.jsx)(n.p,{children:"The installation takes a few minutes to complete. After the installation, you can access the Rancher UI as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Installed through ",(0,t.jsx)(n.code,{children:"container runtime"}),": ",(0,t.jsx)(n.a,{href:"https://localhost:8443/",children:"https://localhost:8443/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Installed through ",(0,t.jsx)(n.code,{children:"helm"})," ",(0,t.jsx)(n.a,{href:"https://rancher.rd.localhost/",children:"https://rancher.rd.localhost/"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(24563).Z+"",width:"1189",height:"875"})}),"\n",(0,t.jsxs)(s.Z,{groupId:"container-runtime",children:[(0,t.jsxs)(o.Z,{value:"nerdctl",default:!0,children:[(0,t.jsx)(n.p,{children:"In order to access the Rancher UI, you need to get the Bootstrap Password:"}),(0,t.jsx)(n.p,{children:"1: Get Rancher UI container ID/Name:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"nerdctl ps\n"})}),(0,t.jsx)(n.p,{children:"2: Get the Bootstrap Password:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'nerdctl logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n'})}),(0,t.jsx)(n.p,{children:"3: Bootstrap Password example:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"})})]}),(0,t.jsxs)(o.Z,{value:"docker",default:!0,children:[(0,t.jsx)(n.p,{children:"In order to access the Rancher UI, you need to get the Bootstrap Password:"}),(0,t.jsx)(n.p,{children:"1: Get Rancher UI container ID/Name:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"docker ps\n"})}),(0,t.jsx)(n.p,{children:"2: Get the Bootstrap Password:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'docker logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n'})}),(0,t.jsx)(n.p,{children:"3: Bootstrap Password example:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Follow the wizard instructions and click on ",(0,t.jsx)(n.code,{children:"Continue"})," to land on the main Rancher UI page."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(72326).Z+"",width:"1589",height:"979"})}),"\n",(0,t.jsxs)(n.p,{children:["From the Rancher UI, you can manage your local cluster, node, and more. For more information, see ",(0,t.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/",children:"Rancher Docs"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:function(e,n,r){r.d(n,{Z:function(){return o}});r(67294);var t=r(36905),a={tabItem:"tabItem_Ymn6"},s=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return k}});var t=r(67294),a=r(36905),s=r(12466),o=r(16550),c=r(20469),l=r(91980),i=r(67392),u=r(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=d(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[i,h]=m({queryString:r,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=i??f;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=r(72389),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},j=r(85893);function b(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),a=c[r].value;a!==t&&(i(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:u,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function k(e){const n=(0,g.Z)();return(0,j.jsx)(w,{...e,children:h(e.children)},String(n))}},72326:function(e,n,r){n.Z=r.p+"assets/images/rancherUiMainPage-b53cd5a80ad0bacb7aa613f3ae7bd0b7.png"},24563:function(e,n,r){n.Z=r.p+"assets/images/rancherUiWelcomePage-21a9632bf47edafe852af976ed625bf1.png"},11151:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var t=r(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);