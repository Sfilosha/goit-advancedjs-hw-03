import{i as c,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u={key:"10224742-53a1a7880f946c3462445b43a",image_type:"photo",orientation:"horizontal",safesearch:"true"},m=new URLSearchParams(u).toString(),y=a=>fetch(`https://pixabay.com/api/?${m}&q=${a}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()});function f(a){return a.reduce((o,r,s,e)=>o+`<li class="gallery-item">
            <a class="gallery-item-content" href="${r.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${r.webformatURL}"
                    alt="${r.tags}"
                    />
                <ul class="card-porperties">
                <li class="property-el">
                    <p class="property-title">Likes</p>
                    <p class="property-text">${r.likes}</p>
                </li>
                <li class="property-el">
                    <p class="property-title">Views</p>
                    <p class="property-text">${r.views}</p>
                </li>
                <li class="property-el">
                    <p class="property-title">Comments</p>
                    <p class="property-text">${r.comments}</p>
                </li>
                <li class="property-el">
                    <p class="property-title">Downloads</p>
                    <p class="property-text">${r.downloads}</p>
                </li>
                </ul>
            </a>
        </li>`,"")}c.settings({titleColor:"white",messageColor:"white",backgroundColor:"red",position:"topRight",maxWidth:432});const d=document.querySelector(".js-gallery"),l=document.querySelector("form"),n=document.querySelector(".loader");l.addEventListener("submit",a=>{a.preventDefault();const r=new FormData(l).get("search-query");if(!r.trim()){alert("Please enter the search query");return}n.removeAttribute("hidden"),y(r).then(s=>(n.setAttribute("hidden",""),s.total===0?(c.show({message:"Sorry, there are no images matching your search query. Please try again!"}),null):f(s.hits))).then(s=>{d.innerHTML=s;let e=new p(".js-gallery a",{captionsData:"alt",captionDelay:250});e.refresh(),e.on("error.simplelightbox",function(t){console.log(t)})}).catch(s=>{console.log(s)})});
//# sourceMappingURL=index.js.map
