(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{765:function(e,a,t){"use strict";t.r(a);var n=t(104),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cachemanagement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cachemanagement"}},[e._v("#")]),e._v(" CacheManagement")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FCacheManagement%2Fmaster%2FDirectory.Build.props",alt:"ABP version"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.CacheManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.CacheManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.CacheManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.CacheManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.github.com/EasyAbp/CacheManagement",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/CacheManagement?style=social",alt:"GitHub stars"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("An abp application module helps administrators to manage the app cache data.")]),e._v(" "),t("h2",{attrs:{id:"online-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[e._v("#")]),e._v(" Online Demo")]),e._v(" "),t("p",[e._v("We have launched an online demo for this module: "),t("a",{attrs:{href:"https://cache.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cache.samples.easyabp.io"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install the following NuGet packages. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("ul",[t("li",[e._v("EasyAbp.CacheManagement.Application")]),e._v(" "),t("li",[e._v("EasyAbp.CacheManagement.Application.Contracts")]),e._v(" "),t("li",[e._v("EasyAbp.CacheManagement.Domain")]),e._v(" "),t("li",[e._v("EasyAbp.CacheManagement.Domain.Shared")]),e._v(" "),t("li",[e._v("EasyAbp.CacheManagement.EntityFrameworkCore")]),e._v(" "),t("li",[e._v("EasyAbp.CacheManagement.HttpApi")]),e._v(" "),t("li",[e._v("EasyAbp.CacheManagement.HttpApi.Client")]),e._v(" "),t("li",[e._v("(Optional) EasyAbp.CacheManagement.MongoDB")]),e._v(" "),t("li",[e._v("(Optional) EasyAbp.CacheManagement.Web")])])]),e._v(" "),t("li",[t("p",[e._v("Add "),t("code",[e._v("DependsOn(typeof(CacheManagementXxxModule))")]),e._v(" attribute to configure the module dependencies. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("Add "),t("code",[e._v("builder.ConfigureCacheManagement();")]),e._v(" to the "),t("code",[e._v("OnModelCreating()")]),e._v(" method in "),t("strong",[e._v("MyProjectMigrationsDbContext.cs")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Add EF Core migrations and update your database. See: "),t("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC&DB=EF#add-database-migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABP document"),t("OutboundLink")],1),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Add permissions to the roles you want.")])]),e._v(" "),t("li",[t("p",[e._v("Add your own cache items.")])]),e._v(" "),t("li",[t("p",[e._v("Enjoy this wonderful module.")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"/modules/CacheManagement/images/CacheItems.png",alt:"CacheItems"}}),e._v(" "),t("img",{attrs:{src:"/modules/CacheManagement/images/EditCacheItem.png",alt:"EditCacheItem"}}),e._v(" "),t("img",{attrs:{src:"/modules/CacheManagement/images/CacheItemData.png",alt:"CacheItemData"}})]),e._v(" "),t("h2",{attrs:{id:"roadmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),t("ul",[t("li",[e._v("[ ] Cache values modification.")]),e._v(" "),t("li",[e._v("[ ] More detailed documentations.")]),e._v(" "),t("li",[e._v("[ ] More drivers.")]),e._v(" "),t("li",[e._v("[ ] Unit tests.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);