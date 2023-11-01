"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6525],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,v=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?a.createElement(v,l(l({ref:n},c),{},{components:t})):a.createElement(v,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93687:function(e,n,t){var a=t(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macOS":i?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},43202:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=t(83117),r=(t(67294),t(3905));t(93687);const i={sidebar_label:"\u73af\u5883",title:"\u73af\u5883"},l=void 0,o={unversionedId:"ui/preferences/application/environment",id:"version-1.11/ui/preferences/application/environment",title:"\u73af\u5883",description:"\u5141\u8bb8\u5728\u7528\u6237 shell \u4e2d\u914d\u7f6e $PATH \u53d8\u91cf\uff0c\u4ee5\u4fbf\u4e0e Rancher Desktop \u5b89\u88c5\u7684\u5b9e\u7528\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.11/ui/preferences/application/environment.md",sourceDirName:"ui/preferences/application",slug:"/ui/preferences/application/environment",permalink:"/zh/1.11/ui/preferences/application/environment",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/ui/preferences/application/environment.md",tags:[],version:"1.11",frontMatter:{sidebar_label:"\u73af\u5883",title:"\u73af\u5883"},sidebar:"tutorialSidebar",previous:{title:"\u884c\u4e3a",permalink:"/zh/1.11/ui/preferences/application/behavior"},next:{title:"\u4eff\u771f",permalink:"/zh/1.11/ui/preferences/virtual-machine/emulation"}},p={},u=[{value:"\u914d\u7f6e PATH",id:"\u914d\u7f6e-path",level:4},{value:"\u914d\u7f6e PATH",id:"\u914d\u7f6e-path-1",level:4}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},s=c("Tabs"),d=c("TabItem"),m={toc:u};function v(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5141\u8bb8\u5728\u7528\u6237 shell \u4e2d\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," \u53d8\u91cf\uff0c\u4ee5\u4fbf\u4e0e Rancher Desktop \u5b89\u88c5\u7684\u5b9e\u7528\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)(s,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(d,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_application_tabEnvironment.png",alt:null})),(0,r.kt)("h4",{id:"\u914d\u7f6e-path"},"\u914d\u7f6e PATH"),(0,r.kt)("p",null,"Rancher Desktop \u9644\u5e26\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u4e0e\u5176\u5404\u79cd\u529f\u80fd\u4ea4\u4e92\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," \u7b49\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin"),"\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin")," \u6765\u67e5\u770b\u4f60\u7684\u5b89\u88c5\u4e2d\u5305\u542b\u4e86\u54ea\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," \u5fc5\u987b\u4f4d\u4e8e shell \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," \u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u9009\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u5c06\u901a\u8fc7\u4fee\u6539\u4f60\u7684 shell .rc \u6587\u4ef6\u6765\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manual"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u4e0d\u4f1a\u6539\u53d8\u4efb\u4f55\u4e1c\u897f - \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002"))),(0,r.kt)(d,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Linux_application_tabEnvironment.png",alt:null})),(0,r.kt)("h4",{id:"\u914d\u7f6e-path-1"},"\u914d\u7f6e PATH"),(0,r.kt)("p",null,"Rancher Desktop \u9644\u5e26\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u4e0e\u5176\u5404\u79cd\u529f\u80fd\u4ea4\u4e92\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," \u7b49\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin"),"\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin")," \u6765\u67e5\u770b\u4f60\u7684\u5b89\u88c5\u4e2d\u5305\u542b\u4e86\u54ea\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," \u5fc5\u987b\u4f4d\u4e8e shell \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," \u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u9009\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u5c06\u901a\u8fc7\u4fee\u6539\u4f60\u7684 shell .rc \u6587\u4ef6\u6765\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manual"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u4e0d\u4f1a\u6539\u53d8\u4efb\u4f55\u4e1c\u897f - \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002")))))}v.isMDXComponent=!0}}]);