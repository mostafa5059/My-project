/* ============================================================
   lessons.js — قسم الدروس الألمانية (A1–A2)
   يعتمد على NOUNS / VERBS / ADJECTIVES من verbs.js
   ============================================================ */

const LESSONS = [
  {
    id: "L01",
    title: "Im Flughafen",
    titleAr: "في المطار",
    topic: "رحلات",
    level: "A1",
    emoji: "✈️",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Frankfurt_Airport_Terminal_1.jpg/640px-Frankfurt_Airport_Terminal_1.jpg",
    text: "Ich bin am Flughafen. Ich habe ein Ticket und einen Koffer. Der Flug ist um 10 Uhr. Ich zeige meinen Reisepass.",
    textAr: "أنا في المطار. لدي تذكرة وحقيبة. الرحلة الساعة 10. أُظهر جواز سفري.",
    words: ["der Flughafen", "das Ticket", "der Koffer", "der Flug", "der Reisepass"],
    newWords: []
  },
  {
    id: "L02",
    title: "Im Hotel",
    titleAr: "في الفندق",
    topic: "رحلات",
    level: "A1",
    emoji: "🏨",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Hotel_room_BN.jpg/640px-Hotel_room_BN.jpg",
    text: "Ich komme ins Hotel. Ich habe eine Reservierung. Hier ist mein Schlüssel. Das Zimmer ist im dritten Stock.",
    textAr: "أدخل الفندق. لدي حجز. هذا مفتاحي. الغرفة في الطابق الثالث.",
    words: ["das Hotel", "die Reservierung", "der Schlüssel", "das Zimmer", "die Unterkunft"],
    newWords: []
  },
  {
    id: "L03",
    title: "Was darf es sein?",
    titleAr: "ماذا تطلب؟",
    topic: "طعام",
    level: "A1",
    emoji: "🍽️",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Restaurant_Interior.jpg/640px-Restaurant_Interior.jpg",
    text: "Ich möchte bestellen. Zum Frühstück esse ich Brot mit Käse. Zum Mittagessen gibt es Salat. Am Abend trinke ich Tee.",
    textAr: "أريد أن أطلب. في الفطور آكل خبزاً مع جبن. في الغداء هناك سلطة. في المساء أشرب شاياً.",
    words: ["bestellen", "das Frühstück", "das Mittagessen", "das Abendessen", "der Salat", "die Rechnung"],
    newWords: []
  },
  {
    id: "L04",
    title: "Beim Arzt",
    titleAr: "عند الطبيب",
    topic: "صحة",
    level: "A1",
    emoji: "🩺",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Doctor_with_patient.jpg/640px-Doctor_with_patient.jpg",
    text: "Ich fühle mich nicht gut. Mein Kopf tut weh. Ich gehe zum Arzt. Er gibt mir ein Medikament. Ich kaufe eine Tablette in der Apotheke.",
    textAr: "لا أشعر بحال جيدة. رأسي يؤلمني. أذهب إلى الطبيب. يعطيني دواءً. أشتري قرصاً من الصيدلية.",
    words: ["der Arzt", "der Kopf", "das Medikament", "die Tablette", "die Apotheke", "das Krankenhaus"],
    newWords: []
  },
  {
    id: "L05",
    title: "Einkaufen gehen",
    titleAr: "الذهاب للتسوق",
    topic: "تسوق",
    level: "A1",
    emoji: "🛒",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Supermarket_in_Germany.jpg/640px-Supermarket_in_Germany.jpg",
    text: "Ich gehe in den Supermarkt. Der Preis ist gut. Es gibt einen Rabatt. Ich bezahle an der Kasse. Der Verkäufer gibt mir die Quittung.",
    textAr: "أذهب إلى السوبر ماركت. السعر جيد. هناك خصم. أدفع عند الصندوق. البائع يعطيني الإيصال.",
    words: ["der Preis", "der Rabatt", "die Rechnung", "die Quittung", "der Verkäufer", "bezahlen"],
    newWords: []
  },
  {
    id: "L06",
    title: "Wohin mit der Kommode?",
    titleAr: "أين نضع الخزانة؟",
    topic: "منزل",
    level: "A2",
    emoji: "🪑",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Living_room_interior.jpg/640px-Living_room_interior.jpg",
    text: "Wir ziehen in eine neue Wohnung. Das Wohnzimmer ist groß. Die Kommode stellen wir an die Wand. Der Balkon ist schön. Die Miete ist nicht teuer.",
    textAr: "ننتقل إلى شقة جديدة. غرفة المعيشة كبيرة. نضع الخزانة عند الحائط. الشرفة جميلة. الإيجار ليس غالياً.",
    words: ["die Wohnung", "das Wohnzimmer", "der Balkon", "der Schlüssel", "der Schrank"],
    newWords: [
      { de:"die Kommode", ar:"خزانة أدراج", plural:"die Kommoden", akk:"die Kommode", dat:"der Kommode", topic:"منزل" },
      { de:"die Miete", ar:"إيجار", plural:"die Mieten", akk:"die Miete", dat:"der Miete", topic:"منزل" }
    ]
  },
  {
    id: "L07",
    title: "Schaut mal, der schöne Dom!",
    titleAr: "انظروا، الكاتدرائية الجميلة!",
    topic: "معالم أثرية",
    level: "A2",
    emoji: "⛪",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Cologne_Cathedral.jpg/640px-Cologne_Cathedral.jpg",
    text: "Wir besichtigen die Altstadt. Der Dom ist sehr alt und schön. Der Turm ist hoch. Neben der Kirche steht ein Denkmal. Es gibt viele Touristen.",
    textAr: "نتجول في البلدة القديمة. الكاتدرائية قديمة وجميلة جداً. البرج عالٍ. بجانب الكنيسة يوجد نصب تذكاري. هناك سياح كثيرون.",
    words: ["die Altstadt", "die Kirche", "der Turm", "das Denkmal"],
    newWords: [
      { de:"der Dom", ar:"كاتدرائية", plural:"die Dome", akk:"den Dom", dat:"dem Dom", topic:"معالم أثرية" }
    ]
  },
  {
    id: "L08",
    title: "Die Pyramiden besuchen",
    titleAr: "زيارة الأهرامات",
    topic: "معالم أثرية",
    level: "A1",
    emoji: "🏛️",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/640px-Kheops-Pyramid.jpg",
    text: "Die Pyramiden sind in Ägypten. Sie sind sehr alt. Wir sehen auch einen Tempel und eine Statue. Das Museum ist in der Nähe. Die Ruine ist interessant.",
    textAr: "الأهرامات في مصر. إنها قديمة جداً. نرى أيضاً معبداً وتمثالاً. المتحف قريب. الأطلال مثيرة للاهتمام.",
    words: ["die Pyramide", "der Tempel", "die Statue", "das Museum", "die Ruine"],
    newWords: []
  },
  {
    id: "L09",
    title: "Im Büro",
    titleAr: "في المكتب",
    topic: "عمل",
    level: "A2",
    emoji: "💼",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Office_workplace.jpg/640px-Office_workplace.jpg",
    text: "Ich arbeite in einem Büro. Mein Beruf ist interessant. Der Chef hat eine Besprechung. Das Gehalt ist gut. Ich arbeite acht Stunden pro Tag.",
    textAr: "أعمل في مكتب. مهنتي مثيرة للاهتمام. المدير لديه اجتماع. الراتب جيد. أعمل ثماني ساعات يومياً.",
    words: ["der Beruf", "das Büro", "die Besprechung", "der Chef", "das Gehalt", "arbeiten"],
    newWords: []
  },
  {
    id: "L10",
    title: "Eine Reise planen",
    titleAr: "التخطيط لرحلة",
    topic: "رحلات",
    level: "A2",
    emoji: "🗺️",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Travel_map.jpg/640px-Travel_map.jpg",
    text: "Wir planen eine Reise. Im Sommer haben wir Urlaub. Ich kaufe die Fahrkarte und lese den Fahrplan. Die Landkarte hilft uns. Wir fliegen nach Berlin.",
    textAr: "نخطط لرحلة. في الصيف لدينا إجازة. أشتري تذكرة السفر وأقرأ جدول المواعيد. الخريطة تساعدنا. نسافر بالطائرة إلى برلين.",
    words: ["die Reise", "der Urlaub", "die Fahrkarte", "der Fahrplan", "die Landkarte", "fliegen"],
    newWords: []
  }
];

/* ========== استخراج بيانات كلمة من المصادر ========== */
function getWordData(word) {
  const clean = word.replace(/^(der|die|das) /, '').trim();

  // 1) NOUNS
  if (typeof NOUNS !== 'undefined') {
    const n = NOUNS.find(x => x.de === word || x.de.replace(/^(der|die|das) /, '') === clean);
    if (n) return { ...n, source: 'NOUNS', kind: 'noun' };
  }
  // 2) VERBS
  if (typeof VERBS !== 'undefined') {
    const v = VERBS.find(x => x.de === word || x.de.replace(/ \(.*\)/, '') === clean);
    if (v) return { ...v, source: 'VERBS', kind: 'verb' };
  }
  // 3) ADJECTIVES
  if (typeof ADJECTIVES !== 'undefined') {
    const a = ADJECTIVES.find(x => x.de === word);
    if (a) return { ...a, source: 'ADJECTIVES', kind: 'adj' };
  }
  // 4) newWords داخل كل الدروس
  for (const lesson of LESSONS) {
    if (!lesson.newWords) continue;
    const nw = lesson.newWords.find(x => x.de === word);
    if (nw) return { ...nw, source: 'LESSON', kind: 'noun' };
  }
  return { de: word, ar: '—', source: 'UNKNOWN' };
}

/* ========== عرض التبويب ========== */
function initLessonsTab() {
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
  const cards = LESSONS.map(l => `
    <div class="lesson-card" onclick="openLesson('${l.id}')">
      <div class="lesson-img-wrap">
        <img src="${l.image}" alt="${l.title}" loading="lazy"
             onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:60px;\\'>${l.emoji}</span>';">
      </div>
      <div class="lesson-body">
        <div class="lesson-level">${l.level}</div>
        <h3 class="lesson-title">${l.title}</h3>
        <p class="lesson-title-ar">${l.titleAr}</p>
        <span class="lesson-topic">${l.topic}</span>
        <span class="lesson-words-count">${l.words.length + (l.newWords ? l.newWords.length : 0)} كلمة</span>
      </div>
    </div>
  `).join('');
  container.innerHTML = `<div class="lessons-grid">${cards}</div>`;
}

/* ========== فتح درس ========== */
function openLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;
  const allWords = [...lesson.words, ...((lesson.newWords || []).map(w => w.de))];
  const rows = allWords.map(w => {
    const d = getWordData(w);
    const clean = w.replace(/^(der|die|das) /, '');
    let extra = '';
    if (d.kind === 'noun' && d.plural) extra = `الجمع: ${d.plural}`;
    else if (d.kind === 'verb' && d.präteritum) extra = `الماضي: ${d.präteritum} — Perfekt: ${d.perfekt}`;
    return `<tr>
      <td style="font-weight:700;color:var(--primary-dark);direction:ltr;text-align:right;">
        ${w}
        <button class="audio-btn" style="position:static;display:inline-flex;width:30px;height:30px;font-size:14px;margin-right:6px;"
                onclick="speak('${clean.replace(/'/g, "\\'")}')">🔊</button>
      </td>
      <td>${d.ar || '—'}</td>
      <td style="font-size:13px;color:var(--text-muted);">${extra}</td>
    </tr>`;
  }).join('');

  const html = `
    <button class="close-btn" onclick="closeModal()">✕</button>
    <div style="text-align:center;margin-bottom:18px;">
      <h2 style="font-size:26px;">${lesson.emoji} ${lesson.title}</h2>
      <p style="color:var(--text-muted);font-size:17px;font-weight:600;margin-top:6px;">${lesson.titleAr}</p>
      <span class="badge regular">${lesson.level}</span>
      <span class="badge trennbar">${lesson.topic}</span>
    </div>
    <div class="section-title">📖 النص</div>
    <div class="example-box" style="font-size:17px;line-height:2;">
      <div style="direction:ltr;text-align:right;font-weight:700;">${lesson.text}</div>
      <div class="trans" style="color:var(--accent);margin-top:10px;font-weight:600;">${lesson.textAr}</div>
      <button class="audio-btn" style="position:static;display:inline-flex;width:36px;height:36px;margin-top:10px;"
              onclick="speak('${lesson.text.replace(/'/g, "\\'")}')">🔊</button>
    </div>
    <div class="section-title">📦 كلمات الدرس (${allWords.length})</div>
    <table>
      <thead><tr><th>الكلمة</th><th>المعنى</th><th>معلومة</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
  openModal(html);
  applyTranslationVisibility();
}