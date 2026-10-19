/* ============================================================
   lessons.js — دروس Menschen A2.1
   البنية: تبويبات فرعية للمستويات (A2.1, A2.2, B1...)
   ============================================================ */

const LESSON_LEVELS = [
  { id: "A2.1", label: "📚 Menschen A2.1", available: true },
  { id: "A2.2", label: "📚 Menschen A2.2", available: false },
  { id: "B1", label: "📚 Menschen B1", available: false }
];

let currentLessonLevel = "A2.1";

const LESSONS = [
  /* ============ Menschen A2.1 — Lektion 1 ============ */
  {
    id: "M2-01",
    level: "A2.1",
    title: "Mein Opa war auch schon Bäcker",
    titleAr: "جدي كان خبازاً أيضاً",
    topic: "عائلة ومهن",
    emoji: "👨‍🍳",
    image: null,
    text: `Paul und Franka backen mit ihrem Großvater Brezeln. Paul findet es am Anfang kompliziert, aber sein Opa hilft ihm. Am Ende klappt es gut. Der Großvater erzählt: "Ich bin Opa. Aber das auf dem Foto, das war Opa. Ich habe auch einen Opa gehabt, und der war auch schon Bäcker."`,
    textAr: `بول وفرانكا يخبزان مع جدهما كعك البريتزل. يجد بول الأمر معقداً في البداية، لكن جده يساعده. في النهاية ينجح الأمر. يحكي الجد: "أنا الجد. لكن الذي في الصورة كان جدي. أنا أيضاً كان لي جد، وكان هو الآخر خبازاً."`,
    words: [
      "der Großvater", "der Bäcker", "die Familie", "der Beruf",
      "backen", "arbeiten", "erzählen"
    ],
    newWords: [
      { de:"der Cousin", ar:"ابن العم", plural:"die Cousins", akk:"den Cousin", dat:"dem Cousin", topic:"عائلة" },
      { de:"die Cousine", ar:"ابنة العم", plural:"die Cousinen", akk:"die Cousine", dat:"der Cousine", topic:"عائلة" },
      { de:"der Neffe", ar:"ابن الأخ", plural:"die Neffen", akk:"den Neffen", dat:"dem Neffen", topic:"عائلة" },
      { de:"die Nichte", ar:"ابنة الأخ", plural:"die Nichten", akk:"die Nichte", dat:"der Nichte", topic:"عائلة" },
      { de:"der Onkel", ar:"العم / الخال", plural:"die Onkel", akk:"den Onkel", dat:"dem Onkel", topic:"عائلة" },
      { de:"die Tante", ar:"العمة / الخالة", plural:"die Tanten", akk:"die Tante", dat:"der Tante", topic:"عائلة" },
      { de:"der Schwiegersohn", ar:"زوج الابنة", plural:"die Schwiegersöhne", akk:"den Schwiegersohn", dat:"dem Schwiegersohn", topic:"عائلة" },
      { de:"die Schwiegertochter", ar:"زوجة الابن", plural:"die Schwiegertöchter", akk:"die Schwiegertochter", dat:"der Schwiegertochter", topic:"عائلة" },
      { de:"der Schwiegervater", ar:"الحمو", plural:"die Schwiegerväter", akk:"den Schwiegervater", dat:"dem Schwiegervater", topic:"عائلة" },
      { de:"die Schwiegermutter", ar:"الحماة", plural:"die Schwiegermütter", akk:"die Schwiegermutter", dat:"der Schwiegermutter", topic:"عائلة" },
      { de:"das Enkelkind", ar:"الحفيد", plural:"die Enkelkinder", akk:"das Enkelkind", dat:"dem Enkelkind", topic:"عائلة" },
      { de:"die Bäckerei", ar:"مخبز", plural:"die Bäckereien", akk:"die Bäckerei", dat:"der Bäckerei", topic:"مهن" },
      { de:"die Brezel", ar:"كعكة البريتزل", plural:"die Brezeln", akk:"die Brezel", dat:"der Brezel", topic:"طعام" },
      { de:"der Teig", ar:"العجين", plural:"die Teige", akk:"den Teig", dat:"dem Teig", topic:"طعام" },
      { de:"die Kindheit", ar:"الطفولة", plural:"—", akk:"die Kindheit", dat:"der Kindheit", topic:"حياة" },
      { de:"die Jugend", ar:"الشباب", plural:"—", akk:"die Jugend", dat:"der Jugend", topic:"حياة" },
      { de:"die Geschichte", ar:"القصة / التاريخ", plural:"die Geschichten", akk:"die Geschichte", dat:"der Geschichte", topic:"حياة" },
      { de:"die Erinnerung", ar:"الذكرى", plural:"die Erinnerungen", akk:"die Erinnerung", dat:"der Erinnerung", topic:"حياة" },
      { de:"der Flohmarkt", ar:"سوق البرغوث", plural:"die Flohmärkte", akk:"den Flohmarkt", dat:"dem Flohmarkt", topic:"حياة" },
      { de:"die Puppe", ar:"الدمية", plural:"die Puppen", akk:"die Puppe", dat:"der Puppe", topic:"حياة" },
      { de:"der Witz", ar:"النكتة", plural:"die Witze", akk:"den Witz", dat:"dem Witz", topic:"حياة" },
      { de:"die Mannschaft", ar:"الفريق", plural:"die Mannschaften", akk:"die Mannschaft", dat:"der Mannschaft", topic:"رياضة" },
      { de:"der Anfang", ar:"البداية", plural:"die Anfänge", akk:"den Anfang", dat:"dem Anfang", topic:"حياة" },
      { de:"das Ende", ar:"النهاية", plural:"die Enden", akk:"das Ende", dat:"dem Ende", topic:"حياة" },
      { de:"der Schluss", ar:"الختام", plural:"die Schlüsse", akk:"den Schluss", dat:"dem Schluss", topic:"حياة" },
      { de:"die Sache", ar:"الشيء", plural:"die Sachen", akk:"die Sache", dat:"der Sache", topic:"حياة" },
      { de:"das Spiel", ar:"اللعبة", plural:"die Spiele", akk:"das Spiel", dat:"dem Spiel", topic:"حياة" },
      { de:"die Zigarette", ar:"السجارة", plural:"die Zigaretten", akk:"die Zigarette", dat:"der Zigarette", topic:"حياة" },
      { de:"der Pfeffer", ar:"الفلفل", plural:"—", akk:"den Pfeffer", dat:"dem Pfeffer", topic:"طعام" },
      { de:"der Punkt", ar:"النقطة", plural:"die Punkte", akk:"den Punkt", dat:"dem Punkt", topic:"حياة" },
      { de:"der Satz", ar:"الجملة", plural:"die Sätze", akk:"den Satz", dat:"dem Satz", topic:"لغة" },
      { de:"das Studium", ar:"الدراسة الجامعية", plural:"die Studien", akk:"das Studium", dat:"dem Studium", topic:"دراسة" },
      { de:"klettern", ar:"يتسلق", type:"regular", präsens:["klettere","kletterst","klettert","klettern","klettert","klettern"], präteritum:"kletterte", perfekt:"ist geklettert", partizip:"geklettert", topic:"حركة" },
      { de:"sammeln", ar:"يجمع", type:"regular", präsens:["sammle","sammelst","sammelt","sammeln","sammelt","sammeln"], präteritum:"sammelte", perfekt:"hat gesammelt", partizip:"gesammelt", topic:"حياة" },
      { de:"streiten", ar:"يتشاجر", type:"unregelmäßig", präsens:["streite","streitest","streitet","streiten","streitet","streiten"], präteritum:"stritt", perfekt:"hat gestritten", partizip:"gestritten", topic:"تواصل" },
      { de:"übernachten", ar:"يبيت", type:"regular", präsens:["übernachte","übernachtest","übernachtet","übernachten","übernachtet","übernachten"], präteritum:"übernachtete", perfekt:"hat übernachtet", partizip:"übernachtet", topic:"سفر" },
      { de:"verkaufen", ar:"يبيع", type:"regular", präsens:["verkaufe","verkaufst","verkauft","verkaufen","verkauft","verkaufen"], präteritum:"verkaufte", perfekt:"hat verkauft", partizip:"verkauft", topic:"تسوق" },
      { de:"zeichnen", ar:"يرسم", type:"regular", präsens:["zeichne","zeichnest","zeichnet","zeichnen","zeichnet","zeichnen"], präteritum:"zeichnete", perfekt:"hat gezeichnet", partizip:"gezeichnet", topic:"فن" },
      { de:"aufmachen", ar:"يفتح", type:"trennbar", präsens:["mache auf","machst auf","macht auf","machen auf","macht auf","machen auf"], präteritum:"machte auf", perfekt:"hat aufgemacht", partizip:"aufgemacht", topic:"منزل" },
      { de:"aufpassen", ar:"ينتبه", type:"trennbar", präsens:["passe auf","passt auf","passt auf","passen auf","passt auf","passen auf"], präteritum:"passte auf", perfekt:"hat aufgepasst", partizip:"aufgepasst", topic:"حياة" },
      { de:"klappen", ar:"ينجح", type:"regular", präsens:["klappe","klappst","klappt","klappen","klappt","klappen"], präteritum:"klappte", perfekt:"hat geklappt", partizip:"geklappt", topic:"حياة" },
      { de:"passieren", ar:"يحدث", type:"regular", präsens:["passiere","passierst","passiert","passieren","passiert","passieren"], präteritum:"passierte", perfekt:"ist passiert", partizip:"passiert", topic:"حياة" },
      { de:"rufen", ar:"ينادي", type:"unregelmäßig", präsens:["rufe","rufst","ruft","rufen","ruft","rufen"], präteritum:"rief", perfekt:"hat gerufen", partizip:"gerufen", topic:"تواصل" },
      { de:"wachsen", ar:"ينمو", type:"unregelmäßig", präsens:["wachse","wächst","wächst","wachsen","wachst","wachsen"], präteritum:"wuchs", perfekt:"ist gewachsen", partizip:"gewachsen", topic:"حياة" },
      { de:"verrückt", ar:"مجنون", topic:"صفات" },
      { de:"früher", ar:"سابقاً", topic:"صفات" },
      { de:"einfach", ar:"بسيط", topic:"صفات" },
      { de:"fleißig", ar:"مجتهد", topic:"صفات" },
      { de:"geschlossen", ar:"مغلق", topic:"صفات" },
      { de:"kompliziert", ar:"معقد", topic:"صفات" },
      { de:"zuerst", ar:"أولاً", topic:"ظروف" },
      { de:"zum Schluss", ar:"في الختام", topic:"ظروف" },
      { de:"am Anfang", ar:"في البداية", topic:"ظروف" },
      { de:"am Ende", ar:"في النهاية", topic:"ظروف" }
    ],
    grammar: {
      title: "Possessivartikel unser/euer + Perfekt + Präteritum",
      titleAr: "ضمائر الملكية unser/euer + الماضي التام + الماضي البسيط",
      explanation: `
        <h4>1) Possessivartikel: unser / euer (ضمائر الملكية)</h4>
        <p>تُستخدم للتعبير عن الملكية. تأخذ نفس نهايات أدوات التعريف (der/die/das).</p>
        <table>
          <tr><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
          <tr><td>unser Opa</td><td>unseren Opa</td><td>unserem Opa</td></tr>
          <tr><td>unser Baby</td><td>unser Baby</td><td>unserem Baby</td></tr>
          <tr><td>unsere Tante</td><td>unsere Tante</td><td>unserer Tante</td></tr>
          <tr><td>unsere Neffen</td><td>unsere Neffen</td><td>unseren Neffen</td></tr>
        </table>
        <p>مثل: mein-, dein-, sein-, ihr-, unser-, eu(e)r-, ihr-, Ihr-</p>
        <div class="grammar-tip">💡 مع euer: عند إضافة نهاية، تُحذف الـ e (euer → eure، euer → euren).</div>

        <h4>2) Perfekt (الماضي التام)</h4>
        <p>يُستخدم للتعبير عن أحداث في الماضي. يتكون من: <strong>haben/sein + Partizip II</strong>.</p>
        <ul>
          <li>machen → hat gemacht</li>
          <li>fahren → ist gefahren</li>
          <li>anmachen → hat angemacht</li>
          <li>telefonieren → hat telefoniert</li>
          <li>erkennen → hat erkannt</li>
        </ul>

        <h4>3) Präteritum von sein und haben</h4>
        <table>
          <tr><th>Pronomen</th><th>sein</th><th>haben</th></tr>
          <tr><td>ich</td><td>war</td><td>hatte</td></tr>
          <tr><td>du</td><td>warst</td><td>hattest</td></tr>
          <tr><td>er/sie/es</td><td>war</td><td>hatte</td></tr>
          <tr><td>wir</td><td>waren</td><td>hatten</td></tr>
          <tr><td>ihr</td><td>wart</td><td>hattet</td></tr>
          <tr><td>sie/Sie</td><td>waren</td><td>hatten</td></tr>
        </table>
        <div class="grammar-tip">💡 Präteritum يُستخدم في السرد والكتابة، بينما Perfekt في المحادثة اليومية.</div>
      `
    },
    exercises: [
      {
        type: "choose",
        question: "___ Opa war Bäcker. (نحن)",
        options: ["Unser", "Unserer", "Unserem", "Unseren"],
        correct: 0,
        explanation: "Nominativ مذكر → unser Opa."
      },
      {
        type: "choose",
        question: "Ich sehe ___ Tante. (نحن)",
        options: ["unsere", "unserer", "unseren", "unserem"],
        correct: 0,
        explanation: "Akkusativ مؤنث → unsere Tante."
      },
      {
        type: "choose",
        question: "Was ___ du gestern gemacht? (Perfekt)",
        options: ["hast", "bist", "hat", "ist"],
        correct: 0,
        explanation: "معظم الأفعال تأخذ haben → hast gemacht."
      },
      {
        type: "choose",
        question: "Wir ___ nach Berlin gefahren. (Perfekt)",
        options: ["sind", "haben", "seid", "hat"],
        correct: 0,
        explanation: "fahren فعل حركة → sein → sind gefahren."
      },
      {
        type: "choose",
        question: "Früher ___ ich viel Zeit. (Präteritum von haben)",
        options: ["hatte", "habe", "hat", "hatten"],
        correct: 0,
        explanation: "ich + hatte (Präteritum)."
      },
      {
        type: "choose",
        question: "Mein Onkel ___ sehr lustig. (Präteritum von sein)",
        options: ["war", "ist", "waren", "bin"],
        correct: 0,
        explanation: "er + war (Präteritum)."
      }
    ]
  }
];

/* ========== استخراج بيانات كلمة من المصادر ========== */
function getWordData(word) {
  const clean = word.replace(/^(der|die|das) /, '').trim();

  if (typeof NOUNS !== 'undefined') {
    const n = NOUNS.find(x => x.de === word || x.de.replace(/^(der|die|das) /, '') === clean);
    if (n) return { ...n, source: 'NOUNS', kind: 'noun' };
  }
  if (typeof VERBS !== 'undefined') {
    const v = VERBS.find(x => x.de === word || x.de.replace(/ \(.*\)/, '') === clean);
    if (v) return { ...v, source: 'VERBS', kind: 'verb' };
  }
  if (typeof ADJECTIVES !== 'undefined') {
    const a = ADJECTIVES.find(x => x.de === word);
    if (a) return { ...a, source: 'ADJECTIVES', kind: 'adj' };
  }
  for (const lesson of LESSONS) {
    if (!lesson.newWords) continue;
    const nw = lesson.newWords.find(x => x.de === word);
    if (nw) return { ...nw, source: 'LESSON', kind: nw.type ? 'verb' : 'noun' };
  }
  return { de: word, ar: '—', source: 'UNKNOWN' };
}

/* ========== التبويبات الفرعية ========== */
function renderLessonSubTabs() {
  const container = document.getElementById('lessonSubTabs');
  if (!container) return;
  const tabs = LESSON_LEVELS.map(lv => {
    const cls = 'lesson-subtab' + (lv.id === currentLessonLevel ? ' active' : '') + (lv.available ? '' : ' disabled');
    const onclick = lv.available ? `onclick="switchLessonLevel('${lv.id}')"` : `onclick="showComingSoon('${lv.label}')"`;
    return `<button class="${cls}" ${onclick}>${lv.label}</button>`;
  }).join('');
  container.innerHTML = tabs;
}

function switchLessonLevel(level) {
  currentLessonLevel = level;
  renderLessonSubTabs();
  renderLessonsTab();
}

function showComingSoon(label) {
  alert(label + ' — قيد الإعداد');
}

/* ========== عرض التبويب ========== */
function initLessonsTab() {
  renderLessonSubTabs();
  renderLessonsTab();
}

function renderLessonsTab() {
  const container = document.getElementById('lessonsContent');
  if (!container) return;
  const lang = (typeof contentLanguage !== 'undefined') ? contentLanguage : 'de';
  if (lang !== 'de') {
    container.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">📚 الدروس متاحة حالياً للألمانية فقط. بدّل لغة المحتوى إلى Deutsch.</p>';
    return;
  }
  const filtered = LESSONS.filter(l => l.level === currentLessonLevel);
  if (!filtered.length) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">📚 لا توجد دروس في هذا المستوى بعد.</p>';
    return;
  }
  const cards = filtered.map(l => `
    <div class="lesson-card" onclick="openLesson('${l.id}')">
      <div class="lesson-img-wrap">
        ${l.image
          ? `<img src="${l.image}" alt="${l.title}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:60px;\\'>${l.emoji}</span>';" />`
          : `<span style="font-size:60px;">${l.emoji}</span>`}
      </div>
      <div class="lesson-body">
        <div class="lesson-level">${l.level}</div>
        <h3 class="lesson-title">${l.emoji} ${l.title}</h3>
        <p class="lesson-title-ar">${l.titleAr}</p>
        <span class="lesson-topic">${l.topic}</span>
        <span class="lesson-words-count">${(l.words ? l.words.length : 0) + (l.newWords ? l.newWords.length : 0)} كلمة</span>
      </div>
    </div>
  `).join('');
  container.innerHTML = `<div class="lessons-grid">${cards}</div>`;
}

/* ========== فتح درس ========== */
/* ========== فتح درس ========== */
function openLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;
  const allWords = [...(lesson.words || []), ...((lesson.newWords || []).map(w => w.de))];
  
  // تجهيز جدول الكلمات
  const rows = allWords.map(w => {
    const d = getWordData(w);
    const clean = w.replace(/^(der|die|das) /, '');
    let extra = '';
    if (d.kind === 'noun' && d.plural) extra = `الجمع: ${d.plural}`;
    else if (d.kind === 'verb' && d.präteritum) extra = `الماضي: ${d.präteritum} — Perfekt: ${d.perfekt}`;
    return `<tr>
      <td style="font-weight:700;color:var(--primary-dark);direction:ltr;text-align:right;padding:12px;">
        ${w}
        <button class="audio-btn" style="position:static;display:inline-flex;width:30px;height:30px;font-size:14px;margin-right:8px;" onclick="speak('${clean.replace(/'/g, "\\'")}')">🔊</button>
      </td>
      <td style="padding:12px;">${d.ar || '—'}</td>
      <td style="font-size:13px;color:var(--text-muted);padding:12px;">${extra}</td>
    </tr>`;
  }).join('');

  // تجهيز القاعدة النحوية
  const grammarHTML = lesson.grammar ? `
    <div class="section-title" style="margin-top:30px;">📐 القاعدة: ${lesson.grammar.title}</div>
    <div class="rule-hint" style="font-size:16px; margin-bottom:20px;">${lesson.grammar.titleAr}</div>
    <div class="grammar-content" style="display:block;padding:30px;background:var(--card-bg);border-radius:16px;border-right:6px solid var(--primary); box-shadow:0 4px 15px rgba(0,0,0,0.05);">
      ${lesson.grammar.explanation}
    </div>
  ` : '';

  // تجهيز حاوية التمارين
  const exercisesHTML = (lesson.exercises && lesson.exercises.length) ? `
    <div class="section-title" style="margin-top:30px;">📝 تمارين (${lesson.exercises.length})</div>
    <div id="lessonExercises" style="display:flex;flex-direction:column;gap:14px;"></div>
  ` : '';

  // تجميع النافذة
  const html = `
    <button class="close-btn" onclick="closeModal()">✕</button>
    <div style="text-align:center;margin-bottom:25px;">
      <h2 style="font-size:28px;color:var(--primary-dark);">${lesson.emoji} ${lesson.title}</h2>
      <p style="color:var(--text-muted);font-size:18px;font-weight:600;margin-top:8px;">${lesson.titleAr}</p>
      <span class="badge regular" style="font-size:14px;">${lesson.level}</span>
      <span class="badge trennbar" style="font-size:14px;">${lesson.topic}</span>
    </div>
    
    <div class="section-title">📖 النص</div>
    <div class="example-box" style="font-size:17px;line-height:2;padding:25px;">
      <div style="direction:ltr;text-align:right;font-weight:700;color:var(--text-main);">${lesson.text}</div>
      <div class="trans" style="color:var(--accent);margin-top:12px;font-weight:600;">${lesson.textAr}</div>
      <button class="audio-btn" style="position:static;display:inline-flex;width:40px;height:40px;margin-top:12px;font-size:18px;" onclick="speak('${lesson.text.replace(/'/g, "\\'")}')">🔊</button>
    </div>
    
    ${grammarHTML}
    
    <div class="section-title" style="margin-top:30px;">📦 كلمات الدرس (${allWords.length})</div>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin-top:15px;">
        <thead><tr style="background:#eff6ff;"><th style="padding:12px; color:var(--primary-dark);">الكلمة</th><th style="padding:12px; color:var(--primary-dark);">المعنى</th><th style="padding:12px; color:var(--primary-dark);">معلومة</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    
    ${exercisesHTML}
  `;

  // التعديل الحاسم: إضافة كلاس التكبير للنافذة وفتحها
  const modalContent = document.getElementById('modalContent');
  if (modalContent) {
    modalContent.classList.add('lesson-modal'); // كلاس التكبير
    modalContent.innerHTML = html;
  }
  document.getElementById('modal').classList.add('active');
  
  // التعديل الحاسم: استدعاء دالة عرض التمارين فوراً
  if (lesson.exercises && lesson.exercises.length) {
    renderLessonExercises(lesson.exercises);
  }
  
  applyTranslationVisibility();
}

/* ========== عرض التمارين داخل الدرس ========== */
function renderLessonExercises(exercises) {
  const container = document.getElementById('lessonExercises');
  if (!container) return;
  container.innerHTML = exercises.map((ex, idx) => `
    <div class="lesson-exercise" data-idx="${idx}" style="background:#fff;padding:18px;border-radius:12px;border:1px solid var(--border-color);">
      <div style="font-weight:700;color:var(--primary-dark);margin-bottom:12px;">${idx + 1}. ${ex.question}</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${ex.options.map((opt, i) => `
          <button class="lesson-exercise-opt" data-idx="${idx}" data-opt="${i}"
                  style="padding:12px 16px;background:#f8fafc;border:2px solid var(--border-color);border-radius:10px;cursor:pointer;font-size:15px;font-weight:600;text-align:right;direction:ltr;"
                  onclick="checkLessonExercise(${idx}, ${i})">${opt}</button>
        `).join('')}
      </div>
      <div id="lessonFeedback-${idx}" style="display:none;margin-top:12px;padding:12px;border-radius:10px;font-weight:600;"></div>
    </div>
  `).join('');
}

function checkLessonExercise(exIdx, optIdx) {
  const lesson = LESSONS.find(l => l.id === 'M2-01');  // يمكن تحسينها لاحقاً
  if (!lesson || !lesson.exercises) return;
  const ex = lesson.exercises[exIdx];
  if (!ex) return;
  const isCorrect = optIdx === ex.correct;
  const btns = document.querySelectorAll(`.lesson-exercise-opt[data-idx="${exIdx}"]`);
  btns.forEach(b => {
    b.disabled = true;
    if (+b.dataset.opt === ex.correct) b.style.background = '#dcfce7', b.style.borderColor = '#10b981';
    else if (+b.dataset.opt === optIdx && !isCorrect) b.style.background = '#fee2e2', b.style.borderColor = '#ef4444';
  });
  const fb = document.getElementById('lessonFeedback-' + exIdx);
  if (fb) {
    fb.style.display = 'block';
    fb.style.background = isCorrect ? '#dcfce7' : '#fee2e2';
    fb.style.color = isCorrect ? '#166534' : '#991b1b';
    fb.innerHTML = (isCorrect ? '✅ صحيح! ' : '❌ خطأ. ') + ex.explanation;
  }
}
