(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{731:function(e,t,r){"use strict";r.r(t);var s=r(103),i=Object(s.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"example-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[this._v("#")]),this._v(" Example 1")]),this._v(" "),t("p",[this._v("Get DTOs from application service")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    public class MyProjectRelatedDtoLoaderProfile : RelatedDtoLoaderProfile\n    {\n        public MyProjectRelatedDtoLoaderProfile(IServiceProvider serviceProvider) : base(serviceProvider)\n        {\n            CreateRule<ProductDto>(async ids =>\n            {\n                var dtos = new List<ProductDto>();\n                \n                using (var scope = serviceProvider.CreateScope())\n                {\n                    var productAppService = scope.ServiceProvider.GetService<IProductAppService>();\n                    \n                    foreach (var id in ids)\n                    {\n                        dtos.Add(await productAppService.GetAsync(id));\n                    }\n                }\n\n                return dtos;\n            });\n        }\n    }\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);