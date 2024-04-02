import{a as S,i as a}from"./assets/vendor-db34b893.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function u(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=u(t);fetch(t.href,o)}})();async function f(r,e){v();const t="https://pixabay.com"+"/api/",o={key:"43031538-631b2ceb9342d78106785df9b",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,pageSize:15,page:e};try{return(await S.get(t,{params:o})).data}catch(i){return a.error({title:"Hey",message:[i],theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"})}finally{C()}}const p=document.querySelector(".loading");function C(){p.classList.add("hide")}function v(){p.classList.remove("hide")}function H({webformatURL:r,largeImageURL:e,tags:u,likes:s,views:t,comments:o,downloads:i}){return`
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
    `}function g(r){return r.map(H).join("")}const m=document.querySelector(".list"),w=document.querySelector(".form"),h=document.querySelector(".more-btn"),y=document.querySelector(".loading-afterBtn");w.addEventListener("submit",B);h.addEventListener("click",P);let n=1,l=0;const M=15;let c;d();k();async function B(r){if(r.preventDefault(),m.innerHTML="",c=r.target.elements.search.value,n=1,!c)return a.error({title:"Hey",message:"Write something to search",theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"});try{const e=await f(c,n);if(l=Math.ceil(e.totalHits/M),e.hits.length===0)return a.error({title:"Hey",message:"We can not find something",theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"});e.hits.length<15&&d(),m.innerHTML=g(e.hits),l>n&&L()}catch(e){return a.error({title:"Hey",message:[e],theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"})}finally{b()}}async function P(r){try{d(),q();let e;if(l>n&&(e=await f(c,n+=1)),l<=n){d();return}k(),m.insertAdjacentHTML("beforeend",g(e.hits)),L()}catch(e){return console.error(e),a.error({title:"Hey",message:[e],theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"})}finally{b()}}function b(){const r=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function L(){h.classList.remove("hide")}function d(){h.classList.add("hide")}function k(){y.classList.add("hiden")}function q(){y.classList.remove("hiden")}
//# sourceMappingURL=commonHelpers.js.map
