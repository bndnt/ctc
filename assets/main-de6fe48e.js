(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.querySelector("#mobile_menu_toggle").addEventListener("click",function(r){r.preventDefault(),this.classList.toggle("active"),document.querySelector(".mobile__menu").classList.toggle("active"),document.querySelector(".top__hamburger").classList.toggle("active"),document.body.classList.toggle("hidden")});document.querySelectorAll(".list").forEach(r=>{r.querySelectorAll('input[type="radio"]').forEach(s=>{s.addEventListener("change",c=>{if(r.querySelectorAll(".item").forEach(o=>{o.classList.remove("active");const e=o.querySelector(".radio__sstyle");e&&(e.textContent="голосовать")}),c.target.checked){const o=c.target.closest(".item");o.classList.add("active");const e=o.querySelector(".radio__sstyle");e&&(e.textContent="Твой выбор")}})})});document.querySelectorAll('a[href^="#"').forEach(r=>{r.addEventListener("click",function(s){s.preventDefault();let c=this.getAttribute("href").substring(1);const o=document.getElementById(c),e=document.querySelector(".js-hero__btn").offsetHeight,i=o.getBoundingClientRect().top-e;window.scrollBy({top:i,behavior:"smooth"})})});
//# sourceMappingURL=main-de6fe48e.js.map
