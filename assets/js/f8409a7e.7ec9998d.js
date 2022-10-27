"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3206],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7378),r=n(9619);function o(e){let{className:t,status:n}=e;switch(n){case"experimental":return a.createElement(r.Z,{className:t,text:"Experimental",variant:"failure"});case"in-development":return a.createElement(r.Z,{className:t,text:"In development",variant:"success"});case"coming-soon":return a.createElement(r.Z,{className:t,text:"Coming soon",variant:"warning"});case"new":return a.createElement(r.Z,{className:t,text:"New",variant:"info"});default:return null}}},9619:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7378),r=n(8944),o=n(1792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function s(e){let{className:t,icon:n,text:s,variant:l}=e;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",l?i[l]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(o.Z,{icon:n,className:"mr-1"}),s)}},2661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(5773),r=(n(7378),n(5318)),o=n(60);const i={slug:"/",title:"Introduction"},s=void 0,l={unversionedId:"intro",id:"intro",title:"Introduction",description:"moon is a repository management, organization, orchestration, and notification tool for the",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/intro.mdx",tags:[],version:"current",frontMatter:{slug:"/",title:"Introduction"},sidebar:"docs",next:{title:"Install moon",permalink:"/docs/install"}},c={},p=[{value:"Why use moon?",id:"why-use-moon",level:2},{value:"Features",id:"features",level:2},{value:"Management",id:"management",level:4},{value:"Organization",id:"organization",level:4},{value:"Orchestration",id:"orchestration",level:4},{value:"Notification",id:"notification",level:4}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"moon is a repository ",(0,r.kt)("em",{parentName:"p"},"m"),"anagement, ",(0,r.kt)("em",{parentName:"p"},"o"),"rganization, ",(0,r.kt)("em",{parentName:"p"},"o"),"rchestration, and ",(0,r.kt)("em",{parentName:"p"},"n"),"otification tool for the\nweb ecosystem, written in Rust. Many of the concepts within moon are heavily inspired from Bazel and\nother popular build systems, but tailored for our supported languages, primarily JavaScript and\nTypeScript."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We plan to support additional web oriented languages in the future!")),(0,r.kt)("h2",{id:"why-use-moon"},"Why use moon?"),(0,r.kt)("p",null,"Working in the JavaScript ecosystem can be very involved, especially when it comes to managing a\nrepository effectively. Which package manager to use? Which Node.js version to use? How to import\nnode modules? How to build packages? So on and so forth. moon aims to streamline this entire process\nand provide a first-class developer experience."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Increased productivity")," - With ",(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust")," as our foundation, we can\nensure robust speeds, high performance, and low memory usage. Instead of long builds blocking you,\nfocus on your work."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exceptional developer experience")," - As veterans of the JavaScript ecosystem, we're well aware\nof the pain points and frustrations. Our goal is to mitigate and overcome these obstacles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incremental adoption")," - At its core, moon has been designed to be adopted incrementally and is\n",(0,r.kt)("em",{parentName:"li"},"not"),' an "all at once adoption". Migrate project-by-project, or task-by-task, it\'s up to you!'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reduced scripts confusion")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," scripts can become unwieldy, very quickly. No more\nduplicating the same script into every package, or reverse-engineering which root scripts to use.\nWith moon, all you need to know is the project name, and a task name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ensure correct versions")," - Whether it's Node.js or npm, ensure the same version of each tool is\nthe same across ",(0,r.kt)("em",{parentName:"li"},"every")," developer's environment. No more wasted hours of debugging."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automation built-in")," - When applicable, moon will automatically install ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),", or\n",(0,r.kt)("a",{parentName:"li",href:"/docs/config/workspace#syncprojectworkspacedependencies"},"sync package dependencies"),", or even\n",(0,r.kt)("a",{parentName:"li",href:"/docs/config/workspace#syncprojectreferences"},"sync TypeScript project references"),"."),(0,r.kt)("li",{parentName:"ul"},"And of course, the amazing list of features below!")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h4",{id:"management"},"Management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Smart hashing")," - Collects inputs from multiple sources to ensure builds are deterministic and\nreproducible."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remote caching")," ",(0,r.kt)(o.Z,{status:"coming-soon",mdxType:"FeatureStatus"})," - Persists builds, hashes, and caches\nbetween teammates and CI/CD environments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integrated toolchain")," - Automatically downloads and installs explicit versions of Node.js and\nother tools for consistency across the entire workspace or per project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multi-platform")," - Runs on common development platforms: Linux, macOS, and Windows.")),(0,r.kt)("h4",{id:"organization"},"Organization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project graph")," - Generates a project graph for dependency and dependent relationships."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code generation")," - Easily scaffold new applications, libraries, tooling, and more!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dependency workspaces")," - Works alongside package manager workspaces so that projects have\ndistinct dependency trees."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ownership metadata")," - Declare an owner, maintainers, support channels, and more, for LDAP or\nanother integration.")),(0,r.kt)("h4",{id:"orchestration"},"Orchestration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dependency graph")," - Generates a dependency graph to increase performance and reduce workloads."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Action runner")," - Executes actions in parallel and in order using a thread pool and our\ndependency graph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Action distribution")," ",(0,r.kt)(o.Z,{status:"coming-soon",mdxType:"FeatureStatus"})," - Distributes actions across\nmultiple machines to increase throughput."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incremental builds")," - With our smart hashing, only rebuild projects that have been touched\nsince the last build.")),(0,r.kt)("h4",{id:"notification"},"Notification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flakiness detection")," ",(0,r.kt)(o.Z,{status:"experimental",mdxType:"FeatureStatus"})," - Reduce flaky builds with\nautomatic retries and passthrough settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Webhook events")," ",(0,r.kt)(o.Z,{status:"experimental",mdxType:"FeatureStatus"})," - Receive a webhook for every event in\nthe pipeline. Useful for metrics gathering and insights."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Terminal notifications")," ",(0,r.kt)(o.Z,{status:"coming-soon",mdxType:"FeatureStatus"})," - Receives notifications in your\nchosen terminal when builds are successful... or are not.")))}m.isMDXComponent=!0}}]);