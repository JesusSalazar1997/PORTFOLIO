function iniciarApp(){navegacionFija(),crearGaleria(),crearSegundaGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".navegacion-principal"),n=document.querySelector(".sobre-projects");window.addEventListener("scroll",(function(){n.getBoundingClientRect().top<70?e.classList.add("fijo"):e.classList.remove("fijo")}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".habilidades");for(let n=1;n<=4;n++){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/${n}.avif">   \n        <source srcset="build/img/${n}.webp">\n        <img loading="lazy" width="200" height="300" src="build/img/${n}.png" alt="IMAGE SKILLS">\n        `,e.appendChild(t)}}function crearSegundaGaleria(){const e=document.querySelector(".habilidades-segundas");for(let n=5;n<=7;n++){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/${n}.avif">   \n        <source srcset="build/img/${n}.webp">\n        <img  loading="lazy" width="200" height="300" src="build/img/${n}.png" alt="IMAGE SKILLS">\n        `,e.appendChild(t)}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()})),window.addEventListener("scroll",(function(){let e=document.querySelector(".mov");e.getBoundingClientRect().top<window.innerHeight/2&&(e.style.animation="movs 1s ease-out")}));
//# sourceMappingURL=app.js.map
