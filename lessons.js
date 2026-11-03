/* ============================================================
   lessons.js — دروس Menschen A2.1
   البنية: تبويبات فرعية للمستويات (A2.1, A2.2, B1...)
   ============================================================ */
/* ============================================================
   محرك توليد البيانات (Data Generator) لتقصير الكود
   ============================================================ */

// 1. دالة الكلمات (تستنتج الجمع والحالات الإعرابية تلقائياً)
function w(word, ar, topic) {
  let plural = "—", akk = word, dat = word;
  
  if (word.startsWith("der ")) {
    plural = "die " + word.replace("der ", "");
    akk = "den " + word.replace("der ", "");
    dat = "dem " + word.replace("der ", "");
  } else if (word.startsWith("die ")) {
    plural = "die " + word.replace("die ", "") + "en"; // افتراض الجمع بـ en (يُعدل يدوياً إذا لزم)
    akk = word;
    dat = "der " + word.replace("die ", "");
  } else if (word.startsWith("das ")) {
    plural = "die " + word.replace("das ", "");
    akk = word;
    dat = "dem " + word.replace("das ", "");
  }
  
  return { de: word, ar: ar, plural: plural, akk: akk, dat: dat, topic: topic };
}

// 2. دالة الأفعال
function v(verb, ar, präsens, präteritum, perfekt, topic, type="regular") {
  return { de: verb, ar: ar, type: type, präsens: präsens, präteritum: präteritum, perfekt: perfekt, partizip: perfekt.split(' ').pop(), topic: topic };
}

// 3. دالة التمارين (Multiple Choice)
function mc(question, options, correctIndex, explanation) {
  return { type: "choose", question: question, options: options, correct: correctIndex, explanation: explanation };
}
const LESSON_LEVELS = [
  { id: "A2.1", label: "📚 Menschen A2.1", available: true },
  { id: "A2.2", label: "📚 Menschen A2.2", available: false },
  { id: "B1", label: "📚 Menschen B1", available: false }
];

let currentLessonLevel = "A2.1";
let currentLessonId = null;

const LESSONS = [
   /* ============ Menschen A2.1 — Lektion 1 ============ */
  {
    id: "M2-01",
    level: "A2.1",
    title: "Mein Opa war auch schon Bäcker",
    titleAr: "جدي كان خبازاً أيضاً",
    topic: "عائلة ومهن",
    emoji: "👨‍🍳",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    text: `Paul und Franka backen mit ihrem Großvater Brezeln. Paul findet es am Anfang kompliziert, aber sein Opa hilft ihm. Am Ende klappt es gut. Der Großvater erzählt: "Ich bin Opa. Aber das auf dem Foto, das war Opa. Ich habe auch einen Opa gehabt, und der war auch schon Bäcker."`,
    textAr: `بول وفرانكا يخبزان مع جدهما كعك البريتزل. يجد بول الأمر معقداً في البداية، لكن جده يساعده. في النهاية ينجح الأمر. يحكي الجد: "أنا الجد. لكن الذي في الصورة كان جدي. أنا أيضاً كان لي جد، وكان هو الآخر خبازاً."`,
    words: ["der Großvater", "der Bäcker", "die Familie", "der Beruf", "backen", "arbeiten", "erzählen"],
    
    // 👇 الكلمات الآن بسطر واحد فقط 👇
    newWords: [
      w("der Cousin", "ابن العم", "عائلة"),
      w("die Cousine", "ابنة العم", "عائلة"),
      w("der Onkel", "العم / الخال", "عائلة"),
      w("die Tante", "العمة / الخالة", "عائلة"),
      w("die Bäckerei", "مخبز", "مهن"),
      w("die Brezel", "كعكة البريتزل", "طعام"),
      v("backen", "يخبز", ["backe","backst","backt","backen","backt","backen"], "backte", "hat gebacken", "طعام", "unregelmäßig"),
      v("arbeiten", "يعمل", ["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"], "arbeitete", "hat gearbeitet", "مهن"),
      v("erzählen", "يحكي", ["erzähle","erzählst","erzählt","erzählen","erzählt","erzählen"], "erzählte", "hat erzählt", "تواصل")
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
          <tr><td>unsere Tante</td><td>unsere Tante</td><td>unserer Tante</td></tr>
        </table>
        <h4>2) Perfekt (الماضي التام)</h4>
        <p>يتكون من: <strong>haben/sein + Partizip II</strong>.</p>
        <ul>
          <li>machen → hat gemacht</li>
          <li>fahren → ist gefahren</li>
        </ul>
        <h4>3) Präteritum von sein und haben</h4>
        <table>
          <tr><th>Pronomen</th><th>sein</th><th>haben</th></tr>
          <tr><td>ich</td><td>war</td><td>hatte</td></tr>
          <tr><td>er/sie/es</td><td>war</td><td>hatte</td></tr>
        </table>
      `
    },
    
    // 👇 التمارين الآن بسطر واحد لكل تمرين 👇
    exercises: [
      mc("___ Opa war Bäcker. (نحن)", ["Unser", "Unserer", "Unserem", "Unseren"], 0, "Nominativ مذكر → unser Opa."),
      mc("Ich sehe ___ Tante. (نحن)", ["unsere", "unserer", "unseren", "unserem"], 0, "Akkusativ مؤنث → unsere Tante."),
      mc("Was ___ du gestern gemacht? (Perfekt)", ["hast", "bist", "hat", "ist"], 0, "معظم الأفعال تأخذ haben → hast gemacht."),
      mc("Wir ___ nach Berlin gefahren. (Perfekt)", ["sind", "haben", "seid", "hat"], 0, "fahren فعل حركة → sein → sind gefahren."),
      mc("Früher ___ ich viel Zeit. (Präteritum von haben)", ["hatte", "habe", "hat", "hatten"], 0, "ich + hatte (Präteritum)."),
      mc("Mein Onkel ___ sehr lustig. (Präteritum von sein)", ["war", "ist", "waren", "bin"], 0, "er + war (Präteritum).")
    ]
  },
  /* ============ Menschen A2.1 — Lektion 2 ============ */
  {
    id: "M2-02",
    level: "A2.1",
    title: "Wohin mit der Kommode?",
    titleAr: "إلى أين نضع الخزانة؟",
    topic: "سكن وأثاث",
    emoji: "🪑",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    text: `Nina und Tom ziehen in eine neue Wohnung. Die Möbel stehen schon im Flur, aber sie wissen nicht, wohin sie sie stellen sollen. "Wohin kommt die Kommode?", fragt Tom. "Stell sie doch ins Schlafzimmer, neben das Bett", antwortet Nina. "Und wohin mit dem Regal?" — "Das Regal hängen wir an die Wand über den Schreibtisch." Am Ende steht alles am richtigen Platz, und die Wohnung sieht gemütlich aus.`,
    textAr: `نينا وتوم ينتقلان إلى شقة جديدة. الأثاث يقف بالفعل في المدخل، لكنهما لا يعرفان أين يضعانه. يسأل توم: "إلى أين تذهب الخزانة؟" تجيب نينا: "ضعها في غرفة النوم، بجانب السرير." "وإلى أين نضع الرفوف؟" — "نعلّق الرفوف على الحائط فوق المكتب." في النهاية كل شيء في مكانه الصحيح، والشقة تبدو مريحة.`,
    words: [
      "die Kommode", "der Schrank", "das Regal", "das Sofa",
      "der Schreibtisch", "die Wand", "stellen", "hängen"
    ],
    newWords: [
      { de:"die Wohnung", ar:"الشقة", plural:"die Wohnungen", akk:"die Wohnung", dat:"der Wohnung", topic:"سكن" },
      { de:"das Zimmer", ar:"الغرفة", plural:"die Zimmer", akk:"das Zimmer", dat:"dem Zimmer", topic:"سكن" },
      { de:"das Schlafzimmer", ar:"غرفة النوم", plural:"die Schlafzimmer", akk:"das Schlafzimmer", dat:"dem Schlafzimmer", topic:"سكن" },
      { de:"das Wohnzimmer", ar:"غرفة المعيشة", plural:"die Wohnzimmer", akk:"das Wohnzimmer", dat:"dem Wohnzimmer", topic:"سكن" },
      { de:"die Küche", ar:"المطبخ", plural:"die Küchen", akk:"die Küche", dat:"der Küche", topic:"سكن" },
      { de:"das Bad", ar:"الحمام", plural:"die Bäder", akk:"das Bad", dat:"dem Bad", topic:"سكن" },
      { de:"der Flur", ar:"المدخل / الردهة", plural:"die Flure", akk:"den Flur", dat:"dem Flur", topic:"سكن" },
      { de:"der Balkon", ar:"الشرفة", plural:"die Balkone", akk:"den Balkon", dat:"dem Balkon", topic:"سكن" },
      { de:"die Kommode", ar:"الخزانة (أدراج)", plural:"die Kommoden", akk:"die Kommode", dat:"der Kommode", topic:"أثاث" },
      { de:"der Schrank", ar:"الخزانة (ملابس)", plural:"die Schränke", akk:"den Schrank", dat:"dem Schrank", topic:"أثاث" },
      { de:"das Regal", ar:"الرفوف", plural:"die Regale", akk:"das Regal", dat:"dem Regal", topic:"أثاث" },
      { de:"das Bett", ar:"السرير", plural:"die Betten", akk:"das Bett", dat:"dem Bett", topic:"أثاث" },
      { de:"das Sofa", ar:"الأريكة", plural:"die Sofas", akk:"das Sofa", dat:"dem Sofa", topic:"أثاث" },
      { de:"der Tisch", ar:"الطاولة", plural:"die Tische", akk:"den Tisch", dat:"dem Tisch", topic:"أثاث" },
      { de:"der Stuhl", ar:"الكرسي", plural:"die Stühle", akk:"den Stuhl", dat:"dem Stuhl", topic:"أثاث" },
      { de:"der Schreibtisch", ar:"مكتب الكتابة", plural:"die Schreibtische", akk:"den Schreibtisch", dat:"dem Schreibtisch", topic:"أثاث" },
      { de:"die Lampe", ar:"المصباح", plural:"die Lampen", akk:"die Lampe", dat:"der Lampe", topic:"أثاث" },
      { de:"der Teppich", ar:"السجادة", plural:"die Teppiche", akk:"den Teppich", dat:"dem Teppich", topic:"أثاث" },
      { de:"das Bild", ar:"الصورة", plural:"die Bilder", akk:"das Bild", dat:"dem Bild", topic:"ديكور" },
      { de:"die Wand", ar:"الحائط", plural:"die Wände", akk:"die Wand", dat:"der Wand", topic:"سكن" },
      { de:"die Decke", ar:"السقف", plural:"die Decken", akk:"die Decke", dat:"der Decke", topic:"سكن" },
      { de:"der Boden", ar:"الأرضية", plural:"die Böden", akk:"den Boden", dat:"dem Boden", topic:"سكن" },
      { de:"die Ecke", ar:"الزاوية", plural:"die Ecken", akk:"die Ecke", dat:"der Ecke", topic:"سكن" },
      { de:"die Tür", ar:"الباب", plural:"die Türen", akk:"die Tür", dat:"der Tür", topic:"سكن" },
      { de:"das Fenster", ar:"النافذة", plural:"die Fenster", akk:"das Fenster", dat:"dem Fenster", topic:"سكن" },
      { de:"der Umzug", ar:"الانتقال", plural:"die Umzüge", akk:"den Umzug", dat:"dem Umzug", topic:"سكن" },
      { de:"die Möbel", ar:"الأثاث", plural:"—", akk:"die Möbel", dat:"den Möbeln", topic:"أثاث" },
      { de:"der Platz", ar:"المكان", plural:"die Plätze", akk:"den Platz", dat:"dem Platz", topic:"سكن" },
      { de:"gemütlich", ar:"مريح / دافئ", topic:"صفات" },
      { de:"neben", ar:"بجانب", topic:"حروف جر" },
      { de:"über", ar:"فوق", topic:"حروف جر" },
      { de:"unter", ar:"تحت", topic:"حروف جر" },
      { de:"vor", ar:"أمام", topic:"حروف جر" },
      { de:"hinter", ar:"خلف", topic:"حروف جر" },
      { de:"zwischen", ar:"بين", topic:"حروف جر" },
      { de:"an", ar:"على (ملاصق)", topic:"حروف جر" },
      { de:"auf", ar:"على", topic:"حروف جر" },
      { de:"in", ar:"في / داخل", topic:"حروف جر" },
      { de:"stellen", ar:"يضع (أفقياً)", type:"regular", präsens:["stelle","stellst","stellt","stellen","stellt","stellen"], präteritum:"stellte", perfekt:"hat gestellt", partizip:"gestellt", topic:"حركة" },
      { de:"legen", ar:"يضع (منبطحاً)", type:"regular", präsens:["lege","legst","legt","legen","legt","legen"], präteritum:"legte", perfekt:"hat gelegt", partizip:"gelegt", topic:"حركة" },
      { de:"hängen", ar:"يعلّق", type:"regular", präsens:["hänge","hängst","hängt","hängen","hängt","hängen"], präteritum:"hängte", perfekt:"hat gehängt", partizip:"gehängt", topic:"حركة" },
      { de:"stehen", ar:"يقف", type:"unregelmäßig", präsens:["stehe","stehst","steht","stehen","steht","stehen"], präteritum:"stand", perfekt:"hat gestanden", partizip:"gestanden", topic:"موقع" },
      { de:"liegen", ar:"يستلقي", type:"unregelmäßig", präsens:["liege","liegst","liegt","liegen","liegt","liegen"], präteritum:"lag", perfekt:"hat gelegen", partizip:"gelegen", topic:"موقع" },
      { de:"einziehen", ar:"ينتقل للسكن", type:"trennbar", präsens:["ziehe ein","ziehst ein","zieht ein","ziehen ein","zieht ein","ziehen ein"], präteritum:"zog ein", perfekt:"ist eingezogen", partizip:"eingezogen", topic:"سكن" }
    ],
    grammar: {
      title: "Wechselpräpositionen: Wohin? + Akkusativ / Wo? + Dativ",
      titleAr: "حروف الجر المتغيرة: إلى أين؟ + Akkusativ / أين؟ + Dativ",
      explanation: `
        <h4>1) ما هي Wechselpräpositionen؟</h4>
        <p>هي 9 حروف جر تأخذ <strong>Akkusativ</strong> عند التعبير عن <strong>الحركة (Wohin?)</strong>، و<strong>Dativ</strong> عند التعبير عن <strong>الموقع الثابت (Wo?)</strong>.</p>
        <table>
          <tr><th>الحرف</th><th>المعنى</th></tr>
          <tr><td>in</td><td>في</td></tr>
          <tr><td>an</td><td>على (ملاصق)</td></tr>
          <tr><td>auf</td><td>على</td></tr>
          <tr><td>über</td><td>فوق</td></tr>
          <tr><td>unter</td><td>تحت</td></tr>
          <tr><td>vor</td><td>أمام</td></tr>
          <tr><td>hinter</td><td>خلف</td></tr>
          <tr><td>neben</td><td>بجانب</td></tr>
          <tr><td>zwischen</td><td>بين</td></tr>
        </table>

        <h4>2) القاعدة الأساسية</h4>
        <table>
          <tr><th>السؤال</th><th>الحالة</th><th>مثال</th></tr>
          <tr><td>Wohin? (إلى أين؟)</td><td><strong>Akkusativ</strong></td><td>Ich stelle die Kommode <strong>ins</strong> Schlafzimmer.</td></tr>
          <tr><td>Wo? (أين؟)</td><td><strong>Dativ</strong></td><td>Die Kommode steht <strong>im</strong> Schlafzimmer.</td></tr>
        </table>
        <div class="grammar-tip">💡 اختصار: <strong>in + das = ins</strong>، <strong>in + dem = im</strong>، <strong>an + das = ans</strong>، <strong>an + dem = am</strong>.</div>

        <h4>3) أدوات التعريف في الحالتين</h4>
        <table>
          <tr><th>الجنس</th><th>Nominativ</th><th>Akkusativ (Wohin?)</th><th>Dativ (Wo?)</th></tr>
          <tr><td>مذكر</td><td>der</td><td><strong>den</strong></td><td><strong>dem</strong></td></tr>
          <tr><td>مؤنث</td><td>die</td><td>die</td><td><strong>der</strong></td></tr>
          <tr><td>محايد</td><td>das</td><td>das</td><td><strong>dem</strong></td></tr>
          <tr><td>جمع</td><td>die</td><td>die</td><td><strong>den</strong> (+n)</td></tr>
        </table>

        <h4>4) أفعال الحركة (Wohin? → Akkusativ)</h4>
        <ul>
          <li><strong>stellen</strong> (يضع أفقياً) — Ich stelle den Tisch <strong>in die</strong> Küche.</li>
          <li><strong>legen</strong> (يضع منبطحاً) — Ich lege das Buch <strong>auf den</strong> Tisch.</li>
          <li><strong>hängen</strong> (يعلّق) — Ich hänge das Bild <strong>an die</strong> Wand.</li>
          <li><strong>setzen</strong> (يجلس شخصاً) — Ich setze das Kind <strong>auf den</strong> Stuhl.</li>
        </ul>

        <h4>5) أفعال الموقع الثابت (Wo? → Dativ)</h4>
        <ul>
          <li><strong>stehen</strong> (يقف) — Der Tisch steht <strong>in der</strong> Küche.</li>
          <li><strong>liegen</strong> (يستلقي) — Das Buch liegt <strong>auf dem</strong> Tisch.</li>
          <li><strong>hängen</strong> (معلّق) — Das Bild hängt <strong>an der</strong> Wand.</li>
          <li><strong>sitzen</strong> (يجلس) — Das Kind sitzt <strong>auf dem</strong> Stuhl.</li>
        </ul>
        <div class="grammar-tip">⚠️ لاحظ: <strong>hängen</strong> يمكن أن يأخذ Akkusativ (فعل حركة) أو Dativ (فعل موقع) حسب السياق — Ich hänge (Akk) vs Das Bild hängt (Dat).</div>

        <h4>6) أمثلة من الدرس</h4>
        <ul>
          <li>Wohin kommt die Kommode? — Stell sie <strong>ins</strong> Schlafzimmer, <strong>neben das</strong> Bett.</li>
          <li>Wohin mit dem Regal? — Wir hängen das Regal <strong>an die</strong> Wand <strong>über den</strong> Schreibtisch.</li>
          <li>Wo steht die Kommode? — Sie steht <strong>im</strong> Schlafzimmer, <strong>neben dem</strong> Bett.</li>
        </ul>
      `
    },
    exercises: [
      {
        type: "choose",
        question: "Ich stelle die Kommode ___ Schlafzimmer. (Wohin?)",
        options: ["ins", "im", "in der", "in dem"],
        correct: 0,
        explanation: "Wohin? → Akkusativ → in + das = ins."
      },
      {
        type: "choose",
        question: "Die Kommode steht ___ Schlafzimmer. (Wo?)",
        options: ["im", "ins", "in die", "in den"],
        correct: 0,
        explanation: "Wo? → Dativ → in + dem = im."
      },
      {
        type: "choose",
        question: "Wir hängen das Bild ___ Wand. (Wohin?)",
        options: ["an die", "an der", "auf die", "in die"],
        correct: 0,
        explanation: "Wohin? → Akkusativ. Wand مؤنث → an die Wand."
      },
      {
        type: "choose",
        question: "Das Bild hängt ___ Wand. (Wo?)",
        options: ["an der", "an die", "auf der", "in der"],
        correct: 0,
        explanation: "Wo? → Dativ. Wand مؤنث → an der Wand."
      },
      {
        type: "choose",
        question: "Wohin legst du das Buch? — Ich lege es ___ Tisch.",
        options: ["auf den", "auf dem", "auf der", "auf das"],
        correct: 0,
        explanation: "Wohin? + Tisch مذكر → Akkusativ → auf den Tisch."
      },
      {
        type: "choose",
        question: "Wo liegt das Buch? — Es liegt ___ Tisch.",
        options: ["auf dem", "auf den", "auf der", "auf die"],
        correct: 0,
        explanation: "Wo? + Tisch مذكر → Dativ → auf dem Tisch."
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
    container.innerHTML = `
      <div style="text-align:center;padding:60px 20px;">
        <div style="font-size:60px;margin-bottom:20px;">📚</div>
        <h2 style="color:var(--primary-dark);font-size:24px;margin-bottom:15px;">الدروس متاحة بالألمانية فقط</h2>
        <p style="color:var(--text-muted);font-size:16px;margin-bottom:25px;">دروس Menschen A2.1 مصممة لتعلم الألمانية — بدّل لغة المحتوى للمتابعة.</p>
        <button onclick="toggleContentLanguage()" style="background:var(--primary);color:#fff;border:none;padding:14px 32px;border-radius:25px;font-size:16px;font-weight:700;cursor:pointer;font-family:inherit;">
          🇩🇪 التبديل إلى الألمانية
        </button>
      </div>
    `;
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
function openLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;
  
  const allWords = [...(lesson.words || []), ...((lesson.newWords || []).map(w => w.de))];
  
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

  const grammarHTML = lesson.grammar ? `
    <div class="section-title" style="margin-top:30px; font-size: 22px;">📐 القاعدة: ${lesson.grammar.title}</div>
    <div class="rule-hint" style="font-size:16px; margin-bottom:20px;">${lesson.grammar.titleAr}</div>
    <div class="grammar-content" style="display:block;padding:30px;background:var(--card-bg);border-radius:16px;border-right:6px solid var(--primary); box-shadow:0 4px 15px rgba(0,0,0,0.05); font-size:16px; line-height:1.8;">
      ${lesson.grammar.explanation}
    </div>
  ` : '';

  const exercisesHTML = (lesson.exercises && lesson.exercises.length) ? `
    <div class="section-title" style="margin-top:30px; font-size: 22px;">📝 تمارين (${lesson.exercises.length})</div>
    <div id="lessonExercises" style="display:flex;flex-direction:column;gap:14px;"></div>
  ` : '';

  const imageHTML = lesson.image ? `
    <div style="width:100%; height:300px; border-radius:16px; overflow:hidden; margin-bottom:25px; border:1px solid var(--border-color);">
      <img src="${lesson.image}" alt="${lesson.title}" style="width:100%; height:100%; object-fit:cover;">
    </div>
  ` : '';

  const html = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px; flex-wrap:wrap; gap:15px;">
      <button class="btn-next" style="margin:0; padding:10px 25px; font-size:15px; background:var(--text-muted);" onclick="closeSingleLesson()">← العودة للدروس</button>
      <div style="text-align:left;">
        <h2 style="font-size:32px;color:var(--primary-dark);margin-bottom:5px;">${lesson.emoji} ${lesson.title}</h2>
        <p style="color:var(--text-muted);font-size:18px;font-weight:600;">${lesson.titleAr}</p>
      </div>
    </div>
    
    ${imageHTML}

    <div style="margin-bottom:25px; text-align:center;">
      <span class="badge regular" style="font-size:14px;">${lesson.level}</span>
      <span class="badge trennbar" style="font-size:14px;">${lesson.topic}</span>
    </div>
    
    <div class="section-title" style="font-size: 22px;">📖 النص</div>
    <div class="example-box" style="font-size:19px;line-height:2.2;padding:30px;">
      <div style="direction:ltr;text-align:right;font-weight:700;color:var(--text-main);">${lesson.text}</div>
      <div class="trans" style="color:var(--accent);margin-top:12px;font-weight:600;">${lesson.textAr}</div>
      <button class="audio-btn" style="position:static;display:inline-flex;width:45px;height:45px;margin-top:15px;font-size:20px;" onclick="speak('${lesson.text.replace(/'/g, "\\'")}')">🔊</button>
    </div>
    
    ${grammarHTML}
    
    <div class="section-title" style="margin-top:30px; font-size: 22px;">📦 كلمات الدرس (${allWords.length})</div>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin-top:15px; font-size:16px;">
        <thead><tr style="background:#eff6ff;"><th style="padding:14px; color:var(--primary-dark);">الكلمة</th><th style="padding:14px; color:var(--primary-dark);">المعنى</th><th style="padding:14px; color:var(--primary-dark);">معلومة</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    
    ${exercisesHTML}
  `;

  // إخفاء القائمة وإظهار الدرس
  document.getElementById('lessonsContent').classList.add('hidden');
  document.getElementById('lessonSubTabs').classList.add('hidden');
  const lessonContainer = document.getElementById('singleLessonContent');
  lessonContainer.classList.remove('hidden');
  lessonContainer.innerHTML = html;

  // تثبيت الدرس الحالي (لأجل التمارين)
  currentLessonId = id;

  // استدعاء دالة التمارين بعد بناء الصفحة
  if (lesson.exercises && lesson.exercises.length) {
    renderLessonExercises(lesson.exercises);
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  applyTranslationVisibility();
}

/* ========== دالة عرض التمارين ========== */
function renderLessonExercises(exercises) {
  const container = document.getElementById('lessonExercises');
  if (!container) return;
  
  container.innerHTML = exercises.map((ex, idx) => `
    <div class="lesson-exercise" data-idx="${idx}" style="background:var(--card-bg);padding:20px;border-radius:12px;border:1px solid var(--border-color);margin-bottom:10px;">
      <div style="font-weight:700;color:var(--primary-dark);margin-bottom:15px;font-size:18px;">${idx + 1}. ${ex.question}</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${ex.options.map((opt, i) => `
          <button class="lesson-exercise-opt" data-idx="${idx}" data-opt="${i}"
                  style="padding:14px 18px;background:#f8fafc;border:2px solid var(--border-color);border-radius:10px;cursor:pointer;font-size:16px;font-weight:600;text-align:right;direction:ltr;transition:all 0.3s;"
                  onclick="checkLessonExercise(${idx}, ${i})">${opt}</button>
        `).join('')}
      </div>
      <div id="lessonFeedback-${idx}" style="display:none;margin-top:15px;padding:15px;border-radius:10px;font-weight:600;"></div>
    </div>
  `).join('');
}
  
// دالة جديدة للعودة
function closeSingleLesson() {
  document.getElementById('singleLessonContent').classList.add('hidden');
  document.getElementById('lessonsContent').classList.remove('hidden');
  document.getElementById('lessonSubTabs').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function checkLessonExercise(exIdx, optIdx) {
  const lesson = LESSONS.find(l => l.id === currentLessonId);
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
