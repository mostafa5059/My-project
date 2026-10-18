const ENGLISH_DATA = {
  verbs: [
    { en: "be", ar: "يكون", past: "was/were", pp: "been", example: "I am a student. (أنا طالب)" },
    { en: "have", ar: "يملك", past: "had", pp: "had", example: "I have a book. (لدي كتاب)" },
    { en: "go", ar: "يذهب", past: "went", pp: "gone", example: "I go to school. (أذهب إلى المدرسة)" },
    { en: "come", ar: "يأتي", past: "came", pp: "come", example: "He comes from Egypt. (هو من مصر)" },
    { en: "see", ar: "يرى", past: "saw", pp: "seen", example: "I see a bird. (أرى طائراً)" },
    { en: "eat", ar: "يأكل", past: "ate", pp: "eaten", example: "I eat an apple. (آكل تفاحة)" },
    { en: "drink", ar: "يشرب", past: "drank", pp: "drunk", example: "I drink water. (أشرب ماء)" },
    { en: "speak", ar: "يتحدث", past: "spoke", pp: "spoken", example: "I speak English. (أتحدث الإنجليزية)" },
    { en: "read", ar: "يقرأ", past: "read", pp: "read", example: "I read a book. (أقرأ كتاباً)" },
    { en: "write", ar: "يكتب", past: "wrote", pp: "written", example: "I write a letter. (أكتب رسالة)" }
  ],
  nouns: [
    { en: "table", ar: "طاولة", plural: "tables" },
    { en: "book", ar: "كتاب", plural: "books" },
    { en: "house", ar: "منزل", plural: "houses" },
    { en: "car", ar: "سيارة", plural: "cars" },
    { en: "man", ar: "رجل", plural: "men" },
    { en: "woman", ar: "امرأة", plural: "women" },
    { en: "child", ar: "طفل", plural: "children" },
    { en: "friend", ar: "صديق", plural: "friends" },
    { en: "school", ar: "مدرسة", plural: "schools" },
    { en: "city", ar: "مدينة", plural: "cities" }
  ],
  adjectives: [
    { en: "big", ar: "كبير" },
    { en: "small", ar: "صغير" },
    { en: "good", ar: "جيد" },
    { en: "bad", ar: "سيء" },
    { en: "new", ar: "جديد" },
    { en: "old", ar: "قديم" },
    { en: "beautiful", ar: "جميل" },
    { en: "fast", ar: "سريع" },
    { en: "slow", ar: "بطيء" },
    { en: "happy", ar: "سعيد" }
  ]
};

let currentEnglishSection = null;

function initEnglishTab() {
  renderEnglishList();
}

function renderEnglishList() {
  const container = document.getElementById('englishContent');
  if (!container) return;
  currentEnglishSection = null;
  
  container.innerHTML = `
    <div style="max-width:900px; margin:0 auto;">
      <h2 style="color:#1e3a8a; text-align:center; margin-bottom:25px; font-size:24px;">🇬🇧 English Basics</h2>
      <p style="color:#64748b; text-align:center; margin-bottom:30px; font-size:15px;">اختر قسماً للبدء.</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px,1fr)); gap:18px;">
        ${renderEnglishCard('verbs', '🔤 الأفعال', 'Verbs', '10 أفعال أساسية')}
        ${renderEnglishCard('nouns', '📦 الأسماء', 'Nouns', '10 أسماء أساسية')}
        ${renderEnglishCard('adjectives', '🎨 الصفات', 'Adjectives', '10 صفات أساسية')}
      </div>
    </div>`;
}

function renderEnglishCard(section, title, enTitle, desc) {
  return `<div onclick="openEnglishSection('${section}')" style="background:#fff; padding:25px; border-radius:16px; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:5px solid #2563eb; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-5px)';this.style.boxShadow='0 12px 24px rgba(37,99,235,0.15)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'"><h3 style="color:#1e3a8a; font-size:18px; margin-bottom:6px; font-weight:700;">${title}</h3><p style="color:#2563eb; font-size:14px; font-weight:600; margin-bottom:8px; direction:ltr;">${enTitle}</p><p style="color:#64748b; font-size:13px;">${desc}</p></div>`;
}

function openEnglishSection(section) {
  currentEnglishSection = section;
  renderEnglishSection();
}

function renderEnglishSection() {
  const container = document.getElementById('englishContent');
  const data = ENGLISH_DATA[currentEnglishSection];
  const titles = {
    verbs: { icon: '🔤', title: 'الأفعال (Verbs)', desc: 'اضغط على أي فعل لسماعه.' },
    nouns: { icon: '📦', title: 'الأسماء (Nouns)', desc: 'اضغط على أي اسم لسماعه.' },
    adjectives: { icon: '🎨', title: 'الصفات (Adjectives)', desc: 'اضغط على أي صفة لسماعها.' }
  };
  const t = titles[currentEnglishSection];
  let gridHTML = '';
  
  if (currentEnglishSection === 'verbs') {
    gridHTML = data.map(item => `<div style="background:#fff; padding:20px; border-radius:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:4px solid #2563eb; cursor:pointer;" onclick="speakEnglish('${item.en}')"><div style="font-size:22px; font-weight:700; color:#1e3a8a; direction:ltr;">${item.en}</div><div style="font-size:14px; color:#64748b;">${item.ar}</div><div style="font-size:13px; color:#059669; margin-top:6px; direction:ltr;">Past: ${item.past} | PP: ${item.pp}</div><div style="font-size:12px; color:#64748b; margin-top:6px; direction:ltr;">${item.example}</div></div>`).join('');
  } else if (currentEnglishSection === 'nouns') {
    gridHTML = data.map(item => `<div style="background:#fff; padding:20px; border-radius:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:4px solid #10b981; cursor:pointer;" onclick="speakEnglish('${item.en}')"><div style="font-size:22px; font-weight:700; color:#047857; direction:ltr;">${item.en}</div><div style="font-size:14px; color:#64748b;">${item.ar}</div><div style="font-size:13px; color:#059669; margin-top:6px; direction:ltr;">Plural: ${item.plural}</div></div>`).join('');
  } else if (currentEnglishSection === 'adjectives') {
    gridHTML = data.map(item => `<div style="background:#fff; padding:20px; border-radius:12px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:4px solid #f59e0b; cursor:pointer;" onclick="speakEnglish('${item.en}')"><div style="font-size:22px; font-weight:700; color:#b45309; direction:ltr;">${item.en}</div><div style="font-size:14px; color:#64748b;">${item.ar}</div></div>`).join('');
  }
  
  container.innerHTML = `
    <div style="max-width:900px; margin:0 auto;">
      <button onclick="initEnglishTab()" style="padding:8px 16px; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; cursor:pointer; font-size:14px; font-weight:600; color:#64748b; font-family:Cairo,sans-serif; margin-bottom:20px;">← العودة للقائمة</button>
      <div style="text-align:center; margin-bottom:30px;">
        <div style="font-size:48px; margin-bottom:8px;">${t.icon}</div>
        <h2 style="color:#1e3a8a; font-size:24px; margin-bottom:8px;">${t.title}</h2>
        <p style="color:#64748b; font-size:15px;">${t.desc}</p>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px,1fr)); gap:14px;">${gridHTML}</div>
    </div>`;
}

function speakEnglish(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}