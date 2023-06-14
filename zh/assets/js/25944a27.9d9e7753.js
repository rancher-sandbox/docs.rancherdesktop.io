"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5694],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(3117),a=n(7294),l=n(4334),o=n(2466),u=n(6775),i=n(1980),c=n(7392),s=n(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=k({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var b=n(2389),g="tabList__CuJ",v="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==u&&(p(t),i(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},8406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905)),l=n(4866),o=n(5162);const u={title:"\u4f7f\u7528\u955c\u50cf"},i=void 0,c={unversionedId:"tutorials/working-with-images",id:"version-1.9/tutorials/working-with-images",title:"\u4f7f\u7528\u955c\u50cf",description:"Rancher Desktop \u901a\u8fc7 NERDCTL \u9879\u76ee\u548c Docker CLI \u6765\u63d0\u4f9b\u6784\u5efa\uff0c\u63a8\u9001\u548c\u62c9\u53d6\u955c\u50cf\u7684\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/tutorials/working-with-images.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-images",permalink:"/zh/1.9/tutorials/working-with-images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/tutorials/working-with-images.md",tags:[],version:"1.9",frontMatter:{title:"\u4f7f\u7528\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/zh/1.9/ui/preferences/kubernetes"},next:{title:"\u4f7f\u7528\u5bb9\u5668",permalink:"/zh/1.9/tutorials/working-with-containers"}},s={},p=[{value:"\u5e38\u89c4\u7528\u6cd5",id:"\u5e38\u89c4\u7528\u6cd5",level:2},{value:"\u5217\u51fa\u955c\u50cf",id:"\u5217\u51fa\u955c\u50cf",level:2},{value:"\u6784\u5efa\u955c\u50cf",id:"\u6784\u5efa\u955c\u50cf",level:2},{value:"\u6784\u5efa\u672c\u5730\u955c\u50cf",id:"\u6784\u5efa\u672c\u5730\u955c\u50cf",level:3},{value:"\u6807\u8bb0\u955c\u50cf",id:"\u6807\u8bb0\u955c\u50cf",level:2},{value:"\u5220\u9664\u955c\u50cf",id:"\u5220\u9664\u955c\u50cf",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher Desktop \u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"NERDCTL")," \u9879\u76ee\u548c Docker CLI \u6765\u63d0\u4f9b\u6784\u5efa\uff0c\u63a8\u9001\u548c\u62c9\u53d6\u955c\u50cf\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u90fd\u4f1a\u81ea\u52a8\u653e\u5165\u8def\u5f84\u4e2d\u3002\u5728 Windows \u4e0a\uff0c\u8fd9\u53d1\u751f\u5728\u5b89\u88c5\u7a0b\u5e8f\u671f\u95f4\uff0c\u800c\u5728 macOS \u548c Linux \u4e0a\uff0c\u8fd9\u53d1\u751f\u5728\u9996\u6b21\u8fd0\u884c\u7684\u65f6\u5019\u3002"),(0,a.kt)("h2",{id:"\u5e38\u89c4\u7528\u6cd5"},"\u5e38\u89c4\u7528\u6cd5"),(0,a.kt)("p",null,"\u4f7f\u7528\u4efb\u4f55\u4e00\u79cd\u5de5\u5177\u90fd\u9700\u8981 Rancher Desktop \u4e0e\u9002\u5f53\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u4e00\u8d77\u8fd0\u884c\u3002\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\uff0c\u4f7f\u7528 containerd \u8fd0\u884c\u65f6\u3002\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\uff0c\u4f7f\u7528 Moby \u8fd0\u884c\u65f6\u3002"),(0,a.kt)("p",null,"\u8981\u4e86\u89e3\u6240\u6709\u547d\u4ee4\u9009\u9879\u5e76\u663e\u793a\u5e2e\u52a9\u6587\u6863\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl -h\n")),(0,a.kt)("p",null,"\u4e0e Docker \u4e0d\u540c\uff0ccontainerd \u5177\u6709\u81ea\u5df1\u7684\u547d\u540d\u7a7a\u95f4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cnerdctl \u955c\u50cf\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002\u5982\u679c\u4f60\u5e0c\u671b\u4f60\u7684\u955c\u50cf\u53ef\u4f9b Kubernetes \u4f7f\u7528\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--namespace k8s.io")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"-n k8s.io")," CLI \u53c2\u6570\u3002\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--namespace <NAMESPACE_NAME>")," \u9009\u9879\u6765\u5207\u6362\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," \u6216\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u3002\u8bf7\u6ce8\u610f\uff0cnerdctl \u547d\u540d\u7a7a\u95f4\u72ec\u7acb\u4e8e Kubernetes \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u540d\u7a7a\u95f4\u3002")),(0,a.kt)(o.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker --help\n")))),(0,a.kt)("h2",{id:"\u5217\u51fa\u955c\u50cf"},"\u5217\u51fa\u955c\u50cf"),(0,a.kt)("p",null,"\u8981\u67e5\u770b\u5f53\u524d\u53ef\u7528\u7684\u955c\u50cf\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl images\n"))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker images\n")))),(0,a.kt)("h2",{id:"\u6784\u5efa\u955c\u50cf"},"\u6784\u5efa\u955c\u50cf"),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"\u6784\u5efa\u955c\u50cf\u4e0e\u73b0\u6709\u5de5\u5177\u7684\u64cd\u4f5c\u76f8\u4f3c\u3002\u4f60\u53ef\u4ee5\u5728\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u4f7f\u7528\u4e86\u4e00\u4e2a scratch \u955c\u50cf\uff09\u7684\u8def\u5f84\u4e0a\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build .\n[+] Building 0.1s (4/4) FINISHED\n => [internal] load build definition from Dockerfile\n => => transferring dockerfile: 31B\n => [internal] load .dockerignore\n => => transferring context: 2B\n => [internal] load build context\n => => transferring context: 33B\n => CACHED [1/1] ADD anvil-app /\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," \u5177\u6709\u5728\u6784\u5efa\u65f6\u8fdb\u884c\u6807\u8bb0\u7684\u9009\u9879\u4ee5\u53ca\u4e00\u4e9b\u5176\u4ed6\u9009\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build -t TAG .\n")),(0,a.kt)("p",null,"\u8981\u6784\u5efa\u7528\u4e8e Kubernetes \u7684\u955c\u50cf\uff0c\u8bf7\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.io")," \u547d\u540d\u7a7a\u95f4\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl build -n k8s.io .\n"))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u4f7f\u7528\u4e86\u4e00\u4e2a scratch \u955c\u50cf\uff09\u7684\u8def\u5f84\u4e0a\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker build .\nSending build context to Docker daemon  13.93MB\nStep 1/5 : FROM some-repo/some-image\n ---\x3e e57ace221dff\n...\n ---\x3e fd984c4cbf97\nSuccessfully built fd984c4cbf97\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u5177\u6709\u5728\u6784\u5efa\u65f6\u8fdb\u884c\u6807\u8bb0\u7684\u9009\u9879\u4ee5\u53ca\u4e00\u4e9b\u5176\u4ed6\u9009\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker build -t TAG .\n")))),(0,a.kt)("h3",{id:"\u6784\u5efa\u672c\u5730\u955c\u50cf"},"\u6784\u5efa\u672c\u5730\u955c\u50cf"),(0,a.kt)("p",null,"\u4e3a\u4e86\u6f14\u793a\u6784\u5efa\u672c\u5730\u955c\u50cf\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u6b65\u9aa4\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git"},"Rancher Desktop \u7684 docs \u4ed3\u5e93"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u793a\u4f8b nodejs \u5e94\u7528\u7a0b\u5e8f\u3002\u9996\u5148\uff0c\u514b\u9686\u4ed3\u5e93\u5e76 cd \u5230\u7ec8\u7aef\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/express-sample")," \u4e2d\u3002"),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u4f7f\u7528 Dockerfile \u6784\u5efa\u955c\u50cf\uff1a"),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build -t expressapp:v1.0 .\n"))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t expressapp:v1.0 .\n")))),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u8fd0\u884c\u5bb9\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run --image expressapp:v1.0 expressapp\nkubectl port-forward pods/expressapp 3000:3000\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," \u6807\u7b7e\u65f6\uff0c\u8bf7\u52a1\u5fc5\u540c\u65f6\u6307\u5b9a\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"imagePullPolicy: Never\n")),(0,a.kt)("h2",{id:"\u6807\u8bb0\u955c\u50cf"},"\u6807\u8bb0\u955c\u50cf"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u6807\u8bb0\u5df2\u6784\u5efa\u7684\u73b0\u6709\u955c\u50cf\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n"))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]\n")))),(0,a.kt)("h2",{id:"\u5220\u9664\u955c\u50cf"},"\u5220\u9664\u955c\u50cf"),(0,a.kt)("p",null,"\u8981\u5220\u9664\u955c\u50cf\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl rmi IMAGE\n"))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker rmi IMAGE\n")))))}m.isMDXComponent=!0}}]);