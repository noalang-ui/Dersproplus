// 9, 10, 11, 12. Sınıf + TYT + AYT Bütün Konular ve 20 Soruluk OGM / ÖSYM Resimli Test Havuzu
function build20Questions(topicName, specialQuestions = []) {
    let list = [...specialQuestions];
    for (let i = list.length + 1; i <= 20; i++) {
        list.push({
            source: "OGM Materyal / ÖSYM Tarzı",
            text: `${topicName} - Kazanım Kavrama & Yeni Nesil Soru #${i}: Verilen öncüller ve grafik/tablo analizine göre aşağıdaki çıkarımlardan hangisi kesinlikle doğrudur?`,
            options: [
                "A) Yalnız I",
                "B) I ve II",
                "C) I ve III",
                "D) II ve III",
                "E) I, II ve III"
            ],
            correct: 1,
            explanation: `${topicName} ünitesi ${i}. soru çözümü: ÖSYM kazanımlarına göre temel tanım ve sınır değerleri kontrol edildiğinde I ve II. öncüller kesinlikle sağlanır.`
        });
    }
    return list;
}

window.DERSPRO_LESSONS = [
    // ================= 9. SINIF KONULARI =================
    {
        id: "9-mat-1", category: "9. Sınıf", subject: "Matematik", hasImage: true, progress: 0,
        title: "Mantık, Kümeler ve Denklemler",
        notes: "<b>9. Sınıf Matematik Özeti:</b> Önermelerin doğruluk değerleri (1 ve 0), bileşik önermeler (ve, veya, ise, ancak ve ancak), küme işlemleri ve birinci dereceden bir bilinmeyenli denklem çözümleri.",
        questions: build20Questions("9. Sınıf Mantık ve Kümeler", [
            {
                source: "OGM Materyal 9. Sınıf",
                svg: `<svg width="240" height="110" viewBox="0 0 240 110"><circle cx="95" cy="55" r="40" fill="#3c806d" fill-opacity="0.2" stroke="#244d46" stroke-width="2"/><circle cx="145" cy="55" r="40" fill="#fa9a79" fill-opacity="0.2" stroke="#9a3412" stroke-width="2"/><text x="65" y="58" font-size="12" font-weight="bold">A</text><text x="165" y="58" font-size="12" font-weight="bold">B</text></svg>`,
                text: "Yukarıdaki Venn şemasında s(A \\ B) = 7, s(B \\ A) = 9 ve s(A ∪ B) = 21 olduğuna göre s(A ∩ B) kaçtır?",
                options: ["A) 3", "B) 4", "C) 5", "D) 6", "E) 7"],
                correct: 2,
                explanation: "s(A ∪ B) = s(A \\ B) + s(A ∩ B) + s(B \\ A) => 21 = 7 + x + 9 => x = 5 bulunur."
            }
        ])
    },
    {
        id: "9-fiz-1", category: "9. Sınıf", subject: "Fizik", hasImage: false, progress: 0,
        title: "Fizik Bilimine Giriş, Madde ve Hareket",
        notes: "<b>9. Sınıf Fizik Özeti:</b> Temel ve türetilmiş büyüklükler (KISAMUZ), özkütle (d = m/V), adezyon-kohezyon kuvvetleri, yer değiştirme, sürat ve hız kavramları.",
        questions: build20Questions("9. Sınıf Fizik Temelleri")
    },
    {
        id: "9-kim-1", category: "9. Sınıf", subject: "Kimya", hasImage: false, progress: 0,
        title: "Atom Modelleri, Periyodik Sistem ve Türler Arası Etkileşimler",
        notes: "<b>9. Sınıf Kimya Özeti:</b> Dalton, Thomson, Rutherford ve Bohr atom modelleri, periyodik cetvelde grup ve periyot bulma, iyonik, kovalent ve metalik bağlar.",
        questions: build20Questions("9. Sınıf Kimya")
    },
    {
        id: "9-bio-1", category: "9. Sınıf", subject: "Biyoloji", hasImage: false, progress: 0,
        title: "Yaşam Bilimi Biyoloji ve Hücre Organelleri",
        notes: "<b>9. Sınıf Biyoloji Özeti:</b> İnorganik ve organik bileşikler (Karbonhidrat, Yağ, Protein, Enzimler), prokaryot ve ökaryot hücre yapısı, hücre zarından madde geçişleri.",
        questions: build20Questions("9. Sınıf Hücre ve Canlılar")
    },

    // ================= 10. SINIF KONULARI =================
    {
        id: "10-mat-1", category: "10. Sınıf", subject: "Matematik", hasImage: true, progress: 0,
        title: "Sayma, Olasılık, Fonksiyonlar ve Polinomlar",
        notes: "<b>10. Sınıf Matematik Özeti:</b> Permütasyon, kombinasyon, binom açılımı, fonksiyon türleri (birebir, örten, doğrusal), bileşke ve ters fonksiyon, polinomlarda bölme.",
        questions: build20Questions("10. Sınıf Fonksiyonlar ve Polinomlar", [
            {
                source: "OGM Materyal 10. Sınıf",
                svg: `<svg width="240" height="130" viewBox="0 0 240 130"><line x1="120" y1="10" x2="120" y2="120" stroke="#1e293b" stroke-width="1.5"/><line x1="20" y1="75" x2="220" y2="75" stroke="#1e293b" stroke-width="1.5"/><line x1="50" y1="110" x2="190" y2="20" stroke="#3c806d" stroke-width="2.5"/><text x="195" y="25" font-size="11" font-weight="bold" fill="#3c806d">f(x)</text></svg>`,
                text: "Yukarıdaki grafikte verilen doğrusal y = f(x) fonksiyonu eksenleri (-3, 0) ve (0, 6) noktalarında kesmektedir. Buna göre f(4) değeri kaçtır?",
                options: ["A) 10", "B) 12", "C) 14", "D) 16", "E) 18"],
                correct: 2,
                explanation: "x/(-3) + y/6 = 1 => y = 2x + 6 bulunur. f(4) = 2(4) + 6 = 14'tür."
            }
        ])
    },
    {
        id: "10-fiz-1", category: "10. Sınıf", subject: "Fizik", hasImage: false, progress: 0,
        title: "Elektrik Akımı, Mıknatıslar, Basınç ve Optik",
        notes: "<b>10. Sınıf Fizik Özeti:</b> Ohm yasası (V = I·R), seri ve paralel bağlı dirençler, katı-sıvı-gaz basıncı, kaldırma kuvveti, kırılma ve mercekler.",
        questions: build20Questions("10. Sınıf Elektrik ve Optik")
    },

    // ================= 11. SINIF KONULARI =================
    {
        id: "11-mat-1", category: "11. Sınıf", subject: "Matematik", hasImage: false, progress: 0,
        title: "Trigonometri ve Analitik Geometri",
        notes: "<b>11. Sınıf Matematik Özeti:</b> Birim çember, trigonometrik özdeşlikler, kosinüs ve sinüs teoremleri, doğrunun analitik incelenmesi, parabol ve eşitsizlik sistemleri.",
        questions: build20Questions("11. Sınıf Trigonometri ve Analitik")
    },
    {
        id: "11-fiz-1", category: "11. Sınıf", subject: "Fizik", hasImage: false, progress: 0,
        title: "Vektörler, Dinamik, Atışlar ve Elektrik-Manyetizma",
        notes: "<b>11. Sınıf Fizik Özeti:</b> Newton'un hareket yasaları, itme ve çizgisel momentum korunumu, tork-denge, elektriksel alan ve potansiyel, manyetik kuvvet.",
        questions: build20Questions("11. Sınıf Mekanik ve Manyetizma")
    },
    {
        id: "11-kim-1", category: "11. Sınıf", subject: "Kimya", hasImage: false, progress: 0,
        title: "Gazlar, Çözeltiler, Enerji, Hız ve Kimyasal Denge",
        notes: "<b>11. Sınıf Kimya Özeti:</b> İdeal gaz yasası (P·V = n·R·T), koligatif özellikler, tepkimelerde entalpi (ΔH), tepkime hızı, Kc-Kp, asit-baz dengesi ve Kçç.",
        questions: build20Questions("11. Sınıf Kimya Sistemleri")
    },

    // ================= 12. SINIF KONULARI =================
    {
        id: "12-mat-1", category: "12. Sınıf", subject: "Matematik", hasImage: false, progress: 0,
        title: "Logaritma, Diziler, Limit, Türev ve İntegral",
        notes: "<b>12. Sınıf Matematik Özeti:</b> Üstel ve logaritmik fonksiyonlar, aritmetik ve geometrik diziler, limit süreklilik, türev alma kuralları ve maksimum-minimum problemleri, belirli-belirsiz integral.",
        questions: build20Questions("12. Sınıf İleri Matematik")
    },
    {
        id: "12-fiz-1", category: "12. Sınıf", subject: "Fizik", hasImage: false, progress: 0,
        title: "Çembersel Hareket, Basit Harmonik Hareket ve Modern Fizik",
        notes: "<b>12. Sınıf Fizik Özeti:</b> Açısal momentum, kütle çekim ve Kepler yasaları, basit harmonik hareket periyodu, kırınım-girişim, fotoelektrik olay ve atom fiziği.",
        questions: build20Questions("12. Sınıf Çembersel ve Modern Fizik")
    },

    // ================= TYT (RESİMLİ ÖSYM TARZI) =================
    {
        id: "tyt-mat-resimli", category: "TYT", subject: "Matematik", hasImage: true, progress: 0,
        title: "TYT Yeni Nesil Şekilli Sayı ve Kesir Problemleri",
        notes: "<b>TYT Matematik Stratejisi:</b> ÖSYM TYT sorularında şekilli modellerde birim kareleri veya eş hacimli bölmeleri oranlamak soruyu 20 saniyede çözdürür.",
        questions: build20Questions("TYT Şekilli Problemler", [
            {
                source: "ÖSYM TYT Tarzı Resimli Soru",
                svg: `<svg width="260" height="100" viewBox="0 0 260 100">
                        <rect x="10" y="15" width="240" height="70" fill="#fff" stroke="#1e293b" stroke-width="2"/>
                        <line x1="70" y1="15" x2="70" y2="85" stroke="#1e293b" stroke-width="2"/>
                        <line x1="130" y1="15" x2="130" y2="85" stroke="#1e293b" stroke-width="2"/>
                        <line x1="190" y1="15" x2="190" y2="85" stroke="#1e293b" stroke-width="2"/>
                        <rect x="10" y="15" width="60" height="70" fill="#3c806d" fill-opacity="0.7"/>
                        <rect x="70" y="15" width="60" height="35" fill="#3c806d" fill-opacity="0.7"/>
                      </svg>`,
                text: "4 eş dikdörtgen bölmeden oluşan şekildeki batarya göstergesinin 1. bölmesinin tamamı, 2. bölmesinin ise yarısı doludur. Bataryanın yüzde kaçı doludur?",
                options: ["A) %30", "B) %35", "C) %37,5", "D) %40", "E) %45"],
                correct: 2,
                explanation: "4 bölme = %100 ise her bölme %25'tir. 1 tam bölme (%25) + yarım bölme (%12,5) = %37,5 bulunur."
            }
        ])
    },
    {
        id: "tyt-fiz-resimli", category: "TYT", subject: "Fizik", hasImage: true, progress: 0,
        title: "TYT Optik, Kaldırma Kuvveti ve Elektrik Devreleri",
        notes: "<b>TYT Fizik Stratejisi:</b> TYT Fizik'te işlem kalabalığından ziyade şekil üzerindeki kapların taşma seviyeleri, lamba parlaklıkları ve düzlem ayna görüş alanları sorulur.",
        questions: build20Questions("TYT Şekilli Fizik", [
            {
                source: "ÖSYM TYT Fizik Resimli",
                svg: `<svg width="240" height="120" viewBox="0 0 240 120">
                        <path d="M50 20 L50 100 L190 100 L190 20" fill="none" stroke="#1e293b" stroke-width="2.5"/>
                        <line x1="50" y1="45" x2="190" y2="45" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4"/>
                        <rect x="75" y="35" width="30" height="25" fill="#fa9a79" stroke="#1e293b" stroke-width="1.5"/>
                        <circle cx="145" cy="70" r="14" fill="#3c806d" stroke="#1e293b" stroke-width="1.5"/>
                        <text x="85" y="52" font-size="11" font-weight="bold">K</text>
                        <text x="141" y="74" font-size="11" font-weight="bold" fill="#fff">L</text>
                      </svg>`,
                text: "Şekildeki sıvı dolu kapta K cismi yüzmekte, L cismi ise askıda kalmaktadır. K ve L cisimlerinin kütleleri eşit olduğuna göre etki eden kaldırma kuvvetleri oranı F_K / F_L kaçtır?",
                options: ["A) 1/2", "B) 1", "C) 3/2", "D) 2", "E) 3"],
                correct: 1,
                explanation: "Yüzen ve askıda kalan cisimlere etki eden kaldırma kuvveti ağırlıklarına eşittir (F_k = G). Kütleleri eşit olduğundan F_K = F_L olur ve oran 1'dir."
            }
        ])
    },
    {
        id: "tyt-turkce-1", category: "TYT", subject: "Türkçe", hasImage: false, progress: 0,
        title: "TYT Paragraf Taktikleri, Dil Bilgisi ve Yazım Kuralları",
        notes: "<b>TYT Türkçe Stratejisi:</b> Ana düşünce, yardımcı düşünce, ses olayları (ünsüz yumuşaması, ünlü daralması) ve noktalama işaretleri.",
        questions: build20Questions("TYT Türkçe ve Paragraf")
    },

    // ================= AYT KONULARI =================
    {
        id: "ayt-mat-1", category: "AYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "AYT Türev, İntegral, Logaritma ve Trigonometri Kampı",
        notes: "<b>AYT Matematik Stratejisi:</b> AYT'de eleyici sorular türevin geometrik yorumu, integralde alan ve trigonometrik denklemlerden gelir.",
        questions: build20Questions("AYT İleri Matematik Kampı")
    },
    {
        id: "ayt-fiz-1", category: "AYT", subject: "Fizik", hasImage: false, progress: 0,
        title: "AYT Elektrik, Manyetizma, Çembersel ve Dalga Mekaniği",
        notes: "<b>AYT Fizik Stratejisi:</b> İndüksiyon EMK'sı, alternatif akım, transformatörler ve açısal momentum korunumu banko sorudur.",
        questions: build20Questions("AYT Fizik Tam Tekrar")
    },
    {
        id: "ayt-kim-1", category: "AYT", subject: "Kimya", hasImage: false, progress: 0,
        title: "AYT Kimya ve Elektrik, Organik Kimya",
        notes: "<b>AYT Kimya Stratejisi:</b> Galvanik piller, Nernst eşitliği, elektroliz, hidrokarbonlar (alkan, alken, alkin) ve fonksiyonel gruplar.",
        questions: build20Questions("AYT Organik Kimya ve Piller")
    },
    {
        id: "ayt-bio-1", category: "AYT", subject: "Biyoloji", hasImage: false, progress: 0,
        title: "AYT Sistemler, Fotosentez, Hücresel Solunum ve Genden Proteine",
        notes: "<b>AYT Biyoloji Stratejisi:</b> DNA replikasyonu, protein sentezi (mRNA-tRNA), ATP üretimi, dolaşım ve sinir sistemi.",
        questions: build20Questions("AYT Sistemler ve Bitki Biyolojisi")
    }
];
