"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[160],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=i,g=c["".concat(u,".").concat(d)]||c[d]||p[d]||r;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93687:function(e,t,a){var n=a(10412);const i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=i?"ios":"android",o=i?"macOS":r?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},72609:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=a(83117),i=(a(67294),a(3905)),r=a(93687);const l={sidebar_label:"Images",title:"Images"},o=void 0,u={unversionedId:"ui/images",id:"ui/images",title:"Images",description:"The Images tab, allows you to manage the images on your virtual machine.",source:"@site/docs/ui/images.md",sourceDirName:"ui",slug:"/ui/images",permalink:"/next/ui/images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/images.md",tags:[],version:"current",frontMatter:{sidebar_label:"Images",title:"Images"},sidebar:"tutorialSidebar",previous:{title:"Port Forwarding",permalink:"/next/ui/port-forwarding"},next:{title:"Troubleshooting",permalink:"/next/ui/troubleshooting"}},s={},m=[{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=p("Tabs"),d=p("TabItem"),g={toc:m};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/images"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Images")," tab, allows you to manage the images on your virtual machine."),(0,i.kt)("p",null,"To manage your images using nerdctl instead, refer to the ",(0,i.kt)("a",{parentName:"p",href:"../tutorials/working-with-images"},"Images")," section."),(0,i.kt)(c,{groupId:"os",defaultValue:r.Z.defaultOs,mdxType:"Tabs"},(0,i.kt)(d,{value:"Windows",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/ui-main/Windows_Images.png",alt:null}))),(0,i.kt)(d,{value:"macOS",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/ui-main/macOS_Images.png",alt:null}))),(0,i.kt)(d,{value:"Linux",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/ui-main/Linux_Images.png",alt:null})))),(0,i.kt)("h3",{id:"scanning-images"},"Scanning Images"),(0,i.kt)("p",null,"This feature uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy")," to scan your images for vulnerabilities and configuration issues."),(0,i.kt)("p",null,"To scan an image:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the image list, find the image you want to scan."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Scan"),"."),(0,i.kt)("li",{parentName:"ol"},"A summary of the vulnerabilities, sorted by the level of severity, are displayed."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},">")," to view the details of each vulnerability, including reference links to learn more about the particular vulnerability.")),(0,i.kt)("h3",{id:"adding-images"},"Adding Images"),(0,i.kt)("h4",{id:"pulling-images"},"Pulling Images"),(0,i.kt)("p",null,"Use this option to pull images from a registry to your virtual machine."),(0,i.kt)("p",null,"To pull an image:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"+")," button in the top-right corner."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Pull")," tab."),(0,i.kt)("li",{parentName:"ol"},"Enter the name of the image to pull.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note: By default, images are pulled from ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," which uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"repo/image[:tag]")," format. To pull from other registries, include the hostname ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.example.com/repo/image[:tag]"),"."))),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Pull"),".")),(0,i.kt)("h4",{id:"building-images"},"Building Images"),(0,i.kt)("p",null,"Use this option to build an image and add it to your virtual machine."),(0,i.kt)("p",null,"To build an image:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"+")," button in the top-right corner."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Build")," tab."),(0,i.kt)("li",{parentName:"ol"},"Enter a name for the image being built. E.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"repo/image"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"repo/image:tag"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image:tag"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Build"),"."),(0,i.kt)("li",{parentName:"ol"},"In the file browser, select the Dockerfile to build an image with.")))}k.isMDXComponent=!0}}]);