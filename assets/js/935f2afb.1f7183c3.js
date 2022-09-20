"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"main":[{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction"},{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started"},{"type":"link","label":"Lerna and Nx","href":"/docs/lerna-and-nx","docId":"lerna-and-nx"},{"type":"category","label":"Features","items":[{"type":"link","label":"Bootstrap","href":"/docs/features/bootstrap","docId":"features/bootstrap"},{"type":"link","label":"Run Tasks","href":"/docs/features/run-tasks","docId":"features/run-tasks"},{"type":"link","label":"Cache Task Results","href":"/docs/features/cache-tasks","docId":"features/cache-tasks"},{"type":"link","label":"Explore the Project Graph","href":"/docs/features/project-graph","docId":"features/project-graph"},{"type":"link","label":"Distribute Task Execution","href":"/docs/features/distribute-tasks","docId":"features/distribute-tasks"},{"type":"link","label":"Version and Publish","href":"/docs/features/version-and-publish","docId":"features/version-and-publish"},{"type":"link","label":"Editor Integrations","href":"/docs/features/editor-integrations","docId":"features/editor-integrations"}],"collapsed":false,"collapsible":true,"href":"/docs/features"},{"type":"category","label":"Concepts","items":[{"type":"link","label":"Alternate Bootstrapping Methods","href":"/docs/concepts/alternate-bootstrapping-methods","docId":"concepts/alternate-bootstrapping-methods"},{"type":"link","label":"Hoisting","href":"/docs/concepts/hoisting","docId":"concepts/hoisting"},{"type":"link","label":"Task Pipeline Configuration","href":"/docs/concepts/task-pipeline-configuration","docId":"concepts/task-pipeline-configuration"},{"type":"link","label":"How Caching Works","href":"/docs/concepts/how-caching-works","docId":"concepts/how-caching-works"},{"type":"link","label":"Distributed Task Execution Guide","href":"/docs/concepts/dte-guide","docId":"concepts/dte-guide"}],"collapsed":false,"collapsible":true,"href":"/docs/concepts"},{"type":"category","label":"Recipes","items":[{"type":"link","label":"Using pnpm with Lerna","href":"/docs/recipes/using-pnpm-with-lerna","docId":"recipes/using-pnpm-with-lerna"},{"type":"link","label":"Using Lerna (Powered by Nx) to Run Tasks","href":"/docs/recipes/using-lerna-powered-by-nx-to-run-tasks","docId":"recipes/using-lerna-powered-by-nx-to-run-tasks"}],"collapsed":false,"collapsible":true},{"type":"category","label":"API Reference","items":[{"type":"link","label":"Commands","href":"/docs/api-reference/commands","docId":"api-reference/commands"},{"type":"link","label":"Configuration","href":"/docs/api-reference/configuration","docId":"api-reference/configuration"}],"collapsed":false,"collapsible":true},{"type":"link","label":"FAQ","href":"/docs/faq","docId":"faq"},{"type":"link","label":"Troubleshooting","href":"/docs/troubleshooting","docId":"troubleshooting"}]},"docs":{"api-reference/commands":{"id":"api-reference/commands","title":"Commands","description":"- lerna publish","sidebar":"main"},"api-reference/configuration":{"id":"api-reference/configuration","title":"Configuration","description":"Lerna\'s configuration is split into two files: lerna.json and nx.json.","sidebar":"main"},"concepts/alternate-bootstrapping-methods":{"id":"concepts/alternate-bootstrapping-methods","title":"Alternate Bootstrapping Methods","description":"If you can\'t use your package manager\'s built in bootstrapping support for some reason, Lerna can handle the bootstrapping for you. There are several ways Lerna can set up your monorepo such that an app (remixapp) can find libraries in the same repo (header and footer), and one of them is to make it such that the header and footer end up in the node_modules folder of remixapp (or a different folder at the root)--that\'s what lerna bootstrap (without --use-workspaces) does.","sidebar":"main"},"concepts/dte-guide":{"id":"concepts/dte-guide","title":"Distributed Task Execution Guide","description":"The illustrations in this guide are created by Nrwlian Nicole Oliver","sidebar":"main"},"concepts/hoisting":{"id":"concepts/hoisting","title":"Hoisting","description":"Use caution when enabling this feature, as certain configurations can cause problems.","sidebar":"main"},"concepts/how-caching-works":{"id":"concepts/how-caching-works","title":"How Caching Works","description":"Before running any task, Lerna computes its computation hash. As long as the computation hash is the same, the output of","sidebar":"main"},"concepts/task-pipeline-configuration":{"id":"concepts/task-pipeline-configuration","title":"Task Pipeline Configuration","description":"Lerna delegates the running of npm scripts (forking processes etc) to Nx. The nx.json file is the place where you can","sidebar":"main"},"faq":{"id":"faq","title":"FAQ","description":"This document is a work in progress.","sidebar":"main"},"features/bootstrap":{"id":"features/bootstrap","title":"Bootstrap","description":"Lerna links different projects within the repo so they can import each other without having to publish anything to NPM. To show how Lerna does it, we will take this repository as an example.","sidebar":"main"},"features/cache-tasks":{"id":"features/cache-tasks","title":"Cache Task Results","description":"When it comes to running tasks, caching etc., Lerna and Nx can be used interchangeably. When we say \\"Lerna can cache","sidebar":"main"},"features/distribute-tasks":{"id":"features/distribute-tasks","title":"Distribute Task Execution","description":"Lerna (via Nx) supports running commands across multiple machines. You can either set it up by hand (by using batching or binning) or use Nx Cloud.","sidebar":"main"},"features/editor-integrations":{"id":"features/editor-integrations","title":"Editor Integrations","description":"Nx Console displays the npm scripts for all your projects in the VS Code sidebar and allows you to run them with a single click or open the script definition in your editor.","sidebar":"main"},"features/project-graph":{"id":"features/project-graph","title":"Explore the Project Graph","description":"For Lerna (and Nx) to run tasks quickly and correctly, it creates a graph of the dependencies between all the projects in the repository.  Exploring this graph visually can be useful to understand why Lerna is behaving in a certain way and to get a high level view of your code architecture.","sidebar":"main"},"features/run-tasks":{"id":"features/run-tasks","title":"Run Tasks","description":"Monorepos can have hundreds or even thousands of projects, so being able to run npm scripts against all (or some) of","sidebar":"main"},"features/version-and-publish":{"id":"features/version-and-publish","title":"Version and Publish","description":"Lerna can increment your package\'s versions as well as publish your packages to NPM, and it provides a variety of options to make sure any workflow can be accommodated.","sidebar":"main"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"You can incrementally adopt Lerna for existing monorepos or create a new Lerna workspace by running:","sidebar":"main"},"introduction":{"id":"introduction","title":"Introduction","description":"Lerna is the original monorepo tool for TypeScript/JavaScript. It has been around for many years and is used by tens of thousands of projects, including React, Jest and Babel.","sidebar":"main"},"lerna-and-nx":{"id":"lerna-and-nx","title":"Lerna and Nx","description":"Nrwl (the company behind the open source build system Nx) has taken over stewardship of Lerna. Nx is a build system developed by ex-Googlers and utilizes many of the techniques used by internal Google tools. Lerna v5 is the first release under this new stewardship, updating outdated packages and starting to do some cleanup on the repository itself. Starting with v5.1+, Lerna comes with the new possibility to integrate Nx and defer a lot of the task scheduling work to it.","sidebar":"main"},"recipes/using-lerna-powered-by-nx-to-run-tasks":{"id":"recipes/using-lerna-powered-by-nx-to-run-tasks","title":"Using Lerna (Powered by Nx) to Run Tasks","description":"Nx and Lerna work together seamlessly in the same workspace.","sidebar":"main"},"recipes/using-pnpm-with-lerna":{"id":"recipes/using-pnpm-with-lerna","title":"Using pnpm with Lerna","description":"Lerna can be used in a pnpm workspace to get the full benefits of both pnpm and Lerna.","sidebar":"main"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"This document contains solutions for certain issues our users encountered","sidebar":"main"}}}')}}]);