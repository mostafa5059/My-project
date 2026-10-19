/* ============================================================
   pronunciation.js — قسم النطق الألماني (Aussprache)
   المصدر: ملخص Hend A1 (ص 2-3) + إضافات
   البنية قابلة للتطوير: level, category, audioUrl جاهزة
   ============================================================ */

const PRONUNCIATION_DATA = [

  /* ============ 1. VOKALE (الحركات) ============ */

  {
    id: "p01",
    icon: "🅰️",
    category: "vowels",
    level: "A1",
    sound: "a — lang",
    soundAr: "الحركة a — طويلة",
    rule: "تُنطق طويلة إذا جاءت قبل H أو إذا جاءت مضاعفة (aa).",
    audioUrl: null,
    examples: [
      { word: "Tag", ar: "يوم", ipa: "[taːk]" },
      { word: "Saal", ar: "قاعة", ipa: "[zaːl]" },
      { word: "nah", ar: "قريب", ipa: "[naː]" }
    ]
  },
  {
    id: "p02",
    icon: "🅰️",
    category: "vowels",
    level: "A1",
    sound: "a — kurz",
    soundAr: "الحركة a — قصيرة",
    rule: "تُنطق قصيرة لو جاءت قبل حرف مضاعف (مثل: Satt, statt, nennen).",
    audioUrl: null,
    examples: [
      { word: "Satt", ar: "شبعان", ipa: "[zat]" },
      { word: "statt", ar: "بدلاً من", ipa: "[ʃtat]" },
      { word: "nennen", ar: "يسمّي", ipa: "[ˈnɛnən]" }
    ]
  },
  {
    id: "p03",
    icon: "🇪",
    category: "vowels",
    level: "A1",
    sound: "e — lang",
    soundAr: "الحركة e — طويلة",
    rule: "تُنطق طويلة إذا جاءت قبل H أو مضاعفة (ee).",
    audioUrl: null,
    examples: [
      { word: "See", ar: "بحيرة", ipa: "[zeː]" },
      { word: "Teh", ar: "شاي (اسم)", ipa: "[teː]" },
      { word: "gehen", ar: "يذهب", ipa: "[ˈɡeːən]" }
    ]
  },
  {
    id: "p04",
    icon: "🇪",
    category: "vowels",
    level: "A1",
    sound: "e — kurz",
    soundAr: "الحركة e — قصيرة",
    rule: "تُنطق قصيرة قبل حرفين ساكنين أو مضاعف.",
    audioUrl: null,
    examples: [
      { word: "Bett", ar: "سرير", ipa: "[bɛt]" },
      { word: "nennen", ar: "يسمّي", ipa: "[ˈnɛnən]" },
      { word: "wenn", ar: "إذا", ipa: "[vɛn]" }
    ]
  },
  {
    id: "p05",
    icon: "🇮",
    category: "vowels",
    level: "A1",
    sound: "i — lang",
    soundAr: "الحركة i — طويلة",
    rule: "تُنطق طويلة إذا جاءت قبل H، أو مضاعفة (ie / ih).",
    audioUrl: null,
    examples: [
      { word: "ihn", ar: "إياه", ipa: "[iːn]" },
      { word: "sie", ar: "هي", ipa: "[ziː]" },
      { word: "Liebe", ar: "حب", ipa: "[ˈliːbə]" }
    ]
  },
  {
    id: "p06",
    icon: "🇴",
    category: "vowels",
    level: "A1",
    sound: "o — lang",
    soundAr: "الحركة o — طويلة",
    rule: "تُنطق طويلة إذا جاءت قبل H أو مضاعفة (oo).",
    audioUrl: null,
    examples: [
      { word: "Brot", ar: "خبز", ipa: "[bʁoːt]" },
      { word: "wohnen", ar: "يسكن", ipa: "[ˈvoːnən]" },
      { word: "Ohr", ar: "أذن", ipa: "[oːɐ̯]" }
    ]
  },
  {
    id: "p07",
    icon: "🇺",
    category: "vowels",
    level: "A1",
    sound: "u — lang",
    soundAr: "الحركة u — طويلة",
    rule: "تُنطق طويلة إذا جاءت قبل H أو مضاعفة (uh).",
    audioUrl: null,
    examples: [
      { word: "Uhr", ar: "ساعة", ipa: "[uːɐ̯]" },
      { word: "Buch", ar: "كتاب", ipa: "[buːx]" },
      { word: "gut", ar: "جيد", ipa: "[ɡuːt]" }
    ]
  },

  /* ============ 2. DIPHTHONGE (الحركات المركبة) ============ */

  {
    id: "p08",
    icon: "🔀",
    category: "diphthongs",
    level: "A1",
    sound: "ei / ai",
    soundAr: "ei / ai = أي",
    rule: "تُنطق 'أي' — مثل: Mai, Bäuche, mein.",
    audioUrl: null,
    examples: [
      { word: "Mai", ar: "مايو", ipa: "[maɪ̯]" },
      { word: "mein", ar: "ملكي", ipa: "[maɪ̯n]" },
      { word: "Bäuche", ar: "بطون", ipa: "[ˈbɔɪ̯çə]" }
    ]
  },
  {
    id: "p09",
    icon: "🔀",
    category: "diphthongs",
    level: "A1",
    sound: "au",
    soundAr: "au = أو",
    rule: "تُنطق 'أو' — مثل: Auge, auch.",
    audioUrl: null,
    examples: [
      { word: "Auge", ar: "عين", ipa: "[ˈaʊ̯ɡə]" },
      { word: "auch", ar: "أيضاً", ipa: "[aʊ̯x]" },
      { word: "Haus", ar: "منزل", ipa: "[haʊ̯s]" }
    ]
  },
  {
    id: "p10",
    icon: "🔀",
    category: "diphthongs",
    level: "A1",
    sound: "eu / äu",
    soundAr: "eu / äu = أوي",
    rule: "تُنطق 'أوي' — مثل: neun, Bäuche, Leute.",
    audioUrl: null,
    examples: [
      { word: "neun", ar: "تسعة", ipa: "[nɔɪ̯n]" },
      { word: "Leute", ar: "ناس", ipa: "[ˈlɔɪ̯tə]" },
      { word: "Bäume", ar: "أشجار", ipa: "[ˈbɔɪ̯mə]" }
    ]
  },

  /* ============ 3. KONSONANTEN (السواكن) ============ */

  {
    id: "p11",
    icon: "🔊",
    category: "consonants",
    level: "A1",
    sound: "ch — nach a/o/u/au",
    soundAr: "ch — بعد a/o/u/au (خ)",
    rule: "تُنطق 'خ' — عندما يسبقها a, o, u, au.",
    audioUrl: null,
    examples: [
      { word: "Nacht", ar: "ليلة", ipa: "[naxt]" },
      { word: "auch", ar: "أيضاً", ipa: "[aʊ̯x]" },
      { word: "Buch", ar: "كتاب", ipa: "[buːx]" }
    ]
  },
  {
    id: "p12",
    icon: "🔊",
    category: "consonants",
    level: "A1",
    sound: "ch — nach i/e/ä/ö/ü",
    soundAr: "ch — بعد i/e/ä/ö/ü (ش)",
    rule: "تُنطق 'ش' خفيفة — مثل: ich, mich, durch.",
    audioUrl: null,
    examples: [
      { word: "ich", ar: "أنا", ipa: "[ɪç]" },
      { word: "mich", ar: "إياي", ipa: "[mɪç]" },
      { word: "durch", ar: "عبر", ipa: "[dʊʁç]" }
    ]
  },
  {
    id: "p13",
    icon: "🔊",
    category: "consonants",
    level: "A1",
    sound: "chs",
    soundAr: "chs = X (كس)",
    rule: "تُنطق 'كس' — مثل: sechs, Fuchs.",
    audioUrl: null,
    examples: [
      { word: "sechs", ar: "ستة", ipa: "[zɛks]" },
      { word: "Fuchs", ar: "ثعلب", ipa: "[fʊks]" },
      { word: "wachsen", ar: "ينمو", ipa: "[ˈvaksn̩]" }
    ]
  },
  {
    id: "p14",
    icon: "🔊",
    category: "consonants",
    level: "A1",
    sound: "B am Wortende",
    soundAr: "B في نهاية الكلمة = P",
    rule: "حرف B في نهاية الكلمة يُنطق P.",
    audioUrl: null,
    examples: [
      { word: "ab", ar: "من", ipa: "[ap]" },
      { word: "Stab", ar: "عصا", ipa: "[ʃtaːp]" },
      { word: "lieb", ar: "لطيف", ipa: "[liːp]" }
    ]
  },
  {
    id: "p15",
    icon: "🔊",
    category: "consonants",
    level: "A1",
    sound: "D am Wortende",
    soundAr: "D في نهاية الكلمة = T",
    rule: "حرف D في نهاية الكلمة يُنطق T.",
    audioUrl: null,
    examples: [
      { word: "Bad", ar: "حمام", ipa: "[baːt]" },
      { word: "Kind", ar: "طفل", ipa: "[kɪnt]" },
      { word: "Land", ar: "بلد", ipa: "[lant]" }
    ]
  },
  {
    id: "p16",
    icon: "🔊",
    category: "consonants",
    level: "A1",
    sound: "G am Wortende",
    soundAr: "G في نهاية الكلمة = K",
    rule: "حرف G في نهاية الكلمة يُنطق K.",
    audioUrl: null,
    examples: [
      { word: "Krieg", ar: "حرب", ipa: "[kʁiːk]" },
      { word: "Tag", ar: "يوم", ipa: "[taːk]" },
      { word: "Weg", ar: "طريق", ipa: "[veːk]" }
    ]
  },
  {
    id: "p17",
    icon: "🔊",
    category: "consonants",
    level: "A1",
    sound: "s — stimmhaft",
    soundAr: "s — بين حركتين (ز)",
    rule: "حرف s بين حركتين يُنطق 'ز' — مثل: lesen, suchen.",
    audioUrl: null,
    examples: [
      { word: "lesen", ar: "يقرأ", ipa: "[ˈleːzn̩]" },
      { word: "suchen", ar: "يبحث", ipa: "[ˈzuːxn̩]" },
      { word: "sehen", ar: "يرى", ipa: "[ˈzeːən]" }
    ]
  },
  {
    id: "p18",
    icon: "🔊",
    category: "consonants",
    level: "A1",
    sound: "st / sp am Wortanfang",
    soundAr: "st / sp في بداية الكلمة = شت / شب",
    rule: "st في بداية الكلمة = شت، sp في بداية الكلمة = شب.",
    audioUrl: null,
    examples: [
      { word: "Straße", ar: "شارع", ipa: "[ˈʃtʁaːsə]" },
      { word: "Stadt", ar: "مدينة", ipa: "[ʃtat]" },
      { word: "Sprache", ar: "لغة", ipa: "[ˈʃpʁaːxə]" }
    ]
  },
  {
    id: "p19",
    icon: "🔊",
    category: "consonants",
    level: "A1",
    sound: "ß = ss",
    soundAr: "ß = س طويلة",
    rule: "ß = ss (تُنطق س طويلة).",
    audioUrl: null,
    examples: [
      { word: "groß", ar: "كبير", ipa: "[ɡʁoːs]" },
      { word: "Straße", ar: "شارع", ipa: "[ˈʃtʁaːsə]" },
      { word: "heißen", ar: "يُسمّى", ipa: "[ˈhaɪ̯sn̩]" }
    ]
  },

  /* ============ 4. SONDERFÄLLE (حالات خاصة) ============ */

  {
    id: "p20",
    icon: "⚡",
    category: "special",
    level: "A1",
    sound: "-ig am Wortende",
    soundAr: "-ig في نهاية الكلمة = ich",
    rule: "المقطع -ig في نهاية الكلمة يُنطق 'ich'.",
    audioUrl: null,
    examples: [
      { word: "fleißig", ar: "مجتهد", ipa: "[ˈflaɪ̯sɪç]" },
      { word: "fähig", ar: "قادر", ipa: "[ˈfɛːɪç]" },
      { word: "richtig", ar: "صحيح", ipa: "[ˈʁɪçtɪç]" }
    ]
  },
  {
    id: "p21",
    icon: "⚡",
    category: "special",
    level: "A1",
    sound: "-tion / -tien",
    soundAr: "-tion = تسيون / -tien = تسين",
    rule: "-tion تُنطق 'تسيون' — -tien تُنطق 'تسين'.",
    audioUrl: null,
    examples: [
      { word: "Station", ar: "محطة", ipa: "[ʃtaˈt͡si̯oːn]" },
      { word: "Konversation", ar: "محادثة", ipa: "[kɔnvɛʁzaˈt͡si̯oːn]" },
      { word: "Patient", ar: "مريض", ipa: "[paˈt͡si̯ɛnt]" }
    ]
  },
  {
    id: "p22",
    icon: "⚡",
    category: "special",
    level: "A1",
    sound: "qu = kw / C = K",
    soundAr: "qu = كف / C = ك",
    rule: "qu تُنطق 'كف' — C في الكلمات الأجنبية تُنطق 'ك'.",
    audioUrl: null,
    examples: [
      { word: "Qualität", ar: "جودة", ipa: "[kvaliˈtɛːt]" },
      { word: "Quatsch", ar: "هراء", ipa: "[kvat͡ʃ]" },
      { word: "Café", ar: "مقهى", ipa: "[kaˈfeː]" }
    ]
  },

  /* ============ 5. UMLAUTE (الحروف المزدوجة) ============ */

  {
    id: "p23",
    icon: "¨",
    category: "umlaute",
    level: "A1",
    sound: "ä",
    soundAr: "ä = إيه مفتوحة (ae)",
    rule: "ä تُنطق مثل 'e' مفتوحة — وتُكتب ae عند عدم توفر الحرف.",
    audioUrl: null,
    examples: [
      { word: "Mädchen", ar: "فتاة", ipa: "[ˈmɛːtçən]" },
      { word: "Bäume", ar: "أشجار", ipa: "[ˈbɔɪ̯mə]" },
      { word: "spät", ar: "متأخر", ipa: "[ʃpɛːt]" }
    ]
  },
  {
    id: "p24",
    icon: "¨",
    category: "umlaute",
    level: "A1",
    sound: "ö",
    soundAr: "ö = أُ مع فتح الشفتين (oe)",
    rule: "ö تُنطق بين 'أو' و'إي' — وتُكتب oe عند عدم توفر الحرف.",
    audioUrl: null,
    examples: [
      { word: "schön", ar: "جميل", ipa: "[ʃøːn]" },
      { word: "König", ar: "ملك", ipa: "[ˈkøːnɪç]" },
      { word: "hören", ar: "يسمع", ipa: "[ˈhøːʁən]" }
    ]
  },
  {
    id: "p25",
    icon: "¨",
    category: "umlaute",
    level: "A1",
    sound: "ü",
    soundAr: "ü = أو مع فتح الشفتين (ue)",
    rule: "ü تُنطق بين 'أو' و'إي' بشفتين مستديرتين — وتُكتب ue عند عدم توفر الحرف.",
    audioUrl: null,
    examples: [
      { word: "über", ar: "فوق", ipa: "[ˈyːbɐ]" },
      { word: "müde", ar: "متعب", ipa: "[ˈmyːdə]" },
      { word: "Tür", ar: "باب", ipa: "[tyːɐ̯]" }
    ]
  }
];

/* ============================================================
   PRONUNCIATION_EXERCISES — 15 تمريناً
   ============================================================ */

const PRONUNCIATION_EXERCISES = [
  /* ---------- Vokale (3) ---------- */
  {
    id: "e01",
    category: "vowels",
    question: "أي كلمة تحتوي على 'a' طويلة؟",
    audioOptions: ["Tag", "Satt", "statt", "nennen"],
    correct: "Tag",
    explanation: "'Tag' — الحركة a طويلة لأنها متبوعة بحرف واحد. 'Satt' و'statt' و'nennen' قصيرة (حرفان ساكنان)."
  },
  {
    id: "e02",
    category: "vowels",
    question: "أي كلمة تحتوي على 'e' قصيرة؟",
    audioOptions: ["See", "gehen", "Bett", "Teh"],
    correct: "Bett",
    explanation: "'Bett' — الحركة e قصيرة لأنها متبوعة بحرفين ساكنين (tt). 'See' و'gehen' طويلة."
  },
  {
    id: "e03",
    category: "vowels",
    question: "أي كلمة تحتوي على 'i' طويلة؟",
    audioOptions: ["sie", "wenn", "Bett", "nennen"],
    correct: "sie",
    explanation: "'sie' — الحركة ie تُنطق i طويلة. الباقي لا يحتوي i طويلة."
  },

  /* ---------- Diphthonge (3) ---------- */
  {
    id: "e04",
    category: "diphthongs",
    question: "أي كلمة تُنطق 'أي' (ei/ai)؟",
    audioOptions: ["Mai", "Auge", "neun", "gut"],
    correct: "Mai",
    explanation: "'Mai' — ei تُنطق 'أي'. 'Auge' = 'أو'، 'neun' = 'أوي'، 'gut' = 'أو' طويلة."
  },
  {
    id: "e05",
    category: "diphthongs",
    question: "أي كلمة تُنطق 'أو' (au)؟",
    audioOptions: ["mein", "neun", "Auge", "sie"],
    correct: "Auge",
    explanation: "'Auge' — au تُنطق 'أو'. 'mein' = 'أي'، 'neun' = 'أوي'، 'sie' = 'إي'."
  },
  {
    id: "e06",
    category: "diphthongs",
    question: "أي كلمة تُنطق 'أوي' (eu/äu)؟",
    audioOptions: ["Leute", "Mai", "Auge", "gut"],
    correct: "Leute",
    explanation: "'Leute' — eu تُنطق 'أوي'. الباقي: 'Mai' = أي، 'Auge' = أو، 'gut' = أو طويلة."
  },

  /* ---------- Konsonanten (5) ---------- */
  {
    id: "e07",
    category: "consonants",
    question: "أي كلمة تُنطق فيها ch 'خ' (بعد a/o/u/au)؟",
    audioOptions: ["Nacht", "ich", "mich", "durch"],
    correct: "Nacht",
    explanation: "'Nacht' — ch بعد a تُنطق 'خ'. 'ich' و'mich' و'durch' — ch بعد i/e تُنطق 'ش' خفيفة."
  },
  {
    id: "e08",
    category: "consonants",
    question: "أي كلمة تُنطق فيها ch 'ش' خفيفة (بعد i/e)؟",
    audioOptions: ["Buch", "auch", "ich", "Nacht"],
    correct: "ich",
    explanation: "'ich' — ch بعد i تُنطق 'ش' خفيفة. الباقي ch بعد u/a تُنطق 'خ'."
  },
  {
    id: "e09",
    category: "consonants",
    question: "أي كلمة تُنطق فيها s 'ز' (بين حركتين)؟",
    audioOptions: ["lesen", "Straße", "Stadt", "Sprache"],
    correct: "lesen",
    explanation: "'lesen' — s بين e وe تُنطق 'ز'. 'Straße' و'Stadt' و'Sprache' — st/sp في البداية تُنطق 'شت/شب'."
  },
  {
    id: "e10",
    category: "consonants",
    question: "أي كلمة تُنطق فيها st 'شت'؟",
    audioOptions: ["Straße", "lesen", "suchen", "sehen"],
    correct: "Straße",
    explanation: "'Straße' — st في البداية تُنطق 'شت'. الباقي s بين حركتين = 'ز'."
  },
  {
    id: "e11",
    category: "consonants",
    question: "أي كلمة تنتهي بحرف يُنطق 'ك' (G في النهاية)؟",
    audioOptions: ["Tag", "Bad", "Stab", "Kind"],
    correct: "Tag",
    explanation: "'Tag' — G في النهاية تُنطق 'ك'. 'Bad' — D في النهاية = 'ت'. 'Stab' — B في النهاية = 'ب/پ'. 'Kind' — D في النهاية = 'ت'."
  },

  /* ---------- Special (2) ---------- */
  {
    id: "e12",
    category: "special",
    question: "أي كلمة تُنطق فيها -ig 'ich'؟",
    audioOptions: ["fleißig", "Tag", "gut", "gehen"],
    correct: "fleißig",
    explanation: "'fleißig' — المقطع -ig في النهاية يُنطق 'ich'."
  },
  {
    id: "e13",
    category: "special",
    question: "أي كلمة تحتوي على chs تُنطق 'كس'؟",
    audioOptions: ["sechs", "ich", "Buch", "Nacht"],
    correct: "sechs",
    explanation: "'sechs' — chs تُنطق 'كس'."
  },

  /* ---------- Umlaute (2) ---------- */
  {
    id: "e14",
    category: "umlaute",
    question: "أي كلمة تحتوي على 'ö'؟",
    audioOptions: ["schön", "über", "Mädchen", "Tag"],
    correct: "schön",
    explanation: "'schön' — تحتوي ö (بين أو وإي). 'über' — ü. 'Mädchen' — ä."
  },
  {
    id: "e15",
    category: "umlaute",
    question: "أي كلمة تحتوي على 'ü'؟",
    audioOptions: ["über", "schön", "spät", "gut"],
    correct: "über",
    explanation: "'über' — تحتوي ü. 'schön' — ö. 'spät' — ä."
  }
];

/* ============================================================
   MINIMAL_PAIRS — 10 أزواج للتمييز
   ============================================================ */

const MINIMAL_PAIRS = [
  {
    id: "m01",
    pair: ["Bett", "Beet"],
    ar: ["سرير", "حقل"],
    difference: "e قصيرة vs e طويلة",
    sound: "e"
  },
  {
    id: "m02",
    pair: ["Stadt", "Staat"],
    ar: ["مدينة", "دولة"],
    difference: "a قصيرة vs a طويلة",
    sound: "a"
  },
  {
    id: "m03",
    pair: ["offen", "Ofen"],
    ar: ["مفتوح", "فرن"],
    difference: "f مضاعفة vs f واحدة",
    sound: "f"
  },
  {
    id: "m04",
    pair: ["mich", "mich (تأكيد)"],
    ar: ["إياي", "—"],
    difference: "ch خفيفة vs ch خلفية",
    sound: "ch"
  },
  {
    id: "m05",
    pair: ["Nacht", "nackt"],
    ar: ["ليلة", "عارٍ"],
    difference: "ch خلفية vs k",
    sound: "ch/k"
  },
  {
    id: "m06",
    pair: ["Buch", "Bug"],
    ar: ["كتاب", "مقدمة السفينة"],
    difference: "ch خلفية vs g",
    sound: "ch/g"
  },
  {
    id: "m07",
    pair: ["viel", "Fiel"],
    ar: ["كثير", "سقط (اسم)"],
    difference: "v تُنطق f vs f",
    sound: "v/f"
  },
  {
    id: "m08",
    pair: ["wenn", "wenn (تأكيد)"],
    ar: ["إذا", "—"],
    difference: "e قصيرة vs e طويلة",
    sound: "e"
  },
  {
    id: "m09",
    pair: ["Haus", "Hauss (خطأ شائع)"],
    ar: ["منزل", "—"],
    difference: "au vs au + s",
    sound: "au"
  },
  {
    id: "m10",
    pair: ["Zug", "Tsug (خطأ شائع)"],
    ar: ["قطار", "—"],
    difference: "Z = تس vs تس",
    sound: "z"
  }
];

/* ============================================================
   TONGUE_TWISTERS — 5 أعاصير
   ============================================================ */

const TONGUE_TWISTERS = [
  {
    id: "t01",
    de: "Fischers Fritz fischt frische Fische.",
    ar: "فريتز الصياد يصطاد أسماكاً طازجة.",
    focus: "f / sch",
    level: "A2"
  },
  {
    id: "t02",
    de: "Brautkleid bleibt Brautkleid und Blaukraut bleibt Blaukraut.",
    ar: "فستان العروس يبقى فستان عروس، والملفوف الأحمر يبقى ملفوفاً أحمر.",
    focus: "br / bl / ei / au",
    level: "A2"
  },
  {
    id: "t03",
    de: "Zwischen zwei Zwetschgenzweigen sitzen zwei zwitschernde Schwalben.",
    ar: "بين غصني برقوق يجلس عصفوران يزقزقان.",
    focus: "zw / sch / ts",
    level: "A2"
  },
  {
    id: "t04",
    de: "Schnecken erschrecken, wenn Schnecken an Schnecken schlecken.",
    ar: "الحلازين تفزع عندما تلعق الحلازين الحلازين.",
    focus: "sch / ck / n",
    level: "A2"
  },
  {
    id: "t05",
    de: "Der Whiskymixer mixt Whisky im Whiskymixer.",
    ar: "خلاط الويسكي يخلط الويسكي في خلاط الويسكي.",
    focus: "w / x / i",
    level: "A2"
  }
];

/* ============================================================
   الحالة الداخلية
   ============================================================ */
let pronSubTab = "sounds";       // sounds | exercises | minimal | twisters
let pronCurrentExercise = 0;
let pronExerciseAnswered = false;
let pronCurrentDetail = null;

/* ============================================================
   التهيئة
   ============================================================ */
function initPronunciationTab() {
  renderPronunciation();
}

/* ============================================================
   العرض الرئيسي
   ============================================================ */
function renderPronunciation() {
  const container = document.getElementById('pronunciationContent');
  if (!container) return;

  const lang = (typeof contentLanguage !== 'undefined') ? contentLanguage : 'de';
  if (lang !== 'de') {
    container.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">🗣️ قسم النطق متاح حالياً للألمانية فقط. بدّل لغة المحتوى إلى Deutsch.</p>';
    return;
  }

  const subTabs = `
    <div class="pron-subtabs">
      <button class="pron-subtab ${pronSubTab === 'sounds' ? 'active' : ''}" onclick="switchPronSubTab('sounds')">🔤 الأصوات</button>
      <button class="pron-subtab ${pronSubTab === 'exercises' ? 'active' : ''}" onclick="switchPronSubTab('exercises')">🎯 التمارين</button>
      <button class="pron-subtab ${pronSubTab === 'minimal' ? 'active' : ''}" onclick="switchPronSubTab('minimal')">👂 Minimalpaare</button>
      <button class="pron-subtab ${pronSubTab === 'twisters' ? 'active' : ''}" onclick="switchPronSubTab('twisters')">🌀 أعاصير اللسان</button>
    </div>
  `;

  let contentHTML = '';
  if (pronSubTab === 'sounds') contentHTML = renderPronSounds();
  else if (pronSubTab === 'exercises') contentHTML = renderPronExercises();
  else if (pronSubTab === 'minimal') contentHTML = renderPronMinimal();
  else if (pronSubTab === 'twisters') contentHTML = renderPronTwisters();

  container.innerHTML = `
    <div style="text-align:center;margin-bottom:25px;">
      <h2 style="color:var(--primary-dark);font-size:24px;margin-bottom:8px;">🗣️ النطق الألماني (Aussprache)</h2>
      <p style="color:var(--text-muted);font-size:15px;">${PRONUNCIATION_DATA.length} صوتاً — ${PRONUNCIATION_EXERCISES.length} تمريناً — ${MINIMAL_PAIRS.length} زوجاً — ${TONGUE_TWISTERS.length} أعاصير</p>
    </div>
    ${subTabs}
    <div id="pronSubContent">${contentHTML}</div>
  `;
  applyTranslationVisibility();
}

function switchPronSubTab(tab) {
  pronSubTab = tab;
  renderPronunciation();
}

/* ============================================================
   1) عرض الأصوات
   ============================================================ */
function renderPronSounds() {
  const categories = {
    vowels: { label: "🅰️ الحركات (Vokale)", color: "#ef4444" },
    diphthongs: { label: "🔀 المركبة (Diphthonge)", color: "#3b82f6" },
    consonants: { label: "🔊 السواكن (Konsonanten)", color: "#10b981" },
    special: { label: "⚡ حالات خاصة", color: "#f59e0b" },
    umlaute: { label: "¨ Umlaute", color: "#8b5cf6" }
  };

  let html = '';
  Object.keys(categories).forEach(cat => {
    const items = PRONUNCIATION_DATA.filter(p => p.category === cat);
    if (!items.length) return;
    html += `<div class="pron-category-block">
      <h3 class="pron-category-title" style="color:${categories[cat].color};border-right-color:${categories[cat].color};">${categories[cat].label}</h3>
      <div class="pron-sounds-grid">
        ${items.map(p => `
          <div class="pron-sound-card" onclick="openPronunciationDetail('${p.id}')" style="border-right-color:${categories[cat].color};">
            <div class="pron-sound-icon">${p.icon}</div>
            <div class="pron-sound-name">${p.sound}</div>
            <div class="pron-sound-ar">${p.soundAr}</div>
            <div class="pron-sound-count">${p.examples.length} أمثلة</div>
          </div>
        `).join('')}
      </div>
    </div>`;
  });
  return html;
}

/* ============================================================
   2) عرض تفاصيل صوت (modal)
   ============================================================ */
function openPronunciationDetail(id) {
  const p = PRONUNCIATION_DATA.find(x => x.id === id);
  if (!p) return;

  const examplesHTML = p.examples.map((ex, i) => `
    <div class="pron-example-row">
      <div class="pron-example-word">
        <strong>${ex.word}</strong>
        ${ex.ipa ? `<span class="pron-ipa">${ex.ipa}</span>` : ''}
      </div>
      <div class="pron-example-ar">${ex.ar}</div>
      <button class="audio-btn" style="position:static;display:inline-flex;width:34px;height:34px;font-size:16px;" onclick="speak('${ex.word.replace(/'/g, "\\'")}')">🔊</button>
    </div>
  `).join('');

  const html = `
    <button class="close-btn" onclick="closeModal()">✕</button>
    <div style="text-align:center;margin-bottom:18px;">
      <div style="font-size:50px;margin-bottom:8px;">${p.icon}</div>
      <h2 style="font-size:24px;">${p.sound}</h2>
      <p style="color:var(--text-muted);font-size:16px;font-weight:600;margin-top:6px;">${p.soundAr}</p>
    </div>
    <div class="rule-hint">${p.rule}</div>
    <div class="section-title">🔊 الأمثلة (${p.examples.length})</div>
    <div class="pron-examples-list">${examplesHTML}</div>
    <div class="grammar-tip">💡 اضغط 🔊 بجانب أي كلمة لسماع نطقها.</div>
  `;
  openModal(html);
  applyTranslationVisibility();
}

/* ============================================================
   3) عرض التمارين
   ============================================================ */
function renderPronExercises() {
  const ex = PRONUNCIATION_EXERCISES[pronCurrentExercise];
  if (!ex) return '<p style="text-align:center;">لا توجد تمارين.</p>';

  const optionsHTML = ex.audioOptions.map(opt => `
    <button class="pron-exercise-option" onclick="checkPronExercise('${opt.replace(/'/g, "\\'")}')" id="opt-${opt.replace(/[^a-zA-Z0-9]/g, '')}">
      🔊 ${opt}
    </button>
  `).join('');

  return `
    <div class="pron-exercise-box">
      <div class="pron-exercise-progress">السؤال ${pronCurrentExercise + 1} من ${PRONUNCIATION_EXERCISES.length}</div>
      <h3 class="pron-exercise-question">${ex.question}</h3>
      <div class="pron-exercise-options" id="pronExerciseOptions">
        ${optionsHTML}
      </div>
      <div id="pronExerciseFeedback" style="display:none;margin-top:20px;padding:16px;border-radius:12px;font-weight:700;"></div>
      <div style="text-align:center;margin-top:22px;">
        <button class="btn-next" style="margin:0;display:${pronExerciseAnswered ? 'inline-block' : 'none'};" onclick="nextPronExercise()">التالي ➡️</button>
      </div>
    </div>
  `;
}

function checkPronExercise(answer) {
  if (pronExerciseAnswered) return;
  const ex = PRONUNCIATION_EXERCISES[pronCurrentExercise];
  if (!ex) return;

  const isCorrect = answer === ex.correct;
  const feedback = document.getElementById('pronExerciseFeedback');
  const options = document.querySelectorAll('.pron-exercise-option');

  options.forEach(opt => {
    const optText = opt.textContent.trim().replace('🔊 ', '');
    if (optText === ex.correct) opt.classList.add('correct');
    else if (optText === answer && !isCorrect) opt.classList.add('wrong');
    opt.disabled = true;
  });

  if (feedback) {
    feedback.style.display = 'block';
    feedback.style.background = isCorrect ? '#dcfce7' : '#fee2e2';
    feedback.style.color = isCorrect ? '#166534' : '#991b1b';
    feedback.innerHTML = `${isCorrect ? '✅ صحيح!' : '❌ خطأ'} — ${ex.explanation}`;
  }

  pronExerciseAnswered = true;
  const nextBtn = document.querySelector('.pron-exercise-box .btn-next');
  if (nextBtn) nextBtn.style.display = 'inline-block';
}

function nextPronExercise() {
  pronCurrentExercise = (pronCurrentExercise + 1) % PRONUNCIATION_EXERCISES.length;
  pronExerciseAnswered = false;
  document.getElementById('pronSubContent').innerHTML = renderPronExercises();
}

/* ============================================================
   4) عرض Minimalpaare
   ============================================================ */
function renderPronMinimal() {
  return `
    <div class="pron-minimal-grid">
      ${MINIMAL_PAIRS.map(m => `
        <div class="pron-minimal-card">
          <div class="pron-minimal-sound">${m.sound}</div>
          <div class="pron-minimal-pair">
            <div class="pron-minimal-word">
              <strong>${m.pair[0]}</strong>
              <button class="audio-btn" style="position:static;display:inline-flex;width:28px;height:28px;font-size:13px;" onclick="speak('${m.pair[0].replace(/'/g, "\\'")}')">🔊</button>
            </div>
            <div class="pron-minimal-ar">${m.ar[0]}</div>
          </div>
          <div class="pron-minimal-vs">vs</div>
          <div class="pron-minimal-pair">
            <div class="pron-minimal-word">
              <strong>${m.pair[1]}</strong>
              <button class="audio-btn" style="position:static;display:inline-flex;width:28px;height:28px;font-size:13px;" onclick="speak('${m.pair[1].replace(/'/g, "\\'")}')">🔊</button>
            </div>
            <div class="pron-minimal-ar">${m.ar[1]}</div>
          </div>
          <div class="pron-minimal-diff">${m.difference}</div>
        </div>
      `).join('')}
    </div>
  `;
}

/* ============================================================
   5) عرض أعاصير اللسان
   ============================================================ */
function renderPronTwisters() {
  return `
    <div class="pron-twisters-list">
      ${TONGUE_TWISTERS.map(t => `
        <div class="pron-twister-card">
          <div class="pron-twister-focus">🎯 ${t.focus} · ${t.level}</div>
          <div class="pron-twister-de">${t.de}</div>
          <div class="pron-twister-ar">${t.ar}</div>
          <button class="btn-next" style="margin:15px 0 0;padding:10px 24px;font-size:14px;" onclick="speak('${t.de.replace(/'/g, "\\'")}')">🔊 استمع</button>
        </div>
      `).join('')}
    </div>
  `;
}