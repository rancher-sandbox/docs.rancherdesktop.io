"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[3106],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,c=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(c,p(p({ref:t},k),{},{components:n})):a.createElement(c,p({ref:t},k))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var a=n(83117),r=(n(67294),n(3905));const l={title:"\u5b89\u88c5"},p=void 0,i={unversionedId:"getting-started/installation",id:"version-1.11/getting-started/installation",title:"\u5b89\u88c5",description:"Rancher Desktop \u4f5c\u4e3a\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u4ea4\u4ed8\uff0c\u4f60\u53ef\u4ee5\u4ece GitHub Releases \u9875\u9762\u4e0b\u8f7d\u5b83\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.11/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/zh/1.11/getting-started/installation",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.11/getting-started/installation.md",tags:[],version:"1.11",frontMatter:{title:"\u5b89\u88c5"},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/zh/1.11/"},next:{title:"\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6",permalink:"/zh/1.11/getting-started/deployment"}},o={},s=[{value:"macOS",id:"macos",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:3},{value:"\u5728 macOS \u4e0a\u5b89\u88c5 Rancher Desktop",id:"\u5728-macos-\u4e0a\u5b89\u88c5-rancher-desktop",level:3},{value:"\u5728 macOS \u4e0a\u5378\u8f7d Rancher Desktop",id:"\u5728-macos-\u4e0a\u5378\u8f7d-rancher-desktop",level:3},{value:"Windows",id:"windows",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42-1",level:3},{value:"\u5728 Windows \u4e0a\u5b89\u88c5 Rancher Desktop",id:"\u5728-windows-\u4e0a\u5b89\u88c5-rancher-desktop",level:3},{value:"\u5728 Windows \u4e0a\u5378\u8f7d Rancher Desktop",id:"\u5728-windows-\u4e0a\u5378\u8f7d-rancher-desktop",level:3},{value:"Linux",id:"linux",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42-2",level:3},{value:"\u786e\u4fdd\u4f60\u53ef\u4ee5\u8bbf\u95ee <code>/dev/kvm</code>",id:"\u786e\u4fdd\u4f60\u53ef\u4ee5\u8bbf\u95ee-devkvm",level:4},{value:"<code>pass</code> \u8bbe\u7f6e",id:"pass-\u8bbe\u7f6e",level:4},{value:"Traefik \u7aef\u53e3\u7ed1\u5b9a\u8bbf\u95ee",id:"traefik-\u7aef\u53e3\u7ed1\u5b9a\u8bbf\u95ee",level:4},{value:"\u901a\u8fc7 .deb \u5305\u5b89\u88c5",id:"\u901a\u8fc7-deb-\u5305\u5b89\u88c5",level:3},{value:"\u5378\u8f7d .deb \u5305",id:"\u5378\u8f7d-deb-\u5305",level:3},{value:"\u901a\u8fc7 .rpm \u5305\u5b89\u88c5",id:"\u901a\u8fc7-rpm-\u5305\u5b89\u88c5",level:3},{value:"\u5378\u8f7d .rpm \u5305",id:"\u5378\u8f7d-rpm-\u5305",level:3},{value:"\u901a\u8fc7 AppImage \u5b89\u88c5",id:"\u901a\u8fc7-appimage-\u5b89\u88c5",level:3},{value:"\u5378\u8f7d AppImage",id:"\u5378\u8f7d-appimage",level:3},{value:"\u4ee3\u7406\u73af\u5883\uff1a\u91cd\u8981\u7684 URL \u6a21\u5f0f",id:"\u4ee3\u7406\u73af\u5883\u91cd\u8981\u7684-url-\u6a21\u5f0f",level:2}],k={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher Desktop \u4f5c\u4e3a\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u4ea4\u4ed8\uff0c\u4f60\u53ef\u4ee5\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/releases"},"GitHub Releases \u9875\u9762"),"\u4e0b\u8f7d\u5b83\u3002"),(0,r.kt)("p",null,"\u9996\u6b21\u8fd0\u884c\u6216\u66f4\u6539\u7248\u672c\u65f6\u4f1a\u4e0b\u8f7d Kubernetes \u5bb9\u5668\u955c\u50cf\u3002\u56e0\u6b64\uff0c\u9996\u6b21\u8fd0\u884c\u65b0\u7684 Kubernetes \u7248\u672c\u65f6\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u6765\u52a0\u8f7d\u8fd9\u4e9b\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u5b89\u88c5 Rancher Desktop \u540e\uff0c\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u4ee5\u4e0b\u652f\u6301\u7684\u5de5\u5177\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"kubectl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl"},"nerdctl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/moby/moby"},"Moby")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"))),(0,r.kt)("h2",{id:"macos"},"macOS"),(0,r.kt)("h3",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,r.kt)("p",null,"Rancher Desktop \u5728 macOS \u4e0a\u8fd0\u884c\u9700\u8981\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS Catalina 10.15 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5e26\u6709 VT-x \u7684 Apple \u82af\u7247 (M1) \u6216 Intel CPU\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u3002")),(0,r.kt)("p",null,"\u8fd8\u5efa\u8bae\u5177\u5907\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8 GB \u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},"4 \u4e2a CPU")),(0,r.kt)("p",null,"\u4f60\u8981\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u80fd\u8fd8\u9700\u8981\u4e00\u4e9b\u989d\u5916\u7684\u8d44\u6e90\u3002"),(0,r.kt)("h3",{id:"\u5728-macos-\u4e0a\u5b89\u88c5-rancher-desktop"},"\u5728 macOS \u4e0a\u5b89\u88c5 Rancher Desktop"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230 GitHub \u4e0a\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-desktop/releases"},"Releases \u9875\u9762"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u4e0b\u8f7d\u7684 Rancher Desktop \u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c55\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"Assets")," \u90e8\u5206\u5e76\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"li"},"Rancher.Desktop-X.Y.Z.dmg"),"\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"X.Y.Z")," \u662f Rancher Desktop \u7684\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230\u4e0b\u8f7d\u5b89\u88c5\u7a0b\u5e8f\u7684\u76ee\u5f55\uff0c\u5e76\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f\u3002\u8fd9\u4e2a\u76ee\u5f55\u901a\u5e38\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"\u4e0b\u8f7d"),"\u6587\u4ef6\u5939\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53cc\u51fb DMG \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u6253\u5f00\u7684",(0,r.kt)("strong",{parentName:"li"},"\u8bbf\u8fbe"),"\u7a97\u53e3\u4e2d\uff0c\u5c06 Rancher Desktop \u56fe\u6807\u62d6\u5230",(0,r.kt)("strong",{parentName:"li"},"\u5e94\u7528\u7a0b\u5e8f"),"\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"\u5e94\u7528\u7a0b\u5e8f"),"\u6587\u4ef6\u5939\uff0c\u7136\u540e\u53cc\u51fb Rancher Desktop \u6765\u542f\u52a8\u5b83\u3002")),(0,r.kt)("p",null,"\u5b89\u88c5 Rancher Desktop \u540e\uff0c\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u4ee5\u4e0b\u652f\u6301\u7684\u5de5\u5177\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"kubectl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl"},"nerdctl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/moby/moby"},"docker (moby)"))),(0,r.kt)("h3",{id:"\u5728-macos-\u4e0a\u5378\u8f7d-rancher-desktop"},"\u5728 macOS \u4e0a\u5378\u8f7d Rancher Desktop"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00",(0,r.kt)("strong",{parentName:"li"},"\u8bbf\u8fbe")," > ",(0,r.kt)("strong",{parentName:"li"},"\u5e94\u7528\u7a0b\u5e8f"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230 Rancher Desktop\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u4e2d\u5b83\uff0c\u7136\u540e\u9009\u62e9",(0,r.kt)("strong",{parentName:"li"},"\u6587\u4ef6 > \u79fb\u5230\u5e9f\u7eb8\u7bd3"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8981\u5220\u9664\u5e94\u7528\u7a0b\u5e8f\uff0c\u9009\u62e9",(0,r.kt)("strong",{parentName:"li"},"\u8bbf\u8fbe > \u6e05\u5012\u5e9f\u7eb8\u7bd3"),"\u3002")),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("h3",{id:"\u8981\u6c42-1"},"\u8981\u6c42"),(0,r.kt)("p",null,"Rancher Desktop \u5728 Windows \u4e0a\u8fd0\u884c\u9700\u8981\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows 10 build 1909 \u6216\u66f4\u9ad8\u7248\u672c\u3002\u652f\u6301\u5bb6\u5ead\u7248\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5177\u6709",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed"},"\u865a\u62df\u5316\u529f\u80fd"),"\u7684\u4e3b\u673a\u4e0a\u8fd0\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u3002")),(0,r.kt)("p",null,"Rancher Desktop \u5728 Windows \u4e0a\u9700\u8981 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Windows Subsystem for Linux"),"\uff0c\u5b83\u5c06\u4f5c\u4e3a Rancher Desktop \u8bbe\u7f6e\u7684\u4e00\u90e8\u5206\u81ea\u52a8\u5b89\u88c5\u3002\u4f60\u4e0d\u9700\u8981\u624b\u52a8\u4e0b\u8f7d\u53d1\u884c\u7248\u3002"),(0,r.kt)("p",null,"\u8fd8\u5efa\u8bae\u5177\u5907\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8 GB \u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},"4 \u4e2a CPU")),(0,r.kt)("p",null,"\u4f60\u8981\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u80fd\u8fd8\u9700\u8981\u4e00\u4e9b\u989d\u5916\u7684\u8d44\u6e90\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u4f60\u53ef\u4ee5\u5728 Windows \u4e3b\u673a\u4e0a\u4ee5\u975e\u7ba1\u7406\u5458\u7528\u6237\u8eab\u4efd\u4f7f\u7528 Rancher Desktop\u3002\u4f46\u662f\uff0c\u4ee5\u4e0b\u7ec4\u4ef6\u7684\u5b89\u88c5\u8fc7\u7a0b\u9700\u8981\u7ba1\u7406\u5458\u7684\u5e72\u9884\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WSL2"),"\uff1a\u4f60\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\u624d\u80fd\u5b89\u88c5 WSL2\uff0c\u5b83\u662f Rancher Desktop \u7684\u91cd\u8981\u7ec4\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rancher Desktop Privileged Service"),"\uff1a\u4f60\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\u624d\u80fd\u5b89\u88c5 Rancher Desktop Privileged Service\uff0c\u8fd9\u662f\u5728\u4e3b\u673a\u7684\u6240\u6709\u63a5\u53e3\u4e0a\u516c\u5f00\u8fd0\u884c\u5728\u5bb9\u5668\u5185\u7684\u5e94\u7528\u7a0b\u5e8f/\u670d\u52a1\u6240\u5fc5\u9700\u7684\u3002\u4f60\u4e5f\u53ef\u4ee5\u8df3\u8fc7 Rancher Desktop Privileged Service \u7684\u5b89\u88c5\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u4f60\u5c06\u65e0\u6cd5\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," \u4e4b\u5916\u7684\u4efb\u4f55\u63a5\u53e3\u4e0a\u516c\u5f00\u5e94\u7528\u7a0b\u5e8f/\u670d\u52a1\u3002")),(0,r.kt)("h3",{id:"\u5728-windows-\u4e0a\u5b89\u88c5-rancher-desktop"},"\u5728 Windows \u4e0a\u5b89\u88c5 Rancher Desktop"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230 GitHub \u4e0a\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-desktop/releases"},"Releases \u9875\u9762"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u4e0b\u8f7d\u7684 Rancher Desktop \u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c55\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"Assets")," \u90e8\u5206\u5e76\u4e0b\u8f7d Windows \u5b89\u88c5\u7a0b\u5e8f\u3002\u5b83\u7684\u540d\u79f0\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"Rancher.Desktop.Setup.X.Y.Z.msi"),"\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"X.Y.Z")," \u662f Rancher Desktop \u7684\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230\u4e0b\u8f7d\u5b89\u88c5\u7a0b\u5e8f\u7684\u76ee\u5f55\uff0c\u5e76\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f\u3002\u8fd9\u4e2a\u76ee\u5f55\u901a\u5e38\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"\u4e0b\u8f7d"),"\u6587\u4ef6\u5939\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8bb8\u53ef\u534f\u8bae\u5e76\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"I Agree")," \u6765\u7ee7\u7eed\u5b89\u88c5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u51fa\u73b0\u63d0\u793a\uff0c\u8bf7\u9009\u62e9\u4e3a\u8ba1\u7b97\u673a\u7684\u6240\u6709\u7528\u6237\u5b89\u88c5\uff0c\u6216\u4ec5\u4e3a\u5f53\u524d\u7528\u6237\u5b89\u88c5\u3002\u5efa\u8bae\u4e3a\u6240\u6709\u7528\u6237\u5b89\u88c5\uff0c\u4ee5\u4fbf\u5b89\u88c5 Rancher Desktop Privileged Service\uff0c\u5982\u4e0a\u6240\u8ff0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6309\u7167\u63d0\u793a\u786e\u8ba4\u5b89\u88c5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Finish")," \u6765\u5173\u95ed\u5b89\u88c5\u5411\u5bfc\u3002")),(0,r.kt)("h3",{id:"\u5728-windows-\u4e0a\u5378\u8f7d-rancher-desktop"},"\u5728 Windows \u4e0a\u5378\u8f7d Rancher Desktop"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u4efb\u52a1\u680f\u4e2d\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5f00\u59cb"),"\u83dc\u5355\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230",(0,r.kt)("strong",{parentName:"li"},"\u8bbe\u7f6e > \u5e94\u7528\u7a0b\u5e8f > \u5e94\u7528\u7a0b\u5e8f\u548c\u529f\u80fd"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230\u5e76\u9009\u62e9 Rancher Desktop\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5378\u8f7d"),"\uff0c\u51fa\u73b0\u786e\u8ba4\u4fe1\u606f\u65f6\u518d\u6b21\u70b9\u51fb\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6309\u7167 Rancher Desktop \u5378\u8f7d\u7a0b\u5e8f\u4e0a\u7684\u63d0\u793a\u7ee7\u7eed\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u540e\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5b8c\u6210"),"\u3002")),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("h3",{id:"\u8981\u6c42-2"},"\u8981\u6c42"),(0,r.kt)("p",null,"Rancher Desktop \u5728 Linux \u4e0a\u8fd0\u884c\u9700\u8981\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u53ef\u4ee5\u5b89\u88c5 .deb \u6216 .rpm \u5305\u6216 AppImages \u7684\u53d1\u884c\u7248\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5e26\u6709 AMD-V \u6216 VT-x \u7684 x86_64 \u5904\u7406\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/dev/kvm")," \u4e0a\u7684\u8bfb\u5199\u6743\u9650\u3002\u8be6\u60c5\u89c1\u4e0b\u6587\u3002")),(0,r.kt)("p",null,"\u8fd8\u5efa\u8bae\u5177\u5907\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8 GB \u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},"4 \u4e2a CPU")),(0,r.kt)("p",null,"\u4f60\u8981\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u80fd\u8fd8\u9700\u8981\u4e00\u4e9b\u989d\u5916\u7684\u8d44\u6e90\u3002"),(0,r.kt)("h4",{id:"\u786e\u4fdd\u4f60\u53ef\u4ee5\u8bbf\u95ee-devkvm"},"\u786e\u4fdd\u4f60\u53ef\u4ee5\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"h4"},"/dev/kvm")),(0,r.kt)("p",null,"Rancher Desktop \u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/kvm")," \u7684\u6743\u9650\uff0c\u800c\u5728\u67d0\u4e9b\u53d1\u884c\u7248\uff08\u4f8b\u5982 Ubuntu 18.04\uff09\u4e0a\uff0c\u7528\u6237\u6ca1\u6709\u8db3\u591f\u7684\u6743\u9650\u3002\n\u8981\u68c0\u67e5\u4f60\u662f\u5426\u5177\u6709\u6240\u9700\u7684\u6743\u9650\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ -r /dev/kvm ] && [ -w /dev/kvm ] || echo 'insufficient privileges'\n")),(0,r.kt)("p",null,"\u5982\u679c\u8f93\u51fa\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"insufficientprivilege"),"\uff0c\u4f60\u9700\u8981\u5c06\u4f60\u7684\u7528\u6237\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"kvm")," \u7ec4\u3002\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sudo usermod -a -G kvm "$USER"\n')),(0,r.kt)("p",null,"\u7136\u540e\u91cd\u65b0\u542f\u52a8\u4f7f\u66f4\u6539\u751f\u6548\u3002"),(0,r.kt)("h4",{id:"pass-\u8bbe\u7f6e"},(0,r.kt)("inlineCode",{parentName:"h4"},"pass")," \u8bbe\u7f6e"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher Desktop \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," \u6765\u5b89\u5168\u5730\u5b58\u50a8\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker login")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl login")," \u4f20\u9012\u7684\u51ed\u8bc1\u3002\u5728\u7b2c\u4e00\u6b21\u5728\u4e3b\u673a\u4e0a\u4f7f\u7528\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," \u9700\u8981\u4f60\u8fdb\u884c\u5c11\u91cf\u7684\u8bbe\u7f6e\u3002\u5982\u679c\u4f60\u4e0d\u6253\u7b97\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker login")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl login"),"\uff0c\u4f60\u4e0d\u9700\u8981\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"pass"),"\u3002\u4f46\u8bf7\u8bb0\u4f4f\uff0c\u5982\u679c\u4f60\u4ee5\u540e\u9700\u8981\u4f7f\u7528\u5b83\u4eec\uff0c\u4f60\u5fc5\u987b\u8bbe\u7f6e\u5b83\u4eec\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u5b89\u88c5 Rancher Desktop \u540e\uff0c\u4f60\u5e94\u8be5\u521b\u5efa\u4e00\u4e2a GPG \u5bc6\u94a5\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," \u4f1a\u4f7f\u7528\u5b83\u6765\u4fdd\u62a4\u5bc6\u6587\u3002\u8981\u521b\u5efa GPG \u5bc6\u94a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gpg --generate-key\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u5e94\u8be5\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"8D818FB37A9279E341F01506ED96AD27A40C9C73")," \u7c7b\u4f3c\u3002\n\u8fd9\u662f\u4f60\u7684\u5bc6\u94a5 ID\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u6b64\u5bc6\u94a5 ID \u4f20\u9012\u7ed9\u5b83\u6765\u521d\u59cb\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"pass"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pass init 8D818FB37A9279E341F01506ED96AD27A40C9C73\n")),(0,r.kt)("p",null,"\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://www.passwordstore.org/"},"\u6b64\u5904"),"\u3002"),(0,r.kt)("h4",{id:"traefik-\u7aef\u53e3\u7ed1\u5b9a\u8bbf\u95ee"},"Traefik \u7aef\u53e3\u7ed1\u5b9a\u8bbf\u95ee"),(0,r.kt)("p",null,"Rancher Desktop \u4f7f\u7528 Traefik \u4f5c\u4e3a\u9ed8\u8ba4 Ingress Controller\u3002\u7531\u4e8e Traefik Ingress \u4e0a\u7684\u7aef\u53e3\u8bbf\u95ee\u53d7\u9650\uff0c\u7528\u6237\u5728\u90e8\u7f72 Rancher Desktop \u540e\u53ef\u80fd\u4f1a\u9047\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"permission denied")," \u9519\u8bef\u3002\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\uff08\u4f8b\u5982 Ubuntu 20.04\uff09\u4e0d\u5141\u8bb8\u975e root \u7528\u6237\u76d1\u542c ",(0,r.kt)("inlineCode",{parentName:"p"},"1024")," \u4ee5\u4e0b\u7684 TCP \u548c UDP \u7aef\u53e3\u3002\u4e3a\u4e86\u8ba9 Traefik \u76d1\u542c\u672c\u5730\u4e3b\u673a\u4e0a\u7684\u7279\u6743\u7aef\u53e3\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo sysctl -w net.ipv4.ip_unprivileged_port_start=80\n")),(0,r.kt)("p",null,"\u547d\u4ee4\u8fd0\u884c\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"80")," \u53ca\u4ee5\u4e0a\u7684\u6240\u6709\u7aef\u53e3\u90fd\u5c06\u53d8\u4e3a\u975e\u7279\u6743\u7aef\u53e3\uff0cTraefik \u5c06\u80fd\u591f\u6210\u529f\u8bbf\u95ee\u8fd9\u4e9b\u7aef\u53e3\u3002"),(0,r.kt)("p",null,"\u8981\u5728\u91cd\u542f\u540e\u5c06\u6b64\u66f4\u6539\u4fdd\u7559\u4e3a\u81ea\u5b9a\u4e49\u5185\u6838\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u76f8\u540c\u7684\u547d\u4ee4\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7-deb-\u5305\u5b89\u88c5"},"\u901a\u8fc7 .deb \u5305\u5b89\u88c5"),(0,r.kt)("p",null,"\u6dfb\u52a0 Rancher Desktop \u4ed3\u5e93\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 Rancher Desktop\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -s https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/Release.key | gpg --dearmor | sudo dd status=none of=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg\necho 'deb [signed-by=/usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg] https://download.opensuse.org/repositories/isv:/Rancher:/stable/deb/ ./' | sudo dd status=none of=/etc/apt/sources.list.d/isv-rancher-stable.list\nsudo apt update\nsudo apt install rancher-desktop\n")),(0,r.kt)("h3",{id:"\u5378\u8f7d-deb-\u5305"},"\u5378\u8f7d .deb \u5305"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u5305\u3001\u4ed3\u5e93\u548c\u5bc6\u94a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt remove --autoremove rancher-desktop\nsudo rm /etc/apt/sources.list.d/isv-rancher-stable.list\nsudo rm /usr/share/keyrings/isv-rancher-stable-archive-keyring.gpg\nsudo apt update\n")),(0,r.kt)("h3",{id:"\u901a\u8fc7-rpm-\u5305\u5b89\u88c5"},"\u901a\u8fc7 .rpm \u5305\u5b89\u88c5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aRancher Desktop \u5728 Linux \u4e0a\u4f7f\u7528 QEMU\uff0c\u800c RHEL\u3001Fedora \u548c\u76f8\u5173\u53d1\u884c\u7248\u6253\u5305 QEMU \u7684\u65b9\u5f0f\u4e0e\u5176\u4ed6\u53d1\u884c\u7248\u4e0d\u540c\u3002\u8981\u5728\u8fd9\u4e9b\u53d1\u884c\u7248\u4e0a\u4f7f\u7528 Rancher Desktop\uff0c\u8bf7\u4f7f\u7528 AppImage\u3002"),(0,r.kt)("p",null,"\u5728 openSUSE \u4e0a\u6dfb\u52a0\u4ed3\u5e93\u5e76\u5b89\u88c5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo zypper addrepo https://download.opensuse.org/repositories/isv:/Rancher:/stable/rpm/isv:Rancher:stable.repo\nsudo zypper install rancher-desktop\n")),(0,r.kt)("h3",{id:"\u5378\u8f7d-rpm-\u5305"},"\u5378\u8f7d .rpm \u5305"),(0,r.kt)("p",null,"\u786e\u4fdd Rancher Desktop \u5df2\u9000\u51fa\uff08\u5982\u679c\u6ca1\u6709\uff0c\u5b83\u5e94\u8be5\u51fa\u73b0\u5728 Dock \u4e2d\uff09\uff0c\u7136\u540e\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo zypper remove --clean-deps rancher-desktop\nsudo zypper removerepo isv_Rancher_stable\n")),(0,r.kt)("h3",{id:"\u901a\u8fc7-appimage-\u5b89\u88c5"},"\u901a\u8fc7 AppImage \u5b89\u88c5"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u786e\u4fdd\u5b89\u88c5\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg"),"\u3002\u4f8b\u5982\uff0c\u5728 Fedora \u4e0a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dnf install pass gnupg2\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://www.passwordstore.org/"},"\u6b64\u5904"),"\u4e0b\u8f7d AppImage\u3002\u8981\u8fd0\u884c\u5b83\uff0c\u53ea\u9700\u8981\u6dfb\u52a0\u53ef\u6267\u884c\u6743\u9650\uff0c\u7136\u540e\u6267\u884c\u5373\u53ef\u3002\u4e3a\u4e86\u66f4\u597d\u5730\u4e0e\u4f60\u7684\u684c\u9762\u96c6\u6210\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TheAssassin/AppImageLauncher"},"AppImageLauncher"),"\u3002"),(0,r.kt)("h3",{id:"\u5378\u8f7d-appimage"},"\u5378\u8f7d AppImage"),(0,r.kt)("p",null,"\u53ea\u9700\u5220\u9664 AppImage\u3002"),(0,r.kt)("h2",{id:"\u4ee3\u7406\u73af\u5883\u91cd\u8981\u7684-url-\u6a21\u5f0f"},"\u4ee3\u7406\u73af\u5883\uff1a\u91cd\u8981\u7684 URL \u6a21\u5f0f"),(0,r.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u4f1a\u4f7f\u7528\u5b89\u5168\u3001\u9501\u5b9a\u7684\u4e92\u8054\u7f51\u73af\u5883\uff0c\u5e76\u4e14\u9700\u8981\u901a\u8fc7\u4ee3\u7406\u914d\u7f6e\u5fc5\u8981\u7684 Rancher Desktop \u4f9d\u8d56\u9879\u3002\u4ee5\u4e0b\u662f\u4f60\u9700\u8981\u901a\u8fc7\u4ee3\u7406\u5141\u8bb8\u7684\u5173\u952e URL \u6a21\u5f0f\u5217\u8868\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u53ef\u7528\u7684 K3s \u7248\u672c\u4f9b\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://api.github.com/repos/k3s-io%E2%80%8B%E2%80%8B/k3s/releases"},"https://api.github.com/repos/k3s-io\u200b\u200b/k3s/releases")),(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d K3s \u7248\u672c\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io%E2%80%8B%E2%80%8B/k3s/releases/download"},"https://github.com/k3s-io\u200b\u200b/k3s/releases/download")),(0,r.kt)("li",{parentName:"ul"},"\u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"kuberlr"),"\u4e0b\u8f7d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," \u7248\u672c\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://storage.googleapis.com/kubernetes-release/release"},"https://storage.googleapis.com/kubernetes-release/release")),(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u53ef\u7528\u7684\u5347\u7ea7\u54cd\u5e94\u7a0b\u5e8f\u7248\u672c\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/longhorn/upgrade-responder/releases"},"https://github.com/longhorn/upgrade-responder/releases"))),(0,r.kt)("p",null,"\u8fd9\u4e9b\u4f9d\u8d56\u9879\u9002\u7528\u4e8e Rancher Desktop\uff0c\u5e76\u662f\u6574\u4e2a Rancher \u5e73\u53f0\u7684\u6807\u51c6\u5217\u8868\u3002"))}u.isMDXComponent=!0}}]);