"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[197],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=i,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8817:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],s={id:"configuration",title:"Configuration",type:"reference"},p="Configuration",l={unversionedId:"api-reference/configuration",id:"api-reference/configuration",title:"Configuration",description:"Lerna's configuration is split into two files: lerna.json and nx.json.",source:"@site/docs/api-reference/configuration.md",sourceDirName:"api-reference",slug:"/api-reference/configuration",permalink:"/docs/api-reference/configuration",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/api-reference/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",type:"reference"},sidebar:"main",previous:{title:"Commands",permalink:"/docs/api-reference/commands"},next:{title:"FAQ",permalink:"/docs/faq"}},d={},u=[{value:"useWorkspaces &amp; packages",id:"useworkspaces--packages",level:3},{value:"version",id:"version",level:3},{value:"commands",id:"commands",level:3},{value:"taskRunnerOptions",id:"taskrunneroptions",level:2},{value:"runner",id:"runner",level:3},{value:"cacheableOperations",id:"cacheableoperations",level:3},{value:"Target Defaults",id:"target-defaults",level:2},{value:"dependsOn",id:"dependson",level:3},{value:"inputs &amp; namedInputs",id:"inputs--namedinputs",level:3},{value:"Using ^",id:"using-",level:4},{value:"outputs",id:"outputs",level:3},{value:"Project-Specific Configuration",id:"project-specific-configuration",level:2},{value:"inputs &amp; namedInputs",id:"inputs--namedinputs-1",level:3},{value:"dependsOn",id:"dependson-1",level:3},{value:"outputs",id:"outputs-1",level:3},{value:"implicitDependencies",id:"implicitdependencies",level:3}],c={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Lerna's configuration is split into two files: ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json"),"."),(0,r.kt)("h1",{id:"lernajson"},"Lerna.json"),(0,r.kt)("h3",{id:"useworkspaces--packages"},"useWorkspaces & packages"),(0,r.kt)("p",null,"Since Lerna was created, all major package managers (npm, yarn, and pnpm) have added the ability to cross-link packages\nin the same repo and dedupe node modules. If you'd like Lerna to delegate this process to the package manager you use,\nset ",(0,r.kt)("inlineCode",{parentName:"p"},"useWorkspaces: true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lerna.json"',title:'"lerna.json"'},'{\n  "useWorkspaces": true\n}\n')),(0,r.kt)("p",null,"If you don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"useWorkspaces")," set to true, you need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," property which will tell Lerna where to\nlook for ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lerna.json"',title:'"lerna.json"'},'{\n  "packages": ["packages/*"]\n}\n')),(0,r.kt)("h3",{id:"version"},"version"),(0,r.kt)("p",null,"Lerna has two modes of publishing packages: ",(0,r.kt)("inlineCode",{parentName:"p"},"fixed")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"independent"),". When using the fixed mode, all the packages will\nbe published using the same version. The last published version is recorded in ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lerna.json"',title:'"lerna.json"'},'{\n  "version": "1.2.0"\n}\n')),(0,r.kt)("p",null,"When using the independent mode, every package is versioned separately, and ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")," will look as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lerna.json"',title:'"lerna.json"'},'{\n  "version": "independent"\n}\n')),(0,r.kt)("h3",{id:"commands"},"commands"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")," files can also encode commands options, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "command": {\n    "version": {\n      "allowBranch": "main",\n      "conventionalCommits": true\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Find the available options in ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/commands"},"the API docs"),"."),(0,r.kt)("h1",{id:"nxjson"},"Nx.json"),(0,r.kt)("p",null,"This configuration is only relevant if you have ",(0,r.kt)("inlineCode",{parentName:"p"},"useNx: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nx.json"',title:'"nx.json"'},'{\n  "tasksRunnerOptions": {\n    "default": {\n      "runner": "nx/tasks-runners/default",\n      "options": {\n        "cacheableOperations": ["build", "test"]\n      }\n    }\n  },\n  "namedInputs": {\n    "default": ["{projectRoot}/**/*"],\n    "prod": ["!{projectRoot}/**/*.spec.tsx"]\n  },\n  "targetDefaults": {\n    "build": {\n      "dependsOn": ["prebuild", "^build"],\n      "inputs": ["prod", "^prod"],\n      "outputs": ["{projectRoot}/dist"]\n    },\n    "test": {\n      "inputs": ["default", "^prod", "{workspaceRoot}/jest.config.ts"]\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"taskrunneroptions"},"taskRunnerOptions"),(0,r.kt)("h3",{id:"runner"},"runner"),(0,r.kt)("p",null,"Everything in Nx is customizable, including running npm scripts. Most of the time you will either use the default runner\nor the ",(0,r.kt)("inlineCode",{parentName:"p"},"@nrwl/nx-cloud")," runner."),(0,r.kt)("h3",{id:"cacheableoperations"},"cacheableOperations"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheableOperations")," array defines the list of npm scripts/operations that are cached by Nx. In most repos all\nnon-long running tasks (i.e., not ",(0,r.kt)("inlineCode",{parentName:"p"},"serve"),") should be cacheable."),(0,r.kt)("h2",{id:"target-defaults"},"Target Defaults"),(0,r.kt)("p",null,"Targets are npm script names. You can add metadata associated with say the build script of each project in the repo in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"targetDefaults")," section."),(0,r.kt)("h3",{id:"dependson"},"dependsOn"),(0,r.kt)("p",null,"Targets can depend on other targets. A common scenario is having to build dependencies of a project first before\nbuilding the project. The ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn")," property can be used to define the dependencies of an individual target."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"dependsOn": [ "prebuild", "^build"]')," tells Nx that every build script requires the prebuild script of the same\nproject and the build script of all the dependencies to run first."),(0,r.kt)("h3",{id:"inputs--namedinputs"},"inputs & namedInputs"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," array tells Nx what to consider to determine whether a particular invocation of a script should be a cache\nhit or not. There are three types of inputs:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Filesets")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{projectRoot}/**.*.ts")),(0,r.kt)("li",{parentName:"ul"},"same as ",(0,r.kt)("inlineCode",{parentName:"li"},'{fileset: "{projectRoot}/**/*.ts"}')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{workspaceRoot}/jest.config.ts")),(0,r.kt)("li",{parentName:"ul"},"same as ",(0,r.kt)("inlineCode",{parentName:"li"},'{fileset: "{workspaceRoot}/jest.config.ts}'))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Runtime Inputs")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{runtime: "node -v"}'))),(0,r.kt)("p",null,"Node the result value is hashed, so it is never displayed."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Env Variables")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{env: "MY_ENV_VAR"}'))),(0,r.kt)("p",null,"Node the result value is hashed, so it is never displayed."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Named Inputs")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'inputs: ["prod"]')),(0,r.kt)("li",{parentName:"ul"},"same as ",(0,r.kt)("inlineCode",{parentName:"li"},'inputs: [{input: "prod", projects: "self"}]'))),(0,r.kt)("p",null,"Often the same glob will appear in many places (e.g., prod fileset will exclude spec files for all projects).. Because\nkeeping them in sync is error-prone, we recommend defining named inputs, which you can then reference in all of those\nplaces."),(0,r.kt)("h4",{id:"using-"},"Using ^"),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'inputs: ["^prod"]')),(0,r.kt)("li",{parentName:"ul"},"same as ",(0,r.kt)("inlineCode",{parentName:"li"},'inputs: [{input: "prod", projects: "dependencies"}]'))),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn"),', the "^" symbols means "dependencies". This is a very important idea, so let\'s illustrate it with\nan example.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"test": {\n  "inputs": [ "default", "^prod" ]\n}\n')),(0,r.kt)("p",null,"The configuration above means that the test target depends on all source files of a given project and only prod\nsources (non-test sources) of its dependencies. In other words, it treats test sources as private. If your ",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp"),"\nproject depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," library, changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," tests will not have any effect on the ",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp")," test\ntarget."),(0,r.kt)("h3",{id:"outputs"},"outputs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"outputs": ["{projectRoot}/dist"]')," tells Nx where the build script is going to create file artifacts. The provided\nvalue is actually the default, so we can omit it in this case. ",(0,r.kt)("inlineCode",{parentName:"p"},'"outputs": []')," tells Nx that the test target doesn't\ncreate any artifacts on disk. You can list as many outputs as you many. You can also use globs or individual files as\noutputs."),(0,r.kt)("p",null,"This configuration is usually not needed. Nx comes with reasonable defaults which implement the configuration above."),(0,r.kt)("h2",{id:"project-specific-configuration"},"Project-Specific Configuration"),(0,r.kt)("p",null,"For a lot of workspaces, where projects are similar, ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json")," will contain the whole Nx configuration. Sometimes, it's\nuseful to have a project-specific configuration, which is placed in the project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "parent",\n  "scripts": {\n    "build": "...",\n    "test": "..."\n  },\n  "dependencies": {...},\n  "nx": {\n    "namedInputs": {\n      "prod": [\n        "!{projectRoot}/**/*.test.tsx",\n        "{workspaceRoot}/configs/webpack.conf.js"\n      ]\n    },\n    "targets": {\n      "build": {\n        "dependsOn": [\n          "^build"\n        ],\n        "inputs": [\n          "prod",\n          "^prod"\n        ],\n        "outputs": [\n          "{workspaceRoot}/dist/parent"\n        ]\n      }\n    }\n    "implicitDependencies": ["projecta", "!projectb"]\n  }\n}\n')),(0,r.kt)("p",null,"Note, the ",(0,r.kt)("inlineCode",{parentName:"p"},"namedInputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"targetDefaults")," defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json")," are simply defaults. If you take that configuration\nand copy it into every project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file, the results will be the same."),(0,r.kt)("p",null,"In other words, every project has a set of named inputs, and it's defined as: ",(0,r.kt)("inlineCode",{parentName:"p"},"{...namedInputsFromNxJson, ...namedInputsFromProjectsPackageJson}"),". Every target/script's ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn")," is defined\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOnFromProjectsPackageJson || dependsOnFromNxJson"),". The same applies to ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs"),"."),(0,r.kt)("h3",{id:"inputs--namedinputs-1"},"inputs & namedInputs"),(0,r.kt)("p",null,"Defining ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," for a given target would replace the set of inputs for that target name defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json"),".\nUsing pseudocode ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs = packageJson.targets.build.inputs || nxJson.targetDefaults.build.inputs"),"."),(0,r.kt)("p",null,"You can also define and redefine named inputs. This enables one key use case, where your ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json")," can define things\nlike this (which applies to every project):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"test": {\n  "inputs": [\n    "default",\n    "^prod"\n  ]\n}\n')),(0,r.kt)("p",null,"And projects can define their prod fileset, without having to redefine the inputs for the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," target."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "parent",\n  "scripts": {\n    "build": "...",\n    "test": "..."\n  },\n  "dependencies": {...},\n  "nx": {\n    "namedInputs": {\n      "prod": [\n        "!{projectRoot}/**/*.test.js",\n        "{workspacRoot}/jest.config.js"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"In this case Nx will use the right ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," input for each project."),(0,r.kt)("h3",{id:"dependson-1"},"dependsOn"),(0,r.kt)("p",null,"Defining ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn")," for a given target would replace ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn")," for that target name defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json"),".\nUsing pseudocode ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn = packageJson.targets.build.dependsOn || nxJson.targetDefaults.build.dependsOn"),"."),(0,r.kt)("h3",{id:"outputs-1"},"outputs"),(0,r.kt)("p",null,"Defining ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," for a given target would replace ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," for that target name defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"nx.json"),".\nUsing pseudocode ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs = packageJson.targets.build.outputs || nxJson.targetDefaults.build.outputs"),"."),(0,r.kt)("h3",{id:"implicitdependencies"},"implicitDependencies"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'"implicitDependencies": ["projecta", "!projectb"]')," line tells Nx that the parent project depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"projecta")," even\nthough there is no dependency in its ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". Nx will treat such a dependency in the same way it treats explicit\ndependencies. It also tells Nx that even though there is an explicit dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"projectb"),", it should be ignored."))}m.isMDXComponent=!0}}]);