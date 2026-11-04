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
    // الكابيتل 29: Reflexive Verben
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
    }
];