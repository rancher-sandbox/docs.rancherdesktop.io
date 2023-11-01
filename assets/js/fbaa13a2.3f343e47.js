"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5151],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||a;return n?o.createElement(m,l(l({ref:t},d),{},{components:n})):o.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var o=n(83117),r=(n(67294),n(3905));const a={title:"Generating Deployment Profiles"},l=void 0,i={unversionedId:"how-to-guides/generating-deployment-profiles",id:"version-latest/how-to-guides/generating-deployment-profiles",title:"Generating Deployment Profiles",description:"Deployment Profiles are a way of both providing first-time default settings for Rancher Desktop, and locking down any or all of the application settings. The purpose of this guide is to demonstrate how to create deployment profiles. General information about deployment profiles are further detailed in Getting Started > Deployment Profiles.",source:"@site/versioned_docs/version-latest/how-to-guides/generating-deployment-profiles.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/generating-deployment-profiles",permalink:"/how-to-guides/generating-deployment-profiles",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/generating-deployment-profiles.md",tags:[],version:"latest",frontMatter:{title:"Generating Deployment Profiles"}},s={},p=[{value:"Where do deployment profiles get installed?",id:"where-do-deployment-profiles-get-installed",level:2},{value:"Linux",id:"linux",level:3},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Generating deployments",id:"generating-deployments",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Crafting JSON deployment files",id:"crafting-json-deployment-files",level:3},{value:"Targeting other systems",id:"targeting-other-systems",level:3},{value:"macOS",id:"macos-1",level:4},{value:"Windows",id:"windows-1",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Running <code>reg.exe</code>",id:"running-regexe",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/hello-world-example"})),(0,r.kt)("p",null,"Deployment Profiles are a way of both providing first-time default settings for Rancher Desktop, and locking down any or all of the application settings. The purpose of this guide is to demonstrate how to create deployment profiles. General information about deployment profiles are further detailed in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/getting-started/deployment"},"Getting Started > Deployment Profiles"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If your organization has its own methods of remotely configuring users' systems, it is out of the scope of this document.")),(0,r.kt)("h2",{id:"where-do-deployment-profiles-get-installed"},"Where do deployment profiles get installed?"),(0,r.kt)("p",null,"The profile locations vary for each platform. We'll cover them from the simplest to most complex, and it is worth noting the file generation steps below will refer to these locations:"),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"User deployments are stored in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~/.config/rancher-desktop.defaults.json\n~/.config/rancher-desktop.locked.json\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"XDG_CONFIG_HOME")," environment variable is set, the user deployments are stored there instead of in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/..."),"."),(0,r.kt)("p",null,"System deployments always go in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/rancher-desktop/defaults.json\n/etc/rancher-desktop/locked.json\n")),(0,r.kt)("p",null,"As is apparent from the filenames' extensions, they are ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," files."),(0,r.kt)("h3",{id:"macos"},"macOS"),(0,r.kt)("p",null,"User deployments are stored in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n~/Library/Preferences/io.rancherdesktop.profile.locked.plist\n")),(0,r.kt)("p",null,"System deployments always go in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n/Library/Preferences/io.rancherdesktop.profile.locked.plist\n")),(0,r.kt)("p",null,"These two lists look similar but differ in permissions. The user-deployments go under the user's home directory, while the system deployments are in the common ",(0,r.kt)("inlineCode",{parentName:"p"},"/Library/")," tree, and cannot be modified by users without root privileges."),(0,r.kt)("p",null,"These files are all in a plain-text form of Apple's ",(0,r.kt)("inlineCode",{parentName:"p"},"plist"),' format, an XML-based language. It is possible to manually create these files, and the process is described below in "Generating Deployments".'),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"The Windows deployments are stored in the registry. User deployments are stored at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HKEY_CURRENT_USER\\SOFTWARE\\Policies\\Rancher Desktop\\Defaults\nHKEY_CURRENT_USER\\SOFTWARE\\Policies\\Rancher Desktop\\Locked\n")),(0,r.kt)("p",null,"And the system deployments are stored at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Rancher Desktop\\Defaults\nHKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Rancher Desktop\\Locked\n")),(0,r.kt)("p",null,"The structure of the registry instances follows the structure of the JSON files for the other platforms. The name of a non-leaf node in the JSON structure (a name to the left of a \":\") will appear as a registry key. Leaf nodes appear as key-value pairs in the right-hand pane of a key's view where the key is the field's name. And hash-like objects (like ",(0,r.kt)("inlineCode",{parentName:"p"},"WSL.integrations"),") also appear as key-value pairs, in this case for the key ",(0,r.kt)("inlineCode",{parentName:"p"},"...\\WSL\\integrations"),"."),(0,r.kt)("p",null,"Additionally, if you're coding against the registry, names are always case-insensitive. Feel free to use all lower-case, UPPER-CASE, or spOnGeBoBCasE."),(0,r.kt)("h2",{id:"generating-deployments"},"Generating deployments"),(0,r.kt)("p",null,"The easiest way to do this is on a system already running Rancher Desktop, mainly for its ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl")," command-line tool, and the default list of settings."),(0,r.kt)("p",null,"First, you're going to want to verify that the deployments you create make sense on a working Rancher Desktop, so the rest of this document assumes you'll have access to it. Rancher Desktop runs on air-gapped systems, so if you're creating deployments for security-related reasons, security shouldn't be a concern while creating them."),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"We also assume you've installed the ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," json tool. If you have a preferred variant, simply substitute it for ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," in the following text."),(0,r.kt)("h3",{id:"crafting-json-deployment-files"},"Crafting JSON deployment files"),(0,r.kt)("p",null,"Let's assume you want to create both default-value and locked-value deployment profiles."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to start with Rancher Desktop's default values, and don't have your own workloads you need to preserve, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl factory-reset")," first.")),(0,r.kt)("p",null,"Start up Rancher Desktop, and run the following commands in your preferred shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rdctl list-settings | jq . > working-defaults.txt\nrdctl list-settings | jq . > working-locked.txt\n")),(0,r.kt)("p",null,"If you're only making one type of profile, you'll only need one of the above lines, of course. It also is not necessary to create both a user and system profile for the same type of deployment. If Rancher Desktop sees a system-profile, it won't load the user-profile of the same kind. However, if Rancher Desktop finds, for example, a user-defaults and a system-locked profile, but no system-defaults profile, it will load the user-defaults and system-locked profiles."),(0,r.kt)("p",null,"Next, you can edit each of the JSON files to contain only the values you care about. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," command to validate the final outputs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"jq  -e . working-defaults.txt >/dev/null 2>&1\n")),(0,r.kt)("p",null,"The command will have a 0 status if the file is valid (",(0,r.kt)("inlineCode",{parentName:"p"},"True")," on Powershell), 1 or ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," otherwise."),(0,r.kt)("p",null,"Here's a sample locked-field JSON file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": true,\n      "patterns": [\n        "PATTERN1",\n        "PATTERN2"\n      ]\n    },\n    "name": "moby"\n  },\n  "kubernetes": {\n    "version": "1.24.10"\n  }\n}\n')),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Users with this locked file will be able to use only ",(0,r.kt)("inlineCode",{parentName:"p"},"moby"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd"),", and will only be able to pull container images that match the supplied patterns. They will also be constrained to using the specified kubernetes version.")),(0,r.kt)("p",null,"If you're on a Linux system, you can quickly test these files with the following steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Shut down Rancher Desktop\nrdctl factory-reset\ncp working-defaults.txt ~/.config/rancher-desktop.defaults.json\ncp working-locked.txt ~/.config/rancher-desktop.locked.json\n")),(0,r.kt)("p",null,"Now bring up Rancher Desktop, and bring up the ",(0,r.kt)("inlineCode",{parentName:"p"},"Preferences")," window. Verify that the fields you entered in the ",(0,r.kt)("inlineCode",{parentName:"p"},"locked")," file have the specified values, appear with a padlock icon in the UI, and can't be changed. Verify that the fields from the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaults")," value appear with the specified values in the UI,\nand can be changed (as expected, if a field appears in both the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaults")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"locked")," deployment profile, the ",(0,r.kt)("inlineCode",{parentName:"p"},"locked")," value takes precedence)."),(0,r.kt)("h3",{id:"targeting-other-systems"},"Targeting other systems"),(0,r.kt)("p",null,"If all your users are on Linux systems, you're done, but if not, the rest is straightforward. ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl")," can take a JSON file and generate a deployment for either macOS or Windows. Windows uses the registry, so we generate ",(0,r.kt)("em",{parentName:"p"},"registry import files"),", and you can then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg")," command in a terminal to install them."),(0,r.kt)("h4",{id:"macos-1"},"macOS"),(0,r.kt)("p",null,"For macOS, you would run the following commands to generate either system or user deployment files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rdctl create-profile --output plist --input working-defaults.txt > io.rancherdesktop.profile.defaults.plist\nrdctl create-profile --output plist --input working-locked.txt > io.rancherdesktop.profile.locked.plist\n")),(0,r.kt)("p",null,"And the ",(0,r.kt)("inlineCode",{parentName:"p"},"io.*.plist")," files just need to be deployed to the users' systems, as described above."),(0,r.kt)("h4",{id:"windows-1"},"Windows"),(0,r.kt)("p",null,'Windows differs from the other platforms. Here you specify the type of profile ("locked" or "defaults") and hive (',(0,r.kt)("inlineCode",{parentName:"p"},"HKLM")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"HKCU"),") on the command-line, and let the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.exe")," command decide which part of the registry to update:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rdctl create-profile --output reg --hive hklm --type defaults working-defaults.txt > reg-system-defaults.txt\nrdctl create-profile --output reg --hive hkcu --type defaults working-defaults.txt > reg-user-defaults.txt\nrdctl create-profile --output reg --hive hklm --type locked working-locked.txt > reg-system-locked.txt\nrdctl create-profile --output reg --hive hkcu --type locked working-locked.txt > reg-user-locked.txt\n")),(0,r.kt)("p",null,"The above commands generate four different files, but as explained before, system takes precedence over user profiles, so there's only need to generate at most two files."),(0,r.kt)("p",null,"You would then deploy the files to the target Windows systems, and in a shell with administrative privileges run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"reg import FILENAME\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"System profiles are loaded only when there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," in the config area - so these typically are loaded only on first-run and after a factory-reset."),(0,r.kt)("p",null,"Locked profiles are loaded at the start of every run, and take precedence over the values in existing ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," files (which means a crafty user can't shut down Rancher Desktop and manually edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," file to get around the locked-deployment-profile restrictions)."),(0,r.kt)("h3",{id:"running-regexe"},"Running ",(0,r.kt)("inlineCode",{parentName:"h3"},"reg.exe")),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"reg.exe")," - registry entries under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Policies")," key can only be loaded with the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg import")," command when the user is running as an administrator."))}u.isMDXComponent=!0}}]);