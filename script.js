const menuToggle=document.getElementById('menu-toggle');const nav=document.getElementById('nav-links');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';});
document.querySelectorAll('#nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>'; }));
const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('.dot')];let current=0,timer;
function showSlide(n){current=n;slides.forEach((s,i)=>s.classList.toggle('active',i===n));dots.forEach((d,i)=>d.classList.toggle('active',i===n));}
function startSlider(){clearInterval(timer);timer=setInterval(()=>showSlide((current+1)%slides.length),4500);}
dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);startSlider();}));startSlider();
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});revealItems.forEach(el=>observer.observe(el));}else{revealItems.forEach(el=>el.classList.add('visible'));}
document.getElementById('year').textContent=new Date().getFullYear();