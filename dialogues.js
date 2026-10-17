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
    title: "في الفندق (Im Hotel)",
    icon: "🏨",
    level: "A1",
    lines: [
      { speaker: "A", de: "Guten Abend! Ich habe eine Reservierung.", ar: "مساء الخير! لدي حجز." },
      { speaker: "B", de: "Wie ist Ihr Name, bitte?", ar: "ما اسمك، من فضلك؟" },
      { speaker: "A", de: "Mein Name ist Ahmed Hassan.", ar: "اسمي أحمد حسن." },
      { speaker: "B", de: "Ja, ein Einzelzimmer für drei Nächte.", ar: "نعم، غرفة فردية لثلاث ليالٍ." },
      { speaker: "A", de: "Wie viel kostet die Nacht?", ar: "كم تكلف الليلة؟" },
      { speaker: "B", de: "80 Euro pro Nacht, inklusive Frühstück.", ar: "80 يورو في الليلة، شاملة الفطور." },
      { speaker: "A", de: "Wann ist das Frühstück?", ar: "متى الفطور؟" },
      { speaker: "B", de: "Von 7 bis 10 Uhr im Erdgeschoss.", ar: "من 7 إلى 10 في الطابق الأرضي." },
      { speaker: "A", de: "Wo ist mein Zimmer?", ar: "أين غرفتي؟" },
      { speaker: "B", de: "Zimmer 305, im dritten Stock.", ar: "الغرفة 305، في الطابق الثالث." }
    ],
    questions: [
      { q: "كم عدد الليالي؟", options: ["ليلة", "ليلتان", "ثلاث ليالٍ", "أربع ليالٍ"], answer: 2 },
      { q: "كم تكلف الليلة؟", options: ["60 يورو", "70 يورو", "80 يورو", "90 يورو"], answer: 2 },
      { q: "في أي طابق الغرفة؟", options: ["الأول", "الثاني", "الثالث", "الرابع"], answer: 2 }
    ]
  },
  {
    title: "في الصيدلية (In der Apotheke)",
    icon: "💊",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Tag, ich brauche etwas gegen Kopfschmerzen.", ar: "نهارك سعيد، أحتاج شيئاً ضد الصداع." },
      { speaker: "B", de: "Haben Sie ein Rezept?", ar: "هل لديك وصفة طبية؟" },
      { speaker: "A", de: "Nein, ich brauche nur etwas Rezeptfreies.", ar: "لا، أحتاج فقط شيئاً بدون وصفة." },
      { speaker: "B", de: "Ich empfehle Ihnen diese Tabletten. Nehmen Sie eine Tablette zweimal täglich.", ar: "أنصحك بهذه الأقراص. خذ قرصاً مرتين يومياً." },
      { speaker: "A", de: "Danke. Wie viel kostet das?", ar: "شكراً. كم يكلف هذا؟" },
      { speaker: "B", de: "Das kostet 8 Euro.", ar: "يكلف 8 يورو." },
      { speaker: "A", de: "Und was hilft gegen Husten?", ar: "وما الذي يساعد ضد السعال؟" },
      { speaker: "B", de: "Dieser Sirup hier ist sehr gut.", ar: "هذا الشراب هنا جيد جداً." }
    ],
    questions: [
      { q: "ماذا يحتاج الشخص A؟", options: ["شيء ضد الصداع", "شيء ضد السعال", "شيء ضد الحمى", "شيء ضد البرد"], answer: 0 },
      { q: "كم مرة يأخذ الأقراص؟", options: ["مرة", "مرتين", "ثلاث مرات", "أربع مرات"], answer: 1 },
      { q: "كم تكلفة الأقراص؟", options: ["5 يورو", "6 يورو", "8 يورو", "10 يورو"], answer: 2 }
    ]
  },
  {
    title: "دعوة إلى حفلة (Einladung zur Party)",
    icon: "🎉",
    level: "A2",
    lines: [
      { speaker: "A", de: "Hallo Maria! Ich habe am Samstag eine Party.", ar: "مرحباً ماريا! لدي حفلة يوم السبت." },
      { speaker: "B", de: "Oh, toll! Wo findet die Party statt?", ar: "أوه، رائع! أين تقام الحفلة؟" },
      { speaker: "A", de: "Bei mir zu Hause, in der Schillerstraße 12.", ar: "في منزلي، في شارع شيلر 12." },
      { speaker: "B", de: "Und wann beginnt sie?", ar: "ومتى تبدأ؟" },
      { speaker: "A", de: "Um 19 Uhr. Kannst du kommen?", ar: "الساعة 19. هل يمكنك المجيء؟" },
      { speaker: "B", de: "Ja, ich komme sehr gerne! Soll ich etwas mitbringen?", ar: "نعم، سآتي بكل سرور! هل يجب أن أحضر شيئاً؟" },
      { speaker: "A", de: "Bring bitte einen Salat mit.", ar: "أحضري سلطة من فضلك." },
      { speaker: "B", de: "Natürlich! Bis Samstag!", ar: "بالطبع! إلى السبت!" }
    ],
    questions: [
      { q: "متى الحفلة؟", options: ["الجمعة", "السبت", "الأحد", "الاثنين"], answer: 1 },
      { q: "أين تقام الحفلة؟", options: ["في مطعم", "في منزل الشخص A", "في حديقة", "في مقهى"], answer: 1 },
      { q: "ماذا يجب أن تحضر ماريا؟", options: ["كعكة", "سلطة", "مشروب", "لا شيء"], answer: 1 }
    ]
  },
  {
    title: "محادثة هاتفية (Telefongespräch)",
    icon: "📞",
    level: "A2",
    lines: [
      { speaker: "A", de: "Guten Tag, hier ist Ahmed Hassan. Kann ich mit Frau Müller sprechen?", ar: "نهارك سعيد، أنا أحمد حسن. هل يمكنني التحدث مع السيدة مولر؟" },
      { speaker: "B", de: "Einen Moment bitte. Es tut mir leid, Frau Müller ist in einer Besprechung.", ar: "لحظة من فضلك. آسف، السيدة مولر في اجتماع." },
      { speaker: "A", de: "Wann ist sie wieder erreichbar?", ar: "متى يمكن الوصول إليها مرة أخرى؟" },
      { speaker: "B", de: "Gegen 15 Uhr. Soll ich ihr eine Nachricht geben?", ar: "حوالي الساعة 15. هل أعطيها رسالة؟" },
      { speaker: "A", de: "Ja, bitte. Sagen Sie ihr, dass ich angerufen habe.", ar: "نعم، من فضلك. قولي لها أنني اتصلت." },
      { speaker: "B", de: "Ihre Telefonnummer bitte?", ar: "رقم هاتفك من فضلك؟" },
      { speaker: "A", de: "0152 3456789.", ar: "0152 3456789." },
      { speaker: "B", de: "Danke. Ich richte es aus. Auf Wiederhören!", ar: "شكراً. سأبلغها. إلى اللقاء!" }
    ],
    questions: [
      { q: "مع من يريد أحمد التحدث؟", options: ["السيد مولر", "السيدة مولر", "السيد شميت", "السيدة شميت"], answer: 1 },
      { q: "أين السيدة مولر؟", options: ["في إجازة", "في اجتماع", "في المنزل", "في المطار"], answer: 1 },
      { q: "متى يمكن الوصول إليها؟", options: ["13", "14", "15", "16"], answer: 2 }
    ]
  },
  {
    title: "في المقهى (Im Café)",
    icon: "☕",
    level: "A1",
    lines: [
      { speaker: "A", de: "Guten Tag! Was möchten Sie bestellen?", ar: "نهارك سعيد! ماذا تريد أن تطلب؟" },
      { speaker: "B", de: "Ich möchte einen Kaffee mit Milch, bitte.", ar: "أريد قهوة بالحليب، من فضلك." },
      { speaker: "A", de: "Möchten Sie auch etwas essen?", ar: "هل تريد أيضاً شيئاً للأكل؟" },
      { speaker: "B", de: "Ja, einen Apfelkuchen, bitte.", ar: "نعم، كعكة تفاح، من فضلك." },
      { speaker: "A", de: "Möchten Sie hier sitzen oder mitnehmen?", ar: "تريد الجلوس هنا أم الأخذ معك؟" },
      { speaker: "B", de: "Ich sitze hier. Danke.", ar: "سأجلس هنا. شكراً." },
      { speaker: "A", de: "Das macht 6 Euro 50.", ar: "المجموع 6 يورو 50 سنتاً." },
      { speaker: "B", de: "Hier bitte. Stimmt so.", ar: "ها هو من فضلك. احتفظ بالباقي." }
    ],
    questions: [
      { q: "ماذا طلب الشخص B للشرب؟", options: ["شاي", "قهوة بالحليب", "عصير", "ماء"], answer: 1 },
      { q: "ماذا طلب للأكل؟", options: ["كعكة شوكولاتة", "كعكة تفاح", "ساندويتش", "سلطة"], answer: 1 },
      { q: "كم كان المجموع؟", options: ["5 يورو", "6 يورو 50", "7 يورو", "8 يورو"], answer: 1 }
    ]
  }
];

let currentDialogue = 0;
let currentLine = 0;
let currentQuestion = 0;
let dialogueScore = 0;
let inQuestionsMode = false;

function initDialoguesTab() {
  renderDialogueList();
}

function renderDialogueList() {
  const container = document.getElementById('dialoguesContent');
  if (!container) return;
  inQuestionsMode = false;
  
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
              <span style="color:#4f46e5; font-weight:700; font-size:14px;">${d.lines.length} جملة + ${d.questions.length} أسئلة ➡️</span>
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
  inQuestionsMode = false;
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
  inQuestionsMode = true;
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
