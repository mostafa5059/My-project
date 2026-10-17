const RULES_HTML = `
  <div class="rule-section open">
    <h3>1) الحالات الإعرابية (Die Fälle) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>في اللغة الألمانية، الاسم يتغير شكله (أداته) حسب <strong>موقعه في الجملة</strong>. هذه الظاهرة تسمى "الإعراب" (Kasus). هناك 4 حالات إعرابية في الألمانية:</p>
      
      <p><strong>1. Nominativ (حالة الرفع - الفاعل):</strong> هي الحالة الأساسية للاسم. تُستخدم للفاعل (الذي يقوم بالفعل) وللخبر بعد أفعال مثل sein, werden, bleiben.</p>
      <p><strong>2. Akkusativ (حالة النصب - المفعول المباشر):</strong> تُستخدم للمفعول به المباشر (الشيء الذي يقع عليه الفعل مباشرة).</p>
      <p><strong>3. Dativ (حالة الجر - المفعول غير المباشر):</strong> تُستخدم للمفعول به غير المباشر (المستفيد أو المتلقي)، ومع أفعال وحروف جر محددة.</p>
      <p><strong>4. Genitiv (حالة الملكية):</strong> تُستخدم للتعبير عن الملكية (مثل: "سيارة الرجل").</p>

      <p><strong>جدول أدوات التعريف في الحالات الأربع:</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td><strong>Nominativ</strong></td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td><strong>Akkusativ</strong></td><td style="color:#dc2626;font-weight:bold">den</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td><strong>Dativ</strong></td><td style="color:#dc2626;font-weight:bold">dem</td><td style="color:#dc2626;font-weight:bold">der</td><td style="color:#dc2626;font-weight:bold">dem</td><td style="color:#dc2626;font-weight:bold">den + n</td></tr>
        <tr><td><strong>Genitiv</strong></td><td style="color:#dc2626;font-weight:bold">des + s</td><td style="color:#dc2626;font-weight:bold">der</td><td style="color:#dc2626;font-weight:bold">des + s</td><td style="color:#dc2626;font-weight:bold">der</td></tr>
      </table>

      <p><strong>جدول أدوات النكرة (ein/kein) في الحالات الأربع:</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع (kein)</th></tr>
        <tr><td><strong>Nominativ</strong></td><td>ein</td><td>eine</td><td>ein</td><td>keine</td></tr>
        <tr><td><strong>Akkusativ</strong></td><td style="color:#dc2626;font-weight:bold">einen</td><td>eine</td><td>ein</td><td>keine</td></tr>
        <tr><td><strong>Dativ</strong></td><td style="color:#dc2626;font-weight:bold">einem</td><td style="color:#dc2626;font-weight:bold">einer</td><td style="color:#dc2626;font-weight:bold">einem</td><td style="color:#dc2626;font-weight:bold">keinen + n</td></tr>
        <tr><td><strong>Genitiv</strong></td><td style="color:#dc2626;font-weight:bold">eines + s</td><td style="color:#dc2626;font-weight:bold">einer</td><td style="color:#dc2626;font-weight:bold">eines + s</td><td style="color:#dc2626;font-weight:bold">keiner</td></tr>
      </table>

      <p><strong>متى نستخدم كل حالة؟ (القاعدة الذهبية)</strong></p>
      <ul>
        <li><strong>Nominativ:</strong> الفاعل، والخبر بعد sein/werden/bleiben.</li>
        <li><strong>Akkusativ:</strong> المفعول المباشر، ومع حروف الجر (durch, für, gegen, ohne, um).</li>
        <li><strong>Dativ:</strong> المفعول غير المباشر، ومع أفعال (helfen, danken, gefallen, gehören, passen, antworten, zuhören), ومع حروف الجر (mit, nach, bei, seit, von, zu, aus).</li>
        <li><strong>Genitiv:</strong> الملكية، ومع حروف الجر (wegen, trotz, während, statt).</li>
      </ul>

      <p><strong>أمثلة شاملة لكل حالة:</strong></p>
      <div class="example-box">
        <strong>Nominativ:</strong> <strong>Der</strong> Mann liest ein Buch. (الرجل يقرأ كتاباً)<br>
        <strong>Akkusativ:</strong> Ich sehe <strong>den</strong> Mann. (أرى الرجل)<br>
        <strong>Dativ:</strong> Ich helfe <strong>dem</strong> Mann. (أساعد الرجل)<br>
        <strong>Genitiv:</strong> Das ist das Auto <strong>des</strong> Mann<strong>es</strong>. (هذه سيارة الرجل)
      </div>

      <p><strong>ملاحظة مهمة:</strong> في Dativ الجمع، نضيف <code>-n</code> إلى نهاية الاسم إذا لم تكن موجودة:</p>
      <div class="example-box">
        die Kinder → mit den Kinder<strong>n</strong> (مع الأطفال)<br>
        die Freunde → mit den Freunde<strong>n</strong> (مع الأصدقاء)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>2) الأفعال المنفصلة (Trennbare Verben) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>هي أفعال تتكون من <strong>بادئة (Präfix) + فعل أساسي</strong>. البادئة تغير معنى الفعل الأصلي. في الجملة العادية، <strong>تنفصل البادئة</strong> عن الفعل وتذهب إلى <strong>نهاية الجملة</strong>.</p>
      
      <p><strong>البادئات المنفصلة الشائعة:</strong></p>
      <ul>
        <li><code>ab-</code> (abfahren - يغادر)، <code>an-</code> (anrufen - يتصل)، <code>auf-</code> (aufstehen - يستيقظ)، <code>aus-</code> (ausgehen - يخرج)، <code>bei-</code> (beibringen - يعلّم)، <code>ein-</code> (einkaufen - يتسوق)، <code>mit-</code> (mitkommen - يأتي مع)، <code>nach-</code> (nachdenken - يفكر)، <code>vor-</code> (vorbereiten - يحضر)، <code>zu-</code> (zumachen - يغلق)، <code>zurück-</code> (zurückkommen - يعود).</li>
      </ul>

      <p><strong>كيف نستخدمها في المضارع (Präsens)؟</strong></p>
      <p>الفعل الأساسي يُصرّف بشكل طبيعي، والبادئة تذهب إلى نهاية الجملة:</p>
      <div class="example-box">
        <strong>aufstehen (يستيقظ):</strong><br>
        Ich <strong>stehe</strong> um 7 Uhr <strong>auf</strong>. (أستيقظ الساعة 7)<br>
        Du <strong>stehst</strong> um 7 Uhr <strong>auf</strong>.<br>
        Er <strong>steht</strong> um 7 Uhr <strong>auf</strong>.<br><br>
        
        <strong>einkaufen (يتسوق):</strong><br>
        Ich <strong>kaufe</strong> im Supermarkt <strong>ein</strong>. (أتسوق في السوبر ماركت)<br><br>
        
        <strong>anrufen (يتصل):</strong><br>
        Er <strong>ruft</strong> seine Mutter <strong>an</strong>. (يتصل بأمه)
      </div>

      <p><strong>كيف نستخدمها في الماضي البسيط (Präteritum)؟</strong></p>
      <p>نفس القاعدة: الفعل الأساسي يُصرّف في الماضي، والبادئة تذهب إلى النهاية:</p>
      <div class="example-box">
        Ich <strong>stand</strong> um 7 Uhr <strong>auf</strong>. (استيقظت الساعة 7)<br>
        Er <strong>rief</strong> seine Mutter <strong>an</strong>. (اتصل بأمه)
      </div>

      <p><strong>كيف نستخدمها في الماضي التام (Perfekt)؟</strong></p>
      <p>هنا تختلف القاعدة: توضع <code>-ge-</code> بين البادئة والفعل:</p>
      <div class="example-box">
        Ich bin um 7 Uhr <strong>auf</strong>ge<strong>standen</strong>. (استيقظت الساعة 7)<br>
        Er hat seine Mutter <strong>an</strong>ge<strong>rufen</strong>. (اتصل بأمه)<br>
        Ich habe im Supermarkt <strong>ein</strong>ge<strong>kauft</strong>. (تسوقت في السوبر ماركت)
      </div>

      <p><strong>البادئات غير المنفصلة (Untrennbare Präfixe):</strong></p>
      <p>هذه البادئات لا تنفصل أبداً، وتبقى ملتصقة بالفعل:</p>
      <ul>
        <li><code>be-</code> (besuchen - يزور)، <code>ge-</code> (gefallen - يعجب)، <code>er-</code> (erzählen - يحكي)، <code>ver-</code> (verstehen - يفهم)، <code>zer-</code> (zerstören - يدمر)، <code>ent-</code> (entscheiden - يقرر)، <code>emp-</code> (empfehlen - ينصح)، <code>miss-</code> (missverstehen - يسيء الفهم).</li>
      </ul>
      <div class="example-box">
        Ich <strong>verstehe</strong> die Frage. (أفهم السؤال)<br>
        Ich <strong>besuche</strong> meine Oma. (أزور جدتي)<br>
        Ich <strong>erzähle</strong> eine Geschichte. (أحكي قصة)
      </div>

      <p><strong>ملاحظة مهمة:</strong> الأفعال التي تبدأ بـ be-, ge-, er-, ver-, zer-, ent-, emp-, miss- <strong>لا تأخذ -ge-</strong> في Partizip II:</p>
      <div class="example-box">
        verstehen → hat <strong>verstanden</strong> (وليس geverstanden)<br>
        besuchen → hat <strong>besucht</strong> (وليس gebesucht)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>3) الأفعال الانعكاسية (Reflexive Verben) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>هي أفعال تحتاج إلى <strong>ضمير انعكاسي (Reflexivpronomen)</strong> يعود على الفاعل. الضمير يتغير حسب الشخص.</p>
      
      <p><strong>الضمائر الانعكاسية في حالة Akkusativ:</strong></p>
      <table>
        <tr><th>الضمير</th><th>الضمير الانعكاسي</th><th>مثال</th></tr>
        <tr><td>ich</td><td>mich</td><td>Ich freue <strong>mich</strong>.</td></tr>
        <tr><td>du</td><td>dich</td><td>Du freust <strong>dich</strong>.</td></tr>
        <tr><td>er/sie/es</td><td>sich</td><td>Er freut <strong>sich</strong>.</td></tr>
        <tr><td>wir</td><td>uns</td><td>Wir freuen <strong>uns</strong>.</td></tr>
        <tr><td>ihr</td><td>euch</td><td>Ihr freut <strong>euch</strong>.</td></tr>
        <tr><td>sie/Sie</td><td>sich</td><td>Sie freuen <strong>sich</strong>.</td></tr>
      </table>

      <p><strong>الضمائر الانعكاسية في حالة Dativ:</strong></p>
      <table>
        <tr><th>الضمير</th><th>الضمير الانعكاسي</th></tr>
        <tr><td>ich</td><td>mir</td></tr>
        <tr><td>du</td><td>dir</td></tr>
        <tr><td>er/sie/es</td><td>sich</td></tr>
        <tr><td>wir</td><td>uns</td></tr>
        <tr><td>ihr</td><td>euch</td></tr>
        <tr><td>sie/Sie</td><td>sich</td></tr>
      </table>

      <p><strong>متى نستخدم Akkusativ ومتى Dativ؟</strong></p>
      <p><strong>القاعدة:</strong></p>
      <ul>
        <li>إذا كان الفعل الانعكاسي هو <strong>المفعول الوحيد</strong> في الجملة، نستخدم Akkusativ.</li>
        <li>إذا كان هناك <strong>مفعول به آخر</strong> في الجملة (مثل "يدي"، "أسناني")، نستخدم Dativ.</li>
      </ul>

      <div class="example-box">
        <strong>Akkusativ (مفعول وحيد):</strong><br>
        Ich wasche <strong>mich</strong>. (أغتسل - لا يوجد مفعول آخر)<br>
        Ich freue <strong>mich</strong>. (أفرح)<br>
        Er interessiert <strong>sich</strong> für Sport. (يهتم بالرياضة)<br><br>
        
        <strong>Dativ (يوجد مفعول آخر):</strong><br>
        Ich wasche <strong>mir</strong> die Hände. (أغسل يديّ - "يدي" هي المفعول)<br>
        Ich putze <strong>mir</strong> die Zähne. (أنظف أسناني)<br>
        Ich ziehe <strong>mir</strong> die Jacke an. (أرتدي المعطف)
      </div>

      <p><strong>أهم الأفعال الانعكاسية في مستوى A1-A2:</strong></p>
      <ul>
        <li><code>sich freuen</code> (يفرح) - Ich freue mich auf den Urlaub.</li>
        <li><code>sich interessieren</code> (يهتم) - Ich interessiere mich für Sport.</li>
        <li><code>sich waschen</code> (يغتسل) - Ich wasche mich morgens.</li>
        <li><code>sich anziehen</code> (يرتدي) - Ich ziehe mich schnell an.</li>
        <li><code>sich treffen</code> (يتقابل) - Wir treffen uns um 8 Uhr.</li>
        <li><code>sich erinnern</code> (يتذكر) - Ich erinnere mich an dich.</li>
        <li><code>sich entschuldigen</code> (يعتذر) - Ich entschuldige mich für die Verspätung.</li>
        <li><code>sich beeilen</code> (يسرع) - Ich beeile mich.</li>
        <li><code>sich ausruhen</code> (يستريح) - Ich ruhe mich aus.</li>
        <li><code>sich verabreden</code> (يتواعد) - Ich verabrede mich mit Maria.</li>
      </ul>

      <p><strong>ملاحظة:</strong> بعض الأفعال قد تكون انعكاسية أو غير انعكاسية حسب المعنى:</p>
      <div class="example-box">
        Ich <strong>wasche</strong> das Auto. (أغسل السيارة - غير انعكاسي)<br>
        Ich <strong>wasche mich</strong>. (أغتسل - انعكاسي)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>4) حروف الجر مع الحالات (Präpositionen) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>حروف الجر في الألمانية تحدد الحالة الإعرابية للاسم الذي يليها. هناك 3 مجموعات:</p>

      <p><strong>أ. حروف الجر التي تأخذ دائماً Akkusativ:</strong></p>
      <ul>
        <li><code>durch</code> (عبر/من خلال)</li>
        <li><code>für</code> (لأجل/من أجل)</li>
        <li><code>gegen</code> (ضد)</li>
        <li><code>ohne</code> (بدون)</li>
        <li><code>um</code> (حول/في)</li>
        <li><code>bis</code> (حتى)</li>
        <li><code>entlang</code> (على طول)</li>
      </ul>
      <div class="example-box">
        Das Geschenk ist <strong>für dich</strong>. (الهدية لك)<br>
        Ich gehe <strong>ohne dich</strong>. (أذهب بدونك)<br>
        Wir laufen <strong>durch den</strong> Park. (نمشي عبر الحديقة)<br>
        Ich komme <strong>um</strong> 8 Uhr. (سآتي في الساعة 8)
      </div>

      <p><strong>ب. حروف الجر التي تأخذ دائماً Dativ:</strong></p>
      <ul>
        <li><code>mit</code> (مع/بواسطة)</li>
        <li><code>nach</code> (بعد/إلى)</li>
        <li><code>bei</code> (عند/لدى)</li>
        <li><code>seit</code> (منذ)</li>
        <li><code>von</code> (من)</li>
        <li><code>zu</code> (إلى)</li>
        <li><code>aus</code> (من - أصل)</li>
        <li><code>gegenüber</code> (مقابل)</li>
      </ul>
      <div class="example-box">
        Ich fahre <strong>mit dem</strong> Bus. (أسافر بالحافلة)<br>
        Ich komme <strong>aus der</strong> Schweiz. (أنا من سويسرا)<br>
        Ich wohne <strong>bei meinen</strong> Eltern. (أسكن عند والديّ)<br>
        Ich lerne Deutsch <strong>seit einem</strong> Jahr. (أتعلم الألمانية منذ عام)<br>
        Ich gehe <strong>zu dem</strong> Arzt (أو <strong>zum</strong> Arzt). (أذهب إلى الطبيب)
      </div>

      <p><strong>ملاحظة: اختصارات شائعة</strong></p>
      <ul>
        <li><code>zu + dem = zum</code> (zum Arzt, zum Bahnhof)</li>
        <li><code>zu + der = zur</code> (zur Schule, zur Arbeit)</li>
        <li><code>bei + dem = beim</code> (beim Arzt, beim Essen)</li>
        <li><code>von + dem = vom</code> (vom Lehrer, vom Bahnhof)</li>
      </ul>

      <p><strong>ج. حروف الجر المتغيرة (Wechselpräpositionen):</strong></p>
      <p>هذه الحروف تأخذ <strong>Akkusativ عند الحركة</strong> (Wohin? إلى أين؟) و <strong>Dativ عند السكون</strong> (Wo? أين؟).</p>
      <ul>
        <li><code>in</code> (في/إلى)</li>
        <li><code>an</code> (على/إلى جانب)</li>
        <li><code>auf</code> (على)</li>
        <li><code>über</code> (فوق/عبر)</li>
        <li><code>unter</code> (تحت)</li>
        <li><code>vor</code> (أمام/قبل)</li>
        <li><code>hinter</code> (خلف)</li>
        <li><code>neben</code> (بجانب)</li>
        <li><code>zwischen</code> (بين)</li>
      </ul>
      <div class="example-box">
        <strong>حركة (Akkusativ):</strong><br>
        Ich gehe <strong>in die</strong> Schule. (أذهب إلى المدرسة - حركة)<br>
        Ich hänge das Bild <strong>an die</strong> Wand. (أعلق الصورة على الحائط - حركة)<br>
        Er legt das Buch <strong>auf den</strong> Tisch. (يضع الكتاب على الطاولة - حركة)<br><br>
        
        <strong>سكون (Dativ):</strong><br>
        Ich bin <strong>in der</strong> Schule. (أنا في المدرسة - سكون)<br>
        Das Bild hängt <strong>an der</strong> Wand. (الصورة معلقة على الحائط - سكون)<br>
        Das Buch liegt <strong>auf dem</strong> Tisch. (الكتاب موضوع على الطاولة - سكون)
      </div>

      <p><strong>كيف أتذكر الفرق؟</strong></p>
      <ul>
        <li><strong>حركة (Wohin?):</strong> الفعل يدل على انتقال (gehen, fahren, legen, stellen, hängen).</li>
        <li><strong>سكون (Wo?):</strong> الفعل يدل على البقاء (sein, bleiben, liegen, stehen, hängen).</li>
      </ul>
    </div>
  </div>

  <div class="rule-section">
    <h3>5) الروابط (Konjunktionen) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>الروابط في الألمانية تنقسم إلى 3 أنواع، كل نوع له تأثير مختلف على ترتيب الجملة.</p>

      <p><strong>النوع الأول: روابط لا تؤثر على ترتيب الجملة (Position 0)</strong></p>
      <p>الفعل يبقى في المركز الثاني. هذه الروابط:</p>
      <ul>
        <li><code>und</code> (و)</li>
        <li><code>oder</code> (أو)</li>
        <li><code>aber</code> (لكن)</li>
        <li><code>denn</code> (لأن)</li>
        <li><code>sondern</code> (بل - بعد نفي)</li>
      </ul>
      <div class="example-box">
        Ich lerne Deutsch <strong>und</strong> ich wohne in Berlin. (أتعلم الألمانية وأسكن في برلين)<br>
        Ich bin müde, <strong>aber</strong> ich arbeite. (أنا متعب، لكنني أعمل)<br>
        Ich bleibe zu Hause, <strong>denn</strong> es regnet. (أبقى في المنزل لأنها تمطر)<br>
        Ich möchte nicht Tee, <strong>sondern</strong> Kaffee. (لا أريد شاياً، بل قهوة)
      </div>

      <p><strong>النوع الثاني: روابط ترسل الفعل إلى نهاية الجملة الثانوية (Subjunktionen)</strong></p>
      <p>هذه الروابط تبدأ جملة ثانوية، والفعل المصرّف يذهب إلى النهاية:</p>
      <ul>
        <li><code>weil</code> (لأن)</li>
        <li><code>dass</code> (أن)</li>
        <li><code>wenn</code> (إذا/عندما)</li>
        <li><code>ob</code> (هل - غير مباشر)</li>
        <li><code>als</code> (عندما - للماضي مرة واحدة)</li>
        <li><code>obwohl</code> (رغم أن)</li>
        <li><code>damit</code> (لكي)</li>
        <li><code>bevor</code> (قبل أن)</li>
        <li><code>nachdem</code> (بعد أن)</li>
        <li><code>während</code> (بينما)</li>
        <li><code>seitdem</code> (منذ أن)</li>
      </ul>
      <div class="example-box">
        Ich bleibe zu Hause, <strong>weil</strong> es <strong>regnet</strong>. (أبقى في المنزل لأنها تمطر)<br>
        Ich weiß, <strong>dass</strong> er <strong>kommt</strong>. (أعرف أنه سيأتي)<br>
        <strong>Wenn</strong> ich Zeit <strong>habe</strong>, lerne ich. (إذا كان لدي وقت، أدرس)<br>
        Ich weiß nicht, <strong>ob</strong> er <strong>kommt</strong>. (لا أعرف هل سيأتي)<br>
        <strong>Obwohl</strong> es <strong>regnet</strong>, gehe ich aus. (رغم أنها تمطر، أخرج)
      </div>

      <p><strong>النوع الثالث: روابط الظروف (Adverbien)</strong></p>
      <p>هذه الروابط تحتل المركز الأول، والفعل يأتي بعدها مباشرة (المركز الثاني):</p>
      <ul>
        <li><code>deshalb</code> (لذلك)</li>
        <li><code>deswegen</code> (لهذا السبب)</li>
        <li><code>trotzdem</code> (رغم ذلك)</li>
        <li><code>außerdem</code> (بالإضافة إلى ذلك)</li>
        <li><code>dann</code> (ثم)</li>
        <li><code>danach</code> (بعد ذلك)</li>
        <li><code>zuerst</code> (أولاً)</li>
        <li><code>schließlich</code> (أخيراً)</li>
      </ul>
      <div class="example-box">
        Es regnet, <strong>deshalb</strong> <strong>bleibe</strong> ich zu Hause. (تمطر، لذلك أبقى في المنزل)<br>
        Ich bin müde, <strong>trotzdem</strong> <strong>arbeite</strong> ich. (أنا متعب، رغم ذلك أعمل)<br>
        Ich lerne Deutsch. <strong>Außerdem</strong> <strong>lerne</strong> ich Englisch. (أتعلم الألمانية. بالإضافة إلى ذلك، أتعلم الإنجليزية)
      </div>

      <p><strong>مقارنة: weil vs denn</strong></p>
      <table>
        <tr><th>الرابط</th><th>المعنى</th><th>ترتيب الجملة</th><th>مثال</th></tr>
        <tr><td><code>weil</code></td><td>لأن</td><td>الفعل في النهاية</td><td>Ich bleibe zu Hause, <strong>weil</strong> es <strong>regnet</strong>.</td></tr>
        <tr><td><code>denn</code></td><td>لأن</td><td>الفعل في المركز الثاني</td><td>Ich bleibe zu Hause, <strong>denn</strong> es <strong>regnet</strong>.</td></tr>
      </table>
    </div>
  </div>

  <div class="rule-section">
    <h3>6) الأفعال التي تأخذ Dativ (Verben mit Dativ) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>هناك مجموعة من الأفعال في الألمانية لا تأخذ Akkusativ (المفعول المباشر) بل تأخذ <strong>Dativ</strong> (المفعول غير المباشر). يجب حفظ هذه الأفعال.</p>
      
      <p><strong>أهم الأفعال التي تأخذ Dativ:</strong></p>
      <table>
        <tr><th>الفعل</th><th>المعنى</th><th>مثال</th></tr>
        <tr><td><code>helfen</code></td><td>يساعد</td><td>Ich helfe <strong>dem</strong> Mann.</td></tr>
        <tr><td><code>danken</code></td><td>يشكر</td><td>Ich danke <strong>dir</strong>.</td></tr>
        <tr><td><code>gefallen</code></td><td>يعجب</td><td>Das Buch gefällt <strong>mir</strong>.</td></tr>
        <tr><td><code>gehören</code></td><td>ينتمي</td><td>Das Auto gehört <strong>meinem</strong> Vater.</td></tr>
        <tr><td><code>passen</code></td><td>يناسب</td><td>Die Schuhe passen <strong>mir</strong>.</td></tr>
        <tr><td><code>antworten</code></td><td>يجيب</td><td>Ich antworte <strong>dem</strong> Lehrer.</td></tr>
        <tr><td><code>zuhören</code></td><td>يستمع</td><td>Ich höre <strong>dem</strong> Lehrer <strong>zu</strong>.</td></tr>
        <tr><td><code>gratulieren</code></td><td>يهنئ</td><td>Ich gratuliere <strong>dir</strong>.</td></tr>
        <tr><td><code>folgen</code></td><td>يتبع</td><td>Der Hund folgt <strong>mir</strong>.</td></tr>
        <tr><td><code>schmecken</code></td><td>يكون طعمه</td><td>Das Essen schmeckt <strong>mir</strong>.</td></tr>
      </table>

      <p><strong>مثال تفصيلي لكل فعل:</strong></p>
      <div class="example-box">
        <strong>helfen:</strong> Ich helfe <strong>dem</strong> Mann. (أساعد الرجل - Mann مذكر → dem)<br>
        Ich helfe <strong>der</strong> Frau. (أساعد المرأة - Frau مؤنث → der)<br>
        Ich helfe <strong>dem</strong> Kind. (أساعد الطفل - Kind محايد → dem)<br><br>
        
        <strong>danken:</strong> Ich danke <strong>dir</strong> für die Hilfe. (أشكرك على المساعدة)<br><br>
        
        <strong>gefallen:</strong> Das Buch gefällt <strong>mir</strong>. (الكتاب يعجبني)<br>
        Die Schuhe gefallen <strong>mir</strong>. (الحذاء يعجبني)<br><br>
        
        <strong>gehören:</strong> Das Auto gehört <strong>meinem</strong> Vater. (السيارة تنتمي لوالدي)
      </div>

      <p><strong>ملاحظة:</strong> بعض الأفعال قد تأخذ Dativ و Akkusativ معاً (مثل geben, schenken, zeigen):</p>
      <div class="example-box">
        Ich gebe <strong>dem Mann</strong> (Dativ) <strong>den Apfel</strong> (Akkusativ). (أعطي الرجل التفاحة)<br>
        Ich schenke <strong>der Frau</strong> (Dativ) <strong>ein Buch</strong> (Akkusativ). (أهدي المرأة كتاباً)<br>
        Ich zeige <strong>dem Kind</strong> (Dativ) <strong>das Bild</strong> (Akkusativ). (أُري الطفل الصورة)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>7) الأزمنة في اللغة الألمانية (Die Zeiten) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>الألمانية تحتوي على 6 أزمنة، لكن الأكثر استخداماً في الحياة اليومية هما: <strong>Präsens</strong> (المضارع) و <strong>Perfekt</strong> (الماضي التام).</p>

      <p><strong>أ. المضارع (Präsens):</strong></p>
      <p>يُستخدم للتعبير عن الحاضر، الحقائق العامة، والمستقبل القريب. تصريفه:</p>
      <table>
        <tr><th>الضمير</th><th>machen (يفعل)</th><th>fahren (يسافر)</th><th>sein (يكون)</th></tr>
        <tr><td>ich</td><td>mache</td><td>fahre</td><td>bin</td></tr>
        <tr><td>du</td><td>machst</td><td>fährst</td><td>bist</td></tr>
        <tr><td>er/sie/es</td><td>macht</td><td>fährt</td><td>ist</td></tr>
        <tr><td>wir</td><td>machen</td><td>fahren</td><td>sind</td></tr>
        <tr><td>ihr</td><td>macht</td><td>fahrt</td><td>seid</td></tr>
        <tr><td>sie/Sie</td><td>machen</td><td>fahren</td><td>sind</td></tr>
      </table>

      <p><strong>ب. الماضي البسيط (Präteritum):</strong></p>
      <p>يُستخدم في الكتابة والسرد، وأيضاً مع الأفعال المساعدة (sein, haben) في المحادثة. تصريفه:</p>
      <table>
        <tr><th>الضمير</th><th>machen (يفعل)</th><th>gehen (يذهب)</th><th>sein (يكون)</th></tr>
        <tr><td>ich</td><td>machte</td><td>ging</td><td>war</td></tr>
        <tr><td>du</td><td>machtest</td><td>gingst</td><td>warst</td></tr>
        <tr><td>er/sie/es</td><td>machte</td><td>ging</td><td>war</td></tr>
        <tr><td>wir</td><td>machten</td><td>gingen</td><td>waren</td></tr>
        <tr><td>ihr</td><td>machtet</td><td>gingt</td><td>wart</td></tr>
        <tr><td>sie/Sie</td><td>machten</td><td>gingen</td><td>waren</td></tr>
      </table>

      <p><strong>ج. الماضي التام (Perfekt):</strong></p>
      <p>الأكثر استخداماً في المحادثة اليومية. يتكون من: <code>haben/sein</code> (مصرّف) + <code>Partizip II</code> في نهاية الجملة.</p>
      
      <p><strong>متى نستخدم haben ومتى sein؟</strong></p>
      <ul>
        <li><strong>sein:</strong> مع أفعال الحركة (gehen, kommen, fahren, fliegen, reisen, laufen, wandern) وأفعال تغير الحالة (werden, aufstehen, einschlafen, aufwachen).</li>
        <li><strong>haben:</strong> مع جميع الأفعال الأخرى.</li>
      </ul>

      <div class="example-box">
        <strong>haben:</strong> Ich <strong>habe</strong> einen Film <strong>gesehen</strong>. (شاهدت فيلماً)<br>
        <strong>sein:</strong> Ich <strong>bin</strong> nach Berlin <strong>gefahren</strong>. (سافرت إلى برلين)<br>
        <strong>sein:</strong> Ich <strong>bin</strong> um 7 Uhr <strong>aufgestanden</strong>. (استيقظت الساعة 7)
      </div>

      <p><strong>د. المستقبل (Futur I):</strong></p>
      <p>للتعبير عن المستقبل أو التوقعات. يتكون من: <code>werden</code> (مصرّف) + <code>المصدر (Infinitiv)</code> في نهاية الجملة.</p>
      <div class="example-box">
        Ich <strong>werde</strong> morgen nach Berlin <strong>fahren</strong>. (سأسافر إلى برلين غداً)<br>
        Es <strong>wird</strong> wahrscheinlich <strong>regnen</strong>. (من المحتمل أن تمطر)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>8) الأفعال المساعدة (Modalverben) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>الأفعال المساعدة تُستخدم مع أفعال أخرى للتعبير عن الإمكانية، الضرورة، الرغبة، أو الإذن. <strong>الفعل الرئيسي يذهب إلى نهاية الجملة في صيغة المصدر (Infinitiv)</strong>.</p>

      <p><strong>جدول الأفعال المساعدة الستة:</strong></p>
      <table>
        <tr><th>الفعل</th><th>المعنى</th><th>ich</th><th>du</th><th>er/sie/es</th><th>wir</th><th>ihr</th><th>sie/Sie</th></tr>
        <tr><td><strong>können</strong></td><td>يستطيع</td><td>kann</td><td>kannst</td><td>kann</td><td>können</td><td>könnt</td><td>können</td></tr>
        <tr><td><strong>müssen</strong></td><td>يجب</td><td>muss</td><td>musst</td><td>muss</td><td>müssen</td><td>müsst</td><td>müssen</td></tr>
        <tr><td><strong>wollen</strong></td><td>يريد</td><td>will</td><td>willst</td><td>will</td><td>wollen</td><td>wollt</td><td>wollen</td></tr>
        <tr><td><strong>dürfen</strong></td><td>يُسمح له</td><td>darf</td><td>darfst</td><td>darf</td><td>dürfen</td><td>dürft</td><td>dürfen</td></tr>
        <tr><td><strong>sollen</strong></td><td>ينبغي</td><td>soll</td><td>sollst</td><td>soll</td><td>sollen</td><td>sollt</td><td>sollen</td></tr>
        <tr><td><strong>mögen</strong></td><td>يحب</td><td>mag</td><td>magst</td><td>mag</td><td>mögen</td><td>mögt</td><td>mögen</td></tr>
      </table>

      <p><strong>شرح كل فعل:</strong></p>
      <ul>
        <li><strong>können (يستطيع):</strong> للتعبير عن القدرة أو الإمكانية. <em>Ich kann schwimmen. (أستطيع السباحة)</em></li>
        <li><strong>müssen (يجب):</strong> للتعبير عن الضرورة. <em>Ich muss lernen. (يجب أن أدرس)</em></li>
        <li><strong>wollen (يريد):</strong> للتعبير عن الرغبة القوية. <em>Ich will nach Hause gehen. (أريد الذهاب للمنزل)</em></li>
        <li><strong>dürfen (يُسمح):</strong> للتعبير عن الإذن. <em>Darf ich hier rauchen? (هل يُسمح لي بالتدخين هنا؟)</em></li>
        <li><strong>sollen (ينبغي):</strong> للتعبير عن التوصية أو الواجب الأخلاقي. <em>Du sollst mehr schlafen. (ينبغي أن تنام أكثر)</em></li>
        <li><strong>mögen (يحب):</strong> للتعبير عن الإعجاب. <em>Ich mag Schokolade. (أحب الشوكولاتة)</em></li>
      </ul>

      <p><strong>ملاحظات مهمة:</strong></p>
      <ul>
        <li>الأفعال المساعدة <strong>لا تأخذ -t</strong> في نهاية صيغة er/sie/es (مثل: er kann، وليس er kannt).</li>
        <li>الفعل الرئيسي يذهب إلى <strong>نهاية الجملة</strong> في صيغة المصدر.</li>
        <li>في النفي نستخدم <code>nicht</code> بعد الفعل المساعد: <em>Ich kann nicht schwimmen.</em></li>
      </ul>

      <div class="example-box">
        <strong>können:</strong> Ich <strong>kann</strong> gut <strong>schwimmen</strong>. (أستطيع السباحة جيداً)<br>
        <strong>müssen:</strong> Du <strong>musst</strong> mehr <strong>lernen</strong>. (يجب أن تدرس أكثر)<br>
        <strong>wollen:</strong> Er <strong>will</strong> nach Hause <strong>gehen</strong>. (يريد الذهاب إلى المنزل)<br>
        <strong>dürfen:</strong> <strong>Darf</strong> ich hier <strong>rauchen</strong>? (هل يُسمح لي بالتدخين هنا؟)<br>
        <strong>sollen:</strong> Du <strong>sollst</strong> mehr <strong>schlafen</strong>. (ينبغي أن تنام أكثر)<br>
        <strong>mögen:</strong> Ich <strong>mag</strong> Schokolade. (أحب الشوكولاتة)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>9) تصريف الصفات (Adjektivdeklination) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>عند استخدام الصفة <strong>قبل الاسم</strong> (Attributiv)، يجب أن تأخذ نهاية تتوافق مع الحالة والجنس والعدد. هناك 3 أنواع من التصريف:</p>

      <p><strong>أ. التصريف الضعيف (بعد أداة التعريف der/die/das):</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td>Nominativ</td><td>der gut<strong>e</strong> Mann</td><td>die gut<strong>e</strong> Frau</td><td>das gut<strong>e</strong> Kind</td><td>die gut<strong>en</strong> Kinder</td></tr>
        <tr><td>Akkusativ</td><td>den gut<strong>en</strong> Mann</td><td>die gut<strong>e</strong> Frau</td><td>das gut<strong>e</strong> Kind</td><td>die gut<strong>en</strong> Kinder</td></tr>
        <tr><td>Dativ</td><td>dem gut<strong>en</strong> Mann</td><td>der gut<strong>en</strong> Frau</td><td>dem gut<strong>en</strong> Kind</td><td>den gut<strong>en</strong> Kindern</td></tr>
        <tr><td>Genitiv</td><td>des gut<strong>en</strong> Mannes</td><td>der gut<strong>en</strong> Frau</td><td>des gut<strong>en</strong> Kindes</td><td>der gut<strong>en</strong> Kinder</td></tr>
      </table>

      <p><strong>ب. التصريف المختلط (بعد أداة النكرة ein/kein):</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع (kein)</th></tr>
        <tr><td>Nominativ</td><td>ein gut<strong>er</strong> Mann</td><td>eine gut<strong>e</strong> Frau</td><td>ein gut<strong>es</strong> Kind</td><td>keine gut<strong>en</strong> Kinder</td></tr>
        <tr><td>Akkusativ</td><td>einen gut<strong>en</strong> Mann</td><td>eine gut<strong>e</strong> Frau</td><td>ein gut<strong>es</strong> Kind</td><td>keine gut<strong>en</strong> Kinder</td></tr>
        <tr><td>Dativ</td><td>einem gut<strong>en</strong> Mann</td><td>einer gut<strong>en</strong> Frau</td><td>einem gut<strong>en</strong> Kind</td><td>keinen gut<strong>en</strong> Kindern</td></tr>
      </table>

      <p><strong>ج. التصريف القوي (بدون أداة):</strong></p>
      <table>
        <tr><th>الحالة</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td>Nominativ</td><td>gut<strong>er</strong> Wein</td><td>gut<strong>e</strong> Milch</td><td>gut<strong>es</strong> Bier</td><td>gut<strong>e</strong> Weine</td></tr>
        <tr><td>Akkusativ</td><td>gut<strong>en</strong> Wein</td><td>gut<strong>e</strong> Milch</td><td>gut<strong>es</strong> Bier</td><td>gut<strong>e</strong> Weine</td></tr>
        <tr><td>Dativ</td><td>gut<strong>em</strong> Wein</td><td>gut<strong>er</strong> Milch</td><td>gut<strong>em</strong> Bier</td><td>gut<strong>en</strong> Weinen</td></tr>
      </table>

      <p><strong>مثال تفصيلي:</strong></p>
      <div class="example-box">
        <strong>التصريف الضعيف:</strong> Der <strong>gut</strong>e Mann kommt. (الرجل الجيد يأتي)<br>
        Ich sehe den <strong>gut</strong>en Mann. (أرى الرجل الجيد)<br>
        Ich helfe dem <strong>gut</strong>en Mann. (أساعد الرجل الجيد)<br><br>
        
        <strong>التصريف المختلط:</strong> Ein <strong>gut</strong>er Mann kommt. (رجل جيد يأتي)<br>
        Ich sehe einen <strong>gut</strong>en Mann. (أرى رجلاً جيداً)<br>
        Ich helfe einem <strong>gut</strong>en Mann. (أساعد رجلاً جيداً)
      </div>

      <p><strong>ملاحظة:</strong> عندما تكون الصفة <strong>خبراً</strong> (بعد sein/werden/bleiben)، فإنها <strong>لا تُصرّف</strong>:</p>
      <div class="example-box">
        Der Mann ist <strong>gut</strong>. (الرجل جيد - بدون تصريف)<br>
        Die Frau ist <strong>gut</strong>. (المرأة جيدة - بدون تصريف)<br>
        Die Kinder sind <strong>gut</strong>. (الأطفال جيدون - بدون تصريف)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>10) الجمل الثانوية (Nebensätze) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>الجملة الثانوية هي جملة لا يمكن أن تقف وحدها، وتبدأ برابط (weil, dass, wenn...). الفعل المصرّف يذهب إلى <strong>نهاية الجملة</strong>.</p>

      <p><strong>تركيب الجملة الثانوية:</strong></p>
      <p><code>الرابط + الفاعل + باقي الجملة + الفعل المصرّف</code></p>

      <div class="example-box">
        <strong>جملة رئيسية:</strong> Ich bleibe zu Hause. (أبقى في المنزل)<br>
        <strong>جملة ثانوية:</strong> ..., <strong>weil</strong> es <strong>regnet</strong>. (...لأنها تمطر)<br>
        <strong>معاً:</strong> Ich bleibe zu Hause, weil es <strong>regnet</strong>.
      </div>

      <p><strong>عندما تبدأ الجملة الثانوية، تأتي بعدها الجملة الرئيسية مباشرة بالفعل:</strong></p>
      <div class="example-box">
        <strong>Weil</strong> es <strong>regnet</strong>, <strong>bleibe</strong> ich zu Hause.<br>
        <em>(لأنها تمطر، أبقى في المنزل - لاحظ أن bleibe يأتي بعد الفاصلة مباشرة)</em>
      </div>

      <p><strong>أنواع الجمل الثانوية:</strong></p>
      <table>
        <tr><th>الرابط</th><th>المعنى</th><th>مثال</th></tr>
        <tr><td><code>weil</code></td><td>لأن</td><td>Ich lerne Deutsch, <strong>weil</strong> ich in Deutschland studieren möchte.</td></tr>
        <tr><td><code>dass</code></td><td>أن</td><td>Ich hoffe, <strong>dass</strong> du kommst.</td></tr>
        <tr><td><code>wenn</code></td><td>إذا/عندما</td><td><strong>Wenn</strong> ich Zeit habe, komme ich.</td></tr>
        <tr><td><code>als</code></td><td>عندما (للماضي)</td><td><strong>Als</strong> ich klein war, wohnte ich in Kairo.</td></tr>
        <tr><td><code>ob</code></td><td>هل (غير مباشر)</td><td>Ich weiß nicht, <strong>ob</strong> er kommt.</td></tr>
        <tr><td><code>obwohl</code></td><td>رغم أن</td><td><strong>Obwohl</strong> es regnet, gehe ich aus.</td></tr>
        <tr><td><code>damit</code></td><td>لكي</td><td>Ich lerne Deutsch, <strong>damit</strong> ich in Deutschland arbeiten kann.</td></tr>
        <tr><td><code>bevor</code></td><td>قبل أن</td><td><strong>Bevor</strong> ich gehe, rufe ich dich an.</td></tr>
        <tr><td><code>nachdem</code></td><td>بعد أن</td><td><strong>Nachdem</strong> ich gegessen habe, gehe ich spazieren.</td></tr>
      </table>

      <p><strong>مثال شامل:</strong></p>
      <div class="example-box">
        <strong>Weil</strong> ich müde <strong>bin</strong>, <strong>gehe</strong> ich früh ins Bett. (لأنني متعب، أذهب للنوم مبكراً)<br>
        Ich weiß, <strong>dass</strong> du Recht <strong>hast</strong>. (أعرف أنك على حق)<br>
        <strong>Wenn</strong> es morgen <strong>regnet</strong>, <strong>bleibe</strong> ich zu Hause. (إذا أمطرت غداً، أبقى في المنزل)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>11) المبني للمجهول (Passiv) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>المبني للمجهول يُستخدم للتأكيد على <strong>الحدث</strong> بدلاً من الفاعل (الذي قد يكون مجهولاً).</p>

      <p><strong>التركيب:</strong> <code>werden (مصرّف) + Partizip II</code></p>

      <p><strong>في المضارع:</strong></p>
      <table>
        <tr><th>الضمير</th><th>werden</th><th>مثال</th></tr>
        <tr><td>ich</td><td>werde</td><td>Ich <strong>werde</strong> gelobt.</td></tr>
        <tr><td>du</td><td>wirst</td><td>Du <strong>wirst</strong> gelobt.</td></tr>
        <tr><td>er/sie/es</td><td>wird</td><td>Er <strong>wird</strong> gelobt.</td></tr>
        <tr><td>wir</td><td>werden</td><td>Wir <strong>werden</strong> gelobt.</td></tr>
        <tr><td>ihr</td><td>werdet</td><td>Ihr <strong>werdet</strong> gelobt.</td></tr>
        <tr><td>sie/Sie</td><td>werden</td><td>Sie <strong>werden</strong> gelobt.</td></tr>
      </table>

      <p><strong>في الماضي:</strong> <code>wurde + Partizip II</code></p>
      <div class="example-box">
        Das Haus <strong>wurde</strong> 1990 <strong>gebaut</strong>. (بُني المنزل عام 1990)<br>
        Der Brief <strong>wurde</strong> gestern <strong>geschrieben</strong>. (كُتبت الرسالة أمس)
      </div>

      <p><strong>في الماضي التام:</strong> <code>ist + Partizip II + worden</code></p>
      <div class="example-box">
        Das Haus <strong>ist</strong> 1990 <strong>gebaut worden</strong>. (بُني المنزل عام 1990)
      </div>

      <p><strong>مع الفاعل (von + Dativ):</strong> إذا أردنا ذكر الفاعل، نستخدم <code>von</code> + Dativ:</p>
      <div class="example-box">
        Das Auto <strong>wird</strong> (vom Mann) <strong>repariert</strong>. (السيارة تُصلح - من قبل الرجل)<br>
        Das Buch <strong>wird</strong> (von der Frau) <strong>gelesen</strong>. (الكتاب يُقرأ - من قبل المرأة)
      </div>

      <p><strong>متى نستخدم Passiv؟</strong></p>
      <ul>
        <li>عندما يكون الفاعل مجهولاً: <em>Hier <strong>wird</strong> Deutsch <strong>gesprochen</strong>. (هنا تُتحدث الألمانية)</em></li>
        <li>عندما يكون الحدث أهم من الفاعل: <em>Das Haus <strong>wird</strong> <strong>gebaut</strong>. (المنزل يُبنى)</em></li>
        <li>في التعليمات والقواعد: <em>Das Fenster <strong>muss</strong> <strong>geschlossen</strong> <strong>werden</strong>. (يجب إغلاق النافذة)</em></li>
      </ul>
    </div>
  </div>

  <div class="rule-section">
    <h3>12) الأفعال الشاذة (Unregelmäßige Verben) - جدول شامل</h3>
    <div class="rule-content">
      <p>هذه أفعال يجب حفظها لأنها لا تتبع القاعدة في تصريف الماضي و Partizip II. إليك جدول شامل لأهم 40 فعلاً:</p>

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
        <tr><td>verlieren</td><td>verlor</td><td>hat verloren</td><td>يفقد</td></tr>
        <tr><td>gewinnen</td><td>gewann</td><td>hat gewonnen</td><td>يفوز</td></tr>
        <tr><td>bringen</td><td>brachte</td><td>hat gebracht</td><td>يجلب</td></tr>
        <tr><td>wissen</td><td>wusste</td><td>hat gewusst</td><td>يعرف</td></tr>
        <tr><td>können</td><td>konnte</td><td>hat gekonnt</td><td>يستطيع</td></tr>
        <tr><td>müssen</td><td>musste</td><td>hat gemusst</td><td>يجب</td></tr>
        <tr><td>wollen</td><td>wollte</td><td>hat gewollt</td><td>يريد</td></tr>
        <tr><td>dürfen</td><td>durfte</td><td>hat gedurft</td><td>يُسمح له</td></tr>
        <tr><td>sollen</td><td>sollte</td><td>hat gesollt</td><td>ينبغي</td></tr>
        <tr><td>mögen</td><td>mochte</td><td>hat gemocht</td><td>يحب</td></tr>
        <tr><td>schlafen</td><td>schlief</td><td>hat geschlafen</td><td>ينام</td></tr>
        <tr><td>treffen</td><td>traf</td><td>hat getroffen</td><td>يلتقي</td></tr>
        <tr><td>tragen</td><td>trug</td><td>hat getragen</td><td>يحمل</td></tr>
        <tr><td>waschen</td><td>wusch</td><td>hat gewaschen</td><td>يغسل</td></tr>
        <tr><td>ziehen</td><td>zog</td><td>hat gezogen</td><td>يسحب</td></tr>
        <tr><td>schließen</td><td>schloss</td><td>hat geschlossen</td><td>يغلق</td></tr>
        <tr><td>fließen</td><td>floss</td><td>ist geflossen</td><td>يتدفق</td></tr>
        <tr><td>riechen</td><td>roch</td><td>hat gerochen</td><td>يشم</td></tr>
        <tr><td>singen</td><td>sang</td><td>hat gesungen</td><td>يغني</td></tr>
        <tr><td>springen</td><td>sprang</td><td>ist gesprungen</td><td>يقفز</td></tr>
      </table>

      <p><strong>ملاحظات مهمة:</strong></p>
      <ul>
        <li>أفعال الحركة (gehen, kommen, fahren, fliegen, reisen, laufen, wandern) تأخذ <code>sein</code> في Perfekt.</li>
        <li>أفعال تغير الحالة (werden, aufstehen, einschlafen, aufwachen) تأخذ <code>sein</code>.</li>
        <li>جميع الأفعال الأخرى تأخذ <code>haben</code>.</li>
      </ul>
    </div>
  </div>

  <div class="rule-section">
    <h3>13) الضمائر الشخصية في الحالات (Personalpronomen) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>الضمائر الشخصية تتغير حسب الحالة الإعرابية. إليك الجدول الشامل:</p>

      <table>
        <tr><th>الضمير</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th><th>Genitiv (نادر)</th></tr>
        <tr><td>أنا</td><td>ich</td><td>mich</td><td>mir</td><td>meiner</td></tr>
        <tr><td>أنت</td><td>du</td><td>dich</td><td>dir</td><td>deiner</td></tr>
        <tr><td>هو</td><td>er</td><td>ihn</td><td>ihm</td><td>seiner</td></tr>
        <tr><td>هي</td><td>sie</td><td>sie</td><td>ihr</td><td>ihrer</td></tr>
        <tr><td>هو/هي (محايد)</td><td>es</td><td>es</td><td>ihm</td><td>seiner</td></tr>
        <tr><td>نحن</td><td>wir</td><td>uns</td><td>uns</td><td>unser</td></tr>
        <tr><td>أنتم</td><td>ihr</td><td>euch</td><td>euch</td><td>euer</td></tr>
        <tr><td>هم</td><td>sie</td><td>sie</td><td>ihnen</td><td>ihrer</td></tr>
        <tr><td>أنت (رسمي)</td><td>Sie</td><td>Sie</td><td>Ihnen</td><td>Ihrer</td></tr>
      </table>

      <p><strong>أمثلة شاملة:</strong></p>
      <div class="example-box">
        <strong>Nominativ:</strong> <strong>Ich</strong> sehe dich. (أنا أراك)<br>
        <strong>Akkusativ:</strong> Er sieht <strong>mich</strong>. (هو يراني)<br>
        <strong>Dativ:</strong> Er hilft <strong>mir</strong>. (هو يساعدني)<br>
        <strong>Akkusativ:</strong> Ich liebe <strong>ihn</strong>. (أحبه)<br>
        <strong>Dativ:</strong> Ich danke <strong>ihm</strong>. (أشكره)<br>
        <strong>Akkusativ:</strong> Ich sehe <strong>sie</strong>. (أراها)<br>
        <strong>Dativ:</strong> Ich helfe <strong>ihr</strong>. (أساعدها)
      </div>

      <p><strong>ترتيب الضمائر في الجملة:</strong> عندما يكون هناك ضميران (Dativ + Akkusativ)، <strong>الضمير في Akkusativ يأتي أولاً</strong>:</p>
      <div class="example-box">
        Ich gebe <strong>es</strong> (Akk) <strong>dir</strong> (Dat). (أعطيك إياه)<br>
        Er zeigt <strong>sie</strong> (Akk) <strong>mir</strong> (Dat). (يريني إياها)
      </div>

      <p><strong>ملاحظة:</strong> إذا كان أحد الضميرين اسماً (وليس ضميراً)، فإن الاسم في Dativ يأتي قبل الاسم في Akkusativ:</p>
      <div class="example-box">
        Ich gebe <strong>dem Mann</strong> (Dat) <strong>den Apfel</strong> (Akk). (أعطي الرجل التفاحة)<br>
        Ich gebe <strong>ihm</strong> (Dat) <strong>den Apfel</strong> (Akk). (أعطيه التفاحة)<br>
        Ich gebe <strong>es</strong> (Akk) <strong>dem Mann</strong> (Dat). (أعطيها للرجل)
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>14) أدوات الملكية (Possessivartikel) - شرح وافٍ</h3>
    <div class="rule-content">
      <p>أدوات الملكية تُستخدم للتعبير عن ملكية شيء ما. تتغير حسب:</p>
      <ul>
        <li><strong>الشخص المالك</strong> (mein, dein, sein, ihr...)</li>
        <li><strong>جنس الاسم المملوك</strong> (مذكر، مؤنث، محايد)</li>
        <li><strong>الحالة الإعرابية</strong> (Nominativ, Akkusativ, Dativ, Genitiv)</li>
      </ul>

      <p><strong>جدول أدوات الملكية في Nominativ:</strong></p>
      <table>
        <tr><th>الضمير</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td>ich</td><td>mein</td><td>meine</td><td>mein</td><td>meine</td></tr>
        <tr><td>du</td><td>dein</td><td>deine</td><td>dein</td><td>deine</td></tr>
        <tr><td>er/es</td><td>sein</td><td>seine</td><td>sein</td><td>seine</td></tr>
        <tr><td>sie</td><td>ihr</td><td>ihre</td><td>ihr</td><td>ihre</td></tr>
        <tr><td>wir</td><td>unser</td><td>unsere</td><td>unser</td><td>unsere</td></tr>
        <tr><td>ihr</td><td>euer</td><td>eure</td><td>euer</td><td>eure</td></tr>
        <tr><td>sie/Sie</td><td>ihr/Ihr</td><td>ihre/Ihre</td><td>ihr/Ihr</td><td>ihre/Ihre</td></tr>
      </table>

      <p><strong>جدول أدوات الملكية في Akkusativ:</strong></p>
      <table>
        <tr><th>الضمير</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td>ich</td><td>mein<strong>en</strong></td><td>meine</td><td>mein</td><td>meine</td></tr>
        <tr><td>du</td><td>dein<strong>en</strong></td><td>deine</td><td>dein</td><td>deine</td></tr>
        <tr><td>er/es</td><td>sein<strong>en</strong></td><td>seine</td><td>sein</td><td>seine</td></tr>
        <tr><td>sie</td><td>ihr<strong>en</strong></td><td>ihre</td><td>ihr</td><td>ihre</td></tr>
      </table>

      <p><strong>جدول أدوات الملكية في Dativ:</strong></p>
      <table>
        <tr><th>الضمير</th><th>المذكر</th><th>المؤنث</th><th>المحايد</th><th>الجمع</th></tr>
        <tr><td>ich</td><td>mein<strong>em</strong></td><td>mein<strong>er</strong></td><td>mein<strong>em</strong></td><td>mein<strong>en</strong></td></tr>
        <tr><td>du</td><td>dein<strong>em</strong></td><td>dein<strong>er</strong></td><td>dein<strong>em</strong></td><td>dein<strong>en</strong></td></tr>
        <tr><td>er/es</td><td>sein<strong>em</strong></td><td>sein<strong>er</strong></td><td>sein<strong>em</strong></td><td>sein<strong>en</strong></td></tr>
        <tr><td>sie</td><td>ihr<strong>em</strong></td><td>ihr<strong>er</strong></td><td>ihr<strong>em</strong></td><td>ihr<strong>en</strong></td></tr>
      </table>

      <p><strong>أمثلة شاملة:</strong></p>
      <div class="example-box">
        <strong>Nominativ:</strong> Das ist <strong>mein</strong> Bruder. (هذا أخي)<br>
        <strong>Akkusativ:</strong> Ich liebe <strong>meinen</strong> Bruder. (أحب أخي)<br>
        <strong>Dativ:</strong> Ich helfe <strong>meinem</strong> Bruder. (أساعد أخي)<br><br>
        
        <strong>مؤنث:</strong> Das ist <strong>meine</strong> Schwester. (هذه أختي)<br>
        Ich liebe <strong>meine</strong> Schwester. (أحب أختي)<br>
        Ich helfe <strong>meiner</strong> Schwester. (أساعد أختي)<br><br>
        
        <strong>محايد:</strong> Das ist <strong>mein</strong> Kind. (هذا طفلي)<br>
        Ich liebe <strong>mein</strong> Kind. (أحب طفلي)<br>
        Ich helfe <strong>meinem</strong> Kind. (أساعد طفلي)
      </div>

      <p><strong>ملاحظة:</strong> عند استخدام أداة الملكية مع الصفة، تأخذ الصفة التصريف المختلط:</p>
      <div class="example-box">
        Das ist <strong>mein guter</strong> Freund. (هذا صديقي الجيد)<br>
        Ich liebe <strong>meinen guten</strong> Freund. (أحب صديقي الجيد)<br>
        Ich helfe <strong>meinem guten</strong> Freund. (أساعد صديقي الجيد)
      </div>
    </div>
  </div>
`;
