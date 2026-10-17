const DIALOGUES = [
  {
    title: "في المطعم (Im Restaurant)",
    icon: "🍽️",
    level: "A1",
    lines: [
      { speaker: "A", de: "Guten Tag! Einen Tisch für zwei, bitte.", ar: "نهارك سعيد! طاولة لشخصين، من فضلك." },
      { speaker: "B", de: "Natürlich! Hier entlang, bitte.", ar: "بالتأكيد! من هنا، من فضلك." },
      { speaker: "A", de: "Danke. Können wir die Speisekarte haben?", ar: "شكراً. هل يمكننا الحصول على قائمة الطعام؟" },
      { speaker: "B", de: "Hier ist die Speisekarte. Was möchten Sie trinken?", ar: "هذه هي قائمة الطعام. ماذا تريد أن تشرب؟" },
      { speaker: "A", de: "Ein Glas Wasser, bitte.", ar: "كأس ماء، من فضلك." },
      { speaker: "B", de: "Und was möchten Sie essen?", ar: "وماذا تريد أن تأكل؟" },
      { speaker: "A", de: "Ich nehme einen Salat und eine Suppe.", ar: "سآخذ سلطة وشوربة." },
      { speaker: "B", de: "Sehr gerne. Kommt sofort.", ar: "بكل سرور. سيأتي حالاً." },
      { speaker: "A", de: "Die Rechnung, bitte!", ar: "الفاتورة، من فضلك!" },
      { speaker: "B", de: "Das macht 25 Euro.", ar: "المجموع 25 يورو." }
    ],
    questions: [
      { q: "ماذا طلب الشخص A للشرب؟", options: ["قهوة", "شاي", "ماء", "عصير"], answer: 2 },
      { q: "ماذا طلب للأكل؟", options: ["لحم", "سمك", "سلطة وشوربة", "بيتزا"], answer: 2 },
      { q: "كم كان المجموع؟", options: ["15 يورو", "20 يورو", "25 يورو", "30 يورو"], answer: 2 }
    ]
  },
  {
    title: "في المطار (Am Flughafen)",
    icon: "✈️",
    level: "A1",
    lines: [
      { speaker: "A", de: "Entschuldigung, wo ist der Check-in-Schalter?", ar: "عذراً، أين مكتب تسجيل الوصول؟" },
      { speaker: "B", de: "Gehen Sie geradeaus, dann links.", ar: "امشِ مباشرة، ثم يساراً." },
      { speaker: "A", de: "Danke. Wann geht mein Flug?", ar: "شكراً. متى تنطلق رحلتي؟" },
      { speaker: "B", de: "Um 14 Uhr. Bitte seien Sie 30 Minuten früher da.", ar: "الساعة 14. من فضلك كن هناك قبلها بـ 30 دقيقة." },
      { speaker: "A", de: "Wie viel Gepäck darf ich mitnehmen?", ar: "كم من الأمتعة يُسمح لي بأخذها؟" },
      { speaker: "B", de: "Ein Koffer und ein Handgepäck.", ar: "حقيبة واحدة وحقيبة يد." },
      { speaker: "A", de: "Wo ist das Gate?", ar: "أين البوابة؟" },
      { speaker: "B", de: "Gate B12, im ersten Stock.", ar: "البوابة B12، في الطابق الأول." }
    ],
    questions: [
      { q: "متى تنطلق الرحلة؟", options: ["الساعة 10", "الساعة 12", "الساعة 14", "الساعة 16"], answer: 2 },
      { q: "كم من الأمتعة يُسمح بها؟", options: ["حقيبتان", "حقيبة وحقيبة يد", "ثلاث حقائب", "بدون أمتعة"], answer: 1 },
      { q: "أين البوابة؟", options: ["الطابق الأرضي", "الطابق الأول", "الطابق الثاني", "خارج المطار"], answer: 1 }
    ]
  },
  {
    title: "عند الطبيب (Beim Arzt)",
    icon: "🏥",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Tag, ich habe einen Termin um 10 Uhr.", ar: "نهارك سعيد، لدي موعد الساعة 10." },
      { speaker: "B", de: "Wie heißen Sie, bitte?", ar: "ما اسمك، من فضلك؟" },
      { speaker: "A", de: "Ich heiße Ahmed Hassan.", ar: "اسمي أحمد حسن." },
      { speaker: "B", de: "Was fehlt Ihnen?", ar: "ما الذي يؤلمك؟" },
      { speaker: "A", de: "Ich habe Kopfschmerzen und Fieber.", ar: "لدي صداع وحمى." },
      { speaker: "B", de: "Seit wann haben Sie diese Symptome?", ar: "منذ متى لديك هذه الأعراض؟" },
      { speaker: "A", de: "Seit zwei Tagen.", ar: "منذ يومين." },
      { speaker: "B", de: "Nehmen Sie dieses Medikament dreimal täglich.", ar: "خذ هذا الدواء ثلاث مرات يومياً." },
      { speaker: "A", de: "Muss ich zu Hause bleiben?", ar: "هل يجب أن أبقى في المنزل؟" },
      { speaker: "B", de: "Ja, ruhen Sie sich zwei Tage aus.", ar: "نعم، ارتح يومين." }
    ],
    questions: [
      { q: "ماذا يؤلم المريض؟", options: ["بطنه", "صداع وحمى", "قدمه", "أسنانه"], answer: 1 },
      { q: "منذ متى لديه الأعراض؟", options: ["منذ يوم", "منذ يومين", "منذ أسبوع", "منذ شهر"], answer: 1 },
      { q: "كم مرة يأخذ الدواء؟", options: ["مرة", "مرتين", "ثلاث مرات", "أربع مرات"], answer: 2 }
    ]
  },
  {
    title: "في السوبر ماركت (Im Supermarkt)",
    icon: "🛒",
    level: "A1",
    lines: [
      { speaker: "A", de: "Entschuldigung, wo finde ich die Milch?", ar: "عذراً، أين أجد الحليب؟" },
      { speaker: "B", de: "Die Milch ist im dritten Gang, links.", ar: "الحليب في الممر الثالث، على اليسار." },
      { speaker: "A", de: "Danke. Wie viel kostet das Brot?", ar: "شكراً. كم يكلف الخبز؟" },
      { speaker: "B", de: "Das Brot kostet 2 Euro.", ar: "الخبز يكلف 2 يورو." },
      { speaker: "A", de: "Ich nehme das Brot und die Milch.", ar: "سآخذ الخبز والحليب." },
      { speaker: "B", de: "Noch etwas?", ar: "شيء آخر؟" },
      { speaker: "A", de: "Nein, danke. Wo kann ich bezahlen?", ar: "لا، شكراً. أين يمكنني الدفع؟" },
      { speaker: "B", de: "An der Kasse dort vorne.", ar: "عند الصندوق هناك في الأمام." }
    ],
    questions: [
      { q: "أين يوجد الحليب؟", options: ["الممر الأول", "الممر الثاني", "الممر الثالث", "الممر الرابع"], answer: 2 },
      { q: "كم يكلف الخبز؟", options: ["1 يورو", "2 يورو", "3 يورو", "4 يورو"], answer: 1 },
      { q: "ماذا اشترى الشخص A؟", options: ["الخبز فقط", "الحليب فقط", "الخبز والحليب", "اللحم"], answer: 2 }
    ]
  },
  {
    title: "التعريف بنفسك (Sich vorstellen)",
    icon: "👋",
    level: "A1",
    lines: [
      { speaker: "A", de: "Hallo! Ich heiße Ahmed. Und du?", ar: "مرحباً! اسمي أحمد. وأنت؟" },
      { speaker: "B", de: "Hallo Ahmed! Ich bin Maria. Freut mich!", ar: "مرحباً أحمد! أنا ماريا. سعيد بلقائك!" },
      { speaker: "A", de: "Woher kommst du, Maria?", ar: "من أين أنتِ يا ماريا؟" },
      { speaker: "B", de: "Ich komme aus Spanien. Und du?", ar: "أنا من إسبانيا. وأنت؟" },
      { speaker: "A", de: "Ich komme aus Ägypten.", ar: "أنا من مصر." },
      { speaker: "B", de: "Was machst du hier?", ar: "ماذا تفعل هنا؟" },
      { speaker: "A", de: "Ich lerne Deutsch. Ich möchte in Deutschland studieren.", ar: "أتعلم الألمانية. أريد الدراسة في ألمانيا." },
      { speaker: "B", de: "Das ist toll! Viel Erfolg!", ar: "هذا رائع! حظاً موفقاً!" }
    ],
    questions: [
      { q: "من أين ماريا؟", options: ["من مصر", "من ألمانيا", "من إسبانيا", "من فرنسا"], answer: 2 },
      { q: "لماذا يتعلم أحمد الألمانية؟", options: ["للسياحة", "للعمل", "للدراسة", "للرياضة"], answer: 2 }
    ]
  },
  {
    title: "استئجار شقة (Wohnungssuche)",
    icon: "🏠",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Tag, ich rufe wegen der Wohnung an.", ar: "نهارك سعيد، أتصل بخصوص الشقة." },
      { speaker: "B", de: "Guten Tag! Die Wohnung ist noch frei.", ar: "نهارك سعيد! الشقة لا تزال متاحة." },
      { speaker: "A", de: "Wie groß ist die Wohnung?", ar: "كم مساحة الشقة؟" },
      { speaker: "B", de: "Sie hat 60 Quadratmeter, zwei Zimmer und eine Küche.", ar: "مساحتها 60 متراً مربعاً، غرفتان ومطبخ." },
      { speaker: "A", de: "Wie hoch ist die Miete?", ar: "كم الإيجار؟" },
      { speaker: "B", de: "Die Miete beträgt 600 Euro pro Monat.", ar: "الإيجار 600 يورو شهرياً." },
      { speaker: "A", de: "Ist die Wohnung möbliert?", ar: "هل الشقة مفروشة؟" },
      { speaker: "B", de: "Nein, sie ist unmöbliert.", ar: "لا، هي غير مفروشة." },
      { speaker: "A", de: "Wann kann ich sie besichtigen?", ar: "متى يمكنني معاينتها؟" },
      { speaker: "B", de: "Morgen um 15 Uhr, passt das?", ar: "غداً الساعة 15، هل يناسبك؟" }
    ],
    questions: [
      { q: "كم مساحة الشقة؟", options: ["40 متراً", "50 متراً", "60 متراً", "70 متراً"], answer: 2 },
      { q: "كم الإيجار الشهري؟", options: ["400 يورو", "500 يورو", "600 يورو", "700 يورو"], answer: 2 },
      { q: "هل الشقة مفروشة؟", options: ["نعم", "لا", "مفروشة جزئياً", "غير مذكور"], answer: 1 }
    ]
  },
  {
    title: "في البنك (Bei der Bank)",
    icon: "🏦",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Tag, ich möchte ein Konto eröffnen.", ar: "نهارك سعيد، أريد فتح حساب." },
      { speaker: "B", de: "Haben Sie einen Personalausweis dabei?", ar: "هل معك بطاقة هوية؟" },
      { speaker: "A", de: "Ja, hier bitte.", ar: "نعم، ها هي من فضلك." },
      { speaker: "B", de: "Möchten Sie eine Kreditkarte?", ar: "هل تريد بطاقة ائتمان؟" },
      { speaker: "A", de: "Ja, bitte. Wie hoch sind die Gebühren?", ar: "نعم، من فضلك. كم الرسوم؟" },
      { speaker: "B", de: "Die Karte kostet 30 Euro pro Jahr.", ar: "البطاقة تكلف 30 يورو سنوياً." },
      { speaker: "A", de: "Das ist okay. Wie lange dauert die Eröffnung?", ar: "هذا مناسب. كم تستغرق عملية الفتح؟" },
      { speaker: "B", de: "Etwa 20 Minuten.", ar: "حوالي 20 دقيقة." }
    ],
    questions: [
      { q: "ماذا يريد الشخص A؟", options: ["سحب مال", "فتح حساب", "تحويل مال", "إغلاق حساب"], answer: 1 },
      { q: "كم تكلف بطاقة الائتمان سنوياً؟", options: ["10 يورو", "20 يورو", "30 يورو", "40 يورو"], answer: 2 },
      { q: "كم تستغرق عملية فتح الحساب؟", options: ["10 دقائق", "20 دقيقة", "30 دقيقة", "ساعة"], answer: 1 }
    ]
  },
  {
    title: "في العمل (Bei der Arbeit)",
    icon: "💼",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Morgen, Herr Müller! Wie geht es Ihnen?", ar: "صباح الخير، سيد مولر! كيف حالك؟" },
      { speaker: "B", de: "Guten Morgen! Danke, gut. Und Ihnen?", ar: "صباح الخير! شكراً، بخير. وأنت؟" },
      { speaker: "A", de: "Auch gut, danke. Wann ist die Besprechung?", ar: "بخير أيضاً، شكراً. متى الاجتماع؟" },
      { speaker: "B", de: "Um 10 Uhr im Konferenzraum.", ar: "الساعة 10 في قاعة الاجتماعات." },
      { speaker: "A", de: "Muss ich etwas vorbereiten?", ar: "هل يجب أن أحضر شيئاً؟" },
      { speaker: "B", de: "Ja, bitte bringen Sie den Bericht mit.", ar: "نعم، من فضلك أحضر التقرير معك." },
      { speaker: "A", de: "Natürlich, ich habe ihn schon fertig.", ar: "بالطبع، لقد أنهيته بالفعل." }
    ],
    questions: [
      { q: "متى الاجتماع؟", options: ["الساعة 8", "الساعة 9", "الساعة 10", "الساعة 11"], answer: 2 },
      { q: "ماذا يجب أن يحضر الشخص A؟", options: ["الكمبيوتر", "التقرير", "القهوة", "الكتب"], answer: 1 }
    ]
  },
  {
    title: "في محطة الحافلات (Am Busbahnhof)",
    icon: "🚌",
    level: "A2",
    lines: [
      { speaker: "A", de: "Entschuldigung, wann fährt der nächste Bus nach Hamburg?", ar: "عذراً، متى تنطلق الحافلة القادمة إلى هامبورغ؟" },
      { speaker: "B", de: "Der nächste Bus fährt um 14:30 Uhr.", ar: "الحافلة القادمة تنطلق الساعة 14:30." },
      { speaker: "A", de: "Wie lange dauert die Fahrt?", ar: "كم تستغرق الرحلة؟" },
      { speaker: "B", de: "Etwa 4 Stunden.", ar: "حوالي 4 ساعات." },
      { speaker: "A", de: "Wie viel kostet eine Fahrkarte?", ar: "كم تكلف التذكرة؟" },
      { speaker: "B", de: "25 Euro einfach.", ar: "25 يورو ذهاب فقط." },
      { speaker: "A", de: "Ich möchte eine Fahrkarte, bitte.", ar: "أريد تذكرة، من فضلك." },
      { speaker: "B", de: "Einfach oder hin und zurück?", ar: "ذهاب فقط أم ذهاب وعودة؟" },
      { speaker: "A", de: "Einfach, bitte.", ar: "ذهاب فقط، من فضلك." },
      { speaker: "B", de: "Von Gleis 5.", ar: "من الرصيف 5." }
    ],
    questions: [
      { q: "متى تنطلق الحافلة؟", options: ["13:30", "14:30", "15:30", "16:30"], answer: 1 },
      { q: "كم تستغرق الرحلة؟", options: ["ساعتان", "3 ساعات", "4 ساعات", "5 ساعات"], answer: 2 },
      { q: "من أي رصيف تنطلق الحافلة؟", options: ["الرصيف 3", "الرصيف 4", "الرصيف 5", "الرصيف 6"], answer: 2 }
    ]
  },
  {
    title: "في الجامعة (An der Universität)",
    icon: "🏫",
    level: "A2",
    lines: [
      { speaker: "A", de: "Entschuldigung, wo ist das Sekretariat?", ar: "عذراً، أين مكتب السكرتارية؟" },
      { speaker: "B", de: "Das Sekretariat ist im zweiten Stock, Zimmer 214.", ar: "السكرتارية في الطابق الثاني، غرفة 214." },
      { speaker: "A", de: "Danke. Ich möchte mich für den Deutschkurs anmelden.", ar: "شكراً. أريد التسجيل في دورة اللغة الألمانية." },
      { speaker: "B", de: "Welches Niveau haben Sie?", ar: "ما مستواك؟" },
      { speaker: "A", de: "Ich habe Niveau A2.", ar: "لدي مستوى A2." },
      { speaker: "B", de: "Gut. Der Kurs beginnt am 15. September.", ar: "جيد. الدورة تبدأ في 15 سبتمبر." },
      { speaker: "A", de: "Wie viel kostet der Kurs?", ar: "كم تكلف الدورة؟" },
      { speaker: "B", de: "250 Euro für drei Monate.", ar: "250 يورو لثلاثة أشهر." },
      { speaker: "A", de: "Muss ich etwas mitbringen?", ar: "هل يجب أن أحضر شيئاً؟" },
      { speaker: "B", de: "Ja, Ihren Pass und ein Foto.", ar: "نعم، جواز سفرك وصورة." }
    ],
    questions: [
      { q: "أين مكتب السكرتارية؟", options: ["الطابق الأول", "الطابق الثاني", "الطابق الثالث", "الطابق الأرضي"], answer: 1 },
      { q: "ما مستوى الشخص A؟", options: ["A1", "A2", "B1", "B2"], answer: 1 },
      { q: "متى تبدأ الدورة؟", options: ["1 سبتمبر", "10 سبتمبر", "15 سبتمبر", "20 سبتمبر"], answer: 2 }
    ]
  },
  {
    title: "رياضة ولياقة (Sport und Fitness)",
    icon: "🏃",
    level: "A2",
    lines: [
      { speaker: "A", de: "Hallo! Was machst du in deiner Freizeit?", ar: "مرحباً! ماذا تفعل في وقت فراغك؟" },
      { speaker: "B", de: "Ich gehe dreimal pro Woche ins Fitnessstudio. Und du?", ar: "أذهب ثلاث مرات في الأسبوع إلى صالة الألعاب الرياضية. وأنت؟" },
      { speaker: "A", de: "Ich spiele Fußball mit Freunden.", ar: "ألعب كرة القدم مع الأصدقاء." },
      { speaker: "B", de: "Das ist toll! Wie oft spielst du?", ar: "هذا رائع! كم مرة تلعب؟" },
      { speaker: "A", de: "Zweimal pro Woche, am Dienstag und am Samstag.", ar: "مرتين في الأسبوع، الثلاثاء والسبت." },
      { speaker: "B", de: "Möchtest du auch ins Fitnessstudio gehen?", ar: "هل تريد أيضاً الذهاب إلى صالة الألعاب الرياضية؟" },
      { speaker: "A", de: "Ja, gerne! Wo ist das Fitnessstudio?", ar: "نعم، بكل سرور! أين صالة الألعاب الرياضية؟" },
      { speaker: "B", de: "In der Hauptstraße, neben dem Supermarkt.", ar: "في الشارع الرئيسي، بجانب السوبر ماركت." }
    ],
    questions: [
      { q: "كم مرة يذهب الشخص B إلى الصالة الرياضية؟", options: ["مرة", "مرتين", "ثلاث مرات", "أربع مرات"], answer: 2 },
      { q: "ماذا يلعب الشخص A؟", options: ["تنس", "كرة سلة", "كرة قدم", "سباحة"], answer: 2 },
      { q: "أين الصالة الرياضية؟", options: ["في الشارع الرئيسي", "في المدرسة", "في الحديقة", "في المطار"], answer: 0 }
    ]
  },
  {
    title: "طلب بيتزا (Pizza bestellen)",
    icon: "🍕",
    level: "A1",
    lines: [
      { speaker: "A", de: "Pizzeria Bella, guten Abend! Was möchten Sie bestellen?", ar: "بيتزيريا بيلا، مساء الخير! ماذا تريد أن تطلب؟" },
      { speaker: "B", de: "Guten Abend! Ich möchte eine Pizza Margherita, bitte.", ar: "مساء الخير! أريد بيتزا مارغريتا، من فضلك." },
      { speaker: "A", de: "Möchten Sie auch etwas trinken?", ar: "هل تريد أيضاً شيئاً للشرب؟" },
      { speaker: "B", de: "Ja, eine Cola, bitte.", ar: "نعم، كولا، من فضلك." },
      { speaker: "A", de: "Möchten Sie die Pizza abholen oder liefern lassen?", ar: "تريد استلام البيتزا أم توصيلها؟" },
      { speaker: "B", de: "Liefern bitte. Meine Adresse ist Gartenstraße 10.", ar: "توصيل من فضلك. عنواني هو Gartenstraße 10." },
      { speaker: "A", de: "Das dauert etwa 30 Minuten.", ar: "يستغرق حوالي 30 دقيقة." },
      { speaker: "B", de: "Das ist in Ordnung. Danke!", ar: "هذا مناسب. شكراً!" }
    ],
    questions: [
      { q: "ماذا طلب الشخص B؟", options: ["بيتزا مارغريتا", "بيتزا سلامي", "معكرونة", "سلطة"], answer: 0 },
      { q: "ماذا طلب للشرب؟", options: ["ماء", "عصير", "كولا", "قهوة"], answer: 2 },
      { q: "كم يستغرق التوصيل؟", options: ["10 دقائق", "20 دقيقة", "30 دقيقة", "ساعة"], answer: 2 }
    ]
  },
  {
    title: "في السينما (Im Kino)",
    icon: "🎬",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Abend! Zwei Tickets für den Film um 20 Uhr, bitte.", ar: "مساء الخير! تذكرتان لفيلم الساعة 20، من فضلك." },
      { speaker: "B", de: "Welchen Film möchten Sie sehen?", ar: "أي فيلم تريد أن تشاهد؟" },
      { speaker: "A", de: "Den neuen Actionfilm, bitte.", ar: "الفيلم الأكشن الجديد، من فضلك." },
      { speaker: "B", de: "Das macht 20 Euro.", ar: "المجموع 20 يورو." },
      { speaker: "A", de: "Wo sind unsere Plätze?", ar: "أين مقاعدنا؟" },
      { speaker: "B", de: "Reihe 5, Plätze 7 und 8.", ar: "الصف 5، المقعدان 7 و8." },
      { speaker: "A", de: "Wann beginnt der Film?", ar: "متى يبدأ الفيلم؟" },
      { speaker: "B", de: "In 15 Minuten. Saal 3.", ar: "بعد 15 دقيقة. القاعة 3." }
    ],
    questions: [
      { q: "كم تذكرة طلب الشخص A؟", options: ["واحدة", "اثنتان", "ثلاث", "أربع"], answer: 1 },
      { q: "كم السعر الإجمالي؟", options: ["10 يورو", "15 يورو", "20 يورو", "25 يورو"], answer: 2 },
      { q: "متى يبدأ الفيلم؟", options: ["بعد 5 دقائق", "بعد 10 دقائق", "بعد 15 دقيقة", "بعد 30 دقيقة"], answer: 2 }
    ]
  },
  {
    title: "في المستشفى (Im Krankenhaus)",
    icon: "🏥",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Tag, ich möchte meinen Bruder besuchen.", ar: "نهارك سعيد، أريد زيارة أخي." },
      { speaker: "B", de: "Wie heißt Ihr Bruder?", ar: "ما اسم أخيك؟" },
      { speaker: "A", de: "Er heißt Ali Hassan. Er liegt im Zimmer 215.", ar: "اسمه علي حسن. إنه في الغرفة 215." },
      { speaker: "B", de: "Besuchszeiten sind von 14 bis 18 Uhr.", ar: "أوقات الزيارة من 14 إلى 18." },
      { speaker: "A", de: "Gut, es ist jetzt 15 Uhr. Kann ich zu ihm?", ar: "جيد، إنها الساعة 15 الآن. هل يمكنني الذهاب إليه؟" },
      { speaker: "B", de: "Ja, aber nur 30 Minuten, bitte.", ar: "نعم، لكن 30 دقيقة فقط، من فضلك." },
      { speaker: "A", de: "In Ordnung. Wo ist der Aufzug?", ar: "حسناً. أين المصعد؟" },
      { speaker: "B", de: "Geradeaus, dann rechts.", ar: "مباشرة، ثم يميناً." }
    ],
    questions: [
      { q: "من يريد الشخص A زيارة؟", options: ["أمه", "أبوه", "أخوه", "صديقه"], answer: 2 },
      { q: "متى أوقات الزيارة؟", options: ["10-12", "14-18", "18-20", "8-10"], answer: 1 },
      { q: "كم مدة الزيارة المسموحة؟", options: ["15 دقيقة", "30 دقيقة", "ساعة", "ساعتان"], answer: 1 }
    ]
  },
  {
    title: "مشكلة في السيارة (Autoproblem)",
    icon: "🚗",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Tag, mein Auto hat ein Problem.", ar: "نهارك سعيد، سيارتي لديها مشكلة." },
      { speaker: "B", de: "Was ist das Problem?", ar: "ما المشكلة؟" },
      { speaker: "A", de: "Der Motor startet nicht.", ar: "المحرك لا يعمل." },
      { speaker: "B", de: "Wann haben Sie das bemerkt?", ar: "متى لاحظت ذلك؟" },
      { speaker: "A", de: "Heute Morgen.", ar: "هذا الصباح." },
      { speaker: "B", de: "Können Sie das Auto vorbeibringen?", ar: "هل يمكنك إحضار السيارة؟" },
      { speaker: "A", de: "Ja, wann passt es Ihnen?", ar: "نعم، متى يناسبك؟" },
      { speaker: "B", de: "Morgen um 9 Uhr.", ar: "غداً الساعة 9." },
      { speaker: "A", de: "Perfekt. Bis morgen!", ar: "ممتاز. إلى الغد!" }
    ],
    questions: [
      { q: "ما مشكلة السيارة؟", options: ["الإطار مثقوب", "المحرك لا يعمل", "الوقود فارغ", "الفرامل معطلة"], answer: 1 },
      { q: "متى لاحظ الشخص A المشكلة؟", options: ["أمس", "اليوم صباحاً", "اليوم مساءً", "منذ أسبوع"], answer: 1 },
      { q: "متى الموعد؟", options: ["غداً الساعة 9", "غداً الساعة 10", "اليوم الساعة 9", "بعد غد"], answer: 0 }
    ]
  },
  {
    title: "في المكتبة (In der Bibliothek)",
    icon: "📚",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Tag, ich möchte ein Buch ausleihen.", ar: "نهارك سعيد، أريد استعارة كتاب." },
      { speaker: "B", de: "Haben Sie einen Bibliotheksausweis?", ar: "هل لديك بطاقة مكتبة؟" },
      { speaker: "A", de: "Nein, ich brauche einen. Wie bekomme ich einen?", ar: "لا، أحتاج واحدة. كيف أحصل عليها؟" },
      { speaker: "B", de: "Sie brauchen Ihren Pass und ein Foto.", ar: "تحتاج جواز سفرك وصورة." },
      { speaker: "A", de: "Gut. Und wie lange kann ich ein Buch ausleihen?", ar: "جيد. وكم مدة استعارة الكتاب؟" },
      { speaker: "B", de: "Vier Wochen. Sie können verlängern.", ar: "أربعة أسابيع. يمكنك التمديد." },
      { speaker: "A", de: "Wo sind die Deutschbücher?", ar: "أين كتب اللغة الألمانية؟" },
      { speaker: "B", de: "Im zweiten Stock, links.", ar: "في الطابق الثاني، على اليسار." }
    ],
    questions: [
      { q: "ماذا يريد الشخص A؟", options: ["شراء كتاب", "استعارة كتاب", "إرجاع كتاب", "قراءة كتاب"], answer: 1 },
      { q: "ماذا يحتاج للحصول على بطاقة المكتبة؟", options: ["جواز سفر وصورة", "بطاقة بنكية", "شهادة ميلاد", "لا شيء"], answer: 0 },
      { q: "كم مدة استعارة الكتاب؟", options: ["أسبوع", "أسبوعان", "3 أسابيع", "4 أسابيع"], answer: 3 }
    ]
  }
];

let currentDialogue = 0;
let currentLine = 0;
let currentQuestion = 0;
let dialogueScore = 0;

function initDialoguesTab() {
  renderDialogueList();
}

function renderDialogueList() {
  const container = document.getElementById('dialoguesContent');
  if (!container) return;
  
  container.innerHTML = `
    <div style="max-width:900px; margin:0 auto;">
      <h2 style="color:#1e3a8a; text-align:center; margin-bottom:25px; font-size:24px;">💬 محادثات حياتية</h2>
      <p style="color:#64748b; text-align:center; margin-bottom:30px; font-size:15px;">اختر محادثة لتبدأ التدريب. كل محادثة تنتهي بأسئلة فهم.</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px,1fr)); gap:18px;">
        ${DIALOGUES.map((d, i) => `
          <div onclick="openDialogue(${i})" style="background:#fff; padding:25px; border-radius:16px; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:5px solid #4f46e5; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-5px)';this.style.boxShadow='0 12px 24px rgba(79,70,229,0.15)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'">
            <div style="font-size:40px; margin-bottom:12px;">${d.icon}</div>
            <h3 style="color:#1e3a8a; font-size:18px; margin-bottom:8px; font-weight:700;">${d.title}</h3>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
              <span style="background:${d.level === 'A1' ? '#dcfce7' : '#fef3c7'}; color:${d.level === 'A1' ? '#166534' : '#92400e'}; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700;">${d.level}</span>
              <span style="color:#4f46e5; font-weight:700; font-size:13px;">${d.lines.length} جملة + ${d.questions.length} أسئلة</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function openDialogue(index) {
  currentDialogue = index;
  currentLine = 0;
  currentQuestion = 0;
  dialogueScore = 0;
  renderDialogueView();
  if (typeof trackActivity === 'function') trackActivity('dialogues', 1);
}

function renderDialogueView() {
  const container = document.getElementById('dialoguesContent');
  if (!container) return;
  
  const d = DIALOGUES[currentDialogue];
  const progress = ((currentLine + 1) / d.lines.length * 100).toFixed(0);
  const isLastLine = currentLine === d.lines.length - 1;
  
  container.innerHTML = `
    <div style="max-width:750px; margin:0 auto;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; flex-wrap:wrap; gap:10px;">
        <button onclick="renderDialogueList()" style="padding:8px 16px; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; cursor:pointer; font-size:14px; font-weight:600; color:#64748b; font-family:Cairo,sans-serif;">← العودة للقائمة</button>
        <span style="color:#64748b; font-size:14px; font-weight:600;">الجملة ${currentLine + 1} من ${d.lines.length}</span>
      </div>
      
      <div style="background:#e2e8f0; height:8px; border-radius:10px; overflow:hidden; margin-bottom:25px;">
        <div style="width:${progress}%; height:100%; background:linear-gradient(90deg, #4f46e5, #818cf8); transition:width 0.3s;"></div>
      </div>
      
      <div style="background:#fff; border-radius:20px; padding:35px 25px; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        <h2 style="color:#1e3a8a; margin-bottom:25px; font-size:22px; text-align:center;">${d.icon} ${d.title}</h2>
        
        ${d.lines.map((line, i) => {
          const isActive = i === currentLine;
          const isPassed = i < currentLine;
          const speakerColor = line.speaker === 'A' ? '#4f46e5' : '#10b981';
          const speakerBg = line.speaker === 'A' ? '#eff6ff' : '#f0fdf4';
          const opacity = isActive ? '1' : (isPassed ? '0.6' : '0.4');
          return `
            <div style="margin-bottom:15px; padding:15px; background:${isActive ? speakerBg : '#f8fafc'}; border-radius:12px; border-right:4px solid ${isActive ? speakerColor : '#e2e8f0'}; opacity:${opacity}; transition:all 0.3s;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="color:${speakerColor}; font-size:14px;">${line.speaker === 'A' ? '👤 المتحدث A' : '🗣️ المتحدث B'}</strong>
                <button onclick="event.stopPropagation(); speak('${line.de.replace(/'/g, "\\'")}')" style="background:#f1f5f9; border:none; border-radius:50%; width:32px; height:32px; cursor:pointer; font-size:16px;">🔊</button>
              </div>
              <p style="color:#1e293b; font-size:16px; font-weight:600; margin-bottom:6px; direction:ltr; text-align:left;">${line.de}</p>
              <p style="color:#64748b; font-size:14px;">${line.ar}</p>
            </div>
          `;
        }).join('')}
        
        <div style="display:flex; gap:10px; justify-content:center; margin-top:25px; flex-wrap:wrap;">
          <button onclick="prevDialogueLine()" style="padding:12px 25px; background:#f1f5f9; color:#64748b; border:1px solid #e2e8f0; border-radius:12px; cursor:pointer; font-size:15px; font-weight:600; font-family:Cairo,sans-serif; ${currentLine === 0 ? 'opacity:0.5;cursor:not-allowed;' : ''}" ${currentLine === 0 ? 'disabled' : ''}>← السابق</button>
          <button onclick="playDialogueLine()" style="padding:12px 30px; background:#4f46e5; color:#fff; border:none; border-radius:12px; cursor:pointer; font-size:15px; font-weight:700; font-family:Cairo,sans-serif;">🔊 استمع</button>
          ${isLastLine ? 
            '<button onclick="startQuestions()" style="padding:12px 30px; background:#10b981; color:#fff; border:none; border-radius:12px; cursor:pointer; font-size:15px; font-weight:700; font-family:Cairo,sans-serif;">📝 ابدأ الأسئلة</button>' :
            '<button onclick="nextDialogueLine()" style="padding:12px 25px; background:#10b981; color:#fff; border:none; border-radius:12px; cursor:pointer; font-size:15px; font-weight:700; font-family:Cairo,sans-serif;">التالي →</button>'
          }
        </div>
      </div>
    </div>
  `;
}

function playDialogueLine() {
  const d = DIALOGUES[currentDialogue];
  speak(d.lines[currentLine].de);
}

function nextDialogueLine() {
  const d = DIALOGUES[currentDialogue];
  if (currentLine < d.lines.length - 1) {
    currentLine++;
    renderDialogueView();
    playDialogueLine();
    if (typeof trackActivity === 'function') trackActivity('dialogues', 1);
  }
}

function prevDialogueLine() {
  if (currentLine > 0) {
    currentLine--;
    renderDialogueView();
    playDialogueLine();
  }
}

function startQuestions() {
  currentQuestion = 0;
  dialogueScore = 0;
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('dialoguesContent');
  const d = DIALOGUES[currentDialogue];
  
  if (currentQuestion >= d.questions.length) {
    container.innerHTML = `
      <div style="max-width:600px; margin:0 auto; text-align:center; padding:50px 30px; background:#fff; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        <div style="font-size:80px; margin-bottom:20px;">🎉</div>
        <h2 style="color:#1e3a8a; margin-bottom:15px; font-size:26px;">أكملت المحادثة والأسئلة!</h2>
        <p style="color:#64748b; margin-bottom:25px; font-size:18px;">النتيجة: <strong style="color:#16a34a;">${dialogueScore} من ${d.questions.length}</strong></p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          <button onclick="renderDialogueList()" style="padding:14px 30px; background:#4f46e5; color:#fff; border:none; border-radius:25px; cursor:pointer; font-size:16px; font-weight:700; font-family:Cairo,sans-serif;">← العودة للقائمة</button>
          <button onclick="startQuestions()" style="padding:14px 30px; background:#10b981; color:#fff; border:none; border-radius:25px; cursor:pointer; font-size:16px; font-weight:700; font-family:Cairo,sans-serif;">🔄 إعادة الأسئلة</button>
        </div>
      </div>
    `;
    return;
  }
  
  const q = d.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / d.questions.length * 100).toFixed(0);
  
  container.innerHTML = `
    <div style="max-width:700px; margin:0 auto;">
      <div style="display:flex; justify-content:space-between; margin-bottom:15px; color:#64748b; font-size:14px; font-weight:600;">
        <span>سؤال ${currentQuestion + 1} من ${d.questions.length}</span>
        <span>النتيجة: ${dialogueScore} ✅</span>
      </div>
      <div style="background:#e2e8f0; height:8px; border-radius:10px; overflow:hidden; margin-bottom:25px;">
        <div style="width:${progress}%; height:100%; background:linear-gradient(90deg, #4f46e5, #818cf8); transition:width 0.3s;"></div>
      </div>
      <div style="background:#fff; border-radius:20px; padding:40px 30px; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        <h2 style="color:#1e3a8a; font-size:22px; margin-bottom:25px; text-align:center;">${d.icon} ${d.title}</h2>
        <p style="color:#64748b; font-size:15px; margin-bottom:15px;">📝 سؤال الفهم:</p>
        <h3 style="color:#1e293b; font-size:20px; margin-bottom:25px; line-height:1.6;">${q.q}</h3>
        <div id="dialogueOptions" style="display:flex; flex-direction:column; gap:12px;"></div>
        <div id="dialogueFeedback" style="margin-top:20px; display:none; padding:15px; border-radius:10px;"></div>
      </div>
    </div>
  `;
  
  const optsBox = document.getElementById('dialogueOptions');
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.style.cssText = 'padding:14px 20px; background:#f8fafc; border:2px solid #e2e8f0; border-radius:12px; cursor:pointer; font-size:16px; font-weight:600; font-family:Cairo,sans-serif; transition:all 0.2s; color:#1e293b; text-align:right;';
    btn.onclick = () => checkAnswer(idx, btn);
    optsBox.appendChild(btn);
  });
}

function checkAnswer(selectedIdx, btnEl) {
  const d = DIALOGUES[currentDialogue];
  const q = d.questions[currentQuestion];
  const allBtns = document.getElementById('dialogueOptions').querySelectorAll('button');
  const feedback = document.getElementById('dialogueFeedback');
  
  allBtns.forEach(b => { b.disabled = true; b.style.cursor = 'default'; });
  
  if (selectedIdx === q.answer) {
    btnEl.style.background = '#dcfce7'; btnEl.style.borderColor = '#16a34a'; btnEl.style.color = '#166534';
    dialogueScore++;
    feedback.innerHTML = '✅ <strong>إجابة صحيحة!</strong>';
    feedback.style.background = '#f0fdf4'; feedback.style.color = '#166534'; feedback.style.borderRight = '4px solid #16a34a';
  } else {
    btnEl.style.background = '#fee2e2'; btnEl.style.borderColor = '#dc2626'; btnEl.style.color = '#991b1b';
    allBtns[q.answer].style.background = '#dcfce7'; allBtns[q.answer].style.borderColor = '#16a34a'; allBtns[q.answer].style.color = '#166534';
    feedback.innerHTML = '❌ <strong>إجابة خاطئة.</strong> الإجابة الصحيحة: <strong>' + q.options[q.answer] + '</strong>';
    feedback.style.background = '#fef2f2'; feedback.style.color = '#991b1b'; feedback.style.borderRight = '4px solid #dc2626';
  }
  
  feedback.style.display = 'block';
  
  const nextBtn = document.createElement('button');
  nextBtn.innerText = currentQuestion === d.questions.length - 1 ? 'النتيجة النهائية 🎉' : 'السؤال التالي ➡️';
  nextBtn.style.cssText = 'margin-top:15px; padding:12px 30px; background:#4f46e5; color:#fff; border:none; border-radius:12px; cursor:pointer; font-size:15px; font-weight:700; font-family:Cairo,sans-serif; width:100%;';
  nextBtn.onclick = () => { currentQuestion++; renderQuestion(); };
  feedback.appendChild(document.createElement('br'));
  feedback.appendChild(nextBtn);
}
