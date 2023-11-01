"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1399],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,v=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var r=n(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=a?"ios":"android",l=a?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},49912:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));n(93687);const o={title:"\u6982\u8ff0",slug:"/"},i=void 0,l={unversionedId:"getting-started/introduction",id:"version-latest/getting-started/introduction",title:"\u6982\u8ff0",description:"Rancher Desktop \u662f\u4e00\u6b3e\u5728\u684c\u9762\u4e0a\u63d0\u4f9b\u5bb9\u5668\u548c Kubernetes \u7ba1\u7406\u7684\u5e94\u7528\u3002\u5b83\u9002\u7528\u4e8e Mac\uff08\u5305\u62ec Intel \u548c Apple \u82af\u7247\uff09\u3001Windows \u548c Linux\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/zh/",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/getting-started/introduction.md",tags:[],version:"latest",frontMatter:{title:"\u6982\u8ff0",slug:"/"},sidebar:"tutorialSidebar",next:{title:"\u5b89\u88c5",permalink:"/zh/getting-started/installation"}},c={},s=[{value:"\u5bb9\u5668\u7ba1\u7406",id:"\u5bb9\u5668\u7ba1\u7406",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Rancher \u4e0e Rancher Desktop",id:"rancher-\u4e0e-rancher-desktop",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher Desktop \u662f\u4e00\u6b3e\u5728\u684c\u9762\u4e0a\u63d0\u4f9b\u5bb9\u5668\u548c Kubernetes \u7ba1\u7406\u7684\u5e94\u7528\u3002\u5b83\u9002\u7528\u4e8e Mac\uff08\u5305\u62ec Intel \u548c Apple \u82af\u7247\uff09\u3001Windows \u548c Linux\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/getting-started/introduction_preferences_tabKubernetes.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4e0a\u56fe\u5de6\u8fb9\u662f Mac \u4e0a\u7684 Kubernetes \u8bbe\u7f6e\uff0c\u53f3\u8fb9\u662f Windows\u3002")),(0,a.kt)("h2",{id:"\u5bb9\u5668\u7ba1\u7406"},"\u5bb9\u5668\u7ba1\u7406"),(0,a.kt)("p",null,"Rancher Desktop \u63d0\u4f9b\u4e86\u6784\u5efa\u3001\u63a8\u9001\u548c\u62c9\u53d6\u5bb9\u5668\u955c\u50cf\u4ee5\u53ca\u8fd0\u884c\u5bb9\u5668\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u53ef\u4ee5\u901a\u8fc7 Docker CLI\uff08\u5f53\u4f60\u9009\u62e9 Moby/dockerd \u4f5c\u4e3a\u5f15\u64ce\u65f6\uff09\u6216 nerdctl\uff08\u5f53\u4f60\u9009\u62e9 containerd \u4f5c\u4e3a\u5f15\u64ce\u65f6\uff09\u5b9e\u73b0\uff0c\u800c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"nerdctl"),' \u662f containerd \u9879\u76ee\u63d0\u4f9b\u7684 "\u517c\u5bb9 containerd \u7684 Docker CLI"\u3002'),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Kubernetes \u5185\u7f6e\u5728 Rancher Desktop \u4e2d\uff0c\u7531 ",(0,a.kt)("a",{parentName:"p",href:"https://k3s.io/"},"K3s")," \u63d0\u4f9b\u3002K3s \u662f\u4e00\u4e2a\u7ecf\u8fc7\u8ba4\u8bc1\u7684\u8f7b\u91cf\u7ea7\u53d1\u884c\u7248\u3002\u901a\u8fc7 Rancher Desktop\uff0c\u4f60\u80fd\u591f ",(0,a.kt)("em",{parentName:"p"},"\u9009\u62e9\u4f60\u7684 Kubernetes \u7248\u672c"),"\uff0c\u5e76\u4e14",(0,a.kt)("em",{parentName:"p"},"\u4e00\u952e\u91cd\u7f6e Kubernetes \u6216 Kubernetes \u4ee5\u53ca\u6574\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6"),"\u3002"),(0,a.kt)("h2",{id:"rancher-\u4e0e-rancher-desktop"},"Rancher \u4e0e Rancher Desktop"),(0,a.kt)("p",null,"\u867d\u7136 ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," \u548c Rancher Desktop \u7684\u540d\u5b57\u91cc\u90fd\u5305\u542b ",(0,a.kt)("em",{parentName:"p"},"Rancher"),"\uff0c\u4f46\u5b83\u4eec\u7684\u529f\u80fd\u662f\u6709\u5dee\u522b\u7684\u3002Rancher Desktop \u4e0d\u662f\u684c\u9762\u7248 Rancher\u3002Rancher \u662f\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684\u5f3a\u5927\u89e3\u51b3\u65b9\u6848\uff0cRancher Desktop \u63d0\u4f9b\u672c\u5730 Kubernetes \u548c\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u8fd9\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u76f8\u8f85\u76f8\u6210\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u5728\u672c\u5730\u7cfb\u7edf\u4e0a\u8fd0\u884c Rancher\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u5b89\u88c5\u5230 Rancher Desktop \u4e2d\u3002"))}p.isMDXComponent=!0}}]);