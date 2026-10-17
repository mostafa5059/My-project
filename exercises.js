  /* ============ 50 تمريناً إضافياً ============ */
  
  // ===== الحالات الإعرابية (مختلطة) =====
  { question: "Der Mann gibt ___ Kind einen Apfel.", questionAr: "الرجل يعطي الطفل تفاحة.", options: ["das", "dem", "den", "der"], answer: 1, explanation: "الفعل geben يأخذ Dativ للشخص (Kind محايد → dem) و Akkusativ للشيء (einen Apfel)." },
  { question: "Ich zeige ___ Frau das Foto.", questionAr: "أُري المرأة الصورة.", options: ["die", "der", "den", "dem"], answer: 1, explanation: "zeigen يأخذ Dativ للشخص (Frau مؤنث → der) و Akkusativ للشيء (das Foto)." },
  { question: "Wir schenken ___ Eltern ein Geschenk.", questionAr: "نهدي الوالدين هدية.", options: ["die", "der", "den", "dem"], answer: 2, explanation: "schenken يأخذ Dativ للشخص (Eltern جمع → den + n) و Akkusativ للشيء." },
  { question: "Er kauft ___ Schwester ein Buch.", questionAr: "يشتري لأخته كتاباً.", options: ["die", "der", "den", "dem"], answer: 1, explanation: "kaufen + Dativ للشخص المستفيد (Schwester مؤنث → der)." },
  { question: "Das ist das Auto ___ Mannes.", questionAr: "هذه سيارة الرجل (Genitiv).", options: ["der", "den", "des", "dem"], answer: 2, explanation: "Genitiv للمذكر = des + s (Mannes)." },

  // ===== الضمائر في الحالات =====
  { question: "Ich danke ___ für die Hilfe.", questionAr: "أشكرك على المساعدة.", options: ["du", "dich", "dir", "dein"], answer: 2, explanation: "danken يأخذ Dativ، و du في Dativ = dir." },
  { question: "Ich sehe ___ jeden Tag.", questionAr: "أراه كل يوم.", options: ["er", "ihn", "ihm", "sein"], answer: 1, explanation: "sehen يأخذ Akkusativ، و er في Akkusativ = ihn." },
  { question: "Wir helfen ___ immer.", questionAr: "نساعدها دائماً.", options: ["sie", "ihr", "ihn", "ihm"], answer: 1, explanation: "helfen يأخذ Dativ، و sie (هي) في Dativ = ihr." },
  { question: "Er gibt ___ das Buch.", questionAr: "هو يعطينا الكتاب.", options: ["wir", "uns", "unser", "euch"], answer: 1, explanation: "geben + Dativ للشخص، و wir في Dativ = uns." },
  { question: "Kannst du ___ bitte helfen?", questionAr: "هل يمكنك مساعدتهم؟", options: ["sie", "ihnen", "ihr", "sich"], answer: 1, explanation: "helfen يأخذ Dativ، و sie (هم) في Dativ = ihnen." },

  // ===== تصريف الأفعال في المضارع =====
  { question: "Er ___ jeden Tag zur Arbeit.", questionAr: "هو يذهب كل يوم إلى العمل.", options: ["gehe", "gehst", "geht", "gehen"], answer: 2, explanation: "gehen مع er/sie/es = geht." },
  { question: "Du ___ sehr gut Deutsch.", questionAr: "أنت تتحدث الألمانية جيداً جداً.", options: ["spreche", "sprichst", "spricht", "sprechen"], answer: 1, explanation: "sprechen مع du = sprichst (تغيّر حرف العلة e→i)." },
  { question: "Wir ___ nach Berlin.", questionAr: "نسافر إلى برلين.", options: ["fahre", "fährst", "fährt", "fahren"], answer: 3, explanation: "fahren مع wir = fahren." },
  { question: "Ihr ___ zu viel.", questionAr: "أنتم تأكلون كثيراً.", options: ["esse", "isst", "esst", "essen"], answer: 2, explanation: "essen مع ihr = esst." },
  { question: "Sie (هم) ___ Bücher.", questionAr: "هم يقرؤون كتباً.", options: ["lese", "liest", "lest", "lesen"], answer: 3, explanation: "lesen مع sie (هم) = lesen." },

  // ===== الماضي البسيط (Präteritum) =====
  { question: "Ich ___ gestern krank.", questionAr: "كنت مريضاً أمس.", options: ["bin", "war", "warst", "waren"], answer: 1, explanation: "sein في Präteritum مع ich = war." },
  { question: "Er ___ keine Zeit.", questionAr: "لم يكن لديه وقت.", options: ["hat", "hatte", "hattest", "hatten"], answer: 1, explanation: "haben في Präteritum مع er = hatte." },
  { question: "Sie (هي) ___ nach Hause.", questionAr: "هي ذهبت إلى المنزل.", options: ["geht", "ging", "gingst", "gingen"], answer: 1, explanation: "gehen في Präteritum مع sie = ging." },
  { question: "Wir ___ das Buch.", questionAr: "قرأنا الكتاب.", options: ["lesen", "las", "lasen", "lest"], answer: 2, explanation: "lesen في Präteritum مع wir = lasen." },
  { question: "Ihr ___ viel.", questionAr: "أنتم شربتم كثيراً.", options: ["trinken", "trank", "trankt", "tranken"], answer: 2, explanation: "trinken في Präteritum مع ihr = trankt." },

  // ===== الماضي التام (Perfekt) =====
  { question: "Ich ___ einen Film gesehen.", questionAr: "شاهدت فيلماً.", options: ["habe", "bin", "ist", "hat"], answer: 0, explanation: "sehen يأخذ haben. مع ich = habe." },
  { question: "Er ___ nach Berlin gefahren.", questionAr: "سافر إلى برلين.", options: ["hat", "ist", "bin", "sind"], answer: 1, explanation: "fahren فعل حركة، لذا يأخذ sein. مع er = ist." },
  { question: "Wir ___ im Supermarkt eingekauft.", questionAr: "تسوقنا في السوبر ماركت.", options: ["haben", "sind", "seid", "hat"], answer: 0, explanation: "einkaufen يأخذ haben. مع wir = haben." },
  { question: "Sie (هي) ___ um 7 Uhr aufgestanden.", questionAr: "هي استيقظت الساعة 7.", options: ["hat", "ist", "sind", "bin"], answer: 1, explanation: "aufstehen فعل تغير حالة، لذا يأخذ sein. مع sie = ist." },
  { question: "Ihr ___ das Buch gelesen.", questionAr: "أنتم قرأتم الكتاب.", options: ["habt", "seid", "sind", "hat"], answer: 0, explanation: "lesen يأخذ haben. مع ihr = habt." },
  { question: "Die Kinder ___ im Garten gespielt.", questionAr: "الأطفال لعبوا في الحديقة.", options: ["haben", "sind", "seid", "hat"], answer: 0, explanation: "spielen يأخذ haben. مع sie (جمع) = haben." },

  // ===== الأفعال المساعدة (Modalverben) =====
  { question: "Ich ___ heute nicht kommen.", questionAr: "لا أستطيع المجيء اليوم.", options: ["kann", "kannst", "können", "könnt"], answer: 0, explanation: "können مع ich = kann." },
  { question: "Du ___ mehr Wasser trinken.", questionAr: "يجب أن تشرب ماءً أكثر.", options: ["muss", "musst", "müssen", "müsst"], answer: 1, explanation: "müssen مع du = musst." },
  { question: "Er ___ ein neues Auto kaufen.", questionAr: "يريد شراء سيارة جديدة.", options: ["will", "willst", "wollen", "wollt"], answer: 0, explanation: "wollen مع er = will." },
  { question: "___ ich hier parken?", questionAr: "هل يُسمح لي بالوقوف هنا؟", options: ["Darf", "Darfst", "Dürfen", "Dürft"], answer: 0, explanation: "dürfen مع ich = darf." },
  { question: "Sie (هي) ___ mehr schlafen.", questionAr: "ينبغي أن تنام أكثر.", options: ["soll", "sollst", "sollen", "sollt"], answer: 0, explanation: "sollen مع sie (هي) = soll." },
  { question: "Wir ___ ins Kino gehen.", questionAr: "نريد الذهاب إلى السينما.", options: ["will", "wollt", "wollen", "wollen"], answer: 2, explanation: "wollen مع wir = wollen." },

  // ===== حروف الجر =====
  { question: "Ich gehe ___ die Schule.", questionAr: "أذهب إلى المدرسة (حركة).", options: ["in", "an", "auf", "zu"], answer: 0, explanation: "in + Akkusativ للتعبير عن الحركة إلى داخل مكان." },
  { question: "Ich bin ___ der Schule.", questionAr: "أنا في المدرسة (سكون).", options: ["in", "an", "auf", "zu"], answer: 0, explanation: "in + Dativ للتعبير عن السكون داخل مكان." },
  { question: "Das Buch liegt ___ dem Tisch.", questionAr: "الكتاب موضوع على الطاولة (سكون).", options: ["in", "an", "auf", "über"], answer: 2, explanation: "auf + Dativ للتعبير عن السكون على سطح أفقي." },
  { question: "Ich hänge das Bild ___ die Wand.", questionAr: "أعلق الصورة على الحائط (حركة).", options: ["in", "an", "auf", "über"], answer: 1, explanation: "an + Akkusativ للتعبير عن الحركة إلى جانب أو على سطح رأسي." },
  { question: "Wir treffen uns ___ dem Bahnhof.", questionAr: "نتقابل عند محطة القطار.", options: ["in", "an", "auf", "vor"], answer: 3, explanation: "vor + Dativ = أمام (نستخدم vor dem Bahnhof = أمام المحطة)." },

  // ===== الروابط =====
  { question: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.", questionAr: "أتعلم الألمانية لأنني أريد العمل في ألمانيا.", options: ["denn", "weil", "aber", "und"], answer: 1, explanation: "weil (لأن) ترسل الفعل إلى نهاية الجملة. (denn أيضاً تعني لأن لكن لا تغير الترتيب)." },
  { question: "Ich bin müde, ___ ich gehe ins Bett.", questionAr: "أنا متعب، لذلك أذهب للنوم.", options: ["weil", "deshalb", "dass", "wenn"], answer: 1, explanation: "deshalb (لذلك) تحتل المركز الأول، والفعل بعدها مباشرة." },
  { question: "___ ich Zeit habe, lese ich.", questionAr: "عندما يكون لدي وقت، أقرأ.", options: ["Weil", "Dass", "Wenn", "Denn"], answer: 2, explanation: "wenn (عندما/إذا) ترسل الفعل إلى نهاية الجملة." },
  { question: "Ich weiß, ___ er morgen kommt.", questionAr: "أعرف أنه سيأتي غداً.", options: ["weil", "dass", "wenn", "denn"], answer: 1, explanation: "dass (أن) ترسل الفعل إلى نهاية الجملة." },
  { question: "Ich bleibe zu Hause, ___ es regnet.", questionAr: "أبقى في المنزل لأنها تمطر.", options: ["denn", "weil", "aber", "oder"], answer: 0, explanation: "denn (لأن) لا تغير ترتيب الجملة (الفعل في المركز الثاني)." },

  // ===== أسئلة متنوعة =====
  { question: "___ heißt du?", questionAr: "ما اسمك؟", options: ["Was", "Wie", "Wo", "Wer"], answer: 1, explanation: "Wie heißt du? = ما اسمك؟ (حرفياً: كيف تُسمى؟)" },
  { question: "___ kommst du?", questionAr: "من أين أنت؟", options: ["Wo", "Woher", "Wohin", "Wann"], answer: 1, explanation: "Woher = من أين (المصدر)." },
  { question: "___ wohnst du?", questionAr: "أين تسكن؟", options: ["Wo", "Woher", "Wohin", "Wann"], answer: 0, explanation: "Wo = أين (المكان)." },
  { question: "___ alt bist du?", questionAr: "كم عمرك؟", options: ["Wie", "Was", "Wo", "Wer"], answer: 0, explanation: "Wie alt = كم عمر." },
  { question: "___ ist das?", questionAr: "من هذا؟", options: ["Was", "Wie", "Wo", "Wer"], answer: 3, explanation: "Wer = من (للأشخاص)." },
  { question: "___ Uhr ist es?", questionAr: "كم الساعة؟", options: ["Wie viel", "Wann", "Wo", "Wie"], answer: 0, explanation: "Wie viel Uhr = كم الساعة." },
  { question: "___ kostet das?", questionAr: "كم يكلف هذا؟", options: ["Wie viel", "Wann", "Wo", "Wer"], answer: 0, explanation: "Wie viel kostet = كم يكلف." },
  { question: "___ beginnt der Film?", questionAr: "متى يبدأ الفيلم؟", options: ["Wie viel", "Wann", "Wo", "Wer"], answer: 1, explanation: "Wann = متى." },
  { question: "___ machst du am Wochenende?", questionAr: "ماذا تفعل في عطلة نهاية الأسبوع؟", options: ["Was", "Wie", "Wo", "Wer"], answer: 0, explanation: "Was = ماذا." },
  { question: "___ ist dein Lieblingsfach?", questionAr: "ما هو موضوعك المفضل؟", options: ["Was", "Wie", "Wo", "Wer"], answer: 0, explanation: "Was = ما (للأشياء)." }
