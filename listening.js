/* ============ تدريب الاستماع (Listening Practice) - متوافق مع progress ============ */
const LISTENING_DATA = [
  // المستوى A1 (جمل بسيطة)
  { de: "Ich heiße Ahmed.", ar: "اسمي أحمد.", level: "A1" },
  { de: "Ich komme aus Ägypten.", ar: "أنا من مصر.", level: "A1" },
  { de: "Ich wohne in Kairo.", ar: "أسكن في القاهرة.", level: "A1" },
  { de: "Ich lerne Deutsch.", ar: "أتعلم الألمانية.", level: "A1" },
  { de: "Ich bin Student.", ar: "أنا طالب.", level: "A1" },
  { de: "Ich habe Hunger.", ar: "أنا جائع.", level: "A1" },
  { de: "Das Wetter ist schön.", ar: "الطقس جميل.", level: "A1" },
  { de: "Wo ist der Bahnhof?", ar: "أين محطة القطار؟", level: "A1" },
  { de: "Wie viel kostet das?", ar: "كم تكلفة هذا؟", level: "A1" },
  { de: "Ich möchte einen Kaffee.", ar: "أريد قهوة.", level: "A1" },
  { de: "Ich gehe nach Hause.", ar: "أذهب إلى المنزل.", level: "A1" },
  { de: "Ich lese ein Buch.", ar: "أقرأ كتاباً.", level: "A1" },
  { de: "Ich trinke Wasser.", ar: "أشرب ماء.", level: "A1" },
  { de: "Ich esse einen Apfel.", ar: "آكل تفاحة.", level: "A1" },
  { de: "Ich spreche Arabisch.", ar: "أتحدث العربية.", level: "A1" },
  { de: "Ich stehe um 7 Uhr auf.", ar: "أستيقظ الساعة 7.", level: "A1" },
  { de: "Er kommt aus Deutschland.", ar: "هو من ألمانيا.", level: "A1" },
  { de: "Sie wohnt in Berlin.", ar: "هي تسكن في برلين.", level: "A1" },
  { de: "Wir lernen zusammen.", ar: "نتعلم معاً.", level: "A1" },
  { de: "Das ist mein Freund.", ar: "هذا صديقي.", level: "A1" },
  { de: "Wie heißt du?", ar: "ما اسمك؟", level: "A1" },
  { de: "Woher kommst du?", ar: "من أين أنت؟", level: "A1" },
  { de: "Wo wohnst du?", ar: "أين تسكن؟", level: "A1" },
  { de: "Wie alt bist du?", ar: "كم عمرك؟", level: "A1" },
  { de: "Was machst du?", ar: "ماذا تفعل؟", level: "A1" },
  { de: "Wann beginnt der Film?", ar: "متى يبدأ الفيلم؟", level: "A1" },
  { de: "Kannst du mir helfen?", ar: "هل يمكنك مساعدتي؟", level: "A1" },
  { de: "Hast du Zeit?", ar: "هل لديك وقت؟", level: "A1" },

  // المستوى A2 (جمل أطول)
  { de: "Ich fahre morgen nach Berlin.", ar: "أسافر غداً إلى برلين.", level: "A2" },
  { de: "Ich habe gestern einen Film gesehen.", ar: "شاهدت فيلماً أمس.", level: "A2" },
  { de: "Ich bin um 7 Uhr aufgestanden.", ar: "استيقظت الساعة 7.", level: "A2" },
  { de: "Ich muss für die Prüfung lernen.", ar: "يجب أن أدرس للامتحان.", level: "A2" },
  { de: "Ich möchte Deutsch lernen.", ar: "أريد تعلم الألمانية.", level: "A2" },
  { de: "Ich bleibe zu Hause, weil es regnet.", ar: "أبقى في المنزل لأنها تمطر.", level: "A2" },
  { de: "Ich freue mich auf den Urlaub.", ar: "أنا متحمس للإجازة.", level: "A2" },
  { de: "Ich interessiere mich für Sport.", ar: "أهتم بالرياضة.", level: "A2" },
  { de: "Ich helfe meiner Mutter zu Hause.", ar: "أساعد أمي في المنزل.", level: "A2" },
  { de: "Ich danke dir für die Hilfe.", ar: "أشكرك على المساعدة.", level: "A2" },
  { de: "Ich weiß, dass er morgen kommt.", ar: "أعرف أنه سيأتي غداً.", level: "A2" },
  { de: "Wenn ich Zeit habe, lerne ich Deutsch.", ar: "إذا كان لدي وقت، أتعلم الألمانية.", level: "A2" },
  { de: "Ich habe einen neuen Job gefunden.", ar: "وجدت وظيفة جديدة.", level: "A2" },
  { de: "Ich habe meinen Schlüssel verloren.", ar: "فقدت مفتاحي.", level: "A2" },
  { de: "Ich bin mit dem Bus gefahren.", ar: "سافرت بالحافلة.", level: "A2" },
  { de: "Ich habe im Supermarkt eingekauft.", ar: "تسوقت في السوبر ماركت.", level: "A2" },
  { de: "Ich rufe meine Mutter jeden Tag an.", ar: "أتصل بأمي كل يوم.", level: "A2" },
  { de: "Wir treffen uns um 8 Uhr.", ar: "نتقابل الساعة 8.", level: "A2" },
  { de: "Er hat mir ein Geschenk gegeben.", ar: "أعطاني هدية.", level: "A2" },
  { de: "Sie ist nach Hause gegangen.", ar: "ذهبت إلى المنزل.", level: "A2" },
  { de: "Ich hätte gerne ein Glas Wasser.", ar: "أريد كأس ماء من فضلك.", level: "A2" },
  { de: "Könnten Sie das bitte wiederholen?", ar: "هل يمكنك تكرار ذلك من فضلك؟", level: "A2" },
  { de: "Ich verstehe die Frage nicht.", ar: "لا أفهم السؤال.", level: "A2" },
  { de: "Können Sie langsamer sprechen?", ar: "هل يمكنك التحدث بشكل أبطأ؟", level: "A2" }
];

let listeningIndex = 0;
let listeningScore = 0;
let listeningFiltered = [];
let currentListeningLevel = 'all';
let listenAttempts = 0;

function startListening() {
  if (currentListeningLevel === 'all') {
    listeningFiltered = [...LISTENING_DATA];
  } else {
    listeningFiltered = LISTENING_DATA.filter(w => w.level === currentListeningLevel);
  }
  listeningFiltered.sort(() => Math.random() - 0.5);
  listeningIndex = 0;
  listeningScore = 0;
  loadListening();
}

function setListeningLevel(level) {
  currentListeningLevel = level;
  document.querySelectorAll('#tab-listening .level-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-level') === level);
  });
  startListening();
}

function normalizeListen(text) {
  return text.trim().toLowerCase()
    .replace(/[.,!?;:'"„"»«]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function loadListening() {
  const container = document.getElementById('listeningContent');
  if (!container) return;
  
  if (listeningIndex >= listeningFiltered.length) {
    container.innerHTML = `
      <div style="max-width:600px; margin:0 auto; text-align:center; padding:50px 30px; background:#fff; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        <div style="font-size:80px; margin-bottom:20px;">🎧</div>
        <h2 style="color:#1e3a8a; margin-bottom:15px; font-size:26px;">أحسنت! أكملت تدريب الاستماع</h2>
        <p style="color:#64748b; margin-bottom:25px; font-size:18px;">النتيجة: <strong style="color:#16a34a;">${listeningScore} من ${listeningFiltered.length}</strong></p>
        <button onclick="startListening()" style="padding:14px 40px; background:#4f46e5; color:#fff; border:none; border-radius:30px; cursor:pointer; font-size:16px; font-weight:700;">🔄 إعادة من البداية</button>
      </div>
    `;
    return;
  }
  
  const item = listeningFiltered[listeningIndex];
  const progress = ((listeningIndex + 1) / listeningFiltered.length * 100).toFixed(0);
  const levelBadge = item.level === 'A1' ? '#dcfce7' : '#fef3c7';
  const levelColor = item.level === 'A1' ? '#166534' : '#92400e';
  listenAttempts = 0;
  
  container.innerHTML = `
    <div style="max-width:700px; margin:0 auto;">
      <div style="display:flex; justify-content:space-between; margin-bottom:15px; color:#64748b; font-size:14px; font-weight:600;">
        <span>جملة ${listeningIndex + 1} من ${listeningFiltered.length}</span>
        <span>النتيجة: ${listeningScore} ✅</span>
      </div>
      <div style="background:#e2e8f0; height:8px; border-radius:10px; overflow:hidden; margin-bottom:25px;">
        <div style="width:${progress}%; height:100%; background:linear-gradient(90deg, #4f46e5, #818cf8); transition:width 0.3s;"></div>
      </div>
      
      <div style="background:#fff; border-radius:20px; padding:40px 30px; box-shadow:0 10px 30px rgba(0,0,0,0.1); text-align:center;">
        <div style="margin-bottom:20px;">
          <span style="display:inline-block; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700; background:${levelBadge}; color:${levelColor};">${item.level}</span>
        </div>
        
        <p style="color:#64748b; font-size:15px; margin-bottom:20px;">استمع للجملة ثم اكتب ما سمعته بالألمانية:</p>
        
        <button onclick="playListening()" id="playBtn" style="width:100px; height:100px; border-radius:50%; background:linear-gradient(135deg, #4f46e5, #818cf8); color:#fff; border:none; cursor:pointer; font-size:42px; box-shadow:0 8px 25px rgba(79,70,229,0.4); transition:all 0.3s; margin-bottom:15px;">🔊</button>
        <p style="color:#94a3b8; font-size:13px; margin-bottom:25px;">اضغط للاستماع (يمكنك الإعادة عدة مرات)</p>
        <p id="listenCount" style="color:#64748b; font-size:13px; margin-bottom:15px;">مرات الاستماع: 0</p>
        
        <textarea id="listeningInput" placeholder="اكتب ما سمعته هنا..." style="width:100%; padding:15px; border:2px solid #e2e8f0; border-radius:12px; font-size:16px; font-family:Cairo,sans-serif; min-height:80px; resize:vertical; outline:none; direction:ltr; text-align:left;" onfocus="this.style.borderColor='#818cf8'" onblur="this.style.borderColor='#e2e8f0'"></textarea>
        
        <div id="listeningFeedback" style="margin-top:20px; display:none; padding:20px; border-radius:12px;"></div>
        
        <div style="display:flex; gap:10px; margin-top:20px; flex-wrap:wrap;">
          <button onclick="checkListening()" id="listenCheckBtn" style="flex:1; min-width:150px; padding:14px 30px; background:#4f46e5; color:#fff; border:none; border-radius:12px; cursor:pointer; font-size:16px; font-weight:700;">✔️ تحقق</button>
          <button onclick="revealListening()" id="listenRevealBtn" style="padding:14px 25px; background:#fef3c7; color:#92400e; border:1px solid #fcd34d; border-radius:12px; cursor:pointer; font-size:15px; font-weight:600;">👁️ إظهار الإجابة</button>
        </div>
      </div>
    </div>
  `;
  
  setTimeout(() => playListening(), 500);
}

function playListening() {
  const item = listeningFiltered[listeningIndex];
  if (!item) return;
  
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.de);
    utterance.lang = 'de-DE';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
    listenAttempts++;
    const countEl = document.getElementById('listenCount');
    if (countEl) countEl.innerText = 'مرات الاستماع: ' + listenAttempts;
  }
}

function checkListening() {
  const input = document.getElementById('listeningInput').value;
  const item = listeningFiltered[listeningIndex];
  const feedback = document.getElementById('listeningFeedback');
  const checkBtn = document.getElementById('listenCheckBtn');
  
  if (!input.trim()) {
    feedback.style.display = 'block';
    feedback.innerHTML = '⚠️ يرجى كتابة ما سمعته أولاً.';
    feedback.style.background = '#fef3c7';
    feedback.style.color = '#92400e';
    feedback.style.borderRight = '4px solid #f59e0b';
    return;
  }
  
  // تسجيل النشاط في لوحة التقدم
  if (typeof trackActivity === 'function') trackActivity('listening', 1);
  
  const userNorm = normalizeListen(input);
  const correctNorm = normalizeListen(item.de);
  const isCorrect = userNorm === correctNorm;
  
  if (isCorrect) {
    listeningScore++;
    feedback.innerHTML = '✅ <strong>ممتاز! سمعت الجملة بشكل صحيح.</strong>';
    feedback.style.background = '#f0fdf4';
    feedback.style.color = '#166534';
    feedback.style.borderRight = '4px solid #16a34a';
  } else {
    const userWords = userNorm.split(' ');
    const correctWords = correctNorm.split(' ');
    const matched = correctWords.filter(w => userWords.includes(w)).length;
    const similarity = Math.round((matched / Math.max(userWords.length, correctWords.length)) * 100);
    
    let qualityMsg = '';
    if (similarity >= 80) qualityMsg = '🟡 قريب جداً! أخطاء بسيطة فقط.';
    else if (similarity >= 50) qualityMsg = '🟠 سمعت جزءاً من الجملة.';
    else qualityMsg = '🔴 الجملة صعبة، حاول مرة أخرى لاحقاً.';
    
    feedback.innerHTML = `
      ${qualityMsg}<br>
      <strong>الإجابة الصحيحة:</strong> <span dir="ltr" style="color:#059669; font-weight:700;">${item.de}</span><br>
      <span style="font-size:13px; opacity:0.8;">نسبة التشابه: ${similarity}%</span>
    `;
    feedback.style.background = '#fef2f2';
    feedback.style.color = '#991b1b';
    feedback.style.borderRight = '4px solid #dc2626';
  }
  
  feedback.style.display = 'block';
  checkBtn.innerText = '➡️ الجملة التالية';
  checkBtn.setAttribute('onclick', 'nextListening()');
  document.getElementById('listeningInput').disabled = true;
  document.getElementById('listenRevealBtn').style.display = 'none';
}

function revealListening() {
  const item = listeningFiltered[listeningIndex];
  const feedback = document.getElementById('listeningFeedback');
  feedback.innerHTML = `<strong>الإجابة الصحيحة:</strong> <span dir="ltr" style="color:#059669; font-weight:700;">${item.de}</span><br><span style="font-size:13px; color:#64748b;">${item.ar}</span>`;
  feedback.style.background = '#eff6ff';
  feedback.style.color = '#1e40af';
  feedback.style.borderRight = '4px solid #3b82f6';
  feedback.style.display = 'block';
  
  const checkBtn = document.getElementById('listenCheckBtn');
  checkBtn.innerText = '➡️ الجملة التالية';
  checkBtn.setAttribute('onclick', 'nextListening()');
  document.getElementById('listeningInput').disabled = true;
  document.getElementById('listenRevealBtn').style.display = 'none';
}

function nextListening() {
  listeningIndex++;
  loadListening();
}

function initListeningTab() {
  startListening();
}
