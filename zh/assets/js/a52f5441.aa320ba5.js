"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5678],{1377:function(e,s,n){n.r(s),n.d(s,{assets:function(){return t},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return i}});var o=n(85893),r=n(11151);const d={title:"Skaffold \u4e0e Rancher Desktop"},c=void 0,l={id:"how-to-guides/skaffold-and-rancher-desktop",title:"Skaffold \u4e0e Rancher Desktop",description:"Skaffold \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e Kubernetes \u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u7684\u6301\u7eed\u5f00\u53d1\u3002Skaffold \u5904\u7406\u6784\u5efa\u3001\u63a8\u9001\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u6d41\uff0c\u5e76\u63d0\u4f9b\u7528\u4e8e\u521b\u5efa CI/CD \u6d41\u6c34\u7ebf\u7684\u6784\u5efa\u5757\u3002\u5b83\u80fd\u8ba9\u4f60\u4e13\u6ce8\u4e8e\u5728\u672c\u5730\u8fed\u4ee3\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\uff0cSkaffold \u5219\u80fd\u6301\u7eed\u90e8\u7f72\u5230\u4f60\u7684\u672c\u5730\u6216\u8fdc\u7a0b Kubernetes \u96c6\u7fa4\u3002\u8981\u4e86\u89e3\u6709\u5173 Skaffold \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Skaffold \u9879\u76ee\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/how-to-guides/skaffold-and-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/skaffold-and-rancher-desktop",permalink:"/zh/how-to-guides/skaffold-and-rancher-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/skaffold-and-rancher-desktop.md",tags:[],version:"latest",frontMatter:{title:"Skaffold \u4e0e Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Rancher Desktop \u4e0a\u7684 Rancher",permalink:"/zh/how-to-guides/rancher-on-rancher-desktop"},next:{title:"\u914d\u7f6e\u811a\u672c",permalink:"/zh/how-to-guides/provisioning-scripts"}},t={},i=[];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Details:n,TabItem:d,Tabs:c}=s;return n||f("Details",!0),d||f("TabItem",!0),c||f("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Skaffold \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e Kubernetes \u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u7684\u6301\u7eed\u5f00\u53d1\u3002Skaffold \u5904\u7406\u6784\u5efa\u3001\u63a8\u9001\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u6d41\uff0c\u5e76\u63d0\u4f9b\u7528\u4e8e\u521b\u5efa CI/CD \u6d41\u6c34\u7ebf\u7684\u6784\u5efa\u5757\u3002\u5b83\u80fd\u8ba9\u4f60\u4e13\u6ce8\u4e8e\u5728\u672c\u5730\u8fed\u4ee3\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\uff0cSkaffold \u5219\u80fd\u6301\u7eed\u90e8\u7f72\u5230\u4f60\u7684\u672c\u5730\u6216\u8fdc\u7a0b Kubernetes \u96c6\u7fa4\u3002\u8981\u4e86\u89e3\u6709\u5173 Skaffold \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.jsx)(s.a,{href:"https://skaffold.dev/docs/",children:"Skaffold \u9879\u76ee\u6587\u6863"}),"\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:["\u4e3a\u4e86\u6f14\u793a\u4f7f\u7528 Rancher Desktop \u8bbe\u7f6e Skaffold \u7684\u6b65\u9aa4\uff0cRancher Desktop \u6587\u6863\u5728",(0,o.jsx)(s.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample",children:"\u6b64\u5904"}),"\u63d0\u4f9b\u4e86\u4e00\u4e2a nodejs \u5e94\u7528\u7a0b\u5e8f\u793a\u4f8b\u3002"]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsxs)(s.strong,{children:["\u91cd\u8981\u63d0\u793a\uff1aSkaffold \u4ec5\u9002\u7528\u4e8e ",(0,o.jsx)(s.code,{children:"dockerd"})," (Moby)"]}),"\u3002\u56e0\u6b64\uff0c\u8bf7\u786e\u4fdd\u5728 Rancher Desktop UI \u7684 ",(0,o.jsx)(s.strong,{children:"Kubernetes Settings"})," \u9762\u677f\u4e2d\u9009\u62e9\u4e86 ",(0,o.jsx)(s.code,{children:"dockerd"})," \u4f5c\u4e3a\u8fd0\u884c\u65f6\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["\u8bbf\u95ee ",(0,o.jsx)(s.a,{href:"https://skaffold.dev/docs/install/",children:"https://skaffold.dev/docs/install/"})," \u5b89\u88c5 Skaffold\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["\u514b\u9686 ",(0,o.jsx)(s.a,{href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git",children:"Rancher Desktop \u6587\u6863\u4ed3\u5e93"}),"\u5e76\u5728\u7ec8\u7aef\u4e2d\u5bfc\u822a\u5230 ",(0,o.jsx)(s.code,{children:"express-sample"}),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"cd docs.rancherdesktop.io/assets/express-sample\n"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["\u8fd0\u884c ",(0,o.jsx)(s.code,{children:"skaffold init"}),"\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:["\u6839\u636e ",(0,o.jsx)(s.a,{href:"https://skaffold.dev/docs/pipeline-stages/init/#build-config-initialization",children:"Skaffold \u6587\u6863"})," \u7684\u4ecb\u7ecd\uff0c",(0,o.jsx)(s.code,{children:"skaffold init"})," \u4f1a\u904d\u5386\u4f60\u7684\u9879\u76ee\u76ee\u5f55\u5e76\u67e5\u627e build \u914d\u7f6e\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,o.jsx)(s.code,{children:"Dockerfile"}),"\u3001",(0,o.jsx)(s.code,{children:"build.gradle /pom.xml"}),"\u3001",(0,o.jsx)(s.code,{children:"package.json"}),"\u3001",(0,o.jsx)(s.code,{children:"requirements.txt"})," \u6216 ",(0,o.jsx)(s.code,{children:"go.mod"}),"\uff09\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:["\u5728\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u9009\u62e9 ",(0,o.jsx)(s.code,{children:"Dockerfile"})," \u548c ",(0,o.jsx)(s.code,{children:"package.json"}),"\u3002\u8fd9\u5c06\u751f\u6210\u4f60\u53ef\u4ee5\u4fee\u6539\u7684\u521d\u59cb\u914d\u7f6e\u6587\u4ef6\u3002\u51fa\u73b0\u63d0\u793a\u65f6\uff0c\u9009\u62e9 ",(0,o.jsx)(s.code,{children:"yes"})," \u5c06\u4f60\u7684\u914d\u7f6e\u5199\u5165 ",(0,o.jsx)(s.code,{children:"skaffold.yaml"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["\u5728\u4f60\u7684\u7f16\u8f91\u5668\u4e2d\uff0c\u67e5\u770b\u4f60\u7684 ",(0,o.jsx)(s.code,{children:"app.js"})," \u548c ",(0,o.jsx)(s.code,{children:"manifests.yaml"})," \u6587\u4ef6\u3002\u8bf7\u6ce8\u610f\uff0c\u5728 ",(0,o.jsx)(s.code,{children:"manifests.yaml"})," \u4e2d\uff0c\u4f60\u5c06\u62e5\u6709\u4e00\u4e2a deployment \u914d\u7f6e\u548c\u4e00\u4e2a service \u914d\u7f6e\u3002\u5728\u6d4b\u8bd5\u573a\u666f\u4e0b\uff0c\u4ec5\u9700\u8981 1 \u4e2a ",(0,o.jsx)(s.code,{children:"replica"})," \u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["\u56de\u5230\u4f60\u7684\u7ec8\u7aef\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u4f60\u6709\u4e24\u4e2a\u9009\u9879\uff0c\u5206\u522b\u662f ",(0,o.jsx)(s.code,{children:"skaffold run"}),"\uff08\u5141\u8bb8\u4f60\u6784\u5efa\u548c\u90e8\u7f72\uff09\u548c ",(0,o.jsx)(s.code,{children:"skaffold dev"})," \uff08\u5141\u8bb8\u4f60\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u81ea\u52a8\u91cd\u65b0\u90e8\u7f72\uff09\u3002\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,o.jsx)(s.code,{children:"skaffold dev"}),"\u3002"]}),"\n",(0,o.jsx)(s.p,{children:"\u4f60\u9700\u8981\u5177\u6709\u5411\u955c\u50cf\u4ed3\u5e93\u63a8\u9001\u7684\u6743\u9650\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Docker \u767b\u5f55\u3001\u8bbe\u7f6e\u672c\u5730\u955c\u50cf\u4ed3\u5e93\u6216\u5728\u672c\u5730\u6784\u5efa\u4ed3\u5e93\uff0c\u800c\u4e0d\u9700\u8981\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\uff1a"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(c,{children:[(0,o.jsx)(d,{value:"docker-hub",label:"Docker Hub",default:!0,children:(0,o.jsxs)(s.p,{children:["\u5728\u8fd0\u884c ",(0,o.jsx)(s.code,{children:"skaffold dev"})," \u4e4b\u524d\uff0c\u5982\u679c\u4f60\u6709 ",(0,o.jsx)(s.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," \u8d26\u53f7\uff0c\u8bf7\u4f7f\u7528\u4f60\u7684 docker \u767b\u5f55\u3002\u7136\u540e\uff0c\u5728\u6587\u4ef6 ",(0,o.jsx)(s.code,{children:"skaffold.yaml"})," \u548c ",(0,o.jsx)(s.code,{children:"manifests.yaml"})," \u4e2d\uff0c\u5c06 ",(0,o.jsx)(s.code,{children:"matamagu/express-sample"})," \u66ff\u6362\u4e3a ",(0,o.jsx)(s.code,{children:"YOUR_DOCKER_HUB_USERNAME/express-sample"}),"\uff0c\u8fd9\u662f\u56e0\u4e3a ",(0,o.jsx)(s.code,{children:"skaffold dev"})," \u4f1a\u5c06\u6784\u5efa\u7684\u955c\u50cf\u63a8\u9001\u5230 DockerHub\u3002"]})}),(0,o.jsxs)(d,{value:"local-registry",label:"\u672c\u5730\u955c\u50cf\u4ed3\u5e93",children:[(0,o.jsxs)(s.p,{children:["\u4f60\u53ef\u4ee5\u5148\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u8bbe\u7f6e\u672c\u5730\u955c\u50cf\u4ed3\u5e93\uff1a",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n"})}),(0,o.jsx)(s.p,{children:"\u7136\u540e\uff1a"}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"skaffold dev --default-repo=localhost:5000\n"})})]}),(0,o.jsxs)(d,{value:"local-build",label:"\u672c\u5730\u6784\u5efa",children:[(0,o.jsx)(s.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 manifests.yaml \u6587\u4ef6\u4e2d\u5c06\u5de5\u4f5c\u8d1f\u8f7d imagePullPolicy \u8bbe\u7f6e\u4e3a IfNotPresent \u5728\u672c\u5730\u8fdb\u884c\u6784\u5efa\uff0c\u800c\u65e0\u9700\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\u3002\u4f60\u8fd8\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u53d8\u91cf\u66f4\u65b0 skaffold.yaml \u4ee5\u5b9e\u73b0\u6b64\u66f4\u6539\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"\u793a\u4f8b YAML"}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:"apiVersion: skaffold/v2beta29\nkind: Config\nmetadata:\n  name: skaffold\nbuild:\n  local:\n    push: false\n    useDockerCLI: true\n"})})]})]})]}),"\n",(0,o.jsx)(s.p,{children:"\u5728\u8fdb\u884c\u5f00\u53d1\u65f6\uff0cSkaffold \u5c06\u68c0\u6d4b\u6240\u6709\u66f4\u6539\uff0c\u5e76\u4f1a\u81ea\u52a8\u518d\u6b21\u6267\u884c\u6784\u5efa\u548c\u90e8\u7f72\u7684\u8fc7\u7a0b\u3002\u4f60\u5c06\u80fd\u591f\u770b\u5230\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55\u66f4\u6539\u3002"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,o.jsx)(s.code,{children:"localhost:3000"}),"\uff0c\u4f60\u5c06\u770b\u5230 ",(0,o.jsx)(s.code,{children:"express-sample"})," \u754c\u9762\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}function f(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return c}});var o=n(67294);const r={},d=o.createContext(r);function c(e){const s=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(d.Provider,{value:s},e.children)}}}]);