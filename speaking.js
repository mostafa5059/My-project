const SHADOWING_DATA = [
  // التحيات والتعريف (1-8)
  { de: "Guten Morgen! Wie geht es dir?", ar: "صباح الخير! كيف حالك؟" },
  { de: "Guten Tag! Freut mich, Sie kennenzulernen.", ar: "نهارك سعيد! سعيد بمعرفتك." },
  { de: "Ich heiße Ahmed und ich komme aus Ägypten.", ar: "اسمي أحمد وأنا من مصر." },
  { de: "Ich wohne seit zwei Jahren in Berlin.", ar: "أسكن في برلين منذ عامين." },
  { de: "Ich bin 25 Jahre alt und Student.", ar: "عمري 25 سنة وأنا طالب." },
  { de: "Meine Muttersprache ist Arabisch.", ar: "لغتي الأم هي العربية." },
  { de: "Ich lerne Deutsch, weil ich in Deutschland studieren möchte.", ar: "أتعلم الألمانية لأنني أريد الدراسة في ألمانيا." },
  { de: "Wie bitte? Können Sie das wiederholen?", ar: "عذراً؟ هل يمكنك تكرار ذلك؟" },

  // المطار والسفر (9-16)
  { de: "Entschuldigung, wo ist der Bahnhof?", ar: "عذراً، أين محطة القطار؟" },
  { de: "Wann fährt der nächste Zug nach München?", ar: "متى يغادر القطار القادم إلى ميونخ؟" },
  { de: "Ich möchte eine Fahrkarte nach Frankfurt kaufen.", ar: "أريد شراء تذكرة إلى فرانكفورت." },
  { de: "Können Sie mir bitte helfen?", ar: "هل يمكنك مساعدتي من فضلك؟" },
  { de: "Ich habe meinen Koffer verloren.", ar: "لقد فقدت حقيبتي." },
  { de: "Wo ist der Check-in-Schalter?", ar: "أين مكتب تسجيل الوصول؟" },
  { de: "Wie lange dauert der Flug?", ar: "كم تستغرق الرحلة الجوية؟" },
  { de: "Ich muss umsteigen. Wo ist das Gate?", ar: "يجب أن أغير الطائرة. أين البوابة؟" },

  // المطعم والطعام (17-24)
  { de: "Ich hätte gerne einen Kaffee, bitte.", ar: "أريد قهوة، من فضلك." },
  { de: "Was empfehlen Sie mir?", ar: "بماذا تنصحني؟" },
  { de: "Die Rechnung, bitte!", ar: "الفاتورة، من فضلك!" },
  { de: "Das Essen schmeckt sehr lecker.", ar: "الطعام لذيذ جداً." },
  { de: "Ich bin vegetarisch, ich esse kein Fleisch.", ar: "أنا نباتي، لا آكل اللحوم." },
  { de: "Können wir einen Tisch für zwei Personen haben?", ar: "هل يمكننا الحصول على طاولة لشخصين؟" },
  { de: "Ich möchte bestellen, bitte.", ar: "أريد أن أطلب، من فضلك." },
  { de: "Zahlen bitte, mit Karte.", ar: "الحساب من فضلك، بالبطاقة." },

  // التسوق (25-32)
  { de: "Wie viel kostet das?", ar: "كم يكلف هذا؟" },
  { de: "Das ist zu teuer. Haben Sie etwas Billigeres?", ar: "هذا غالٍ جداً. هل لديك شيء أرخص؟" },
  { de: "Ich nehme das. Wo kann ich bezahlen?", ar: "سآخذ هذا. أين يمكنني الدفع؟" },
  { de: "Kann ich mit Karte bezahlen?", ar: "هل يمكنني الدفع بالبطاقة؟" },
  { de: "Haben Sie das in meiner Größe?", ar: "هل لديك هذا بمقاسي؟" },
  { de: "Ich suche ein Geschenk für meine Mutter.", ar: "أبحث عن هدية لأمي." },
  { de: "Gibt es hier einen Supermarkt in der Nähe?", ar: "هل يوجد سوبر ماركت قريب هنا؟" },
  { de: "Wo finde ich die Milchprodukte?", ar: "أين أجد منتجات الألبان؟" },

  // العمل والدراسة (33-40)
  { de: "Ich habe morgen einen wichtigen Termin.", ar: "لدي موعد مهم غداً." },
  { de: "Ich verstehe das nicht. Können Sie das wiederholen?", ar: "أنا لا أفهم ذلك. هل يمكنك تكراره؟" },
  { de: "Können Sie bitte langsamer sprechen?", ar: "هل يمكنك التحدث بشكل أبطأ من فضلك؟" },
  { de: "Ich muss meine Deutschprüfung bestehen.", ar: "يجب أن أنجح في امتحان اللغة الألمانية." },
  { de: "Ich arbeite als Ingenieur in einer Firma.", ar: "أعمل مهندساً في شركة." },
  { de: "Kannst du mir bei den Hausaufgaben helfen?", ar: "هل يمكنك مساعدتي في الواجبات المنزلية؟" },
  { de: "Wann beginnt der Deutschkurs?", ar: "متى تبدأ دورة اللغة الألمانية؟" },
  { de: "Ich möchte mich für den Kurs anmelden.", ar: "أريد التسجيل في الدورة." },

  // الصحة (41-48)
  { de: "Ich fühle mich heute nicht so gut.", ar: "لا أشعر أنني بحالة جيدة اليوم." },
  { de: "Ich habe Kopfschmerzen und Fieber.", ar: "لدي صداع وحمى." },
  { de: "Ich brauche einen Termin beim Arzt.", ar: "أحتاج موعداً عند الطبيب." },
  { de: "Wo ist die nächste Apotheke?", ar: "أين أقرب صيدلية؟" },
  { de: "Ich möchte dieses Medikament kaufen.", ar: "أريد شراء هذا الدواء." },
  { de: "Es tut hier weh.", ar: "يؤلمني هنا." },
  { de: "Rufen Sie bitte einen Krankenwagen!", ar: "اتصل بالإسعاف من فضلك!" },
  { de: "Ich bin allergisch gegen Penicillin.", ar: "لدي حساسية من البنسلين." },

  // الحياة اليومية (49-56)
  { de: "Am Wochenende gehe ich oft mit Freunden ins Kino.", ar: "في عطلة نهاية الأسبوع أذهب غالباً مع الأصدقاء إلى السينما." },
  { de: "Ich habe heute viel zu tun.", ar: "لدي الكثير لأفعله اليوم." },
  { de: "Das Wetter ist heute sehr schön.", ar: "الطقس جميل جداً اليوم." },
  { de: "Ich freue mich auf den Urlaub.", ar: "أنا متحمس للإجازة." },
  { de: "Ich möchte mein Deutsch verbessern.", ar: "أريد تحسين لغتي الألمانية." },
  { de: "Wie ist das Wetter morgen?", ar: "كيف حال الطقس غداً؟" },
  { de: "Ich gehe jeden Tag eine Stunde spazieren.", ar: "أذهب للتنزه ساعة كل يوم." },
  { de: "Kannst du mir bitte die Tür öffnen?", ar: "هل يمكنك فتح الباب من فضلك؟" },

  // المشاعر والآراء (57-60)
  { de: "Ich bin sehr glücklich über diese Nachricht.", ar: "أنا سعيد جداً بهذا الخبر." },
  { de: "Das finde ich sehr interessant.", ar: "أجد هذا مثيراً للاهتمام جداً." },
  { de: "Entschuldigung, ich habe dich nicht verstanden.", ar: "عذراً، لم أفهمك." },
  { de: "Ich bin einverstanden. Das ist eine gute Idee.", ar: "أنا موافق. هذه فكرة جيدة." },

  // الأسرة والأصدقاء (61-68)
  { de: "Meine Familie besteht aus vier Personen.", ar: "عائلتي تتكون من أربعة أفراد." },
  { de: "Ich habe einen älteren Bruder und eine jüngere Schwester.", ar: "لدي أخ أكبر وأخت أصغر." },
  { de: "Meine Eltern wohnen in Kairo.", ar: "والداي يسكنان في القاهرة." },
  { de: "Ich habe viele Freunde in Deutschland.", ar: "لدي أصدقاء كثيرون في ألمانيا." },
  { de: "Mein bester Freund heißt Ali.", ar: "أفضل صديق لي اسمه علي." },
  { de: "Wir treffen uns oft am Wochenende.", ar: "نتقابل غالباً في عطلة نهاية الأسبوع." },
  { de: "Ich verstehe mich gut mit meiner Familie.", ar: "أتفاهم جيداً مع عائلتي." },
  { de: "Hast du Kinder? — Nein, ich habe keine Kinder.", ar: "هل لديك أطفال؟ — لا، ليس لدي أطفال." },

  // السكن والإيجار (69-76)
  { de: "Ich suche eine Wohnung in der Stadtmitte.", ar: "أبحث عن شقة في وسط المدينة." },
  { de: "Wie hoch ist die Miete pro Monat?", ar: "كم الإيجار شهرياً؟" },
  { de: "Die Wohnung hat zwei Zimmer und eine Küche.", ar: "الشقة بها غرفتان ومطبخ." },
  { de: "Ist die Nebenkosten in der Miete enthalten?", ar: "هل التكاليف الإضافية مشمولة في الإيجار؟" },
  { de: "Ich möchte einen Mietvertrag unterschreiben.", ar: "أريد توقيع عقد إيجار." },
  { de: "Die Wohnung ist möbliert und sehr hell.", ar: "الشقة مفروشة ومشرقة جداً." },
  { de: "Gibt es einen Aufzug im Gebäude?", ar: "هل يوجد مصعد في المبنى؟" },
  { de: "Ich wohne im dritten Stock.", ar: "أسكن في الطابق الثالث." },

  // المواصلات (77-84)
  { de: "Ich fahre mit der U-Bahn zur Arbeit.", ar: "أذهب إلى العمل بالمترو." },
  { de: "Der Bus kommt in fünf Minuten.", ar: "الحافلة تأتي بعد خمس دقائق." },
  { de: "Wo muss ich umsteigen?", ar: "أين يجب أن أغير الوسيلة؟" },
  { de: "Ich habe meinen Zug verpasst.", ar: "لقد فاتني القطار." },
  { de: "Wie komme ich am besten zum Flughafen?", ar: "كيف أصل إلى المطار بأفضل طريقة؟" },
  { de: "Das Taxi ist zu teuer. Ich nehme lieber den Bus.", ar: "التاكسي غالٍ جداً. أفضل أخذ الحافلة." },
  { de: "Ich kaufe ein Monatsticket für den öffentlichen Verkehr.", ar: "أشتري تذكرة شهرية للمواصلات العامة." },
  { de: "Der Zug hat 20 Minuten Verspätung.", ar: "القطار متأخر 20 دقيقة." },

  // الطقس والفصول (85-92)
  { de: "Im Winter schneit es oft in Deutschland.", ar: "في الشتاء تثلج غالباً في ألمانيا." },
  { de: "Im Sommer ist es sehr heiß in Ägypten.", ar: "في الصيف الجو حار جداً في مصر." },
  { de: "Heute ist es bewölkt und windig.", ar: "اليوم الجو غائم وعاصف." },
  { de: "Es regnet stark. Nimm einen Regenschirm mit!", ar: "تمطر بغزارة. خذ مظلة معك!" },
  { de: "Der Frühling ist meine Lieblingsjahreszeit.", ar: "الربيع هو فصلي المفضل." },
  { de: "Im Herbst fallen die Blätter von den Bäumen.", ar: "في الخريف تتساقط الأوراق من الأشجار." },
  { de: "Die Temperatur liegt bei 25 Grad.", ar: "درجة الحرارة 25 درجة." },
  { de: "Morgen wird es sonnig und warm.", ar: "غداً سيكون الجو مشمساً ودافئاً." },

  // الهوايات والرياضة (93-100)
  { de: "In meiner Freizeit spiele ich Fußball.", ar: "في وقت فراغي ألعب كرة القدم." },
  { de: "Ich gehe dreimal pro Woche ins Fitnessstudio.", ar: "أذهب إلى صالة الألعاب الرياضية ثلاث مرات أسبوعياً." },
  { de: "Ich lese gerne Romane und Krimis.", ar: "أحب قراءة الروايات والقصص البوليسية." },
  { de: "Meine Hobbys sind Musik hören und Reisen.", ar: "هواياتي هي الاستماع للموسيقى والسفر." },
  { de: "Ich spiele seit zehn Jahren Gitarre.", ar: "أعزف على الجيتار منذ عشر سنوات." },
  { de: "Am Sonntag gehe ich oft schwimmen.", ar: "يوم الأحد أذهب غالباً للسباحة." },
  { de: "Ich interessiere mich für Fotografie.", ar: "أهتم بالتصوير الفوتوغرافي." },
  { de: "Wir machen oft Ausflüge in die Berge.", ar: "نقوم غالباً برحلات إلى الجبال." }
];

const SPEAKING_CHALLENGES = [
  { q: "Wie heißt du?", qAr: "ما اسمك؟", a: "Ich heiße Ahmed.", aAr: "اسمي أحمد." },
  { q: "Woher kommst du?", qAr: "من أين أنت؟", a: "Ich komme aus Ägypten.", aAr: "أنا من مصر." },
  { q: "Wo wohnst du?", qAr: "أين تسكن؟", a: "Ich wohne in Kairo.", aAr: "أسكن في القاهرة." },
  { q: "Wie alt bist du?", qAr: "كم عمرك؟", a: "Ich bin 25 Jahre alt.", aAr: "عمري 25 سنة." },
  { q: "Was machst du beruflich?", qAr: "ما هي مهنتك؟", a: "Ich bin Student/Ingenieur.", aAr: "أنا طالب/مهندس." },
  { q: "Welche Sprachen sprichst du?", qAr: "ما اللغات التي تتحدثها؟", a: "Ich spreche Arabisch und ein bisschen Deutsch.", aAr: "أتحدث العربية وقليلاً من الألمانية." },
  { q: "Was machst du in deiner Freizeit?", qAr: "ماذا تفعل في وقت فراغك؟", a: "In meiner Freizeit lese ich Bücher und treibe Sport.", aAr: "في وقت فراغي أقرأ الكتب وأمارس الرياضة." },
  { q: "Warum lernst du Deutsch?", qAr: "لماذا تتعلم الألمانية؟", a: "Ich lerne Deutsch für meine Arbeit.", aAr: "أتعلم الألمانية من أجل عملي." },
  { q: "Hast du Geschwister?", qAr: "هل لديك أشقاء؟", a: "Ja, ich habe einen Bruder und eine Schwester.", aAr: "نعم، لدي أخ وأخت." },
  { q: "Was hast du gestern gemacht?", qAr: "ماذا فعلت أمس؟", a: "Ich habe gearbeitet und dann ferngesehen.", aAr: "عملت ثم شاهدت التلفاز." },
  { q: "Was ist dein Lieblingsessen?", qAr: "ما هو طعامك المفضل؟", a: "Mein Lieblingsessen ist Pizza.", aAr: "طعامي المفضل هو البيتزا." },
  { q: "Wann stehst du normalerweise auf?", qAr: "متى تستيقظ عادة؟", a: "Ich stehe um 7 Uhr auf.", aAr: "أستيقظ الساعة 7." },
  { q: "Was machst du am Wochenende?", qAr: "ماذا تفعل في عطلة نهاية الأسبوع؟", a: "Ich treffe Freunde oder gehe spazieren.", aAr: "أقابل الأصدقاء أو أتنزه." },
  { q: "Hast du ein Haustier?", qAr: "هل لديك حيوان أليف؟", a: "Ja, ich habe eine Katze.", aAr: "نعم، لدي قطة." },
  { q: "Wie kommst du zur Arbeit?", qAr: "كيف تذهب إلى العمل؟", a: "Ich fahre mit dem Bus.", aAr: "أذهب بالحافلة." },
  { q: "Was ist dein Lieblingsfach in der Schule?", qAr: "ما هو مادتك المفضلة في المدرسة؟", a: "Mein Lieblingsfach ist Mathematik.", aAr: "مادتي المفضلة هي الرياضيات." },
  { q: "Wo warst du im letzten Urlaub?", qAr: "أين كنت في الإجازة الماضية؟", a: "Ich war in Italien.", aAr: "كنت في إيطاليا." },
  { q: "Was möchtest du in der Zukunft machen?", qAr: "ماذا تريد أن تفعل في المستقبل؟", a: "Ich möchte Arzt werden.", aAr: "أريد أن أصبح طبيباً." },
  { q: "Kannst du gut kochen?", qAr: "هل تجيد الطبخ؟", a: "Ja, ich koche ziemlich gut.", aAr: "نعم، أطبخ بشكل جيد." },
  { q: "Was ist dein Lieblingssport?", qAr: "ما هي رياضتك المفضلة؟", a: "Mein Lieblingssport ist Fußball.", aAr: "رياضتي المفضلة هي كرة القدم." },
  { q: "Wie ist das Wetter heute?", qAr: "كيف حال الطقس اليوم؟", a: "Es ist sonnig und warm.", aAr: "الجو مشمس ودافئ." },
  { q: "Was trinkst du morgens?", qAr: "ماذا تشرب في الصباح؟", a: "Ich trinke Kaffee.", aAr: "أشرب القهوة." },
  { q: "Hast du heute Zeit?", qAr: "هل لديك وقت اليوم؟", a: "Ja, ich habe heute Nachmittag Zeit.", aAr: "نعم، لدي وقت بعد الظهر." },
  { q: "Wie viele Sprachen sprichst du?", qAr: "كم لغة تتحدث؟", a: "Ich spreche zwei Sprachen.", aAr: "أتحدث لغتين." },
  { q: "Wo möchtest du wohnen?", qAr: "أين تريد أن تسكن؟", a: "Ich möchte in Berlin wohnen.", aAr: "أريد أن أسكن في برلين." }
];
