(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{511:function(t,r,e){"use strict";e.r(r);e(23),e(129);var n={validate:function(t){var r=t.params;return t.store.state.Fashion.Products.female.some((function(t){return t.id===r.id}))},asyncData:function(t){var r=t.params,e=t.store;return{product:e.state.Fashion.Products.female.find((function(t){return t.id===r.id})),similarProducts:e.state.Fashion.Products.female}},components:{singleProduct:e(442).default}},o=e(36),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("singleProduct",{attrs:{product:t.product,similarProducts:t.similarProducts,params:t.$route.params.id,subCrumbName:"female",forBreadcrumbFa:"زنانه",subPath:"Fashion"}})}),[],!1,null,null,null);r.default=component.exports}}]);