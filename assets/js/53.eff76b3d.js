(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{779:function(e,a,t){"use strict";t.r(a);var r=t(104),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"reviewmanagement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reviewmanagement"}},[e._v("#")]),e._v(" ReviewManagement")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FReviewManagement%2Fmain%2FDirectory.Build.props",alt:"ABP version"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.ReviewManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.ReviewManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.ReviewManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.ReviewManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.github.com/EasyAbp/ReviewManagement",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/ReviewManagement?style=social",alt:"GitHub stars"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("An abp application module that provides general user review service. For example, a user can review a product he has bought with text, pictures and star-rating.")]),e._v(" "),t("h2",{attrs:{id:"online-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[e._v("#")]),e._v(" Online Demo")]),e._v(" "),t("p",[e._v("We have launched an online demo for this module: "),t("a",{attrs:{href:"https://review.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://review.samples.easyabp.io"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install the following NuGet packages. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("ul",[t("li",[e._v("EasyAbp.ReviewManagement.Application")]),e._v(" "),t("li",[e._v("EasyAbp.ReviewManagement.Application.Contracts")]),e._v(" "),t("li",[e._v("EasyAbp.ReviewManagement.Domain")]),e._v(" "),t("li",[e._v("EasyAbp.ReviewManagement.Domain.Shared")]),e._v(" "),t("li",[e._v("EasyAbp.ReviewManagement.EntityFrameworkCore")]),e._v(" "),t("li",[e._v("EasyAbp.ReviewManagement.HttpApi")]),e._v(" "),t("li",[e._v("EasyAbp.ReviewManagement.HttpApi.Client")]),e._v(" "),t("li",[e._v("(Optional) EasyAbp.ReviewManagement.MongoDB")]),e._v(" "),t("li",[e._v("(Optional) EasyAbp.ReviewManagement.Web")])])]),e._v(" "),t("li",[t("p",[e._v("Add "),t("code",[e._v("DependsOn(typeof(ReviewManagementXxxModule))")]),e._v(" attribute to configure the module dependencies. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("Add "),t("code",[e._v("builder.ConfigureReviewManagement();")]),e._v(" to the "),t("code",[e._v("OnModelCreating()")]),e._v(" method in "),t("strong",[e._v("MyProjectMigrationsDbContext.cs")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Add EF Core migrations and update your database. See: "),t("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC&DB=EF#add-database-migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABP document"),t("OutboundLink")],1),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Add permissions to the roles you want.")])]),e._v(" "),t("li",[t("p",[e._v("Create authorization handlers for a type of entity that needs user's reviews. (see the product entity review creation authorization handler "),t("a",{attrs:{href:"https://github.com/EasyAbp/ReviewManagement/blob/main/host/EasyAbp.ReviewManagement.Web.Unified/EasyAbp/ReviewManagement/CreateProductReviewAuthorizationHandler.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("Try to create a review.")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"/modules/ReviewManagement/images/Reviews.png",alt:"Reviews"}}),e._v(" "),t("img",{attrs:{src:"/modules/ReviewManagement/images/Creation.png",alt:"Creation"}})]),e._v(" "),t("h2",{attrs:{id:"road-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#road-map"}},[e._v("#")]),e._v(" Road map")]),e._v(" "),t("ul",[t("li",[e._v("[ ] More friendly UI.")]),e._v(" "),t("li",[e._v("[ ] Unit tests.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);