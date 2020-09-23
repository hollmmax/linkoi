(function(e){function t(t){for(var s,o,c=t[0],d=t[1],u=t[2],l=0,m=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);i&&i(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,c=1;c<a.length;c++){var d=a[c];0!==r[d]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var i=d;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},2395:function(e,t,a){},"7c55":function(e,t,a){"use strict";var s=a("2395"),r=a.n(s);r.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("5f5b"),n=a("b1e0"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-jumbotron",{attrs:{header:"LinkOI",lead:"Waypoint for school subjects of CTU in Prague OI masters."}}),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/first/summer"}},[e._v("First year: Summer")]),e._v(" | "),a("router-link",{attrs:{to:"/second/winter"}},[e._v("Second year: Winter")]),e._v(" | "),a("a",{attrs:{target:"_blank",href:"https://github.com/skalahonza/linkoi"}},[e._v("GitHub")])],1),a("router-view")],1)},c=[],d=(a("7c55"),a("2877")),u={},i=Object(d["a"])(u,o,c,!1,null,null,null),l=i.exports,m=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},e._l(e.subjects,(function(t){return a("b-card",{key:t.code,attrs:{title:t.name,"sub-title":t.code}},[a("b-button-group",e._l(t.links,(function(t){return a("b-button",{key:t.address,attrs:{target:"_blank",href:t.address,variant:e.linkType(t.name)}},[e._v(e._s(t.name))])})),1)],1)})),1)},p=[],b=s["default"].extend({methods:{linkType:function(e){switch(e){case"Moodle":return"primary";case"Courseware":return"success";case"Teams":return"info";case"Office 365":case"YouTube":return"danger";case"Brute":return"dark";case"Forum":return"warning";default:return"secondary"}}},data:function(){return{subjects:[{name:"Useful Links",code:"",links:[{name:"Office 365",address:"https://office365.cvut.cz"},{name:"Lectures/Labs recordings",address:"https://web.microsoftstream.com/browse?view=group"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/"},{name:"Brute",address:"https://cw.felk.cvut.cz/brute/student/"}]},{name:"Combinatorial Optimization",code:"B4M35KO",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/ko/start"},{name:"Stream",address:"https://youtu.be/VFLm7cgzYQ4"},{name:"Forum",address:"https://cw.felk.cvut.cz/forum/forum-1623-page-1.html"},{name:"YouTube - Lectures",address:"https://www.youtube.com/playlist?list=PLQL6z4JeTTQlKMedf1yTuoVyDzYYfOQMX"},{name:"YouTube - Lab videos",address:"https://www.youtube.com/playlist?list=PLhMDoPPJXZWQr3a4IOw0FYVWEMq9w3t0J"}]},{name:"Theory of Algorithms",code:"B4M01TAL",links:[{name:"Math FELD",address:"http://math.feld.cvut.cz/demlova/teaching/tal_vyuka.html"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4542"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3af8fd8b77cc7d4ca7a16608c1aa640305%40thread.tacv2/conversations?groupId=95b91ba2-53fc-4346-be06-7cfdae54d142&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Software Architectures",code:"B4M36SWA",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4982"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a465c54787d7e4b9b8740e58eeb9a5a55%40thread.tacv2/conversations?groupId=02e6b8d0-78a5-4e49-8367-9b952bc4cfac&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Effective Software",code:"B4M36ESW",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/b4m36esw/start"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a5aad055a96f94e8abba8ad6fdffc0584%40thread.tacv2/conversations?groupId=5df990ab-0cb2-4268-acf9-53d5d14b4a78&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Planning for Artificial Intelligence",code:"B4M36PUI/BE4M36PUI",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/b192/courses/be4m36pui/start"},{name:"Youtube - Lectures",address:"https://www.youtube.com/playlist?list=PLV1VrPDl1-1_IiRuuoyFZ7GQOfrv1hZIp"}]},{name:"Symbolic Machine Learning",code:"B4M46SMU/BE4M46SMU",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/smu/start"},{name:"Forum",address:"https://cw.felk.cvut.cz/forum/forum-1633.html"},{name:"Lecture recordings",address:"https://web.microsoftstream.com/group/d75ffc87-2e08-4fa5-903c-2fd4cbe820ea"}]},{name:"Visualization",code:"B4M39VIZ",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]},{name:"Spatial Design",code:"B4M39PTV",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]},{name:"Mathematical Cryptography",code:"B4M01MKR",links:[{name:"Math FELD",address:"http://math.feld.cvut.cz/gollova/mkr.html"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4953"}]}]}}}),h=b,v=Object(d["a"])(h,f,p,!1,null,null,null),w=v.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},e._l(e.subjects,(function(t){return a("b-card",{key:t.code,attrs:{title:t.name,"sub-title":t.code}},[a("b-button-group",e._l(t.links,(function(t){return a("b-button",{key:t.address,attrs:{target:"_blank",href:t.address,variant:e.linkType(t.name)}},[e._v(e._s(t.name))])})),1)],1)})),1)},g=[],y=s["default"].extend({methods:{linkType:function(e){switch(e){case"Moodle":return"primary";case"Courseware":return"success";case"Teams":return"info";case"Office 365":case"YouTube":case"Google":return"danger";case"Brute":return"dark";case"Forum":return"warning";default:return"secondary"}}},data:function(){return{subjects:[{name:"Useful Links",code:"",links:[{name:"Office 365",address:"https://office365.cvut.cz"},{name:"Lectures/Labs recordings",address:"https://web.microsoftstream.com/browse?view=group"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/"},{name:"Brute",address:"https://cw.felk.cvut.cz/brute/student/"}]},{name:"System security (Bezpečnost systémů)",code:"B4M36BSY",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=5412"},{name:"Google",address:"https://sites.google.com/aic.fel.cvut.cz/b4m36bsy/"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a2320318e467d41f0b05ef4cd541ab72b%40thread.tacv2/conversations?groupId=0b3ee019-4c67-4115-aedd-d593d8e47540&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"},{name:"Mailing List",address:"https://list.feld.cvut.cz/cgi-bin/mailman/listinfo/b4m36bsy"}]},{name:"Parallel Algorithms",code:"BE4M35PAG",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/pag/start"},{name:"Teams",address:"https://teams.microsoft.com/l/channel/19%3a2b18107c58c4420981843d8c216480a6%40thread.tacv2/General?groupId=f11be53f-9eb4-496f-a17f-b694440d33ac&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Ontologies and Semantic Web",code:"B4M36OSW",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/osw/start"}]},{name:"Statistical Machine Learning",code:"BE4M33SSU",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/be4m33ssu/start"}]},{name:"Evoluční optimalizační algoritmy",code:"A0M33EOA",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/a0m33eoa/start"}]},{name:"Big Data Technologies",code:"B0M33BDT",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/b0m33bdt/start?animal=wiki"}]},{name:"Internet Applications Development (Vývoj internetových aplikací)",code:"A4M33VIA",links:[{name:"Google",address:"https://sites.google.com/a/via.felk.cvut.cz/via/"}]},{name:"Matlab",code:"BE0B17MTB",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/be0b17mtb/start"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a5599e3b45df6460692a4d4985bb70d2c%40thread.tacv2/conversations?groupId=9ac0a2f1-ad5a-4920-bb79-a25f303730b5&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]}]}}}),M=y,z=Object(d["a"])(M,k,g,!1,null,null,null),_=z.exports;s["default"].use(m["a"]);var T=[{path:"/",redirect:"/second/winter"},{path:"/first/summer",name:"First Summer",component:w},{path:"/second/winter",name:"Second Winter",component:_}],O=new m["a"]({routes:T}),B=O,S=a("2f62");s["default"].use(S["a"]);var I=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(r["a"]),s["default"].use(n["a"]),new s["default"]({router:B,store:I,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.f0a09356.js.map