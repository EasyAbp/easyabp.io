(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{742:function(t,a,s){"use strict";s.r(a);var e=s(103),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"paymentservice-wechatpay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paymentservice-wechatpay"}},[t._v("#")]),t._v(" PaymentService.WeChatPay")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.PaymentService.WeChatPay.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.PaymentService.WeChatPay.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.PaymentService.WeChatPay.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.PaymentService.WeChatPay.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("WeChatPay implementation of the EasyAbp.PaymentService module.")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("blockquote",[s("p",[t._v("Should also install the "),s("RouterLink",{attrs:{to:"/modules/PaymentService/#getting-started"}},[t._v("PaymentService module")]),t._v(" since this module depends on it.")],1)]),t._v(" "),s("h3",{attrs:{id:"install-with-abphelper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-with-abphelper"}},[t._v("#")]),t._v(" Install with "),s("a",{attrs:{href:"https://github.com/EasyAbp/AbpHelper.GUI",target:"_blank",rel:"noopener noreferrer"}},[t._v("AbpHelper"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("Coming soon.")])]),t._v(" "),s("h3",{attrs:{id:"install-manually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-manually"}},[t._v("#")]),t._v(" Install Manually")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install the following NuGet packages. (see how)")]),t._v(" "),s("ul",[s("li",[t._v("EasyAbp.PaymentService.WeChatPay.Application")]),t._v(" "),s("li",[t._v("EasyAbp.PaymentService.WeChatPay.Application.Contracts")]),t._v(" "),s("li",[t._v("EasyAbp.PaymentService.WeChatPay.Domain")]),t._v(" "),s("li",[t._v("EasyAbp.PaymentService.WeChatPay.Domain.Shared")]),t._v(" "),s("li",[t._v("EasyAbp.PaymentService.WeChatPay.EntityFrameworkCore")]),t._v(" "),s("li",[t._v("EasyAbp.PaymentService.WeChatPay.HttpApi")]),t._v(" "),s("li",[t._v("EasyAbp.PaymentService.WeChatPay.HttpApi.Client")]),t._v(" "),s("li",[t._v("(Optional) EasyAbp.PaymentService.WeChatPay.MongoDB")]),t._v(" "),s("li",[t._v("(Optional) EasyAbp.PaymentService.WeChatPay.Web")])])]),t._v(" "),s("li",[s("p",[t._v("Add "),s("code",[t._v("DependsOn(typeof(xxx))")]),t._v(" attribute to configure the module dependencies. (see how)")])]),t._v(" "),s("li",[s("p",[t._v("Add "),s("code",[t._v("builder.ConfigurePaymentServiceWeChatPay();")]),t._v(" to the "),s("code",[t._v("OnModelCreating()")]),t._v(" method in "),s("strong",[t._v("MyProjectMigrationsDbContext.cs")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Add EF Core migrations and update your database. See: "),s("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC#add-new-migration-update-the-database",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABP document"),s("OutboundLink")],1),t._v(".")])])]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Register the WeChatPay payment method:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnApplicationInitialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationInitializationContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" resolver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ServiceProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetRequiredService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IPaymentServiceResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    resolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TryRegisterProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WeChatPayPaymentServiceProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaymentMethod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("WeChatPayPaymentServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Configure the "),s("a",{attrs:{href:"https://github.com/EasyAbp/PaymentService/blob/master/modules/EasyAbp.PaymentService.WeChatPay/src/EasyAbp.PaymentService.WeChatPay.Domain/EasyAbp/PaymentService/WeChatPay/Settings/WeChatPaySettings.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("WeChatPay settings"),s("OutboundLink")],1),t._v(", you can try to use "),s("a",{attrs:{href:"https://github.com/EasyAbp/Abp.SettingUi",target:"_blank",rel:"noopener noreferrer"}},[t._v("SettingUI"),s("OutboundLink")],1),t._v(" to finish this work.")]),t._v(" "),s("blockquote",[s("p",[t._v("See the "),s("a",{attrs:{href:"https://github.com/EasyAbp/PaymentService/blob/master/samples/PaymentServiceSample/aspnet-core/src/PaymentServiceSample.Web/appsettings.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1),t._v(", it is also according to the "),s("a",{attrs:{href:"https://github.com/EasyAbp/Abp.WeChat/blob/master/doc/WeChatPay.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("document"),s("OutboundLink")],1),t._v(" of the EasyAbp.Abp.WeChat module.")])])]),t._v(" "),s("li",[s("p",[t._v("Pay with WeChatPay.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Users can use the API "),s("code",[t._v("/api/paymentService/payment/{id}/pay")]),t._v(" to finish the payment, please put the necessary params in the "),s("code",[t._v("ExtraProperties")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "extraProperties": {\n        "trade_type": "JSAPI",\n        "appid": "wx81a2956875268fk8"   // You can specify an appid or get it from the input from the client.\n    }\n}\n')])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("Skip the following steps if you are using "),s("a",{attrs:{href:"https://github.com/EasyAbp/EShop",target:"_blank",rel:"noopener noreferrer"}},[t._v("EasyAbp.EShop"),s("OutboundLink")],1),t._v(")")])]),t._v(" "),s("details",[s("summary",[t._v("See more steps")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("Create a payment with the payment method "),s("code",[t._v("WeChatPay")]),t._v(".")]),t._v(" "),s("blockquote",[s("p",[t._v("Other modules or apps that depend on PaymentService module should create payments via distributed events.")])]),t._v(" "),s("details",[s("summary",[t._v("See sample code")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _distributedEventBus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PublishAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CreatePaymentEto")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    TenantId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CurrentTenant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    UserId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CurrentUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    PaymentMethod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WeChatPay"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Should specify the payment method as "WeChatPay"')]),t._v("\n    Currency "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CNY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Should always be "CNY"')]),t._v("\n    PaymentItems "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CreatePaymentItemEto")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ItemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyCustomKeyword"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It is just a sample and you can customize it yourself")]),t._v("\n        ItemKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Currency "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CNY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        OriginalPaymentAmount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Price\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("please refer to the "),s("a",{attrs:{href:"https://github.com/EasyAbp/EShop/blob/dev/modules/EasyAbp.EShop.Payments/src/EasyAbp.EShop.Payments.Application/EasyAbp/EShop/Payments/Payments/PaymentAppService.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("usage in EShop"),s("OutboundLink")],1)])])]),s("p")]),t._v(" "),s("li",[s("p",[t._v("Handle the payment created distributed event to get and remember the "),s("code",[t._v("PaymentId")]),t._v(".\n")]),s("details",[s("summary",[t._v("See sample code")]),s("p"),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCustomPaymentCreatedEventHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IDistributedEventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("EntityCreatedEto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PaymentEto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITransientDependency")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnitOfWork")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("isTransactional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleEventAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EntityCreatedEto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PaymentEto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" eventData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" eventData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaymentItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ItemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyCustomKeyword"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Persistence the PaymentId of the ongoing payment, so user can get it in some way.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("please refer to the "),s("a",{attrs:{href:"https://github.com/EasyAbp/EShop/blob/dev/modules/EasyAbp.EShop.Orders/src/EasyAbp.EShop.Orders.Domain/EasyAbp/EShop/Orders/Orders/OrderPaymentCreatedEventHandler.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("usage in EShop"),s("OutboundLink")],1)])])]),s("p")]),t._v(" "),s("li",[s("p",[t._v("Handle the payment canceled distributed event to clear the remembered the "),s("code",[t._v("PaymentId")]),t._v(".\n")]),s("details",[s("summary",[t._v("See sample code")]),s("p"),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCustomPaymentCanceledEventHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IDistributedEventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PaymentCanceledEto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITransientDependency")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnitOfWork")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("isTransactional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleEventAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentCanceledEto")]),t._v(" payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaymentItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ItemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyCustomKeyword"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Remove the remembered PaymentId.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("please refer to the "),s("a",{attrs:{href:"https://github.com/EasyAbp/EShop/blob/dev/modules/EasyAbp.EShop.Orders/src/EasyAbp.EShop.Orders.Domain/EasyAbp/EShop/Orders/Orders/OrderPaymentCanceledEventHandler.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("usage in EShop"),s("OutboundLink")],1)])])]),s("p")]),t._v(" "),s("li",[s("p",[t._v("Handle the payment completed distributed event:\n")]),s("details",[s("summary",[t._v("See sample code")]),s("p"),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCustomPaymentCompletedEventHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IDistributedEventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PaymentCompletedEto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITransientDependency")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnitOfWork")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("isTransactional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleEventAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentCompletedEto")]),t._v(" payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaymentItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ItemType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyCustomKeyword"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Maybe you can automatically send out the goods to the customer here.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("please refer to the "),s("a",{attrs:{href:"https://github.com/EasyAbp/EShop/blob/dev/modules/EasyAbp.EShop.Orders/src/EasyAbp.EShop.Orders.Domain/EasyAbp/EShop/Orders/Orders/OrderPaymentCompletedEventHandler.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("usage in EShop"),s("OutboundLink")],1)])])])])])]),s("p")])]),t._v(" "),s("h2",{attrs:{id:"roadmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[t._v("#")]),t._v(" Roadmap")]),t._v(" "),s("ul",[s("li",[t._v("[ ] Unit tests.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);