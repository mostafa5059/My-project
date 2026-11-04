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
  }
  // سنضيف باقي الكابيتلات (23, 24, 25...) هنا لاحقاً
];