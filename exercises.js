/* ============ التمارين (Exercises) - موسع ============ */
const EXERCISES = [
  // ===== قاعدة Dativ =====
  { question: "Ich helfe ___ Mann.", questionAr: "أساعد الرجل.", options: ["den", "dem", "der", "das"], answer: 1, explanation: "الفعل helfen يأخذ Dativ، و Mann مذكر، لذا نستخدم dem." },
  { question: "Ich danke ___ Frau.", questionAr: "أشكر المرأة.", options: ["die", "der", "den", "dem"], answer: 1, explanation: "الفعل danken يأخذ Dativ، و Frau مؤنث، لذا نستخدم der." },
  { question: "Das Buch gehört ___ Kind.", questionAr: "الكتاب ينتمي للطفل.", options: ["das", "dem", "den", "der"], answer: 1, explanation: "الفعل gehören يأخذ Dativ، و Kind محايد، لذا نستخدم dem." },
  { question: "Ich antworte ___ Lehrer.", questionAr: "أجيب المدرس.", options: ["der", "den", "dem", "das"], answer: 2, explanation: "الفعل antworten يأخذ Dativ، و Lehrer مذكر، لذا نستخدم dem." },
  { question: "Die Schuhe passen ___ nicht.", questionAr: "الحذاء لا يناسبني.", options: ["ich", "mich", "mir", "mein"], answer: 2, explanation: "الفعل passen يأخذ Dativ، ومع ich نستخدم mir." },
  { question: "Das Essen schmeckt ___ gut.", questionAr: "الطعام طعمه جيد (يعجبني).", options: ["ich", "mich", "mir", "mein"], answer: 2, explanation: "الفعل schmecken يأخذ Dativ، ومع ich نستخدم mir." },
  { question: "Kannst du ___ helfen?", questionAr: "هل يمكنك مساعدتي؟", options: ["ich", "mich", "mir", "mein"], answer: 2, explanation: "الفعل helfen يأخذ Dativ، ومع ich نستخدم mir." },
  { question: "Ich gratuliere ___ zum Geburtstag.", questionAr: "أهنئك بعيد ميلادك.", options: ["du", "dich", "dir", "dein"], answer: 2, explanation: "الفعل gratulieren يأخذ Dativ، ومع du نستخدم dir." },

  // ===== قاعدة Akkusativ =====
  { question: "Ich kaufe ___ Apfel.", questionAr: "أشتري التفاحة.", options: ["der", "den", "dem", "die"], answer: 1, explanation: "الفعل kaufen يأخذ Akkusativ، و Apfel مذكر، لذا نستخدم den." },
  { question: "Ich sehe ___ Frau.", questionAr: "أرى المرأة.", options: ["die", "der", "den", "dem"], answer: 0, explanation: "الفعل sehen يأخذ Akkusativ، و Frau مؤنث، والمؤنث لا يتغير في Akkusativ (die)." },
  { question: "Ich habe ___ Hund.", questionAr: "لدي كلب.", options: ["ein", "einen", "einem", "eines"], answer: 1, explanation: "الفعل haben يأخذ Akkusativ، و Hund مذكر، لذا نستخدم einen." },
  { question: "Er liest ___ Buch.", questionAr: "هو يقرأ كتاباً.", options: ["ein", "einen", "einem", "eines"], answer: 0, explanation: "Buch محايد (das)، وفي Akkusativ يبقى ein (لا يتغير)." },
  { question: "Wir besuchen ___ Großmutter.", questionAr: "نزور الجدة.", options: ["die", "der", "den", "dem"], answer: 0, explanation: "besuchen يأخذ Akkusativ، و Großmutter مؤنث (die) - لا يتغير في Akkusativ." },
  { question: "Ich brauche ___ Stift.", questionAr: "أحتاج قلماً.", options: ["ein", "einen", "einem", "eines"], answer: 1, explanation: "brauchen يأخذ Akkusativ، و Stift مذكر، لذا نستخدم einen." },

  // ===== الأفعال المنفصلة =====
  { question: "Ich ___ um 7 Uhr ___.", questionAr: "أستيقظ الساعة 7.", options: ["stehe ... auf", "aufstehe ... (فراغ)", "stehe ... an", "gehe ... auf"], answer: 0, explanation: "الفعل aufstehen فعل منفصل، البادئة (auf) تذهب إلى نهاية الجملة." },
  { question: "Er ___ seine Mutter ___.", questionAr: "هو يتصل بأمه.", options: ["rufe ... an", "ruft ... an", "anruft ... (فراغ)", "rufe ... auf"], answer: 1, explanation: "الفعل anrufen فعل منفصل، مع er نستخدم ruft، والبادئة an في النهاية." },
  { question: "Ich ___ im Supermarkt ___.", questionAr: "أتسوق في السوبر ماركت.", options: ["kaufe ... ein", "einkaufe ... (فراغ)", "kaufe ... auf", "gehe ... ein"], answer: 0, explanation: "الفعل einkaufen فعل منفصل، البادئة (ein) تذهب إلى النهاية." },
  { question: "Wann ___ der Zug ___?", questionAr: "متى يصل القطار؟", options: ["kommt ... an", "ankommt ... (فراغ)", "kommt ... auf", "geht ... an"], answer: 0, explanation: "الفعل ankommen فعل منفصل، البادئة (an) في النهاية." },
  { question: "Ich ___ den Fernseher ___.", questionAr: "أشعل التلفاز.", options: ["mache ... an", "anmache ... (فراغ)", "mache ... aus", "gehe ... an"], answer: 0, explanation: "الفعل anmachen فعل منفصل، البادئة (an) في النهاية. (ausmachen = يطفئ)" },

  // ===== الأفعال الانعكاسية =====
  { question: "Ich freue ___ auf den Urlaub.", questionAr: "أنا متحمس للإجازة.", options: ["mich", "dich", "sich", "mir"], answer: 0, explanation: "الفعل sich freuen انعكاسي، مع ich نستخدم mich." },
  { question: "Du wäschst ___ jeden Morgen.", questionAr: "أنت تغتسل كل صباح.", options: ["mich", "dich", "sich", "dir"], answer: 1, explanation: "الفعل sich waschen انعكاسي، مع du نستخدم dich." },
  { question: "Er interessiert ___ für Sport.", questionAr: "هو مهتم بالرياضة.", options: ["mich", "dich", "sich", "ihm"], answer: 2, explanation: "الفعل sich interessieren انعكاسي، مع er نستخدم sich." },
  { question: "Wir treffen ___ um 8 Uhr.", questionAr: "نتقابل الساعة 8.", options: ["mich", "dich", "sich", "uns"], answer: 3, explanation: "الفعل sich treffen انعكاسي، مع wir نستخدم uns." },
  { question: "Ich wasche ___ die Hände.", questionAr: "أغسل يديّ.", options: ["mich", "mir", "sich", "dich"], answer: 1, explanation: "لأن هناك مفعولاً آخر (die Hände)، نستخدم Dativ (mir)." },

  // ===== الأفعال التي تأخذ sein =====
  { question: "Ich ___ nach Berlin gefahren.", questionAr: "سافرت إلى برلين.", options: ["habe", "bin", "ist", "hat"], answer: 1, explanation: "الفعل fahren فعل حركة، لذا يأخذ sein في Perfekt. مع ich نستخدم bin." },
  { question: "Er ___ nach Hause gegangen.", questionAr: "هو ذهب إلى المنزل.", options: ["hat", "ist", "bin", "sind"], answer: 1, explanation: "الفعل gehen فعل حركة، لذا يأخذ sein. مع er نستخدم ist." },
  { question: "Sie ___ um 7 Uhr aufgestanden.", questionAr: "هي استيقظت الساعة 7.", options: ["hat", "ist", "sind", "bin"], answer: 1, explanation: "الفعل aufstehen فعل تغير حالة، لذا يأخذ sein. مع sie نستخدم ist." },
  { question: "Wir ___ nach Italien gereist.", questionAr: "سافرنا إلى إيطاليا.", options: ["haben", "sind", "ist", "seid"], answer: 1, explanation: "الفعل reisen فعل حركة، لذا يأخذ sein. مع wir نستخدم sind." },
  { question: "Das Kind ___ eingeschlafen.", questionAr: "الطفل نام (غلب عليه النعاس).", options: ["hat", "ist", "sind", "haben"], answer: 1, explanation: "الفعل einschlafen فعل تغير حالة، لذا يأخذ sein. مع Kind (das) نستخدم ist." },

  // ===== حروف الجر مع Dativ =====
  { question: "Ich fahre mit ___ Bus.", questionAr: "أسافر بالحافلة.", options: ["der", "den", "dem", "die"], answer: 2, explanation: "حرف الجر mit يأخذ Dativ دائماً، و Bus مذكر، لذا نستخدم dem." },
  { question: "Sie kommt aus ___ Schweiz.", questionAr: "هي من سويسرا.", options: ["die", "der", "den", "dem"], answer: 1, explanation: "حرف الجر aus يأخذ Dativ، و Schweiz مؤنث، لذا نستخدم der." },
  { question: "Ich wohne bei ___ Eltern.", questionAr: "أسكن عند والديّ.", options: ["die", "der", "den", "dem"], answer: 2, explanation: "حرف الجر bei يأخذ Dativ. Eltern جمع، لذا نستخدم den + n." },
  { question: "Ich lerne Deutsch seit ___ Jahr.", questionAr: "أتعلم الألمانية منذ عام.", options: ["ein", "einen", "einem", "eines"], answer: 2, explanation: "حرف الجر seit يأخذ Dativ، و Jahr محايد، لذا نستخدم einem." },
  { question: "Ich gehe zu ___ Arzt.", questionAr: "أذهب إلى الطبيب.", options: ["der", "den", "dem", "die"], answer: 2, explanation: "حرف الجر zu يأخذ Dativ. يمكن استخدام zum (zu + dem)." },

  // ===== حروف الجر مع Akkusativ =====
  { question: "Das Geschenk ist für ___.", questionAr: "الهدية لك.", options: ["du", "dich", "dir", "dein"], answer: 1, explanation: "حرف الجر für يأخذ Akkusativ، و du في Akkusativ تصبح dich." },
  { question: "Ich gehe ohne ___.", questionAr: "أذهب بدونك.", options: ["du", "dich", "dir", "dein"], answer: 1, explanation: "حرف الجر ohne يأخذ Akkusativ، و du في Akkusativ تصبح dich." },
  { question: "Wir laufen durch ___ Park.", questionAr: "نمشي عبر الحديقة.", options: ["der", "den", "dem", "die"], answer: 1, explanation: "حرف الجر durch يأخذ Akkusativ، و Park مذكر، لذا نستخدم den." },
  { question: "Ich komme um ___ Uhr.", questionAr: "سآتي في الساعة 8.", options: ["acht", "achte", "achten", "achter"], answer: 0, explanation: "بعد um (في الساعة) نستخدم العدد الأساسي (acht) بدون تصريف." },

  // ===== الروابط =====
  { question: "Ich bleibe zu Hause, ___ es regnet.", questionAr: "أبقى في المنزل لأنها تمطر.", options: ["und", "aber", "weil", "oder"], answer: 2, explanation: "weil تعني لأن، وترسل الفعل إلى نهاية الجملة." },
  { question: "Ich lerne Deutsch, ___ ich wohne in Berlin.", questionAr: "أتعلم الألمانية وأسكن في برلين.", options: ["weil", "dass", "und", "denn"], answer: 2, explanation: "und تعني و، ولا تغير ترتيب الجملة." },
  { question: "Ich weiß, ___ er kommt.", questionAr: "أعرف أنه سيأتي.", options: ["weil", "dass", "und", "denn"], answer: 1, explanation: "dass تعني أن، وترسل الفعل إلى نهاية الجملة." },
  { question: "___ ich Zeit habe, lerne ich.", questionAr: "إذا كان لدي وقت، أدرس.", options: ["Weil", "Dass", "Wenn", "Denn"], answer: 2, explanation: "wenn تعني إذا/عندما، وترسل الفعل إلى نهاية الجملة." },
  { question: "Ich bin müde, ___ ich arbeite.", questionAr: "أنا متعب، لكنني أعمل.", options: ["weil", "dass", "und", "aber"], answer: 3, explanation: "aber تعني لكن، ولا تغير ترتيب الجملة." },

  // ===== الأفعال المساعدة =====
  { question: "Ich ___ gut schwimmen.", questionAr: "أستطيع السباحة جيداً.", options: ["kann", "kannst", "können", "könnt"], answer: 0, explanation: "الفعل können مع ich يصبح kann." },
  { question: "Du ___ mehr lernen.", questionAr: "يجب أن تدرس أكثر.", options: ["muss", "musst", "müssen", "müsst"], answer: 1, explanation: "الفعل müssen مع du يصبح musst." },
  { question: "Er ___ nach Hause gehen.", questionAr: "يريد الذهاب إلى المنزل.", options: ["will", "willst", "wollen", "wollt"], answer: 0, explanation: "الفعل wollen مع er يصبح will." },
  { question: "___ ich hier rauchen?", questionAr: "هل يُسمح لي بالتدخين هنا؟", options: ["Darf", "Darfst", "Dürfen", "Dürft"], answer: 0, explanation: "الفعل dürfen مع ich يصبح darf." },
  { question: "Du ___ mehr schlafen.", questionAr: "ينبغي أن تنام أكثر.", options: ["soll", "sollst", "sollen", "sollt"], answer: 1, explanation: "الفعل sollen مع du يصبح sollst." },
  { question: "Ich ___ Schokolade.", questionAr: "أحب الشوكولاتة.", options: ["mag", "magst", "mögen", "mögt"], answer: 0, explanation: "الفعل mögen مع ich يصبح mag." },

  // ===== الضمائر الشخصية =====
  { question: "___ du Zeit?", questionAr: "هل لديك وقت؟", options: ["Hast", "Habt", "Hat", "Habe"], answer: 0, explanation: "الفعل haben مع du يصبح hast." },
  { question: "___ ihr Deutsch?", questionAr: "هل تتحدثون الألمانية؟", options: ["Sprichst", "Sprecht", "Spricht", "Sprechen"], answer: 1, explanation: "الفعل sprechen مع ihr يصبح sprecht." },
  { question: "Ich liebe ___.", questionAr: "أحبك.", options: ["du", "dich", "dir", "dein"], answer: 1, explanation: "الفعل lieben يأخذ Akkusativ، و du تصبح dich." },
  { question: "Ich helfe ___.", questionAr: "أساعدك.", options: ["du", "dich", "dir", "dein"], answer: 2, explanation: "الفعل helfen يأخذ Dativ، و du تصبح dir." },
  { question: "Er sieht ___.", questionAr: "هو يراني.", options: ["ich", "mich", "mir", "mein"], answer: 1, explanation: "الفعل sehen يأخذ Akkusativ، و ich تصبح mich." }
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
