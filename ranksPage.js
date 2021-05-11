(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{618:function(e){e.exports=JSON.parse('[{"id":"public_ranks","displayName":"Public ranks","description":"These are ranks most commonly seen on members of the community.","ranks":[{"name":"Infant","description":"Just joined the server, has not completed the quiz. This is a new person who has not yet mentally involved themselves with the server or the community."},{"name":"Child","description":"Someone who\'s completed the quiz. This is the rank that people will go through during their first few days on the server. Children can set up to 3 homes."},{"name":"Adult","description":"Someone who has at least a total of 4 days (96 hours) worth of activity on the server. This person has devoted a lot of their time on the server and is now considered an active member of the community. Adults and up are allowed to use items like fire and lava. Adults can set up to 5 homes."},{"name":"Senior","description":"Someone who has at least a total of **10** days (240 hours) worth of activity. Can set up to 10 homes at once."},{"name":"Elder","description":"This rank represents dedication and big positive involvement with the community and staff. Elders are specifically chosen and voted on by the staff. If you are an Elder, that means you\'re a positive force within the community, and have been noticed for your actions. You\'re one of the community leaders. Inactive and troublesome elders can be demoted. This is mostly just a pretty title! Elders can set up to 15 homes."}]},{"id":"staff_ranks_and_titles","displayName":"Staff ranks","description":"The staff are the ones that make all the decisions on the server, and name new staff and elders.","childGroups":[{"id":"staff_titles","displayName":"Titles","description":"There are also special \\"Titles\\" within the staff ranks. \\"Titles\\" are just that. Titles. They\'re a way to differentiate slightly different purposes within the same overall rank.","ranks":[{"name":"The [Lead] Title","italics":true,"description":"Staff with this title are designated as the \\"heads\\" of their respective rank. They\'re the gold standard for their teams and dedicate the most time. While equal to other staff, their efforts definitely do not go without recognition."},{"name":"The [Owner] Title","italics":true,"description":"These people have access to the serverbox and have complete control over the server\'s existence."}]},{"id":"staff_ranks","displayName":"Ranks","description":"The following list consists of the main permission-tampering ranks that are most regularly seen. These ranks are also allowed to hack their games so as long as they do not use the hacks for cheating in survival mode.","ranks":[{"name":"Mediator","description":"Someone who has been assigned the privilege of moderating the server community. Their duty is to look after everyone and make sure they\'re on their best behavior. They are capable of building in Gensokyo but are not assigned to."},{"name":"Youkai Builder","description":"Someone who has been assigned the privilege of building in Gensokyo, allowing them to modify and change what they deem necessary. These peeps have some real building talent, and are responsible for many of Gensokyo\'s structures."},{"name":"Sysadmin","description":"These staff are responsible for the technology side of Yukkuricraft. Think server, plugins, discord bots, etc. While sysadmin have access to all commands and are effectively similar to admins, they do not outrank Yukkuri Admins in regards to the community."},{"name":"Yukkuri Admin","description":"Yukkuri Admins are the highest roles on the server, they have access to every command and have the final say in decisions. These admins are entrusted to handle or oversee almost any major issue within the community overall and see it resolved amicably."}]}]},{"id":"special_ranks","displayName":"Special ranks","description":"The following ranks are special ranks that you don\'t see as often, but serve a purpose for specific circumstances.","ranks":[{"name":"Probation","description":"People who have been previously permanently banned, but are being given another chance to redeem their self. If this person screws up even once, they will most likely go back to being permanently banned and will no longer receive any chances for redemption in the future. It takes a lot to get this rank, you\'d have to basically try to get it in order to get it."},{"name":"Temp. Youkai","description":"Someone who has been temporarily granted permission to build in Gensokyo in order to give focus to specific projects without actually being a full-fledged builder."},{"name":"Retired","description":"Someone who used to be on the staff team but is no longer."},{"name":"Legendary","description":"Someone who has had a large and positive impact on the server and/or the community, but no longer regularly participates, sometimes having left entirely."}]}]')},820:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("normal-page",{attrs:{"parallax-images":e.images},scopedSlots:e._u([{key:"parallax",fn:function(){return[a("h1",[e._v("Ranks")])]},proxy:!0}])},[a("vue-headful",{attrs:{title:"YukkuriCraft - Ranks",description:"The different ranks found on YukkuriCraft.",image:n(42),url:"https://yukkuricraft.net/ranks/"}}),e._v(" "),e._v(" "),a("h2",{attrs:{id:"ranks"}},[e._v("Ranks")]),e._v(" "),a("p",[e._v("\n    Yukkuricraft has many different ranks. Here is a brief description of them, and what sets them apart from each\n    other.\n  ")]),e._v(" "),e._l(e.rankGroups,(function(e){return a("rank-group",{key:e.id,attrs:{group:e,"heading-level":3}})})),e._v(" "),a("p",[a("strong",[e._v("Disclaimer:")]),e._v(" Mediators "),a("em",[e._v("do not")]),e._v(" have authority over builders, they are completely even\n    ranks that do not overpower each other unless it's in the category their rank is designed for. If the subject is\n    about building decisions and choices, builders have first say. If it's about banning/kicking/rollback/lookups,\n    mediators have first say.\n  ")])],2)};a._withStripped=!0;var o=n(18),r=n(28),s=n(618),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("heading",{attrs:{id:e.group.id,level:e.headingLevel}},[n("a",{attrs:{href:"#"+e.group.id}},[n("font-awesome-icon",{staticStyle:{"font-size":"0.5em"},attrs:{icon:["fas","link"]}})],1),e._v("\n    "+e._s(e.group.displayName)+"\n  ")]),e._v(" "),e.group.description?n("markdown-later",{attrs:{content:e.group.description}}):e._e(),e._v(" "),e.group.ranks?n("b-row",{attrs:{tag:"dl"}},[e._l(e.group.ranks,(function(t){return[n("b-col",{key:t.name+"N",attrs:{sm:"3",md:"2",tag:"dt"}},[t.italics?n("i",[t.bold?n("b",[e._v(e._s(t.name)+":")]):[e._v(e._s(t.name)+":")]],2):t.bold?n("b",[e._v(e._s(t.name)+":")]):[e._v(e._s(t.name)+":")]],2),e._v(" "),n("b-col",{key:t.name+"D",attrs:{sm:"9",md:"10",tag:"dd"}},[n("markdown-later",{attrs:{content:t.description,"no-paragraph":!0}})],1)]}))],2):e._e(),e._v(" "),n("br"),e._v(" "),e._l(e.group.childGroups,(function(t){return n("rank-group",{key:t.id,attrs:{group:t,"heading-level":e.headingLevel+1}})}))],2)};i._withStripped=!0;var l=n(467),h=n(447),d=n(90),c=function(){var e=this.$createElement;return(this._self._c||e)("markdown",{attrs:{content:this.content,"no-paragraph":this.noParagraph}})};c._withStripped=!0;var u=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.noParagraph?[this._v(this._s(this.content))]:t("p",[this._v(this._s(this.content))])],2)};u._withStripped=!0;var p={props:{content:{type:String,required:!0},noParagraph:Boolean}},m=n(6),f=Object(m.a)(p,u,[],!1,null,null,null);f.options.__file="src/components/TextShowComponent.vue";var v=f.exports,g={components:{markdown:function(){return{component:n.e(19).then(n.bind(null,821)),loading:v,error:v,delay:0}}},props:{content:{type:String,required:!0},noParagraph:Boolean}},k=Object(m.a)(g,c,[],!1,null,null,null);k.options.__file="src/components/MarkdownLater.vue";var y=k.exports,b={name:"RankGroup",components:{Heading:d.a,MarkdownLater:y,BRow:l.a,BCol:h.a},props:{headingLevel:{type:Number,required:!0},group:{type:Object,required:!0}}},_=Object(m.a)(b,i,[],!1,null,null,null);_.options.__file="src/pages/ranks/RankGroup.vue";var w={components:{RankGroup:_.exports,NormalPage:o.a},computed:{images:function(){return Object(r.a)("people",Promise.resolve().then(n.bind(null,518)),Promise.resolve().then(n.bind(null,519)))},rankGroups:function(){return s}}},T=Object(m.a)(w,a,[],!1,null,null,null);T.options.__file="src/pages/ranks/RanksPage.vue";t.default=T.exports}}]);