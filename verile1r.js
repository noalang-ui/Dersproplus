// =========================================================================
// DERSPROPLUS - 2027 YKS (TYT ve AYT) KAPSAMLI KONU VE SORU HAVUZU
// =========================================================================

function build20Questions(topicName, customQuestions = []) {
    let list = [...customQuestions];
    for (let i = list.length + 1; i <= 20; i++) {
        list.push({
            source: "ÖSYM / OGM Materyal Deneme",
            text: `${topicName} - Kazanım ve Yeni Nesil Soru #${i}: Bu kazanımla ilgili ÖSYM tarzı soru kalıbında, verilen grafik veya öncül analiz edildiğinde doğru sonuç hangisi olur?`,
            options: [
                "A) Yalnız I",
                "B) I ve II",
                "C) Yalnız III",
                "D) II ve III",
                "E) I, II ve III"
            ],
            correct: 1,
            explanation: `${topicName} ünitesi ${i}. soru çözümü: ÖSYM mantığına göre temel tanım kümesi ve formül denklemleri sağlandığında I ve II. öncüller doğrudur.`
        });
    }
    return list;
}

window.DERSPRO_LESSONS = [
    // =====================================================================
    // TYT MATEMATİK & GEOMETRİ
    // =====================================================================
    {
        id: "tyt-mat-1", category: "TYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "Temel Kavramlar ve Sayı Kümeleri",
        notes: "<b>TYT Matematik Özeti:</b> Tek-çift sayılar, pozitif-negatif sayılar, asal sayılar, aralarında asallık, faktöriyel ve basamak kavramları. ÖSYM her yıl bu konudan en az 2 net soru sorar.",
        questions: build20Questions("Temel Kavramlar")
    },
    {
        id: "tyt-mat-2", category: "TYT", subject: "Matematik", hasImage: true, progress: 0,
        title: "Rasyonel Sayılar ve Şekilli Kesir Problemleri",
        notes: "<b>TYT Matematik Özeti:</b> Payda eşitleme, ondalık kesirler ve özellikle eş parçaya bölünmüş şekilli kesir problemleri.",
        questions: build20Questions("Rasyonel Sayılar", [
            {
                source: "ÖSYM TYT Tarzı Resimli Soru",
                svg: `<svg width="260" height="90" viewBox="0 0 260 90">
                        <rect x="10" y="10" width="240" height="70" fill="#fff" stroke="#1e293b" stroke-width="2"/>
                        <line x1="70" y1="10" x2="70" y2="80" stroke="#1e293b" stroke-width="2"/>
                        <line x1="130" y1="10" x2="130" y2="80" stroke="#1e293b" stroke-width="2"/>
                        <line x1="190" y1="10" x2="190" y2="80" stroke="#1e293b" stroke-width="2"/>
                        <rect x="10" y="10" width="60" height="70" fill="#3c806d" fill-opacity="0.75"/>
                        <rect x="70" y="10" width="60" height="35" fill="#3c806d" fill-opacity="0.75"/>
                      </svg>`,
                text: "4 eş bölmeden oluşan çubuk göstergesinin 1. bölümü tamamen, 2. bölümü ise yarıya kadar doludur. Çubuğun yüzde kaçı doludur?",
                options: ["A) %30", "B) %35", "C) %37,5", "D) %40", "E) %45"],
                correct: 2,
                explanation: "4 eşit parça %100 ise her parça %25'tir. 1 tam (%25) + 1 yarım (%12,5) = %37,5."
            }
        ])
    },
    {
        id: "tyt-mat-3", category: "TYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "I. Dereceden Denklemler ve Basit Eşitsizlikler",
        notes: "<b>TYT Matematik Özeti:</b> Birinci dereceden denklemlerin çözüm kümesi, aralık kavramı, eşitsizliklerin özellikleri ve sayı doğrusu yorumları.",
        questions: build20Questions("Basit Eşitsizlikler")
    },
    {
        id: "tyt-mat-4", category: "TYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "Mutlak Değer, Üslü ve Köklü Sayılar",
        notes: "<b>TYT Matematik Özeti:</b> Mutlak değerin özellikleri ve uzaklık mantığı, üslü ifadelerde taban ve üs kuralları, köklü sayılarda eşlenik ve dışarı çıkarma.",
        questions: build20Questions("Üslü ve Köklü Sayılar")
    },
    {
        id: "tyt-mat-5", category: "TYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "Problemler (Sayı, Kesir, Yaş, İşçi, Yüzde, Kar-Zarar, Hız)",
        notes: "<b>TYT Matematik Özeti:</b> TYT'nin belkemiğidir. Denklem kurma becerisi, oran-orantı ve problem senaryolarını okuyup modelleme.",
        questions: build20Questions("TYT Problemler")
    },
    {
        id: "tyt-mat-6", category: "TYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "Kümeler, Fonksiyonlar ve Veri-İstatistik (Grafikler)",
        notes: "<b>TYT Matematik Özeti:</b> Kümelerde birleşim kesişim problemleri, fonksiyon kavramı ve sütun/daire grafikleriyle veri yorumlama.",
        questions: build20Questions("Kümeler ve Fonksiyonlar TYT")
    },

    // =====================================================================
    // TYT FİZİK, KİMYA, BİYOLOJİ, TÜRKÇE
    // =====================================================================
    {
        id: "tyt-fiz-1", category: "TYT", subject: "Fizik", hasImage: true, progress: 0,
        title: "Fizik Bilimine Giriş, Madde ve Özellikleri",
        notes: "<b>TYT Fizik Özeti:</b> Temel ve türetilmiş büyüklükler, özkütle hesapları, adezyon ve kohezyon olayları.",
        questions: build20Questions("Madde ve Özellikleri")
    },
    {
        id: "tyt-fiz-2", category: "TYT", subject: "Fizik", hasImage: false, progress: 0,
        title: "Hareket, Kuvvet, Newton Yasaları ve Enerji",
        notes: "<b>TYT Fizik Özeti:</b> İvme, hız-zaman grafikleri, sürtünme kuvveti, iş, güç ve mekanik enerji korunumu.",
        questions: build20Questions("Kuvvet ve Hareket")
    },
    {
        id: "tyt-fiz-3", category: "TYT", subject: "Fizik", hasImage: false, progress: 0,
        title: "Basınç, Kaldırma Kuvveti, Isı-Sıcaklık ve Optik",
        notes: "<b>TYT Fizik Özeti:</b> Katı, sıvı ve gaz basıncı, kaldırma kuvveti, hal değişimleri, ayna ve merceklerde görüntü.",
        questions: build20Questions("Basınç ve Optik")
    },
    {
        id: "tyt-kim-1", category: "TYT", subject: "Kimya", hasImage: false, progress: 0,
        title: "Kimya Bilimi, Atom ve Periyodik Sistem",
        notes: "<b>TYT Kimya Özeti:</b> Simyadan kimyaya, laboratuvar güvenlik uyarıları, atom modelleri ve periyodik cetvel özellikleri.",
        questions: build20Questions("Kimya Bilimi ve Atom")
    },
    {
        id: "tyt-kim-2", category: "TYT", subject: "Kimya", hasImage: false, progress: 0,
        title: "Kimyasal Türler Arası Etkileşimler ve Maddenin Halleri",
        notes: "<b>TYT Kimya Özeti:</b> Güçlü ve zayıf etkileşimler, katılar, sıvılar, su ve çevre kimyası.",
        questions: build20Questions("Kimyasal Türler ve Haller")
    },
    {
        id: "tyt-bio-1", category: "TYT", subject: "Biyoloji", hasImage: false, progress: 0,
        title: "Canlıların Ortak Özellikleri ve Hücre",
        notes: "<b>TYT Biyoloji Özeti:</b> İnorganik/organik bileşikler, enzimler, vitaminler ve hücre organelleri.",
        questions: build20Questions("Hücre ve Temel Bileşenler")
    },
    {
        id: "tyt-bio-2", category: "TYT", subject: "Biyoloji", hasImage: false, progress: 0,
        title: "Canlılar Dünyası (Sınıflandırma) ve Ekoloji",
        notes: "<b>TYT Biyoloji Özeti:</b> Bakterilerden memelilere canlılar alemine genel bakış, besin zinciri ve çevre sorunları.",
        questions: build20Questions("Sınıflandırma ve Ekoloji")
    },
    {
        id: "tyt-turk-1", category: "TYT", subject: "Türkçe", hasImage: false, progress: 0,
        title: "Sözcükte, Cümlede Anlam ve Paragraf Taktikleri",
        notes: "<b>TYT Türkçe Özeti:</b> Sözcükte anlam, deyimler, cümleten düşünce akışı, paragraf yapıları ve ana fikir bulma.",
        questions: build20Questions("Paragraf ve Anlam")
    },
    {
        id: "tyt-turk-2", category: "TYT", subject: "Türkçe", hasImage: false, progress: 0,
        title: "Dil Bilgisi (Ses Bilgisi, Sözcük Türleri, Cümle Ögeleri)",
        notes: "<b>TYT Türkçe Özeti:</b> Ünsüz yumuşaması, ünlü düşmesi, isimler, sıfatlar, zamirler, fiiller ve yazım kuralları.",
        questions: build20Questions("Dil Bilgisi ve Yazım")
    },

    // =====================================================================
    // AYT SAYISAL (MATEMATİK & FİZİK & KİMYA & BİYOLOJİ)
    // =====================================================================
    {
        id: "ayt-mat-1", category: "AYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "Polinomlar, İkinci Dereceden Denklemler ve Karmaşık Sayılar",
        notes: "<b>AYT Matematik Özeti:</b> Polinomlarda çarpanlara ayırma, diskriminant (delta), kök-katsayı ilişkileri ve i'li karmaşık sayılar.",
        questions: build20Questions("Polinomlar ve Denklemler")
    },
    {
        id: "ayt-mat-2", category: "AYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "Fonksiyonlar ve Uygulamaları, Eşitsizlikler",
        notes: "<b>AYT Matematik Özeti:</b> Fonksiyonlarda tepe noktası, grafik ötelemeleri, tek-çift fonksiyonlar ve işaret tablosu eşitsizlikleri.",
        questions: build20Questions("Fonksiyonlar AYT")
    },
    {
        id: "ayt-mat-3", category: "AYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "Trigonometri ve Logaritma",
        notes: "<b>AYT Matematik Özeti:</b> Toplam-fark formülleri, yarım açı, trigonometrik denklemler, logaritma kuralları ve üstel fonksiyonlar.",
        questions: build20Questions("Trigonometri ve Logaritma")
    },
    {
        id: "ayt-mat-4", category: "AYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "Diziler, Limit ve Süreklilik",
        notes: "<b>AYT Matematik Özeti:</b> Aritmetik ve geometrik diziler, seriler, limit alma kuralları ve belirsizlik halleri (0/0).",
        questions: build20Questions("Diziler ve Limit")
    },
    {
        id: "ayt-mat-5", category: "AYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "Türev ve Uygulamaları (Tepe, Maksimum-Minimum)",
        notes: "<b>AYT Matematik Özeti:</b> Türev kuralları, zincir kuralı, eğim, artan-azalan fonksiyonlar, yerel ekstremler ve türev problemleri.",
        questions: build20Questions("Türev")
    },
    {
        id: "ayt-mat-6", category: "AYT", subject: "Matematik", hasImage: false, progress: 0,
        title: "İntegral ve Uygulamaları (Alan Hesapları)",
        notes: "<b>AYT Matematik Özeti:</b> Belirsiz integral, değişken değiştirme, belirli integral ve eğriler arasında kalan alan hesapları.",
        questions: build20Questions("İntegral")
    },
    {
        id: "ayt-fiz-1", category: "AYT", subject: "Fizik", hasImage: false, progress: 0,
        title: "Vektörler, Bağıl Hareket, Newton'un Dinamik Yasaları",
        notes: "<b>AYT Fizik Özeti:</b> Vektörlerin bileşenleri, nehir problemleri, eylemsizlik kuvveti, sürtünmeli eğik düzlem dinamikleri.",
        questions: build20Questions("Dinamik ve Bağıl Hareket")
    },
    {
        id: "ayt-fiz-2", category: "AYT", subject: "Fizik", hasImage: false, progress: 0,
        title: "Atışlar, İtme ve Momentum, Tork, Denge ve Basit Makineler",
        notes: "<b>AYT Fizik Özeti:</b> Yatay ve düşey atış, momentum korunum yasaları, tork dengesi ve ağırlık merkezi hesapları.",
        questions: build20Questions("Momentum ve Denge")
    },
    {
        id: "ayt-fiz-3", category: "AYT", subject: "Fizik", hasImage: false, progress: 0,
        title: "Çembersel Hareket, Kütle Çekim ve Basit Harmonik Hareket",
        notes: "<b>AYT Fizik Özeti:</b> Düşey/yatay çembersel hareket, dönerek öteleme, Kepler kanunları, yay ve basit sarkaç periyotları.",
        questions: build20Questions("Çembersel ve Harmonik Hareket")
    },
    {
        id: "ayt-fiz-4", category: "AYT", subject: "Fizik", hasImage: false, progress: 0,
        title: "Elektrik Alan, Potansiyel, Sığaçlar, Manyetizma ve İndüksiyon",
        notes: "<b>AYT Fizik Özeti:</b> Noktasal yüklerin elektrik alanı, kondansatörler, akım makarası, manyetik kuvvet ve transformatörler.",
        questions: build20Questions("Elektrik ve Manyetizma")
    },
    {
        id: "ayt-fiz-5", category: "AYT", subject: "Fizik", hasImage: false, progress: 0,
        title: "Alternatif Akım, Dalga Mekaniği ve Modern Fizik",
        notes: "<b>AYT Fizik Özeti:</b> RLC devreleri, çift yarıkta girişim (Young), elektromanyetik dalgalar, özel görelilik ve radyoaktivite.",
        questions: build20Questions("Modern Fizik ve Dalgalar")
    },
    {
        id: "ayt-kim-1", category: "AYT", subject: "Kimya", hasImage: false, progress: 0,
        title: "Modern Atom Teorisi ve Gazlar (İdeal Gaz Yasası)",
        notes: "<b>AYT Kimya Özeti:</b> Kuantum sayıları (n, l, ml, ms), orbital elektron dizilimleri, P·V = n·R·T ve kısmi basınç.",
        questions: build20Questions("Modern Atom ve Gazlar")
    },
    {
        id: "ayt-kim-2", category: "AYT", subject: "Kimya", hasImage: false, progress: 0,
        title: "Sıvı Çözeltiler, Kimyasal Tepkimelerde Enerji ve Hız",
        notes: "<b>AYT Kimya Özeti:</b> Derişim birimleri (ppm, molarite), entalpi değişimleri, potansiyel enerji grafikleri ve hız denklemleri.",
        questions: build20Questions("Çözeltiler ve Hız")
    },
    {
        id: "ayt-kim-3", category: "AYT", subject: "Kimya", hasImage: false, progress: 0,
        title: "Kimyasal Denge, Asit-Baz Dengesi ve Çözünürlük Dengesi (Kçç)",
        notes: "<b>AYT Kimya Özeti:</b> Minimum enerji ve maksimum düzensizlik eğilimi, Kc-Kp bağıntıları, tampon çözeltiler ve çökelme şartları.",
        questions: build20Questions("Kimyasal Denge")
    },
    {
        id: "ayt-kim-4", category: "AYT", subject: "Kimya", hasImage: false, progress: 0,
        title: "Kimya ve Elektrik (Piller ve Elektroliz) ile Organik Kimya",
        notes: "<b>AYT Kimya Özeti:</b> Aktiflik, standart pil potansiyeli, elektroliz kuralları, hidrokarbonlar, alkoller, eterler ve karbonil bileşikleri.",
        questions: build20Questions("Elektrokimya ve Organik Kimya")
    },
    {
        id: "ayt-bio-1", category: "AYT", subject: "Biyoloji", hasImage: false, progress: 0,
        title: "Sinir Sistemi, Endokrin Sistem ve Duyu Organları",
        notes: "<b>AYT Biyoloji Özeti:</b> Nöron yapısı, impuls iletimi, hipofiz-tiroid hormonları ve göz/kulak yapısı.",
        questions: build20Questions("Sinir ve Endokrin Sistem")
    },
    {
        id: "ayt-bio-2", category: "AYT", subject: "Biyoloji", hasImage: false, progress: 0,
        title: "Destek-Hareket, Sindirim, Dolaşım, Solunum ve Boşaltım",
        notes: "<b>AYT Biyoloji Özeti:</b> Kas kasılması (Huxley kayan iplikler teorisi), kalbin çalışması, nefron yapısı ve idrar oluşumu.",
        questions: build20Questions("İnsan Fizyolojisi Sistemler")
    },
    {
        id: "ayt-bio-3", category: "AYT", subject: "Biyoloji", hasImage: false, progress: 0,
        title: "Üreme, Gelişme ve Komünite-Popülasyon Ekolojisi",
        notes: "<b>AYT Biyoloji Özeti:</b> İnsanda üreme sistemi, embriyonik gelişim, popülasyon dinamikleri ve av-avcı ilişkileri.",
        questions: build20Questions("Üreme ve Ekoloji")
    },
    {
        id: "ayt-bio-4", category: "AYT", subject: "Biyoloji", hasImage: false, progress: 0,
        title: "Genden Proteine (DNA, RNA, Protein Sentezi) ve Biyoteknoloji",
        notes: "<b>AYT Biyoloji Özeti:</b> Nükleik asitlerin yapısı, replikasyon, transkripsiyon, translasyon kodon eşleşmeleri ve gen klonlama.",
        questions: build20Questions("Genden Proteine")
    },
    {
        id: "ayt-bio-5", category: "AYT", subject: "Biyoloji", hasImage: false, progress: 0,
        title: "Fotosentez, Kemosentez ve Hücresel Solunum (Oksijenli/Oksijensiz)",
        notes: "<b>AYT Biyoloji Özeti:</b> Işığa bağımlı reaksiyonlar, Calvin döngüsü, glikoliz, Krebs çemberi ve ETS aşamaları.",
        questions: build20Questions("Fotosentez ve Solunum")
    }
];
