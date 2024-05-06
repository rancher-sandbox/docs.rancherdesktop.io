"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8963],{18767:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=t(85893),s=t(11151),l=t(74866),i=t(85162);const a={title:"Command Reference: rdctl"},o=void 0,c={id:"references/rdctl-command-reference",title:"Command Reference: rdctl",description:"rdctl is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. rdctl is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of rdctl supports the below commands (with support for more commands to be added in upcoming releases):",source:"@site/versioned_docs/version-1.9/references/rdctl-command-reference.md",sourceDirName:"references",slug:"/references/rdctl-command-reference",permalink:"/1.9/references/rdctl-command-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/references/rdctl-command-reference.md",tags:[],version:"1.9",frontMatter:{title:"Command Reference: rdctl"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/1.9/references/architecture"},next:{title:"Bundled Utilities",permalink:"/1.9/references/bundled-utilities"}},d={},u=[{value:"rdctl or rdctl help",id:"rdctl-or-rdctl-help",level:2},{value:"rdctl api",id:"rdctl-api",level:2},{value:"rdctl api /vX",id:"rdctl-api-vx",level:2},{value:"rdctl api /v0/settings",id:"rdctl-api-v0settings",level:2},{value:"rdctl extension install",id:"rdctl-extension-install",level:2},{value:"rdctl extension ls",id:"rdctl-extension-ls",level:2},{value:"rdctl extension uninstall",id:"rdctl-extension-uninstall",level:2},{value:"rdctl list-settings",id:"rdctl-list-settings",level:2},{value:"rdctl set",id:"rdctl-set",level:2},{value:"rdctl shutdown",id:"rdctl-shutdown",level:2},{value:"rdctl start",id:"rdctl-start",level:2},{value:"rdctl version",id:"rdctl-version",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:t,Head:a}=n;return t||m("Details",!0),a||m("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/references/rdctl-command-reference"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"rdctl"})," is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. ",(0,r.jsx)(n.code,{children:"rdctl"})," is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of ",(0,r.jsx)(n.code,{children:"rdctl"})," supports the below commands (with support for more commands to be added in upcoming releases):"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["As the current version of ",(0,r.jsx)(n.code,{children:"rdctl"})," is experimental, all subcommand names, their arguments, and their output are still subject to change."]})}),"\n",(0,r.jsxs)(n.admonition,{title:"warning",type:"caution",children:[(0,r.jsx)(n.p,{children:"The Rancher Desktop application must be running for the following commands:"}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Command List"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"rdctl list-settings"}),"\n",(0,r.jsx)(n.li,{children:"rdctl set"}),"\n",(0,r.jsx)(n.li,{children:"rdctl shutdown"}),"\n"]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For many ",(0,r.jsx)(n.code,{children:"rdctl"})," commands, there are corresponding ",(0,r.jsx)(n.code,{children:"API"})," calls that can be applied. Listed below are the available commands shown in both formats. The ",(0,r.jsx)(n.code,{children:"api"})," examples will assume ",(0,r.jsx)(n.code,{children:"curl"})," as the tool being used to talk to the API."]})}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-or-rdctl-help",children:"rdctl or rdctl help"}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"rdctl"})," or ",(0,r.jsx)(n.code,{children:"rdctl help"})," to see the list of available commands."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-autoupdate=true",children:'> rdctl help\nThe eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.\n\nUsage:\n  rdctl [command]\n\nAvailable Commands:\n  api           Run API endpoints directly\n  completion    Generate the autocompletion script for the specified shell\n  factory-reset Clear all the Rancher Desktop state and shut it down.\n  help          Help about any command\n  list-settings Lists the current settings.\n  set           Update selected fields in the Rancher Desktop UI and restart the backend.\n  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM\n  shutdown      Shuts down the running Rancher Desktop application\n  start         Start up Rancher Desktop, or update its settings.\n  version       Shows the CLI version.\n\nFlags:\n      --config-path string   config file (default /Users/jan/Library/Application Support/rancher-desktop/rd-engine.json)\n  -h, --help                 help for rdctl\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n\nUse "rdctl [command] --help" for more information about a command.\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-api",children:"rdctl api"}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"rdctl api /"})," to list all endpoints globally."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl api / | jq -r .[]\nGET /\nGET /v0\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-api-vx",children:"rdctl api /vX"}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"rdctl api /v1"})," to list all endpoints in version 1."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl api /v1 | jq -r .[]\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-api-v0settings",children:"rdctl api /v0/settings"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"rdctl api [endpoints]"})," are commands that are most useful for users working directly with the API itself, and therefore they would not be for everyday use, such as ",(0,r.jsx)(n.code,{children:"rdctl set"})," might be. For example,"]}),"\n",(0,r.jsx)(n.p,{children:"a command such as"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'rdctl api /v0/settings --method PUT --body \'{"kubernetes": {"enabled": false}}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"is the same as"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rdctl set --kubernetes-enabled=false\n"})}),"\n",(0,r.jsx)(n.p,{children:"but less concise and user-friendly."}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-extension-install",children:"rdctl extension install"}),"\n",(0,r.jsx)(n.p,{children:"Installs a Rancher Desktop extension."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rdctl extension install <image-id>\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Options & Example Output"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Options"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"--force               Avoids any interactivity.\n<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl extension install docker/logs-explorer-extension:0.2.2\nInstalling image docker/logs-explorer-extension:0.2.2\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-extension-ls",children:"rdctl extension ls"}),"\n",(0,r.jsx)(n.p,{children:"Lists currently installed images."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rdctl extension ls\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl extension ls\nExtension IDs\n\ndocker/logs-explorer-extension:0.2.2\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-extension-uninstall",children:"rdctl extension uninstall"}),"\n",(0,r.jsx)(n.p,{children:"Uninstalls a Rancher Desktop extension."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rdctl extension uninstall <image-id>\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Options & Example Output"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Options"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-autoupdate=true",children:"$ rdctl extension uninstall docker/logs-explorer-extension:0.2.2\nUninstalling image docker/logs-explorer-extension:0.2.2: Deleted docker/logs-explorer-extension:0.2.2\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-list-settings",children:"rdctl list-settings"}),"\n",(0,r.jsxs)(l.Z,{groupId:"command-reference",children:[(0,r.jsxs)(i.Z,{value:"CLI",default:!0,children:[(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"rdctl list-settings"})," to see the current active configuration."]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-autoupdate=true",children:'> rdctl list-settings\n{\n  "version": 6,\n  "application": {\n    "adminAccess": false,\n    "pathManagementStrategy": "rcfiles",\n    "updater": {\n      "enabled": false\n    },\n    "debug": false,\n    "telemetry": {\n      "enabled": true\n    },\n    "autoStart": false,\n    "startInBackground": false,\n    "hideNotificationIcon": false,\n    "window": {\n      "quitOnClose": false\n    }\n  },\n  "virtualMachine": {\n    "memoryInGB": 6,\n    "numberCPUs": 2,\n    "hostResolver": true\n  },\n  "WSL": {\n    "integrations": {}\n  },\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": false,\n      "patterns": [\n        "docker.io"\n      ]\n    },\n    "name": "moby"\n  },\n  "kubernetes": {\n    "version": "",\n    "port": 6443,\n    "enabled": false,\n    "options": {\n      "traefik": true,\n      "flannel": true\n    },\n    "ingress": {\n      "localhostOnly": false\n    }\n  },\n  "portForwarding": {\n    "includeKubernetesServices": false\n  },\n  "images": {\n    "showAll": true,\n    "namespace": "k8s.io"\n  },\n  "diagnostics": {\n    "showMuted": false,\n    "mutedChecks": {}\n  },\n  "experimental": {\n    "virtualMachine": {\n      "type": "qemu",\n      "useRosetta": false,\n      "socketVMNet": false,\n      "mount": {\n        "type": "reverse-sshfs",\n        "9p": {\n          "securityModel": "none",\n          "protocolVersion": "9p2000.L",\n          "msizeInKB": 128,\n          "cacheMode": "mmap"\n        }\n      },\n      "networkingTunnel": false\n    }\n  },\n  "extensions": {\n    "docker/logs-explorer-extension:0.2.2": true\n  }\n}\n\n'})})]})]}),(0,r.jsxs)(i.Z,{value:"API",default:!0,children:[(0,r.jsx)(n.p,{children:"Run the following API call to see the current active configuration:"}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET\n'})})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Using ",(0,r.jsx)(n.code,{children:"-X GET"})," is optional. You could also just use the preceding command by itself."]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-set",children:"rdctl set"}),"\n",(0,r.jsxs)(l.Z,{groupId:"command-reference",children:[(0,r.jsxs)(i.Z,{value:"CLI",default:!0,children:[(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"rdctl set [flags]"})," to set properties. In most of the cases, Kubernetes would be reset on running the ",(0,r.jsx)(n.code,{children:"set"})," command. You can set multiple properties by chaining in a single command. See some examples below."]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"> rdctl set --kubernetes-enabled=false\n> rdctl set --container-engine docker --kubernetes-version 1.21.2\n"})})]})]}),(0,r.jsxs)(i.Z,{value:"API",default:!0,children:[(0,r.jsx)(n.p,{children:"Run the following API call to set properties:"}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d \'{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}\' -X PUT\n'})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-shutdown",children:"rdctl shutdown"}),"\n",(0,r.jsxs)(l.Z,{groupId:"command-reference",children:[(0,r.jsxs)(i.Z,{value:"CLI",default:!0,children:[(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"rdctl shutdown"})," to gracefully shut down Rancher Desktop."]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"> rdctl shutdown\nShutting down.\n"})})]})]}),(0,r.jsxs)(i.Z,{value:"API",default:!0,children:[(0,r.jsx)(n.p,{children:"Run the following API call to shut down Rancher Desktop:"}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT\n'})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-start",children:"rdctl start"}),"\n",(0,r.jsxs)(l.Z,{groupId:"command-reference",children:[(0,r.jsxs)(i.Z,{value:"CLI",default:!0,children:[(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"rdctl start"})," to ensure that Rancher Desktop is running and configured as requested."]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3\n"})})]})]}),(0,r.jsxs)(i.Z,{value:"API",default:!0,children:[(0,r.jsx)(n.p,{children:"Run the following API call to ensure Rancher Desktop is running and configured, making sure to fill in your respective user and password values:"}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"\n'})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"rdctl-version",children:"rdctl version"}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"rdctl version"})," to see the current rdctl CLI version."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-autoupdate=true",children:"> rdctl version\nrdctl client version: 1.1.0, targeting server version: v1\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85162:function(e,n,t){t.d(n,{Z:function(){return i}});t(67294);var r=t(36905),s={tabItem:"tabItem_Ymn6"},l=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(67294),s=t(36905),l=t(12466),i=t(16550),a=t(20469),o=t(91980),c=t(67392),d=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,u]=m({queryString:t,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),g=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=t(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},j=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=a[t].value;s!==r&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,j.jsx)(k,{...e,children:u(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(67294);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);