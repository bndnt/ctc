(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelectorAll('a[href*="#"]');for(let r of n)r.addEventListener("click",function(c){c.preventDefault();const s=r.getAttribute("href").substr(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})});document.querySelectorAll(".list").forEach(r=>{r.querySelectorAll('input[type="radio"]').forEach(c=>{c.addEventListener("change",s=>{if(r.querySelectorAll(".item").forEach(o=>{o.classList.remove("active");const e=o.querySelector(".radio__sstyle");e&&(e.textContent="голосовать")}),s.target.checked){const o=s.target.closest(".item");o.classList.add("active");const e=o.querySelector(".radio__sstyle");e&&(e.textContent="Твой выбор")}})})});document.querySelector("#mobile_menu_toggle").addEventListener("click",function(r){r.preventDefault(),this.classList.toggle("active"),document.querySelector(".top__hamburger").classList.toggle("active"),document.body.classList.toggle("hidden")});
//# sourceMappingURL=commonHelpers.js.map
