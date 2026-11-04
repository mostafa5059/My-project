// ==========================================
// ملف قواعد المستوى A2 - كتاب Grammatik aktiv
// ==========================================

const GRAMMAR_A2 = [
  // --- الكابيتل 21 ---
  {
    id: "a2-21",
    title: "Verben mit Akkusativ und Dativ",
    titleAr: "الأفعال التي تأخذ حالة النصب والجر (Akkusativ & Dativ)",
    category: "الأفعال",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>في اللغة الألمانية، بعض الأفعال تحتاج إلى "مفعول به" في حالة النصب (Akkusativ)، وبعضها يحتاج إلى "شخص" في حالة الجر (Dativ). وهناك أفعال تحتاج إلى الاثنين معاً (شخص + شيء).</p>
      <h4>🔹 1. أفعال تأخذ Akkusativ فقط (شيء):</h4>
      <ul>
        <li><b>trinken</b> (يشرب): Der Kellner trinkt <b>einen Saft</b> (Akkusativ).</li>
        <li><b>lieben</b> (يحب): Ich liebe <b>mein Kind</b> (Akkusativ).</li>
      </ul>
      <h4>🔹 2. أفعال تأخذ Dativ و Akkusativ (شخص + شيء):</h4>
      <p>الشخص دائماً في Dativ، والشيء دائماً في Akkusativ.</p>
      <ul>
        <li><b>schenken</b> (يُهدي): Der Mann schenkt <b>der Frau</b> (Dativ) <b>Blumen</b> (Akkusativ).</li>
      </ul>
      <h4>🔹 3. أفعال تأخذ Nominativ فقط:</h4>
      <ul>
        <li><b>lachen</b> (يضحك): Er lacht.</li>
      </ul>
      <h4>📊 ترتيب الكلمات (Wortposition):</h4>
      <table>
        <tr><th>Nominativ (الفاعل)</th><th>Dativ (الشخص)</th><th>Akkusativ (الشيء)</th></tr>
        <tr><td>Die Kellnerin serviert</td><td>den Leuten</td><td>die Getränke.</td></tr>
        <tr><td>Heute bringt der Chef</td><td>den Gästen</td><td>das Frühstück.</td></tr>
      </table>
    `
  },
  // --- الكابيتل 22 ---
  {
    id: "a2-22",
    title: "Verben mit Dativ",
    titleAr: "الأفعال التي تأخذ حالة الجر فقط (Dativ)",
    category: "الأفعال",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>هناك مجموعة من الأفعال لا تحتاج إلى مفعول به (Akkusativ)، بل تحتاج إلى "شخص" في حالة الجر (Dativ). هذه الأفعال يجب حفظها.</p>
      <h4>🔹 1. أفعال Dativ (شخص):</h4>
      <ul>
        <li><b>helfen</b> (يساعد): Ich helfe <b>dir</b> (Dativ).</li>
        <li><b>danken</b> (يشكر): Ich danke <b>dir</b> (Dativ).</li>
        <li><b>gratulieren</b> (يهنئ): Der Mann gratuliert <b>der Frau</b> (Dativ).</li>
        <li><b>zuhören</b> (يستمع): Die Kinder hören <b>der Oma</b> (Dativ) zu.</li>
      </ul>
      <h4>🔹 2. أفعال Dativ (شخص) + Nominativ (شيء):</h4>
      <ul>
        <li><b>gefallen</b> (يعجب): Das Haus gefällt <b>den Leuten</b> (Dativ).</li>
        <li><b>schmecken</b> (طعمه جيد): Der Wein schmeckt <b>dem Mann</b> (Dativ) nicht.</li>
        <li><b>passen</b> (يناسب): Die Schuhe passen <b>der Frau</b> (Dativ) gut.</li>
        <li><b>gehören</b> (يمتلك): Das Auto gehört <b>dem Chef</b> (Dativ).</li>
      </ul>
    `
  },
    // --- الكابيتل 23 ---
  {
    id: "a2-23",
    title: "Ich war, ich hatte",
    titleAr: "الماضي البسيط للأفعال sein و haben (Präteritum)",
    category: "الأفعال",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>الفعلان <b>sein</b> (يكون) و <b>haben</b> (يملك) هما الفعلان الوحيدان اللذان نستخدم معهما الماضي البسيط (Präteritum) في اللغة المنطوقة، بينما باقي الأفعال نستخدم معها الماضي التام (Perfekt).</p>

      <h4>🔹 جدول التصريف:</h4>
      <table>
        <tr><th>الضمير</th><th>sein (يكون)</th><th>haben (يملك)</th></tr>
        <tr><td>ich</td><td><b>war</b></td><td><b>hatte</b></td></tr>
        <tr><td>du</td><td><b>warst</b></td><td><b>hattest</b></td></tr>
        <tr><td>er/sie/es</td><td><b>war</b></td><td><b>hatte</b></td></tr>
        <tr><td>wir</td><td><b>waren</b></td><td><b>hatten</b></td></tr>
        <tr><td>ihr</td><td><b>wart</b></td><td><b>hattet</b></td></tr>
        <tr><td>sie/Sie</td><td><b>waren</b></td><td><b>hatten</b></td></tr>
      </table>

      <h4>📝 أمثلة:</h4>
      <ul>
        <li><b>Präteritum:</b> Ich <b>war</b> ledig. Ich <b>hatte</b> keine Kinder. (كنت أعزب. لم يكن لدي أطفال).</li>
        <li><b>Präsens:</b> Ich <b>bin</b> verheiratet. Ich <b>habe</b> vier Kinder. (أنا متزوج. لدي أربعة أطفال).</li>
      </ul>
    `
  },
  
  // --- الكابيتل 24 ---
  {
    id: "a2-24",
    title: "Was hast du gestern gemacht?",
    titleAr: "الماضي التام باستخدام الفعل المساعد haben (Perfekt mit haben)",
    category: "الأفعال",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>للتحدث عن شيء حدث في الماضي (أمس، الأسبوع الماضي...)، نستخدم صيغة <b>Perfekt</b>. معظم الأفعال في الألمانية تأخذ الفعل المساعد <b>haben</b>.</p>

      <h4>🔹 تركيب الجملة (Satzbau):</h4>
      <p>الفعل المساعد (haben) يأتي في <b>المركز الثاني</b>، والفعل الأساسي يتحول إلى <b>Partizip Perfekt</b> ويأتي في <b>نهاية الجملة</b>.</p>
      
      <table>
        <tr><th>Position 2 (الفعل المساعد)</th><th>Mitte (باقي الجملة)</th><th>Ende (Partizip Perfekt)</th></tr>
        <tr><td>Was <b>hast</b></td><td>du gestern</td><td><b>gemacht</b>?</td></tr>
        <tr><td>Ich <b>habe</b></td><td>zehn Stunden</td><td><b>gearbeitet</b>.</td></tr>
        <tr><td>Dann <b>habe</b></td><td>ich ein Brot</td><td><b>gegessen</b>.</td></tr>
      </table>

      <h4>🔹 كيف نصنع Partizip Perfekt للأفعال المنتظمة؟</h4>
      <p>نضيف المقطع <b>ge-</b> في البداية و <b>-t</b> في النهاية.</p>
      <ul>
        <li>arbeiten -> ge<b>arbeit</b>et</li>
        <li>machen -> ge<b>mach</b>t</li>
      </ul>
      
      <h4>🔹 والأفعال غير المنتظمة؟</h4>
      <p>تتغير حركة الجذر وتأخذ النهاية <b>-en</b>.</p>
      <ul>
        <li>essen -> ge<b>gess</b>en</li>
        <li>trinken -> ge<b>trunk</b>en</li>
        <li>lesen -> ge<b>les</b>en</li>
      </ul>
    `
  },
    // --- الكابيتل 25 ---
  {
    id: "a2-25",
    title: "Ich bin gekommen, ich habe gelacht",
    titleAr: "الماضي التام باستخدام الفعل المساعد sein (Perfekt mit sein)",
    category: "الأفعال",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>في اللغة الألمانية، معظم الأفعال تستخدم <b>haben</b> في الماضي التام (Perfekt). ولكن هناك مجموعة خاصة من الأفعال تستخدم الفعل المساعد <b>sein</b> (يكون).</p>

      <h4>🔹 متى نستخدم (sein)؟</h4>
      <p>نستخدم (sein) مع الأفعال التي تعبر عن:</p>
      <ul>
        <li><b>1. الحركة من مكان لآخر (Bewegung):</b> gehen (يذهب)، fahren (يسافر)، fliegen (يطير)، aufstehen (يستيقظ/ينهض)، kommen (يأتي).</li>
        <li><b>2. تغير الحالة أو الوضع (Zustandsänderung):</b> aufwachen (يستيقظ من النوم)، einschlafen (يغلبه النوم)، wachsen (ينمو)، sterben (يموت)، werden (يصبح).</li>
        <li><b>3. أفعال محددة:</b> sein (يكون - الفعل المساعد نفسه -> <b>ist gewesen</b>)، bleiben (يبقى -> <b>ist geblieben</b>)، passieren (يحدث).</li>
      </ul>

      <h4>🔹 قاعدة ذهبية:</h4>
      <p>الفعل المساعد (sein) يُصرّف في المركز الثاني، والفعل الأساسي يتحول إلى Partizip Perfekt ويأتي في النهاية.</p>
      
      <div class="example-box">
        <p>Ich <b>bin</b> um 7 Uhr <b>aufgestanden</b>. (استيقظت الساعة 7).</p>
        <p>Wir <b>sind</b> nach Berlin <b>geflogen</b>. (سافرنا بالطائرة إلى برلين).</p>
        <p>Er <b>ist</b> zu Hause <b>geblieben</b>. (بقي في المنزل).</p>
      </div>

      <h4>📝 جدول تصريف sein في الماضي:</h4>
      <table>
        <tr><th>الضمير</th><th>sein (المساعد)</th><th>Partizip Perfekt</th></tr>
        <tr><td>ich</td><td>bin</td><td>gegangen</td></tr>
        <tr><td>du</td><td>bist</td><td>gefahren</td></tr>
        <tr><td>er/sie/es</td><td>ist</td><td>gekommen</td></tr>
        <tr><td>wir</td><td>sind</td><td>geflogen</td></tr>
        <tr><td>ihr</td><td>seid</td><td>aufgestanden</td></tr>
        <tr><td>sie/Sie</td><td>sind</td><td>geblieben</td></tr>
      </table>
    `
  },

  // --- الكابيتل 26 ---
  {
    id: "a2-26",
    title: "Gesehen – eingekauft – bezahlt",
    titleAr: "تصريف اسم المفعول (Partizip Perfekt)",
    category: "الأفعال",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>لصنع الماضي التام (Perfekt)، نحتاج إلى تحويل الفعل الأساسي إلى <b>Partizip Perfekt</b>. طريقة التحويل تعتمد على نوع الفعل (منتظم، غير منتظم، منفصل، غير منفصل).</p>

      <h4>🔹 1. الأفعال المنتظمة (Regelmäßige Verben):</h4>
      <p>نضيف <b>ge-</b> في البداية و <b>-t</b> في النهاية.</p>
      <ul>
        <li>kaufen -> <b>ge</b>kauf<b>t</b></li>
        <li>machen -> <b>ge</b>mach<b>t</b></li>
      </ul>

      <h4>🔹 2. الأفعال غير المنتظمة (Unregelmäßige Verben):</h4>
      <p>نضيف <b>ge-</b> في البداية، ويتغير حرف العلة (Vokalwechsel)، وتأخذ النهاية <b>-en</b>.</p>
      <ul>
        <li>sehen -> <b>ge</b>s<b>e</b>h<b>en</b> (لاحظ تغير e إلى e).</li>
        <li>gehen -> <b>ge</b>g<b>a</b>ng<b>en</b> (لاحظ تغير e إلى a).</li>
        <li>schreiben -> <b>ge</b>schr<b>ie</b>b<b>en</b>.</li>
      </ul>
      <p><i>تنبيه:</i> بعض الأفعال غير المنتظمة تأخذ <b>-t</b> في النهاية وتتغير فيها أيضاً (مثل: denken -> ge<b>dach</b>t، bringen -> ge<b>brach</b>t).</p>

      <h4>🔹 3. الأفعال المنفصلة (Trennbare Verben):</h4>
      <p>نضع <b>ge-</b> بين البادئة والفعل.</p>
      <ul>
        <li>einkaufen -> ein<b>ge</b>kauft</li>
        <li>aufstehen -> auf<b>ge</b>standen</li>
      </ul>

      <h4>🔹 4. الأفعال غير المنفصلة (Untrennbare Verben):</h4>
      <p>إذا بدأ الفعل ببادئة غير منفصلة (مثل: be-, emp-, ent-, er-, ge-, ver-, zer-)، <b>لا نضيف ge-</b> إطلاقاً.</p>
      <ul>
        <li>verkaufen -> verkauft</li>
        <li>verstehen -> verstanden</li>
        <li>besuchen -> besucht</li>
      </ul>

      <h4>🔹 5. الأفعال المنتهية بـ -ieren:</h4>
      <p>لا تأخذ <b>ge-</b>، وتنتهي بـ <b>-t</b>.</p>
      <ul>
        <li>telefonieren -> telefoniert</li>
        <li>studieren -> studiert</li>
      </ul>
    `
  },
    // --- الكابيتل 27 ---
  {
    id: "a2-27",
    title: "Ich konnte, ich musste, ich wollte",
    titleAr: "الماضي البسيط للأفعال الناقصة (Präteritum: Modalverben)",
    category: "الأفعال",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>الأفعال الناقصة (Modalverben) مثل (können, müssen, wollen) لا نستخدم معها الماضي التام (Perfekt) في الكلام العادي، بل نستخدم الماضي البسيط (Präteritum).</p>

      <h4>🔹 جدول تصريف الأفعال الناقصة في الماضي:</h4>
      <table>
        <tr><th>الضمير</th><th>können (يستطيع)</th><th>müssen (يجب)</th><th>dürfen (يُسمح)</th><th>wollen (يريد)</th><th>sollen (ينبغي)</th></tr>
        <tr><td>ich</td><td><b>konnte</b></td><td><b>musste</b></td><td><b>durfte</b></td><td><b>wollte</b></td><td><b>sollte</b></td></tr>
        <tr><td>du</td><td>konntest</td><td>musstest</td><td>durftest</td><td>wolltest</td><td>solltest</td></tr>
        <tr><td>er/sie/es</td><td><b>konnte</b></td><td><b>musste</b></td><td><b>durfte</b></td><td><b>wollte</b></td><td><b>sollte</b></td></tr>
        <tr><td>wir</td><td>konnten</td><td>mussten</td><td>durften</td><td>wollten</td><td>sollten</td></tr>
        <tr><td>ihr</td><td>konntet</td><td>musstet</td><td>durftet</td><td>wolltet</td><td>solltet</td></tr>
        <tr><td>sie/Sie</td><td>konnten</td><td>mussten</td><td>durften</td><td>wollten</td><td>sollten</td></tr>
      </table>

      <h4>⚠️ تنبيه هام:</h4>
      <p>الفعل <b>möchten</b> (يرغب) ليس له ماضي بسيط. إذا أردنا التحدث عن الرغبة في الماضي نستخدم <b>wollte</b> (أراد).</p>
      <div class="example-box">
        <p>Heute <b>möchte</b> ich einen Wein. (اليوم أرغب في نبيذ).</p>
        <p>Gestern <b>wollte</b> ich ein Bier. (أمس أردت بيرة).</p>
      </div>
    `
  },

  // --- الكابيتل 28 ---
  {
    id: "a2-28",
    title: "Gestern hatte ich Durst und habe Saft getrunken",
    titleAr: "استخدام الأزمنة (Zeitengebrauch)",
    category: "الأفعال",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>في اللغة الألمانية، هناك 3 أزمنة رئيسية للتحدث عن الماضي والمضارع. معرفة متى نستخدم كل زمن هو سر التحدث بطلاقة.</p>

      <h4>🔹 1. المضارع (Präsens):</h4>
      <p>نستخدمه للحديث عن <b>الحاضر</b> و <b>المستقبل القريب</b>.</p>
      <ul>
        <li>Ich <b>arbeite</b> heute. (أنا أعمل اليوم).</li>
        <li>Morgen <b>fahre</b> ich nach Berlin. (غداً سأسافر إلى برلين).</li>
      </ul>

      <h4>🔹 2. الماضي التام (Perfekt):</h4>
      <p>هو الزمن الأكثر استخداماً في <b>المحادثات اليومية</b> والرسائل. نستخدمه لمعظم الأفعال.</p>
      <ul>
        <li>Ich <b>habe</b> gearbeitet. (لقد عملت).</li>
        <li>Wir <b>sind</b> gefahren. (لقد سافرنا).</li>
      </ul>

      <h4>🔹 3. الماضي البسيط (Präteritum):</h4>
      <p>نستخدمه في <b>الكتابة</b> (القصص، الأخبار)، وأيضاً في المحادثة مع 3 مجموعات فقط:</p>
      <ul>
        <li>الأفعال المساعدة: <b>sein</b> (war) و <b>haben</b> (hatte).</li>
        <li>الأفعال الناقصة: <b>können</b> (konnte)، <b>müssen</b> (musste)... إلخ.</li>
        <li>بعض الأفعال الشاذة التي يُفضل استخدامها في الماضي البسيط (مثل: geben -> gab, wissen -> wusste).</li>
      </ul>
    `
  },

  // --- الكابيتل 29 ---
  {
    id: "a2-29",
    title: "Sie wäscht sich",
    titleAr: "الأفعال الانعكاسية (Reflexive Verben)",
    category: "الأفعال",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>الأفعال الانعكاسية هي أفعال يكون فيها الفاعل والمفعول به نفس الشخص (أنا أغسل <b>نفسي</b>). في الألمانية، نستخدم ضميراً خاصاً يسمى (Reflexivpronomen).</p>

      <h4>🔹 الضمائر الانعكاسية (في حالة Akkusativ):</h4>
      <table>
        <tr><th>الضمير</th><th>الضمير الانعكاسي</th><th>مثال (sich waschen)</th></tr>
        <tr><td>ich</td><td><b>mich</b></td><td>Ich wasche <b>mich</b>.</td></tr>
        <tr><td>du</td><td><b>dich</b></td><td>Du wäschst <b>dich</b>.</td></tr>
        <tr><td>er/sie/es</td><td><b>sich</b></td><td>Er wäscht <b>sich</b>.</td></tr>
        <tr><td>wir</td><td><b>uns</b></td><td>Wir waschen <b>uns</b>.</td></tr>
        <tr><td>ihr</td><td><b>euch</b></td><td>Ihr wascht <b>euch</b>.</td></tr>
        <tr><td>sie/Sie</td><td><b>sich</b></td><td>Sie waschen <b>sich</b>.</td></tr>
      </table>

      <h4>🔹 1. أفعال انعكاسية حقيقية:</h4>
      <p>الفعل لا يكتمل معناه إلا بالضمير الانعكاسي (مثل: sich beeilen - يُسرع، sich freuen - يفرح).</p>
      <ul>
        <li>Ich <b>freue mich</b>. (أنا سعيد).</li>
      </ul>

      <h4>🔹 2. أفعال متبادلة (Reziprok):</h4>
      <p>تعني "بعضنا البعض".</p>
      <ul>
        <li>Sie küssen <b>sich</b>. (إنهم يقبلون بعضهم البعض).</li>
      </ul>

      <h4>📝 ملاحظات هامة:</h4>
      <ul>
        <li>الضمير الانعكاسي يأتي عادة بعد الفعل المُصرّف مباشرة: (Er wäscht <b>sich</b> heute).</li>
        <li>في الماضي التام (Perfekt)، الأفعال الانعكاسية تأخذ <b>haben</b> دائماً: (Er hat <b>sich</b> geärgert).</li>
      </ul>
    `
  },
    // --- الكابيتل 30 ---
  {
    id: "a2-30",
    title: "Im, am, um, von ... bis, nach und vor",
    titleAr: "حروف الجر الزمنية (Temporale Präpositionen)",
    category: "حروف الجر",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>لكي نجيب على سؤال <b>Wann?</b> (متى؟)، نستخدم حروف جر مختلفة حسب نوع الوقت (سنة، شهر، يوم، ساعة).</p>

      <h4>🔹 1. متى نستخدم (im, am, um)؟</h4>
      <table>
        <tr><th>حرف الجر</th><th>يُستخدم مع</th><th>أمثلة</th></tr>
        <tr><td><b>im</b></td><td>الأشهر، الفصول، السنوات (بدون رقم)</td><td>im Januar, im Sommer, im Jahr 2020</td></tr>
        <tr><td><b>am</b></td><td>الأيام، التواريخ، أوقات اليوم (ما عدا الليل)</td><td>am Montag, am 12. Mai, am Morgen</td></tr>
        <tr><td><b>um</b></td><td>الساعات (الوقت المحدد)</td><td>um 8 Uhr, um Mitternacht</td></tr>
        <tr><td><b>in</b></td><td>الليل فقط (استثناء)</td><td>in der Nacht</td></tr>
        <tr><td><b>بدون حرف جر</b></td><td>السنوات (أرقام فقط)</td><td>1992, 2009</td></tr>
      </table>

      <h4>🔹 2. حروف جر لتحديد البداية والنهاية:</h4>
      <ul>
        <li><b>bis</b> (حتى): Ich bleibe <b>bis</b> morgen. (أبقى حتى الغد).</li>
        <li><b>ab / von ... an</b> (اعتباراً من): <b>Ab</b> morgen rauche ich nicht mehr. (اعتباراً من الغد لن أدخن).</li>
        <li><b>zwischen</b> (بين): <b>Zwischen</b> 5 und 7 bin ich nicht zu Hause.</li>
        <li><b>vor / nach</b> (قبل / بعد): <b>Vor</b> meiner Party muss ich einkaufen.</li>
        <li><b>seit</b> (منذ - للماضي المستمر): Ich bin <b>seit</b> drei Monaten in Deutschland.</li>
        <li><b>von ... bis</b> (من ... إلى): <b>Von</b> Montag <b>bis</b> Freitag arbeite ich.</li>
        <li><b>vom ... bis zum</b> (من ... إلى - مع التواريخ): <b>Vom</b> 3.4. <b>bis zum</b> 15.4. habe ich Urlaub.</li>
      </ul>
    `,
    // 👇 التمارين التفاعلية (تم استخراجها من صور Übungen)
    exercises: [
      mc("Ich habe ___ 12. Mai Geburtstag.", ["im", "am", "um", "in"], 1, "التواريخ تأخذ حرف الجر am."),
      mc("Der Kurs beginnt ___ 9 Uhr.", ["im", "am", "um", "in"], 2, "الساعات المحددة تأخذ حرف الجر um."),
      mc("___ Sommer fahren wir nach Italien.", ["Im", "Am", "Um", "In"], 0, "الفصول تأخذ حرف الجر im."),
      mc("Ich arbeite ___ Montag ___ Freitag.", ["von / bis", "ab / bis", "seit / bis", "vor / nach"], 0, "للتعبير عن فترة من... إلى نستخدم von...bis."),
      mc("___ drei Monaten lerne ich Deutsch.", ["Vor", "Seit", "Ab", "Bis"], 1, "للتعبير عن شيء بدأ في الماضي ومستمر نستخدم seit."),
      mc("Ich bin ___ 5 und 7 Uhr nicht zu Hause.", ["von", "bis", "zwischen", "ab"], 2, "بين وقتين نستخدم zwischen."),
      mc("___ der Party muss ich aufräumen.", ["Vor", "Nach", "Seit", "Bis"], 1, "بعد الحفلة (nach)."),
      mc("___ 1999 wohne ich in Berlin.", ["Im", "Seit", "Ab", "Am"], 1, "منذ عام 1999 (seit) - أو يمكن استخدام Ab إذا كانت البداية في المستقبل، لكن seit أصح هنا."),
    ]
  },
    // --- الكابيتل 31 ---
  {
    id: "a2-31",
    title: "Aus, bei, mit, nach, seit, von oder zu",
    titleAr: "حروف الجر مع حالة الجر (Präpositionen mit Dativ)",
    category: "حروف الجر",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>هناك مجموعة من حروف الجر تأخذ دائماً حالة <b>Dativ</b>. يمكنك حفظها بهذه الجملة: <b>(aus, bei, mit, nach, seit, von, zu)</b>.</p>

      <h4>🔹 استخدامات أهم حروف الجر:</h4>
      <table>
        <tr><th>حرف الجر</th><th>المعنى / الاستخدام</th><th>مثال</th></tr>
        <tr><td><b>aus</b></td><td>من (مكان/مادة)</td><td>Er kommt <b>aus</b> dem Haus. (من المنزل)</td></tr>
        <tr><td><b>bei</b></td><td>عند (شخص/شركة)</td><td>Ich wohne <b>bei</b> meinen Eltern. (عند والديّ)</td></tr>
        <tr><td><b>mit</b></td><td>مع (شخص/وسيلة)</td><td>Ich fahre <b>mit</b> dem Bus. (بالحافلة)</td></tr>
        <tr><td><b>nach</b></td><td>إلى (مدن/دول بدون أداة)</td><td>Ich fahre <b>nach</b> Berlin. (إلى برلين)</td></tr>
        <tr><td><b>seit</b></td><td>منذ (الماضي المستمر)</td><td>Ich lerne <b>seit</b> einem Jahr Deutsch.</td></tr>
        <tr><td><b>von</b></td><td>من (شخص/مكان)</td><td>Ich komme <b>von</b> der Arbeit. (من العمل)</td></tr>
        <tr><td><b>zu</b></td><td>إلى (أشخاص/أماكن محددة)</td><td>Ich gehe <b>zum</b> Arzt. (إلى الطبيب)</td></tr>
      </table>

      <h4>⚠️ اختصارات هامة:</h4>
      <ul>
        <li>bei + dem = <b>beim</b></li>
        <li>von + dem = <b>vom</b></li>
        <li>zu + dem = <b>zum</b></li>
        <li>zu + der = <b>zur</b></li>
      </ul>
    `,
    exercises: [
      mc("Ich komme ___ der Schule.", ["aus", "bei", "mit", "zu"], 0, "للتعبير عن القدوم من مكان نستخدم aus."),
      mc("Wir fahren ___ dem Zug.", ["aus", "bei", "mit", "nach"], 2, "للتعبير عن وسيلة المواصلات نستخدم mit (مع Dativ)."),
      mc("Ich wohne ___ meiner Tante.", ["aus", "bei", "mit", "nach"], 1, "للسكن عند شخص نستخدم bei."),
      mc("Er fährt morgen ___ München.", ["aus", "bei", "mit", "nach"], 3, "للسفر إلى مدينة نستخدم nach."),
      mc("Ich gehe ___ Zahnarzt.", ["aus", "beim", "mit", "zum"], 3, "للذهاب إلى شخص (طبيب) نستخدم zu + dem = zum."),
    ]
  },

  // --- الكابيتل 32 ---
  {
    id: "a2-32",
    title: "Für, um, durch, ohne und gegen",
    titleAr: "حروف الجر مع حالة النصب (Präpositionen mit Akkusativ)",
    category: "حروف الجر",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>مجموعة أخرى من حروف الجر تأخذ دائماً حالة <b>Akkusativ</b>. يمكنك حفظها بالاختصار الشهير: <b>FUDOG</b>.</p>
      <p><b>F</b>ür (لأجل/من أجل)، <b>U</b>m (حول/في تمام)، <b>D</b>urch (عبر/من خلال)، <b>O</b>hne (بدون)، <b>G</b>egen (ضد/حوالي).</p>

      <h4>🔹 استخدامات حروف الجر:</h4>
      <table>
        <tr><th>حرف الجر</th><th>المعنى / الاستخدام</th><th>مثال</th></tr>
        <tr><td><b>für</b></td><td>لأجل / لشخص</td><td>Das Geschenk ist <b>für</b> dich. (الهدية لك).</td></tr>
        <tr><td><b>um</b></td><td>حول / في تمام (للوقت)</td><td>Wir sitzen <b>um</b> den Tisch. / <b>Um</b> 8 Uhr.</td></tr>
        <tr><td><b>durch</b></td><td>عبر / من خلال</td><td>Wir gehen <b>durch</b> den Park. (عبر الحديقة).</td></tr>
        <tr><td><b>ohne</b></td><td>بدون</td><td>Ich trinke Kaffee <b>ohne</b> Zucker. (بدون سكر).</td></tr>
        <tr><td><b>gegen</b></td><td>ضد / نحو</td><td>Er fährt <b>gegen</b> den Baum. (نحو/ضد الشجرة).</td></tr>
      </table>

      <h4>⚠️ ملاحظة هامة:</h4>
      <p>حرف الجر <b>ohne</b> غالباً يأتي <b>بدون أداة تعريف</b>: (ohne Zucker, ohne Milch).</p>
    `,
    exercises: [
      mc("Das Geschenk ist ___ dich.", ["um", "für", "durch", "ohne"], 1, "للتعبير عن شيء مخصص لشخص نستخدم für."),
      mc("Wir gehen ___ den Park.", ["um", "für", "durch", "ohne"], 2, "للمرور عبر مكان نستخدم durch."),
      mc("Ich trinke Tee ___ Zucker.", ["um", "für", "durch", "ohne"], 3, "بدون سكر (ohne)."),
      mc("Der Zug fährt ___ den Tunnel.", ["um", "für", "durch", "ohne"], 2, "عبر النفق (durch)."),
      mc("Das Auto fährt ___ die Ecke.", ["um", "für", "gegen", "ohne"], 0, "الدوران حول الزاوية نستخدم um."),
    ]
  },

  // --- الكابيتل 33 ---
  {
    id: "a2-33",
    title: "Wo? Im Kino",
    titleAr: "حروف الجر المتغيرة مع Dativ (Wechselpräpositionen im Dativ)",
    category: "حروف الجر",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>هناك 9 حروف جر تسمى "متغيرة" (Wechselpräpositionen) لأنها تأخذ <b>Dativ</b> أو <b>Akkusativ</b> حسب السياق. في هذا الكابيتل، سنركز على استخدامها مع <b>Dativ</b>.</p>

      <h4>🔹 القاعدة الذهبية:</h4>
      <p>إذا كان السؤال <b>Wo?</b> (أين؟ - مكان ثابت)، نستخدم <b>Dativ</b>.</p>

      <h4>🔹 حروف الجر التسعة:</h4>
      <p><b>in</b> (في)، <b>an</b> (على/بجانب)، <b>auf</b> (على)، <b>vor</b> (أمام)، <b>hinter</b> (خلف)، <b>über</b> (فوق)، <b>unter</b> (تحت)، <b>neben</b> (بجانب)، <b>zwischen</b> (بين).</p>

      <h4>📝 أمثلة توضيحية:</h4>
      <ul>
        <li>Der Hut ist <b>auf</b> dem Kopf. (القبعة على الرأس).</li>
        <li>Die Tasche steht <b>neben</b> dem Mädchen. (الحقيبة بجانب الفتاة).</li>
        <li>Der Vogel fliegt <b>über</b> ihr. (الطائر يطير فوقها).</li>
      </ul>

      <h4>⚠️ اختصارات هامة:</h4>
      <ul>
        <li>in + dem = <b>im</b></li>
        <li>an + dem = <b>am</b></li>
      </ul>
    `,
    exercises: [
      mc("Wo ist die Katze? Sie ist ___ dem Tisch. (تحت)", ["auf", "unter", "über", "neben"], 1, "تحت الطاولة (unter) مع Dativ."),
      mc("Wo ist die Lampe? Sie hängt ___ der Decke. (على/معلقة)", ["an", "auf", "in", "unter"], 0, "معلقة على السقف (an) مع Dativ."),
      mc("Wo ist das Bild? Es hängt ___ der Wand. (على)", ["an", "auf", "in", "über"], 0, "على الحائط (an) مع Dativ."),
      mc("Wo ist der Hund? Er liegt ___ dem Sofa. (أمام)", ["hinter", "vor", "neben", "über"], 1, "أمام الأريكة (vor) مع Dativ."),
      mc("Wo ist die Bank? Sie ist ___ der Post und der Schule. (بين)", ["zwischen", "neben", "hinter", "unter"], 0, "بين (zwischen) مع Dativ."),
    ]
  },
    // --- الكابيتل 34 ---
  {
    id: "a2-34",
    title: "Im Kino oder ins Kino?",
    titleAr: "حروف الجر المتغيرة مع Dativ و Akkusativ",
    category: "حروف الجر",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>حروف الجر التسعة (in, an, auf, vor, hinter, über, unter, neben, zwischen) تتغير حالتها الإعرابية حسب السؤال:</p>

      <h4>🔹 1. السؤال (Wo? - أين؟) -> Dativ:</h4>
      <p>إذا كان المكان ثابتاً (لا توجد حركة من مكان لآخر).</p>
      <ul>
        <li>Der Lolly fällt <b>in die</b> Tasche (حركة، لذلك Akkusativ).</li>
        <li>Der Hut ist <b>auf dem</b> Kopf (ثابت، لذلك Dativ).</li>
      </ul>
      <p>اختصارات: in + dem = <b>im</b> | an + dem = <b>am</b>.</p>

      <h4>🔹 2. السؤال (Wohin? - إلى أين؟) -> Akkusativ:</h4>
      <p>إذا كان هناك حركة أو انتقال من مكان لآخر (تغير الموقع).</p>
      <ul>
        <li>Der Löwe springt <b>auf den</b> Boden (حركة، Akkusativ).</li>
      </ul>
      <p>اختصارات: in + das = <b>ins</b> | an + das = <b>ans</b>.</p>

      <h4>📊 أمثلة مقارنة:</h4>
      <table>
        <tr><th>Wo? (Dativ - ثابت)</th><th>Wohin? (Akkusativ - حركة)</th></tr>
        <tr><td>Ich bin <b>im</b> Kino.</td><td>Ich gehe <b>ins</b> Kino.</td></tr>
        <tr><td>Das Buch liegt <b>auf dem</b> Tisch.</td><td>Ich lege das Buch <b>auf den</b> Tisch.</td></tr>
      </table>
    `,
    exercises: [
      mc("Wo bist du? - Ich bin ___ Kino.", ["in das", "im", "ins", "in der"], 1, "المكان ثابت (Wo)، لذا نستخدم Dativ: in + dem = im."),
      mc("Wohin gehst du? - Ich gehe ___ Kino.", ["im", "in das", "ins", "in der"], 2, "هناك حركة (Wohin)، لذا نستخدم Akkusativ: in + das = ins."),
      mc("Das Buch liegt ___ Tisch.", ["auf den", "auf dem", "auf das", "auf der"], 1, "المكان ثابت، نستخدم Dativ: auf dem Tisch."),
      mc("Ich lege das Buch ___ Tisch.", ["auf den", "auf dem", "auf das", "auf der"], 0, "هناك حركة، نستخدم Akkusativ: auf den Tisch."),
      mc("Die Katze springt ___ Sofa.", ["auf dem", "auf das", "auf der", "auf den"], 1, "هناك حركة، نستخدم Akkusativ: auf das Sofa."),
    ]
  },

  // --- الكابيتل 35 ---
  {
    id: "a2-35",
    title: "Beim Bäcker, zum Friseur, auf den Sportplatz",
    titleAr: "حروف الجر المكانية (Lokale Präpositionen)",
    category: "حروف الجر",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>لكي نتحدث عن الأماكن (أين نذهب؟ من أين نأتي؟)، نستخدم حروف جر مختلفة حسب نوع المكان (مدينة، دولة، شخص، شركة...).</p>

      <h4>🔹 1. السؤال (Wo? - أين؟) - Dativ دائماً:</h4>
      <ul>
        <li><b>in</b> (في): in Berlin, in Deutschland, im Haus.</li>
        <li><b>an</b> (على/بجانب): an der Station, am Strand.</li>
        <li><b>auf</b> (على): auf dem Sportplatz.</li>
        <li><b>bei</b> (عند): bei Lisa, beim Arzt (عند شخص أو شركة).</li>
      </ul>

      <h4>🔹 2. السؤال (Wohin? - إلى أين؟) - Akkusativ (أو Dativ):</h4>
      <ul>
        <li><b>nach</b> (إلى): للمدن والدول (بدون أداة) -> nach Paris, nach Japan.</li>
        <li><b>in</b> (إلى): للدول (مع أداة) والأماكن المغلقة -> ins Haus, in die Schweiz.</li>
        <li><b>an</b> (إلى): an die Station, an den Strand.</li>
        <li><b>auf</b> (إلى): auf den Sportplatz.</li>
        <li><b>zu</b> (إلى): للأشخاص والشركات -> zu Lisa, zum Arzt.</li>
      </ul>

      <h4>🔹 3. السؤال (Woher? - من أين؟) - Dativ دائماً:</h4>
      <ul>
        <li><b>aus</b> (من): aus Paris, aus Deutschland.</li>
        <li><b>von</b> (من): vom Strand, von Lisa.</li>
      </ul>

      <h4>⚠️ اختصارات هامة:</h4>
      <p>in + dem = <b>im</b> | an + dem = <b>am</b> | bei + dem = <b>beim</b> | von + dem = <b>vom</b> | zu + dem = <b>zum</b> | in + das = <b>ins</b></p>
    `,
    exercises: [
      mc("Ich gehe ___ Bäcker.", ["zum", "beim", "im", "am"], 0, "للذهاب إلى شخص (البائع) نستخدم zu + dem = zum."),
      mc("Ich bin ___ Bäcker (أنا عند البائع).", ["zum", "beim", "im", "am"], 1, "للتواجد عند شخص نستخدم bei + dem = beim."),
      mc("Wir fahren ___ Strand.", ["zum", "im", "an den", "am"], 2, "للذهاب إلى الشاطئ (حركة) نستخدم an + den."),
      mc("Wir sind ___ Strand (نحن على الشاطئ).", ["an den", "am", "im", "zum"], 1, "للتواجد على الشاطئ (ثابت) نستخدم an + dem = am."),
      mc("Ich komme ___ Deutschland.", ["aus", "von", "in", "zu"], 0, "القدوم من دولة نستخدم aus."),
      mc("Er geht ___ Hause (إلى المنزل).", ["nach", "zu", "in", "aus"], 0, "التعبير الشاذ 'nach Hause' يعني إلى المنزل."),
    ]
  },
    // --- الكابيتل 36 ---
  {
    id: "a2-36",
    title: "Ein netter Mann! Ich liebe den netten Mann",
    titleAr: "تصريف الصفات مع الرفع والنصب (Nominativ und Akkusativ)",
    category: "الصفات",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>عندما تصف اسماً (مثل: رجل لطيف)، فإن الصفة تأخذ حرفاً إضافياً في نهايتها. هذا الحرف يعتمد على: (جنس الاسم، حالته الإعرابية، ونوع الأداة التي قبله).</p>
      <p>القاعدة الذهبية: <b>الصفة تأخذ دائماً حرفاً يعكس أداة التعريف (der/die/das).</b></p>

      <h4>🔹 1. حالة الرفع (Nominativ):</h4>
      <table>
        <tr><th>الجنس</th><th>مع أداة التعريف (der/die/das)</th><th>مع أداة النكرة (ein/eine)</th></tr>
        <tr><td>مذكر</td><td>der nett<b>e</b> Mann</td><td>ein nett<b>er</b> Mann</td></tr>
        <tr><td>محايد</td><td>das nett<b>e</b> Kind</td><td>ein nett<b>es</b> Kind</td></tr>
        <tr><td>مؤنث</td><td>die nett<b>e</b> Frau</td><td>eine nett<b>e</b> Frau</td></tr>
        <tr><td>جمع</td><td>die nett<b>en</b> Leute</td><td>nette Leute (بدون أداة)</td></tr>
      </table>

      <h4>🔹 2. حالة النصب (Akkusativ):</h4>
      <p>المذكر فقط هو الذي يتغير (تأخذ الصفة <code>-en</code>)، بينما المحايد والمؤنث يبقيان <code>-e</code>.</p>
      <table>
        <tr><th>الجنس</th><th>مع أداة التعريف (den/das/die)</th><th>مع أداة النكرة (einen/ein/eine)</th></tr>
        <tr><td>مذكر</td><td>den nett<b>en</b> Mann</td><td>einen nett<b>en</b> Mann</td></tr>
        <tr><td>محايد</td><td>das nett<b>e</b> Kind</td><td>ein nett<b>es</b> Kind</td></tr>
        <tr><td>مؤنث</td><td>die nett<b>e</b> Frau</td><td>eine nett<b>e</b> Frau</td></tr>
        <tr><td>جمع</td><td>die nett<b>en</b> Leute</td><td>nette Leute</td></tr>
      </table>

      <h4>⚠️ ملاحظات هامة:</h4>
      <ul>
        <li>ضمائر الملكية (mein, dein, sein...) تعامل معاملة (ein) في تصريف الصفات.</li>
        <li>إذا كانت الصفة بعد الاسم (في نهاية الجملة)، لا تأخذ أي حرف إضافي: Der Mann ist <b>nett</b>.</li>
      </ul>
    `,
    exercises: [
      mc("Das ist ein nett___ Mann.", ["nett", "nette", "netter", "netten"], 2, "مذكر، Nominativ، مع ein تأخذ الصفة -er."),
      mc("Ich liebe den nett___ Mann.", ["nett", "nette", "netter", "netten"], 3, "مذكر، Akkusativ، مع den تأخذ الصفة -en."),
      mc("Das ist eine neu___ Tasche.", ["neu", "neue", "neues", "neuen"], 1, "مؤنث، Nominativ، مع eine تأخذ الصفة -e."),
      mc("Ich kaufe ein neu___ Auto.", ["neu", "neue", "neues", "neuen"], 2, "محايد، Akkusativ، مع ein تأخذ الصفة -es."),
      mc("Die Leute sind sehr nett___.", ["nett", "nette", "netter", "netten"], 0, "الصفة في نهاية الجملة لا تأخذ أي نهاية."),
    ]
  },

  // --- الكابيتل 37 ---
  {
    id: "a2-37",
    title: "Am ersten Mai",
    titleAr: "تصريف الصفات مع حالة الجر (Dativ)",
    category: "الصفات",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>في حالة الجر (Dativ)، القاعدة موحدة جداً: <b>كل الصفات تأخذ النهاية (en) بغض النظر عن جنس الاسم أو الأداة.</b></p>

      <h4>🔹 جدول حالة الجر (Dativ):</h4>
      <table>
        <tr><th>الجنس</th><th>مع أداة التعريف</th><th>مع أداة النكرة</th></tr>
        <tr><td>مذكر</td><td>mit dem nett<b>en</b> Mann</td><td>mit einem nett<b>en</b> Mann</td></tr>
        <tr><td>محايد</td><td>mit dem nett<b>en</b> Kind</td><td>mit einem nett<b>en</b> Kind</td></tr>
        <tr><td>مؤنث</td><td>mit der nett<b>en</b> Frau</td><td>mit einer nett<b>en</b> Frau</td></tr>
        <tr><td>جمع</td><td>mit den nett<b>en</b> Leuten</td><td>mit nett<b>en</b> Leuten</td></tr>
      </table>

      <h4>📝 ملاحظات إضافية:</h4>
      <ul>
        <li>حروف الجر التي تأخذ Dativ (مثل: mit, nach, aus, zu, von, bei, seit) تجعل الصفة تأخذ <b>-en</b> دائماً.</li>
        <li>التواريخ (am + اليوم) تأخذ Dativ: am erst<b>en</b> Mai (في الأول من مايو).</li>
      </ul>
    `,
    exercises: [
      mc("Ich fahre mit dem neu___ Auto.", ["neu", "neue", "neues", "neuen"], 3, "حالة Dativ (mit dem)، الصفة تأخذ -en."),
      mc("Wir sprechen mit einer nett___ Frau.", ["nett", "nette", "netter", "netten"], 3, "حالة Dativ (mit einer)، الصفة تأخذ -en."),
      mc("Am erst___ Mai ist Feiertag.", ["erst", "erste", "erster", "ersten"], 3, "التاريخ مع am يأخذ Dativ، الصفة تأخذ -en."),
      mc("Er wohnt bei sein___ Eltern.", ["sein", "seine", "seiner", "seinen"], 3, "bei + Dativ، وضمير الملكية sein في الجمع Dativ يصبح seinen، والصفة تتبعها. (هناك صعوبة في السؤال، لكن القصد أن كل شيء يأخذ -en)."),
    ]
  },
    // --- الكابيتل 38 ---
  {
    id: "a2-38",
    title: "Schneller als...",
    titleAr: "المقارنة (Komparativ und Vergleichssätze)",
    category: "الصفات",
    content: `
      <h4>💡 الفكرة ببساطة:</h4>
      <p>عندما نريد مقارنة شيئين (أسرع من، أكبر من...)، نستخدم صيغة <b>Komparativ</b>. نضيف <b>-er</b> إلى نهاية الصفة.</p>

      <h4>🔹 1. تكوين المقارنة:</h4>
      <ul>
        <li>schnell (سريع) -> schnell<b>er</b> (أسرع).</li>
        <li>klein (صغير) -> klein<b>er</b> (أصغر).</li>
      </ul>
      <p><i>ملاحظة:</i> بعض الصفات القصيرة تأخذ Umlaut (النقطتان): alt -> <b>ä</b>lter، jung -> j<b>ü</b>nger.</p>

      <h4>🔹 2. المقارنة مع "من" (als):</h4>
      <p>عندما نقول (أكبر <b>من</b>)، نستخدم <b>als</b>.</p>
      <ul>
        <li>Auto 1 ist <b>schneller als</b> Auto 2. (السيارة 1 أسرع من السيارة 2).</li>
      </ul>

      <h4>🔹 3. التساوي (wie):</h4>
      <p>عندما نقول (مثل / بنفس المقدار)، نستخدم <b>so ... wie</b>.</p>
      <ul>
        <li>Auto 1 ist <b>so schnell wie</b> Auto 2. (السيارة 1 بنفس سرعة السيارة 2).</li>
      </ul>

      <h4>⚠️ أشكال شاذة هامة:</h4>
      <ul>
        <li>gut (جيد) -> <b>besser</b> (أفضل)</li>
        <li>viel (كثير) -> <b>mehr</b> (أكثر)</li>
        <li>gern (بحب) -> <b>lieber</b> (بشكل أفضل/مفضل)</li>
        <li>hoch (عالي) -> <b>höher</b> (أعلى)</li>
      </ul>
    `,
    exercises: [
      mc("Mein Auto ist ___ als dein Auto.", ["schnell", "schneller", "am schnellsten", "so schnell"], 1, "للمقارنة نستخدم صيغة Komparativ (schneller)."),
      mc("Ich bin genauso groß ___ du.", ["als", "wie", "so", "zu"], 1, "للتعبير عن التساوي نستخدم (so... wie)، وهنا (genauso... wie)."),
      mc("Deutsch ist schwerer ___ Englisch.", ["wie", "als", "so", "zu"], 1, "للتعبير عن 'أصعب من' نستخدم (schwerer als)."),
      mc("Gestern war es kalt, aber heute ist es noch ___.", ["kalt", "kälter", "am kältesten", "kalt als"], 1, "صفة kalt تأخذ Umlaut في المقارنة لتصبح kälter."),
      mc("Ich trinke ___ Tee als Kaffee.", ["viel", "mehr", "am meisten", "gern"], 1, "المقارنة الشاذة لـ viel هي mehr."),
    ]
  }
];
