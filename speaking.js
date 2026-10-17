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
  { de: "Ich bin einverstanden. Das ist eine gute Idee.", ar: "أنا موافق. هذه فكرة جيدة." }
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
  { q: "Was hast du gestern gemacht?", qAr: "ماذا فعلت أمس؟", a: "Ich habe gearbeitet und dann ferngesehen.", aAr: "عملت ثم شاهدت التلفاز." }
];