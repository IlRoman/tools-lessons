!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r="https://crudcrud.com/api/4920adf73a4141caa1d49651a9158e40/events",o=e=>fetch(`${r}/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"}});function a(e){document.querySelector(".delete-event").addEventListener("click",(function(){event.preventDefault(),o(e._id).then(()=>g()),document.querySelector(".popup").classList.remove("popup-switch")}))}function l(e){document.querySelector(".popup").classList.add("popup-switch");let t=document.querySelector(".input__name"),n=document.querySelector(".start-date"),r=document.querySelector(".start-time"),o=document.querySelector(".end-time"),a=document.querySelector(".end-date"),l=document.querySelector(".description-input ");t.value=e.name+"";let u=e.startDate.getMonth()+1<9?`0${e.startDate.getMonth()+1+""}`:`${e.startDate.getMonth()+1}`,c=(e.startDate+"").split(" ")[3],i=(e.startDate+"").split(" ")[2];n.value=`${c}-${u}-${i}`,r.value=(e.startDate+"").split(" ")[4].split(":").splice(0,2).join(":"),o.value=(e.endDate+"").split(" ")[4].split(":").splice(0,2).join(":");let s=e.endDate.getMonth()+1<9?`0${e.endDate.getMonth()+1+""}`:`${e.endDate.getMonth()+1}`,d=(e.endDate+"").split(" ")[3],p=(e.endDate+"").split(" ")[2];a.value=`${d}-${s}-${p}`,l.value=e.description}function u(e){o(e._id).then(()=>g()),document.querySelector(".submit-button ").removeEventListener("click",u),document.querySelector(".popup").classList.remove("popup-switch")}let c=document.querySelectorAll(".day"),i=document.querySelectorAll(".day-number");function s(e,t,n,r,o,a){if(D[0].getMonth()===e.getMonth()){let l=(t-e)/1e3/60;for(let u=0;u<7;u++){let s=(e+"").split(" ")[4].split(":");if(i[u].innerHTML==t.getDate())if(e.getDate()!==t.getDate()){let l=document.createElement("div"),i=document.createElement("div");l.classList.add("active_event"),i.classList.add("active_event");let d=60*+s[0]+ +s[1];l.style.marginTop=`${d+100}px`,l.style.height=`${1440-d}px`,i.style.marginTop="100px",i.style.height=`${1440-(1440-60*(t+"").split(" ")[4].split(":")[0]+ +(t+"").split(" ")[4].split(":")[1])}px`,c[u-1].append(l),c[u].append(i),i.innerHTML+=`${n}<br>`,i.innerHTML+=`${(e+"").split(" ")[4]} - ${(t+"").split(" ")[4]}<br>`,i.innerHTML+=`${r}`,l.innerHTML+=`${n}<br>`,l.innerHTML+=`${(e+"").split(" ")[4]} - ${(t+"").split(" ")[4]}<br>`,l.innerHTML+=`${r}`,l.setAttribute("data-id",o),l.style.backgroundColor=a,i.setAttribute("data-id",o),i.style.backgroundColor=a}else{let i=60*+s[0]+ +s[1],d=document.createElement("div");c[u].append(d),d.classList.add("active_event"),d.style.height=`${l}px`,d.style.marginTop=`${i+100}px`,d.innerHTML+=`${n}<br>`,d.innerHTML+=`${(e+"").split(" ")[4]} - ${(t+"").split(" ")[4]}<br>`,d.innerHTML+=`${r}`,d.setAttribute("data-id",o),d.style.backgroundColor=a}}}}let d=[];function p(){fetch(r).then(e=>e.json()).then(e=>{!function(e){if(0!==e.length)for(let t=0;t<e.length;t++)"object"!=typeof e[t].startDate&&(e[t].startDate=new Date(e[t].startDate),e[t].endDate=new Date(e[t].endDate)),s(e[t].startDate,e[t].endDate,e[t].name,e[t].description,e[t]._id,e[t].color)}(e),function(e){let t=document.querySelectorAll(".active_event");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(function(){for(let t=0;t<e.length;t++)if(event.target.dataset.id==e[t]._id){l(e[t]),a(e[t]);let n=document.querySelector(".submit-button "),r=n.cloneNode(!0);n.parentNode.replaceChild(r,n),r.addEventListener("click",u.bind(n,e[t]))}}))}(e),d=e})}let m=document.querySelectorAll(".day");function v(){for(let e=0;e<D.length;e++)if((D[e]+"").split(" ")[2]==(new Date+"").split(" ")[2]){let t=document.createElement("div");t.classList.add("redLine"),m[e].append(t);let n=document.createElement("div"),r=document.createElement("div");n.classList.add("redLine-round"),r.classList.add("redLine-line"),t.append(n),t.append(r);let o=(D[e]+"").split(" ")[4].split(":"),a=60*+o[0]+ +o[1];t.style.marginTop=`${a+100}px`}}let f=document.querySelectorAll(".day-number"),y=document.querySelector(".dates"),D=[];function h(){let e=(new Date).getDay();for(let t=0;t<7;t++){if(t<e){let e=new Date,n=e.getDate()-(t+1),r=e.setDate(n);D.unshift(new Date(r))}if(e==t&&D.push(new Date),t>e){let e=new Date,n=e.getDate()+(t-e.getDay()),r=e.setDate(n);D.push(new Date(r))}}}function g(){for(let e=0;e<7;e++){let t=(D[e]+"").split(" ")[2];f[e].innerHTML=t,(D[e]+"").split(" ")[2]===(new Date+"").split(" ")[2]?f[e].classList.add("current-day"):f[e].classList.remove("current-day")}!function(){let e=[],t=[],n=[],r=[];for(let n=0;n<D.length;n++)e.push((D[n]+"").split(" ")[1]),t.push((D[n]+"").split(" ")[3]);for(let t of e)n.includes(t)||n.push(t);for(let e of t)r.includes(e)||r.push(e);1==r.length?y.innerHTML=`${n[0]} ${r[0]}`:y.innerHTML=`${n[0]} ${r[0]} - ${n[1]} ${r[1]}`}();let e=document.querySelectorAll(".active_event");for(let t=0;t<e.length;t++)e[t].remove();p(),v()}h(),g();let $=document.querySelector(".arrow-button__next");document.querySelector(".arrow-button__prev").addEventListener("click",(function(){for(let e=0;e<7;e++){let t=D[e].getDate()-7;t=new Date(D[e]).setDate(t),D[e]=new Date(t)}g(),L();let e=document.querySelector(".redLine");null!==e&&e.remove("div"),v()})),$.addEventListener("click",(function(){for(let e=0;e<7;e++){let t=D[e].getDate()+7;t=new Date(D[e]).setDate(t),D[e]=new Date(t)}g(),L();let e=document.querySelector(".redLine");null!==e&&e.remove("div"),v()})),document.querySelector(".today-button").addEventListener("click",(function(){D=[],h(),g()}));const S=document.querySelector(".calendar-visualization"),L=()=>{S.innerHTML="";for(let e=1;e<=24;e++){const t=document.createElement("div");t.setAttribute("data-time",`${e<10?0:""}${e}:00`),t.classList.add("emptyRow"),S.append(t);for(let e=1;e<=7;e++){const n=document.createElement("div");let r=D[e-1]+"",o=r.split(" ")[0],a=r.split(" ")[2];n.setAttribute("data-day",`${o}`),n.setAttribute("data-date",`${a}`),n.setAttribute("data-number",`${e-1}`),n.classList.add("emptyCell"),t.append(n)}}};L();const b=document.querySelector(".timing");b.innerHTML=(()=>{const e=[];return((e,t)=>{const n=[];for(let r=e;r<=t;r++)n.push(r);return n})(1,23).map(t=>{let n="";n=t<10?`0${t}`:t,e.push(`<div \n                    class="timing__blocks" \n                    data-block-number='${t}'\n                    ><span class="clock">${n}:00</span></div>`)}),e.join("")})();let w=document.querySelector(".start-date"),q=document.querySelector(".start-time"),T=document.querySelector(".end-time"),M=document.querySelector(".end-date");function _(e){const t=e.getFullYear();let n=e.getMonth()+1;n=n<10?"0"+n:n;let r=e.getDate();return r=r<10?"0"+r:r,`${t}-${n}-${r}`}function E(e){let t=e.getHours();t=t<10?"0"+t:t;let n=e.getMinutes();return n=n<10?"0"+n:n,`${t}:${n}`}const H=e=>{if("emptyCell"===e.target.classList.value){document.querySelector(".popup").classList.add("popup-switch"),q.value=e.target.closest(".emptyRow").dataset.time+"",T.value=e.target.closest(".emptyRow").dataset.time+"";document.querySelector(".dates").innerHTML.split(" ")[0];let t="02",n=document.querySelector(".dates").innerHTML.split(" ")[1],r=e.target.dataset.date;w.value=`${n}-${t}-${r}`,M.value=`${n}-${t}-${r}`}else{document.querySelector(".popup").classList.add("popup-switch"),w.value=_(new Date),M.value=_(new Date),q.value=E(new Date),T.value=E(new Date)}},k=document.querySelector(".calendar-visualization"),j=document.querySelector(".create-button");k.addEventListener("click",H),j.addEventListener("click",H),document.querySelector(".close").onclick=function(){event.preventDefault(),document.querySelector(".popup").classList.remove("popup-switch"),L()};const x=(e,t)=>t<e?(alert("error"),!1):!(e-t>216e5)||(alert("error"),!1),A=(e,t)=>t.getHours()-e.getHours()>6?(alert("You cannot create an event longer than 6 hours"),!1):!(e.getTime()-t.getTime()>216e5)||(alert("You cannot create an event longer than 6 hours"),!1),O=e=>!(e-(new Date).getTime()<9e5)||(alert("you cannot delete/update event 15 minutes before the start"),!1),C=()=>{document.querySelector(".input__name");const e=document.querySelector(".start-date"),t=document.querySelector(".start-time"),n=document.querySelector(".end-date"),r=document.querySelector(".end-time");document.querySelector(".description-input");let o,a,l,u,c=new Date(e.value+"T"+t.value);new Date(n.value+"T"+r.value);for(let n=0;n<d.length-1;n++){let r=new Date(d[n].startDate),o=new Date(d[n].endDate);if(e.value+"T"+t.value==d[n].startDate)return null==d[n].id||(alert("two events cannot intersect 1"),!1);if(c>r&&c<o)return null==d[n].id||(alert("two events cannot intersect 2"),!1)}let i,s,p=[],m=[],v=new Date(e.value+"T"+t.value),f=new Date(n.value+"T"+r.value);d.map(e=>{p.push(new Date(e.startDate)),m.push(new Date(e.endDate))});return(()=>{for(let e=0;e<p.length;e++)i=p[e],s=m[e],i<v&&(void 0===o||o<i)?o=i:i>v&&(void 0===a||a>i)&&(a=i),s<f&&(void 0===l||l<s)?l=s:s>f&&(void 0===u||u>s)&&(u=s)})(),v>=l&&v<=o?(alert("two events cannot intersect 3"),!1):!(f>a&&f<u)||(alert("two events cannot intersect 4"),!1)};let P=document.querySelector(".popup__form");document.querySelector(".submit-button").addEventListener("click",(function(){event.preventDefault();const e=[...new FormData(P)];let t=e[0][1],n=e[1][1],o=`${e[2][1]}T${e[3][1]}`,a=`${e[5][1]}T${e[4][1]}`,l=e[6][1];if(0==function(e,t){if(!(x(e,t)&&A(e,t)&&O(e)&&C()))return!1}(new Date(o),new Date(a)))return;(e=>fetch(r,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}))({name:t,color:n,startDate:new Date(o),endDate:new Date(a),description:l}).then(()=>g()),document.querySelector(".popup").classList.remove("popup-switch"),L()}))}]);