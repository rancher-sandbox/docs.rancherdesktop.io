"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6039],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=l?"ios":"android",o=l?"macOS":r?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(4334),r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(3117),l=n(7294),r=n(4334),i=n(2466),o=n(6775),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=k({queryString:n,groupId:a}),[c,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var g=n(2389),h="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=v(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h)},l.createElement(b,(0,a.Z)({},e,t)),l.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return l.createElement(w,(0,a.Z)({key:String(t)},e))}},4548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),l=(n(7294),n(3905)),r=n(4866),i=n(5162),o=n(3687);const s={title:"\u5b89\u88c5\u548c\u5378\u8f7d Rancher Desktop \u6269\u5c55"},u=void 0,p={unversionedId:"how-to-guides/installing-uninstalling-extensions",id:"version-latest/how-to-guides/installing-uninstalling-extensions",title:"\u5b89\u88c5\u548c\u5378\u8f7d Rancher Desktop \u6269\u5c55",description:"v1.9.0-tech-preview \u7248\u672c\u5f15\u5165\u4e86 Extension \u529f\u80fd\uff0c\u8ba9\u4f60\u80fd\u591f\u5728 Rancher Desktop \u4e2d\u4f7f\u7528 Docker Desktop \u6269\u5c55\u3002\u6709\u4e86\u8be5\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55 Rancher Desktop \u7684\u529f\u80fd\u6765\u6ee1\u8db3\u989d\u5916\u7684\u9700\u6c42\u3002\u672c\u6307\u5357\u5c06\u6f14\u793a\u5982\u4f55\u5728 Rancher Desktop \u4e2d\u5b89\u88c5\u548c\u5378\u8f7d Docker \u6269\u5c55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/how-to-guides/installing-uninstalling-extensions.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/installing-uninstalling-extensions",permalink:"/zh/how-to-guides/installing-uninstalling-extensions",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/installing-uninstalling-extensions.md",tags:[],version:"latest",frontMatter:{title:"\u5b89\u88c5\u548c\u5378\u8f7d Rancher Desktop \u6269\u5c55"},sidebar:"tutorialSidebar",previous:{title:"Hello World \u793a\u4f8b",permalink:"/zh/how-to-guides/hello-world-example"},next:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",permalink:"/zh/how-to-guides/transfer-container-images"}},c={},d=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u5b89\u88c5\u6269\u5c55",id:"\u5b89\u88c5\u6269\u5c55",level:3},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c",level:4},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-1",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-1",level:4},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-2",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-2",level:4},{value:"\u5378\u8f7d\u6269\u5c55",id:"\u5378\u8f7d\u6269\u5c55",level:3},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-3",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-3",level:4},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-4",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-4",level:4},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-5",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-5",level:4}],m={toc:d};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u5f15\u5165\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"Extension")," \u529f\u80fd\uff0c\u8ba9\u4f60\u80fd\u591f\u5728 Rancher Desktop \u4e2d\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Docker Desktop \u6269\u5c55"),"\u3002\u6709\u4e86\u8be5\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55 Rancher Desktop \u7684\u529f\u80fd\u6765\u6ee1\u8db3\u989d\u5916\u7684\u9700\u6c42\u3002\u672c\u6307\u5357\u5c06\u6f14\u793a\u5982\u4f55\u5728 Rancher Desktop \u4e2d\u5b89\u88c5\u548c\u5378\u8f7d Docker \u6269\u5c55\u3002"),(0,l.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,l.kt)("p",null,"Rancher Desktop \u6269\u5c55\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u6216\u66f4\u9ad8\u7248\u672c\u4e2d\u63d0\u4f9b\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u6269\u5c55"},"\u5b89\u88c5\u6269\u5c55"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u5b89\u88c5\u6269\u5c55\uff1a\u4f7f\u7528 UI \u6216\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl extension install")," \u547d\u4ee4\u3002"),(0,l.kt)(r.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui"},"\u4f7f\u7528 UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"li"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"li"},"Catalog")," \u9009\u9879\u5361\u3002\u4f60\u53ef\u4ee5\u5728\u6b64\u5904\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Windows_Extensions.png",alt:null})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u4f7f\u7528\u7684\u6269\u5c55\u7a0b\u5e8f\uff0c\u5355\u51fb\u8be5\u6269\u5c55\u6253\u5f00 ",(0,l.kt)("strong",{parentName:"li"},"Detail")," \u89c6\u56fe\uff0c\u7136\u540e\u5355\u51fb\u53f3\u4fa7\u7684 ",(0,l.kt)("strong",{parentName:"li"},"Install")," \u6309\u94ae\uff0c\u5982\u4e0b\u6240\u793a\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Windows_Extensions-Details.png",alt:null})),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5b89\u88c5\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>:<tag>\n"))),(0,l.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-1"},"\u4f7f\u7528 UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"li"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"li"},"Catalog")," \u9009\u9879\u5361\u3002\u4f60\u53ef\u4ee5\u5728\u6b64\u5904\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/macOS_ExtensionsCatalog.png",alt:null})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u4f7f\u7528\u7684\u6269\u5c55\u7a0b\u5e8f\uff0c\u5355\u51fb\u8be5\u6269\u5c55\u6253\u5f00 ",(0,l.kt)("strong",{parentName:"li"},"Detail")," \u89c6\u56fe\uff0c\u7136\u540e\u5355\u51fb\u53f3\u4fa7\u7684 ",(0,l.kt)("strong",{parentName:"li"},"Install")," \u6309\u94ae\uff0c\u5982\u4e0b\u6240\u793a\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/macOS_ExtensionsDetails.png",alt:null})),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-1"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5b89\u88c5\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>:<tag>\n"))),(0,l.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-2"},"\u4f7f\u7528 UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"li"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"li"},"Catalog")," \u9009\u9879\u5361\u3002\u4f60\u53ef\u4ee5\u5728\u6b64\u5904\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Linux_Extensions.png",alt:null})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u4f7f\u7528\u7684\u6269\u5c55\u7a0b\u5e8f\uff0c\u5355\u51fb\u8be5\u6269\u5c55\u6253\u5f00 ",(0,l.kt)("strong",{parentName:"li"},"Detail")," \u89c6\u56fe\uff0c\u7136\u540e\u5355\u51fb\u53f3\u4fa7\u7684 ",(0,l.kt)("strong",{parentName:"li"},"Install")," \u6309\u94ae\uff0c\u5982\u4e0b\u6240\u793a\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Linux_Extensions-Details.png",alt:null})),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-2"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5b89\u88c5\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>:<tag>\n")))),(0,l.kt)("h3",{id:"\u5378\u8f7d\u6269\u5c55"},"\u5378\u8f7d\u6269\u5c55"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u5378\u8f7d\u6269\u5c55\uff1a\u4f7f\u7528 UI \u6216\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl extension uninstall")," \u547d\u4ee4\u3002"),(0,l.kt)(r.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-3"},"\u4f7f\u7528 UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u4e0b\uff0c\u5355\u51fb\u53f3\u4fa7\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Uninstall")," \u6309\u94ae\u6765\u5378\u8f7d\u6269\u5c55\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Windows_Extensions-Installed.png",alt:null})),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-3"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5378\u8f7d\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>:<tag>\n"))),(0,l.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-4"},"\u4f7f\u7528 UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u4e0b\uff0c\u5355\u51fb\u53f3\u4fa7\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Uninstall")," \u6309\u94ae\u6765\u5378\u8f7d\u6269\u5c55\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/macOS_ExtensionsInstalled.png",alt:null})),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-4"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5378\u8f7d\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>:<tag>\n"))),(0,l.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-5"},"\u4f7f\u7528 UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u4e0b\uff0c\u5355\u51fb\u53f3\u4fa7\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Uninstall")," \u6309\u94ae\u6765\u5378\u8f7d\u6269\u5c55\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/1.9-tech-preview/how-to/Linux_Extensions-Installed.png",alt:null})),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-5"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5378\u8f7d\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>:<tag>\n")))))}k.isMDXComponent=!0}}]);