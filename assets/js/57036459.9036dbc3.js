"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6243],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s=r?"ios":"android",i=r?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:s,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(34334),o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),o=n(34334),s=n(12466),i=n(76775),l=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=m({queryString:n,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var g=n(72389),b="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),l(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},s,{className:(0,o.Z)("tabs__item",f,null==s?void 0:s.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},33541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905)),o=n(74866),s=n(85162);n(93687);const i={title:"FAQ"},l=void 0,u={unversionedId:"faq",id:"version-1.11/faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop.",source:"@site/versioned_docs/version-1.11/faq.md",sourceDirName:".",slug:"/faq",permalink:"/1.11/faq",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/faq.md",tags:[],version:"1.11",frontMatter:{title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Bundled Utilities",permalink:"/1.11/references/bundled-utilities"},next:{title:"Troubleshooting Tips",permalink:"/1.11/troubleshooting-tips"}},c={},d=[{value:"<strong>Q: Is Rancher Desktop a desktop version of Rancher?</strong>",id:"q-is-rancher-desktop-a-desktop-version-of-rancher",level:4},{value:"<strong>Q: Is there a Kubernetes Cluster Explorer available in Rancher Desktop?</strong>",id:"q-is-there-a-kubernetes-cluster-explorer-available-in-rancher-desktop",level:4},{value:"<strong>Q: Can I have Docker Desktop installed alongside Rancher Desktop?</strong>",id:"q-can-i-have-docker-desktop-installed-alongside-rancher-desktop",level:4},{value:"<strong>Q: How can I perform a clean uninstall of Rancher Desktop?</strong>",id:"q-how-can-i-perform-a-clean-uninstall-of-rancher-desktop",level:4},{value:"<strong>Q: What support, if any, is available for DNS over VPN on Windows?</strong>",id:"q-what-support-if-any-is-available-for-dns-over-vpn-on-windows",level:4},{value:"<strong>Q: What does the &quot;WSL Integration&quot; tab do?</strong>",id:"q-what-does-the-wsl-integration-tab-do",level:4},{value:"<strong>Q: Where can I find detailed logs?</strong>",id:"q-where-can-i-find-detailed-logs",level:4},{value:"<strong>Q: How can I enable the dashboard for the Traefik ingress controller?</strong>",id:"q-how-can-i-enable-the-dashboard-for-the-traefik-ingress-controller",level:4},{value:"Using <code>port-forward</code> to enable dashboard access",id:"using-port-forward-to-enable-dashboard-access",level:5},{value:"Using <code>HelmChartConfig</code> to enable dashboard access",id:"using-helmchartconfig-to-enable-dashboard-access",level:5},{value:"<strong>Q: Can I disable Traefik, and will doing so remove Traefik resources?</strong>",id:"q-can-i-disable-traefik-and-will-doing-so-remove-traefik-resources",level:4},{value:"<strong>Q: Is there support for internal container port forwarding?</strong>",id:"q-is-there-support-for-internal-container-port-forwarding",level:4},{value:"<strong>Q: Does file sharing work similarly to Docker Desktop? Do I have to do any additional configuration to mount volumes to VMs?</strong>",id:"q-does-file-sharing-work-similarly-to-docker-desktop-do-i-have-to-do-any-additional-configuration-to-mount-volumes-to-vms",level:4},{value:"<strong>Q: Can containers reach back to host services via <code>host.docker.internal</code>?</strong>",id:"q-can-containers-reach-back-to-host-services-via-hostdockerinternal",level:4},{value:"<strong>Q: I don&#39;t need the Kubernetes cluster deployed by Rancher Desktop; how do I disable it to save resources?</strong>",id:"q-i-dont-need-the-kubernetes-cluster-deployed-by-rancher-desktop-how-do-i-disable-it-to-save-resources",level:4},{value:"<strong>Q: What&#39;s happening to the Kubernetes Image Manager (kim)?</strong>",id:"q-whats-happening-to-the-kubernetes-image-manager-kim",level:4},{value:"<strong>Q: Running <code>brew install rancher</code> is failing with a <code>It seems there is already a Binary at &#39;/usr/local/bin/&lt;BINARY&gt;&#39;</code> error, why?</strong>",id:"q-running-brew-install-rancher-is-failing-with-a-it-seems-there-is-already-a-binary-at-usrlocalbinbinary-error-why",level:4},{value:"Q: I installed <code>nerdctl</code> through the Arch User Repository, but it doesn&#39;t work with Rancher Desktop, why?",id:"q-i-installed-nerdctl-through-the-arch-user-repository-but-it-doesnt-work-with-rancher-desktop-why",level:4},{value:"<strong>Q: The tools on the Support Utilities page (in Rancher Desktop &lt;1.3.0) are not installed and I see an <code>Insufficient permission to manipulate /usr/local/bin</code> error, how do I fix it?</strong>",id:"q-the-tools-on-the-support-utilities-page-in-rancher-desktop-130-are-not-installed-and-i-see-an-insufficient-permission-to-manipulate-usrlocalbin-error-how-do-i-fix-it",level:4},{value:"<strong>Q: Is Cygwin compatible with Rancher Desktop?</strong>",id:"q-is-cygwin-compatible-with-rancher-desktop",level:4},{value:"<strong>Q: Where does Rancher Desktop actually put the data volumes?</strong>",id:"q-where-does-rancher-desktop-actually-put-the-data-volumes",level:4},{value:"<strong>Q: How can I downgrade Rancher Desktop to a non-current (older) release version</strong>",id:"q-how-can-i-downgrade-rancher-desktop-to-a-non-current-older-release-version",level:4},{value:"Q: Rancher Desktop becomes unresponsive after my Windows machine wakes up from hibernation. How can I get my Rancher Desktop session working again with out having to reboot my machine?",id:"q-rancher-desktop-becomes-unresponsive-after-my-windows-machine-wakes-up-from-hibernation-how-can-i-get-my-rancher-desktop-session-working-again-with-out-having-to-reboot-my-machine",level:4},{value:"<strong>Q: What is <code>rancher-desktop-data</code> and why is it in a stopped state?</strong>",id:"q-what-is-rancher-desktop-data-and-why-is-it-in-a-stopped-state",level:4}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/faq"})),(0,r.kt)("p",null,"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop."),(0,r.kt)("h4",{id:"q-is-rancher-desktop-a-desktop-version-of-rancher"},(0,r.kt)("strong",{parentName:"h4"},"Q: Is Rancher Desktop a desktop version of Rancher?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," No. Rancher Desktop is not Rancher on the Desktop."),(0,r.kt)("p",null,"While ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," and ",(0,r.kt)("a",{parentName:"p",href:"https://rancherdesktop.io/"},"Rancher Desktop")," share the ",(0,r.kt)("em",{parentName:"p"},"Rancher")," name, they do different things. But, the two solutions do complement each other:"),(0,r.kt)("p",null,"Rancher is a complete software stack for managing multiple Kubernetes clusters across any infrastructure."),(0,r.kt)("p",null,"Rancher Desktop provides container management and a Kubernetes instance on the desktop to support local development use cases."),(0,r.kt)("h4",{id:"q-is-there-a-kubernetes-cluster-explorer-available-in-rancher-desktop"},(0,r.kt)("strong",{parentName:"h4"},"Q: Is there a Kubernetes Cluster Explorer available in Rancher Desktop?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Yes, the Rancher Dashboard is included as a feature preview in the release 1.2.1. Invoke the dashboard by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Dashboard")," option in the system tray menu."),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/"},"Rancher Desktop"),".\nLearn more about ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/why-rancher"},"Rancher"),"."),(0,r.kt)("h4",{id:"q-can-i-have-docker-desktop-installed-alongside-rancher-desktop"},(0,r.kt)("strong",{parentName:"h4"},"Q: Can I have Docker Desktop installed alongside Rancher Desktop?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Yes, but they cannot be run at the same time as both Rancher Desktop and Docker Desktop use the same Docker socket (",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/docker.sock"),"). Be sure to stop one before starting the other."),(0,r.kt)("h4",{id:"q-how-can-i-perform-a-clean-uninstall-of-rancher-desktop"},(0,r.kt)("strong",{parentName:"h4"},"Q: How can I perform a clean uninstall of Rancher Desktop?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," First, perform a ",(0,r.kt)("a",{parentName:"p",href:"/1.11/ui/troubleshooting#factory-reset"},"Factory Reset"),", and then uninstall the app. The uninstall process varies based on the operating system. For more information, please refer ",(0,r.kt)("a",{parentName:"p",href:"/1.11/getting-started/installation"},"here"),"."),(0,r.kt)("h4",{id:"q-what-support-if-any-is-available-for-dns-over-vpn-on-windows"},(0,r.kt)("strong",{parentName:"h4"},"Q: What support, if any, is available for DNS over VPN on Windows?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," An alternative DNS resolver for Windows has been implemented to address some of the VPN issues on Windows. It should support DNS lookup over VPN connections. It has to be enabled manually by editing an internal ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1899#issuecomment-1109128277"},"configuration file"),"."),(0,r.kt)("h4",{id:"q-what-does-the-wsl-integration-tab-do"},(0,r.kt)("strong",{parentName:"h4"},'Q: What does the "WSL Integration" tab do?')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," This makes the Kubernetes configuration accessible in the displayed WSL distributions so that you can use commands such as ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to communicate with Kubernetes."),(0,r.kt)("h4",{id:"q-where-can-i-find-detailed-logs"},(0,r.kt)("strong",{parentName:"h4"},"Q: Where can I find detailed logs?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Click on the ",(0,r.kt)("strong",{parentName:"p"},"Troubleshooting")," tab, then click on ",(0,r.kt)("strong",{parentName:"p"},"Show Logs"),"."),(0,r.kt)("h4",{id:"q-how-can-i-enable-the-dashboard-for-the-traefik-ingress-controller"},(0,r.kt)("strong",{parentName:"h4"},"Q: How can I enable the dashboard for the Traefik ingress controller?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," For security reasons, the Traefik dashboard is not exposed by default. However, it is possible to expose the dashboard in multiple ways. For instance, you can use one of the two approaches shown below."),(0,r.kt)("h5",{id:"using-port-forward-to-enable-dashboard-access"},"Using ",(0,r.kt)("inlineCode",{parentName:"h5"},"port-forward")," to enable dashboard access"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl port-forward -n kube-system $(kubectl -n kube-system get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000\n')),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9000/dashboard/"},"http://127.0.0.1:9000/dashboard/")," in your browser to view the Traefik dashboard."),(0,r.kt)("h5",{id:"using-helmchartconfig-to-enable-dashboard-access"},"Using ",(0,r.kt)("inlineCode",{parentName:"h5"},"HelmChartConfig")," to enable dashboard access"),(0,r.kt)("p",null,"Copy the instructions below into a file, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"expose-traefik.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    dashboard:\n      enabled: true\n    ports:\n      traefik:\n        expose: true # Avoid this in production deployments\n    logs:\n      access:\n        enabled: true\n")),(0,r.kt)("p",null,"Run the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f expose-traefik.yaml\n")),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9000/dashboard/"},"http://127.0.0.1:9000/dashboard/")," in your browser to view the Traefik dashboard."),(0,r.kt)("h4",{id:"q-can-i-disable-traefik-and-will-doing-so-remove-traefik-resources"},(0,r.kt)("strong",{parentName:"h4"},"Q: Can I disable Traefik, and will doing so remove Traefik resources?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Yes, you can disable Traefik in order to free up port 80 and 443 for alternate ingress configuration. Disabling Traefik will ",(0,r.kt)("em",{parentName:"p"},"not")," delete existing resources. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable Traefik")," feature is selected under ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes Settings"),"; uncheck this box to disable it."),(0,r.kt)("p",null,"If you want to delete Traefik resources, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Reset Kubernetes")," on the ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes Settings")," panel of the UI."),(0,r.kt)("h4",{id:"q-is-there-support-for-internal-container-port-forwarding"},(0,r.kt)("strong",{parentName:"h4"},"Q: Is there support for internal container port forwarding?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Yes, support for this feature is available on all three platforms, Windows, Linux, and macOS, as of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/releases/tag/v1.1.0"},"v1.1.0"),"."),(0,r.kt)("h4",{id:"q-does-file-sharing-work-similarly-to-docker-desktop-do-i-have-to-do-any-additional-configuration-to-mount-volumes-to-vms"},(0,r.kt)("strong",{parentName:"h4"},"Q: Does file sharing work similarly to Docker Desktop? Do I have to do any additional configuration to mount volumes to VMs?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Currently, the following directories are shared by default: ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/$USER")," on macOS, ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/$USER")," on Linux, and ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/rancher-desktop")," on both. For Windows, all files are automatically shared via WSL2."),(0,r.kt)("p",null,"Standard Docker volumes that are not generally accessible from the host computer work out of the box."),(0,r.kt)("p",null,"To access other directories on Linux/macOS, you will have to perform additional configuration."),(0,r.kt)("p",null,"If you want to change the behavior of the mounts, that will also require ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1209#issuecomment-1370181132"},"additional configuration"),"."),(0,r.kt)("h4",{id:"q-can-containers-reach-back-to-host-services-via-hostdockerinternal"},(0,r.kt)("strong",{parentName:"h4"},"Q: Can containers reach back to host services via ",(0,r.kt)("inlineCode",{parentName:"strong"},"host.docker.internal"),"?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Yes. On Windows, you may need to create a firewall rule to allow communication between the host and the container. You can run below command in a privileged powershell to create the firewall rule."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'New-NetFirewallRule -DisplayName "WSL" -Direction Inbound -InterfaceAlias "vEthernet (WSL)" -Action Allow\n')),(0,r.kt)("h4",{id:"q-i-dont-need-the-kubernetes-cluster-deployed-by-rancher-desktop-how-do-i-disable-it-to-save-resources"},(0,r.kt)("strong",{parentName:"h4"},"Q: I don't need the Kubernetes cluster deployed by Rancher Desktop; how do I disable it to save resources?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Open ",(0,r.kt)("strong",{parentName:"p"},"Rancher Desktop")," settings, click the cog to open ",(0,r.kt)("strong",{parentName:"p"},"Preferences"),", select ",(0,r.kt)("strong",{parentName:"p"},"Kuberentes"),", uncheck ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable Kubernetes")," feature is selected under ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes Settings"),"; uncheck this box to disable it."),(0,r.kt)("p",null,"This will allow you to run just ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerd")," by without allocating resources for Kubernetes."),(0,r.kt)("h4",{id:"q-whats-happening-to-the-kubernetes-image-manager-kim"},(0,r.kt)("strong",{parentName:"h4"},"Q: What's happening to the Kubernetes Image Manager (kim)?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," As of version 1.0, Kim is no longer shipped and has been replaced by nerdctl and the Docker CLI."),(0,r.kt)("h4",{id:"q-running-brew-install-rancher-is-failing-with-a-it-seems-there-is-already-a-binary-at-usrlocalbinbinary-error-why"},(0,r.kt)("strong",{parentName:"h4"},"Q: Running ",(0,r.kt)("inlineCode",{parentName:"strong"},"brew install rancher")," is failing with a ",(0,r.kt)("inlineCode",{parentName:"strong"},"It seems there is already a Binary at '/usr/local/bin/<BINARY>'")," error, why?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," If any of the Rancher Desktop supporting utilities (Helm, kubectl, nerdctl, docker) are already managed by Homebrew, then the installation fails due to how the Homebrew cask formula is defined. Installing using the Mac app will avoid this issue."),(0,r.kt)("h4",{id:"q-i-installed-nerdctl-through-the-arch-user-repository-but-it-doesnt-work-with-rancher-desktop-why"},"Q: I installed ",(0,r.kt)("inlineCode",{parentName:"h4"},"nerdctl")," through the Arch User Repository, but it doesn't work with Rancher Desktop, why?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," For Rancher Desktop, ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," must run inside the VM and not on the host. The host version distributed with Rancher Desktop is just a shell wrapper to execute the command inside the VM."),(0,r.kt)("h4",{id:"q-the-tools-on-the-support-utilities-page-in-rancher-desktop-130-are-not-installed-and-i-see-an-insufficient-permission-to-manipulate-usrlocalbin-error-how-do-i-fix-it"},(0,r.kt)("strong",{parentName:"h4"},"Q: The tools on the Support Utilities page (in Rancher Desktop <1.3.0) are not installed and I see an ",(0,r.kt)("inlineCode",{parentName:"strong"},"Insufficient permission to manipulate /usr/local/bin")," error, how do I fix it?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," This occurs when you do not have ownership of ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),". A long-term solution to improve the handling of permissions is in the works. In the meantime, a temporary workaround is to change ownership of ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," by running ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chown $USER /usr/local/bin"),". When you are able to write to the directory, Rancher Desktop should be able to create the symlinks."),(0,r.kt)("p",null,"From versions 1.3.0 and above, we no longer create symlinks in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," but in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," and put that directory on the PATH instead, to avoid having to deal with write permissions to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and file conflicts. We strongly recommend you to upgrade to the latest version of Rancher Desktop."),(0,r.kt)("h4",{id:"q-is-cygwin-compatible-with-rancher-desktop"},(0,r.kt)("strong",{parentName:"h4"},"Q: Is Cygwin compatible with Rancher Desktop?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," No, but there are plans to add compatibility."),(0,r.kt)("h4",{id:"q-where-does-rancher-desktop-actually-put-the-data-volumes"},(0,r.kt)("strong",{parentName:"h4"},"Q: Where does Rancher Desktop actually put the data volumes?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows:"),"\nOpen Run menu (Press Windows + R) and open the path provided below, depending on the active container runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dockerd(moby): \\\\wsl$\\rancher-desktop-data\\var\\lib\\docker\\volumes\ncontainerd: \\\\wsl$\\rancher-desktop-data\\var\\lib\\nerdctl\\dbb19c5e\\volumes\\<namespace>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"macOS & Linux:"),"\nNavigate to the path provided below in the (lima) VM, depending on the active container runtime. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl shell")," to access these paths in the VM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dockerd(moby): /var/lib/docker/volumes\ncontainerd: /var/lib/nerdctl/dbb19c5e/volumes/<namespace>\n")),(0,r.kt)("h4",{id:"q-how-can-i-downgrade-rancher-desktop-to-a-non-current-older-release-version"},(0,r.kt)("strong",{parentName:"h4"},"Q: How can I downgrade Rancher Desktop to a non-current (older) release version")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," We strongly recommend you use the current release version as it has the latest features and bug fixes included. However, if you want to downgrade to an earlier version, please follow the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Perform ",(0,r.kt)("inlineCode",{parentName:"li"},"Troubleshooting > Factory Reset")," from the current installation. Please make sure the ",(0,r.kt)("inlineCode",{parentName:"li"},"Keep cached Kubernetes images")," box is ",(0,r.kt)("em",{parentName:"li"},"not")," checked in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Factory Reset")," pop up dialog."),(0,r.kt)("li",{parentName:"ol"},"Uninstall the current version by following ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rancherdesktop.io/getting-started/installation"},"uninstallation instructions")," for your OS."),(0,r.kt)("li",{parentName:"ol"},"Install the older version that you need.")),(0,r.kt)("h4",{id:"q-rancher-desktop-becomes-unresponsive-after-my-windows-machine-wakes-up-from-hibernation-how-can-i-get-my-rancher-desktop-session-working-again-with-out-having-to-reboot-my-machine"},"Q: Rancher Desktop becomes unresponsive after my Windows machine wakes up from hibernation. How can I get my Rancher Desktop session working again with out having to reboot my machine?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," This is because of a WSL ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/WSL/issues/8696"},"bug")," that makes WSL unresponsive after hibernation on some Windows configurations. While the WSL bug itself is not yet resolved, various workarounds discussed on the GitHub issue thread make the problem a bit less frustrating; you can at least avoid a machine restart to get WSL and Rancher Desktop working again. You can follow the below steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Shutdown WSL via the command ",(0,r.kt)("inlineCode",{parentName:"li"},"wsl --shutdown"),". If the ",(0,r.kt)("inlineCode",{parentName:"li"},"wsl --shutdown")," command is successful then jump to step 3."),(0,r.kt)("li",{parentName:"ol"},"Stop and Restart the LxssManager service.")),(0,r.kt)(o.Z,{groupId:"mode",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Powershell",default:!0,mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stop the LxssManager service.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"stop-service lxssmanager\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start the LxssManager service.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"start-service lxssmanager\n"))),(0,r.kt)(s.Z,{value:"GUI",mdxType:"TabItem"},(0,r.kt)("p",null,"Open the list of services running on your machine using the command ",(0,r.kt)("inlineCode",{parentName:"p"},"services.msc"),". Locate the lxssmanager service in the list, right-click on it, and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Stop"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Start")," to stop and start the service."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Exit and Restart Rancher Desktop.")),(0,r.kt)("h4",{id:"q-what-is-rancher-desktop-data-and-why-is-it-in-a-stopped-state"},(0,r.kt)("strong",{parentName:"h4"},"Q: What is ",(0,r.kt)("inlineCode",{parentName:"strong"},"rancher-desktop-data")," and why is it in a stopped state?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-desktop-data")," is a persistent volume used for storage, such as container images. When running, the volume is mounted inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-desktop")," distribution and it will never run by itself. It is for implementation purposes and can be ignored by Rancher Desktop users."))}h.isMDXComponent=!0}}]);