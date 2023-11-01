"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7553],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93687:function(e,t,a){var n=a(10412);const i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",l=i?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},75411:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var n=a(83117),i=(a(67294),a(3905)),o=a(93687);const r={sidebar_label:"General",title:"General"},l=void 0,s={unversionedId:"ui/preferences/application/general",id:"version-1.11/ui/preferences/application/general",title:"General",description:"Allows for enablement of automatic updates, as well as an optional field to allow Rancher Desktop to collect anonymous statistics to help improve the application.",source:"@site/versioned_docs/version-1.11/ui/preferences/application/general.md",sourceDirName:"ui/preferences/application",slug:"/ui/preferences/application/general",permalink:"/1.11/ui/preferences/application/general",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/ui/preferences/application/general.md",tags:[],version:"1.11",frontMatter:{sidebar_label:"General",title:"General"},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/1.11/ui/extensions"},next:{title:"Behavior",permalink:"/1.11/ui/preferences/application/behavior"}},c={},p=[{value:"Automatic Updates",id:"automatic-updates",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Administrative Access",id:"administrative-access",level:4},{value:"Automatic Updates",id:"automatic-updates-1",level:4},{value:"Statistics",id:"statistics-1",level:4},{value:"Administrative Access",id:"administrative-access-1",level:4},{value:"Automatic Updates",id:"automatic-updates-2",level:4},{value:"Statistics",id:"statistics-2",level:4}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=u("Tabs"),m=u("TabItem"),f={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/preferences/application/general"})),(0,i.kt)("p",null,"Allows for enablement of automatic updates, as well as an optional field to allow Rancher Desktop to collect anonymous statistics to help improve the application."),(0,i.kt)(d,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,i.kt)(m,{value:"Windows",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/preferences/Windows_application_tabGeneral.png",alt:null})),(0,i.kt)("h4",{id:"automatic-updates"},"Automatic Updates"),(0,i.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,i.kt)("h4",{id:"statistics"},"Statistics"),(0,i.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.")),(0,i.kt)(m,{value:"macOS",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/preferences/macOS_application_tabGeneral.png",alt:null})),(0,i.kt)("h4",{id:"administrative-access"},"Administrative Access"),(0,i.kt)("p",null,"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."),(0,i.kt)("h4",{id:"automatic-updates-1"},"Automatic Updates"),(0,i.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,i.kt)("h4",{id:"statistics-1"},"Statistics"),(0,i.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.")),(0,i.kt)(m,{value:"Linux",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/preferences/Linux_application_tabGeneral.png",alt:null})),(0,i.kt)("h4",{id:"administrative-access-1"},"Administrative Access"),(0,i.kt)("p",null,"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."),(0,i.kt)("h4",{id:"automatic-updates-2"},"Automatic Updates"),(0,i.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,i.kt)("h4",{id:"statistics-2"},"Statistics"),(0,i.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."))))}h.isMDXComponent=!0}}]);