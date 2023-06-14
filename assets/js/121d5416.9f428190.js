"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[365],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},320:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var n=t(3117),o=(t(7294),t(3905));const i={sidebar_label:"Network",title:"Network (Windows)"},a=void 0,s={unversionedId:"ui/preferences/wsl/network",id:"version-1.9/ui/preferences/wsl/network",title:"Network (Windows)",description:"Networking Tunnel",source:"@site/versioned_docs/version-1.9/ui/preferences/wsl/network.md",sourceDirName:"ui/preferences/wsl",slug:"/ui/preferences/wsl/network",permalink:"/1.9/ui/preferences/wsl/network",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/preferences/wsl/network.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"Network",title:"Network (Windows)"},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/1.9/ui/preferences/wsl/integrations"},next:{title:"Proxy",permalink:"/1.9/ui/preferences/wsl/proxy"}},c={},l=[{value:"Networking Tunnel",id:"networking-tunnel",level:3}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Windows_wsl_tabNetwork.png",alt:null})),(0,o.kt)("h3",{id:"networking-tunnel"},"Networking Tunnel"),(0,o.kt)("admonition",{title:"warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"experimental")," setting.")),(0,o.kt)("p",null,"Users can enable or disable the networking tunnel from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Network")," view. After changes are applied, Kubernetes will be restarted. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop-networking"},"developer notes")," for more information on the experimental Rancher Desktop Network."))}u.isMDXComponent=!0}}]);