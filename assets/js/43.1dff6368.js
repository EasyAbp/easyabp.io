(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{768:function(e,t,a){"use strict";a.r(t);var s=a(104),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"abphelper-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abphelper-cli"}},[e._v("#")]),e._v(" AbpHelper.CLI")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.AbpHelper",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.AbpHelper.svg?style=flat-square",alt:"NuGet"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.AbpHelper",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.AbpHelper.svg?style=flat-square",alt:"NuGet Download"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("AbpHelper is a tool that help you with developing Abp vNext applications.")]),e._v(" "),a("p",[a("strong",[e._v("Make sure to backup your source files before using it!")])]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install AbpHelper CLI tool")]),e._v(" "),a("p",[a("code",[e._v("dotnet tool install EasyAbp.AbpHelper -g")])]),e._v(" "),a("blockquote",[a("p",[e._v("If you prefer GUI, there is also a tool with a fancy UI: "),a("a",{attrs:{href:"https://github.com/EasyAbp/AbpHelper.GUI",target:"_blank",rel:"noopener noreferrer"}},[e._v("AbpHelper.GUI"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("If you have previously installed it, update it with the following command:")]),e._v(" "),a("p",[a("code",[e._v("dotnet tool update EasyAbp.AbpHelper -g")])])]),e._v(" "),a("li",[a("p",[e._v("Use "),a("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/CLI",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABP CLI"),a("OutboundLink")],1),e._v(" to create an ABP application")]),e._v(" "),a("p",[a("code",[e._v("abp new MyToDo")])])]),e._v(" "),a("li",[a("p",[e._v("Create an entity")]),e._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Todo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FullAuditedEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Guid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")])]),e._v(" Content "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("bool")])]),e._v(" Done "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Run AbpHelper")]),e._v(" "),a("p",[a("code",[e._v("abphelper generate crud Todo -d C:\\MyTodo")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("generate crud")]),e._v(" is a sub command to generate CRUD files")]),e._v(" "),a("li",[a("code",[e._v("Todo")]),e._v(" specified the entity name we created earlier")]),e._v(" "),a("li",[a("code",[e._v("-d")]),e._v(" specified the "),a("strong",[e._v("root")]),e._v(" directory of the ABP project, which is created by the ABP CLI")])]),e._v(" "),a("p",[e._v("AbpHelper will generate all the CRUD stuffs , even include adding migration and database updating!")])]),e._v(" "),a("li",[a("p",[e._v("Run the "),a("code",[e._v("DbMigrator")]),e._v(" to seed the database")])]),e._v(" "),a("li",[a("p",[e._v("Startup your application")])]),e._v(" "),a("li",[a("p",[e._v("Login with the default admin account, and see the magic happens!")]),e._v(" "),a("p",[a("img",{attrs:{src:"/modules/AbpHelper.CLI/images/2020-02-10-14-09-22.png",alt:"running_demo"}})]),e._v(" "),a("blockquote",[a("p",[e._v("If you don't see the TODO menu, check your permissions and make sure the TODO related permissions are granted")])])])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("ul",[a("li",[e._v("Run "),a("code",[e._v("abphelper -h")]),e._v(" to see the general help")]),e._v(" "),a("li",[e._v("Similarly, you can use "),a("code",[e._v("-h")]),e._v(" or "),a("code",[e._v("--help")]),e._v(" option to see detailed usage of each of the following commands")])]),e._v(" "),a("h3",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("generate")]),e._v(" "),a("p",[e._v("Generate files for ABP projects. See 'abphelper generate --help' for details")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("crud")]),e._v(" "),a("p",[e._v("Generate a set of CRUD related files according to the specified entity")]),e._v(" "),a("p",[a("a",{attrs:{href:"/modules/AbpHelper.CLI/images/crud.gif"}},[e._v("Demo GIF")])])]),e._v(" "),a("li",[a("p",[e._v("service")]),e._v(" "),a("p",[e._v("Generate service interface and class files according to the specified name")]),e._v(" "),a("p",[a("a",{attrs:{href:"/modules/AbpHelper.CLI/images/service.gif"}},[e._v("Demo GIF")])])]),e._v(" "),a("li",[a("p",[e._v("methods")]),e._v(" "),a("p",[e._v("Generate service method(s) according to the specified name(s)")]),e._v(" "),a("p",[a("a",{attrs:{href:"/modules/AbpHelper.CLI/images/methods.gif"}},[e._v("Demo GIF")])])]),e._v(" "),a("li",[a("p",[e._v("localization")]),e._v(" "),a("p",[e._v("Generate localization item(s) according to the specified name(s)")]),e._v(" "),a("p",[a("a",{attrs:{href:"/modules/AbpHelper.CLI/images/localization.gif"}},[e._v("Demo GIF")])])]),e._v(" "),a("li",[a("p",[e._v("controller")]),e._v(" "),a("p",[e._v("Generate controller class and methods according to the specified service")]),e._v(" "),a("p",[a("a",{attrs:{href:"/modules/AbpHelper.CLI/images/controller.gif"}},[e._v("Demo GIF")])])])])]),e._v(" "),a("li",[a("p",[e._v("ef")]),e._v(" "),a("p",[e._v("A shortcut to run 'dotnet ef' commands. See 'abphelper ef --help' for details")]),e._v(" "),a("p",[a("a",{attrs:{href:"/modules/AbpHelper.CLI/images/ef.gif"}},[e._v("Demo GIF")])])]),e._v(" "),a("li",[a("p",[e._v("module")]),e._v(" "),a("p",[e._v("Help quickly add/update/remove ABP modules. See 'abphelper module --help' for details")]),e._v(" "),a("p",[a("a",{attrs:{href:"/modules/AbpHelper.CLI/images/module.gif"}},[e._v("Demo GIF")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);