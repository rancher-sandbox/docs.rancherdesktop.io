"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2726],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93687:function(e,t,a){var n=a(10412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},82820:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(83117),r=(a(67294),a(3905)),l=a(93687);const o={sidebar_label:"\u6269\u5c55",title:"\u6269\u5c55"},i=void 0,s={unversionedId:"ui/extensions",id:"version-1.11/ui/extensions",title:"\u6269\u5c55",description:"Catalog",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.11/ui/extensions.md",sourceDirName:"ui",slug:"/ui/extensions",permalink:"/zh/1.11/ui/extensions",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/ui/extensions.md",tags:[],version:"1.11",frontMatter:{sidebar_label:"\u6269\u5c55",title:"\u6269\u5c55"},sidebar:"tutorialSidebar",previous:{title:"\u8bca\u65ad",permalink:"/zh/1.11/ui/diagnostics"},next:{title:"\u901a\u7528",permalink:"/zh/1.11/ui/preferences/application/general"}},u={},c=[{value:"Catalog",id:"catalog",level:3},{value:"\u641c\u7d22",id:"\u641c\u7d22",level:4},{value:"Installed",id:"installed",level:3},{value:"Name",id:"name",level:4}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("Tabs"),m=p("TabItem"),v={toc:c};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"catalog"},"Catalog"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\u662f Rancher Desktop \u7684\u6269\u5c55\u5e02\u573a\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb\u6269\u5c55\u6765\u83b7\u5f97\u66f4\u591a\u4fe1\u606f\uff0c\u5e76\u76f4\u63a5\u4f7f\u7528 UI \u5b89\u88c5\u6269\u5c55\u3002"),(0,r.kt)(d,{groupId:"os",defaultValue:l.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(m,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Windows_Extensions.png",alt:null}))),(0,r.kt)(m,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/macOS_Extensions.png",alt:null}))),(0,r.kt)(m,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Linux_Extensions.png",alt:null})))),(0,r.kt)("h4",{id:"\u641c\u7d22"},"\u641c\u7d22"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u641c\u7d22"),"\u529f\u80fd\u6765\u67e5\u8be2\u53ef\u7528\u7684\u6269\u5c55\u3002"),(0,r.kt)("h3",{id:"installed"},"Installed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u5217\u51fa\u4e86 Rancher Desktop \u4e0a\u6240\u6709\u5df2\u5b89\u88c5\u6269\u5c55\u3002"),(0,r.kt)(d,{groupId:"os",defaultValue:l.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(m,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Windows_Extensions-Installed.png",alt:null}))),(0,r.kt)(m,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/macOS_Extensions-Installed.png",alt:null}))),(0,r.kt)(m,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Linux_Extensions-Installed.png",alt:null})))),(0,r.kt)("h4",{id:"name"},"Name"),(0,r.kt)("p",null,"\u5df2\u5b89\u88c5\u6269\u5c55\u7684\u540d\u79f0\u5217\u8868\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb\u53f3\u4fa7\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Remove")," \u6309\u94ae\u76f4\u63a5\u5378\u8f7d\u6269\u5c55\u3002"))}f.isMDXComponent=!0}}]);