!function(t){function e(e){for(var r,i,u=e[0],c=e[1],l=e[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(s&&s(e);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={0:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=c;a.push([122,1]),n()}({122:function(t,e,n){n(123),t.exports=n(315)},309:function(t,e,n){},310:function(t,e,n){},315:function(t,e,n){"use strict";n.r(e);n(309),n(310);var r=n(88),o=n.n(r),a=document.querySelector(".form"),i=document.querySelector(".input-name"),u=document.querySelector(".input-type"),c=document.querySelector(".input-color"),l=document.querySelector(".items-list");document.querySelector(".item");l.addEventListener("dragstart",(function(t){t.target.classList.add("selected")})),l.addEventListener("dragend",(function(t){t.target.classList.remove("selected")}));l.addEventListener("dragover",(function(t){t.preventDefault();var e=l.querySelector(".selected"),n=t.target;if(e!==n&&n.classList.contains("item")){var r=function(t,e){var n=e.getBoundingClientRect();return t<n.y+n.height/2?e:e.nextElementSibling}(t.clientY,n);r&&e===r.previousElementSibling||e===r||l.insertBefore(e,r)}}));var s=[];a.addEventListener("submit",(function(t){t.preventDefault(),f(i.value,u.value,c.value)}));var d,f=function(t,e,n){if(""!==i.value&&""!==u.value&&""!==c.value&&void 0!==c.value){var r={id:Date.now(),name:t,type:e,color:n};s.push(r),v(s),i.value="",u.value="",c.value=""}},p=function(t){l.innerHTML="",t.forEach((function(t){var e=document.createElement("li");e.setAttribute("class","item"),e.setAttribute("data-key",t.id),e.setAttribute("draggable","true"),e.setAttribute("contenteditable","false"),e.innerHTML='\n    <div class="text text-name">'.concat(t.name,'</div>\n    <div class="text text-type">').concat(t.type,'</div>\n    <div class="text text-color">').concat(t.color,'</div>\n    <button class="button edit-button action-button" title="edit"></button>\n    <button class="button delete-button action-button" title="delete notation"></button>\n    '),l.append(e)}))},v=function(t){localStorage.setItem("arrData",JSON.stringify(t)),p(t)};(d=localStorage.getItem("arrData"))&&(s=JSON.parse(d),p(s)),l.addEventListener("click",(function(t){var e;t.target.classList.contains("delete-button")&&(e=t.target.parentElement.getAttribute("data-key"),s=s.filter((function(t){return t.id!=e})),v(s)),b(t.target)}));var b=function(t){if(t.classList.contains("edit-button")){var e=t.parentElement.getAttribute("data-key"),n=t.parentElement.querySelector(".text-name"),r=t.parentElement.querySelector(".text-type"),o=t.parentElement.querySelector(".text-color"),a={id:Number(e),name:n.textContent,type:r.textContent,color:o.textContent};t.classList.toggle("active"),t.parentElement.classList.toggle("active"),n.toggleAttribute("contenteditable"),r.toggleAttribute("contenteditable"),o.toggleAttribute("contenteditable"),t.parentElement.classList.contains("active")||v(g(a))}},g=function(t){var e=s.findIndex((function(e){return e.id===t.id}));return e>=0&&(s[e]=t),s},m=o.a.create({el:".color-picker",theme:"monolith",useAsButton:!0,components:{preview:!0,opacity:!1,hue:!0,interaction:{hex:!0,rgba:!0,hsla:!1,hsva:!1,cmyk:!1,input:!0,clear:!0,save:!0}}});m.on("change",(function(t){c.value=t["to".concat(m.getColorRepresentation())]().toString(0)}));n(311),n(312),n(313),n(314)}});