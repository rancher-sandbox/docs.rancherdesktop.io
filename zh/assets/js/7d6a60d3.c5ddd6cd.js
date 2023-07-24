"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7777],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93687:function(e,t,a){var n=a(10412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(34334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return O}});var n=a(83117),r=a(67294),l=a(34334),i=a(12466),o=a(76775),u=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=m({queryString:a,groupId:n}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=u??p;return f({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),v(e)}),[s,v,l]),tabValues:l}}var b=a(72389),h="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(p(t),u(n))},f=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},i,{className:(0,l.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function O(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},803:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=a(83117),r=(a(67294),a(3905)),l=a(74866),i=a(85162),o=a(93687);const u={sidebar_label:"\u901a\u7528",title:"\u901a\u7528"},s=void 0,c={unversionedId:"ui/preferences/application/general",id:"version-latest/ui/preferences/application/general",title:"\u901a\u7528",description:"\u5141\u8bb8\u542f\u7528\u81ea\u52a8\u66f4\u65b0\uff0c\u4ee5\u53ca\u63d0\u4f9b\u53ef\u9009\u5b57\u6bb5\u6765\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u533f\u540d\u7edf\u8ba1\u6570\u636e\u4ee5\u6539\u8fdb\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/ui/preferences/application/general.md",sourceDirName:"ui/preferences/application",slug:"/ui/preferences/application/general",permalink:"/zh/ui/preferences/application/general",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/preferences/application/general.md",tags:[],version:"latest",frontMatter:{sidebar_label:"\u901a\u7528",title:"\u901a\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u6269\u5c55",permalink:"/zh/ui/extensions"},next:{title:"\u884c\u4e3a",permalink:"/zh/ui/preferences/application/behavior"}},p={},d=[{value:"Automatic Updates",id:"automatic-updates",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Administrative Access",id:"administrative-access",level:4},{value:"Automatic Updates",id:"automatic-updates-1",level:4},{value:"Statistics",id:"statistics-1",level:4},{value:"Administrative Access",id:"administrative-access-1",level:4},{value:"Automatic Updates",id:"automatic-updates-2",level:4},{value:"Statistics",id:"statistics-2",level:4}],f={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5141\u8bb8\u542f\u7528\u81ea\u52a8\u66f4\u65b0\uff0c\u4ee5\u53ca\u63d0\u4f9b\u53ef\u9009\u5b57\u6bb5\u6765\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u533f\u540d\u7edf\u8ba1\u6570\u636e\u4ee5\u6539\u8fdb\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Windows_application_tabGeneral.png",alt:null})),(0,r.kt)("h4",{id:"automatic-updates"},"Automatic Updates"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,r.kt)("h4",{id:"statistics"},"Statistics"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002")),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_application_tabGeneral.png",alt:null})),(0,r.kt)("h4",{id:"administrative-access"},"Administrative Access"),(0,r.kt)("p",null,"\u5141\u8bb8 Rancher Desktop \u5728\u542f\u52a8\u67d0\u4e9b\u64cd\u4f5c\u65f6\u83b7\u5f97\u7ba1\u7406\u8bbf\u95ee\u6743\u9650\uff08sudo \u6743\u9650\uff09\u3002\u8fd9\u80fd\u7528\u4e8e\u589e\u5f3a\u529f\u80fd\uff0c\u5305\u62ec\u6865\u63a5\u7f51\u7edc\u548c\u9ed8\u8ba4 docker socket \u652f\u6301\u3002\u66f4\u6539\u4f1a\u5728 Rancher Desktop \u4e0b\u6b21\u542f\u52a8\u65f6\u5e94\u7528\u3002"),(0,r.kt)("h4",{id:"automatic-updates-1"},"Automatic Updates"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,r.kt)("h4",{id:"statistics-1"},"Statistics"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002")),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_application_tabGeneral.png",alt:null})),(0,r.kt)("h4",{id:"administrative-access-1"},"Administrative Access"),(0,r.kt)("p",null,"\u5141\u8bb8 Rancher Desktop \u5728\u542f\u52a8\u67d0\u4e9b\u64cd\u4f5c\u65f6\u83b7\u5f97\u7ba1\u7406\u8bbf\u95ee\u6743\u9650\uff08sudo \u6743\u9650\uff09\u3002\u8fd9\u80fd\u7528\u4e8e\u589e\u5f3a\u529f\u80fd\uff0c\u5305\u62ec\u6865\u63a5\u7f51\u7edc\u548c\u9ed8\u8ba4 docker socket \u652f\u6301\u3002\u66f4\u6539\u4f1a\u5728 Rancher Desktop \u4e0b\u6b21\u542f\u52a8\u65f6\u5e94\u7528\u3002"),(0,r.kt)("h4",{id:"automatic-updates-2"},"Automatic Updates"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,r.kt)("h4",{id:"statistics-2"},"Statistics"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002"))))}m.isMDXComponent=!0}}]);