"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1205],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,k=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return d}});var r=n(83117),l=(n(67294),n(3905));const a={title:"Command Reference: rdctl"},s=void 0,o={unversionedId:"references/rdctl-command-reference",id:"references/rdctl-command-reference",title:"Command Reference: rdctl",description:"rdctl is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. rdctl is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of rdctl supports the below commands (with support for more commands to be added in upcoming releases):",source:"@site/docs/references/rdctl-command-reference.md",sourceDirName:"references",slug:"/references/rdctl-command-reference",permalink:"/next/references/rdctl-command-reference",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/references/rdctl-command-reference.md",tags:[],version:"current",frontMatter:{title:"Command Reference: rdctl"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/next/references/architecture"},next:{title:"Bundled Utilities",permalink:"/next/references/bundled-utilities"}},i={},d=[{value:"rdctl or rdctl help",id:"rdctl-or-rdctl-help",level:2},{value:"rdctl api",id:"rdctl-api",level:2},{value:"rdctl api /vX",id:"rdctl-api-vx",level:2},{value:"rdctl api /v0/settings",id:"rdctl-api-v0settings",level:2},{value:"rdctl extension install",id:"rdctl-extension-install",level:2},{value:"rdctl extension ls",id:"rdctl-extension-ls",level:2},{value:"rdctl extension uninstall",id:"rdctl-extension-uninstall",level:2},{value:"rdctl list-settings",id:"rdctl-list-settings",level:2},{value:"rdctl set",id:"rdctl-set",level:2},{value:"rdctl shutdown",id:"rdctl-shutdown",level:2},{value:"rdctl start",id:"rdctl-start",level:2},{value:"rdctl version",id:"rdctl-version",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},u=c("Tabs"),p=c("TabItem"),m={toc:d};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/references/rdctl-command-reference"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," supports the below commands (with support for more commands to be added in upcoming releases):"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"As the current version of ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," is experimental, all subcommand names, their arguments, and their output are still subject to change.")),(0,l.kt)("admonition",{title:"warning",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The Rancher Desktop application must be running for the following commands:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Command List"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"rdctl list-settings"),(0,l.kt)("li",{parentName:"ul"},"rdctl set"),(0,l.kt)("li",{parentName:"ul"},"rdctl shutdown")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For many ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," commands, there are corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"API")," calls that can be applied. Listed below are the available commands shown in both formats. The ",(0,l.kt)("inlineCode",{parentName:"p"},"api")," examples will assume ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," as the tool being used to talk to the API.")),(0,l.kt)("h2",{id:"rdctl-or-rdctl-help"},"rdctl or rdctl help"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl help")," to see the list of available commands."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},'> rdctl help\nThe eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.\n\nUsage:\n  rdctl [command]\n\nAvailable Commands:\n  api           Run API endpoints directly\n  completion    Generate the autocompletion script for the specified shell\n  factory-reset Clear all the Rancher Desktop state and shut it down.\n  help          Help about any command\n  list-settings Lists the current settings.\n  set           Update selected fields in the Rancher Desktop UI and restart the backend.\n  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM\n  shutdown      Shuts down the running Rancher Desktop application\n  start         Start up Rancher Desktop, or update its settings.\n  version       Shows the CLI version.\n\nFlags:\n      --config-path string   config file (default /Users/jan/Library/Application Support/rancher-desktop/rd-engine.json)\n  -h, --help                 help for rdctl\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n\nUse "rdctl [command] --help" for more information about a command.\n'))),(0,l.kt)("h2",{id:"rdctl-api"},"rdctl api"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl api /")," to list all endpoints globally."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl api / | jq -r .[]\nGET /\nGET /v0\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"))),(0,l.kt)("h2",{id:"rdctl-api-vx"},"rdctl api /vX"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl api /v1")," to list all endpoints in version 1."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl api /v1 | jq -r .[]\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"))),(0,l.kt)("h2",{id:"rdctl-api-v0settings"},"rdctl api /v0/settings"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rdctl api [endpoints]")," are commands that are most useful for users working directly with the API itself, and therefore they would not be for everyday use, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl set")," might be. For example,"),(0,l.kt)("p",null,"a command such as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'rdctl api /v0/settings --method PUT --body \'{"kubernetes": {"enabled": false}}\'\n')),(0,l.kt)("p",null,"is the same as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl set --kubernetes-enabled=false\n")),(0,l.kt)("p",null,"but less concise and user-friendly."),(0,l.kt)("h2",{id:"rdctl-extension-install"},"rdctl extension install"),(0,l.kt)("p",null,"Installs a Rancher Desktop extension."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Options & Example Output"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--force               Avoids any interactivity.\n<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl extension install docker/logs-explorer-extension:0.2.2\nInstalling image docker/logs-explorer-extension:0.2.2\n"))),(0,l.kt)("h2",{id:"rdctl-extension-ls"},"rdctl extension ls"),(0,l.kt)("p",null,"Lists currently installed images."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension ls\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl extension ls\nExtension IDs\n\ndocker/logs-explorer-extension:0.2.2\n"))),(0,l.kt)("h2",{id:"rdctl-extension-uninstall"},"rdctl extension uninstall"),(0,l.kt)("p",null,"Uninstalls a Rancher Desktop extension."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Options & Example Output"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl extension uninstall docker/logs-explorer-extension:0.2.2\nUninstalling image docker/logs-explorer-extension:0.2.2: Deleted docker/logs-explorer-extension:0.2.2\n"))),(0,l.kt)("h2",{id:"rdctl-list-settings"},"rdctl list-settings"),(0,l.kt)(u,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(p,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl list-settings")," to see the current active configuration."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},'> rdctl list-settings\n{\n  "version": 6,\n  "application": {\n    "adminAccess": false,\n    "pathManagementStrategy": "rcfiles",\n    "updater": {\n      "enabled": false\n    },\n    "debug": false,\n    "telemetry": {\n      "enabled": true\n    },\n    "autoStart": false,\n    "startInBackground": false,\n    "hideNotificationIcon": false,\n    "window": {\n      "quitOnClose": false\n    }\n  },\n  "virtualMachine": {\n    "memoryInGB": 6,\n    "numberCPUs": 2,\n    "hostResolver": true\n  },\n  "WSL": {\n    "integrations": {}\n  },\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": false,\n      "patterns": [\n        "docker.io"\n      ]\n    },\n    "name": "moby"\n  },\n  "kubernetes": {\n    "version": "",\n    "port": 6443,\n    "enabled": false,\n    "options": {\n      "traefik": true,\n      "flannel": true\n    },\n    "ingress": {\n      "localhostOnly": false\n    }\n  },\n  "portForwarding": {\n    "includeKubernetesServices": false\n  },\n  "images": {\n    "showAll": true,\n    "namespace": "k8s.io"\n  },\n  "diagnostics": {\n    "showMuted": false,\n    "mutedChecks": {}\n  },\n  "experimental": {\n    "virtualMachine": {\n      "type": "qemu",\n      "useRosetta": false,\n      "socketVMNet": false,\n      "mount": {\n        "type": "reverse-sshfs",\n        "9p": {\n          "securityModel": "none",\n          "protocolVersion": "9p2000.L",\n          "msizeInKB": 128,\n          "cacheMode": "mmap"\n        }\n      },\n      "networkingTunnel": false\n    }\n  },\n  "extensions": {\n    "docker/logs-explorer-extension:0.2.2": true\n  }\n}\n\n')))),(0,l.kt)(p,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following API call to see the current active configuration:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET\n'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Using ",(0,l.kt)("inlineCode",{parentName:"p"},"-X GET")," is optional. You could also just use the preceding command by itself."))),(0,l.kt)("h2",{id:"rdctl-set"},"rdctl set"),(0,l.kt)(u,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(p,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl set [flags]")," to set properties. In most of the cases, Kubernetes would be reset on running the ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," command. You can set multiple properties by chaining in a single command. See some examples below."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl set --kubernetes-enabled=false\n> rdctl set --container-engine docker --kubernetes-version 1.21.2\n")))),(0,l.kt)(p,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following API call to set properties:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d \'{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}\' -X PUT\n'))))),(0,l.kt)("h2",{id:"rdctl-shutdown"},"rdctl shutdown"),(0,l.kt)(u,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(p,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl shutdown")," to gracefully shut down Rancher Desktop."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl shutdown\nShutting down.\n")))),(0,l.kt)(p,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following API call to shut down Rancher Desktop:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT\n'))))),(0,l.kt)("h2",{id:"rdctl-start"},"rdctl start"),(0,l.kt)(u,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(p,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl start")," to ensure that Rancher Desktop is running and configured as requested."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3\n")))),(0,l.kt)(p,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following API call to ensure Rancher Desktop is running and configured, making sure to fill in your respective user and password values:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"\n'))))),(0,l.kt)("h2",{id:"rdctl-version"},"rdctl version"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl version")," to see the current rdctl CLI version."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"> rdctl version\nrdctl client version: 1.1.0, targeting server version: v1\n"))))}k.isMDXComponent=!0}}]);