(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6,10],{438:function(t,e,o){"use strict";o.r(e);o(42),o(37),o(41),o(23),o(61),o(43),o(62);var n=o(29),c=o(72);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={props:{products:Object,products2:Object,subRoute:String,subRoute2:String},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["getWidth"]))},f=l,d=o(36),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return t.getWidth<768?e("div",{staticClass:"category-sm fixed-bottom d-flex justify-content-around w-100 bg-white py-2 py-sm-0"},[t._l(t.products,(function(i,o){return e("nuxt-link",{key:o,staticClass:"category-sm-item d-flex justify-content-center align-items-center p-1 p-sm-3 font-16 font-sm-18",attrs:{to:t.localePath("".concat(t.subRoute?t.subRoute+o:i.route)),"exact-active-class":"active",exact:""}},[e("div",{staticClass:"category-sm-item_cover px-1 font-weight-bold font-16 font-sm-18"},[i.icon?e("b-icon",{attrs:{icon:i.icon}}):e("span",{class:["icon",i.iconClass]})],1),t._v(" "),e("div",{staticClass:"font-weight-bold"},[t._v("\n      "+t._s("en"===t.$i18n.locale?o:i.titleFa)+"\n    ")])])})),t._v(" "),t.products2?t._l(t.products2,(function(i,o){return e("nuxt-link",{key:o,staticClass:"category-sm-item d-flex justify-content-center align-items-center p-1 p-sm-3 font-16 font-sm-18",attrs:{to:t.localePath("".concat(t.subRoute2+o))}},[e("div",{staticClass:"category-sm-item_cover font-16 font-sm-18 px-1 font-weight-bold"},[i.icon?e("b-icon",{attrs:{icon:i.icon}}):e("span",{class:["icon",i.iconClass]})],1),t._v(" "),e("div",{staticClass:"font-weight-bold"},[t._v("\n        "+t._s("en"===t.$i18n.locale?o:i.titleFa)+"\n      ")])])})):t._e()],2):t._e()}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,o){"use strict";o.r(e);o(33);var n={props:{name:String,route:String}},c=o(36),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"mb-1"},[e("nuxt-link",{staticClass:"btn btn-toggle align-items-center rounded",attrs:{to:t.localePath("".concat(t.route)),exact:"","exact-active-class":"active-category text-primary"}},[t._v("\n    "+t._s(t.name)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},441:function(t,e,o){"use strict";o.r(e);var n=o(194),c=o(438),r=o(439),l={props:["subCategoryItems","topItemName"],components:{collapseItem:n.default,categoryListSm:c.default,item:r.default}},f=o(36),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3 col-xl-2 d-none d-lg-block"},[e("asideLayout",[e("div",{attrs:{slot:"beforeDivider"},slot:"beforeDivider"},[e("item",{attrs:{name:t.topItemName,route:t.subCategoryItems.route}}),t._v(" "),e("collapseItem",{attrs:{name:t.$tc("header.categoriesSm",2),visible:!0,id:"collapse-2",items:t.subCategoryItems.products}})],1)])],1),t._v(" "),e("div",{staticClass:"col-12 col-lg-9 col-xl-10"},[t._t("default")],2)]),t._v(" "),e("categoryListSm",{attrs:{products:t.subCategoryItems.products}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);