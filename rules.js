const RULES_HTML = `
  <div class="rule-section open">
    <h3>1) الأزمنة في اللغة الألمانية (Die Zeiten)</h3>
    <div class="rule-content">
      <p>اللغة الألمانية تحتوي على 6 أزمنة، لكن الأكثر استخداماً في المحادثة اليومية هما: <strong>Präsens</strong> (المضارع) و <strong>Perfekt</strong> (الماضي التام).</p>
      <p><strong>أ. المضارع (Präsens):</strong></p>
      <table>
        <tr><th>الضمير</th><th>machen</th><th>fahren</th><th>sein</th></tr>
        <tr><td>ich</td><td>mache</td><td>fahre</td><td>bin</td></tr>
        <tr><td>du</td><td>machst</td><td>fährst</td><td>bist</td></tr>
        <tr><td>er/sie/es</td><td>macht</td><td>fährt</td><td>ist</td></tr>
        <tr><td>wir</td><td>machen</td><td>fahren</td><td>sind</td></tr>
        <tr><td>ihr</td><td>macht</td><td>fahrt</td><td>seid</td></tr>
        <tr><td>sie/Sie</td><td>machen</td><td>fahren</td><td>sind</td></tr>
      </table>
      <div class="example-box"><strong>أمثلة:</strong><br>Ich <strong>mache</strong> meine Hausaufgaben.<br>Er <strong>fährt</strong> nach Berlin.<br>Wir <strong>sind</strong> Studenten.</div>
      <p><strong>ب. الماضي البسيط (Präteritum):</strong> يُستخدم غالباً في الكتابة والقصص.</p>
      <div class="example-box">Ich <strong>war</strong> gestern krank.<br>Er <strong>hatte</strong> keine Zeit.<br>Sie <strong>ging</strong> nach Hause.</div>
      <p><strong>ج. الماضي التام (Perfekt):</strong> haben/sein + Partizip II — يُستخدم في المحادثة اليومية.</p>
      <div class="example-box">Ich <strong>habe</strong> einen Film <strong>gesehen</strong>.<br>Er <strong>ist</strong> nach Berlin <strong>gefahren</strong>.<br>Wir <strong>haben</strong> Deutsch <strong>gelernt</strong>.</div>
      <p><strong>د. المستقبل (Futur I):</strong> werden + Infinitiv</p>
      <div class="example-box">Ich <strong>werde</strong> morgen nach Berlin <strong>fahren</strong>.<br>Es <strong>wird</strong> wahrscheinlich <strong>regnen</strong>.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>2) الأفعال المساعدة (Modalverben)</h3>
    <div class="rule-content">
      <p>تُستخدم مع أفعال أخرى للتعبير عن الإمكانية، الضرورة، الرغبة، أو الإذن. الفعل الرئيسي يذهب إلى نهاية الجملة.</p>
      <table>
        <tr><th>الفعل</th><th>المعنى</th><th>ich</th><th>du</th><th>er/sie/es</th></tr>
        <tr><td>können</td><td>يستطيع</td><td>kann</td><td>kannst</td><td>kann</td></tr>
        <tr><td>müssen</td><td>يجب</td><td>muss</td><td>musst</td><td>muss</td></tr>
        <tr><td>wollen</td><td>يريد</td><td>will</td><td>willst</td><td>will</td></tr>
        <tr><td>dürfen</td><td>يُسمح له</td><td>darf</td><td>darfst</td><td>darf</td></tr>
        <tr><td>sollen</td><td>ينبغي</td><td>soll</td><td>sollst</td><td>soll</td></tr>
        <tr><td>mögen</td><td>يحب</td><td>mag</td><td>magst</td><td>mag</td></tr>
      </table>
      <div class="example-box">Ich <strong>kann</strong> gut <strong>schwimmen</strong>.<br>Du <strong>musst</strong> mehr <strong>lernen</strong>.<br>Er <strong>will</strong> nach Hause <strong>gehen</strong>.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>3) الحالات الإعرابية (Die Fälle)</h3>
    <div class="rule-content">
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td>Nominativ</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Akkusativ</td><td><strong>den</strong></td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Dativ</td><td><strong>dem</strong></td><td><strong>der</strong></td><td><strong>dem</strong></td><td><strong>den + n</strong></td></tr>
        <tr><td>Genitiv</td><td><strong>des + s</strong></td><td><strong>der</strong></td><td><strong>des + s</strong></td><td><strong>der</strong></td></tr>
      </table>
      <div class="example-box">Nom: <strong>Der</strong> Mann liest ein Buch.<br>Akk: Ich sehe <strong>den</strong> Mann.<br>Dat: Ich helfe <strong>dem</strong> Mann.<br>Gen: Das ist das Auto <strong>des</strong> Mann<strong>es</strong>.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>4) الأفعال المنفصلة (Trennbare Verben)</h3>
    <div class="rule-content">
      <p>البادئات (ab-, an-, auf-, aus-, ein-, mit-, zu-, zurück-) تنفصل وتذهب إلى نهاية الجملة.</p>
      <div class="example-box">Ich <strong>stehe</strong> um 7 Uhr <strong>auf</strong>.<br>Er <strong>ruft</strong> seine Mutter <strong>an</strong>.<br>في Perfekt: Ich bin um 7 Uhr <strong>auf</strong>ge<strong>standen</strong>.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>5) الأفعال الانعكاسية (Reflexive Verben)</h3>
    <div class="rule-content">
      <table>
        <tr><th>الضمير</th><th>Akkusativ</th><th>Dativ</th></tr>
        <tr><td>ich</td><td>mich</td><td>mir</td></tr>
        <tr><td>du</td><td>dich</td><td>dir</td></tr>
        <tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr>
        <tr><td>wir</td><td>uns</td><td>uns</td></tr>
        <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
        <tr><td>sie/Sie</td><td>sich</td><td>sich</td></tr>
      </table>
      <div class="example-box">Ich <strong>freue mich</strong>.<br>Du <strong>wäschst dich</strong>.<br>Ich wasche <strong>mir</strong> die Hände.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>6) حروف الجر (Präpositionen)</h3>
    <div class="rule-content">
      <p><strong>حروف جر تأخذ Akkusativ:</strong> durch, für, gegen, ohne, um, bis, entlang.</p>
      <p style="font-size:14px;color:#92400e;background:#fffbeb;padding:10px 14px;border-radius:8px;border-right:4px solid #f59e0b;"><strong>ملاحظة:</strong> <code>bis</code> غالباً تأخذ Akkusativ، لكن عند استخدامها مع حرف جر آخر (مثل <code>bis zu</code>) تأخذ حالة الحرف الآخر. <code>entlang</code> تأخذ Akkusativ عندما تأتي بعد الاسم (der Straße entlang).</p>
      <div class="example-box">Das ist <strong>für dich</strong>.<br>Ich gehe <strong>ohne dich</strong>.</div>
      <p><strong>حروف جر تأخذ Dativ:</strong> mit, nach, bei, seit, von, zu, aus, gegenüber.</p>
      <div class="example-box">Ich fahre <strong>mit dem Bus</strong>.<br>Ich komme <strong>aus der Schweiz</strong>.</div>
      <p><strong>حروف الجر المتغيرة (Wechselpräpositionen):</strong> Akkusativ عند الحركة، Dativ عند السكون.</p>
      <div class="example-box">حركة: Ich gehe <strong>in die</strong> Schule.<br>سكون: Ich bin <strong>in der</strong> Schule.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>7) الروابط (Konjunktionen)</h3>
    <div class="rule-content">
      <p><strong>روابط لا تغير الترتيب:</strong> und, oder, aber, denn, sondern.</p>
      <div class="example-box">Ich lerne Deutsch <strong>und</strong> ich wohne in Berlin.</div>
      <p><strong>روابط ترسل الفعل إلى النهاية:</strong> weil, dass, wenn, ob, als, obwohl, damit, bevor, nachdem.</p>
      <div class="example-box">Ich bleibe zu Hause, <strong>weil</strong> es <strong>regnet</strong>.<br>Ich weiß, <strong>dass</strong> er <strong>kommt</strong>.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>8) الجمل الثانوية (Nebensätze)</h3>
    <div class="rule-content">
      <p>الفعل المصرّف يذهب إلى نهاية الجملة الثانوية.</p>
      <table>
        <tr><th>الرابط</th><th>المعنى</th><th>مثال</th></tr>
        <tr><td>weil</td><td>لأن</td><td>Ich lerne Deutsch, <strong>weil</strong> ich in Deutschland studieren möchte.</td></tr>
        <tr><td>dass</td><td>أن</td><td>Ich hoffe, <strong>dass</strong> du kommst.</td></tr>
        <tr><td>wenn</td><td>إذا/عندما</td><td><strong>Wenn</strong> ich Zeit habe, komme ich.</td></tr>
        <tr><td>als</td><td>عندما (للماضي)</td><td><strong>Als</strong> ich klein war, wohnte ich in Kairo.</td></tr>
        <tr><td>obwohl</td><td>رغم أن</td><td><strong>Obwohl</strong> es regnet, gehe ich aus.</td></tr>
      </table>
    </div>
  </div>

  <div class="rule-section">
    <h3>9) المبني للمجهول (Passiv)</h3>
    <div class="rule-content">
      <p>التركيب: werden + Partizip II</p>
      <div class="example-box">Das Auto <strong>wird</strong> repariert.<br>Hier <strong>wird</strong> Deutsch <strong>gesprochen</strong>.<br>في الماضي: Das Haus <strong>wurde</strong> 1990 <strong>gebaut</strong>.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>10) الأفعال الشاذة (Unregelmäßige Verben)</h3>
    <div class="rule-content">
      <p>الأفعال الشاذة تتغير حركة الجذر في <strong>Präteritum</strong> و <strong>Perfekt</strong>.</p>
      <table>
        <tr><th>Infinitiv</th><th>Präteritum</th><th>Perfekt</th><th>Partizip II</th></tr>
        <tr><td>sein</td><td>war</td><td>ist gewesen</td><td>gewesen</td></tr>
        <tr><td>haben</td><td>hatte</td><td>hat gehabt</td><td>gehabt</td></tr>
        <tr><td>werden</td><td>wurde</td><td>ist geworden</td><td>geworden</td></tr>
        <tr><td>gehen</td><td>ging</td><td>ist gegangen</td><td>gegangen</td></tr>
        <tr><td>kommen</td><td>kam</td><td>ist gekommen</td><td>gekommen</td></tr>
        <tr><td>sehen</td><td>sah</td><td>hat gesehen</td><td>gesehen</td></tr>
        <tr><td>essen</td><td>aß</td><td>hat gegessen</td><td>gegessen</td></tr>
        <tr><td>sprechen</td><td>sprach</td><td>hat gesprochen</td><td>gesprochen</td></tr>
        <tr><td>lesen</td><td>las</td><td>hat gelesen</td><td>gelesen</td></tr>
        <tr><td>fahren</td><td>fuhr</td><td>ist gefahren</td><td>gefahren</td></tr>
      </table>
      <p style="font-size:14px;color:#065f46;background:#f0fdf4;padding:10px 14px;border-radius:8px;border-right:4px solid #10b981;"><strong>ملاحظة:</strong> <code>Perfekt</code> = الفعل المساعد (haben/sein) + <code>Partizip II</code>.</p>
    </div>
  </div>

  <div class="rule-section">
    <h3>11) الضمائر الشخصية (Personalpronomen)</h3>
    <div class="rule-content">
      <table>
        <tr><th>الضمير</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
        <tr><td>أنا</td><td>ich</td><td>mich</td><td>mir</td></tr>
        <tr><td>أنت</td><td>du</td><td>dich</td><td>dir</td></tr>
        <tr><td>هو</td><td>er</td><td>ihn</td><td>ihm</td></tr>
        <tr><td>هي</td><td>sie</td><td>sie</td><td>ihr</td></tr>
        <tr><td>نحن</td><td>wir</td><td>uns</td><td>uns</td></tr>
        <tr><td>هم</td><td>sie</td><td>sie</td><td>ihnen</td></tr>
      </table>
    </div>
  </div>

  <div class="rule-section">
    <h3>12) أدوات الملكية (Possessivartikel)</h3>
    <div class="rule-content">
      <p>mein, dein, sein, ihr, unser, euer, ihr — تتغير حسب الحالة والجنس والعدد.</p>
      <table>
        <tr><th>الجنس</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
        <tr><td>مذكر</td><td>mein Vater</td><td><strong>meinen</strong> Vater</td><td><strong>meinem</strong> Vater</td></tr>
        <tr><td>مؤنث</td><td>meine Mutter</td><td>meine Mutter</td><td><strong>meiner</strong> Mutter</td></tr>
        <tr><td>محايد</td><td>mein Kind</td><td>mein Kind</td><td><strong>meinem</strong> Kind</td></tr>
        <tr><td>جمع</td><td>meine Kinder</td><td>meine Kinder</td><td><strong>meinen</strong> Kindern</td></tr>
      </table>
      <div class="example-box">Nom: <strong>Mein</strong> Vater ist Lehrer.<br>Akk: Ich sehe <strong>meinen</strong> Vater.<br>Dat: Ich helfe <strong>meinem</strong> Vater.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>13) الأفعال التي تأخذ Dativ</h3>
    <div class="rule-content">
      <p>helfen, danken, gefallen, gehören, passen, antworten, zuhören, gratulieren, folgen, schmecken.</p>
      <div class="example-box">Ich helfe <strong>dem</strong> Mann.<br>Das Buch gefällt <strong>mir</strong>.<br>Die Schuhe passen <strong>mir</strong>.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>14) الأرقام والتواريخ (Zahlen und Daten)</h3>
    <div class="rule-content">
      <p>eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf, dreizehn...</p>
      <p>21 = einundzwanzig, 32 = zweiunddreißig, 45 = fünfundvierzig.</p>
      <div class="example-box">Heute ist der 15. Januar 2025.<br>Am 15. Januar habe ich Geburtstag.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>15) تصريف الصفات (Adjektivdeklination) - شرح شامل</h3>
    <div class="rule-content">
      <p>عندما تأتي الصفة قبل الاسم، يجب أن تأخذ نهاية تتوافق مع الحالة والجنس والعدد. هناك 3 أنواع:</p>
      <p><strong>أ. التصريف الضعيف (بعد der/die/das):</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td>Nominativ</td><td>der gut<strong>e</strong></td><td>die gut<strong>e</strong></td><td>das gut<strong>e</strong></td><td>die gut<strong>en</strong></td></tr>
        <tr><td>Akkusativ</td><td>den gut<strong>en</strong></td><td>die gut<strong>e</strong></td><td>das gut<strong>e</strong></td><td>die gut<strong>en</strong></td></tr>
        <tr><td>Dativ</td><td>dem gut<strong>en</strong></td><td>der gut<strong>en</strong></td><td>dem gut<strong>en</strong></td><td>den gut<strong>en</strong></td></tr>
        <tr><td>Genitiv</td><td>des gut<strong>en</strong></td><td>der gut<strong>en</strong></td><td>des gut<strong>en</strong></td><td>der gut<strong>en</strong></td></tr>
      </table>
      <p><strong>ب. التصريف المختلط (بعد ein/kein):</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th></tr>
        <tr><td>Nominativ</td><td>ein gut<strong>er</strong></td><td>eine gut<strong>e</strong></td><td>ein gut<strong>es</strong></td></tr>
        <tr><td>Akkusativ</td><td>einen gut<strong>en</strong></td><td>eine gut<strong>e</strong></td><td>ein gut<strong>es</strong></td></tr>
        <tr><td>Dativ</td><td>einem gut<strong>en</strong></td><td>einer gut<strong>en</strong></td><td>einem gut<strong>en</strong></td></tr>
        <tr><td>Genitiv</td><td>eines gut<strong>en</strong></td><td>einer gut<strong>en</strong></td><td>eines gut<strong>en</strong></td></tr>
      </table>
      <p><strong>ج. التصريف القوي (بدون أداة):</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th></tr>
        <tr><td>Nominativ</td><td>gut<strong>er</strong> Wein</td><td>gut<strong>e</strong> Milch</td><td>gut<strong>es</strong> Bier</td></tr>
        <tr><td>Akkusativ</td><td>gut<strong>en</strong> Wein</td><td>gut<strong>e</strong> Milch</td><td>gut<strong>es</strong> Bier</td></tr>
        <tr><td>Dativ</td><td>gut<strong>em</strong> Wein</td><td>gut<strong>er</strong> Milch</td><td>gut<strong>em</strong> Bier</td></tr>
        <tr><td>Genitiv</td><td>gut<strong>en</strong> Weines</td><td>gut<strong>er</strong> Milch</td><td>gut<strong>en</strong> Bieres</td></tr>
      </table>
      <div class="example-box"><strong>Nom:</strong> Der <strong>gut</strong>e Mann kommt.<br><strong>Akk:</strong> Ich sehe den <strong>gut</strong>en Mann.<br><strong>Dat:</strong> Ich helfe dem <strong>gut</strong>en Mann.<br><strong>مع النكرة:</strong> Ein <strong>gut</strong>er Mann kommt.<br><strong>بدون أداة:</strong> <strong>Gut</strong>er Wein ist teuer.</div>
    </div>
  </div>

  <div class="rule-section">
    <h3>16) الرابط deshalb (لذلك) - قاعدة مهمة</h3>
    <div class="rule-content">
      <p>الرابط <strong>deshalb</strong> (لذلك/لهذا السبب) هو من روابط الظروف (Adverbien). وهو يؤثر على ترتيب الجملة.</p>
      <p><strong>القاعدة:</strong></p>
      <ul>
        <li><code>deshalb</code> تحتل المركز الأول في الجملة.</li>
        <li>الفعل المصرّف يأتي مباشرة بعدها (المركز الثاني).</li>
        <li>الفاعل يأتي بعد الفعل.</li>
      </ul>
      <p><strong>التركيب:</strong> <code>deshalb + الفعل + الفاعل + باقي الجملة</code></p>
      <div class="example-box"><strong>مثال 1:</strong> Es regnet. <strong>Deshalb bleibe</strong> ich zu Hause.<br><em>(تمطر. لذلك أبقى في المنزل)</em><br><br><strong>مثال 2:</strong> Ich bin müde. <strong>Deshalb gehe</strong> ich früh ins Bett.<br><em>(أنا متعب. لذلك أذهب للنوم مبكراً)</em><br><br><strong>مثال 3:</strong> Er hat keine Zeit. <strong>Deshalb kommt</strong> er nicht.<br><em>(ليس لديه وقت. لذلك لا يأتي)</em></div>
      <p><strong>الفرق بين deshalb و weil:</strong></p>
      <table>
        <tr><th>الرابط</th><th>المعنى</th><th>ترتيب الجملة</th></tr>
        <tr><td><code>deshalb</code></td><td>لذلك</td><td>الفعل بعد deshalb مباشرة</td></tr>
        <tr><td><code>weil</code></td><td>لأن</td><td>الفعل في نهاية الجملة</td></tr>
      </table>
      <div class="example-box"><strong>نفس المعنى، ترتيب مختلف:</strong><br>Ich bleibe zu Hause, <strong>weil</strong> es <strong>regnet</strong>.<br>Es regnet, <strong>deshalb bleibe</strong> ich zu Hause.</div>
      <p><strong>روابط أخرى مشابهة:</strong> deswegen, darum, trotzdem (نفس القاعدة).</p>
    </div>
  </div>
`;

const RULES_HTML_EN = `
  <div class="rule-section open">
    <h3>1) The Alphabet and Pronunciation</h3>
    <div class="rule-content">
      <p>English has 26 letters. Some letters have different sounds depending on the word.</p>
      <div class="example-box">
        A = /eɪ/ (as in "cake")<br>
        B = /biː/ (as in "book")<br>
        C = /siː/ (as in "city") or /k/ (as in "cat")
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>2) Articles (a, an, the)</h3>
    <div class="rule-content">
      <p><strong>a</strong> = used before consonant sounds (a book, a car).<br>
      <strong>an</strong> = used before vowel sounds (an apple, an hour).<br>
      <strong>the</strong> = used for specific things (the book on the table).</p>
      <div class="example-box">
        I have <strong>a</strong> dog.<br>
        She is <strong>an</strong> engineer.<br>
        <strong>The</strong> sun is hot.
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>3) Present Simple</h3>
    <div class="rule-content">
      <p>Used for habits and facts. Add <strong>-s</strong> for he/she/it.</p>
      <table>
        <tr><th>Pronoun</th><th>Verb</th><th>Example</th></tr>
        <tr><td>I / You / We / They</td><td>work</td><td>I work every day.</td></tr>
        <tr><td>He / She / It</td><td>work<strong>s</strong></td><td>She works in a bank.</td></tr>
      </table>
    </div>
  </div>

  <div class="rule-section">
    <h3>4) Present Continuous</h3>
    <div class="rule-content">
      <p>Used for actions happening now: <strong>am/is/are + verb-ing</strong>.</p>
      <div class="example-box">
        I <strong>am studying</strong> English.<br>
        She <strong>is reading</strong> a book.<br>
        They <strong>are playing</strong> football.
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>5) Past Simple</h3>
    <div class="rule-content">
      <p>Used for finished actions in the past. Regular verbs: add <strong>-ed</strong>. Irregular verbs: see table.</p>
      <div class="example-box">
        I <strong>worked</strong> yesterday.<br>
        She <strong>went</strong> to school.<br>
        They <strong>ate</strong> pizza.
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>6) Past Continuous</h3>
    <div class="rule-content">
      <p>Used for actions in progress in the past: <strong>was/were + verb-ing</strong>.</p>
      <div class="example-box">
        I <strong>was reading</strong> when he called.<br>
        They <strong>were playing</strong> football.
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>7) Present Perfect</h3>
    <div class="rule-content">
      <p>Used for past actions with a connection to the present: <strong>have/has + past participle</strong>.</p>
      <div class="example-box">
        I <strong>have seen</strong> that movie.<br>
        She <strong>has finished</strong> her work.
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>8) Future (will / going to)</h3>
    <div class="rule-content">
      <p><strong>will</strong> = for decisions and predictions.<br>
      <strong>going to</strong> = for plans.</p>
      <div class="example-box">
        I <strong>will help</strong> you.<br>
        She <strong>is going to travel</strong> to London.
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>9) Comparatives and Superlatives</h3>
    <div class="rule-content">
      <p>Short adjectives: add <strong>-er / -est</strong>.<br>
      Long adjectives: use <strong>more / most</strong>.</p>
      <div class="example-box">
        big → big<strong>ger</strong> → the big<strong>gest</strong><br>
        beautiful → <strong>more</strong> beautiful → the <strong>most</strong> beautiful
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>10) Modal Verbs (can, must, should)</h3>
    <div class="rule-content">
      <p><strong>can</strong> = ability, <strong>must</strong> = obligation, <strong>should</strong> = advice.</p>
      <div class="example-box">
        I <strong>can</strong> swim.<br>
        You <strong>must</strong> wear a seatbelt.<br>
        You <strong>should</strong> see a doctor.
      </div>
    </div>
  </div>
    <div class="rule-section">
    <h3>17) حروف الجر التي تأخذ Akkusativ فقط</h3>
    <div class="rule-content">
      <p>هذه الحروف <strong>دائماً</strong> تأخذ Akkusativ، سواء كان هناك حركة أو سكون. لحفظها: <strong>durch, für, gegen, ohne, um</strong> (وأحياناً bis, entlang).</p>
      
      <table>
        <tr><th>الحرف</th><th>المعنى</th><th>مثال</th><th>الترجمة</th></tr>
        <tr><td><strong>durch</strong></td><td>عبر / من خلال</td><td>Wir gehen <strong>durch den</strong> Park.</td><td>نمشي عبر الحديقة.</td></tr>
        <tr><td><strong>für</strong></td><td>من أجل / لـ</td><td>Das Geschenk ist <strong>für dich</strong>.</td><td>الهدية من أجلك.</td></tr>
        <tr><td><strong>gegen</strong></td><td>ضد / نحو</td><td>Ich bin <strong>gegen den</strong> Krieg.</td><td>أنا ضد الحرب.</td></tr>
        <tr><td><strong>ohne</strong></td><td>بدون</td><td>Ich trinke Kaffee <strong>ohne</strong> Zucker.</td><td>أشرب القهوة بدون سكر.</td></tr>
        <tr><td><strong>um</strong></td><td>حول / في (الوقت)</td><td>Wir sitzen <strong>um den</strong> Tisch.<br>Der Kurs beginnt <strong>um</strong> 9 Uhr.</td><td>نجلس حول الطاولة.<br>الدورة تبدأ الساعة 9.</td></tr>
        <tr><td><strong>bis</strong></td><td>حتى</td><td>Ich arbeite <strong>bis</strong> 5 Uhr.</td><td>أعمل حتى الساعة 5.</td></tr>
        <tr><td><strong>entlang</strong></td><td>على طول</td><td>Wir gehen die Straße <strong>entlang</strong>.</td><td>نمشي على طول الشارع.</td></tr>
      </table>

      <div class="example-box">
        <strong>ملاحظات مهمة:</strong><br>
        • <code>bis</code> غالباً تأخذ Akkusativ، لكن عند استخدامها مع حرف جر آخر (مثل <code>bis zu</code>) تأخذ حالة الحرف الآخر.<br>
        • <code>entlang</code> تأتي عادة <strong>بعد</strong> الاسم (die Straße entlang) وتأخذ Akkusativ. إذا جاءت قبله (entlang der Straße) تأخذ Genitiv.
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>18) حروف الجر التي تأخذ Dativ فقط</h3>
    <div class="rule-content">
      <p>هذه الحروف <strong>دائماً</strong> تأخذ Dativ. لحفظها: <strong>aus, bei, mit, nach, seit, von, zu</strong> (وأحياناً gegenüber).</p>
      
      <table>
        <tr><th>الحرف</th><th>المعنى</th><th>مثال</th><th>الترجمة</th></tr>
        <tr><td><strong>aus</strong></td><td>من (أصل/داخل)</td><td>Ich komme <strong>aus der</strong> Schweiz.</td><td>أنا من سويسرا.</td></tr>
        <tr><td><strong>bei</strong></td><td>عند / لدى</td><td>Ich wohne <strong>bei meiner</strong> Familie.</td><td>أسكن عند عائلتي.</td></tr>
        <tr><td><strong>mit</strong></td><td>مع / بواسطة</td><td>Ich fahre <strong>mit dem</strong> Bus.</td><td>أسافر بالحافلة.</td></tr>
        <tr><td><strong>nach</strong></td><td>إلى (مدن/دول) / بعد</td><td>Ich fliege <strong>nach</strong> Berlin.<br><strong>Nach dem</strong> Essen gehen wir spazieren.</td><td>أسافر إلى برلين.<br>بعد الأكل نتنزه.</td></tr>
        <tr><td><strong>seit</strong></td><td>منذ</td><td>Ich lerne Deutsch <strong>seit einem</strong> Jahr.</td><td>أتعلم الألمانية منذ سنة.</td></tr>
        <tr><td><strong>von</strong></td><td>من / عن</td><td>Das ist ein Geschenk <strong>von meinem</strong> Vater.</td><td>هذه هدية من والدي.</td></tr>
        <tr><td><strong>zu</strong></td><td>إلى (أشخاص/أماكن)</td><td>Ich gehe <strong>zu meiner</strong> Mutter.</td><td>أذهب إلى أمي.</td></tr>
        <tr><td><strong>gegenüber</strong></td><td>مقابل</td><td>Die Bank ist <strong>dem</strong> Bahnhof <strong>gegenüber</strong>.</td><td>البنك مقابل المحطة.</td></tr>
      </table>

      <div class="example-box">
        <strong>ملاحظات مهمة:</strong><br>
        • <code>nach</code> تُستخدم مع المدن والدول (nach Berlin, nach Deutschland) بدون أداة.<br>
        • <code>zu</code> تُستخدم مع الأشخاص والأماكن المحددة (zu mir, zum Arzt, zur Schule).<br>
        • <code>gegenüber</code> غالباً تأتي بعد الاسم.
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>19) حروف الجر المتغيرة (Wechselpräpositionen)</h3>
    <div class="rule-content">
      <p>هذه الحروف التسعة تأخذ <strong>Dativ</strong> عند السكون (Wo? = أين؟) و <strong>Akkusativ</strong> عند الحركة (Wohin? = إلى أين؟).</p>
      <p><strong>الحروف التسعة:</strong> <code>an, auf, hinter, in, neben, über, unter, vor, zwischen</code></p>
      
      <table>
        <tr><th>الحرف</th><th>المعنى</th><th>Dativ (أين؟)</th><th>Akkusativ (إلى أين؟)</th></tr>
        <tr><td><strong>an</strong></td><td>على / بجانب</td><td>Das Bild hängt <strong>an der</strong> Wand.</td><td>Ich hänge das Bild <strong>an die</strong> Wand.</td></tr>
        <tr><td><strong>auf</strong></td><td>على (سطح)</td><td>Das Buch liegt <strong>auf dem</strong> Tisch.</td><td>Ich lege das Buch <strong>auf den</strong> Tisch.</td></tr>
        <tr><td><strong>hinter</strong></td><td>خلف</td><td>Die Katze ist <strong>hinter dem</strong> Sofa.</td><td>Die Katze läuft <strong>hinter das</strong> Sofa.</td></tr>
        <tr><td><strong>in</strong></td><td>في / داخل</td><td>Ich bin <strong>in der</strong> Schule.</td><td>Ich gehe <strong>in die</strong> Schule.</td></tr>
        <tr><td><strong>neben</strong></td><td>بجانب</td><td>Der Stuhl steht <strong>neben dem</strong> Tisch.</td><td>Ich stelle den Stuhl <strong>neben den</strong> Tisch.</td></tr>
        <tr><td><strong>über</strong></td><td>فوق (بدون لمس)</td><td>Die Lampe hängt <strong>über dem</strong> Tisch.</td><td>Ich hänge die Lampe <strong>über den</strong> Tisch.</td></tr>
        <tr><td><strong>unter</strong></td><td>تحت</td><td>Die Katze ist <strong>unter dem</strong> Tisch.</td><td>Die Katze läuft <strong>unter den</strong> Tisch.</td></tr>
        <tr><td><strong>vor</strong></td><td>أمام / قبل</td><td>Das Auto steht <strong>vor dem</strong> Haus.</td><td>Ich fahre <strong>vor das</strong> Haus.</td></tr>
        <tr><td><strong>zwischen</strong></td><td>بين</td><td>Die Bank ist <strong>zwischen dem</strong> Supermarkt und der Schule.</td><td>Ich stelle den Tisch <strong>zwischen die</strong> Stühle.</td></tr>
      </table>

      <div class="example-box">
        <strong>قاعدة سهلة:</strong><br>
        • <strong>Wo?</strong> (أين؟) → <strong>Dativ</strong> (سكون)<br>
        • <strong>Wohin?</strong> (إلى أين؟) → <strong>Akkusativ</strong> (حركة)<br><br>
        <strong>أفعال شائعة:</strong><br>
        • مع Dativ: <code>sein, liegen, stehen, sitzen, hängen</code> (حالة سكون)<br>
        • مع Akkusativ: <code>legen, stellen, setzen, hängen</code> (حالة حركة)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>20) حروف الجر التي تأخذ Genitiv</h3>
    <div class="rule-content">
      <p>هذه الحروف تأخذ <strong>Genitiv</strong> — تُستخدم في المستوى A2 وما بعده، خاصة في اللغة الرسمية والكتابة.</p>
      
      <table>
        <tr><th>الحرف</th><th>المعنى</th><th>مثال</th><th>الترجمة</th></tr>
        <tr><td><strong>während</strong></td><td>خلال / بينما</td><td><strong>Während des</strong> Unterrichts darf man nicht telefonieren.</td><td>خلال الدرس لا يُسمح بالهاتف.</td></tr>
        <tr><td><strong>wegen</strong></td><td>بسبب</td><td><strong>Wegen des</strong> Regens bleiben wir zu Hause.</td><td>بسبب المطر نبقى في المنزل.</td></tr>
        <tr><td><strong>trotz</strong></td><td>رغم</td><td><strong>Trotz des</strong> Regens gehen wir spazieren.</td><td>رغم المطر نتنزه.</td></tr>
        <tr><td><strong>statt</strong></td><td>بدلاً من</td><td><strong>Statt des</strong> Autos nehme ich den Bus.</td><td>بدلاً من السيارة آخذ الحافلة.</td></tr>
        <tr><td><strong>innerhalb</strong></td><td>داخل / خلال</td><td><strong>Innerhalb des</strong> Gebäudes darf man nicht rauchen.</td><td>داخل المبنى لا يُسمح بالتدخين.</td></tr>
        <tr><td><strong>außerhalb</strong></td><td>خارج</td><td><strong>Außerhalb der</strong> Stadt ist es ruhig.</td><td>خارج المدينة الجو هادئ.</td></tr>
      </table>

      <div class="example-box">
        <strong>ملاحظة:</strong> في المحادثة اليومية، غالباً ما تُستخدم <code>wegen</code> و <code>trotz</code> مع <strong>Dativ</strong> بدلاً من Genitiv (مقبول في اللغة العامية).<br>
        <strong>مثال:</strong> Wegen dem Regen... (عامية) / Wegen des Regens... (فصحى)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>21) حروف جر شائعة أخرى (A2)</h3>
    <div class="rule-content">
      <p>حروف جر إضافية تُستخدم كثيراً في المستوى A2:</p>
      
      <table>
        <tr><th>الحرف</th><th>المعنى</th><th>الحالة</th><th>مثال</th></tr>
        <tr><td><strong>pro</strong></td><td>لكل / عن</td><td>Akkusativ</td><td>Das kostet 5 Euro <strong>pro</strong> Person.</td></tr>
        <tr><td><strong>je</strong></td><td>لكل</td><td>Akkusativ</td><td>Das kostet 10 Euro <strong>je</strong> Person.</td></tr>
        <tr><td><strong>ab</strong></td><td>من (زمنياً)</td><td>Dativ</td><td><strong>Ab dem</strong> 1. Mai bin ich hier.</td></tr>
        <tr><td><strong>entlang</strong></td><td>على طول</td><td>Akkusativ (بعد الاسم) / Genitiv (قبله)</td><td>Die Straße <strong>entlang</strong> / <strong>Entlang der</strong> Straße.</td></tr>
        <tr><td><strong>gegenüber</strong></td><td>مقابل</td><td>Dativ</td><td><strong>Dem</strong> Bahnhof <strong>gegenüber</strong> ist ein Café.</td></tr>
        <tr><td><strong>außer</strong></td><td>باستثناء</td><td>Dativ</td><td><strong>Außer dir</strong> kommt niemand.</td></tr>
      </table>

      <div class="example-box">
        <strong>ملاحظات:</strong><br>
        • <code>pro</code> و <code>je</code> تُستخدمان للتوزيع (لكل شخص/شيء).<br>
        • <code>ab</code> تُستخدم مع الزمن (ab morgen, ab dem 1. Mai).<br>
        • <code>außer</code> تعني "باستثناء" وتأخذ Dativ.
      </div>
    </div>
  </div>
`;
