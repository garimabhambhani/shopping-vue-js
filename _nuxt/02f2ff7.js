(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{426:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("0eba88b6",content,!0,{sourceMap:!1})},428:function(t,e,r){"use strict";r.r(e);r(60);var n={props:{activeText:String,subCrumb:Boolean,subCrumbSingle:Boolean,subPath:String,subCrumbName:String,subCrumbPath:String}},c=(r(430),r(36)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex mb-1 breadcrumb bg-light"},[e("nuxt-link",{attrs:{to:t.localePath("/"),exact:""}},[t._v("\n      "+t._s(t.$tc("header.categoriesSm",1))+"\n  ")]),t._v(" "),e("span",{staticClass:"breadcrumb-divider"},[t._v("/")]),t._v(" "),e("nuxt-link",{attrs:{to:t.localePath("/Products"),exact:""}},[t._v("\n      "+t._s(t.$tc("header.categoriesSm",2))+"\n  ")]),t._v(" "),e("span",{staticClass:"breadcrumb-divider"},[t._v("/")]),t._v(" "),t.subCrumb?e("nuxt-link",{attrs:{to:t.localePath("/Products/category/".concat(t.subCrumbPath)),exact:""}},[t._v("\n      "+t._s(t.subCrumbName)+"\n  ")]):t._e(),t._v(" "),t.subCrumbSingle?e("nuxt-link",{attrs:{to:t.localePath("/Products/".concat(t.subPath,"/").concat(t.subCrumbPath)),exact:""}},[t._v("\n      "+t._s(t.subCrumbName)+"\n  ")]):t._e(),t._v(" "),t.subCrumb||t.subCrumbSingle?e("span",{staticClass:"breadcrumb-divider"},[t._v("/")]):t._e(),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("\n    "+t._s(t.activeText)+"\n  ")])],1)}),[],!1,null,"575f503a",null);e.default=component.exports},430:function(t,e,r){"use strict";r(426)},431:function(t,e,r){var n=r(56)(!1);n.push([t.i,".breadcrumb-divider[data-v-575f503a]{color:#6c757d;padding:0 .5rem}",""]),t.exports=n}}]);