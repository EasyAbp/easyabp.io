(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{731:function(t,a,e){"use strict";e.r(a);var s=e(103),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"paymentservice-wechatpay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paymentservice-wechatpay"}},[t._v("#")]),t._v(" PaymentService.WeChatPay")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.PaymentService.WeChatPay.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.PaymentService.WeChatPay.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.PaymentService.WeChatPay.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.PaymentService.WeChatPay.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("WeChatPay implementation of the EasyAbp.PaymentService module.")]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("blockquote",[e("p",[t._v("Should also install the "),e("RouterLink",{attrs:{to:"/modules/PaymentService/#getting-started"}},[t._v("PaymentService module")]),t._v(" since this module depends on it.")],1)]),t._v(" "),e("ul",[e("li",[t._v("Install with "),e("a",{attrs:{href:"https://github.com/EasyAbp/AbpHelper.GUI",target:"_blank",rel:"noopener noreferrer"}},[t._v("AbpHelper"),e("OutboundLink")],1),t._v("\nComing soon.")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Install the following NuGet packages. (see how)")]),t._v(" "),e("ul",[e("li",[t._v("EasyAbp.PaymentService.WeChatPay.Application")]),t._v(" "),e("li",[t._v("EasyAbp.PaymentService.WeChatPay.Application.Contracts")]),t._v(" "),e("li",[t._v("EasyAbp.PaymentService.WeChatPay.Domain")]),t._v(" "),e("li",[t._v("EasyAbp.PaymentService.WeChatPay.Domain.Shared")]),t._v(" "),e("li",[t._v("EasyAbp.PaymentService.WeChatPay.EntityFrameworkCore")]),t._v(" "),e("li",[t._v("EasyAbp.PaymentService.WeChatPay.HttpApi")]),t._v(" "),e("li",[t._v("EasyAbp.PaymentService.WeChatPay.HttpApi.Client")]),t._v(" "),e("li",[t._v("(Optional) EasyAbp.PaymentService.WeChatPay.MongoDB")]),t._v(" "),e("li",[t._v("(Optional) EasyAbp.PaymentService.WeChatPay.Web")])])]),t._v(" "),e("li",[e("p",[t._v("Add "),e("code",[t._v("DependsOn(typeof(xxx))")]),t._v(" attribute to configure the module dependencies. (see how)")])]),t._v(" "),e("li",[e("p",[t._v("Add "),e("code",[t._v("builder.ConfigurePaymentServiceWeChatPay();")]),t._v(" to the "),e("code",[t._v("OnModelCreating()")]),t._v(" method in "),e("strong",[t._v("MyProjectMigrationsDbContext.cs")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Add EF Core migrations and update your database. See: "),e("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC#add-new-migration-update-the-database",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABP document"),e("OutboundLink")],1),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Register the WeChatPay payment method:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnApplicationInitialization")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationInitializationContext")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" resolver "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ServiceProvider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetRequiredService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IPaymentServiceResolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    resolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("TryRegisterProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WeChatPayPaymentServiceProvider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaymentMethod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("WeChatPayPaymentServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Configure the "),e("a",{attrs:{href:"https://github.com/EasyAbp/PaymentService/blob/master/modules/EasyAbp.PaymentService.WeChatPay/src/EasyAbp.PaymentService.WeChatPay.Domain/EasyAbp/PaymentService/WeChatPay/Settings/WeChatPaySettings.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("WeChatPay settings"),e("OutboundLink")],1),t._v(", you can try to use "),e("a",{attrs:{href:"https://github.com/EasyAbp/Abp.SettingUi",target:"_blank",rel:"noopener noreferrer"}},[t._v("SettingUI"),e("OutboundLink")],1),t._v(" to finish this work.")]),t._v(" "),e("blockquote",[e("p",[t._v("See the "),e("a",{attrs:{href:"https://github.com/EasyAbp/PaymentService/blob/master/samples/PaymentServiceSample/aspnet-core/src/PaymentServiceSample.Web/appsettings.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1),t._v(", it is also according to the "),e("a",{attrs:{href:"https://github.com/EasyAbp/Abp.WeChat/blob/master/doc/WeChatPay.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("document"),e("OutboundLink")],1),t._v(" of the EasyAbp.Abp.WeChat module.")])])]),t._v(" "),e("li",[e("p",[t._v("Pay with WeChatPay.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Users can use the API "),e("code",[t._v("/api/paymentService/payment/{id}/pay")]),t._v(" to finish the payment, please put the necessary params in the "),e("code",[t._v("ExtraProperties")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "extraProperties": {\n        "trade_type": "JSAPI",\n        "appid": "wx81a2956875268fk8"   // You can specify an appid or get it from the input from the client.\n    }\n}\n')])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("Skip the following steps if you are using "),e("a",{attrs:{href:"https://github.com/EasyAbp/EShop",target:"_blank",rel:"noopener noreferrer"}},[t._v("EasyAbp.EShop"),e("OutboundLink")],1),t._v(")\n")]),e("details",[e("summary",[t._v("See more steps")]),e("p")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("Create a payment with the payment method "),e("code",[t._v("WeChatPay")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("Other modules or apps that depend on PaymentService module should create payments via distributed events.\n")]),e("details",[e("summary",[t._v("See sample code")]),e("p")])]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _distributedEventBus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("PublishAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CreatePaymentEto")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    TenantId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CurrentTenant"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    UserId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CurrentUser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    PaymentMethod "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WeChatPay"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Should specify the payment method as "WeChatPay"')]),t._v("\n    Currency "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CNY"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Should always be "CNY"')]),t._v("\n    PaymentItems "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CreatePaymentItemEto")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ItemType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyCustomKeyword"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It is just a sample and you can customize it yourself")]),t._v("\n        ItemKey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Currency "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CNY"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        OriginalPaymentAmount "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Price\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToList")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("please refer to the "),e("a",{attrs:{href:"https://github.com/EasyAbp/EShop/blob/dev/modules/EasyAbp.EShop.Payments/src/EasyAbp.EShop.Payments.Application/EasyAbp/EShop/Payments/Payments/PaymentAppService.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("usage in EShop"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("p",[t._v("Handle the payment created distributed event to get and remember the "),e("code",[t._v("PaymentId")]),t._v(".\n")]),e("details",[e("summary",[t._v("See sample code")]),e("p"),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCustomPaymentCreatedEventHandler")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IDistributedEventHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("EntityCreatedEto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PaymentEto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITransientDependency")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token attribute"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnitOfWork")]),e("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("isTransactional")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleEventAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EntityCreatedEto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PaymentEto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" eventData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" item "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" eventData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaymentItems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ItemType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyCustomKeyword"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Persistence the PaymentId of the ongoing payment, so user can get it in some way.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("please refer to the "),e("a",{attrs:{href:"https://github.com/EasyAbp/EShop/blob/dev/modules/EasyAbp.EShop.Orders/src/EasyAbp.EShop.Orders.Domain/EasyAbp/EShop/Orders/Orders/OrderPaymentCreatedEventHandler.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("usage in EShop"),e("OutboundLink")],1)])])]),e("p")]),t._v(" "),e("li",[e("p",[t._v("Handle the payment canceled distributed event to clear the remembered the "),e("code",[t._v("PaymentId")]),t._v(".\n")]),e("details",[e("summary",[t._v("See sample code")]),e("p"),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCustomPaymentCanceledEventHandler")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IDistributedEventHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PaymentCanceledEto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITransientDependency")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token attribute"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnitOfWork")]),e("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("isTransactional")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleEventAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentCanceledEto")]),t._v(" payment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" item "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" payment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaymentItems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ItemType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyCustomKeyword"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Remove the remembered PaymentId.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("please refer to the "),e("a",{attrs:{href:"https://github.com/EasyAbp/EShop/blob/dev/modules/EasyAbp.EShop.Orders/src/EasyAbp.EShop.Orders.Domain/EasyAbp/EShop/Orders/Orders/OrderPaymentCanceledEventHandler.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("usage in EShop"),e("OutboundLink")],1)])])]),e("p")]),t._v(" "),e("li",[e("p",[t._v("Handle the payment completed distributed event:\n")]),e("details",[e("summary",[t._v("See sample code")]),e("p"),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCustomPaymentCompletedEventHandler")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IDistributedEventHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PaymentCompletedEto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITransientDependency")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token attribute"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnitOfWork")]),e("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("isTransactional")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleEventAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentCompletedEto")]),t._v(" payment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" item "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" payment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PaymentItems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ItemType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyCustomKeyword"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Maybe you can automatically send out the goods to the customer here.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("please refer to the "),e("a",{attrs:{href:"https://github.com/EasyAbp/EShop/blob/dev/modules/EasyAbp.EShop.Orders/src/EasyAbp.EShop.Orders.Domain/EasyAbp/EShop/Orders/Orders/OrderPaymentCompletedEventHandler.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("usage in EShop"),e("OutboundLink")],1)])])]),t._v(" "),e("p")])])])]),t._v(" "),e("h2",{attrs:{id:"roadmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[t._v("#")]),t._v(" Roadmap")]),t._v(" "),e("ul",[e("li",[t._v("[ ] Unit tests.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);