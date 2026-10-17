const RULES_HTML = `
  <div class="rule-section open">
    <h3>1) الحالات الإعرابية (Nominativ, Akkusativ, Dativ) - الأهم في اللغة</h3>
    <div class="rule-content">
      <p>في اللغة الألمانية، الاسم يتغير شكله (أداته) حسب <strong>موقعه في الجملة</strong>. هناك 4 حالات، لكننا سنركز على الثلاث الأساسية:</p>
      <table>
        <tr><th>الحالة</th><th>المذكر (der)</th><th>المؤنث (die)</th><th>المحايد (das)</th><th>الجمع (die)</th></tr>
        <tr><td><strong>Nominativ</strong> (الفاعل)</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td><strong>Akkusativ</strong> (المفعول المباشر)</td><td style="color:#dc2626;font-weight:bold">den</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td><strong>Dativ</strong> (المفعول غير المباشر)</td><td style="color:#dc2626;font-weight:bold">dem</td><td style="color:#dc2626;font-weight:bold">der</td><td style="color:#dc2626;font-weight:bold">dem</td><td style="color:#dc2626;font-weight:bold">den + n</td></tr>
      </table>
      
      <p><strong>الخلاصة الذهبية:</strong></p>
      <ul>
        <li>في <strong>Akkusativ</strong>: يتغير <strong>فقط المذكر</strong> (der يصبح den).</li>
        <li>في <strong>Dativ</strong>: يتغير <strong>الثلاثة</strong> (der→dem, die→der, das→dem) + الجمع (die→den+n).</li>
      </ul>

      <p><strong>أمثلة في جمل كاملة:</strong></p>
      <div class="example-box">
        <span style="color:#2563eb">Nom:</span> <strong>Der</strong> Mann kauft ein Auto. <br><em>(الرجل يشتري سيارة - الرجل فاعل)</em><br><br>
        <span style="color:#dc2626">Akk:</span> Ich sehe <strong>den</strong> Mann. <br><em>(أرى الرجل - الرجل مفعول به مباشر)</em><br><br>
        <span style="color:#059669">Dat:</span> Ich helfe <strong>dem</strong> Mann. <br><em>(أساعد الرجل - الفعل helfen يأخذ Dativ)</em>
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>2) الأفعال المنفصلة (Trennbare Verben) - كيف تنطق وتكتب</h3>
    <div class="rule-content">
      <p>هي أفعال تتكون من <strong>بادئة + فعل أساسي</strong>. في الجملة العادية، تنفصل البادئة وتذهب إلى <strong>نهاية الجملة</strong>!</p>
      <p>البادئات المنفصلة الشائعة: <code>ab-, an-, auf-, aus-, ein-, mit-, zu-, zurück-</code>.</p>
      
      <p><strong>أمثلة في جمل كاملة:</strong></p>
      <div class="example-box">
        <strong>aufstehen (يستيقظ):</strong><br>
        Ich <strong>stehe</strong> um 7 Uhr <strong>auf</strong>.<br>
        <em>(أستيقظ في الساعة 7 - لاحظ أن auf ذهبت للنهاية!)</em><br><br>
        
        <strong>einkaufen (يتسوق):</strong><br>
        Ich <strong>kaufe</strong> im Supermarkt <strong>ein</strong>.<br>
        <em>(أتسوق في السوبر ماركت)</em><br><br>
        
        <strong>anrufen (يتصل):</strong><br>
        Er <strong>ruft</strong> seine Mutter <strong>an</strong>.<br>
        <em>(هو يتصل بأمه)</em>
      </div>
      <p><strong>ملاحظة مهمة في الماضي (Perfekt):</strong> توضع <code>-ge-</code> بين البادئة والفعل:</p>
      <div class="example-box">
        Ich bin um 7 Uhr <strong>auf</strong>ge<strong>standen</strong>.<br>
        Ich habe im Supermarkt <strong>ein</strong>ge<strong>kauft</strong>.
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>3) الأفعال الانعكاسية (Reflexive Verben) - الضمائر المنعكسة</h3>
    <div class="rule-content">
      <p>هي أفعال لا تكتمل إلا بوجود <strong>ضمير انعكاسي</strong> يعود على الفاعل. الضمائر هي:</p>
      <table>
        <tr><th>الضمير</th><th>Akkusativ (النصب)</th><th>Dativ (الجر)</th></tr>
        <tr><td>ich</td><td>mich</td><td>mir</td></tr>
        <tr><td>du</td><td>dich</td><td>dir</td></tr>
        <tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr>
        <tr><td>wir</td><td>uns</td><td>uns</td></tr>
        <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
        <tr><td>sie/Sie</td><td>sich</td><td>sich</td></tr>
      </table>

      <p><strong>أمثلة في جمل كاملة:</strong></p>
      <div class="example-box">
        <strong>sich freuen (يفرح):</strong><br>
        Ich freue <strong>mich</strong> auf den Urlaub.<br>
        <em>(أنا متحمس للإجازة)</em><br><br>
        
        <strong>sich waschen (يغتسل):</strong><br>
        Du wäschst <strong>dich</strong> jeden Morgen.<br>
        <em>(أنت تغتسل كل صباح)</em><br><br>
        
        <strong>sich interessieren (يهتم):</strong><br>
        Er interessiert <strong>sich</strong> für Sport.<br>
        <em>(هو مهتم بالرياضة)</em>
      </div>
      <p><em>ملاحظة: إذا كان هناك مفعول به آخر في الجملة، نستخدم ضمير الـ Dativ (mir/dir/sich...).<br>
      مثال: Ich wasche <strong>mir</strong> die Hände. (أغسل يديّ)</em></p>
    </div>
  </div>

  <div class="rule-section">
    <h3>4) الروابط (Konjunktionen) - ترتيب الجملة</h3>
    <div class="rule-content">
      <p>هناك نوعان من الروابط في الألمانية:</p>
      
      <p><strong>النوع الأول: روابط لا تغير ترتيب الجملة (الفعل يبقى في المركز الثاني):</strong></p>
      <ul>
        <li><code>und</code> (و)</li>
        <li><code>oder</code> (أو)</li>
        <li><code>aber</code> (لكن)</li>
        <li><code>denn</code> (لأن)</li>
      </ul>
      <div class="example-box">
        Ich lerne Deutsch <strong>und</strong> ich wohne in Berlin.<br>
        <em>(أتعلم الألمانية وأسكن في برلين)</em><br><br>
        Ich möchte Tee <strong>oder</strong> Kaffee.<br>
        <em>(أريد شاياً أو قهوة)</em><br><br>
        Ich bin müde, <strong>aber</strong> ich arbeite.<br>
        <em>(أنا متعب، لكنني أعمل)</em>
      </div>

      <p><strong>النوع الثاني: روابط ترسل الفعل إلى نهاية الجملة الثانوية:</strong></p>
      <ul>
        <li><code>weil</code> (لأن)</li>
        <li><code>dass</code> (أن)</li>
        <li><code>wenn</code> (إذا/عندما)</li>
      </ul>
      <div class="example-box">
        Ich bleibe zu Hause, <strong>weil</strong> es <strong>regnet</strong>.<br>
        <em>(أبقى في المنزل لأنها تمطر - الفعل regnet في النهاية!)</em><br><br>
        Ich weiß, <strong>dass</strong> er <strong>kommt</strong>.<br>
        <em>(أعرف أنه سيأتي)</em><br><br>
        <strong>Wenn</strong> ich Zeit <strong>habe</strong>, lerne ich.<br>
        <em>(إذا كان لدي وقت، أدرس)</em>
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>5) حروف الجر مع الحالات (Präpositionen)</h3>
    <div class="rule-content">
      <p><strong>المجموعة الأولى: حروف جر تأخذ دائماً Akkusativ (النصب):</strong></p>
      <ul>
        <li><code>durch</code> (عبر)، <code>für</code> (لأجل)، <code>gegen</code> (ضد)، <code>ohne</code> (بدون)، <code>um</code> (حول)</li>
      </ul>
      <div class="example-box">
        Das Geschenk ist <strong>für dich</strong>.<br><em>(الهدية لك)</em><br><br>
        Ich gehe <strong>ohne dich</strong>.<br><em>(أذهب بدونك)</em>
      </div>

      <p><strong>المجموعة الثانية: حروف جر تأخذ دائماً Dativ (الجر):</strong></p>
      <ul>
        <li><code>mit</code> (مع)، <code>nach</code> (بعد/إلى)، <code>bei</code> (عند)، <code>seit</code> (منذ)، <code>von</code> (من)، <code>zu</code> (إلى)، <code>aus</code> (من)</li>
      </ul>
      <div class="example-box">
        Ich fahre <strong>mit dem Bus</strong>.<br><em>(أسافر بالحافلة)</em><br><br>
        Ich komme <strong>aus der Schweiz</strong>.<br><em>(أنا من سويسرا)</em><br><br>
        Ich wohne <strong>bei meinen Eltern</strong>.<br><em>(أسكن عند والديّ)</em>
      </div>

      <p><strong>المجموعة الثالثة: حروف الجر المتغيرة (Wechselpräpositionen):</strong></p>
      <p>تأخذ <strong>Akkusativ</strong> عند الحركة (Wohin?) و <strong>Dativ</strong> عند السكون (Wo?).</p>
      <ul>
        <li><code>in, an, auf, über, unter, vor, hinter, neben, zwischen</code></li>
      </ul>
      <div class="example-box">
        <strong>حركة (Akkusativ):</strong> Ich gehe <strong>in die</strong> Schule.<br><em>(أذهب إلى المدرسة - حركة)</em><br><br>
        <strong>سكون (Dativ):</strong> Ich bin <strong>in der</strong> Schule.<br><em>(أنا في المدرسة - سكون)</em>
      </div>
    </div>
  </div>

  <div class="rule-section">
    <h3>6) الأفعال التي تأخذ Dativ (أفعال الجر)</h3>
    <div class="rule-content">
      <p>هناك أفعال شائعة جداً في الألمانية لا تأخذ Akkusativ بل Dativ (المفعول به يكون في حالة الجر):</p>
      <ul>
        <li><code>helfen</code> (يساعد)</li>
        <li><code>danken</code> (يشكر)</li>
        <li><code>gefallen</code> (يعجب)</li>
        <li><code>gehören</code> (ينتمي)</li>
        <li><code>passen</code> (يناسب)</li>
        <li><code>antworten</code> (يجيب)</li>
        <li><code>folgen</code> (يتبع)</li>
      </ul>
      
      <p><strong>أمثلة في جمل كاملة:</strong></p>
      <div class="example-box">
        Ich helfe <strong>dem Mann</strong>.<br><em>(أساعد الرجل - لاحظ dem وليس den)</em><br><br>
        Ich danke <strong>dir</strong> für die Hilfe.<br><em>(أشكرك على المساعدة)</em><br><br>
        Das Buch gefällt <strong>mir</strong> sehr.<br><em>(الكتاب يعجبني جداً)</em><br><br>
        Das Auto gehört <strong>meinem Vater</strong>.<br><em>(السيارة تنتمي لوالدي)</em>
      </div>
    </div>
  </div>
    <div class="rule-section open">
    <h3>7) حروف الجر التي تأخذ Dativ دائماً (Präpositionen mit Dativ)</h3>
    <div class="rule-content">
      <p>هناك مجموعة محددة من حروف الجر في الألمانية إذا جاءت في الجملة، فإن الاسم الذي يليها <strong>يأخذ حالة الجر (Dativ) دائماً</strong>، بغض النظر عن موقعه في الجملة.</p>
      
      <p><strong>حروف الجر السبعة الأساسية (القاعدة الذهبية):</strong></p>
      <table>
        <tr><th>حرف الجر</th><th>المعنى</th><th>مثال</th></tr>
        <tr><td><code>mit</code></td><td>مع (بـ)</td><td>mit <strong>dem</strong> Bus (بالحافلة)</td></tr>
        <tr><td><code>nach</code></td><td>بعد / إلى (مدينة/دولة)</td><td>nach <strong>der</strong> Arbeit (بعد العمل)</td></tr>
        <tr><td><code>bei</code></td><td>عند / لدى</td><td>bei <strong>dem</strong> Arzt (عند الطبيب)</td></tr>
        <tr><td><code>seit</code></td><td>منذ</td><td>seit <strong>einem</strong> Jahr (منذ عام)</td></tr>
        <tr><td><code>von</code></td><td>من</td><td>von <strong>der</strong> Schule (من المدرسة)</td></tr>
        <tr><td><code>zu</code></td><td>إلى (شخص/مكان)</td><td>zu <strong>dem</strong> Bahnhof (إلى المحطة)</td></tr>
        <tr><td><code>aus</code></td><td>من (أصل)</td><td>aus <strong>der</strong> Türkei (من تركيا)</td></tr>
      </table>

      <p><strong>كيف تتغير أدوات التعريف مع الـ Dativ؟</strong></p>
      <table>
        <tr><th>الجنس</th><th>أداة التعريف</th><th>أداة النكرة</th></tr>
        <tr><td>المذكر (der)</td><td style="color:#dc2626;font-weight:bold">dem</td><td style="color:#dc2626;font-weight:bold">einem</td></tr>
        <tr><td>المؤنث (die)</td><td style="color:#dc2626;font-weight:bold">der</td><td style="color:#dc2626;font-weight:bold">einer</td></tr>
        <tr><td>المحايد (das)</td><td style="color:#dc2626;font-weight:bold">dem</td><td style="color:#dc2626;font-weight:bold">einem</td></tr>
        <tr><td>الجمع (die)</td><td style="color:#dc2626;font-weight:bold">den + n</td><td style="color:#dc2626;font-weight:bold">— (بدون أداة)</td></tr>
      </table>

      <p><strong>جمل كاملة للتوضيح:</strong></p>
      <div class="example-box">
        <strong>mit (مع):</strong> Ich fahre <strong>mit dem</strong> Auto zur Arbeit.<br>
        <em>(أذهب بالسيارة إلى العمل)</em><br><br>
        
        <strong>nach (بعد/إلى):</strong> <strong>Nach dem</strong> Essen gehen wir spazieren.<br>
        <em>(بعد الأكل نذهب للتنزه)</em><br><br>
        
        <strong>bei (عند):</strong> Ich wohne <strong>bei meinen</strong> Eltern.<br>
        <em>(أسكن عند والديّ)</em><br><br>
        
        <strong>seit (منذ):</strong> Ich lerne Deutsch <strong>seit einem</strong> Jahr.<br>
        <em>(أتعلم الألمانية منذ عام)</em><br><br>
        
        <strong>von (من):</strong> Er kommt <strong>von der</strong> Arbeit.<br>
        <em>(يأتي من العمل)</em><br><br>
        
        <strong>zu (إلى):</strong> Ich gehe <strong>zu dem</strong> Arzt (أو <strong>zum</strong> Arzt).<br>
        <em>(أذهب إلى الطبيب)</em><br><br>
        
        <strong>aus (من أصل):</strong> Sie kommt <strong>aus der</strong> Schweiz.<br>
        <em>(هي من سويسرا)</em>
      </div>

      <p><strong>ملاحظات هامة جداً:</strong></p>
      <ul>
        <li><code>zu + dem = zum</code> (اختصار شائع جداً: zum Arzt, zum Bahnhof).</li>
        <li><code>zu + der = zur</code> (اختصار شائع: zur Schule, zur Arbeit).</li>
        <li><code>bei + dem = beim</code> (اختصار: beim Arzt, beim Essen).</li>
        <li><code>von + dem = vom</code> (اختصار: vom Lehrer, vom Bahnhof).</li>
        <li>حرف <code>nach</code> يأتي بدون أداة مع المدن والدول (nach Berlin, nach Deutschland)، ومع الأسماء الأخرى يأخذ Dativ (nach dem Essen).</li>
      </ul>
    </div>
  </div>
`;