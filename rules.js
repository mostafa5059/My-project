const RULES_HTML = `
  <div class="rule-section open">
    <h3>1) الأزمنة في اللغة الألمانية (Die Zeiten)</h3>
    <div class="rule-content">
      <p>اللغة الألمانية تحتوي على 6 أزمنة، لكن الأكثر استخداماً في المحادثة اليومية هما: <strong>Präsens</strong> (المضارع) و <strong>Perfekt</strong> (الماضي التام).</p>
      
      <p><strong>أ. المضارع (Präsens)</strong> - يُستخدم للتعبير عن الحاضر والمستقبل القريب:</p>
      <table>
        <tr><th>الضمير</th><th>machen (يفعل)</th><th>fahren (يسافر)</th><th>sein (يكون)</th></tr>
        <tr><td>ich</td><td>mache</td><td>fahre</td><td>bin</td></tr>
        <tr><td>du</td><td>machst</td><td>fährst</td><td>bist</td></tr>
        <tr><td>er/sie/es</td><td>macht</td><td>fährt</td><td>ist</td></tr>
        <tr><td>wir</td><td>machen</td><td>fahren</td><td>sind</td></tr>
        <tr><td>ihr</td><td>macht</td><td>fahrt</td><td>seid</td></tr>
        <tr><td>sie/Sie</td><td>machen</td><td>fahren</td><td>sind</td></tr>
      </table>
      <div class="example-box">
        <strong>أمثلة:</strong><br>
        Ich <strong>mache</strong> meine Hausaufgaben. (أفعل واجباتي)<br>
        Er <strong>fährt</strong> nach Berlin. (يسافر إلى برلين)<br>
        Wir <strong>sind</strong> Studenten. (نحن طلاب)
      </div>

      <p><strong>ب. الماضي البسيط (Präteritum)</strong> - يُستخدم في الكتابة والسرد، وأيضاً مع الأفعال المساعدة:</p>
      <div class="example-box">
        <strong>أمثلة:</strong><br>
        Ich <strong>war</strong> gestern krank. (كنت مريضاً أمس)<br>
        Er <strong>hatte</strong> keine Zeit. (لم يكن لديه وقت)<br>
        Sie <strong>ging</strong> nach Hause. (ذهبت إلى المنزل)
      </div>

      <p><strong>ج. الماضي التام (Perfekt)</strong> - الأكثر استخداماً في المحادثة اليومية:</p>
      <p>يتكون من: <code>haben/sein</code> (مصرّف) + <code>Partizip II</code> في نهاية الجملة.</p>
      <div class="example-box">
        <strong>أمثلة:</strong><br>
        Ich <strong>habe</strong> einen Film <strong>gesehen</strong>. (شاهدت فيلماً)<br>
        Er <strong>ist</strong> nach Berlin <strong>gefahren</strong>. (سافر إلى برلين)<br>
        Wir <strong>haben</strong> Deutsch <strong>gelernt</strong>. (تعلمنا الألمانية)
      </div>
      <p><em>ملاحظة: أفعال الحركة (gehen, fahren, kommen) وتغير الحالة (werden, aufstehen) تأخذ sein، والباقي يأخذ haben.</em></p>

      <p><strong>د. المستقبل (Futur I)</strong> - للتعبير عن المستقبل أو التوقعات:</p>
      <p>يتكون من: <code>werden</code> (مصرّف) + <code>المصدر (Infinitiv)</code> في نهاية الجملة.</p>
      <div class="example-box">
        <strong>أمثلة:</strong><br>
        Ich <strong>werde</strong> morgen nach Berlin <strong>fahren</strong>. (سأسافر إلى برلين غداً)<br>
        Es <strong>wird</strong> wahrscheinlich <strong>regnen</strong>. (من المحتمل أن تمطر)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>2) الأفعال المساعدة (Modalverben)</h3>
    <div class="rule-content">
      <p>هي أفعال تُستخدم مع أفعال أخرى للتعبير عن الإمكانية، الضرورة، الرغبة، أو الإذن. الفعل الرئيسي يذهب إلى <strong>نهاية الجملة</strong> في صيغة المصدر (Infinitiv).</p>
      
      <table>
        <tr><th>الفعل</th><th>المعنى</th><th>ich</th><th>du</th><th>er/sie/es</th></tr>
        <tr><td>können</td><td>يستطيع</td><td>kann</td><td>kannst</td><td>kann</td></tr>
        <tr><td>müssen</td><td>يجب</td><td>muss</td><td>musst</td><td>muss</td></tr>
        <tr><td>wollen</td><td>يريد</td><td>will</td><td>willst</td><td>will</td></tr>
        <tr><td>dürfen</td><td>يُسمح له</td><td>darf</td><td>darfst</td><td>darf</td></tr>
        <tr><td>sollen</td><td>ينبغي</td><td>soll</td><td>sollst</td><td>soll</td></tr>
        <tr><td>mögen</td><td>يحب</td><td>mag</td><td>magst</td><td>mag</td></tr>
      </table>

      <div class="example-box">
        <strong>أمثلة:</strong><br>
        Ich <strong>kann</strong> gut <strong>schwimmen</strong>. (أستطيع السباحة جيداً)<br>
        Du <strong>musst</strong> mehr <strong>lernen</strong>. (يجب أن تدرس أكثر)<br>
        Er <strong>will</strong> nach Hause <strong>gehen</strong>. (يريد الذهاب إلى المنزل)<br>
        <strong>Darf</strong> ich hier <strong>rauchen</strong>? (هل يُسمح لي بالتدخين هنا؟)
      </div>
      <p><em>ملاحظة مهمة: الأفعال المساعدة لا تأخذ -t في نهاية صيغة er/sie/es (مثل: er kann، وليس er kannt).</em></p>
    </div>
  </div>

  <div class="rule-section">
    <h3>3) الحالات الإعرابية (Die Fälle)</h3>
    <div class="rule-content">
      <p>في اللغة الألمانية، تتغير أدوات التعريف حسب <strong>موقع الاسم في الجملة</strong>. هناك 4 حالات:</p>
      
      <table>
        <tr><th>الحالة</th><th>الاستخدام</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td><strong>Nominativ</strong></td><td>الفاعل</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td><strong>Akkusativ</strong></td><td>المفعول المباشر</td><td><strong>den</strong></td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td><strong>Dativ</strong></td><td>المفعول غير المباشر</td><td><strong>dem</strong></td><td><strong>der</strong></td><td><strong>dem</strong></td><td><strong>den + n</strong></td></tr>
        <tr><td><strong>Genitiv</strong></td><td>الملكية</td><td><strong>des + s</strong></td><td><strong>der</strong></td><td><strong>des + s</strong></td><td><strong>der</strong></td></tr>
      </table>

      <p><strong>الخلاصة الذهبية:</strong></p>
      <ul>
        <li><strong>Akkusativ:</strong> يتغير فقط المذكر (der → den).</li>
        <li><strong>Dativ:</strong> يتغير الثلاثة (der→dem, die→der, das→dem) + الجمع (die→den+n).</li>
        <li><strong>Genitiv:</strong> المذكر والمحايد يتغيران (der/das→des) + إضافة s للاسم.</li>
      </ul>

      <div class="example-box">
        <strong>Nominativ:</strong> <strong>Der</strong> Mann liest ein Buch. (الرجل يقرأ كتاباً)<br>
        <strong>Akkusativ:</strong> Ich sehe <strong>den</strong> Mann. (أرى الرجل)<br>
        <strong>Dativ:</strong> Ich helfe <strong>dem</strong> Mann. (أساعد الرجل)<br>
        <strong>Genitiv:</strong> Das ist das Auto <strong>des</strong> Mann<strong>es</strong>. (هذه سيارة الرجل)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>4) تصريف الصفات (Adjektivdeklination)</h3>
    <div class="rule-content">
      <p>عند استخدام الصفة <strong>قبل الاسم</strong> (Attributiv)، يجب أن تأخذ نهاية تتوافق مع الحالة والجنس والعدد. هناك 3 أنواع من التصريف:</p>
      
      <p><strong>أ. التصريف الضعيف (بعد أداة التعريف):</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td>Nominativ</td><td>der gut<strong>e</strong></td><td>die gut<strong>e</strong></td><td>das gut<strong>e</strong></td><td>die gut<strong>en</strong></td></tr>
        <tr><td>Akkusativ</td><td>den gut<strong>en</strong></td><td>die gut<strong>e</strong></td><td>das gut<strong>e</strong></td><td>die gut<strong>en</strong></td></tr>
        <tr><td>Dativ</td><td>dem gut<strong>en</strong></td><td>der gut<strong>en</strong></td><td>dem gut<strong>en</strong></td><td>den gut<strong>en</strong></td></tr>
      </table>

      <p><strong>ب. التصريف المختلط (بعد أداة النكرة):</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td>Nominativ</td><td>ein gut<strong>er</strong></td><td>eine gut<strong>e</strong></td><td>ein gut<strong>es</strong></td><td>keine gut<strong>en</strong></td></tr>
        <tr><td>Akkusativ</td><td>einen gut<strong>en</strong></td><td>eine gut<strong>e</strong></td><td>ein gut<strong>es</strong></td><td>keine gut<strong>en</strong></td></tr>
        <tr><td>Dativ</td><td>einem gut<strong>en</strong></td><td>einer gut<strong>en</strong></td><td>einem gut<strong>en</strong></td><td>keinen gut<strong>en</strong></td></tr>
      </table>

      <div class="example-box">
        <strong>أمثلة:</strong><br>
        Das ist ein <strong>guter</strong> Mann. (هذا رجل جيد - Nominativ)<br>
        Ich sehe einen <strong>guten</strong> Mann. (أرى رجلاً جيداً - Akkusativ)<br>
        Ich helfe einem <strong>guten</strong> Mann. (أساعد رجلاً جيداً - Dativ)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>5) حروف الجر (Präpositionen)</h3>
    <div class="rule-content">
      <p><strong>أ. حروف جر تأخذ دائماً Akkusativ:</strong></p>
      <ul>
        <li><code>durch</code> (عبر)، <code>für</code> (لأجل)، <code>gegen</code> (ضد)، <code>ohne</code> (بدون)، <code>um</code> (حول)، <code>bis</code> (حتى)، <code>entlang</code> (على طول).</li>
      </ul>
      <div class="example-box">
        Das ist <strong>für dich</strong>. (هذا لك)<br>
        Ich gehe <strong>ohne dich</strong>. (أذهب بدونك)
      </div>

      <p><strong>ب. حروف جر تأخذ دائماً Dativ:</strong></p>
      <ul>
        <li><code>mit</code> (مع)، <code>nach</code> (بعد/إلى)، <code>bei</code> (عند)، <code>seit</code> (منذ)، <code>von</code> (من)، <code>zu</code> (إلى)، <code>aus</code> (من)، <code>gegenüber</code> (مقابل).</li>
      </ul>
      <div class="example-box">
        Ich fahre <strong>mit dem Bus</strong>. (أسافر بالحافلة)<br>
        Ich komme <strong>aus der Schweiz</strong>. (أنا من سويسرا)<br>
        Ich wohne <strong>bei meinen Eltern</strong>. (أسكن عند والديّ)
      </div>

      <p><strong>ج. حروف الجر المتغيرة (Wechselpräpositionen):</strong></p>
      <p>تأخذ <strong>Akkusativ</strong> عند الحركة (Wohin?) و <strong>Dativ</strong> عند السكون (Wo?).</p>
      <ul>
        <li><code>in, an, auf, über, unter, vor, hinter, neben, zwischen</code></li>
      </ul>
      <div class="example-box">
        <strong>حركة (Akkusativ):</strong> Ich gehe <strong>in die</strong> Schule. (أذهب إلى المدرسة)<br>
        <strong>سكون (Dativ):</strong> Ich bin <strong>in der</strong> Schule. (أنا في المدرسة)<br>
        <strong>حركة:</strong> Ich hänge das Bild <strong>an die</strong> Wand. (أعلق الصورة على الحائط)<br>
        <strong>سكون:</strong> Das Bild hängt <strong>an der</strong> Wand. (الصورة معلقة على الحائط)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>6) الروابط (Konjunktionen)</h3>
    <div class="rule-content">
      <p><strong>أ. روابط لا تؤثر على ترتيب الجملة (الفعل في المركز الثاني):</strong></p>
      <ul>
        <li><code>und</code> (و)، <code>oder</code> (أو)، <code>aber</code> (لكن)، <code>denn</code> (لأن)، <code>sondern</code> (بل).</li>
      </ul>
      <div class="example-box">
        Ich lerne Deutsch <strong>und</strong> ich wohne in Berlin. (أتعلم الألمانية وأسكن في برلين)<br>
        Ich bin müde, <strong>aber</strong> ich arbeite. (أنا متعب، لكنني أعمل)
      </div>

      <p><strong>ب. روابط ترسل الفعل إلى نهاية الجملة الثانوية (Subjunktionen):</strong></p>
      <ul>
        <li><code>weil</code> (لأن)، <code>dass</code> (أن)، <code>wenn</code> (إذا/عندما)، <code>ob</code> (هل)، <code>als</code> (عندما - للماضي)، <code>obwohl</code> (رغم أن)، <code>damit</code> (لكي)، <code>bevor</code> (قبل أن)، <code>nachdem</code> (بعد أن).</li>
      </ul>
      <div class="example-box">
        Ich bleibe zu Hause, <strong>weil</strong> es <strong>regnet</strong>. (أبقى في المنزل لأنها تمطر)<br>
        Ich weiß, <strong>dass</strong> er <strong>kommt</strong>. (أعرف أنه سيأتي)<br>
        <strong>Wenn</strong> ich Zeit <strong>habe</strong>, lerne ich. (إذا كان لدي وقت، أدرس)<br>
        <strong>Obwohl</strong> es <strong>regnet</strong>, gehe ich spazieren. (رغم أنها تمطر، أذهب للتنزه)
      </div>

      <p><strong>ج. روابط الظروف (Adverbien):</strong> تؤثر على ترتيب الجملة (الفعل بعدها مباشرة):</p>
      <ul>
        <li><code>deshalb</code> (لذلك)، <code>trotzdem</code> (رغم ذلك)، <code>außerdem</code> (بالإضافة إلى ذلك)، <code>dann</code> (ثم).</li>
      </ul>
      <div class="example-box">
        Es regnet, <strong>deshalb</strong> <strong>bleibe</strong> ich zu Hause. (تمطر، لذلك أبقى في المنزل)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>7) الجمل الثانوية (Nebensätze)</h3>
    <div class="rule-content">
      <p>الجملة الثانوية هي جملة لا يمكن أن تقف وحدها، وتبدأ برابط (weil, dass, wenn...). الفعل المصرّف يذهب إلى <strong>نهاية الجملة</strong>.</p>
      
      <p><strong>تركيب الجملة الثانوية:</strong></p>
      <p><code>الرابط + الفاعل + باقي الجملة + الفعل المصرّف</code></p>

      <div class="example-box">
        <strong>جملة رئيسية:</strong> Ich bleibe zu Hause. (أبقى في المنزل)<br>
        <strong>جملة ثانوية:</strong> ..., <strong>weil</strong> es <strong>regnet</strong>. (...لأنها تمطر)<br>
        <strong>معاً:</strong> Ich bleibe zu Hause, weil es <strong>regnet</strong>.
      </div>

      <p><strong>عندما تبدأ الجملة الثانوية، تأتي بعدها الجملة الرئيسية مباشرة بالفعل (لأن الجملة الثانوية تحتل المركز الأول):</strong></p>
      <div class="example-box">
        <strong>Weil</strong> es <strong>regnet</strong>, <strong>bleibe</strong> ich zu Hause.<br>
        <em>(لأنها تمطر، أبقى في المنزل - لاحظ أن bleibe يأتي بعد الفاصلة مباشرة)</em>
      </div>

      <p><strong>أنواع الجمل الثانوية:</strong></p>
      <ul>
        <li><strong>Weil-Satz:</strong> يشرح السبب. <code>Ich lerne Deutsch, weil ich in Deutschland studieren möchte.</code></li>
        <li><strong>Dass-Satz:</strong> يقدم فكرة. <code>Ich hoffe, dass du kommst.</code></li>
        <li><strong>Wenn-Satz:</strong> يعبر عن شرط. <code>Wenn ich Zeit habe, komme ich.</code></li>
        <li><strong>Als-Satz:</strong> للماضي. <code>Als ich klein war, wohnte ich in Kairo.</code></li>
        <li><strong>Obwohl-Satz:</strong> للتنازل. <code>Obwohl es regnet, gehe ich aus.</code></li>
      </ul>
    </div>
  </div>

  <div class="rule-section">
    <h3>8) الأفعال الانعكاسية (Reflexive Verben)</h3>
    <div class="rule-content">
      <p>هي أفعال تحتاج إلى <strong>ضمير انعكاسي</strong> يعود على الفاعل. الضمير يختلف حسب الحالة:</p>
      
      <table>
        <tr><th>الضمير</th><th>Akkusativ</th><th>Dativ</th></tr>
        <tr><td>ich</td><td>mich</td><td>mir</td></tr>
        <tr><td>du</td><td>dich</td><td>dir</td></tr>
        <tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr>
        <tr><td>wir</td><td>uns</td><td>uns</td></tr>
        <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
        <tr><td>sie/Sie</td><td>sich</td><td>sich</td></tr>
      </table>

      <p><strong>متى نستخدم Akkusativ؟</strong> عندما يكون الفعل الانعكاسي هو المفعول الوحيد:</p>
      <div class="example-box">
        Ich <strong>freue mich</strong>. (أفرح)<br>
        Du <strong>wäschst dich</strong>. (تغتسل)<br>
        Er <strong>interessiert sich</strong> für Sport. (يهتم بالرياضة)
      </div>

      <p><strong>متى نستخدم Dativ؟</strong> عندما يكون هناك مفعول آخر في الجملة:</p>
      <div class="example-box">
        Ich wasche <strong>mir</strong> die Hände. (أغسل يديّ)<br>
        Ich putze <strong>mir</strong> die Zähne. (أنظف أسناني)
      </div>

      <p><strong>أهم الأفعال الانعكاسية:</strong></p>
      <ul>
        <li><code>sich freuen</code> (يفرح)، <code>sich interessieren</code> (يهتم)، <code>sich waschen</code> (يغتسل)، <code>sich anziehen</code> (يرتدي)، <code>sich treffen</code> (يتقابل)، <code>sich erinnern</code> (يتذكر)، <code>sich entschuldigen</code> (يعتذر)، <code>sich beeilen</code> (يسرع).</li>
      </ul>
    </div>
  </div>

  <div class="rule-section">
    <h3>9) الأفعال المنفصلة (Trennbare Verben)</h3>
    <div class="rule-content">
      <p>هي أفعال تبدأ ببادئة (Präfix)، وفي المضارع والماضي البسيط، <strong>تنفصل البادئة</strong> وتذهب إلى <strong>نهاية الجملة</strong>.</p>
      
      <p><strong>البادئات المنفصلة الشائعة:</strong> <code>ab-, an-, auf-, aus-, bei-, ein-, mit-, nach-, vor-, zu-, zurück-</code>.</p>

      <div class="example-box">
        <strong>aufstehen (يستيقظ):</strong><br>
        Ich <strong>stehe</strong> um 7 Uhr <strong>auf</strong>. (أستيقظ الساعة 7)<br><br>
        <strong>einkaufen (يتسوق):</strong><br>
        Ich <strong>kaufe</strong> im Supermarkt <strong>ein</strong>. (أتسوق في السوبر ماركت)<br><br>
        <strong>anrufen (يتصل):</strong><br>
        Er <strong>ruft</strong> seine Mutter <strong>an</strong>. (يتصل بأمه)
      </div>

      <p><strong>في الماضي التام (Perfekt):</strong> توضع <code>-ge-</code> بين البادئة والفعل:</p>
      <div class="example-box">
        Ich bin um 7 Uhr <strong>auf</strong>ge<strong>standen</strong>.<br>
        Ich habe im Supermarkt <strong>ein</strong>ge<strong>kauft</strong>.
      </div>

      <p><strong>البادئات غير المنفصلة:</strong> <code>be-, ge-, er-, ver-, zer-, ent-, emp-, miss-</code>. هذه لا تنفصل أبداً:</p>
      <div class="example-box">
        Ich <strong>verstehe</strong> die Frage. (أفهم السؤال)<br>
        Ich <strong>besuche</strong> meine Oma. (أزور جدتي)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>10) المبني للمجهول (Passiv)</h3>
    <div class="rule-content">
      <p>يُستخدم للتأكيد على الحدث بدلاً من الفاعل (الذي قد يكون مجهولاً).</p>
      
      <p><strong>التركيب:</strong> <code>werden (مصرّف) + Partizip II</code></p>

      <div class="example-box">
        <strong>مبني للمعلوم:</strong> Der Mann repariert das Auto. (الرجل يصلح السيارة)<br>
        <strong>مبني للمجهول:</strong> Das Auto <strong>wird</strong> (vom Mann) <strong>repariert</strong>. (السيارة تُصلح)<br><br>
        <strong>مثال آخر:</strong><br>
        Hier <strong>wird</strong> Deutsch <strong>gesprochen</strong>. (هنا تُتحدث الألمانية)<br>
        Das Haus <strong>wird</strong> <strong>gebaut</strong>. (المنزل يُبنى)
      </div>

      <p><strong>في الماضي:</strong> <code>wurde + Partizip II</code></p>
      <div class="example-box">
        Das Haus <strong>wurde</strong> 1990 <strong>gebaut</strong>. (بُني المنزل عام 1990)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>11) الأفعال الشاذة (Unregelmäßige Verben)</h3>
    <div class="rule-content">
      <p>هذه أفعال يجب حفظها لأنها لا تتبع القاعدة في تصريف الماضي و Partizip II. إليك أشهر 20 فعلاً:</p>
      
      <table>
        <tr><th>Infinitiv</th><th>Präteritum</th><th>Partizip II</th><th>المعنى</th></tr>
        <tr><td>sein</td><td>war</td><td>ist gewesen</td><td>يكون</td></tr>
        <tr><td>haben</td><td>hatte</td><td>hat gehabt</td><td>يملك</td></tr>
        <tr><td>werden</td><td>wurde</td><td>ist geworden</td><td>يصبح</td></tr>
        <tr><td>gehen</td><td>ging</td><td>ist gegangen</td><td>يذهب</td></tr>
        <tr><td>kommen</td><td>kam</td><td>ist gekommen</td><td>يأتي</td></tr>
        <tr><td>sehen</td><td>sah</td><td>hat gesehen</td><td>يرى</td></tr>
        <tr><td>essen</td><td>aß</td><td>hat gegessen</td><td>يأكل</td></tr>
        <tr><td>trinken</td><td>trank</td><td>hat getrunken</td><td>يشرب</td></tr>
        <tr><td>sprechen</td><td>sprach</td><td>hat gesprochen</td><td>يتحدث</td></tr>
        <tr><td>lesen</td><td>las</td><td>hat gelesen</td><td>يقرأ</td></tr>
        <tr><td>schreiben</td><td>schrieb</td><td>hat geschrieben</td><td>يكتب</td></tr>
        <tr><td>fahren</td><td>fuhr</td><td>ist gefahren</td><td>يسافر</td></tr>
        <tr><td>fliegen</td><td>flog</td><td>ist geflogen</td><td>يطير</td></tr>
        <tr><td>helfen</td><td>half</td><td>hat geholfen</td><td>يساعد</td></tr>
        <tr><td>schlafen</td><td>schlief</td><td>hat geschlafen</td><td>ينام</td></tr>
        <tr><td>geben</td><td>gab</td><td>hat gegeben</td><td>يعطي</td></tr>
        <tr><td>nehmen</td><td>nahm</td><td>hat genommen</td><td>يأخذ</td></tr>
        <tr><td>finden</td><td>fand</td><td>hat gefunden</td><td>يجد</td></tr>
        <tr><td>vergessen</td><td>vergaß</td><td>hat vergessen</td><td>ينسى</td></tr>
        <tr><td>verstehen</td><td>verstand</td><td>hat verstanden</td><td>يفهم</td></tr>
      </table>
      
      <p><em>ملاحظة: الأفعال التي تأخذ sein في Perfekt هي أفعال الحركة (gehen, kommen, fahren, fliegen) وتغير الحالة (werden).</em></p>
    </div>
  </div>

  <div class="rule-section">
    <h3>12) الضمائر الشخصية في الحالات (Personalpronomen)</h3>
    <div class="rule-content">
      <p>الضمائر تتغير حسب الحالة الإعرابية:</p>
      
      <table>
        <tr><th>الضمير</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
        <tr><td>أنا</td><td>ich</td><td>mich</td><td>mir</td></tr>
        <tr><td>أنت</td><td>du</td><td>dich</td><td>dir</td></tr>
        <tr><td>هو</td><td>er</td><td>ihn</td><td>ihm</td></tr>
        <tr><td>هي</td><td>sie</td><td>sie</td><td>ihr</td></tr>
        <tr><td>هو/هي (محايد)</td><td>es</td><td>es</td><td>ihm</td></tr>
        <tr><td>نحن</td><td>wir</td><td>uns</td><td>uns</td></tr>
        <tr><td>أنتم</td><td>ihr</td><td>euch</td><td>euch</td></tr>
        <tr><td>هم</td><td>sie</td><td>sie</td><td>ihnen</td></tr>
        <tr><td>أنت (رسمي)</td><td>Sie</td><td>Sie</td><td>Ihnen</td></tr>
      </table>

      <div class="example-box">
        <strong>Nominativ:</strong> <strong>Ich</strong> sehe dich. (أنا أراك)<br>
        <strong>Akkusativ:</strong> Er sieht <strong>mich</strong>. (هو يراني)<br>
        <strong>Dativ:</strong> Er hilft <strong>mir</strong>. (هو يساعدني)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>13) أدوات الملكية (Possessivartikel)</h3>
    <div class="rule-content">
      <p>أدوات الملكية تتغير حسب الحالة والجنس والعدد. إليك الجدول الكامل:</p>
      
      <table>
        <tr><th>الضمير</th><th>المذكر (Nominativ)</th><th>المؤنث (Nominativ)</th><th>المحايد (Nominativ)</th></tr>
        <tr><td>ich</td><td>mein</td><td>meine</td><td>mein</td></tr>
        <tr><td>du</td><td>dein</td><td>deine</td><td>dein</td></tr>
        <tr><td>er/es</td><td>sein</td><td>seine</td><td>sein</td></tr>
        <tr><td>sie</td><td>ihr</td><td>ihre</td><td>ihr</td></tr>
        <tr><td>wir</td><td>unser</td><td>unsere</td><td>unser</td></tr>
        <tr><td>ihr</td><td>euer</td><td>eure</td><td>euer</td></tr>
        <tr><td>sie/Sie</td><td>ihr/Ihr</td><td>ihre/Ihre</td><td>ihr/Ihr</td></tr>
      </table>

      <p><strong>في حالة Akkusativ:</strong></p>
      <table>
        <tr><th>الجنس</th><th>Akkusativ</th></tr>
        <tr><td>مذكر</td><td>mein<strong>en</strong> Vater</td></tr>
        <tr><td>مؤنث</td><td>meine Mutter</td></tr>
        <tr><td>محايد</td><td>mein Kind</td></tr>
        <tr><td>جمع</td><td>meine Eltern</td></tr>
      </table>

      <p><strong>في حالة Dativ:</strong></p>
      <table>
        <tr><th>الجنس</th><th>Dativ</th></tr>
        <tr><td>مذكر</td><td>mein<strong>em</strong> Vater</td></tr>
        <tr><td>مؤنث</td><td>mein<strong>er</strong> Mutter</td></tr>
        <tr><td>محايد</td><td>mein<strong>em</strong> Kind</td></tr>
        <tr><td>جمع</td><td>mein<strong>en</strong> Eltern</td></tr>
      </table>

      <div class="example-box">
        Das ist <strong>mein</strong> Bruder. (هذا أخي - Nominativ)<br>
        Ich liebe <strong>meinen</strong> Bruder. (أحب أخي - Akkusativ)<br>
        Ich helfe <strong>meinem</strong> Bruder. (أساعد أخي - Dativ)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>14) الأرقام والتواريخ (Zahlen und Daten)</h3>
    <div class="rule-content">
      <p><strong>الأرقام من 1 إلى 20:</strong></p>
      <p>eins (1)، zwei (2)، drei (3)، vier (4)، fünf (5)، sechs (6)، sieben (7)، acht (8)، neun (9)، zehn (10)، elf (11)، zwölf (12)، dreizehn (13)، vierzehn (14)، fünfzehn (15)، sechzehn (16)، siebzehn (17)، achtzehn (18)، neunzehn (19)، zwanzig (20).</p>

      <p><strong>الأرقام من 21 إلى 99:</strong> (الوحدات قبل العشرات)</p>
      <div class="example-box">
        21 = einundzwanzig<br>
        32 = zweiunddreißig<br>
        45 = fünfundvierzig<br>
        99 = neunundneunzig
      </div>

      <p><strong>المئات والآلاف:</strong></p>
      <div class="example-box">
        100 = hundert<br>
        200 = zweihundert<br>
        1000 = tausend<br>
        2025 = zweitausendfünfundzwanzig
      </div>

      <p><strong>التواريخ:</strong></p>
      <div class="example-box">
        <strong>Heute ist der 15. Januar 2025.</strong> (اليوم هو 15 يناير 2025)<br>
        <strong>Am 15. Januar</strong> habe ich Geburtstag. (في 15 يناير عيد ميلادي)
      </div>
    </div>
  </div>
`;
