(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{513:function(t,r,o){"use strict";o.r(r);o(23),o(129);var n={validate:function(t){var r=t.params;return t.store.state.Digital.Products.laptop.some((function(t){return t.id===r.id}))},asyncData:function(t){var r=t.params,o=t.store;return{product:o.state.Digital.Products.laptop.find((function(t){return t.id===r.id})),similarProducts:o.state.Digital.Products.laptop}},components:{singleProduct:o(442).default}},e=o(36),component=Object(e.a)(n,(function(){var t=this;return(0,t._self._c)("singleProduct",{attrs:{product:t.product,similarProducts:t.similarProducts,params:t.$route.params.id,subCrumbName:"laptop",forBreadcrumbFa:"لپ تاپ",subPath:"Digital"}})}),[],!1,null,null,null);r.default=component.exports}}]);