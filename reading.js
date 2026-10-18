const READING_DATA = [
  {
    title: "التعريف بنفسي (Sich vorstellen)",
    level: "A1",
    icon: "👋",
    text: "Hallo! Ich heiße Ahmed. Ich bin 25 Jahre alt. Ich komme aus Ägypten. Ich wohne in Kairo. Ich lerne Deutsch. Ich möchte in Deutschland studieren.",
    translation: "مرحباً! اسمي أحمد. عمري 25 سنة. أنا من مصر. أسكن في القاهرة. أتعلم الألمانية. أريد الدراسة في ألمانيا."
  },
  {
    title: "عائلتي (Meine Familie)",
    level: "A1",
    icon: "👨‍👩‍👧",
    text: "Meine Familie ist klein. Ich habe einen Vater und eine Mutter. Ich habe auch einen Bruder und eine Schwester. Mein Vater ist Lehrer. Meine Mutter ist Ärztin. Mein Bruder ist Student. Meine Schwester ist Schülerin. Wir wohnen in einem Haus.",
    translation: "عائلتي صغيرة. لدي أب وأم. لدي أيضاً أخ وأخت. والدي مدرس. والدتي طبيبة. أخي طالب. أختي طالبة. نسكن في منزل."
  },
  {
    title: "يومي (Mein Tag)",
    level: "A1",
    icon: "☀️",
    text: "Ich stehe um 7 Uhr auf. Ich frühstücke. Dann gehe ich zur Arbeit. Ich arbeite von 9 bis 5 Uhr. Am Mittag esse ich zu Mittag. Am Abend gehe ich nach Hause. Ich esse zu Abend und sehe fern. Ich schlafe um 11 Uhr.",
    translation: "أستيقظ الساعة 7. أفطر. ثم أذهب إلى العمل. أعمل من 9 إلى 5. في الظهر أتناول الغداء. في المساء أذهب إلى المنزل. أتناول العشاء وأشاهد التلفاز. أنام الساعة 11."
  }
];

let currentReading = null;

function initReadingTab() {
  renderReadingList();
}

function renderReadingList() {
  const container = document.getElementById('readingContent');
  if (!container) return;
  currentReading = null;
  
  container.innerHTML = `
    <div style="max-width:900px; margin:0 auto;">
      <h2 style="color:#1e3a8a; text-align:center; margin-bottom:25px; font-size:24px;">📖 القراءة</h2>
      <p style="color:#64748b; text-align:center; margin-bottom:30px; font-size:15px;">اختر نصاً للقراءة والاستماع.</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px,1fr)); gap:18px;">
        ${READING_DATA.map((r, i) => `
          <div onclick="openReading(${i})" style="background:#fff; padding:25px; border-radius:16px; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.06); border-right:5px solid #4f46e5; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-5px)';this.style.boxShadow='0 12px 24px rgba(79,70,229,0.15)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'">
            <div style="font-size:40px; margin-bottom:12px;">${r.icon}</div>
            <h3 style="color:#1e3a8a; font-size:18px; margin-bottom:8px; font-weight:700;">${r.title}</h3>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
              <span style="background:#dcfce7; color:#166534; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700;">${r.level}</span>
              <span style="color:#4f46e5; font-weight:700; font-size:14px;">اقرأ ➡️</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function openReading(index) {
  currentReading = READING_DATA[index];
  renderReadingView();
}

function renderReadingView() {
  const container = document.getElementById('readingContent');
  const r = currentReading;
  
  container.innerHTML = `
    <div style="max-width:800px; margin:0 auto;">
      <button onclick="initReadingTab()" style="padding:8px 16px; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; cursor:pointer; font-size:14px; font-weight:600; color:#64748b; font-family:Cairo,sans-serif; margin-bottom:20px;">← العودة للقائمة</button>
      <div style="background:#fff; border-radius:20px; padding:35px 25px; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        <h2 style="color:#1e3a8a; margin-bottom:20px; font-size:24px; text-align:center;">${r.icon} ${r.title}</h2>
        
        <div style="background:#f8fafc; padding:25px; border-radius:12px; margin-bottom:20px; border-right:4px solid #4f46e5;">
          <p style="color:#1e293b; font-size:18px; font-weight:600; line-height:2; direction:ltr; text-align:left;">${r.text}</p>
        </div>
        
        <button onclick="speak('${r.text.replace(/'/g, "\\'")}')" style="display:block; margin:0 auto 20px; padding:12px 30px; background:#4f46e5; color:#fff; border:none; border-radius:25px; cursor:pointer; font-size:16px; font-weight:700; font-family:Cairo,sans-serif;">🔊 استمع للنص كاملاً</button>
        
        <details style="background:#f0fdf4; padding:20px; border-radius:12px; border-right:4px solid #10b981; cursor:pointer;">
          <summary style="color:#065f46; font-weight:700; font-size:16px; cursor:pointer;">📖 عرض الترجمة العربية</summary>
          <p style="color:#334155; font-size:16px; line-height:2; margin-top:15px;">${r.translation}</p>
        </details>
      </div>
    </div>`;
}