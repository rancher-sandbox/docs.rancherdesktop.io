"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3715],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},57727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var a=n(83117),r=(n(67294),n(3905));n(93687);const l={sidebar_label:"\u5141\u8bb8\u7684\u955c\u50cf",title:"\u5141\u8bb8\u7684\u955c\u50cf"},i=void 0,o={unversionedId:"ui/preferences/container-engine/allowed-images",id:"version-latest/ui/preferences/container-engine/allowed-images",title:"\u5141\u8bb8\u7684\u955c\u50cf",description:"Allowed Images \u9009\u9879\u5361\u7528\u4e8e\u63a7\u5236\u53ef\u4ee5\u5728 Rancher Desktop \u4e2d\u8bbf\u95ee\u7684\u955c\u50cf\u4ed3\u5e93\u5de5\u4ef6\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u80fd\u53ea\u60f3\u4ece\u7ec4\u7ec7\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u6216\u4ec5\u4ece\u7ec4\u7ec7\u955c\u50cf\u4ed3\u5e93\u4e2d\u7279\u5b9a\u90e8\u95e8\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u62c9\u53d6\u5bb9\u5668\u955c\u50cf\u3002\u4f60\u53ef\u4ee5\u6307\u5b9a\u955c\u50cf\u540d\u79f0\u6a21\u5f0f\uff0c\u4ece\u800c\u4ec5\u5141\u8bb8\u8bbf\u95ee\u7279\u5b9a\u955c\u50cf\u4ed3\u5e93\u548c/\u6216\u4ed3\u5e93\u7684\u955c\u50cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/ui/preferences/container-engine/allowed-images.md",sourceDirName:"ui/preferences/container-engine",slug:"/ui/preferences/container-engine/allowed-images",permalink:"/zh/ui/preferences/container-engine/allowed-images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/preferences/container-engine/allowed-images.md",tags:[],version:"latest",frontMatter:{sidebar_label:"\u5141\u8bb8\u7684\u955c\u50cf",title:"\u5141\u8bb8\u7684\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528",permalink:"/zh/ui/preferences/container-engine/general"},next:{title:"Kubernetes",permalink:"/zh/ui/preferences/kubernetes"}},p={},s=[{value:"Allowed image patterns",id:"allowed-image-patterns",level:4},{value:"\u5982\u4f55\u6307\u5b9a Allowed Image Patterns",id:"\u5982\u4f55\u6307\u5b9a-allowed-image-patterns",level:5},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=d("Tabs"),c=d("TabItem"),m={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Allowed Images")," \u9009\u9879\u5361\u7528\u4e8e\u63a7\u5236\u53ef\u4ee5\u5728 Rancher Desktop \u4e2d\u8bbf\u95ee\u7684\u955c\u50cf\u4ed3\u5e93\u5de5\u4ef6\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u80fd\u53ea\u60f3\u4ece\u7ec4\u7ec7\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u6216\u4ec5\u4ece\u7ec4\u7ec7\u955c\u50cf\u4ed3\u5e93\u4e2d\u7279\u5b9a\u90e8\u95e8\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u62c9\u53d6\u5bb9\u5668\u955c\u50cf\u3002\u4f60\u53ef\u4ee5\u6307\u5b9a\u955c\u50cf\u540d\u79f0\u6a21\u5f0f\uff0c\u4ece\u800c\u4ec5\u5141\u8bb8\u8bbf\u95ee\u7279\u5b9a\u955c\u50cf\u4ed3\u5e93\u548c/\u6216\u4ed3\u5e93\u7684\u955c\u50cf\u3002"),(0,r.kt)(u,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(c,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Windows_containerEngine_tabAllowedImages.png",alt:null}))),(0,r.kt)(c,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_containerEngine_tabAllowedImages.png",alt:null}))),(0,r.kt)(c,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Linux_containerEngine_tabAllowedImages.png",alt:null})))),(0,r.kt)("h4",{id:"allowed-image-patterns"},"Allowed image patterns"),(0,r.kt)("p",null,"\u9009\u4e2d ",(0,r.kt)("strong",{parentName:"p"},"Enable")," \u590d\u9009\u6846\uff0c\u8fd9\u6837\uff0cRancher Desktop \u5728\u62c9\u53d6\u6216\u63a8\u9001\u955c\u50cf\u65f6\u5c06\u5e94\u7528\u6307\u5b9a\u7684\u6a21\u5f0f\uff0c\u8fd9\u610f\u5473\u7740\u53ea\u5141\u8bb8\u540d\u79f0\u81f3\u5c11\u4e0e\u6307\u5b9a\u6a21\u5f0f\u4e4b\u4e00\u5339\u914d\u7684\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"+")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"-")," \u6309\u94ae\u6765\u6dfb\u52a0/\u5220\u9664\u955c\u50cf\u540d\u79f0\u6a21\u5f0f\u3002"),(0,r.kt)("h5",{id:"\u5982\u4f55\u6307\u5b9a-allowed-image-patterns"},"\u5982\u4f55\u6307\u5b9a Allowed Image Patterns"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"[registry/][:port/][organization/]repository[:tag]")," \u683c\u5f0f\u6765\u6307\u5b9a Allowed Image Pattern\uff08\u5141\u8bb8\u7684\u955c\u50cf\u6a21\u5f0f\uff09\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u672a\u6307\u5b9a Allowed Image Patterns\uff0c"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"registry")," \u9ed8\u8ba4\u4e3a Docker Hub (",(0,r.kt)("inlineCode",{parentName:"li"},"docker.io"),")\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," \u9ed8\u8ba4\u4e3a 433\u3002"),(0,r.kt)("li",{parentName:"ul"},"Docker Hub \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"organization")," \u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"library"),"\uff0c\u4e0d\u9002\u7528\u4e8e\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag")," \u9ed8\u8ba4\u4e3a\u4efb\u4f55\u5185\u5bb9\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u4e0d"),"\u4ec5\u4ec5\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"latest"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," \u8fc7\u6ee4\u5b9e\u9645\u4e0a\u4e0d\u8d77\u4f5c\u7528\uff1b\u76f8\u5e94\u7684\u6458\u8981 (",(0,r.kt)("inlineCode",{parentName:"p"},"repository@digest"),") \u4e5f\u5fc5\u987b\u6dfb\u52a0\u5230\u5141\u8bb8\u5217\u8868\u4e2d\u624d\u884c\uff0c\u56e0\u6b64\u4e0d\u5b9e\u7528\u3002\u5982\u679c\u4f60\u6709\u9700\u8981\u6839\u636e\u6807\u7b7e\u8fdb\u884c\u8fc7\u6ee4\u7684\u7528\u4f8b\uff0c\u8bf7\u63d0\u4ea4 Github issue\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u610f\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"busybox")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," \u955c\u50cf\u4ed3\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"library")," \u7ec4\u7ec7\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"busybox")," \u4ed3\u5e93\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suse/")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," \u955c\u50cf\u4ed3\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"suse")," \u7ec4\u7ec7\u4e2d\u7684\u4efb\u4f55\u955c\u50cf\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1a\u4ed3\u5e93\u672b\u5c3e\u7684\u659c\u6760\u8868\u793a\u540e\u9762\u8ddf\u7740\u5355\u72ec\u7684\u4e00\u6bb5\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/nginx"),"\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/cap/uaa"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suse//")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," \u955c\u50cf\u4ed3\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"suse")," \u7ec4\u7ec7\u4e2d\u7684\u4efb\u4f55\u955c\u50cf\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1a\u4ed3\u5e93\u672b\u5c3e\u7684\u53cc\u659c\u6760\u8868\u793a\u540e\u9762\u8ddf\u7740\u4e00\u4e2a\u6216\u591a\u4e2a\u6bb5\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/cap/uaa"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry.internal:5000")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"td"},"registry.internal:5000")," \u955c\u50cf\u4ed3\u5e93\u7684\u4efb\u4f55\u955c\u50cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry.suse.com/nginx")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"td"},"registry.suse.com")," \u955c\u50cf\u4ed3\u5e93\u7684\u955c\u50cf ",(0,r.kt)("inlineCode",{parentName:"td"},"nginx"),"\u3002",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1aDockerHub \u4e4b\u5916\u7684\u955c\u50cf\u4ed3\u5e93\u6ca1\u6709\u9876\u5c42\u7ec4\u7ec7\u7684\u6982\u5ff5\uff0c\u56e0\u6b64\u6ca1\u6709\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"library")," \u7ec4\u7ec7\u3002")))))}k.isMDXComponent=!0}}]);