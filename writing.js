/* ============ تدريب الكتابة (Writing Practice) - متوافق مع progress ============ */
const WRITING_DATA = [
  { ar: "أنا طالب.", de: "Ich bin Student.", level: "A1" },
  { ar: "أنا من مصر.", de: "Ich komme aus Ägypten.", level: "A1" },
  { ar: "أنا أسكن في القاهرة.", de: "Ich wohne in Kairo.", level: "A1" },
  { ar: "أنا أتعلم الألمانية.", de: "Ich lerne Deutsch.", level: "A1" },
  { ar: "أنا أتحدث العربية.", de: "Ich spreche Arabisch.", level: "A1" },
  { ar: "أنا أحب الشوكولاتة.", de: "Ich mag Schokolade.", level: "A1" },
  { ar: "أنا جائع.", de: "Ich habe Hunger.", level: "A1" },
  { ar: "أنا عطشان.", de: "Ich habe Durst.", level: "A1" },
  { ar: "أنا متعب.", de: "Ich bin müde.", level: "A1" },
  { ar: "الطقس جميل اليوم.", de: "Das Wetter ist heute schön.", level: "A1" },
  { ar: "أين محطة القطار؟", de: "Wo ist der Bahnhof?", level: "A1" },
  { ar: "كم تكلفة هذا؟", de: "Wie viel kostet das?", level: "A1" },
  { ar: "هل يمكنك مساعدتي؟", de: "Kannst du mir helfen?", level: "A1" },
  { ar: "متى يبدأ الفيلم؟", de: "Wann beginnt der Film?", level: "A1" },
  { ar: "أريد قهوة، من فضلك.", de: "Ich möchte einen Kaffee, bitte.", level: "A1" },
  { ar: "الفاتورة، من فضلك.", de: "Die Rechnung, bitte.", level: "A1" },
  { ar: "ما اسمك؟", de: "Wie heißt du?", level: "A1" },
  { ar: "من أين أنت؟", de: "Woher kommst du?", level: "A1" },
  { ar: "أنا أذهب إلى العمل كل يوم.", de: "Ich gehe jeden Tag zur Arbeit.", level: "A1" },
  { ar: "أنا أستيقظ في الساعة السابعة.", de: "Ich stehe um sieben Uhr auf.", level: "A1" },
  { ar: "أنا أفطر ثم أذهب إلى العمل.", de: "Ich frühstücke und gehe dann zur Arbeit.", level: "A1" },
  { ar: "أنا أساعد أمي في المنزل.", de: "Ich helfe meiner Mutter zu Hause.", level: "A1" },
  { ar: "أنا أشكرك على المساعدة.", de: "Ich danke dir für die Hilfe.", level: "A1" },
  { ar: "أنا أشتري سيارة جديدة.", de: "Ich kaufe ein neues Auto.", level: "A1" },
  { ar: "أنا أقرأ كتاباً كل مساء.", de: "Ich lese jeden Abend ein Buch.", level: "A1" },
  { ar: "أنا أكتب رسالة إلى صديقي.", de: "Ich schreibe einen Brief an meinen Freund.", level: "A1" },
  { ar: "أنا أتصل بأمي كل يوم.", de: "Ich rufe meine Mutter jeden Tag an.", level: "A1" },
  { ar: "أنا أتسوق في السوبر ماركت.", de: "Ich kaufe im Supermarkt ein.", level: "A1" },
  { ar: "أنا أدعوك إلى الحفلة.", de: "Ich lade dich zur Party ein.", level: "A1" },
  { ar: "أنا أريد أن أتعلم الألمانية بسرعة.", de: "Ich will schnell Deutsch lernen.", level: "A2" },
  { ar: "أنا يجب أن أدرس للامتحان.", de: "Ich muss für die Prüfung lernen.", level: "A2" },
  { ar: "أنا أستطيع السباحة.", de: "Ich kann schwimmen.", level: "A2" },
  { ar: "هل يمكنني الدخول؟", de: "Darf ich hereinkommen?", level: "A2" },
  { ar: "هل يجب عليّ الانتظار هنا؟", de: "Soll ich hier warten?", level: "A2" },
  { ar: "أنا ذهبت إلى برلين أمس.", de: "Ich bin gestern nach Berlin gefahren.", level: "A2" },
  { ar: "أنا أكلت تفاحة.", de: "Ich habe einen Apfel gegessen.", level: "A2" },
  { ar: "أنا شربت قهوة.", de: "Ich habe Kaffee getrunken.", level: "A2" },
  { ar: "أنا اشتريت كتاباً جديداً.", de: "Ich habe ein neues Buch gekauft.", level: "A2" },
  { ar: "أنا التقيت بصديقي أمس.", de: "Ich habe gestern meinen Freund getroffen.", level: "A2" },
  { ar: "أنا أبقى في المنزل لأنها تمطر.", de: "Ich bleibe zu Hause, weil es regnet.", level: "A2" },
  { ar: "أنا أعرف أنه سيأتي.", de: "Ich weiß, dass er kommt.", level: "A2" },
  { ar: "إذا كان لدي وقت، أدرس.", de: "Wenn ich Zeit habe, lerne ich.", level: "A2" },
  { ar: "أنا أفرح بالإجازة.", de: "Ich freue mich auf den Urlaub.", level: "A2" },
  { ar: "أنا أهتم بالرياضة.", de: "Ich interessiere mich für Sport.", level: "A2" },
  { ar: "أنا أرتدي ملابسي بسرعة.", de: "Ich ziehe mich schnell an.", level: "A2" },
  { ar: "نتقابل الساعة الثامنة.", de: "Wir treffen uns um acht Uhr.", level: "A2" },
  { ar: "أنا أساعد الرجل.", de: "Ich helfe dem Mann.", level: "A2" },
  { ar: "أنا أشكر المرأة.", de: "Ich danke der Frau.", level: "A2" },
  { ar: "الكتاب يعجبني.", de: "Das Buch gefällt mir.", level: "A2" },
  { ar: "السيارة تنتمي لوالدي.", de: "Das Auto gehört meinem Vater.", level: "A2" }
];

let writingIndex = 0;
let writingScore = 0;
let writingFiltered = [];
let currentWritingLevel = 'all';

function startWriting() {
  if (currentWritingLevel === 'all') {
    writingFiltered = [...WRITING_DATA];
  } else {
    writingFiltered = WRITING_DATA.filter(w => w.level === currentWritingLevel);
  }
  writingFiltered.sort(() => Math.random() - 0.5);
  writingIndex = 0;
  writingScore = 0;
  loadWriting();
}

function setWritingLevel(level) {
  currentWritingLevel = level;
  document.querySelectorAll('#tab-writing .level-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-level') === level);
  });
  startWriting();
}

function loadWriting() {
  const container = document.getElementById('writingContent');
  if (!container) return;
  
  if (writingIndex >= writingFiltered.length) {
    container.innerHTML = `
      <div style="max-width:600px; margin:0 auto; text-align:center; padding:50px 30px; background:#fff; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        <div style="font-size:80px; margin-bottom:20px;">✍️</div>
        <h2 style="color:#1e3a8a; margin-bottom:15px; font-size:26px;">أحسنت! أكملت تمارين الكتابة</h2>
        <p style="color:#64748b; margin-bottom:25px; font-size:18px;">النتيجة: <strong style="color:#16a34a;">${writingScore} من ${writingFiltered.length}</strong></p>
        <button onclick="startWriting()" style="padding:14px 40px; background:#4f46e5; color:#fff; border:none; border-radius:30px; cursor:pointer; font-size:16px; font-weight:700;">🔄 إعادة من البداية</button>
      </div>
    `;
    return;
  }
  
  const item = writingFiltered[writingIndex];
  const progress = ((writingIndex + 1) / writingFiltered.length * 100).toFixed(0);
  const levelBadge = item.level === 'A1' ? '#dcfce7' : '#fef3c7';
  const levelColor = item.level === 'A1' ? '#166534' : '#92400e';
  
  container.innerHTML = `
    <div style="max-width:700px; margin:0 auto;">
      <div style="display:flex; justify-content:space-between; margin-bottom:15px; color:#64748b; font-size:14px; font-weight:600;">
        <span>جملة ${writingIndex + 1} من ${writingFiltered.length}</span>
        <span>النتيجة: ${writingScore} ✅</span>
      </div>
      <div style="background:#e2e8f0; height:8px; border-radius:10px; overflow:hidden; margin-bottom:25px;">
        <div style="width:${progress}%; height:100%; background:linear-gradient(90deg, #4f46e5, #818cf8); transition:width 0.3s;"></div>
      </div>
      <div style="background:#fff; border-radius:20px; padding:40px 30px; box-shadow:0 10px 30px rgba(0,0,0,0.1);">
        <div style="text-align:center; margin-bottom:20px;">
          <span style="display:inline-block; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700; background:${levelBadge}; color:${levelColor};">${item.level}</span>
        </div>
        <p style="color:#64748b; font-size:15px; margin-bottom:10px; text-align:center;">اكتب هذه الجملة بالألمانية:</p>
        <h2 style="color:#1e3a8a; font-size:24px; font-weight:700; margin-bottom:25px; text-align:center;">"${item.ar}"</h2>
        <textarea id="writingInput" placeholder="اكتب الإجابة بالألمانية هنا..." style="width:100%; padding:15px; border:2px solid #e2e8f0; border-radius:12px; font-size:16px; font-family:Cairo,sans-serif; min-height:100px; resize:vertical; outline:none; direction:ltr; text-align:left;" onfocus="this.style.borderColor='#818cf8'" onblur="this.style.borderColor='#e2e8f0'"></textarea>
        <div id="writingFeedback" style="margin-top:20px; display:none; padding:20px; border-radius:12px;"></div>
        <div style="display:flex; gap:10px; margin-top:20px; flex-wrap:wrap;">
          <button onclick="checkWriting()" id="checkBtn" style="flex:1; min-width:150px; padding:14px 30px; background:#4f46e5; color:#fff; border:none; border-radius:12px; cursor:pointer; font-size:16px; font-weight:700;">✔️ تحقق من الإجابة</button>
          <button onclick="skipWriting()" id="skipBtn" style="padding:14px 25px; background:#f1f5f9; color:#64748b; border:1px solid #e2e8f0; border-radius:12px; cursor:pointer; font-size:15px; font-weight:600;">⏭️ تخطي</button>
        </div>
      </div>
    </div>
  `;
}

function normalizeText(text) {
  return text.trim().toLowerCase().replace(/[.,!?;:'"„"»«]/g, '').replace(/\s+/g, ' ').trim();
}

function checkWriting() {
  const input = document.getElementById('writingInput').value;
  const item = writingFiltered[writingIndex];
  const feedback = document.getElementById('writingFeedback');
  const checkBtn = document.getElementById('checkBtn');
  
  if (!input.trim()) {
    feedback.style.display = 'block';
    feedback.innerHTML = '⚠️ يرجى كتابة إجابة أولاً.';
    feedback.style.background = '#fef3c7';
    feedback.style.color = '#92400e';
    feedback.style.borderRight = '4px solid #f59e0b';
    return;
  }
  
  // تسجيل النشاط في لوحة التقدم
  if (typeof trackActivity === 'function') trackActivity('writing', 1);
  
  const userNorm = normalizeText(input);
  const correctNorm = normalizeText(item.de);
  const isCorrect = userNorm === correctNorm;
  
  if (isCorrect) {
    writingScore++;
    feedback.innerHTML = '✅ <strong>إجابة صحيحة تماماً!</strong>';
    feedback.style.background = '#f0fdf4';
    feedback.style.color = '#166534';
    feedback.style.borderRight = '4px solid #16a34a';
    feedback.style.display = 'block';
  } else {
    const userWords = userNorm.split(' ');
    const correctWords = correctNorm.split(' ');
    const matched = correctWords.filter(w => userWords.includes(w)).length;
    const similarity = Math.round((matched / Math.max(userWords.length, correctWords.length)) * 100);
    
    let qualityMsg = '';
    if (similarity >= 80) qualityMsg = '🟡 قريب جداً! راجع الأخطاء البسيطة.';
    else if (similarity >= 50) qualityMsg = '🟠 إجابة جزئية، تحتاج مراجعة.';
    else qualityMsg = '🔴 إجابة تحتاج تحسين.';
    
    feedback.innerHTML = `
      ${qualityMsg}<br>
      <strong>الإجابة الصحيحة:</strong> <span dir="ltr" style="color:#059669; font-weight:700;">${item.de}</span><br>
      <span style="font-size:13px; opacity:0.8;">نسبة التشابه: ${similarity}%</span>
    `;
    feedback.style.background = '#fef2f2';
    feedback.style.color = '#991b1b';
    feedback.style.borderRight = '4px solid #dc2626';
    feedback.style.display = 'block';
  }
  
  checkBtn.innerText = '➡️ الجملة التالية';
  checkBtn.setAttribute('onclick', 'nextWriting()');
  document.getElementById('writingInput').disabled = true;
  document.getElementById('skipBtn').style.display = 'none';
}

function skipWriting() {
  const item = writingFiltered[writingIndex];
  const feedback = document.getElementById('writingFeedback');
  feedback.innerHTML = `<strong>الإجابة النموذجية:</strong> <span dir="ltr" style="color:#059669; font-weight:700;">${item.de}</span>`;
  feedback.style.background = '#eff6ff';
  feedback.style.color = '#1e40af';
  feedback.style.borderRight = '4px solid #3b82f6';
  feedback.style.display = 'block';
  
  const checkBtn = document.getElementById('checkBtn');
  checkBtn.innerText = '➡️ الجملة التالية';
  checkBtn.setAttribute('onclick', 'nextWriting()');
  document.getElementById('writingInput').disabled = true;
  document.getElementById('skipBtn').style.display = 'none';
}

function nextWriting() {
  writingIndex++;
  loadWriting();
}

function initWritingTab() {
  startWriting();
}
