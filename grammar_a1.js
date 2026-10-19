/* ============================================================
   grammar_a1.js — قواعد A1 الشاملة (30 موضوعاً)
   المحتوى مأخوذ من ملخص Hend A1 (كما هو)
   ============================================================ */

const GRAMMAR_A1 = [
  /* ========== 1. Das Alphabet ========== */
  {
    id: "g01",
    icon: "🔤",
    category: "basics",
    title: "Das Alphabet",
    titleAr: "الحروف الأبجدية",
    level: "A1",
    html: `
      <h4>الحروف الألمانية</h4>
      <div class="grammar-letters">
        Aa – Bb – Cc – Dd – Ee – Ff – Gg – Hh – Ii – Jj – Kk – Ll – Mm –
        Nn – Oo – Pp – Qq – Rr – Ss – Tt – Uu – Vv – Ww – Xx – Yy – Zz
      </div>
      <p><strong>ß = ss</strong> &nbsp;&nbsp; <code>groß</code></p>

      <h4>Umlaute (الحروف المزدوجة)</h4>
      <ul>
        <li><strong>a → ä</strong> = ae</li>
        <li><strong>o → ö</strong> = oe &nbsp; (schon – schön)</li>
        <li><strong>u → ü</strong> = ue</li>
      </ul>

      <h4>Die Diphthonge (الحروف المركبة)</h4>
      <ul>
        <li><strong>ei / ai</strong> = أي &nbsp; → Mai, Bäuche</li>
        <li><strong>au</strong> = أو &nbsp; → Auge</li>
        <li><strong>eu / äu</strong> = أوي &nbsp; → neun, Bäuche</li>
        <li><strong>ie</strong> = إي &nbsp; → sieben</li>
        <li><strong>ig</strong> في نهاية الكلمة = ich &nbsp; → wahrig, fleißig, fähig</li>
      </ul>

      <h4>ملاحظات النطق</h4>
      <ul>
        <li><strong>C = K</strong> في الكلمات الأجنبية &nbsp; → Café</li>
        <li><strong>ck = k</strong> &nbsp; → Ecke</li>
        <li><strong>ch:</strong>
          <ul>
            <li>1) خ — عندما يسبقها a, o, u, au &nbsp; → Nacht, auch, noch, Buch</li>
            <li>2) ش — ich, mich, durch</li>
            <li>3) X = chs &nbsp; → sechs</li>
          </ul>
        </li>
        <li><strong>B</strong> في نهاية الكلمة يُنطق P &nbsp; → ab, Stab</li>
        <li><strong>D</strong> في نهاية الكلمة يُنطق T &nbsp; → Bad</li>
        <li><strong>dt</strong> → t (dt غير موجودة ويُنطق t) &nbsp; → Stadt</li>
        <li><strong>G</strong> في نهاية الكلمة يُنطق K &nbsp; → Krieg – Tag</li>
      </ul>

      <h4>Die Vokale (الحركات)</h4>
      <p>a, e, i, o, u + ä, ö, ü</p>
      <ul>
        <li>تُنطق طويلة إذا جاءت قبل H أو إذا جاءت مضاعفة &nbsp; → See – Staat</li>
        <li>تُنطق قصيرة لو جاءت قبل حرف مضاعف &nbsp; → Satt – statt – nennen</li>
      </ul>
      <div class="grammar-tip">💡 استخدم زر 🔊 بجانب أي كلمة لسماع نطقها.</div>
    `
  },

  /* ========== 2. Die Zahlen ========== */
  {
    id: "g02",
    icon: "🔢",
    category: "basics",
    title: "Die Zahlen",
    titleAr: "الأرقام",
    level: "A1",
    html: `
      <h4>Kardinalzahlen (الأرقام الأصلية)</h4>
      <table>
        <tr><td>0 – null</td><td>1 – eins</td><td>2 – zwei</td><td>3 – drei</td></tr>
        <tr><td>4 – vier</td><td>5 – fünf</td><td>6 – sechs</td><td>7 – sieben</td></tr>
        <tr><td>8 – acht</td><td>9 – neun</td><td>10 – zehn</td><td>11 – elf</td></tr>
        <tr><td>12 – zwölf</td><td>13 – dreizehn</td><td>14 – vierzehn</td><td>15 – fünfzehn</td></tr>
        <tr><td>16 – sechzehn</td><td>17 – siebzehn</td><td>18 – achtzehn</td><td>19 – neunzehn</td></tr>
        <tr><td>20 – zwanzig</td><td>30 – dreißig</td><td>40 – vierzig</td><td>50 – fünfzig</td></tr>
        <tr><td>60 – sechzig</td><td>70 – siebzig</td><td>80 – achtzig</td><td>90 – neunzig</td></tr>
        <tr><td>100 – hundert</td><td>1000 – Tausend</td><td></td><td></td></tr>
      </table>

      <h4>Ordinalzahlen (الأرقام الترتيبية)</h4>
      <table>
        <tr><td>1. – erst</td><td>2. – zweit</td><td>3. – dritt</td><td>4. – viert</td></tr>
        <tr><td>5. – fünft</td><td>6. – sechst</td><td>7. – siebt</td><td>8. – acht</td></tr>
        <tr><td>9. – neunt</td><td>10. – zehnt</td><td>11. – elft</td><td>12. – zwölft</td></tr>
        <tr><td>13. – dreizehnt</td><td>14. – vierzehnt</td><td>15. – fünfzehnt</td><td>16. – sechzehnt</td></tr>
        <tr><td>17. – siebzehnt</td><td>18. – achtzehnt</td><td>19. – neunzehnt</td><td>20. – zwanzigst</td></tr>
        <tr><td>30. – dreißigst</td><td>40. – vierzigst</td><td></td><td></td></tr>
      </table>
    `
  },

  /* ========== 3. Der Artikel ========== */
  {
    id: "g03",
    icon: "📦",
    category: "basics",
    title: "Der Artikel",
    titleAr: "أدوات التعريف والتنكير",
    level: "A1",
    html: `
      <h4>1) Bestimmt (معرفة)</h4>
      <ul>
        <li><strong>der</strong>: للمفرد المذكر &nbsp; → der Stuhl, der Mann, der See</li>
        <li><strong>das</strong>: للمفرد المحايد &nbsp; → das Buch, das Mädchen, das Kind</li>
        <li><strong>die</strong>: للمفرد المؤنث &nbsp; → die Frau, die Sonne, die Tasche</li>
        <li><strong>die</strong>: لجمع أي من الأجناس &nbsp; → die Stühle, die Bücher, die Frauen</li>
      </ul>

      <h4>2) Unbestimmt (نكرة)</h4>
      <ul>
        <li><strong>ein</strong>: للمفرد المذكر &nbsp; → ein Stuhl, ein Mann, ein See</li>
        <li><strong>ein</strong>: للمفرد المحايد &nbsp; → ein Buch, ein Mädchen</li>
        <li><strong>eine</strong>: للمفرد المؤنث &nbsp; → eine Frau, eine Sonne</li>
        <li>للجمع: بدون أداة &nbsp; → Stühle, Bücher, Frauen</li>
      </ul>

      <h4>Negation (النفي)</h4>
      <ul>
        <li>ein → <strong>kein</strong> &nbsp; → kein Mann arbeitet heute</li>
        <li>ein → <strong>kein</strong> &nbsp; → kein Buch interessiert mich</li>
        <li>eine → <strong>keine</strong> &nbsp; → keine Frau kommt Morgen</li>
        <li>kein (Pl.) → <strong>keine</strong> &nbsp; → Keine Bücher finde ich in der Bibliothek</li>
      </ul>
      <div class="grammar-tip">💡 تذكّر: أداة التعريف تحدد جنس الاسم، وأداة التنكير تُستخدم عند ذكر شيء لأول مرة.</div>
    `
  },

  /* ========== 4. Die Personalpronomen ========== */
  {
    id: "g04",
    icon: "👤",
    category: "basics",
    title: "Die Personalpronomen",
    titleAr: "الضمائر الشخصية",
    level: "A1",
    html: `
      <table>
        <tr><th>الضمير</th><th>المعنى</th></tr>
        <tr><td>ich</td><td>أنا</td></tr>
        <tr><td>du</td><td>أنت</td></tr>
        <tr><td>er</td><td>هو</td></tr>
        <tr><td>es</td><td>هو المحايد</td></tr>
        <tr><td>sie</td><td>هي</td></tr>
        <tr><td>wir</td><td>نحن</td></tr>
        <tr><td>ihr</td><td>أنتم</td></tr>
        <tr><td>sie</td><td>هم</td></tr>
        <tr><td>Sie</td><td>أنت/أنتم بصيغة الاحترام (Herr/Frau)</td></tr>
      </table>

      <h4>groß / klein (كبير / صغير)</h4>
      <p>متى يُكتب الحرف الأول من الكلمة "كبير" (groß):</p>
      <ul>
        <li>1) في بداية الجملة</li>
        <li>2) بداية السؤال</li>
        <li>3) بداية الاسم (اسم الشخص / البلد)</li>
      </ul>
    `
  },

  /* ========== 5. Begrüßung ========== */
  {
    id: "g05",
    icon: "💬",
    category: "communication",
    title: "Begrüßung",
    titleAr: "التحيات",
    level: "A1",
    html: `
      <h4>التحيات</h4>
      <ul>
        <li><strong>Hallo / Willkommen</strong> — مرحباً / مرحباً من القلب (herzlich Willkommen)</li>
        <li><strong>Wie geht's dir / Ihnen?</strong> — كيف حالك؟</li>
        <li><strong>Guten Morgen</strong> — صباح الخير</li>
        <li><strong>Guten Tag</strong> — يوم سعيد</li>
        <li><strong>Guten Abend</strong> — مساء الخير</li>
        <li><strong>Gute Nacht</strong> — ليلة سعيدة / تصبح على خير</li>
        <li><strong>Tschüs / Ciao</strong> — باي</li>
        <li><strong>Auf Wiedersehen</strong> — مع السلامة</li>
        <li><strong>Bis bald / Bis gleich</strong> — أراك قريباً</li>
        <li><strong>Bis Morgen</strong> — أراك صباحاً</li>
      </ul>

      <h4>أسئلة التعريف بالنفس</h4>
      <ul>
        <li><strong>Wie heißen Sie?</strong> = Wer sind Sie? = Wie ist Ihr Name?</li>
        <li><strong>Ich heiße Hend</strong> = ich bin Hend = mein Name ist Hend = das ist Hend</li>
        <li><strong>Woher kommen Sie / kommst du?</strong></li>
        <li><strong>Ich komme aus</strong> Ägypten / Syrien / Japan / Amerika / Deutschland</li>
        <li><strong>Welche Sprache sprechen Sie / sprichst du?</strong></li>
        <li><strong>Ich spreche</strong> Arabisch, Englisch und Deutsch.</li>
        <li><strong>Wo wohnen Sie / wohnst du?</strong></li>
        <li><strong>Ich wohne in</strong> Kairo – Saudi Arabien</li>
      </ul>

      <h4>شكر واستئذان</h4>
      <ul>
        <li><strong>Danke / Vielen Dank / Danke schön</strong> — متشكر جداً</li>
        <li><strong>bitte</strong> — عفواً</li>
      </ul>
    `
  },

  /* ========== 6. Präsens ========== */
  {
    id: "g06",
    icon: "⏱️",
    category: "grammar",
    title: "Präsens",
    titleAr: "المضارع",
    level: "A1",
    html: `
      <h4>1) Schwache Verben (الأفعال الضعيفة)</h4>
      <p>lernen – spielen – lieben – machen – lehren</p>
      <p>نحذف <code>en</code> من نهاية الفعل → يتبقى الـ Verbstamm → نضيف النهايات:</p>
      <table>
        <tr><th>Pronomen</th><th>Endung</th><th>lernen</th><th>spielen</th><th>machen</th></tr>
        <tr><td>ich</td><td>—</td><td>lerne</td><td>spiele</td><td>mache</td></tr>
        <tr><td>du</td><td>st</td><td>lernst</td><td>spielst</td><td>machst</td></tr>
        <tr><td>er/es/sie</td><td>t</td><td>lernt</td><td>spielt</td><td>macht</td></tr>
        <tr><td>wir</td><td>en</td><td>lernen</td><td>spielen</td><td>machen</td></tr>
        <tr><td>ihr</td><td>t</td><td>lernt</td><td>spielt</td><td>macht</td></tr>
        <tr><td>sie/Sie</td><td>en</td><td>lernen</td><td>spielen</td><td>machen</td></tr>
      </table>

      <h4>2) Starke Verben (الأفعال القوية)</h4>
      <p>هي التي لا تنطبق عليها قاعدة التصريف وتُحفظ كما هي: <strong>sein – haben – sprechen – lesen</strong></p>
      <table>
        <tr><th>Pronomen</th><th>sein</th><th>haben</th><th>sprechen</th><th>lesen</th></tr>
        <tr><td>ich</td><td>bin</td><td>habe</td><td>spreche</td><td>lese</td></tr>
        <tr><td>du</td><td>bist</td><td>hast</td><td>sprichst</td><td>liest</td></tr>
        <tr><td>er/es/sie</td><td>ist</td><td>hat</td><td>spricht</td><td>liest</td></tr>
        <tr><td>wir</td><td>sind</td><td>haben</td><td>sprechen</td><td>lesen</td></tr>
        <tr><td>ihr</td><td>seid</td><td>habt</td><td>sprecht</td><td>lest</td></tr>
        <tr><td>sie/Sie</td><td>sind</td><td>haben</td><td>sprechen</td><td>lesen</td></tr>
      </table>

      <table>
        <tr><th>Pronomen</th><th>helfen</th><th>werden</th></tr>
        <tr><td>ich</td><td>helfe</td><td>werde</td></tr>
        <tr><td>du</td><td>hilfst</td><td>wirst</td></tr>
        <tr><td>er/es/sie</td><td>hilft</td><td>wird</td></tr>
        <tr><td>wir</td><td>helfen</td><td>werden</td></tr>
        <tr><td>ihr</td><td>helft</td><td>werdet</td></tr>
        <tr><td>sie/Sie</td><td>helfen</td><td>werden</td></tr>
      </table>
    `
  },

  /* ========== 7. Possessivpronomen ========== */
  {
    id: "g07",
    icon: "🎁",
    category: "grammar",
    title: "Possessivpronomen",
    titleAr: "ضمائر الملكية",
    level: "A1",
    html: `
      <table>
        <tr><th>الضمير</th><th>الملكية</th><th>مثال</th></tr>
        <tr><td>ich</td><td>mein</td><td>Mein Name ist Hend — اسمي هند</td></tr>
        <tr><td>du</td><td>dein</td><td>Dein Vater ist krank — والدك مريض</td></tr>
        <tr><td>er/es</td><td>sein</td><td>Sein Haus ist groß — منزله كبير</td></tr>
        <tr><td>sie</td><td>ihr</td><td>Ihr Mann ist in Deutschland — زوجها في ألمانيا</td></tr>
        <tr><td>wir</td><td>unser</td><td>Unser Lehrer ist gut — معلمنا جيد</td></tr>
        <tr><td>ihr</td><td>euer</td><td>Euer Bruder heißt Ali — اخوكم اسمه علي</td></tr>
        <tr><td>sie</td><td>ihr</td><td>Ihr Buch ist nett — كتابهم ظريف</td></tr>
        <tr><td>Sie</td><td>Ihr</td><td>Ihr Stuhl ist hier — كرسي حضرتك هنا</td></tr>
      </table>

      <h4>قاعدة مهمة</h4>
      <p>عندما يتبع ضمير الملكية اسم جمع أو مفرد مؤنث، يُضاف حرف <code>e</code> في نهاية الضمير:</p>
      <ul>
        <li><strong>Meine</strong> Mutter heißt Nadia.</li>
        <li><strong>Deine</strong> Frau ist schön.</li>
        <li><strong>Unsere</strong> Kinder sind böse.</li>
      </ul>

      <h4>حالة خاصة: euer</h4>
      <p>الضمير <code>euer</code> عند إضافة أي نهاية له يتم حذف حرف <code>e</code> الموجود قبل حرف <code>r</code>:</p>
      <ul>
        <li>Euer Haus → <strong>eure</strong> Häuser</li>
        <li>Euer Buch → <strong>eure</strong> Bücher</li>
        <li>Mutter → <strong>eure</strong> Mutter</li>
      </ul>
    `
  },

  /* ========== 8. Die Fragen ========== */
  {
    id: "g08",
    icon: "❓",
    category: "communication",
    title: "Die Fragen",
    titleAr: "أنواع الأسئلة",
    level: "A1",
    html: `
      <h4>1) Ja/Nein-Fragen (أسئلة بنعم/لا)</h4>
      <ul>
        <li>Ich heiße Hend. → <strong>Heißt du Hend?</strong> Ja, ich heiße Hend. / Nein, ich heiße Hend nicht.</li>
        <li><strong>Ist</strong> das Buch gut? Ja, das Buch ist gut. / Nein, das Buch ist nicht gut.</li>
        <li><strong>Hast</strong> du Geld? Ja, ich habe Geld. / Nein, ich habe kein Geld.</li>
        <li><strong>Spielst</strong> du Fußball? Ja, ich spiele Fußball. / Nein, ich spiele Fußball nicht.</li>
        <li><strong>Arbeiten</strong> Sie im Krankenhaus? Ja, ich arbeite im Krankenhaus.</li>
        <li><strong>Lernt</strong> ihr Deutsch? Ja, wir lernen Deutsch.</li>
      </ul>

      <h4>2) W-Fragen (أسئلة الاستفهام)</h4>
      <table>
        <tr><th>الأداة</th><th>المعنى</th><th>مثال</th></tr>
        <tr><td>Was</td><td>ماذا</td><td>Was ist das? — ما هذا؟</td></tr>
        <tr><td>Wer</td><td>من</td><td>Wer ist dein Freund? — من هو صديقك؟</td></tr>
        <tr><td>Wo</td><td>أين</td><td>Wo liegt Berlin? — أين تقع برلين؟</td></tr>
        <tr><td>Woher</td><td>من أين</td><td>Woher kommst du? — من أين أتيت؟</td></tr>
        <tr><td>Wohin</td><td>إلى أين</td><td>Wohin gehst du? — إلى أين تذهب؟</td></tr>
        <tr><td>Wann</td><td>متى</td><td>Wann hast du Geburtstag? — متى عيد ميلادك؟</td></tr>
        <tr><td>Bis wann</td><td>إلى متى</td><td>Bis wann warten Sie hier? — إلى متى تنتظر هنا؟</td></tr>
        <tr><td>Von wann bis wann</td><td>من متى إلى متى</td><td>Von wann bis wann bleibst du in Kairo?</td></tr>
        <tr><td>Warum</td><td>لماذا</td><td>Warum fragst du nicht؟</td></tr>
        <tr><td>Wie</td><td>كيف</td><td>Wie ist dein Vater؟</td></tr>
      </table>

      <h4>أسئلة شائعة بـ Wie</h4>
      <ul>
        <li>Wie heißt du?</li>
        <li>Wie geht's?</li>
        <li>Wie ist dein Name?</li>
        <li>Wie alt bist du?</li>
        <li>Wie groß / lang?</li>
        <li>Wie viel / wie viele?</li>
        <li>Wie spät ist es? / Um wie viel Uhr?</li>
        <li>Wie bitte?</li>
        <li>Wie schreibt man das? / Wie buchstabiert man das?</li>
      </ul>
      <p><strong>Wie alt sind Sie/bist du?</strong> — Ich bin 25 Jahre alt. / Ich bin 25.</p>
      <p><strong>Was machen Sie beruflich?</strong> = Was sind Sie von Beruf? = Was arbeiten Sie?</p>
      <p>→ Ich bin Arzt / Ich arbeite als Arzt / Ich bin Arzt von Beruf.</p>
    `
  },

  /* ========== 9. Die Berufe ========== */
  {
    id: "g09",
    icon: "💼",
    category: "communication",
    title: "Die Berufe",
    titleAr: "المهن",
    level: "A1",
    html: `
      <h4>أسئلة عن المهنة</h4>
      <ul>
        <li><strong>Was machen Sie beruflich?</strong></li>
        <li><strong>Was sind Sie von Beruf?</strong></li>
        <li><strong>Was arbeiten Sie?</strong></li>
      </ul>
      <p>الإجابة: Ich bin Arzt / Ich arbeite als Arzt / Ich bin Arzt von Beruf.</p>

      <h4>بعض المهن</h4>
      <table>
        <tr><td>Apothekerin</td><td>صيدلانية</td></tr>
        <tr><td>Krankenschwester</td><td>ممرضة</td></tr>
        <tr><td>Elektroingenieur</td><td>مهندس كهرباء</td></tr>
        <tr><td>Softwareingenieur</td><td>مهندس برمجيات</td></tr>
        <tr><td>Biomedizintechniker</td><td>فني طب حيوي</td></tr>
        <tr><td>Bauingenieur</td><td>مهندس مدني</td></tr>
        <tr><td>Sozialarbeiter</td><td>أخصائي اجتماعي</td></tr>
        <tr><td>Psychologe</td><td>طبيب نفسي</td></tr>
        <tr><td>Verkaufspezialist</td><td>أخصائي مبيعات</td></tr>
        <tr><td>Schülerin</td><td>طالبة</td></tr>
        <tr><td>Chemikerin</td><td>كيميائية</td></tr>
        <tr><td>PR-Spezialistin</td><td>أخصائية علاقات عامة</td></tr>
        <tr><td>Buchhalter</td><td>محاسب</td></tr>
        <tr><td>Wirtschaftsanalytiker</td><td>محلل أعمال</td></tr>
      </table>
    `
  },

  /* ========== 10. Die Familie ========== */
  {
    id: "g10",
    icon: "👨‍👩‍👧",
    category: "life",
    title: "Die Familie",
    titleAr: "العائلة",
    level: "A1",
    html: `
      <table>
        <tr><th>الكلمة</th><th>المعنى</th><th>مثال</th></tr>
        <tr><td>der Großvater</td><td>الجد</td><td>Mein Großvater heißt Taha.</td></tr>
        <tr><td>die Großmutter</td><td>الجدة</td><td>Meine Großmutter heißt Fatema.</td></tr>
        <tr><td>die Großeltern</td><td>الجد والجدة</td><td>Meine Großeltern sind gestorben.</td></tr>
        <tr><td>der Vater</td><td>الأب</td><td>Mein Vater heißt Abdel Hamid.</td></tr>
        <tr><td>die Mutter</td><td>الأم</td><td>Meine Mutter heißt Nadia.</td></tr>
        <tr><td>die Eltern</td><td>الوالدين</td><td>Meine Eltern wohnen in Kairo.</td></tr>
        <tr><td>der Sohn</td><td>الابن</td><td>Mein Sohn heißt Mohamed.</td></tr>
        <tr><td>die Tochter</td><td>الابنة</td><td>Meine Tochter heißt Hana.</td></tr>
        <tr><td>der Bruder</td><td>الأخ</td><td>Mein Bruder kommt heute.</td></tr>
        <tr><td>die Schwester</td><td>الأخت</td><td>Meine Schwester ist schön.</td></tr>
        <tr><td>die Geschwister</td><td>الأشقاء</td><td>—</td></tr>
        <tr><td>der Onkel</td><td>العم / الخال</td><td>Mein Onkel wohnt in Deutschland.</td></tr>
        <tr><td>die Tante</td><td>العمة / الخالة</td><td>Meine Tante hat drei Kinder.</td></tr>
        <tr><td>der Cousin / die Cousine</td><td>ابن/بنت العم أو الخال</td><td>—</td></tr>
        <tr><td>der Neffe / die Nichte</td><td>ابن الأخ أو الأخت / بنت الأخ أو الأخت</td><td>—</td></tr>
        <tr><td>der Enkel / die Enkelin</td><td>الحفيد / الحفيدة</td><td>—</td></tr>
      </table>
    `
  },
  
  /* ========== 11. Die Wochentage ========== */
  {
    id: "g11",
    icon: "📅",
    category: "life",
    title: "Die Wochentage",
    titleAr: "أيام الأسبوع",
    level: "A1",
    html: `
      <table>
        <tr><td>der Tag</td><td>اليوم</td></tr>
        <tr><td>der Sonntag</td><td>الأحد</td></tr>
        <tr><td>der Montag</td><td>الاثنين</td></tr>
        <tr><td>der Dienstag</td><td>الثلاثاء</td></tr>
        <tr><td>der Mittwoch</td><td>الأربعاء</td></tr>
        <tr><td>der Donnerstag</td><td>الخميس</td></tr>
        <tr><td>der Freitag</td><td>الجمعة</td></tr>
        <tr><td>der Samstag</td><td>السبت</td></tr>
      </table>
      <div class="grammar-tip">💡 <strong>Ich komme am Freitag</strong> — آتي يوم الجمعة. (حرف الجر am + اليوم)</div>
    `
  },

  /* ========== 12. Die Monate ========== */
  {
    id: "g12",
    icon: "🗓️",
    category: "life",
    title: "Die Monate",
    titleAr: "الشهور",
    level: "A1",
    html: `
      <table>
        <tr><td>Der Januar</td><td>يناير</td></tr>
        <tr><td>Der Februar</td><td>فبراير</td></tr>
        <tr><td>Der März</td><td>مارس</td></tr>
        <tr><td>Der April</td><td>ابريل</td></tr>
        <tr><td>Der Mai</td><td>مايو</td></tr>
        <tr><td>Der Juni</td><td>يونية</td></tr>
        <tr><td>Der Juli</td><td>يوليو</td></tr>
        <tr><td>Der August</td><td>اغسطس</td></tr>
        <tr><td>Der September</td><td>سبتمبر</td></tr>
        <tr><td>Der Oktober</td><td>اكتوبر</td></tr>
        <tr><td>Der November</td><td>نوفمبر</td></tr>
        <tr><td>Der Dezember</td><td>ديسمبر</td></tr>
      </table>
      <div class="grammar-tip">💡 <strong>Ich komme im Januar</strong> — آتي في يناير. (حرف الجر im + الشهر)</div>
    `
  },

  /* ========== 13. Die Tageszeiten ========== */
  {
    id: "g13",
    icon: "🌅",
    category: "life",
    title: "Die Tageszeiten",
    titleAr: "أوقات اليوم",
    level: "A1",
    html: `
      <table>
        <tr><td>Der Morgen</td><td>الصباح</td></tr>
        <tr><td>Der Vormittag</td><td>قبل الظهر</td></tr>
        <tr><td>Der Mittag</td><td>الظهر</td></tr>
        <tr><td>Der Nachmittag</td><td>بعد الظهر</td></tr>
        <tr><td>Der Abend</td><td>المساء</td></tr>
        <tr><td>Die Nacht</td><td>الليل</td></tr>
      </table>
      <ul>
        <li><strong>Ich komme am Abend</strong> — آتي في المساء.</li>
        <li><strong>Ich komme in der Nacht</strong> — آتي في الليل.</li>
      </ul>
      <div class="grammar-tip">💡 <strong>am</strong> مع Abend/Morgen/Vormittag/Mittag/Nachmittag — و<strong>in der</strong> مع Nacht.</div>
    `
  },

  /* ========== 14. Der Akkusativ ========== */
  {
    id: "g14",
    icon: "🎯",
    category: "grammar",
    title: "Der Akkusativ",
    titleAr: "حالة المفعول به",
    level: "A1",
    html: `
      <p>الأكوزاتيف يُستخدم عندما يكون الفعل متعدياً (يحتاج مفعولاً به).</p>

      <h4>1) أدوات التعريف</h4>
      <table>
        <tr><th>Nominativ</th><th>Akkusativ</th></tr>
        <tr><td>der</td><td>den</td></tr>
        <tr><td>das</td><td>das</td></tr>
        <tr><td>die</td><td>die</td></tr>
        <tr><td>die (جمع)</td><td>die</td></tr>
      </table>
      <ul>
        <li><strong>Nom.:</strong> Der Mann kommt heute. — الرجل يأتي اليوم.</li>
        <li><strong>Akk.:</strong> Ich sehe <strong>den</strong> Mann. — أنا أرى الرجل.</li>
        <li><strong>Nom.:</strong> Das Buch ist interessant. — الكتاب مسلي.</li>
        <li><strong>Akk.:</strong> Ich kaufe <strong>das</strong> Buch. — أنا أشتري الكتاب.</li>
        <li><strong>Nom.:</strong> Die Frau ist schön. — السيدة جميلة.</li>
        <li><strong>Akk.:</strong> Ich sehe <strong>die</strong> Frau. — أنا أرى المرأة.</li>
        <li><strong>Nom.:</strong> Die Kinder spielen draußen. — الأطفال يلعبون بالخارج.</li>
        <li><strong>Akk.:</strong> Ich liebe <strong>die</strong> Kinder. — أنا أحب الأطفال.</li>
      </ul>

      <h4>2) أدوات التنكير</h4>
      <table>
        <tr><th>Nominativ</th><th>Akkusativ</th></tr>
        <tr><td>ein</td><td>einen</td></tr>
        <tr><td>ein</td><td>ein</td></tr>
        <tr><td>eine</td><td>eine</td></tr>
      </table>
      <ul>
        <li>Ein Stuhl ist teuer. — كرسي غالي.</li>
        <li>Ich kaufe <strong>einen</strong> Stuhl. — أنا أشتري كرسي.</li>
        <li>Ein Mädchen steht dort. — هناك فتاة تقف هناك.</li>
        <li>Ich liebe <strong>ein</strong> Mädchen. — أنا أحب فتاة.</li>
        <li>Eine Tasche ist braun. — حقيبة لونها بني.</li>
        <li>Ich nehme <strong>eine</strong> Tasche. — أنا آخذ حقيبة.</li>
      </ul>

      <h4>3) النفي</h4>
      <table>
        <tr><th>Nominativ</th><th>Akkusativ</th></tr>
        <tr><td>kein</td><td>keinen</td></tr>
        <tr><td>kein</td><td>kein</td></tr>
        <tr><td>keine</td><td>keine</td></tr>
      </table>

      <h4>4) ضمائر الملكية</h4>
      <table>
        <tr><th>Nominativ</th><th>Akkusativ</th></tr>
        <tr><td>mein</td><td>meinen</td></tr>
        <tr><td>mein</td><td>mein</td></tr>
        <tr><td>meine</td><td>meine</td></tr>
      </table>
      <ul>
        <li>Mein Vater heißt Mohamed. → Ich liebe <strong>meinen</strong> Vater.</li>
        <li>Mein Buch ist interessant. → Er nimmt <strong>mein</strong> Buch.</li>
        <li>Meine Schwester ist Ärztin. → Ich liebe <strong>meine</strong> Schwester.</li>
        <li>Unsere Freunde kommen heute. → Wir lieben <strong>unsere</strong> Freunde.</li>
        <li>Euer Bruder heißt Ahmed. → Ich liebe <strong>euren</strong> Bruder.</li>
      </ul>
    `
  },

  /* ========== 15. Präpositionen mit Akkusativ ========== */
  {
    id: "g15",
    icon: "➡️",
    category: "grammar",
    title: "Präpositionen mit Akkusativ",
    titleAr: "حروف الجر مع Akkusativ",
    level: "A1",
    html: `
      <p><strong>bis – durch – für – gegen – ohne – um – entlang</strong></p>

      <h4>bis (حتى)</h4>
      <ul>
        <li>Er bleibt in Kairo <strong>bis nächsten Montag</strong>. — سيظل في القاهرة حتى يوم الاثنين.</li>
        <li>bis <strong>nächste Woche</strong> — حتى الأسبوع القادم.</li>
      </ul>

      <h4>durch (خلال / بواسطة)</h4>
      <ul>
        <li>Er geht <strong>durch den</strong> Garten. — عبر من خلال الحديقة.</li>
        <li>Ich bekomme meine Arbeit <strong>durch die</strong> Hilfe von meinem Vater. — حصلت على عمل من خلال والدي.</li>
      </ul>

      <h4>für (من أجل)</h4>
      <ul>
        <li>Der Vater bemüht sich <strong>für seinen</strong> Sohn. — الأب يتعب نفسه من أجل ابنه.</li>
      </ul>

      <h4>gegen (ضد / عكس)</h4>
      <ul>
        <li>Ich bin <strong>gegen meinen</strong> Bruder. — أنا عكس/ضد أخي.</li>
        <li>Das Auto fährt <strong>gegen den</strong> Baum. — السيارة اصطدمت بالشجرة.</li>
      </ul>

      <h4>ohne (بدون)</h4>
      <ul>
        <li>Niemand lebt <strong>ohne seinen</strong> Lohn. — لا أحد يعيش بدون راتب.</li>
        <li>Sie kann <strong>ohne ihren</strong> Mann nicht leben. — هي لا تستطيع العيش بدون زوجها.</li>
      </ul>

      <h4>um (حول)</h4>
      <ul>
        <li>Wir fahren <strong>um die</strong> Stadt. — نحن نلف حول البلد.</li>
      </ul>

      <h4>entlang (على طول / للنهاية)</h4>
      <ul>
        <li>Sie gehen den Weg <strong>entlang</strong>. — ستمشير في الشارع حتى النهاية.</li>
      </ul>
    `
  },

  /* ========== 16. Personalpronomen mit Akkusativ ========== */
  {
    id: "g16",
    icon: "🙋",
    category: "grammar",
    title: "Personalpronomen mit Akkusativ",
    titleAr: "الضمائر الشخصية مع Akkusativ",
    level: "A1",
    html: `
      <table>
        <tr><th>Pronomen</th><th>Akkusativ</th><th>Beispiel</th></tr>
        <tr><td>ich</td><td>mich</td><td>Ich arbeite zu Hause. Du brauchst <strong>mich</strong> bei der Arbeit. — أنت تحتاجني في العمل.</td></tr>
        <tr><td>du</td><td>dich</td><td>Du fährst morgen nach Deutschland. Ich liebe <strong>dich</strong>. — أنا أحبك.</td></tr>
        <tr><td>er</td><td>ihn</td><td>Er ist fleißig. Ich liebe <strong>ihn</strong>. — أنا أحبه.</td></tr>
        <tr><td>es</td><td>es</td><td>Es ist sehr alt. Ich kaufe <strong>es</strong> morgen. — سأشتريه غداً.</td></tr>
        <tr><td>sie</td><td>sie</td><td>Sie ist sehr hübsch. Er liebt <strong>sie</strong>. — هو يحبها.</td></tr>
        <tr><td>wir</td><td>uns</td><td>Wir gehen in die Schule am Morgen. Unser Vater arbeitet für <strong>uns</strong>. — أبونا يعمل من أجلنا.</td></tr>
        <tr><td>ihr</td><td>euch</td><td>Ihr lernt Deutsch. Ich lehre <strong>euch</strong> Deutsch. — أنا أعلمكم الألمانية.</td></tr>
        <tr><td>Sie</td><td>Sie</td><td>Sie sitzen hier, bitte. Ich brauche <strong>Sie</strong> bei der Arbeit. — أنا محتاج حضرتك في العمل.</td></tr>
        <tr><td>sie</td><td>sie</td><td>Sie wohnen in Kairo. Ich sehe <strong>sie</strong> heute in der Schule. — أنا أراهم اليوم في المدرسة.</td></tr>
      </table>
    `
  },

  /* ========== 17. Die Modalverben ========== */
  {
    id: "g17",
    icon: "🔧",
    category: "grammar",
    title: "Die Modalverben",
    titleAr: "الأفعال المساعدة",
    level: "A1",
    html: `
      <p><strong>können</strong> يستطيع – <strong>müssen</strong> يلزم – <strong>sollen</strong> يجب – <strong>dürfen</strong> يُسمح – <strong>wollen</strong> يريد – <strong>mögen/möchten</strong> يحب/يريد</p>

      <table>
        <tr><th></th><th>dürfen</th><th>können</th><th>mögen</th><th>müssen</th><th>sollen</th><th>wollen</th><th>möchten</th></tr>
        <tr><td>ich</td><td>darf</td><td>kann</td><td>mag</td><td>muss</td><td>soll</td><td>will</td><td>möchte</td></tr>
        <tr><td>du</td><td>darfst</td><td>kannst</td><td>magst</td><td>musst</td><td>sollst</td><td>willst</td><td>möchtest</td></tr>
        <tr><td>er/sie/es</td><td>darf</td><td>kann</td><td>mag</td><td>muss</td><td>soll</td><td>will</td><td>möchte</td></tr>
        <tr><td>wir</td><td>dürfen</td><td>können</td><td>mögen</td><td>müssen</td><td>sollen</td><td>wollen</td><td>möchten</td></tr>
        <tr><td>ihr</td><td>dürft</td><td>könnt</td><td>mögt</td><td>müsst</td><td>sollt</td><td>wollt</td><td>möchtet</td></tr>
        <tr><td>Sie/sie</td><td>dürfen</td><td>können</td><td>mögen</td><td>müssen</td><td>sollen</td><td>wollen</td><td>möchten</td></tr>
      </table>

      <h4>قاعدة الاستخدام</h4>
      <p>تحتوي الجملة على فعل مصدر أساسي + فعل مساعد. عند إدخال أحد الأفعال المساعدة يتم تصريفها بدلاً من الفعل الأساسي، والفعل الأساسي يوضع في نهاية الجملة في المصدر.</p>

      <h4>أمثلة</h4>
      <ul>
        <li>Ich trinke Kaffee. + möchten → <strong>Ich möchte Kaffee trinken.</strong></li>
        <li>Sie möchten Kaffee trinken.</li>
        <li>Ihr möchtet Kaffee trinken.</li>
        <li>Er spielt Fußball draußen. + können → <strong>Er kann Fußball draußen spielen.</strong></li>
        <li>Ich habe eine Puppe. + wollen → <strong>Ich will eine Puppe haben.</strong></li>
        <li>Er raucht Zigarette innerhalb der Firma. + dürfen → <strong>Er darf Zigarette innerhalb der Firma rauchen.</strong></li>
        <li>In Kairo <strong>müssen</strong> die Kinder unter 10 nicht <strong>arbeiten</strong>.</li>
        <li>Du <strong>sollst</strong> deine Kinder in der Nacht allein auf der Straße nicht <strong>verlassen</strong>.</li>
      </ul>
    `
  },

  /* ========== 18. Negation mit nicht/kein ========== */
  {
    id: "g18",
    icon: "🚫",
    category: "grammar",
    title: "Negation mit nicht/kein",
    titleAr: "النفي بـ nicht / kein",
    level: "A1",
    html: `
      <h4>1) kein + Nomen (نفي الاسم)</h4>
      <ul>
        <li>Ich habe eine Schwester. → Hast du eine Schwester? → Nein, ich habe <strong>keine</strong> Schwester.</li>
        <li>Er hat ein Buch. → Hat er ein Buch? → Nein, er hat <strong>kein</strong> Buch.</li>
        <li>Er hat einen Bruder. → Hat er einen Bruder? → Nein, er hat <strong>keinen</strong> Bruder.</li>
        <li>Du hast vier Kinder. → Hast du vier Kinder? → Nein, ich habe <strong>keine</strong> Kinder.</li>
      </ul>

      <h4>2) nicht (نفي الفعل / الصفة / الحال)</h4>
      <ul>
        <li>Ich gehe heute Nachmittag zum Arzt. → Ich gehe heute Nachmittag zum Arzt <strong>nicht</strong>.</li>
        <li>Ich gehe <strong>nicht</strong> heute Nachmittag zum Arzt, ich gehe nächsten Montag.</li>
        <li>Mein Lehrer ist gut. → Mein Lehrer ist <strong>nicht</strong> gut.</li>
        <li>Der Weg nach Sohag ist sehr lang. → Der Weg nach Sohag ist <strong>nicht</strong> sehr lang.</li>
        <li>Er sagt immer die Wahrheit. → Er sagt <strong>nicht</strong> immer die Wahrheit.</li>
        <li>Ich gehe heute ins Kino mit Sara. → Ich gehe heute ins Kino <strong>nicht</strong> mit Sara, ich gehe mit Noha.</li>
      </ul>
      <div class="grammar-tip">💡 <strong>kein</strong> يُنفّي الاسم (Nomen)، و<strong>nicht</strong> يُنفّي الفعل أو الصفة أو الحال.</div>
    `
  },

  /* ========== 19. Die Uhrzeiten ========== */
  {
    id: "g19",
    icon: "🕐",
    category: "time",
    title: "Die Uhrzeiten",
    titleAr: "كيفية قراءة الساعة",
    level: "A1",
    html: `
      <h4>Inoffiziell (غير رسمية)</h4>
      <p>أولاً عندما يكون عقرب الدقائق على 12:</p>
      <ul>
        <li>الساعة 1 → Es ist 1 Uhr</li>
        <li>الساعة 2 → Es ist 2 Uhr</li>
        <li>الساعة 3 → Es ist 3 Uhr</li>
        <li>... وهكذا</li>
      </ul>

      <h4>بعد تحرك عقرب الدقائق</h4>
      <ul>
        <li>1) fünf nach (Uhr)</li>
        <li>2) zehn nach (Uhr)</li>
        <li>3) Viertel nach (Uhr)</li>
        <li>4) zwanzig nach (Uhr)</li>
        <li>5) fünfundzwanzig nach (Uhr) / fünf vor halb (die nächste Uhr)</li>
        <li>6) halb (die nächste Uhr) = 3:30 = halb vier / 4:30 = halb fünf</li>
        <li>7) fünfundzwanzig vor (Uhr) / fünf nach halb (die nächste Uhr)</li>
        <li>8) zwanzig vor (Uhr)</li>
        <li>9) Viertel vor (Uhr)</li>
        <li>10) zehn vor (Uhr)</li>
        <li>11) fünf vor (Uhr)</li>
      </ul>

      <h4>Offiziell (رسمية)</h4>
      <ul>
        <li>3:30 = <strong>drei Uhr dreißig</strong></li>
        <li>4:45 = <strong>vier Uhr fünfundvierzig</strong></li>
        <li>6:20 = <strong>sechs Uhr zwanzig</strong></li>
      </ul>
      <div class="grammar-tip">💡 <strong>Wie spät ist es?</strong> = كم الساعة؟</div>
    `
  },

  /* ========== 20. Komposita + Trennbare Verben ========== */
  {
    id: "g20",
    icon: "🔗",
    category: "grammar",
    title: "Komposita + Trennbare Verben",
    titleAr: "الكلمات المركبة + الأفعال المنفصلة",
    level: "A1",
    html: `
      <h4>1) Komposita (الكلمات المركبة)</h4>
      <ul>
        <li>Die Suppe + die Tomaten = <strong>die Tomatensuppe</strong></li>
        <li>Der Schinken + das Brot = <strong>das Schinkenbrot</strong></li>
        <li>Die Schokolade + der Kuchen = <strong>der Schokoladenkuchen</strong></li>
        <li>Der Käse + das Brötchen = <strong>das Käsebrötchen</strong></li>
      </ul>

      <h4>2) Trennbare Verben (الأفعال المنفصلة)</h4>
      <p>هي مجموعة من الأفعال تتكون من جزئين: مقطع أمامي ومقطع خلفي. يتم تصريف المقطع الخلفي ويوضع في مكانه في الجملة (رقم 2)، والمقطع الأمامي يتم وضعه في نهاية الجملة.</p>
      <p><strong>أمثلة:</strong> aufstehen – losgehen – abfahren – ankommen – aussteigen – ansehen – fernsehen – einkaufen – spazierengehen</p>
      <ul>
        <li>Ich <strong>stehe</strong> am Morgen um 7 Uhr <strong>auf</strong>.</li>
        <li>Sara <strong>geht</strong> jeden Morgen um 8 Uhr <strong>los</strong>.</li>
        <li>Der Zug <strong>fährt</strong> am Montag am Morgen um 9 Uhr <strong>ab</strong>.</li>
        <li>Der Bus <strong>kommt</strong> heute am Abend <strong>an</strong>.</li>
        <li>Sara <strong>steigt</strong> in Ghamra <strong>aus</strong>.</li>
      </ul>

      <h4>3) mit Modalverben (مع الأفعال المساعدة)</h4>
      <p>عند استخدام فعل مساعد، يبقى الفعل المنفصل كما هو في نهاية الجملة (لا ينفصل):</p>
      <ul>
        <li>Ich möchte am Morgen um 7 Uhr <strong>aufstehen</strong>.</li>
        <li>Er will in München <strong>aussteigen</strong>.</li>
        <li>Der Zug soll um 5 Uhr <strong>abfahren</strong>.</li>
        <li>Ich möchte gern heute <strong>einkaufen</strong>.</li>
      </ul>
    `
  /* ============================================================
   دوال العرض والتهيئة
   ============================================================ */
];
function initGrammarA1Tab() {
  renderGrammarA1();
}

function renderGrammarA1() {
  const container = document.getElementById('grammarA1Content');
  if (!container) return;

  const lang = (typeof contentLanguage !== 'undefined') ? contentLanguage : 'de';
  if (lang !== 'de') {
    container.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">📖 قواعد A1 متاحة حالياً للألمانية فقط. بدّل لغة المحتوى إلى Deutsch.</p>';
    return;
  }

  const cards = GRAMMAR_A1.map((g, i) => `
    <div class="grammar-card cat-${g.category}" data-id="${g.id}">
      <div class="grammar-card-header" onclick="toggleGrammarCard('${g.id}')">
        <span class="grammar-num">${i + 1}</span>
        <span class="grammar-icon">${g.icon}</span>
        <div class="grammar-titles">
          <div class="grammar-title-de">${g.title}</div>
          <div class="grammar-title-ar">${g.titleAr}</div>
        </div>
        <span class="grammar-level">${g.level}</span>
        <span class="grammar-arrow">▼</span>
      </div>
      <div class="grammar-content" id="content-${g.id}">
        ${g.html}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div style="text-align:center;margin-bottom:25px;">
      <h2 style="color:var(--primary-dark);font-size:24px;margin-bottom:8px;">📖 قواعد A1 الشاملة</h2>
      <p style="color:var(--text-muted);font-size:15px;">30 موضوعاً — من الحروف إلى Konjunktiv II</p>
    </div>
    <div class="grammar-a1-grid">${cards}</div>
  `;
  applyTranslationVisibility();
}

function toggleGrammarCard(id) {
  const card = document.querySelector(`.grammar-card[data-id="${id}"]`);
  if (!card) return;
  card.classList.toggle('open');
}
];
