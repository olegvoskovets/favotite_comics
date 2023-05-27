import{l as S,c as W,b as G,a as C,d as O,r as V,i as I}from"./header-07c36cda.js";const _=document.querySelector(".filter-form"),g=document.querySelector('[name="order"]'),p=document.querySelector(".listbox");let b=!1;const j=Array.from(g.children);j.forEach(e=>{const t=e.value,n=e.textContent;z(t,n)});g.addEventListener("click",e=>{b?A():(p.classList.remove("visually-hidden"),b=!0)});function z(e,t){const n=document.createElement("button");n.classList.add("listbox-item"),n.dataset.value=e,n.textContent=t,n.type="button",n.addEventListener("click",()=>{g.value=e,_.dispatchEvent(new Event("change")),A()}),p.append(n)}function A(){p.classList.add("visually-hidden"),b=!1}document.addEventListener("click",e=>{const t=e.target;!p.contains(t)&&!g.contains(t)&&A()});let a=1,c,l,d,f,B=10,h;const F=document.querySelector(".filter-form");let M=document.querySelector('[name="comic"]'),m=document.querySelector('[name="name"]'),R=document.querySelector('[name="order"]'),D=document.querySelector('[name="date"]');const r=document.querySelector(".gallery");r.addEventListener("click",Q);let L=null,w="";w+=`<option>All Years</option>
<option class="defolt-options">-----------</option>`;for(let e=1939;e<=2023;e++)w+=`<option>${e}</option>`;D.insertAdjacentHTML("beforeend",w);D.addEventListener("change",Y);async function Y(e){e.preventDefault,e.target.value==="All Years"?L=null:L=e.target.value}M.addEventListener("input",S(function(e){const t=e.target,n=t.value;/^\d*$/.test(n)||(t.value=n.replace(/\D/g,""),I("warn","Only Numbers can be entered..."))},500));m.addEventListener("input",S(function(e){const t=e.target,n=t.value;/^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*$/.test(n)||(t.value=n.replace(/[^a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,""),I("warn","Please, use English keyboard layout only."))},500));const P=document.querySelector(".header-input");P.addEventListener("input",S(Z,500));async function Z(){const e=this.value.trim();if(e.length<2){this.setAttribute("list","");return}const n=(await C.getAllCharacters({nameStartsWith:e})).results,i=document.createElement("datalist");i.id="search-results",n.forEach(y=>{const x=document.createElement("option");x.value=y.name,i.appendChild(x)});const o=document.querySelector("#search-results");o?o.replaceWith(i):this.after(i),this.setAttribute("list","search-results")}const U=document.querySelector(".container");let E=window.getComputedStyle(U).width,s=null;parseInt(E,10)<375&&(E="100");switch(E){case"375px":s=4;break;case"100":s=4;break;case"1440px":s=16;break;default:s=8;break}r.setAttribute("data-limits",s);async function T(e=0){try{const t=R.value.toLowerCase();let n=0;e!=1&&(n=(e-1)*s),e||(n=0);const i=await C.getAllCharacters({nameStartsWith:m.value,limit:s,offset:n,comics:M.value,orderBy:t,modifiedSince:"01/01/"+L}),o=i.results;return r.setAttribute("data-total",i.total),r.setAttribute("data-offset",i.offset),o.length===0?O():V(o)}catch(t){console.log(t)}}F.addEventListener("change",async e=>{e.preventDefault();const t=document.querySelector(".pagination-container");t&&t.remove(),localStorage.setItem("searchValue",m.value),P.value=m.value,console.log("REBUILD LIST - change on FORM"),r.innerHTML="",r.innerHTML=await T(),a=1,await u(),a=1,await u()});async function u(){const e=document.querySelector(".pagination-container");e&&e.remove(),await X(),document.getElementById("pagination-numbers").addEventListener("click",H),d=document.getElementById("next-button"),f=document.getElementById("prev-button"),v(),d.addEventListener("click",J),f.addEventListener("click",K)}async function N(e){const t=document.querySelectorAll(".pagination-number");let n=0,i=0;if(t.forEach((o,y)=>{e===">"?i=B-2:i=1,o.classList.contains("active")&&(n=y)}),e===">"){if(i-n===1)return h={direction:">",button:a},await u(),!1}else if(n-i===1)return h={direction:"<",button:a},await u(),!1;return!0}function J(){if(N(">")){if(a===Math.ceil(c/l)){v();return}a+=1,$(a)}}function K(){N("<")&&a!==1&&(a-=1,$(a))}function Q(e){if(e.target.classList.value==="gallery-image"){const t=Number(e.target.closest("li").dataset.id);W(t,"")}}async function X(){l=r.dataset.limits,c=r.dataset.total;const e=await G(l,c,B,a,h);r.insertAdjacentHTML("afterend",e)}function q(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function k(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function v(){a===1?q(f):k(f),Math.ceil(c/l)===a?q(d):k(d)}async function H(e){if(e){const t=e.target;if(a!==Number(t.getAttribute("page-index")))if(t.getAttribute("page-index")!=="..."){if(a=Number(t.getAttribute("page-index")),document.querySelectorAll(".pagination-number").forEach(n=>{n.classList.remove("active"),Number(n.getAttribute("page-index"))==a&&n.classList.add("active")}),a===Math.ceil(c/l)){const n=document.querySelector(".pagination-container");n&&n.remove(),await u()}}else console.log("перемалювати---- пагінатор")}else document.querySelectorAll(".pagination-number").forEach(t=>{t.classList.remove("active"),Number(t.getAttribute("page-index"))===a&&t.classList.add("active")});r.innerHTML="",r.innerHTML=await T(a),v()}const $=e=>{a=e,console.log("PAGE",e),H(),v()};
