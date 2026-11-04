const EXERCISES_A2 = [
    // ==========================================
    // الكابيتل 21: Verben mit Akkusativ und Dativ
    // ==========================================
    {
        id: "ex-21-1",
        title: "Kapitel 21: Akkusativ & Dativ",
        audio: "", 
        question: "Der Kellner trinkt ___ Saft.",
        options: ["ein", "einen", "einem", "eines"],
        answer: 1,
        explanation: "الفعل trinken يأخذ Akkusativ، و Saft مذكر -> einen."
    },
    {
        id: "ex-21-2",
        title: "Kapitel 21: Akkusativ & Dativ",
        audio: "",
        question: "Der Mann schenkt ___ Frau Blumen.",
        options: ["die", "der", "den", "dem"],
        answer: 1,
        explanation: "الفعل schenken يحتاج إلى شخص في Dativ (der Frau) وشيء في Akkusativ (Blumen)."
    },

    // ==========================================
    // الكابيتل 22: Verben mit Dativ
    // ==========================================
    {
        id: "ex-22-1",
        title: "Kapitel 22: Verben mit Dativ",
        audio: "",
        question: "Ich helfe ___.",
        options: ["dich", "dir", "du", "deiner"],
        answer: 1,
        explanation: "الفعل helfen يأخذ Dativ، والضمير المناسب لـ ich هو dir."
    },
    {
        id: "ex-22-2",
        title: "Kapitel 22: Verben mit Dativ",
        audio: "",
        question: "Das Haus gefällt ___ Leuten.",
        options: ["die", "der", "den", "dem"],
        answer: 2,
        explanation: "الفعل gefallen يأخذ Dativ، والجمع (Leuten) في Dativ يصبح den."
    },

    // ==========================================
    // الكابيتل 23: Präteritum (sein und haben)
    // ==========================================
    {
        id: "ex-23-1",
        title: "Kapitel 23: Präteritum von sein/haben",
        audio: "",
        question: "Ich ___ gestern krank.",
        options: ["bin", "war", "habe", "hatte"],
        answer: 1,
        explanation: "الماضي البسيط من sein مع ich هو war."
    },
    {
        id: "ex-23-2",
        title: "Kapitel 23: Präteritum von sein/haben",
        audio: "",
        question: "Wir ___ früher ein Haus.",
        options: ["waren", "hatten", "sind", "haben"],
        answer: 1,
        explanation: "الماضي البسيط من haben مع wir هو hatten."
    },

    // ==========================================
    // الكابيتل 24: Perfekt mit haben
    // ==========================================
    {
        id: "ex-24-1",
        title: "Kapitel 24: Perfekt mit haben",
        audio: "",
        question: "Ich ___ gestern Pizza ___.",
        options: ["habe / gegessen", "bin / gegessen", "habe / geessen", "bin / geessen"],
        answer: 0,
        explanation: "الفعل essen يأخذ haben، والـ Partizip هو gegessen."
    },
    {
        id: "ex-24-2",
        title: "Kapitel 24: Perfekt mit haben",
        audio: "",
        question: "Er ___ zehn Stunden ___.",
        options: ["hat / gearbeitet", "ist / gearbeitet", "hat / gearbeitet", "ist / gearbeitet"],
        answer: 0,
        explanation: "الفعل arbeiten يأخذ haben، والـ Partizip هو gearbeitet."
    },

    // ==========================================
    // الكابيتل 25: Perfekt mit sein
    // ==========================================
    {
        id: "ex-25-1",
        title: "Kapitel 25: Perfekt mit sein",
        audio: "",
        question: "Ich ___ nach Berlin ___.",
        options: ["habe / gefahren", "bin / gefahren", "habe / gefahrt", "bin / gefahrt"],
        answer: 1,
        explanation: "الفعل fahren (حركة) يأخذ sein، والـ Partizip هو gefahren."
    },
    {
        id: "ex-25-2",
        title: "Kapitel 25: Perfekt mit sein",
        audio: "",
        question: "Er ___ zu Hause ___.",
        options: ["hat / geblieben", "ist / geblieben", "hat / gebliebt", "ist / gebliebt"],
        answer: 1,
        explanation: "الفعل bleiben (ثبات) يأخذ sein، والـ Partizip هو geblieben."
    },

    // ==========================================
    // الكابيتل 26: Partizip Perfekt
    // ==========================================
    {
        id: "ex-26-1",
        title: "Kapitel 26: Partizip Perfekt",
        audio: "",
        question: "Partizip Perfekt من الفعل 'verstehen' هو:",
        options: ["geverstanden", "verstanden", "verstand", "geversteht"],
        answer: 1,
        explanation: "الفعل يبدأ بـ ver- (غير منفصل)، لذا لا نضيف ge-: verstanden."
    },
    {
        id: "ex-26-2",
        title: "Kapitel 26: Partizip Perfekt",
        audio: "",
        question: "Partizip Perfekt من الفعل 'einkaufen' هو:",
        options: ["geeinkauft", "eingekauft", "einkaufte", "eingekauft"],
        answer: 1,
        explanation: "الفعل منفصل (ein-)، لذا نضع ge- بين البادئة والفعل: eingekauft."
    },

    // ==========================================
    // الكابيتل 27: Präteritum Modalverben
    // ==========================================
    {
        id: "ex-27-1",
        title: "Kapitel 27: Modalverben im Präteritum",
        audio: "",
        question: "Ich ___ gestern nicht kommen, weil ich krank war.",
        options: ["kann", "konnte", "gekonnt", "könnte"],
        answer: 1,
        explanation: "الماضي البسيط من können مع ich هو konnte."
    },
    {
        id: "ex-27-2",
        title: "Kapitel 27: Modalverben im Präteritum",
        audio: "",
        question: "Als Kind ___ ich jeden Tag Schokolade essen.",
        options: ["darf", "durfte", "gedurft", "dürfte"],
        answer: 1,
        explanation: "الماضي البسيط من dürfen مع ich هو durfte."
    },

    // ==========================================
    // الكابيتل 28: Zeitengebrauch
    // ==========================================
    {
        id: "ex-28-1",
        title: "Kapitel 28: Zeitengebrauch",
        audio: "",
        question: "Gestern ___ ich im Kino. (في المحادثة)",
        options: ["war", "bin gewesen", "habe sein", "wurde"],
        answer: 0,
        explanation: "في المحادثة، نستخدم الماضي البسيط (Präteritum) مع الفعل sein (war)."
    },
    {
        id: "ex-28-2",
        title: "Kapitel 28: Zeitengebrauch",
        audio: "",
        question: "Morgen ___ ich nach Berlin fahren.",
        options: ["werde", "bin", "habe", "würde"],
        answer: 0,
        explanation: "للتعبير عن المستقبل، يمكننا استخدام المضارع (fahre) أو المستقبل (werde)."
    },

    // ==========================================
        // ==========================================
    // تمارين الكابيتل 29 (Reflexive Verben)
    // ==========================================
    {
        id: "ex-29-1",
        title: "Kapitel 29: Reflexive Verben",
        audio: "",
        question: "Ich freue ___ auf den Urlaub.",
        options: ["mich", "dich", "sich", "uns"],
        answer: 0,
        explanation: "الفعل sich freuen مع الضمير ich يأخذ الضمير الانعكاسي mich."
    },
    {
        id: "ex-29-2",
        title: "Kapitel 29: Reflexive Verben",
        audio: "",
        question: "Er ärgert ___ über seinen Chef.",
        options: ["mich", "dich", "sich", "uns"],
        answer: 2,
        explanation: "الفعل sich ärgern مع الضمير er (هو) يأخذ الضمير الانعكاسي sich."
    },
    {
        id: "ex-29-3",
        title: "Kapitel 29: Reflexive Verben",
        audio: "",
        question: "Guten Tag, wir möchten ___ vorstellen. (نقدم أنفسنا)",
        options: ["uns", "mich", "sich", "euch"],
        answer: 0,
        explanation: "الفعل sich vorstellen مع الضمير wir يأخذ الضمير الانعكاسي uns."
    },
    {
        id: "ex-29-4",
        title: "Kapitel 29: Reflexive Verben",
        audio: "",
        question: "Könnt ihr ___ noch an Luisa erinnern?",
        options: ["euch", "uns", "sich", "mich"],
        answer: 0,
        explanation: "الفعل sich erinnern مع الضمير ihr يأخذ الضمير الانعكاسي euch."
    },
    {
        id: "ex-29-5",
        title: "Kapitel 29: Reflexive Verben",
        audio: "",
        question: "Ich wasche das Baby. Ich wasche ___. (نفسي)",
        options: ["mich", "dich", "sich", "uns"],
        answer: 0,
        explanation: "الأفعال الانعكاسية مع الضمير ich تأخذ mich (أنا أغسل نفسي)."
    },
    {
        id: "ex-29-6",
        title: "Kapitel 29: Reflexive Verben",
        audio: "",
        question: "Er interessiert ___ sehr für Politik.",
        options: ["mich", "dich", "sich", "uns"],
        answer: 2,
        explanation: "الفعل sich interessieren مع الضمير er يأخذ sich."
    },
    {
        id: "ex-29-7",
        title: "Kapitel 29: Reflexive Verben",
        audio: "",
        question: "Wir ziehen ___ an. (نرتدي الملابس)",
        options: ["uns", "mich", "sich", "euch"],
        answer: 0,
        explanation: "الفعل sich anziehen مع الضمير wir يأخذ uns."
    },

    // ==========================================
    // تمارين الكابيتل 30 (Temporale Präpositionen)
    // ==========================================
    {
        id: "ex-30-1",
        title: "Kapitel 30: Temporale Präpositionen",
        audio: "",
        question: "___ April fahre ich nach Berlin.",
        options: ["Im", "Am", "Um", "In"],
        answer: 0,
        explanation: "الأشهر تأخذ حرف الجر im (im April)."
    },
    {
        id: "ex-30-2",
        title: "Kapitel 30: Temporale Präpositionen",
        audio: "",
        question: "Der Film beginnt ___ 20 Uhr.",
        options: ["im", "am", "um", "in"],
        answer: 2,
        explanation: "الساعات تأخذ حرف الجر um (um 20 Uhr)."
    },
    {
        id: "ex-30-3",
        title: "Kapitel 30: Temporale Präpositionen",
        audio: "",
        question: "Wir haben ___ 5. August frei.",
        options: ["im", "am", "um", "in"],
        answer: 1,
        explanation: "التواريخ تأخذ حرف الجر am (am 5. August)."
    },
    {
        id: "ex-30-4",
        title: "Kapitel 30: Temporale Präpositionen",
        audio: "",
        question: "Ich arbeite ___ Montag ___ Freitag.",
        options: ["von / bis", "ab / bis", "seit / bis", "vor / nach"],
        answer: 0,
        explanation: "للتعبير عن فترة من... إلى نستخدم von...bis."
    },
    {
        id: "ex-30-5",
        title: "Kapitel 30: Temporale Präpositionen",
        audio: "",
        question: "___ drei Monaten lerne ich Deutsch.",
        options: ["Vor", "Seit", "Ab", "Bis"],
        answer: 1,
        explanation: "للتعبير عن شيء بدأ في الماضي ومستمر نستخدم seit."
    },
    {
        id: "ex-30-6",
        title: "Kapitel 30: Temporale Präpositionen",
        audio: "",
        question: "Ich bleibe ___ morgen zu Hause.",
        options: ["bis", "ab", "seit", "vor"],
        answer: 0,
        explanation: "للتعبير عن النهاية نستخدم bis (حتى)."
    },
    {
        id: "ex-30-7",
        title: "Kapitel 30: Temporale Präpositionen",
        audio: "",
        question: "___ morgen rauche ich nicht mehr.",
        options: ["Ab", "Bis", "Seit", "Vor"],
        answer: 0,
        explanation: "للتعبير عن البداية في المستقبل نستخدم ab (اعتباراً من)."
    },
            // ==========================================
    // تمارين الكابيتل 31 (Präpositionen mit Dativ)
    // ==========================================
    {
        id: "ex-31-1",
        title: "Kapitel 31: Präpositionen mit Dativ",
        audio: "",
        question: "Wann gehen Sie morgens ___ Haus?",
        options: ["aus dem", "bei dem", "mit dem", "nach dem"],
        answer: 0,
        explanation: "للخروج من المنزل نستخدم aus + dem (aus dem Haus)."
    },
    {
        id: "ex-31-2",
        title: "Kapitel 31: Präpositionen mit Dativ",
        audio: "",
        question: "Ich gehe dann ___ Bahnhof und fahre ___ Zug.",
        options: ["zum / mit dem", "beim / mit dem", "zum / mit der", "nach / mit dem"],
        answer: 0,
        explanation: "للذهاب إلى مكان (محطة القطار) نستخدم zum (zu + dem)، وللمواصلات نستخدم mit dem Zug."
    },
    {
        id: "ex-31-3",
        title: "Kapitel 31: Präpositionen mit Dativ",
        audio: "",
        question: "Meine Firma liegt südlich ___ Köln.",
        options: ["von", "aus", "bei", "mit"],
        answer: 0,
        explanation: "للإشارة إلى الموقع الجغرافي (جنوب كولونيا) نستخدم von."
    },
    {
        id: "ex-31-4",
        title: "Kapitel 31: Präpositionen mit Dativ",
        audio: "",
        question: "Das mache ich schon ___ fünf Jahren.",
        options: ["seit", "vor", "ab", "bis"],
        answer: 0,
        explanation: "للتعبير عن شيء بدأ في الماضي ومستمر نستخدم seit (منذ 5 سنوات)."
    },
    {
        id: "ex-31-5",
        title: "Kapitel 31: Präpositionen mit Dativ",
        audio: "",
        question: "Fahren Sie ___ dem Auto zur Arbeit?",
        options: ["mit", "bei", "aus", "nach"],
        answer: 0,
        explanation: "للتعبير عن وسيلة المواصلات نستخدم mit + Dativ (mit dem Auto)."
    },

    // ==========================================
    // تمارين الكابيتل 32 (Präpositionen mit Akkusativ)
    // ==========================================
    {
        id: "ex-32-1",
        title: "Kapitel 32: Präpositionen mit Akkusativ",
        audio: "",
        question: "Sie trägt eine Kette ___ den Hals.",
        options: ["um", "für", "durch", "ohne"],
        answer: 0,
        explanation: "للإحاطة بالشيء (حول الرقبة) نستخدم um."
    },
    {
        id: "ex-32-2",
        title: "Kapitel 32: Präpositionen mit Akkusativ",
        audio: "",
        question: "Das Auto fährt ___ den Tunnel.",
        options: ["durch", "um", "gegen", "ohne"],
        answer: 0,
        explanation: "للمرور عبر مكان نستخدم durch (عبر النفق)."
    },
    {
        id: "ex-32-3",
        title: "Kapitel 32: Präpositionen mit Akkusativ",
        audio: "",
        question: "Das Geschenk ist ___ dich.",
        options: ["für", "um", "durch", "ohne"],
        answer: 0,
        explanation: "للتعبير عن شيء مخصص لشخص نستخدم für."
    },
    {
        id: "ex-32-4",
        title: "Kapitel 32: Präpositionen mit Akkusativ",
        audio: "",
        question: "Bitte, einen Kaffee ___ Zucker.",
        options: ["ohne", "für", "gegen", "um"],
        answer: 0,
        explanation: "بدون سكر (ohne)."
    },
    {
        id: "ex-32-5",
        title: "Kapitel 32: Präpositionen mit Akkusativ",
        audio: "",
        question: "Das Auto fährt ___ den Baum. (اصطدم)",
        options: ["gegen", "um", "durch", "ohne"],
        answer: 0,
        explanation: "للاصطدام أو الحركة نحو شيء نستخدم gegen."
    },
    {
        id: "ex-32-6",
        title: "Kapitel 32: Präpositionen mit Akkusativ",
        audio: "",
        question: "Pass auf, sonst läufst du ___ Schild.",
        options: ["gegen das", "um das", "durch das", "ohne das"],
        answer: 0,
        explanation: "للاصطدام بشيء نستخدم gegen + Akkusativ (gegen das Schild)."
    },

    // ==========================================
    // تمارين الكابيتل 33 (Wechselpräpositionen im Dativ)
    // ==========================================
    {
        id: "ex-33-1",
        title: "Kapitel 33: Wechselpräpositionen (Dativ)",
        audio: "",
        question: "Wo sind die Blumen? - ___ der Vase.",
        options: ["In", "An", "Auf", "Über"],
        answer: 0,
        explanation: "داخل المزهرية (in) مع Dativ."
    },
    {
        id: "ex-33-2",
        title: "Kapitel 33: Wechselpräpositionen (Dativ)",
        audio: "",
        question: "Wo ist die Vase? - ___ dem Tisch.",
        options: ["Auf", "In", "An", "Unter"],
        answer: 0,
        explanation: "على الطاولة (auf) مع Dativ."
    },
    {
        id: "ex-33-3",
        title: "Kapitel 33: Wechselpräpositionen (Dativ)",
        audio: "",
        question: "Wo ist das Bild? - ___ der Wand.",
        options: ["An", "Auf", "In", "Über"],
        answer: 0,
        explanation: "معلق على الحائط (an) مع Dativ."
    },
    {
        id: "ex-33-4",
        title: "Kapitel 33: Wechselpräpositionen (Dativ)",
        audio: "",
        question: "Wo ist die Flasche? - ___ dem Boden.",
        options: ["Auf", "An", "In", "Unter"],
        answer: 0,
        explanation: "على الأرضية (auf) مع Dativ."
    },
    {
        id: "ex-33-5",
        title: "Kapitel 33: Wechselpräpositionen (Dativ)",
        audio: "",
        question: "Wo ist der Wein? - ___ der Flasche.",
        options: ["In", "An", "Auf", "Unter"],
        answer: 0,
        explanation: "داخل الزجاجة (in) مع Dativ."
    },
            // ==========================================
    // تمارين الكابيتل 34 (Wechselpräpositionen mit Dativ und Akkusativ)
    // ==========================================
    {
        id: "ex-34-1",
        title: "Kapitel 34: Wechselpräpositionen (Dativ & Akkusativ)",
        audio: "",
        question: "Wohin fliegt die Fliege? - ___ Buch.",
        options: ["Auf das", "Auf dem", "In der", "An das"],
        answer: 0,
        explanation: "هناك حركة (Wohin)، لذا نستخدم Akkusativ: auf das Buch."
    },
    {
        id: "ex-34-2",
        title: "Kapitel 34: Wechselpräpositionen (Dativ & Akkusativ)",
        audio: "",
        question: "Wo ist das Bad? - ___ Haustür.",
        options: ["Neben der", "Neben die", "In der", "Auf der"],
        answer: 0,
        explanation: "المكان ثابت (Wo)، لذا نستخدم Dativ: neben der Haustür."
    },
    {
        id: "ex-34-3",
        title: "Kapitel 34: Wechselpräpositionen (Dativ & Akkusativ)",
        audio: "",
        question: "Wohin bringst du die Kinder? - ___ Schule.",
        options: ["In die", "In der", "Auf die", "An die"],
        answer: 0,
        explanation: "هناك حركة (Wohin)، نستخدم Akkusativ: in die Schule."
    },
    {
        id: "ex-34-4",
        title: "Kapitel 34: Wechselpräpositionen (Dativ & Akkusativ)",
        audio: "",
        question: "Wo ist die Küche? - ___ Küche.",
        options: ["In der", "In die", "Auf der", "An der"],
        answer: 0,
        explanation: "المكان ثابت (Wo)، نستخدم Dativ: in der Küche."
    },
    {
        id: "ex-34-5",
        title: "Kapitel 34: Wechselpräpositionen (Dativ & Akkusativ)",
        audio: "",
        question: "Wohin fahren wir im Sommer? - ___ Meer.",
        options: ["An das", "Am", "In das", "Auf das"],
        answer: 0,
        explanation: "للذهاب إلى البحر (حركة) نستخدم an das Meer."
    },
    {
        id: "ex-34-6",
        title: "Kapitel 34: Wechselpräpositionen (Dativ & Akkusativ)",
        audio: "",
        question: "Wo waren wir letztes Jahr? - ___ Meer.",
        options: ["Am", "An das", "Im", "In das"],
        answer: 0,
        explanation: "للتواجد على البحر (ثابت) نستخدم am (an + dem) Meer."
    },
    {
        id: "ex-34-7",
        title: "Kapitel 34: Wechselpräpositionen (Dativ & Akkusativ)",
        audio: "",
        question: "Wo liegt die Decke? - Sie ___ auf dem Tisch.",
        options: ["liegt", "legt", "stellt", "steht"],
        answer: 0,
        explanation: "الفعل liegen (يستلقي/يكون ممدداً) يستخدم مع Dativ (Wo)."
    },
    {
        id: "ex-34-8",
        title: "Kapitel 34: Wechselpräpositionen (Dativ & Akkusativ)",
        audio: "",
        question: "Wohin legt sie die Decke? - Sie ___ auf den Tisch.",
        options: ["legt", "liegt", "steht", "stellt"],
        answer: 0,
        explanation: "الفعل legen (يضع/يمدد) يستخدم مع Akkusativ (Wohin)."
    },

    // ==========================================
    // تمارين الكابيتل 35 (Lokale Präpositionen)
    // ==========================================
    {
        id: "ex-35-1",
        title: "Kapitel 35: Lokale Präpositionen",
        audio: "",
        question: "Wo sind Sie? - ___ Meer.",
        options: ["Am", "Ans", "Im", "Ins"],
        answer: 0,
        explanation: "للتواجد على البحر نستخدم an + dem = am Meer."
    },
    {
        id: "ex-35-2",
        title: "Kapitel 35: Lokale Präpositionen",
        audio: "",
        question: "Wo sind Sie? - ___ Paris.",
        options: ["In", "Nach", "Aus", "Bei"],
        answer: 0,
        explanation: "للتواجد في مدينة نستخدم in + Paris."
    },
    {
        id: "ex-35-3",
        title: "Kapitel 35: Lokale Präpositionen",
        audio: "",
        question: "Wo sind Sie? - ___ Supermarkt.",
        options: ["Im", "Am", "Beim", "Zum"],
        answer: 0,
        explanation: "للتواجد داخل مكان مغلق نستخدم in + dem = im Supermarkt."
    },
    {
        id: "ex-35-4",
        title: "Kapitel 35: Lokale Präpositionen",
        audio: "",
        question: "Wo sind Sie? - ___ H&M.",
        options: ["Bei", "Im", "Am", "Zu"],
        answer: 0,
        explanation: "للتواجد عند شركة أو متجر نستخدم bei + H&M."
    },
    {
        id: "ex-35-5",
        title: "Kapitel 35: Lokale Präpositionen",
        audio: "",
        question: "Wohin gehst du? - Ich gehe ___ Hause.",
        options: ["nach", "zu", "in", "aus"],
        answer: 0,
        explanation: "التعبير الشاذ 'nach Hause' يعني إلى المنزل."
    },
    {
        id: "ex-35-6",
        title: "Kapitel 35: Lokale Präpositionen",
        audio: "",
        question: "Wo bist du? - Ich bin ___ Hause.",
        options: ["zu", "nach", "in", "bei"],
        answer: 0,
        explanation: "التعبير الشاذ 'zu Hause' يعني في المنزل (متواجد)."
    },
    {
        id: "ex-35-7",
        title: "Kapitel 35: Lokale Präpositionen",
        audio: "",
        question: "Wohin gehst du? - Ich gehe ___ Arzt.",
        options: ["zum", "beim", "im", "am"],
        answer: 0,
        explanation: "للذهاب إلى شخص (الطبيب) نستخدم zu + dem = zum."
    },
    {
        id: "ex-35-8",
        title: "Kapitel 35: Lokale Präpositionen",
        audio: "",
        question: "Woher kommst du? - Ich komme ___ Schule.",
        options: ["aus der", "von der", "in der", "zu der"],
        answer: 0,
        explanation: "للقدوم من داخل مكان (المدرسة) نستخدم aus + der = aus der Schule."
    },
    {
        id: "ex-35-9",
        title: "Kapitel 35: Lokale Präpositionen",
        audio: "",
        question: "Woher kommst du? - Ich komme ___ Strand.",
        options: ["vom", "aus dem", "im", "am"],
        answer: 0,
        explanation: "للقدوم من مكان مفتوح (الشاطئ) نستخدم von + dem = vom Strand."
    },
            // ==========================================
    // تمارين الكابيتل 36 (Adjektivdeklination - Nominativ & Akkusativ)
    // ==========================================
    {
        id: "ex-36-1",
        title: "Kapitel 36: Adjektivdeklination (Nominativ)",
        audio: "",
        question: "Ist das der nett___ Lehrer?",
        options: ["nett", "nette", "netter", "netten"],
        answer: 1,
        explanation: "مذكر، Nominativ، مع أداة التعريف (der) تأخذ الصفة -e."
    },
    {
        id: "ex-36-2",
        title: "Kapitel 36: Adjektivdeklination (Nominativ)",
        audio: "",
        question: "Das ist eine neu___ Tasche.",
        options: ["neu", "neue", "neues", "neuen"],
        answer: 1,
        explanation: "مؤنث، Nominativ، مع أداة النكرة (eine) تأخذ الصفة -e."
    },
    {
        id: "ex-36-3",
        title: "Kapitel 36: Adjektivdeklination (Nominativ)",
        audio: "",
        question: "Ist das ein gut___ Herd?",
        options: ["gut", "gute", "guter", "gutes"],
        answer: 2,
        explanation: "مذكر، Nominativ، مع أداة النكرة (ein) تأخذ الصفة -er."
    },
    {
        id: "ex-36-4",
        title: "Kapitel 36: Adjektivdeklination (Akkusativ)",
        audio: "",
        question: "Ich suche ein bequem___ Sofa.",
        options: ["bequem", "bequeme", "bequemes", "bequemen"],
        answer: 2,
        explanation: "محايد، Akkusativ، مع أداة النكرة (ein) تأخذ الصفة -es."
    },
    {
        id: "ex-36-5",
        title: "Kapitel 36: Adjektivdeklination (Akkusativ)",
        audio: "",
        question: "Ich suche eine groß___ Tasche.",
        options: ["groß", "große", "großes", "großen"],
        answer: 1,
        explanation: "مؤنث، Akkusativ، مع أداة النكرة (eine) تأخذ الصفة -e."
    },
    {
        id: "ex-36-6",
        title: "Kapitel 36: Adjektivdeklination (Akkusativ)",
        audio: "",
        question: "Ich suche einen gut___ Kühlschrank.",
        options: ["gut", "gute", "guter", "guten"],
        answer: 3,
        explanation: "مذكر، Akkusativ، مع أداة النكرة (einen) تأخذ الصفة -en."
    },
    {
        id: "ex-36-7",
        title: "Kapitel 36: Adjektivdeklination (Akkusativ)",
        audio: "",
        question: "Ich suche einen rot___ Rock.",
        options: ["rot", "rote", "roter", "roten"],
        answer: 3,
        explanation: "مذكر، Akkusativ، مع أداة النكرة (einen) تأخذ الصفة -en."
    },

    // ==========================================
    // تمارين الكابيتل 37 (Adjektivdeklination - Dativ)
    // ==========================================
    {
        id: "ex-37-1",
        title: "Kapitel 37: Adjektivdeklination (Dativ)",
        audio: "",
        question: "Ich komme mit einem nett___ Freund.",
        options: ["nett", "nette", "netter", "netten"],
        answer: 3,
        explanation: "حالة Dativ (mit einem)، الصفة تأخذ -en."
    },
    {
        id: "ex-37-2",
        title: "Kapitel 37: Adjektivdeklination (Dativ)",
        audio: "",
        question: "Sie kommt mit einer spanisch___ Freundin.",
        options: ["spanisch", "spanische", "spanisches", "spanischen"],
        answer: 3,
        explanation: "حالة Dativ (mit einer)، الصفة تأخذ -en."
    },
    {
        id: "ex-37-3",
        title: "Kapitel 37: Adjektivdeklination (Dativ)",
        audio: "",
        question: "Wir kommen mit einem klein___ Kind.",
        options: ["klein", "kleine", "kleines", "kleinen"],
        answer: 3,
        explanation: "حالة Dativ (mit einem)، الصفة تأخذ -en."
    },
    {
        id: "ex-37-4",
        title: "Kapitel 37: Adjektivdeklination (Dativ)",
        audio: "",
        question: "Ich komme mit vier klein___ Hunden.",
        options: ["klein", "kleine", "kleines", "kleinen"],
        answer: 3,
        explanation: "حالة Dativ (mit + جمع)، الصفة تأخذ -en."
    },
    {
        id: "ex-37-5",
        title: "Kapitel 37: Adjektivdeklination (Dativ)",
        audio: "",
        question: "Am erst___ Mai ist Feiertag.",
        options: ["erst", "erste", "erster", "ersten"],
        answer: 3,
        explanation: "التاريخ مع am يأخذ Dativ، الصفة تأخذ -en."
    },
    {
        id: "ex-37-6",
        title: "Kapitel 37: Adjektivdeklination (Dativ)",
        audio: "",
        question: "Ich gehe mit dem intelligent___ Hund spazieren.",
        options: ["intelligent", "intelligente", "intelligenter", "intelligenten"],
        answer: 3,
        explanation: "حالة Dativ (mit dem)، الصفة تأخذ -en."
    },
            // ==========================================
    // تمارين الكابيتل 38 (Komparativ und Vergleichssätze)
    // ==========================================
    {
        id: "ex-38-1",
        title: "Kapitel 38: Komparativ",
        audio: "",
        question: "Mein Auto ist ___ als dein Auto.",
        options: ["schnell", "schneller", "am schnellsten", "so schnell"],
        answer: 1,
        explanation: "للمقارنة بين شيئين نستخدم صيغة Komparativ (schneller)."
    },
    {
        id: "ex-38-2",
        title: "Kapitel 38: Komparativ",
        audio: "",
        question: "Ich bin genauso groß ___ du.",
        options: ["als", "wie", "so", "zu"],
        answer: 1,
        explanation: "للتعبير عن التساوي نستخدم (so... wie)، وهنا (genauso... wie)."
    },
    {
        id: "ex-38-3",
        title: "Kapitel 38: Komparativ",
        audio: "",
        question: "Deutsch ist schwerer ___ Englisch.",
        options: ["wie", "als", "so", "zu"],
        answer: 1,
        explanation: "للتعبير عن 'أصعب من' نستخدم (schwerer als)."
    },
    {
        id: "ex-38-4",
        title: "Kapitel 38: Komparativ",
        audio: "",
        question: "Gestern war es kalt, aber heute ist es noch ___.",
        options: ["kalt", "kälter", "am kältesten", "kalt als"],
        answer: 1,
        explanation: "صفة kalt تأخذ Umlaut في المقارنة لتصبح kälter."
    },
    {
        id: "ex-38-5",
        title: "Kapitel 38: Komparativ",
        audio: "",
        question: "Ich trinke ___ Tee als Kaffee.",
        options: ["viel", "mehr", "am meisten", "gern"],
        answer: 1,
        explanation: "المقارنة الشاذة لـ viel هي mehr."
    },
    {
        id: "ex-38-6",
        title: "Kapitel 38: Komparativ",
        audio: "",
        question: "Österreich ist ___ (groß) als die Schweiz.",
        options: ["groß", "größer", "am größten", "großer"],
        answer: 1,
        explanation: "المقارنة الشاذة لـ groß هي größer (مع Umlaut)."
    },
    {
        id: "ex-38-7",
        title: "Kapitel 38: Komparativ",
        audio: "",
        question: "Das Leben in der Schweiz ist ___ (teuer) als in Deutschland.",
        options: ["teuer", "teurer", "am teuersten", "teuerer"],
        answer: 1,
        explanation: "المقارنة الشاذة لـ teuer هي teurer (نحذف حرف e)."
    },
    {
        id: "ex-38-8",
        title: "Kapitel 38: Komparativ",
        audio: "",
        question: "Ich mag Tee, aber Kaffee mag ich ___ (gern).",
        options: ["gern", "lieber", "am liebsten", "mehr"],
        answer: 1,
        explanation: "المقارنة الشاذة لـ gern هي lieber (أفضل/مفضل)."
    }
];
