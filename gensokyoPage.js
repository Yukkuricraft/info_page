(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{402:function(e){e.exports=JSON.parse('{"locations":["neo/neo_genso.yaml","neo/sdm.yaml","neo/untrodden_valley.yaml","neo/youkai_mnt.yaml","neo/human_village.yaml","neo/forest_magic.yaml"]}')},625:function(e,n,a){var o={"./help_locations.yaml":463,"./locationList.yaml":402,"./neo/forest_magic.yaml":626,"./neo/human_village.yaml":627,"./neo/neo_genso.yaml":628,"./neo/sdm.yaml":629,"./neo/untrodden_valley.yaml":630,"./neo/youkai_mnt.yaml":631};function t(e){return i(e).then((function(e){return a.t(e,3)}))}function i(e){return Promise.resolve().then((function(){if(!a.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}))}t.keys=function(){return Object.keys(o)},t.resolve=i,t.id=625,e.exports=t},626:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"forest_magic":{"displayName":"Forest of Magic","menuName":"Forest of Magic","images":[{"name":"neo/forest_magic/hakurei_shrine","image_taken_by":"Katrix"},{"name":"neo/forest_magic/alice","image_taken_by":"Katrix"},{"name":"neo/forest_magic/marisa","image_taken_by":"Katrix"},{"name":"neo/forest_magic/kourindu","image_taken_by":"Katrix"}]}}}}')},627:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"human_village":{"displayName":"Human Village","menuName":"Human Village","images":[{"name":"neo/human_village/top","image_taken_by":"Katrix"},{"name":"neo/human_village/statue","image_taken_by":"Katrix"},{"name":"neo/human_village/fighting_stage","image_taken_by":"Katrix"}]}}}}')},628:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","description":"NeoGensokyo is our new iteration of Gensokyo. Unlike previous iterations we\'re giving it our absolute all and making it as good as we can. While it\'s still a work in progress, here are some images of our work thus far!"}}')},629:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"sdm":{"displayName":"Scarlet Devil Mansion","menuName":"SDM","description":"Home to the scarlet devil, Remilia Scarlet, and her servants","images":[{"name":"neo/sdm/front","image_taken_by":"Katrix"},{"name":"neo/sdm/front_side","image_taken_by":"Katrix"},{"name":"neo/sdm/center","image_taken_by":"Katrix"},{"name":"neo/sdm/kitchen","image_taken_by":"Katrix"},{"name":"neo/sdm/greenhouse","image_taken_by":"Katrix"},{"name":"neo/sdm/back","image_taken_by":"Katrix"}]}}}}')},630:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"untrodden_valley":{"displayName":"Untrodden Valley","menuName":"Untrodden Valley","images":[{"name":"neo/untrodden_valley/valley","image_taken_by":"Katrix"},{"name":"neo/untrodden_valley/aki_farm","image_taken_by":"Katrix"},{"name":"neo/untrodden_valley/river_1","image_taken_by":"Katrix"},{"name":"neo/untrodden_valley/river_2","image_taken_by":"Katrix"},{"name":"neo/untrodden_valley/waterfall","image_taken_by":"Katrix"}]}}}}')},631:function(e){e.exports=JSON.parse('{"neogenso":{"displayName":"NeoGensokyo","menuName":"NeoGensokyo","sublocations":{"youkai_mnt":{"displayName":"Youkai Mountain","menuName":"Youkai Mountain","images":[{"name":"neo/youkai_mnt/mountain","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/bridge","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/entrance","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/shrine","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/lake","image_taken_by":"Katrix"},{"name":"neo/youkai_mnt/pond","image_taken_by":"Katrix"}]}}}}')},692:function(e,n,a){"use strict";a.r(n);var o=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("sidebar-page",{attrs:{"parallax-images":e.images},scopedSlots:e._u([{key:"sidebar",fn:function(){return[o("div",{staticClass:"sidebar-header"},[o("h2",[e._v("Locations")])]),e._v(" "),o("sidebar-entries",{staticClass:"sidebar-components",attrs:{"href-prefix":"location",subgroups:e.locations,"subgroup-children-name":"sublocations"}})]},proxy:!0},{key:"parallax",fn:function(){return[o("h1",[e._v("Locations in Gensokyo")]),e._v(" "),o("p",[e._v("Explore our builds in Gensokyo.")])]},proxy:!0}])},[o("vue-headful",{attrs:{title:"YukkuriCraft - Gensokyo",description:"Look at all the different places in our Gensokyo.",image:a(37),url:"https://yukkuricraft.net/gensokyo/"}}),e._v(" "),e._v(" "),e._v(" "),e._l(e.locations,(function(e,n){return o("location",{key:n,attrs:{depth:0,"location-id":n,location:e}})}))],2)};o._withStripped=!0;var t=a(396),i=a.n(t),r=a(375),s=a(376),m=a(32),l=a(29),u=a(402),c=a(472);function y(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return _(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,o=new Array(n);a<n;a++)o[a]=e[a];return o}var d={components:{SidebarPage:s.a,SidebarEntries:r.default,Location:c.a},data:function(){return{allLocations:[]}},computed:{images:function(){return Object(m.a)("greenhouse")},locations:function(){return JSON.parse(JSON.stringify(i.a.apply(void 0,[{}].concat(y(this.allLocations)))))}},created:function(){var e=this,n=u.locations.map((function(e,n){var o=Object(l.a)(e,".yaml");return a(625)("./".concat(o,".yaml")).then((function(e){return{commands:e,idx:n}}))}));Promise.all(n).then((function(n){n.forEach((function(n){var a=n.commands,o=n.idx;e.$set(e.allLocations,o,a.default)}))}))}},g=a(6),f=Object(g.a)(d,o,[],!1,null,null,null);f.options.__file="src/pages/gensokyo/LocationsPage.vue";n.default=f.exports}}]);