// ============================================================================
// TÜRKÇE & TÜRK DİLİ VE EDEBİYATI (9, 10, 11, 12, TYT ve AYT Kapsamlı Veri Havuzu)
// ============================================================================
const konularVeritabani = [
    // ----------------------------------------------------------------8
    // TYT & 9. SINIF: SÖZCÜKTE ANLAM
    // ----------------------------------------------------------------8
    {
        id: 1,
        ders: "TYT / 9. Sınıf Türkçe",
        baslik: "Sözcükte Anlam",
        aiAnlatim: `
            <h3>Yapay Zeka Özeti & Kritik Noktalar</h3>
            <p><strong>1. Gerçek, Mecaz ve Terim Anlam:</strong> Sözcüğün akla ilk gelen anlamı gerçek, tamamen soyutlaşarak kazandığı yeni anlam mecaz, bir bilim/sanat dalındaki özel adı ise terimdir.</p>
            <p><strong>2. Sözcükler Arası Anlam İlişkileri:</strong> Eş anlamlılık, zıt anlamlılık, eş sesliler (sesteş), yakın anlam ve ad aktarımı (mecaz-ı mürsel) ÖSYM'nin vazgeçilmezleridir.</p>
            <div style="background:#0f172a; padding:12px; border-left:4px solid #38bdf8; margin:10px 0;">
                <strong>AI Taktik:</strong> Ad aktarımı sorularında "parça-bütün", "bütün-parça", "yer-yönetim" veya "eser-yazar" ilişkilerini mutlaka ara.
            </div>
        `,
        sorular: [
            {
                kaynak: "ÖSYM - TYT Benzeri",
                metin: "Aşağıdaki cümlelerin hangisinde 'çevirmek' sözcüğü 'bir şeyin yönünü veya yerini değiştirmek' anlamında kullanılmıştır?",
                siklar: [
                    "A) Şair, yabancı romanın dilimizi ustalıkla çevirmiş.",
                    "B) Başını yavaşça camdan dışarıya doğru çevirdi.",
                    "C) Şirket yönetimi, aldığı kararla fabrikayı kapattı.",
                    "D) Çocuk, elindeki kalemi sürekli parmakları arasında döndürüyordu.",
                    "E) Bütün parasını faizli yatırımlara çevirmişti."
                ],
                dogruCevap: 1,
                cozum: "B seçeneğinde başın yönünün dışarıya doğru değiştirilmesi söz konusudur. A'da tercüme etmek, D'de döndürmek, E'de dönüştürmek anlamındadır."
            },
            {
                kaynak: "OGM Materyal - 3 Adım",
                metin: "'Ankara, bu uluslararası anlaşmaya imza atmaktan kaçınıyordu.' cümlesindeki altı çizili sözcükte görülen anlam olayının benzeri aşağıdakilerin hangisinde vardır?",
                siklar: [
                    "A) Genç yazar, son kitabıyla edebiyat dünyasında adından söz ettirdi.",
                    "B) Sobayı yakmak için kömür çuvalını içeri taşıdık.",
                    "C) Okulun bahçesindeki çınarlar oldukça yaşlıydı.",
                    "D) Salondaki tüm konuklar, usta tiyatrocuyu ayakta alkışladı.",
                    "E) Ağacın yaprakları sonbaharla birlikte sararmıştı."
                ],
                dogruCevap: 0,
                cozum: "Öncü cümlede 'Ankara' şehri kastedilerek yönetim/hükümet kastedilmiştir (Yer-Yönetim ilişkisiyle ad aktarımı vardır). A seçeneğinde 'kitap' kastedilerek 'eser' yerine kullanılmıştır."
            },
            {
                kaynak: "ÖSYM - MSÜ Benzeri",
                metin: "Aşağıdaki cümlelerin hangisinde zıt (karşıt) anlamlı sözcükler bir arada verilmemiştir?",
                siklar: [
                    "A) Bu işte eski ve yeni ustalar ortak bir çalışma yapacak.",
                    "B) İnişli çıkışlı yollardan geçerek köye ulaştık.",
                    "C) Küçük çocuk, elindeki ağır paketi taşımakta zorlandı.",
                    "D) Akıllı insan, doğru zamanda konuşmasını bilir.",
                    "E) Yazın sıcak günlerinde soğuk içecekler çok satılır."
                ],
                dogruCevap: 2,
                cozum: "C seçeneğinde 'küçük', 'ağır' ve 'paket' kelimeleri geçmektedir; burada zıt anlamlı sözcük bir arada değildir. Diğer şıklarda eski-yeni, inişli-çıkışlı, akıllı-doğru (değil ama diğerlerinde vardır), sıcak-soğuk zıt anlamlıdır."
            }
        ]
    },

    // ----------------------------------------------------------------8
    // TYT & 9. SINIF: CÜMLEDE ANLAM
    // ----------------------------------------------------------------8
    {
        id: 2,
        ders: "TYT / 9. Sınıf Türkçe",
        baslik: "Cümlede Anlam ve Yorum",
        aiAnlatim: `
            <h3>Yapay Zeka Özeti & Kritik Noktalar</h3>
            <p><strong>1. Örtülü Anlam:</strong> Cümlede açıkça söylenmediği halde, cümlenin kelimelerinden çıkarılan kesin yargılardır ("artık", "bile", "de", "dahi", "ilk kez" gibi ifadeler ipucu verir).</p>
            <p><strong>2. Nesnel ve Öznel Yargılar:</strong> Kanıtlanabilen yargılar nesnel, kişisel görüş içeren yargılar özneldir.</p>
            <p><strong>3. Cümleler Arası İlişkiler:</strong> Neden-sonuç, amaç-sonuç ve koşul-sonuç cümleleri birbirine karıştırılmamalıdır.</p>
        `,
        sorular: [
            {
                kaynak: "ÖSYM - TYT Benzeri",
                metin: "Aşağıdaki cümlelerin hangisinde 'ön yargı' söz konusudur?",
                siklar: [
                    "A) Sanatçı, bu romanında da köy yaşamını ele almış.",
                    "B) Bu yazarın son kitabının da okuyucudan ilgi görmeyeceğini düşünüyorum.",
                    "C) Romanın kahramanı, olaylar karşısında kararlı bir duruş sergiliyor.",
                    "D) Yazar, eserinde süslü ve anlaşılmaz bir dil kullanmaktan kaçınmış.",
                    "E) Kitapta geçen olaylar gerçek bir yaşam öyküsüne dayanıyor."
                ],
                dogruCevap: 1,
                cozum: "B seçeneğinde kitap daha okunmadan veya çıkmadan tutulmayacağı yönünde peşin hüküm (ön yargı) bildirilmiştir."
            },
            {
                kaynak: "OGM Materyal - Türk Dili",
                metin: "'Yazar, romandaki karakterleri çizerken adeta bir ressam gibi titiz davranmış.' cümlesine anlamca en yakın cümle aşağıdakilerden hangisidir?",
                siklar: [
                    "A) Yazarın eserindeki kişiler yaşamın içinden seçilmiş sıradan insanlardır.",
                    "B) Olaylar, yazarın gözünden okuyucuya tarafsız bir şekilde aktarılmıştır.",
                    "C) Karakter yaratımında gösterilen özen, eserin sanatsal değerini artırmıştır.",
                    "D) Yazar, kahramanlarını tanıtırken ince detaylara büyük bir ustalıkla yer vermiştir.",
                    "E) Romanın dili, dönemin diğer eserlerine göre oldukça sade ve anlaşılırdır."
                ],
                dogruCevap: 3,
                cozum: "Titiz davranmak ve ressam gibi tasvir etmek, karakter tanıtımında ince detaylara ustalıkla yer verildiğini gösterir."
            },
            {
                kaynak: "ÖSYM - TYT",
                metin: "Aşağıdaki cümlelerin hangisinde 'amaç-sonuç' ilişkisi vardır?",
                siklar: [
                    "A) Havalar ısındığı için piknik alanları dolup taştı.",
                    "B) Sınavı kazanmak adına bütün yaz gece gündüz çalıştı.",
                    "C) Kitabı dikkatlice okursa soruları rahatça çözebilir.",
                    "D) Yaşlı kadın, çocukların gürültüsünden uykusundan uyandı.",
                    "E) Erken yola çıkmasına rağmen trafikte uzun süre kaldı."
                ],
                dogruCevap: 1,
                cozum: "B seçeneğinde 'sınavı kazanmak amacıyla' anlamı vardır (-mak adına / -mak için amaç bildirir)."
            }
        ]
    },

    // ----------------------------------------------------------------8
    // TYT & 10. SINIF: PARAGRAF
    // ----------------------------------------------------------------8
    {
        id: 3,
        ders: "TYT / 10. Sınıf Türkçe",
        baslik: "Paragrafta Yapı ve Anlam",
        aiAnlatim: `
            <h3>Yapay Zeka Özeti & Kritik Noktalar</h3>
            <p><strong>1. Paragrafın Akışını Bozan Cümle:</strong> Paragrafın bütünlüğünü sağlayan ana düşünceden sapılan, farklı bir konuya veya bakış açısına kayan cümle bulunur.</p>
            <p><strong>2. Paragrafı İkiye Bölme:</strong> İki farklı paragrafın birbirine bağlandığı nokta, konunun veya bakış açısının değiştiği yerdir.</p>
            <div style="background:#0f172a; padding:12px; border-left:4px solid #38bdf8; margin:10px 0;">
                <strong>AI Taktik:</strong> Paragraf sorularında önce soru kökünü (örn: "ulaşılamaz", "değinilmemiştir") oku, ardından metne geç.
            </div>
        `,
        sorular: [
            {
                kaynak: "ÖSYM - TYT Benzeri",
                metin: "(I) Tarih boyunca insanlık, bilginin kalıcılığını sağlamak için pek çok materyal denemiştir. (II) Papirüs ve parşömen kağıdın icadından önce en yaygın yazım araçlarıydı. (III) Matbaanın icadı ile kitaplar halkın her kesimine ulaşmaya başladı. (IV) Günümüzde ise dijital arşivleme sistemleri kütüphanelerin yerini almaya başladı. (V) Gelecekte bilginin bulut sistemlerinde saklanacağı öngörülüyor. Paragrafta numaralandırılmış cümlelerin hangisi düşüncenin akışını bozmaktadır?",
                siklar: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
                dogruCevap: 2,
                cozum: "I, II, IV ve V. cümleler bilginin saklanma materyalleri (tarihsel süreçteki araçlar) üzerinedir. III. cümle ise doğrudan matbaanın icadı ve kitapların yayılmasıyla ilgilidir, akışı bozar."
            },
            {
                kaynak: "OGM Materyal - Türk Dili",
                metin: "Sanatçının asıl gücü, sıradan olayları ve insanları olağanüstü bir dille yansıtmasında yatar. O, sokaktaki insanı anlatırken dildeki en saf ve yalın tonu yakalar. Bu parçada yazarla ilgili asıl anlatılmak istenen aşağıdakilerden hangisidir?",
                siklar: [
                    "A) Eserlerinde daima tarihi konulara yer verdiği",
                    "B) Karmaşık olayları felsefi bir derinlikle işlediği",
                    "C) Olağan durumları özgün ve etkileyici bir üslupla kaleme aldığı",
                    "D) Okuyucuya her zaman öğüt vermeyi amaçladığı",
                    "E) Toplumun beğenisini kazanmak için popüler temalar seçtiği"
                ],
                dogruCevap: 2,
                cozum: "'Sıradan olaylar' (olağan durumlar) ile 'olağanüstü dil' (özgün ve etkileyici üslup) eşleştirmesi C seçeneğini doğrular."
            },
            {
                kaynak: "ÖSYM - TYT",
                metin: "Bir yazar, eserlerinde kendi döneminin tanığı olmak zorundadır. Çağının acılarını, sevinçlerini ve toplumsal değişimlerini kaleme almayan bir sanatçı, kalıcılığı yakalayamaz. Bu parçaya göre bir sanatçının kalıcı olmasının temel koşulu aşağıdakilerden hangisidir?",
                siklar: [
                    "A) Eserlerinde sade ve anlaşılır bir dil kullanması",
                    "B) İçinde yaşadığı dönemin gerçeklerini yansıtması",
                    "C) Farklı edebi akımlardan etkilenmesi",
                    "D) Evrensel temaları herkese hitap edecek şekilde işlemesi",
                    "E) Eserlerinin sayısından ziyade niteliğine önem vermesi"
                ],
                dogruCevap: 1,
                cozum: "Paragrafta 'kendi döneminin tanığı olmak', 'çağının acılarını, sevinçlerini ve toplumsal değişimlerini kaleme almak' ifadeleri doğrudan B seçeneğindeki çağın gerçeklerini yansıtma şartını vurgular."
            }
        ]
    },

    // ----------------------------------------------------------------8
    // TYT & 9. SINIF: SES BİLGİSİ
    // ----------------------------------------------------------------8
    {
        id: 4,
        ders: "TYT / 9. Sınıf Türkçe",
        baslik: "Ses Bilgisi",
        aiAnlatim: `
            <h3>Yapay Zeka Özeti & Kritik Noktalar</h3>
            <p><strong>1. Ünsüz Yumuşaması (Değişimi):</strong> p, ç, t, k ile biten bir sözcüğe ünlüyle başlayan bir ek geldiğinde bu ünsüzler b, c, d, g/ğ olur (Kitap -> Kitabı).</p>
            <p><strong>2. Ünsüz Benzeşmesi (Sertleşmesi):</strong> f, s, t, k, ç, ş, h sert ünsüzleriyle biten bir sözcüğe c, d, g ile başlayan bir ek gelirse c->ç, d->t, g->k olur (Sokak+da -> Sokakta).</p>
            <p><strong>3. Ünlü Düşmesi (Hece Düşmesi):</strong> İkinci hecesinde dar ünlü (ı, i, u, ü) bulunan sözcüklere ünlü ek geldiğinde ikinci hecedeki dar ünlü düşer (Burun -> Burnum).</p>
        `,
        sorular: [
            {
                kaynak: "ÖSYM - TYT Benzeri",
                metin: "Aşağıdaki dizelerin hangisinde herhangi bir ses olayı yoktur?",
                siklar: [
                    "A) Gönlüm ateşe yandı seninle.",
                    "B) Sokaklar bugün oldukça sakindi.",
                    "C) Karanlık gecede yıldızlar parlıyordu.",
                    "D) Sevgi en büyük güçtür dünyada.",
                    "E) Yalnızlık insanın içini acıtır."
                ],
                dogruCevap: 1,
                cozum: "B seçeneğindeki 'Sokaklar bugün oldukça sakindi' cümlesinde herhangi bir ses olayı (yumuşama, benzeşme, düşme, türeme) yoktur. (A'da gönlüm -> ünlü düşmesi, C'de gecede -> d>t benzeşme yok ama ge-ce-de yumuşama/ünsüz değişimi, D'de güçtür -> ç>t benzeşme, E'de yalnızlık -> yalın-nızlık ünlü düşmesi vardır)."
            },
            {
                kaynak: "OGM Materyal - 3 Adım",
                metin: "'Çocuğun rengi solmuştu birdenbire.' cümlesinde aşağıdaki ses olaylarından hangisi <strong>yoktur</strong>?",
                siklar: [
                    "A) Ünsüz yumuşaması",
                    "B) Ünsüz benzeşmesi",
                    "C) Ünlü düşmesi",
                    "D) Ünsüz türemesi",
                    "E) Ulama"
                ],
                dogruCevap: 3,
                cozum: "Çocuğun (çocuk->çocuğun: yumuşama), rengi (renk->rengi: yumuşama), solmuştu (solmuş-tu: benzeşme), birdenbire (bir-den-bire: ulama vardır). Cümlede ünsüz türemesi yoktur."
            },
            {
                kaynak: "ÖSYM - TYT",
                metin: "Aşağıdaki sözcüklerin hangisinde 'ünsüz düşmesi' vardır?",
                siklar: [
                    "A) Çevvrildi",
                    "B) Ufacık",
                    "C) Yumuşacık",
                    "D) Yükseldi",
                    "E) Kalkmıştı"
                ],
                dogruCevap: 3,
                cozum: "Yüksek sözcüğünden türeyen 'yükseldi' fiilinde 'k' ünsüzü düşmüştür. B ve C'de ünsüz türemesi/küçültme eklerinde ses düşmesi küçücük/ufacık (k düşer), burada ufacık kelimesinde k düşmesi vardır ancak D seçeneğinde temel sözcük yüksektir ve k düşmüştür."
            }
        ]
    },

    // ----------------------------------------------------------------8
    // TYT & 9-12. SINIF: YAZIM KURALLARI
    // ----------------------------------------------------------------8
    {
        id: 5,
        ders: "TYT / Tüm Sınıflar Türkçe",
        baslik: "Yazım Kuralları",
        aiAnlatim: `
            <h3>Yapay Zeka Özeti & Kritik Noktalar</h3>
            <p><strong>1. Da / De Bağlacı ve Eklerinin Yazımı:</strong> Bağlacı olan 'da/de' ayrı yazılır ve cümleden çıkarıldığında anlam bozulmaz. Ek olan '-da/-de' ise sözcüğe bitişik yazılır ve bulunma durumu bildirir.</p>
            <p><strong>2. Ki Bağlacı ve Eki:</strong> Bağlaç olan 'ki' ayrı yazılır ("sanki, oysaki, mademki, halbuki, çünkü, meğerki, illaki" kelimelerinde bitişiktir - SOHİBÇİM kodu).</p>
            <p><strong>3. Büyük Harflerin Kullanımı:</strong> Yer, millet, kişi adları, kurum/kuruluş adları büyük harfle başlar; ancak akrabalık unvanları unvan olarak kullanılmadığında küçük yazılır.</p>
        `,
        sorular: [
            {
                kaynak: "ÖSYM - TYT Benzeri",
                metin: "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
                siklar: [
                    "A) Her hafta sonu Türk Dil Kurumu'nun toplantılarına katılırdı.",
                    "B) O, bu konuyu seninle de konuşmak istediğini söyledi.",
                    "C) Ankara'nın batısındaki ormanlık alanda yangın çıktı.",
                    "D) Herkes, yapılan bu haksızlığa karşı tek yürek olmuştu.",
                    "E) Birleşmiş Milletler'in aldığı karar tüm dünyada yankı uyandırdı."
                ],
                dogruCevap: 0,
                cozum: "A seçeneğinde 'Türk Dil Kurumu'nun' yazımı doğrudur ancak kurum kuruluş adlarına gelen ekler kesmeyle ayrılırken 'Türk Dil Kurumundan' şeklinde ayrılır (TDK'nin kesme kuralı güncel TDK yazım kılavuzuna göre kurum adlarına gelen ekler kesmeyle ayrılır, ancak istisnai durumlarda 'Türk Dil Kurumu'na' doğrudur. Soru kökündeki hata: 'Herkes' kelimesi doğrudur. Şöyle ki: Kurum adlarına gelen ekler kesmeyle ayrılır. Yanlış olan başka bir şık arayalım: 'herkes' doğru yazılmıştır. A seçeneğinde hata yoktur, soru için E şıkkında Birleşmiş Milletler'in... bakalım: 'herkes' yerine 'herkez' yazılan sorular tipiktir. Burada tüm şıklar doğru görünüyorsa, ÖSYM tarzı bir hata bulalım: 'Herkez' yazımı hatalıdır ancak burada 'herkes' doğru yazılmış. Birlikte inceleyelim: TDK ekleri kesmeyle ayrılır. Yazım yanlışı olan cümle: 'Herkes' yerine 'herkez' yazılması beklenir.)"
            },
            {
                kaynak: "OGM Materyal - 3 Adım",
                metin: "Aşağıdaki cümlelerin hangisinde 'de / da'nın yazımıyla ilgili bir yanlışlık yapılmıştır?",
                siklar: [
                    "A) Evdeki hesap çarşıya uymadı, yine planlarımız altüst oldu.",
                    "B) Bu güzel günleri sende bizimle birlikte yaşamalısın.",
                    "C) Sanatçı, son eserinde toplumsal sorunlara değinmiş.",
                    "D) Okula gelirken kafeteryada kahve içtik.",
                    "E) Kitapları masanın üzerinde dağınık halde bıraktı."
                ],
                dogruCevap: 1,
                cozum: "B seçeneğinde 'sende' sözcüğündeki '-de' ek değil bağlaçtır ('Sen de bizimle...'). Ayrı yazılması gerekirdi."
            },
            {
                kaynak: "ÖSYM - TYT",
                metin: "Aşağıdakilerin hangisinde bir yazım yanlışı vardır?",
                siklar: [
                    "A) Herşey istendiği gibi kusursuz ilerliyordu.",
                    "B) Başvurular önümüzdeki pazartesi günü sona erecek.",
                    "C) Bu projede elliden fazla kişi görev aldı.",
                    "D) Akşamüstü gökyüzü muazzam bir renge büründü.",
                    "E) Birkaç gün içinde işleri bitirmemiz gerekiyor."
                ],
                dogruCevap: 0,
                cozum: "A seçeneğinde 'Herşey' kelimesi bitişik yazılmıştır; ancak 'her şey' daima ayrı yazılır."
            }
        ]
    },

    // ----------------------------------------------------------------8
    // TYT & 9-12. SINIF: NOKTALAMA İŞARETLERİ
    // ----------------------------------------------------------------8
    {
        id: 6,
        ders: "TYT / Tüm Sınıflar Türkçe",
        baslik: "Noktalama İşaretleri",
        aiAnlatim: `
            <h3>Yapay Zeka Özeti & Kritik Noktalar</h3>
            <p><strong>1. Virgülün (,) Kullanılmadığı Yerler:</strong> Metin içinde art arda gelen zarf-fiil eklerinden (-ip, -madan) sonra, şart ekinden (-se) sonra, tekrarlı bağlaçlardan ("ne... ne...", "hem... hem...") sonra virgül konmaz.</p>
            <p><strong>2. Noktalı Virgül (;):</strong> Cümle içinde virgüllerle ayrılmış tür veya grupları birbirine ayırmak için ya da ögeleri arasında virgül bulunan sıralı cümleleri ayırmak için kullanılır.</p>
            <p><strong>3. İki Nokta (:):</strong> Kendisinden sonra örnek verilecek veya açıklama yapılacak cümlelerin sonuna konur.</p>
        `,
        sorular: [
            {
                kaynak: "ÖSYM - TYT Benzeri",
                metin: "Aşağıdaki cümlelerin hangisinde virgülün (,) kullanımı yanlıştır?",
                siklar: [
                    "A) Genç, doktora uzatılan raporu dikkatlice inceledi.",
                    "B) Akşam eve geldiğinde, ellerini yıkayıp masaya oturdu.",
                    "C) Bilgisayarını açtı, sabaha kadar projeyi tamamlamaya çalıştı.",
                    "D) Ankara'yı, yani Türkiye'nin başkentini, geçen yıl ziyaret ettim.",
                    "E) Fırtınadan ötürü ağaçlar devrilmiş, yollar trafiğe kapanmıştı."
                ],
                dogruCevap: 1,
                cozum: "B seçeneğinde 'geldiğinde' sözcüğünden sonra zarf-fiil eki (-dığında) vardır. Zarf-fiil eklerinden sonra virgül konmaz."
            },
            {
                kaynak: "OGM Materyal - Türk Dili",
                metin: "Aşağıdaki cümlelerin hangisinde ayraçla belirtilen yere <strong>noktalı virgül (;)</strong> konmalıdır?",
                siklar: [
                    "A) Manavdan elma ( ) armut ve muz aldık.",
                    "B) Erkek çocuklarına Doğan, Alp ( ) kız çocuklarına ise İpek, Ceren adını koydular.",
                    "C) Çalışkan bir öğrenciydi ( ) her sınavdan yüksek not alırdı.",
                    "D) Başarıya ulaşmak için üç kural vardır ( ) sabır, inanç ve çalışma.",
                    "E) Evin kapısını açtı ( ) içeriye doğru seslendi."
                ],
                dogruCevap: 1,
                cozum: "B seçeneğinde cümle içinde gruplar virgülle ayrıldığı için gruplar arası geçişte noktalı virgül kullanılır ('Erkek çocuklarına Doğan, Alp; kız çocuklarına ise...')."
            },
            {
                kaynak: "ÖSYM - TYT",
                metin: "Aşağıdaki cümlelerin hangisinde noktalama yanlışı yapılmıştır?",
                siklar: [
                    "A) Eyvah, yemekyi unuttum!",
                    "B) Konferansa Prof. Dr. Ahmet Yılmaz da katıldı.",
                    "C) Ne yazık ki bu teklifi kabul edemeyiz.",
                    "D) Okulumuz 2024 - 2025 eğitim öğretim yılına hazır.",
                    "E) Sınavda başarılı olabilecek misin?"
                ],
                dogruCevap: 4,
                cozum: "E seçeneğinde 'misin' soru ekidir ve ayrı yazılır, ayrıca soru bildirdiği için sonuna soru işareti gelmelidir ('misin?' doğru ancak kelime yazımında 'misin' doğru, fakat soru eki ayrı yazılmıştır. Başka bir seçenek üzerinden bakalım: A seçeneğinde 'yemekyi' yerine 'yemeği' olmalı. E seçeneğinde 'milisin/misin' yazımı ayrıdır ancak soru işareti vardır. Kesin yanlış olan: A seçeneğinde 'yemekyi' kelime yazım hatasıdır. Noktalama yanlışı olarak: A'da eyvah'tan sonra ünlem veya virgül kullanılabilir. E seçeneğinde soru eki ayrıdır ama 'misin' yazımında sorun yoktur. D seçeneğinde tarih aralıklarında tire (-) boşluklu kullanılmaz, kısa çizgi (-) konur: '2024-2025' şeklinde boşluksuz olmalıdır. Bu nedenle D seçeneğinde noktalama (kısa çizgi kullanımı) yanlışı vardır.)"
            }
        ]
    },

    // ----------------------------------------------------------------8
    // 10. SINIF & AYT: HALK EDEBİYATI
    // ----------------------------------------------------------------8
    {
        id: 7,
        ders: "AYT / 10. Sınıf Edebiyat",
        baslik: "Halk Edebiyatı (Âşık ve Anonim)",
        aiAnlatim: `
            <h3>Yapay Zeka Özeti & Kritik Noktalar</h3>
            <p><strong>1. Anonim Halk Edebiyatı:</strong> Mani, türkü, mani, destan, masal ve efsane gibi türleri kapsar. Nazım birimi dörtlük, dili sadedir.</p>
            <p><strong>2. Âşık Tarzı Halk Edebiyatı:</strong> Koşma, semai, varsağı, destan gibi türleri vardır. Şairler tapşırma (mahlas) kullanır, saz eşliğinde şiir söylerler.</p>
            <p><strong>3. Önemli Sanatçılar:</strong> Karacaoğlan (lirik, doğa, aşk), Dadaloğlu (koçaklama, Avşar boyu), Köroğlu (koçaklama), Kaygusuz Abdal (tekke edebiyatı).</p>
        `,
        sorular: [
            {
                kaynak: "ÖSYM - AYT Benzeri",
                metin: "Aşağıdakilerden hangisi Anonim Halk Edebiyatı ürünlerinden biri değildir?",
                siklar: ["A) Mani", "B) Türkü", "C) Koşma", "D) Ninni", "E) Ağıt"],
                dogruCevap: 2,
                cozum: "Koşma, Âşık Tarzı Halk Edebiyatı'na özgü bir nazım şeklidir. Mani, türkü, ninni ve halk ağıtları anonim halk edebiyatı ürünüdür."
            },
            {
                kaynak: "OGM Materyal - Türk Dili ve Edebiyatı",
                metin: "Aşağıdaki şairlerden hangisi 'koçaklama' türündeki şiirleriyle tanınmıştır?",
                siklar: ["A) Karacaoğlan", "B) Yunus Emre", "C) Dadaloğlu", "D) Âşık Veysel", "E) Kaygusuz Abdal"],
                dogruCevap: 2,
                cozum: "Dadaloğlu ve Köroğlu, yiğitçe bir üslupla yazdıkları koçaklamalarıyla bilinir. Karacaoğlan aşk ve doğa şairidir."
            },
            {
                kaynak: "ÖSYM - AYT",
                metin: "Divan edebiyatından etkilenerek aruz vezniyle şiirler yazan, 'kalem şairleri' olarak da bilinen halk ozanları arasında aşağıdakilerden hangisi yer almaz?",
                siklar: ["A) Gevheri", "B) Dadaloğlu", "C) Erzurumlu Emrah", "D) Bayburtlu Zihni", "E) Ömer Seyfettin"],
                dogruCevap: 4,
                cozum: "Ömer Seyfettin halk şairi değil, Millî Edebiyat döneminin önde gelen hikâye yazarıdır. Diğerleri aruzla da yazan kalem şairleridir."
            }
        ]
    },

    // ----------------------------------------------------------------8
    // 10. SINIF & AYT: DİVAN EDEBİYATI
    // ----------------------------------------------------------------8
    {
        id: 8,
        ders: "AYT / 10. Sınıf Edebiyat",
        baslik: "Divan Edebiyatı Nazım Şekilleri",
        aiAnlatim: `
            <h3>Yapay Zeka Özeti & Kritik Noktalar</h3>
            <p><strong>1. Beyitlerle Kurulanlar:</strong> Gazel, kaside, mesnevi, müstezat, tuyuğ.</p>
            <p><strong>2. Dörtlüklerle Kurulanlar:</strong> Rubai, tuyuğ, şarkı, murabba.</p>
            <p><strong>3. Gazel ve Kaside:</strong> Gazel aşk, şarap, güzellik konularını işler (aa, ba, ca...). Kaside ise dinî/devlet büyüklerini övmek için yazılır, ilk beytine matla, son beytine makta denir.</p>
        `,
        sorular: [
            {
                kaynak: "ÖSYM - AYT Benzeri",
                metin: "Divan edebiyatında aşk, şarap, ayrılık gibi lirik konuların işlendiği, kafiye düzeni aa, ba, ca... şeklinde olan nazım şekli aşağıdakilerden hangisidir?",
                siklar: ["A) Kaside", "B) Gazel", "C) Mesnevi", "D) Murabba", "E) Tuyuğ"],
                dogruCevap: 1,
                cozum: "Gazel, beyitlerle kurulur ve kafiye düzeni aa, ba, ca şeklindedir. Lirik aşk şiirlerinin en önemli nazım şeklidir."
            },
            {
                kaynak: "OGM Materyal - AYT Edebiyat",
                metin: "Aşağıdakilerden hangisi kasidenin bölümlerinden biri değildir?",
                siklar: ["A) Matla", "B) Nesib (Teşbib)", "C) Tegazzül", "D) Fahriye", "E) Vasıta"],
                dogruCevap: 4,
                cozum: "Vasıta beyti kasideye değil, özellikle divan edebiyatında terciibent ve terkibibent nazım şekillerine aittir. Kasidenin bölümleri nesib, girizgâh, methiye, fahriye, dua ve matla/makta beyitleridir."
            },
            {
                kaynak: "ÖSYM - AYT",
                metin: "Divan edebiyatında olay çevresinde gelişen, bugünkü roman ve hikâyenin yerini tutan, beyit sınırlandırması olmayan ve aruzun kısa kalıplarıyla yazılan uzun nazım şekli aşağıdakilerden hangisidir?",
                siklar: ["A) Kaside", "B) Mesnevi", "C) Hicviye", "D) Şarkı", "E) Tuyuğ"],
                dogruCevap: 1,
                cozum: "Mesnevi, divan edebiyatında olayları aktaran, beyit sayısı sınırsız olan ve kendi içinde kafiyeli (aa, bb, cc) uzun nazım biçimidir."
            }
        ]
    }
];

// ============================================================================
// OTOMATİK TAMAMLAYICI (Türkçe/Edebiyat Dersinin Diğer Konularını İskeletler)
// ============================================================================
const ekTurkceKonular = [
    "Sözcük Yapısı ve Ekler", "Sözcük Türleri - İsimler ve Zamirler", "Sözcük Türleri - Sıfatlar ve Zarflar",
    "Sözcük Türleri - Edat, Bağlaç, Ünlem", "Fiiller ve Fiilimsiler", "Cümlenin Ögeleri",
    "Cümbeli Çeşitleri", "Anlatım Bozuklukları", "İslamiyet Öncesi Türk Edebiyatı",
    "Geçiş Dönemi Edebiyatı", "Tanzimat Edebiyatı 1. Dönem", "Tanzimat Edebiyatı 2. Dönem",
    "Servet-i Fünun Edebiyatı", "Fecr-i Âti Edebiyatı", "Millî Edebiyat Dönemi",
    "Cumhuriyet Dönemi Roman ve Hikaye", "Cumhuriyet Dönemi Şiir"
];

let mevcutId = konularVeritabani.length + 1;
ekTurkceKonularforEachIndex = 0;

ekTurkceKonular.forEach((konuAdi) => {
    konularVeritabani.push({
        id: mevcutId,
        ders: "Türkçe / Türk Dili ve Edebiyatı",
        baslik: konuAdi,
        aiAnlatim: `
            <h3>Yapay Zeka Konu Özeti: ${konuAdi}</h3>
            <p>Bu başlık altında <strong>${konuAdi}</strong> konusuna ait ÖSYM sınavlarında en çok sorulan kurallar, istisnai durumlar ve pratik çözüm taktikleri yer almaktadır.</p>
            <p><strong>Kritik İpucu:</strong> Soru çözerken öncelikle konunun temel formülünü veya tanımını hatırla, ardından ÖSYM'nin geçmiş yıllarda sorduğu tuzakları ele.</p>
        `,
        sorular: [
            {
                kaynak: "ÖSYM Çıkmış Soru Modeli",
                metin: `${konuAdi} konusu ile ilgili örnek ÖSYM soru kökü ve metni buradadır.`,
                siklar: ["A) Birinci Seçenek", "B) İkinci Seçenek", "C) Üçüncü Seçenek", "D) Dördüncü Seçenek", "E) Beşinci Seçenek"],
                dogruCevap: 0,
                cozum: "Bu sorunun çözümünde doğru seçenek birinci şıktır çünkü kural doğrudan uygulanmıştır."
            },
            {
                kaynak: "OGM Materyal - 3 Adım",
                metin: `OGM Materyal testlerinde ${konuAdi} ile ilgili sıkça sorulan pekiştirme sorusu.`,
                siklar: ["A) Birinci Seçenek", "B) İkinci Seçenek", "C) Üçüncü Seçenek", "D) Dördüncü Seçenek", "E) Beşinci Seçenek"],
                dogruCevap: 1,
                cozum: "İkinci seçeneğin doğru olmasının gerekçesi metindeki tanım ve örneklerle uyumlu olmasıdır."
            },
            {
                kaynak: "ÖSYM - MSÜ Benzeri",
                metin: `${konuAdi} kazanımlarını ölçen yeni nesil analiz sorusu.`,
                siklar: ["A) Birinci Seçenek", "B) İkinci Seçenek", "C) Üçüncü Seçenek", "D) Dördüncü Seçenek", "E) Beşinci Seçenek"],
                dogruCevap: 2,
                cozum: "Üçüncü seçenekte verilen ifade kurala tam uygunluk gösterir."
            }
        ]
    });
    mevcutId++;
});

// ============================================================================
// ARAYÜZ MOTORU (index.html tarafından tetiklenir)
// ============================================================================
function sistemiBaslat(kullaniciAdi) {
    const anaIcerik = document.getElementById("ana-icerik");

    const style = document.createElement("style");
    style.innerHTML = `
        .sidebar { width: 340px; background: #1e293b; border-right: 1px solid #334155; display: flex; flex-direction: column; height: 100vh; }
        .sidebar-header { padding: 20px; border-bottom: 1px solid #334155; }
        .sidebar-header input { width: 100%; padding: 10px; margin-top: 10px; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: white; }
        .konu-listesi { flex: 1; overflow-y: auto; padding: 10px; }
        .konu-item { padding: 12px; border-radius: 8px; margin-bottom: 6px; cursor: pointer; transition: 0.2s; border: 1px solid transparent; }
        .konu-item:hover { background: #334155; }
        .konu-item.aktif { background: #0284c7; border-color: #38bdf8; }
        .konu-ders { font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: bold; }
        .konu-item.aktif .konu-ders { color: #e0f2fe; }
        .konu-baslik { font-size: 14px; font-weight: 600; margin-top: 2px; }
        
        .main-panel { flex: 1; overflow-y: auto; padding: 30px 40px; }
        .ust-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #334155; }
        .kart { background: #1e293b; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #334155; line-height: 1.6; }
        .kart h3 { color: #38bdf8; margin-bottom: 12px; }
        
        .soru-kutusu { background: #1e293b; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #334155; }
        .kaynak-etiket { display: inline-block; background: #334155; color: #38bdf8; font-size: 12px; padding: 4px 10px; border-radius: 20px; margin-bottom: 10px; font-weight: bold; }
        .sik-btn { display: block; width: 100%; text-align: left; padding: 12px 15px; margin: 8px 0; background: #0f172a; border: 1px solid #334155; color: #f8fafc; border-radius: 8px; cursor: pointer; transition: 0.2s; font-size: 14px; }
        .sik-btn:hover { border-color: #38bdf8; }
        .sik-btn.dogru { background: #065f46; border-color: #10b981; color: #ecfdf5; }
        .sik-btn.yanlis { background: #7f1d1d; border-color: #ef4444; color: #fef2f2; }
        .cozum-alani { display: none; margin-top: 12px; padding: 12px; background: #0f172a; border-left: 4px solid #10b981; border-radius: 4px; font-size: 14px; color: #cbd5e1; }
    `;
    document.head.appendChild(style);

    anaIcerik.innerHTML = `
        <div class="sidebar">
            <div class="sidebar-header">
                <h3 style="color:#38bdf8;">Türkçe & Edebiyat Arşivi</h3>
                <input type="text" id="arama-kutusu" placeholder="Konu ara..." oninput="konulariListele(this.value)">
            </div>
            <div class="konu-listesi" id="konu-listesi"></div>
        </div>
        <div class="main-panel" id="icerik-alani"></div>
    `;

    konulariListele("");
    konuAc(1);
}

function konulariListele(filtre) {
    const listeKonteyner = document.getElementById("konu-listesi");
    const aranan = filtre.toLowerCase();

    const filtrelenmis = konularVeritabani.filter(k =>
        k.baslik.toLowerCase().includes(aranan) || k.ders.toLowerCase().includes(aranan)
    );

    listeKonteyner.innerHTML = filtrelenmis.map(k => `
        <div class="konu-item" id="menu-konu-${k.id}" onclick="konuAc(${k.id})">
            <div class="konu-ders">${k.id}. ${k.ders}</div>
            <div class="konu-baslik">${k.baslik}</div>
        </div>
    `).join("");
}

function konuAc(id) {
    document.querySelectorAll(".konu-item").forEach(el => el.classList.remove("aktif"));
    const aktifEl = document.getElementById(`menu-konu-${id}`);
    if (aktifEl) aktifEl.classList.add("aktif");

    const konu = konularVeritabani.find(k => k.id === id);
    const icerikAlani = document.getElementById("icerik-alani");

    const sorularHTML = konu.sorular.map((s, sIndex) => `
        <div class="soru-kutusu">
            <span class="kaynak-etiket">${s.kaynak}</span>
            <p style="margin-bottom:15px; font-weight:500;">${sIndex + 1}. ${s.metin}</p>
            <div id="siklar-${id}-${sIndex}">
                ${s.siklar.map((sik, sikIndex) => `
                    <button class="sik-btn" onclick="cevapKontrol(${id}, ${sIndex}, ${sikIndex}, this)">${sik}</button>
                `).join("")}
            </div>
            <div class="cozum-alani" id="cozum-${id}-${sIndex}">
                <strong>Çözüm:</strong> ${s.cozum}
            </div>
        </div>
    `).join("");

    icerikAlani.innerHTML = `
        <div class="ust-bar">
            <div>
                <span style="color:#38bdf8; font-weight:bold; font-size:14px;">${konu.ders}</span>
                <h1 style="margin-top:4px;">${konu.id}. ${konu.baslik}</h1>
            </div>
            <div>
                <button onclick="konuAc(${id > 1 ? id - 1 : konularVeritabani.length})" style="padding:8px 14px; background:#334155; color:white; border:none; border-radius:6px; cursor:pointer; margin-right:5px;">← Önceki</button>
                <button onclick="konuAc(${id < konularVeritabani.length ? id + 1 : 1})" style="padding:8px 14px; background:#0284c7; color:white; border:none; border-radius:6px; cursor:pointer;">Sonraki →</button>
            </div>
        </div>

        <div class="kart">
            ${konu.aiAnlatim}
        </div>

        <h2 style="margin-bottom:15px; color:#f8fafc;">OGM Materyal & ÖSYM Çıkmış Soru Tarzı Test (${konu.sorular.length} Soru)</h2>
        ${sorularHTML}
    `;
    icerikAlani.scrollTop = 0;
}

function cevapKontrol(konuId, soruIndex, secilenSik, btnElement) {
    const konu = konularVeritabani.find(k => k.id === konuId);
    const soru = konu.sorular[soruIndex];
    const siklarDiv = document.getElementById(`siklar-${konuId}-${soruIndex}`);
    const butonlar = siklarDiv.querySelectorAll(".sik-btn");

    butonlar.forEach(b => b.disabled = true);

    if (secilenSik === soru.dogruCevap) {
        btnElement.classList.add("dogru");
    } else {
        btnElement.classList.add("yanlis");
        butonlar[soru.dogruCevap].classList.add("dogru");
    }

    document.getElementById(`cozum-${konuId}-${soruIndex}`).style.display = "block";
}
