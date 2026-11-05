/* The practice's own news, carried over from stomatolog.mk.

   Two groups, both newest first:

     news   — "Новости од ординацијата" on the old homepage
     press  — the PRESS pages (the English site called them "News Archive")

   Nothing here is written by us. The Macedonian is the old site's own wording,
   tidied for punctuation only. Where the practice published its own English
   text for a post, that English is theirs too; the rest of the English and all
   of the Greek is translated from the Macedonian and still wants a native read
   before the site goes public.

   Dates stay dd.mm.yyyy, the way the practice wrote them, and are strings —
   Intl has no Macedonian in Chrome, so a formatted date would silently come
   out in English. `iso` is only there to sort by.

   Images are the old site's own, from /sliki. They are small — 470px at the
   widest — so the cards show them at thumbnail size rather than stretching
   them across a column. */

window.NEWS = [

  /* ------------------------------------------------------------ the practice */

  { iso: "2024-12-31", date: "31.12.2024", group: "news",
    mk: { t: "Среќни празници!",
          b: ["Почитувани пријатели, во Новата 2025 година Ви посакуваме најубави моменти со Вашите блиски, исполнети со среќа и радости.",
              "За време на празничните денови, на 02.01.2025 и 03.01.2025 нашата ординација ќе работи во една смена од 09:00 до 17:00. Од 08.01.2025 продолжуваме со редовното работно време од 08:00 до 20:00."] },
    en: { t: "Happy holidays!",
          b: ["Dear friends, for the New Year 2025 we wish you the finest moments with the people close to you, full of happiness and joy.",
              "Over the holidays, on 02.01.2025 and 03.01.2025, the practice will work a single shift, 09:00 to 17:00. From 08.01.2025 we return to our regular hours, 08:00 to 20:00."] },
    el: { t: "Καλές γιορτές!",
          b: ["Αγαπητοί φίλοι, για το νέο έτος 2025 σας ευχόμαστε τις ομορφότερες στιγμές με τους δικούς σας ανθρώπους, γεμάτες ευτυχία και χαρά.",
              "Τις γιορτινές ημέρες, στις 02.01.2025 και 03.01.2025, το ιατρείο θα λειτουργήσει σε μία βάρδια, 09:00 έως 17:00. Από τις 08.01.2025 επιστρέφουμε στο κανονικό ωράριο, 08:00 έως 20:00."] } },

  { iso: "2021-10-11", date: "11.10.2021", group: "news",
    img: "panorama.webp", w: 370, h: 412,
    alt: { mk: "KaVo OP 3D — апаратот за дигитално панорамско снимање",
           en: "The KaVo OP 3D digital panoramic imaging unit",
           el: "Το μηχάνημα ψηφιακής πανοραμικής απεικόνισης KaVo OP 3D" },
    mk: { t: "Најново кај нас: дигитално панорамско снимање",
          b: ["Започнувајќи од 23.09.2021, во нашата ординација е ставен во употреба најсовремен нов апарат за дигитално панорамско снимање на забите, вилиците, виличните синуси и зглобови (ТМЗ).",
              "Овој апарат има програми кои одговараат за сите ситуации, како на пример панорамско снимање кај деца со користење на најниска доза и ограничено поле на снимање."] },
    en: { t: "New at the practice: digital panoramic imaging",
          b: ["From 23.09.2021 a new, state-of-the-art machine for digital panoramic imaging of the teeth, the jaws, the maxillary sinuses and the temporomandibular joints (TMJ) is in use at the practice.",
              "It has programmes for every situation — panoramic imaging in children, for example, at the lowest dose and with a limited field of view."] },
    el: { t: "Νέο στο ιατρείο: ψηφιακή πανοραμική ακτινογραφία",
          b: ["Από τις 23.09.2021 λειτουργεί στο ιατρείο μας ένα νέο, σύγχρονο μηχάνημα ψηφιακής πανοραμικής απεικόνισης των δοντιών, των γνάθων, των ιγμορείων και των κροταφογναθικών αρθρώσεων (ΚΓΔ).",
              "Διαθέτει προγράμματα για κάθε περίπτωση — για παράδειγμα πανοραμική λήψη σε παιδιά με τη χαμηλότερη δόση και περιορισμένο πεδίο λήψης."] } },

  { iso: "2021-07-11", date: "11.07.2021", group: "news",
    mk: { t: "Ново работно време",
          b: ["Почитувани пациенти, Ве известуваме дека од 12.07.2021 работното време на д-р Александар Нечаковски ќе биде секој работен ден од 10:00 до 17:00.",
              "За закажување термин, јавете се од понеделник до петок во периодот од 09:00 до 17:00 на телефон 075 306 509, напишете ни на Viber на истиот број или на електронска пошта."] },
    en: { t: "New work hours",
          b: ["Dear patients, we would like to inform you that starting from 12.07.2021, Dr. Aleksandar Nechakovski's work hours will be 10:00 to 17:00, Monday to Friday.",
              "To set up an appointment, please call us Monday to Friday between 09:00 and 17:00 on 075 306 509, or send us a Viber message on the same number or an email."] },
    el: { t: "Νέο ωράριο",
          b: ["Αγαπητοί ασθενείς, σας ενημερώνουμε ότι από τις 12.07.2021 το ωράριο του Δρ. Αλεξάνταρ Νετσακόφσκι θα είναι 10:00 έως 17:00, Δευτέρα έως Παρασκευή.",
              "Για ραντεβού, καλέστε μας Δευτέρα έως Παρασκευή από τις 09:00 έως τις 17:00 στο 075 306 509, γράψτε μας στο Viber στον ίδιο αριθμό ή με email."] } },

  { iso: "2020-05-30", date: "30.05.2020", group: "news",
    img: "top100.webp", w: 263, h: 162, full: "top100-full.webp",
    alt: { mk: "Логото на наградата TOP-100 Achievements",
           en: "The TOP-100 Achievements award logo",
           el: "Το λογότυπο του βραβείου TOP-100 Achievements" },
    mk: { t: "Номинација за наградата TOP-100 Achievements 2020",
          b: ["Стоматолошката ординација Д-р Нечаковски е номинирана за наградата TOP-100 Achievements 2020 Award.",
              "Наградата ја доделува организацијата Achievements Forum од Велика Британија, во категоријата здравствени установи."] },
    en: { t: "Nominated for the TOP-100 Achievements 2020 Award",
          b: ["Dr. Nechakovski Dental Practice has been nominated for the TOP-100 Achievements 2020 Award.",
              "This recognition is awarded by the Achievements Forum from the United Kingdom, in the healthcare category."] },
    el: { t: "Υποψηφιότητα για το βραβείο TOP-100 Achievements 2020",
          b: ["Το οδοντιατρείο Δρ. Νετσακόφσκι προτάθηκε για το βραβείο TOP-100 Achievements 2020.",
              "Το βραβείο απονέμεται από τον οργανισμό Achievements Forum της Μεγάλης Βρετανίας, στην κατηγορία των μονάδων υγείας."] } },

  { iso: "2020-05-12", date: "12.05.2020", group: "news",
    mk: { t: "Продолжуваме со работа",
          b: ["Почитувани пациенти, почитувајќи ја одлуката на Комисијата за заразни болести при Министерството за здравство и известувањето од Стоматолошката комора на Македонија, нашата ординација од 13.05.2020 продолжува со редовна работа, но со засилени мерки за превенција.",
              "За закажување термин јавете ни се на 075 306 509 и 047 254 528, или на Viber."] },
    en: { t: "We continue with our work",
          b: ["Dear patients, respecting the decision of the Commission for Infectious Diseases at the Ministry of Health and the notification from the Dental Chamber of Macedonia, from 13.05.2020 our practice continues with regular work, but with intensified prevention measures.",
              "To make an appointment, call us on 075 306 509 and 047 254 528, or on Viber."] },
    el: { t: "Συνεχίζουμε τη λειτουργία μας",
          b: ["Αγαπητοί ασθενείς, σεβόμενοι την απόφαση της Επιτροπής Λοιμωδών Νοσημάτων του Υπουργείου Υγείας και την ανακοίνωση του Οδοντιατρικού Επιμελητηρίου της Μακεδονίας, από τις 13.05.2020 το ιατρείο μας συνεχίζει την κανονική του λειτουργία, με ενισχυμένα μέτρα πρόληψης.",
              "Για ραντεβού καλέστε μας στο 075 306 509 και στο 047 254 528, ή στο Viber."] } },

  { iso: "2020-04-15", date: "15.04.2020", group: "news",
    mk: { t: "Вашето мислење ни е навистина важно",
          b: ["Задоволни сте од нашите услуги? Ве покануваме да објавите рецензија на нашиот профил на Google. На многумина би им помогнало да се решат да нè посетат доколку прочитаат добри впечатоци од други корисници, како Вас.",
              "Има ли нешто што сте забележале дека можеме да го правиме подобро? Испратете ни електронска порака — сите коментари се добредојдени!"] },
    en: { t: "Your opinion is really important to us",
          b: ["Are you satisfied with our services? We invite you to post a review on our Google profile. It would help a lot of people decide to visit us if they read good impressions from other patients like you.",
              "Is there anything you have noticed that we could do better? Please write us an email — all comments are welcome!"] },
    el: { t: "Η γνώμη σας είναι πραγματικά σημαντική για εμάς",
          b: ["Είστε ικανοποιημένοι από τις υπηρεσίες μας; Σας προσκαλούμε να δημοσιεύσετε μια κριτική στο προφίλ μας στο Google. Θα βοηθούσε πολλούς να αποφασίσουν να μας επισκεφθούν, αν διάβαζαν καλές εντυπώσεις από άλλους ασθενείς σαν εσάς.",
              "Υπάρχει κάτι που παρατηρήσατε ότι θα μπορούσαμε να κάνουμε καλύτερα; Στείλτε μας ένα email — κάθε σχόλιο είναι ευπρόσδεκτο!"] } },

  { iso: "2020-03-30", date: "30.03.2020", group: "news",
    mk: { t: "Важно известување",
          b: ["Почитувани пациенти, почитувајќи ја одлуката на Министерството за здравство и Фондот за здравствено осигурување во врска со мерките за спречување на ширењето на епидемијата од COVID-19, ординацијата привремено ја прекинува работата.",
              "Во случај на итна и неодложна потреба од стоматолошка помош, пациентите се упатуваат на Ургентната служба при ЈЗУ Здравствен дом „Д-р Хаим Абраванел“ — Битола, секој ден од 08:00 до 20:00. Остануваме достапни за консултација на телефон 075 306 509 и 070 395 362, и на Viber."] },
    en: { t: "An important notice",
          b: ["Dear patients, respecting the decision of the Ministry of Health and the Health Insurance Fund in regard to the measures to stop the spread of the COVID-19 epidemic, the practice will temporarily discontinue its work.",
              "In case of an urgent and immediate need for dental care, patients are referred to the Emergency Service at Zdravstven Dom „Dr. Haim Abravanel“ — Bitola, every day from 08:00 to 20:00. We remain available for consultation by phone on 075 306 509 and 070 395 362, and on Viber."] },
    el: { t: "Σημαντική ανακοίνωση",
          b: ["Αγαπητοί ασθενείς, σεβόμενοι την απόφαση του Υπουργείου Υγείας και του Ταμείου Υγείας σχετικά με τα μέτρα για την ανάσχεση της επιδημίας COVID-19, το ιατρείο διακόπτει προσωρινά τη λειτουργία του.",
              "Σε περίπτωση επείγουσας και άμεσης ανάγκης οδοντιατρικής φροντίδας, οι ασθενείς παραπέμπονται στην Υπηρεσία Επειγόντων του Κέντρου Υγείας „Dr. Haim Abravanel“ — Μπίτολα, κάθε ημέρα από τις 08:00 έως τις 20:00. Παραμένουμε διαθέσιμοι για συνεννόηση στα τηλέφωνα 075 306 509 και 070 395 362, και στο Viber."] } },

  { iso: "2020-03-23", date: "23.03.2020", group: "news",
    mk: { t: "Важно известување",
          b: ["Почитувани пациенти, следејќи ги препораките на Министерството за здравство и Фондот за здравствено осигурување, за време на вонредните мерки поврзани со коронавирусот COVID-19 ординацијата работи само во случаи на итна и неодложна потреба од стоматолошка помош — силна болка, продолжено крварење, оток.",
              "Пациентите кои биле во контакт со лица со грип, или самите имаат симптоми (кашлица, температура, отежнато дишење), Ве молиме јавете се на 075 306 509 или 047 254 528 за консултација. Работното време во овој период е од 09:00 до 17:00. Ви благодариме за разбирањето."] },
    en: { t: "An important notice",
          b: ["Dear patients, following the recommendations of the Ministry of Health and the Health Insurance Fund, for the duration of the extraordinary measures related to the COVID-19 coronavirus our office will work only in cases of urgent and immediate need of dental care — severe pain, prolonged bleeding, swelling.",
              "Patients who have been in contact with persons who have the flu, or have the symptoms themselves (cough, fever, difficulty breathing), please call 075 306 509 or 047 254 528 for a consultation. Our working hours in this period are 09:00 to 17:00. Thank you for your understanding."] },
    el: { t: "Σημαντική ανακοίνωση",
          b: ["Αγαπητοί ασθενείς, ακολουθώντας τις συστάσεις του Υπουργείου Υγείας και του Ταμείου Υγείας, για όσο ισχύουν τα έκτακτα μέτρα για τον κορωνοϊό COVID-19 το ιατρείο λειτουργεί μόνο σε περιπτώσεις επείγουσας και άμεσης ανάγκης — έντονος πόνος, παρατεταμένη αιμορραγία, οίδημα.",
              "Όσοι ήρθαν σε επαφή με άτομα με γρίπη, ή έχουν οι ίδιοι συμπτώματα (βήχας, πυρετός, δύσπνοια), παρακαλούμε καλέστε στο 075 306 509 ή στο 047 254 528 για συνεννόηση. Το ωράριο αυτή την περίοδο είναι 09:00 έως 17:00. Σας ευχαριστούμε για την κατανόηση."] } },

  { iso: "2020-02-22", date: "22.02.2020", group: "news",
    img: "cytosial.webp", w: 268, h: 188,
    alt: { mk: "Обука за филери Cytosial", en: "The Cytosial filler training", el: "Η εκπαίδευση Cytosial" },
    mk: { t: "Обука за хијалуронски филери",
          b: ["Д-р Ева Анастасова учествуваше на обука за хијалуронски филери од реномираниот бренд Cytosial, под водство на д-р Волфганг Редка-Свобода, во Скопје."] },
    en: { t: "Hyaluronic filler training",
          b: ["Dr. Eva Anastasova took part in a training course on hyaluronic fillers from the renowned brand Cytosial, led by Dr. Wolfgang Radka-Swoboda, in Skopje."] },
    el: { t: "Εκπαίδευση σε υαλουρονικά fillers",
          b: ["Η Δρ. Εύα Αναστάσοβα συμμετείχε σε εκπαίδευση για υαλουρονικά fillers της αναγνωρισμένης μάρκας Cytosial, υπό την καθοδήγηση του Δρ. Wolfgang Radka-Swoboda, στα Σκόπια."] } },

  { iso: "2018-09-20", date: "20.09.2018", group: "news",
    img: "lisabon-2018.webp", w: 300, h: 145,
    alt: { mk: "15. годишна средба на ESCD, Лисабон 2018",
           en: "The 15th ESCD Annual Meeting, Lisbon 2018",
           el: "Η 15η Ετήσια Συνάντηση ESCD, Λισαβόνα 2018" },
    mk: { t: "15. годишна средба на ESCD, Лисабон",
          b: ["Д-р Александар Нечаковски учествуваше на годишната средба на Европската асоцијација за естетска стоматологија во Лисабон, Португалија."] },
    en: { t: "ESCD 15th Annual Meeting, Lisbon",
          b: ["Dr. Aleksandar Nechakovski attended the annual meeting of the European Society of Cosmetic Dentistry in Lisbon, Portugal."] },
    el: { t: "15η Ετήσια Συνάντηση ESCD, Λισαβόνα",
          b: ["Ο Δρ. Αλεξάνταρ Νετσακόφσκι συμμετείχε στην ετήσια συνάντηση της Ευρωπαϊκής Εταιρείας Αισθητικής Οδοντιατρικής στη Λισαβόνα της Πορτογαλίας."] } },

  { iso: "2018-03-09", date: "09.03.2018", group: "news",
    img: "expo-2018.webp", w: 300, h: 145,
    alt: { mk: "Dental Expo 2018, Амстердам", en: "Dental Expo 2018, Amsterdam", el: "Dental Expo 2018, Άμστερνταμ" },
    mk: { t: "Dental Expo 2018, Амстердам",
          b: ["Д-р Александар Нечаковски го посети најголемиот саем за стоматологија во Холандија — Dental Expo 2018 во Амстердам."] },
    en: { t: "Dental Expo 2018, Amsterdam",
          b: ["Dr. Aleksandar Nechakovski attended the biggest dental fair in the Netherlands — Dental Expo 2018 in Amsterdam."] },
    el: { t: "Dental Expo 2018, Άμστερνταμ",
          b: ["Ο Δρ. Αλεξάνταρ Νετσακόφσκι επισκέφθηκε τη μεγαλύτερη οδοντιατρική έκθεση της Ολλανδίας — τη Dental Expo 2018 στο Άμστερνταμ."] } },

  { iso: "2017-09-16", date: "16.09.2017", group: "news",
    img: "escd-2017.webp", w: 300, h: 225,
    alt: { mk: "Потврда за членство во ESCD, 2017",
           en: "The ESCD certificate of membership, 2017",
           el: "Το πιστοποιητικό μέλους της ESCD, 2017" },
    mk: { t: "Член на Европската асоцијација за естетска стоматологија",
          b: ["Д-р Александар Нечаковски е примен за член на Европската асоцијација за естетска стоматологија (ESCD).",
              "ESCD е професионално здружение на стоматолози, забни техничари, производители на опрема и материјали и универзитетски професори, вклучени во воспоставување и исполнување на највисоките стандарди за естетска стоматологија."] },
    en: { t: "A member of the European Society of Cosmetic Dentistry",
          b: ["Dr. Aleksandar Nechakovski has been accepted as a professional member of the European Society of Cosmetic Dentistry.",
              "The ESCD is an association of dentists, dental technicians, equipment and material manufacturers and university professors dedicated to the highest standards of aesthetic dentistry."] },
    el: { t: "Μέλος της Ευρωπαϊκής Εταιρείας Αισθητικής Οδοντιατρικής",
          b: ["Ο Δρ. Αλεξάνταρ Νετσακόφσκι έγινε δεκτός ως μέλος της Ευρωπαϊκής Εταιρείας Αισθητικής Οδοντιατρικής (ESCD).",
              "Η ESCD είναι επαγγελματική ένωση οδοντιάτρων, οδοντοτεχνιτών, κατασκευαστών εξοπλισμού και υλικών και πανεπιστημιακών καθηγητών, αφιερωμένη στα υψηλότερα πρότυπα της αισθητικής οδοντιατρικής."] } },

  { iso: "2016-09-06", date: "06.09.2016", group: "news",
    mk: { t: "Обука во Виена",
          b: ["Д-р Александар Нечаковски присуствуваше на обука во Меѓународниот центар за стоматолошка едукација (ICDE) во Виена, Австрија, кај доц. д-р Марко Јаковац, на тема „Планирање на терапијата и естетска рехабилитација во фиксната протетика“."] },
    en: { t: "Training in Vienna",
          b: ["Dr. Aleksandar Nechakovski attended training at the International Center for Dental Education (ICDE) in Vienna, Austria, with Ass. Prof. Marko Jakovac, on the topic “Treatment Planning and Esthetic Rehabilitation in Fixed Prosthodontics”."] },
    el: { t: "Εκπαίδευση στη Βιέννη",
          b: ["Ο Δρ. Αλεξάνταρ Νετσακόφσκι παρακολούθησε εκπαίδευση στο Διεθνές Κέντρο Οδοντιατρικής Εκπαίδευσης (ICDE) στη Βιέννη της Αυστρίας, με τον Επίκ. Καθ. Marko Jakovac, με θέμα «Σχεδιασμός θεραπείας και αισθητική αποκατάσταση στην ακίνητη προσθετική»."] } },

  /* ------------------------------------------------------------- in the press */

  { iso: "2008-03-10", date: "10.03.2008", group: "press",
    mk: { t: "„Орална кандидијаза“ во „24 часа здравје“",
          b: ["Најтиражниот весник за здравјето во Македонија — „24 часа здравје“ — во бројот од 10.03.2008 објави нов текст од д-р Александар Нечаковски под наслов „Орална кандидијаза“."] },
    en: { t: "“Oral candidiasis” in 24 Chasa Zdravje",
          b: ["Macedonia's most widely read health paper, 24 Chasa Zdravje, published a new article by Dr. Aleksandar Nechakovski in its issue of 10.03.2008, under the title “Oral candidiasis”."] },
    el: { t: "«Στοματική καντιντίαση» στην 24 Chasa Zdravje",
          b: ["Η εφημερίδα υγείας με τη μεγαλύτερη κυκλοφορία στη Μακεδονία, η 24 Chasa Zdravje, δημοσίευσε στο φύλλο της 10.03.2008 νέο άρθρο του Δρ. Αλεξάνταρ Νετσακόφσκι με τίτλο «Στοματική καντιντίαση»."] } },

  { iso: "2007-12-17", date: "17.12.2007", group: "press",
    mk: { t: "„Импланти — современа замена за изгубените трајни заби“",
          b: ["Текстот „Импланти — современа замена за изгубените трајни заби“ од д-р Александар Нечаковски е објавен во весникот „24 часа здравје“."] },
    en: { t: "“Implants — a modern replacement for lost permanent teeth”",
          b: ["The article “Implants — a modern replacement for lost permanent teeth” by Dr. Aleksandar Nechakovski was published in 24 Chasa Zdravje."] },
    el: { t: "«Εμφυτεύματα — σύγχρονη αντικατάσταση των χαμένων μόνιμων δοντιών»",
          b: ["Το άρθρο «Εμφυτεύματα — σύγχρονη αντικατάσταση των χαμένων μόνιμων δοντιών» του Δρ. Αλεξάνταρ Νετσακόφσκι δημοσιεύθηκε στην 24 Chasa Zdravje."] } },

  { iso: "2007-11-05", date: "05.11.2007", group: "press",
    mk: { t: "Текст за виличниот зглоб",
          b: ["Весникот „24 часа здравје“ објави текст од д-р Александар Нечаковски за проблемите со виличниот зглоб."] },
    en: { t: "An article on the jaw joint",
          b: ["24 Chasa Zdravje published an article by Dr. Aleksandar Nechakovski on problems with the temporomandibular joint."] },
    el: { t: "Άρθρο για την κροταφογναθική άρθρωση",
          b: ["Η 24 Chasa Zdravje δημοσίευσε άρθρο του Δρ. Αλεξάνταρ Νετσακόφσκι για τα προβλήματα της κροταφογναθικής άρθρωσης."] } },

  { iso: "2007-07-09", date: "09.07.2007", group: "press",
    mk: { t: "„Пломби со флуориди ги штитат забите од расипување“",
          b: ["Во бројот од 09.07.2007 весникот „24 часа здравје“ го објави текстот „Пломби со флуориди ги штитат забите од расипување“ од д-р Александар Нечаковски."] },
    en: { t: "“Fluoride fillings protect teeth from decay”",
          b: ["In its issue of 09.07.2007, 24 Chasa Zdravje published the article “Fluoride fillings protect teeth from decay” by Dr. Aleksandar Nechakovski."] },
    el: { t: "«Τα εμφρακτικά υλικά με φθόριο προστατεύουν τα δόντια από την τερηδόνα»",
          b: ["Στο φύλλο της 09.07.2007 η 24 Chasa Zdravje δημοσίευσε το άρθρο «Τα εμφρακτικά υλικά με φθόριο προστατεύουν τα δόντια από την τερηδόνα» του Δρ. Αλεξάνταρ Νετσακόφσκι."] } },

  { iso: "2007-02-26", date: "26.02.2007", group: "press",
    mk: { t: "Текст за млечните заби",
          b: ["„24 часа здравје“, неделниот прилог на дневниот весник „Дневник“, во бројот од 26.02.2007 објави текст кој се базира на одговорите на најчесто поставуваните прашања за млечните заби."] },
    en: { t: "An article on baby teeth",
          b: ["24 Chasa Zdravje, the weekly supplement of the daily Dnevnik, published in its issue of 26.02.2007 an article based on the answers to the questions most often asked about baby teeth."] },
    el: { t: "Άρθρο για τα νεογιλά δόντια",
          b: ["Η 24 Chasa Zdravje, το εβδομαδιαίο ένθετο της εφημερίδας Dnevnik, δημοσίευσε στο φύλλο της 26.02.2007 άρθρο βασισμένο στις απαντήσεις στις πιο συχνές ερωτήσεις για τα νεογιλά δόντια."] } },

  { iso: "2006-05-25", date: "25.05.2006", group: "press",
    mk: { t: "IV Конгрес на стоматолозите од Македонија",
          b: ["Д-р Тина Нечаковска и д-р Александар Нечаковски учествуваа на IV Конгрес на стоматолозите од Македонија со меѓународно учество, одржан во Охрид.",
              "Во рамките на постер излагањата од превентивната стоматологија, д-р Нечаковска ја презентираше темата „Значењето на систематските прегледи во стоматологијата“."] },
    en: { t: "The IV Congress of Macedonian Dentists",
          b: ["Dr. Tina Nechakovska and Dr. Aleksandar Nechakovski took part in the IV Congress of Macedonian Dentists with international participation, held in Ohrid.",
              "Among the poster presentations in preventive dentistry, Dr. Nechakovska presented “The importance of systematic check-ups in dentistry”."] },
    el: { t: "IV Συνέδριο Οδοντιάτρων Μακεδονίας",
          b: ["Η Δρ. Τίνα Νετσακόφσκα και ο Δρ. Αλεξάνταρ Νετσακόφσκι συμμετείχαν στο IV Συνέδριο Οδοντιάτρων Μακεδονίας με διεθνή συμμετοχή, στην Οχρίδα.",
              "Στις αναρτημένες ανακοινώσεις προληπτικής οδοντιατρικής, η Δρ. Νετσακόφσκα παρουσίασε το θέμα «Η σημασία των συστηματικών ελέγχων στην οδοντιατρική»."] } },

  { iso: "2006-05-24", date: "25.05.2006", group: "press",
    mk: { t: "Гостин во емисијата „Нова“ на Тера Телевизија",
          b: ["Д-р Александар Нечаковски беше гостин во емисијата „Нова“ на Тера Телевизија — Битола.",
              "Тема на разговорот беа популарни теми од стоматологијата: хигиената на устата и забите, заштитата од кариес кај бремените жени, начините за белење на забите и нивната сигурност, како и ефектите на гумите за џвакање без шеќер."] },
    en: { t: "A guest on “Nova” on Tera Television",
          b: ["Dr. Aleksandar Nechakovski was a guest on the programme “Nova” on Tera Television — Bitola.",
              "The conversation covered popular dental subjects: oral hygiene, protection from decay during pregnancy, ways of whitening teeth and how safe they are, and the effects of sugar-free chewing gum."] },
    el: { t: "Καλεσμένος στην εκπομπή «Nova» της Tera Television",
          b: ["Ο Δρ. Αλεξάνταρ Νετσακόφσκι ήταν καλεσμένος στην εκπομπή «Nova» της Tera Television — Μπίτολα.",
              "Η συζήτηση κάλυψε δημοφιλή οδοντιατρικά θέματα: υγιεινή του στόματος και των δοντιών, προστασία από την τερηδόνα στην εγκυμοσύνη, τρόποι λεύκανσης των δοντιών και η ασφάλειά τους, καθώς και οι επιδράσεις των τσιχλών χωρίς ζάχαρη."] } },

  { iso: "2005-09-08", date: "08.09.2005", group: "press",
    mk: { t: "„Сајт на денот“ на весникот „Време“",
          b: ["Stomatolog.com.mk е избран за „Сајт на денот“ од весникот „Време“. Во текстот под наслов „Битолските кибер-стоматолози“, во бројот 486 од 07.09.2005, весникот пишува за сајтот и за ординацијата."] },
    en: { t: "“Site of the day” in the daily Vreme",
          b: ["Stomatolog.com.mk was chosen as “Site of the day” by the daily newspaper Vreme. In an article titled “The cyber-dentists from Bitola”, in issue 486 of 07.09.2005, the paper writes about the site and the practice."] },
    el: { t: "«Ιστότοπος της ημέρας» στην εφημερίδα Vreme",
          b: ["Το Stomatolog.com.mk επιλέχθηκε ως «Ιστότοπος της ημέρας» από την εφημερίδα Vreme. Σε άρθρο με τίτλο «Οι κυβερνο-οδοντίατροι της Μπίτολα», στο φύλλο 486 της 07.09.2005, η εφημερίδα γράφει για τον ιστότοπο και το ιατρείο."] } },

  { iso: "2005-07-20", date: "20.07.2005", group: "press",
    mk: { t: "Обука за имплантологија во Розбах, Германија",
          b: ["Д-р Александар Нечаковски учествуваше на специјална обука за имплантологија во Розбах, Германија.",
              "На обуката во организација на Schutz Dental Group, одржана од 14 до 17 јули, учествуваа 10 стоматолози од Македонија, а тема беше имплантолошкиот систем Impla."] },
    en: { t: "Implantology training in Rosbach, Germany",
          b: ["Dr. Aleksandar Nechakovski took part in a special implantology training course in Rosbach, Germany.",
              "The course, organised by the Schutz Dental Group and held from 14 to 17 July, was attended by dentists from Macedonia, and the subject was the Impla implant system."] },
    el: { t: "Εκπαίδευση εμφυτευματολογίας στο Rosbach της Γερμανίας",
          b: ["Ο Δρ. Αλεξάνταρ Νετσακόφσκι συμμετείχε σε ειδική εκπαίδευση εμφυτευματολογίας στο Rosbach της Γερμανίας.",
              "Στην εκπαίδευση, που διοργάνωσε η Schutz Dental Group από τις 14 έως τις 17 Ιουλίου, συμμετείχαν οδοντίατροι από τη Μακεδονία, με θέμα το σύστημα εμφυτευμάτων Impla."] } },

  { iso: "2005-06-03", date: "03.06.2005", group: "press",
    mk: { t: "Договор со Фондот — работа со „сини картони“",
          b: ["Стоматолошката ординација Д-р Нечаковски и Фондот за здравствено осигурување на Македонија на 03.06.2005 потпишаа договор за обезбедување услуги од примарната стоматолошка здравствена заштита за осигурениците на Фондот, односно услуги со „сини картони“."] },
    en: { t: "An agreement with the Health Insurance Fund",
          b: ["On 03.06.2005 Dr. Nechakovski Dental Practice and the Health Insurance Fund of Macedonia signed an agreement to provide primary dental care to the Fund's insured patients — treatment on a “blue card”."] },
    el: { t: "Σύμβαση με το Ταμείο Υγείας",
          b: ["Στις 03.06.2005 το οδοντιατρείο Δρ. Νετσακόφσκι και το Ταμείο Υγείας της Μακεδονίας υπέγραψαν σύμβαση για την παροχή πρωτοβάθμιας οδοντιατρικής φροντίδας στους ασφαλισμένους του Ταμείου — περίθαλψη με «μπλε κάρτα»."] } },

  { iso: "2005-05-11", date: "11.05.2005", group: "press",
    mk: { t: "Балкански конгрес на стоматолозите, Белград",
          b: ["Д-р Тина Нечаковска и д-р Александар Нечаковски учествуваа на Балканскиот конгрес на стоматолозите во Белград."] },
    en: { t: "The Balkan Dental Congress, Belgrade",
          b: ["Dr. Tina Nechakovska and Dr. Aleksandar Nechakovski attended the Balkan Dental Congress in Belgrade."] },
    el: { t: "Βαλκανικό Οδοντιατρικό Συνέδριο, Βελιγράδι",
          b: ["Η Δρ. Τίνα Νετσακόφσκα και ο Δρ. Αλεξάνταρ Νετσακόφσκι συμμετείχαν στο Βαλκανικό Οδοντιατρικό Συνέδριο στο Βελιγράδι."] } },

  { iso: "2005-04-01", date: "01.04.2005", group: "press",
    mk: { t: "Започна изборот на матичен стоматолог",
          b: ["Според известувањето на Фондот за здравствено осигурување на Македонија, од 01.04.2005 започна постапката за избор на матичен стоматолог.",
              "Од 1 април беше потребно пациентите да нè посетат со здравствената легитимација за пополнување на потребните формулари, со кои се овозможува користење на услугите на ординацијата со „сини картони“."] },
    en: { t: "Choosing a family dentist begins",
          b: ["Following a notice from the Health Insurance Fund of Macedonia, the procedure for choosing a family dentist began on 01.04.2005.",
              "From 1 April patients needed to visit us with their health card so the necessary forms could be filled in, allowing them to be treated at the practice on a “blue card”."] },
    el: { t: "Ξεκίνησε η επιλογή οικογενειακού οδοντιάτρου",
          b: ["Σύμφωνα με ανακοίνωση του Ταμείου Υγείας της Μακεδονίας, από τις 01.04.2005 ξεκίνησε η διαδικασία επιλογής οικογενειακού οδοντιάτρου.",
              "Από την 1η Απριλίου οι ασθενείς έπρεπε να μας επισκεφθούν με το βιβλιάριο υγείας τους για τη συμπλήρωση των απαραίτητων εντύπων, ώστε να μπορούν να εξυπηρετούνται στο ιατρείο με «μπλε κάρτα»."] } },

  { iso: "2005-01-26", date: "26.01.2005", group: "press",
    mk: { t: "Гостин на Македонското радио",
          b: ["Д-р Александар Нечаковски беше гостин во емисијата „Здрав живот“ на Првата програма на Македонското радио.",
              "Емисијата се емитуваше во живо и беше посветена на современите начини за грижа за здравјето на забите."] },
    en: { t: "A guest on Macedonian Radio",
          b: ["Dr. Aleksandar Nechakovski was a guest on the programme “Zdrav Zivot” on the First Programme of Macedonian Radio.",
              "The programme was broadcast live and was devoted to contemporary dental procedures and preventive care."] },
    el: { t: "Καλεσμένος στο Ραδιόφωνο της Μακεδονίας",
          b: ["Ο Δρ. Αλεξάνταρ Νετσακόφσκι ήταν καλεσμένος στην εκπομπή «Zdrav Zivot» του Πρώτου Προγράμματος του Ραδιοφώνου της Μακεδονίας.",
              "Η εκπομπή μεταδόθηκε ζωντανά και ήταν αφιερωμένη στους σύγχρονους τρόπους φροντίδας της υγείας των δοντιών."] } },

  { iso: "2002-09-14", date: "14.09.2002", group: "press",
    img: "nagrada-2002.webp", w: 198, h: 140,
    alt: { mk: "Повелбата од III Конгрес на стоматолозите од Македонија",
           en: "The award from the III Congress of Macedonian Dentists",
           el: "Το βραβείο από το III Συνέδριο Οδοντιάτρων Μακεδονίας" },
    mk: { t: "Д-р Тина Нечаковска наградена на III Конгрес",
          b: ["Постер презентацијата „Децата од Битола зборуваат за забите“ од д-р Тина Нечаковска беше наградена за најдобра постер презентација од конгресниот и научниот одбор на III Конгрес на стоматолозите од Македонија со меѓународно учество, одржан од 11 до 14 септември 2002 година во Охрид.",
              "Наградата беше доделена само на еден автор од Македонија, во конкуренција од над 150 трудови. Наградената презентација е постојано изложена во просториите на Научно-истражувачкиот институт на Стоматолошкиот факултет во Скопје."] },
    en: { t: "Dr. Tina Nechakovska awarded at the III Congress",
          b: ["The poster presentation “The children of Bitola talk about teeth” by Dr. Tina Nechakovska was named best poster presentation by the congress and scientific committee of the III Congress of Macedonian Dentists with international participation, held from 11 to 14 September 2002 in Ohrid.",
              "The award was given to only one author from Macedonia, out of more than 150 works in competition. The awarded presentation is permanently displayed at the Scientific Research Institute of the Faculty of Dentistry in Skopje."] },
    el: { t: "Βραβείο για τη Δρ. Τίνα Νετσακόφσκα στο III Συνέδριο",
          b: ["Η αναρτημένη ανακοίνωση «Τα παιδιά της Μπίτολα μιλούν για τα δόντια» της Δρ. Τίνα Νετσακόφσκα βραβεύθηκε ως η καλύτερη από την οργανωτική και επιστημονική επιτροπή του III Συνεδρίου Οδοντιάτρων Μακεδονίας με διεθνή συμμετοχή, που έγινε από τις 11 έως τις 14 Σεπτεμβρίου 2002 στην Οχρίδα.",
              "Το βραβείο δόθηκε σε έναν μόνο συγγραφέα από τη Μακεδονία, ανάμεσα σε περισσότερες από 150 εργασίες. Η βραβευμένη ανακοίνωση εκτίθεται μόνιμα στο Ερευνητικό Ινστιτούτο της Οδοντιατρικής Σχολής των Σκοπίων."] } },

  { iso: "2001-04-15", date: "15.04.2001", group: "press",
    img: "plugin-2001.webp", w: 270, h: 214,
    alt: { mk: "Страница од списанието „Plugin“, број 16",
           en: "A page from Plugin magazine, issue 16",
           el: "Σελίδα από το περιοδικό Plugin, τεύχος 16" },
    mk: { t: "Списание „Plugin“: интернет адресар",
          b: ["„…Пораката која ќе ве дочека е ‚ова е местото каде што можете да ги најдете сите одговори од областа на стоматологијата, најновите вести, совети, интересни податоци од науката за здравјето на забите и устата‘. Страницата е навистина одлична…“",
              "„Plugin“, број 16, стр. 80."] },
    en: { t: "Plugin magazine: internet directory",
          b: ["“…The message that greets you is ‘this is the place where you can find every answer in the field of dentistry, the latest news, advice and interesting facts from the science of healthy teeth and mouth’. The site is really excellent…”",
              "Plugin, issue 16, p. 80."] },
    el: { t: "Περιοδικό Plugin: κατάλογος ιστοτόπων",
          b: ["«…Το μήνυμα που σας υποδέχεται είναι ‘εδώ είναι το μέρος όπου μπορείτε να βρείτε όλες τις απαντήσεις στον τομέα της οδοντιατρικής, τα τελευταία νέα, συμβουλές και ενδιαφέροντα στοιχεία από την επιστήμη για την υγεία των δοντιών και του στόματος’. Η σελίδα είναι πραγματικά εξαιρετική…»",
              "Plugin, τεύχος 16, σ. 80."] } },

  { iso: "2001-04-14", date: "14.04.2001", group: "press",
    img: "forum-2001.webp", w: 270, h: 215,
    alt: { mk: "Страница од магазинот „Форум“, број 81",
           en: "A page from Forum magazine, issue 81",
           el: "Σελίδα από το περιοδικό Forum, τεύχος 81" },
    mk: { t: "Магазин „Форум“: „Сè за вашиот интернет стоматолог“",
          b: ["„‚Ова е местото каде што можете да ги најдете сите одговори од областа на стоматологијата, најновите вести, совети, интересни податоци од науката за здравата насмевка. Посетувајте нè редовно, но не заборавајте да го посетите и вашиот стоматолог…‘ — воведните зборови на првиот сериозен сајт ‚за забите‘.",
              "На оваа комплетно стокмена веб-страница ве очекуваат одговорите на најчесто поставуваните прашања: хигиената на устата и забите, исхраната и кариесот, страв од стоматолог, градбата на забите, за пародонтопатијата, за кариесот, амалгамски пломби, криви заби… Сите овие стручни совети ви ги нуди битолската специјалистичка стоматолошка ординација ‚Д-р Кирил Нечаковски‘. Професионално и бесплатно.“ — „Форум“, број 81, стр. 49."] },
    en: { t: "Forum magazine: “Everything for your internet dentist”",
          b: ["“‘This is the place where you can find every answer in the field of dentistry, the latest news, advice and interesting facts from the science of a healthy smile. Visit us regularly — but do not forget to visit your dentist too…’ — the opening words of the first serious site ‘about teeth’.",
              "This thoroughly made web page holds the answers to the questions asked most often: oral hygiene, diet and decay, fear of the dentist, the structure of the teeth, periodontal disease, decay, amalgam fillings, crooked teeth… All of this expert advice comes from the specialist dental practice ‘Dr. Kiril Nechakovski’ in Bitola. Professionally, and free.” — Forum, issue 81, p. 49."] },
    el: { t: "Περιοδικό Forum: «Όλα για τον οδοντίατρό σας στο διαδίκτυο»",
          b: ["«‘Εδώ είναι το μέρος όπου μπορείτε να βρείτε όλες τις απαντήσεις στον τομέα της οδοντιατρικής, τα τελευταία νέα, συμβουλές και ενδιαφέροντα στοιχεία από την επιστήμη για ένα υγιές χαμόγελο. Επισκεφθείτε μας τακτικά — αλλά μην ξεχνάτε να επισκέπτεστε και τον οδοντίατρό σας…’ — τα εισαγωγικά λόγια του πρώτου σοβαρού ιστότοπου «για τα δόντια».",
              "Σε αυτή την άρτια φτιαγμένη σελίδα σας περιμένουν οι απαντήσεις στις πιο συχνές ερωτήσεις: υγιεινή στόματος και δοντιών, διατροφή και τερηδόνα, φόβος του οδοντιάτρου, η δομή των δοντιών, περιοδοντίτιδα, τερηδόνα, εμφράξεις αμαλγάματος, στραβά δόντια… Όλες αυτές τις συμβουλές σας τις προσφέρει το ειδικό οδοντιατρείο ‘Δρ. Κίριλ Νετσακόφσκι’ στη Μπίτολα. Επαγγελματικά, και δωρεάν.» — Forum, τεύχος 81, σ. 49."] } }

];

/* One post, as a card. Shared by the three on the home page and the whole
   archive on vesti.html, so they can never drift apart.

   `opts.lead` shows only the first paragraph — the home page teaser. The
   pictures are the old site's own and none is wider than 470px, so the card
   gives them a fixed, modest column rather than stretching them. */
window.NEWS_CARD = function (post, lang, opts) {
  var el = window.SITE.el;
  var o = opts || {};
  var copy = post[lang] || post.mk;

  var art = el("article", "post");

  var body = el("div", "post-body");
  var time = el("time", "post-date", post.date);
  time.setAttribute("datetime", post.iso);
  body.appendChild(time);
  body.appendChild(el("h3", null, copy.t));

  var paras = o.lead ? copy.b.slice(0, 1) : copy.b;
  paras.forEach(function (p) { body.appendChild(el("p", null, p)); });
  art.appendChild(body);

  if (post.img) {
    var fig = el("figure", "post-shot");
    var img = el("img");
    img.src = "assets/news/" + post.img;
    img.alt = (post.alt && (post.alt[lang] || post.alt.mk)) || "";
    img.width = post.w;
    img.height = post.h;
    img.loading = "lazy";
    img.decoding = "async";
    /* the award card has a readable full-size scan behind it, the way the
       old site opened it in a window of its own */
    if (post.full) {
      var a = el("a");
      a.href = "assets/news/" + post.full;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.appendChild(img);
      fig.appendChild(a);
    } else {
      fig.appendChild(img);
    }
    art.appendChild(fig);
  }

  return art;
};
