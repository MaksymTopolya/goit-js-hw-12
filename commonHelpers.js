import{a as S,i as m}from"./assets/vendor-db34b893.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();async function h(i,t){const e="https://pixabay.com"+"/api/",o={key:"43031538-631b2ceb9342d78106785df9b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,pageSize:15,page:t};try{return(await S.get(e,{params:o})).data}catch(s){console.log(s)}}function v({webformatURL:i,largeImageURL:t,tags:c,likes:r,views:e,comments:o,downloads:s}){return`
        <li class="list-item">
            <a href="${t}" class="photo" data-lightbox="photos">
                <img src="${i}" class="photo" data-img="${t}">
            </a>
            <div class="desc">
                <ul class="info">
                    <li class="mini-item">
                        <h3 class="mini-title">Likes</h3>
                        <p class="about-photo">${r}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Views</h3>
                        <p class="about-photo">${e}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Comments</h3>
                        <p class="about-photo">${o}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Downloads</h3>
                        <p class="about-photo">${s}</p>
                    </li>
                </ul>
            </div>
        </li>
    `}function p(i){return i.map(v).join("")}const f=document.querySelector(".list"),w=document.querySelector(".form"),u=document.querySelector(".more-btn"),g=document.querySelector(".loading"),y=document.querySelector(".loading-afterBtn");w.addEventListener("submit",P);u.addEventListener("click",q);let a=1,l=0;const M=15;let n;d();const B=document.querySelector(".list-item").getBoundingClientRect().height;L();async function P(i){if(i.preventDefault(),n=i.target.elements.search.value,a=1,!n)return m.error({title:"Hey",message:"Write something to search",theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"});O();try{const t=await h(n,a);if(l=Math.ceil(t.totalHits/M),l===0)return m.error({title:"Hey",message:"You have reached the end",theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"});H(),f.innerHTML=p(t.hits),b(),window.scrollBy({top:B*2,behavior:"smooth"})}catch(t){console.log(t)}}async function q(i){try{d(),C();const t=await h(n,a+=1);l<=a&&d(),L(),f.insertAdjacentHTML("beforeend",p(t.hits)),b()}catch(t){console.log(t)}}function b(){u.classList.remove("hide")}function d(){u.classList.add("hide")}function H(){g.classList.add("hide")}function O(){g.classList.remove("hide")}function L(){y.classList.add("hide")}function C(){y.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
