(this.webpackJsonpfinished=this.webpackJsonpfinished||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=n(1);n(9);function l(){var e=Object(r.useState)(25),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(0),l=Object(i.a)(c,2),s=l[0],u=l[1],d=Object(r.useState)(O()),f=Object(i.a)(d,2),v=f[0],p=f[1],h=Object(r.useState)(!1),b=Object(i.a)(h,2),g=b[0],m=b[1],w=Object(r.useState)("#Lets Crack It"),E=Object(i.a)(w,2),k=E[0],S=E[1],j=Object(r.useRef)(null);function C(e){return e.toString().padStart(2,"0")}function O(){return 60*n+s}var W=Math.floor(v/60),I=Math.floor(v-60*W);return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"task"},a.a.createElement("input",{value:k,onChange:function(e){S(e.currentTarget.value)}})),a.a.createElement("div",{className:"timer"},a.a.createElement("span",{contentEditable:!g,suppressContentEditableWarning:!0,onInput:function(e){o(e.currentTarget.textContent)}},C(W)),a.a.createElement("span",null,":"),a.a.createElement("span",{contentEditable:!g,suppressContentEditableWarning:!0,onInput:function(e){u(e.currentTarget.textContent)}},C(I))),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{onClick:function(){null==j.current&&(m(!0),p(O()),j.current=setInterval((function(){p((function(e){return e>=1?e-1:(localStorage.setItem("task",k),m(!1),clearInterval(j.current),p(O()),0)}))}),1e3))},disabled:g},"Start"),a.a.createElement("button",{onClick:function(){m(!1),clearInterval(j.current),j.current=null},disabled:!g},"Stop"),a.a.createElement("button",{onClick:function(){m(!1),clearInterval(j.current),p(O()),j.current=null}},"Reset")))}var s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/timer","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.66e531bf.chunk.js.map