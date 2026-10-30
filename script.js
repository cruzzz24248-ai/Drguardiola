(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const menu=$('#menu'),burger=$('#burger');
const setMenu=o=>{menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')};
burger.addEventListener('click',()=>setMenu(!menu.classList.contains('open')));
$$('#menu a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
document.addEventListener('click',e=>{if(!e.target.closest('header'))setMenu(false)});
$('#y').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}}),{threshold:.1});
  $$('.reveal').forEach(el=>io.observe(el));
  const links=$$('#menu a'),map=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
  const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.remove('on'));const a=map.get(e.target.id);a&&a.classList.add('on')}}),{rootMargin:'-45% 0px -50% 0px'});
  [...map.keys()].forEach(id=>{const s=document.getElementById(id);s&&spy.observe(s)});
}else $$('.reveal').forEach(el=>el.classList.add('v'));
const bar=$('#bar'),hd=$('header');let tick=false;
function onScroll(){tick=false;const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%';hd.classList.toggle('s',scrollY>20)}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
$$('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)$$('details').forEach(o=>o!==d&&(o.open=false))}));
})();
