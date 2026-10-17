/* ============ المحادثات (Dialoge) ============ */
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
      { speaker: "B", de: "Gate B12, im ersten Stock.", ar: "البوابة B12، في الطابق الأول." },
      { speaker: "A", de: "Vielen Dank!", ar: "شكراً جزيلاً!" }
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
      { speaker: "B", de: "Ja, ruhen Sie sich zwei Tage aus.", ar: "نعم، ارتح يومين." },
      { speaker: "A", de: "Vielen Dank, Herr Doktor!", ar: "شكراً جزيلاً، دكتور!" }
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
      { speaker: "B", de: "Morgen um 15 Uhr, passt das?", ar: "غداً الساعة 15، هل يناسبك؟" },
      { speaker: "A", de: "Ja, perfekt. Vielen Dank!", ar: "نعم، ممتاز. شكراً جزيلاً!" }
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
    ]
  }
];

let currentDialogue = 0;
let currentLine = 0;

function initDialoguesTab() {
  renderDialogueList();
}

function renderDialogueList() {
  const container = document.getElementById('dialoguesContent');
  if (!container) return;
  
  container.innerHTML = `
    <div style="max-width:900px; margin:0 auto;">
      <h2 style="color:#1e3a8a; text-align:center; margin-bottom:25px; font-size:24px;">💬 محادثات حياتية</h2>
      <p style="color:#64748b; text-align:center; margin-bottom:30px; font-size:15px;">اختر محادثة لتبدأ التدريب على المواقف الحياتية الحقيقية.</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px,1fr)); gap:18px;">
        ${DIALOGUES.map((d, i) => `
          <div onclick="openDialogue(${i})" style="background:#fff; padding:25px; border-radius:16px; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:5px solid #4f46e5; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-5px)';this.style.boxShadow='0 12px 24px rgba(79,70,229,0.15)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'">
            <div style="font-size:40px; margin-bottom:12px;">${d.icon}</div>
            <h3 style="color:#1e3a8a; font-size:18px; margin-bottom:8px; font-weight:700;">${d.title}</h3>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
              <span style="background:${d.level === 'A1' ? '#dcfce7' : '#fef3c7'}; color:${d.level === 'A1' ? '#166534' : '#92400e'}; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700;">${d.level}</span>
              <span style="color:#4f46e5; font-weight:700; font-size:14px;">${d.lines.length} جملة ➡️</span>
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
  renderDialogueView();
  // تسجيل النشاط عند فتح محادثة
  if (typeof trackActivity === 'function') trackActivity('dialogues', 1);
}

function renderDialogueView() {
  const container = document.getElementById('dialoguesContent');
  if (!container) return;
  
  const d = DIALOGUES[currentDialogue];
  const progress = ((currentLine + 1) / d.lines.length * 100).toFixed(0);
  
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
          <button onclick="prevDialogueLine()" id="dlgPrevBtn" style="padding:12px 25px; background:#f1f5f9; color:#64748b; border:1px solid #e2e8f0; border-radius:12px; cursor:pointer; font-size:15px; font-weight:600; font-family:Cairo,sans-serif; ${currentLine === 0 ? 'opacity:0.5;cursor:not-allowed;' : ''}" ${currentLine === 0 ? 'disabled' : ''}>← السابق</button>
          <button onclick="playDialogueLine()" style="padding:12px 30px; background:#4f46e5; color:#fff; border:none; border-radius:12px; cursor:pointer; font-size:15px; font-weight:700; font-family:Cairo,sans-serif;">🔊 استمع للجملة</button>
          <button onclick="nextDialogueLine()" id="dlgNextBtn" style="padding:12px 25px; background:#10b981; color:#fff; border:none; border-radius:12px; cursor:pointer; font-size:15px; font-weight:700; font-family:Cairo,sans-serif; ${currentLine === d.lines.length - 1 ? 'opacity:0.5;cursor:not-allowed;' : ''}" ${currentLine === d.lines.length - 1 ? 'disabled' : ''}>التالي →</button>
        </div>
      </div>
    </div>
  `;
}

function playDialogueLine() {
  const d = DIALOGUES[currentDialogue];
  const line = d.lines[currentLine];
  speak(line.de);
}

function nextDialogueLine() {
  const d = DIALOGUES[currentDialogue];
  if (currentLine < d.lines.length - 1) {
    currentLine++;
    renderDialogueView();
    playDialogueLine();
    // تسجيل النشاط
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
