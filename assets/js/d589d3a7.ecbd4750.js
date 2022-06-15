"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9390:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={id:"getting-started",title:"Getting Started"},s="Getting Started",p={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"You can incrementally adopt Lerna for existing monorepos or create a new Lerna workspace by running npx lerna init. All Lerna functionality will work the same way regardless.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"main",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Core Concepts",permalink:"/docs/core-concepts"}},c={},d=[{value:"Adding Lerna",id:"adding-lerna",level:2},{value:"Visualizing Workspace",id:"visualizing-workspace",level:2},{value:"Bootstrapping Projects",id:"bootstrapping-projects",level:2},{value:"Building All Projects",id:"building-all-projects",level:2},{value:"Testing All Projects",id:"testing-all-projects",level:2},{value:"Caching",id:"caching",level:2},{value:"Target Dependencies (aka task pipelines)",id:"target-dependencies-aka-task-pipelines",level:2},{value:"Publishing",id:"publishing",level:2}],u={toc:d};function m(e){var n=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/WgO5iG57jeQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("p",null,"You can incrementally adopt Lerna for existing monorepos or create a new Lerna workspace by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npx lerna init"),". All Lerna functionality will work the same way regardless."),(0,i.kt)("p",null,"To show a lot of what Lerna can do, we will use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lerna/getting-started-example"},"this repository"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you learn better by doing, clone the repo, check out the prelerna branch and follow along!")),(0,i.kt)("p",null,"The repo contains three packages or projects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"header")," (a library of React components)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"footer")," (a library of React components)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remixapp")," (an app written using the Remix framework which depends on both ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"footer"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"packages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\npackage.json\n")),(0,i.kt)("h2",{id:"adding-lerna"},"Adding Lerna"),(0,i.kt)("p",null,"To add Lerna run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna@latest init\n")),(0,i.kt)("p",null,"This will generate ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna.json")," and will add ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna")," to the root ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "root",\n  "private": true,\n  "devDependencies": {\n    "lerna": "5.1.0"\n  }\n}\n')),(0,i.kt)("p",null,"What makes Lerna 5.1+ so powerful is the task delegation and other features that come with its integration with ",(0,i.kt)("a",{parentName:"p",href:"https://nx.dev"},"Nx"),". To opt in, install the ",(0,i.kt)("inlineCode",{parentName:"p"},"nx")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npm i nx --save-dev\n")),(0,i.kt)("p",null,"You should get a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "root",\n  "private": true,\n  "devDependencies": {\n    "lerna": "5.1.0",\n    "nx": "14.2.0"\n  }\n}\n')),(0,i.kt)("p",null,"Finally, set ",(0,i.kt)("inlineCode",{parentName:"p"},"useNx")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lerna.json"',title:'"lerna.json"'},'{\n  "packages": ["packages/*"],\n  "useNx": true,\n  "version": "0.0.0"\n}\n')),(0,i.kt)("h2",{id:"visualizing-workspace"},"Visualizing Workspace"),(0,i.kt)("p",null,"By having Nx installed alongside Lerna, you can use its capabilities to open an interactive visualization of the workspace project graph."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx nx graph")," to open the visualization:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project Graph",src:t(9593).Z,width:"3094",height:"1772"})),(0,i.kt)("h2",{id:"bootstrapping-projects"},"Bootstrapping Projects"),(0,i.kt)("p",null,"Bootstrapping is one of the three main key features of Lerna. It enables different projects in the same repository to import each other without having to be published to a registry."),(0,i.kt)("p",null,"To see how it works, let for example inspect the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file of ",(0,i.kt)("inlineCode",{parentName:"p"},"remixapp"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "dependencies": {\n    "@remix-run/node": "^1.5.1",\n    "@remix-run/react": "^1.5.1",\n    "@remix-run/serve": "^1.5.1",\n    "react": "^17.0.2",\n    "react-dom": "^17.0.2",\n    "header": "*",\n    "footer": "*"\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},'"header": "*"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"footer": "*"')," tell Lerna to link the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"footer")," as if they were published to the registry. To do that, we need to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna bootstrap\n")),(0,i.kt)("p",null,"Now all the projects in the workspace can properly reference each other so that they can now be built."),(0,i.kt)("h2",{id:"building-all-projects"},"Building All Projects"),(0,i.kt)("p",null,"To build all projects, run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna run build\n")),(0,i.kt)("p",null,"This builds the three projects in the right order: ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"footer")," will be built first (and in parallel), and ",(0,i.kt)("inlineCode",{parentName:"p"},"remixapp")," will be built after. The order matters because the ",(0,i.kt)("inlineCode",{parentName:"p"},"remixapp")," uses the bundles from the compiled ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"footer"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    \u2714  header:build (501ms)\n    \u2714  footer:build (503ms)\n    \u2714  remixapp:build (670ms)\n\n \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n >  Lerna (powered by Nx)   Successfully ran target build for 3 projects (1s)\n\n")),(0,i.kt)("h2",{id:"testing-all-projects"},"Testing All Projects"),(0,i.kt)("p",null,"Now, let's run the tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna run test\n")),(0,i.kt)("p",null,"You should see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    \u2714  footer:test (1s)\n    \u2714  header:test (1s)\n    \u2714  remixapp:test (236ms)\n\n \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n >  Lerna (powered by Nx)   Successfully ran target test for 3 projects (1s)\n")),(0,i.kt)("p",null,"Note, ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna")," will run the three ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," npm scripts in the topological order as well. Although we had to do it when building, it isn't necessary for tests (and it also makes the command slower). We can change this behavior by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-sort")," to the command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna run test --no-sort\n")),(0,i.kt)("h2",{id:"caching"},"Caching"),(0,i.kt)("p",null,"Running any command right now will execute all the tasks, every time, even when nothing changes. We can fix it by adding a bit of configuration."),(0,i.kt)("p",null,"First, let's run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx nx init\n")),(0,i.kt)("p",null,"This which will generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json")," at the root of your workspace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tasksRunnerOptions": {\n    "default": {\n      "runner": "nx/tasks-runners/default",\n      "options": {\n        "cacheableOperations": []\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Second, let's mark ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," to be cacheable operations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tasksRunnerOptions": {\n    "default": {\n      "runner": "nx/tasks-runners/default",\n      "options": {\n        "cacheableOperations": ["build", "test"]\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Now, let's run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx lerna run test --scope=header")," twice. The second time the operation will be instant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> lerna run test --scope=header\n\n> header:test  [existing outputs match the cache, left as is]\n\n> header@0.1.0 test\n> jest\n\nPASS  src/Header.spec.tsx\n\u2713 renders header (12 ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        0.439 s, estimated 1 s\nRan all test suites.\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n>  Lerna (powered by Nx)   Successfully ran target test for project header (4ms)\n\n   Nx read the output from the cache instead of running the command for 1 out of 1 tasks.\n")),(0,i.kt)("p",null,"Lerna (powered by Nx) was able to recognize that the same command has already executed against the same relevant code and environment, so instead running it Lerna restored the necessary files and replayed the terminal output."),(0,i.kt)("p",null,"Most of the time Lerna (powered by Nx) is good at recognizing what files need to be cached and restored. In case of building the Remix app we need to help it by adding the following section to ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/remixapp/package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nx": {\n    "targets": {\n      "build": {\n        "outputs": ["./build", "./public/build"]\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Caching not only restores the terminal output logs, but also artifacts that might have been produced."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna run build"),", then remove ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/remixapp/public/build")," and run the build command again. You will see all the files restored from cache and the command executing instantly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    \u2714  header:build  [existing outputs match the cache, left as is]\n    \u2714  footer:build  [existing outputs match the cache, left as is]\n    \u2714  remixapp:build  [local cache]\n\n \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n >  Lerna (powered by Nx)   Successfully ran target build for 3 projects (19ms)\n\n    Nx read the output from the cache instead of running the command for 3 out of 3 tasks.\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lerna also supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/computation-caching"},"distributed caching")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/distributed-task-execution"},"config-free distributed task execution"),".")),(0,i.kt)("h2",{id:"target-dependencies-aka-task-pipelines"},"Target Dependencies (aka task pipelines)"),(0,i.kt)("p",null,"We have made good progress, but there are two problems left to be solved:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We need to remember to use ",(0,i.kt)("inlineCode",{parentName:"li"},"--no-sort")," when running tests."),(0,i.kt)("li",{parentName:"ol"},"We need to remember to build ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"footer")," before we run ",(0,i.kt)("inlineCode",{parentName:"li"},"lerna run dev --scope=remixapp"),".")),(0,i.kt)("p",null,"Both are the symptoms of the same issue: by default, Lerna doesn't know how different targets (npm scripts) relate to each other. We can fix that by defining so-called ",(0,i.kt)("inlineCode",{parentName:"p"},"targetDependencies")," (also often known as task pipelines) in the ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "targetDependencies": {\n    "build": [\n      {\n        "target": "build",\n        "projects": "dependencies"\n      }\n    ],\n    "dev": [\n      {\n        "target": "build",\n        "projects": "dependencies"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"With this change:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npx lerna run build")," will run the build targets in the right order."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npx lerna run dev --scope=remixapp")," will run the build targets for ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"footer")," first and then run the dev\ntarget for ",(0,i.kt)("inlineCode",{parentName:"li"},"remixapp"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npx lerna run test")," will run all the three test targets in parallel.")),(0,i.kt)("p",null,"If you are wondering whether it is slow to run ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna run dev --scope=remixapp"),' given that you have to rebuild all the dependencies all the time, the answer is "no". The dependencies will be rebuilt only when they change. Otherwise,\ntheir dist folders will be kept as is.'),(0,i.kt)("h2",{id:"publishing"},"Publishing"),(0,i.kt)("p",null,"Finally, let's talk about the third key Lerna feature: publishing to npm. Lerna comes already with a ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," command built-in. To publish our packages ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"footer"),", all we need to do is to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx lerna publish --no-private\n")),(0,i.kt)("p",null,"This will"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"determine the current version of the packages"),(0,i.kt)("li",{parentName:"ul"},"detect which packages has changed since the last publishing & then udpate its version in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," accordingly"),(0,i.kt)("li",{parentName:"ul"},"create a commit of the changed ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," files, tag the commit and push the tag & commit to the remote"),(0,i.kt)("li",{parentName:"ul"},"publish the packages to NPM")),(0,i.kt)("p",null,"Read more about the publishing and versioning process ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/versioning-and-publishing"},"in the corresponding docs page"),"."))}m.isMDXComponent=!0},9593:function(e,n,t){n.Z=t.p+"assets/images/project-graph-e2dd8d0350b7fe58f05fce104c7a6283.png"}}]);