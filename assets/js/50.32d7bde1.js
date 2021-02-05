(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{774:function(t,a,e){"use strict";e.r(a);var n=e(104),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"loggingmanagement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loggingmanagement"}},[t._v("#")]),t._v(" LoggingManagement")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FLoggingManagement%2Fmain%2FDirectory.Build.props",alt:"ABP version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.LoggingManagement.Application.Contracts",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.LoggingManagement.Application.Contracts.svg?style=flat-square",alt:"NuGet"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.LoggingManagement.Application.Contracts",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.LoggingManagement.Application.Contracts.svg?style=flat-square",alt:"NuGet Download"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.github.com/EasyAbp/LoggingManagement",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/LoggingManagement?style=social",alt:"GitHub stars"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("An abp application module to help you query and manage your application logs.")]),t._v(" "),e("h2",{attrs:{id:"online-demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[t._v("#")]),t._v(" Online Demo")]),t._v(" "),e("p",[t._v("We have launched an online demo for this module: "),e("a",{attrs:{href:"https://logging.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://logging.samples.easyabp.io"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Install the following NuGet packages. ("),e("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("see how"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("ul",[e("li",[t._v("EasyAbp.LoggingManagement.Application")]),t._v(" "),e("li",[t._v("EasyAbp.LoggingManagement.Application.Contracts")]),t._v(" "),e("li",[t._v("EasyAbp.LoggingManagement.HttpApi")]),t._v(" "),e("li",[t._v("EasyAbp.LoggingManagement.HttpApi.Client")]),t._v(" "),e("li",[t._v("(Optional) EasyAbp.LoggingManagement.Provider.TencentCloudCls")]),t._v(" "),e("li",[t._v("(Optional) EasyAbp.LoggingManagement.Web")])])]),t._v(" "),e("li",[e("p",[t._v("Add "),e("code",[t._v("DependsOn(typeof(LoggingManagementXxxModule))")]),t._v(" attribute to configure the module dependencies. ("),e("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[t._v("see how"),e("OutboundLink")],1),t._v(")")])])]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Add permissions to the roles you want.")])]),t._v(" "),e("li",[e("p",[t._v("Configure the system log provider.")]),t._v(" "),e("ul",[e("li",[t._v("Tencent Cloud CLS:"),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceConfigurationContext")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can also")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("LoggingManagementTencentCloudClsOptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SecretId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pgZWZ8d1utwmDvG8BNP0QDZqM6cQIi2DIdGV"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SecretKey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6yb5Ykyks2UyhUGDMnzWIylXjz8xrQau"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Region "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ap-guangzhou"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LogSetId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2e99fe65-5c24-43ad-ba78-8bee7d30c277"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TopicId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27b8ebf6-921a-4b5c-96e9-3ff0ec2308be"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsIntranet "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("p",[t._v("You can also use "),e("a",{attrs:{href:"https://github.com/EasyAbp/LoggingManagement/blob/main/src/providers/EasyAbp.LoggingManagement.Provider.TencentCloudCls/EasyAbp/LoggingManagement/Provider/TencentCloudCls/Settings/LoggingManagementTencentCloudClsSettingDefinitionProvider.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABP settings"),e("OutboundLink")],1),t._v(" to control the values of the above options. We recommend to you a great tool module to manage settings: "),e("a",{attrs:{href:"https://easyabp.io/modules/Abp.SettingUi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Abp.SettingUI"),e("OutboundLink")],1),t._v(".")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"/modules/LoggingManagement/images/Index.jpeg",alt:"Index"}}),t._v(" "),e("img",{attrs:{src:"/modules/LoggingManagement/images/Detail.jpeg",alt:"Detail"}})]),t._v(" "),e("h2",{attrs:{id:"road-map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#road-map"}},[t._v("#")]),t._v(" Road map")]),t._v(" "),e("ul",[e("li",[t._v("[ ] Multi system log container.")]),t._v(" "),e("li",[t._v("[ ] Support audit log management.")]),t._v(" "),e("li",[t._v("[ ] More system log provider.")])])])}),[],!1,null,null,null);a.default=s.exports}}]);