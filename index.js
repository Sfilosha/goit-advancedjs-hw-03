import{i as p,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=new URLSearchParams({key:"10224742-53a1a7880f946c3462445b43a",image_type:"photo",orientation:"horizontal",safesearch:"true"}),y=a=>fetch(`https://pixabay.com/api/?${m}&q=${a}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()});function f(a){return a.reduce((o,r,s,e)=>o+`<li class="gallery-item">
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
        </li>`,"")}p.settings({titleColor:"white",messageColor:"white",backgroundColor:"red",position:"topRight",maxWidth:432});const i=document.querySelector(".js-gallery"),n=document.querySelector("form"),c=document.querySelector(".loader");n.addEventListener("submit",a=>{a.preventDefault();const r=new FormData(n).get("search-query");if(!r.trim()){alert("Please enter the search query");return}i.innerHTML="",c.removeAttribute("hidden"),y(r).then(s=>(c.setAttribute("hidden",""),s.total===0?(p.show({message:"Sorry, there are no images matching your search query. Please try again!"}),null):f(s.hits))).then(s=>{i.innerHTML=s;let e=new u(".js-gallery a",{captionsData:"alt",captionDelay:250});e.refresh(),e.on("error.simplelightbox",function(t){console.log(t)})}).catch(s=>{console.log(s)})});
//# sourceMappingURL=index.js.map
