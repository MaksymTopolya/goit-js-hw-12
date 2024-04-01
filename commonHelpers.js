import{a as k,i as a}from"./assets/vendor-db34b893.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();async function p(r,e){S();const t="https://pixabay.com"+"/api/",o={key:"43031538-631b2ceb9342d78106785df9b",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,pageSize:15,page:e};try{return(await k.get(t,{params:o})).data}catch(i){return a.error({title:"Hey",message:[i],theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"})}finally{C()}}const f=document.querySelector(".loading");function C(){f.classList.add("hide")}function S(){f.classList.remove("hide")}function v({webformatURL:r,largeImageURL:e,tags:n,likes:s,views:t,comments:o,downloads:i}){return`
        <li class="list-item">
            <a href="${e}" class="photo" data-lightbox="photos">
                <img src="${r}" class="photo" data-img="${e}">
            </a>
            <div class="desc">
                <ul class="info">
                    <li class="mini-item">
                        <h3 class="mini-title">Likes</h3>
                        <p class="about-photo">${s}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Views</h3>
                        <p class="about-photo">${t}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Comments</h3>
                        <p class="about-photo">${o}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Downloads</h3>
                        <p class="about-photo">${i}</p>
                    </li>
                </ul>
            </div>
        </li>
    `}function g(r){return r.map(v).join("")}const d=document.querySelector(".list"),w=document.querySelector(".form"),h=document.querySelector(".more-btn"),y=document.querySelector(".loading-afterBtn");w.addEventListener("submit",B);h.addEventListener("click",M);let c=1,u=0;const H=15;let l;m();L();async function B(r){if(r.preventDefault(),l=r.target.elements.search.value,c=1,!l)return a.error({title:"Hey",message:"Write something to search",theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"});try{const e=await p(l,c);if(u=Math.ceil(e.totalHits/H),e.hits.length===0)return a.error({title:"Hey",message:"We can not find something",theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"});d.innerHTML="",d.innerHTML=g(e.hits),b();const n=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}catch(e){return a.error({title:"Hey",message:[e],theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"})}}async function M(r){try{m(),q();let e;u>c&&(e=await p(l,c+=1)),u<=c&&m(),L(),d.insertAdjacentHTML("beforeend",g(e.hits));const n=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"}),b()}catch(e){return console.error(e),a.error({title:"Hey",message:[e],theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"})}}function b(){h.classList.remove("hide")}function m(){h.classList.add("hide")}function L(){y.classList.add("hiden")}function q(){y.classList.remove("hiden")}
//# sourceMappingURL=commonHelpers.js.map
