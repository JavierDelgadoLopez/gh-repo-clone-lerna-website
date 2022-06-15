"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Frequently asked questions",p={unversionedId:"faq",id:"faq",title:"Frequently asked questions",description:"This document is a work in progress.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Filter Options",permalink:"/docs/api-reference/filter-options"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},c={},u=[{value:"How do I add a package to my Lerna repository?",id:"how-do-i-add-a-package-to-my-lerna-repository",level:2},{value:"New packages",id:"new-packages",level:3},{value:"Existing packages",id:"existing-packages",level:3},{value:"How do I retry publishing if <code>publish</code> fails?",id:"how-do-i-retry-publishing-if-publish-fails",level:2},{value:"The bootstrap process is really slow, what can I do?",id:"the-bootstrap-process-is-really-slow-what-can-i-do",level:2},{value:"Root <code>package.json</code>",id:"root-packagejson",level:2},{value:"CI setup",id:"ci-setup",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This document is a work in progress.")),(0,r.kt)("h2",{id:"how-do-i-add-a-package-to-my-lerna-repository"},"How do I add a package to my Lerna repository?"),(0,r.kt)("p",null,"For any packages that you add to your Lerna repository, instead of running\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," you should run ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna/blob/main/commands/bootstrap/README.md"},(0,r.kt)("inlineCode",{parentName:"a"},"lerna bootstrap")),". This will take into\naccount the existing projects in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," folder as well as\nexternal dependencies."),(0,r.kt)("h3",{id:"new-packages"},"New packages"),(0,r.kt)("p",null,"Create a directory for your package in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," folder, and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm init"),"\nas normal to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," for your new package."),(0,r.kt)("h3",{id:"existing-packages"},"Existing packages"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna/blob/main/commands/import/README.md"},(0,r.kt)("inlineCode",{parentName:"a"},"lerna import <package>"))," to transfer an existing package\ninto your Lerna repository; this command will preserve the commit history."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna/blob/main/commands/import/README.md"},(0,r.kt)("inlineCode",{parentName:"a"},"lerna import <package>"))," takes a local path rather than a URL. In this\ncase you will need to have the repo you wish to link to on your file system."),(0,r.kt)("h2",{id:"how-do-i-retry-publishing-if-publish-fails"},"How do I retry publishing if ",(0,r.kt)("inlineCode",{parentName:"h2"},"publish")," fails?"),(0,r.kt)("p",null,"Sometimes, ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna publish")," does not work. Your network may have had a hiccup, you may have not been logged on to npm, etc."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")," has not yet been updated, simply try ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna publish")," again."),(0,r.kt)("p",null,"If it has been updated, you can force re-publish. ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna publish --force-publish $(ls packages/)")),(0,r.kt)("h2",{id:"the-bootstrap-process-is-really-slow-what-can-i-do"},"The bootstrap process is really slow, what can I do?"),(0,r.kt)("p",null,"Projects having many packages inside them could take a very long time to bootstrap."),(0,r.kt)("p",null,"You can significantly reduce the time spent in ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap")," if you turn\non hoisting, see the ",(0,r.kt)("a",{parentName:"p",href:"./guides/hoisting"},"hoisting docs")," for more information."),(0,r.kt)("p",null,"In combination with that you may increase the bootstrap performance even more by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna/blob/main/commands/bootstrap/README.md#usage"},"using yarn as an npm client")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,r.kt)("h2",{id:"root-packagejson"},"Root ",(0,r.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,r.kt)("p",null,"The root ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", at the very least, is how you install ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna"),' locally during a CI build.\nYou should also put your testing, linting and similar tasks there to run them from root\nas running them separately from each package is slower. The root can also hold all the "hoisted" packages,\nwhich speeds up bootstrapping when using the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna/blob/main/doc/hoist.md"},(0,r.kt)("inlineCode",{parentName:"a"},"--hoist"))," flag."),(0,r.kt)("h2",{id:"ci-setup"},"CI setup"),(0,r.kt)("p",null,"As mentioned above root ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," is responsible for installing ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," locally. You need to automate ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap")," though.\nThis can be achieved by putting it as npm script to use it during CI phases."),(0,r.kt)("p",null,"Example root ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-monorepo",\n  "private": true,\n  "devDependencies": {\n    "eslint": "^3.19.0",\n    "jest": "^20.0.4",\n    "lerna": "^2.0.0"\n  },\n  "scripts": {\n    "bootstrap": "lerna bootstrap --hoist",\n    "pretest": "eslint packages",\n    "test": "jest"\n  }\n}\n')),(0,r.kt)("p",null,"Example CircleCI's configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"circle.yml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"dependencies:\n  post:\n    - npm run bootstrap\n")))}m.isMDXComponent=!0}}]);