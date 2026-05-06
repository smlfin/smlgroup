/* ════════════════════════════════════
   DATA  (min ₹10,000 everywhere)
════════════════════════════════════ */
const DATA = {
  "SML Finance Ltd": {
    "SD 5.5 Year": [
      { monthly:"12.5%", yearly:"13.0%", period:"5.5 YEARS", remarks:"₹10,000 to less than ₹5 Lakhs", generalRemark:"No Premature Closing Allowed", type:"SD", minAmt:10000, maxAmt:499999 },
      { monthly:"13.0%", yearly:"13.5%", period:"5.5 YEARS", remarks:"₹5 Lakhs to less than ₹25 Lakhs", generalRemark:"No Premature Closing Allowed", type:"SD", minAmt:500000, maxAmt:2499999 },
      { monthly:"14.0%", yearly:"14.5%", period:"5.5 YEARS", remarks:"₹25 Lakhs & above", generalRemark:"No Premature Closing Allowed", type:"SD", minAmt:2500000, maxAmt:Infinity }
    ],
    "Doubling Scheme": [
      { period:"70 Months", remarks:"₹10,000 & Above", doublingRemark:"Your investment doubles at maturity.", generalRemark:"No Premature Closing Allowed", type:"Doubling", minAmt:10000 }
    ],
    "Non-Convertible Debentures (NCD)": [
      { monthly:"12.5%", yearly:"Not Available", period:"10 YEARS", remarks:"₹2 Lakhs to less than ₹15 Lakhs", type:"NCD", minAmt:200000, maxAmt:1499999,
        closureRemark:"Closure allowed after 1 year.",
        closureTerms:[{period:"1–2 years",cut:"1% penalty"},{period:"2–3 years",cut:"0.5% penalty"},{period:"After 3 years",cut:"No penalty"},{period:"3 yrs (between anniversaries)",cut:"Eff. rate: 9%"}]},
      { monthly:"13%", yearly:"Not Available", period:"10 YEARS", remarks:"₹15 Lakhs & above", type:"NCD", minAmt:1500000, maxAmt:Infinity,
        closureRemark:"Closure allowed after 1 year.",
        closureTerms:[{period:"1–2 years",cut:"1% penalty"},{period:"2–3 years",cut:"0.5% penalty"},{period:"After 3 years",cut:"No penalty"},{period:"3 yrs (between anniversaries)",cut:"Eff. rate: 9%"}]}
    ]
  },
  "Vanchinad Finance (P) Ltd": {
    "SD 5.5 Year": [
     { monthly:"12.5%", yearly:"13.0%", period:"5.5 YEARS", remarks:"₹10,000 to less than ₹5 Lakhs", generalRemark:"No Premature Closing Allowed", type:"SD", minAmt:10000, maxAmt:499999 },
      { monthly:"13.0%", yearly:"13.5%", period:"5.5 YEARS", remarks:"₹5 Lakhs to less than ₹25 Lakhs", generalRemark:"No Premature Closing Allowed", type:"SD", minAmt:500000, maxAmt:2499999 },
      { monthly:"14.0%", yearly:"14.5%", period:"5.5 YEARS", remarks:"₹25 Lakhs & above", generalRemark:"No Premature Closing Allowed", type:"SD", minAmt:2500000, maxAmt:Infinity }
    ],
    "Sub-ordinated Debt Doubling Scheme": [
      { period:"70 Months", remarks:"₹10,000 & Above", doublingRemark:"Your investment doubles at maturity.", generalRemark:"No Premature Closing Allowed", type:"Doubling", minAmt:10000 }
    ],
    "Non-Convertible Debentures (NCD)": [
      { monthly:"12.50%", yearly:"13.00%", period:"10 YEARS", remarks:"₹5 Lakhs to less than ₹15 Lakhs", type:"NCD", minAmt:500000, maxAmt:1499999,
        closureRemark:"Closure allowed after 1 year.",
        closureTerms:[{period:"1–2 years",cut:"2% penalty"},{period:"2–3 years",cut:"1% penalty"},{period:"After 3 years",cut:"No penalty"},{period:"3 yrs (between anniversaries)",cut:"Eff. rate: 9%"}]},
      { monthly:"13.00%", yearly:"13.50%", period:"10 YEARS", remarks:"₹15 Lakhs & above", type:"NCD", minAmt:1500000, maxAmt:Infinity,
        closureRemark:"Closure allowed after 1 year.",
        closureTerms:[{period:"1–2 years",cut:"2% penalty"},{period:"2–3 years",cut:"1% penalty"},{period:"After 3 years",cut:"No penalty"},{period:"3 yrs (between anniversaries)",cut:"Eff. rate: 9%"}]}
    ]
  },
  "SANGEETH NIDHI": {
    "Sangeeth Nidhi Deposits": [
      { period:"6 Months to <1 Year", yearly:"9%", remarks:"₹10,000 and above", type:"SD", minAmt:10000, minPeriod:0.5, maxPeriod:0.9, defaultPeriod:0.5 },
      { period:"1 Year to <3 Years", monthly:"11.00%", yearly:"11.50%", remarks:"₹10,000 and above", type:"SD", minAmt:10000, minPeriod:1, maxPeriod:2, defaultPeriod:1 },
      { period:"3 Years to 5 Years", monthly:"11.50%", yearly:"12.00%", remarks:"₹10,000 and above", type:"SD", minAmt:10000, minPeriod:3, maxPeriod:5, defaultPeriod:3 },
      { period:"5 Years (Premium)", monthly:"12%", yearly:"12.50%", remarks:"₹5 Lakhs and above", type:"SD", minAmt:500000, minPeriod:5, maxPeriod:5, defaultPeriod:5 }
    ]
  },
  "Special Calculators": {
    "Recurring Deposit (RD)": [
     { type:"RD", ratePA:10.0, minAmount:1000, period:"1 Year",  remarks:"₹1,000 or more per month", minPeriod:1, maxPeriod:1 },
{ type:"RD", ratePA:11.0, minAmount:1000, period:"2 Years", remarks:"₹1,000 or more per month", minPeriod:2, maxPeriod:2 },
{ type:"RD", ratePA:12.0, minAmount:1000, period:"3 Years", remarks:"₹1,000 or more per month", minPeriod:3, maxPeriod:3 },
{ type:"RD", ratePA:12.0, minAmount:1000, period:"4 Years", remarks:"₹1,000 or more per month", minPeriod:4, maxPeriod:4 },
{ type:"RD", ratePA:12.0, minAmount:1000, period:"5 Years", remarks:"₹1,000 or more per month", minPeriod:5, maxPeriod:5 }
    ]
  }
};

const CO_CLS  = {"SML Finance Ltd":"sml","Vanchinad Finance (P) Ltd":"van","SANGEETH NIDHI":"san","Special Calculators":"special"};
const CO_ICON = {"SML Finance Ltd":"🏦","Vanchinad Finance (P) Ltd":"🌿","SANGEETH NIDHI":"🎵","Special Calculators":"🧮"};
const CO_COLOR= {"SML Finance Ltd":"gold","Vanchinad Finance (P) Ltd":"green","SANGEETH NIDHI":"olive","Special Calculators":"blue"};

const fmt = n => Math.round(n).toLocaleString('en-IN');
const pct = s => s && s !== 'Not Available' ? parseFloat(s.replace('%','').trim())/100 : null;

/* ════════════════════════════════════
   NAVIGATION
════════════════════════════════════ */
function navTo(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.mob-nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.side-item').forEach(n=>n.classList.remove('active'));
  const screen = document.getElementById('screen-'+id);
  if(screen) screen.classList.add('active');
  const navMap = {home:'home',products:'products',calculator:'calculator',compare:'compare',faq:'faq',learn:'learn',trust:'trust'};
  const navId = navMap[id]||id;
  // mob nav: compare/faq fall back to learn tab
  const mobFallback = {learn:'calculator',trust:'calculator',faq:'compare'};
  const mobId = mobFallback[navId] || navId;
  const mob = document.getElementById('mnav-'+mobId);
  if(mob) mob.classList.add('active');
  // highlight More btn for learn/trust/faq
  if(['learn','trust','faq'].includes(navId)){
    const moreBtn = document.getElementById('mnav-more');
    if(moreBtn) moreBtn.classList.add('active');
  }
  const side = document.getElementById('side-'+navId);
  if(side) side.classList.add('active');
  const wrap = document.querySelector('.content-wrap');
  if(wrap) wrap.scrollTo(0,0);
  if(id==='products') buildProds('all');
  if(id==='compare') buildCmpGrid();
  if(id==='faq') buildFaq();
  // Update desktop topbar title
  const titles={home:'Home',products:'All Products',calculator:'Calculator',learn:'Learn & Compare',trust:'Why Trust Us',compare:'Compare Products',faq:'FAQ'};
  const tt=document.getElementById('desk-topbar-title');
  if(tt) tt.textContent=(titles[id]||id)+' — SML Group';
  // Close mobile more menu if open
  const mm=document.getElementById('mob-more-overlay');
  if(mm) mm.style.display='none';
}

/* ════════════════════════════════════
   HOME DRAWER
════════════════════════════════════ */
function openCompanyDrawer(co) {
  const products = DATA[co];
  const tag = document.getElementById('drawer-tag');
  tag.textContent = CO_CLS[co]?.toUpperCase()+' · NBFC';
  tag.className = 'drawer-company-tag ' + (CO_CLS[co]||'');
  document.getElementById('drawer-title').textContent = co;
  let html = '';
  for(const [pName,pList] of Object.entries(products)) {
    html += `<div class="drawer-section"><div class="drawer-section-title">${pName}</div><div class="feat-rows">`;
    pList.forEach(d=>{
      const isDb = d.type==='Doubling';
      const isRD = d.type==='RD';
      const rate = isDb ? 'Doubles on maturity (70 months)' : isRD ? `Up to ${d.ratePA}% p.a.` :
        [d.monthly&&d.monthly!=='Not Available'&&`${d.monthly} monthly`, d.yearly&&d.yearly!=='Not Available'&&`${d.yearly} annually`].filter(Boolean).join(' · ');
      html += `<div class="feat-row"><span class="feat-icon">💰</span><div class="feat-text"><strong>${d.period||d.remarks}</strong>${rate}<br>${d.remarks||''}</div></div>`;
    });
    html += `</div></div>`;
  }
  html += `<button class="drawer-calc-btn" onclick="closeDrawerDirect(); launchCalc('${co}','')">🧮 Open Calculator</button>`;
  document.getElementById('drawer-body').innerHTML = html;
  document.getElementById('drawer-overlay').classList.add('open');
}

function openProductDrawer(co, pName, pList) {
  const pTag = document.getElementById('drawer-tag');
  pTag.textContent = co;
  pTag.className = 'drawer-company-tag ' + (CO_CLS[co]||'');
  document.getElementById('drawer-title').textContent = pName;
  const isDb = pName.toLowerCase().includes('doubling');
  const isNCD = pName.toLowerCase().includes('ncd');
  const isRD = pList[0]?.type==='RD';
  let html = `<div class="drawer-section"><div class="drawer-section-title">Options & Rates</div><div class="feat-rows">`;
  pList.forEach((d,i)=>{
    const isDb2 = d.type==='Doubling';
    const rate = isDb2 ? 'Doubles on maturity' : isRD ? `${d.ratePA}% p.a. · ${d.period}` :
      [d.monthly&&d.monthly!=='Not Available'&&`${d.monthly} monthly`, d.yearly&&d.yearly!=='Not Available'&&`${d.yearly} annually`].filter(Boolean).join(' · ');
    html += `<div class="feat-row"><span class="feat-icon">💹</span><div class="feat-text"><strong>${d.remarks||d.period||'Option '+(i+1)}</strong>${rate}${d.period&&!isDb2?`<br>Period: ${d.period}`:''}</div></div>`;
  });
  html += `</div></div>`;
  if(isNCD && pList[0]?.closureTerms) {
    html += `<div class="drawer-section"><div class="drawer-section-title">Premature Closure Terms</div><div class="closure-box">`;
    pList[0].closureTerms.forEach(t=>{html+=`<div class="closure-row"><span>${t.period}</span><strong>${t.cut}</strong></div>`;});
    html += `</div></div>`;
  }
  if(pList[0]?.generalRemark) {
    html += `<div class="notice-pill">⚠️ ${pList[0].generalRemark}</div>`;
  }
  html += `<button class="drawer-calc-btn" onclick="closeDrawerDirect(); launchCalc('${co}','${pName}')">🧮 Calculate My Returns</button>`;
  document.getElementById('drawer-body').innerHTML = html;
  document.getElementById('drawer-overlay').classList.add('open');
}

function closeDrawer(e){ if(e.target===document.getElementById('drawer-overlay')) closeDrawerDirect(); }
function closeDrawerDirect(){ document.getElementById('drawer-overlay').classList.remove('open'); }

/* ════════════════════════════════════
   PRODUCTS
════════════════════════════════════ */
function getMaxRate(pList) {
  let max=0;
  pList.forEach(d=>{
    const r=parseFloat((d.monthly||d.yearly||'0').replace('%','').replace('Not Available','0'))||0;
    if(r>max) max=r;
  });
  return max;
}

function buildProds(filter) {
  const list = document.getElementById('prod-list');
  list.innerHTML='';
  for(const [co,products] of Object.entries(DATA)) {
    if(filter!=='all' && co!==filter) continue;
    for(const [pName,pList] of Object.entries(products)) {
      const cls = CO_CLS[co]||'special';
      const col = CO_COLOR[co]||'blue';
      const isDb = pName.toLowerCase().includes('doubling');
      const isRD = pList[0]?.type==='RD';
      const maxRate = isDb ? '×2' : isRD ? '12%' : getMaxRate(pList).toFixed(1)+'%';
      const features=[];
      if(pList[0]?.period) features.push('📅 '+pList[0].period);
      if(pList.length>1) features.push('🎚️ '+pList.length+' tiers');
      if(pList[0]?.generalRemark) features.push('🔒 '+pList[0].generalRemark);
      if(pList[0]?.closureRemark) features.push('🔓 '+pList[0].closureRemark);
      const minAmt = isRD ? '₹1,000/mo' : '₹'+((pList[0]?.minAmt)||10000).toLocaleString('en-IN');
      const card = document.createElement('div');
      card.className=`prod-card ${cls}`;
      card.innerHTML=`
        <div class="prod-card-stripe"></div>
        <div class="prod-header">
          <div>
            <div class="prod-company ${cls}">${co}</div>
            <div class="prod-name">${pName}</div>
          </div>
          <div class="prod-rate-badge ${col==='green'?'green':col==='purple'?'purple':col==='blue'?'blue':''}">${maxRate}</div>
        </div>
        <div class="prod-chips">${features.slice(0,3).map(f=>`<span class="prod-chip-item">${f}</span>`).join('')}</div>
        <div class="prod-footer">
          <div class="prod-min">Min: <strong>${minAmt}</strong></div>
          <div class="prod-cta">Details →</div>
        </div>`;
      card.addEventListener('click', e=>{
        if(!e.target.closest('.prod-cta')) openProductDrawer(co,pName,pList);
        else openProductDrawer(co,pName,pList);
      });
      list.appendChild(card);
    }
  }
}

function filterProds(filter,btn) {
  document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  buildProds(filter);
}

/* ════════════════════════════════════
   CALCULATOR
════════════════════════════════════ */
let cState = {co:'',prod:'',tier:0};

function launchCalc(co,prod){
  navTo('calculator');
  if(co){
    const cSel = document.getElementById('calc-company');
    cSel.value=co; onCalcCo();
    if(prod){
      setTimeout(()=>{
        const pSel=document.getElementById('calc-product');
        pSel.value=prod; onCalcProd();
      },60);
    }
  }
}

function onCalcCo(){
  const co=document.getElementById('calc-company').value;
  const pSel=document.getElementById('calc-product');
  pSel.innerHTML='<option value="">— Choose a product —</option>';
  pSel.disabled=!co;
  cState={co,prod:'',tier:0};
  resetResults();
  if(co && DATA[co]){
    Object.keys(DATA[co]).forEach(p=>{const o=document.createElement('option');o.value=p;o.textContent=p;pSel.appendChild(o);});
  }
}

function onCalcProd(){
  const co=document.getElementById('calc-company').value;
  const prod=document.getElementById('calc-product').value;
  cState={co,prod,tier:0};
  resetResults();
  if(!co||!prod||!DATA[co]?.[prod]) return;
  const list=DATA[co][prod];
  const isRD=list[0]?.type==='RD';
  const isSan=co==='SANGEETH NIDHI';
  const isNCD=prod.toLowerCase().includes('ncd');
  const isDb=prod.toLowerCase().includes('doubling');

  // Tiers
  const tg=document.getElementById('tier-group');
  const to=document.getElementById('tier-options');
if (list.length > 1) {
  tg.classList.remove('hidden');
  to.innerHTML = '';
  
  list.forEach((d, i) => {
    // 1. Identify product type flags
    const isRD = d.type === 'RD' || prod.includes("Recurring Deposit");
    
    // 2. Format the Descriptive Label
    // If RD: Show "1 Year 10%", otherwise show standard period/remarks
    let labelText = isSan ? d.period : d.remarks;
    if (isRD) {
      labelText = `${d.period} ${d.ratePA}%`; 
    }

    // 3. Format the Rate Display (Right side of card)
    const rateDisplay = isDb ? 'Doubles' :
      [d.monthly && d.monthly !== 'Not Available' && d.monthly, d.yearly && d.yearly !== 'Not Available' && d.yearly].filter(Boolean).join(' / ');

    const div = document.createElement('div');
    div.className = 'tier-opt' + (i === 0 ? ' selected' : '');
    
    div.innerHTML = `
      <div class="tier-opt-radio"></div>
      <div class="tier-opt-info">
        <div class="tier-opt-label">${labelText}</div>
        ${isRD ? '' : `<div class="tier-opt-sub">Min: ₹${(d.minAmt || 10000).toLocaleString('en-IN')}</div>`}
      </div>
      <div class="tier-opt-rate">${isRD ? d.ratePA + '%' : rateDisplay}</div>
    `;

    div.onclick = () => {
      document.querySelectorAll('.tier-opt').forEach(t => t.classList.remove('selected'));
      div.classList.add('selected');
      cState.tier = i;

      // 4. AUTO-FILL Investment Period for RD
      if (isRD) {
        const periodInput = document.getElementById('calc-period');
        // Extract number from period string (e.g., "1 Year" -> 1)
        const yearValue = parseInt(d.period); 
        if (periodInput && !isNaN(yearValue)) {
          periodInput.value = yearValue;
        }
      }

      updateAmtHint();
      runCalc();
    };
    to.appendChild(div);
  });
  
  document.getElementById('amt-step-lbl').innerHTML = `<div class="step-num">4</div><span>Enter Amount</span>`;
}

  // Period
  const pg=document.getElementById('period-group');
  const pi=document.getElementById('calc-period');
  const ph=document.getElementById('period-hint');
  if(isSan){
    pg.classList.remove('hidden');
    const d=list[cState.tier]||list[0];
    pi.min=d.minPeriod||0.5; pi.max=d.maxPeriod||5; pi.value=d.defaultPeriod||1;
    pi.step=0.5;
    ph.textContent=`Valid: ${d.minPeriod||0.5} – ${d.maxPeriod||5} year(s)`;
    document.getElementById('period-step-num').textContent=list.length>1?'5':'4';
  } else if(isNCD){
    pg.classList.remove('hidden');
    pi.min=1; pi.max=10; pi.value=5; pi.step=1;
    ph.textContent='NCD tenure: 1 to 10 years';
    document.getElementById('period-step-num').textContent=list.length>1?'5':'4';
  } else if(isRD){
    pg.classList.remove('hidden');
    pi.min=1; pi.max=4; pi.value=1; pi.step=1;
    ph.textContent='RD duration: 1 to 4 years · 1yr=10%, 2yr=11%, 3–4yr=12%';
    document.getElementById('period-step-num').textContent='4';
  } else {
    pg.classList.add('hidden');
  }

  updateAmtHint();
}

function updateAmtHint() {
  const co = cState.co; 
  const prod = cState.prod;
  if (!co || !prod || !DATA[co]?.[prod]) return;

  const list = DATA[co][prod];
  const d = list[cState.tier] || list[0];
  const hint = document.getElementById('amt-hint');
  
  // SPECIFIC FIX FOR RD
  const isRD = d.type === 'RD' || prod.includes("Recurring Deposit");
  if (isRD) {
    hint.textContent = 'Minimum monthly deposit: ₹1,000';
    hint.className = 'amt-hint';
    return;
  }

  const mn = d.minAmt || 10000;
  const mx = d.maxAmt;
  if (mx && mx !== Infinity) {
    hint.textContent = `₹${mn.toLocaleString('en-IN')} – ₹${mx.toLocaleString('en-IN')}`;
  } else {
    hint.textContent = `Minimum investment: ₹${mn.toLocaleString('en-IN')}`;
  }
  hint.className = 'amt-hint';
}

function resetResults(){
  document.getElementById('results-box').classList.remove('show');
  document.getElementById('amt-hint').textContent='Minimum investment: ₹10,000';
  document.getElementById('amt-hint').className='amt-hint';
  document.getElementById('calc-amount').value='';
  document.getElementById('calc-amount').className='amt-input';
}

function setAmt(v){
  document.getElementById('calc-amount').value=v;
  runCalc();
}

function getPeriodMonths(d, periodInputVal, isSan, isNCD, isRD){
  if(isRD && periodInputVal) return Math.round(periodInputVal*12);
  if(isSan && periodInputVal) return Math.round(periodInputVal*12);
  if(isNCD && periodInputVal) return Math.round(periodInputVal*12);
  if(d.period){
    const m=d.period.match(/(\d+\.?\d*)\s*(YEAR|Month)/i);
    if(m){ const n=parseFloat(m[1]); return m[2].toLowerCase().startsWith('month')?Math.round(n):Math.round(n*12); }
  }
  return 66; // default 5.5yr
}

/**
 * Executes the returns calculation based on the current state (cState),
 * selected product data, and user input values.
 */
function runCalc() {
  const co = cState.co; 
  const prod = cState.prod;

  // Basic guard clause: ensure company and product data exist
  if (!co || !prod || !DATA[co]?.[prod]) return;

  const list = DATA[co][prod];
  const d = list[cState.tier] || list[0];
  
  // Retrieve inputs from the DOM
  const amt = parseFloat(document.getElementById('calc-amount').value) || 0;
  const perInp = parseFloat(document.getElementById('calc-period').value) || 0;

  // Identify product type flags
  const isDb = prod.toLowerCase().includes('doubling') || d.type === 'Doubling';
  const isNCD = prod.toLowerCase().includes('ncd');
  const isRD = d.type === 'RD' || prod.includes("Recurring Deposit");
  const isSan = co === 'SANGEETH NIDHI';

  // Elements for UI updates/validation
  const inp = document.getElementById('calc-amount');
  const hintEl = document.getElementById('amt-hint');
  const box = document.getElementById('results-box');

  // --- Validation Logic ---
  if (!amt || amt <= 0) { 
    inp.className = 'amt-input err'; 
    hintEl.textContent = 'Please enter a valid amount.'; 
    hintEl.className = 'amt-hint err'; 
    return;
  }

  // Set the minimum based on product type (RD = 1000, others = 10000)
  const mn = isRD ? 1000 : (d.minAmt || 10000);
  const mx = d.maxAmt || Infinity;

  if (amt < mn) { 
    inp.className = 'amt-input err'; 
    hintEl.textContent = `Minimum is ₹${mn.toLocaleString('en-IN')}`; 
    hintEl.className = 'amt-hint err'; 
    return;
  }

  if (amt > mx) { 
    inp.className = 'amt-input err'; 
    hintEl.textContent = `Maximum for this tier is ₹${mx.toLocaleString('en-IN')}`; 
    hintEl.className = 'amt-hint err'; 
    return;
  }

  // Clear error states if validation passes
  inp.className = 'amt-input'; 
  hintEl.className = 'amt-hint'; 
  updateAmtHint();

  // --- Calculation Logic ---
  const periodMonths = getPeriodMonths(d, perInp, isSan, isNCD, isRD);
  const periodYears = periodMonths / 12;

  document.getElementById('results-sub-text').textContent = `${co} · ${prod}`;
  let html = '<div class="res-cards">';
  
  // Note: The rest of the calculation logic (html construction) 
  // should continue here based on the isDb, isRD, or standard SD paths.

  if(isDb){
    // Doubling
    html+=`
      <div class="res-card highlight">
        <div class="res-label">Maturity Amount</div>
        <div class="res-val gold">₹${fmt(amt*2)}</div>
        <div class="res-sub">Investment doubles in ${d.period||'70 months'}</div>
      </div>
      <div class="res-card">
        <div class="res-label">You Invest</div>
        <div class="res-val">₹${fmt(amt)}</div>
        <div class="res-sub">One-time deposit</div>
      </div>
      <div class="res-card">
        <div class="res-label">You Gain</div>
        <div class="res-val green">₹${fmt(amt)}</div>
        <div class="res-sub">100% profit at maturity</div>
      </div>`;
  } else if(isRD){
    /* ── CORRECTED RD CALCULATION ──
       Standard RD formula: M = R × [(1+i)^n - 1] / (1 - (1+i)^(-1/3))
       Simpler accurate version: compound each instalment separately
       M = R × ((1+r)^n - 1) / r   where r = annual_rate/12
       This IS the correct formula for RD compounded quarterly commonly used in India,
       but since rate here is monthly compounding:  r = ratePA / 12  */
    const ratePA = (perInp<=1 ? 10 : perInp<=2 ? 11 : 12) / 100;
    const r = ratePA/12; // monthly rate
    const n = periodMonths;
    // Future value of annuity (payments at start of each month)
    const maturity = Math.round(amt * r * ((Math.pow(1+r,n)-1)/r) / r + amt * Math.pow(1+r,n));
    // Simpler standard: M = R × [((1+r)^n - 1)/r] × (1+r)
    const mat2 = Math.round(amt * ((Math.pow(1+r,n)-1)/r) * (1+r));
    const totalDep = amt * n;
    const interest = mat2 - totalDep;
    html+=`
      <div class="res-card highlight">
        <div class="res-label">Maturity Value</div>
        <div class="res-val gold">₹${fmt(mat2)}</div>
        <div class="res-sub">After ${perInp||1} year(s) at ${(ratePA*100).toFixed(0)}% p.a.</div>
      </div>
      <div class="res-card">
        <div class="res-label">Total Deposited</div>
        <div class="res-val">₹${fmt(totalDep)}</div>
        <div class="res-sub">₹${fmt(amt)} × ${n} months</div>
      </div>
      <div class="res-card">
        <div class="res-label">Interest Earned</div>
        <div class="res-val green">₹${fmt(interest)}</div>
        <div class="res-sub">Compounded monthly on each instalment</div>
      </div>`;
      
  } else {
    // SD / NCD
    const mR=pct(d.monthly); const yR=pct(d.yearly);
    const montInt = mR ? Math.round(amt*mR/12) : null;
    const annInt  = yR ? Math.round(amt*yR)    : null;
    const totM    = montInt ? amt + montInt*periodMonths : null;
    const totY    = annInt  ? amt + annInt*periodYears   : null;

    if(montInt!==null){
      html+=`<div class="res-card highlight"><div class="res-label">Monthly Interest Payout</div><div class="res-val gold">₹${fmt(montInt)}</div><div class="res-sub">Every month at ${d.monthly} p.a.</div></div>`;
    }
    if(annInt!==null){
      html+=`<div class="res-card"><div class="res-label">Annual Interest Payout</div><div class="res-val">₹${fmt(annInt)}</div><div class="res-sub">Every year at ${d.yearly} p.a.</div></div>`;
    }
    if(totM!==null){
      html+=`<div class="res-card"><div class="res-label">Total Return (Monthly plan)</div><div class="res-val">₹${fmt(totM)}</div><div class="res-sub">Principal + ₹${fmt(montInt*periodMonths)} interest over ${periodMonths} months</div></div>`;
    }
    if(totY!==null){
      html+=`<div class="res-card"><div class="res-label">Total Return (Annual plan)</div><div class="res-val">₹${fmt(totY)}</div><div class="res-sub">Principal + ₹${fmt(annInt*periodYears)} interest over ${periodMonths} months</div></div>`;
    }
    // RD reinvestment tip
    if(montInt&&!isNCD&&mR){
      const r=mR/12; const n=periodMonths;
      const rdMat=Math.round(montInt*((Math.pow(1+r,n)-1)/r)*(1+r));
      html+=`<div class="res-card"><div class="res-label">💡 If Monthly Interest is Reinvested (RD)</div><div class="res-val green">₹${fmt(rdMat)}</div><div class="res-sub">If ₹${fmt(montInt)}/mo is reinvested at same rate</div></div>`;
    }
    if(d.closureTerms){
      html+=`<div class="closure-box"><div class="closure-title">Premature Closure Terms</div>`;
      d.closureTerms.forEach(t=>{html+=`<div class="closure-row"><span>${t.period}</span><strong>${t.cut}</strong></div>`;});
      html+=`</div>`;
    }
    if(d.generalRemark){
      html+=`<div class="notice-pill">⚠️ ${d.generalRemark}</div>`;
    }
  }
  // Bank comparison row
  if(!isDb && !isRD && amt>0){
    const sbiRate=0.070; const hdfcRate=0.074;
    const mySRate=pct(d.monthly)||pct(d.yearly)||0;
    if(mySRate>0){
      const years=periodYears||5.5;
      const myInt=Math.round(amt*mySRate*years);
      const sbiInt=Math.round(amt*sbiRate*years);
      const hdfcInt=Math.round(amt*hdfcRate*years);
      const extra=Math.round(myInt-hdfcInt);
      html+=`<div class="res-card" style="border-color:rgba(26,111,191,0.2);background:linear-gradient(135deg,rgba(26,111,191,0.05),rgba(26,111,191,0.02))">
        <div class="res-label" style="color:var(--gold)">📊 Bank FD Comparison (${years.toFixed(1)} yr)</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-top:6px">
          <div style="text-align:center;background:var(--bg3);border-radius:8px;padding:8px 4px;border:1px solid var(--border)">
            <div style="font-size:0.58rem;color:var(--text3);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:3px">SBI FD</div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:0.9rem;font-weight:800;color:var(--text3)">₹${fmt(sbiInt)}</div>
            <div style="font-size:0.58rem;color:var(--text3);margin-top:2px">7.0% p.a.</div>
          </div>
          <div style="text-align:center;background:var(--bg3);border-radius:8px;padding:8px 4px;border:1px solid var(--border)">
            <div style="font-size:0.58rem;color:var(--text3);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:3px">HDFC FD</div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:0.9rem;font-weight:800;color:var(--text3)">₹${fmt(hdfcInt)}</div>
            <div style="font-size:0.58rem;color:var(--text3);margin-top:2px">7.4% p.a.</div>
          </div>
          <div style="text-align:center;background:var(--gold-dim);border-radius:8px;padding:8px 4px;border:1px solid rgba(26,111,191,0.2)">
            <div style="font-size:0.58rem;color:var(--gold);text-transform:uppercase;letter-spacing:0.05em;font-weight:700;margin-bottom:3px">This Product</div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:0.9rem;font-weight:800;color:var(--gold)">₹${fmt(myInt)}</div>
            <div style="font-size:0.58rem;color:var(--gold);margin-top:2px">${(mySRate*100).toFixed(1)}% p.a.</div>
          </div>
        </div>
        <div style="margin-top:8px;font-size:0.7rem;color:var(--green);font-weight:700">✅ You earn ₹${fmt(extra)} more than HDFC FD over ${years.toFixed(1)} year(s)</div>
      </div>`;
    }
  }
  html+='</div>';
  document.getElementById('results-body').innerHTML=html;
  box.classList.add('show');
  setTimeout(()=>box.scrollIntoView({behavior:'smooth',block:'nearest'}),100);
}

/* ════════════════════════════════════
   COMPARE
════════════════════════════════════ */
let cmpSel = new Set();

function buildCmpGrid(){
  const grid=document.getElementById('cmp-grid');
  grid.innerHTML='';
  cmpSel.clear();
  document.getElementById('cmp-table-wrap').classList.remove('show');
  for(const [co,products] of Object.entries(DATA)){
    for(const [pName,pList] of Object.entries(products)){
      const key=`${co}|||${pName}`;
      const isDb=pName.toLowerCase().includes('doubling');
      const isRD=pList[0]?.type==='RD';
      const rate=isDb?'Doubles':isRD?'12%':getMaxRate(pList).toFixed(1)+'%';
      const item=document.createElement('div');
      item.className='cmp-item';item.dataset.key=key;
      item.innerHTML=`<div class="cmp-check">✓</div><div class="cmp-item-info"><div class="cmp-item-name">${pName}</div><div class="cmp-item-company">${co}</div></div><div class="cmp-item-rate">${rate}</div>`;
      item.onclick=()=>toggleCmp(key,item);
      grid.appendChild(item);
    }
  }
}

function toggleCmp(key,item){
  if(cmpSel.has(key)){cmpSel.delete(key);item.classList.remove('selected');}
  else{
    if(cmpSel.size>=3){alert('Max 3 products');return;}
    cmpSel.add(key);item.classList.add('selected');
  }
  runCompare();
}

function runCompare(){
  const amt=parseFloat(document.getElementById('cmp-amount').value)||0;
  const tw=document.getElementById('cmp-table-wrap');
  if(cmpSel.size<2){tw.classList.remove('show');return;}
  const keys=Array.from(cmpSel);
  let th=`<tr><th>Feature</th>`;
  keys.forEach(k=>{const [co,pn]=k.split('|||');th+=`<th>${pn}<br><span style="font-size:0.6rem;opacity:0.6;font-weight:400">${co}</span></th>`;});
  th+='</tr>';
  const frows=[
    {l:'Type',fn:(co,pn,pl)=>pl[0]?.type==='RD'?'RD':pn.toLowerCase().includes('doubling')?'Doubling':pn.toLowerCase().includes('ncd')?'NCD':'Deposit'},
    {l:'Period',fn:(co,pn,pl)=>pl[0]?.period||'—'},
    {l:'Max Monthly Rate',fn:(co,pn,pl)=>{const m=pl.map(d=>parseFloat((d.monthly||'0').replace('%',''))).filter(Boolean);return m.length?Math.max(...m).toFixed(1)+'%':'—';}},
    {l:'Max Annual Rate',fn:(co,pn,pl)=>{const y=pl.map(d=>parseFloat((d.yearly||'0').replace('%','').replace('Not Available','0'))).filter(Boolean);return y.length?Math.max(...y).toFixed(1)+'%':'—';}},
    {l:'Premature Closure',fn:(co,pn,pl)=>pl[0]?.closureRemark||pl[0]?.generalRemark||'Not Allowed'},
    {l:'Min Investment',fn:(co,pn,pl)=>{if(pl[0]?.minAmount) return '₹'+pl[0].minAmount.toLocaleString('en-IN')+'/mo';return '₹'+(pl[0]?.minAmt||10000).toLocaleString('en-IN');}},
  ];
  if(amt>0){
    frows.push({l:'Monthly Income',fn:(co,pn,pl)=>{
      if(pn.toLowerCase().includes('doubling')||pl[0]?.type==='RD') return 'N/A';
      const rates=pl.map(d=>pct(d.monthly)).filter(Boolean);
      return rates.length?'₹'+fmt(amt*Math.max(...rates)/12)+'/mo':'—';
    }});
    frows.push({l:'Maturity Value',fn:(co,pn,pl)=>{
      if(pn.toLowerCase().includes('doubling')) return '₹'+fmt(amt*2)+' (70mo)';
      if(pl[0]?.type==='RD') return '—';
      const per=pl[0]?.period||'5.5 YEARS';
      const m2=per.match(/(\d+\.?\d*)\s*(YEAR|Month)/i);
      let mo=m2?(m2[2].toLowerCase().startsWith('m')?Math.round(parseFloat(m2[1])):Math.round(parseFloat(m2[1])*12)):66;
      const rates=pl.map(d=>pct(d.monthly)).filter(Boolean);
      if(!rates.length) return '—';
      return '₹'+fmt(amt+amt*Math.max(...rates)/12*mo);
    }});
  }
  let tbody='';
  frows.forEach(fr=>{
    tbody+=`<tr><td><strong>${fr.l}</strong></td>`;
    keys.forEach(k=>{const [co,pn]=k.split('|||');const pl=DATA[co][pn];tbody+=`<td>${fr.fn(co,pn,pl)}</td>`;});
    tbody+='</tr>';
  });
  const tbl=document.getElementById('cmp-table');
  tbl.innerHTML=`<thead>${th}</thead><tbody>${tbody}</tbody>`;
  tw.classList.add('show');
}

/* ════════════════════════════════════
   FAQ
════════════════════════════════════ */
const FAQS=[
  {q:'What is the minimum investment amount?',a:'The minimum investment is ₹10,000 for Subordinated Deposits (SD), Doubling Schemes, and Nidhi Fixed Deposits. For NCDs, the minimum varies by company (₹3 Lakhs for SML Finance, ₹5 Lakhs for Vanchinad). For Recurring Deposits, the minimum monthly contribution is ₹1,000.'},
  {q:'What is a Subordinated Deposit (SD)?',a:'A Subordinated Deposit is a fixed-term investment offered by NBFCs. Your money earns a fixed interest rate paid monthly or annually. It is called "subordinated" because in case of liquidation, these depositors are paid after secured creditors. The tenure for SD products here is 5.5 years with no premature closure.'},
  {q:'What is a Non-Convertible Debenture (NCD)?',a:'NCDs are debt instruments issued by companies. They offer fixed interest and cannot be converted into shares. Both SML Finance and Vanchinad Finance offer 10-year NCDs. Premature closure is allowed after 1 year, with reducing penalties: 1–2% in early years, nil after 3 years.'},
  {q:'What is the Doubling Scheme?',a:'In the Doubling Scheme, your invested amount exactly doubles at maturity — which is 70 months (approximately 5 years and 10 months). No periodic interest is paid. Premature closure is not allowed. The implied return is approximately 12.5% per year.'},
  {q:'How is Recurring Deposit (RD) calculated?',a:'RD returns are computed using the standard annuity formula: M = R × [(1+r)^n − 1] / r × (1+r), where R is your monthly deposit, r is the monthly interest rate (annual rate ÷ 12), and n is the total number of months. Interest compounds monthly on each instalment from its deposit date.'},
  {q:'Can I close my investment before maturity?',a:'SD and Doubling Scheme products do not allow premature closure. NCDs allow closure after 1 year with a penalty that decreases over time (1–2% cut in year 1–2, 0.5–1% in year 2–3, nil after 3 years). After the 3rd year, if closed between anniversary dates, the effective rate is capped at 9%.'},
  {q:'Are these companies safe and regulated?',a:'SML Finance Ltd and Vanchinad Finance (P) Ltd are Non-Banking Financial Companies (NBFCs) registered and regulated by the Reserve Bank of India (RBI). Sangeeth Nidhi is a registered Nidhi Company regulated by the Ministry of Corporate Affairs, Government of India.'},
  {q:'How is interest taxed?',a:'Interest income from all these products is taxable under "Income from Other Sources" as per your income tax slab. TDS may be deducted at source if interest exceeds ₹5,000 per year for NBFCs or ₹40,000 (₹50,000 for seniors) for banks/nidhi. Consult your CA for personalised advice.'},
  {q:'Which product gives the highest returns?',a:'SML Finance SD for amounts above ₹25 Lakhs offers 14.5% annually — the highest in the portfolio. For amounts under ₹5 Lakhs, the Doubling Scheme is competitive at ~12.5% effective. Use the Compare screen to run a side-by-side analysis with your actual amount.'},
  {q:'How do I start investing?',a:'Simply decide your preferred product and amount using the Calculator here, then contact our advisors directly. They will guide you through KYC documentation, form filling, and cheque/NEFT submission. Your investment certificate will be issued within a few working days.'},
];

function buildFaq() {
  const el = document.getElementById('faq-items');
  if (!el || el.children.length > 0) return; // Prevent duplicate building
  
  FAQS.forEach(f => {
    const d = document.createElement('div');
    d.className = 'faq-card'; // Ensure 'open' class is NOT here by default
    d.innerHTML = `
      <button class="faq-q" onclick="toggleFaq(this)">
        ${f.q}
        <span class="faq-arr">▼</span>
      </button>
      <div class="faq-a">${f.a}</div>
    `;
    el.appendChild(d);
  });
}

function toggleFaq(btn) {
  const currentCard = btn.closest('.faq-card');
  const isOpen = currentCard.classList.contains('open');

  // Close all other open cards first (Accordion style)
  document.querySelectorAll('.faq-card.open').forEach(card => {
    card.classList.remove('open');
  });

  // If the clicked card wasn't open, open it now
  if (!isOpen) {
    currentCard.classList.add('open');
  }
}

function showSearch(){ alert('Search coming soon! Browse products in the Products tab.'); }

// Init
buildProds('all');
buildFaq();

/* ════════════════════════════════════
   SMART PRODUCT FINDER QUIZ
════════════════════════════════════ */
const QUIZ_STEPS = [
  { id:'age',   q:'How old are you?',                   opts:null },
  { id:'prof',  q:'What is your profession?',            opts:['Salaried','Business Owner','Self Employed','Homemaker','Retired','Student'] },
  { id:'amt',   q:'How much do you plan to invest?',     opts:['Under ₹50,000','₹50K – ₹2 Lakhs','₹2L – ₹5 Lakhs','₹5L – ₹25 Lakhs','₹25 Lakhs & above'] },
  { id:'tenor', q:'How long can you stay invested?',     opts:['Short (< 1 yr)','Medium (1–3 yrs)','Long (5–6 yrs)','Very Long (10 yrs)'] },
  { id:'payout',q:'How do you want your interest?',      opts:['Monthly income','Annual payout','At maturity (lump sum)','Monthly savings (RD)'] }
];

let qStep = 0;
let qAns  = {};

function quizAgeInput(){
  const v = parseInt(document.getElementById('quiz-age').value);
  const btn = document.getElementById('quiz-next');
  btn.classList.toggle('ready', v>=18 && v<=90);
}

function quizSetStep(step){
  qStep = step;
  const s = QUIZ_STEPS[step];

  // Update progress dots
  QUIZ_STEPS.forEach((_,i)=>{
    const dot = document.getElementById('qdot-'+i);
    dot.className = 'quiz-step-dot' + (i < step ? ' done' : i===step ? ' active' : '');
  });

  document.getElementById('quiz-question').textContent = s.q;
  document.getElementById('quiz-back').style.display = step > 0 ? 'block' : 'none';

  const ageWrap = document.getElementById('quiz-age-wrap');
  const optsEl  = document.getElementById('quiz-opts');
  const nextBtn = document.getElementById('quiz-next');

  if(step === 0){
    ageWrap.style.display = 'block';
    optsEl.style.display  = 'none';
    const age = document.getElementById('quiz-age').value;
    nextBtn.classList.toggle('ready', age>=18 && age<=90);
  } else {
    ageWrap.style.display = 'none';
    optsEl.style.display  = 'flex';
    optsEl.innerHTML = s.opts.map(o =>
      `<div class="quiz-opt${qAns[s.id]===o?' selected':''}" onclick="quizSelect(this,'${s.id}','${o}')">${o}</div>`
    ).join('');
    nextBtn.classList.toggle('ready', !!qAns[s.id]);
    nextBtn.textContent = step === QUIZ_STEPS.length-1 ? 'See Results ✓' : 'Next →';
  }
}

function quizSelect(el, key, val){
  document.querySelectorAll('#quiz-opts .quiz-opt').forEach(e=>e.classList.remove('selected'));
  el.classList.add('selected');
  qAns[key] = val;
  document.getElementById('quiz-next').classList.add('ready');
}

function quizNext(){
  if(qStep === 0){
    const age = parseInt(document.getElementById('quiz-age').value);
    if(!age || age<18 || age>90) return;
    qAns.age = age;
  }
  if(qStep < QUIZ_STEPS.length - 1){
    quizSetStep(qStep + 1);
  } else {
    quizShowResult();
  }
}

function quizShowResult(){
  const qf = document.getElementById('quiz-form');
  if(qf) qf.style.display = 'none';
  const qh = document.getElementById('quiz-header-block');
  if(qh) qh.style.display = 'none';
  const qs = document.getElementById('quiz-steps-bar');
  if(qs) qs.style.display = 'none';

  const recs = quizRecommend(qAns);
  const list = document.getElementById('quiz-rec-list');
  list.innerHTML = recs.map((r, i) => `
    <div class="quiz-rec-card ${i===0?'primary':'secondary'}" onclick="launchCalc('${r.co}','${r.prod}')">
      <div class="quiz-rec-rank r${i+1}">${i===0?'#1':'#2'}</div>
      <div class="quiz-rec-info">
        <div class="quiz-rec-co ${r.cls}">${r.coShort} · ${r.type}</div>
        <div class="quiz-rec-prod">${r.prod}</div>
        <div class="quiz-rec-reason">${r.reason}</div>
      </div>
      <div class="quiz-rec-rate ${r.cls}">${r.rate}</div>
    </div>`).join('');

  document.getElementById('quiz-result').classList.add('show');
}

function quizRecommend(a){
  const age    = a.age;
  const payout = a.payout;
  const tenor  = a.tenor;
  const amt    = a.amt;
  const prof   = a.prof;

  // Determine amount bucket
  const amtNum = amt==='Under ₹50,000'?30000 : amt==='₹50K – ₹2 Lakhs'?100000 :
                 amt==='₹2L – ₹5 Lakhs'?350000 : amt==='₹5L – ₹25 Lakhs'?1000000 : 3000000;

  const isMonthly  = payout === 'Monthly income';
  const isAnnual   = payout === 'Annual payout';
  const isMaturity = payout === 'At maturity (lump sum)';
  const isRD       = payout === 'Monthly savings (RD)';
  const isShort    = tenor  === 'Short (< 1 yr)';
  const isMedium   = tenor  === 'Medium (1–3 yrs)';
  const isLong     = tenor  === 'Long (5–6 yrs)';
  const isVeryLong = tenor  === 'Very Long (10 yrs)';
  const isRetired  = prof   === 'Retired' || age >= 58;
  const isStudent  = prof   === 'Student';
  const isSalaried = prof   === 'Salaried';

  const recs = [];

  // ── RD Path ──
  if(isRD){
    recs.push({ co:'Special Calculators', prod:'Recurring Deposit (RD)', cls:'blue',
      coShort:'SML Group', type:'RD',
      rate:'12% p.a.', reason:'Start with as little as ₹1,000/month. 12% p.a. compounded monthly over 3–4 years — ideal for salaried individuals building savings gradually.' });
    if(amtNum >= 500000 && isLong){
      recs.push({ co:'Vanchinad Finance (P) Ltd', prod:'SD 5.5 Year', cls:'van',
        coShort:'Vanchinad', type:'SD',
        rate:'14%', reason:'Once your RD matures, park the corpus in a Vanchinad SD at up to 14% p.a. for long-term growth.' });
    } else {
      recs.push({ co:'SANGEETH NIDHI', prod:'Sangeeth Nidhi Deposits', cls:'san',
        coShort:'Sangeeth Nidhi', type:'FD',
        rate:'12.5%', reason:'Sangeeth Nidhi deposits complement a monthly RD habit — good for medium tenures with flexible amounts.' });
    }
    return recs;
  }

  // ── Short tenor ──
  if(isShort){
    recs.push({ co:'SANGEETH NIDHI', prod:'Sangeeth Nidhi Deposits', cls:'san',
      coShort:'Sangeeth Nidhi', type:'FD',
      rate:'9%', reason:'Short-term (6–12 month) deposit with Sangeeth Nidhi — only regulated option with sub-1-year tenure in the SML Group.' });
    recs.push({ co:'SANGEETH NIDHI', prod:'Sangeeth Nidhi Deposits', cls:'san',
      coShort:'Sangeeth Nidhi', type:'FD',
      rate:'10.5%', reason:'Extend to 1–3 years for higher rates up to 10.5% p.a. with monthly or annual payout options.' });
    return recs;
  }

  // ── Very long (NCD) ──
  if(isVeryLong && amtNum >= 200000){
    const co = amtNum >= 500000 ? 'Vanchinad Finance (P) Ltd' : 'SML Finance Ltd';
    const cls = co==='Vanchinad Finance (P) Ltd' ? 'van' : 'sml';
    const coShort = co==='Vanchinad Finance (P) Ltd' ? 'Vanchinad' : 'SML Finance';
    const rate = isMonthly ? (amtNum>=1500000?'13%':'12.5%') : (amtNum>=1500000?'13.5%':'13%');
    recs.push({ co, prod:'Non-Convertible Debentures (NCD)', cls, coShort, type:'NCD',
      rate, reason:`10-year NCD with ${isMonthly?'monthly':'annual'} interest payout. Exit allowed after 1 year with reducing penalty. Best for long-term, high-yield fixed income.` });
    recs.push({ co:'SML Finance Ltd', prod:'SD 5.5 Year', cls:'sml', coShort:'SML Finance', type:'SD',
      rate: isAnnual?'14.5%':'14%', reason:'SD is a simpler 5.5-year option alongside your NCD. No closure allowed, but rates are among the highest available.' });
    return recs;
  }

  // ── Doubling / maturity path ──
  if(isMaturity){
    recs.push({ co:'SML Finance Ltd', prod:'Doubling Scheme', cls:'sml', coShort:'SML Finance', type:'Doubling',
      rate:'×2 in 70M', reason:'Your money doubles at maturity in 70 months (~5.8 yrs). No interim payouts — ideal if you do not need regular income and want maximum corpus growth.' });
    recs.push({ co:'Vanchinad Finance (P) Ltd', prod:'Sub-ordinated Debt Doubling Scheme', cls:'van', coShort:'Vanchinad', type:'Doubling',
      rate:'×2 in 70M', reason:'Same doubling benefit through Vanchinad Finance — diversify across both for added security.' });
    return recs;
  }

  // ── Long + Monthly income ──
  if(isLong && isMonthly){
    const co = amtNum>=2500000 ? 'SML Finance Ltd' : 'Vanchinad Finance (P) Ltd';
    const cls = co==='SML Finance Ltd'?'sml':'van';
    const coShort = co==='SML Finance Ltd'?'SML Finance':'Vanchinad';
    const rate = amtNum>=2500000?'14%':(amtNum>=500000?'13.5%':'12%');
    recs.push({ co, prod:'SD 5.5 Year', cls, coShort, type:'SD',
      rate, reason:`Monthly interest directly to your account for 5.5 years. ${isRetired?'Perfect for retirement income — stable and predictable.':'Great passive income stream alongside your primary income.'}` });
    recs.push({ co:'SANGEETH NIDHI', prod:'Sangeeth Nidhi Deposits', cls:'san', coShort:'Sangeeth', type:'FD',
      rate:'12%', reason:'Sangeeth Nidhi monthly option for smaller amounts or diversification alongside the primary SD.' });
    return recs;
  }

  // ── Long + Annual ──
  if(isLong && isAnnual){
    const rate = amtNum>=2500000?'14.5%':(amtNum>=500000?'13.5%':'13%');
    const co = amtNum>=2500000?'SML Finance Ltd':'Vanchinad Finance (P) Ltd';
    const cls = co==='SML Finance Ltd'?'sml':'van';
    const coShort = co==='SML Finance Ltd'?'SML Finance':'Vanchinad';
    recs.push({ co, prod:'SD 5.5 Year', cls, coShort, type:'SD',
      rate, reason:`Annual payout at up to ${rate} p.a. — interest credited once a year, principal returned at end of 5.5 years. Higher yield than monthly payout option.` });
    recs.push({ co:'SML Finance Ltd', prod:'Doubling Scheme', cls:'sml', coShort:'SML Finance', type:'Doubling',
      rate:'×2 in 70M', reason:'If you can forgo interim payouts entirely, the Doubling Scheme gives the best maturity return.' });
    return recs;
  }

  // ── Medium + any ──
  // ── Medium Tenure (1–3 years) ──
  if (isMedium) {
    // 1. Sangeeth Nidhi - The standard flexible choice
    recs.push({ 
      co: 'SANGEETH NIDHI', 
      prod: 'Sangeeth Nidhi Deposits', 
      cls: 'san', 
      coShort: 'Sangeeth Nidhi', 
      type: 'FD',
      rate: '11%', 
      reason: `Flexible 1–3 year tenure at up to 11% p.a. Note: Liquidity is available after 3 months, but closing before the term may reduce your interest rate.` 
    });

    // 2. NCD Option - Included for Medium tenure due to 1-year exit clause
    // Only recommended if the user meets the minimum amount threshold
    if (amtNum >= 200000) {
      recs.push({ 
        co: 'SML Finance Ltd', 
        prod: 'Non-Convertible Debentures (NCD)', 
        cls: 'sml', 
        type: 'NCD', 
        coShort: 'SML Finance',
        rate: '12.5%', 
        reason: 'High-yield option. Although it is a 10-year instrument, you can close it after 1 year. Note: Premature closure involves a small penalty on the interest rate.' 
      });
    }

    // 3. Upsell to Premium (if amount is high)
    if (amtNum >= 500000) {
      recs.push({ 
        co: 'SANGEETH NIDHI', 
        prod: 'Sangeeth Nidhi Deposits', 
        cls: 'san', 
        coShort: 'Sangeeth Nidhi', 
        type: 'FD',
        rate: '12.5%', 
        reason: 'If you can extend your horizon to 5 years, you unlock the 12.5% premium member rate.' 
      });
    }

    return recs;
  }

  // Fallback
  recs.push({ co:'SML Finance Ltd', prod:'SD 5.5 Year', cls:'sml', coShort:'SML Finance', type:'SD',
    rate:'14.5%', reason:'Best overall return in the SML Group for most investor profiles — 5.5 year fixed deposit with annual or monthly payout.' });
  recs.push({ co:'Vanchinad Finance (P) Ltd', prod:'SD 5.5 Year', cls:'van', coShort:'Vanchinad', type:'SD',
    rate:'14%', reason:'Strong alternative from Vanchinad Finance at comparable rates — good for diversification.' });
  return recs;
}

// Init quiz on load



function toggleMobMore(){
  const el=document.getElementById('mob-more-overlay');
  if(!el) return;
  el.style.display = (el.style.display==='none'||!el.style.display) ? 'flex' : 'none';
}
// Init quiz
quizSetStep(0);