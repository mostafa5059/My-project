/* ============ التمارين (Exercises) - متوافق مع progress ============ */
const EXERCISES = [
  { question: "Ich helfe ___ Mann.", questionAr: "أساعد الرجل.", options: ["den", "dem", "der", "das"], answer: 1, explanation: "الفعل helfen يأخذ Dativ، و Mann مذكر، لذا نستخدم dem." },
  { question: "Ich danke ___ Frau.", questionAr: "أشكر المرأة.", options: ["die", "der", "den", "dem"], answer: 1, explanation: "الفعل danken يأخذ Dativ، و Frau مؤنث، لذا نستخدم der." },
  { question: "Das Buch gehört ___ Kind.", questionAr: "الكتاب ينتمي للطفل.", options: ["das", "dem", "den", "der"], answer: 1, explanation: "الفعل gehören يأخذ Dativ، و Kind محايد، لذا نستخدم dem." },
  { question: "Ich kaufe ___ Apfel.", questionAr: "أشتري التفاحة.", options: ["der", "den", "dem", "die"], answer: 1, explanation: "الفعل kaufen يأخذ Akkusativ، و Apfel مذكر، لذا نستخدم den." },
  { question: "Ich sehe ___ Frau.", questionAr: "أرى المرأة.", options: ["die", "der", "den", "dem"], answer: 0, explanation: "الفعل sehen يأخذ Akkusativ، و Frau مؤنث، والمؤنث لا يتغير في Akkusativ (die)." },
  { question: "Ich ___ um 7 Uhr ___.", questionAr: "أستيقظ الساعة 7.", options: ["stehe ... auf", "aufstehe ... (فراغ)", "stehe ... an", "gehe ... auf"], answer: 0, explanation: "الفعل aufstehen فعل منفصل، البادئة (auf) تذهب إلى نهاية الجملة." },
  { question: "Er ___ seine Mutter ___.", questionAr: "هو يتصل بأمه.", options: ["rufe ... an", "ruft ... an", "anruft ... (فراغ)", "rufe ... auf"], answer: 1, explanation: "الفعل anrufen فعل منفصل، مع er نستخدم ruft، والبادئة an في النهاية." },
  { question: "Ich freue ___ auf den Urlaub.", questionAr: "أنا متحمس للإجازة.", options: ["mich", "dich", "sich", "mir"], answer: 0, explanation: "الفعل sich freuen انعكاسي، مع ich نستخدم mich." },
  { question: "Du wäschst ___ jeden Morgen.", questionAr: "أنت تغتسل كل صباح.", options: ["mich", "dich", "sich", "dir"], answer: 1, explanation: "الفعل sich waschen انعكاسي، مع du نستخدم dich." },
  { question: "Ich ___ nach Berlin gefahren.", questionAr: "سافرت إلى برلين.", options: ["habe", "bin", "ist", "hat"], answer: 1, explanation: "الفعل fahren فعل حركة، لذا يأخذ sein في Perfekt. مع ich نستخدم bin." },
  { question: "Er ___ nach Hause gegangen.", questionAr: "هو ذهب إلى المنزل.", options: ["hat", "ist", "bin", "sind"], answer: 1, explanation: "الفعل gehen فعل حركة، لذا يأخذ sein. مع er نستخدم ist." },
  { question: "Ich fahre mit ___ Bus.", questionAr: "أسافر بالحافلة.", options: ["der", "den", "dem", "die"], answer: 2, explanation: "حرف الجر mit يأخذ Dativ دائماً، و Bus مذكر، لذا نستخدم dem." },
  { question: "Sie kommt aus ___ Schweiz.", questionAr: "هي من سويسرا.", options: ["die", "der", "den", "dem"], answer: 1, explanation: "حرف الجر aus يأخذ Dativ، و Schweiz مؤنث، لذا نستخدم der." },
  { question: "Das Geschenk ist für ___.", questionAr: "الهدية لك.", options: ["du", "dich", "dir", "dein"], answer: 1, explanation: "حرف الجر für يأخذ Akkusativ، و du في Akkusativ تصبح dich." },
  { question: "Ich bleibe zu Hause, ___ es regnet.", questionAr: "أبقى في المنزل لأنها تمطر.", options: ["und", "aber", "weil", "oder"], answer: 2, explanation: "weil تعني لأن، وترسل الفعل إلى نهاية الجملة." },
  { question: "Ich lerne Deutsch, ___ ich wohne in Berlin.", questionAr: "أتعلم الألمانية وأسكن في برلين.", options: ["weil", "dass", "und", "denn"], answer: 2, explanation: "und تعني و، ولا تغير ترتيب الجملة." },
  { question: "___ du Zeit?", questionAr: "هل لديك وقت؟", options: ["Hast", "Habt", "Hat", "Habe"], answer: 0, explanation: "الفعل haben مع du يصبح hast." },
  { question: "___ ihr Deutsch?", questionAr: "هل تتحدثون الألمانية؟", options: ["Sprichst", "Sprecht", "Spricht", "Sprechen"], answer: 1, explanation: "الفعل sprechen مع ihr يصبح sprecht." },
  { question: "Ich möchte ___ Wasser.", questionAr: "أريد ماءً.", options: ["ein", "einen", "einem", "eins"], answer: 0, explanation: "Wasser اسم محايد (das), وفي حالة النصب (Akkusativ) يبقى ein." },
  { question: "___ Buch ist das?", questionAr: "كتاب من هذا؟", options: ["Wem", "Wer", "Wessen", "Was"], answer: 2, explanation: "Wessen (لمن) تستخدم للسؤال عن الملكية." }
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
  
  // تسجيل النشاط في لوحة التقدم
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
