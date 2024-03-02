var u=(r,e,s)=>{if(!e.has(r))throw TypeError("Cannot "+s)};var i=(r,e,s)=>(u(r,e,"read from private field"),s?s.call(r):e.get(r)),c=(r,e,s)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,s)},d=(r,e,s,a)=>(u(r,e,"write to private field"),a?a.call(r,s):e.set(r,s),s);import{S as y,i as w}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();var h,n,g;class L{constructor(e="loader-section",s=".gallery"){c(this,h,void 0);c(this,n,void 0);c(this,g,void 0);d(this,h,e),d(this,n,s),d(this,g,new y(`${i(this,n)} a`))}showGalery(e){const s=document.querySelector(i(this,n));if(s.innerHTML="",!e||!e.total){this.showErrorMsg();return}s.innerHTML=e.hits.reduce((a,t)=>a+`<li>
            <a href="${t.largeImageURL}">
              <img src="${t.webformatURL}" alt="${t.tags}"/>
              </a>
            <ul class="img-description">
            <li>
              <span data-header>
                Likes
              </span>
              <span data-count>
                ${t.likes}
                </span>
            </li>
            <li>
              <span data-header>
              Views
              </span>
              <span data-count>
              ${t.views}
              </span>
              </li>
              <li>
              <span data-header>
              Comments
              </span>
              <span data-count>
              ${t.comments}
              </span>
              </li>
              <li>
              <span data-header>
              Downloads
              </span>
              <span data-count>
                ${t.downloads}
              </span>
            </li>
          </ul>
        </li>`,""),i(this,g).refresh()}toggleLoadingMsg(){document.querySelector(`.${i(this,h)}`).classList.toggle("visually-hidden")}showErrorMsg(e="Sorry, there are no images matching your search query. Please, try again!"){w.show({class:"error-msg",message:e,messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",theme:"dark",color:"#EF4040",iconText:"Close",iconColor:"#FAFAFB",maxWidth:"432",zindex:999,close:!0,closeOnEscape:!0,displayMode:2,position:"topRight",timeout:5e3,animateInside:!1,drag:!1,progressBarColor:"#B51B1B"})}}h=new WeakMap,n=new WeakMap,g=new WeakMap;var l;class b{constructor(){c(this,l,void 0);d(this,l,{key:"13766037-6b94ce31e5d6d188a57cfe399",image_type:"photo",orientation:"horizontal",safesearch:"true"})}searchImg(e){return i(this,l).q=e,fetch(`https://pixabay.com/api/?${new URLSearchParams(i(this,l))}`).then(s=>{if(!s.ok)throw Error("Network response was is bad");return s.json()}).catch(s=>(console.error("There was a problem with the fetch operation: ",s),null))}}l=new WeakMap;const m=new L,M=new b,f=document.querySelector(".form-search");f.addEventListener("submit",r=>{r.preventDefault();const e=f.elements.search_string.value.trim();if(!e){m.showErrorMsg("Empty field!");return}m.toggleLoadingMsg(),M.searchImg(e).then(s=>{m.toggleLoadingMsg(),m.showGalery(s)})});
//# sourceMappingURL=commonHelpers.js.map
