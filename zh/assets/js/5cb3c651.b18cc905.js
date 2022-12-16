"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7914],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),o=n(4334),l=n(2389),i=n(7392),u=n(7094),c=n(2466),s="tabList__CuJ",p="tabItem_LNqP";function f(e){var t;const{lazy:n,block:l,defaultValue:f,values:d,groupId:m,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===f?f:f??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,u.U)(),[O,E]=(0,a.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==O&&h.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==O&&(S(t),E(r),null!=m&&k(m,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>x.push(e),onKeyDown:j,onClick:T},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},8528:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));n(5488),n(5162);const o={sidebar_label:"WSL",title:"WSL (Windows)"},l=void 0,i={unversionedId:"ui/preferences/wsl",id:"ui/preferences/wsl",title:"WSL (Windows)",description:"\u8be5\u9009\u9879\u4f7f Rancher Desktop Kubernetes \u914d\u7f6e\u80fd\u591f\u88ab\u4efb\u4f55 WSL \u914d\u7f6e\u7684 Linux \u53d1\u884c\u7248\u6240\u8bbf\u95ee\u3002\u4e00\u65e6\u542f\u7528\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 WSL \u53d1\u884c\u7248\u4e2d\u7684 kubectl \u7b49\u5de5\u5177\u4e0e Rancher Desktop Kubernetes \u96c6\u7fa4\u8fdb\u884c\u901a\u4fe1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ui/preferences/wsl.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/wsl",permalink:"/zh/next/ui/preferences/wsl",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/wsl.md",tags:[],version:"current",frontMatter:{sidebar_label:"WSL",title:"WSL (Windows)"},sidebar:"tutorialSidebar",previous:{title:"\u865a\u62df\u673a",permalink:"/zh/next/ui/preferences/virtual-machine"},next:{title:"\u5bb9\u5668\u5f15\u64ce",permalink:"/zh/next/ui/preferences/container-engine"}},u={},c=[],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8be5\u9009\u9879\u4f7f Rancher Desktop Kubernetes \u914d\u7f6e\u80fd\u591f\u88ab\u4efb\u4f55 WSL \u914d\u7f6e\u7684 Linux \u53d1\u884c\u7248\u6240\u8bbf\u95ee\u3002\u4e00\u65e6\u542f\u7528\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 WSL \u53d1\u884c\u7248\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7b49\u5de5\u5177\u4e0e Rancher Desktop Kubernetes \u96c6\u7fa4\u8fdb\u884c\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"WSL \u8ba9\u4f60\u5728\u6240\u6709 Linux \u53d1\u884c\u7248\u4e2d\u5168\u5c40\u914d\u7f6e\u5185\u5b58\u548c CPU \u5206\u914d\u3002\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig"},"WSL \u6587\u6863"),"\u4e2d\u7684\u8bf4\u660e\u3002"))}p.isMDXComponent=!0}}]);