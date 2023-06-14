"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7483],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macOS":i?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(3117),r=n(7294),i=n(4334),l=n(2466),o=n(6775),u=n(1980),s=n(7392),c=n(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,s]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=u??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,i]),tabValues:i}}var v=n(2389),h="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==o&&(p(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},2171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),i=n(4866),l=n(5162);n(3687);const o={sidebar_label:"Environment",title:"Environment"},u=void 0,s={unversionedId:"ui/preferences/application/environment",id:"version-1.9/ui/preferences/application/environment",title:"Environment",description:"Allows for configuration of the $PATH variable in the users shell in order to interact with Rancher Desktop installed utilities.",source:"@site/versioned_docs/version-1.9/ui/preferences/application/environment.md",sourceDirName:"ui/preferences/application",slug:"/ui/preferences/application/environment",permalink:"/1.9/ui/preferences/application/environment",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/preferences/application/environment.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"Environment",title:"Environment"},sidebar:"tutorialSidebar",previous:{title:"Behavior",permalink:"/1.9/ui/preferences/application/behavior"},next:{title:"Emulation",permalink:"/1.9/ui/preferences/virtual-machine/emulation"}},c={},p=[{value:"Configure PATH",id:"configure-path",level:4},{value:"Configure PATH",id:"configure-path-1",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Allows for configuration of the ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," variable in the users shell in order to interact with Rancher Desktop installed utilities."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_application_tabEnvironment.png",alt:null})),(0,r.kt)("h4",{id:"configure-path"},"Configure PATH"),(0,r.kt)("p",null,"A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),". These utilities are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," - you may see which utilities are included in your installation by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin"),"."),(0,r.kt)("p",null,"In order to use the utilities, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," must be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," variable in your shell."),(0,r.kt)("p",null,"There are two options for doing this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," management will add ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," by modifying your shell .rc files for you."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manual"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," management does not change anything - in this mode, you must add ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," yourself."))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_application_tabEnvironment.png",alt:null})),(0,r.kt)("h4",{id:"configure-path-1"},"Configure PATH"),(0,r.kt)("p",null,"A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),". These utilities are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," - you may see which utilities are included in your installation by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin"),"."),(0,r.kt)("p",null,"In order to use the utilities, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," must be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," variable in your shell."),(0,r.kt)("p",null,"There are two options for doing this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," management will add ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," by modifying your shell .rc files for you."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manual"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," management does not change anything - in this mode, you must add ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," yourself.")))))}m.isMDXComponent=!0}}]);