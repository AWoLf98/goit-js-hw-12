var u=(o,e,s)=>{if(!e.has(o))throw TypeError("Cannot "+s)};var i=(o,e,s)=>(u(o,e,"read from private field"),s?s.call(o):e.get(o)),c=(o,e,s)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,s)},d=(o,e,s,a)=>(u(o,e,"write to private field"),a?a.call(o,s):e.set(o,s),s);import{S as L,i as w,a as b}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();var m,l,p;class I{constructor(e="loader-section",s=".gallery"){c(this,m,void 0);c(this,l,void 0);c(this,p,void 0);d(this,m,e),d(this,l,s),d(this,p,new L(`${i(this,l)} a`))}showGalery(e){const s=document.querySelector(i(this,l));if(s.innerHTML="",!e||!e.total){this.showErrorMsg();return}s.innerHTML+=e.hits.reduce((a,t)=>a+`<li>
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
        </li>`,"")+'<li><button type="button">Load more</button></li>'}toggleLoadingMsg(){document.querySelector(`.${i(this,m)}`).classList.toggle("visually-hidden")}showErrorMsg(e="Sorry, there are no images matching your search query. Please, try again!"){w.show({class:"error-msg",message:e,messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",theme:"dark",color:"#EF4040",iconText:"Close",iconColor:"#FAFAFB",maxWidth:"432",zindex:999,close:!0,closeOnEscape:!0,displayMode:2,position:"topRight",timeout:5e3,animateInside:!1,drag:!1,progressBarColor:"#B51B1B"})}}m=new WeakMap,l=new WeakMap,p=new WeakMap;var n;class M{constructor(){c(this,n,void 0);d(this,n,{key:"13766037-6b94ce31e5d6d188a57cfe399",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:14,page:0})}async searchImg(e=""){return e&&(i(this,n).q=e),i(this,n).page+=1,await b.get("https://pixabay.com/api/",{params:i(this,n)})}}n=new WeakMap;const g=new I,f=new M,y=document.querySelector(".form-search");y.addEventListener("submit",o=>{o.preventDefault();const e=y.elements.search_string.value.trim();if(!e){g.showErrorMsg("Empty field!");return}g.toggleLoadingMsg(),f.searchImg(e).then(s=>{g.toggleLoadingMsg(),g.showGalery(s.data),document.querySelector('li button[type="button"]').addEventListener("click",()=>f.searchImg().then(t=>{g.showGalery(t.data)}))})});
//# sourceMappingURL=commonHelpers.js.map
