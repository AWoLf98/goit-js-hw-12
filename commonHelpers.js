var w=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var a=(s,e,t)=>(w(s,e,"read from private field"),t?t.call(s):e.get(s)),d=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},h=(s,e,t,i)=>(w(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t);import{S as M,i as S,a as v}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var m,y,f,L,l;class B{constructor(e=".gallery",t=".loader-section",i='button[type="button"]'){d(this,m,void 0);d(this,y,void 0);d(this,f,void 0);d(this,L,void 0);d(this,l,void 0);h(this,f,t),h(this,y,new M(`${h(this,m,e)} a`)),h(this,L,i),h(this,l,"visually-hidden")}showGalery(e,t,i){const r=document.querySelector(a(this,m)),o=document.querySelector(a(this,L));if(t===1&&(r.innerHTML=""),!e||!e.total){this.showErrorMsg(),o.classList.add(a(this,l));return}r.innerHTML+=e.hits.reduce((u,g)=>u+`<li>
              <a href="${g.largeImageURL}">
                <img src="${g.webformatURL}" alt="${g.tags}"/>
                </a>
              <ul class="img-description">
              <li>
                <span data-header>
                  Likes
                </span>
                <span data-count>
                  ${g.likes}
                  </span>
              </li>
              <li>
                <span data-header>
                Views
                </span>
                <span data-count>
                ${g.views}
                </span>
                </li>
                <li>
                <span data-header>
                Comments
                </span>
                <span data-count>
                ${g.comments}
                </span>
                </li>
                <li>
                <span data-header>
                Downloads
                </span>
                <span data-count>
                  ${g.downloads}
                </span>
              </li>
            </ul>
          </li>`,""),o.classList.remove(a(this,l)),a(this,y).refresh(),e.total-(t-1)*i<=i&&(this.showErrorMsg("We're sorry, but you've reached the end of search results."),o.classList.add(a(this,l)))}scrollGallery(){const t=document.querySelector("li>a>img").getBoundingClientRect();scrollBy({top:t.height*2,behavior:"smooth"})}toggleLoadingMsg(){document.querySelector(a(this,f)).classList.toggle(a(this,l))}showErrorMsg(e="Sorry, there are no images matching your search query. Please, try again!"){S.show({class:"error-msg",message:e,messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",theme:"dark",color:"#EF4040",iconText:"Close",iconColor:"#FAFAFB",maxWidth:"432",zindex:999,close:!0,closeOnEscape:!0,displayMode:2,position:"topRight",timeout:5e3,animateInside:!1,drag:!1,progressBarColor:"#B51B1B"})}}m=new WeakMap,y=new WeakMap,f=new WeakMap,L=new WeakMap,l=new WeakMap;var n;class E{constructor(){d(this,n,void 0);h(this,n,{key:"13766037-6b94ce31e5d6d188a57cfe399",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:0})}get page(){return a(this,n).page}get per_page(){return a(this,n).per_page}async searchImg(e=""){return e&&(a(this,n).q=e,a(this,n).page=0),a(this,n).page+=1,await v.get("https://pixabay.com/api/",{params:a(this,n)})}}n=new WeakMap;const c=new B,p=new E,b=document.querySelector(".form-search");b.addEventListener("submit",s=>{s.preventDefault();const e=b.elements.search_string.value.trim();if(!e){c.showErrorMsg("Empty field!");return}c.toggleLoadingMsg(),p.searchImg(e).then(t=>{c.toggleLoadingMsg(),c.showGalery(t.data,p.page,p.per_page)})});const I=document.querySelector('button[type="button"]');I.addEventListener("click",x);function x(){c.toggleLoadingMsg(),p.searchImg().then(s=>{c.toggleLoadingMsg(),c.showGalery(s.data,p.page,p.per_page),c.scrollGallery()})}
//# sourceMappingURL=commonHelpers.js.map
