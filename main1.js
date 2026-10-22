(function(){
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],T=(c,on)=>$$('.al').forEach(e=>e.classList.toggle(c,!!on));let cur='';
function go(){let h=location.hash.slice(1)||'home';$('#nv').classList.remove('o');
if(h=='contacts'){$('#contacts').scrollIntoView({behavior:'smooth'});return}
let s=h;if(!$('#p-'+s))s='home';
if(s!=cur){$$('.page').forEach(p=>p.classList.toggle('on',p.id=='p-'+s));cur=s;scrollTo(0,0)}T('hm',s=='home');
$$('.al nav a').forEach(a=>a.classList.toggle('act',a.getAttribute('href')=='#'+h))}
function ckSet(v){try{localStorage.setItem('ck',v)}catch(e){}$('#ckb').classList.remove('on');if(window.onCookies)onCookies(v)}
function ckReset(){try{localStorage.removeItem('ck')}catch(e){}$('#ckb').classList.add('on')}
function init(){
addEventListener('hashchange',go);go();addEventListener('scroll',()=>T('sc',scrollY>60));
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('vis')),{threshold:.12});$$('.rv').forEach(e=>io.observe(e));
$('#bg').onclick=()=>$('#nv').classList.toggle('o');
$('#fm').onsubmit=e=>{e.preventDefault();const f=e.target;location.href='mailto:alinausik@gmail.com?subject='+encodeURIComponent('Запись: '+f.n.value)+'&body='+encodeURIComponent(f.m.value+'\n'+f.e.value)};
setTimeout(()=>{$('#ld').classList.add('off');T('go',1)},2200);
let ck=null;try{ck=localStorage.getItem('ck')}catch(e){}
if(!ck)setTimeout(()=>$('#ckb').classList.add('on'),2800);else if(window.onCookies)onCookies(ck);
/* onCookies('all') — здесь подключать аналитику */
}
window.ckSet=ckSet;window.ckReset=ckReset;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
