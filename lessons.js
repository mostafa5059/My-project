/* ============================================================
   lessons.js — دروس Menschen A2.1
   ============================================================ */

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
    id: "M2-03", level: "A2.1", title: "Meine erste Liebe", titleAr: "حبي الأول", topic: "مشاعر وحياة", emoji: "💖",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    text: `Leo sitzt im Café und erinnert sich an seine erste Liebe. "Ich habe mich damals sofort verliebt", erzählt er. "Wir sind oft zusammen spazieren gegangen und haben stundenlang geredet. Aber eines Tages ist sie weggezogen." Er trinkt einen Schluck Kaffee und lächelt. "Ich habe sie nie vergessen."`,
    textAr: `ليو يجلس في المقهى ويتذكر حبه الأول. يحكي: "لقد وقعت في الحب فوراً في ذلك الوقت. كنا غالباً نتمشى معاً ونتحدث لساعات. لكن في أحد الأيام انتقلت بعيداً." يأخذ رشفة من القهوة ويبتسم: "لم أنسها أبداً."`,
    words: ["die Liebe", "verlieben", "erinnern", "spazieren", "vergessen"],
    newWords: [
      w("das Gefühl", "الشعور", "مشاعر"), w("die Liebe", "الحب", "مشاعر"), w("der Freund", "الصديق / الحبيب", "علاقات"), w("die Freundin", "الصديقة / الحبيبة", "علاقات"), w("der Partner", "الشريك", "علاقات"), w("die Partnerschaft", "الشراكة / العلاقة", "علاقات"), w("das Herz", "القلب", "مشاعر"), w("der Kuss", "القبلة", "مشاعر"), w("die Hochzeit", "الزفاف", "مناسبات"), w("die Ehe", "الزواج", "حياة"), w("die Beziehung", "العلاقة", "علاقات"), w("der Streit", "الخلاف / الشجار", "علاقات"), w("die Entschuldigung", "الاعتذار", "تواصل"), w("das Date", "الموعد (الرومانسي)", "علاقات"), w("die Erinnerung", "الذكرى", "حياة"), w("das Glück", "الحظ / السعادة", "مشاعر"), w("der Traum", "الحلم", "حياة"), w("die Zukunft", "المستقبل", "حياة"), w("die Vergangenheit", "الماضي", "حياة"), w("der Moment", "اللحظة", "حياة"), w("das Jahr", "السنة", "وقت"), w("der Monat", "الشهر", "وقت"), w("die Woche", "الأسبوع", "وقت"), w("der Tag", "اليوم", "وقت"), w("der Brief", "الرسالة", "تواصل"), w("das Geschenk", "الهدية", "مناسبات"), w("das Blume", "الزهرة", "طبيعة"), w("der Ring", "الخاتم", "أثاث"), w("das Café", "المقهى", "أماكن"), w("der Ort", "المكان", "أماكن"),
      v("sich verlieben", "يقع في الحب", ["verliebe mich","verliebst dich","verliebt sich","verlieben uns","verliebt euch","verlieben sich"], "verliebte sich", "hat sich verliebt", "مشاعر", "reflexiv"), v("sich erinnern", "يتذكر", ["erinnere mich","erinnerst dich","erinnert sich","erinnern uns","erinnert euch","erinnern sich"], "erinnerte sich", "hat sich erinnert", "حياة", "reflexiv"), v("kennenlernen", "يتعرف على", ["lerne kennen","lernst kennen","lernt kennen","lernen kennen","lernt kennen","lernen kennen"], "lernte kennen", "hat kennengelernt", "علاقات", "trennbar"), v("zusammen sein", "يكون معاً", ["bin zusammen","bist zusammen","ist zusammen","sind zusammen","seid zusammen","sind zusammen"], "war zusammen", "ist zusammen gewesen", "علاقات", "trennbar"), v("heiraten", "يتزوج", ["heirate","heiratest","heiratet","heiraten","heiratet","heiraten"], "heiratete", "hat geheiratet", "مناسبات"), v("verlassen", "يترك", ["verlasse","verlässt","verlässt","verlassen","verlasst","verlassen"], "verließ", "hat verlassen", "علاقات", "unregelmäßig"), v("vergessen", "ينسى", ["vergesse","vergisst","vergisst","vergessen","vergesst","vergessen"], "vergaß", "hat vergessen", "حياة", "unregelmäßig"), v("sich trennen", "ينفصل", ["trenne mich","trennst dich","trennt sich","trennen uns","trennt euch","trennen sich"], "trennte sich", "hat sich getrennt", "علاقات", "reflexiv"), v("wegziehen", "ينتقل بعيداً", ["ziehe weg","ziehst weg","zieht weg","ziehen weg","zieht weg","ziehen weg"], "zog weg", "ist weggezogen", "سكن", "trennbar"), v("streiten", "يتشاجر", ["streite","streitest","streitet","streiten","streitet","streiten"], "stritt", "hat gestritten", "علاقات", "unregelmäßig"), v("sich entschuldigen", "يعتذر", ["entschuldige mich","entschuldigst dich","entschuldigt sich","entschuldigen uns","entschuldigt euch","entschuldigen sich"], "entschuldigte sich", "hat sich entschuldigt", "تواصل", "reflexiv"), v("schenken", "يهدي", ["schenke","schenkst","schenkt","schenken","schenkt","schenken"], "schenkte", "hat geschenkt", "مناسبات"), v("küssen", "يقبل", ["küsse","küsst","küsst","küssen","küsst","küssen"], "küsste", "hat geküsst", "مشاعر"), v("träumen", "يحلم", ["träume","träumst","träumt","träumen","träumt","träumen"], "träumte", "hat geträumt", "حياة"), v("spazieren gehen", "يتمشى", ["gehe spazieren","gehst spazieren","geht spazieren","gehen spazieren","geht spazieren","gehen spazieren"], "ging spazieren", "ist spazieren gegangen", "حركة", "trennbar"),
      w("glücklich", "سعيد", "صفات"), w("traurig", "حزين", "صفات"), w("verliebt", "واقع في الحب", "صفات"), w("eifersüchtig", "غيور", "صفات"), w("romantisch", "رومانسي", "صفات"), w("zusammen", "معاً", "ظروف"), w("getrennt", "منفصل", "صفات"), w("damals", "في ذلك الوقت", "ظروف"), w("früher", "سابقاً", "ظروف"), w("plötzlich", "فجأة", "ظروف"), w("leider", "للأسف", "ظروف"), w("zum Glück", "لحسن الحظ", "ظروف")
    ],
    grammar: {
      title: "Perfekt mit trennbaren Verben + Reflexive Verben", titleAr: "الماضي التام مع الأفعال المنفصلة + الأفعال الانعكاسية",
      explanation: `<h4>1) Perfekt مع الأفعال المنفصلة (Trennbare Verben)</h4><p>في الماضي التام (Perfekt)، نضع <strong>-ge-</strong> بين البادئة والفعل الأصلي.</p><ul><li>kennenlernen → hat kennen<strong>ge</strong>lernt</li><li>wegziehen → ist weg<strong>ge</strong>zogen</li><li>spazieren gehen → ist spazieren <strong>ge</strong>gangen</li><li>einkaufen → hat ein<strong>ge</strong>kauft</li></ul><div class="grammar-tip">💡 الأفعال التي تبدأ بـ (be-, ge-, er-, ver-, ent-, emp-, zer-) لا تأخذ -ge- في الماضي التام (مثل: vergessen → hat vergessen).</div><h4>2) الأفعال الانعكاسية (Reflexive Verben)</h4><p>هي أفعال يحتاج فيها الفاعل إلى ضمير انعكاسي (sich).</p><table><tr><th>الضمير</th><th>الضمير الانعكاسي</th></tr><tr><td>ich</td><td>mich</td></tr><tr><td>du</td><td>dich</td></tr><tr><td>er/sie/es</td><td>sich</td></tr><tr><td>wir</td><td>uns</td></tr><tr><td>ihr</td><td>euch</td></tr><tr><td>sie/Sie</td><td>sich</td></tr></table><ul><li>sich verlieben → Ich habe mich verliebt.</li><li>sich erinnern → Er erinnert sich an sie.</li><li>sich treffen → Wir haben uns getroffen.</li></ul><h4>3) حروف الجر مع الأفعال الانعكاسية</h4><ul><li><strong>sich erinnern an + Akk</strong> — Ich erinnere mich an ihn. (أتذكره)</li><li><strong>sich verlieben in + Akk</strong> — Ich habe mich in sie verliebt. (وقعت في حبها)</li><li><strong>sich freuen auf + Akk</strong> — Ich freue mich auf den Urlaub. (أتشوق للعطلة)</li><li><strong>sich interessieren für + Akk</strong> — Er interessiert sich für Musik.</li></ul><div class="grammar-tip">⚠️ لاحظ: في Perfekt مع الأفعال الانعكاسية، الضمير الانعكاسي يبقى في مكانه بعد الفعل المساعد: Ich <strong>habe mich</strong> verliebt.</div>`
    },
    exercises: [
      mc("Ich habe mich sofort in sie ___. (verlieben - Perfekt)", ["verliebt", "verlieben", "verliebte", "verliebe"], 0, "sich verlieben → hat sich verliebt."), mc("Wir sind gestern zusammen spazieren ___. (gehen - Perfekt)", ["gegangen", "gehen", "ging", "geht"], 0, "spazieren gehen → ist spazieren gegangen."), mc("Er hat sie nie ___. (vergessen - Perfekt)", ["vergessen", "gegessen", "vergaß", "vergisst"], 0, "vergessen → hat vergessen (بدون ge- لأنها تبدأ بـ ver-)."), mc("Ich erinnere ___ an meine Kindheit. (Reflexiv)", ["mich", "dich", "sich", "uns"], 0, "ich erinnere mich."), mc("Wann hast du sie ___? (kennenlernen - Perfekt)", ["kennengelernt", "kennen gelernt", "kennenlernte", "lernt kennen"], 0, "kennenlernen → hat kennengelernt (الـ ge- في المنتصف)."), mc("Sie hat ___ von ihm getrennt. (Reflexiv)", ["sich", "mich", "dich", "uns"], 0, "sie (هي) + sich getrennt.")
    ]
  }
];

/* ========== استخراج بيانات كلمة من المصادر ========== */
function getWordData(word) {
  const clean = word.replace(/^(der|die|das) /, '').trim();
  if (typeof NOUNS !== 'undefined') {
    const n = NOUNS.find(x => x.de === word || x.de.replace(/^(der|die|das) /, '') === clean);
    if (n) return { ...n, source: 'NOUNS', kind: 'noun' };
  }
  if (typeof VERBS !== 'undefined') {
    const v = VERBS.find(x => x.de === word || x.de.replace(/ \(.*\)/, '') === clean);
    if (v) return { ...v, source: 'VERBS', kind: 'verb' };
  }
  if (typeof ADJECTIVES !== 'undefined') {
    const a = ADJECTIVES.find(x => x.de === word);
    if (a) return { ...a, source: 'ADJECTIVES', kind: 'adj' };
  }
  for (const lesson of LESSONS) {
    if (!lesson.newWords) continue;
    const nw = lesson.newWords.find(x => x.de === word);
    if (nw) return { ...nw, source: 'LESSON', kind: nw.type ? 'verb' : 'noun' };
  }
  return { de: word, ar: '—', source: 'UNKNOWN' };
}

/* ========== التبويبات الفرعية ========== */
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
  const allWords = [...(lesson.words || []), ...((lesson.newWords || []).map(w => w.de))];
  const rows = allWords.map(w => {
    const d = getWordData(w);
    const clean = w.replace(/^(der|die|das) /, '');
    let extra = '';
    if (d.kind === 'noun' && d.plural) extra = `الجمع: ${d.plural}`;
    else if (d.kind === 'verb' && d.präteritum) extra = `الماضي: ${d.präteritum} — Perfekt: ${d.perfekt}`;
    return `<tr>
      <td style="font-weight:700;color:var(--primary-dark);direction:ltr;text-align:right;padding:12px;">
        ${w}
        <button class="audio-btn" style="position:static;display:inline-flex;width:30px;height:30px;font-size:14px;margin-right:8px;" onclick="speak('${clean.replace(/'/g, "\\'")}')">🔊</button>
      </td>
      <td style="padding:12px;">${d.ar || '—'}</td>
      <td style="font-size:13px;color:var(--text-muted);padding:12px;">${extra}</td>
    </tr>`;
  }).join('');
  const grammarHTML = lesson.grammar ? `
    <div class="section-title" style="margin-top:30px; font-size: 22px;">📐 القاعدة: ${lesson.grammar.title}</div>
    <div class="rule-hint" style="font-size:16px; margin-bottom:20px;">${lesson.grammar.titleAr}</div>
    <div class="grammar-content" style="display:block;padding:30px;background:var(--card-bg);border-radius:16px;border-right:6px solid var(--primary); box-shadow:0 4px 15px rgba(0,0,0,0.05); font-size:16px; line-height:1.8;">
      ${lesson.grammar.explanation}
    </div>
  ` : '';
  const exercisesHTML = (lesson.exercises && lesson.exercises.length) ? `
    <div class="section-title" style="margin-top:30px; font-size: 22px;">📝 تمارين (${lesson.exercises.length})</div>
    <div id="lessonExercises" style="display:flex;flex-direction:column;gap:14px;"></div>
  ` : '';
  const imageHTML = lesson.image ? `
    <div style="width:100%; height:300px; border-radius:16px; overflow:hidden; margin-bottom:25px; border:1px solid var(--border-color);">
      <img src="${lesson.image}" alt="${lesson.title}" style="width:100%; height:100%; object-fit:cover;">
    </div>
  ` : '';
  const html = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px; flex-wrap:wrap; gap:15px;">
      <button class="btn-next" style="margin:0; padding:10px 25px; font-size:15px; background:var(--text-muted);" onclick="closeSingleLesson()">← العودة للدروس</button>
      <div style="text-align:left;">
        <h2 style="font-size:32px;color:var(--primary-dark);margin-bottom:5px;">${lesson.emoji} ${lesson.title}</h2>
        <p style="color:var(--text-muted);font-size:18px;font-weight:600;">${lesson.titleAr}</p>
      </div>
    </div>
    ${imageHTML}
    <div style="margin-bottom:25px; text-align:center;">
      <span class="badge regular" style="font-size:14px;">${lesson.level}</span>
      <span class="badge trennbar" style="font-size:14px;">${lesson.topic}</span>
    </div>
    <div class="section-title" style="font-size: 22px;">📖 النص</div>
    <div class="example-box" style="font-size:19px;line-height:2.2;padding:30px;">
      <div style="direction:ltr;text-align:right;font-weight:700;color:var(--text-main);">${lesson.text}</div>
      <div class="trans" style="color:var(--accent);margin-top:12px;font-weight:600;">${lesson.textAr}</div>
      <button class="audio-btn" style="position:static;display:inline-flex;width:45px;height:45px;margin-top:15px;font-size:20px;" onclick="speak('${lesson.text.replace(/'/g, "\\'")}')">🔊</button>
    </div>
    ${grammarHTML}
    <div class="section-title" style="margin-top:30px; font-size: 22px;">📦 كلمات الدرس (${allWords.length})</div>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin-top:15px; font-size:16px;">
        <thead><tr style="background:#eff6ff;"><th style="padding:14px; color:var(--primary-dark);">الكلمة</th><th style="padding:14px; color:var(--primary-dark);">المعنى</th><th style="padding:14px; color:var(--primary-dark);">معلومة</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    ${exercisesHTML}
  `;
  document.getElementById('lessonsContent').classList.add('hidden');
  document.getElementById('lessonSubTabs').classList.add('hidden');
  const lessonContainer = document.getElementById('singleLessonContent');
  lessonContainer.classList.remove('hidden');
  lessonContainer.innerHTML = html;
  currentLessonId = id;
  if (lesson.exercises && lesson.exercises.length) {
    renderLessonExercises(lesson.exercises);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  applyTranslationVisibility();
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
