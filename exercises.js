const EXERCISES = [
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
  { question: "___ kostet das?", questionAr: "كم يكلف هذا؟", options: ["Wie viel", "Wann", "Wo", "Wer"], answer: 0, explanation: "Wie viel kostet = كم يكلف." }
];

let currentExercise = 0;
let exerciseAnswered = false;
let exerciseScore = 0;

function startExercises() {
  currentExercise = 0;
  exerciseScore = 0;
  exerciseAnswered = false;
  loadExercise();
}

function loadExercise() {
  const ex = EXERCISES[currentExercise];
  document.getElementById("exerciseProgress").innerText = 'السؤال ' + (currentExercise + 1) + ' من ' + EXERCISES.length + ' (النتيجة: ' + exerciseScore + ')';
  document.getElementById("exerciseQuestion").innerText = ex.question;
  document.getElementById("exerciseQuestionAr").innerText = ex.questionAr;
  
  const optsBox = document.getElementById("exerciseOptions");
  optsBox.innerHTML = '';
  ex.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.style.cssText = 'padding:14px 20px; background:#f8fafc; border:2px solid #e2e8f0; border-radius:12px; cursor:pointer; font-size:16px; font-weight:600; font-family:Cairo,sans-serif; transition:all 0.2s; color:#1e293b;';
    btn.onmouseover = () => { if (!exerciseAnswered) btn.style.background = '#eff6ff'; };
    btn.onmouseout = () => { if (!exerciseAnswered) btn.style.background = '#f8fafc'; };
    btn.onclick = () => checkExercise(idx, btn);
    optsBox.appendChild(btn);
  });
  
  document.getElementById("exerciseFeedback").style.display = 'none';
  document.getElementById("exerciseNextBtn").style.display = 'none';
  exerciseAnswered = false;
}

function checkExercise(selectedIdx, btnEl) {
  if (exerciseAnswered) return;
  exerciseAnswered = true;
  if (typeof trackActivity === 'function') trackActivity('exercises', 1);
  
  const ex = EXERCISES[currentExercise];
  const allBtns = document.getElementById("exerciseOptions").querySelectorAll('button');
  const feedback = document.getElementById("exerciseFeedback");
  
  if (selectedIdx === ex.answer) {
    btnEl.style.background = '#dcfce7'; btnEl.style.borderColor = '#16a34a'; btnEl.style.color = '#166534';
    exerciseScore++;
    feedback.innerHTML = '✅ <strong>إجابة صحيحة!</strong><br><span style="font-size:14px;">' + ex.explanation + '</span>';
    feedback.style.background = '#f0fdf4'; feedback.style.borderRight = '4px solid #16a34a'; feedback.style.color = '#166534';
  } else {
    btnEl.style.background = '#fee2e2'; btnEl.style.borderColor = '#dc2626'; btnEl.style.color = '#991b1b';
    allBtns[ex.answer].style.background = '#dcfce7'; allBtns[ex.answer].style.borderColor = '#16a34a'; allBtns[ex.answer].style.color = '#166534';
    feedback.innerHTML = '❌ <strong>إجابة خاطئة.</strong> الإجابة الصحيحة: <strong>' + ex.options[ex.answer] + '</strong><br><span style="font-size:14px;">' + ex.explanation + '</span>';
    feedback.style.background = '#fef2f2'; feedback.style.borderRight = '4px solid #dc2626'; feedback.style.color = '#991b1b';
  }
  
  feedback.style.display = 'block';
  document.getElementById("exerciseNextBtn").style.display = 'inline-block';
  document.getElementById("exerciseNextBtn").innerText = (currentExercise === EXERCISES.length - 1) ? 'إعادة من البداية 🔄' : 'السؤال التالي ➡️';
}

function nextExercise() {
  currentExercise = (currentExercise + 1) % EXERCISES.length;
  if (currentExercise === 0) exerciseScore = 0;
  loadExercise();
}
