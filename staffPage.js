(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{372:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),r=a(18),o=a(5),i=a(8),s=a(3),u=a(15),c=a(9),l=a(4);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',f={src:{type:String},srcset:{type:[String,Array]},sizes:{type:[String,Array]},alt:{type:String},width:{type:[Number,String]},height:{type:[Number,String]},block:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fluidGrow:{type:Boolean,default:!1},rounded:{type:[Boolean,String],default:!1},thumbnail:{type:Boolean,default:!1},left:{type:Boolean,default:!1},right:{type:Boolean,default:!1},center:{type:Boolean,default:!1},blank:{type:Boolean,default:!1},blankColor:{type:String,default:function(){return Object(i.c)("BImg","blankColor")}}},h=n.a.extend({name:"BImg",functional:!0,props:f,render:function(e,t){var a,n=t.props,i=t.data,f=n.src,h=Object(u.b)(n.width)||null,p=Object(u.b)(n.height)||null,y=null,b=n.block,v=Object(o.b)(n.srcset).filter(r.a).join(","),g=Object(o.b)(n.sizes).filter(r.a).join(",");return n.blank&&(!p&&h?p=h:!h&&p&&(h=p),h||p||(h=1,p=1),f=function(e,t,a){var n=encodeURIComponent(m.replace("%{w}",Object(c.e)(e)).replace("%{h}",Object(c.e)(t)).replace("%{f}",a));return"data:image/svg+xml;charset=UTF-8,".concat(n)}(h,p,n.blankColor||"transparent"),v=null,g=null),n.left?y="float-left":n.right?y="float-right":n.center&&(y="mx-auto",b=!0),e("img",Object(l.a)(i,{attrs:{src:f,alt:n.alt||null,width:h?Object(c.e)(h):null,height:p?Object(c.e)(p):null,srcset:v||null,sizes:g||null},class:(a={"img-thumbnail":n.thumbnail,"img-fluid":n.fluid||n.fluidGrow,"w-100":n.fluidGrow,rounded:""===n.rounded||!0===n.rounded},d(a,"rounded-".concat(n.rounded),Object(s.g)(n.rounded)&&""!==n.rounded),d(a,y,y),d(a,"d-block",b),a)}))}})},455:function(e){e.exports=JSON.parse('[{"id":"owner","displayName":"Owner","members":[{"name":"Remi","mcAccounts":[{"name":"Remi_Scarlet","uuid":"7e55e238-6225-4b32-9a49-5ad7676ba121"},{"name":"DivineAquaSama","uuid":"2100d93b-87e4-46f0-9479-affde3e5b02f"},{"name":"7h3d4rkw0lf","uuid":"9f3ee4af-34de-4943-9a84-45d713778b4c"},{"name":"Kanzaki_Ranran","uuid":"0e359afb-770e-4f6f-9e64-ab4633f8b91c"}],"discordAccount":"71481644896235520","avatar":"remi_avatar.png","description":"Hi, Remi here. I\'ve been around the Touhou Minecraft communities for about a decade now and helped found Yukkuricraft. These days, I mostly work on the tech side of things along with the help of a team of amazing staff. I\'m not as responsive on Discord as some others, but feel free to shoot me a message if you ever have questions! (Remi#5619)"}]},{"id":"admin","displayName":"Admins","members":[{"name":"Cyros","mcAccounts":[{"name":"Cyros_Lugoth","uuid":"e48a9755-b091-4b2c-a3ae-98da341924f6"},{"name":"Komeiji_Koishi","uuid":"675b6e35-0147-4cf9-9709-daf6fa8ac972"},{"name":"Seija_Kijin","uuid":"47515849-e82d-4412-b25e-b4d76b4b5443"}],"discordAccount":"243006975493931008","avatar":"cyros_avatar.png","description":"Cyros here. I do a little bit of everything to help the community. Whether it\'s helping users with some issues, working on the Gensokyo project, dealing with problematic people, or just being a chill guy to chat with. I\'m mostly on our Minecraft server, but feel free to DM me on Discord anytime. I will more than likely respond."},{"name":"Teshno","mcAccounts":[{"name":"Teshno","uuid":"225895ef-fdaf-4403-ba6c-d4fe6fd6bdbc"}],"discordAccount":"206917136373907456","avatar":"teshno_avatar.png","description":"Heya, I\'m the local nyadmin Teshno. For the most part, I lurk around and try to remain playful and friendly, but I won\'t hesitate to deal with troublemakers, so please remain on your best behavior. I strive to keep our community moving forward, so I do what I can to oversee the server and its staff. If you need to ask me anything, I\'m open for DM\'s. Otherwise, I hope you enjoy your stay~!"}]},{"id":"sysadmin","displayName":"Sysadmins","members":[{"name":"Katrix","mcAccounts":[{"name":"Kogasa_Tatara","uuid":"9c36eef0-c7ed-4eaf-99f7-984ff7c0a794"},{"name":"Clownpiece_","uuid":"6611d165-54bb-4007-8dc5-cd4f6b168745"},{"name":"Komeiji_Satori","uuid":"a8c472e6-6d23-4122-8a49-3d44ac770364"},{"name":"Okina_Matara","uuid":"144337f3-85b8-4547-9721-a30f882d19bd"}],"discordAccount":"109755047914573824","avatar":"katrix_avatar.png","description":"Hi, I\'m Katrix, the one that deal with the daily technical side of YukkuriCraft. Whether it\'s server plugins, the Minecraft version of the server or this website you\'re looking at right now. I\'m the one that for the most part deals with it. I rarely peek out of my lurker den, but just tag me and I\'ll answer your question."}]},{"id":"mediator","displayName":"Mediators","members":[{"name":"Luna","mcAccounts":[{"name":"TRXD","uuid":"06526838-2df6-425a-a418-b12c5bb6f524"},{"name":"Trista_Lundin","uuid":"94ec4d00-abbf-40de-9258-66b027735131"}],"discordAccount":"97035222385700864","avatar":"luna_avatar.png","description":"Hello, I am Luna. I\'m in charge of the mediator team in Yukkuricraft. I love flowers, cuddles, things that shine in the night sky, and just having fun. You\'ll see me swing by the server to check up on what may be going down, build something in creative or for Gensokyo, or simply hang out. Feel free to message me if you need any help on the server or if you just want to chat."},{"name":"PhantomNerifes","mcAccounts":[{"name":"PhantomNerifes","uuid":"458c0c72-fdec-4f95-859e-e3e475efb226"}],"discordAccount":"147985568280608768","avatar":"phantom_avatar.png","description":"I\'m phantom, one of the mediators. I play mostly co-op games and outdoor activities. I\'m not the easiest person to approach but I\'m not inherently mean to everyone, just wary of people/things I\'m not familiar with. If you are confused feel free to ask questions but please be direct, it makes answering questions easier and quicker."},{"name":"Alorai","mcAccounts":[{"name":"Aloraichium_Z","uuid":"051a4113-9e57-4c9d-a7b7-084d63e15996"}],"discordAccount":"164176051294044161","avatar":"alorai_avatar.png","description":"Zip zap. Hello! Name\'s Aloraichium_Z, but folks here generally call me Alorai. I do a lot of illager raids, mining, and just mainly slacking around when nothing happens much. Oh, I wield a squeaky banhammer! For the most part, just have a good time,  chat with me if you wish, and do not do anything too stupid!"},{"name":"Tony","mcAccounts":[{"name":"TexasTony","uuid":"773534dd-1c03-4408-9ae7-b40460034f18"}],"discordAccount":"282393922171437067","avatar":"tony_avatar.png","description":"Hey, TexasTony here. I\'m one of the Mediators on the server and deal with moderating and helping the community. I enjoy building and occasionally help out with official server builds, such as Paintball and Gensokyo. I\'m also the only Mediator to be situated near SEA, so if you\'re a player from that region, you\'ll most likely be encountering me quite a lot. If there\'s any questions or issues, feel free to notify me, I\'ll be happy to help. Enjoy your stay and remember to take it easy!\\nP.S. As contrary to popular belief, no, I am not from Texas."}]},{"id":"builder","displayName":"Builders","members":[{"name":"KokoNuttz","mcAccounts":[{"name":"KokoNuttz","uuid":"e18aa899-1c62-41ad-acc4-2ef50e46114a"}],"discordAccount":"201939654239322113","avatar":"koko_avatar.png","description":"Hi I\'m Koko. I\'m the Lead Builder on Yukkuricraft. I basically make sure the temp builders and the builders are doing their jobs. Along with that, I would say I\'m one of the driving forces behind Gensokyo 3 (still a W.I.P). If you ever want to work on Gensokyo don\'t feel afraid to step up. It doesn\'t matter if you\'re good or not good at building there\'s a place for everyone in the project here. Anyways, if you\'re ever interested in working on Gensokyo or becoming a Temp Builder just ask me or one of the builders! \\\\o/"},{"name":"qscgukp","mcAccounts":[{"name":"qscgukp","uuid":"04fdd713-7153-40a3-a6a5-f7d69be4f63b"}],"discordAccount":"217449039447195649","avatar":"qsc_avatar.png","description":"Hello I am qscgukp or qsc, iku, quasi etc.  I am a builder here on Yukuricraft. I am willing to help anyone out who needs it so if I’m online and you need anything let me know."},{"name":"Redleaf64","mcAccounts":[{"name":"Redleaf64","uuid":"a06791c1-5ccd-4894-9307-71818e119756"}],"discordAccount":"193195158898999316","avatar":"redleaf_avatar.png","description":"I\'m Redleaf, an old builder of the server. I\'m a builder for Gensokyo and other things, manager of the paintball minigame, and weird artist person. When on the server I\'m probably working on things, in survival, or just hanging around. I\'m usually around on discord too so if you have questions regarding Genso or anything else feel free to ask."},{"name":"Birb","mcAccounts":[{"name":"wanderingAviator","uuid":"daded0ae-3e92-4c0d-868f-35187fff5c4e"}],"discordAccount":"206892131590078464","avatar":"birb_avatar.png","description":"Hi! I\'m Birb, a builder on YukkuriCraft! I like Warframe, music things, and shenanigans with people \\\\o<o/ if you want to hang out on the server, or just chat, don\'t be afraid to say hey!"},{"name":"Purp","mcAccounts":[{"name":"purpleFinatic","uuid":"0093a48d-b26a-4e01-b090-f44ada97573e"}],"discordAccount":"206905958838960128","avatar":"purp_avatar.png","description":"Hey yall! I\'m Purp, another builder on YukkuriCraft! I\'m Birb\'s twin, so if you see one of us online, the other probably won\'t be very far away. I like vibing with people, Warframe, drawing, and a wide variety of other things! Feel free to come hang out if you want!"}]},{"id":"misc","displayName":"Misc","members":[{"name":"S121","mcAccounts":[{"name":"S_121","uuid":"10e9a380-6524-44b4-88b1-ee25514b5cf9"}],"discordAccount":"265758981094506497","avatar":"s121_avatar.png","description":"Hi there!\\nI\'m S121, but most people call me S1.  I am the Roleplay Moderator of the YC community, which means I usually organize the RP threads and resolve issues when they arise. I generally can be found playing Warframe, Minecraft, Halo, or whatever else catches my fancy. Tend to spend most of my time on Discord and am pretty easy to get along with. If you ever have a question, just give me a holler."}]}]')},636:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("normal-page",{attrs:{"parallax-images":e.images},scopedSlots:e._u([{key:"parallax",fn:function(){return[n("h1",[e._v("Staff")])]},proxy:!0}])},[n("vue-headful",{attrs:{title:"YukkuriCraft - Staff",description:"The staff of YukkuriCraft.",image:a(33),url:"https://yukkuricraft.net/staff/"}}),e._v(" "),e._v(" "),n("h2",[e._v("Staff members")]),e._v("\n\tGet to know our staff members a bit more.\n\n\t"),e._l(e.staff,(function(t){return[n("h3",{staticClass:"mt-5",attrs:{id:t.id}},[e._v(e._s(t.displayName))]),e._v(" "),n("ul",{staticClass:"list-unstyled"},e._l(t.members,(function(a){return n("b-media",{key:t.id+a.name,staticClass:"mt-5",attrs:{tag:"li"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-avatar",{attrs:{variant:"primary",size:"96",text:a.name.substring(0,1)}},[e.staffAvatars[t.id+"-"+a.name]&&e.staffAvatars[t.id+"-"+a.name].loaded?n("img",{staticClass:"b-avatar-img",attrs:{loading:"lazy",src:e.staffAvatars[t.id+"-"+a.name].avatar,alt:a.name}}):n("span",{staticClass:"b-avatar-text",staticStyle:{"font-size":"40px"}},[e._v("\n\t\t\t\t\t\t\t"+e._s(a.name.substring(0,1))+"\n\t\t\t\t\t\t")])])]},proxy:!0}],null,!0)},[e._v(" "),n("h4",[e._v(e._s(a.name))]),e._v(" "),n("p",[e._v(e._s(a.description))]),e._v(" "),n("h5",[e._v("Minecraft accounts")]),e._v(" "),n("ul",{staticClass:"list-unstyled"},e._l(a.mcAccounts,(function(t){return n("li",[n("img",{attrs:{loading:"lazy",src:"https://mc-heads.net/avatar/"+t.uuid+"/32",alt:t.name}}),e._v("\n\t\t\t\t\t\t"+e._s(e.mcNames[t.uuid])+"\n\t\t\t\t\t")])})),0)])})),1)]})),e._v(" "),e.sakores?[n("h3",{staticClass:"mt-5",attrs:{id:"sakores"}},[e._v("Sakores")]),e._v(" "),n("b-media",{staticClass:"mt-5",scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-avatar",{attrs:{variant:"primary",size:"96",text:"S"}})]},proxy:!0}],null,!1,2205733727)},[e._v(" "),n("h4",[e._v("Sakores")]),e._v(" "),n("p",[e._v("Sakores")]),e._v(" "),n("h5",[e._v("Minecraft accounts")]),e._v(" "),n("ul",{staticClass:"list-unstyled"},[n("li",[n("img",{attrs:{src:"https://mc-heads.net/avatar/5c395d66-8b15-49c1-957a-3b0b41f9eeba/32",alt:"Sakores"}}),e._v("\n\t\t\t\t\tSakores\n\t\t\t\t")])])])]:e._e()],2)};n._withStripped=!0;var r=a(361),o=a(359),i=a(372),s=a(13),u=a(29),c=a(36),l=a(24),d=a(455);function m(e,t,a,n,r,o,i){try{var s=e[o](i),u=s.value}catch(e){return void a(e)}s.done?t(u):Promise.resolve(u).then(n,r)}function f(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var p={components:{NormalPage:s.a,BMedia:r.a,BAvatar:o.a,BImg:i.a},data:function(){var e,t={},a=f(d);try{for(a.s();!(e=a.n()).done;){var n,r=f(e.value.members);try{for(r.s();!(n=r.n()).done;){var o,i=f(n.value.mcAccounts);try{for(i.s();!(o=i.n()).done;){var s=o.value;t[s.uuid]=s.name}}catch(e){i.e(e)}finally{i.f()}}}catch(e){r.e(e)}finally{r.f()}}}catch(e){a.e(e)}finally{a.f()}return{staffAvatars:{},sakores:!1,sakoresIdx:0,mcNames:t}},created:function(){this.loadAvatars(),document.addEventListener("keydown",this.processSakores)},destroyed:function(){document.removeEventListener("keydown",this.processSakores)},watch:{mcNames:{immediate:!0,handler:function(){c.a||this.loadRealNames()}}},methods:{processSakores:function(e){e.isComposing||229===e.keyCode||this.sakores||("sakores".charAt(this.sakoresIdx)===e.key?this.sakoresIdx++:this.sakoresIdx=0,this.sakores="sakores".length===this.sakoresIdx)},loadAvatars:function(){var e,t=this,n=f(d);try{for(n.s();!(e=n.n()).done;){var r,o=e.value,i=f(o.members);try{var s=function(){var e=r.value,n=o.id+"-"+e.name;if(t.$set(t.staffAvatars,n,{loaded:!1}),!e.avatar)return"continue";var i=Object(l.a)(e.avatar,".png"),s=Modernizr.webp?".webp":".png";a(70)("./"+i+s).then((function(e){t.$set(t.staffAvatars,n,{loaded:!0,avatar:e.default})}))};for(i.s();!(r=i.n()).done;)s()}catch(e){i.e(e)}finally{i.f()}}}catch(e){n.e(e)}finally{n.f()}},mcUsername:function(e,t){return(a=regeneratorRuntime.mark((function a(){var n,r,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n="Failed to get name for uuid ".concat(e,", using fallback ").concat(t," instead"),a.prev=1,a.next=4,fetch("https://api.minetools.eu/uuid/"+e.replaceAll("-",""));case 4:if(200===(r=a.sent).status){a.next=10;break}return console.warn(n),a.abrupt("return",t);case 10:return a.next=12,r.json();case 12:if(void 0===(o=a.sent).error){a.next=18;break}return console.warn(n+". Error: "+o.error),a.abrupt("return",t);case 18:return a.abrupt("return",o.name);case 19:a.next=25;break;case 21:return a.prev=21,a.t0=a.catch(1),console.warn(n+". Error: "+a.t0),a.abrupt("return",t);case 25:case"end":return a.stop()}}),a,null,[[1,21]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function i(e){m(o,n,r,i,s,"next",e)}function s(e){m(o,n,r,i,s,"throw",e)}i(void 0)}))})();var a},loadRealNames:function(){for(var e=this,t=function(){var t=n[a];e.mcUsername(t,e.mcNames[t]).then((function(a){e.$set(e.mcNames,t,a)}))},a=0,n=Object.keys(this.mcNames);a<n.length;a++)t()}},computed:{images:function(){return Object(u.a)("people")},staff:function(){return d}}},y=a(7),b=Object(y.a)(p,n,[],!1,null,null,null);b.options.__file="src/pages/StaffPage.vue";t.default=b.exports}}]);