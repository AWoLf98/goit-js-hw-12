var m=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var a=(t,e,o)=>(m(t,e,"read from private field"),o?o.call(t):e.get(t)),g=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},p=(t,e,o,n)=>(m(t,e,"write to private field"),n?n.call(t,o):e.set(t,o),o);import{S as y,i as L,a as w}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();var c,d;class b{constructor(e=".gallery"){g(this,c,void 0);g(this,d,void 0);p(this,c,e),p(this,d,new y(`${a(this,c)} a`))}showGalery(e){const o=document.querySelector(a(this,c));if(o.innerHTML="",console.log(e),!e||!e.total){this.showErrorMsg();return}o.innerHTML+=e.hits.reduce((n,s)=>n+`<li>
            <a href="${s.largeImageURL}">
              <img src="${s.webformatURL}" alt="${s.tags}"/>
              </a>
            <ul class="img-description">
            <li>
              <span data-header>
                Likes
              </span>
              <span data-count>
                ${s.likes}
                </span>
            </li>
            <li>
              <span data-header>
              Views
              </span>
              <span data-count>
              ${s.views}
              </span>
              </li>
              <li>
              <span data-header>
              Comments
              </span>
              <span data-count>
              ${s.comments}
              </span>
              </li>
              <li>
              <span data-header>
              Downloads
              </span>
              <span data-count>
                ${s.downloads}
              </span>
            </li>
          </ul>
        </li>`,""),a(this,d).refresh()}toggleLoadingMsg(e){document.querySelector(e).classList.toggle("visually-hidden")}showErrorMsg(e="Sorry, there are no images matching your search query. Please, try again!"){L.show({class:"error-msg",message:e,messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",theme:"dark",color:"#EF4040",iconText:"Close",iconColor:"#FAFAFB",maxWidth:"432",zindex:999,close:!0,closeOnEscape:!0,displayMode:2,position:"topRight",timeout:5e3,animateInside:!1,drag:!1,progressBarColor:"#B51B1B"})}}c=new WeakMap,d=new WeakMap;var i;class I{constructor(){g(this,i,void 0);p(this,i,{key:"13766037-6b94ce31e5d6d188a57cfe399",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:0})}async searchImg(e=""){return e&&(a(this,i).q=e,a(this,i).page=0),a(this,i).page+=1,console.log(a(this,i).page),await w.get("https://pixabay.com/api/",{params:a(this,i)})}}i=new WeakMap;const l=new b,f=new I,u=document.querySelector(".form-search");u.addEventListener("submit",t=>{t.preventDefault();const e=u.elements.search_string.value.trim();if(!e){l.showErrorMsg("Empty field!");return}l.toggleLoadingMsg(".loader-section"),f.searchImg(e).then(o=>{l.toggleLoadingMsg(".loader-section"),l.toggleLoadingMsg('button[type="button"]'),l.showGalery(o.data)})});const M=document.querySelector('button[type="button"]');M.addEventListener("click",()=>f.searchImg().then(t=>{l.showGalery(t.data)}));
//# sourceMappingURL=commonHelpers.js.map
