(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/avatar.39f21f4f.jpg"},23:function(e,t,a){e.exports=a(42)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=(a(28),a(29),a(2)),o=(a(30),a(6)),u=(a(31),a(8)),s=[{name:"profile",location:"/profile",active:!0},{name:"projects",location:"/projects"},{name:"dotfiles",location:"/dotfiles"}];a(32);var f=function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1],o=function(e){return e.classList.add("active")};return Object(n.useEffect)((function(){return function(){if(!c){var t=e.current.childNodes,a=!0,n=!1,r=void 0;try{for(var i,u=t[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var s=i.value;s.classList.contains("static")||(s.onclick=function(t){var a=t.target;e.current.childNodes.forEach((function(e){return e.classList.remove("active")})),o(a)})}}catch(f){n=!0,r=f}finally{try{a||null==u.return||u.return()}finally{if(n)throw r}}l(!0)}}()})),r.a.createElement("div",{id:"menu"},r.a.createElement("div",{ref:e,className:"sections"},s.map((function(e,t){var a;return r.a.createElement(u.b,{to:e.location,name:e.name,className:"section "+e.name+(a=e,"active"in a?" active":""),key:t})})),r.a.createElement("a",{href:"https://github.com/0-l/",target:"_blank",rel:"noopener noreferrer",className:"section static"},r.a.createElement("p",{style:{display:"none"}})),r.a.createElement("div",{className:"mark"})))},m=(a(38),a(10)),d=a.n(m),v=a(20),p=a(21),h=new(function(){function e(){Object(v.a)(this,e),this.url="https://api.github.com/users/"+this.username,this.data=this.getData()}return Object(p.a)(e,[{key:"getData",value:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.awrap(fetch(this.url));case 3:if(e=t.sent,!this.hasFailed(e)){t.next=6;break}return t.abrupt("return",this.defaultResponse);case 6:return t.next=8,d.a.awrap(e.json());case 8:return t.abrupt("return",t.sent);case 11:return t.prev=11,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",this.defaultResponse);case 15:case"end":return t.stop()}}),null,this,[[0,11]])}},{key:"hasFailed",value:function(e){var t=e.status;return[403,404].includes(t)}},{key:"username",get:function(){var e=document.URL;return e.includes("localhost")?this.defaultResponse.username:e.split("/")[2].split(".")[0]}},{key:"defaultResponse",get:function(){return{username:"0-l",name:"Bruno",surname:"Coimbra",bio:"I'm a fullstack developer living in Brazil.",followers:30}}}]),e}());var E=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return h.data.then((function(e){c(e.bio)})),r.a.createElement("div",{id:"profile"},r.a.createElement("h1",null,"About me"),r.a.createElement("p",null,a))};var b=function(){return r.a.createElement(r.a.Fragment,null)};var j=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(o.f)(),c=Object(n.useState)(!1),l=Object(i.a)(c,2),u=l[0],s=l[1],m={expanded:"expanded",hidden:"hidden",fullscreen:"fullscreen",retracted:"retract"};Object(n.useEffect)((function(){!function(t){var a=e.current.parentNode;t?a.classList.add(m.fullscreen):a.classList.remove(m.fullscreen)}(["/projects"].includes(a.location.pathname))}),[a.location.pathname,m]);var d=function(){var a=e.current.classList;a.add(m.retracted),setTimeout((function(){a.remove(m.expanded),a.remove(m.retracted),t.current.classList.remove(m.hidden)}),500)};return r.a.createElement("div",{className:"more",ref:e,onClick:function(){u||(e.current.classList.add(m.expanded),s(!0),a.push("/profile"))}},r.a.createElement("div",{className:"dots",ref:t},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"more-info"},r.a.createElement("div",{className:"paginator"},r.a.createElement(o.b,{history:a},r.a.createElement("div",{onClick:function(){d(),s(!1),a.push("/")},className:"go-back"}),r.a.createElement("div",{className:"content"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/profile",component:E}),r.a.createElement(o.a,{exact:!0,path:"/projects",component:b}))),r.a.createElement(f,null)))))},g=(a(40),a(22)),O=a.n(g);var y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(i.a)(l,2),u=o[0],s=o[1];return h.data.then((function(e){c(e.avatar_url),s(e.followers)})),r.a.createElement("div",{className:"avatar"},r.a.createElement("div",{className:"followers"},r.a.createElement("p",null,r.a.createElement("span",null,u)," followers")),r.a.createElement("img",{alt:"",src:a||O.a}))};a(41);var w=function(e){return r.a.createElement("div",{className:e.loaded?"loader loaded":"loader"})};var x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],s=o[1],f=Object(n.useState)(!1),m=Object(i.a)(f,2),d=m[0],v=m[1];return h.data.then((function(e){c(e.name),s(e.surname),v(!1)})),Object(n.useEffect)((function(){v(!0)}),[a,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{loaded:d}),r.a.createElement("div",{id:"card"},r.a.createElement(y,null),r.a.createElement("div",{className:"info"},r.a.createElement("h1",{className:"fullname"},r.a.createElement("span",null,a),r.a.createElement("span",{className:"surname"}," ",u)),r.a.createElement("h2",{className:"role"},"Developer")),r.a.createElement(j,null)))},N=a(11);var k=function(){var e=Object(n.useRef)(),t=function(){for(var t,a,n,r,c=e.current.getContext("2d"),l=function(e){var t=e.x,a=e.y,n=e.radius,r=e.sAngle,l=void 0===r?0:r,i=e.eAngle,o=void 0===i?2*Math.PI:i,u=e.clockwise,s=void 0!==u&&u,f=e.fillStyle,m=void 0===f?"black":f;c.beginPath(),c.arc(t,a,n,l,o,s),c.fillStyle=m,c.fill()},i=Math.round(window.innerWidth/30),o=Math.round(window.innerHeight/30),u=.1,s=1,f=[],m=[],d=0;d<=i;d++){d==i/2&&(s*=-1),u+=s/i;for(var v=0;v<=o;v++){var p={x:30*d+1+10,y:30*v+1+10};l(Object(N.a)({},p,{radius:1,fillStyle:(t=0,a=0,n=0,r=u.toFixed(2),"rgba(".concat(t,", ").concat(a,", ").concat(n,", ").concat(r,")"))})),f.push(Object(N.a)({},p))}}var h=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t<=e&&t>=e-a};e.current.onmousemove=function(e){var t,a=function(e,t){return f.filter((function(a){return h(e,a.x,20)&&h(t,a.y,20)}))[0]}(e.x,e.y);"undefined"==typeof a||(t=a,0!==m.length&&m.find((function(e){return t.x===e.x&&t.y===e.y})))||(!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=20,n=30,r=1,i=1,o="#47485a",u=setInterval((function(){t>=n/2&&(i*=-1),((t+=i)>=n||t<=r)&&clearInterval(u),c.clearRect(e.x-Math.round(n/2),e.y-Math.round(n/2),n,n),l(Object(N.a)({},e,{radius:t,fillStyle:o}))}),a);m.pop()}(a),m.push(a))}},a=function(){var t=window,a=t.innerWidth,n=t.innerHeight;e.current.width=a,e.current.height=n};return Object(n.useEffect)((function(){a(),window.onresize=function(){a(),t()},t()}),[e]),r.a.createElement("canvas",{id:"background",ref:e})};function S(){return r.a.createElement(u.a,{basename:window.location.pathname||"/"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:x})))}var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(k,null))};l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5a2cfa3a.chunk.js.map