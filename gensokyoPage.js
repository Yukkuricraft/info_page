(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{366:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},435:function(e,n,t){var o=t(91),r=t(56);e.exports=function(e,n,t){(void 0!==t&&!r(e[n],t)||void 0===t&&!(n in e))&&o(e,n,t)}},436:function(e,n,t){var o=t(548)(Object.getPrototypeOf,Object);e.exports=o},437:function(e,n){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},438:function(e,n,t){var o=t(549),r=t(89),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=o(function(){return arguments}())?o:function(e){return r(e)&&i.call(e,"callee")&&!u.call(e,"callee")};e.exports=c},439:function(e,n,t){(function(e){var o=t(39),r=t(551),a=n&&!n.nodeType&&n,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,u=i&&i.exports===a?o.Buffer:void 0,c=(u?u.isBuffer:void 0)||r;e.exports=c}).call(this,t(366)(e))},440:function(e,n,t){var o=t(553),r=t(554),a=t(555),i=a&&a.isTypedArray,u=i?r(i):o;e.exports=u},441:function(e,n){e.exports=function(e,n){if(("constructor"!==n||"function"!=typeof e[n])&&"__proto__"!=n)return e[n]}},442:function(e,n,t){var o=t(558),r=t(560),a=t(92);e.exports=function(e){return a(e)?o(e,!0):r(e)}},443:function(e,n){e.exports=function(e){return e}},444:function(e){e.exports=JSON.parse('{"locations":["neo/neo_genso.yaml","neo/sdm.yaml","neo/untrodden_valley.yaml","neo/youkai_mnt.yaml","neo/human_village.yaml","neo/forest_magic.yaml"]}')},530:function(e,n,t){var o=t(531),r=t(562)((function(e,n,t){o(e,n,t)}));e.exports=r},531:function(e,n,t){var o=t(532),r=t(435),a=t(538),i=t(540),u=t(35),c=t(442),s=t(441);e.exports=function e(n,t,f,l,p){n!==t&&a(t,(function(a,c){if(p||(p=new o),u(a))i(n,t,c,f,e,l,p);else{var m=l?l(s(n,c),a,c+"",n,t,p):void 0;void 0===m&&(m=a),r(n,c,m)}}),c)}},532:function(e,n,t){var o=t(90),r=t(533),a=t(534),i=t(535),u=t(536),c=t(537);function s(e){var n=this.__data__=new o(e);this.size=n.size}s.prototype.clear=r,s.prototype.delete=a,s.prototype.get=i,s.prototype.has=u,s.prototype.set=c,e.exports=s},533:function(e,n,t){var o=t(90);e.exports=function(){this.__data__=new o,this.size=0}},534:function(e,n){e.exports=function(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}},535:function(e,n){e.exports=function(e){return this.__data__.get(e)}},536:function(e,n){e.exports=function(e){return this.__data__.has(e)}},537:function(e,n,t){var o=t(90),r=t(97),a=t(96);e.exports=function(e,n){var t=this.__data__;if(t instanceof o){var i=t.__data__;if(!r||i.length<199)return i.push([e,n]),this.size=++t.size,this;t=this.__data__=new a(i)}return t.set(e,n),this.size=t.size,this}},538:function(e,n,t){var o=t(539)();e.exports=o},539:function(e,n){e.exports=function(e){return function(n,t,o){for(var r=-1,a=Object(n),i=o(n),u=i.length;u--;){var c=i[e?u:++r];if(!1===t(a[c],c,a))break}return n}}},540:function(e,n,t){var o=t(435),r=t(541),a=t(542),i=t(545),u=t(546),c=t(438),s=t(55),f=t(550),l=t(439),p=t(67),m=t(35),y=t(552),d=t(440),_=t(441),v=t(556);e.exports=function(e,n,t,b,g,x,h){var k=_(e,t),j=_(n,t),N=h.get(j);if(N)o(e,t,N);else{var O=x?x(k,j,t+"",e,n,h):void 0,w=void 0===O;if(w){var A=s(j),S=!A&&l(j),K=!A&&!S&&d(j);O=j,A||S||K?s(k)?O=k:f(k)?O=i(k):S?(w=!1,O=r(j,!0)):K?(w=!1,O=a(j,!0)):O=[]:y(j)||c(j)?(O=k,c(k)?O=v(k):m(k)&&!p(k)||(O=u(j))):w=!1}w&&(h.set(j,O),g(O,j,b,x,h),h.delete(j)),o(e,t,O)}}},541:function(e,n,t){(function(e){var o=t(39),r=n&&!n.nodeType&&n,a=r&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===r?o.Buffer:void 0,u=i?i.allocUnsafe:void 0;e.exports=function(e,n){if(n)return e.slice();var t=e.length,o=u?u(t):new e.constructor(t);return e.copy(o),o}}).call(this,t(366)(e))},542:function(e,n,t){var o=t(543);e.exports=function(e,n){var t=n?o(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}},543:function(e,n,t){var o=t(544);e.exports=function(e){var n=new e.constructor(e.byteLength);return new o(n).set(new o(e)),n}},544:function(e,n,t){var o=t(39).Uint8Array;e.exports=o},545:function(e,n){e.exports=function(e,n){var t=-1,o=e.length;for(n||(n=Array(o));++t<o;)n[t]=e[t];return n}},546:function(e,n,t){var o=t(547),r=t(436),a=t(437);e.exports=function(e){return"function"!=typeof e.constructor||a(e)?{}:o(r(e))}},547:function(e,n,t){var o=t(35),r=Object.create,a=function(){function e(){}return function(n){if(!o(n))return{};if(r)return r(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();e.exports=a},548:function(e,n){e.exports=function(e,n){return function(t){return e(n(t))}}},549:function(e,n,t){var o=t(65),r=t(89);e.exports=function(e){return r(e)&&"[object Arguments]"==o(e)}},550:function(e,n,t){var o=t(92),r=t(89);e.exports=function(e){return r(e)&&o(e)}},551:function(e,n){e.exports=function(){return!1}},552:function(e,n,t){var o=t(65),r=t(436),a=t(89),i=Function.prototype,u=Object.prototype,c=i.toString,s=u.hasOwnProperty,f=c.call(Object);e.exports=function(e){if(!a(e)||"[object Object]"!=o(e))return!1;var n=r(e);if(null===n)return!0;var t=s.call(n,"constructor")&&n.constructor;return"function"==typeof t&&t instanceof t&&c.call(t)==f}},553:function(e,n,t){var o=t(65),r=t(99),a=t(89),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&r(e.length)&&!!i[o(e)]}},554:function(e,n){e.exports=function(e){return function(n){return e(n)}}},555:function(e,n,t){(function(e){var o=t(95),r=n&&!n.nodeType&&n,a=r&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===r&&o.process,u=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=u}).call(this,t(366)(e))},556:function(e,n,t){var o=t(557),r=t(442);e.exports=function(e){return o(e,r(e))}},557:function(e,n,t){var o=t(93),r=t(91);e.exports=function(e,n,t,a){var i=!t;t||(t={});for(var u=-1,c=n.length;++u<c;){var s=n[u],f=a?a(t[s],e[s],s,t,e):void 0;void 0===f&&(f=e[s]),i?r(t,s,f):o(t,s,f)}return t}},558:function(e,n,t){var o=t(559),r=t(438),a=t(55),i=t(439),u=t(68),c=t(440),s=Object.prototype.hasOwnProperty;e.exports=function(e,n){var t=a(e),f=!t&&r(e),l=!t&&!f&&i(e),p=!t&&!f&&!l&&c(e),m=t||f||l||p,y=m?o(e.length,String):[],d=y.length;for(var _ in e)!n&&!s.call(e,_)||m&&("length"==_||l&&("offset"==_||"parent"==_)||p&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||u(_,d))||y.push(_);return y}},559:function(e,n){e.exports=function(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}},560:function(e,n,t){var o=t(35),r=t(437),a=t(561),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!o(e))return a(e);var n=r(e),t=[];for(var u in e)("constructor"!=u||!n&&i.call(e,u))&&t.push(u);return t}},561:function(e,n){e.exports=function(e){var n=[];if(null!=e)for(var t in Object(e))n.push(t);return n}},562:function(e,n,t){var o=t(563),r=t(98);e.exports=function(e){return o((function(n,t){var o=-1,a=t.length,i=a>1?t[a-1]:void 0,u=a>2?t[2]:void 0;for(i=e.length>3&&"function"==typeof i?(a--,i):void 0,u&&r(t[0],t[1],u)&&(i=a<3?void 0:i,a=1),n=Object(n);++o<a;){var c=t[o];c&&e(n,c,o,i)}return n}))}},563:function(e,n,t){var o=t(443),r=t(564),a=t(566);e.exports=function(e,n){return a(r(e,n,o),e+"")}},564:function(e,n,t){var o=t(565),r=Math.max;e.exports=function(e,n,t){return n=r(void 0===n?e.length-1:n,0),function(){for(var a=arguments,i=-1,u=r(a.length-n,0),c=Array(u);++i<u;)c[i]=a[n+i];i=-1;for(var s=Array(n+1);++i<n;)s[i]=a[i];return s[n]=t(c),o(e,this,s)}}},565:function(e,n){e.exports=function(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}},566:function(e,n,t){var o=t(567),r=t(569)(o);e.exports=r},567:function(e,n,t){var o=t(568),r=t(94),a=t(443),i=r?function(e,n){return r(e,"toString",{configurable:!0,enumerable:!1,value:o(n),writable:!0})}:a;e.exports=i},568:function(e,n){e.exports=function(e){return function(){return e}}},569:function(e,n){var t=Date.now;e.exports=function(e){var n=0,o=0;return function(){var r=t(),a=16-(r-o);if(o=r,a>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}},570:function(e,n,t){var o={"./help_locations.yaml":445,"./locationList.yaml":444,"./neo/forest_magic.yaml":571,"./neo/human_village.yaml":572,"./neo/neo_genso.yaml":573,"./neo/sdm.yaml":574,"./neo/untrodden_valley.yaml":575,"./neo/youkai_mnt.yaml":576};function r(e){return a(e).then((function(e){return t.t(e,3)}))}function a(e){return Promise.resolve().then((function(){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}))}r.keys=function(){return Object.keys(o)},r.resolve=a,r.id=570,e.exports=r},571:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"forest_magic":{"displayName":"Forest of Magic","menuName":"Forest of Magic","images":[{"name":"neo/forest_magic/hakurei_shrine","image_taken_by":"Katrix"},{"name":"neo/forest_magic/alice","image_taken_by":"Katrix"},{"name":"neo/forest_magic/marisa","image_taken_by":"Katrix"},{"name":"neo/forest_magic/kourindu","image_taken_by":"Katrix"}]}}}}')},572:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"human_village":{"displayName":"Human Village","menuName":"Human Village","images":[{"name":"neo/human_village/top","image_taken_by":"Katrix"},{"name":"neo/human_village/statue","image_taken_by":"Katrix"},{"name":"neo/human_village/fighting_stage","image_taken_by":"Katrix"}]}}}}')},573:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","description":"NeoGensokyo is our new iteration of Gensokyo. Unlike previous iterations we\'re giving it our absolute all and making it as good as we can. While it\'s still a work in progress, here are some images of our work thus far!"}}')},574:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"sdm":{"displayName":"Scarlet Devil Mansion","menuName":"SDM","description":"Home to the scarlet devil, Remilia Scarlet, and her servants","images":[{"name":"neo/sdm/front","image_taken_by":"Katrix"},{"name":"neo/sdm/front_side","image_taken_by":"Katrix"},{"name":"neo/sdm/center","image_taken_by":"Katrix"},{"name":"neo/sdm/kitchen","image_taken_by":"Katrix"},{"name":"neo/sdm/greenhouse","image_taken_by":"Katrix"},{"name":"neo/sdm/back","image_taken_by":"Katrix"}]}}}}')},575:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"untrodden_valley":{"displayName":"Untrodden Valley","menuName":"Untrodden Valley","images":[{"name":"neo/untrodden_valley/valley","image_taken_by":"Katrix"},{"name":"neo/untrodden_valley/aki_farm","image_taken_by":"Katrix"},{"name":"neo/untrodden_valley/river_1","image_taken_by":"Katrix"},{"name":"neo/untrodden_valley/river_2","image_taken_by":"Katrix"},{"name":"neo/untrodden_valley/waterfall","image_taken_by":"Katrix"}]}}}}')},576:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"youkai_mnt":{"displayName":"Youkai Mountain","menuName":"Youkai Mountain","images":[{"name":"neo/youkai_mnt/mountain","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/bridge","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/entrance","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/shrine","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/lake","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/pond","image_taken_by":"Katrix"}]}}}}')},638:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("sidebar-page",{attrs:{"parallax-images":e.images},scopedSlots:e._u([{key:"sidebar",fn:function(){return[o("div",{staticClass:"sidebar-header"},[o("h2",[e._v("Locations")])]),e._v(" "),o("sidebar-entries",{staticClass:"sidebar-components",attrs:{"href-prefix":"location",subgroups:e.locations,"subgroup-children-name":"sublocations"}})]},proxy:!0},{key:"parallax",fn:function(){return[o("h1",[e._v("Locations in Gensokyo")]),e._v(" "),o("p",[e._v("Explore our builds in Gensokyo.")])]},proxy:!0}])},[o("vue-headful",{attrs:{title:"YukkuriCraft - Gensokyo",description:"Look at all the different places in our Gensokyo.",image:t(33),url:"https://yukkuricraft.net/gensokyo/"}}),e._v(" "),e._v(" "),e._v(" "),e._l(e.locations,(function(e,n){return o("location",{key:n,attrs:{depth:0,"location-id":n,location:e}})}))],2)};o._withStripped=!0;var r=t(369),a=t(368),i=t(454),u=t(530),c=t.n(u),s=t(29),f=t(24),l=t(444);function p(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var y={components:{SidebarPage:r.a,SidebarEntries:a.default,Location:i.a},data:function(){return{allLocations:[]}},created:function(){var e=this,n=l.locations.map((function(e,n){var o=Object(f.a)(e,".yaml");return t(570)("./".concat(o,".yaml")).then((function(e){return{commands:e,idx:n}}))}));Promise.all(n).then((function(n){n.forEach((function(n){var t=n.commands,o=n.idx;e.$set(e.allLocations,o,t.default)}))}))},computed:{images:function(){return Object(s.a)("greenhouse")},locations:function(){return JSON.parse(JSON.stringify(c.a.apply(void 0,[{}].concat(p(this.allLocations)))))}}},d=t(7),_=Object(d.a)(y,o,[],!1,null,null,null);_.options.__file="src/pages/gensokyo/LocationsPage.vue";n.default=_.exports}}]);