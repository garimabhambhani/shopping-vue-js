(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{515:function(t,r,n){"use strict";n.r(r);n(23),n(129);var o={validate:function(t){var r=t.params;return t.store.state.Fashion.Products.male.some((function(t){return t.id===r.id}))},asyncData:function(t){var r=t.params,n=t.store;return{product:n.state.Fashion.Products.male.find((function(t){return t.id===r.id})),similarProducts:n.state.Fashion.Products.male}},components:{singleProduct:n(442).default}},e=n(36),component=Object(e.a)(o,(function(){var t=this;return(0,t._self._c)("singleProduct",{attrs:{product:t.product,similarProducts:t.similarProducts,params:t.$route.params.id,subCrumbName:"male",forBreadcrumbFa:"مردانه",subPath:"Fashion"}})}),[],!1,null,null,null);r.default=component.exports}}]);