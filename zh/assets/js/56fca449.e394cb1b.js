"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6039],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=l?"ios":"android",o=l?"macOS":i?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},34548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return v},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var a=n(83117),l=(n(67294),n(3905)),i=n(93687);const r={title:"\u5b89\u88c5\u548c\u5378\u8f7d Rancher Desktop \u6269\u5c55"},o=void 0,s={unversionedId:"how-to-guides/installing-uninstalling-extensions",id:"version-latest/how-to-guides/installing-uninstalling-extensions",title:"\u5b89\u88c5\u548c\u5378\u8f7d Rancher Desktop \u6269\u5c55",description:"v1.9.0-tech-preview \u7248\u672c\u5f15\u5165\u4e86 Extension \u529f\u80fd\uff0c\u8ba9\u4f60\u80fd\u591f\u5728 Rancher Desktop \u4e2d\u4f7f\u7528 Docker Desktop \u6269\u5c55\u3002\u6709\u4e86\u8be5\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55 Rancher Desktop \u7684\u529f\u80fd\u6765\u6ee1\u8db3\u989d\u5916\u7684\u9700\u6c42\u3002\u672c\u6307\u5357\u5c06\u6f14\u793a\u5982\u4f55\u5728 Rancher Desktop \u4e2d\u5b89\u88c5\u548c\u5378\u8f7d Docker \u6269\u5c55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/how-to-guides/installing-uninstalling-extensions.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/installing-uninstalling-extensions",permalink:"/zh/how-to-guides/installing-uninstalling-extensions",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/installing-uninstalling-extensions.md",tags:[],version:"latest",frontMatter:{title:"\u5b89\u88c5\u548c\u5378\u8f7d Rancher Desktop \u6269\u5c55"},sidebar:"tutorialSidebar",previous:{title:"Hello World \u793a\u4f8b",permalink:"/zh/how-to-guides/hello-world-example"},next:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",permalink:"/zh/how-to-guides/transfer-container-images"}},p={},u=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u5b89\u88c5\u6269\u5c55",id:"\u5b89\u88c5\u6269\u5c55",level:3},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c",level:4},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-1",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-1",level:4},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-2",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-2",level:4},{value:"\u5378\u8f7d\u6269\u5c55",id:"\u5378\u8f7d\u6269\u5c55",level:3},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-3",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-3",level:4},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-4",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-4",level:4},{value:"\u4f7f\u7528 UI",id:"\u4f7f\u7528-ui-5",level:4},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c-5",level:4}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},m=d("Tabs"),c=d("TabItem"),k={toc:u};function v(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u5f15\u5165\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"Extension")," \u529f\u80fd\uff0c\u8ba9\u4f60\u80fd\u591f\u5728 Rancher Desktop \u4e2d\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Docker Desktop \u6269\u5c55"),"\u3002\u6709\u4e86\u8be5\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55 Rancher Desktop \u7684\u529f\u80fd\u6765\u6ee1\u8db3\u989d\u5916\u7684\u9700\u6c42\u3002\u672c\u6307\u5357\u5c06\u6f14\u793a\u5982\u4f55\u5728 Rancher Desktop \u4e2d\u5b89\u88c5\u548c\u5378\u8f7d Docker \u6269\u5c55\u3002"),(0,l.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,l.kt)("p",null,"Rancher Desktop \u6269\u5c55\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u6216\u66f4\u9ad8\u7248\u672c\u4e2d\u63d0\u4f9b\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u6269\u5c55"},"\u5b89\u88c5\u6269\u5c55"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u5b89\u88c5\u6269\u5c55\uff1a\u4f7f\u7528 UI \u6216\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl extension install")," \u547d\u4ee4\u3002"),(0,l.kt)(m,{groupId:"os",defaultValue:i.Z.defaultOs,mdxType:"Tabs"},(0,l.kt)(c,{value:"Windows",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui"},"\u4f7f\u7528 UI"),(0,l.kt)("p",null,"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\u3002\u4f60\u53ef\u4ee5\u5728\u6b64\u5904\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\uff0c\u5e76\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Install")," \u6309\u94ae\u8fdb\u884c\u4e0b\u8f7d\u548c\u5b89\u88c5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Windows_Extensions.png",alt:null})),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5b89\u88c5\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>:<tag>\n"))),(0,l.kt)(c,{value:"macOS",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-1"},"\u4f7f\u7528 UI"),(0,l.kt)("p",null,"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\u3002\u4f60\u53ef\u4ee5\u5728\u6b64\u5904\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\uff0c\u5e76\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Install")," \u6309\u94ae\u8fdb\u884c\u4e0b\u8f7d\u548c\u5b89\u88c5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/macOS_Extensions.png",alt:null})),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-1"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5b89\u88c5\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>:<tag>\n"))),(0,l.kt)(c,{value:"Linux",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-2"},"\u4f7f\u7528 UI"),(0,l.kt)("p",null,"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\u3002\u4f60\u53ef\u4ee5\u5728\u6b64\u5904\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\uff0c\u5e76\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Install")," \u6309\u94ae\u8fdb\u884c\u4e0b\u8f7d\u548c\u5b89\u88c5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Linux_Extensions.png",alt:null})),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-2"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5b89\u88c5\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>:<tag>\n")))),(0,l.kt)("h3",{id:"\u5378\u8f7d\u6269\u5c55"},"\u5378\u8f7d\u6269\u5c55"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u5378\u8f7d\u6269\u5c55\uff1a\u4f7f\u7528 UI \u6216\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl extension uninstall")," \u547d\u4ee4\u3002"),(0,l.kt)(m,{groupId:"os",defaultValue:i.Z.defaultOs,mdxType:"Tabs"},(0,l.kt)(c,{value:"Windows",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-3"},"\u4f7f\u7528 UI"),(0,l.kt)("p",null,"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\u3002\u5728\u6b64\u89c6\u56fe\u4e2d\uff0c\u4f60\u53ef\u4ee5\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\uff0c\u5e76\u5378\u8f7d\u5df2\u5b89\u88c5\u7684\u6269\u5c55\u3002\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Remove")," \u6309\u94ae\u4ece ",(0,l.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u5378\u8f7d\u6269\u5c55\u3002"),(0,l.kt)(m,{mdxType:"Tabs"},(0,l.kt)(c,{value:"Catalog",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Windows_Extensions.png",alt:null}))),(0,l.kt)(c,{value:"Installed",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Windows_Extensions-Installed.png",alt:null})))),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-3"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5378\u8f7d\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>:<tag>\n"))),(0,l.kt)(c,{value:"macOS",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-4"},"\u4f7f\u7528 UI"),(0,l.kt)("p",null,"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\u3002\u5728\u6b64\u89c6\u56fe\u4e2d\uff0c\u4f60\u53ef\u4ee5\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\uff0c\u5e76\u5378\u8f7d\u5df2\u5b89\u88c5\u7684\u6269\u5c55\u3002\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Remove")," \u6309\u94ae\u4ece ",(0,l.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u5378\u8f7d\u6269\u5c55\u3002"),(0,l.kt)(m,{mdxType:"Tabs"},(0,l.kt)(c,{value:"Catalog",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/macOS_Extensions.png",alt:null}))),(0,l.kt)(c,{value:"Installed",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/macOS_Extensions-Installed.png",alt:null})))),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-4"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5378\u8f7d\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>:<tag>\n"))),(0,l.kt)(c,{value:"Linux",mdxType:"TabItem"},(0,l.kt)("h4",{id:"\u4f7f\u7528-ui-5"},"\u4f7f\u7528 UI"),(0,l.kt)("p",null,"\u5355\u51fb\u4e3b UI \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Extensions")," \u5e76\u5bfc\u822a\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\u3002\u5728\u6b64\u89c6\u56fe\u4e2d\uff0c\u4f60\u53ef\u4ee5\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\uff0c\u5e76\u5378\u8f7d\u5df2\u5b89\u88c5\u7684\u6269\u5c55\u3002\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Remove")," \u6309\u94ae\u4ece ",(0,l.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u5378\u8f7d\u6269\u5c55\u3002"),(0,l.kt)(m,{mdxType:"Tabs"},(0,l.kt)(c,{value:"Catalog",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Linux_Extensions.png",alt:null}))),(0,l.kt)(c,{value:"Installed",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.10/ui-main/Linux_Extensions-Installed.png",alt:null})))),(0,l.kt)("h4",{id:"\u4f7f\u7528\u547d\u4ee4\u884c-5"},"\u4f7f\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1.9.0-tech-preview")," \u7248\u672c\u8fd8\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u6765\u5378\u8f7d\u6269\u5c55\u3002\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d\u6269\u5c55\uff1a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"<tag>")," \u53c2\u6570\u662f\u53ef\u9009\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>:<tag>\n")))))}v.isMDXComponent=!0}}]);