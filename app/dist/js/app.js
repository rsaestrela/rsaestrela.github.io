(function(e){function t(t){for(var r,s,c=t[0],o=t[1],l=t[2],p=0,m=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00c8":function(e,t,n){},1368:function(e,t,n){},"4a08":function(e,t,n){"use strict";var r=n("00c8"),a=n.n(r);a.a},"4fa6":function(e,t,n){"use strict";var r=n("1368"),a=n.n(r);a.a},"505e":function(e,t,n){e.exports=n.p+"img/profile_image.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"site"}},[n("router-view")],1)},i=[],s=(n("b0c0"),{name:"App",data:function(){return{name:"Raul Estrela",siteDescription:"@rsaestrela personal website",profileImage:"".concat(location.host,"/img/profile_image.png")}},metaInfo:function(){return{title:"Raul Estrela",meta:[{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:this.siteDescription},{property:"og:title",content:this.name},{property:"og:site_name",content:this.name},{property:"og:type",content:"website"},{property:"og:url",content:location.host},{property:"og:image",content:this.profileImage},{property:"og:description",content:this.siteDescription},{itemprop:"name",content:this.name},{itemprop:"description",content:this.siteDescription},{itemprop:"image",content:this.profileImage}]}}}),c=s,o=(n("5c0b"),n("2877")),l=Object(o["a"])(c,a,i,!1,null,null,null),u=l.exports,p=n("58ca"),m=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile-container"},[n("div",{staticClass:"wrapper"},[e._m(0),n("div",{staticClass:"container"},[n("h1",{staticClass:"name"},[e._v(" "+e._s(e.name)+" "),n("span",{staticClass:"profile-user"},[e._v("@rsaestrela")])]),n("span",{staticClass:"title"},[e._v(e._s(e.currentPosition)+" @ "+e._s(e.currentCompany))]),n("div",{staticClass:"social-container"},e._l(e.socialLinks,(function(t){return n("span",{key:t.service,staticClass:"link"},[n("a",{staticClass:"text",attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.service))])])})),0),n("p",[e._v("Born in 1989")]),n("p",[e._v("From: Porto 🇵🇹")]),n("p",[e._v("Living in: "+e._s(e.currentCity)+" 🇪🇸")]),n("p",[e._v("Mother tongue: Portuguese")]),e._m(1)]),n("Feed",{attrs:{"github-url":e.socialLinks[1].url}})],1)])},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("img",{staticClass:"profile-image",attrs:{src:n("505e")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("E-mail: "),n("a",{staticClass:"email",attrs:{href:"mailto:rsaestrela@gmail.com"}},[n("code",[e._v("rsaestrela@gmail.com")])])])}],f=n("2f62"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container updates"},[r("span",{staticClass:"updates-title"},[e._v("feed")]),e._l(e.commits,(function(t){return r("a",{key:t.message,staticClass:"update-clickable",attrs:{href:t.url}},[r("div",{staticClass:"update"},[r("img",{staticClass:"update-logo",attrs:{src:n("8125")}}),r("span",{staticClass:"update-header"},[e._v(e._s(t.date.substr(0,10))+" - "+e._s(t.repository)+" @ "+e._s(t.sha.substr(t.sha.length-5))+" ")]),r("span",{staticClass:"update-description"},[e._v("* "+e._s(t.message))])])])})),r("span",{staticClass:"link"},[r("a",{staticClass:"text",attrs:{href:e.githubUrl,target:"_blank"}},[e._v("more")])])],2)},h=[],v=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("96cf"),n("2fa7"));function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(v["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={name:"Feed",props:{githubUrl:{type:String,required:!0}},computed:y({},Object(f["c"])({commits:"GitHubFeedModule/commits"})),methods:y({},Object(f["b"])("GitHubFeedModule",["getCommits"])),created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.getCommits("contentx"));case 2:case"end":return e.stop()}}),null,this)}},j=w,M=(n("4a08"),Object(o["a"])(j,g,h,!1,null,"bb5f604c",null)),E=M.exports,O={name:"Home",components:{Feed:E},data:function(){return{name:"Raul Estrela",currentPosition:"Backend Developer",currentCompany:"Netcentric",socialLinks:[{service:"LinkedIn",url:"https://www.linkedin.com/in/raulsilvaestrela/"},{service:"GitHub",url:"https://github.com/rsaestrela"}],currentCity:"Barcelona"}}},R=O,I=(n("4fa6"),Object(o["a"])(R,d,b,!1,null,"438a8010",null)),B=I.exports;r["a"].use(m["a"]);var k=[{path:"/",name:"home",component:B}],D=new m["a"]({mode:"history",routes:k}),C=D,Z=(n("d81d"),n("fb6a"),n("2ca0"),n("284c")),P=n("bc3a"),T=n.n(P);function x(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(T.a.get("https://api.github.com/repos/rsaestrela/".concat(e,"/commits"),{headers:{Accept:"application/json"}}));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}))}var J={commits:[]},S=Object.assign({},J),_={addCommits:function(e,t){var n=Object(Z["a"])(e.commits),a=t.response.map((function(e){return{repository:t.repo,sha:e.commit.tree.sha.substr(e.commit.tree.sha-5),url:e.html_url,date:e.commit.author.date,message:e.commit.message}})).filter((function(e){return!e.message.startsWith("Merge")})).slice(0,3);n.push.apply(n,Object(Z["a"])(a)),r["a"].set(e,"commits",n)}},G={getCommits:function(e,t){var n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,e.state,a.prev=1,a.next=4,regeneratorRuntime.awrap(x(t));case 4:r=a.sent,n("addCommits",{response:r,repo:t}),a.next=10;break;case 8:a.prev=8,a.t0=a["catch"](1);case 10:case"end":return a.stop()}}),null,null,[[1,8]])}},W={commits:function(e){var t=e.commits;return t}},N={namespaced:!0,state:S,mutations:_,actions:G,getters:W};r["a"].use(f["a"]);var Y=new f["a"].Store({modules:{GitHubFeedModule:N}}),U=Y;r["a"].config.productionTip=!1,r["a"].use(p["a"]),new r["a"]({router:C,store:U,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},8125:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.js.map