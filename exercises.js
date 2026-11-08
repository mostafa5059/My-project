// ==========================================
// 1. مصفوفة التمارين (EXERCISES)
// ==========================================
const EXERCISES = [
  // --- التمارين الأصلية (الاختيار من متعدد) ---
  { question: "Ich helfe ___ Mann.", questionAr: "أساعد الرجل.", options: ["den", "dem", "der", "das"], answer: 1, explanation: "helfen يأخذ Dativ. Mann مذكر → dem." },
  { question: "Ich danke ___ Frau.", questionAr: "أشكر المرأة.", options: ["die", "der", "den", "dem"], answer: 1, explanation: "danken يأخذ Dativ. Frau مؤنث → der." },
  { question: "Das Buch gehört ___ Kind.", questionAr: "الكتاب ينتمي للطفل.", options: ["das", "dem", "den", "der"], answer: 1, explanation: "gehören يأخذ Dativ. Kind محايد → dem." },
  { question: "Ich kaufe ___ Apfel.", questionAr: "أشتري التفاحة.", options: ["der", "den", "dem", "die"], answer: 1, explanation: "kaufen يأخذ Akkusativ. Apfel مذكر → den." },
  { question: "Ich sehe ___ Frau.", questionAr: "أرى المرأة.", options: ["die", "der", "den", "dem"], answer: 0, explanation: "sehen يأخذ Akkusativ. Frau مؤنث → die." },
  { question: "Ich ___ um 7 Uhr ___.", questionAr: "أستيقظ الساعة 7.", options: ["stehe ... auf", "aufstehe", "stehe ... an", "gehe ... auf"], answer: 0, explanation: "aufstehen فعل منفصل. البادئة auf في النهاية." },
  { question: "Er ___ seine Mutter ___.", questionAr: "هو يتصل بأمه.", options: ["rufe ... an", "ruft ... an", "anruft", "rufe ... auf"], answer: 1, explanation: "anrufen فعل منفصل. مع er = ruft an." },
  { question: "Ich freue ___ auf den Urlaub.", questionAr: "أنا متحمس للإجازة.", options: ["mich", "dich", "sich", "mir"], answer: 0, explanation: "sich freuen انعكاسي. مع ich = mich." },
  { question: "Du wäschst ___ jeden Morgen.", questionAr: "أنت تغتسل كل صباح.", options: ["mich", "dich", "sich", "dir"], answer: 1, explanation: "sich waschen انعكاسي. مع du = dich." },
  { question: "Ich ___ nach Berlin gefahren.", questionAr: "سافرت إلى برلين.", options: ["habe", "bin", "ist", "hat"], answer: 1, explanation: "fahren يأخذ sein. مع ich = bin." },
  { question: "Er ___ nach Hause gegangen.", questionAr: "هو ذهب إلى المنزل.", options: ["hat", "ist", "bin", "sind"], answer: 1, explanation: "gehen يأخذ sein. مع er = ist." },
  { question: "Ich fahre mit ___ Bus.", questionAr: "أسافر بالحافلة.", options: ["der", "den", "dem", "die"], answer: 2, explanation: "mit يأخذ Dativ. Bus مذكر → dem." },
  { question: "Sie kommt aus ___ Schweiz.", questionAr: "هي من سويسرا.", options: ["die", "der", "den", "dem"], answer: 1, explanation: "aus يأخذ Dativ. Schweiz مؤنث → der." },
  { question: "Das Geschenk ist für ___.", questionAr: "الهدية لك.", options: ["du", "dich", "dir", "dein"], answer: 1, explanation: "für يأخذ Akkusativ. du → dich." },
  { question: "Ich bleibe zu Hause, ___ es regnet.", questionAr: "أبقى في المنزل لأنها تمطر.", options: ["und", "aber", "weil", "oder"], answer: 2, explanation: "weil (لأن) ترسل الفعل إلى النهاية." },
  { question: "Ich lerne Deutsch, ___ ich wohne in Berlin.", questionAr: "أتعلم الألمانية وأسكن في برلين.", options: ["weil", "dass", "und", "denn"], answer: 2, explanation: "und (و) لا تغير الترتيب." },
  { question: "Ich ___ gut schwimmen.", questionAr: "أستطيع السباحة جيداً.", options: ["kann", "kannst", "können", "könnt"], answer: 0, explanation: "können مع ich = kann." },
  { question: "Du ___ mehr lernen.", questionAr: "يجب أن تدرس أكثر.", options: ["muss", "musst", "müssen", "müsst"], answer: 1, explanation: "müssen مع du = musst." },
  { question: "___ du Zeit?", questionAr: "هل لديك وقت؟", options: ["Hast", "Habt", "Hat", "Habe"], answer: 0, explanation: "haben مع du = hast." },
  { question: "___ ihr Deutsch?", questionAr: "هل تتحدثون الألمانية؟", options: ["Sprichst", "Sprecht", "Spricht", "Sprechen"], answer: 1, explanation: "sprechen مع ihr = sprecht." },
  { question: "Ich liebe ___.", questionAr: "أحبك.", options: ["du", "dich", "dir", "dein"], answer: 1, explanation: "lieben يأخذ Akkusativ. du → dich." },
  { question: "Ich helfe ___.", questionAr: "أساعدك.", options: ["du", "dich", "dir", "dein"], answer: 2, explanation: "helfen يأخذ Dativ. du → dir." },
  { question: "Er sieht ___.", questionAr: "هو يراني.", options: ["ich", "mich", "mir", "mein"], answer: 1, explanation: "sehen يأخذ Akkusativ. ich → mich." },
  { question: "Wir ___ nach Berlin.", questionAr: "نسافر إلى برلين.", options: ["fahre", "fährst", "fährt", "fahren"], answer: 3, explanation: "fahren مع wir = fahren." },
  { question: "Ihr ___ zu viel.", questionAr: "أنتم تأكلون كثيراً.", options: ["esse", "isst", "esst", "essen"], answer: 2, explanation: "essen مع ihr = esst." },
  { question: "Ich ___ gestern krank.", questionAr: "كنت مريضاً أمس.", options: ["bin", "war", "warst", "waren"], answer: 1, explanation: "sein في Präteritum مع ich = war." },
  { question: "Er ___ keine Zeit.", questionAr: "لم يكن لديه وقت.", options: ["hat", "hatte", "hattest", "hatten"], answer: 1, explanation: "haben في Präteritum مع er = hatte." },
  { question: "Sie ___ nach Hause.", questionAr: "هي ذهبت إلى المنزل.", options: ["geht", "ging", "gingst", "gingen"], answer: 1, explanation: "gehen في Präteritum مع sie = ging." },
  { question: "Ich ___ einen Film gesehen.", questionAr: "شاهدت فيلماً.", options: ["habe", "bin", "ist", "hat"], answer: 0, explanation: "sehen يأخذ haben. مع ich = habe." },
  { question: "Er ___ nach Berlin gefahren.", questionAr: "سافر إلى برلين.", options: ["hat", "ist", "bin", "sind"], answer: 1, explanation: "fahren فعل حركة، يأخذ sein. مع er = ist." },
  { question: "Ich gehe ___ die Schule.", questionAr: "أذهب إلى المدرسة (حركة).", options: ["in", "an", "auf", "zu"], answer: 0, explanation: "in + Akkusativ للحركة إلى داخل مكان." },
  { question: "Ich bin ___ der Schule.", questionAr: "أنا في المدرسة (سكون).", options: ["in", "an", "auf", "zu"], answer: 0, explanation: "in + Dativ للسكون داخل مكان." },
  { question: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.", questionAr: "أتعلم الألمانية لأنني أريد العمل في ألمانيا.", options: ["denn", "weil", "aber", "und"], answer: 1, explanation: "weil ترسل الفعل إلى النهاية." },
  { question: "Ich bin müde, ___ ich gehe ins Bett.", questionAr: "أنا متعب، لذلك أذهب للنوم.", options: ["weil", "deshalb", "dass", "wenn"], answer: 1, explanation: "deshalb (لذلك) تحتل المركز الأول." },
  { question: "___ ich Zeit habe, lese ich.", questionAr: "عندما يكون لدي وقت، أقرأ.", options: ["Weil", "Dass", "Wenn", "Denn"], answer: 2, explanation: "wenn (عندما/إذا) ترسل الفعل إلى النهاية." },
  { question: "___ heißt du?", questionAr: "ما اسمك؟", options: ["Was", "Wie", "Wo", "Wer"], answer: 1, explanation: "Wie heißt du? = ما اسمك؟" },
  { question: "___ kommst du?", questionAr: "من أين أنت؟", options: ["Wo", "Woher", "Wohin", "Wann"], answer: 1, explanation: "Woher = من أين." },
  { question: "___ wohnst du?", questionAr: "أين تسكن؟", options: ["Wo", "Woher", "Wohin", "Wann"], answer: 0, explanation: "Wo = أين." },
  { question: "___ alt bist du?", questionAr: "كم عمرك؟", options: ["Wie", "Was", "Wo", "Wer"], answer: 0, explanation: "Wie alt = كم العمر." },
  { question: "___ kostet das?", questionAr: "كم يكلف هذا؟", options: ["Wie viel", "Wann", "Wo", "Wer"], answer: 0, explanation: "Wie viel kostet = كم يكلف." },

  // ==========================================
  // تمارين المفردات والقواعد (A2.1)
  // ==========================================
  { question: "ما معنى كلمة 'der Schrank'؟", options: ["الطاولة", "الخزانة (للملابس)", "السرير", "الكرسي"], answer: 1, explanation: "der Schrank = الخزانة (للملابس). بينما die Kommode = خزانة الأدراج." },
  { question: "ما معنى كلمة 'das Regal'؟", options: ["الرفوف", "السجادة", "المصباح", "الصورة"], answer: 0, explanation: "das Regal = الرفوف (تُجمع على die Regale)." },
  { question: "ما معنى كلمة 'gemütlich'؟", options: ["غالي", "مريح / دافئ", "قديم", "مظلم"], answer: 1, explanation: "gemütlich = مريح أو دافئ (تُستخدم لوصف الأجواء في المنزل)." },
  { question: "ما معنى كلمة 'die Zwiebel'؟", options: ["الثوم", "البصل", "الفلفل", "الجزر"], answer: 1, explanation: "die Zwiebel = البصل. بينما der Knoblauch = الثوم." },
  { question: "ما معنى كلمة 'die Tüte'؟", options: ["العلبة", "الزجاجة", "الكيس", "البرطمان"], answer: 2, explanation: "die Tüte = الكيس (الذي نضع فيه المشتريات)." },
  { question: "ماذا نسمي 'لحم الخنزير' باللغة الألمانية؟", options: ["das Fleisch", "der Schinken", "die Wurst", "der Fisch"], answer: 1, explanation: "der Schinken = لحم الخنزير (الهام)." },
  { question: "ما معنى كلمة 'der Krankenwagen'؟", options: ["المستشفى", "سيارة الإسعاف", "طبيب الأسنان", "الحمى"], answer: 1, explanation: "der Krankenwagen = سيارة الإسعاف." },
  { question: "ما معنى كلمة 'die Schmerzen'؟", options: ["الآلام", "العلاج", "المرض", "الجرح"], answer: 0, explanation: "die Schmerzen = الآلام (جمع كلمة der Schmerz)." },
  { question: "Ich stelle die Kommode ___ Schlafzimmer. (Wohin?)", options: ["im", "ins", "in der", "in dem"], answer: 1, explanation: "السؤال Wohin (إلى أين) -> Akkusativ -> in + das = ins." },
  { question: "Die Kommode steht ___ Schlafzimmer. (Wo?)", options: ["im", "ins", "in die", "in den"], answer: 0, explanation: "السؤال Wo (أين) -> Dativ -> in + dem = im." },
  { question: "Ich hänge das Bild ___ Wand. (Wohin?)", options: ["an der", "an die", "auf die", "in die"], answer: 1, explanation: "Wohin -> Akkusativ. die Wand (مؤنث) -> an die Wand." },
  { question: "Das Bild hängt ___ Wand. (Wo?)", options: ["an der", "an die", "auf der", "in der"], answer: 0, explanation: "Wo -> Dativ. die Wand (مؤنث) -> an der Wand." },
  { question: "Ich hätte gern einen kalt___ Saft.", options: ["kalt", "kalte", "kalten", "kalter"], answer: 2, explanation: "كلمة Saft مذكر (der Saft)، وفي حالة Akkusativ نضيف -en للصفة." },
  { question: "Das ist ein bunt___ Fenster.", options: ["bunt", "bunte", "buntes", "bunten"], answer: 2, explanation: "كلمة Fenster محايد (das Fenster)، مع أداة النكرة (ein) في حالة Nominativ تأخذ الصفة -es." },
  { question: "Mit dem nett___ Reiseführer macht die Tour Spaß.", options: ["nett", "nette", "netten", "netter"], answer: 2, explanation: "حالة Dativ (mit dem)، وكل الصفات في حالة Dativ تأخذ -en." },
  { question: "Ich lerne Deutsch ___ einem Jahr.", options: ["von", "seit", "ab", "an"], answer: 1, explanation: "هنا نعبر عن شيء بدأ في الماضي (منذ سنة) ومستمر، نستخدم seit." },
  { question: "Das Festival findet ___ 8. ___ 10. Juli statt.", options: ["von / bis zum", "ab / bis", "seit / bis", "an / an"], answer: 0, explanation: "للتعبير عن فترة من...إلى، نستخدم von... bis zum." },
  { question: "___ wir am Wochenende zusammen schwimmen? (اقتراح)", options: ["Können", "Könnten", "Sollen", "Müssen"], answer: 1, explanation: "للاقتراح اللطيف نستخدم Konjunktiv II من الفعل können -> könnten." },
  { question: "Ich freue ___ auf den Urlaub.", options: ["mich", "dich", "sich", "uns"], answer: 0, explanation: "الفعل sich freuen مع الضمير ich يأخذ الضمير الانعكاسي mich." },
  { question: "Er ärgert ___ über seinen Chef.", options: ["mich", "dich", "sich", "uns"], answer: 2, explanation: "الفعل sich ärgern مع الضمير er (هو) يأخذ الضمير الانعكاسي sich." },
  { question: "Ich kann nicht kommen, ___ ich krank bin.", options: ["weil", "deshalb", "dass", "wenn"], answer: 0, explanation: "الأداة weil تشرح السبب، والفعل (bin) يذهب للنهاية." },
  { question: "Ich habe Zahnschmerzen, ___ gehe ich zum Zahnarzt.", options: ["weil", "deshalb", "dass", "wenn"], answer: 1, explanation: "الأداة deshalb تعبر عن النتيجة، ويأتي الفعل (gehe) بعدها مباشرة." },
  { question: "Ich hoffe, ___ du gut geschlafen hast.", options: ["weil", "deshalb", "dass", "wenn"], answer: 2, explanation: "نستخدم dass للتعبير عن الأمل (أنا آمل أن...)." },
  { question: "___ es warm ist, essen wir meist Salat.", options: ["Weil", "Wenn", "Dass", "Deshalb"], answer: 1, explanation: "نستخدم wenn للتعبير عن الشرط (عندما/إذا)." },

  // ==========================================
  // 🆕 التمارين الجديدة (الأنواع الأربعة الجديدة)
  // ==========================================

  // --- 1. ترتيب الجمل (Order) ---
  { 
    type: 'order',
    question: "رتب الكلمات لتكوين جملة صحيحة:",
    questionAr: "أنا أذهب إلى السينما.",
    words: ["ins", "gehe", "Kino", "ich"],
    correct: "ich gehe ins Kino",
    explanation: "الفعل (gehe) يأتي في المركز الثاني، ثم باقي الجملة."
  },
  { 
    type: 'order',
    question: "رتب الكلمات لتكوين جملة صحيحة:",
    questionAr: "أنا أتصل بأمي.",
    words: ["meine", "rufe", "Mutter", "an", "ich"],
    correct: "ich rufe meine Mutter an",
    explanation: "الفعل المنفصل anrufen: الفعل (rufe) في المركز الثاني والبادئة (an) في النهاية."
  },

  // --- 2. التوصيل (Match) ---
  { 
    type: 'match',
    question: "صل الكلمة الألمانية بمعناها العربي:",
    questionAr: "توصيل المفردات (الأثاث)",
    pairs: [
      { de: "der Tisch", ar: "الطاولة" },
      { de: "der Stuhl", ar: "الكرسي" },
      { de: "das Bett", ar: "السرير" },
      { de: "der Schrank", ar: "الخزانة" }
    ],
    explanation: "تأكد من حفظ المفردات جيداً."
  },
  { 
    type: 'match',
    question: "صل الفعل بتصريفه الصحيح (Perfekt):",
    questionAr: "توصيل الأفعال بالماضي",
    pairs: [
      { de: "gehen", ar: "ist gegangen" },
      { de: "fahren", ar: "ist gefahren" },
      { de: "essen", ar: "hat gegessen" },
      { de: "trinken", ar: "hat getrunken" }
    ],
    explanation: "أفعال الحركة تأخذ sein، وباقي الأفعال تأخذ haben."
  },

  // --- 3. الكتابة / ملء الفراغ (Text) ---
  { 
    type: 'text',
    question: "أكمل الفراغ بالكلمة الصحيحة:",
    questionAr: "أنا أسافر إلى برلين.",
    text: "Ich fahre ___ Berlin.",
    answer: "nach",
    explanation: "نستخدم nach مع المدن (nach Berlin)."
  },
  { 
    type: 'text',
    question: "أكمل تصريف الفعل:",
    questionAr: "هو يذهب إلى المدرسة.",
    text: "Er ___ zur Schule.",
    answer: "geht",
    explanation: "تصريف gehen مع الضمير er هو geht."
  },
  { 
    type: 'text',
    question: "أكمل أداة الربط المناسبة (لأن):",
    questionAr: "أنا أبقى في المنزل لأنني مريض.",
    text: "Ich bleibe zu Hause, ___ ich krank bin.",
    answer: "weil",
    explanation: "weil (لأن) ترسل الفعل إلى نهاية الجملة."
  },

  // --- 4. الإيميل (Email) ---
  { 
    type: 'email',
    question: "اقرأ البريد الإلكتروني وأكمل التحية المناسبة (السيدة):",
    questionAr: "إلى السيدة مولر.",
    from: "max@example.com",
    to: "mueller@example.com",
    subject: "Termin",
    text: "Sehr geehrte ___ Müller,<br><br>ich möchte einen Termin vereinbaren.<br><br>Mit freundlichen Grüßen,<br>Max",
    answer: "Frau",
    explanation: "عند مخاطبة السيدة في البريد الرسمي نكتب Sehr geehrte Frau Müller."
  },
  { 
    type: 'email',
    question: "أكمل الخاتمة المناسبة للبريد الرسمي:",
    questionAr: "مع أطيب التحيات.",
    from: "anna@example.com",
    to: "chef@example.com",
    subject: "Bericht",
    text: "Sehr geehrter Herr Schmidt,<br><br>anbei sende ich Ihnen den Bericht.<br><br>Mit freundlichen ___<br>Anna",
    answer: "Grüßen",
    explanation: "الخاتمة الرسمية هي Mit freundlichen Grüßen (مع أطيب التحيات)."
  },

  // ==========================================
  // الاختبار الشامل (Lektion 9 - 15)
  // ==========================================
    // ==========================================
  // الاختبار الشامل (Lektion 9 - 15)
  // ==========================================
  {
    id: "final-exam-9-15",
    title: "Prüfung Lektion 9-15 (امتحان شامل)",
    level: "A2.2",
    questions: [
      // --- 1. اختيار من متعدد (قواعد) ---
      {
        type: "mcq",
        question: "Ich trinke morgens gern ___ Kaffee. (بدون أداة)",
        options: ["kalt", "kalter", "kalte", "kalten"],
        correct: 1,
        explanation: "كلمة Kaffee مذكر (der Kaffee)، وفي حالة Akkusativ بدون أداة تأخذ الصفة النهاية -er (Lektion 9)."
      },
      {
        type: "mcq",
        question: "Ich glaube, ___ er heute nicht kommt.",
        options: ["weil", "dass", "deshalb", "wenn"],
        correct: 1,
        explanation: "نستخدم dass للتعبير عن الاعتقاد (أعتقد أن...)، والفعل يذهب للنهاية (Lektion 10)."
      },
      {
        type: "mcq",
        question: "___ es morgen regnet, bleiben wir zu Hause.",
        options: ["Als", "Wenn", "Dass", "Weil"],
        correct: 1,
        explanation: "نستخدم wenn للتعبير عن شرط في المستقبل (إذا أمطرت غداً) (Lektion 12)."
      },
      {
        type: "mcq",
        question: "___ ich in Berlin war, habe ich viel Deutsch gesprochen.",
        options: ["Als", "Wenn", "Wann", "Ob"],
        correct: 0,
        explanation: "نستخدم als لحدث واحد فقط في الماضي (عندما كنت في برلين) (Lektion 13)."
      },
      {
        type: "mcq",
        question: "Die Hausaufgaben ___ bis morgen gemacht werden.",
        options: ["muss", "müssen", "müsst", "müssen werden"],
        correct: 1,
        explanation: "كلمة Hausaufgaben جمع، لذا نستخدم müssen مع صيغة الـ Passiv (gemacht werden) (Lektion 14)."
      },
      {
        type: "mcq",
        question: "Der Lehrer erklärt ___ (die Schüler) die Grammatik.",
        options: ["die Schüler", "der Schüler", "den Schülern", "dem Schüler"],
        correct: 2,
        explanation: "الفعل erklären يأخذ Dativ للشخص. die Schüler جمع، وفي حالة Dativ تصبح den Schülern (Lektion 15)."
      },

      // --- 2. اختيار من متعدد (مفردات) ---
      {
        type: "mcq",
        question: "ما معنى كلمة 'der Lohn'؟",
        options: ["البيئة", "الأجر / الراتب", "المشاهد", "الفاتورة"],
        correct: 1,
        explanation: "der Lohn = الأجر أو الراتب (Lektion 9)."
      },
      {
        type: "mcq",
        question: "ما معنى الفعل 'sich ärgern'؟",
        options: ["يفرح", "يتذكر", "يغضب / ينزعج", "يعتذر"],
        correct: 2,
        explanation: "sich ärgern = يغضب أو ينزعج (Lektion 11)."
      },
      {
        type: "mcq",
        question: "ما معنى كلمة 'die Umwelt'؟",
        options: ["القمامة", "البيئة", "التغذية", "الحلقة"],
        correct: 1,
        explanation: "die Umwelt = البيئة (Lektion 14)."
      },
      {
        type: "mcq",
        question: "ما معنى كلمة 'der Zuschauer'؟",
        options: ["الشاهد", "الجاني", "المشاهد", "المحقق"],
        correct: 2,
        explanation: "der Zuschauer = المشاهد (Lektion 15)."
      },

      // --- 3. ترتيب الجمل (Order) ---
      {
        type: "order",
        question: "رتب الكلمات لتكوين جملة صحيحة (Lektion 10):",
        words: ["ich", "hoffe", "dass", "du", "mir", "hilfst"],
        answer: "ich hoffe dass du mir hilfst",
        explanation: "بعد dass يذهب الفعل المُصرّف (hilfst) إلى النهاية."
      },
      {
        type: "order",
        question: "رتب الكلمات (Lektion 14):",
        words: ["die", "Batterien", "müssen", "gesammelt", "werden"],
        answer: "die batterien müssen gesammelt werden",
        explanation: "صيغة Passiv مع Modalverb: Modalverb + Partizip II + werden."
      },
      {
        type: "order",
        question: "رتب الكلمات (Lektion 15):",
        words: ["er", "zeigt", "uns", "die", "fotos"],
        answer: "er zeigt uns die fotos",
        explanation: "الأفعال التي تأخذ مفعولين: الشخص (uns - Dativ) يأتي قبل الشيء (die Fotos - Akkusativ)."
      },

      // --- 4. توصيل (Match) ---
      {
        type: "match",
        question: "صل الكلمة الألمانية بمعناها العربي (Lektion 9 - 12):",
        pairs: [
          { left: "der Lohn", right: "الأجر / الراتب" },
          { left: "die Ernährung", right: "التغذية" },
          { left: "sich ärgern", right: "يغضب / ينزعج" },
          { left: "die Rechnung", right: "الفاتورة" }
        ]
      },
      {
        type: "match",
        question: "صل الكلمة بمعناها (Lektion 13 - 15):",
        pairs: [
          { left: "die Muttersprache", right: "اللغة الأم" },
          { left: "der Müll", right: "القمامة" },
          { left: "der Zuschauer", right: "المشاهد" },
          { left: "die Sendung", right: "البرنامج التلفزيوني" }
        ]
      },

      // --- 5. ملء الفراغ (Text) ---
      {
        type: "text",
        question: "أكمل (Lektion 11): Er freut _______ auf den Urlaub.",
        answer: "sich",
        explanation: "الفعل sich freuen مع الضمير (er) يأخذ الضمير الانعكاسي sich."
      },
      {
        type: "text",
        question: "أكمل الفراغ (Lektion 15): Ich schenke _______ (أخي) ein Buch.",
        answer: "meinem Bruder",
        explanation: "الفعل schenken يأخذ مفعولين. الشخص (Bruder) يأخذ حالة Dativ -> meinem Bruder."
      },

      // --- 6. الإيميل (Email) ---
      {
        type: "email",
        question: "اكتب إيميل قصير (Lektion 10):",
        prompt: "أنت في مطعم والطعام بارد جداً. اكتب شكوى قصيرة للنادل واطلب إعادة تسخين الطعام، ثم اطلب الفاتورة.",
        keywords: ["kalt", "Entschuldigung", "Rechnung", "warm machen", "bitte"],
        explanation: "استخدم تعبيرات مثل: Entschuldigung, das Essen ist kalt. Könnten Sie es warm machen? Und die Rechnung bitte."
      }
    ]
  }
];

// ==========================================
// 2. دوال التشغيل (Logic)
// ==========================================
let currentExercise = 0;
let exerciseAnswered = false;
let exerciseScore = 0;

// متغير جديد: يحمل الأسئلة الحالية (سواء العادية أو الاختبار الشامل)
let currentQuestions = []; 

// متغيرات لتمارين الترتيب والتوصيل
let selectedWords = [];
let matchSelectedLeft = null;
let matchSelectedRight = null;
let matchPairsMatched = 0;

// 1. دالة بدء التمارين العادية
function startExercises() {
  // فلترة الأسئلة لاستبعاد الاختبار الشامل (الذي يحتوي على questions)
  currentQuestions = EXERCISES.filter(ex => !ex.questions);
  currentExercise = 0;
  exerciseScore = 0;
  exerciseAnswered = false;
  loadExercise();
}

// 2. دالة بدء الاختبار الشامل (التي سيفعلها الزر)
function startFinalExam() {
  const exam = EXERCISES.find(ex => ex.id === "final-exam-9-15");
  if (!exam) return alert('لم يتم العثور على بيانات الاختبار الشامل!');

  // إعادة تنسيق الأسئلة لتتوافق مع محرك التمارين
  currentQuestions = exam.questions.map(q => {
    let item = { ...q };
    
    if (item.type === 'mcq' || !item.type) {
      item.answer = item.correct; 
    } 
    else if (item.type === 'order') {
      item.correct = item.answer; 
    } 
    else if (item.type === 'match' && item.pairs) {
      item.pairs = item.pairs.map(p => ({ de: p.left, ar: p.right })); 
    }
    else if (item.type === 'email') {
      item.type = 'text';
      item.text = "Entschuldigung, das Essen ist kalt. Die _______ bitte!";
      item.answer = "Rechnung";
    }
    return item;
  });

  currentExercise = 0;
  exerciseScore = 0;
  exerciseAnswered = false;
  loadExercise();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. دالة تحميل السؤال
function loadExercise() {
  const ex = currentQuestions[currentExercise];
  document.getElementById("exerciseProgress").innerText = 'السؤال ' + (currentExercise + 1) + ' من ' + currentQuestions.length + ' (النتيجة: ' + exerciseScore + ')';
  document.getElementById("exerciseQuestion").innerText = ex.question;
  document.getElementById("exerciseQuestionAr").innerText = ex.questionAr || '';
  
  const optsBox = document.getElementById("exerciseOptions");
  optsBox.innerHTML = '';
  document.getElementById("exerciseFeedback").style.display = 'none';
  document.getElementById("exerciseNextBtn").style.display = 'none';
  exerciseAnswered = false;

  // 1. تمارين الاختيار من متعدد (MCQ)
  if (!ex.type || ex.type === 'mcq') {
    ex.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.innerText = opt;
      btn.style.cssText = 'padding:14px 20px; background:#f8fafc; border:2px solid #e2e8f0; border-radius:12px; cursor:pointer; font-size:16px; font-weight:600; font-family:Cairo,sans-serif; transition:all 0.2s; color:#1e293b;';
      btn.onmouseover = () => { if (!exerciseAnswered) btn.style.background = '#eff6ff'; };
      btn.onmouseout = () => { if (!exerciseAnswered) btn.style.background = '#f8fafc'; };
      btn.onclick = () => checkExercise(idx, btn);
      optsBox.appendChild(btn);
    });
  } 
  // 2. تمارين ترتيب الجمل (Order)
  else if (ex.type === 'order') {
    selectedWords = [];
    const wordsArea = document.createElement('div');
    wordsArea.id = 'scrambledWords';
    wordsArea.style.cssText = 'display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-bottom:20px;';
    
    const buildArea = document.createElement('div');
    buildArea.id = 'buildArea';
    buildArea.style.cssText = 'min-height:60px; padding:15px; background:#f8fafc; border:2px dashed #cbd5e1; border-radius:12px; display:flex; gap:10px; flex-wrap:wrap; justify-content:center; align-items:center; margin-bottom:20px;';
    
    optsBox.appendChild(wordsArea);
    optsBox.appendChild(buildArea);

    let shuffled = [...ex.words].sort(() => Math.random() - 0.5);
    shuffled.forEach(word => {
      const btn = document.createElement('button');
      btn.innerText = word;
      btn.style.cssText = 'padding:10px 15px; background:#fff; border:1px solid #cbd5e1; border-radius:8px; cursor:pointer; font-size:16px; font-weight:600; font-family:Cairo,sans-serif;';
      btn.onclick = () => {
        if (exerciseAnswered) return;
        selectedWords.push(word);
        btn.remove();
        const buildBtn = document.createElement('button');
        buildBtn.innerText = word;
        buildBtn.style.cssText = 'padding:10px 15px; background:#e0e7ff; border:1px solid #818cf8; border-radius:8px; cursor:pointer; font-size:16px; font-weight:600; font-family:Cairo,sans-serif; color:#3730a3;';
        buildBtn.onclick = () => {
          if (exerciseAnswered) return;
          const idx = selectedWords.indexOf(word);
          if (idx > -1) selectedWords.splice(idx, 1);
          buildBtn.remove();
          wordsArea.appendChild(btn);
        };
        buildArea.appendChild(buildBtn);
      };
      wordsArea.appendChild(btn);
    });

    const checkBtn = document.createElement('button');
    checkBtn.innerText = 'تحقق من الجملة ✅';
    checkBtn.style.cssText = 'padding:12px 25px; background:var(--primary); color:#fff; border:none; border-radius:20px; cursor:pointer; font-weight:700; font-family:Cairo,sans-serif;';
    checkBtn.onclick = () => checkOrderExercise(ex.correct);
    optsBox.appendChild(checkBtn);
  }
  // 3. تمارين التوصيل (Match)
  else if (ex.type === 'match') {
    matchSelectedLeft = null;
    matchSelectedRight = null;
    matchPairsMatched = 0;
    
    const leftCol = document.createElement('div');
    const rightCol = document.createElement('div');
    leftCol.style.cssText = 'display:flex; flex-direction:column; gap:10px;';
    rightCol.style.cssText = 'display:flex; flex-direction:column; gap:10px;';
    
    const matchContainer = document.createElement('div');
    matchContainer.style.cssText = 'display:grid; grid-template-columns:1fr 1fr; gap:20px; max-width:500px; margin:0 auto 20px auto;';
    matchContainer.appendChild(leftCol);
    matchContainer.appendChild(rightCol);
    optsBox.appendChild(matchContainer);

    let leftItems = [...ex.pairs].sort(() => Math.random() - 0.5);
    let rightItems = [...ex.pairs].sort(() => Math.random() - 0.5);

    leftItems.forEach(pair => {
      const btn = document.createElement('button');
      btn.innerText = pair.de;
      btn.dataset.id = pair.de;
      btn.style.cssText = 'padding:12px; background:#fff; border:2px solid #cbd5e1; border-radius:10px; cursor:pointer; font-weight:700; font-size:16px; direction:ltr;';
      btn.onclick = () => handleMatchClick(btn, 'left');
      leftCol.appendChild(btn);
    });

    rightItems.forEach(pair => {
      const btn = document.createElement('button');
      btn.innerText = pair.ar;
      btn.dataset.id = pair.de;
      btn.style.cssText = 'padding:12px; background:#fff; border:2px solid #cbd5e1; border-radius:10px; cursor:pointer; font-weight:700; font-size:16px;';
      btn.onclick = () => handleMatchClick(btn, 'right');
      rightCol.appendChild(btn);
    });
  }
  // 4. تمارين الكتابة (Text) و 5. الإيميل (Email)
  else if (ex.type === 'text' || ex.type === 'email') {
    let contentHtml = '';
    
    if (ex.type === 'email') {
      contentHtml = `
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:20px; text-align:left; direction:ltr; font-size:15px; line-height:1.8;">
          <p><strong>Von:</strong> ${ex.from || 'Max Mustermann'}</p>
          <p><strong>An:</strong> ${ex.to || 'Anna Schmidt'}</p>
          <p><strong>Betreff:</strong> ${ex.subject || 'Information'}</p>
          <hr style="margin:10px 0; border:0; border-top:1px dashed #cbd5e1;">
          <p>${ex.text}</p>
        </div>
      `;
    } else {
      contentHtml = `<p style="font-size:18px; line-height:2; margin-bottom:20px; direction:ltr; text-align:left;">${ex.text}</p>`;
    }
    
    const inputWrapper = document.createElement('div');
    inputWrapper.style.cssText = 'display:flex; gap:10px; justify-content:center; margin-bottom:20px; flex-wrap:wrap;';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'textInputAnswer';
    input.placeholder = 'اكتب الإجابة هنا...';
    input.style.cssText = 'padding:12px 20px; border:2px solid #cbd5e1; border-radius:10px; font-size:16px; font-family:Cairo,sans-serif; width:70%; max-width:300px; direction:ltr; outline:none;';
    
    const checkBtn = document.createElement('button');
    checkBtn.innerText = 'تحقق ✅';
    checkBtn.style.cssText = 'padding:12px 25px; background:var(--primary); color:#fff; border:none; border-radius:10px; cursor:pointer; font-weight:700; font-family:Cairo,sans-serif;';
    checkBtn.onclick = () => checkTextExercise(ex.answer);
    
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') checkTextExercise(ex.answer);
    });
    
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(checkBtn);
    
    optsBox.innerHTML = contentHtml;
    optsBox.appendChild(inputWrapper);
  }
}

// دالة التحقق للتمارين الكتابية والإيميل
function checkTextExercise(correctAnswer) {
  if (exerciseAnswered) return;
  exerciseAnswered = true;
  
  const input = document.getElementById('textInputAnswer');
  const userAnswer = input.value.trim().toLowerCase();
  const cleanCorrect = correctAnswer.trim().toLowerCase();
  const feedback = document.getElementById("exerciseFeedback");
  
  if (userAnswer === cleanCorrect) {
    input.style.borderColor = '#16a34a'; input.style.background = '#dcfce7'; input.disabled = true;
    exerciseScore++;
    feedback.innerHTML = '✅ <strong>إجابة صحيحة!</strong><br><span style="font-size:14px;">' + currentQuestions[currentExercise].explanation + '</span>';
    feedback.style.background = '#f0fdf4'; feedback.style.borderRight = '4px solid #16a34a'; feedback.style.color = '#166534';
  } else {
    input.style.borderColor = '#dc2626'; input.style.background = '#fee2e2'; input.disabled = true;
    feedback.innerHTML = '❌ <strong>إجابة خاطئة.</strong> الإجابة الصحيحة: <strong style="direction:ltr; display:inline-block;">' + correctAnswer + '</strong><br><span style="font-size:14px;">' + currentQuestions[currentExercise].explanation + '</span>';
    feedback.style.background = '#fef2f2'; feedback.style.borderRight = '4px solid #dc2626'; feedback.style.color = '#991b1b';
  }
  
  feedback.style.display = 'block';
  document.getElementById("exerciseNextBtn").style.display = 'inline-block';
  document.getElementById("exerciseNextBtn").innerText = (currentExercise === currentQuestions.length - 1) ? 'إعادة من البداية 🔄' : 'السؤال التالي ➡️';
}

// التحقق من ترتيب الجملة
function checkOrderExercise(correctSentence) {
  if (exerciseAnswered) return;
  exerciseAnswered = true;
  const userSentence = selectedWords.join(' ');
  const feedback = document.getElementById("exerciseFeedback");
  
  if (userSentence.toLowerCase().trim() === correctSentence.toLowerCase().trim()) {
    exerciseScore++;
    feedback.innerHTML = '✅ <strong>ترتيب صحيح!</strong><br><span style="font-size:14px;">الجملة: ' + correctSentence + '</span>';
    feedback.style.background = '#f0fdf4'; feedback.style.borderRight = '4px solid #16a34a'; feedback.style.color = '#166534';
  } else {
    feedback.innerHTML = '❌ <strong>ترتيب خاطئ.</strong> الجملة الصحيحة هي: <strong>' + correctSentence + '</strong>';
    feedback.style.background = '#fef2f2'; feedback.style.borderRight = '4px solid #dc2626'; feedback.style.color = '#991b1b';
  }
  feedback.style.display = 'block';
  document.getElementById("exerciseNextBtn").style.display = 'inline-block';
  document.getElementById("exerciseNextBtn").innerText = (currentExercise === currentQuestions.length - 1) ? 'إعادة من البداية 🔄' : 'السؤال التالي ➡️';
}

// التعامل مع النقر في تمارين التوصيل
function handleMatchClick(btn, side) {
  if (exerciseAnswered) return;
  
  if (side === 'left') {
    if (matchSelectedLeft) matchSelectedLeft.style.borderColor = '#cbd5e1';
    matchSelectedLeft = btn;
    btn.style.borderColor = '#4f46e5';
  } else {
    if (matchSelectedRight) matchSelectedRight.style.borderColor = '#cbd5e1';
    matchSelectedRight = btn;
    btn.style.borderColor = '#4f46e5';
  }

  if (matchSelectedLeft && matchSelectedRight) {
    const leftId = matchSelectedLeft.dataset.id;
    const rightId = matchSelectedRight.dataset.id;
    
    if (leftId === rightId) {
      matchSelectedLeft.style.background = '#dcfce7'; matchSelectedLeft.style.borderColor = '#16a34a'; matchSelectedLeft.disabled = true;
      matchSelectedRight.style.background = '#dcfce7'; matchSelectedRight.style.borderColor = '#16a34a'; matchSelectedRight.disabled = true;
      matchPairsMatched++;
      
      if (matchPairsMatched === currentQuestions[currentExercise].pairs.length) {
        exerciseAnswered = true;
        exerciseScore++;
        const feedback = document.getElementById("exerciseFeedback");
        feedback.innerHTML = '✅ <strong>ممتاز! لقد وصلت جميع الكلمات بشكل صحيح.</strong>';
        feedback.style.background = '#f0fdf4'; feedback.style.borderRight = '4px solid #16a34a'; feedback.style.color = '#166534'; feedback.style.display = 'block';
        document.getElementById("exerciseNextBtn").style.display = 'inline-block';
        document.getElementById("exerciseNextBtn").innerText = (currentExercise === currentQuestions.length - 1) ? 'إعادة من البداية 🔄' : 'السؤال التالي ➡️';
      }
    } else {
      matchSelectedLeft.style.background = '#fee2e2'; matchSelectedLeft.style.borderColor = '#dc2626';
      matchSelectedRight.style.background = '#fee2e2'; matchSelectedRight.style.borderColor = '#dc2626';
      
      const leftTemp = matchSelectedLeft; const rightTemp = matchSelectedRight;
      setTimeout(() => {
        leftTemp.style.background = '#fff'; leftTemp.style.borderColor = '#cbd5e1';
        rightTemp.style.background = '#fff'; rightTemp.style.borderColor = '#cbd5e1';
      }, 800);
    }
    matchSelectedLeft = null; matchSelectedRight = null;
  }
}

// دالة التحقق للـ MCQ
function checkExercise(selectedIdx, btnEl) {
  if (exerciseAnswered) return;
  exerciseAnswered = true;
  if (typeof trackActivity === 'function') trackActivity('exercises', 1);
  
  const ex = currentQuestions[currentExercise];
  const allBtns = document.getElementById("exerciseOptions").querySelectorAll('button');
  const feedback = document.getElementById("exerciseFeedback");
  
  if (selectedIdx === ex.answer) {
    btnEl.style.background = '#dcfce7'; btnEl.style.borderColor = '#16a34a'; btnEl.style.color = '#166534';
    exerciseScore++;
    feedback.innerHTML = '✅ <strong>إجابة صحيحة!</strong><br><span style="font-size:14px;">' + ex.explanation + '</span>';
    feedback.style.background = '#f0fdf4'; feedback.style.borderRight = '4px solid #16a34a'; feedback.style.color = '#166534';
  } else {
    btnEl.style.background = '#fee2e2'; btnEl.style.borderColor = '#dc2626'; btnEl.style.color = '#991b1b';
    if (allBtns[ex.answer]) {
      allBtns[ex.answer].style.background = '#dcfce7'; allBtns[ex.answer].style.borderColor = '#16a34a'; allBtns[ex.answer].style.color = '#166534';
    }
    feedback.innerHTML = '❌ <strong>إجابة خاطئة.</strong> الإجابة الصحيحة: <strong>' + ex.options[ex.answer] + '</strong><br><span style="font-size:14px;">' + ex.explanation + '</span>';
    feedback.style.background = '#fef2f2'; feedback.style.borderRight = '4px solid #dc2626'; feedback.style.color = '#991b1b';
  }
  
  feedback.style.display = 'block';
  document.getElementById("exerciseNextBtn").style.display = 'inline-block';
  document.getElementById("exerciseNextBtn").innerText = (currentExercise === currentQuestions.length - 1) ? 'إعادة من البداية 🔄' : 'السؤال التالي ➡️';
}

function nextExercise() {
  currentExercise = (currentExercise + 1) % currentQuestions.length;
  if (currentExercise === 0) exerciseScore = 0;
  loadExercise();
}
