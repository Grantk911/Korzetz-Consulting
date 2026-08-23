document.getElementById('year').textContent = new Date().getFullYear();
const menu=document.querySelector('.menu-button'),navLinks=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));