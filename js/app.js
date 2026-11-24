/* Yumgreens — router por pestañas (#inicio, #menu, #ubicacion, #contacto; #nosotros baja a la sección en Inicio) */
(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const view=$('#view'),curtain=$('.curtain'),mod=$('#mod'),toast=$('#t'),C=window.YG||{};
const MASCOT='img/mascota/ensaladita-original.svg';
const POSE=n=>`img/mascota/ensaladita-${n}.svg`;
const fix=h=>h.replace(/src="(img\/[^"]+)"/g,(m,p)=>`src="${(window.__IMG&&__IMG[p])||p}"`);
const say=m=>{toast.textContent=m;toast.classList.add('on');setTimeout(()=>toast.classList.remove('on'),3000)};
const sp=a=>`<div class="sps">${a.map(([x,y,w,c,d])=>`<svg class="sp ${c}" style="left:${x}%;top:${y}%;width:${w}px;animation-delay:${d}s" viewBox="0 0 40 40"><path d="M20 0C22 12 28 18 40 20 28 22 22 28 20 40 18 28 12 22 0 20 12 18 18 12 20 0Z"/></svg>`).join('')}</div>`;
const mq=t=>`<div class="mq"><div>${t.map(s=>`<span>${s}</span><i>✶</i>`).join('').repeat(4)}</div></div>`;
const sign=(a,b)=>`<div class="sign">${a}<br><b>${b}</b></div>`;
const bub=(a,b)=>`<div class="sign say">${a}<br><b>${b}</b></div>`;
const mascot=(a,b,pose)=>pose?`<div class="mascot pz pz-${pose}">${a?bub(a,b):''}<img class="m" src="${POSE(pose)}" alt="La ensaladita de Yumgreens"></div>`:`<div class="mascot">${a?sign(a,b):''}<img class="m" src="${MASCOT}" alt="La ensaladita de Yumgreens"></div>`;
/* ---- Menú ---- */
function parse(d){if(!d)return'';const ps=d.split(/\.\s+/).map(s=>s.trim().replace(/\.$/,'')).filter(Boolean),f=ps[0];
 if(/^Bowl personalizado:/.test(f))return `<span class="lead">Bowl personalizado</span><div class="chips2">${[f.replace(/^[^:]+:\s*/,''),...ps.slice(1)].map(x=>`<span>${x}</span>`).join('')}</div>`;
 if(!ps.some(s=>s.includes(':')))return `<p class="note">${d}</p>`;
 const lead=f.includes(':')?'':f,rows=(lead?ps.slice(1):ps).filter(s=>s.includes(':'));
 return (lead?`<span class="lead">${lead}</span>`:'')+`<ul class="rows">${rows.map(r=>{const i=r.indexOf(':');return `<li><b>${r.slice(0,i)}</b><span>${r.slice(i+1).trim()}</span></li>`}).join('')}</ul>`}
const c2=(p,i)=>`<article class="c2 rv" style="--i:${i}">${p.tags.length?`<div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`:''}<span class="pr"><span>${p.price}<small>GTQ</small></span></span><div class="c2-ph${p.cat==='bebidas'?(/^hatsu/.test(p.img.split('/').pop())?' w hat':' w'):''}"><img decoding="async" src="${p.img}" alt="${p.name}"></div><h3>${p.name}</h3>${parse(p.desc)}<button class="btn go" data-order>Ordenar</button></article>`;
const BAND={bowls:'b-lime',salad:'b-dark',myo:'b-night',extras:'b-lime',bebidas:'b-dark'};
const BP={bowls:'img/ambiente/salsa.jpg',salad:'img/ambiente/bowl-estampado.jpg',myo:'img/ambiente/mesa.jpg',extras:'img/ambiente/bowl-feta.jpg',bebidas:'img/ambiente/latas-hielo.jpg'};
const wv='<svg class="wv" viewBox="0 0 1440 46" preserveAspectRatio="none"><path d="M0 46V20c90-26 210-26 300-4s210 28 300 6 210-28 300-6 210 28 300 6 150-18 240-24v48z"/></svg>';
const pcl=(a,b,l)=>`<div class="pcl"><img class="a" src="${a}" alt=""><img class="b" src="${b}" alt=""><span class="pl">${l}</span></div>`;
const promo=()=>`<div class="promo rv"><h3>Tú lo armas</h3><p>Elige proteína, base, toppings y salsa.</p>${mascot('','','cintura')}</div>`;
function bands(f){let i=0;return MENU_CATS.filter(c=>f==='all'||c[0]===f).map(([k,n])=>{const l=MENU.filter(p=>p.cat===k);return `<section class="band ${BAND[k]}"><span class="wm" style="--n:${n.length}">${n.toUpperCase()}</span>${sp([[3,8,24,'o',0],[95,14,30,'',.8],[90,92,20,'c',1.4]])}${sh(l.length+' productos',n,BP[k],'sh-'+k)}<div class="g2">${l.map(p=>c2(p,i++)).join('')}${k==='myo'?promo():''}</div></section>`}).join('')}
Views.menu=()=>`<section class="phead mhead"><span class="wm">MENÚ</span>${sp([[4,12,28,'',0],[48,8,18,'o',.8],[40,86,24,'c',1.3],[94,50,22,'',.4]])}
<div><span class="kicker">Menú real de Yumgreens</span><h1>Elige tu <span class="l">bowl</span></h1><p class="lead">Bowls de la casa, salad bowls, make ur own, acompañamientos y bebidas. Toca una categoría.</p>
<div class="qk">${MENU_CATS.map(c=>`<button data-f="${c[0]}">${c[1]}</button>`).join('')}</div></div>
<div class="fan"><svg class="doodle" style="left:30%;top:-6%;width:22%;stroke:var(--orange)" viewBox="0 0 80 30"><path d="M4 20q9-18 18 0t18 0 18 0 18 0"/></svg>
<button class="pola p1" data-f="bowls"><img src="img/ambiente/salsa.jpg" alt=""><b>Bowls</b></button>
<button class="pola p2" data-f="salad"><img src="img/ambiente/bowl-estampado.jpg" alt=""><b>Salad bowls</b></button>
<button class="pola p3" data-f="bebidas"><img src="img/ambiente/latas-hielo.jpg" alt=""><b>Bebidas</b></button>
<div class="tkt">Desde GTQ 80</div>${mascot('ELIGE','TU BOWL','senalar')}</div></section>
${wv.replace('class="wv"','class="wv in-mh"')}${mq(['Bowls','Salad bowls','Make ur own','Acompañamientos','Bebidas'])}
<div class="fbar" id="chips"><button class="on" data-f="all">Todos<small>${MENU.length}</small></button>${MENU_CATS.map(c=>`<button data-f="${c[0]}">${c[1]}<small>${MENU.filter(p=>p.cat===c[0]).length}</small></button>`).join('')}</div><div id="items">${bands('all')}</div>
<section class="band b-night mo">${sh('¿Ya elegiste?','Pide tu <em>bowl</em>','img/ambiente/letrero-negro.jpg','sh-mo')}<div class="ways rv">${WAYS.map(([k,n])=>wbtn(k,n)).join('')}</div></section>`;
/* ---- Ubicación y Contacto (enlaces reales desde js/config.js) ---- */
const ic=n=>(window.IC&&IC[n])||'',WAYS=[['whatsapp','WhatsApp'],['pedidosya','PedidosYa'],['ubereats','Uber Eats']];
const wbtn=(k,n)=>`<button class="way w-${k}" data-way="${k}">${ic(k)}<span>${n}</span></button>`;
const ext=(href,cls,inner)=>`<a class="${cls}" href="${href}" target="_blank" rel="noopener">${inner}</a>`;
const mapSvg=`<svg viewBox="0 0 400 340" preserveAspectRatio="xMidYMid slice"><rect width="400" height="340" fill="#62823F"/><g fill="none" stroke="#D6DC3A" stroke-linecap="round"><path d="M-10 90C90 70 150 130 250 110S360 60 420 80" stroke-width="14"/><path d="M60-10C80 90 40 200 90 350" stroke-width="10"/><path d="M-10 250C100 230 200 280 420 240" stroke-width="10"/><path d="M300-10C290 90 330 200 310 350" stroke-width="8"/></g><g fill="#41592a"><rect x="110" y="140" width="70" height="50" rx="10"/><rect x="200" y="150" width="60" height="70" rx="10"/><rect x="330" y="120" width="50" height="60" rx="10"/><rect x="120" y="270" width="80" height="40" rx="10"/></g></svg>`;
const pinSvg='<svg viewBox="0 0 60 80"><path d="M30 78C30 78 4 48 4 28a26 26 0 0 1 52 0c0 20-26 50-26 50z" fill="#FF6B35" stroke="#fff" stroke-width="5"/><circle cx="30" cy="28" r="10" fill="#fff"/></svg>';
const hours=()=>`<ul class="hours">${C.horarios.map(h=>`<li><b>${h[0]}</b><span>${h[1]}</span></li>`).join('')}</ul>`;
Views.ubicacion=()=>`<section class="phead h-loc"><span class="wm">AQUÍ</span>${sp([[5,14,26,'',0],[50,8,18,'o',1],[92,70,24,'c',.5]])}<div><span class="kicker">Ubicación y horarios</span><h1>Ven por tu <span class="l">bowl</span></h1><p class="lead">Encuéntranos en ${C.direccion} o pide a domicilio.</p></div>${pcl('img/ambiente/local-plantas.jpg','img/ambiente/poster-abierto.jpg','Plaza Nogales')}${mascot('ESTAMOS','AQUÍ','camina')}${wv}</section>
<section class="menu" style="padding-top:44px"><div class="two"><div style="display:grid;gap:24px;align-content:start"><div class="panel rv"><h3>Dirección</h3><p class="addr">${C.direccion}</p>${ext(C.waze,'btn wz',ic('waze')+'<span>Cómo llegar con Waze</span>')}</div><div class="panel rv"><h3>Horarios</h3>${hours()}</div><div class="panel rv"><h3>¿Prefieres que te lo llevemos?</h3><div class="mini">${WAYS.map(([k,n])=>wbtn(k,n)).join('')}</div></div></div>
<div class="map rv">${mapSvg}<div class="pin">${pinSvg}</div><div class="mapcap"><span>${C.direccion}</span>${ext(C.waze,'btn wz s',ic('waze')+'<span>Abrir en Waze</span>')}</div></div></div></section>`;
Views.contacto=()=>`<section class="phead h-con"><span class="wm">HOLA</span>${sp([[6,16,28,'',0],[55,10,18,'o',.7],[93,60,22,'c',1.2]])}<div><span class="kicker">Contacto</span><h1>Hablemos <span class="l">verde</span></h1><p class="lead">Pide por WhatsApp, PedidosYa o Uber Eats, y síguenos en redes.</p></div>${pcl('img/ambiente/poster-brunch.jpg','img/ambiente/lata.jpg','¡Escríbenos!')}${mascot('ORDENA','AQUÍ','saludo')}${wv}</section>
<section class="menu" style="padding-top:44px"><div class="ordcards">${WAYS.map(([n0,n],i)=>`<div class="ord w-${n0} rv${n0==='whatsapp'?' hot':''}" style="--i:${i}">${n0==='whatsapp'?'<span class="rec">Recomendado</span>':''}<span class="oi">${ic(n0)}</span><h3>${n}</h3><p>${n0==='whatsapp'?'Haz tu pedido directo, rápido y sin vueltas.':n0==='pedidosya'?'Pide a domicilio desde la app.':'Pide a domicilio desde la app.'}</p><button class="btn" data-way="${n0}">Pedir por ${n}</button></div>`).join('')}</div>
<div class="socs">${ext('https://instagram.com/'+C.instagram,'ig rv','<span class="kicker" style="background:var(--lime)">Instagram</span><b>@'+C.instagram+'</b><p>Novedades, promociones y mucho bowl.</p>')}${ext(C.tiktok,'ig rv tt','<span class="kicker" style="background:var(--orange);color:#fff">TikTok</span><b>@yumgreens_gt</b><p>Mira nuestros bowls en video.</p>')}</div>
<div class="visit rv"><span>Visítanos en ${C.direccion}</span>${ext(C.waze,'btn wz',ic('waze')+'<span>Cómo llegar con Waze</span>')}</div></section>`;
/* ---- Pedidos ---- */
let want='';
function openWay(k){const u=C[k];if(u)window.open(u,'_blank','noopener')}
/* ---- Footer, modal y accesos rápidos (todo desde config.js) ---- */
$('#mways').innerHTML=WAYS.map(([k,n])=>wbtn(k,n)).join('');
$('#nwa').innerHTML=ic('whatsapp');$('#fab').innerHTML=ic('whatsapp');$('#fab').href=C.whatsapp;
$('#foot').innerHTML=fix(`<div class="foot-in"><div class="fcol fbrand"><img class="logo" src="img/marca/logo-yumgreens-lima.png" alt="Yumgreens"><p>Bowls y ensaladas · Guatemala</p><div class="fsoc">${ext('https://instagram.com/'+C.instagram,'fi',ic('instagram')+'<span>Instagram</span>')}${ext(C.tiktok,'fi',ic('tiktok')+'<span>TikTok</span>')}</div></div>
<div class="fcol"><h4>Pide</h4>${WAYS.map(([k,n])=>ext(C[k],'fl',ic(k)+'<span>'+n+'</span>')).join('')}</div>
<div class="fcol"><h4>Visítanos</h4><p>${C.direccion}</p><p>${C.horarios[0][1]}</p>${ext(C.waze,'fl',ic('waze')+'<span>Cómo llegar con Waze</span>')}</div></div><div class="foot-b">© 2026 Yumgreens · Todos los derechos reservados</div>`);
/* ---- Router ---- */
const names=['inicio','menu','ubicacion','contacto'];let cur=null;
function reveal(){const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&(x.target.classList.add('in'),io.unobserve(x.target))),{threshold:.1});$$('.rv',view).forEach(e=>io.observe(e))}
function render(n){const v=Views[n];view.innerHTML=fix(typeof v==='function'?v():v);$$('#tabs [data-r]').forEach(b=>b.classList.toggle('on',b.dataset.r===n));window.scrollTo(0,0);reveal();document.title='Yumgreens · '+n[0].toUpperCase()+n.slice(1)}
function go(n,first){const toUs=n==='nosotros';if(toUs)n='inicio';if(!names.includes(n))n='inicio';
 const after=()=>{if(toUs){const e=$('#nosotros');e&&e.scrollIntoView({behavior:'smooth'})}};
 if(n===cur){after();return}
 const swap=()=>{cur=n;render(n);after()};
 if(first||matchMedia('(prefers-reduced-motion:reduce)').matches)return swap();
 curtain.classList.remove('run');void curtain.offsetWidth;curtain.classList.add('run');setTimeout(swap,420)}
window.addEventListener('hashchange',()=>{mod.classList.remove('on');go(location.hash.slice(1))});
document.addEventListener('click',e=>{
 const r=e.target.closest('[data-r]');if(r){e.preventDefault();$('#tabs').classList.remove('open');$('#bg').classList.remove('on');const n=r.dataset.r;if(location.hash.slice(1)===n){go(n);return}location.hash=n;return}
 const o=e.target.closest('[data-order]');if(o){const c=o.closest('.card,.c2');want=c?$('h3',c).textContent:'';$('#mt').textContent=want?'Ordenar: '+want:'¿Cómo quieres pedir?';mod.classList.add('on');return}
 const w=e.target.closest('[data-way]');if(w){mod.classList.remove('on');openWay(w.dataset.way);return}
 const f=e.target.closest('[data-f]');if(f){const k=f.dataset.f;$$('#chips button').forEach(b=>{const on=b.dataset.f===k;b.classList.toggle('on',on);if(on){const bar=b.parentElement;bar.scrollTo({left:b.offsetLeft-(bar.clientWidth-b.offsetWidth)/2,behavior:'smooth'})}});$('#items').innerHTML=fix(bands(k));reveal();const bar=$('#chips');if(bar)window.scrollTo({top:bar.offsetTop-($('.nav').offsetHeight)+2,behavior:'smooth'});return}
 if(e.target===mod||e.target.id==='x')mod.classList.remove('on')});
$('#bg').onclick=()=>{const o=$('#tabs').classList.toggle('open');$('#bg').setAttribute('aria-expanded',o);$('#bg').classList.toggle('on',o)};
/* Etapa 6: microinteracciones y movimiento */
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches,root=document.documentElement,prog=$('#prog');
if(fine)addEventListener('mousemove',e=>{view.style.setProperty('--mx',(e.clientX/innerWidth-.5).toFixed(3));view.style.setProperty('--my',(e.clientY/innerHeight-.5).toFixed(3))},{passive:true});
let tick=0;addEventListener('scroll',()=>{if(tick)return;tick=requestAnimationFrame(()=>{tick=0;const h=root.scrollHeight-innerHeight;root.style.setProperty('--sy',scrollY);prog.style.transform=`scaleX(${h>0?scrollY/h:0})`})},{passive:true});
view.addEventListener('click',e=>{const m=e.target.closest('.mascot');if(m){m.classList.remove('hop');void m.offsetWidth;m.classList.add('hop');setTimeout(()=>m.classList.remove('hop'),800)}});
const nh=()=>document.documentElement.style.setProperty('--nh',$('.nav').offsetHeight+'px');nh();addEventListener('resize',nh);addEventListener('load',nh);
go(location.hash.slice(1),true);
})();
