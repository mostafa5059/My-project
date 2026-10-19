/* ============ نظام تبديل اللغة وإخفاء الترجمة ============ */
const TRANSLATIONS = {
  ar: {
    tab_verbs: "🔤 الأفعال", tab_nouns: "📦 الأسماء", tab_adjectives: "🎨 الصفات",
    tab_basics: "📚 الأساسيات",
    tab_flashcards: "🧠 الاختبار", tab_speaking: "🗣️ التحدث", tab_exercises: "📝 التمارين",
    tab_writing: "✍️ تدريب الكتابة", tab_listening: "🎧 تدريب الاستماع", tab_dialogues: "💬 المحادثات",
    tab_progress: "📊 لوحة التقدم", tab_review: "🎯 المراجعة اليومية",
    tab_favorites: "❤️ المفضلة", tab_lessons: "🎓 الدروس",
    "tab_grammar-a1": "📖 قواعد A1",
     tab_pronunciation: "🗣️ النطق",
    tab_rules: "📖 القواعد",
    tab_reading: "📖 القراءة",
    tab_resources: "📚 المصادر",
    filter_all: "الكل", filter_regular: "منتظمة", filter_irregular: "غير منتظمة",
    filter_separable: "منفصلة", filter_reflexive: "انعكاسية",
    filter_dativ: "📌 Dativ", filter_sein: "✈️ sein",
    search_placeholder: "🔍 ابحث بالعربي أو الألماني...",
    header_title: "🇩🇪 الأفعال والمفردات الألمانية A1 - A2.2",
    header_subtitle: "منصة شاملة للمذاكرة والتحضير للامتحانات",
    check: "✔️ تحقق", next: "التالي ➡️", prev: "← السابق", skip: "⏭️ تخطي",
    show_answer: "👁️ إظهار الإجابة", listen: "🔊 استمع", restart: "🔄 إعادة من البداية",
    back_to_list: "← العودة للقائمة",
    verb_present: "📘 المضارع", verb_past: "⏳ الماضي البسيط", verb_perfect: "✅ الماضي التام",
    verb_example: "💬 مثال في جملة",
    noun_plural: "📦 الجمع", noun_cases: "📐 الحالات الإعرابية",
    adj_hint: "الصفات تُصرَّف حسب الحالة والجنس والعدد عند استخدامها قبل الاسم، وتبقى بدون تصريف عند استخدامها كخبر.",
    switch_lang: "Deutsch 🇩🇪",
    hide_translation: "إخفاء الترجمة 👁️‍🗨️",
    show_translation: "إظهار الترجمة 👁️"
  },
  de: {
    tab_verbs: "🔤 Verben", tab_nouns: "📦 Nomen", tab_adjectives: "🎨 Adjektive",
    tab_basics: "📚 Grundlagen",
    tab_flashcards: "🧠 Karteikarten", tab_speaking: "🗣️ Sprechen", tab_exercises: "📝 Übungen",
    tab_writing: "✍️ Schreiben", tab_listening: "🎧 Hören", tab_dialogues: "💬 Dialoge",
    tab_progress: "📊 Fortschritt", tab_review: "🎯 Wiederholung",
     tab_favorites: "❤️ Favoriten", tab_lessons: "🎓 Lektionen",
    "tab_grammar-a1": "📖 A1 Grammatik",
     tab_pronunciation: "🗣️ Aussprache",
    tab_rules: "📖 Grammatik",
    tab_reading: "📖 Lesen",
    tab_resources: "📚 Ressourcen",
    filter_all: "Alle", filter_regular: "Regelmäßig", filter_irregular: "Unregelmäßig",
    filter_separable: "Trennbar", filter_reflexive: "Reflexiv",
    filter_dativ: "📌 Dativ", filter_sein: "✈️ sein",
    search_placeholder: "🔍 Suche auf Arabisch oder Deutsch...",
    header_title: "🇩🇪 Deutsche Verben und Vokabeln A1 - A2.2",
    header_subtitle: "Umfassende Plattform zum Lernen und Üben",
    check: "✔️ Prüfen", next: "Weiter ➡️", prev: "← Zurück", skip: "⏭️ Überspringen",
    show_answer: "👁️ Antwort zeigen", listen: "🔊 Anhören", restart: "🔄 Von vorne",
    back_to_list: "← Zurück zur Liste",
    verb_present: "📘 Präsens", verb_past: "⏳ Präteritum", verb_perfect: "✅ Perfekt",
    verb_example: "💬 Beispielsatz",
    noun_plural: "📦 Plural", noun_cases: "📐 Fälle",
    adj_hint: "Adjektive werden nach Fall, Geschlecht und Zahl dekliniert, wenn sie vor einem Nomen stehen. Als Prädikat bleiben sie unverändert.",
    switch_lang: "العربية 🇸🇦",
    hide_translation: "Übersetzung ausblenden 👁️‍🗨️",
    show_translation: "Übersetzung anzeigen 👁️"
  }
};

let currentLanguage = localStorage.getItem('app_language') || 'ar';
let translationHidden = localStorage.getItem('translation_hidden') === 'true';

function t(key) { return TRANSLATIONS[currentLanguage][key] || key; }

function switchLanguage() {
  currentLanguage = currentLanguage === 'ar' ? 'de' : 'ar';
  localStorage.setItem('app_language', currentLanguage);
  applyLanguage();
  // إعادة الرسم لتطبيق الإخفاء على العناصر الجديدة
  if (typeof currentTab !== 'undefined' && typeof switchTab === 'function') {
    switchTab(currentTab);
  }
}

function toggleTranslation() {
  translationHidden = !translationHidden;
  localStorage.setItem('translation_hidden', translationHidden);
  updateTranslationButton();
  applyTranslationVisibility();
  if (typeof currentTab !== 'undefined' && typeof switchTab === 'function') {
    switchTab(currentTab);
  }
}

function updateTranslationButton() {
  const btn = document.getElementById('translationToggleBtn');
  if (btn) btn.textContent = translationHidden ? t('show_translation') : t('hide_translation');
}

/**
 * إخفاء/إظهار الترجمة العربية في كل مكان:
 *  - بطاقات القوائم (.card .ar)
 *  - النافذة المنبثقة (.modal-content .ar-translation أو أي عنصر بفئة trans)
 *  - أي عنصر عام بفئة .trans
 */
function applyTranslationVisibility() {
  // 1) بطاقات القوائم
  document.querySelectorAll('.card .ar').forEach(el => {
    el.style.display = translationHidden ? 'none' : 'block';
  });

  // 2) عناصر الترجمة داخل المودال (ندعم الفئات الثلاثة الشائعة)
  document.querySelectorAll('.modal-content .ar, .modal-content .arabic, .modal-content .ar-translation, .modal-content .trans').forEach(el => {
    el.style.display = translationHidden ? 'none' : 'block';
  });

  // 3) أي عنصر عام بفئة .trans (مثل الترجمة داخل البطاقات التعليمية والتمارين)
  document.querySelectorAll('.trans').forEach(el => {
    el.style.display = translationHidden ? 'none' : 'block';
  });
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

  // العنوان والوصف
  const headerTitle = document.querySelector('header h1');
  const headerSubtitle = document.querySelector('header p');
  if (headerTitle) headerTitle.textContent = t('header_title');
  if (headerSubtitle) headerSubtitle.textContent = t('header_subtitle');

  // زر تبديل اللغة
  const langBtn = document.getElementById('langSwitchBtn');
  if (langBtn) langBtn.textContent = t('switch_lang');

  // زر الترجمة
  updateTranslationButton();

  // ✅ تصحيح: استخدام data-tab بدلاً من الترتيب (لأن الترتيب قد يختلف)
  document.querySelectorAll('.tab').forEach(btn => {
    const key = btn.getAttribute('data-tab');
    if (key) btn.textContent = t('tab_' + key);
  });

  // ✅ تصحيح: استخدام data-filter بدلاً من الترتيب
  document.querySelectorAll('#verbFilters .filter-btn').forEach(btn => {
    const key = btn.getAttribute('data-filter');
    if (!key) return;
    if (key === 'unregelmäßig') btn.textContent = t('filter_irregular');
    else if (key === 'trennbar') btn.textContent = t('filter_separable');
    else if (key === 'reflexiv') btn.textContent = t('filter_reflexive');
    else if (key === 'dativ') btn.textContent = t('filter_dativ');
    else if (key === 'sein') btn.textContent = t('filter_sein');
    else btn.textContent = t('filter_' + key);
  });

  // مربع البحث
  const searchInput = document.getElementById('search');
  if (searchInput) searchInput.placeholder = t('search_placeholder');
}

// (تمت إزالة آخر سطر لأنه كان معطلاً: originalRenderVerbs)
