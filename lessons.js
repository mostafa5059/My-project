/* ============================================================
   lessons.js — دروس Menschen A2.1
   ============================================================ */

/* ========== محرك توليد البيانات (لتقصير الكود) ========== */
function w(word, ar, topic) {
  let plural = "—", akk = word, dat = word;
  if (word.startsWith("der ")) {
    plural = "die " + word.replace("der ", "");
    akk = "den " + word.replace("der ", "");
    dat = "dem " + word.replace("der ", "");
  } else if (word.startsWith("die ")) {
    plural = "die " + word.replace("die ", "") + "en";
    akk = word;
    dat = "der " + word.replace("die ", "");
  } else if (word.startsWith("das ")) {
    plural = "die " + word.replace("das ", "");
    akk = word;
    dat = "dem " + word.replace("das ", "");
  }
  return { de: word, ar: ar, plural: plural, akk: akk, dat: dat, topic: topic };
}

function v(verb, ar, präsens, präteritum, perfekt, topic, type="regular") {
  return { de: verb, ar: ar, type: type, präsens: präsens, präteritum: präteritum, perfekt: perfekt, partizip: perfekt.split(' ').pop(), topic: topic };
}

function mc(question, options, correctIndex, explanation) {
  return { type: "choose", question: question, options: options, correct: correctIndex, explanation: explanation };
}

const LESSON_LEVELS = [
  { id: "A2.1", label: "📚 Menschen A2.1", available: true },
  { id: "A2.2", label: "📚 Menschen A2.2", available: false },
  { id: "B1", label: "📚 Menschen B1", available: false }
];

let currentLessonLevel = "A2.1";
let currentLessonId = null;

const LESSONS = [
  /* ============ Lektion 1 ============ */
  {
    id: "M2-01", level: "A2.1", title: "Mein Opa war auch schon Bäcker", titleAr: "جدي كان خبازاً أيضاً", topic: "عائلة ومهن", emoji: "👨‍🍳",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    text: `Paul und Franka backen mit ihrem Großvater Brezeln. Paul findet es am Anfang kompliziert, aber sein Opa hilft ihm. Am Ende klappt es gut. Der Großvater erzählt: "Ich bin Opa. Aber das auf dem Foto, das war Opa. Ich habe auch einen Opa gehabt, und der war auch schon Bäcker."`,
    textAr: `بول وفرانكا يخبزان مع جدهما كعك البريتزل. يجد بول الأمر معقداً في البداية، لكن جده يساعده. في النهاية ينجح الأمر. يحكي الجد: "أنا الجد. لكن الذي في الصورة كان جدي. أنا أيضاً كان لي جد، وكان هو الآخر خبازاً."`,
    words: ["der Großvater", "der Bäcker", "die Familie", "der Beruf", "backen", "arbeiten", "erzählen"],
    newWords: [
      w("der Cousin", "ابن العم", "عائلة"), w("die Cousine", "ابنة العم", "عائلة"), w("der Neffe", "ابن الأخ", "عائلة"), w("die Nichte", "ابنة الأخ", "عائلة"), w("der Onkel", "العم / الخال", "عائلة"), w("die Tante", "العمة / الخالة", "عائلة"), w("der Schwiegersohn", "زوج الابنة", "عائلة"), w("die Schwiegertochter", "زوجة الابن", "عائلة"), w("der Schwiegervater", "الحمو", "عائلة"), w("die Schwiegermutter", "الحماة", "عائلة"), w("das Enkelkind", "الحفيد", "عائلة"), w("die Bäckerei", "مخبز", "مهن"), w("die Brezel", "كعكة البريتزل", "طعام"), w("der Teig", "العجين", "طعام"), w("die Kindheit", "الطفولة", "حياة"), w("die Jugend", "الشباب", "حياة"), w("die Geschichte", "القصة / التاريخ", "حياة"), w("die Erinnerung", "الذكرى", "حياة"), w("der Flohmarkt", "سوق البرغوث", "حياة"), w("die Puppe", "الدمية", "حياة"), w("der Witz", "النكتة", "حياة"), w("die Mannschaft", "الفريق", "رياضة"), w("der Anfang", "البداية", "حياة"), w("das Ende", "النهاية", "حياة"), w("der Schluss", "الختام", "حياة"), w("die Sache", "الشيء", "حياة"), w("das Spiel", "اللعبة", "حياة"), w("die Zigarette", "السجارة", "حياة"), w("der Pfeffer", "الفلفل", "طعام"), w("der Punkt", "النقطة", "حياة"), w("der Satz", "الجملة", "لغة"), w("das Studium", "الدراسة الجامعية", "دراسة"),
      v("klettern", "يتسلق", ["klettere","kletterst","klettert","klettern","klettert","klettern"], "kletterte", "ist geklettert", "حركة"), v("sammeln", "يجمع", ["sammle","sammelst","sammelt","sammeln","sammelt","sammeln"], "sammelte", "hat gesammelt", "حياة"), v("streiten", "يتشاجر", ["streite","streitest","streitet","streiten","streitet","streiten"], "stritt", "hat gestritten", "تواصل", "unregelmäßig"), v("übernachten", "يبيت", ["übernachte","übernachtest","übernachtet","übernachten","übernachtet","übernachten"], "übernachtete", "hat übernachtet", "سفر"), v("verkaufen", "يبيع", ["verkaufe","verkaufst","verkauft","verkaufen","verkauft","verkaufen"], "verkaufte", "hat verkauft", "تسوق"), v("zeichnen", "يرسم", ["zeichne","zeichnest","zeichnet","zeichnen","zeichnet","zeichnen"], "zeichnete", "hat gezeichnet", "فن"), v("aufmachen", "يفتح", ["mache auf","machst auf","macht auf","machen auf","macht auf","machen auf"], "machte auf", "hat aufgemacht", "منزل", "trennbar"), v("aufpassen", "ينتبه", ["passe auf","passt auf","passt auf","passen auf","passt auf","passen auf"], "passte auf", "hat aufgepasst", "حياة", "trennbar"), v("klappen", "ينجح", ["klappe","klappst","klappt","klappen","klappt","klappen"], "klappte", "hat geklappt", "حياة"), v("passieren", "يحدث", ["passiere","passierst","passiert","passieren","passiert","passieren"], "passierte", "ist passiert", "حياة"), v("rufen", "ينادي", ["rufe","rufst","ruft","rufen","ruft","rufen"], "rief", "hat gerufen", "تواصل", "unregelmäßig"), v("wachsen", "ينمو", ["wachse","wächst","wächst","wachsen","wachst","wachsen"], "wuchs", "ist gewachsen", "حياة", "unregelmäßig"),
      w("verrückt", "مجنون", "صفات"), w("früher", "سابقاً", "صفات"), w("einfach", "بسيط", "صفات"), w("fleißig", "مجتهد", "صفات"), w("geschlossen", "مغلق", "صفات"), w("kompliziert", "معقد", "صفات"), w("zuerst", "أولاً", "ظروف"), w("zum Schluss", "في الختام", "ظروف"), w("am Anfang", "في البداية", "ظروف"), w("am Ende", "في النهاية", "ظروف")
    ],
    grammar: {
      title: "Possessivartikel unser/euer + Perfekt + Präteritum", titleAr: "ضمائر الملكية unser/euer + الماضي التام + الماضي البسيط",
      explanation: `<h4>1) Possessivartikel: unser / euer (ضمائر الملكية)</h4><p>تُستخدم للتعبير عن الملكية. تأخذ نفس نهايات أدوات التعريف (der/die/das).</p><table><tr><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr><tr><td>unser Opa</td><td>unseren Opa</td><td>unserem Opa</td></tr><tr><td>unser Baby</td><td>unser Baby</td><td>unserem Baby</td></tr><tr><td>unsere Tante</td><td>unsere Tante</td><td>unserer Tante</td></tr><tr><td>unsere Neffen</td><td>unsere Neffen</td><td>unseren Neffen</td></tr></table><p>مثل: mein-, dein-, sein-, ihr-, unser-, eu(e)r-, ihr-, Ihr-</p><div class="grammar-tip">💡 مع euer: عند إضافة نهاية، تُحذف الـ e (euer → eure، euer → euren).</div><h4>2) Perfekt (الماضي التام)</h4><p>يُستخدم للتعبير عن أحداث في الماضي. يتكون من: <strong>haben/sein + Partizip II</strong>.</p><ul><li>machen → hat gemacht</li><li>fahren → ist gefahren</li><li>anmachen → hat angemacht</li><li>telefonieren → hat telefoniert</li><li>erkennen → hat erkannt</li></ul><h4>3) Präteritum von sein und haben</h4><table><tr><th>Pronomen</th><th>sein</th><th>haben</th></tr><tr><td>ich</td><td>war</td><td>hatte</td></tr><tr><td>du</td><td>warst</td><td>hattest</td></tr><tr><td>er/sie/es</td><td>war</td><td>hatte</td></tr><tr><td>wir</td><td>waren</td><td>hatten</td></tr><tr><td>ihr</td><td>wart</td><td>hattet</td></tr><tr><td>sie/Sie</td><td>waren</td><td>hatten</td></tr></table><div class="grammar-tip">💡 Präteritum يُستخدم في السرد والكتابة، بينما Perfekt في المحادثة اليومية.</div>`
    },
    exercises: [
      mc("___ Opa war Bäcker. (نحن)", ["Unser", "Unserer", "Unserem", "Unseren"], 0, "Nominativ مذكر → unser Opa."), mc("Ich sehe ___ Tante. (نحن)", ["unsere", "unserer", "unseren", "unserem"], 0, "Akkusativ مؤنث → unsere Tante."), mc("Was ___ du gestern gemacht? (Perfekt)", ["hast", "bist", "hat", "ist"], 0, "معظم الأفعال تأخذ haben → hast gemacht."), mc("Wir ___ nach Berlin gefahren. (Perfekt)", ["sind", "haben", "seid", "hat"], 0, "fahren فعل حركة → sein → sind gefahren."), mc("Früher ___ ich viel Zeit. (Präteritum von haben)", ["hatte", "habe", "hat", "hatten"], 0, "ich + hatte (Präteritum)."), mc("Mein Onkel ___ sehr lustig. (Präteritum von sein)", ["war", "ist", "waren", "bin"], 0, "er + war (Präteritum).")
    ]
  },

  /* ============ Lektion 2 ============ */
  {
    id: "M2-02", level: "A2.1", title: "Wohin mit der Kommode?", titleAr: "إلى أين نضع الخزانة؟", topic: "سكن وأثاث", emoji: "🪑",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    text: `Nina und Tom ziehen in eine neue Wohnung. Die Möbel stehen schon im Flur, aber sie wissen nicht, wohin sie sie stellen sollen. "Wohin kommt die Kommode?", fragt Tom. "Stell sie doch ins Schlafzimmer, neben das Bett", antwortet Nina. "Und wohin mit dem Regal?" — "Das Regal hängen wir an die Wand über den Schreibtisch." Am Ende steht alles am richtigen Platz, und die Wohnung sieht gemütlich aus.`,
    textAr: `نينا وتوم ينتقلان إلى شقة جديدة. الأثاث يقف بالفعل في المدخل، لكنهما لا يعرفان أين يضعانه. يسأل توم: "إلى أين تذهب الخزانة؟" تجيب نينا: "ضعها في غرفة النوم، بجانب السرير." "وإلى أين نضع الرفوف؟" — "نعلّق الرفوف على الحائط فوق المكتب." في النهاية كل شيء في مكانه الصحيح، والشقة تبدو مريحة.`,
    words: ["die Kommode", "der Schrank", "das Regal", "das Sofa", "der Schreibtisch", "die Wand", "stellen", "hängen"],
    newWords: [
      w("die Wohnung", "الشقة", "سكن"), w("das Zimmer", "الغرفة", "سكن"), w("das Schlafzimmer", "غرفة النوم", "سكن"), w("das Wohnzimmer", "غرفة المعيشة", "سكن"), w("die Küche", "المطبخ", "سكن"), w("das Bad", "الحمام", "سكن"), w("der Flur", "المدخل / الردهة", "سكن"), w("der Balkon", "الشرفة", "سكن"), w("die Kommode", "الخزانة (أدراج)", "أثاث"), w("der Schrank", "الخزانة (ملابس)", "أثاث"), w("das Regal", "الرفوف", "أثاث"), w("das Bett", "السرير", "أثاث"), w("das Sofa", "الأريكة", "أثاث"), w("der Tisch", "الطاولة", "أثاث"), w("der Stuhl", "الكرسي", "أثاث"), w("der Schreibtisch", "مكتب الكتابة", "أثاث"), w("die Lampe", "المصباح", "أثاث"), w("der Teppich", "السجادة", "أثاث"), w("das Bild", "الصورة", "ديكور"), w("die Wand", "الحائط", "سكن"), w("die Decke", "السقف", "سكن"), w("der Boden", "الأرضية", "سكن"), w("die Ecke", "الزاوية", "سكن"), w("die Tür", "الباب", "سكن"), w("das Fenster", "النافذة", "سكن"), w("der Umzug", "الانتقال", "سكن"), w("die Möbel", "الأثاث", "أثاث"), w("der Platz", "المكان", "سكن"),
      w("gemütlich", "مريح / دافئ", "صفات"), w("neben", "بجانب", "حروف جر"), w("über", "فوق", "حروف جر"), w("unter", "تحت", "حروف جر"), w("vor", "أمام", "حروف جر"), w("hinter", "خلف", "حروف جر"), w("zwischen", "بين", "حروف جر"), w("an", "على (ملاصق)", "حروف جر"), w("auf", "على", "حروف جر"), w("in", "في / داخل", "حروف جر"),
      v("stellen", "يضع (أفقياً)", ["stelle","stellst","stellt","stellen","stellt","stellen"], "stellte", "hat gestellt", "حركة"), v("legen", "يضع (منبطحاً)", ["lege","legst","legt","legen","legt","legen"], "legte", "hat gelegt", "حركة"), v("hängen", "يعلّق", ["hänge","hängst","hängt","hängen","hängt","hängen"], "hängte", "hat gehängt", "حركة"), v("stehen", "يقف", ["stehe","stehst","steht","stehen","steht","stehen"], "stand", "hat gestanden", "موقع", "unregelmäßig"), v("liegen", "يستلقي", ["liege","liegst","liegt","liegen","liegt","liegen"], "lag", "hat gelegen", "موقع", "unregelmäßig"), v("einziehen", "ينتقل للسكن", ["ziehe ein","ziehst ein","zieht ein","ziehen ein","zieht ein","ziehen ein"], "zog ein", "ist eingezogen", "سكن", "trennbar")
    ],
    grammar: {
      title: "Wechselpräpositionen: Wohin? + Akkusativ / Wo? + Dativ", titleAr: "حروف الجر المتغيرة: إلى أين؟ + Akkusativ / أين؟ + Dativ",
      explanation: `<h4>1) ما هي Wechselpräpositionen؟</h4><p>هي 9 حروف جر تأخذ <strong>Akkusativ</strong> عند التعبير عن <strong>الحركة (Wohin?)</strong>، و<strong>Dativ</strong> عند التعبير عن <strong>الموقع الثابت (Wo?)</strong>.</p><table><tr><th>الحرف</th><th>المعنى</th></tr><tr><td>in</td><td>في</td></tr><tr><td>an</td><td>على (ملاصق)</td></tr><tr><td>auf</td><td>على</td></tr><tr><td>über</td><td>فوق</td></tr><tr><td>unter</td><td>تحت</td></tr><tr><td>vor</td><td>أمام</td></tr><tr><td>hinter</td><td>خلف</td></tr><tr><td>neben</td><td>بجانب</td></tr><tr><td>zwischen</td><td>بين</td></tr></table><h4>2) القاعدة الأساسية</h4><table><tr><th>السؤال</th><th>الحالة</th><th>مثال</th></tr><tr><td>Wohin? (إلى أين؟)</td><td><strong>Akkusativ</strong></td><td>Ich stelle die Kommode <strong>ins</strong> Schlafzimmer.</td></tr><tr><td>Wo? (أين؟)</td><td><strong>Dativ</strong></td><td>Die Kommode steht <strong>im</strong> Schlafzimmer.</td></tr></table><div class="grammar-tip">💡 اختصار: <strong>in + das = ins</strong>، <strong>in + dem = im</strong>، <strong>an + das = ans</strong>، <strong>an + dem = am</strong>.</div><h4>3) أدوات التعريف في الحالتين</h4><table><tr><th>الجنس</th><th>Nominativ</th><th>Akkusativ (Wohin?)</th><th>Dativ (Wo?)</th></tr><tr><td>مذكر</td><td>der</td><td><strong>den</strong></td><td><strong>dem</strong></td></tr><tr><td>مؤنث</td><td>die</td><td>die</td><td><strong>der</strong></td></tr><tr><td>محايد</td><td>das</td><td>das</td><td><strong>dem</strong></td></tr><tr><td>جمع</td><td>die</td><td>die</td><td><strong>den</strong> (+n)</td></tr></table><h4>4) أفعال الحركة (Wohin? → Akkusativ)</h4><ul><li><strong>stellen</strong> (يضع أفقياً) — Ich stelle den Tisch <strong>in die</strong> Küche.</li><li><strong>legen</strong> (يضع منبطحاً) — Ich lege das Buch <strong>auf den</strong> Tisch.</li><li><strong>hängen</strong> (يعلّق) — Ich hänge das Bild <strong>an die</strong> Wand.</li><li><strong>setzen</strong> (يجلس شخصاً) — Ich setze das Kind <strong>auf den</strong> Stuhl.</li></ul><h4>5) أفعال الموقع الثابت (Wo? → Dativ)</h4><ul><li><strong>stehen</strong> (يقف) — Der Tisch steht <strong>in der</strong> Küche.</li><li><strong>liegen</strong> (يستلقي) — Das Buch liegt <strong>auf dem</strong> Tisch.</li><li><strong>hängen</strong> (معلّق) — Das Bild hängt <strong>an der</strong> Wand.</li><li><strong>sitzen</strong> (يجلس) — Das Kind sitzt <strong>auf dem</strong> Stuhl.</li></ul><div class="grammar-tip">⚠️ لاحظ: <strong>hängen</strong> يمكن أن يأخذ Akkusativ (فعل حركة) أو Dativ (فعل موقع) حسب السياق — Ich hänge (Akk) vs Das Bild hängt (Dat).</div><h4>6) أمثلة من الدرس</h4><ul><li>Wohin kommt die Kommode? — Stell sie <strong>ins</strong> Schlafzimmer, <strong>neben das</strong> Bett.</li><li>Wohin mit dem Regal? — Wir hängen das Regal <strong>an die</strong> Wand <strong>über den</strong> Schreibtisch.</li><li>Wo steht die Kommode? — Sie steht <strong>im</strong> Schlafzimmer, <strong>neben dem</strong> Bett.</li></ul>`
    },
    exercises: [
      mc("Ich stelle die Kommode ___ Schlafzimmer. (Wohin?)", ["ins", "im", "in der", "in dem"], 0, "Wohin? → Akkusativ → in + das = ins."), mc("Die Kommode steht ___ Schlafzimmer. (Wo?)", ["im", "ins", "in die", "in den"], 0, "Wo? → Dativ → in + dem = im."), mc("Wir hängen das Bild ___ Wand. (Wohin?)", ["an die", "an der", "auf die", "in die"], 0, "Wohin? → Akkusativ. Wand مؤنث → an die Wand."), mc("Das Bild hängt ___ Wand. (Wo?)", ["an der", "an die", "auf der", "in der"], 0, "Wo? → Dativ. Wand مؤنث → an der Wand."), mc("Wohin legst du das Buch? — Ich lege es ___ Tisch.", ["auf den", "auf dem", "auf der", "auf das"], 0, "Wohin? + Tisch مذكر → Akkusativ → auf den Tisch."), mc("Wo liegt das Buch? — Es liegt ___ Tisch.", ["auf dem", "auf den", "auf der", "auf die"], 0, "Wo? + Tisch مذكر → Dativ → auf dem Tisch.")
    ]
  },

   /* ============ Lektion 3 ============ */
  {
    id: "M2-03",
    level: "A2.1",
    title: "Hier finden Sie Ruhe und Erholung",
    titleAr: "هنا تجدون الهدوء والاسترخاء",
    topic: "سفر وطبيعة",
    emoji: "🏖️",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    text: `Zu viel Stress? Alles zu schnell? Stopp! Hier finden Sie Ruhe, Entspannung und Erholung. Auf dem Öko-Wellness-Bauernhof von Johanna und Theresia Lindthaler gehen die Uhren anders. Bei uns gibt es keine Termine. Hier muss nichts schnell gehen. Sie dürfen langsam sein. Wandern Sie über hellgrüne Wiesen, durch dunkelgrüne Wälder. Hier auf dem Lindthaler Hof ist die Welt noch in Ordnung.`,
    textAr: `الكثير من التوتر؟ كل شيء سريع جداً؟ توقف! هنا تجدون الهدوء والاسترخاء والراحة. في مزرعة العافية العضوية الخاصة بجوانا وتيريزيا ليندثالر، تسير الساعات بشكل مختلف. ليس لدينا مواعيد هنا. لا شيء يجب أن يكون سريعاً هنا. يُسمح لك أن تكون بطيئاً. تمشَّ عبر المروج الخضراء الفاتحة، وعبر الغابات الخضراء الداكنة. هنا في مزرعة ليندثالر، لا يزال العالم على ما يرام.`,
    words: ["die Ruhe", "die Erholung", "die Entspannung", "der Stress", "wandern", "die Wiese", "der Wald"],
    newWords: [
      w("die Ruhe", "الهدوء", "طبيعة"),
      w("die Erholung", "الاسترخاء", "طبيعة"),
      w("die Entspannung", "الاسترخاء / الراحة", "طبيعة"),
      w("der Stress", "التوتر", "حياة"),
      w("der Bauernhof", "المزرعة", "سفر"),
      w("die Wiese", "المرج", "طبيعة"),
      w("der Wald", "الغابة", "طبيعة"),
      w("der Berg", "الجبل", "طبيعة"),
      w("der See", "البحيرة", "طبيعة"),
      w("der Fluss", "النهر", "طبيعة"),
      w("das Meer", "البحر", "طبيعة"),
      w("der Strand", "الشاطئ", "طبيعة"),
      w("die Landschaft", "المنظر الطبيعي", "طبيعة"),
      w("die Stadt", "المدينة", "أماكن"),
      w("das Dorf", "القرية", "أماكن"),
      w("der Ort", "المكان", "أماكن"),
      w("die Natur", "الطبيعة", "طبيعة"),
      w("die Region", "المنطقة", "جغرافيا"),
      w("die Grenze", "الحدود", "جغرافيا"),
      w("der Urlaub", "العطلة", "سفر"),
      w("die Reise", "الرحلة", "سفر"),
      w("das Angebot", "العرض", "تسوق"),
      w("der Termin", "الموعد", "حياة"),
      w("die Erfahrung", "الخبرة", "عمل"),
      w("der Wanderer", "المُشاة", "سفر"),
      w("die Beratung", "الاستشارة", "عمل"),
      w("die Bewegung", "الحركة", "رياضة"),
      w("die Übernachtung", "المبيت", "سفر"),
      w("die Anmeldung", "التسجيل", "عمل"),
      w("das Erlebnis", "التجربة", "حياة"),
      w("die Unterkunft", "مكان الإقامة", "سفر"),
      
      v("wandern", "يمشي لمسافات طويلة", ["wandere","wanderst","wandert","wandern","wandert","wandern"], "wanderte", "ist gewandert", "سفر"),
      v("erfahren", "يختبر / يعلم", ["erfahre","erfährst","erfährt","erfahren","erfahrt","erfahren"], "erfuhr", "hat erfahren", "حياة", "unregelmäßig"),
      v("sich entspannen", "يسترخي", ["entspanne mich","entspannst dich","entspannt sich","entspannen uns","entspannt euch","entspannen sich"], "entspannte sich", "hat sich entspannt", "حياة", "reflexiv"),
      v("sich erholen", "يستريح", ["erhole mich","erholst dich","erholt sich","erholen uns","erholt euch","erholen sich"], "erholte sich", "hat sich erholt", "حياة", "reflexiv"),
      v("buchen", "يحجز", ["buche","buchst","bucht","buchen","bucht","buchen"], "buchte", "hat gebucht", "سفر"),
      v("übernachten", "يبيت", ["übernachte","übernachtest","übernachtet","übernachten","übernachtet","übernachten"], "übernachtete", "hat übernachtet", "سفر"),
      v("sich anmelden", "يسجل", ["melde mich an","meldest dich an","meldet sich an","melden uns an","meldet euch an","melden sich an"], "meldete sich an", "hat sich angemeldet", "عمل", "trennbar"),
      v("beraten", "يقدم المشورة", ["berate","berätst","berät","beraten","beratet","beraten"], "beriet", "hat beraten", "عمل", "unregelmäßig"),
      v("organisieren", "ينظم", ["organisiere","organisierst","organisiert","organisieren","organisiert","organisieren"], "organisierte", "hat organisiert", "عمل"),
      
      w("hellgrün", "أخضر فاتح", "ألوان"),
      w("dunkelgrün", "أخضر داكن", "ألوان"),
      w("ruhig", "هادئ", "صفات"),
      w("schnell", "سريع", "صفات"),
      w("langsam", "بطيء", "صفات"),
      w("sympathisch", "لطيف / محبب", "صفات"),
      w("aktiv", "نشط", "صفات"),
      w("sportlich", "رياضي", "صفات"),
      w("draußen", "في الخارج", "ظروف"),
      w("endlich", "أخيراً", "ظروف"),
      w("unterwegs", "في الطريق", "ظروف")
    ],
    grammar: {
      title: "Wortbildung: Verb → Nomen (تكوين الأسماء من الأفعال)",
      titleAr: "كيف نحول الفعل إلى اسم؟ (إضافة -er أو -ung)",
      explanation: `
        <h4>1) Verb + -er → Nomen (الفاعل)</h4>
        <p>عند إضافة <strong>-er</strong> إلى الفعل، نحصل على اسم يدل على <strong>الشخص الذي يقوم بالفعل</strong> (مذكر غالباً).</p>
        <ul>
          <li>wandern (يمشي) ➔ der Wander<strong>er</strong> (المُشاة)</li>
          <li>fahren (يسافر) ➔ der Fahr<strong>er</strong> (السائق)</li>
          <li>arbeiten (يعمل) ➔ der Arbeit<strong>er</strong> (العامل)</li>
          <li>singen (يغني) ➔ der Säng<strong>er</strong> (المغني)</li>
        </ul>
        <div class="grammar-tip">💡 لاحظ: بعض الأفعال تتغير فيها حركة الجذر (مثل: singen ➔ Sänger)، والبعض الآخر يبقى كما هو (مثل: wandern ➔ Wanderer).</div>

        <h4>2) Verb + -ung → Nomen (الحدث / النتيجة)</h4>
        <p>عند إضافة <strong>-ung</strong> إلى الفعل، نحصل على اسم مؤنث (die) يدل على <strong>الحدث أو النتيجة</strong>.</p>
        <ul>
          <li>erfahren (يختبر) ➔ die Erfahr<strong>ung</strong> (الخبرة)</li>
          <li>beraten (ينصح) ➔ die Berat<strong>ung</strong> (الاستشارة)</li>
          <li>bestellen (يطلب) ➔ die Bestell<strong>ung</strong> (الطلب)</li>
          <li>organisieren (ينظم) ➔ die Organisier<strong>ung</strong> (التنظيم)</li>
        </ul>
        <div class="grammar-tip">💡 لاحظ: جميع الأسماء التي تنتهي بـ -ung هي أسماء مؤنثة (die).</div>

        <h4>3) أمثلة من الدرس:</h4>
        <ul>
          <li>der Wanderer (من wandern) — المُشاة</li>
          <li>die Erfahrung (من erfahren) — الخبرة</li>
          <li>die Beratung (من beraten) — الاستشارة</li>
          <li>die Übernachtung (من übernachten) — المبيت</li>
          <li>die Anmeldung (من anmelden) — التسجيل</li>
        </ul>
      `
    },
    exercises: [
      mc("wandern ➔ der ___", ["Wanderer", "Wanderung", "Wandern", "Gewander"], 0, "الفاعل (الشخص الذي يمشي) = Wanderer."),
      mc("erfahren ➔ die ___", ["Erfahrung", "Erfahrer", "Erfahren", "Erfahrenheit"], 0, "الحدث/النتيجة (الخبرة) = Erfahrung."),
      mc("beraten ➔ die ___", ["Beratung", "Berater", "Beraten", "Beratheit"], 0, "الحدث (الاستشارة) = Beratung."),
      mc("Welches Nomen bedeutet 'الشخص الذي يسافر'؟", ["der Fahrer", "die Fahrung", "das Fahren", "die Fahrt"], 0, "الفاعل من fahren هو der Fahrer (السائق)."),
      mc("Welches Nomen bedeutet 'التسجيل'؟", ["die Anmeldung", "der Anmelder", "das Anmelden", "die Anmeldheit"], 0, "الحدث من anmelden هو die Anmeldung."),
      mc("Ich möchte einen Kurs buchen. Ich brauche eine ___.", ["Beratung", "Berater", "Beraten", "Berat"], 0, "تحتاج إلى استشارة (Beratung).")
    ]
  },
   // ==========================================
// Lektion 4: Was darf es sein?
// ==========================================
{
  id: "lektion-4",
  level: "A2.1",
  title: "Was darf es sein?",
  titleAr: "ماذا تأخذ/تريد؟ (التسوق)",
  topic: "تسوق",
   description: "في هذا الدرس نتعلم كيف نتسوق، نطلب الطعام، نعبّر عن الكميات (أوزان وعبوات)، وكيف نصف الأشياء عند الشراء.",
  image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // صورة افتراضية للسوبر ماركت
  imageAlt: "Supermarkt",
  
  // ----------------------------------------------------
  // القاعدة النحوية (Grammar)
  // ----------------------------------------------------
  grammarTitle: "Adjektivdeklination nach indefinitem Artikel (تصريف الصفات بعد أدوات النكرة)",
  grammar: `
    <h4>💡 الفكرة ببساطة:</h4>
    <p>عندما تصف اسماً باستخدام صفة (مثل: <b>حليب بارد</b>)، فإن الصفة تأخذ حرفاً إضافياً في نهايتها (e أو en). هذا الحرف يتغير حسب 3 أشياء:</p>
    <ul>
      <li>1. الحالة الإعرابية (Nominativ, Akkusativ, Dativ).</li>
      <li>2. جنس الاسم (مذكر، مؤنث، محايد).</li>
      <li>3. أداة التعريف التي قبله (ein/eine أو der/die/das).</li>
    </ul>

    <h4>🔹 القاعدة الأساسية (مع أداة النكرة ein/eine):</h4>
    <p>إذا كان الاسم يأخذ أداة نكرة <code>ein</code> أو <code>eine</code>، فإن الصفة تأخذ النهاية <code>-er</code> للمذكر و <code>-es</code> للمحايد، و <code>-e</code> للمؤنث (في حالة الرفع Nominativ).</p>
    <ul>
      <li>مذكر (Nominativ): ein mager<b>er</b> Schinken (لحم خنزير قليل الدسم).</li>
      <li>محايد (Nominativ): ein hell<b>es</b> Brot (خبز فاتح).</li>
      <li>مؤنث (Nominativ): eine grün<b>e</b> Paprika (فلفل أخضر).</li>
    </ul>

    <h4>🔹 في حالة النصب (Akkusativ) - عند الشراء والطلب:</h4>
    <p>عندما نقول "أريد شراء..." (Ich hätte gern...)، نستخدم حالة Akkusativ. هنا المذكر فقط هو الذي يتغير (تصبح الصفة <code>-en</code>)، بينما المحايد والمؤنث يبقيان كما هما.</p>
    <table>
      <tr><th>الجنس</th><th>Nominativ (الرفع)</th><th>Akkusativ (النصب)</th></tr>
      <tr><td>مذكر</td><td>ein mager<b>er</b> Schinken</td><td>einen mager<b>en</b> Schinken</td></tr>
      <tr><td>محايد</td><td>ein hell<b>es</b> Brot</td><td>ein hell<b>es</b> Brot</td></tr>
      <tr><td>مؤنث</td><td>eine grün<b>e</b> Paprika</td><td>eine grün<b>e</b> Paprika</td></tr>
    </table>

    <h4>🔹 في حالة الجر (Dativ) - عند استخدام "مع" (mit):</h4>
    <p>في حالة Dativ، <b>كل</b> الصفات تأخذ النهاية <code>-en</code> بغض النظر عن الجنس.</p>
    <ul>
      <li>mit ein<b>em</b> kalt<b>en</b> Wasser (مع ماء بارد - محايد).</li>
      <li>mit ein<b>er</b> frisch<b>en</b> Milch (مع حليب طازج - مؤنث).</li>
      <li>mit ein<b>em</b> frisch<b>en</b> Fisch (مع سمك طازج - مذكر).</li>
    </ul>

    <h4>🔹 كلمات مهمة للكميات والعبوات:</h4>
    <p>للتحدث عن الكميات نستخدم: <code>ein Kilo</code> (كيلو)، <code>ein Pfund</code> (نصف كيلو/باوند)، <code>ein Liter</code> (لتر)، <code>eine Flasche</code> (زجاجة)، <code>eine Dose</code> (علبة معدنية)، <code>eine Packung</code> (عبوة/باكيت)، <code>ein Glas</code> (برطمان/كأس)، <code>eine Tüte</code> (كيس).</p>
  `,

  // ----------------------------------------------------
  // التمارين التفاعلية (MCQs)
  // ----------------------------------------------------
  exercises: [
    mc("Ich hätte gern einen kalt___ Saft.", ["kalt", "kalte", "kalten", "kalter"], 2, "كلمة Saft مذكر (der Saft)، وفي حالة Akkusativ نضيف -en للصفة."),
    mc("Ich möchte ein frisch___ Brot kaufen.", ["frisch", "frische", "frisches", "frischen"], 2, "كلمة Brot محايدة (das Brot)، وفي حالة Akkusativ تبقى الصفة -es."),
    mc("Ich nehme eine grün___ Paprika.", ["grün", "grüne", "grünes", "grünen"], 1, "كلمة Paprika مؤنث (die Paprika)، وفي حالة Akkusativ تبقى الصفة -e."),
    mc("Was darf es sein? - Ich hätte gern ___ Schinken.", ["einen mageren", "ein magerer", "eine magere", "ein mageres"], 0, "عند الطلب (Akkusativ)، المذكر يأخذ einen + الصفة -en."),
    mc("Wie viel kostet das? - 500 Gramm ____.", ["Wurst", "Würste", "Wursts"], 0, "الوزن (Gramm) يأتي بعده الاسم في حالة مفرد غالباً في سياق الشراء."),
    mc("Ich möchte 2 Flaschen ____ kaufen.", ["Milch", "Milchs", "Milche"], 0, "بعد الكمية والعبوة (Flaschen) يأتي الاسم كما هو."),
    mc("Ich esse morgens ein gekocht___ Ei.", ["gekocht", "gekochtes", "gekochte", "gekochten"], 1, "Ei محايد (das Ei)، حالة Akkusativ، تأخذ الصفة -es."),
    mc("Möchten Sie einen heiß___ Tee?", ["heiß", "heiße", "heißen", "heißer"], 2, "Tee مذكر (der Tee)، حالة Akkusativ، الصفة تأخذ -en."),
  ],

  // ----------------------------------------------------
  // المفردات (Vocabulary)
  // ----------------------------------------------------
  newWords: [
    // الأفعال (Verbs)
    v("einkaufen", "يتسوق", "تسوق", "kaufte ein", "eingekauft"),
    v("kaufen", "يشتري", "تسوق", "kaufte", "gekauft"),
    v("nehmen", "يأخذ", "تسوق", "nahm", "genommen"),
    v("kosten", "يكلف", "تسوق", "kostete", "gekostet"),
    v("möchten", "يرغب/يريد", "تسوق", "wollte", "gewollt"),
    v("funktionieren", "يعمل (جهاز)", "حياة", "funktionierte", "funktioniert"),
    v("anrufen", "يتصل هاتفياً", "تواصل", "rief an", "angerufen"),
    v("essen", "يأكل", "طعام", "aß", "gegessen"),
    
    // الأسماء (Nouns)
    w("der Einkaufszettel", "قائمة المشتريات", "تسوق"),
    w("der Supermarkt", "سوبر ماركت", "تسوق"),
    w("die Kasse", "الكاشير/الصندوق", "تسوق"),
    w("der Kunde", "العميل/الزبون", "تسوق"),
    w("die Kundin", "العميلة/الزبونة", "تسوق"),
    w("der Verkäufer", "البائع", "تسوق"),
    w("die Verkäuferin", "البائعة", "تسوق"),
    w("die Tüte", "كيس", "تسوق"),
    w("die Dose", "علبة (معدنية)", "تسوق"),
    w("die Flasche", "زجاجة", "تسوق"),
    w("das Glas", "برطمان / كوب", "تسوق"),
    w("die Packung", "عبوة / باكيت", "تسوق"),
    w("das Kilo", "كيلوغرام", "تسوق"),
    w("das Gramm", "غرام", "تسوق"),
    w("das Pfund", "باوند (نصف كيلو)", "تسوق"),
    w("der Liter", "لتر", "تسوق"),
    w("der Schinken", "لحم خنزير (هام)", "طعام"),
    w("der Käse", "جبن", "طعام"),
    w("die Wurst", "نقانق / سجق", "طعام"),
    w("der Fisch", "سمك", "طعام"),
    w("das Fleisch", "لحم", "طعام"),
    w("das Brot", "خبز", "طعام"),
    w("das Brötchen", "خبز صغير (كيزر)", "طعام"),
    w("die Milch", "حليب", "طعام"),
    w("die Butter", "زبدة", "طعام"),
    w("die Marmelade", "مربى", "طعام"),
    w("das Ei", "بيضة", "طعام"),
    w("der Apfel", "تفاحة", "طعام"),
    w("die Banane", "موزة", "طعام"),
    w("die Paprika", "فلفل (أخضر/أحمر)", "طعام"),
    w("der Knoblauch", "ثوم", "طعام"),
    w("die Zwiebel", "بصل", "طعام"),
    w("der Saft", "عصير", "طعام"),
    w("der Tee", "شاي", "طعام"),
    w("der Kaffee", "قهوة", "طعام"),
    
    // الصفات (Adjectives) - تستخدم مع القاعدة النحوية
    w("mager", "قليل الدسم", "صفات"),
    w("fettarm", "قليل الدهون", "صفات"),
    w("weich", "طري / لين", "صفات"),
    w("hart", "صلب / قاسي", "صفات"),
    w("hell", "فاتح", "صفات"),
    w("dunkel", "غامق / داكن", "صفات"),
    w("lecker", "لذيذ", "صفات"),
    w("teuer", "غالي", "صفات"),
    w("günstig", "رخيص / مناسب", "صفات"),
    w("frisch", "طازج", "صفات"),
    w("gekocht", "مسلوق / مطبوخ", "صفات"),
    w("roh", "نيء", "صفات")
  ]
},
   // ==========================================
// Lektion 5: Schaut mal, der schöne Dom!
// ==========================================
{
  id: "lektion-5",
  level: "A2.1",
  title: "Schaut mal, der schöne Dom!",
  titleAr: "انظروا، الكاتدرائية الجميلة! (السياحة)",
  topic: "سفر", // هذا الموضوع موجود في بطاقاتك الملونة
  description: "في هذا الدرس نتعلم كيف نتحدث عن السياحة، نخطط لعطلة نهاية الأسبوع، نكتب بطاقة بريدية، وكيف نصف الأشياء باستخدام أدوات التعريف.",
  image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80", // صورة كولونيا/الكاتدرائية
  
  // ----------------------------------------------------
  // قطعة الدرس (Lesetext) - تم استخراجها من الصورة 3
  // ----------------------------------------------------
  text: `
    <p><b>Mein lieber Paul,</b></p>
    <p>nun sind wir also in schönen Köln angekommen. Der berühmte Dom ist wirklich sehenswert. Wir haben eine Führung gemacht. Sogar Charlotte hat mitgemacht und dem netten Reiseführer ein Loch in den Bauch gefragt. Das bunte Richter-Fenster hat mir nicht so gut gefallen. Es ist mir zu abstrakt. Besonders gut haben mir das Römisch-Germanische Museum und das Museum Ludwig gefallen. Du siehst: Wir haben schon viele Sehenswürdigkeiten besichtigt. Aber der Höhepunkt wartet noch auf uns: eine Schifffahrt auf dem Rhein! Das wird bestimmt toll. Denn du weißt ja: Eine Rheinfahrt, die ist lustig, eine Rheinfahrt, die ist schön...</p>
    <p><b>Liebe Grüße</b><br>Deine Jutta</p>
  `,
  
  // ----------------------------------------------------
  // القاعدة النحوية (Grammar) - تصريف الصفات مع أدوات التعريف
  // ----------------------------------------------------
  grammarTitle: "Adjektivdeklination nach definitem Artikel (تصريف الصفات مع أدوات التعريف)",
  grammar: `
    <h4>💡 الفكرة ببساطة:</h4>
    <p>عندما نستخدم أداة التعريف (der, die, das)، فإن الصفة تأخذ نهاية مختلفة عن أداة النكرة (ein/eine). القاعدة هنا تعتمد على الحالة الإعرابية (Nominativ, Akkusativ, Dativ).</p>

    <h4>🔹 1. حالة الرفع (Nominativ):</h4>
    <p>الصفة تأخذ دائماً النهاية <code>-e</code> بغض النظر عن الجنس.</p>
    <ul>
      <li>der berühmt<b>e</b> Dom (الكاتدرائية الشهيرة - مذكر)</li>
      <li>das bunt<b>e</b> Fenster (النافذة الملونة - محايد)</li>
      <li>die neu<b>e</b> Kamera (الكاميرا الجديدة - مؤنث)</li>
    </ul>

    <h4>🔹 2. حالة النصب (Akkusativ):</h4>
    <p>المذكر فقط هو الذي يتغير (تأخذ الصفة <code>-en</code>)، بينما المؤنث والمحايد يبقيان <code>-e</code>.</p>
    <table>
      <tr><th>الجنس</th><th>Nominativ</th><th>Akkusativ</th></tr>
      <tr><td>مذكر</td><td>der berühmt<b>e</b> Dom</td><td>den berühmt<b>en</b> Dom</td></tr>
      <tr><td>محايد</td><td>das bunt<b>e</b> Fenster</td><td>das bunt<b>e</b> Fenster</td></tr>
      <tr><td>مؤنث</td><td>die neu<b>e</b> Kamera</td><td>die neu<b>e</b> Kamera</td></tr>
    </table>

    <h4>🔹 3. حالة الجر (Dativ):</h4>
    <p>في حالة Dativ، <b>كل</b> الصفات تأخذ النهاية <code>-en</code>.</p>
    <ul>
      <li>mit dem nett<b>en</b> Reiseführer (مع المرشد السياحي اللطيف)</li>
      <li>mit dem bunt<b>en</b> Fenster</li>
      <li>mit der neu<b>en</b> Kamera</li>
    </ul>
  `,

  // ----------------------------------------------------
  // التمارين (Exercises)
  // ----------------------------------------------------
  exercises: [
    mc("Ich finde den berühmt___ Dom sehr schön.", ["berühmt", "berühmte", "berühmten", "berühmter"], 2, "كلمة Dom مذكر، حالة Akkusativ، الصفة تأخذ -en."),
    mc("Das ist ein bunt___ Fenster.", ["bunt", "bunte", "buntes", "bunten"], 2, "كلمة Fenster محايد، حالة Nominativ (أو Akkusativ)، الصفة تأخذ -es."),
    mc("Mit dem nett___ Reiseführer macht die Tour Spaß.", ["nett", "nette", "netten", "netter"], 2, "حالة Dativ (mit dem)، الصفة تأخذ -en."),
    mc("Die neu___ Kamera ist sehr teuer.", ["neu", "neue", "neues", "neuen"], 1, "كلمة Kamera مؤنث، حالة Nominativ، الصفة تأخذ -e."),
    mc("Ich besichtige die alt___ Kirche.", ["alt", "alte", "altes", "alten"], 1, "كلمة Kirche مؤنث، حالة Akkusativ (die)، الصفة تأخذ -e."),
    mc("Welche Sehenswürdigkeit ist wirklich sehenswert? - Der berühmt___ Dom.", ["berühmt", "berühmte", "berühmten"], 1, "كلمة Dom مذكر، حالة Nominativ، الصفة تأخذ -e."),
  ],

  // ----------------------------------------------------
  // المفردات (Vocabulary)
  // ----------------------------------------------------
  newWords: [
    // الأفعال
    v("besichtigen", "يزور/يتفقد (معالم)", "سفر", "besichtigte", "besichtigt"),
    v("gefallen", "يعجب", "تسوق", "gefiel", "gefallen"),
    v("buchen", "يحجز", "سفر", "buchte", "gebucht"),
    v("mitmachen", "يشارك", "سفر", "machte mit", "mitgemacht"),
    v("überlegen", "يفكر/يتدبر", "حياة", "überlegte", "überlegt"),
    v("empfehlen", "ينصح/يوصي", "تواصل", "empfahl", "empfohlen"),
    v("aussteigen", "ينزل من (مركبة)", "حركة", "stieg aus", "ausgestiegen"),
    v("schreiben", "يكتب", "تواصل", "schrieb", "geschrieben"),
    v("sich ärgern", "يغضب/ينزعج", "مشاعر", "ärgerte sich", "geärgert"),
    v("besichtigen", "يزور", "سفر", "besichtigte", "besichtigt"),

    // الأسماء
    w("der Dom", "الكاتدرائية", "سفر"),
    w("der Reiseführer", "المرشد السياحي / دليل السفر", "سفر"),
    w("die Sehenswürdigkeit", "المعلم السياحي / الأثر", "سفر"),
    w("die Führung", "الجولة الإرشادية", "سفر"),
    w("die Schifffahrt", "رحلة بالقارب", "سفر"),
    w("der Rhein", "نهر الراين", "جغرافيا"),
    w("die Kamera", "الكاميرا", "حياة"),
    w("das Fenster", "النافذة", "منزل"),
    w("der Brief", "الخطاب/الرسالة", "تواصل"),
    w("die Postkarte", "البطاقة البريدية", "تواصل"),
    w("die E-Mail", "البريد الإلكتروني", "تواصل"),
    w("die Nachricht", "الرسالة (القصيرة)", "تواصل"),
    w("der Tourist", "السائح", "سفر"),
    w("die Unterkunft", "مكان الإقامة", "سفر"),
    w("das Trinkgeld", "البقشيش (إكرامية)", "سفر"),
    w("der Höhepunkt", "ذروة/أهم حدث", "سفر"),
    w("die Ausstellung", "المعرض", "فن"),
    w("das Wochenende", "عطلة نهاية الأسبوع", "وقت"),

    // الصفات
    w("berühmt", "شهير", "صفات"),
    w("bunt", "ملون", "صفات"),
    w("sehenswert", "يستحق المشاهدة", "صفات"),
    w("beeindruckend", "مثير للإعجاب", "صفات"),
    w("langweilig", "ممل", "صفات"),
    w("interessant", "مثير للاهتمام", "صفات"),
    w("toll", "رائع", "صفات"),
    w("schick", "أنيق", "صفات")
  ]
},
   // ==========================================
// Lektion 6: Meine Lieblingsveranstaltung
// ==========================================
{
  id: "lektion-6",
  level: "A2.1",
  title: "Meine Lieblingsveranstaltung",
  titleAr: "فعاليتي المفضلة (المناسبات والحفلات)",
  topic: "مناسبات", 
  description: "في هذا الدرس نتعلم كيف نتحدث عن الفعاليات والحفلات، كيف نقترح خططاً على أصدقائنا (وندعوهم أو نعتذر)، وكيف نحدد الفترات الزمنية باستخدام حروف الجر.",
  image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80", // صورة حفل موسيقي
  
  // ----------------------------------------------------
  // قطعة الدرس (Lesetext) - تم دمج القطع الأربعة من الصورة 1
  // ----------------------------------------------------
  text: `
    <h4>Tolle Events in Deutschland, Österreich und in der Schweiz</h4>
    <p>Leserinnen und Leser stellen ihre Lieblingsveranstaltungen im Sommer vor.</p>
    
    <div style="margin-top: 15px; border-right: 4px solid var(--primary); padding-right: 15px;">
      <p><b>A - OPEN AIR FRAUENFELD</b><br>
      Vom 8. bis zum 10. Juli bin ich auf dem Open Air Frauenfeld. Das ist das größte Hip-Hop-Fest in Europa. Es findet seit 1985 jedes Jahr im Sommer statt. Ich bin schon dreimal dort gewesen und habe viele tolle Konzerte erlebt.</p>
      
      <p><b>B - KIELER WOCHE</b><br>
      Nächste Woche fahre ich nach Kiel. Von morgen an findet dort die berühmte Kieler Woche statt. Das ist eines der größten Segelsportereignisse weltweit. Aber neben dem Segeln steht auch die Musik im Mittelpunkt, mit 300 Konzerten auf 16 Bühnen.</p>
      
      <p><b>C - ARS ELECTRONICA</b><br>
      Die Ars Electronica ist das weltweit wichtigste Festival für digitale Kunst. Sie findet seit 1979 jedes Jahr in Linz statt, dieses Jahr vom 31. August bis zum 6. September. Es gibt viele Ausstellungen, Konzerte, Performances und Diskussionsrunden.</p>
      
      <p><b>D - LANDSHUTER HOCHZEIT</b><br>
      Ich liebe historische Feste, mit Musik, Tanz und Originalkostümen. Besonders schön ist die Landshuter Hochzeit. Sie hat die polnische Königs-tochter Hedwig 1475 den bayerischen Herzog Georg geheiratet. Die Hochzeitsfeier hat sechs Tage lang gedauert.</p>
    </div>
  `,
  
  // ----------------------------------------------------
  // القاعدة النحوية (Grammar) - حروف الجر الزمنية
  // ----------------------------------------------------
  grammarTitle: "Temporale Präpositionen (حروف الجر الزمنية)",
  grammar: `
    <h4>💡 الفكرة ببساطة:</h4>
    <p>عندما نريد التحدث عن وقت حدوث شيء ما (من متى؟ إلى متى؟ منذ متى؟)، نستخدم حروف جر معينة تتبعها حالة <b>Dativ</b> أو <b>Akkusativ</b>.</p>

    <h4>🔹 1. لحالات "من ... إلى" و "منذ":</h4>
    <ul>
      <li><b>von ... bis</b> (من ... إلى): يستخدم لتحديد فترة زمنية. <br>مثال: <b>Vom</b> 8. <b>bis zum</b> 10. Juli. (من 8 إلى 10 يوليو - كلاهما Dativ).</li>
      <li><b>ab</b> (اعتباراً من): لتحديد بداية شيء في المستقبل. <br>مثال: <b>Ab</b> morgen. (اعتباراً من الغد - Dativ).</li>
      <li><b>an</b> (في/عند): تستخدم مع الأيام والأجزاء. <br>مثال: <b>am</b> Samstagabend (في مساء السبت - Dativ).</li>
      <li><b>seit</b> (منذ): لشيء بدأ في الماضي ومستمر حتى الآن. <br>مثال: <b>Seit</b> 1985. (منذ عام 1985 - Dativ).</li>
    </ul>

    <h4>🔹 2. لحالات "كم المدة؟" (Wie lange?):</h4>
    <ul>
      <li><b>über + Akkusativ</b> (لمدة/أكثر من): <br>مثال: <b>über</b> 30 Jahre (منذ أكثر من 30 عاماً).</li>
      <li>أو بدون حرف جر (للمدة المباشرة): <br>مثال: <b>zwei Jahre</b> (لمدة عامين).</li>
    </ul>

    <h4>📊 جدول توضيحي:</h4>
    <table>
      <tr><th>السؤال</th><th>حرف الجر</th><th>مثال</th></tr>
      <tr><td>Ab wann? (من متى؟)</td><td>ab / von ... an</td><td>Ab morgen / Vom 1. Januar an</td></tr>
      <tr><td>Wie lange? (إلى متى؟)</td><td>bis / von...bis</td><td>Bis 18 Uhr / Vom 8. bis 10. Juli</td></tr>
      <tr><td>Seit wann? (منذ متى؟)</td><td>seit</td><td>Seit 1985</td></tr>
      <tr><td>Wie lange? (كم المدة؟)</td><td>über (+ Akk)</td><td>Über 30 Jahre</td></tr>
    </table>
  `,

  // ----------------------------------------------------
  // التمارين (Exercises)
  // ----------------------------------------------------
  exercises: [
    mc("Ich lerne Deutsch ___ einem Jahr.", ["von", "seit", "ab", "an"], 1, "هنا نعبر عن شيء بدأ في الماضي (منذ سنة) ومستمر، نستخدم seit."),
    mc("Das Festival findet ___ 8. ___ 10. Juli statt.", ["von / bis zum", "ab / bis", "seit / bis", "an / an"], 0, "للتعبير عن فترة من...إلى، نستخدم von... bis zum."),
    mc("___ morgen an fange ich an zu lernen.", ["Von", "Seit", "Ab", "An"], 0, "عندما نستخدم an للتعبير عن البداية، نأتي بـ von قبل الوقت (Vom morgen an)."),
    mc("Er wartet ___ zwei Stunden auf mich.", ["seit", "über", "bis", "ab"], 1, "للتعبير عن مدة زمنية (أكثر من/لمدة ساعتين)، نستخدم über + Akkusativ."),
    mc("Das Konzert ist ___ 20 Uhr.", ["ab", "an", "bis", "über"], 2, "للإشارة إلى وقت الانتهاء (حتى الساعة 20)، نستخدم bis."),
    mc("Wir treffen uns ___ Samstagabend.", ["an", "am", "ab", "seit"], 1, "للتحدث عن يوم محدد، نستخدم an + اليوم، وهنا Samstagabend مذكر، فتصبح am."),
    mc("___ 1979 gibt es dieses Festival.", ["Von", "Seit", "Ab", "Über"], 1, "هنا نعبر عن شيء بدأ في الماضي، الصحيح هو seit."),
  ],

  // ----------------------------------------------------
  // المفردات (Vocabulary)
  // ----------------------------------------------------
  newWords: [
    // الأفعال
    v("stattfinden", "يقام / يحدث", "مناسبات", "fand statt", "stattgefunden"),
    v("erleben", "يعيش/يختبر", "مناسبات", "erlebte", "erlebt"),
    v("mitkommen", "يأتي مع (شخص)", "تواصل", "kam mit", "mitgekommen"),
    v("vorschlagen", "يقترح", "تواصل", "schlug vor", "vorgeschlagen"),
    v("zustimmen", "يوافق", "تواصل", "stimmte zu", "zugestimmt"),
    v("ablehnen", "يرفض", "تواصل", "lehnte ab", "abgelehnt"),
    v("sich verabreden", "يتواعد/يتفق مع", "تواصل", "verabredete sich", "verabredet"),
    v("ausmachen", "يحدد/يتفق على", "تواصل", "machte aus", "ausgemacht"),
    v("stattfinden", "يُعقد/يقام", "مناسبات", "fand statt", "stattgefunden"),
    v("dauern", "يستمر/يدوم", "وقت", "dauerte", "gedauert"),
    v("stattfinden", "يقام", "مناسبات", "fand statt", "stattgefunden"),
    v("erleben", "يعيش/يشهد", "مناسبات", "erlebte", "erlebt"),

    // الأسماء
    w("die Veranstaltung", "الفعالية / المناسبة", "مناسبات"),
    w("das Festival", "المهرجان", "مناسبات"),
    w("das Konzert", "الحفل الموسيقي", "فن"),
    w("die Bühne", "المسرح / المنصة", "فن"),
    w("der Star", "النجم", "فن"),
    w("der Eintritt", "الدخول (رسوم الدخول)", "مناسبات"),
    w("die Eintrittskarte", "تذكرة الدخول", "مناسبات"),
    w("die Ermäßigung", "الخصم / التخفيض", "تسوق"),
    w("der Künstler", "الفنان", "فن"),
    w("die Kunst", "الفن", "فن"),
    w("der Vortrag", "المحاضرة", "دراسة"),
    w("die Diskussionsrunde", "حلقة نقاش", "تواصل"),
    w("das Kostüm", "الزي التنكري", "مناسبات"),
    w("das Fest", "الاحتفال / العيد", "مناسبات"),
    w("die Ausstellung", "المعرض", "فن"),
    w("das Theaterstück", "المسرحية", "فن"),
    w("die Hochzeit", "حفل الزفاف", "مناسبات"),
    w("der Sommer", "الصيف", "طبيعة"),
    w("die Woche", "الأسبوع", "وقت"),
    w("der Tag", "اليوم", "وقت"),
    w("das Jahr", "السنة", "وقت"),

    // الصفات
    w("toll", "رائع", "صفات"),
    w("berühmt", "شهير", "صفات"),
    w("spannend", "مثير/مشوق", "صفات"),
    w("langweilig", "ممل", "صفات"),
    w("historisch", "تاريخي", "صفات"),
    w("digital", "رقمي", "صفات"),
    w("international", "دولي", "صفات")
  ]
},
   // ==========================================
// Lektion 7: Wir könnten montags joggen gehen!
// ==========================================
{
  id: "lektion-7",
  level: "A2.1",
  title: "Wir könnten montags joggen gehen!",
  titleAr: "يمكننا الذهاب للركض أيام الاثنين! (الرياضة والاقتراحات)",
  topic: "رياضة", 
  description: "في هذا الدرس نتعلم كيف نتحدث عن الرياضة، نقدم اقتراحات لبعضنا البعض، نعطي نصائح، ونتحدث عن خططنا الأسبوعية.",
  image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80", // صورة رياضة/جري
  
  // ----------------------------------------------------
  // قطعة الدرس (Lesetext) - قصة الكلب الداخلي
  // ----------------------------------------------------
  text: `
    <h4>Der innere Schweinehund</h4>
    <p>Was nehmen Sie sich immer wieder vor und schaffen es nicht? Notieren Sie.</p>
    <div style="margin-top: 15px; border-right: 4px solid var(--primary); padding-right: 15px;">
      <p><b>Mein innerer Schweinehund</b><br>
      <i>weniger Computerspiele spielen</i><br>
      <i>immer sport treiben</i><br>
      <i>mehr Fahrrad fahren</i><br>
      <i>mehr Obst essen</i><br>
      <i>fast immer gleich offen und barfuß laufen</i></p>
      
      <p style="margin-top: 15px;"><b>Vergleichen Sie:</b></p>
      <p>- Ich würde gern mehr Fahrrad fahren. Das macht fit und ist gesund.<br>
      - Ja, das stimmt. Ich fahre jeden Tag Fahrrad.<br>
      - Ich fahre nur selten Fahrrad. Ich laufe lieber oder nehme den Bus.</p>
    </div>
  `,
  
  // ----------------------------------------------------
  // القاعدة النحوية (Grammar) - Konjunktiv II للاقتراحات
  // ----------------------------------------------------
  grammarTitle: "Konjunktiv II (können, sollen) للاقتراحات والنصائح",
  grammar: `
    <h4>💡 الفكرة ببساطة:</h4>
    <p>عندما نريد أن نقترح شيئاً بلطف على صديق (مثل: يمكننا أن نذهب للركض)، أو نعطي نصيحة (مثل: يجب عليك أن ترتاح)، نستخدم صيغة خاصة تسمى <b>Konjunktiv II</b>.</p>
    <p>هذه الصيغة تجعل الجملة تبدو غير آمرة، بل مجرد "اقتراح" أو "فكرة" لطيفة.</p>

    <h4>🔹 1. الفعل können (يستطيع / يمكن):</h4>
    <p>نستخدمه لاقتراح فكرة (يمكننا أن نفعل...).</p>
    <ul>
      <li>ich <b>könnte</b> (أنا يمكنني)</li>
      <li>du <b>könntest</b> (أنت يمكنك)</li>
      <li>er/sie/es <b>könnte</b></li>
      <li>wir <b>könnten</b> (نحن يمكننا) - <i>الأكثر استخداماً للاقتراحات!</i></li>
      <li>ihr <b>könntet</b></li>
      <li>sie/Sie <b>könnten</b></li>
    </ul>
    <div class="example-box" style="margin-top:10px;">
      <p><b>Wir könnten</b> montags joggen gehen. (يمكننا الذهاب للركض أيام الاثنين).</p>
    </div>

    <h4>🔹 2. الفعل sollen (يجب / ينبغي):</h4>
    <p>نستخدمه لإعطاء نصيحة (يجب عليك أن تفعل...).</p>
    <ul>
      <li>ich <b>sollte</b> (يجب عليّ)</li>
      <li>du <b>solltest</b> (يجب عليك)</li>
      <li>er/sie/es <b>sollte</b></li>
      <li>wir <b>sollten</b> (يجب علينا)</li>
      <li>ihr <b>solltet</b></li>
      <li>sie/Sie <b>sollten</b></li>
    </ul>
    <div class="example-box" style="margin-top:10px;">
      <p><b>Du solltest</b> mehr Obst essen. (يجب عليك أكل المزيد من الفاكهة).</p>
    </div>
    
    <h4>🔹 3. حروف الجر الزمنية مع Dativ:</h4>
    <p>للتعبير عن الأوقات نستخدم: <code>zwischen</code> (بين) و <code>abends</code> (مساءً).</p>
  `,

  // ----------------------------------------------------
  // التمارين (Exercises)
  // ----------------------------------------------------
  exercises: [
    mc("___ wir am Wochenende zusammen schwimmen? (اقتراح)", ["Können", "Könnten", "Sollten", "Müssen"], 1, "للاقتراح اللطيف نستخدم Konjunktiv II من الفعل können -> könnten."),
    mc("Du ___ mehr schlafen, du siehst müde aus. (نصيحة)", ["solltest", "sollte", "könnte", "könntest"], 0, "لإعطاء نصيحة نستخدم sollen في صيغة Konjunktiv II -> solltest."),
    mc("Was ist richtig? - Ich ___ gern mehr Sport machen.", ["werde", "würde", "wurde", "wirst"], 1, "نستخدم würde + المصدر للتعبير عن الرغبة (أود أن...)."),
    mc("Wir treffen uns ___ 18 und 19 Uhr.", ["ab", "von", "zwischen", "seit"], 2, "بين وقتين نستخدم zwischen + Dativ."),
    mc("Er möchte abnehmen. Er ___ weniger Süßigkeiten essen.", ["sollte", "könnte", "würde", "müsste"], 0, "النصيحة هنا تكون بـ sollte (يجب عليه)."),
    mc("Ich habe keine Zeit. ___ wir uns morgen treffen?", ["Könnten", "Sollten", "Müssten", "Würden"], 0, "اقتراح بديل: هل يمكننا أن نتقابل غداً؟"),
  ],

  // ----------------------------------------------------
  // المفردات (Vocabulary)
  // ----------------------------------------------------
  newWords: [
    // الأفعال
    v("joggen", "يمارس الركض", "رياضة", "joggte", "gejoggt"),
    v("abnehmen", "يفقد الوزن", "رياضة", "nahm ab", "abgenommen"),
    v("zunehmen", "يزيد الوزن", "رياضة", "nahm zu", "zugenommen"),
    v("trainieren", "يتدرب", "رياضة", "trainierte", "trainiert"),
    v("sich treffen", "يتقابل", "تواصل", "traf sich", "getroffen"),
    v("empfehlen", "ينصح", "تواصل", "empfahl", "empfohlen"),
    v("vorschlagen", "يقترح", "تواصل", "schlug vor", "vorgeschlagen"),
    v("einladen", "يدعو", "تواصل", "lud ein", "eingeladen"),
    v("schlafen", "ينام", "حياة", "schlief", "geschlafen"),
    v("aufstehen", "يستيقظ", "حركة", "stand auf", "aufgestanden"),

    // الأسماء
    w("der Sport", "الرياضة", "رياضة"),
    w("der Sportplatz", "ملعب رياضي", "رياضة"),
    w("das Fitnessstudio", "صالة رياضية", "رياضة"),
    w("das Training", "التدريب", "رياضة"),
    w("der Muskel", "العضلة", "رياضة"),
    w("die Gesundheit", "الصحة", "حياة"),
    w("das Obst", "الفاكهة", "طعام"),
    w("das Gemüse", "الخضروات", "طعام"),
    w("der Schweinehund", "الكسل (حرفياً: كلب الخنزير)", "مشاعر"),
    w("der Tipp", "النصيحة", "تواصل"),
    w("der Vorschlag", "الاقتراح", "تواصل"),
    w("die Freizeit", "وقت الفراغ", "وقت"),
    w("der Termin", "الموعد", "وقت"),
    w("die Woche", "الأسبوع", "وقت"),

    // الصفات
    w("fit", "لائق بدنياً", "صفات"),
    w("gesund", "صحي", "صفات"),
    w("ungesund", "غير صحي", "صفات"),
    w("müde", "متعب", "صفات"),
    w("sportlich", "رياضي", "صفات"),
    w("faul", "كسول", "صفات")
  ]
},
   // ==========================================
// Lektion 8: Hoffentlich ist es nicht das Herz!
// ==========================================
{
  id: "lektion-8",
  level: "A2.1",
  title: "Hoffentlich ist es nicht das Herz!",
  titleAr: "أتمنى ألا يكون القلب! (الصحة والأمراض)",
  topic: "صحة", 
  description: "في هذا الدرس نتعلم كيف نصف الأمراض والأعراض، كيف نعبر عن القلق والتعاطف، وكيف نربط الجمل باستخدام (weil) و (deshalb).",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", // صورة طبيب/مستشفى
  
  // ----------------------------------------------------
  // قطعة الدرس (Lesetext) - من نصوص الصور
  // ----------------------------------------------------
  text: `
    <h4>Wer kann mir helfen?</h4>
    <p>Vielleicht ist es ja auch ein Virus.</p>
    <div style="margin-top: 15px; border-right: 4px solid var(--primary); padding-right: 15px;">
      <p><b>Caritas 23:</b> Ich habe starke Kopfschmerzen und mein Herz rast. Ich habe das Gefühl, dass ich keine Luft mehr bekomme.</p>
      <p><b>SEELE0711:</b> Oh, das tut mir leid. Vielleicht hast du einfach zu viel Stress. Du solltest mal eine Pause machen!</p>
      <p><b>INDI:</b> Ich gehe morgen zum Arzt. Ich habe solche Angst vor dem Ergebnis.</p>
    </div>
    
    <h4 style="margin-top: 20px;">Der Unfall</h4>
    <p>Gestern hatte ich einen Unfall mit dem Fahrrad. Eine Frau hat den Unfall gesehen und hat mir geholfen. Sie hat einen Krankenwagen gerufen. Der Notarzt hat mich ins Krankenhaus gebracht. Ich hatte großes Glück.</p>
  `,
  
  // ----------------------------------------------------
  // القاعدة النحوية (Grammar) - الجمل الثانوية
  // ----------------------------------------------------
  grammarTitle: "Nebensätze mit weil und deshalb (الجمل الثانوية)",
  grammar: `
    <h4>💡 الفكرة ببساطة:</h4>
    <p>عندما نريد أن نشرح "السبب" أو "النتيجة" نستخدم أدوات ربط. في الألمانية، ترتيب الكلمات يتغير حسب أداة الربط.</p>

    <h4>🔹 1. أداة الربط weil (لأن / بسبب):</h4>
    <p>عند استخدام <b>weil</b>، يذهب الفعل المُصرّف إلى <b>نهاية الجملة</b>.</p>
    <ul>
      <li><b>السبب:</b> Ich bleibe heute im Bett, <b>weil</b> ich <b>krank bin</b>. (أبقى في السرير اليوم لأنني مريض).</li>
      <li>لاحظ أن الفعل (bin) جاء في النهاية بعد الفاعل (ich).</li>
    </ul>

    <h4>🔹 2. أداة الربط deshalb (لذلك / لهذا السبب):</h4>
    <p>عند استخدام <b>deshalb</b>، تبدأ الجملة بها (تحتل المركز الأول)، ثم يأتي الفعل المُصرّف مباشرة بعدها، ثم الفاعل.</p>
    <ul>
      <li><b>النتيجة:</b> Ich bin krank, <b>deshalb bleibe</b> ich heute im Bett. (أنا مريض، لذلك أبقى في السرير اليوم).</li>
      <li>لاحظ أن الفعل (bleibe) جاء قبل الفاعل (ich).</li>
    </ul>

    <h4>📊 مقارنة سريعة:</h4>
    <table>
      <tr><th>السبب</th><th>النتيجة</th></tr>
      <tr><td>Ich lerne Deutsch, <b>weil</b> ich in Deutschland arbeiten will.</td><td>Ich will in Deutschland arbeiten, <b>deshalb lerne</b> ich Deutsch.</td></tr>
    </table>
  `,

  // ----------------------------------------------------
  // التمارين (Exercises)
  // ----------------------------------------------------
  exercises: [
    mc("Ich kann nicht kommen, ___ ich krank bin.", ["weil", "deshalb", "dass", "wenn"], 0, "الأداة weil تشرح السبب، والفعل (bin) يذهب للنهاية."),
    mc("Ich habe Zahnschmerzen, ___ gehe ich zum Zahnarzt.", ["weil", "deshalb", "dass", "wenn"], 1, "الأداة deshalb تعبر عن النتيجة، ويأتي الفعل (gehe) بعدها مباشرة."),
    mc("___ ich starke Kopfschmerzen habe, bleibe ich zu Hause.", ["Weil", "Deshalb", "Wenn", "Dass"], 0, "بدأنا بالسبب (weil)، والفعل (habe) في النهاية."),
    mc("Ich habe keine Zeit, ___ komme ich nicht mit.", ["weil", "deshalb", "dass", "ob"], 1, "النتيجة (لهذا السبب) -> deshalb."),
    mc("Er ist sehr müde, ___ er gestern schlecht geschlafen hat.", ["weil", "deshalb", "dass", "wann"], 0, "السبب هو (weil)، والفعل (hat) في النهاية."),
    mc("Ich habe so schlimme Rückenschmerzen. - Oh, das tut mir ___!", ["gut", "leid", "schlecht", "wichtig"], 1, "التعبير عن التعاطف: Das tut mir leid (يؤسفني ذلك)."),
  ],

  // ----------------------------------------------------
  // المفردات (Vocabulary)
  // ----------------------------------------------------
  newWords: [
    // الأفعال
    v("sich verletzen", "يُصاب (بجرح)", "صحة", "verletzte sich", "verletzt"),
    v("untersuchen", "يفحص (طبيب)", "صحة", "untersuchte", "untersucht"),
    v("operieren", "يجري عملية جراحية", "صحة", "operierte", "operiert"),
    v("bluten", "ينزف", "صحة", "blutete", "geblutet"),
    v("hoffen", "يأمل", "مشاعر", "hoffte", "gehofft"),
    v("sich fühlen", "يشعر", "مشاعر", "fühlte sich", "gefühlt"),
    v("wehtun", "يؤلم", "صحة", "tat weh", "wehgetan"),

    // الأسماء
    w("der Unfall", "حادث", "صحة"),
    w("der Krankenwagen", "سيارة الإسعاف", "صحة"),
    w("der Notarzt", "طبيب الطوارئ", "صحة"),
    w("das Krankenhaus", "المستشفى", "صحة"),
    w("der Zahnarzt", "طبيب الأسنان", "صحة"),
    w("der Zahn", "السن", "صحة"),
    w("die Zahnschmerzen", "ألم الأسنان", "صحة"),
    w("das Herz", "القلب", "صحة"),
    w("der Magen", "المعدة", "صحة"),
    w("der Kopf", "الرأس", "صحة"),
    w("das Knie", "الركبة", "صحة"),
    w("der Rücken", "الظهر", "صحة"),
    w("die Operation", "العملية الجراحية", "صحة"),
    w("die Verletzung", "الإصابة", "صحة"),
    w("die Krankheit", "المرض", "صحة"),
    w("das Fieber", "الحمى", "صحة"),
    w("der Stress", "التوتر", "مشاعر"),
    w("die Angst", "الخوف", "مشاعر"),
    w("das Mitleid", "التعاطف", "مشاعر"),
    w("das Glück", "الحظ", "حياة"),

    // الصفات
    w("krank", "مريض", "صفات"),
    w("gesund", "صحي / سليم", "صفات"),
    w("schlimm", "سيء / خطير", "صفات"),
    w("gefährlich", "خطير", "صفات"),
    w("müde", "متعب", "صفات")
  ]
},
   // ==========================================
// Lektion 9: Bei guten Autos sind wir ganz vorn
// ==========================================
{
  id: "lektion-9",
  level: "A2.1",
  title: "Bei guten Autos sind wir ganz vorn",
  titleAr: "في السيارات الجيدة نحن في المقدمة (العمل والمهن)",
  topic: "عمل", 
  description: "في هذا الدرس نتعلم كيف نتحدث عن المهن، المصانع، ونقرأ نصوصاً عن شركة أودي. كما نتعلم كيف نصف الأشياء بدون استخدام أدوات.",
  image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80", // صورة مصنع سيارات
  
  // ----------------------------------------------------
  // قطعة الدرس (Lesetext) - من نصوص أودي
  // ----------------------------------------------------
  text: `
    <h4>Mensch und Maschine</h4>
    <p>Die deutsche Automobilindustrie war schon in den 1970er- und 80er-Jahren sehr effektiv. Doch neue Technologien haben die Produktivität weiter verbessert. Frank Heidenreichs Dokumentarfilm „Mensch und Maschine" zeigt dies am Beispiel von Audi in Ingolstadt.</p>
    
    <p><b>A</b> - Alonsa Beerl gilt bald in Audi. Sie fast 40 Jahren arbeitet er bei Audi. Am Fließband hat er gesehen, wie sich die Produktion verändert hat. In den vergangenen Jahrzehnten war hier in Ingolstadt sehr viel. 1980 haben 80 Prozent der Beschäftigten im Auto produziert, jetzt sind es nur 30 Prozent. „Heute machen wir in dieser Fabrik 2.300 Autos am Tag. Das sind über 1.100.000 Autos im Jahr", sagt Alonsa Beerl.</p>
    
    <p><b>B</b> - 1980 haben 35% aller Mitarbeiter im Auto produziert. Im Jahr 2010 sind es 75% der Beschäftigten, die nicht mehr im Auto produzieren. Der Erfolg hat zwei Seiten. Einerseits sind die Arbeitsplätze sehr sicher, andererseits gibt es immer weniger Arbeitsplätze für ungelernte Arbeiter.</p>
  `,
  
  // ----------------------------------------------------
  // القاعدة النحوية (Grammar) - تصريف الصفات بدون أداة
  // ----------------------------------------------------
  grammarTitle: "Adjektivdeklination nach Nullartikel (تصريف الصفات بدون أداة)",
  grammar: `
    <h4>💡 الفكرة ببساطة:</h4>
    <p>ماذا يحدث عندما نصف اسماً <b>بدون</b> أداة تعريف (der/die/das) أو أداة نكرة (ein/eine)؟ في هذه الحالة، الصفة تأخذ النهاية التي كانت من المفترض أن تأخذها أداة التعريف!</p>

    <h4>🔹 القاعدة الذهبية (في حالة Nominativ):</h4>
    <p>الصفة تأخذ نهاية أداة التعريف (er, es, e).</p>
    <ul>
      <li>مذكر: <b>guter</b> Lohn (راتب جيد) -> (لأن der Lohn مذكر، فأخذت الصفة -er).</li>
      <li>محايد: <b>großes</b> Lager (مستودع كبير) -> (لأن das Lager محايد، فأخذت الصفة -es).</li>
      <li>مؤنث: <b>flexible</b> Arbeitszeit (وقت عمل مرن) -> (لأن die Arbeitszeit مؤنث، فأخذت الصفة -e).</li>
    </ul>

    <h4>🔹 في حالة Akkusativ و Dativ:</h4>
    <p>تماماً كما في القواعد السابقة: في Akkusativ المذكر فقط يتغير إلى <code>-en</code>، وفي Dativ كل الصفات تأخذ <code>-en</code>.</p>

    <h4>📊 جدول توضيحي (بدون أداة):</h4>
    <table>
      <tr><th>الجنس</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
      <tr><td>مذكر (Lohn)</td><td>guter Lohn</td><td>guten Lohn</td><td>gutem Lohn</td></tr>
      <tr><td>محايد (Lager)</td><td>großes Lager</td><td>großes Lager</td><td>großem Lager</td></tr>
      <tr><td>مؤنث (Arbeitszeit)</td><td>flexible Arbeitszeit</td><td>flexible Arbeitszeit</td><td>flexibler Arbeitszeit</td></tr>
    </table>
  `,

  // ----------------------------------------------------
  // التمارين (Exercises)
  // ----------------------------------------------------
  exercises: [
    mc("Ich suche einen Job mit gut___ Lohn.", ["gut", "guter", "guten", "gutem"], 2, "هنا نستخدم Akkusativ مع أداة النكرة (einen Job mit...). ولكن انتبه: بعد 'mit' نستخدم Dativ. الصحيح هو 'mit gutem Lohn'. (تم تعديل الخيارات لتوضيح القاعدة)."),
    mc("Ich möchte flexible___ Arbeitszeit haben.", ["flexibel", "flexibler", "flexible", "flexibles"], 2, "كلمة Arbeitszeit مؤنث (die). بدون أداة في حالة Akkusativ تأخذ الصفة -e."),
    mc("Das ist ein gut___ Angebot.", ["gut", "guter", "gutes", "guten"], 2, "كلمة Angebot محايد (das). مع أداة النكرة (ein) في حالة Nominativ تأخذ الصفة -es."),
    mc("Er sucht ein groß___ Lager.", ["groß", "großes", "großer", "großen"], 1, "كلمة Lager محايد (das). في حالة Akkusativ مع ein تأخذ الصفة -es."),
    mc("Wir haben einen gut___ Lohn.", ["gut", "gutes", "guten", "guter"], 2, "كلمة Lohn مذكر (der). في حالة Akkusativ مع einen تأخذ الصفة -en."),
    mc("Das ist ein sehr interessant___ Beruf.", ["interessant", "interessante", "interessanter", "interessantes"], 2, "كلمة Beruf مذكر (der). مع أداة النكرة (ein) في حالة Nominativ تأخذ الصفة -er."),
  ],

  // ----------------------------------------------------
  // المفردات (Vocabulary)
  // ----------------------------------------------------
  newWords: [
    // الأفعال
    v("produzieren", "ينتج", "عمل", "produzierte", "produziert"),
    v("arbeiten", "يعمل", "عمل", "arbeitete", "gearbeitet"),
    v("sich verändern", "يتغير", "عمل", "veränderte sich", "verändert"),
    v("suchen", "يبحث", "عمل", "suchte", "gesucht"),
    v("bieten", "يقدم/يعرض", "عمل", "bot", "geboten"),
    v("verdienen", "يكسب (مالاً)", "عمل", "verdiente", "verdient"),
    v("verbessern", "يحسن", "عمل", "verbesserte", "verbessert"),
    v("zeigen", "يُظهر", "تواصل", "zeigte", "gezeigt"),

    // الأسماء
    w("die Firma", "الشركة", "عمل"),
    w("die Fabrik", "المصنع", "عمل"),
    w("die Maschine", "الآلة", "عمل"),
    w("der Mitarbeiter", "الموظف", "عمل"),
    w("der Arbeiter", "العامل", "عمل"),
    w("die Produktion", "الإنتاج", "عمل"),
    w("der Lohn", "الأجر/الراتب", "عمل"),
    w("die Arbeitszeit", "وقت العمل", "عمل"),
    w("der Arbeitsplatz", "مكان العمل/الوظيفة", "عمل"),
    w("das Lager", "المستودع", "عمل"),
    w("das Büro", "المكتب", "عمل"),
    w("der Beruf", "المهنة", "عمل"),
    w("die Bewerbung", "طلب التوظيف", "عمل"),
    w("der Erfolg", "النجاح", "عمل"),
    w("die Technologie", "التكنولوجيا", "عمل"),
    w("das Auto", "السيارة", "حركة"),
    w("die Industrie", "الصناعة", "عمل"),
    w("der Kontakt", "التواصل", "تواصل"),
    w("die Anzeige", "الإعلان (في الجريدة)", "تواصل"),

    // الصفات
    w("gut", "جيد", "صفات"),
    w("flexibel", "مرن", "صفات"),
    w("groß", "كبير", "صفات"),
    w("wichtig", "مهم", "صفات"),
    w("interessant", "مثير للاهتمام", "صفات"),
    w("effektiv", "فعال", "صفات"),
    w("sicher", "آمن", "صفات")
  ]
},
   // ==========================================
// Lektion 10: Gut, dass du reserviert hast
// ==========================================
{
  id: "lektion-10",
  level: "A2.1",
  title: "Gut, dass du reserviert hast",
  titleAr: "من الجيد أنك حجزت (في المطعم)",
  topic: "طعام", 
  description: "في هذا الدرس نتعلم كيف نطلب الطعام في المطعم، نبدي ملاحظاتنا (إذا كان الطعام بارداً أو غير طازج)، وندفع الحساب. كما نتعلم كيفية استخدام أداة الربط (dass).",
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", // صورة مطعم
  
  // ----------------------------------------------------
  // قطعة الدرس (Lesetext) - حوار في المطعم
  // ----------------------------------------------------
  text: `
    <h4>Im Restaurant</h4>
    <p><b>Kellner:</b> Guten Abend! Haben Sie reserviert?</p>
    <p><b>Gast:</b> Ja, wir haben einen Tisch für zwei Personen reserviert. Auf den Namen Julia.</p>
    <p><b>Kellner:</b> Einen Moment bitte... Ah ja, hier entlang. Was kann ich Ihnen bringen?</p>
    <p><b>Gast:</b> Ich hätte gern das Schnitzel mit Kartoffelsalat. Und ich nehme ein Wasser.</p>
    <p><b>Kellner:</b> Und was möchten Sie trinken?</p>
    <p><b>Gast:</b> Ich möchte einen Apfelsaft, bitte. Und bringen Sie uns bitte noch etwas Brot.</p>
    <p><b>Kellner:</b> Sehr gerne. Kommt sofort.</p>
    <p><i>(Etwas später)</i></p>
    <p><b>Gast:</b> Entschuldigung, aber das Schnitzel ist kalt. Könnten Sie es bitte wieder warm machen?</p>
    <p><b>Kellner:</b> Oh, das tut mir leid. Natürlich, ich gebe es sofort an die Küche weiter.</p>
    <p><b>Gast:</b> Danke. Und wir möchten dann auch bald zahlen.</p>
    <p><b>Kellner:</b> Zusammen oder getrennt? <br><b>Gast:</b> Getrennt, bitte.</p>
  `,
  
  // ----------------------------------------------------
  // القاعدة النحوية (Grammar) - أداة الربط dass
  // ----------------------------------------------------
  grammarTitle: "Nebensätze mit dass (الجمل الثانوية باستخدام dass)",
  grammar: `
    <h4>💡 الفكرة ببساطة:</h4>
    <p>نستخدم أداة الربط <b>dass</b> (أن) لربط جملتين. الجملة الأولى تعبر عن شعور أو رأي (أعتقد، آمل، يؤسفني، من الجيد)، والجملة الثانية توضح ما هو هذا الرأي.</p>
    
    <h4>🔹 القاعدة الذهبية:</h4>
    <p>عند استخدام <b>dass</b>، يذهب الفعل المُصرّف إلى <b>نهاية الجملة</b> (تماماً مثل weil).</p>

    <h4>🔹 أهم التعبيرات المستخدمة مع dass:</h4>
    <ul>
      <li><b>Ich hoffe, dass...</b> (أنا آمل أن...)</li>
      <li><b>Ich glaube, dass...</b> (أنا أعتقد أن...)</li>
      <li><b>Ich denke, dass...</b> (أنا أفكر/أظن أن...)</li>
      <li><b>Schade, dass...</b> (من المؤسف أن...)</li>
      <li><b>Gut, dass...</b> (من الجيد أن...)</li>
    </ul>

    <h4>📝 أمثلة من الدرس:</h4>
    <div class="example-box">
      <p>Ich hoffe, <b>dass</b> du gut <b>geschlafen hast</b>. (آمل أنك نمت جيداً).</p>
      <p>Schade, <b>dass</b> es keine Pizza mehr <b>gibt</b>. (من المؤسف أنه لم يعد هناك بيتزا).</p>
      <p>Gut, <b>dass</b> du einen Tisch <b>reserviert hast</b>. (من الجيد أنك حجزت طاولة).</p>
    </div>
  `,

  // ----------------------------------------------------
  // التمارين (Exercises)
  // ----------------------------------------------------
  exercises: [
    mc("Ich glaube, ___ er heute nicht kommt.", ["weil", "dass", "deshalb", "wenn"], 1, "نستخدم dass للتعبير عن الاعتقاد (أعتقد أن...)."),
    mc("___ , dass du mir hilfst! (من الجيد أنك تساعدني)", ["Gut", "Schlecht", "Schade", "Traurig"], 0, "التعبير 'Gut, dass...' يعني من الجيد أن..."),
    mc("Ich hoffe, dass es dir gut ___.", ["geht", "gehst", "gehen", "ging"], 0, "الفعل مع es (هو) في المضارع يأخذ -t، ويأتي في النهاية بسبب dass."),
    mc("Entschuldigung, das Essen ist kalt. Könnten Sie es ___ machen?", ["kalt", "warm", "schnell", "lecker"], 1, "عند تقديم شكوى بأن الطعام بارد، نطلب إعادة تسخينه (warm machen)."),
    mc("Zahlen bitte! - Zusammen oder ___?", ["einzeln", "getrennt", "allein", "zusammen"], 1, "عند سؤال النادل عن طريقة الدفع: هل الحساب مجتمع أم منفصل (getrennt)؟"),
    mc("Schade, ___ es keine Pizza gibt.", ["weil", "dass", "deshalb", "wenn"], 1, "بعد Schade (من المؤسف) نستخدم dass، والفعل (gibt) يذهب للنهاية."),
  ],

  // ----------------------------------------------------
  // المفردات (Vocabulary)
  // ----------------------------------------------------
  newWords: [
    // الأفعال
    v("reservieren", "يحجز", "طعام", "reservierte", "reserviert"),
    v("bestellen", "يطلب", "طعام", "bestellte", "bestellt"),
    v("bringen", "يجلب/يحضر", "طعام", "brachte", "gebracht"),
    v("schmecken", "يكون طعمه جيداً", "طعام", "schmeckte", "geschmeckt"),
    v("zahlen", "يدفع", "طعام", "zahlte", "gezahlt"),
    v("reklamieren", "يقدم شكوى/يعترض", "طعام", "reklamierte", "reklamiert"),
    v("empfehlen", "يوصي/ينصح", "تواصل", "empfahl", "empfohlen"),
    v("dauern", "يستمر", "وقت", "dauerte", "gedauert"),

    // الأسماء
    w("der Kellner", "النادل", "طعام"),
    w("die Kellnerin", "النادلة", "طعام"),
    w("das Restaurant", "المطعم", "طعام"),
    w("die Speisekarte", "قائمة الطعام", "طعام"),
    w("das Gericht", "الطبق (الأكلة)", "طعام"),
    w("die Rechnung", "الفاتورة/الحساب", "طعام"),
    w("das Trinkgeld", "البقشيش", "طعام"),
    w("das Messer", "السكين", "طعام"),
    w("die Gabel", "الشوكة", "طعام"),
    w("der Teller", "الصحن", "طعام"),
    w("das Glas", "الكأس/الزجاج", "طعام"),
    w("die Tasse", "الفنجان", "طعام"),
    w("das Salz", "الملح", "طعام"),
    w("der Pfeffer", "الفلفل (الأسود)", "طعام"),
    w("das Öl", "الزيت", "طعام"),
    w("der Essig", "الخل", "طعام"),
    w("die Serviette", "المنديل", "طعام"),
    w("das Brot", "الخبز", "طعام"),
    w("die Kartoffeln", "البطاطس", "طعام"),
    w("der Salat", "السلطة", "طعام"),
    w("das Fleisch", "اللحم", "طعام"),
    w("der Fisch", "السمك", "طعام"),
    w("die Suppe", "الحساء/الشوربة", "طعام"),

    // الصفات
    w("kalt", "بارد", "صفات"),
    w("warm", "دافئ", "صفات"),
    w("lecker", "لذيذ", "صفات"),
    w("frisch", "طازج", "صفات"),
    w("salzig", "مالح", "صفات"),
    w("scharf", "حار", "صفات"),
    w("getrennt", "منفصل", "صفات"),
    w("zusammen", "معاً", "صفات")
  ]
},
   // ==========================================
// Lektion 11: Ich freue mich so
// ==========================================
{
  id: "lektion-11",
  level: "A2.1",
  title: "Ich freue mich so",
  titleAr: "أنا سعيد جداً (المشاعر والأفعال الانعكاسية)",
  topic: "مشاعر", 
  description: "في هذا الدرس نتعلم كيف نعبر عن مشاعرنا (الفرح، الغضب، الإعجاب)، نستخدم الأفعال الانعكاسية، ونكتب رسائل تهنئة أو تعليقات على صفحات الشركات.",
  image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80", // صورة أشخاص سعداء/احتفال
  
  // ----------------------------------------------------
  // قطعة الدرس (Lesetext) - مقال الصحيفة عن الشركة
  // ----------------------------------------------------
  text: `
    <h4>Zehn Jahre „Restlos glücklich"</h4>
    <p>Zwei Gedanken sind der gelernten Buchhändlerin Luisa Bauer immer wieder durch den Kopf gegangen: „Es ist traurig, dass so viele Jugendliche keinen guten Job bekommen" und „Es ist Wahnsinn, dass wir so viele Dinge auf dem Müll werfen". Deshalb hat sie vor zehn Jahren die <i>Restlos glücklich GmbH</i> gegründet. Ihre Geschäftsidee: Aus Alt mach Neu.</p>
    <p>In ihren Werkstätten wird Altpapier zu bunten Briefumschlägen, Briefpapier, Postkarten, Notizblöcken und Geschenkpapier. Getränkeverpackungen, Plastiktüten und Textilreste werden zu neuen Geldbörsen, Rucksäcken und Aktentaschen. Aus Second-Hand-Kleidern wird topmoderne Mode und aus langweiligen alten Schränken und Tischen werden interessante neue Designermöbel. Die Produkte kann man im Werkstattladen, auf Messen und natürlich auch online ansehen und kaufen.</p>
    <p>Mit zwei jungen Helfern hat die 26-Jährige angefangen. Heute hat Luisa Bauer 45 Mitarbeiterinnen und Mitarbeiter. Das Betriebsklima ist sehr gut, weil die Arbeit so vielseitig und interessant ist. Deshalb hat Bürgermeister Ludger Rennert die Unternehmerin auf der Feier zum zehnjährigen Firmenjubiläum besonders gelobt: „Ihr Engagement, liebe Frau Bauer, ist so wichtig, weil es zeigt, dass Umweltschutz, soziales Engagement und wirtschaftlicher Erfolg prima zusammenpassen."</p>
  `,
  
  // ----------------------------------------------------
  // القاعدة النحوية (Grammar) - الأفعال الانعكاسية
  // ----------------------------------------------------
  grammarTitle: "Reflexive Verben (الأفعال الانعكاسية)",
  grammar: `
    <h4>💡 الفكرة ببساطة:</h4>
    <p>الأفعال الانعكاسية هي أفعال لا تكتمل جملتها إلا بوجود "ضمير انعكاسي" (مثل: نفسي، نفسك، نفسه). في اللغة العربية نقول "أنا سعيد"، لكن في الألمانية نقول حرفياً "أنا أُسعد نفسي" (Ich freue mich).</p>

    <h4>🔹 1. الضمائر الانعكاسية (Reflexivpronomen):</h4>
    <p>تأتي هذه الضمائر في حالة <b>Akkusativ</b> غالباً (مثل mich, dich, uns...):</p>
    <ul>
      <li>ich freue <b>mich</b> (أنا سعيد)</li>
      <li>du freust <b>dich</b> (أنت سعيد)</li>
      <li>er/sie/es freut <b>sich</b> (هو/هي سعيد)</li>
      <li>wir freuen <b>uns</b> (نحن سعداء)</li>
      <li>ihr freut <b>euch</b> (أنتم سعداء)</li>
      <li>sie/Sie freuen <b>sich</b> (هم/أنتم سعداء)</li>
    </ul>

    <h4>🔹 2. أشهر الأفعال الانعكاسية في هذا الدرس:</h4>
    <ul>
      <li><b>sich freuen</b> (يفرح / يكون سعيداً)</li>
      <li><b>sich ärgern</b> (يغضب / ينزعج)</li>
      <li><b>sich erinnern</b> (يتذكر)</li>
      <li><b>sich entschuldigen</b> (يعتذر)</li>
      <li><b>sich bedanken</b> (يشكر)</li>
    </ul>
    
    <h4>🔹 3. حروف الجر مع الأفعال الانعكاسية:</h4>
    <p>بعض الأفعال تحتاج حرف جر ثابت:</p>
    <ul>
      <li>sich freuen <b>auf</b> (+ Akk) -> متحمس لشيء قادم.</li>
      <li>sich freuen <b>über</b> (+ Akk) -> سعيد بشيء حدث.</li>
      <li>sich ärgern <b>über</b> (+ Akk) -> غاضب من شيء.</li>
      <li>sich erinnern <b>an</b> (+ Akk) -> يتذكر شيئاً.</li>
    </ul>
  `,

  // ----------------------------------------------------
  // التمارين (Exercises)
  // ----------------------------------------------------
  exercises: [
    mc("Ich freue ___ auf den Urlaub.", ["mich", "dich", "sich", "uns"], 0, "الفعل sich freuen مع الضمير ich يأخذ الضمير الانعكاسي mich."),
    mc("Er ärgert ___ über seinen Chef.", ["mich", "dich", "sich", "uns"], 2, "الفعل sich ärgern مع الضمير er (هو) يأخذ الضمير الانعكاسي sich."),
    mc("Wir bedanken ___ für das Geschenk.", ["mich", "euch", "sich", "uns"], 3, "الفعل sich bedanken مع الضمير wir (نحن) يأخذ الضمير الانعكاسي uns."),
    mc("Erinnern Sie ___ an den Termin?", ["dich", "sich", "mich", "euch"], 1, "الفعل sich erinnern مع حضرتك (Sie) يأخذ الضمير الانعكاسي sich."),
    mc("Ich finde es traurig, ___ so viele Jugendliche keinen Job haben.", ["weil", "dass", "wenn", "deshalb"], 1, "نستخدم dass للتعبير عن الرأي (أجد أنه من المحزن أن...)."),
    mc("Herzlichen Glückwunsch ___ 10-jährigen Jubiläum!", ["zum", "zur", "im", "am"], 0, "كلمة Jubiläum محايدة (das)، وفي حالة Dativ مع حرف الجر zu تصبح zum."),
  ],

  // ----------------------------------------------------
  // المفردات (Vocabulary)
  // ----------------------------------------------------
  newWords: [
    // الأفعال الانعكاسية
    v("sich freuen", "يفرح / يكون سعيداً", "مشاعر", "freute sich", "sich gefreut"),
    v("sich ärgern", "يغضب / ينزعج", "مشاعر", "ärgerte sich", "sich geärgert"),
    v("sich erinnern", "يتذكر", "مشاعر", "erinnerte sich", "sich erinnert"),
    v("sich entschuldigen", "يعتذر", "تواصل", "entschuldigte sich", "sich entschuldigt"),
    v("sich bedanken", "يشكر", "تواصل", "bedankte sich", "sich bedankt"),
    // أفعال عادية
    v("gründen", "يؤسس", "عمل", "gründete", "gegründet"),
    v("loben", "يمدح / يثني على", "عمل", "lobte", "gelobt"),
    v("organisieren", "ينظم", "عمل", "organisierte", "organisiert"),
    v("verlieren", "يفقد / يخسر", "عمل", "verlor", "verloren"),
    v("werfen", "يرمي", "حياة", "warf", "geworfen"),

    // الأسماء
    w("die Firma", "الشركة", "عمل"),
    w("der Mitarbeiter", "الموظف", "عمل"),
    w("der Jugendliche", "الشاب/المراهق", "حياة"),
    w("der Müll", "القمامة", "حياة"),
    w("das Altpapier", "الورق المستعمل", "حياة"),
    w("der Umschlag", "المظروف", "تواصل"),
    w("das Geschenkpapier", "ورق الهدايا", "تسوق"),
    w("die Tasche", "الحقيبة", "تسوق"),
    w("der Rucksack", "حقيبة الظهر", "تسوق"),
    w("das Möbelstück", "قطعة أثاث", "منزل"),
    w("die Umfrage", "استطلاع الرأي", "تواصل"),
    w("die Meinung", "الرأي", "تواصل"),
    w("das Engagement", "الالتزام / المشاركة", "عمل"),
    w("der Umweltschutz", "حماية البيئة", "طبيعة"),
    w("der Erfolg", "النجاح", "عمل"),
    w("das Jubiläum", "اليوبيل / الذكرى السنوية", "مناسبات"),
    w("der Glückwunsch", "التهنئة", "مناسبات"),

    // الصفات
    w("glücklich", "سعيد", "مشاعر"),
    w("traurig", "حزين", "مشاعر"),
    w("froh", "مسرور / مبتهج", "مشاعر"),
    w("wichtig", "مهم", "صفات"),
    w("vielseitig", "متعدد الجوانب", "صفات"),
    w("prima", "ممتاز", "صفات")
  ]
},
   // ==========================================
// Lektion 12: Wenn es warm ist, essen wir meist Salat
// ==========================================
{
  id: "lektion-12",
  level: "A2.1",
  title: "Wenn es warm ist, essen wir meist Salat",
  titleAr: "عندما يكون الجو دافئاً، نأكل عادةً سلطة (عادات الأكل)",
  topic: "طعام", 
  description: "في هذا الدرس نتعلم كيف نتحدث عن عادات الأكل والشرب، نقرأ إحصاءات عن استهلاك الطعام في ألمانيا، ونستخدم أداة الربط (wenn) للتعبير عن الشروط.",
  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80", // صورة طعام/سلطة
  
  // ----------------------------------------------------
  // قطعة الدرس (Lesetext) - إحصاءات استهلاك الطعام
  // ----------------------------------------------------
  text: `
    <h4>Der Lebensmittel-Konsum in Deutschland</h4>
    <p><i>Wie sieht die Ernährung der Deutschen aus? Essen sie genügend Obst? Wie viel Alkohol trinken sie? Und wie viel Fleisch essen sie pro Tag?</i></p>
    <p>Das Bundesministerium hat dazu eine Umfrage unter Jugendlichen und Erwachsenen gemacht und einige interessante Ergebnisse herausgefunden:</p>
    <p>Am häufigsten essen die Deutschen <b>Brot und Getreideprodukte</b>.</p>
    <p>Männer essen doppelt so viel Fleisch und Wurstwaren wie Frauen – 103g pro Tag. Bei Frauen sind es dagegen nur 53g pro Tag. Die empfohlene Menge sind 300g bis 600g pro Woche.</p>
    <p>Die Deutschen essen kaum Fisch. Durchschnittlich essen Männer nur 29g Fisch pro Tag und Frauen 23g pro Tag. Am meisten Fisch essen die Hamburger, und ältere Menschen essen mehr Fisch als jüngere.</p>
    <p>Die Deutschen essen zu wenig Obst und Gemüse: 87% essen zu wenig Gemüse und 59% essen zu wenig Obst. Frauen essen durchschnittlich mehr Obst als Männer. Aber auch 54% der Frauen schaffen die empfohlene Menge (250g pro Tag) nicht. Am meisten Obst essen die Deutschen nicht im Sommer oder Herbst, sondern in den Wintermonaten von November bis Januar.</p>
    <p>Pro Tag soll man 1,5 Liter Nicht-Alkoholisches trinken. Das machen die meisten Deutschen auch. Positiv: Wasser macht davon etwa die Hälfte aus. Kaffee, schwarzer und grüner Tee stehen an Platz 2. Ansonsten trinken Frauen mehr Kräuter- und Früchtetees, Männer häufiger Limonade.</p>
    <p>Männer trinken mit rund 30g Alkohol am Tag fast 4-mal mehr als Frauen. Davon sind 80% Bier und nur 15% Wein. Frauen trinken zu 50% Bier und Wein. Spirituosen trinken vor allem jüngere Männer zwischen 19 und 24 Jahren.</p>
  `,
  
  // ----------------------------------------------------
  // القاعدة النحوية (Grammar) - الجمل الشرطية باستخدام wenn
  // ----------------------------------------------------
  grammarTitle: "Konditionalsätze mit wenn (الجمل الشرطية)",
  grammar: `
    <h4>💡 الفكرة ببساطة:</h4>
    <p>نستخدم أداة الربط <b>wenn</b> (إذا / عندما) للتعبير عن شرط. إذا حدث الشيء الأول (الشرط)، فسيحدث الشيء الثاني (النتيجة).</p>

    <h4>🔹 1. عندما تبدأ الجملة بـ Wenn:</h4>
    <p>إذا بدأت الجملة بـ Wenn، فإن الفعل المُصرّف يذهب إلى <b>نهاية الجملة الأولى</b> (الجملة الثانوية). وفي الجملة الثانية (الرئيسية)، يأتي الفعل مباشرة بعد الفاصلة.</p>
    <div class="example-box">
      <p><b>Wenn</b> es warm <b>ist</b>, <b>essen</b> wir meist Salat. <br>(عندما يكون الجو دافئاً، نأكل عادةً سلطة).</p>
    </div>

    <h4>🔹 2. عندما تأتي Wenn في المنتصف:</h4>
    <p>إذا بدأنا بالنتيجة أولاً، ثم أتت (wenn) في المنتصف، يرجع الفعل في نهاية الجملة إلى النهاية كالمعتاد.</p>
    <div class="example-box">
      <p>Wir <b>essen</b> meist Salat, <b>wenn</b> es warm <b>ist</b>. <br>(نحن نأكل عادةً سلطة عندما يكون الجو دافئاً).</p>
    </div>

    <h4>📊 مقارنة سريعة:</h4>
    <table>
      <tr><th>الشرط أولاً (Wenn...)</th><th>النتيجة أولاً</th></tr>
      <tr><td>Wenn es schnell gehen muss, gibt es Pizza.</td><td>Es gibt Pizza, wenn es schnell gehen muss.</td></tr>
    </table>
  `,

  // ----------------------------------------------------
  // التمارين (Exercises)
  // ----------------------------------------------------
  exercises: [
    mc("___ es warm ist, essen wir Salat.", ["Weil", "Wenn", "Dass", "Deshalb"], 1, "نستخدم wenn للتعبير عن الشرط (عندما/إذا). الفعل (ist) في النهاية."),
    mc("Ich trinke Kaffee, ___ ich müde bin.", ["weil", "wenn", "dass", "deshalb"], 1, "نستخدم wenn هنا بمعنى 'عندما' (كلما شعرت بالنعاس)."),
    mc("___ ich Geburtstag habe, backe ich einen Kuchen.", ["Wenn", "Weil", "Dass", "Deshalb"], 0, "الجملة الشرطية تبدأ بـ Wenn، والفعل (habe) في النهاية."),
    mc("Es überrascht mich, ___ die Deutschen so viel Brot essen.", ["wenn", "weil", "dass", "deshalb"], 2, "بعد التعبير عن الدهشة (Es überrascht mich) نستخدم dass."),
    mc("Männer essen doppelt so ___ Fleisch wie Frauen.", ["viel", "viele", "mehr", "meiste"], 0, "التعبير 'doppelt so viel' يعني ضعف الكمية."),
    mc("Die Hälfte ___ 50 Prozent.", ["sind", "ist", "haben", "hat"], 1, "كلمة die Hälfte (النصف) تعامل معاملة المفرد المؤنث، لذا نستخدم ist."),
  ],

  // ----------------------------------------------------
  // المفردات (Vocabulary)
  // ----------------------------------------------------
  newWords: [
    // الأفعال
    v("überraschen", "يفاجئ", "مشاعر", "überraschte", "überrascht"),
    v("vergleichen", "يقارن", "تواصل", "verglich", "verglichen"),
    v("empfehlen", "ينصح/يوصي", "تواصل", "empfahl", "empfohlen"),
    v("backen", "يخبز", "طعام", "backte", "gebacken"),
    v("kochen", "يطبخ", "طعام", "kochte", "gekocht"),
    v("bemerken", "يلاحظ", "مشاعر", "bemerkte", "bemerkt"),
    v("zunehmen", "يزيد (الوزن)", "صحة", "nahm zu", "zugenommen"),
    v("abnehmen", "ينقص (الوزن)", "صحة", "nahm ab", "abgenommen"),

    // الأسماء
    w("das Lebensmittel", "المواد الغذائية", "طعام"),
    w("die Ernährung", "التغذية", "طعام"),
    w("das Getreide", "الحبوب", "طعام"),
    w("das Brot", "الخبز", "طعام"),
    w("das Fleisch", "اللحم", "طعام"),
    w("die Wurst", "النقانق", "طعام"),
    w("der Fisch", "السمك", "طعام"),
    w("das Obst", "الفاكهة", "طعام"),
    w("das Gemüse", "الخضروات", "طعام"),
    w("der Salat", "السلطة", "طعام"),
    w("das Wasser", "الماء", "طعام"),
    w("der Kaffee", "القهوة", "طعام"),
    w("der Tee", "الشاي", "طعام"),
    w("der Alkohol", "الكحول", "طعام"),
    w("das Bier", "البيرة", "طعام"),
    w("der Wein", "النبيذ", "طعام"),
    w("die Umfrage", "استطلاع الرأي", "تواصل"),
    w("das Ergebnis", "النتيجة", "دراسة"),
    w("die Menge", "الكمية", "طعام"),
    w("die Hälfte", "النصف", "طعام"),
    w("das Prozent", "بالمئة", "دراسة"),
    w("der Tag", "اليوم", "وقت"),
    w("die Woche", "الأسبوع", "وقت"),
    w("der Monat", "الشهر", "وقت"),

    // الصفات
    w("warm", "دافئ", "طقس"),
    w("kalt", "بارد", "طقس"),
    w("gesund", "صحي", "صحة"),
    w("lecker", "لذيذ", "صفات"),
    w("empfohlen", "موصى به", "صفات")
  ]
}
  ];

/* ========== الدوال المساعدة ========== */
function getWordData(word) {
  // 1. إذا كانت الكلمة عبارة عن كائن (Object) - وهذا هو الحال في دروسنا الجديدة
  if (typeof word === 'object' && word !== null) {
    return {
      kind: word.kind || word.type || 'other', // نوع الكلمة
      plural: word.plural || '',
      präteritum: word.präteritum || '',
      perfekt: word.perfekt || ''
    };
  }

  // 2. إذا كانت الكلمة مجرد نص (String) - الطريقة القديمة
  if (typeof word !== 'string') return { kind: 'other' };
  
  const w = word.trim();
  const lower = w.toLowerCase();
  
  // البحث في الأفعال
  if (typeof VERBS !== 'undefined') {
    const verb = VERBS.find(v => v.de && v.de.toLowerCase() === lower);
    if (verb) return { kind: 'verb', präteritum: verb.präteritum || '', perfekt: verb.perfekt || '' };
  }
  
  // البحث في الأسماء
  if (typeof NOUNS !== 'undefined') {
    const noun = NOUNS.find(n => n.de && n.de.toLowerCase() === lower);
    if (noun) return { kind: 'noun', plural: noun.plural || '' };
  }
  
  // البحث في الصفات
  if (typeof ADJECTIVES !== 'undefined') {
    const adj = ADJECTIVES.find(a => a.de && a.de.toLowerCase() === lower);
    if (adj) return { kind: 'adj' };
  }
  
  // إذا كانت تبدأ بـ der/die/das فهي اسم
  if (/^(der|die|das)\s/i.test(w)) {
    return { kind: 'noun', plural: '' };
  }
  
  return { kind: 'other' };
}

function renderLessonSubTabs() {
  const container = document.getElementById('lessonSubTabs');
  if (!container) return;
  const tabs = LESSON_LEVELS.map(lv => {
    const cls = 'lesson-subtab' + (lv.id === currentLessonLevel ? ' active' : '') + (lv.available ? '' : ' disabled');
    const onclick = lv.available ? `onclick="switchLessonLevel('${lv.id}')"` : `onclick="showComingSoon('${lv.label}')"`;
    return `<button class="${cls}" ${onclick}>${lv.label}</button>`;
  }).join('');
  container.innerHTML = tabs;
}

function switchLessonLevel(level) {
  currentLessonLevel = level;
  renderLessonSubTabs();
  renderLessonsTab();
}

function showComingSoon(label) {
  alert(label + ' — قيد الإعداد');
}

function initLessonsTab() {
  renderLessonSubTabs();
  renderLessonsTab();
}

function renderLessonsTab() {
  const container = document.getElementById('lessonsContent');
  if (!container) return;
  const lang = (typeof contentLanguage !== 'undefined') ? contentLanguage : 'de';
  if (lang !== 'de') {
    container.innerHTML = `<div style="text-align:center;padding:60px 20px;"><div style="font-size:60px;margin-bottom:20px;">📚</div><h2 style="color:var(--primary-dark);font-size:24px;margin-bottom:15px;">الدروس متاحة بالألمانية فقط</h2><p style="color:var(--text-muted);font-size:16px;margin-bottom:25px;">دروس Menschen A2.1 مصممة لتعلم الألمانية — بدّل لغة المحتوى للمتابعة.</p><button onclick="toggleContentLanguage()" style="background:var(--primary);color:#fff;border:none;padding:14px 32px;border-radius:25px;font-size:16px;font-weight:700;cursor:pointer;font-family:inherit;">🇩🇪 التبديل إلى الألمانية</button></div>`;
    return;
  }
  const filtered = LESSONS.filter(l => l.level === currentLessonLevel);
  if (!filtered.length) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">📚 لا توجد دروس في هذا المستوى بعد.</p>';
    return;
  }
  const cards = filtered.map(l => `
    <div class="lesson-card" onclick="openLesson('${l.id}')">
      <div class="lesson-img-wrap">
        ${l.image ? `<img src="${l.image}" alt="${l.title}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:60px;\\'>${l.emoji}</span>';" />` : `<span style="font-size:60px;">${l.emoji}</span>`}
      </div>
      <div class="lesson-body">
        <div class="lesson-level">${l.level}</div>
        <h3 class="lesson-title">${l.emoji} ${l.title}</h3>
        <p class="lesson-title-ar">${l.titleAr}</p>
        <span class="lesson-topic">${l.topic}</span>
        <span class="lesson-words-count">${(l.words ? l.words.length : 0) + (l.newWords ? l.newWords.length : 0)} كلمة</span>
      </div>
    </div>
  `).join('');
  container.innerHTML = `<div class="lessons-grid">${cards}</div>`;
}

function openLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;
  // إضافة حالة للمتصفح لدعم زر الرجوع
history.pushState({ lessonId: id }, "", "#lesson-" + id);
  // تأمين المصفوفات في حال كانت فارغة
  const allWords = [...(lesson.words || []), ...(lesson.newWords || [])];
  const rows = allWords.map(w => {
    if (!w) return ''; // تخطي الكلمات الفارغة
    
    // استخراج الكلمة بذكاء (إذا كانت نصاً أو كائناً)
    const wordText = typeof w === 'string' ? w : (w.de || w.word || '');
    const translation = typeof w === 'string' ? '' : (w.ar || w.translation || w.arabic || '');
    
    const d = typeof getWordData === 'function' ? getWordData(w) : { kind: 'other' };
    const clean = wordText.replace(/^(der|die|das) /, '');
    
    let extra = '';
    if (d.kind === 'noun' && d.plural) extra = ` | الجمع: ${d.plural}`;
    else if (d.kind === 'verb' && d.präteritum) extra = ` | الماضي: ${d.präteritum} | التام: ${d.perfekt}`;

    return `
      <tr>
        <td style="font-weight:700;color:var(--primary-dark);direction:ltr;text-align:right;padding:12px;">
          ${wordText}
          <button class="audio-btn" style="position:static;display:inline-flex;width:30px;height:30px;font-size:14px;margin-right:8px;" onclick="speak('${clean.replace(/'/g, "\\'")}')">🔊</button>
        </td>
        <td style="padding:12px;">${translation}</td>
        <td style="font-size:13px;color:var(--text-muted);padding:12px;">${extra}</td>
      </tr>`;
  }).join('');

  // التعامل مع القواعد (يدعم الطريقتين القديمة والجديدة)
  let grammarHTML = '';
  if (lesson.grammar) {
    const gTitle = lesson.grammar.title || lesson.grammarTitle || 'قاعدة الدرس';
    const gTitleAr = lesson.grammar.titleAr || '';
    const gContent = lesson.grammar.explanation || lesson.grammar || '';
    
    grammarHTML = `
      <div class="section-title" style="margin-top:30px; font-size: 22px;">📘 القاعدة: ${gTitle}</div>
      ${gTitleAr ? `<div class="rule-hint" style="font-size:16px; margin-bottom:20px;">${gTitleAr}</div>` : ''}
      <div class="grammar-content" style="display:block;padding:30px;background:var(--card-bg);border-radius:16px;border-right:6px solid var(--primary);">
        ${gContent}
      </div>
    `;
  }
    // 👇 إضافة قسم قطعة الدرس (Lesetext)
  let lessonTextHTML = '';
  if (lesson.text || lesson.lesetext) {
    lessonTextHTML = `
      <div class="section-title" style="margin-top:30px; font-size: 22px;">📖 قطعة الدرس (Lesetext)</div>
      <div class="example-box" style="margin-top:15px; font-size: 18px; line-height: 2; direction: ltr; text-align: left; padding: 25px; background: var(--card-bg); border-right: 6px solid var(--accent);">
        ${lesson.text || lesson.lesetext}
      </div>
    `;
  }
  const exercisesHTML = (lesson.exercises && lesson.exercises.length) ? `
    <div class="section-title" style="margin-top:30px; font-size: 22px;">📝 التمارين (${lesson.exercises.length})</div>
    <div style="display:flex;flex-direction:column;gap:15px;margin-top:15px;">
      ${lesson.exercises.map((ex, i) => `
        <div style="background:var(--card-bg);padding:20px;border-radius:12px;border:1px solid var(--border-color);">
          <p style="font-weight:700;margin-bottom:10px;">${i+1}. ${ex.q || ex.question}</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            ${(ex.options || ex.opts || []).map((opt, optIdx) => `
              <button class="filter-btn" onclick="checkLessonExercise(this, ${optIdx}, ${ex.answer !== undefined ? ex.answer : ex.correct})">${opt}</button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  // عرض المحتوى في الشاشة (تأكد من وجود هذا العنصر في الـ HTML)
  const container = document.getElementById('singleLessonContent');
  if (container) {
    container.innerHTML = `
     <button class="filter-btn" onclick="closeSingleLesson()" style="margin-bottom:20px;">← العودة للدروس</button>
      <h2 style="color:var(--primary-dark);font-size:28px;margin-bottom:5px;">${lesson.title}</h2>
      <h3 style="color:var(--text-muted);font-size:20px;margin-bottom:15px;">${lesson.titleAr || ''}</h3>
              ${lesson.image ? `<div style="text-align:center; margin-bottom: 20px;"><img src="${lesson.image}" alt="${lesson.title}" style="width:100%; max-width:400px; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.1); object-fit:cover;"></div>` : ''}
${(lesson.description || lesson.desc) ? `
  <div class="example-box" style="margin-bottom: 25px; border-right: 5px solid var(--primary); background: var(--card-bg); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); border-left: 1px solid var(--border-color);">
    <strong>💡 نبذة عن الدرس:</strong><br>
    <span style="font-size: 16px; line-height: 1.8; color: var(--text-main);">${lesson.description || lesson.desc}</span>
  </div>
` : ''}
      
      ${allWords.length ? `
               <div class="section-title" style="font-size:22px;">📖 المفردات</div>
        <div style="overflow-x: auto; width: 100%; padding-bottom: 10px;">
          <table style="width:100%; min-width: 500px; border-collapse:collapse; margin-top:15px; background:var(--card-bg); border-radius:12px; overflow:hidden;">
          <thead><tr style="background:var(--primary-dark);color:#fff;"><th style="padding:12px;">الكلمة</th><th style="padding:12px;">المعنى</th><th style="padding:12px;">معلومات إضافية</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
         </div>
      ` : ''}
      
      ${grammarHTML}
      ${exercisesHTML}
    `;
    container.classList.remove('hidden');
    document.getElementById('lessonsContent').classList.add('hidden');
    document.getElementById('lessonSubTabs').classList.add('hidden');
  }
}

// دالة مساعدة للتحقق من إجابات تمارين الدروس
function checkLessonExercise(btn, selected, correct) {
  if (selected === correct) {
    btn.style.background = '#10b981';
    btn.style.color = '#fff';
    btn.style.borderColor = '#10b981';
  } else {
    btn.style.background = '#ef4444';
    btn.style.color = '#fff';
    btn.style.borderColor = '#ef4444';
  }
}

function renderLessonExercises(exercises) {
  const container = document.getElementById('lessonExercises');
  if (!container) return;
  container.innerHTML = exercises.map((ex, idx) => `
    <div class="lesson-exercise" data-idx="${idx}" style="background:var(--card-bg);padding:20px;border-radius:12px;border:1px solid var(--border-color);margin-bottom:10px;">
      <div style="font-weight:700;color:var(--primary-dark);margin-bottom:15px;font-size:18px;">${idx + 1}. ${ex.question}</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${ex.options.map((opt, i) => `
          <button class="lesson-exercise-opt" data-idx="${idx}" data-opt="${i}"
                  style="padding:14px 18px;background:#f8fafc;border:2px solid var(--border-color);border-radius:10px;cursor:pointer;font-size:16px;font-weight:600;text-align:right;direction:ltr;transition:all 0.3s;"
                  onclick="checkLessonExercise(${idx}, ${i})">${opt}</button>
        `).join('')}
      </div>
      <div id="lessonFeedback-${idx}" style="display:none;margin-top:15px;padding:15px;border-radius:10px;font-weight:600;"></div>
    </div>
  `).join('');
}
  
function closeSingleLesson() {
  document.getElementById('singleLessonContent').classList.add('hidden');
  document.getElementById('lessonsContent').classList.remove('hidden');
  document.getElementById('lessonSubTabs').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function checkLessonExercise(exIdx, optIdx) {
  const lesson = LESSONS.find(l => l.id === currentLessonId);
  if (!lesson || !lesson.exercises) return;
  const ex = lesson.exercises[exIdx];
  if (!ex) return;
  const isCorrect = optIdx === ex.correct;
  const btns = document.querySelectorAll(`.lesson-exercise-opt[data-idx="${exIdx}"]`);
  btns.forEach(b => {
    b.disabled = true;
    if (+b.dataset.opt === ex.correct) b.style.background = '#dcfce7', b.style.borderColor = '#10b981';
    else if (+b.dataset.opt === optIdx && !isCorrect) b.style.background = '#fee2e2', b.style.borderColor = '#ef4444';
  });
  const fb = document.getElementById('lessonFeedback-' + exIdx);
  if (fb) {
    fb.style.display = 'block';
    fb.style.background = isCorrect ? '#dcfce7' : '#fee2e2';
    fb.style.color = isCorrect ? '#166534' : '#991b1b';
    fb.innerHTML = (isCorrect ? '✅ صحيح! ' : '❌ خطأ. ') + ex.explanation;
  }
}
// دالة إغلاق الدرس المفرد والعودة للقائمة
function closeSingleLesson() {
  document.getElementById('singleLessonContent').classList.add('hidden');
  document.getElementById('lessonsContent').classList.remove('hidden');
  document.getElementById('lessonSubTabs').classList.remove('hidden');
  
  // مسح الهاش من الرابط
  history.pushState({}, "", window.location.pathname + window.location.search);
}
