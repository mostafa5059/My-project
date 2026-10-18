/* ============ نظام التكرار المتباعد (SRS) - متوافق مع اللغتين ============ */

function getSrsKey() {
  const lang = localStorage.getItem('content_language') || 'de';
  return 'app_srs_' + lang;
}

function loadSRSData() {
  const data = localStorage.getItem(getSrsKey());
  return data ? JSON.parse(data) : {};
}

function saveSRSData(data) {
  localStorage.setItem(getSrsKey(), JSON.stringify(data));
}

function getCardKey(word, type) {
  return type + '::' + word;
}

function initCard(data, word, ar, type) {
  const key = getCardKey(word, type);
  if (!data[key]) {
    data[key] = {
      word: word,
      ar: ar,
      type: type,
      interval: 0,
      nextReview: Date.now(),
      ease: 2.5,
      repetitions: 0,
      lastReview: null
    };
  } else {
    data[key].ar = ar;
  }
  return data[key];
}

function getDueCards() {
  const data = loadSRSData();
  const now = Date.now();
  const due = [];
  const allWords = [];
  const lang = localStorage.getItem('content_language') || 'de';
  
  if (lang === 'en') {
    if (typeof VERBS_EN !== 'undefined') {
      VERBS_EN.forEach(v => {
        allWords.push({ de: v.en, ar: v.ar, type: 'verb' });
      });
    }
    if (typeof NOUNS_EN !== 'undefined') {
      NOUNS_EN.forEach(n => {
        allWords.push({ de: n.en, ar: n.ar, type: 'noun' });
      });
    }
    if (typeof ADJECTIVES_EN !== 'undefined') {
      ADJECTIVES_EN.forEach(a => {
        allWords.push({ de: a.en, ar: a.ar, type: 'adj' });
      });
    }
  } else {
    if (typeof VERBS !== 'undefined') {
      VERBS.forEach(v => {
        const cleanDe = v.de.replace(/\s*\(.*\)\s*/g, '').trim();
        allWords.push({ de: cleanDe, ar: v.ar, type: 'verb' });
      });
    }
    if (typeof NOUNS !== 'undefined') {
      NOUNS.forEach(n => {
        allWords.push({ de: n.de, ar: n.ar, type: 'noun' });
      });
    }
    if (typeof ADJECTIVES !== 'undefined') {
      ADJECTIVES.forEach(a => {
        allWords.push({ de: a.de, ar: a.ar, type: 'adj' });
      });
    }
  }
  
  allWords.forEach(w => {
    initCard(data, w.de, w.ar, w.type);
  });
  
  Object.keys(data).forEach(key => {
    const card = data[key];
    if (card.nextReview <= now) {
      due.push(card);
    }
  });
  
  saveSRSData(data);
  return due;
}

function reviewCard(card, quality) {
  const data = loadSRSData();
  const key = getCardKey(card.word, card.type);
  const c = data[key];
  if (!c) return;
  
  if (quality === 1) {
    c.interval = 1;
    c.ease = Math.max(1.3, c.ease - 0.2);
    c.repetitions = 0;
  } else {
    if (c.repetitions === 0) {
      c.interval = quality === 5 ? 2 : 1;
    } else if (c.repetitions === 1) {
      c.interval = quality === 5 ? 6 : 3;
    } else {
      c.interval = Math.round(c.interval * c.ease);
    }
    c.repetitions++;
  }
  
  c.nextReview = Date.now() + (c.interval * 24 * 60 * 60 * 1000);
  c.lastReview = Date.now();
  saveSRSData(data);
}

function getStats() {
  const data = loadSRSData();
  const now = Date.now();
  let total = 0, due = 0, learned = 0;
  
  Object.keys(data).forEach(key => {
    total++;
    const c = data[key];
    if (c.nextReview <= now) due++;
    if (c.repetitions >= 2) learned++;
  });
  
  return { total, due, learned };
}

let currentReviewCards = [];
let currentReviewIndex = 0;
let reviewStats = { easy: 0, good: 0, hard: 0 };

function startReview() {
  currentReviewCards = getDueCards().sort(() => Math.random() - 0.5);
  currentReviewIndex = 0;
  reviewStats = { easy: 0, good: 0, hard: 0 };
  renderReviewTab();
}

function renderReviewTab() {
  const container = document.getElementById('reviewContent');
  if (!container) return;
  
  const stats = getStats();
  /* ✅ إصلاح: تحديد اللغة الحالية */
  const lang = localStorage.getItem('content_language') || 'de';
  const langLabel = lang === 'en' ? 'الإنجليزية' : 'الألمانية';
  
  if (currentReviewCards.length === 0 || currentReviewIndex >= currentReviewCards.length) {
    const done = currentReviewCards.length > 0;
    container.innerHTML = `
      <div style="max-width:600px; margin:0 auto; text-align:center; padding:50px 30px; background:#fff; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        <div style="font-size:80px; margin-bottom:20px;">${done ? '🎉' : '☕'}</div>
        <h2 style="color:#1e3a8a; margin-bottom:15px; font-size:26px;">${done ? 'أحسنت! أكملت مراجعة اليوم' : 'لا توجد بطاقات مستحقة'}</h2>
        <p style="color:#64748b; margin-bottom:25px;">${done ? 'نتيجة الجلسة: ' + reviewStats.easy + ' سهلة، ' + reviewStats.good + ' جيدة، ' + reviewStats.hard + ' صعبة' : 'عد غداً للمزيد من المراجعة!'}</p>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:15px; margin:30px 0;">
          <div style="background:#eff6ff; padding:20px; border-radius:12px;"><div style="font-size:32px; font-weight:700; color:#2563eb;">${stats.total}</div><div style="color:#64748b; font-size:14px;">إجمالي الكلمات</div></div>
          <div style="background:#fef3c7; padding:20px; border-radius:12px;"><div style="font-size:32px; font-weight:700; color:#d97706;">${stats.due}</div><div style="color:#64748b; font-size:14px;">مستحقة الآن</div></div>
          <div style="background:#dcfce7; padding:20px; border-radius:12px;"><div style="font-size:32px; font-weight:700; color:#16a34a;">${stats.learned}</div><div style="color:#64748b; font-size:14px;">تم حفظها</div></div>
        </div>
        <button onclick="resetSRS()" style="margin-top:20px; padding:10px 25px; background:#fee2e2; color:#dc2626; border:none; border-radius:20px; cursor:pointer; font-weight:600; font-size:14px;">🗑️ إعادة تعيين البيانات</button>
      </div>`;
    return;
  }
  
  const card = currentReviewCards[currentReviewIndex];
  const progress = ((currentReviewIndex + 1) / currentReviewCards.length * 100).toFixed(0);
  
  let typeLabel, typeBg, typeColor;
  if (card.type === 'verb') { typeLabel = '🔤 فعل'; typeBg = '#dbeafe'; typeColor = '#1e40af'; }
  else if (card.type === 'noun') { typeLabel = '📦 اسم'; typeBg = '#dcfce7'; typeColor = '#166534'; }
  else { typeLabel = '🎨 صفة'; typeBg = '#fef3c7'; typeColor = '#92400e'; }
  
  container.innerHTML = `
    <div style="max-width:600px; margin:0 auto;">
      <div style="display:flex; justify-content:space-between; margin-bottom:15px; color:#64748b; font-size:14px; font-weight:600;">
        <span>بطاقة ${currentReviewIndex + 1} من ${currentReviewCards.length}</span>
        <span>مستحقة اليوم: ${currentReviewCards.length}</span>
      </div>
      <div style="background:#e2e8f0; height:8px; border-radius:10px; overflow:hidden; margin-bottom:25px;">
        <div style="width:${progress}%; height:100%; background:linear-gradient(90deg, #4f46e5, #818cf8); transition:width 0.3s;"></div>
      </div>
      <div id="reviewCardBox" style="background:#fff; border-radius:20px; padding:60px 30px; box-shadow:0 10px 30px rgba(0,0,0,0.1); text-align:center; min-height:280px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <span style="display:inline-block; padding:6px 15px; border-radius:20px; font-size:12px; font-weight:700; margin-bottom:20px; background:${typeBg}; color:${typeColor};">${typeLabel}</span>
        <p style="color:#64748b; font-size:14px; margin-bottom:10px;">ترجم هذه الكلمة إلى ${langLabel}:</p>
        <h2 style="color:#1e3a8a; font-size:32px; font-weight:700; margin-bottom:15px;">${card.ar}</h2>
        <div id="revealBox" style="display:none; margin-top:20px;">
          <div style="background:#f0fdf4; padding:20px 40px; border-radius:12px; display:inline-block;">
            <div style="color:#64748b; font-size:14px; margin-bottom:5px;">${langLabel}:</div>
            <div style="color:#059669; font-size:32px; font-weight:700;">${card.word}</div>
            <button onclick="speak('${card.word.replace(/'/g, "\\'")}')" style="margin-top:10px; background:#eff6ff; border:none; border-radius:50%; width:36px; height:36px; cursor:pointer; font-size:18px;">🔊</button>
          </div>
        </div>
      </div>
      <div id="reviewButtons" style="margin-top:25px; text-align:center;">
        <button onclick="revealCard()" id="revealBtn" style="padding:16px 50px; background:#4f46e5; color:#fff; border:none; border-radius:30px; cursor:pointer; font-size:18px; font-weight:700; box-shadow:0 4px 15px rgba(79,70,229,0.3);">👁️ إظهار الإجابة</button>
      </div>
    </div>`;
}

function revealCard() {
  document.getElementById('revealBox').style.display = 'block';
  document.getElementById('revealBtn').style.display = 'none';
  document.getElementById('reviewButtons').innerHTML = `
    <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
      <button onclick="answerCard(1)" style="padding:16px 30px; background:#fee2e2; color:#dc2626; border:2px solid #fca5a5; border-radius:15px; cursor:pointer; font-size:16px; font-weight:700; flex:1; min-width:120px;">😓 صعبة</button>
      <button onclick="answerCard(3)" style="padding:16px 30px; background:#fef3c7; color:#d97706; border:2px solid #fcd34d; border-radius:15px; cursor:pointer; font-size:16px; font-weight:700; flex:1; min-width:120px;">🙂 جيدة</button>
      <button onclick="answerCard(5)" style="padding:16px 30px; background:#dcfce7; color:#16a34a; border:2px solid #86efac; border-radius:15px; cursor:pointer; font-size:16px; font-weight:700; flex:1; min-width:120px;">😎 سهلة</button>
    </div>
    <p style="color:#94a3b8; font-size:13px; margin-top:15px;">صعبة = غداً | جيدة = 3 أيام | سهلة = 7 أيام</p>`;
}

function answerCard(quality) {
  const card = currentReviewCards[currentReviewIndex];
  reviewCard(card, quality);
  if (typeof trackActivity === 'function') trackActivity('reviews', 1);
  if (quality === 1) reviewStats.hard++;
  else if (quality === 3) reviewStats.good++;
  else reviewStats.easy++;
  currentReviewIndex++;
  renderReviewTab();
}

function resetSRS() {
  if (confirm('هل أنت متأكد؟ سيتم حذف تقدم المراجعة لهذه اللغة فقط.')) {
    localStorage.removeItem(getSrsKey());
    startReview();
  }
}

function initReviewTab() {
  startReview();
}
