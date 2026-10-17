/* ============ لوحة التقدم (Progress Dashboard) ============ */
const PROGRESS_KEY = 'german_app_progress';

function loadProgress() {
  const data = localStorage.getItem(PROGRESS_KEY);
  if (data) return JSON.parse(data);
  return {
    days: {},           // { "2025-01-15": { reviews: 5, exercises: 3, writing: 2, listening: 1, dialogues: 0 } }
    firstVisit: Date.now(),
    lastVisit: null
  };
}

function saveProgress(data) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

function getTodayKey() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

// تحديث نشاط اليوم
function trackActivity(type, amount = 1) {
  const data = loadProgress();
  const today = getTodayKey();
  if (!data.days[today]) {
    data.days[today] = { reviews: 0, exercises: 0, writing: 0, listening: 0, dialogues: 0 };
  }
  if (!data.days[today][type]) data.days[today][type] = 0;
  data.days[today][type] += amount;
  data.lastVisit = Date.now();
  saveProgress(data);
}

// حساب السلسلة (Streak)
function calculateStreak() {
  const data = loadProgress();
  const today = new Date();
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    const day = data.days[key];
    if (day && (day.reviews > 0 || day.exercises > 0 || day.writing > 0 || day.listening > 0 || day.dialogues > 0)) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }
  return streak;
}

// حساب إجمالي الأنشطة
function calculateTotals() {
  const data = loadProgress();
  let totalReviews = 0, totalExercises = 0, totalWriting = 0, totalListening = 0, totalDialogues = 0, totalDays = 0;
  Object.keys(data.days).forEach(k => {
    const d = data.days[k];
    if (d.reviews || d.exercises || d.writing || d.listening || d.dialogues) totalDays++;
    totalReviews += d.reviews || 0;
    totalExercises += d.exercises || 0;
    totalWriting += d.writing || 0;
    totalListening += d.listening || 0;
    totalDialogues += d.dialogues || 0;
  });
  return { totalReviews, totalExercises, totalWriting, totalListening, totalDialogues, totalDays };
}

// آخر 7 أيام نشاط
function getLast7Days() {
  const data = loadProgress();
  const days = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    const dayData = data.days[key] || { reviews: 0, exercises: 0, writing: 0, listening: 0, dialogues: 0 };
    const total = dayData.reviews + dayData.exercises + dayData.writing + dayData.listening + dayData.dialogues;
    days.push({
      key: key,
      label: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'][d.getDay()],
      total: total,
      data: dayData
    });
  }
  return days;
}

function initProgressTab() {
  renderProgressDashboard();
}

function renderProgressDashboard() {
  const container = document.getElementById('progressContent');
  if (!container) return;
  
  // تسجيل زيارة اليوم
  trackActivity('visit', 0); // نسجل الزيارة بدون زيادة
  
  const streak = calculateStreak();
  const totals = calculateTotals();
  const last7 = getLast7Days();
  const todayKey = getTodayKey();
  const data = loadProgress();
  const todayData = data.days[todayKey] || { reviews: 0, exercises: 0, writing: 0, listening: 0, dialogues: 0 };
  
  // إحصائيات من SRS
  let srsStats = { total: 0, due: 0, learned: 0 };
  if (typeof getStats === 'function') {
    try { srsStats = getStats(); } catch(e) {}
  }
  
  // أقصى قيمة في الأسبوع (لرسم المخطط)
  const maxDay = Math.max(...last7.map(d => d.total), 1);
  
  // نصائح ذكية
  const tips = [];
  if (srsStats.due > 0) tips.push('🎯 لديك ' + srsStats.due + ' بطاقة مستحقة للمراجعة اليوم.');
  if (todayData.reviews === 0 && todayData.exercises === 0) tips.push('💡 ابدأ يومك بمراجعة 5 بطاقات لتبقى نشطاً.');
  if (streak > 0) tips.push('🔥 استمر! أنت في السلسلة منذ ' + streak + ' يوم.');
  if (srsStats.learned > 50) tips.push('🏆 حفظت ' + srsStats.learned + ' كلمة حتى الآن. عمل رائع!');
  if (tips.length === 0) tips.push('🌟 كل شيء جيد! استمر في المذاكرة.');
  
  container.innerHTML = `
    <div style="max-width:1000px; margin:0 auto;">
      <h2 style="color:#1e3a8a; text-align:center; margin-bottom:25px; font-size:26px;">📊 لوحة التقدم</h2>
      
      <!-- البطاقات الرئيسية -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px,1fr)); gap:18px; margin-bottom:30px;">
        
        <!-- السلسلة -->
        <div style="background:linear-gradient(135deg, #f97316, #ea580c); padding:25px; border-radius:16px; color:#fff; text-align:center; box-shadow:0 8px 20px rgba(249,115,22,0.3);">
          <div style="font-size:48px; margin-bottom:8px;">🔥</div>
          <div style="font-size:42px; font-weight:700; line-height:1;">${streak}</div>
          <div style="font-size:14px; opacity:0.95; margin-top:8px; font-weight:600;">يوم متتالي</div>
        </div>
        
        <!-- الكلمات المحفوظة -->
        <div style="background:linear-gradient(135deg, #10b981, #059669); padding:25px; border-radius:16px; color:#fff; text-align:center; box-shadow:0 8px 20px rgba(16,185,129,0.3);">
          <div style="font-size:48px; margin-bottom:8px;">🏆</div>
          <div style="font-size:42px; font-weight:700; line-height:1;">${srsStats.learned}</div>
          <div style="font-size:14px; opacity:0.95; margin-top:8px; font-weight:600;">كلمة محفوظة</div>
        </div>
        
        <!-- إجمالي المراجعات -->
        <div style="background:linear-gradient(135deg, #4f46e5, #3730a3); padding:25px; border-radius:16px; color:#fff; text-align:center; box-shadow:0 8px 20px rgba(79,70,229,0.3);">
          <div style="font-size:48px; margin-bottom:8px;">📚</div>
          <div style="font-size:42px; font-weight:700; line-height:1;">${totals.totalReviews}</div>
          <div style="font-size:14px; opacity:0.95; margin-top:8px; font-weight:600;">مراجعة إجمالية</div>
        </div>
        
        <!-- إجمالي الأيام -->
        <div style="background:linear-gradient(135deg, #0891b2, #0e7490); padding:25px; border-radius:16px; color:#fff; text-align:center; box-shadow:0 8px 20px rgba(8,145,178,0.3);">
          <div style="font-size:48px; margin-bottom:8px;">📅</div>
          <div style="font-size:42px; font-weight:700; line-height:1;">${totals.totalDays}</div>
          <div style="font-size:14px; opacity:0.95; margin-top:8px; font-weight:600;">يوم نشاط</div>
        </div>
      </div>
      
      <!-- نشاط اليوم -->
      <div style="background:#fff; padding:25px; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.06); margin-bottom:25px;">
        <h3 style="color:#1e3a8a; font-size:18px; margin-bottom:20px; font-weight:700;">✨ نشاط اليوم</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px,1fr)); gap:12px;">
          <div style="text-align:center; padding:15px; background:#eff6ff; border-radius:12px;">
            <div style="font-size:28px; font-weight:700; color:#2563eb;">${todayData.reviews}</div>
            <div style="font-size:13px; color:#64748b; font-weight:600;">بطاقات مراجعة</div>
          </div>
          <div style="text-align:center; padding:15px; background:#f0fdf4; border-radius:12px;">
            <div style="font-size:28px; font-weight:700; color:#16a34a;">${todayData.exercises}</div>
            <div style="font-size:13px; color:#64748b; font-weight:600;">تمارين</div>
          </div>
          <div style="text-align:center; padding:15px; background:#fef3c7; border-radius:12px;">
            <div style="font-size:28px; font-weight:700; color:#d97706;">${todayData.writing}</div>
            <div style="font-size:13px; color:#64748b; font-weight:600;">جمل مكتوبة</div>
          </div>
          <div style="text-align:center; padding:15px; background:#fce7f3; border-radius:12px;">
            <div style="font-size:28px; font-weight:700; color:#db2777;">${todayData.listening}</div>
            <div style="font-size:13px; color:#64748b; font-weight:600;">استماع</div>
          </div>
          <div style="text-align:center; padding:15px; background:#e0e7ff; border-radius:12px;">
            <div style="font-size:28px; font-weight:700; color:#4f46e5;">${todayData.dialogues}</div>
            <div style="font-size:13px; color:#64748b; font-weight:600;">محادثات</div>
          </div>
        </div>
      </div>
      
      <!-- المخطط الأسبوعي -->
      <div style="background:#fff; padding:25px; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.06); margin-bottom:25px;">
        <h3 style="color:#1e3a8a; font-size:18px; margin-bottom:20px; font-weight:700;">📈 نشاطك في آخر 7 أيام</h3>
        <div style="display:flex; align-items:flex-end; justify-content:space-between; height:200px; gap:10px; padding:0 10px;">
          ${last7.map(d => {
            const height = d.total === 0 ? 10 : Math.max(30, (d.total / maxDay) * 180);
            const color = d.key === todayKey ? '#4f46e5' : '#818cf8';
            const isToday = d.key === todayKey;
            return `
              <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
                <div style="font-size:13px; font-weight:700; color:#64748b;">${d.total}</div>
                <div style="width:100%; height:${height}px; background:${color}; border-radius:8px 8px 0 0; transition:all 0.3s; ${isToday ? 'box-shadow:0 0 15px rgba(79,70,229,0.5);' : ''}"></div>
                <div style="font-size:11px; color:${isToday ? '#4f46e5' : '#94a3b8'}; font-weight:${isToday ? '700' : '600'};">${d.label}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      
      <!-- نصائح ذكية -->
      <div style="background:linear-gradient(135deg, #fef3c7, #fde68a); padding:25px; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.06); margin-bottom:25px;">
        <h3 style="color:#92400e; font-size:18px; margin-bottom:15px; font-weight:700;">💡 نصائح لليوم</h3>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${tips.map(t => '<div style="color:#78350f; font-size:15px; font-weight:600; line-height:1.6;">' + t + '</div>').join('')}
        </div>
      </div>
      
      <!-- زر إعادة تعيين -->
      <div style="text-align:center; margin-top:30px;">
        <button onclick="resetAllProgress()" style="padding:10px 25px; background:#fee2e2; color:#dc2626; border:none; border-radius:20px; cursor:pointer; font-weight:600; font-size:14px; font-family:Cairo,sans-serif;">🗑️ إعادة تعيين كل البيانات</button>
      </div>
    </div>
  `;
}

function resetAllProgress() {
  if (confirm('هل أنت متأكد؟ سيتم حذف كل تقدمك (المراجعة + النشاط).')) {
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem('german_srs_data');
    renderProgressDashboard();
  }
}