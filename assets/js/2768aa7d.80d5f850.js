"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9494],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||l;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(3117),r=n(7294),l=n(4334),o=n(2466),i=n(6775),s=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??c;return f({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var b=n(2389),k="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:p},o,{className:(0,l.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},2239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),l=n(4866),o=n(5162),i=n(3687);const s={title:"Deployment Profiles"},u=void 0,d={unversionedId:"getting-started/deployment",id:"getting-started/deployment",title:"Deployment Profiles",description:"Deployment profiles provide 2 features:",source:"@site/docs/getting-started/deployment.md",sourceDirName:"getting-started",slug:"/getting-started/deployment",permalink:"/next/getting-started/deployment",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/getting-started/deployment.md",tags:[],version:"current",frontMatter:{title:"Deployment Profiles"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/next/getting-started/installation"},next:{title:"General",permalink:"/next/ui/general"}},c={},p=[{value:"Preferences values at startup",id:"preferences-values-at-startup",level:3},{value:"Profile format and location",id:"profile-format-and-location",level:3},{value:"Delete existing profiles",id:"delete-existing-profiles",level:4},{value:"By default use the &quot;moby&quot; container engine and disable Kubernetes",id:"by-default-use-the-moby-container-engine-and-disable-kubernetes",level:4},{value:"Lock allowed images list to only allow &quot;busybox&quot; and &quot;nginx&quot;",id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx",level:4},{value:"Verify registry settings",id:"verify-registry-settings",level:4},{value:"Convert all current settings into a deployment profile",id:"convert-all-current-settings-into-a-deployment-profile",level:4},{value:"By default use the &quot;moby&quot; container engine and disable Kubernetes",id:"by-default-use-the-moby-container-engine-and-disable-kubernetes-1",level:4},{value:"Lock allowed images list to only allow &quot;busybox&quot; and &quot;nginx&quot;",id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx-1",level:4},{value:"Verify the plist files",id:"verify-the-plist-files",level:4},{value:"Convert all current settings into a deployment profile",id:"convert-all-current-settings-into-a-deployment-profile-1",level:4},{value:"By default use the &quot;moby&quot; container engine and disable Kubernetes",id:"by-default-use-the-moby-container-engine-and-disable-kubernetes-2",level:4},{value:"Lock allowed images list to only allow &quot;busybox&quot; and &quot;nginx&quot;",id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx-2",level:4},{value:"Known Issues and Limitations",id:"known-issues-and-limitations",level:3}],f={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Deployment profiles provide 2 features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Defaults" provide preference values that are applied on first run (or after a factory reset).'),(0,r.kt)("li",{parentName:"ul"},'"Locked" settings allow an administrator to pin preference values.')),(0,r.kt)("p",null,'They can be specified both by an "admin" or by the "user". If either the "defaults" or the "locked" settings exists in the "admin" context, then the "user" profile is ignored.'),(0,r.kt)("h3",{id:"preferences-values-at-startup"},"Preferences values at startup"),(0,r.kt)("p",null,"Rancher Desktop settings are determined as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Load "admin" deployment profile (both "defaults" and "locked")'),(0,r.kt)("li",{parentName:"ul"},'If neither of them exist then load "user" deployment profile (again both "defaults" and "locked")'),(0,r.kt)("li",{parentName:"ul"},"Load saved preferences from ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.json")," file"),(0,r.kt)("li",{parentName:"ul"},'If there are no saved settings, use the "defaults" profile loaded earlier instead'),(0,r.kt)("li",{parentName:"ul"},"Copy values from commandline arguments used to launch the app into settings"),(0,r.kt)("li",{parentName:"ul"},"If the settings are still completely empty, show the first-run dialog"),(0,r.kt)("li",{parentName:"ul"},"Fill any missing values from the builtin application defaults"),(0,r.kt)("li",{parentName:"ul"},'Copy values from the "locked" profile over the current settings')),(0,r.kt)("p",null,"The user cannot modify any settings (via GUI or CLI) that have been locked by the profile."),(0,r.kt)("p",null,"Rancher Desktop will refuse to load the application if a profile exists, but cannot be parsed correctly."),(0,r.kt)("p",null,"Deployment profiles will not be modified or removed by Rancher Desktop. They will not be affected by a factory reset or uninstall."),(0,r.kt)("p",null,"The structure of the profile data matches the application settins:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="rdctl list-settings"',title:'"rdctl','list-settings"':!0},'{\n  ...\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": false,\n      "patterns": []\n    },\n    "name": "containerd"\n  },\n  ...\n}\n')),(0,r.kt)("p",null,"The platform-specific documentation below will show how to create a deployment profile that changes the default container engine to ",(0,r.kt)("inlineCode",{parentName:"p"},"moby"),", disables Kubernetes, and locks down the list of allowed images to just ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx"),"."),(0,r.kt)("h3",{id:"profile-format-and-location"},"Profile format and location"),(0,r.kt)("p",null,"Deployment profiles are stored in a platform-specific format and location."),(0,r.kt)(l.Z,{groupId:"os",defaultValue:i.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"On Windows the deployment profiles are stored in the registry and can be distributed via group policy."),(0,r.kt)("p",null,"The locations for the profiles are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HKEY_LOCAL_MACHINE\\Software\\Rancher Desktop\\Profile\\Defaults\nHKEY_LOCAL_MACHINE\\Software\\Rancher Desktop\\Profile\\Locked\nHKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Defaults\nHKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Locked\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"reg"),' tool can be used to create a profile manually. To create an "admin" profile it will have to be executed from an elevated shell.'),(0,r.kt)("p",null,"Boolean values are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"REG_DWORD")," format, and lists in ",(0,r.kt)("inlineCode",{parentName:"p"},"REG_MULTI_SZ"),"."),(0,r.kt)("h4",{id:"delete-existing-profiles"},"Delete existing profiles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'reg delete "HKCU\\Software\\Rancher Desktop\\Profile" /f\n')),(0,r.kt)("h4",{id:"by-default-use-the-moby-container-engine-and-disable-kubernetes"},'By default use the "moby" container engine and disable Kubernetes'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'reg add "HKCU\\Software\\Rancher Desktop\\Profile\\Defaults\\containerEngine" /v name /t REG_SZ -d moby\nreg add "HKCU\\Software\\Rancher Desktop\\Profile\\Defaults\\kubernetes" /v enabled /t REG_DWORD -d 0\n')),(0,r.kt)("h4",{id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx"},'Lock allowed images list to only allow "busybox" and "nginx"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'reg add "HKCU\\Software\\Rancher Desktop\\Profile\\Locked\\containerEngine\\allowedImages" /v enabled /t REG_DWORD -d 1\nreg add "HKCU\\Software\\Rancher Desktop\\Profile\\Locked\\containerEngine\\allowedImages" /v patterns /t REG_MULTI_SZ -d busybox\\0nginx\n')),(0,r.kt)("h4",{id:"verify-registry-settings"},"Verify registry settings"),(0,r.kt)("p",null,"The profile can be exported into a ",(0,r.kt)("inlineCode",{parentName:"p"},"*.reg")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'C:\\>reg export "HKCU\\Software\\Rancher Desktop\\Profile" rd.reg\nThe operation completed successfully.\n')),(0,r.kt)("p",null,"This file can be used to distribute the profile to other machines. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"REG_MULTI_SZ")," values are encoded in UTF16LE, so are not easily readable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="HKCU\\Software\\Rancher Desktop\\Profile"',title:'"HKCU\\Software\\Rancher','Desktop\\Profile"':!0},'Windows Registry Editor Version 5.00\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile]\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Defaults]\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Defaults\\containerEngine]\n"name"="moby"\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Defaults\\kubernetes]\n"enabled"=dword:00000000\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Locked]\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Locked\\containerEngine]\n\n[HKEY_CURRENT_USER\\Software\\Rancher Desktop\\Profile\\Locked\\containerEngine\\allowedImages]\n"enabled"=dword:00000001\n"patterns"=hex(7):62,00,75,00,73,00,79,00,62,00,6f,00,78,00,00,00,6e,00,67,00,\\\n  69,00,6e,00,78,00,00,00,00,00\n'))),(0,r.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,"On macOS the deployment profiles are stored as plist files."),(0,r.kt)("p",null,"The locations for the profiles are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n/Library/Preferences/io.rancherdesktop.profile.locked.plist\n~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n~/Library/Preferences/io.rancherdesktop.profile.locked.plist\n")),(0,r.kt)("h4",{id:"convert-all-current-settings-into-a-deployment-profile"},"Convert all current settings into a deployment profile"),(0,r.kt)("p",null,"A simple way to turn existing settings into a deployment profile is by converting them from JSON into the plist XML format, and then manually trimming it down in an editor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rdctl list-settings | plutil -convert xml1 - -o ~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n")),(0,r.kt)("p",null,"Alternatively the profile can be created manually, either with an editor, or with the ",(0,r.kt)("inlineCode",{parentName:"p"},"plutil")," tool. The ",(0,r.kt)("inlineCode",{parentName:"p"},"defaults")," utility doesn't work because it cannot create nested keys."),(0,r.kt)("h4",{id:"by-default-use-the-moby-container-engine-and-disable-kubernetes-1"},'By default use the "moby" container engine and disable Kubernetes'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'DEFAULTS=~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\nplutil -create xml1 "$DEFAULTS"\n\nplutil -insert containerEngine -dictionary "$DEFAULTS"\nplutil -insert containerEngine.name -string moby "$DEFAULTS"\n\nplutil -insert kubernetes -dictionary "$DEFAULTS"\nplutil -insert kubernetes.enabled -bool false "$DEFAULTS"\n')),(0,r.kt)("h4",{id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx-1"},'Lock allowed images list to only allow "busybox" and "nginx"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'LOCKED=~/Library/Preferences/io.rancherdesktop.profile.locked.plist\nplutil -create xml1 "$LOCKED"\n\nplutil -insert containerEngine -dictionary "$LOCKED"\nplutil -insert containerEngine.enabled -bool true "$LOCKED"\n\nplutil -insert containerEngine.patterns -array "$LOCKED"\nplutil -insert containerEngine.patterns -string busybox -append "$LOCKED"\nplutil -insert containerEngine.patterns -string nginx -append "$LOCKED"\n')),(0,r.kt)("h4",{id:"verify-the-plist-files"},"Verify the plist files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="~/Library/Preferences/io.rancherdesktop.profile.defaults.plist"',title:'"~/Library/Preferences/io.rancherdesktop.profile.defaults.plist"'},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>containerEngine</key>\n    <dict>\n        <key>name</key>\n        <string>moby</string>\n    </dict>\n    <key>kubernetes</key>\n    <dict>\n        <key>enabled</key>\n        <false/>\n    </dict>\n</dict>\n</plist>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="~/Library/Preferences/io.rancherdesktop.profile.locked.plist"',title:'"~/Library/Preferences/io.rancherdesktop.profile.locked.plist"'},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>containerEngine</key>\n    <dict>\n        <key>enabled</key>\n        <true/>\n        <key>patterns</key>\n        <array>\n            <string>busybox</string>\n            <string>nginx</string>\n        </array>\n    </dict>\n</dict>\n</plist>\n'))),(0,r.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"On Linux the deployment profiles are stored in JSON format."),(0,r.kt)("p",null,"The locations for the profiles are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/etc/rancher-desktop/defaults.json\n/etc/rancher-desktop/locked.json\n~/.config/rancher-desktop.defaults.json\n~/.config/rancher-desktop.locked.json\n")),(0,r.kt)("h4",{id:"convert-all-current-settings-into-a-deployment-profile-1"},"Convert all current settings into a deployment profile"),(0,r.kt)("p",null,"Since deployment profiles are stored in JSON format, the simplest way to create them is by saving the current application settings to the profile location, and then fine-tuning the profile with a text editor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rdctl list-settings > ~/.config/rancher-desktop.defaults.json\n")),(0,r.kt)("h4",{id:"by-default-use-the-moby-container-engine-and-disable-kubernetes-2"},'By default use the "moby" container engine and disable Kubernetes'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="~/.config/rancher-desktop.defaults.json"',title:'"~/.config/rancher-desktop.defaults.json"'},'{\n  "containerEngine": {\n    "name": "moby"\n  },\n  "kubernetes": {\n    "enabled": true\n  }\n}\n')),(0,r.kt)("h4",{id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx-2"},'Lock allowed images list to only allow "busybox" and "nginx"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="~/.config/rancher-desktop.locked.json"',title:'"~/.config/rancher-desktop.locked.json"'},'{\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": true,\n      "patterns": ["busybox","nginx"]\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"known-issues-and-limitations"},"Known Issues and Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"containerEngine.allowedImages")," settings are currently the only ones that can be locked."),(0,r.kt)("li",{parentName:"ul"},"On macOS incorrectly formatted profiles are ignored instead of preventing the app from loading."),(0,r.kt)("li",{parentName:"ul"},"There is no way to set ",(0,r.kt)("inlineCode",{parentName:"li"},"diagnostics.showMuted")," (and on Windows ",(0,r.kt)("inlineCode",{parentName:"li"},"WSL.integrations"),") via deployment profile."),(0,r.kt)("li",{parentName:"ul"},'On macOS and Linux an abbreviated first-run dialog is still shown if the "defaults" profile does not provide a value for ',(0,r.kt)("inlineCode",{parentName:"li"},"application.pathManagementStrategy"),".")))}m.isMDXComponent=!0}}]);