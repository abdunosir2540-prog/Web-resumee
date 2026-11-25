const initial = {
  name: "",
  role: "AI dasturlash mutaxassisi",
  bio: "Sun’iy intellekt yordamida ma’lumotlarni tahlil qilish, matn bilan ishlash va takroriy jarayonlarni avtomatlashtirishga qiziqaman.",
  skills: "Python, Machine Learning, LLM, RAG, FastAPI, Git",
  email: "",
  telegram: "",
  theme: "lime",
  projects: [],
  certs: [],
  notes: []
};

const page = `<!doctype html>
<html lang="uz"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI Portfolio</title><meta name="description" content="AI dasturlash bo‘yicha rezyume, GitHub loyihalari va sertifikatlar.">
<style>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
*{box-sizing:border-box}
html{scroll-behavior:smooth}body{--bg:#101210;--surface:#181b17;--text:#f3f5ed;--muted:#aab2a2;--line:#363d33;--accent:#d9fa76;--ink:#20290d;--art:#222b15;--display:Geist,system-ui,sans-serif;margin:0;background:var(--bg);color:var(--text);font:16px/1.55 Geist,system-ui,sans-serif}
body[data-theme="blue"]{--bg:#0c1529;--surface:#14213a;--text:#edf4ff;--muted:#afbed7;--line:#354561;--accent:#a7ceff;--ink:#102644;--art:#1c3052}
body[data-theme="paper"]{--bg:#f5f6f2;--surface:#fff;--text:#1c241f;--muted:#4c5c53;--line:#c9d2ca;--accent:#245d42;--ink:#fff;--art:#d6e9dc;--display:Georgia,serif}
body[data-theme="violet"]{--bg:#1b1225;--surface:#261b33;--text:#fbf3ff;--muted:#cdbbd6;--line:#503d5c;--accent:#edb7ff;--ink:#351641;--art:#39244c}
body[data-theme="amber"]{--bg:#201711;--surface:#2c2118;--text:#fff6e8;--muted:#cbbbac;--line:#514237;--accent:#ffc07b;--ink:#3b240e;--art:#42301c;--display:Georgia,serif}
a{color:inherit;text-decoration:none}a:hover{color:var(--accent)}button,input,select,textarea{font:inherit}button,select{cursor:pointer}button:focus-visible,a:focus-visible,select:focus-visible,input:focus-visible,textarea:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
.wrap{width:min(1240px,calc(100% - 72px));margin:auto}.top{border-bottom:1px solid var(--line)}header{min-height:80px;display:flex;align-items:center;gap:25px;justify-content:space-between}.brand{font-weight:800;display:flex;align-items:center;gap:11px;white-space:nowrap}.logo{display:grid;place-items:center;width:34px;height:34px;background:var(--accent);color:var(--ink);border-radius:8px;font:600 16px 'IBM Plex Mono',monospace}nav,.tools,.actions{display:flex;align-items:center;gap:20px;flex-wrap:wrap}nav{font-size:14px;color:var(--muted)}.tools,.actions{gap:10px}.btn,select{padding:10px 15px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--text);display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:600;font-size:14px}.btn:hover,select:hover{border-color:var(--accent);color:var(--accent)}.primary,.primary:hover{background:var(--accent);color:var(--ink);border-color:var(--accent)}[hidden]{display:none!important}
.hero{display:grid;grid-template-columns:1.2fr 1fr;gap:55px;align-items:center;padding:65px 0 55px}.eyebrow,.mono{font:500 13px 'IBM Plex Mono',monospace;letter-spacing:.045em}.eyebrow{color:var(--accent);display:flex;gap:10px;align-items:center}.eyebrow::before{content:'';width:24px;border-top:1px solid}h1,h2{font-family:var(--display);letter-spacing:-.05em;line-height:1.04}h1{font-size:clamp(46px,6.2vw,87px);margin:18px 0 20px;overflow-wrap:anywhere}h2{font-size:clamp(29px,4vw,47px);margin:8px 0 0}h3,p{margin:0}h3{font-size:21px;overflow-wrap:anywhere}.role{font-weight:700;color:var(--accent);margin-bottom:10px}.bio{color:var(--muted);max-width:570px;font-size:18px;white-space:pre-wrap;overflow-wrap:anywhere}.actions{margin-top:24px}
.art{position:relative;min-height:360px;overflow:hidden;border:1px solid var(--line);border-radius:18px;background:radial-gradient(circle at 50% 47%,color-mix(in srgb,var(--accent) 13%,transparent),transparent 26%),radial-gradient(ellipse at 58% 45%,var(--art),transparent 74%),var(--surface);display:grid;place-items:center;perspective:900px;isolation:isolate}.art::before{content:'';position:absolute;inset:-30%;opacity:.3;background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:27px 27px;mask-image:radial-gradient(ellipse,#000 20%,transparent 70%);animation:grid-drift 18s linear infinite}.art::after{content:'';position:absolute;width:70%;height:28%;bottom:-12%;border-radius:50%;background:color-mix(in srgb,var(--accent) 18%,transparent);filter:blur(34px);animation:ground-glow 4s ease-in-out infinite}.ai-system{position:relative;width:272px;aspect-ratio:1;display:grid;place-items:center;transform-style:preserve-3d;animation:system-float 7s ease-in-out infinite;z-index:2}.ai-aura{position:absolute;inset:16%;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--accent) 24%,transparent),transparent 66%);filter:blur(18px);animation:aura-pulse 3.8s ease-in-out infinite}.ai-core{position:relative;width:92px;aspect-ratio:1;border-radius:28px;display:grid;place-items:center;color:var(--ink);background:linear-gradient(135deg,#fff,var(--accent) 46%,color-mix(in srgb,var(--accent) 55%,#000));box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 72%,#fff),0 0 25px color-mix(in srgb,var(--accent) 60%,transparent),0 0 70px color-mix(in srgb,var(--accent) 30%,transparent);transform:translateZ(48px) rotate(-3deg);animation:core-pulse 3.2s ease-in-out infinite;z-index:6}.ai-core::before{content:'';position:absolute;inset:7px;border:1px solid color-mix(in srgb,var(--ink) 25%,transparent);border-radius:21px}.ai-core::after{content:'';position:absolute;inset:-13px;border:1px dashed color-mix(in srgb,var(--accent) 58%,transparent);border-radius:35px;animation:spin-flat 9s linear infinite}.ai-core b{font:800 37px 'IBM Plex Mono',monospace;letter-spacing:-.09em;transform:translateX(-2px);text-shadow:0 1px 0 #fff8}.orbit{position:absolute;inset:var(--inset);border:1px solid color-mix(in srgb,var(--accent) 72%,transparent);border-radius:50%;transform-style:preserve-3d;box-shadow:inset 0 0 13px color-mix(in srgb,var(--accent) 9%,transparent),0 0 12px color-mix(in srgb,var(--accent) 8%,transparent)}.orbit::before,.orbit::after{content:'';position:absolute;width:9px;aspect-ratio:1;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent),0 0 18px var(--accent)}.orbit::before{left:7%;top:23%}.orbit::after{right:12%;bottom:13%;width:5px}.orbit-one{--inset:8%;animation:orbit-one 9s linear infinite}.orbit-two{--inset:17%;border-style:dashed;animation:orbit-two 7s linear infinite reverse}.orbit-three{--inset:27%;animation:orbit-three 5.5s linear infinite}.orbit-four{--inset:3%;border-color:color-mix(in srgb,var(--accent) 36%,transparent);animation:orbit-four 13s linear infinite}.particle{position:absolute;width:5px;aspect-ratio:1;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent);left:50%;top:50%;transform:rotate(var(--angle)) translateX(var(--distance));animation:particle-pulse var(--speed) ease-in-out infinite alternate}.data-arc{position:absolute;inset:34%;border-radius:50%;border:2px solid transparent;border-top-color:#fff;border-left-color:color-mix(in srgb,var(--accent) 62%,transparent);filter:drop-shadow(0 0 7px var(--accent));animation:spin-flat 2.8s linear infinite;z-index:5}.art-label{position:absolute;color:var(--muted);left:18px;bottom:15px;z-index:4}.art-status{position:absolute;right:18px;top:15px;color:var(--accent);z-index:4}.art-status::before{content:'';display:inline-block;width:6px;height:6px;margin-right:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 9px var(--accent);animation:status-blink 1.8s ease-in-out infinite}
.stack{border-block:1px solid var(--line);padding:18px 0;display:flex;align-items:center;gap:22px;flex-wrap:wrap}.stack .mono{color:var(--muted)}.chips{display:flex;gap:8px;flex-wrap:wrap}.chip{padding:4px 11px;font:500 13px/1.55 'IBM Plex Mono',monospace;border:1px solid var(--line);background:var(--surface);border-radius:6px;overflow-wrap:anywhere}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:30px;padding:42px 0}section{scroll-margin-top:18px}.section-head{display:flex;justify-content:space-between;gap:10px;align-items:end;margin-bottom:15px}.section-head .mono{color:var(--accent)}.empty,.entry{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:20px;overflow-wrap:anywhere}.empty{min-height:120px;display:flex;align-items:center;gap:14px;color:var(--muted)}.symbol{display:grid;place-items:center;min-width:38px;height:38px;border:1px solid var(--line);border-radius:8px;color:var(--accent);font-family:monospace}.list{display:grid;gap:10px}.entry p{color:var(--muted);white-space:pre-wrap;margin:5px 0 12px}.entry a{color:var(--accent)}.entry .actions{margin-top:10px}.entry{animation:entry-rise .6s both;animation-delay:var(--entry-delay,0ms)}.wide{grid-column:1/-1}footer{border-top:1px solid var(--line);padding:23px 0;color:var(--muted);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.motion-ready .reveal{opacity:0;transform:translateY(34px) scale(.985);transition:opacity .75s cubic-bezier(.2,.75,.2,1),transform .75s cubic-bezier(.2,.75,.2,1)}.motion-ready .reveal.is-visible{opacity:1;transform:none}.motion-ready .reveal:nth-child(2){transition-delay:90ms}.motion-ready .reveal:nth-child(3){transition-delay:160ms}
dialog{background:var(--surface);color:var(--text);border:1px solid var(--line);border-radius:14px;width:min(540px,calc(100% - 28px));max-height:88vh;padding:22px}dialog::backdrop{background:#0009}form{display:grid;gap:12px}.field{display:grid;gap:5px;font-size:14px;font-weight:600}.field input,.field textarea{width:100%;min-width:0;padding:8px 10px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--text)}textarea{resize:vertical;min-height:90px}.help,#error{color:var(--muted);font-size:14px}#error{color:var(--text)}.status{min-height:1.6em;color:var(--muted)}
@media(max-width:950px){header{flex-wrap:wrap;padding:14px 0;gap:10px}nav{order:3;width:100%}.hero{gap:25px}.wrap{width:calc(100% - 42px)}}
@media(max-width:710px){.hero,.grid{grid-template-columns:1fr}.hero{padding:38px 0 30px}.grid{padding:30px 0}.art{min-height:280px}.ai-system{width:210px}.wide{grid-column:auto}.wrap{width:calc(100% - 30px)}nav{gap:12px}.section-head{align-items:start}.tools .btn{padding:8px}.stack{gap:10px}}
@keyframes ai-float{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(-5px) rotate(5deg)}}@keyframes system-float{0%,100%{transform:translateY(5px) rotateZ(-3deg)}50%{transform:translateY(-15px) rotateZ(4deg)}}@keyframes orbit-one{to{transform:rotateZ(360deg) rotateX(67deg) rotateY(20deg)}}@keyframes orbit-two{to{transform:rotateZ(360deg) rotateY(71deg) rotateX(26deg)}}@keyframes orbit-three{to{transform:rotateZ(-360deg) rotateX(48deg) rotateY(62deg)}}@keyframes orbit-four{to{transform:rotateZ(360deg) rotateX(78deg) rotateY(-38deg)}}@keyframes spin-flat{to{transform:rotate(360deg)}}@keyframes core-pulse{0%,100%{transform:translateZ(48px) rotate(-3deg) scale(1)}50%{transform:translateZ(65px) rotate(3deg) scale(1.07)}}@keyframes aura-pulse{0%,100%{transform:scale(.86);opacity:.6}50%{transform:scale(1.25);opacity:1}}@keyframes particle-pulse{to{opacity:.22;transform:rotate(var(--angle)) translateX(calc(var(--distance) - 17px)) scale(.55)}}@keyframes grid-drift{to{transform:translate3d(27px,27px,0)}}@keyframes ground-glow{50%{transform:scale(1.14);opacity:.65}}@keyframes status-blink{50%{opacity:.25}}@keyframes entry-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.logo{position:relative;animation:ai-float 3.6s ease-in-out infinite;box-shadow:0 0 0 0 color-mix(in srgb,var(--accent) 50%,transparent);transition:transform .25s ease,box-shadow .25s ease}.brand:hover .logo{transform:rotate(12deg) scale(1.1);box-shadow:0 0 22px color-mix(in srgb,var(--accent) 48%,transparent)}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.logo,.ai-system,.ai-core,.ai-core::after,.orbit,.data-arc,.particle,.art::before,.art::after,.art-status::before,.entry{animation:none!important}.motion-ready .reveal{opacity:1;transform:none;transition:none}}
.admin-only{display:none!important}.admin .admin-only:not([hidden]){display:revert!important}
.admin .visitor-only{display:none!important}.admin .admin-heading{padding:35px 0 22px}
.admin .admin-controls:not([hidden]){display:flex!important;gap:10px;flex-wrap:wrap}
.admin .grid{padding-top:25px}.contact{margin-bottom:32px}.contact .actions{margin-top:15px}

@media print{body{--bg:#fff!important;--surface:#fff!important;--text:#111!important;--muted:#333!important;--accent:#222!important;--line:#aaa!important}.top,.art,.actions,button,.status{display:none!important}.wrap{width:100%}.hero,.grid{display:block;padding:12px 0}.grid section{margin-bottom:18px}.entry{break-inside:avoid}}
</style>
<div class="top"><header class="wrap">
<a class="brand" href="#haqimda"><span class="logo" aria-hidden="true">AI</span> Portfolio</a>
<nav class="visitor-only" aria-label="Sahifa bo‘limlari"><a href="#haqimda">Haqimda</a><a href="#loyihalar">Loyihalar</a><a href="#sertifikatlar">Sertifikatlar</a><a href="#yangiliklar">Yangiliklar</a><a href="#aloqa">Aloqa</a></nav>
<div class="tools"><a class="btn visitor-only" id="admin-link" href="/admin" hidden>Admin panel</a><a class="btn admin-only" href="/">Saytni ko‘rish</a></div>
</header></div>
<main class="wrap">
<section class="admin-only admin-heading"><p class="eyebrow">PORTFOLIO BOSHQARUVI</p><h1>Admin panel</h1><div class="admin-only admin-controls"><button class="btn primary" id="edit">Profilni tahrirlash</button><button class="btn" id="design">Dizayn</button><button class="btn" id="edit-contact">Aloqa</button><a class="btn" href="/admin/source.zip" download>Kodni yuklash</a><button class="btn" id="export">HTML nusxani yuklash</button></div><p class="status" id="admin-status" role="status"></p></section>
<section class="hero visitor-only" id="haqimda">
<div><p class="eyebrow">SHAXSIY REZYUME</p><h1 id="name"></h1><p id="role" class="role"></p><p id="bio" class="bio"></p><div class="actions"><a class="btn primary" href="#loyihalar">Loyihalarni ko‘rish</a><a class="btn" href="#aloqa">Bog‘lanish</a><button type="button" class="btn" id="print">PDF rezyume</button></div></div>
<div class="art" aria-hidden="true"><span class="art-status mono">NEURAL SYSTEM ONLINE</span><div class="ai-system"><div class="ai-aura"></div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div><div class="orbit orbit-four"></div><i class="particle" style="--angle:18deg;--distance:126px;--speed:2.4s"></i><i class="particle" style="--angle:74deg;--distance:112px;--speed:3.1s"></i><i class="particle" style="--angle:147deg;--distance:132px;--speed:2.7s"></i><i class="particle" style="--angle:219deg;--distance:118px;--speed:3.6s"></i><i class="particle" style="--angle:301deg;--distance:128px;--speed:2.9s"></i><div class="data-arc"></div><div class="ai-core"><b>AI</b></div></div><span class="art-label mono">APPLIED AI / PORTFOLIO</span></div>
</section>
<section class="stack visitor-only" aria-labelledby="stack-label"><span class="mono" id="stack-label">TEXNOLOGIYALAR</span><div class="chips" id="skills"></div></section>
<div class="grid">
<section id="loyihalar"><div class="section-head"><div><div class="mono">GITHUB</div><h2>Loyihalar</h2></div><button class="btn add admin-only" data-kind="projects" hidden>+ Havola</button></div><div class="list" id="projects"></div></section>
<section id="sertifikatlar"><div class="section-head"><div><div class="mono">MALAKA</div><h2>Sertifikatlar</h2></div><button class="btn add admin-only" data-kind="certs" hidden>+ Yuklash</button></div><div class="list" id="certs"></div></section>
<section id="yangiliklar" class="wide"><div class="section-head"><div><div class="mono">O‘RGANISH VA TAJRIBA</div><h2>Yangiliklar</h2></div><button class="btn add admin-only" data-kind="notes" hidden>+ Yozuv</button></div><div class="list" id="notes"></div></section>
</div>
<section class="contact visitor-only" id="aloqa"><div class="section-head"><div><div class="mono">BOG‘LANISH</div><h2>Aloqa</h2></div></div><p id="contact-empty" class="empty" hidden>Aloqa ma’lumotlari hali qo‘shilmagan.</p><div class="actions"><a id="telegram" class="btn" target="_blank" rel="noopener noreferrer" hidden>Telegram</a><a id="email" class="btn" target="_blank" rel="noopener noreferrer" hidden>Gmail</a></div></section>
<footer class="visitor-only"><span id="foot">AI Portfolio</span><a href="#haqimda">Sahifa boshiga</a></footer>
<p id="status" class="status" role="status"></p>
</main>
<dialog id="dialog" aria-labelledby="dialog-title"><form id="form"><h3 id="dialog-title"></h3><div id="fields" class="list"></div><p id="error" role="alert" hidden></p><div class="tools"><button class="btn primary" id="save">Saqlash</button><button class="btn" type="button" id="cancel">Bekor qilish</button></div></form></dialog>
<script>
const $ = id => document.getElementById(id);
const snapshot = window.PORTFOLIO_SNAPSHOT;
const adminMode = !snapshot && location.pathname === '/admin';
const themes = {lime:'Grafit',blue:'Kobalt',paper:'Oq sahifa',violet:'Binafsha',amber:'Qahrabo'};
function status(message) { $(adminMode?'admin-status':'status').textContent=message; }
let data, revision, canEdit;
const kinds = { projects:['Loyiha','GitHub loyihalari hali qo‘shilmagan.','{ }'], certs:['Sertifikat','Sertifikatlar hali yuklanmagan.','✓'], notes:['Yangilik','Yangi o‘rgangan mavzular va tajribalar uchun yozuvlar.','≡'] };
function element(tag,value,cls) {
  const item=document.createElement(tag);
  if(value) item.textContent=value;
  if(cls) item.className=cls;
  return item;
}
function button(label,run) {
  const item=element('button',label,'btn');
  item.type='button'; item.onclick=run; return item;
}
function applyTheme(value) { document.body.dataset.theme=value; }
function initMotion() {
  const items=document.querySelectorAll('.hero,.stack,.grid > section,.contact,.admin-heading');
  items.forEach(item=>item.classList.add('reveal'));
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(item=>item.classList.add('is-visible'));
    return;
  }
  document.body.classList.add('motion-ready');
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -35px'});
  items.forEach(item=>observer.observe(item));
}
function render() {
  $('name').textContent=data.name || data.role;
  $('role').textContent=data.name ? data.role : '';
  $('bio').textContent=data.bio;
  $('foot').textContent=data.name || 'AI Portfolio';
  $('skills').replaceChildren(...data.skills.split(',').map(x=>x.trim()).filter(Boolean).map(x=>element('span',x,'chip')));
  $('email').hidden=!data.email;
  $('email').href='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(data.email);
  $('telegram').hidden=!data.telegram;
  if(data.telegram) $('telegram').href='https://t.me/'+data.telegram;
  $('contact-empty').hidden=Boolean(data.email || data.telegram);
  $('admin-link').hidden=!canEdit;
  document.querySelectorAll('.add').forEach(x=>x.hidden=!(adminMode && canEdit));
  for(const [kind,labels] of Object.entries(kinds)) {
    const list=$(kind);
    list.replaceChildren();
    if(!data[kind].length) {
      const empty=element('div','','empty');
      const symbol=element('span',labels[2],'symbol');
      symbol.setAttribute('aria-hidden','true');
      empty.append(symbol,element('span',labels[1]));
      list.append(empty);
    }
    data[kind].forEach((row,index)=>{
      const entry=element('article','','entry');
      entry.style.setProperty('--entry-delay',Math.min(index,6)*70+'ms');
      entry.append(element('h3',row.title));
      if(row.description) entry.append(element('p',row.description));
      if(kind!=='notes') {
        const link=element('a',kind==='certs'?'Faylni yuklab olish':'Loyihani ochish');
        link.href=kind==='certs'?row.file:row.url;
        if(kind==='certs') link.download=row.filename;
        else {link.target='_blank';link.rel='noopener noreferrer';}
        entry.append(link);
      }
      if(adminMode && canEdit) {
        const actions=element('div','','actions admin-only admin-controls');
        actions.append(button('Tahrirlash',()=>openEditor(kind,index)),button('O‘chirish',async()=>{
          if(!confirm('“'+row.title+'” o‘chirilsinmi?')) return;
          const next=structuredClone(data);
          next[kind].splice(index,1);
          try { await persist(next); } catch(err) { status(err.message); }
        }));
        entry.append(actions);
      }
      list.append(entry);
    });
  }
}
async function persist(next) {
  const res=await fetch('/api/portfolio',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:next,revision})});
  if(res.status===409) throw Error('Ma’lumot boshqa oynada yangilangan. Sahifani qayta oching.');
  if(!res.ok) throw Error('Saqlash amalga oshmadi. Fayl hajmini yoki internet aloqasini tekshiring.');
  ({data,revision}=await res.json());
  render(); status('Saqlandi.');
}
const profile=[['name','Ism va familiya'],['role','Mutaxassislik','text',true],['bio','Haqimda','textarea',true],['skills','Texnologiyalar (vergul bilan)'],];
const settings = {
  profile,
  design:[['theme','Sayt dizayni','theme',true]],
  contact:[['telegram','Telegram username (@ bilan yoki @siz)'],['email','Gmail manzili','email']]
};
const settingsTitles={profile:'Profilni tahrirlash',design:'Dizaynni o‘zgartirish',contact:'Aloqa ma’lumotlari'};
function openEditor(kind,index) {
  const old=settings[kind]?data:data[kind][index] || {};
  const specs=settings[kind] || [['title','Nomi','text',true],['description',kind==='certs'?'Tashkilot va yil':'Tavsif','textarea'],...(kind==='projects'?[['url','GitHub yoki GitHub Pages havolasi','url',true]]:kind==='certs'?[['file','PDF, PNG yoki JPG (2 MB gacha)','file',!old.file]]:[])];
  $('dialog-title').textContent=settingsTitles[kind] || kinds[kind][0]+(index===undefined?' qo‘shish':'ni tahrirlash');
  $('fields').replaceChildren();
  for(const [key,label,type='text',required=false] of specs) {
    const field=element('label',label,'field');
    const input=document.createElement(type==='textarea'?'textarea':type==='theme'?'select':'input');
    input.name=key; input.required=required;
    if(type==='theme') input.append(...Object.entries(themes).map(([value,label])=>new Option(label,value)));
    else if(type!=='textarea') input.type=type;
    if(type==='file') input.accept='application/pdf,image/png,image/jpeg';
    else {input.maxLength=type==='textarea'?2000:350;input.value=old[key] || '';}
    field.append(input);$('fields').append(field);
  }
  $('error').hidden=true;
  $('form').onsubmit=async event=>{
    event.preventDefault(); $('save').disabled=true; $('error').hidden=true;
    try {
      const fields=new FormData(event.currentTarget);
      const next=structuredClone(data);
      const row=settings[kind]?{}:{...old};
      for(const [key,value] of fields) {
        if(typeof value==='string') row[key]=value.trim();
        else if(value.size) {
          if(value.size>2*1024*1024 || !['application/pdf','image/png','image/jpeg'].includes(value.type)) throw Error('PDF, PNG yoki JPG formatida 2 MB gacha fayl tanlang.');
          row.file=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(value);});
          row.filename=value.name;
        }
      }
      if(kind==='projects') {
        const url=new URL(row.url);
        const repository=url.hostname==='github.com' && url.pathname.split('/').filter(Boolean).length>=2;
        const pages=/^[a-z0-9-]+\.github\.io$/i.test(url.hostname);
        if(url.protocol!=='https:' || (!repository && !pages) || url.port || url.username || url.password) throw Error('GitHub repozitoriyi yoki GitHub Pages saytining HTTPS havolasini kiriting.');
      }
      if(kind==='contact') {
        row.telegram=row.telegram.replace(/^@/,'');
        if(row.telegram && !/^[a-zA-Z0-9_]{5,32}$/.test(row.telegram)) throw Error('Telegram username 5–32 ta harf, raqam yoki pastki chiziqdan iborat bo‘lsin.');
      }
      if(settings[kind]) Object.assign(next,row);
      else if(index===undefined) next[kind].push(row);
      else next[kind][index]=row;
      await persist(next);
      if(kind==='design') applyTheme(data.theme);
      $('dialog').close();
    } catch(err) {
      $('error').textContent=err.message || 'Faylni o‘qib bo‘lmadi.'; $('error').hidden=false;
    } finally { $('save').disabled=false; }
  };
  $('dialog').showModal();
}
$('cancel').onclick=()=>$('dialog').close();
$('edit').onclick=()=>openEditor('profile');
$('print').onclick=()=>window.print();
$('design').onclick=()=>openEditor('design');
$('edit-contact').onclick=()=>openEditor('contact');
document.querySelectorAll('.add').forEach(x=>x.onclick=()=>openEditor(x.dataset.kind));
$('export').onclick=()=>{
  const copy=document.documentElement.cloneNode(true);
  const script=document.createElement('script');
  script.textContent='window.PORTFOLIO_SNAPSHOT='+JSON.stringify(data).replaceAll('<',String.fromCharCode(92)+'u003c')+';';
  copy.querySelector('script').before(script);
  copy.querySelector('body').classList.remove('admin');
  copy.querySelectorAll('.admin-only').forEach(item=>item.setAttribute('hidden',''));
  copy.querySelector('dialog').removeAttribute('open');
  copy.querySelector('#status').textContent='';
  copy.querySelector('#fields').replaceChildren();
  const url=URL.createObjectURL(new Blob(['<!doctype html>',copy.outerHTML],{type:'text/html;charset=utf-8'}));
  const link=element('a');link.href=url;link.download='ai-portfolio.html';link.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
};
async function start() {
  if(snapshot) {data=snapshot;canEdit=false;}
  else {
    const res=await fetch('/api/portfolio');
    if(!res.ok) throw Error('Profilni yuklab bo‘lmadi.');
    ({data,revision,canEdit}=await res.json());
    if(adminMode && canEdit) document.body.classList.add('admin');
  }
  applyTheme(data.theme);render();initMotion();
}
start().catch(err=>status(err.message));
</script></html>`;

function isText(value,max) { return typeof value==="string" && value.length<=max; }
function valid(data) {
  if (!data || !["name","role","skills","email"].every(key=>isText(data[key],350)) ||
    !data.role.trim() || !isText(data.bio,2000) || !data.bio.trim() ||
    !["lime","blue","paper","violet","amber"].includes(data.theme) ||
    !isText(data.telegram,32) || (data.telegram && !/^[a-zA-Z0-9_]{5,32}$/.test(data.telegram)) ||
    (data.email && !/^[^\s@?:]+@[^\s@?:]+\.[^\s@?:]+$/.test(data.email))) return false;
  return ["projects","certs","notes"].every(kind=>Array.isArray(data[kind]) && data[kind].length<=100 &&
    data[kind].every(row=>{
      if (!row || !isText(row.title,350) || !row.title.trim() || !isText(row.description,2000)) return false;
      if (kind==="certs") return isText(row.filename,255) && isText(row.file,2800000) && /^data:(application\/pdf|image\/(png|jpeg));base64,[a-z0-9+/]+=*$/i.test(row.file);
      if (kind==="projects") {
        if (!isText(row.url,350)) return false;
        try {
          const url=new URL(row.url);
          const repository=url.hostname==="github.com" && url.pathname.split("/").filter(Boolean).length>=2;
          const pages=/^[a-z0-9-]+\.github\.io$/i.test(url.hostname);
          return url.protocol==="https:" && !url.port && !url.username && !url.password && (repository || pages);
        } catch { return false; }
      }
      return true;
    }));
}
const key="portfolio";
function isAdmin(request,env) {
  const email=request.headers.get("oai-authenticated-user-email");
  return Boolean(request.headers.get("oai-authenticated-user-id") && email && env.PORTFOLIO_ADMIN_EMAIL &&
    email.toLowerCase()===env.PORTFOLIO_ADMIN_EMAIL.toLowerCase());
}
const json=(value,status=200)=>Response.json(value,{status,headers:{"Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
export default {
  async fetch(request,env) {
    const url=new URL(request.url);
    const canEdit=isAdmin(request,env);
    if(url.pathname==="/admin" && request.method==="GET" && !request.headers.get("oai-authenticated-user-id")) {
      return Response.redirect(new URL("/signin-with-chatgpt?return_to=%2Fadmin",url),302);
    }
    if((url.pathname==="/admin" || url.pathname==="/admin/source.zip") && !canEdit) {
      return new Response("Bu bo‘lim sayt egasi uchun.",{status:403,headers:{"Cache-Control":"no-store"}});
    }
    if(url.pathname==="/admin/source.zip" && request.method==="GET") {
      if(typeof sourceZip==="undefined") return new Response("Arxiv mavjud emas.",{status:404});
      return new Response(Uint8Array.from(atob(sourceZip),character=>character.charCodeAt(0)),{headers:{"Content-Type":"application/zip","Content-Disposition":"attachment; filename=ai-portfolio-source.zip","Cache-Control":"no-store"}});
    }
    if((url.pathname==="/" || url.pathname==="/admin") && request.method==="GET") return new Response(page,{headers:{"Content-Type":"text/html; charset=utf-8","X-Content-Type-Options":"nosniff","Cache-Control":"no-store"}});
    if(url.pathname!=="/api/portfolio") return new Response("Not found",{status:404});
    const user=request.headers.get("oai-authenticated-user-id");
    const object=await env.BUCKET.get(key);
    const record=object ? await object.json() : {data:initial,owner:null};
    if(request.method==="GET") return json({data:{...initial,...record.data},revision:object?.etag ?? null,canEdit});
    if(request.method!=="PUT") return json({},405);
    if(!canEdit || request.headers.get("Origin")!==url.origin) return json({},403);
    if(!request.headers.get("Content-Type")?.startsWith("application/json")) return json({},415);
    if(Number(request.headers.get("Content-Length"))>12000000) return json({},413);
    const payload=await request.text();
    if(payload.length>12000000) return json({},413);
    let change;
    try { change=JSON.parse(payload); } catch { return json({},400); }
    if(!change || !valid(change.data)) return json({},400);
    if(change.revision!==(object?.etag ?? null)) return json({},409);
    const saved=await env.BUCKET.put(key,JSON.stringify({data:change.data,owner:user}),{
      onlyIf:object ? {etagMatches:object.etag} : {etagDoesNotMatch:"*"}
    });
    return saved ? json({data:change.data,revision:saved.etag}) : json({},409);
  }
};
