(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5],{273:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("17ec4d76",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";n(273)},275:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.altfive[data-v-efecb3ac]{\n  height:1.35rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},276:function(t,e,n){"use strict";n.r(e);n(274);var r=n(9),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-auto md:block altfive",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,"efecb3ac",null);e.default=component.exports},316:function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("1c76a746",content,!0,{sourceMap:!1})},336:function(t,e,n){"use strict";n(316)},337:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.keepall[data-v-000d9b00]{\n  word-break:keep-all\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},387:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(42),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).where({category:"Front-End"}).sortBy("createdAt","desc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()},head:{title:"Front-End",htmlAttrs:{lang:"ko"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"중앙대학교 Google DSC 블로그입니다. 활동 관련 소식, 공부 내용 등을 주기적으로 업로드합니다."},{name:"format-detection",content:"telephone=no"}]}}),l=(n(336),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"max-w-6xl grid grid-cols-1 colspan mt-5 md:mt-8 pb-14 md:pb-24 max-w-6xl mx-auto px-6"},t._l(t.articles,(function(article){return n("div",{key:article,staticClass:"group"},[n("nuxt-link",{attrs:{to:"article/"+article.slug}},[n("div",{staticClass:"article-inner flex justify-between items-center border-t py-5 md:py-8 border-gray-600"},[n("div",{staticClass:"pr-4"},[n("p",{staticClass:"mb-1 md:mb-1.5 text-sm md:text-sm text-gray-400"},[t._v(t._s(article.category)+" · "+t._s(article.author))]),t._v(" "),n("h2",{staticClass:"mb-1 md:mb-1.5 text-lg md:text-xl font-medium poppins text-gray-800"},[t._v(t._s(article.title))]),t._v(" "),n("p",{staticClass:" text-sm md:text-base text-gray-600 custom-text"},[t._v(t._s(article.description))])]),t._v(" "),n("div",{staticClass:"pl-4 pr-6 hidden md:block"},[n("ExternalLinkLogo",{staticClass:"fill-current text-gray-400 group-hover:text-gray-700 transition duration-200"})],1)])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-28 md:pt-52 pb-3 md:pb-10 max-w-6xl mx-auto px-6"},[n("div",{staticClass:"pb-4 md:pb-6 poppins text-3xl md:text-7xl font-medium text-gray-800"},[t._v("\n            Front-End\n        ")]),t._v(" "),n("div",{staticClass:"font-normal text-base md:text-xl text-gray-600"},[t._v("\n            웹 개발을 위한 글들이에요.\n        ")])])}],!1,null,"000d9b00",null);e.default=component.exports;installComponents(component,{ExternalLinkLogo:n(276).default})}}]);