"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8950],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),k=o,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32006:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=r(83117),o=(r(67294),r(3905));const a={title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"},s=void 0,c={unversionedId:"how-to-guides/create-multi-node-cluster",id:"version-latest/how-to-guides/create-multi-node-cluster",title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",description:"Rancher Desktop \u652f\u6301\u5355\u8282\u70b9\u96c6\u7fa4\u8bbe\u7f6e\uff0c\u8fd9\u6ee1\u8db3\u5927\u591a\u6570\u672c\u5730\u5f00\u53d1\u573a\u666f\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u6216\u542f\u52a8\u591a\u4e2a\u96c6\u7fa4\u5e76\u7075\u6d3b\u5730\u5728\u96c6\u7fa4\u4e4b\u95f4\u5207\u6362\u3002\u5c3d\u7ba1 Rancher Desktop \u6ca1\u6709\u5185\u7f6e\u7684\u591a\u8282\u70b9/\u96c6\u7fa4\u529f\u80fd\uff0c\u4f46\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 k3d \u4e0e Rancher Desktop \u6765\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002k3d \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u5728 Docker \u4e2d\u8fd0\u884c k3s\uff08\u4e00\u4e2a\u6700\u5c0f\u5316\u7684 Kubernetes \u53d1\u884c\u7248\uff0cRancher Desktop \u4e5f\u4f7f\u7528\u5b83\uff09\u3002k3d \u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 Docker \u4e2d\u521b\u5efa\u5355\u8282\u70b9\u548c\u591a\u8282\u70b9 k3s \u96c6\u7fa4\uff08\u4f8b\u5982\u7528\u4e8e Kubernetes \u4e0a\u7684\u672c\u5730\u5f00\u53d1\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/how-to-guides/create-multi-node-cluster.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-multi-node-cluster",permalink:"/zh/how-to-guides/create-multi-node-cluster",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/create-multi-node-cluster.md",tags:[],version:"latest",frontMatter:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",permalink:"/zh/how-to-guides/transfer-container-images"},next:{title:"\u8bbe\u7f6e NGINX Ingress Controller",permalink:"/zh/how-to-guides/setup-NGINX-Ingress-Controller"}},i={},l=[{value:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4",id:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=u("Tabs"),d=u("TabItem"),k={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher Desktop \u652f\u6301",(0,o.kt)("strong",{parentName:"p"},"\u5355\u8282\u70b9\u96c6\u7fa4"),"\u8bbe\u7f6e\uff0c\u8fd9\u6ee1\u8db3\u5927\u591a\u6570\u672c\u5730\u5f00\u53d1\u573a\u666f\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u6216\u542f\u52a8\u591a\u4e2a\u96c6\u7fa4\u5e76\u7075\u6d3b\u5730\u5728\u96c6\u7fa4\u4e4b\u95f4\u5207\u6362\u3002\u5c3d\u7ba1 Rancher Desktop \u6ca1\u6709\u5185\u7f6e\u7684\u591a\u8282\u70b9/\u96c6\u7fa4\u529f\u80fd\uff0c\u4f46\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://k3d.io"},"k3d")," \u4e0e Rancher Desktop \u6765\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002k3d \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u5728 Docker \u4e2d\u8fd0\u884c k3s\uff08\u4e00\u4e2a\u6700\u5c0f\u5316\u7684 Kubernetes \u53d1\u884c\u7248\uff0cRancher Desktop \u4e5f\u4f7f\u7528\u5b83\uff09\u3002k3d \u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 Docker \u4e2d\u521b\u5efa\u5355\u8282\u70b9\u548c\u591a\u8282\u70b9 k3s \u96c6\u7fa4\uff08\u4f8b\u5982\u7528\u4e8e Kubernetes \u4e0a\u7684\u672c\u5730\u5f00\u53d1\uff09\u3002"),(0,o.kt)("h3",{id:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4"},"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u786e\u4fdd\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes Settings")," \u9875\u9762\u4e2d\u9009\u62e9\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"dockerd(moby)")," \u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b89\u88c5 k3d\u3002"))),(0,o.kt)(p,{groupId:"installation-approach",mdxType:"Tabs"},(0,o.kt)(d,{value:"wget",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n"))),(0,o.kt)(d,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"k3d cluster create")," \u547d\u4ee4\u6765\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u3002\u4f8b\u5982\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"k3d cluster create two-node-cluster --agents 2\nk3d cluster create three-node-cluster --agents 3\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"k3d \u5c06\u65b0\u521b\u5efa\u7684\u96c6\u7fa4\u8bbe\u7f6e\u4e3a active\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl config use-context")," \u547d\u4ee4\u6765\u5207\u6362\u96c6\u7fa4\u3002\u4f8b\u5982\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl config use-context k3d-two-node-cluster\n")),(0,o.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173 ",(0,o.kt)("strong",{parentName:"p"},"k3s")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"k3d")," \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u8fd9\u4e9b\u9879\u76ee\u7684\u6587\u6863\uff08",(0,o.kt)("a",{parentName:"p",href:"https://docs.k3s.io/"},"k3s \u6587\u6863")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d \u6587\u6863"),"\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u26a0\ufe0f \u8bf7\u6ce8\u610f\uff0c",(0,o.kt)("inlineCode",{parentName:"strong"},"k3d")," \u521b\u5efa\u7684\u96c6\u7fa4\u4e0d\u662f\u901a\u8fc7 Rancher Desktop GUI \u7ba1\u7406\u7684\u3002")))}m.isMDXComponent=!0}}]);