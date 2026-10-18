const BASICS = {
  alphabet: [
    { letter: "A", pronunciation: "[a:]", example: "der Apfel", exampleAr: "تفاحة" },
    { letter: "B", pronunciation: "[be:]", example: "das Buch", exampleAr: "كتاب" },
    { letter: "C", pronunciation: "[tse:]", example: "der Computer", exampleAr: "كمبيوتر" },
    { letter: "D", pronunciation: "[de:]", example: "der Tisch", exampleAr: "طاولة" },
    { letter: "E", pronunciation: "[e:]", example: "der Elefant", exampleAr: "فيل" },
    { letter: "F", pronunciation: "[ɛf]", example: "das Fenster", exampleAr: "نافذة" },
    { letter: "G", pronunciation: "[ge:]", example: "das Glas", exampleAr: "كأس" },
    { letter: "H", pronunciation: "[ha:]", example: "das Haus", exampleAr: "منزل" },
    { letter: "I", pronunciation: "[i:]", example: "die Insel", exampleAr: "جزيرة" },
    { letter: "J", pronunciation: "[jɔt]", example: "das Jahr", exampleAr: "سنة" },
    { letter: "K", pronunciation: "[ka:]", example: "das Kind", exampleAr: "طفل" },
    { letter: "L", pronunciation: "[ɛl]", example: "die Lampe", exampleAr: "مصباح" },
    { letter: "M", pronunciation: "[ɛm]", example: "der Mann", exampleAr: "رجل" },
    { letter: "N", pronunciation: "[ɛn]", example: "die Nacht", exampleAr: "ليل" },
    { letter: "O", pronunciation: "[o:]", example: "das Obst", exampleAr: "فواكه" },
    { letter: "P", pronunciation: "[pe:]", example: "der Park", exampleAr: "حديقة" },
    { letter: "Q", pronunciation: "[ku:]", example: "die Quelle", exampleAr: "نبع" },
    { letter: "R", pronunciation: "[ɛʁ]", example: "das Rad", exampleAr: "دراجة" },
    { letter: "S", pronunciation: "[ɛs]", example: "die Sonne", exampleAr: "شمس" },
    { letter: "T", pronunciation: "[te:]", example: "der Tag", exampleAr: "يوم" },
    { letter: "U", pronunciation: "[u:]", example: "die Uhr", exampleAr: "ساعة" },
    { letter: "V", pronunciation: "[faʊ]", example: "der Vogel", exampleAr: "طائر" },
    { letter: "W", pronunciation: "[ve:]", example: "das Wasser", exampleAr: "ماء" },
    { letter: "X", pronunciation: "[ɪks]", example: "das Xylophon", exampleAr: "زيلوفون" },
    { letter: "Y", pronunciation: "[ʏpsilɔn]", example: "das Yoga", exampleAr: "يوغا" },
    { letter: "Z", pronunciation: "[tsɛt]", example: "der Zug", exampleAr: "قطار" },
    { letter: "Ä", pronunciation: "[ɛ:]", example: "die Äpfel", exampleAr: "تفاح (جمع)" },
    { letter: "Ö", pronunciation: "[ø:]", example: "das Öl", exampleAr: "زيت" },
    { letter: "Ü", pronunciation: "[y:]", example: "die Übung", exampleAr: "تمرين" },
    { letter: "ß", pronunciation: "[ɛs tsɛt]", example: "die Straße", exampleAr: "شارع" }
  ],
  numbers: [
    { num: "0", de: "null", ar: "صفر" },
    { num: "1", de: "eins", ar: "واحد" },
    { num: "2", de: "zwei", ar: "اثنان" },
    { num: "3", de: "drei", ar: "ثلاثة" },
    { num: "4", de: "vier", ar: "أربعة" },
    { num: "5", de: "fünf", ar: "خمسة" },
    { num: "6", de: "sechs", ar: "ستة" },
    { num: "7", de: "sieben", ar: "سبعة" },
    { num: "8", de: "acht", ar: "ثمانية" },
    { num: "9", de: "neun", ar: "تسعة" },
    { num: "10", de: "zehn", ar: "عشرة" },
    { num: "11", de: "elf", ar: "أحد عشر" },
    { num: "12", de: "zwölf", ar: "اثنا عشر" },
    { num: "13", de: "dreizehn", ar: "ثلاثة عشر" },
    { num: "14", de: "vierzehn", ar: "أربعة عشر" },
    { num: "15", de: "fünfzehn", ar: "خمسة عشر" },
    { num: "16", de: "sechzehn", ar: "ستة عشر" },
    { num: "17", de: "siebzehn", ar: "سبعة عشر" },
    { num: "18", de: "achtzehn", ar: "ثمانية عشر" },
    { num: "19", de: "neunzehn", ar: "تسعة عشر" },
    { num: "20", de: "zwanzig", ar: "عشرون" },
    { num: "21", de: "einundzwanzig", ar: "واحد وعشرون" },
    { num: "30", de: "dreißig", ar: "ثلاثون" },
    { num: "40", de: "vierzig", ar: "أربعون" },
    { num: "50", de: "fünfzig", ar: "خمسون" },
    { num: "60", de: "sechzig", ar: "ستون" },
    { num: "70", de: "siebzig", ar: "سبعون" },
    { num: "80", de: "achtzig", ar: "ثمانون" },
    { num: "90", de: "neunzig", ar: "تسعون" },
    { num: "100", de: "hundert", ar: "مئة" },
    { num: "1000", de: "tausend", ar: "ألف" }
  ],
  colors: [
    { de: "rot", ar: "أحمر", hex: "#dc2626" },
    { de: "blau", ar: "أزرق", hex: "#2563eb" },
    { de: "grün", ar: "أخضر", hex: "#16a34a" },
    { de: "gelb", ar: "أصفر", hex: "#eab308" },
    { de: "schwarz", ar: "أسود", hex: "#0f172a" },
    { de: "weiß", ar: "أبيض", hex: "#f8fafc" },
    { de: "grau", ar: "رمادي", hex: "#94a3b8" },
    { de: "braun", ar: "بني", hex: "#92400e" },
    { de: "orange", ar: "برتقالي", hex: "#ea580c" },
    { de: "rosa", ar: "وردي", hex: "#ec4899" },
    { de: "lila", ar: "بنفسجي", hex: "#a855f7" },
    { de: "gold", ar: "ذهبي", hex: "#d4af37" }
  ],
  weekdays: [
    { de: "Montag", ar: "الاثنين" },
    { de: "Dienstag", ar: "الثلاثاء" },
    { de: "Mittwoch", ar: "الأربعاء" },
    { de: "Donnerstag", ar: "الخميس" },
    { de: "Freitag", ar: "الجمعة" },
    { de: "Samstag", ar: "السبت" },
    { de: "Sonntag", ar: "الأحد" }
  ],
  months: [
    { de: "Januar", ar: "يناير" },
    { de: "Februar", ar: "فبراير" },
    { de: "März", ar: "مارس" },
    { de: "April", ar: "أبريل" },
    { de: "Mai", ar: "مايو" },
    { de: "Juni", ar: "يونيو" },
    { de: "Juli", ar: "يوليو" },
    { de: "August", ar: "أغسطس" },
    { de: "September", ar: "سبتمبر" },
    { de: "Oktober", ar: "أكتوبر" },
    { de: "November", ar: "نوفمبر" },
    { de: "Dezember", ar: "ديسمبر" }
  ]
};

let currentBasic = null;

function openBasicSection(section) {
  currentBasic = section;
  renderBasicSection();
}

function renderBasicSection() {
  const container = document.getElementById('basicsContent');
  if (!container) return;
  if (!currentBasic) {
    container.innerHTML = `
      <div style="max-width:900px; margin:0 auto;">
        <h2 style="color:#1e3a8a; text-align:center; margin-bottom:25px; font-size:24px;">📚 الأساسيات</h2>
        <p style="color:#64748b; text-align:center; margin-bottom:30px; font-size:15px;">اختر موضوعاً للبدء.</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px,1fr)); gap:18px;">
          ${renderBasicCard('alphabet', '🔤 الحروف', 'Alphabet', '30 حرفاً مع النطق')}
          ${renderBasicCard('numbers', '🔢 الأرقام', 'Zahlen', 'الأرقام من 0 إلى 1000')}
          ${renderBasicCard('colors', '🎨 الألوان', 'Farben', '12 لوناً أساسياً')}
          ${renderBasicCard('weekdays', '📅 أيام الأسبوع', 'Wochentage', '7 أيام')}
          ${renderBasicCard('months', '🗓️ شهور السنة', 'Monate', '12 شهراً')}
        </div>
      </div>`;
    return;
  }
  const data = BASICS[currentBasic];
  const titles = {
    alphabet: { icon: '🔤', title: 'الحروف (Alphabet)', desc: 'اضغط على أي حرف لسماع نطقه.' },
    numbers: { icon: '🔢', title: 'الأرقام (Zahlen)', desc: 'اضغط على أي رقم لسماع نطقه.' },
    colors: { icon: '🎨', title: 'الألوان (Farben)', desc: 'اضغط على أي لون لسماع نطقه.' },
    weekdays: { icon: '📅', title: 'أيام الأسبوع (Wochentage)', desc: 'اضغط على أي يوم لسماع نطقه.' },
    months: { icon: '🗓️', title: 'شهور السنة (Monate)', desc: 'اضغط على أي شهر لسماع نطقه.' }
  };
  const t = titles[currentBasic];
  let gridHTML = '';
  if (currentBasic === 'alphabet') {
    gridHTML = data.map(item => `<div style="background:#fff; padding:20px; border-radius:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:4px solid #4f46e5; cursor:pointer;" onclick="speak('${item.letter}')"><div style="font-size:36px; font-weight:800; color:#1e3a8a; direction:ltr;">${item.letter}</div><div style="font-size:14px; color:#64748b; direction:ltr;">${item.pronunciation}</div><div style="font-size:14px; color:#059669; margin-top:8px; font-weight:600; direction:ltr;">${item.example}</div><div style="font-size:13px; color:#64748b;">${item.exampleAr}</div></div>`).join('');
  } else if (currentBasic === 'numbers') {
    gridHTML = data.map(item => `<div style="background:#fff; padding:20px; border-radius:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:4px solid #10b981; cursor:pointer;" onclick="speak('${item.de}')"><div style="font-size:28px; font-weight:800; color:#047857;">${item.num}</div><div style="font-size:18px; font-weight:700; color:#1e3a8a; direction:ltr;">${item.de}</div><div style="font-size:14px; color:#64748b;">${item.ar}</div></div>`).join('');
  } else if (currentBasic === 'colors') {
    gridHTML = data.map(item => `<div style="background:#fff; padding:20px; border-radius:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:4px solid ${item.hex}; cursor:pointer;" onclick="speak('${item.de}')"><div style="width:60px; height:60px; background:${item.hex}; border-radius:50%; margin:0 auto 12px; border:2px solid #e2e8f0;"></div><div style="font-size:18px; font-weight:700; color:#1e3a8a; direction:ltr;">${item.de}</div><div style="font-size:14px; color:#64748b;">${item.ar}</div></div>`).join('');
  } else if (currentBasic === 'weekdays') {
    gridHTML = data.map((item, i) => `<div style="background:#fff; padding:20px; border-radius:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:4px solid #f59e0b; cursor:pointer;" onclick="speak('${item.de}')"><div style="font-size:14px; color:#d97706; font-weight:700;">${i + 1}</div><div style="font-size:20px; font-weight:700; color:#1e3a8a; direction:ltr;">${item.de}</div><div style="font-size:14px; color:#64748b;">${item.ar}</div></div>`).join('');
  } else if (currentBasic === 'months') {
    gridHTML = data.map((item, i) => `<div style="background:#fff; padding:20px; border-radius:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:4px solid #ec4899; cursor:pointer;" onclick="speak('${item.de}')"><div style="font-size:14px; color:#db2777; font-weight:700;">${i + 1}</div><div style="font-size:18px; font-weight:700; color:#1e3a8a; direction:ltr;">${item.de}</div><div style="font-size:14px; color:#64748b;">${item.ar}</div></div>`).join('');
  }
  container.innerHTML = `
    <div style="max-width:900px; margin:0 auto;">
      <button onclick="currentBasic = null; renderBasicSection();" style="padding:8px 16px; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; cursor:pointer; font-size:14px; font-weight:600; color:#64748b; font-family:Cairo,sans-serif; margin-bottom:20px;">← العودة للقائمة</button>
      <div style="text-align:center; margin-bottom:30px;">
        <div style="font-size:48px; margin-bottom:8px;">${t.icon}</div>
        <h2 style="color:#1e3a8a; font-size:24px; margin-bottom:8px;">${t.title}</h2>
        <p style="color:#64748b; font-size:15px;">${t.desc}</p>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(150px,1fr)); gap:14px;">${gridHTML}</div>
    </div>`;
}

function renderBasicCard(section, title, deTitle, desc) {
  return `<div onclick="openBasicSection('${section}')" style="background:#fff; padding:25px; border-radius:16px; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:5px solid #4f46e5; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-5px)';this.style.boxShadow='0 12px 24px rgba(79,70,229,0.15)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'"><h3 style="color:#1e3a8a; font-size:18px; margin-bottom:6px; font-weight:700;">${title}</h3><p style="color:#4f46e5; font-size:14px; font-weight:600; margin-bottom:8px; direction:ltr;">${deTitle}</p><p style="color:#64748b; font-size:13px;">${desc}</p></div>`;
}

function initBasicsTab() {
  currentBasic = null;
  renderBasicSection();
}
