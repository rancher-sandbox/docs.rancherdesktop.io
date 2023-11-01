"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6966],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93687:function(e,t,a){var n=a(10412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",s=r?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},59563:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=a(83117),r=(a(67294),a(3905)),o=a(93687);const i={sidebar_label:"Snapshots",title:"Snapshots"},s=void 0,l={unversionedId:"ui/snapshots",id:"version-latest/ui/snapshots",title:"Snapshots",description:"SnapshotsExample",source:"@site/versioned_docs/version-latest/ui/snapshots.md",sourceDirName:"ui",slug:"/ui/snapshots",permalink:"/zh/ui/snapshots",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/snapshots.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Snapshots",title:"Snapshots"},sidebar:"tutorialSidebar",previous:{title:"\u955c\u50cf",permalink:"/zh/ui/images"},next:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/ui/troubleshooting"}},p={},u=[{value:"Snapshot Management",id:"snapshot-management",level:3},{value:"Command Line - <code>rdctl snapshot</code>",id:"command-line---rdctl-snapshot",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Tabs"),m=c("TabItem"),h={toc:u};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/snapshots"})),(0,r.kt)(d,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(m,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Windows_Snapshots-List.png",alt:"Snapshots_Example"}))),(0,r.kt)(m,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/macOS_Snapshots-List.png",alt:"Snapshots_Example"}))),(0,r.kt)(m,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Linux_Snapshots-List.png",alt:"Snapshots_Example"})))),(0,r.kt)("admonition",{title:"warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is an ",(0,r.kt)("strong",{parentName:"p"},"experimental")," feature.")),(0,r.kt)("p",null,"A snapshot can be used to store the current configuration of your virtual machine and all associated settings. Snapshots are stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots")," directory which are created at the below paths respective to your operating system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/Library/Application Support/rancher-desktop/snapshots")),(0,r.kt)("li",{parentName:"ul"},"Linux: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.local/share/rancher-desktop/snapshots")),(0,r.kt)("li",{parentName:"ul"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%\\rancher-desktop\\snapshots"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots")," directory may be moved by creating a symlink from your system's default path to your preferred location."),(0,r.kt)("h3",{id:"snapshot-management"},"Snapshot Management"),(0,r.kt)("p",null,"The following actions can be taken on the tab:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Create Snapshot"),":\nYou can choose to create a snapshot through the user interface from the Snapshots tab by clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Snapshot")," button. This will launch a dialog and provides a note alerting that Rancher Desktop will be unavailable during the creation of a new Snapshot."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Snapshot Name"),":\nText can be entered into this field to name your snapshot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Description"),":\nText can be entered into the Description field that describes your snapshot."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Restore"),":\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Restore")," button can be used to restore a snapshot and will replace your current snapshot installation including preference settings. Rancher Desktop will be unavailable while this process is running.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Delete"),":\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete")," button can be used to remove snapshots permanently."))),(0,r.kt)("h3",{id:"command-line---rdctl-snapshot"},"Command Line - ",(0,r.kt)("inlineCode",{parentName:"h3"},"rdctl snapshot")),(0,r.kt)("p",null,"All commands available through the user interface are also available using the ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl snapshot")," command. Please see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/references/rdctl-command-reference"},"reference page")," for more information."))}f.isMDXComponent=!0}}]);