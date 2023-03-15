"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9264],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return I}});var n=r(3117),a=r(7294),o=r(4334),l=r(2466),u=r(6775),s=r(1980),i=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,i]=f({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),g(e)}),[i,g,o]),tabValues:o}}var b=r(2389),h="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==u&&(p(t),s(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function I(e){const t=(0,b.Z)();return a.createElement(N,(0,n.Z)({key:String(t)},e))}},9124:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const u={title:"\u8bbe\u7f6e NGINX Ingress Controller"},s=void 0,i={unversionedId:"how-to-guides/setup-NGINX-Ingress-Controller",id:"how-to-guides/setup-NGINX-Ingress-Controller",title:"\u8bbe\u7f6e NGINX Ingress Controller",description:"Rancher Desktop \u5728\u540e\u53f0\u4f7f\u7528 K3s\uff0c\u800c K3s \u53c8\u4f7f\u7528 Traefik \u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u9ed8\u8ba4 Ingress Controller\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u7528\u4f8b\u53ef\u80fd\u9700\u8981\u6216\u66f4\u9002\u5408\u4f7f\u7528 NGINX\u3002\u4ee5\u4e0b\u793a\u4f8b\u6b65\u9aa4\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 NGINX Ingress Controller \u8fdb\u884c\u90e8\u7f72\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/setup-NGINX-Ingress-Controller.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/setup-NGINX-Ingress-Controller",permalink:"/zh/next/how-to-guides/setup-NGINX-Ingress-Controller",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/setup-NGINX-Ingress-Controller.md",tags:[],version:"current",frontMatter:{title:"\u8bbe\u7f6e NGINX Ingress Controller"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",permalink:"/zh/next/how-to-guides/create-multi-node-cluster"},next:{title:"\u4f7f\u7528 VS Code Docker \u6269\u5c55\u6765\u8c03\u8bd5\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f",permalink:"/zh/next/how-to-guides/vs-code-docker"}},c={},p=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher Desktop \u5728\u540e\u53f0\u4f7f\u7528 K3s\uff0c\u800c K3s \u53c8\u4f7f\u7528 Traefik \u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u9ed8\u8ba4 Ingress Controller\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u7528\u4f8b\u53ef\u80fd\u9700\u8981\u6216\u66f4\u9002\u5408\u4f7f\u7528 NGINX\u3002\u4ee5\u4e0b\u793a\u4f8b\u6b65\u9aa4\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 NGINX Ingress Controller \u8fdb\u884c\u90e8\u7f72\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes Settings")," \u9875\u9762\u53d6\u6d88\u9009\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Traefik")," \u6765\u7981\u7528 Traefik\u3002\u4f60\u53ef\u80fd\u9700\u8981\u9000\u51fa\u5e76\u91cd\u65b0\u542f\u52a8 Rancher Desktop \u624d\u80fd\u4f7f\u66f4\u6539\u751f\u6548\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u90e8\u7f72 NGINX Ingress Controller\uff1a"))),(0,a.kt)(o.Z,{groupId:"deployment-approach",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"helm",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm upgrade --install ingress-nginx ingress-nginx \\\n  --repo https://kubernetes.github.io/ingress-nginx \\\n  --namespace ingress-nginx --create-namespace\n"))),(0,a.kt)(l.Z,{value:"kubectl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml\n")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u7b49\u5f85 ingress pod \u8fd0\u884c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get pods --namespace=ingress-nginx\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u793a\u4f8b deployment \u548c\u5173\u8054\u7684 service\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create deployment demo --image=nginx --port=80\nkubectl expose deployment demo\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa ingress \u8d44\u6e90\u3002\u4ee5\u4e0b\u547d\u4ee4\u4f7f\u7528\u4e86\u6620\u5c04\u5230 localhost \u7684\u4e3b\u673a\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl create ingress demo-localhost --class=nginx --rule="demo.localdev.me/*=demo:80"\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u5c06\u672c\u5730\u7aef\u53e3\u8f6c\u53d1\u5230 Ingress Controller\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u4f60\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://demo.localdev.me:8080/"},"http://demo.localdev.me:8080/")," \uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230 NGINX \u7684\u6b22\u8fce\u9875\u9762\u3002"))}m.isMDXComponent=!0}}]);