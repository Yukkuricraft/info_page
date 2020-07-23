(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(e,t,n){"use strict";var a=function(){var e=this.$createElement;return(this._self._c||e)("markdown",{attrs:{content:this.content,"no-paragraph":this.noParagraph}})};a._withStripped=!0;var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("font-awesome-icon",{attrs:{icon:["fas","spinner"],spin:"",size:"3x"}}),this._v(" Loading\n")],1)};o._withStripped=!0;var r=n(7),i=Object(r.a)({},o,[],!1,null,null,null);i.options.__file="src/components/TextLoadingComponent.vue";var s=i.exports,l=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","times"]}}),this._v(" Error loading content\n")],1)};l._withStripped=!0;var c=Object(r.a)({},l,[],!1,null,null,null);c.options.__file="src/components/TextErrorComponent.vue";var u=c.exports,d={components:{markdown:function(){return{component:n.e(12).then(n.bind(null,634)),loading:s,error:u}}},props:{content:{required:!0},noParagraph:Boolean}},h=Object(r.a)(d,a,[],!1,null,null,null);h.options.__file="src/components/MarkdownLazy.vue";t.a=h.exports},367:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-unstyled"},e._l(e.subgroups,(function(t,a){return n("sidebar-entry",{key:a,attrs:{subgroup:t,subgroupId:a,"href-prefix":e.hrefPrefix,"subgroup-children-name":e.subgroupChildrenName}})})),1)};a._withStripped=!0;var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e.subgroup[e.subgroupChildrenName]?[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"dropdown-toggle",attrs:{href:"#"+e.hrefPrefix+"Sidebar-"+e.subgroupId},on:{click:function(e){e.preventDefault()}}},[e._v(e._s(e.subgroup.menuName))]),e._v(" "),n("b-collapse",{attrs:{id:e.hrefPrefix+"Sidebar-"+e.subgroupId}},[n("sidebar-entries",{attrs:{subgroups:e.subgroup[e.subgroupChildrenName],"href-prefix":e.hrefPrefix,"subgroup-children-name":e.subgroupChildrenName}})],1)]:[n("a",{attrs:{href:"#"+e.hrefPrefix+"-"+e.subgroupId}},[e._v(e._s(e.subgroup.menuName))])]],2)};o._withStripped=!0;var r=n(362),i=n(28),s={components:{BCollapse:r.a,SidebarEntries:function(){return Promise.resolve().then(n.bind(null,367))}},directives:{"b-toggle":i.e},props:{hrefPrefix:{type:String,required:!0},subgroup:{type:Object,required:!0},subgroupId:{type:String,required:!0},subgroupChildrenName:{type:String,required:!0}}},l=n(7),c=Object(l.a)(s,o,[],!1,null,null,null);c.options.__file="src/components/SidebarEntry.vue";var u={components:{SidebarEntry:c.exports},props:{hrefPrefix:{type:String,required:!0},subgroups:{type:Object,required:!0},subgroupChildrenName:{type:String,required:!0}}},d=Object(l.a)(u,a,[],!1,null,null,null);d.options.__file="src/components/SidebarEntries.vue";t.default=d.exports},368:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-wrapper"},[n("nav",{staticClass:"sidebar",class:{active:e.sidebarActive}},[e._t("sidebar")],2),e._v(" "),n("div",{staticClass:"sidebar-content",class:{active:e.sidebarActive}},[n("info-header",{attrs:{"in-container":!1},scopedSlots:e._u([{key:"top",fn:function(){return[n("b-button",{attrs:{"aria-controls":"sidebar-nav",type:"button",variant:"none","aria-expanded":"false","aria-label":"Toggle sidebar"},on:{click:function(t){e.sidebarActive=!e.sidebarActive}}},[n("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","align-left"]}})],1)]},proxy:!0}])}),e._v(" "),n("parallax-image",{attrs:{height:e.parallaxHeight,images:e.parallaxImages}},[e._t("parallax")],2),e._v(" "),n("b-container",{staticClass:"container-pad"},[e._t("default"),e._v(" "),n("info-footer")],2)],1)])};a._withStripped=!0;var o=n(350),r=n(38),i=n(71),s=n(73),l=n(72),c={components:{InfoHeader:i.a,InfoFooter:s.a,ParallaxImage:l.a,BContainer:o.a,BButton:r.a},props:{parallaxImages:[Object,Promise],parallaxHeight:Number},data:function(){return{sidebarActive:!1}}},u=n(7),d=Object(u.a)(c,a,[],!1,null,null,null);d.options.__file="src/layout/SidebarPage.vue";t.a=d.exports},373:function(e){e.exports=JSON.parse('{"commands":["general.yaml","tp.yaml","chat.yaml","lwc.yaml","hsh.yaml"]}')},456:function(e,t,n){"use strict";var a=n(457),o=n(458);function r(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),r=t.length>0?t.join("="):void 0;r=void 0===r?null:decodeURIComponent(r),n(decodeURIComponent(o),r,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[r(t,e),"[",a,"]"].join(""):[r(t,e),"[",r(a,e),"]=",r(n,e)].join("")};case"bracket":return function(t,n){return null===n?r(t,e):[r(t,e),"[]=",r(n,e)].join("")};default:return function(t,n){return null===n?r(t,e):[r(t,e),"=",r(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var o=e[a];if(void 0===o)return"";if(null===o)return r(a,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(a,e,i.length))})),i.join("&")}return r(a,t)+"="+r(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},457:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},458:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,l=i(e),c=1;c<arguments.length;c++){for(var u in n=Object(arguments[c]))o.call(n,u)&&(l[u]=n[u]);if(a){s=a(n);for(var d=0;d<s.length;d++)r.call(n,s[d])&&(l[s[d]]=n[s[d]])}}return l}},459:function(e,t,n){var a={"./chat.yaml":460,"./commandList.yaml":373,"./general.yaml":461,"./hsh.yaml":462,"./lwc.yaml":463,"./tp.yaml":464};function o(e){return r(e).then((function(e){return n.t(e,3)}))}function r(e){return Promise.resolve().then((function(){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}))}o.keys=function(){return Object.keys(a)},o.resolve=r,o.id=459,e.exports=o},460:function(e){e.exports=JSON.parse('{"chat":{"displayName":"Chat commands","menuName":"Chat","commands":[{"aliases":["msg","message","w","pm","t","tell","whisper"],"arguments":"<target> <message...>","description":"Private message a user.","tags":["chat","pm","reply","msg"]},{"aliases":["r","reply"],"arguments":"<message...>","description":"Shortcut command to reply to private messages.","tags":["chat","pm","msg"]},{"aliases":"me","arguments":"<message...>","description":"Send an action message.","tags":["chat","action","fun"]}]}}')},461:function(e){e.exports=JSON.parse('{"general":{"displayName":"General/Misc commands","menuName":"General/Misc","commands":[{"aliases":"list","description":"See who is online","tags":["players","online"]},{"aliases":"ontime","description":"Check your platime stats","tags":["stats"]},{"aliases":"ping","description":"Check your ping time in ms!","tags":["ping","lag"]},{"aliases":"hat","arguments":"<block>","description":"Hat yourself with the block you gave! Only works in creative worlds!","tags":["fun"]}]}}')},462:function(e){e.exports=JSON.parse('{"homesweethome":{"displayName":"HomeSweetHome commands","menuName":"HomeSweetHome","description":"So finally we have HomeSweetHome 2.0 (technically 2.2) on the server. So, what\'s special about this version of HSH, how do you use it, what cool features does it have, and so on. First off, for the most part, if you\'re used to the old HSH, then not much (if any) has changed in how you use the old features. If you only care about that, then everything will continue to work like it always has. For those that want to see what\'s new, and for those that don\'t know how to use HSH, read on.","subgroups":{"hsh_basic":{"displayName":"Basic usage","menuName":"HSH basics","description":"First off, let\'s go over the basics, like how to set a home, and then teleport to that home, delete it, and see the list of all, homes, in addition to going over the interface.","commands":[{"aliases":"home set","arguments":"<homeName>","description":"Use this command to set some home at your current location with `homeName` as it\'s name. Note that `homeName` can have spaces in it. For this reason, the home name for commands is ALWAYS the last argument. If you already have a home named `homeName`, then it will move that home to your new location.","tags":["home","sethome"]},{"aliases":"home","arguments":"[homeName]","description":"Use this command to actually go to your home. You can autocomplete by using tab. If you do not specify a home, it will bring up the home interface (`/home list`).","tags":["home"]},{"aliases":"home","arguments":"<homeName> delete","description":"Use this command to delete a home. Note that this is not reversible.","tags":["home","delete","deletehome","removehome"]},{"aliases":["home list","homes","home"],"description":"Use this command to view your current homes. Here is however one of the major things that separate HSH 2.x from both other home plugins and HSH 1.x. While you would expect to just see your homes when you use that, and that is true, but you also get a lot more information and buttons. Buttons in HSH are things that you can click on and that suggests commands to you.\\n\\n![HSH interface](/assets/images/commands/hsh_interface.jpg)\\n\\nThe first line here tells you how many homes you can have in total, you can also get this information from the `/home limit` command. On the next line is a button create a new home. You just have to replace `<homeName>` with the desired name.\\n\\nNext are the home list itself, in addition to buttons for teleporting to the home, moving it, inviting someone to it (more on invites later), bringing up residents interface (more on residents later), and finally a button to delete the home.\\n\\nIf there is something you don\'t quite remember how to do, you can most likely use the home interface to do it.","tags":["home","homes","listhomes"]}]},"hsh_invites":{"displayName":"Invites","menuName":"HSH invites","description":"HSH also features invites and requests. Invites is something that the home owner can send to other players, so that they get a one time ticket to that home for a limited amount of time. Requests are the opposite. They allow a normal player to ask to be allowed to go to another player\'s home. Note that tab complete does not work for these commands (that would allow you to see another persons homes, even though they might not want that). Both invites (unless you are a resident, more bellow) and requests can only be used when the home owner is online.","commands":[{"aliases":"home","arguments":"<home> invite <player>","description":"Use this to invite another player to your home. Once they use the invite, they need to get a new one before they can go to the home again.","tags":["home","invite"]},{"aliases":"home goto","arguments":"<user> <home>","description":"This command has two specific meanings, depending on if you have been invited to that home or not.\\n\\nIf you already have been invited to that home, you will teleport to that home, and the invite will be used up.\\n\\nIf you have not been invited to the home before, you instead send a request to the player for that specific home. You then have to wait for the request to be accepted. You can only have one request for each player (Meaning that if you did `/home goto Clownpiece_ HakureiNew`, followed by `/home goto Clownpiece_ HumanNew`, the request for `HakureiNew` would no longer be valid).","tags":["home","invite","goto","request"]},{"aliases":"home accept","arguments":"<player>","description":"If you have received a request from a player, you can use this to accept the request. Once you do they will be teleported to the home.","tags":["home","accept"]}]},"hsh_residents":{"displayName":"Residents","menuName":"HSH residents","description":"Both invites and requests are a one time thing. They can\'t be reused. What if you have a home that has multiple people living in it? Residents solve this problem, they are like a permanent invite to a home that can also be used when the home owner is offline. For the players that are residents of the home, they use the goto command just like as if it was another invite.","commands":[{"aliases":"home residents","description":"Residents also have a seperate interface similar to the home interface. If you do not specify a home name, you get a overview of all of your homes and their residents.","tags":["home","residents"]},{"aliases":"home","arguments":"<home> residents","description":"If you specify a home, you get a list off all the residents in that home, in addition to buttons to manipulate this info.","tags":["home","residents"]},{"aliases":"home","arguments":"<home> residents add <player>","description":"Add a player as a resident to a home","tags":["home","residents","addresident"]},{"aliases":"home","arguments":"<home> residents remove <player>","description":"Remove a player as a resident from a home","tags":["home","residents","removeresident"]}]}}}}')},463:function(e){e.exports=JSON.parse('{"lwc":{"displayName":"LWC/Chest commands","menuName":"LWC/Chest","commands":[{"aliases":"cpublic","description":"Creates a public protection. Anyone can use a Public protection, but no one can protect it.","tags":["lwc","chest","protection"]},{"aliases":"cpassword","description":"Password-protect a block. Each time you login you need to enter the password to access it. (if someone else knows the password, they can access it too.","tags":["lwc","chest","protection"]},{"aliases":"cprivate","description":"Create a private protection. Private means private: you can also allow other users or groups to access the block as well. This is done by adding them after \\"private\\". You can add more than one group and/or user per command. When you prefix a User or Group with an \'@\', this User/Group will be able to modify the block and add other users. They cannot disable the owner from modifying it.","tags":["lwc","chest","protection"]},{"aliases":"cmodify","description":"Modify an existing protection, adding or removing users and/or groups. See /lwc create, the example for private protections. The same syntax is used for this command. There\'s an additional prefix however. Writing a \'-\' infront of a User or Group removes the access from the block.","tags":["lwc","chest","protection"]},{"aliases":"cunlock","description":"Unlock a password-protected block.","tags":["lwc","chest","protection"]},{"aliases":"cinfo","description":"Punch a protection to view information on it.","tags":["lwc","chest","protection"]},{"aliases":"cremove","description":"Removes protection.","tags":["lwc","chest","protection"]},{"aliases":"climits","description":"View the amount of protections you are allowed.","tags":["lwc","chest","protection"]},{"aliases":"lwc mode persist","arguments":"<on|off>","description":"Persistent mode will let you perform your last command on multiple blocks, untill you turn it off.","tags":["lwc","chest","protection"]},{"aliases":"lwc mode droptransfer","arguments":"<select|on|off|status>","description":"Select: Select the chest drops go to. On: Enable droptransfers. Off: Disable droptransfers. Status: Display the status of the droptransfers. ","tags":["lwc","chest","protection"]}]}}')},464:function(e){e.exports=JSON.parse('{"tp":{"displayName":"Teleport commands","menuName":"Teleport","commands":[{"aliases":"call","arguments":"<user>","description":"Request to teleport **to** the specified player. Said player will have to then accept the teleport request for it to complete.","tags":["teleport","tp"]},{"aliases":["bring","tpa"],"arguments":"<user>","description":"Use this after someone has requested a teleport to you to accept and bring them to your position.","tags":["teleport","tp","bring","tpa"]},{"aliases":["return","back"],"description":"Return to the last location before your last teleport.","tags":["teleport","tp","return","back"]}]}}')},631:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("sidebar-page",{attrs:{"parallax-images":e.images},scopedSlots:e._u([{key:"sidebar",fn:function(){return[a("div",{staticClass:"sidebar-header"},[a("h2",[e._v("Commands")])]),e._v(" "),a("sidebar-entries",{staticClass:"sidebar-components",attrs:{"href-prefix":"commands",subgroups:e.commands,"subgroup-children-name":"subgroups"}})]},proxy:!0},{key:"parallax",fn:function(){return[a("h1",[e._v("Commands")]),e._v(" "),a("p",[e._v("Find commonly used commands here")])]},proxy:!0}])},[a("vue-headful",{attrs:{title:"YukkuriCraft - Commands",description:"Search through the commands found on YukkuriCraft.",image:n(33),url:"https://yukkuricraft.net/commands/"}}),e._v(" "),e._v(" "),e._v(" "),a("h2",{attrs:{id:"commands"}},[e._v("Command List")]),e._v(" "),a("div",{attrs:{id:"commandsSection"}},[a("p",{staticStyle:{"font-size":"18px",color:"#aaafad"}},[e._v('\n\t\t\tArguments in "[" and "]" are optional. Arguments in "<" and ">" are required for the\n\t\t\tcommand\n\t\t\tto\n\t\t\twork!\n\t\t')]),e._v(" "),a("p",{staticStyle:{"font-size":"12px",color:"#aaafad"}},[e._v("\n\t\t\tThis is nowhere near a complete list of commands, just some of the basics!\n\t\t")]),e._v(" "),a("b-form-group",[a("label",{attrs:{for:"commandsSearch"}},[e._v("Search:")]),e._v(" "),a("b-form-input",{attrs:{id:"commandsSearch",type:"text",placeholder:"Search commands..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),e._v(" "),a("div",{attrs:{id:"commandGroups"}},e._l(e.commands,(function(e,t){return a("command-group",{key:t,attrs:{depth:0,"command-group-id":t,"command-group":e}})})),1)],1)],1)};a._withStripped=!0;var o=n(31),r=n(5),i=n(8),s=n(1),l=n(12),c=n(3),u=n(15),d=n(2),h=n(9),p=n(69),m=n(23),f=n(11),b=n(325),v=n(0),g=n(4),y={tag:{type:String,default:"div"}},w=v.a.extend({name:"BFormRow",functional:!0,props:y,render:function(e,t){var n=t.props,a=t.data,o=t.children;return e(n.tag,Object(g.a)(a,{staticClass:"form-row"}),o)}});var S={id:{type:String},tag:{type:String,default:"small"},textVariant:{type:String,default:function(){return Object(i.c)("BFormText","textVariant")}},inline:{type:Boolean,default:!1}},O=v.a.extend({name:"BFormText",functional:!0,props:S,render:function(e,t){var n,a,o,r=t.props,i=t.data,s=t.children;return e(r.tag,Object(g.a)(i,{class:(n={"form-text":!r.inline},a="text-".concat(r.textVariant),o=r.textVariant,a in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,n),attrs:{id:r.id}}),s)}}),j={id:{type:String},tag:{type:String,default:"div"},tooltip:{type:Boolean,default:!1},forceShow:{type:Boolean,default:!1},state:{type:Boolean,default:null},ariaLive:{type:String},role:{type:String}},_=v.a.extend({name:"BFormInvalidFeedback",functional:!0,props:j,render:function(e,t){var n=t.props,a=t.data,o=t.children,r=!0===n.forceShow||!1===n.state;return e(n.tag,Object(g.a)(a,{class:{"invalid-feedback":!n.tooltip,"invalid-tooltip":n.tooltip,"d-block":r},attrs:{id:n.id||null,role:n.role||null,"aria-live":n.ariaLive||null,"aria-atomic":n.ariaLive?"true":null}}),o)}}),k={id:{type:String},tag:{type:String,default:"div"},tooltip:{type:Boolean,default:!1},forceShow:{type:Boolean,default:!1},state:{type:Boolean,default:null},ariaLive:{type:String},role:{type:String}},x=v.a.extend({name:"BFormValidFeedback",functional:!0,props:k,render:function(e,t){var n=t.props,a=t.data,o=t.children,r=!0===n.forceShow||!0===n.state;return e(n.tag,Object(g.a)(a,{class:{"valid-feedback":!n.tooltip,"valid-tooltip":n.tooltip,"d-block":r},attrs:{id:n.id||null,role:n.role||null,"aria-live":n.ariaLive||null,"aria-atomic":n.ariaLive?"true":null}}),o)}});function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e,t){var n=t.normalizeSlot("invalid-feedback")||t.invalidFeedback,a=e();return n&&(a=e(_,{props:{id:t.invalidFeedbackId,state:t.computedState,tooltip:t.tooltip,ariaLive:t.feedbackAriaLive,role:t.feedbackAriaLive?"alert":null},attrs:{tabindex:n?"-1":null}},[n])),a},F=function(e,t){var n=t.normalizeSlot("valid-feedback")||t.validFeedback,a=e();return n&&(a=e(x,{props:{id:t.validFeedbackId,state:t.computedState,tooltip:t.tooltip,ariaLive:t.feedbackAriaLive,role:t.feedbackAriaLive?"alert":null},attrs:{tabindex:n?"-1":null}},[n])),a},P=function(e,t){var n=t.normalizeSlot("description")||t.description,a=e();return n&&(a=e(O,{attrs:{id:t.descriptionId,tabindex:n?"-1":null}},[n])),a},$=Object(o.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"".concat(t).concat(Object(h.g)(e))})),V={name:"BFormGroup",mixins:[m.a,p.a,f.a],get props(){return delete this.props,this.props=(e=Object(i.b)(),t=e.reduce((function(e,t){return e[$(t,"labelCols")]={type:[Number,String,Boolean],default:!t&&null},e}),Object(d.c)(null)),n=e.reduce((function(e,t){return e[$(t,"labelAlign")]={type:String},e}),Object(d.c)(null)),I(I(I({label:{type:String},labelFor:{type:String},labelSize:{type:String},labelSrOnly:{type:Boolean,default:!1}},t),n),{},{labelClass:{type:[String,Array,Object]},description:{type:String},invalidFeedback:{type:String},validFeedback:{type:String},tooltip:{type:Boolean,default:!1},feedbackAriaLive:{type:String,default:"assertive"},validated:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}));var e,t,n},computed:{labelColProps:function(){var e=this,t={};return Object(i.b)().forEach((function(n){var a=e[$(n,"labelCols")];if(a=""===a||(a||!1),Object(c.a)(a)||"auto"===a||(a=(a=Object(u.b)(a,0))>0&&a),a){var o=n||(Object(c.a)(a)?"col":"cols");t[o]=a}})),t},labelAlignClasses:function(){var e=this,t=[];return Object(i.b)().forEach((function(n){var a=e[$(n,"labelAlign")]||null;if(a){var o=n?"text-".concat(n,"-").concat(a):"text-".concat(a);t.push(o)}})),t},isHorizontal:function(){return Object(d.k)(this.labelColProps).length>0},labelId:function(){return this.hasNormalizedSlot("label")||this.label?this.safeId("_BV_label_"):null},descriptionId:function(){return this.hasNormalizedSlot("description")||this.description?this.safeId("_BV_description_"):null},hasInvalidFeedback:function(){return!1===this.computedState&&(this.hasNormalizedSlot("invalid-feedback")||this.invalidFeedback)},invalidFeedbackId:function(){return this.hasInvalidFeedback?this.safeId("_BV_feedback_invalid_"):null},hasValidFeedback:function(){return!0===this.computedState&&(this.hasNormalizedSlot("valid-feedback")||this.validFeedback)},validFeedbackId:function(){return this.hasValidFeedback?this.safeId("_BV_feedback_valid_"):null},describedByIds:function(){return[this.descriptionId,this.invalidFeedbackId,this.validFeedbackId].filter(Boolean).join(" ")||null}},watch:{describedByIds:function(e,t){e!==t&&this.setInputDescribedBy(e,t)}},mounted:function(){var e=this;this.$nextTick((function(){e.setInputDescribedBy(e.describedByIds)}))},methods:{legendClick:function(e){if(!this.labelFor){var t=e.target?e.target.tagName:"";if(!/^(input|select|textarea|label|button|a)$/i.test(t)){var n=Object(s.y)("input:not([disabled]),textarea:not([disabled]),select:not([disabled])",this.$refs.content).filter(s.q);n&&1===n.length&&Object(s.d)(n[0])}}},setInputDescribedBy:function(e,t){if(this.labelFor&&l.i){var n=Object(s.x)("#".concat(this.labelFor),this.$refs.content);if(n){var a="aria-describedby",o=(Object(s.h)(n,a)||"").split(/\s+/);e=(e||"").split(/\s+/),t=(t||"").split(/\s+/),o=o.filter((function(e){return!Object(r.a)(t,e)})).concat(e).filter(Boolean),(o=Object(d.k)(o.reduce((function(e,t){return I(I({},e),{},N({},t,!0))}),{})).join(" ").trim())?Object(s.z)(n,a,o):Object(s.t)(n,a)}}}},render:function(e){var t=!this.labelFor,n=this.isHorizontal,a=function(e,t){var n=t.normalizeSlot("label")||t.label,a=t.labelFor,o=!a,r=t.isHorizontal,i=o?"legend":"label";if(n||r){if(t.labelSrOnly){var s=e();return n&&(s=e(i,{class:"sr-only",attrs:{id:t.labelId,for:a||null}},[n])),e(r?b.a:"div",{props:r?t.labelColProps:{}},[s])}return e(r?b.a:i,{on:o?{click:t.legendClick}:{},props:r?I({tag:i},t.labelColProps):{},attrs:{id:t.labelId,for:a||null,tabindex:o?"-1":null},class:[o?"bv-no-focus-ring":"",r||o?"col-form-label":"",!r&&o?"pt-0":"",r||o?"":"d-block",t.labelSize?"col-form-label-".concat(t.labelSize):"",t.labelAlignClasses,t.labelClass]},[n])}return e()}(e,this),o=e(n?b.a:"div",{ref:"content",staticClass:"bv-no-focus-ring",attrs:{tabindex:t?"-1":null,role:t?"group":null}},[this.normalizeSlot("default")||e(),B(e,this),F(e,this),P(e,this)]),r={staticClass:"form-group",class:[this.validated?"was-validated":null,this.stateClass],attrs:{id:this.safeId(),disabled:t?this.disabled:null,role:t?null:"group","aria-invalid":!1===this.computedState?"true":null,"aria-labelledby":t&&n?this.labelId:null,"aria-describedby":t?this.describedByIds:null}};return e(t?"fieldset":n?w:"div",r,n&&t?[e(w,[a,o])]:[a,o])}},H=n(10),A=n(79),E=n(80),q=n(59),D={model:{prop:"value",event:"update"},props:{value:{type:[String,Number],default:""},ariaInvalid:{type:[Boolean,String],default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},formatter:{type:Function},lazyFormatter:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},number:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},debounce:{type:[Number,String],default:0}},data:function(){return{localValue:Object(h.e)(this.value),vModelValue:this.value}},computed:{computedClass:function(){return[{"custom-range":"range"===this.type,"form-control-plaintext":this.plaintext&&"range"!==this.type&&"color"!==this.type,"form-control":!this.plaintext&&"range"!==this.type||"color"===this.type},this.sizeFormClass,this.stateClass]},computedAriaInvalid:function(){return this.ariaInvalid&&"false"!==this.ariaInvalid?!0===this.ariaInvalid?"true":this.ariaInvalid:!1===this.computedState?"true":null},computedDebounce:function(){return Object(q.c)(Object(u.b)(this.debounce,0),0)},hasFormatter:function(){return Object(c.d)(this.formatter)}},watch:{value:function(e){var t=Object(h.e)(e);t!==this.localValue&&e!==this.vModelValue&&(this.clearDebounce(),this.localValue=t,this.vModelValue=e)}},created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on("hook:beforeDestroy",this.clearDebounce);var e=this.value,t=Object(h.e)(e);t!==this.localValue&&e!==this.vModelValue&&(this.localValue=t,this.vModelValue=e)},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e=Object(h.e)(e),!this.hasFormatter||this.lazyFormatter&&!n||(e=this.formatter(e,t)),e},modifyValue:function(e){return this.trim&&(e=e.trim()),this.number&&(e=Object(u.a)(e,e)),e},updateValue:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.lazy;if(!a||n)if((e=this.modifyValue(e))!==this.vModelValue){this.clearDebounce();var o=function(){t.vModelValue=e,t.$emit("update",e)},r=this.computedDebounce;r>0&&!a&&!n?this.$_inputDebounceTimer=setTimeout(o,r):o()}else if(this.hasFormatter){var i=this.$refs.input;i&&e!==i.value&&(i.value=e)}},onInput:function(e){if(!e.target.composing){var t=e.target.value,n=this.formatValue(t,e);!1===n||e.defaultPrevented?e.preventDefault():(this.localValue=n,this.updateValue(n),this.$emit("input",n))}},onChange:function(e){var t=e.target.value,n=this.formatValue(t,e);!1===n||e.defaultPrevented?e.preventDefault():(this.localValue=n,this.updateValue(n,!0),this.$emit("change",n))},onBlur:function(e){var t=e.target.value,n=this.formatValue(t,e,!0);!1!==n&&(this.localValue=Object(h.e)(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit("blur",e)},focus:function(){this.disabled||Object(s.d)(this.$el)},blur:function(){this.disabled||Object(s.c)(this.$el)}}},T=n(77);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],G=v.a.extend({name:"BFormInput",mixins:[T.a,m.a,A.a,E.a,p.a,D,{computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(e){this.$refs.input.selectionStart=e}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(e){this.$refs.input.selectionEnd=e}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(e){this.$refs.input.selectionDirection=e}}},methods:{select:function(){var e;(e=this.$refs.input).select.apply(e,arguments)},setSelectionRange:function(){var e;(e=this.$refs.input).setSelectionRange.apply(e,arguments)},setRangeText:function(){var e;(e=this.$refs.input).setRangeText.apply(e,arguments)}}},{computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var e;return(e=this.$refs.input).setCustomValidity.apply(e,arguments)},checkValidity:function(){var e;return(e=this.$refs.input).checkValidity.apply(e,arguments)},reportValidity:function(){var e;return(e=this.$refs.input).reportValidity.apply(e,arguments)}}}],props:{type:{type:String,default:"text",validator:function(e){return Object(r.a)(M,e)}},noWheel:{type:Boolean,default:!1},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number]},list:{type:String}},computed:{localType:function(){return Object(r.a)(M,this.type)?this.type:"text"},computedAttrs:function(){var e=this.localType,t=this.disabled,n=this.placeholder,a=this.required,o=this.min,r=this.max,i=this.step;return{id:this.safeId(),name:this.name||null,form:this.form||null,type:e,disabled:t,placeholder:n,required:a,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:o,max:r,step:i,list:"password"!==e?this.list:null,"aria-required":a?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return L(L({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(e){this.setWheelStopper(e)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(e){var t=this.$el;Object(H.e)(e,t,"focus",this.onWheelFocus),Object(H.e)(e,t,"blur",this.onWheelBlur),e||Object(H.c)(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(H.d)(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(H.c)(document,"wheel",this.stopWheel)},stopWheel:function(e){e.preventDefault(),Object(s.c)(this.$el)}},render:function(e){return e("input",{ref:"input",class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners})}}),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("heading",{attrs:{id:"commands-"+e.commandGroupId,level:3+e.depth}},[e._v(e._s(e.commandGroup.displayName))]),e._v(" "),n("markdown-lazy",{attrs:{content:e.commandGroup.description}}),e._v(" "),e.commandGroup.subgroups?e._l(e.commandGroup.subgroups,(function(t,a){return n("command-group",{key:a,attrs:{depth:e.depth+1,"command-group-id":a,"command-group":t}})})):n("ul",e._l(e.commandGroup.commands,(function(e){return n("li",[n("command-node",{attrs:{command:e}})],1)})),0)],2)};U._withStripped=!0;var R=n(66),J=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",{staticClass:"command"},[t("strong",[this._v(this._s(this.commandStr))])]),this._v(" "),t("markdown-lazy",{attrs:{content:this.command.description}})],1)};J._withStripped=!0;var Y=n(366),K={components:{MarkdownLazy:Y.a},props:{command:{type:Object,required:!0}},computed:{commandStr:function(){return"/"+(Array.isArray(this.command.aliases)?this.command.aliases.join(" | "):this.command.aliases)+(void 0!==this.command.arguments?" "+this.command.arguments:"")}}},Q=n(7),X=Object(Q.a)(K,J,[],!1,null,null,null);X.options.__file="src/pages/commands/CommandNode.vue";var Z=X.exports,ee={name:"command-group",components:{MarkdownLazy:Y.a,CommandNode:Z,Heading:R.a},props:{commandGroupId:{type:String,required:!0},commandGroup:{type:Object,required:!0},depth:{type:Number,required:!0}}},te=Object(Q.a)(ee,U,[],!1,null,null,null);te.options.__file="src/pages/commands/CommandGroup.vue";var ne=te.exports,ae=n(367),oe=n(368),re=n(456),ie=n.n(re),se=n(29),le=n(24),ce=n(373);function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return de(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var he={components:{SidebarPage:oe.a,SidebarEntries:ae.default,CommandGroup:ne,BFormGroup:V,BFormInput:G},data:function(){return{filter:"",allCommands:[],hasScrolledToHash:!1}},created:function(){var e=this;Object.entries(ie.a.parse(location.search)).forEach((function(t){var n=ue(t,2),a=n[0],o=n[1];return e.$set(e,a,o)}));var t=ce.commands.map((function(e,t){var a=Object(le.a)(e,".yaml");return n(459)("./".concat(a,".yaml")).then((function(e){return{commands:e,idx:t}}))}));Promise.all(t).then((function(t){t.forEach((function(t){var n=t.commands,a=t.idx;e.$set(e.allCommands,a,n.default)}))}))},updated:function(){var e=this;this.allCommands.length===ce.commands.length&&!this.hasScrolledToHash&&location.hash&&this.$nextTick((function(){document.getElementById(location.hash.substr(1)).scrollIntoView(),e.hasScrolledToHash=!0}))},computed:{images:function(){return Object(se.a)("commands")},commands:function(){var e=this.filter;function t(t){return t.toLowerCase().includes(e.toLowerCase())}function n(e){return function(e){return Array.isArray(e.aliases)?e.aliases:[e.aliases]}(e).some(t)||e.tags.some(t)||t(e.description)}function a(e){return Object.entries(e).forEach((function(t){var o=ue(t,2),r=o[0],i=function(e){if(void 0!==e.subgroups&&Object.entries(e.subgroups).length){var t=a(e.subgroups);return Object.entries(t).length?(e.subgroups=t,e):null}var o=e.commands.filter(n);return o.length?(e.commands=o,e):null}(o[1]);null===i?delete e[r]:e[r]=i})),e}var o=JSON.parse(JSON.stringify(Object.fromEntries(this.allCommands.flatMap(Object.entries))));return this.filter.length?a(o):o}},watch:{filter:function(e,t){if(e!==t){var n=ie.a.stringify({filter:this.filter?this.filter:void 0}),a=""!==n?"?"+n:"/commands/";window.history.replaceState(null,null,a)}}}},pe=Object(Q.a)(he,a,[],!1,null,null,null);pe.options.__file="src/pages/commands/CommandsPage.vue";t.default=pe.exports}}]);