const quizData = [
    {
      question: "Apa yang dimaksud dengan etika dalam penggunaan media sosial?",
      options: [
        "A. Nilai-nilai moral dan sopan santun dalam berinteraksi di dunia maya",
        "B. Kebijakan privasi yang ditetapkan oleh platform media sosial",
        "C. Aturan formal yang harus diikuti pengguna",
        "D. Hukum yang mengatur penggunaan media sosial"
      ],
      answer: "A. Nilai-nilai moral dan sopan santun dalam berinteraksi di dunia maya"
    },
    {
      question: "Manakah dari berikut ini yang bukan merupakan salah satu jenis konten yang populer?",
      options: [
        "A. Video pendek",
        "B. Artikel panjang",
        "C. Meme",
        "D. Infografis"
      ],
      answer: "B. Artikel panjang"
    },
    {
      question: "Apa yang dimaksud dengan \"deepfake\"?",
      options: [
        "A. Tindakan mengedit foto atau video seseorang tanpa izin",
        "B. Akun palsu yang dibuat untuk menipu orang lain",
        "C. Semua jawaban benar kecuali B",
        "D. Video atau audio palsu yang dibuat menggunakan kecerdasan buatan"
      ],
      answer: "D. Video atau audio palsu yang dibuat menggunakan kecerdasan buatan"
    },
    {
      question: "Algoritma media sosial berperan penting dalam menentukan konten yang ditampilkan kepada pengguna. Faktor apa yang paling mempengaruhi algoritma ini?",
      options: [
        "A. Jumlah like dan komentar",
        "B. Kualitas gambar",
        "C. Waktu posting",
        "D. Semua jawaban di atas benar"
      ],
      answer: "D. Semua jawaban di atas benar"
    },
    {
      question: "Apa yang dimaksud dengan \"call to action\" dalam pembuatan konten?",
      options: [
        "A. Ajakan bagi audiens untuk melakukan sesuatu",
        "B. Deskripsi singkat tentang konten",
        "C. Gambar atau video yang menarik perhatian",
        "D. Tagar yang digunakan untuk meningkatkan jangkauan"
      ],
      answer: "A. Ajakan bagi audiens untuk melakukan sesuatu"
    },
    {
      question: "Bagaimana seorang sistem informasi dapat berkontribusi dalam pengembangan konten kreatif untuk media sosial?",
      options: [
        "A. Semua jawaban di atas benar",
        "B. Menganalisis data pengguna untuk menemukan tren",
        "C. Mendesain visual yang menarik",
        "D. Membangun platform media sosial"
      ],
      answer: "A. Semua jawaban di atas benar"
    },
    {
      question: "Mengapa konten yang dipersonalisasi penting dalam media sosial?",
      options: [
        "A. Meningkatkan penjualan",
        "B. Memperkuat hubungan dengan pelanggan",
        "C. Meningkatkan keterlibatan pengguna",
        "D. Semua jawaban di atas benar"
      ],
      answer: "D. Semua jawaban di atas benar"
    },
    {
      question: "Apa tujuan utama dari pembuatan konten yang menarik?",
      options: [
        "A. Meningkatkan jumlah followers",
        "B. Meningkatkan engagement dan jangkauan audiens",
        "C. Mendapatkan lebih banyak like dan komentar",
        "D. Semua jawaban benar"
      ],
      answer: "D. Semua jawaban benar"
    },
    {
      question: "Apa yang dimaksud dengan \"footprint digital\"?",
      options: [
        "A. Alat untuk melacak aktivitas pengguna di internet",
        "B. Jejak yang ditinggalkan saat beraktivitas di dunia maya",
        "C. Sidik jari yang digunakan untuk mengidentifikasi pengguna",
        "D. Data pribadi yang disimpan oleh perusahaan teknologi"
      ],
      answer: "B. Jejak yang ditinggalkan saat beraktivitas di dunia maya"
    },
    {
      question: "Keterampilan apa yang paling penting bagi seorang manajer media sosial?",
      options: [
        "A. Semua jawaban di atas benar",
        "B. Desain grafis",
        "C. Analisis data",
        "D. Pemrograman"
      ],
      answer: "A. Semua jawaban di atas benar"
    },
    {
      question: "Apa keuntungan utama menggunakan konten yang dihasilkan AI?",
      options: [
        "A. Lebih kreatif dan orisinal",
        "B. Lebih murah dibandingkan konten yang dibuat manusia",
        "C. Lebih cepat dan efisien dalam produksi",
        "D. Lebih mudah diedit"
      ],
      answer: "C. Lebih cepat dan efisien dalam produksi"
    },
    {
      question: "Teknologi AI apa yang paling sering digunakan untuk menghasilkan teks?",
      options: [
        "A. Natural Language Processing (NLP)",
        "B. Computer Vision",
        "C. Machine Learning",
        "D. Deep Learning"
      ],
      answer: "A. Natural Language Processing (NLP)"
    },
    {
      question: "Metrik mana yang paling relevan untuk mengukur keberhasilan kampanye influencer di Instagram?",
      options: [
        "A. Jumlah postingan",
        "B. Jumlah follower baru",
        "C. Tingkat engagement (like, comment, share)",
        "D. Jumlah hashtag yang digunakan"
      ],
      answer: "C. Tingkat engagement (like, comment, share)"
    },
    {
      question: "Apa yang dimaksud dengan \"hallucination\" dalam konteks AI-generated content?",
      options: [
        "A. Ketika AI menghasilkan konten yang tidak masuk akal atau salah",
        "B. Ketika AI menghasilkan konten yang terlalu panjang",
        "C. Ketika AI menghasilkan konten yang terlalu mirip dengan konten manusia",
        "D. Ketika AI menghasilkan konten yang sangat kreatif"
      ],
      answer: "A. Ketika AI menghasilkan konten yang tidak masuk akal atau salah"
    },
    {
        question: "Apa yang dimaksud dengan konten yang dihasilkan AI (AI-generated content)?",
        options: [
          "A. Konten yang dibuat secara otomatis oleh mesin menggunakan algoritma AI",
          "B. Konten yang diedit menggunakan software pengedit gambar",
          "C. Konten yang dibuat secara manual oleh manusia",
          "D. Konten yang hanya terdiri dari teks"
        ],
        answer: "A. Konten yang dibuat secara otomatis oleh mesin menggunakan algoritma AI"
      },
    {
      question: "Apa yang dimaksud dengan \"social listening\"?",
      options: [
        "A. Membuat konten yang menarik untuk media sosial",
        "B. Mendengarkan musik melalui platform sosial media",
        "C. Memantau percakapan online yang relevan dengan merek atau industri",
        "D. Mengukur tingkat kebisingan latar belakang di media sosial"
      ],
      answer: "C. Memantau percakapan online yang relevan dengan merek atau industri"
    },
    {
      question: "Manakah dari berikut ini yang bukan merupakan tantangan dalam periklanan media sosial??",
      options: [
        "A. Perubahan algoritma platform",
        "B. Persaingan yang ketat",
        "C. Kurangnya data pengguna",
        "D. AdBlock"
      ],
      answer: "C. Kurangnya data pengguna"
    },
    {
      question: "Manakah dari berikut ini yang bukan merupakan platform analisis media sosial?",
      options: [
        "A. Canva",
        "B. Google Analytics",
        "C. Sprout Social",
        "D. Hootsuite Insights"
      ],
      answer: "A. Canva"
    },
    {
      question: "Bagaimana masa depan konten yang dihasilkan AI?",
      options: [
        "A. Tidak akan berkembang lebih lanjut",
        "B. Akan dibatasi penggunaannya karena risiko yang ada",
        "C. Akan menggantikan sepenuhnya konten yang dibuat manusia",
        "D. Akan menjadi alat bantu bagi manusia dalam menciptakan konten"
      ],
      answer: "D. Akan menjadi alat bantu bagi manusia dalam menciptakan konten"
    },
    {
      question: "Alat apa yang paling umum digunakan untuk mengelola iklan di berbagai platform media sosial?",
      options: [
        "A. Microsoft Excel",
        "B. Adobe Photoshop",
        "C. Google Analytics",
        "D. Business Manager (Facebook, Instagram)"
      ],
      answer: "D. Business Manager (Facebook, Instagram)"
    },
    {
    question: "Salah satu fasilitas atau aplikasi internet yang memungkinkan untuk mengirim pesan dalam bentuk surat ke seluruh dunia dalam waktu yang sangat cepat, disebut:",
    options: [
        "A. Media sosial",
        "B. Facebook",
        "C. E-mail",
        "D. Twitter"
    ],
    answer: "C. E-mail"
    },
    {
    question: "Teknik pemasaran dengan menggunakan media internet seperti Facebook, Instagram, atau Twitter dengan tujuan menjalin hubungan dan menyampaikan pesan pemasaran (promosi) untuk menarik pelanggan di dunia maya disebut:",
    options: [
        "A. Iklan online",
        "B. Email marketing",
        "C. Sosial media marketing",
        "D. Pemasaran online"
    ],
    answer: "C. Sosial media marketing"
    },
    {
    question: "Suatu media online yang mana para penggunanya dapat berpartisipasi dengan mudah, berbagi, dan menciptakan isi yang meliputi website, blog, forum, wiki, dan dunia virtual dinamakan:",
    options: [
        "A. Viral marketing",
        "B. Aplikasi messenger",
        "C. Media sosial",
        "D. Jejaring sosial"
    ],
    answer: "C. Media sosial"
    },
    {
    question: "Berikut ini merupakan berbagai cara yang dilakukan dalam memasarkan melalui media sosial dan jejaring sosial, kecuali:",
    options: [
        "A. Memperbanyak teman.",
        "B. Menentukan sasaran pasar.",
        "C. Membuat konten yang unik.",
        "D. Memasang iklan."
    ],
    answer: "A. Memperbanyak teman."
    },
    {
    question: "Berikut ini adalah beberapa contoh aplikasi messenger, kecuali:",
    options: [
        "A. Friendbook",
        "B. Kakao Talk",
        "C. WeChat",
        "D. WhatsApp"
    ],
    answer: "A. Friendbook"
    },
    {
    question: "Email yang berisi tentang materi promosi yang ditujukan kepada kelompok pengguna internet melalui email, dengan tujuan mempromosikan suatu produk atau jasa disebut dengan:",
    options: [
        "A. E-Commerce",
        "B. Online Advertising",
        "C. Email Marketing",
        "D. Mailing List"
    ],
    answer: "C. Email Marketing"
    },
    {
    question: "Situs khusus yang disediakan bagi pengguna untuk meng-upload berbagai media elektronik seperti musik, gambar, video dan dapat dilihat atau di-download oleh para pengunjung lain disebut:",
    options: [
        "A. Media komersil",
        "B. Media elektronik",
        "C. Media sharing",
        "D. Media sosial"
    ],
    answer: "C. Media sharing"
    },
    {
    question: "Berbagai macam kegiatan yang dilakukan dalam dunia blog dikenal dengan istilah:",
    options: [
        "A. Blogger",
        "B. Blogging",
        "C. Blogosphere",
        "D. Posting"
    ],
    answer: "B. Blogging"
    },
    {
    question: "Istilah yang digunakan bagi pengguna blog yaitu:",
    options: [
        "A. Blogger",
        "B. Blogging",
        "C. Blogosphere",
        "D. Posting"
    ],
    answer: "A. Blogger"
    },
    {
    question: "Istilah umum yang digunakan untuk proses penjualan dan pembelian yang didukung oleh sarana elektronik yaitu:",
    options: [
        "A. Internet web",
        "B. E-commerce",
        "C. Prodigy",
        "D. Online komersial"
    ],
    answer: "B. E-commerce"
    },
    {
    question: "Dalam istilah teknologi informasi, download yaitu:",
    options: [
        "A. Mencetak data dari internet",
        "B. Memasukkan data ke internet",
        "C. Mengirim data",
        "D. Memasukkan data dari internet ke komputer"
    ],
    answer: "D. Memasukkan data dari internet ke komputer"
    },
    {
    question: "Tata cara pergaulan, aturan perilaku, adat kebiasaan manusia dalam bermasyarakat dan menentukan nilai baik dan nilai tidak baik merupakan definisi dari:",
    options: [
        "A. Budi Pekerti",
        "B. Etika",
        "C. Tata Boga",
        "D. Panutan"
    ],
    answer: "B. Etika"
    },
    {
    question: "Etika berhubungan dengan hal-hal berikut, kecuali:",
    options: [
        "A. Dari segi objek pembahasan, etika berupaya membahas perbuatan yang dilakukan oleh manusia.",
        "B. Dari segi sumbernya, etika bersumber pada akal pikiran atau filsafat. Sebagai hasil pemikiran, maka etika bersifat mutlak, absolut dan universal.",
        "C. Dari segi fungsinya, etika berfungsi sebagai penilai, penentu dan penetap terhadap sesuatu perbuatan yang dilakukan oleh manusia.",
        "D. Dilihat dari segi sifatnya, etika bersifat relatif yakni dapat berubah-ubah sesuai dengan tuntutan zaman."
    ],
    answer: "B. Dari segi sumbernya, etika bersumber pada akal pikiran atau filsafat. Sebagai hasil pemikiran, maka etika bersifat mutlak, absolut dan universal."
    },
    {
    question: "Berikut merupakan bentuk etika komunikasi yang baik dalam media sosial, kecuali:",
    options: [
        "A. Jangan menggunakan kata kasar, provokatif, porno ataupun SARA.",
        "B. Jangan memposting artikel atau status yang bohong.",
        "C. Jangan mencopy paste artikel atau gambar yang mempunyai hak cipta.",
        "D. Jangan berikan komentar yang relevan."
    ],
    answer: "D. Jangan berikan komentar yang relevan."
    },
    {
    question: "Beberapa hal yang harus diperhatikan dalam melakukan komunikasi di media sosial, diantaranya:",
    options: [
        "A. Pergunakan bahasa gaul sehingga lebih mudah dikenali.",
        "B. Lakukan penyebaran SARA, Pornografi dan Aksi Kekerasan sehingga menjadi Viral.",
        "C. Tingkatkan kewaspadaan ketika menerima suatu informasi dari media sosial yang berisi berita yang menjelekkan salah satu pihak.",
        "D. Terima dan percaya semua berita dan informasi yang didapat."
    ],
    answer: "C. Tingkatkan kewaspadaan ketika menerima suatu informasi dari media sosial yang berisi berita yang menjelekkan salah satu pihak."
    },
    {
    question: "Salah satu bentuk cara menghargai hasil karya orang lain adalah sebagai berikut:",
    options: [
        "A. Saat menyebarkan informasi milik orang lain, biasakan untuk mencantumkan sumber informasi.",
        "B. Jangan membiasakan diri untuk mengcopy-paste tanpa mencantumkan sumber informasi.",
        "C. Memberikan saran dan kritik yang membangun pada hasil karya orang lain.",
        "D. Semua jawaban benar."
    ],
    answer: "D. Semua jawaban benar."
    },
    {
    question: "Beberapa hal yang perlu dihindari saat bermain media sosial agar tidak terkena jeratan hukum sesuai UU ITE, kecuali:",
    options: [
        "A. Melakukan penghinaan dan/atau pencemaran nama baik.",
        "B. Tidak melakukan pelanggaran kesusilaan.",
        "C. Menyebarkan berita bohong dan menyesatkan yang mengakibatkan kerugian konsumen.",
        "D. Memposting hal-hal yang berbau SARA."
    ],
    answer: "B. Tidak melakukan pelanggaran kesusilaan."
    },
    {
    question: "Kondisi di mana seseorang takut merasa tertinggal dari keramaian, dalam hal ini informasi yang ada di media sosial, dikenal dengan istilah:",
    options: [
        "A. Fear Of Missing Out (FOMO)",
        "B. Borderline Personality Disorder (BPD)",
        "C. Social media anxiety disorder",
        "D. Body Dysmorphic Disorder (BDD)"
    ],
    answer: "A. Fear Of Missing Out (FOMO)"
    },
    {
    question: "Perasaan yang muncul karena merasa ditinggalkan oleh teman saat melihat postingan seseorang di Instagram yang sedang hang out tanpa mengajak Anda merupakan suatu gejala yang disebut:",
    options: [
        "A. Fear Of Missing Out (FOMO)",
        "B. Borderline Personality Disorder (BPD)",
        "C. Social media anxiety disorder",
        "D. Body Dysmorphic Disorder (BDD)"
    ],
    answer: "A. Fear Of Missing Out (FOMO)"
    },
    {
    question: "Seseorang yang tidak bisa lepas dari handphone dan selalu mengecek akunnya, terobsesi pada jumlah followers, likes, dan komentar di post yang dilakukan, merupakan gejala dari:",
    options: [
        "A. Fear Of Missing Out (FOMO)",
        "B. Borderline Personality Disorder (BPD)",
        "C. Social media anxiety disorder",
        "D. Body Dysmorphic Disorder (BDD)"
    ],
    answer: "C. Social media anxiety disorder"
    },
    {
        "question": "Dampak negatif yang muncul dari penggunaan media sosial adalah sebagai berikut, kecuali:",
        "options": [
            "A. Munculnya kecemburuan sosial",
            "B. Munculnya pornografi",
            "C. Munculnya peningkatan harga diri atau gengsi seseorang",
            "D. Muncul penyebaran informasi palsu"
        ],
        "answer": "C. Munculnya peningkatan harga diri atau gengsi seseorang"
    },
    {
        "question": "Suatu tindakan menyakiti orang lain secara berulang kali menggunakan informasi dan teknologi komunikasi, disebut dengan istilah:",
        "options": [
            "A. Cyber Bullying",
            "B. Cyber Crime",
            "C. Cyber Victimization",
            "D. Cyber Net"
        ],
        "answer": "A. Cyber Bullying"
    },
    {
        "question": "Berikut beberapa hal yang menggambarkan Tindakan bullying di media sosial diantaranya, kecuali:",
        "options": [
            "A. Mengirimkan pesan pelecehan melalui teks atau internet",
            "B. Mengirimkan komentar yang baik dan tidak meremehkan di jejaring sosial",
            "C. Mengirimkan gambar yang mempermalukan seseorang melalui media sosial",
            "D. Mengancam atau mengintimidasi seseorang melalui media elektronik"
        ],
        "answer": "B. Mengirimkan komentar yang baik dan tidak meremehkan di jejaring sosial"
    },
    {
        "question": "Seseorang atau individu yang menjadi target pelaku perundungan di media sosial dikenal dengan istilah:",
        "options": [
            "A. Cyber Bullying",
            "B. CyberBullying Crime",
            "C. CyberBullying Victimization",
            "D. CyberBullying Net"
        ],
        "answer": "C. CyberBullying Victimization"
    },
    {
        "question": "Beberapa jenis cyberbullying yang sering terjadi diantaranya adalah:",
        "options": [
            "A. Harassment",
            "B. Flamming",
            "C. Cyberstalking",
            "D. Semua jawaban Benar"
        ],
        "answer": "D. Semua jawaban Benar"
    },
    {
        "question": "Suatu tindakan yang dilakukan dengan sengaja untuk memata-matai dan bertujuan untuk membuat korban merasa depresi dan takut, dikenal dengan istilah:",
        "options": [
            "A. Harassment",
            "B. Flamming",
            "C. Cyberstalking",
            "D. Semua jawaban Benar"
        ],
        "answer": "C. Cyberstalking"
    },
    {
        "question": "Sebuah tindakan yang dilakukan seperti provokasi, ujaran kebencian, mengejek dan menyinggung perasaan orang lain, yaitu dengan mengirim pesan yang berisi beberapa kata-kata frontal dan penuh kemarahan, dikenal dengan istilah:",
        "options": [
            "A. Harassment",
            "B. Flamming",
            "C. Cyberstalking",
            "D. Semua jawaban Benar"
        ],
        "answer": "B. Flamming"
    },
    {
        "question": "Beberapa jenis game online yang ada, diantaranya adalah:",
        "options": [
            "A. Jenis Perang /War/Action, Strategi",
            "B. Jenis Sport",
            "C. Jenis RPG",
            "D. Semua jawaban Benar"
        ],
        "answer": "D. Semua jawaban Benar"
    },
    {
        "question": "Game online seperti Point Blank, Lost Saga, Cross Fire, Counter Strike, merupakan game yang didefinisikan ke dalam jenis:",
        "options": [
            "A. Jenis Perang /War/Action",
            "B. Strategi",
            "C. Jenis Sport",
            "D. Jenis RPG"
        ],
        "answer": "A. Jenis Perang /War/Action"
    },
    {
        "question": "Beberapa hal yang harus diperhatikan untuk bisa membuat konten yang kreatif, diantaranya adalah, kecuali:",
        "options": [
            "A. Paham siapa audiens",
            "B. Pilih media sosial yang sesuai dengan target",
            "C. Tentukan tujuan dari konten yang dibuat",
            "D. Tipe konten boleh sembarang tanpa memiliki kriteria dan random"
        ],
        "answer": "D. Tipe konten boleh sembarang tanpa memiliki kriteria dan random"
    },
    {
        "question": "Definisi yang benar dari konten creator adalah:",
        "options": [
            "A. Orang yang membuat konten dan tidak perlu disebar ke berbagai platform media sosial seperti YouTube, Instagram, atau Facebook.",
            "B. Orang-orang yang membuat konten yang memiliki nilai edukasi dan hiburan di mana konten ini disesuaikan dengan keinginan atau ketertarikan dari audiens.",
            "C. Seseorang yang bertanggung jawab untuk setiap informasi yang ada di media sosial, terutama media digital dan tidak perlu memiliki target audiens tertentu.",
            "D. Semua jawaban benar."
        ],
        "answer": "B. Orang-orang yang membuat konten yang memiliki nilai edukasi dan hiburan di mana konten ini disesuaikan dengan keinginan atau ketertarikan dari audiens."
    },
    {
        "question": "Ada beberapa tempat yang bisa dijadikan lokasi untuk meneliti audiens tertarget, diantaranya adalah:",
        "options": [
            "A. Group Facebook",
            "B. Ulasan e-commerce",
            "C. Google Analytics",
            "D. Semua jawaban Benar"
        ],
        "answer": "D. Semua jawaban Benar"
    },
    {
        "question": "Beberapa hal yang bisa dilakukan untuk menemukan ide konten di media sosial apabila Anda kehabisan topik, diantaranya:",
        "options": [
            "A. Memuat topik berulang, misalnya memanfaatkan sejumlah kuis sederhana, teka-teki, atau sekadar shoutout gratis untuk para followers",
            "B. Berikan kesempatan untuk berdiskusi misal saat menemukan masalah, cobalah mengangkatnya menjadi konten dan melibatkan audiens untuk ikut berkomentar mengenai hal tersebut.",
            "C. Gunakan topik yang berkaitan yaitu dengan cara melihat apakah mampu mengikuti tren topik yang sedang populer di kalangan pengikut atau tidak.",
            "D. Semua Jawaban Benar"
        ],
        "answer": "D. Semua Jawaban Benar"
    },
    {
        "question": "Beberapa definisi media sosial diantaranya adalah:",
        "options": [
            "A. Media yang mewadahi kerjasama di antara pengguna yang menghasilkan konten (user-generated content).",
            "B. Platform media yang memfokuskan pada eksistensi pengguna yang memfasilitasi mereka dalam berkreativitas maupun berkolaborasi.",
            "C. Media di internet yang memungkinkan pengguna (users) merepresentasikan dirinya maupun bekerja sama, berbagi, berinteraksi, berkomunikasi dengan pengguna lain dan membentuk ikatan sosial secara virtual.",
            "D. Semua jawaban Benar"
        ],
        "answer": "D. Semua jawaban Benar"
    },
    {
        "question": "Salah satu istilah yang memperlihatkan kemudahan seseorang untuk menggunakan suatu alat atau objek tertentu buatan manusia untuk mencapai suatu tujuan dinamakan:",
        "options": [
            "A. Usability",
            "B. User friendly",
            "C. Search ads",
            "D. Sponsorship"
        ],
        "answer": "A. Usability"
    },
    
        {
          "question": "Bagaimana etika yang baik dalam memberikan informasi di media sosial secara efektif?",
          "options": [
            "A. Penjelasan informasi yang panjang dan berbelit",
            "B. Informasi yang ditulis lengkap, detail, dan tidak bertele-tele",
            "C. Kalimat ditulis dengan banyak simbol-simbol(emoticon)",
            "D. Informasi menggunakan kata bahasa gaul",
            "E. Kalimat yang ambigu, sulit dimengerti"
          ],
          "answer": "B. Informasi yang ditulis lengkap, detail, dan tidak bertele-tele"
        },
        {
          "question": "Berikut ini merupakan ciri-ciri berita hoax, kecuali?",
          "options": [
            "A. Ditulis dengan judul yang memprovokatif",
            "B. Pengirim pesan bersifat anonim (tidak diketahui identitasnya)",
            "C. Berisi pesan atau informasi yang membuat cemas pembaca",
            "D. Informasi yang ditulis bersifat SARA, dan menggiring opini",
            "E. Berita atau informasinya di peroleh dari website institusi resmi"
          ],
          "answer": "E. Berita atau informasinya di peroleh dari website institusi resmi"
        },
        {
          "question": "Apa pasal yang berlaku jika kita menyebarkan berita hoax?",
          "options": [
            "A. Pasal 27 ayat (2) UU ITE",
            "B. Pasal 27 ayat (1) UU ITE",
            "C. Pasal 28 ayat (1) UU ITE",
            "D. Pasal 28 ayat (2) UU ITE",
            "E. Pasal 28 ayat (3) UU ITE"
          ],
          "answer": "E. Pasal 28 ayat (3) UU ITE"
        },
        {
          "question": "Dibawah ini yang bukan contoh data pribadi adalah..",
          "options": [
            "A. Nomor Induk Kependudukan",
            "B. Tanggal Lahir",
            "C. Nama kandung Ibu",
            "D. Alamat tempat tinggal",
            "E. Username sosial media"
          ],
          "answer": "E. Username sosial media"
        },
        {
          "question": "Dimana kita bisa mendapatkan informasi yang valid?",
          "options": [
            "A. Situs blog orang yang tidak dikenal",
            "B. Artikel harian",
            "C. Platform Gosip",
            "D. Situs Resmi instansi terkait",
            "E. Akun sosial media orang lain"
          ],
          "answer": "D. Situs Resmi instansi terkait"
        }
  ];
  
