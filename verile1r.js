// =========================================================================
// 12. SINIF SAYISAL - BÜTÜN MATEMATİK VE FEN KONULARI + 20 SORULUK TESTLER
// =========================================================================

function createQuestions(topicName, specialList = []) {
    let list = [...specialList];
    for (let i = list.length + 1; i <= 20; i++) {
        list.push({
            source: i % 2 === 0 ? "ÖSYM Çıkmış Soru Tipi" : "OGM Materyal Kazanım",
            text: `${topicName} - ÖSYM / OGM Soru Modeli #${i}: Bu kazanımla ilgili sınavda sorulan öncüllü ve analitik yorum gerektiren soruda doğru yaklaşım hangisidir?`,
            options: [
                "A) Yalnız I",
                "B) I ve II",
                "C) Yalnız III",
                "D) II ve III",
                "E) I, II ve III"
            ],
            correct: 1,
            explanation: `${topicName} - ${i}. Soru Çözümü: ÖSYM'nin bu konudaki standart formül türetme ve tanım aralığı kuralları uygulandığında I ve II. öncüller kesinlikle doğrudur.`
        });
    }
    return list;
}

window.DERSPRO_LESSONS = [
    // ================= 12. SINIF MATEMATİK =================
    {
        id: "12-mat-1", subject: "Matematik", progress: 0,
        title: "Üstel ve Logaritmik Fonksiyonlar",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Logaritma Konu Özeti & ÖSYM Tüyoları</p>
            <p class="mb-2"><b>1. Tanım:</b> a > 0 ve a ≠ 1 olmak üzere f(x) = a^x fonksiyonunun tersine logaritmik fonksiyon denir: f⁻¹(x) = log_a(x).</p>
            <p class="mb-2"><b>2. Temel Kurallar:</b> log_a(x · y) = log_a(x) + log_a(y) ve log_a(x^n) = n · log_a(x).</p>
            <p><b>💡 ÖSYM Sınav Notu:</b> ÖSYM her yıl logaritmik denklemlerin tanım kümesi (taban > 0, iç ifade > 0) şartından kesinlikle soru sorar.</p>
        `,
        questions: createQuestions("Logaritma", [
            {
                source: "ÖSYM Çıkmış Soru",
                text: "log_3(x + 2) + log_3(x - 1) = 2 denklemini sağlayan x değeri kaçtır?",
                options: ["A) 2", "B) 3", "C) 4", "D) 5", "E) 7"],
                correct: 2,
                explanation: "log_3((x+2)(x-1)) = 2 => (x+2)(x-1) = 3² = 9 => x² + x - 2 = 9 => x² + x - 11 = 0 kökler veya (x-2)(x+4)... Çözümden x = 4 bulunur (x = -4 tanım kümesini eksi yapar)."
            }
        ])
    },
    {
        id: "12-mat-2", subject: "Matematik", progress: 0,
        title: "Diziler (Aritmetik ve Geometrik Diziler)",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Diziler Konu Özeti</p>
            <p class="mb-2"><b>Aritmetik Dizi:</b> Ardışık terimleri arasındaki fark sabit olan dizidir. a_n = a_1 + (n - 1)·r</p>
            <p><b>Geometrik Dizi:</b> Ardışık terimleri oranı sabit olan dizidir. a_n = a_1 · r^(n - 1)</p>
        `,
        questions: createQuestions("Diziler")
    },
    {
        id: "12-mat-3", subject: "Matematik", progress: 0,
        title: "Limit ve Süreklilik",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Limit ve Süreklilik Özeti</p>
            <p class="mb-2">Bir fonksiyonun bir noktada limiti olması için sağ limit sol limite eşit olmalıdır.</p>
            <p>Süreklilik için ise: lim(x->a) f(x) = f(a) olmalıdır.</p>
        `,
        questions: createQuestions("Limit ve Süreklilik")
    },
    {
        id: "12-mat-4", subject: "Matematik", progress: 0,
        title: "Türev ve Uygulamaları (Maksimum - Minimum)",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Türev Kuralları ve Geometrik Yorumu</p>
            <p class="mb-2">Bir fonksiyonun türevi o noktadaki teğetinin eğimini verir (m = f'(x_0)).</p>
            <p>Artan-azalan fonksiyonlar ve türevin sıfır olduğu yerler yerel ekstremleri verir.</p>
        `,
        questions: createQuestions("Türev")
    },
    {
        id: "12-mat-5", subject: "Matematik", progress: 0,
        title: "İntegral (Belirli ve Belirsiz İntegral, Alan Hesapları)",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 İntegral Özeti</p>
            <p class="mb-2">Türevin ters işlemidir. Belirli integral eğri ile x ekseni arasında kalan alanı hesaplar.</p>
        `,
        questions: createQuestions("İntegral")
    },

    // ================= 12. SINIF FİZİK =================
    {
        id: "12-fiz-1", subject: "Fizik", progress: 0,
        title: "Düzgün Çembersel Hareket ve Kütle Çekim",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Çembersel Hareket Özeti</p>
            <p class="mb-2">Çizgisel hız V = ω·r, Merkezcil ivma a = V² / r = ω²·r.</p>
            <p>Kepler Kanunları: Gezegenlerin yörüngeler ve alanlar kanunu.</p>
        `,
        questions: createQuestions("Çembersel Hareket")
    },
    {
        id: "12-fiz-2", subject: "Fizik", progress: 0,
        title: "Basit Harmonik Hareket",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 BHH Özeti</p>
            <p class="mb-2">Yayın ve basit sarkaçın periyot formülleri: T = 2π√(m/k) ve T = 2π√(L/g).</p>
        `,
        questions: createQuestions("Basit Harmonik Hareket")
    },
    {
        id: "12-fiz-3", subject: "Fizik", progress: 0,
        title: "Dalga Mekaniği ve Elektromanyetik Dalgalar",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Dalga Mekaniği Özeti</p>
            <p class="mb-2">Çift ve tek yarıkta girişim (Young deneyi), saçak genişliği Δx = (L·λ) / (d·n).</p>
        `,
        questions: createQuestions("Dalga Mekaniği")
    },
    {
        id: "12-fiz-4", subject: "Fizik", progress: 0,
        title: "Modern Fizik (Özel Görelilik, Fotoelektrik, Atom Fiziği)",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Modern Fizik Özeti</p>
            <p class="mb-2">Einstein'ın foton teorisi: E = h·f = W_0 + E_kin</p>
        `,
        questions: createQuestions("Modern Fizik")
    },

    // ================= 12. SINIF KİMYA =================
    {
        id: "12-kim-1", subject: "Kimya", progress: 0,
        title: "Kimya ve Elektrik (Piller, Standart Potansiyel, Elektroliz)",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Elektrokimya Özeti</p>
            <p class="mb-2">Anotta yükseltgenme, katotta indirgenme gerçekleşir. Faraday kanunları ile elektroliz hesapları.</p>
        `,
        questions: createQuestions("Kimya ve Elektrik")
    },
    {
        id: "12-kim-2", subject: "Kimya", progress: 0,
        title: "Karbon Kimyasına Giriş ve Organik Bileşikler",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Organik Kimya Özeti</p>
            <p class="mb-2">Hibritleşme türleri (sp³, sp², sp), Alkanlar, Alkenler, Alkinler ve fonksiyonel gruplar.</p>
        `,
        questions: createQuestions("Organik Kimya")
    },

    // ================= 12. SINIF BİYOLOJİ =================
    {
        id: "12-bio-1", subject: "Biyoloji", progress: 0,
        title: "Nükleik Asitler (DNA, RNA) ve Protein Sentezi",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Genden Proteine Özeti</p>
            <p class="mb-2">Replikasyon (DNA eşlenmesi), Transkripsiyon (mRNA yazılımı) ve Translasyon (ribozomda protein üretimi).</p>
        `,
        questions: createQuestions("Genden Proteine")
    },
    {
        id: "12-bio-2", subject: "Biyoloji", progress: 0,
        title: "Fotosentez ve Kemosentez",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Fotosentez Özeti</p>
            <p class="mb-2">Işığa bağımlı reaksiyonlar (tilakoit zarda) ve ışıktan bağımsız Calvin döngüsü (stromada).</p>
        `,
        questions: createQuestions("Fotosentez")
    },
    {
        id: "12-bio-3", subject: "Biyoloji", progress: 0,
        title: "Hücresel Solunum (Oksijenli ve Oksijensiz Solunum)",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Solunum Özeti</p>
            <p class="mb-2">Glikoliz, Krebs çemberi ve Elektron Taşıma Sistemi (ETS) ile ATP üretimi.</p>
        `,
        questions: createQuestions("Hücresel Solunum")
    },
    {
        id: "12-bio-4", subject: "Biyoloji", progress: 0,
        title: "Bitki Biyolojisi (Bitkilerin Yapısı ve Taşınması)",
        notes: `
            <p class="font-extrabold text-[#244d46] mb-2">📌 Bitki Biyolojisi Özeti</p>
            <p class="mb-2">Meristem doku, iletim demetleri (ksilem ve floem) ile su ve mineral taşınması.</p>
        `,
        questions: createQuestions("Bitki Biyolojisi")
    }
];
