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

  /* ============ Lektion 3 (Custom) ============ */
  {
    id: "M2-03", level: "A2.1", title: "Hier finden Sie Ruhe und Erholung", titleAr: "هنا تجدون الهدوء والاسترخاء", topic: "سفر وإجازات", emoji: "🏖️",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    text: `Viele Menschen fahren im Sommer ans Meer oder in die Berge, um sich zu erholen. Sie wollen dem Stress der Stadt entkommen. Ein beliebtes Reiseziel ist die Nordsee. Dort kann man lange Spaziergänge am Strand machen und die frische Luft genießen. Wer lieber wandert, fährt in die Alpen. Aber auch ein Kurzurlaub im Spa-Hotel ist eine gute Möglichkeit, um neue Energie zu tanken.`,
    textAr: `كثير من الناس يسافرون في الصيف إلى البحر أو إلى الجبال للاسترخاء. إنهم يريدون الهروب من ضغط المدينة. من الوجهات السياحية الشهيرة هو بحر الشمال. هناك يمكنك القيام بنزهات طويلة على الشاطئ والاستمتاع بالهواء النقي. من يفضل المشي لمسافات طويلة، يسافر إلى جبال الألب. لكن الإجازة القصيرة في فندق صحي هي أيضاً وسيلة جيدة لشحن طاقة جديدة.`,
    words: ["die Erholung", "der Strand", "das Meer", "die Berge", "die Reise", "wandern", "entspannen", "buchen"],
    newWords: [
      w("die Erholung", "الاسترخاء", "سفر"), w("der Urlaub", "الإجازة", "سفر"), w("die Reise", "الرحلة", "سفر"), w("das Meer", "البحر", "طبيعة"), w("der Strand", "الشاطئ", "طبيعة"), w("die Berge", "الجبال", "طبيعة"), w("der See", "البحيرة", "طبيعة"), w("der Wald", "الغابة", "طبيعة"), w("die Landschaft", "المنظر الطبيعي", "طبيعة"), w("die Insel", "الجزيرة", "طبيعة"), w("das Hotel", "الفندق", "سفر"), w("die Pension", "بيت الضيافة", "سفر"), w("das Zimmer", "الغرفة", "سكن"), w("die Ferienwohnung", "شقة العطلات", "سفر"), w("der Campingplatz", "مخيم", "سفر"), w("die Nordsee", "بحر الشمال", "جغرافيا"), w("die Ostsee", "بحر البلطيق", "جغرافيا"), w("die Alpen", "جبال الألب", "جغرافيا"), w("die Stadt", "المدينة", "أماكن"), w("das Dorf", "القرية", "أماكن"), w("die Natur", "الطبيعة", "طبيعة"), w("die frische Luft", "الهواء النقي", "طبيعة"), w("die Sonne", "الشمس", "طبيعة"), w("der Regen", "المطر", "طبيعة"), w("der Schnee", "الثلج", "طبيعة"), w("das Wetter", "الطقس", "طبيعة"), w("der Stress", "الضغط / التوتر", "حياة"), w("die Energie", "الطاقة", "حياة"), w("das Glück", "السعادة", "مشاعر"), w("die Ruhe", "الهدوء", "مشاعر"), w("der Traum", "الحلم", "حياة"),
      v("sich erholen", "يستريح", ["erhole mich","erholst dich","erholt sich","erholen uns","erholt euch","erholen sich"], "erholte sich", "hat sich erholt", "سفر", "reflexiv"), v("reisen", "يسافر", ["reise","reist","reist","reisen","reist","reisen"], "reiste", "ist gereist", "سفر"), v("fahren", "يسافر (بمركبة)", ["fahre","fährst","fährt","fahren","fahrt","fahren"], "fuhr", "ist gefahren", "حركة", "unregelmäßig"), v("fliegen", "يطير", ["fliege","fliegst","fliegt","fliegen","fliegt","fliegen"], "flog", "ist geflogen", "حركة", "unregelmäßig"), v("wandern", "يمشي لمسافات طويلة", ["wandere","wanderst","wandert","wandern","wandert","wandern"], "wanderte", "ist gewandert", "حركة"), v("entspannen", "يسترخي", ["entspanne","entspannst","entspannt","entspannen","entspannt","entspannen"], "entspannte", "hat entspannt", "حياة"), v("buchen", "يحجز", ["buche","buchst","bucht","buchen","bucht","buchen"], "buchte", "hat gebucht", "سفر"), v("packen", "يحزم", ["packe","packst","packt","packen","packt","packen"], "packte", "hat gepackt", "سفر"), v("abfahren", "يغادر (منفصل)", ["fahre ab","fährst ab","fährt ab","fahren ab","fahrt ab","fahren ab"], "fuhr ab", "ist abgefahren", "حركة", "trennbar"), v("ankommen", "يصل (منفصل)", ["komme an","kommst an","kommt an","kommen an","kommt an","kommen an"], "kam an", "ist angekommen", "حركة", "trennbar"), v("genießen", "يستمتع", ["genieße","genießt","genießt","genießen","genießt","genießen"], "genoss", "hat genossen", "حياة", "unregelmäßig"), v("besuchen", "يزور", ["besuche","besuchst","besucht","besuchen","besucht","besuchen"], "besuchte", "hat besucht", "سفر"), v("schwimmen", "يسبح", ["schwimme","schwimmst","schwimmt","schwimmen","schwimmt","schwimmen"], "schwamm", "ist geschwommen", "رياضة", "unregelmäßig"),
      w("sonnig", "مشمس", "طقس"), w("regnerisch", "ممطر", "طقس"), w("wunderschön", "جميل جداً", "صفات"), w("ruhig", "هادئ", "صفات"), w("voll", "ممتلئ", "صفات"), w("günstig", "رخيص", "صفات"), w("teuer", "غالي", "صفات"), w("weit", "بعيد", "صفات"), w("nah", "قريب", "صفات"), w("draußen", "في الخارج", "ظروف"), w("drinnen", "في الداخل", "ظروف"), w("endlich", "أخيراً", "ظروف"), w("unterwegs", "في الطريق", "ظروف")
    ],
    grammar: {
      title: "Präpositionen mit Akkusativ/Dativ (Ort und Richtung) + Trennbare Verben", titleAr: "حروف الجر مع الأماكن (أين؟ / إلى أين؟) + الأفعال المنفصلة",
      explanation: `<h4>1) حروف الجر مع الأماكن (Wo? / Wohin?)</h4><p>في هذا الدرس نركز على حروف الجر الخاصة بالأماكن (مثل: ans Meer, in die Berge, am Strand).</p><ul><li><strong>Wohin?</strong> (إلى أين؟) ➔ نستخدم <strong>Akkusativ</strong>: Ich fahre <strong>ans</strong> Meer (an + das). Ich fahre <strong>in die</strong> Berge.</li><li><strong>Wo?</strong> (أين؟) ➜ نستخدم <strong>Dativ</strong>: Ich bin <strong>am</strong> Strand (an + dem). Ich bin <strong>in den</strong> Bergen.</li></ul><h4>2) الأفعال المنفصلة (Trennbare Verben)</h4><p>في المضارع، تنفصل البادئة وتذهب إلى نهاية الجملة.</p><ul><li>abfahren: Der Zug <strong>fährt</strong> um 8 Uhr <strong>ab</strong>.</li><li>ankommen: Wir <strong>kommen</strong> morgen <strong>an</strong>.</li><li>einkaufen: Ich <strong>kaufe</strong> im Supermarkt <strong>ein</strong>.</li></ul><h4>3) الأفعال الانعكاسية (Reflexive Verben)</h4><p>مثل: sich erholen (يستريح).</p><ul><li>Ich <strong>erhole mich</strong> im Urlaub.</li><li>Er <strong>erholt sich</strong> am Strand.</li></ul><div class="grammar-tip">💡 تذكر: الفعل المساعد (sein) يُستخدم مع أفعال الحركة (reisen, fahren, fliegen, wandern) في الماضي التام (Perfekt).</div>`
    },
    exercises: [
      mc("Wohin fährst du im Sommer? — Ich fahre ___ Meer.", ["ans", "am", "in der", "auf dem"], 0, "Wohin? + das Meer → an + das = ans Meer."), mc("Wo ist dein Hotel? — Es ist direkt ___ Strand.", ["am", "ans", "in den", "auf die"], 0, "Wo? + der Strand → an + dem = am Strand."), mc("Wann ___ der Zug ___? (abfahren)", ["fährt ... ab", "abfährt", "fährt ab ...", "ab ... fährt"], 0, "فعل منفصل: الفعل في المركز والبادئة في النهاية."), mc("Ich ___ mich im Urlaub sehr gut. (erholen)", ["erhole", "erholst", "erholt", "erholen"], 0, "ich + erhole mich (فعل انعكاسي)."), mc("Wir sind letztes Jahr nach Italien ___. (reisen - Perfekt)", ["gereist", "gereisen", "reiste", "reisen"], 0, "reisen → ist gereist."), mc("Die Wanderung in ___ war fantastisch. (Berge)", ["den Bergen", "die Berge", "der Berge", "dem Berge"], 0, "Wo? → Dativ جمع → in den Bergen.")
    ]
  }
];

/* ========== الدوال المساعدة ========== */
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
