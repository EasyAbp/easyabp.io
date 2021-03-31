(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{769:function(t,s,a){"use strict";a.r(s);var n=a(106),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、基本模块配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、基本模块配置"}},[t._v("#")]),t._v(" 一、基本模块配置")]),t._v(" "),a("h3",{attrs:{id:"_1-1-模块的引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-模块的引用"}},[t._v("#")]),t._v(" 1.1 模块的引用")]),t._v(" "),a("p",[t._v("添加 "),a("strong",[t._v("EasyAbp.Abp.WeChat.Pay")]),t._v(" 模块的 NuGet 包或者项目引用到 "),a("strong",[t._v("Domain")]),t._v(" 层，并在对应的模块上面添加 "),a("code",[t._v("[DependsOn]")]),t._v(" 特性标签。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DependsOn")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("AbpWeChatPayModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXDomainModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("添加 "),a("strong",[t._v("EasyAbp.Abp.WeChat.Pay.HttpApi")]),t._v(" 模块的 NuGet 包或者项目引用到 "),a("strong",[t._v("Http.Api")]),t._v(" 层，并在对应的模块上面添加 "),a("code",[t._v("[DependsOn]")]),t._v(" 特性标签。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DependsOn")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("AbpWeChatPayHttpApiModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXHttpApiModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-2-模块的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-模块的配置"}},[t._v("#")]),t._v(" 1.2 模块的配置")]),t._v(" "),a("p",[t._v("微信模块的配置参数都存放在 "),a("code",[t._v("AbpWeChatPayOptions")]),t._v(" 内部，开发人员只需要在启动模块的 "),a("code",[t._v("ConfigureService()")]),t._v(" 方法中进行配置即可，下面是最小启动配置。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DependsOn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("AbpWeChatPayHttpApiModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXHttpApiModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" ConfigureServices "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceConfigurationContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbpWeChatPayOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发起微信支付请求的产品 App Id。如果是公众号需要发起支付请求则是公众号的 AppId，小程序则是小程序的 AppId。")]),t._v("\n            op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AppId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信支付的 API 密钥信息，会在后续进行签名时被使用。")]),t._v("\n            op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"000000000000000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支付回调地址，用于接收支付结果通知。")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果使用了 HttpApi 模块的 Controller，则默认是 域名 + /WeChatPay/Notify 路由。")]),t._v("\n            op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotifyUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://xxx.xxxx.com/WeChatPay/Notify"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("进行上述配置以后，你的项目就集成了微信支付功能，如果你需要启用沙箱模式，可以设置 "),a("code",[t._v("AbpWeChatPayOptions.IsSandBox")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 。")]),t._v(" "),a("p",[t._v("其他配置参数，可以参考 "),a("code",[t._v("AbpWeChatPayOptions")]),t._v(" 类型的定义，上面针对各个配置参数都有详细的注释说明。")]),t._v(" "),a("h4",{attrs:{id:"_1-2-1-配置提供器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-配置提供器"}},[t._v("#")]),t._v(" 1.2.1 配置提供器")]),t._v(" "),a("p",[t._v("我们参考 "),a("code",[t._v("ITenantResolver")]),t._v(" 的方式，将微信支付相关的配置参数抽象到各个 Provider 当中。默认的 Provider 实现是基于 "),a("code",[t._v("IOptions<AbpWeChatPayOptions>")]),t._v("，他会从上述的配置项中读取 AppId 等参数。")]),t._v(" "),a("p",[t._v("如果你的系统是根据租户分隔，那么只需要自己实现 "),a("code",[t._v("IWeChatPayOptionResolveContributor")]),t._v(" 接口，在内部处理逻辑即可。")]),t._v(" "),a("h2",{attrs:{id:"二、提供的回调接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、提供的回调接口"}},[t._v("#")]),t._v(" 二、提供的回调接口")]),t._v(" "),a("h3",{attrs:{id:"_2-1-支付回调接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-支付回调接口"}},[t._v("#")]),t._v(" 2.1 支付回调接口")]),t._v(" "),a("p",[t._v("支付通知接口的默认路由是 "),a("code",[t._v("/WeChatPay/Notify")]),t._v("，当开发人员调用了统一下单接口之后，微信会将支付结果通过异步回调的方式请求 "),a("strong",[t._v("支付通知接口")]),t._v("，该参数可以通过注入 "),a("code",[t._v("AbpWeChatPayOptions.NotifyUrl")]),t._v(" 进行读取或设置。")]),t._v(" "),a("blockquote",[a("p",[t._v("开发人员也可以自己编写回调接口，只需要在配置的时候，参数传递自己的回调接口 URL 即可。")])]),t._v(" "),a("p",[t._v("用户如果需要对支付结果进行处理，只需要实现一个或多个 "),a("code",[t._v("IWeChatPayHandler")]),t._v(" 处理器即可。当框架接受到微信通知时，会触发开发人员编写的处理器，并将微信结果传递给这些处理器。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeChatPaymentHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IWeChatPayHandler")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义当前的处理器为标准处理器。")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("WeChatHandlerType")]),t._v(" Type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" WeChatHandlerType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeChatPayHandlerContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"接受到了数据"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompletedTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("编写完成之后，则需要开发人员手动注入这些处理器。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXDomainModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceConfigurationContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddTransient")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IWeChatPayHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WeChatPaymentHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果在处理过程当中出现了异常，那么你可以设置 "),a("code",[t._v("WeChatPayHandlerContext")]),t._v(" 当中的 "),a("code",[t._v("IsSuccess")]),t._v(" 参数为 "),a("code",[t._v("false")]),t._v("，并且可以填写对应的失败原因。")]),t._v(" "),a("p",[t._v("其中 "),a("code",[t._v("XmlDocument")]),t._v(" 对象内部的参数含义，可以参考微信支付 "),a("strong",[a("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_7&index=8",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发文档"),a("OutboundLink")],1)]),t._v("。")]),t._v(" "),a("p",[t._v("WeChatPay 模块默认提供了参数校验处理器，各个处理器的调用顺序是按照 "),a("strong",[t._v("注入顺序")]),t._v(" 来的，目前暂时不支持处理器自定义排序。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-退款回调接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-退款回调接口"}},[t._v("#")]),t._v(" 2.2 退款回调接口")]),t._v(" "),a("p",[t._v("当开发人员发起了退款操作之后，微信会将退款通知，通过异步回调的方式请求 "),a("strong",[t._v("退款通知接口")]),t._v("，具体的接口地址可以在模块启动时使用 "),a("code",[t._v("Configure<AbpWeChatPayOptions>()")]),t._v(" 方法，对 "),a("code",[t._v("RefundNotifyUrl")]),t._v(" 参数进行配置。")]),t._v(" "),a("blockquote",[a("p",[t._v("开发人员也可以自己编写回调接口，只需要在配置的时候，参数传递自己的回调接口 URL 即可。")])]),t._v(" "),a("p",[t._v("用户如果需要对退款通知进行处理，只需要实现一个或多个 "),a("code",[t._v("IWeChatPayHandler")]),t._v(" 处理器即可。当框架接受到微信通知时，会触发开发人员编写的处理器，并将微信结果传递给这些处理器。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXAAAHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IWeChatPayHandler")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义当前处理器的类型为退款。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("WeChatHandlerType")]),t._v(" Type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" WeChatHandlerType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Refund"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XmlDocument")]),t._v(" xmlDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"接受到了数据"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompletedTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("编写完成之后，则需要开发人员手动注入这些处理器。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXDomainModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceConfigurationContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSingleton")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IWeChatPayHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" XXXAAAHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中 "),a("code",[t._v("XmlDocument")]),t._v(" 对象内部的参数含义，可以参考微信支付 "),a("strong",[a("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_16&index=10",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发文档"),a("OutboundLink")],1)]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"三、服务的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、服务的使用"}},[t._v("#")]),t._v(" 三、服务的使用")]),t._v(" "),a("p",[t._v("针对微信支付服务，目前模块所有接口都封装到 "),a("code",[t._v("PayService")]),t._v(" 实现内部，开发人员只需要注入 "),a("code",[t._v("PayService")]),t._v(" 服务即可使用下面的接口方法。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-发起支付请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-发起支付请求"}},[t._v("#")]),t._v(" 3.1 发起支付请求")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fact")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnifiedOrder_Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _payService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnifiedOrderAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你的 AppId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你的商户 Id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"订单的描述信息"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"订单号"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 订单号需要你自己生成，长度不超过 32 位。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支付金额，单位是分。")]),t._v("\n        TradeType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JsApi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 交易类型。")]),t._v("\n    \n    result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShouldNotBeNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-2-发起退款请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-发起退款请求"}},[t._v("#")]),t._v(" 3.2 发起退款请求")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fact")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _payService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RefundAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你的 AppId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你的商户 Id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"订单号"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"退款订单号"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 退款订单号需要你自己生成，长度不超过 32 位。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原始订单金额，单位是分，必须准确。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 退款订单金额，单位是分。")]),t._v("\n    \n    response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShouldNotBeNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);