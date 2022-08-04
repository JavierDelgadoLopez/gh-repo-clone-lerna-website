"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[822],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5871:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],p={id:"alternate-bootstrapping-methods",title:"Alternate Bootstrapping Methods",type:"explainer"},s="Alternate Bootstrapping Methods",l={unversionedId:"concepts/alternate-bootstrapping-methods",id:"concepts/alternate-bootstrapping-methods",title:"Alternate Bootstrapping Methods",description:"If you can't use your package manager's built in bootstrapping support for some reason, Lerna can handle the bootstrapping for you. There are several ways Lerna can set up your monorepo such that an app (remixapp) can find libraries in the same repo (header and footer), and one of them is to make it such that the header and footer end up in the node_modules folder of remixapp (or a different folder at the root)--that's what lerna bootstrap (without --use-workspaces) does.",source:"@site/docs/concepts/alternate-bootstrapping-methods.md",sourceDirName:"concepts",slug:"/concepts/alternate-bootstrapping-methods",permalink:"/docs/concepts/alternate-bootstrapping-methods",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/concepts/alternate-bootstrapping-methods.md",tags:[],version:"current",frontMatter:{id:"alternate-bootstrapping-methods",title:"Alternate Bootstrapping Methods",type:"explainer"},sidebar:"main",previous:{title:"Concepts",permalink:"/docs/concepts"},next:{title:"Hoisting",permalink:"/docs/concepts/hoisting"}},c={},d=[{value:"Hoisting",id:"hoisting",level:2},{value:"Linking Different Folders",id:"linking-different-folders",level:2}],u={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alternate-bootstrapping-methods"},"Alternate Bootstrapping Methods"),(0,a.kt)("p",null,"If you can't ",(0,a.kt)("a",{parentName:"p",href:"../features/bootstrap"},"use your package manager's built in bootstrapping support")," for some reason, Lerna can handle the bootstrapping for you. There are several ways Lerna can set up your monorepo such that an app (",(0,a.kt)("inlineCode",{parentName:"p"},"remixapp"),") can find libraries in the same repo (",(0,a.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"footer"),"), and one of them is to make it such that the ",(0,a.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"footer")," end up in the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder of ",(0,a.kt)("inlineCode",{parentName:"p"},"remixapp")," (or a different folder at the root)--that's what ",(0,a.kt)("inlineCode",{parentName:"p"},"lerna bootstrap")," (without ",(0,a.kt)("inlineCode",{parentName:"p"},"--use-workspaces"),") does."),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"lerna bootstrap")," will invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," in each of the packages, and will link local package such that the resulting structure will look like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"lerna bootstrap\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"packages/\n    header/\n        node_modules/\n            react/\n            ...\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        node_modules/\n            react/\n            ...\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        node_modules/\n            react/\n            header (symlinked to ../../header)\n            footer (symlinked to ../../footer)\n            ...\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\npackage.json\n")),(0,a.kt)("h2",{id:"hoisting"},"Hoisting"),(0,a.kt)("p",null,"By default, Lerna is going to run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," in every directory which results in node modules duplication. You can dedupe the packages by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"--hoist"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"lerna bootstrap --hoist\n")),(0,a.kt)("p",null,"the following happens:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node_modules/\n    react/\n    header (symlinked to ../packages/header)\n    footer (symlinked to ../packages/footer)\n            ...\npackages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\npackage.json\n")),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"../concepts/hoisting"},"hoisting in the corresponding guide"),"."),(0,a.kt)("h2",{id:"linking-different-folders"},"Linking Different Folders"),(0,a.kt)("p",null,"By default, Lerna links the contents of the folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node_modules/\n    header/\n        src/\n        package.json\n        rollup.config.json\n        jest.config.js\n            ...\npackages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n")),(0,a.kt)("p",null,"This happens to work if you set the main property to point to the compiler artifact, like the ",(0,a.kt)("inlineCode",{parentName:"p"},"header")," package does."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/header/package.json"',title:'"packages/header/package.json"'},'{\n  "name": "header",\n  "version": "0.1.0",\n  "private": true,\n  "main": "dist/index.js",\n  "scripts": {\n    "build": "rm -rf dist && rollup --config",\n    "test": "jest"\n  }\n}\n')),(0,a.kt)("p",null,"You can also link a subdirectory as follows using ",(0,a.kt)("inlineCode",{parentName:"p"},"lerna bootstrap --contents=dist"),". The name has to apply to all the\npackages."))}f.isMDXComponent=!0}}]);