const EXERCISES = [
  // قاعدة Dativ
  {
    question: "Ich helfe ___ Mann.",
    questionAr: "أساعد الرجل.",
    options: ["den", "dem", "der", "das"],
    answer: 1,
    explanation: "الفعل helfen يأخذ Dativ، و Mann مذكر، لذا نستخدم dem."
  },
  {
    question: "Ich danke ___ Frau.",
    questionAr: "أشكر المرأة.",
    options: ["die", "der", "den", "dem"],
    answer: 1,
    explanation: "الفعل danken يأخذ Dativ، و Frau مؤنث، لذا نستخدم der."
  },
  {
    question: "Das Buch gehört ___ Kind.",
    questionAr: "الكتاب ينتمي للطفل.",
    options: ["das", "dem", "den", "der"],
    answer: 1,
    explanation: "الفعل gehören يأخذ Dativ، و Kind محايد، لذا نستخدم dem."
  },
  // قاعدة Akkusativ
  {
    question: "Ich kaufe ___ Apfel.",
    questionAr: "أشتري التفاحة.",
    options: ["der", "den", "dem", "die"],
    answer: 1,
    explanation: "الفعل kaufen يأخذ Akkusativ، و Apfel مذكر، لذا نستخدم den."
  },
  {
    question: "Ich sehe ___ Frau.",
    questionAr: "أرى المرأة.",
    options: ["die", "der", "den", "dem"],
    answer: 0,
    explanation: "الفعل sehen يأخذ Akkusativ، و Frau مؤنث، و المؤنث لا يتغير في Akkusativ (die)."
  },
  // الأفعال المنفصلة
  {
    question: "Ich ___ um 7 Uhr ___.",
    questionAr: "أستيقظ الساعة 7.",
    options: ["stehe ... auf", "aufstehe ... (فراغ)", "stehe ... an", "gehe ... auf"],
    answer: 0,
    explanation: "الفعل aufstehen فعل منفصل، البادئة (auf) تذهب إلى نهاية الجملة."
  },
  {
    question: "Er ___ seine Mutter ___.",
    questionAr: "هو يتصل بأمه.",
    options: ["rufe ... an", "ruft ... an", "anruft ... (فراغ)", "rufe ... auf"],
    answer: 1,
    explanation: "الفعل anrufen فعل منفصل، مع er نستخدم ruft، و البادئة an في النهاية."
  },
  // الأفعال الانعكاسية
  {
    question: "Ich freue ___ auf den Urlaub.",
    questionAr: "أنا متحمس للإجازة.",
    options: ["mich", "dich", "sich", "mir"],
    answer: 0,
    explanation: "الفعل sich freuen انعكاسي، مع ich نستخدم mich."
  },
  {
    question: "Du wäschst ___ jeden Morgen.",
    questionAr: "أنت تغتسل كل صباح.",
    options: ["mich", "dich", "sich", "dir"],
    answer: 1,
    explanation: "الفعل sich waschen انعكاسي، مع du نستخدم dich."
  },
  // الأفعال التي تأخذ sein
  {
    question: "Ich ___ nach Berlin gefahren.",
    questionAr: "سافرت إلى برلين.",
    options: ["habe", "bin", "ist", "hat"],
    answer: 1,
    explanation: "الفعل fahren فعل حركة، لذا يأخذ sein في Perfekt. مع ich نستخدم bin."
  },
  {
    question: "Er ___ nach Hause gegangen.",
    questionAr: "هو ذهب إلى المنزل.",
    options: ["hat", "ist", "bin", "sind"],
    answer: 1,
    explanation: "الفعل gehen فعل حركة، لذا يأخذ sein. مع er نستخدم ist."
  },
  // حروف الجر مع Dativ
  {
    question: "Ich fahre mit ___ Bus.",
    questionAr: "أسافر بالحافلة.",
    options: ["der", "den", "dem", "die"],
    answer: 2,
    explanation: "حرف الجر mit يأخذ Dativ دائماً، و Bus مذكر، لذا نستخدم dem."
  },
  {
    question: "Sie kommt aus ___ Schweiz.",
    questionAr: "هي من سويسرا.",
    options: ["die", "der", "den", "dem"],
    answer: 1,
    explanation: "حرف الجر aus يأخذ Dativ، و Schweiz مؤنث، لذا نستخدم der."
  },
  // حروف الجر مع Akkusativ
  {
    question: "Das Geschenk ist für ___.",
    questionAr: "الهدية لك.",
    options: ["du", "dich", "dir", "dein"],
    answer: 1,
    explanation: "حرف الجر für يأخذ Akkusativ، و du في Akkusativ تصبح dich."
  },
  // الروابط
  {
    question: "Ich bleibe zu Hause, ___ es regnet.",
    questionAr: "أبقى في المنزل لأنها تمطر.",
    options: ["und", "aber", "weil", "oder"],
    answer: 2,
    explanation: "weil تعني لأن، وترسل الفعل إلى نهاية الجملة."
  },
  {
    question: "Ich lerne Deutsch, ___ ich wohne in Berlin.",
    questionAr: "أتعلم الألمانية وأسكن في برلين.",
    options: ["weil", "dass", "und", "denn"],
    answer: 2,
    explanation: "und تعني و، ولا تغير ترتيب الجملة."
  }
];

const RESOURCES = [
  {
    title: "Menschen A1 - الصوتيات الرسمية",
    description: "ملفات صوتية رسمية لكتاب Menschen A1 من موقع الناشر Hueber.",
    url: "https://www.hueber.de/menschen/lehren/lernwortschatz",
    icon: "🔊"
  },
  {
    title: "Menschen A2 - الصوتيات الرسمية",
    description: "ملفات صوتية رسمية لكتاب Menschen A2 من موقع الناشر Hueber.",
    url: "https://www.hueber.de/menschen/lehren",
    icon: "🔊"
  },
  {
    title: "موقع Menschen الرسمي",
    description: "الموقع الرسمي لسلسلة Menschen من دار نشر Hueber.",
    url: "https://www.hueber.de/menschen",
    icon: "🌐"
  },
  {
    title: "DW Learn German - A1",
    description: "دورات مجانية من دويتشه فيله (DW) لمستوى A1 مع صوتيات وتمارين.",
    url: "https://learngerman.dw.com/en/overview",
    icon: "📚"
  },
  {
    title: "DW Learn German - A2",
    description: "دورات مجانية من دويتشه فيله (DW) لمستوى A2 مع صوتيات وتمارين.",
    url: "https://learngerman.dw.com/en/overview",
    icon: "📚"
  },
  {
    title: "Goethe-Institut - تعلم الألمانية",
    description: "موارد تعليمية رسمية من معهد جوته مع تمارين وصوتيات.",
    url: "https://www.goethe.de/en/spr/kur/ubm.html",
    icon: "🎓"
  },
  {
    title: "Schubert-Verlag - تمارين مجانية",
    description: "تمارين تفاعلية مجانية لمستويات A1 و A2.",
    url: "https://www.schubert-verlag.de/aufgaben/aufgaben_a1.htm",
    icon: "✏️"
  },
  {
    title: "Lingolia - شرح القواعد بالألمانية والإنجليزية",
    description: "شرح مفصل لكل قواعد اللغة الألمانية مع أمثلة.",
    url: "https://deutsch.lingolia.com/de/grammatik",
    icon: "📖"
  }
];