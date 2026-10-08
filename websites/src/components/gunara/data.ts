// ============================================================
// GUNARA.WEB.ID — Data Pusat Ekosistem (Edisi Multi-Halaman)
// 4 Identitas • 7 Disiplin • 3 Misi • 39 Dokumen • 12 Buku
// 12 Jurnal • 8 Puisi • 6 Layanan • FAQ • Timeline
// ============================================================

export type Identity = {
  id: string;
  slug: string;
  name: string;
  penName: string;
  domain: string;
  tagline: string;
  description: string;
  longBio: string[];
  philosophy: string;
  focus: string[];
  outputs: string[];
  journey: { year: string; title: string; desc: string }[];
  stats: { value: string; label: string }[];
  symbol: string;
  photo?: string;
};

export const identities: Identity[] = [
  {
    id: "gugun-gunara",
    slug: "gugun-gunara",
    name: "Gugun Gunara",
    penName: "Identitas Duniawi–Negara",
    domain: "Strategi • Bisnis • Kenegaraan",
    tagline: "Arsitek Ekosistem Bisnis & Tata Kelola",
    description:
      "Wujud duniawi yang bergerak di ranah konsultan, bisnis, legal, korporat, dan kenegaraan — merancang enterprise architecture, governance, dan ekosistem bisnis end-to-end.",
    longBio: [
      "Gugun Gunara adalah wajah duniawi dari ekosistem ini: konsultan manajemen strategis, perancang enterprise architecture, dan penasihat tata kelola yang bergerak di ranah bisnis, legal, korporat, hingga kenegaraan.",
      "Ia percaya bahwa masalah bangsa tidak pernah kekurangan ide — yang kurang adalah sistem yang membuat ide itu dieksekusi dengan disiplin. Karena itu setiap karyanya berbentuk dokumen yang hidup: blueprint bisnis, SOP, struktur organisasi, KPI, dan peta jalan yang bisa langsung dijalankan di lapangan.",
      "Standar yang ia pegang sederhana namun keras: setiap dokumen harus setara kualitas konsultan kelas dunia — McKinsey dalam kerangka, BlackRock dalam angka, Google dalam teknologi, Harvard dan MIT dalam kedalaman akademik.",
    ],
    philosophy:
      "Negara dan perusahaan sama-sama mesin. Yang membedakan hanyalah bahan bakarnya: satu berjalan dengan pajak, satu dengan margin. Keduanya harus dilayani dengan sistem yang sama rapinya.",
    focus: [
      "Konsultan Manajemen Strategis",
      "Legal, Korporat & Governance",
      "Enterprise Architecture 39 Dokumen",
      "Ketahanan Pangan & Logistik Nasional",
    ],
    outputs: [
      "Blueprint Bisnis & SOP",
      "Whitepaper & Policy Paper",
      "Struktur Organisasi & KPI",
      "Advisory Eksekutif",
    ],
    journey: [
      {
        year: "2018",
        title: "Praktik Konsultasi Independen",
        desc: "Memulai praktik konsultasi strategis untuk korporasi dan instansi pemerintah dengan pendekatan dokumentasi-first.",
      },
      {
        year: "2020",
        title: "Fokus Pangan & Logistik",
        desc: "Memperdalam kepakaran ketahanan pangan dan rantai pasok nasional di tengah krisis global.",
      },
      {
        year: "2024",
        title: "Arsitektur 39 Dokumen",
        desc: "Mengkodifikasi seluruh metode menjadi Blueprint 39 Dokumen yang menjadi tulang punggung layanan hingga hari ini.",
      },
      {
        year: "2026",
        title: "Ekosistem Gunara.web.id",
        desc: "Membuka ekosistem resmi: layanan, karya, riset, dan mentoring dalam satu atap digital.",
      },
    ],
    stats: [
      { value: "50+", label: "Organisasi Didampingi" },
      { value: "39", label: "Dokumen Master" },
      { value: "6", label: "Sektor Industri" },
    ],
    symbol: "GG",
    photo: "/gunara/foto/gugun-gunara-konsultan-bisnis-senior.jpeg",
  },
  {
    id: "muhammad-lutfi-azmi",
    slug: "lutfi-azmi",
    name: "Muhammad Lutfi Azmi",
    penName: "Identitas Ruhani–Ilahi",
    domain: "Riset • Ilmu • Peradaban Digital",
    tagline: "Profesor Peradaban Digital & Akademisi",
    description:
      "Wujud ruhani-ilahi yang menekuni jurnal ilmiah internasional, pendidikan PhD, dan kepemimpinan intelektual peradaban digital.",
    longBio: [
      "Muhammad Lutfi Azmi adalah wujud ruhani-ilahi dari ekosistem ini: akademisi, peneliti, dan kandidat doktoral yang menekuni persimpangan antara epistemologi Islam, ilmu modern, dan teknologi digital.",
      "Ia membangun jembatan dua arah: mengantar para peneliti Indonesia ke jurnal Q1/Q2 internasional, dan mengantar kekayaan intelektual peradaban ke dalam bahasa riset yang diakui dunia.",
      "Baginya, publikasi bukan pamer prestise — melainkan amanah: bahwa umat ini hadir di panggung ilmu global dengan kontribusi yang dihitung, direview, dan dirujuk.",
    ],
    philosophy:
      "Wahyu tidak pernah takut pada ilmu. Yang takut hanyalah ilmu yang belum cukup dekat dengan wahyu.",
    focus: [
      "Jurnal Ilmiah Q1/Q2 Internasional",
      "Doktoral & Metodologi Riset",
      "Profesor Peradaban Digital",
      "Kurikulum & Epistemologi Islam-Ilmu",
    ],
    outputs: [
      "Publikasi Jurnal Terindeks",
      "Buku Akademik & Referensi",
      "Kerangka Riset Peradaban",
      "Mentoring Akademik",
    ],
    journey: [
      {
        year: "2019",
        title: "Fondasi Riset",
        desc: "Membangun disiplin riset dan metodologi kuantitatif-kualitatif lintas disiplin.",
      },
      {
        year: "2022",
        title: "Publikasi Internasional Pertama",
        desc: "Terbit di jurnal internasional terindeks dan mulai membangun jaringan reviewer global.",
      },
      {
        year: "2024",
        title: "Mentoring Publikasi",
        desc: "Membuka program pendampingan dosen dan peneliti menuju jurnal Q1/Q2.",
      },
      {
        year: "2026",
        title: "Roadmap 100 Jurnal",
        desc: "Meluncurkan roadmap 100 publikasi dan kurikulum riset peradaban digital.",
      },
    ],
    stats: [
      { value: "100", label: "Target Publikasi" },
      { value: "Q1/Q2", label: "Standar Terbitan" },
      { value: "4", label: "Bidang Riset" },
    ],
    symbol: "MLA",
    photo: "/gunara/foto/gugun-gunara-jurnal-puisi.jpeg",
  },
  {
    id: "prabu-danling",
    slug: "prabu-danling",
    name: "Prabu Danling",
    penName: "Nama Pena Eksekusi",
    domain: "Penulisan • Strategi • Leadership",
    tagline: "Bestseller Architect — Target 500 Buku",
    description:
      "Nama pena untuk eksekusi: menulis strategi dan leadership dalam skala industri dengan arsitektur bestseller kelas dunia.",
    longBio: [
      "Prabu Danling adalah pena eksekusi: identitas yang mengubah gagasan menjadi buku, playbook, dan kurikulum yang mengubah cara orang memimpin dan membangun.",
      "Ia merancang setiap buku seperti merancang gedung — ada fondasi gagasan, rangka bab, material narasi, dan inspeksi mutu. Satu buku yang baik adalah satu sistem yang bisa dibawa pulang pembacanya.",
      "Target 500 buku bukan angka sombong; ia adalah rencana industri penerbitan peradaban: penerjemahan, distribusi global, dan kurikulum turunannya.",
    ],
    philosophy:
      "Menulis adalah cara paling murah untuk hidup seribu tahun — dan cara paling jujur untuk mati dari ego setiap hari.",
    focus: [
      "Buku Strategi & Leadership",
      "Playbook Eksekutif & Corporate",
      "Ghostwriting & Editorial Senior",
      "Penerbitan & Distribusi Global",
    ],
    outputs: [
      "Manuskrip Siap Terbit",
      "Seri Buku 500 Judul",
      "Kurikulum Penulisan",
      "Buku Bestseller Framework",
    ],
    journey: [
      {
        year: "2021",
        title: "Pena Pertama",
        desc: "Manuskrip strategi pertama selesai dan menemukan pembacanya di kalangan eksekutif.",
      },
      {
        year: "2023",
        title: "Sistem Bestseller",
        desc: "Merumuskan arsitektur buku bestseller: dari ide hingga distribusi dalam satu alur.",
      },
      {
        year: "2025",
        title: "Pustaka Peradaban Dimulai",
        desc: "Trilogi pembuka 500 buku diterbitkan: Arsitek Peradaban, Ketahanan Pangan 4.0, dan penerusnya.",
      },
      {
        year: "2026",
        title: "Mesin Penerbitan",
        desc: "Layanan penerbitan dan ghostwriting senior dibuka untuk para pemimpin Indonesia.",
      },
    ],
    stats: [
      { value: "500", label: "Target Judul" },
      { value: "12", label: "Buku Dalam Pustaka" },
      { value: "3", label: "Kategori Utama" },
    ],
    symbol: "PD",
  },
  {
    id: "santri-angon",
    slug: "santri-angon",
    name: "Santri Angon",
    penName: "Nama Pena Refleksi",
    domain: "Puisi • Spiritual Writing • Mentoring",
    tagline: "Gembala Jiwa — Suara dari Kegelapan",
    description:
      "Nama pena refleksi: puisi, spiritual writing, dan pendampingan bagi mereka yang terpuruk.",
    longBio: [
      "Santri Angon adalah pena refleksi: suara yang menulis untuk jiwa-jiwa yang lelah — para pemimpi yang gagal, para pekerja yang tak terlihat, para hati yang butuh didampingi.",
      "Karyanya berbentuk puisi, refleksi, dan program mentoring pemulihan yang memadukan kajian iman dengan kepekaan psikologis modern.",
      "Ia percaya pemulihan tidak terjadi dalam kesendirian. Maka setiap karyanya selalu diakhiri dengan satu pintu: mari didampingi, jangan pulih sendirian.",
    ],
    philosophy:
      "Tuhan tidak pernah menitipkan luka tanpa juga menitipkan jalan pulang. Tugas kita hanya satu: saling mengingatkan jalan itu.",
    focus: [
      "Puisi & Refleksi Spiritual",
      "Mentoring Pemulihan Jiwa",
      "Kajian Tasawuf & Karakter",
      "Komunitas Angon (Gembala Digital)",
    ],
    outputs: [
      "Antologi Puisi & Prosa",
      "Program Mentoring 90 Hari",
      "Konten Refleksi Harian",
      "Ruang Curhat & Pemulihan",
    ],
    journey: [
      {
        year: "2022",
        title: "Catatan Sunyi",
        desc: "Refleksi harian dimulai sebagai catatan pribadi, lalu dibagikan kepada mereka yang butuh.",
      },
      {
        year: "2023",
        title: "Santri Angon Lahir",
        desc: "Nama pena lahir: menggembala jiwa-jiwa yang terpuruk lewat tulisan dan pendampingan.",
      },
      {
        year: "2025",
        title: "Mentoring 90 Hari",
        desc: "Program pendampingan pemulihan terstruktur dibuka — gratis bagi yang tidak mampu.",
      },
      {
        year: "2026",
        title: "Komunitas Angon",
        desc: "Komunitas gembala digital tumbuh: saling menjaga, saling mengingatkan, saling menguatkan.",
      },
    ],
    stats: [
      { value: "90", label: "Hari Program" },
      { value: "8", label: "Karya Terbit" },
      { value: "100%", label: "Kerahasiaan Terjaga" },
    ],
    symbol: "SA",
    photo: "/gunara/foto/gugun-gunara-prabu-danling.jpeg",
  },
];

export type Discipline = {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  overview: string[];
  capabilities: string[];
  process: { title: string; desc: string }[];
  deliverables: string[];
  caseStudy: { title: string; desc: string; result: string };
};

export const disciplines: Discipline[] = [
  {
    id: "manajemen",
    slug: "manajemen-strategis",
    name: "Manajemen Strategis",
    icon: "Target",
    description:
      "Merancang strategi korporat, OKR, governance, dan transformasi organisasi dari level board hingga operasional lapangan.",
    overview: [
      "Strategi yang baik tidak berhenti di slide presentasi. Disiplin ini merancang arsitektur strategi yang menempel di keseharian organisasi: dari peta jalan direksi hingga checklist operator.",
      "Kami bekerja dengan kerangka konsultan kelas dunia — disesuaikan untuk iklim bisnis Indonesia: kecepatan keputusan, kompleksitas regulasi, dan kekuatan jejaring lokal.",
      "Hasil akhirnya selalu sama: organisasi yang tahu ke mana bergerak, siapa mengerjakan apa, dan bagaimana mengukurnya tanpa drama.",
    ],
    capabilities: [
      "Corporate & Business Strategy",
      "OKR, KPI & Performance Management",
      "Organizational Design",
      "Risk & Governance Framework",
      "Turnaround & Transformation",
      "Board Advisory",
    ],
    process: [
      { title: "Diagnosa", desc: "Wawancara lintas level, audit dokumen, dan pemetaan masalah sesungguhnya." },
      { title: "Desain", desc: "Menyusun strategi, struktur, dan sistem ukur yang cocok dengan budaya organisasi." },
      { title: "Deployment", desc: "Sosialisasi, pelatihan, dan pendampingan implementasi di unit-unit kunci." },
      { title: "Disiplin", desc: "Ritme review kuartalan dan penyempurnaan berkelanjutan." },
    ],
    deliverables: [
      "Dokumen strategi board-ready",
      "Peta OKR & KPI per unit",
      "Struktur organisasi & RACI",
      "Playbook manajemen risiko",
      "Rencana transformasi 12 bulan",
    ],
    caseStudy: {
      title: "Turnaround Distributor Nasional",
      desc: "Distributor FMCG dengan okupansi gudang membengkak dan margin tergerus — didampingi merapikan portofolio, struktur, dan ritme kinerja.",
      result: "Efisiensi biaya logistik 23% dalam dua kuartal; keputusan direksi kini berbasis satu dasbor.",
    },
  },
  {
    id: "pangan",
    slug: "ketahanan-pangan",
    name: "Ketahanan Pangan",
    icon: "Wheat",
    description:
      "Sistem pangan nasional yang tangguh: dari agrikultur presisi, hilirisasi, hingga cadangan pangan berbasis data.",
    overview: [
      "Kedaulatan pangan adalah fondasi kedaulatan nasional. Kami merancang sistem pangan yang memuliakan petani, menguntungkan pelaku usaha, dan menstabilkan harga bagi rakyat.",
      "Pendekatan kami menyatukan tiga lapis: produksi (agrikultur modern), hilirisasi (industri & nilai tambah), dan distribusi (buffer stock & logistik) — semuanya berbasis data.",
      "Dari food estate hingga program pangan daerah, setiap rancangan diuji dengan satu pertanyaan: apakah ini tahan badai musim, politik, dan harga?",
    ],
    capabilities: [
      "Food Estate & Agrikultur Modern",
      "Hilirisasi & Value Chain",
      "Cadangan Pangan & Buffer Stock",
      "Sertifikasi & Standar Mutu",
      "Smart Farming & Data Tanaman",
      "Kemitraan Petani-Mill-Offtaker",
    ],
    process: [
      { title: "Pemetaan", desc: "Audit ekosistem pangan wilayah: musim, pasar, infrastruktur, dan aktor kunci." },
      { title: "Perancangan", desc: "Desain sistem produksi-hilirisasi-distribusi yang saling mengunci." },
      { title: "Pilot", desc: "Uji coba terbatas dengan indikator yang jelas sebelum scale-up." },
      { title: "Skala & Kawal", desc: "Ekspansi bertahap dengan pendampingan dan review berkala." },
    ],
    deliverables: [
      "Peta sistem pangan wilayah",
      "Desain buffer stock & SOP",
      "Model bisnis hilirisasi",
      "Rencana kemitraan petani",
      "Studi kelayakan & proyeksi",
    ],
    caseStudy: {
      title: "Program Pangan Kabupaten",
      desc: "Merancang cadangan pangan kabupaten dengan gudang regional, kemitraan 1.200 petani, dan sistem distribusi bencana.",
      result: "Waktu respons distribusi darurat turun dari 7 hari menjadi 36 jam; fluktuasi harga lokal melandai.",
    },
  },
  {
    id: "logistik",
    slug: "logistik-supply-chain",
    name: "Logistik & Supply Chain",
    icon: "Route",
    description:
      "Arsitektur rantai pasok end-to-end: distribusi nasional, cold chain, gudang pintar, dan integrasi pelabuhan.",
    overview: [
      "Ketika logistik berhenti, bangsa berhenti. Disiplin ini merancang jantung pergerakan barang: jaringan gudang, rute distribusi, cold chain, hingga last-mile ke pelosok.",
      "Kami menggabungkan network design kuantitatif dengan realitas lapangan Indonesia — kepulauan, musim, dan infrastruktur yang berbeda di tiap wilayah.",
      "Tujuannya bukan logistik tercepat di atas kertas, melainkan logistik paling andal di jalan raya, sungai, dan dermaga.",
    ],
    capabilities: [
      "Network Design & Distribution",
      "Cold Chain & Perishable Logistics",
      "Warehouse & Inventory Systems",
      "Last-Mile & E-fulfillment",
      "Transportation Management",
      "Supply Chain Analytics",
    ],
    process: [
      { title: "Audit Jaringan", desc: "Pemetaan aliran barang, biaya per rute, dan titik kebocoran." },
      { title: "Optimisasi", desc: "Redesain jaringan, rute, dan kebijakan stok dengan simulasi." },
      { title: "Implementasi", desc: "Rollout sistem, SOP gudang, dan pelatihan tim operasional." },
      { title: "Kawal Kinerja", desc: "Dasbor SLA dan perbaikan berkelanjutan bulanan." },
    ],
    deliverables: [
      "Desain jaringan distribusi",
      "SOP gudang & inventori",
      "Spesifikasi cold chain",
      "Dasbor SLA & KPI logistik",
      "Rencana optimisasi biaya",
    ],
    caseStudy: {
      title: "Cold Chain Produk Segar",
      desc: "Merancang rantai dingin untuk produk perikanan dari 14 landing site ke kota-kota konsumsi.",
      result: "Susut produk turun dari 18% menjadi 6%; shelf life di rak membeli bertambah 2 hari.",
    },
  },
  {
    id: "energi",
    slug: "energi-terbarukan",
    name: "Energi Terbarukan",
    icon: "Sun",
    description:
      "Transisi energi: PLTS, biomassa, hidro, hingga energi hijau industri — dikawal studi kelayakan dan pembiayaan.",
    overview: [
      "Transisi energi bukan sekadar ganti lampu — ia mengubah ekonomi daerah. Kami membawa proyek EBT dari konsep hingga financial close dengan kalkulasi yang jujur.",
      "Kepakaran kami mencakup PLTS atap dan skala utilitas, biomassa dari limbah agrikultur, hidro mini, hingga skema energi hijau untuk kawasan industri.",
      "Setiap studi kelayakan kami lulus satu uji: apakah angkanya masih berdiri ketika harga, suku bunga, dan cuaca berubah?",
    ],
    capabilities: [
      "Solar, Hydro & Biomassa",
      "Feasibility Study & LCA",
      "Green Financing & PPA",
      "Energi untuk Kawasan Industri",
      "Permit & Regulatory Navigation",
      "O&M Strategy",
    ],
    process: [
      { title: "Skrining Lokasi", desc: "Analisis sumber daya, akses, dan kebutuhan beban." },
      { title: "Studi Kelayakan", desc: "Tekno-ekonomi, lingkungan, dan struktur legal." },
      { title: "Pembiayaan", desc: "Penyusunan skema PPA, term sheet, dan dialog penyandang dana." },
      { title: "Eksekusi", desc: "Pendampingan konstruksi hingga komisioning." },
    ],
    deliverables: [
      "Pre-feasibility & full FS",
      "Techno-economic analysis",
      "Struktur PPA & green financing",
      "Peta jalur perizinan",
      "Rencana O&M",
    ],
    caseStudy: {
      title: "PLTS Kawasan Industri",
      desc: "Studi kelayakan PLTS 25 MWp untuk kawasan industri dengan skema self-consumption.",
      result: "IRR proyek 14,2%; penghematan biaya energi penghuni kawasan 18% sejak tahun pertama.",
    },
  },
  {
    id: "kimia",
    slug: "kimia-industri",
    name: "Kimia Industri",
    icon: "FlaskConical",
    description:
      "Hilirisasi kimia: pupuk, agroindustri, oleokimia, hingga bahan baku strategis dengan prinsip green chemistry.",
    overview: [
      "Kimia adalah jembatan antara komoditas dan industri: dari kelapa sawit menjadi oleokimia, dari batu fosfat menjadi pupuk, dari limbah menjadi nilai.",
      "Kami meninjau proses, pasar, dan kepatuhan HSE dengan kacamata yang sama kuat — karena pabrik yang tidak aman adalah utang yang menunggu jatuh tempo.",
      "Prinsip kami: hilirisasi yang membangun, bukan yang mengeksploitasi — green chemistry sebagai standar, bukan pelengkap.",
    ],
    capabilities: [
      "Pupuk & Agrochemical",
      "Oleokimia & Bio-based Chemicals",
      "Process Engineering Review",
      "HSE & Green Chemistry",
      "Market & Offtake Analysis",
      "Waste-to-Value",
    ],
    process: [
      { title: "Kajian Bahan Baku", desc: "Ketersediaan, mutu, dan rantai pasok bahan baku jangka panjang." },
      { title: "Desain Proses", desc: "Review teknologi, utilitas, dan efisiensi energi." },
      { title: "Studi Pasar", desc: "Peta permintaan, pesaing, dan strategi offtake." },
      { title: "Kepatuhan", desc: "HSE, izin lingkungan, dan standar industri." },
    ],
    deliverables: [
      "Kajian kelayakan hilirisasi",
      "Review teknologi & proses",
      "Analisis pasar & offtake",
      "Panduan HSE & izin",
      "Peta jalan waste-to-value",
    ],
    caseStudy: {
      title: "Hilirisasi Limbah Sawit",
      desc: "Kajian pabrik POME-to-biogas dan potensi oleokimia hijau untuk grup agribisnis.",
      result: "Potensi pendapatan baru Rp 87 M/tahun dari energi dan produk turunan.",
    },
  },
  {
    id: "it-ai",
    slug: "it-ai",
    name: "IT & AI",
    icon: "Cpu",
    description:
      "Transformasi digital dan kecerdasan artifisial: arsitektur sistem, data platform, dan AI untuk industri & pemerintahan.",
    overview: [
      "Teknologi yang baik membuat manusia lebih manusiawi: bebas dari kerja repetitif untuk fokus pada keputusan dan kreativitas.",
      "Kami merancang arsitektur sistem, platform data, dan aplikasi AI yang benar-benar dipakai — bukan dashboard demo yang mati setelah serah terima.",
      "Dari dinas pemerintah hingga pabrik, pendekatannya sama: mulai dari proses, lalu teknologi — bukan sebaliknya.",
    ],
    capabilities: [
      "Enterprise Architecture & Cloud",
      "AI/ML untuk Operasional",
      "Data Platform & Analytics",
      "Cybersecurity & Compliance",
      "Aplikasi Web & Mobile",
      "Integrasi Sistem Legacy",
    ],
    process: [
      { title: "Pemetaan Proses", desc: "Memahami alur kerja nyata dan titik friction." },
      { title: "Arsitektur", desc: "Merancang sistem, data, dan keamanan yang siap tumbuh." },
      { title: "Build & Integrate", desc: "Pengembangan iteratif dengan umpan balik pengguna." },
      { title: "Adopsi", desc: "Pelatihan, migrasi, dan pendampingan hingga benar-benar dipakai." },
    ],
    deliverables: [
      "Dokumen arsitektur enterprise",
      "Aplikasi sistem/AI siap pakai",
      "Platform data & dasbor",
      "Kebijakan keamanan data",
      "Pelatihan tim internal",
    ],
    caseStudy: {
      title: "AI Prediksi Permintaan",
      desc: "Model prediksi permintaan untuk jaringan ritel dengan data 3 tahun penjualan.",
      result: "Akurasi ramalan 91%; stok mati turun 31% dalam satu kuartal.",
    },
  },
  {
    id: "penulisan",
    slug: "penulisan-penerbitan",
    name: "Penulisan & Penerbitan",
    icon: "PenLine",
    description:
      "Mesin penerbitan peradaban: 500 buku, jurnal internasional, dan kurikulum — dari manuskrip hingga distribusi global.",
    overview: [
      "Bangsa yang tidak menulis akan diceritakan oleh bangsa lain. Disiplin ini adalah mesin penerbitan peradaban: buku strategi, jurnal internasional, dan kurikulum.",
      "Kami menangani seluruh rantai: arsitektur buku, ghostwriting senior, editing tajam, tata letak premium, penerbitan, hingga strategi distribusi dan hak cipta.",
      "Untuk akademisi, kami membawa paper dari draf mentah hingga terbit di jurnal Q1/Q2 — dengan mentoring metodologi dan etika publikasi.",
    ],
    capabilities: [
      "Bestseller Book Architecture",
      "Ghostwriting & Editing Senior",
      "Jurnal Q1/Q2 & Peer Review",
      "Kurikulum & Learning Design",
      "Penerbitan & Hak Cipta Global",
      "Content Strategy Korporat",
    ],
    process: [
      { title: "Arsitektur", desc: "Merancang peta buku: pembaca, pesan, alur, dan janji." },
      { title: "Naskah", desc: "Penulisan/ghostwriting dengan ritme review dua mingguan." },
      { title: "Finishing", desc: "Editing tajam, layout premium, dan koreksi mutu." },
      { title: "Terbit", desc: "Penerbitan, distribusi, dan strategi pembaca." },
    ],
    deliverables: [
      "Manuskrip siap terbit",
      "Proposal penerbitan",
      "Desain sampul & layout",
      "Strategi peluncuran buku",
      "Mentoring jurnal Q1/Q2",
    ],
    caseStudy: {
      title: "Buku CEO ke Bestseller",
      desc: "Ghostwriting memoar--strategi seorang pendiri perusahaan logistik nasional.",
      result: "Masuk daftar buku bisnis terlaris nasional; menjadi alat onboarding 2.000 karyawan.",
    },
  },
];

export type Mission = {
  label: string;
  target: number;
  suffix: string;
  description: string;
};

export const missions: Mission[] = [
  {
    label: "Jiwa Terdampak",
    target: 1000000000,
    suffix: "",
    description:
      "Satu miliar jiwa tersentuh ilmu, karya, dan sistem yang memuliakan — pendidikan, pangan, energi, dan spiritualitas.",
  },
  {
    label: "Buku Diterbitkan",
    target: 500,
    suffix: "",
    description:
      "Lima ratus buku strategi, leadership, dan refleksi — pustaka peradaban yang terus menulis ulang cara Indonesia berpikir.",
  },
  {
    label: "Jurnal Internasional",
    target: 100,
    suffix: "",
    description:
      "Seratus publikasi Q1/Q2 yang menjembatani wahyu, ilmu, dan teknologi di panggung akademik dunia.",
  },
];

export type MissionPhase = {
  slug: string;
  phase: string;
  period: string;
  title: string;
  items: string[];
};

export const missionPhases: MissionPhase[] = [
  {
    slug: "fase-i-fondasi",
    phase: "Fase I — Fondasi",
    period: "2024–2025",
    title: "Membangun Mesin",
    items: [
      "Blueprint 39 dokumen dikodifikasi & diuji di lapangan",
      "Pustaka dibuka: 3 buku pertama terbit",
      "Jalur publikasi Q1/Q2 berjalan (4 paper)",
      "Program mentoring Santri Angon dibuka",
    ],
  },
  {
    slug: "fase-ii-penguatan",
    phase: "Fase II — Penguatan",
    period: "2026–2027",
    title: "Menyebar Pengaruh",
    items: [
      "30 buku terbit; 20 jurnal mencapai target",
      "Layanan menyentuh 100+ organisasi",
      "Akademi riset & penulisan berdiri",
      "Komunitas Angon nasional",
    ],
  },
  {
    slug: "fase-iii-skala",
    phase: "Fase III — Skala",
    period: "2028–2030",
    title: "Melintasi Batas",
    items: [
      "200 buku & 60 jurnal; distribusi Asia Tenggara",
      "Program pangan & energi lintas provinsi",
      "Kurikulum peradaban di kampus-kampus mitra",
      "Mentoring menjangkau 100.000 jiwa",
    ],
  },
  {
    slug: "fase-iv-warisan",
    phase: "Fase IV — Warisan",
    period: "2031+",
    title: "Menitipkan Sistem",
    items: [
      "500 buku lengkap; 100 jurnal tercapai",
      "Institusi peradaban mandiri berkelanjutan",
      "Penerjemahan karya ke 5 bahasa",
      "Generasi penerus memegang kendali sistem",
    ],
  },
];

export type BlueprintCategory = {
  slug: string;
  category: string;
  range: string;
  summary: string;
  documents: { name: string; desc: string }[];
};

export const blueprint: BlueprintCategory[] = [
  {
    slug: "governance-tata-kelola",
    category: "Visi & Tata Kelola (Governance)",
    range: "01–08",
    summary:
      "Fondasi eksistensi: mengapa organisasi ini ada, bagaimana memutuskan, dan siapa memegang amanah apa.",
    documents: [
      { name: "Grand Vision & Civilization Blueprint", desc: "Peta besar visi 10–30 tahun dan tatanan peradaban yang dituju." },
      { name: "Constitution & Guiding Principles", desc: "UUD internal: nilai, batas, dan prinsip yang tak bisa dinegosiasi." },
      { name: "Governance Structure & Org Design", desc: "Struktur kelembagaan dan hubungan antarbadan." },
      { name: "Decision Rights & Authority Matrix", desc: "Siapa memutuskan apa, sampai nilai berapa." },
      { name: "Risk Management Framework", desc: "Cara organisasi melihat, menakar, dan menjawab risiko." },
      { name: "Compliance & Legal Architecture", desc: "Peta kepatuhan hukum dan struktur entitas." },
      { name: "Ethics & Integrity Code", desc: "Kode etik yang diuji di kasus-kasus nyata." },
      { name: "Stakeholder Map & Engagement", desc: "Pemangku kepentingan dan strategi pendekatannya." },
    ],
  },
  {
    slug: "bisnis-revenue-engine",
    category: "Bisnis & Revenue Engine",
    range: "09–17",
    summary:
      "Mesin pendapatan: dari model bisnis hingga unit economics yang membuat organisasi berdiri di kakinya sendiri.",
    documents: [
      { name: "Master Business Model Canvas", desc: "Arsitektur nilai: pelanggan, kanal, dan cara menghasilkan." },
      { name: "Revenue Architecture & Pricing", desc: "Struktur pendapatan dan logika harga." },
      { name: "Go-to-Market Strategy", desc: "Cara masuk pasar dan menang di segmen awal." },
      { name: "Sales Playbook & Pipeline", desc: "Rambu penjualan: tahapan, skrip, dan metrik." },
      { name: "Partnership & Ecosystem Strategy", desc: "Kemitraan yang memperbesar kue, bukan hanya potongan." },
      { name: "Financial Model & Projection", desc: "Model keuangan 3–5 tahun dengan asumsi terbuka." },
      { name: "Investment Thesis & Term Sheet", desc: "Kisah investasi dan kerangka kesepakatan pendanaan." },
      { name: "Unit Economics & Cost Engine", desc: "Ekonomi per unit dan mesin biaya yang terkendali." },
      { name: "Brand & Communication Strategy", desc: "Kepribadian merek dan disiplin komunikasi." },
    ],
  },
  {
    slug: "operasional-supply-chain",
    category: "Operasional & Supply Chain",
    range: "18–25",
    summary:
      "Mesin gerak: cara kerja harian yang membuat janji kepada pelanggan selalu tepat.",
    documents: [
      { name: "Operating Model Blueprint", desc: "Cara organisasi beroperasi end-to-end." },
      { name: "SOP Master Library", desc: "Perpustakaan SOP seluruh fungsi kerja." },
      { name: "Supply Chain Network Design", desc: "Desain jaringan pemasok-gudang-pelanggan." },
      { name: "Logistics & Distribution SOP", desc: "Prosedur gerak barang dari hulu ke hilir." },
      { name: "Quality Management System", desc: "Sistem mutu yang terukur dan terkawal." },
      { name: "HSE & Sustainability Standard", desc: "Standar keselamatan dan keberlanjutan." },
      { name: "Procurement & Vendor Management", desc: "Cara membeli dan mengelola mitra pasokan." },
      { name: "Service Level & Performance KPI", desc: "Janji layanan dan ukuran kinerjanya." },
    ],
  },
  {
    slug: "teknologi-ai",
    category: "Teknologi & AI",
    range: "26–32",
    summary:
      "Saraf digital: sistem, data, dan kecerdasan yang membuat organisasi belajar lebih cepat.",
    documents: [
      { name: "Enterprise Technology Architecture", desc: "Peta besar sistem dan infrastruktur." },
      { name: "Data Platform & Governance", desc: "Rumah data dan tata kelolanya." },
      { name: "AI Strategy & Use-case Portfolio", desc: "Portofolio AI bernilai, bukan sekadar tren." },
      { name: "Application Roadmap & Integration", desc: "Peta aplikasi dan rencana integrasi." },
      { name: "Cybersecurity Framework", desc: "Pertahanan digital berlapis." },
      { name: "Digital Transformation Roadmap", desc: "Jalan transformasi bertahap dan realistis." },
      { name: "Innovation Lab & R&D Protocol", desc: "Cara organisasi bereksperimen dengan disiplin." },
    ],
  },
  {
    slug: "manusia-peradaban",
    category: "Manusia & Peradaban",
    range: "33–39",
    summary:
      "Jiwa organisasi: manusia, budaya, dan warisan yang bertahan setelah para pendiri pergi.",
    documents: [
      { name: "Talent & Leadership Pipeline", desc: "Cara menemukan, menumbuhkan, dan mempromosikan orang terbaik." },
      { name: "Learning Academy Curriculum", desc: "Kurikulum akademi internal." },
      { name: "Culture & Values Handbook", desc: "Buku budaya yang hidup, bukan kalender poster." },
      { name: "Communication Protocol", desc: "Rambu komunikasi internal dan eksternal." },
      { name: "Community & Social Impact Plan", desc: "Rencana dampak sosial yang nyata." },
      { name: "Publishing & Knowledge Engine", desc: "Mesin pengetahuan: dokumentasi, buku, dan kurikulum." },
      { name: "Legacy & Succession Blueprint", desc: "Rencana kepemimpinan dan warisan lintas generasi." },
    ],
  },
];

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  category: string;
  cover: string | null;
  accent: string;
  pages: number;
  year: number;
  status: string;
  synopsis: string[];
  chapters: string[];
  audience: string;
  highlights: string[];
};

export const books: Book[] = [
  {
    slug: "arsitek-peradaban",
    title: "Arsitek Peradaban",
    subtitle: "Merancang Bangsa dari Hulu Visi hingga Hilir Eksekusi",
    author: "Prabu Danling",
    category: "Strategi & Kenegaraan",
    cover: "/gunara/book-strategi.png",
    accent: "#8a5fd6",
    pages: 428,
    year: 2025,
    status: "Bestseller",
    synopsis: [
      "Bangsa tidak miskin gagasan — ia sering kehilangan jembatan antara gagasan dan eksekusi. Buku ini adalah jembatan itu: kerangka merancang peradaban dari visi paling hulu hingga checklist paling hilir.",
      "Ditulis dengan arsitektur konsultan kelas dunia namun berbahasa lapangan, buku ini menjadi pegangan eksekutif, birokrat, dan pemimpin komunitas yang lelah dengan rapat yang tidak pernah berakhir menjadi karya.",
    ],
    chapters: [
      "Mengapa Peradaban Perlu Arsitek",
      "Hulu: Visi yang Layak Warisi",
      "Middle: Sistem yang Membuat Ide Hidup",
      "Hilir: Eksekusi Tanpa Drama",
      "Menjaga: Mutu, Mutu, Mutu",
      "Menitipkan: Warisan di Atas Ego",
    ],
    audience: "Eksekutif, pemangku kebijakan, pemimpin organisasi",
    highlights: [
      "Kerangka 39 dokumen dalam satu peta",
      "Studi kasus korporasi & instansi Indonesia",
      "Template eksekusi siap pakai",
    ],
  },
  {
    slug: "ketahanan-pangan-40",
    title: "Ketahanan Pangan 4.0",
    subtitle: "Supply Chain, Logistik, dan Kedaulatan Pangan Digital",
    author: "Prabu Danling",
    category: "Pangan & Logistik",
    cover: "/gunara/book-pangan.png",
    accent: "#7a4fd0",
    pages: 386,
    year: 2025,
    status: "Baru",
    synopsis: [
      "Pangan adalah pertanyaan paling tua dan paling modern sekaligus. Buku ini menyatukan kearifan lumbung desa dengan kecerdasan rantai pasok abad ke-21.",
      "Dari buffer stock berbasis data hingga cold chain kepulauan — inilah peta lengkap membuat Indonesia makan dari mejanya sendiri, bermartabat dan bermutu.",
    ],
    chapters: [
      "Paradoks Pangan Kepulauan",
      "Hulu: Produksi yang Bermartabat",
      "Hilirisasi: Nilai yang Kembali ke Desa",
      "Distribusi: Jaringan yang Tidak Pernah Tidur",
      "Data: Lumbung Baru Bangsa",
      "Rencana Bencana & Harga",
    ],
    audience: "Pemerintah daerah, agribisnis, pelaku logistik",
    highlights: [
      "Desain buffer stock regional",
      "Model kemitraan 1.000+ petani",
      "Checklist cold chain siap adopsi",
    ],
  },
  {
    slug: "ai-untuk-negeri",
    title: "AI untuk Negeri",
    subtitle: "Kecerdasan Artifisial untuk Industri, Pemerintahan, dan Umat",
    author: "Muhammad Lutfi Azmi",
    category: "Teknologi & AI",
    cover: "/gunara/book-ai.png",
    accent: "#9a4fc9",
    pages: 352,
    year: 2026,
    status: "Pra-Order",
    synopsis: [
      "Kecerdasan artifisial bukan dewa baru yang harus disembah, bukan pula iblis yang harus dibakar — ia alat, dan alat adalah amanah.",
      "Buku ini memandu pemimpin Indonesia mengadopsi AI dengan bijak: meningkatkan layanan, menjaga martabat manusia, dan tetap berdiri di atas fondasi iman.",
    ],
    chapters: [
      "AI dalam Bingkai Epistemologi",
      "Peta Kematangan Digital Negeri",
      "Use-case yang Bernilai Nyata",
      "Data: Jujur, Aman, Bermartabat",
      "Risiko, Etika, dan Batas",
      "Peta Jalan Organisasi",
    ],
    audience: "Pemimpin organisasi, CIO, akademisi, pejabat publik",
    highlights: [
      "Kerangka adopsi AI beretika",
      "20 use-case siap pilih",
      "Checklist kesiapan data",
    ],
  },
  {
    slug: "pemimpin-sistemik",
    title: "Pemimpin Sistemik",
    subtitle: "Dari Kepribadian Karismatik ke Sistem yang Abadi",
    author: "Prabu Danling",
    category: "Leadership",
    cover: null,
    accent: "#8a5fd6",
    pages: 312,
    year: 2024,
    status: "Terbit",
    synopsis: [
      "Organisasi yang bergantung pada satu orang hebat adalah organisasi rapuh. Buku ini mengajari cara mengubah karisma menjadi sistem yang hidup jauh setelah pemimpinnya pergi.",
      "Penuh ilustrasi nyata dari papan direksi hingga gudang — ditulis untuk mereka yang ingin perusahaan matang, bukan sekadar besar.",
    ],
    chapters: [
      "Jebakan Pahlawan Tunggal",
      "Anatomi Sistem",
      "Delegasi yang Berani",
      "Ritme Review",
      "Keberanian Mengganti Diri Sendiri",
    ],
    audience: "Founder, CEO, direktur operasional",
    highlights: ["Audit kepemimpinan 40 poin", "Kerangka suksesi", "Ritme kuartalan"],
  },
  {
    slug: "supply-chain-kepulauan",
    title: "Supply Chain Kepulauan",
    subtitle: "Menggerakkan Barang di Negeri 17.000 Pulau",
    author: "Prabu Danling",
    category: "Logistik",
    cover: null,
    accent: "#b05ac9",
    pages: 298,
    year: 2025,
    status: "Terbit",
    synopsis: [
      "Indonesia bukan pasar tunggal — ia ribuan pasar yang terhubung laut dan jalan. Buku ini merumuskan logistik yang menerima kenyataan itu, bukan membasahinya.",
      "Dari network design hingga last-mile di jalan desa: kerangka, angka, dan kejujuran lapangan.",
    ],
    chapters: [
      "Geografi sebagai Takdir & Peluang",
      "Network Design Kepulauan",
      "Gudang Regional yang Benar",
      "Transportasi Multimoda",
      "Biaya Terakhir: Last-Mile",
    ],
    audience: "Praktisi logistik, investor infrastruktur",
    highlights: ["Model 7 regional hub", "Kalkulator rute & biaya", "Studi kasus 3 industri"],
  },
  {
    slug: "energi-seribu-desa",
    title: "Energi untuk Seribu Desa",
    subtitle: "Skema Pembangkit Terbarukan Skala Komunitas",
    author: "Prabu Danling",
    category: "Energi",
    cover: null,
    accent: "#8a5fd6",
    pages: 264,
    year: 2026,
    status: "Pra-Order",
    synopsis: [
      "Listrik yang stabil mengubah desa lebih dari sekadar terang: kulkas klinik, internet sekolah, gilingan koperasi. Buku ini merancang skema pembangkit komunitas yang benar-benar berkelanjutan.",
      "Teknis, finansial, dan sosial — tiga kaki kursi yang harus sama kuat.",
    ],
    chapters: [
      "Energi dan Martabat Desa",
      "Memilih Teknologi yang Tepat",
      "Skema Pembiayaan Komunitas",
      "Operasi & Pemeliharaan Lokal",
      "Dari Desa ke Kawasan",
    ],
    audience: "Pemerintah desa, BUMDes, investor dampak",
    highlights: ["3 skema pembiayaan", "Manual O&M komunitas", "Studi kasus 5 desa"],
  },
  {
    slug: "kimia-yang-membangun",
    title: "Kimia yang Membangun",
    subtitle: "Hilirisasi Industri dengan Green Chemistry",
    author: "Muhammad Lutfi Azmi",
    category: "Kimia Industri",
    cover: null,
    accent: "#8f4fb0",
    pages: 276,
    year: 2026,
    status: "Penulisan",
    synopsis: [
      "Industri kimia sering dituduh sebagai penjahat lingkungan — dan sering memang demikian. Buku ini menawarkan jalan ketiga: hilirisasi yang kaya sekaligus bersih.",
      "Ditulis untuk pengambil keputusan, bukan untuk laboratorium: bahasa bisnis, angka proses, dan kompas etika.",
    ],
    chapters: [
      "Kimia sebagai Jembatan Nilai",
      "Bahan Baku Strategis Nusantara",
      "Proses Efisien, Energi Rendah",
      "HSE sebagai Investasi",
      "Pasar & Offtake Hijau",
    ],
    audience: "Pengusaha industri, regulator, insinyur proses",
    highlights: ["Peta peluang hilirisasi", "Kerangka green chemistry", "Studi techno-economic"],
  },
  {
    slug: "ekonomi-pangan-umat",
    title: "Ekonomi Pangan Umat",
    subtitle: "Bisnis Pangan yang Memuliakan Rantainya",
    author: "Gugun Gunara",
    category: "Bisnis Pangan",
    cover: null,
    accent: "#7a4fd0",
    pages: 288,
    year: 2025,
    status: "Terbit",
    synopsis: [
      "Bisnis pangan yang adil tidak membayar termurah — ia membangun rantai di mana petani, pengerot, distributor, dan pengecer semua bisa bernapas.",
      "Buku ini memadukan prinsip ekonomi syariah dengan disiplin supply chain modern untuk membangun bisnis pangan yang tahan uji dan tahan doa.",
    ],
    chapters: [
      "Rantai yang Berpihak",
      "Harga yang Jujur",
      "Keuangan Tanpa Riba",
      "Kemitraan, Bukan Perbudakan",
      "Skala dengan Martabat",
    ],
    audience: "Pengusaha pangan, koperasi, filantropi Islam",
    highlights: ["Model bagi hasil rantai", "Struktur keuangan syariah", "Template kemitraan"],
  },
  {
    slug: "menulis-untuk-abadi",
    title: "Menulis untuk Abadi",
    subtitle: "Arsitektur Buku yang Mengubah Pembaca",
    author: "Prabu Danling",
    category: "Penulisan",
    cover: null,
    accent: "#8a5fd6",
    pages: 240,
    year: 2024,
    status: "Terbit",
    synopsis: [
      "Buku yang baik tidak menyombongkan penulisnya — ia melayani pembacanya. Buku ini membongkar arsitektur menulis buku nonfiksi yang benar-benar dihabiskan pembacanya.",
      "Kerangka bab, ritme narasi, kejujuran data, hingga keberanian menyunting kalimat kesayangan sendiri.",
    ],
    chapters: [
      "Janji kepada Pembaca",
      "Peta Bab yang Menjemput",
      "Ritme: Sunyi, Cepat, Tenang",
      "Data yang Jujur",
      "Menyunting tanpa Menyesal",
    ],
    audience: "Penulis, pemimpin yang ingin menulis, editor",
    highlights: ["Template arsitektur bab", "Ritual menulis harian", "Checklist naskah final"],
  },
  {
    slug: "angon-puisi",
    title: "Angon: Puisi untuk yang Terpuruk",
    subtitle: "Kumpulan Puisi dan Refleksi Santri Angon",
    author: "Santri Angon",
    category: "Puisi & Refleksi",
    cover: null,
    accent: "#6d4fb8",
    pages: 168,
    year: 2025,
    status: "Terbit",
    synopsis: [
      "Antologi puisi dan refleksi untuk jiwa-jiwa yang lelah: para pemimpi yang gagal, para pekerja sunyi, para hati yang butuh dikatakan 'kamu tidak sendirian'.",
      "Ditulis malam demi malam, dibagikan gratis sebelum akhirnya dikumpulkan menjadi buku — karena penghiburan tidak seharusnya mahal.",
    ],
    chapters: [
      "Angon",
      "Cahaya Paling Pelan",
      "Arsitek dan Debu",
      "Subuh Sang Pemulung",
      "Surat untuk Ayah",
      "Doa Para Pembangun Jembatan",
    ],
    audience: "Siapa pun yang sedang dalam perjalanan pulih",
    highlights: ["60+ puisi & refleksi", "Panduan refleksi mingguan", "Ruaman curhat digital"],
  },
  {
    slug: "peradaban-digital-epistemologi",
    title: "Peradaban Digital & Epistemologi",
    subtitle: "Kerangka Riset Integrasi Ilmu dan Wahyu",
    author: "Muhammad Lutfi Azmi",
    category: "Riset & Akademik",
    cover: null,
    accent: "#5a4fd0",
    pages: 320,
    year: 2026,
    status: "Pra-Order",
    synopsis: [
      "Bagaimana umat ini hadir di panggung ilmu global tanpa kehilangan jati dirinya? Buku ini merumuskan kerangka epistemologi yang menghubungkan wahyu, ilmu modern, dan teknologi digital.",
      "Sebuah karya akademik yang jujur: metodologis namun membumi, kritis namun memuliakan.",
    ],
    chapters: [
      "Krisis Epistemologi Umat",
      "Peta Jalan Integrasi",
      "Metodologi Riset Peradaban",
      "Teknologi sebagai Ruang Amal",
      "Agenda Riset 10 Tahun",
    ],
    audience: "Akademisi, peneliti, mahasiswa pascasarjana",
    highlights: ["Kerangka integrasi orisinal", "Panduan publikasi Q1/Q2", "Agenda riset terbuka"],
  },
  {
    slug: "blueprint-39-arsip",
    title: "Blueprint 39: Arsip Dokumen Peradaban",
    subtitle: "Versi Lengkap dan Cara Menggunakannya",
    author: "Gugun Gunara",
    category: "Governance",
    cover: null,
    accent: "#a24fc9",
    pages: 512,
    year: 2026,
    status: "Terbatas",
    synopsis: [
      "Dokumentasi lengkap dari Blueprint 39 Dokumen — konstitusi internal, bisnis, operasional, teknologi, hingga warisan — dengan panduan cara mengadopsinya dalam organisasi Anda.",
      "Diterbitkan terbatas untuk klien, mitra, dan institusi pendidikan.",
    ],
    chapters: [
      "Cara Membaca Arsip",
      "Governance (01–08)",
      "Bisnis (09–17)",
      "Operasional (18–25)",
      "Teknologi (26–32)",
      "Manusia (33–39)",
    ],
    audience: "Klien enterprise, mitra institusi, akademisi manajemen",
    highlights: ["39 template asli", "Panduan adopsi bertahap", "Akses pembaruan berkala"],
  },
];

export type JournalEntry = {
  slug: string;
  title: string;
  venue: string;
  quartile: string;
  year: string;
  field: string;
  status: string;
  abstract: string;
};

export const journals: JournalEntry[] = [
  {
    slug: "digital-civilization-framework",
    title:
      "Digital Civilization Framework: Integrating Islamic Epistemology with Enterprise Architecture",
    venue: "International Journal of Information Systems & Social Change",
    quartile: "Q1",
    year: "2025",
    field: "IT & AI / Epistemologi",
    status: "Terbit",
    abstract:
      "Mengusulkan kerangka integrasi epistemologi Islam dengan enterprise architecture untuk memandu transformasi digital organisasi berbasis nilai.",
  },
  {
    slug: "resilient-food-supply-chain",
    title:
      "Resilient Food Supply Chain Design for Archipelagic Nations: A Multi-Tier Network Model",
    venue: "Supply Chain Management Review (Scopus)",
    quartile: "Q1",
    year: "2025",
    field: "Ketahanan Pangan / Logistik",
    status: "Terbit",
    abstract:
      "Model jaringan multi-tingkat untuk ketahanan rantai pasok pangan negara kepulauan, diuji dengan simulasi gangguan iklim dan harga.",
  },
  {
    slug: "green-energy-transition",
    title:
      "Green Energy Transition in Emerging Economies: Policy Instruments and Industrial Readiness",
    venue: "Energy Policy & Sustainability (Scopus)",
    quartile: "Q2",
    year: "2026",
    field: "Energi Terbarukan",
    status: "Dalam Review",
    abstract:
      "Analisis instrumen kebijakan transisi energi dan kesiapan industri manufaktur di ekonomi berkembang.",
  },
  {
    slug: "spiritual-capital-performance",
    title:
      "Spiritual Capital and Organizational Performance: A Phenomenological Study of Purpose-Driven Enterprises",
    venue: "Journal of Business Ethics (Scopus)",
    quartile: "Q1",
    year: "2026",
    field: "Manajemen / Spiritualitas",
    status: "Penulisan",
    abstract:
      "Studi fenomenologis bagaimana modal spiritual memengaruhi kinerja organisasi yang didorong tujuan.",
  },
  {
    slug: "buffer-stock-optimization",
    title:
      "Optimizing Regional Buffer Stocks Under Climate Uncertainty: An Indonesian Case",
    venue: "Food Policy (Scopus)",
    quartile: "Q1",
    year: "2026",
    field: "Ketahanan Pangan",
    status: "Dalam Review",
    abstract:
      "Optimisasi cadangan pangan regional dengan ketidakpastian iklim menggunakan pemrograman stokastik.",
  },
  {
    slug: "cold-chain-archipelago",
    title:
      "Cold Chain Architecture for Perishable Fisheries in Archipelagic Logistics Networks",
    venue: "International Journal of Logistics Management",
    quartile: "Q2",
    year: "2026",
    field: "Logistik",
    status: "Penulisan",
    abstract:
      "Perancangan arsitektur rantai dingin perikanan untuk jaringan logistik kepulauan dengan analisis susut.",
  },
  {
    slug: "ai-governance-public-sector",
    title:
      "AI Governance in the Public Sector: A Maturity Model for Local Governments",
    venue: "Government Information Quarterly",
    quartile: "Q1",
    year: "2027",
    field: "IT & AI",
    status: "Proposal",
    abstract:
      "Mengembangkan model kematangan tata kelola AI untuk pemerintah daerah di negara berkembang.",
  },
  {
    slug: "green-chemistry-oleochemicals",
    title:
      "Green Chemistry Pathways for Palm-Based Oleochemical Value Chains: A Techno-Economic Review",
    venue: "Journal of Cleaner Production",
    quartile: "Q1",
    year: "2027",
    field: "Kimia Industri",
    status: "Proposal",
    abstract:
      "Kajian techno-economik jalur green chemistry untuk rantai nilai oleokimia berbasis sawit.",
  },
  {
    slug: "waste-to-value-biogas",
    title:
      "Waste-to-Value: Biogas Economics from Palm Oil Mill Effluent in Smallholder Clusters",
    venue: "Biomass & Bioenergy",
    quartile: "Q2",
    year: "2026",
    field: "Energi / Kimia",
    status: "Dalam Review",
    abstract:
      "Analisis ekonomi biogas dari limbah cair sawit pada kluster petani kecil.",
  },
  {
    slug: "leadership-succession-family-business",
    title:
      "Systemic Leadership and Succession in Indonesian Family Businesses: A Mixed-Methods Study",
    venue: "Asia Pacific Journal of Management",
    quartile: "Q1",
    year: "2027",
    field: "Manajemen",
    status: "Penulisan",
    abstract:
      "Studi campuran tentang kepemimpinan sistemik dan suksesi dalam bisnis keluarga Indonesia.",
  },
  {
    slug: "islamic-finance-food-value-chain",
    title:
      "Islamic Finance Instruments for Inclusive Food Value Chains: Evidence from Cooperative Models",
    venue: "Journal of Islamic Accounting and Business Research",
    quartile: "Q2",
    year: "2026",
    field: "Bisnis / Pangan",
    status: "Dalam Review",
    abstract:
      "Bukti empiris instrumen keuangan syariah untuk rantai nilai pangan inklusif pada model koperasi.",
  },
  {
    slug: "publishing-knowledge-engine",
    title:
      "Building a Nation-Scale Knowledge Publishing Engine: Lessons from a 500-Book Roadmap",
    venue: "Learned Publishing",
    quartile: "Q2",
    year: "2027",
    field: "Penulisan / Penerbitan",
    status: "Proposal",
    abstract:
      "Pelajaran dari perancangan mesin penerbitan skala nasional dengan roadmap 500 buku.",
  },
];

export type Poem = {
  slug: string;
  title: string;
  verses: string[];
  note: string;
};

export const poems: Poem[] = [
  {
    slug: "angon",
    title: "Angon",
    verses: [
      "Aku menggembala sunyi di tepi waktu,",
      "menitipkan luka pada angin subuh —",
      "sebab Tuhan tidak pernah tidur",
      "sebelum mengembalikan yang hilang,",
      "lebih utuh dari semula.",
    ],
    note: "Ditulis untuk siapa pun yang malam ini merasa hilang.",
  },
  {
    slug: "cahaya-paling-pelan",
    title: "Cahaya Paling Pelan",
    verses: [
      "Jangan takut pada kegelapanmu,",
      "ia hanyalah ruang tunggu cahaya.",
      "Bahwa cahaya paling pelan sekalipun",
      "tetap berjalan menemukamu —",
      "sabarlah, kau sedang dicintai.",
    ],
    note: "Refleksi untuk para pejuang sunyi.",
  },
  {
    slug: "arsitek-dan-debu",
    title: "Arsitek dan Debu",
    verses: [
      "Ia merancang menara dari debu,",
      "lalu berlutut memungut debu itu satu-satu.",
      "Sebab peradaban tidak lahir dari impian yang angkuh,",
      "tapi dari tangan yang rela kotor",
      "membangun mimpi yang mulia.",
    ],
    note: "Untuk para pembangun yang tak dikenal namanya.",
  },
  {
    slug: "subuh-sang-pemulung",
    title: "Subuh Sang Pemulung",
    verses: [
      "Sebelum azan pertama menyentuh jalan,",
      "ia sudah mengulang takdir dengan tangannya;",
      "memungut sisa dunia orang lain",
      "agar anaknya berhak pada mimpi yang utuh.",
      "Subuh ini, Tuhan berdiri paling dekat padanya.",
    ],
    note: "Untuk para pekerja sunyi sebelum kota bangun.",
  },
  {
    slug: "surat-untuk-ayah",
    title: "Surat untuk Ayah",
    verses: [
      "Ayah, aku menjual sebagian mimpiku,",
      "sebulan sekali, di ujung bulan yang panjang —",
      "dan selalu kau bilang: yang penting halal,",
      "yang penting jangan pinjam malu pada tetangga.",
      "Ayah, tahukah engkau: itulah kuliah terbaikku.",
    ],
    note: "Untuk para ayah yang membangun dengan tangan yang kasar dan hati yang halus.",
  },
  {
    slug: "doa-pembangun-jembatan",
    title: "Doa Para Pembangun Jembatan",
    verses: [
      "Mereka tidak pernah menyeberang",
      "di atas jembatan yang mereka bangun;",
      "namun setiap paku yang mereka jatuhkan",
      "menjadi doa panjang yang berbentuk kayu —",
      "agar orang lain sampai, meski mereka tinggal.",
    ],
    note: "Untuk para pendiri yang tidak ikut menikmati bangunan.",
  },
  {
    slug: "larik-untuk-yang-lelah",
    title: "Larik untuk yang Lelah Bermimpi",
    verses: [
      "Mimpimu boleh lelah,",
      "asal jangan kau kubur sembari bernapas.",
      "Letakkan sejenak di tepi jalan,",
      "minumlah, makanlah, berdoalah —",
      "lalu angkat lagi: ia masih ingat wajahmu.",
    ],
    note: "Dikirim setiap kali ada yang bilang 'sudah cukup, aku menyerah'.",
  },
  {
    slug: "akar",
    title: "Akar",
    verses: [
      "Pohon besar tidak pernah memamerkan akarnya,",
      "tapi seluruh kemegahannya adalah akar.",
      "Begitulah orang baik: bekerja diam-diam,",
      "memegang tanah yang lembap dan gelap,",
      "agar orang lain boleh memandang langit.",
    ],
    note: "Untuk mereka yang setia pada pekerjaan yang tak terlihat.",
  },
];

export const quotes: string[] = [
  "Peradaban tidak dibangun oleh yang paling pintar, tapi oleh yang paling setia pada amanahnya.",
  "Ilmu tanpa amal adalah bayangan; amal tanpa ilmu adalah badai; keduanya adalah cahaya.",
  "Menulis adalah cara paling murah untuk hidup seribu tahun.",
  "Ketika logistik berhenti, bangsa berhenti. Maka jangan pernah meremehkan yang menggerakkan barang.",
  "Sistem yang baik memuliakan orang jujur dan melelahkan orang yang bermaksud buruk.",
  "Doa tanpa kerja adalah angan; kerja tanpa doa adalah sombong; keduanya adalah jalan.",
  "Jangan hanya membangun karier — bangun juga yang bisa kau titipkan.",
  "Kita tidak mewarisi bumi dari orang tua; kita meminjamnya dari anak cucu.",
];

export type FaqItem = { q: string; a: string; category: string };

export const faqs: FaqItem[] = [
  {
    q: "Apa bedanya Gugun Gunara, M. Lutfi Azmi, Prabu Danling, dan Santri Angon?",
    a: "Keduanya satu orang yang sama, dengan empat medan kerja. Gugun Gunara menangani duniawi-negara (konsultan, bisnis, legal). M. Lutfi Azmi menangani ruhani-ilahi (riset, jurnal, akademik). Prabu Danling adalah pena eksekusi untuk buku strategi & leadership. Santri Angon adalah pena refleksi untuk puisi dan mentoring jiwa.",
    category: "Umum",
  },
  {
    q: "Bagaimana memulai kerja sama?",
    a: "Mulailah dari satu percakapan. Kirim pesan lewat halaman Kontak (atau tombol Mulai Kolaborasi), ceritakan konteks dan tujuan Anda. Tim kami membalas maksimal 1×24 jam kerja dengan usulan langkah pertama yang konkret.",
    category: "Umum",
  },
  {
    q: "Apakah konsultasi bisa dilakukan untuk instansi pemerintah daerah?",
    a: "Ya. Program pangan, logistik, dan energi banyak dikerjakan bersama pemerintah daerah dan BUMN. Dokumen keluaran disusun agar memenuhi standar perencanaan dan pertanggungjawaban instansi.",
    category: "Layanan",
  },
  {
    q: "Berapa lama proyek Enterprise Blueprint berjalan?",
    a: "Umumnya 3–4 bulan untuk penyusunan 39 dokumen, disusul pendampingan 12 bulan opsional. Ada pula format bertahap per kategori dokumen sesuai urgensi organisasi Anda.",
    category: "Layanan",
  },
  {
    q: "Apakah layanan tersedia di luar kota / luar Jawa?",
    a: "Ya. Kami bekerja hibrida: daring untuk sesi harian, dan kunjungan lapangan terjadwal untuk audit, pilot, dan workshop. Seluruh Indonesia kami layani.",
    category: "Layanan",
  },
  {
    q: "Bagaimana skema pembayaran layanan?",
    a: "Bertahap per milestone dengan kontrak tertulis. Untuk proyek pemerintah kami menyesuaikan dengan mekanisme pengadaan yang berlaku.",
    category: "Layanan",
  },
  {
    q: "Saya punya manuskrip/buku — apakah bisa dibantu terbit?",
    a: "Bisa. Program penerbitan mencakup arsitektur buku, editing senior, layout premium, hingga strategi peluncuran. Jika Anda belum punya naskah, tersedia ghostwriting senior dari nol.",
    category: "Penerbitan",
  },
  {
    q: "Bagaimana cara membawa paper saya ke jurnal Q1/Q2?",
    a: "Ikuti program mentoring publikasi: penilaian kesiapan naskah, perbaikan metodologi, pemilihan jurnal target, hingga menanggapi reviewer. Durasi bervariasi 3–9 bulan tergantung kondisi naskah.",
    category: "Penerbitan",
  },
  {
    q: "Apakah ghostwriting terhitung etis?",
    a: "Etis selama transparan dan berizin. Ide, pengalaman, dan otoritas tetap milik Anda; kami menghadirkan kerangka dan bahasa. Banyak pemimpin besar bekerja seperti ini — apa yang penting adalah isi yang benar.",
    category: "Penerbitan",
  },
  {
    q: "Apa itu program Mentoring Angon 90 hari?",
    a: "Pendampingan pemulihan jiwa untuk mereka yang terpuruk: tiga fase — stabilisasi, membangun kebiasaan ilahi, dan misi hidup baru. Dijalankan privat dengan kerahasiaan penuh, gratis bagi yang benar-benar tidak mampu.",
    category: "Mentoring",
  },
  {
    q: "Apakah data dan cerita saya aman?",
    a: "Sepenuhnya. Kami memegang prinsip amanah: data klien tidak dibagikan ke pihak mana pun, dan sesi mentoring tidak pernah dicatat tanpa izin.",
    category: "Mentoring",
  },
  {
    q: "Bagaimana cara berlangganan Surat Peradaban?",
    a: "Masukkan email Anda pada formulir berlangganan (di halaman Surat Peradaban atau bagian bawah halaman Kontak). Satu surat setiap Jumat — riset, potongan buku, puisi, dan blueprint praktis. Gratis, dan bisa berhenti kapan saja.",
    category: "Umum",
  },
];

export const timeline = [
  {
    year: "2009",
    title: "Awal Praktik: Satu Meja dan Satu Keyakinan",
    desc: "Karier konsultansi bisnis dimulai pada 2009 dengan satu keyakinan yang terus dipakai hingga kini: Indonesia tidak kekurangan gagasan — ia kekurangan sistem yang mengeksekusi gagasan itu dengan disiplin.",
    photo: "/gunara/foto/gugun-gunara-awal-karier-2009.jpeg",
  },
  {
    year: "2010–2013",
    title: "Tahun-Tahun Pembentukan",
    desc: "Belajar dari lapangan: perizinan, keuangan, operasional, dan tata kelola. Semua dilakukan langsung di meja klien — bukan dari balik slide.",
    photo: "/gunara/foto/gugun-gunara-masa-muda.jpeg",
  },
  {
    year: "2014–2017",
    title: "Jejaring Internasional & Kemitraan McKinsey",
    desc: "Praktik meluas ke proyek lintas negara dan berkolaborasi dalam jejaring konsultan internasional — termasuk kemitraan kerja bersama konsultan McKinsey — membawa standar metodologi kelas dunia ke klien Indonesia.",
  },
  {
    year: "2018–2021",
    title: "Ekosistem Perusahaan Dibangun",
    desc: "Layanan terstruktur lahir satu per satu: perizinan & legalitas, konsultansi bisnis, pendampingan perhajian, hingga solusi digital — menjadi fondasi lima perusahaan yang berjalan hari ini.",
  },
  {
    year: "2022–2023",
    title: "Pena Eksekusi dan Pena Refleksi",
    desc: "Prabu Danling mulai menulis buku strategi; Santri Angon menggembala jiwa-jiwa yang terpuruk lewat puisi dan pendampingan. Dua pena, satu arah.",
  },
  {
    year: "2024",
    title: "39 Dokumen Dikodifikasi",
    desc: "Seluruh metode yang teruji 15+ tahun dirumuskan menjadi Blueprint 39 Dokumen — enterprise architecture yang menjadi tulang punggung setiap penugasan konsultansi.",
  },
  {
    year: "2025",
    title: "Pusat Sertifikasi & Akreditasi",
    desc: "Dibuka pusat sertifikasi kompetensi dengan standar akreditasi terbaik — memastikan kualitas konsultan dan profesional yang didampingi terukur, terverifikasi, dan diakui.",
  },
  {
    year: "2026",
    title: "Gunara.web.id: Satu Atap Peradaban",
    desc: "Ekosistem resmi diluncurkan — 17+ tahun praktik, 5 perusahaan, layanan, karya, riset, dan mentoring terhubung dalam satu ruang digital.",
  },
];

// ------------------------------------------------------------
// GRUP PERUSAHAAN — 5 perusahaan milik Gugun Gunara
// ------------------------------------------------------------
export type Company = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  longDescription: string[];
  services: string[];
  audience: string;
  differentiators: string[];
  icon: string;
};

export const companies: Company[] = [
  {
    slug: "pusatperizinan",
    name: "Pusat Perizinan",
    domain: "pusatperizinan.com",
    url: "https://pusatperizinan.com",
    tagline: "Perizinan Usaha & Legalitas Tanpa Drama",
    description:
      "Layanan pendampingan perizinan usaha dan legalitas perusahaan: dari NIB, sertifikat standar, halal, hingga perizinan sektor tertentu — dikerjakan cepat, benar, dan terdokumentasi.",
    longDescription: [
      "Pusat Perizinan adalah gerbang legalitas usaha. Banyak pengusaha kehilangan waktu berbulan-bulan karena berkas yang salah, jalur yang tidak dipahami, dan tanda tangan yang menggantung — di sinilah layanan ini masuk.",
      "Setiap proses didampingi end-to-end: pemetaan perizinan yang dibutuhkan, penyiapan dokumen, pengurusan, hingga serah terima berkas resmi. Klien mendapat peta legalitas yang jelas, bukan sekadar surat jadi.",
      "Standar pekerjaan mengacu pada pengalaman konsultansi 17+ tahun: setiap berkas diperiksa ganda, setiap jalur dijelaskan, setiap status dilaporkan.",
    ],
    services: [
      "NIB & Legalitas Dasar Usaha",
      "Sertifikat Standar & Perizinan Sektor",
      "Sertifikasi Halal & Mutu Produk",
      "Legalitas Badan Hukum & Perjanjian",
      "Konsultasi Kepatuhan Regulasi",
    ],
    audience: "UMKM yang naik kelas, perusahaan baru, ekspansi sektor reguler",
    differentiators: [
      "Didukung praktik konsultansi 17+ tahun",
      "Peta perizinan jelas sebelum kerja dimulai",
      "Laporan status transparan sampai selesai",
    ],
    icon: "stamp",
  },
  {
    slug: "topkonsultan",
    name: "Top Konsultan",
    domain: "topkonsultan.web.id",
    url: "https://topkonsultan.web.id",
    tagline: "Konsultasi Bisnis & Manajemen Kelas Dunia",
    description:
      "Firma konsultansi bisnis dan manajemen: strategi, struktur organisasi, SOP, hingga Blueprint 39 Dokumen — dibangun dari pengalaman nyata lebih dari 17 tahun.",
    longDescription: [
      "Top Konsultan adalah rumah utama praktik konsultansi. Di sinilah metodologi yang teruji sejak 2009 dikemas menjadi penugasan yang jelas: diagnosis, desain sistem, dan pendampingan eksekusi.",
      "Setiap penugasan berangkat dari masalah nyata klien — bukan template. Output selalu berbentuk dokumen yang hidup: blueprint, SOP, struktur organisasi, KPI, dan peta jalan yang bisa langsung dijalankan.",
      "Standar yang dipegang: setiap dokumen setara kualitas konsultan kelas dunia — kerangka sekelas McKinsey, angka sekelas BlackRock, kedalaman sekelas akademik Harvard dan MIT.",
    ],
    services: [
      "Konsultasi Strategi & Bisnis Model",
      "Enterprise Architecture 39 Dokumen",
      "SOP, Struktur Organisasi & KPI",
      "Studi Kelayakan & Riset Pasar",
      "Advisory Eksekutif & Pendampingan",
    ],
    audience: "Korporasi, grup usaha, BUMD, dan pendiri perusahaan",
    differentiators: [
      "Metodologi teruji 17+ tahun praktik nyata",
      "Kemitraan kerja bersama konsultan McKinsey",
      "Output dokumen yang hidup, bukan slide kosong",
    ],
    icon: "briefcase",
  },
  {
    slug: "komitehaji",
    name: "Komite Haji",
    domain: "komitehaji.id",
    url: "https://komitehaji.id",
    tagline: "Edukasi & Pendampingan Perhajian",
    description:
      "Platform edukasi dan pendampingan perhajian: kesiapan manasik, logistik perjalanan, hingga pendampingan spiritual — supaya pergi sebagai tamu, pulang sebagai pribadi baru.",
    longDescription: [
      "Komite Haji lahir dari kegelisahan: banyak jamaah berangkat dengan bekal fisik lengkap tetapi kesiapan ilmu dan mental yang tipis. Platform ini menghadirkan persiapan yang utuh.",
      "Layanan mencakup edukasi manasik tahap demi tahap, kesiapan administrasi dan logistik, hingga pendampingan kelompok selama rangkaian perhajian berlangsung.",
      "Pendekatan yang sama dengan konsultansi: sistem yang rapi, jadwal yang jelas, dan pendamping yang benar-benar hadir.",
    ],
    services: [
      "Kelas Manasik & Kesiapan Perhajian",
      "Pendampingan Administrasi & Registrasi",
      "Pendampingan Kelompok Jamaah",
      "Edukasi Pra-Pasca Perhajian",
      "Komunitas Kajian Tamu Allah",
    ],
    audience: "Calon jamaah haji & umrah, keluarga jamaah, komunitas muslim",
    differentiators: [
      "Pendekatan sistematis khas konsultan",
      "Pendampingan manusiawi, bukan sekadar tur",
      "Materi edukasi berlapis: fiqih, mental, sosial",
    ],
    icon: "moon",
  },
  {
    slug: "pppdigital",
    name: "PPP Digital",
    domain: "pppdigital.id",
    url: "https://pppdigital.id",
    tagline: "Transformasi Digital & Solusi Teknologi",
    description:
      "Mitra transformasi digital untuk pemerintah dan swasta: strategi digital, pengembangan sistem, hingga kepemimpinan teknologi — teknologi yang melayani sistem, bukan sebaliknya.",
    longDescription: [
      "PPP Digital menggabungkan dua dunia yang jarang bertemu: pemahaman birokrasi dan bisnis yang dalam, dengan kecakapan teknologi yang benar.",
      "Fokusnya bukan membuat aplikasi serba bisa, melainkan membangun sistem yang benar-benar dipakai: alur kerja yang tertata, data yang terawat, dan adopsi pengguna yang nyata.",
      "Nama PPP Digital mencerminkan pendekatan kemitraan publik-swasta dalam kanal digital — jembatan antara layanan negara dan kecepatan swasta.",
    ],
    services: [
      "Strategi & Peta Jalan Transformasi Digital",
      "Pengembangan Sistem & Portal Layanan",
      "Konsultasi AI & Otomasi Proses",
      "Tata Kelola Data & Keamanan",
      "Pendampingan Adopsi Teknologi",
    ],
    audience: "Instansi pemerintah, BUMD, korporasi yang bertransformasi",
    differentiators: [
      "Paham birokrasi sekaligus teknologi",
      "Teknologi mengikuti sistem kerja, bukan menggantikannya",
      "Fokus adopsi nyata, bukan launching seremonial",
    ],
    icon: "cpu",
  },
  {
    slug: "pppbisnis",
    name: "PPP Bisnis",
    domain: "pppbisnis.com",
    url: "https://pppbisnis.com",
    tagline: "Kemitraan Bisnis & Kerja Sama Publik-Swasta",
    description:
      "Platform kemitraan bisnis dan kemitraan publik-swasta: perancangan kerja sama, struktur kepentingan, hingga pendampingan negosiasi — kemitraan yang adil dan bertahan lama.",
    longDescription: [
      "PPP Bisnis mengurus satu hal yang paling sering gagal: kemitraan. Banyak kerja sama bisnis runtuh bukan karena gagasan buruk, melainkan karena struktur kepentingan yang tak jelas sejak awal.",
      "Layanan mencakup perancangan skema kemitraan, penyiapan dokumen kerja sama, pemetaan risiko, hingga pendampingan negosiasi antarpihak — termasuk skema kerja sama publik-swasta.",
      "Prinsip yang dipegang: kemitraan yang baik ditulis tegas di awal, dijalankan adil di tengah, dan diselesaikan terhormat di akhir.",
    ],
    services: [
      "Perancangan Skema Kemitraan",
      "Dokumen Kerja Sama & Perjanjian",
      "Pemetaan Risiko & Pembagian Tanggung Jawab",
      "Pendampingan Negosiasi Bisnis",
      "Skema Kerja Sama Publik-Swasta",
    ],
    audience: "Pemilik usaha, investor, instansi pemerintah, grup bisnis keluarga",
    differentiators: [
      "Struktur kepentingan jelas sejak awal",
      "Pengalaman lintas sektor publik & swasta",
      "Didukung praktik konsultansi 17+ tahun",
    ],
    icon: "handshake",
  },
];

// ------------------------------------------------------------
// PUSAT SERTIFIKASI & AKREDITASI
// ------------------------------------------------------------
export type Certification = {
  slug: string;
  name: string;
  level: string;
  duration: string;
  description: string;
  outcomes: string[];
  requirements: string;
};

export const certifications: Certification[] = [
  {
    slug: "konsultan-bisnis-terapan",
    name: "Sertifikasi Konsultan Bisnis Terapan",
    level: "Praktisi",
    duration: "3 bulan",
    description:
      "Program sertifikasi untuk konsultan muda: metodologi diagnosis, penyusunan blueprint, dan etika penugasan — dinilai dari karya nyata, bukan hafalan.",
    outcomes: [
      "Mampu menyusun blueprint bisnis yang hidup",
      "Menguasai kerangka diagnosis organisasi",
      "Portofolio penugasan yang dinilai langsung",
    ],
    requirements: "Pengalaman kerja minimal 2 tahun atau portofolio proyek",
  },
  {
    slug: "manajemen-perizinan",
    name: "Sertifikasi Manajemen Perizinan Usaha",
    level: "Profesional",
    duration: "2 bulan",
    description:
      "Sertifikasi penguasaan peta perizinan usaha Indonesia: jalur perizinan dasar, sektor reguler, dan manajemen kepatuhan — untuk staf legalitas dan konsultan perizinan.",
    outcomes: [
      "Mampu memetakan kebutuhan perizinan suatu usaha",
      "Menguasai alur legalitas badan usaha",
      "Menyusun checklist kepatuhan perusahaan",
    ],
    requirements: "Latar belakang hukum, administrasi, atau praktik usaha",
  },
  {
    slug: "transformasi-digital",
    name: "Sertifikasi Transformasi Digital Organisasi",
    level: "Profesional",
    duration: "3 bulan",
    description:
      "Sertifikasi untuk pemimpin transformasi digital: peta jalan, tata kelola data, dan manajemen adopsi — dengan studi kasus nyata sektor publik dan swasta.",
    outcomes: [
      "Mampu menyusun peta jalan digital realistis",
      "Menguasai tata kelola data dasar",
      "Mengelola adopsi teknologi di organisasi",
    ],
    requirements: "Peran manajerial atau tanggung jawab sistem/teknologi",
  },
  {
    slug: "penulisan-strategis",
    name: "Sertifikasi Penulisan Dokumen Strategis",
    level: "Praktisi",
    duration: "2 bulan",
    description:
      "Sertifikasi seni menulis dokumen yang hidup: whitepaper, policy paper, SOP, dan blueprint — standar yang dipakai dalam setiap penugasan konsultansi.",
    outcomes: [
      "Menguasai struktur dokumen strategis kelas dunia",
      "Mampu menulis SOP dan blueprint yang dijalankan",
      "Portofolio dokumen yang terbit dan dinilai",
    ],
    requirements: "Kemampuan dasar menulis profesional",
  },
];

export const accreditationPoints = [
  {
    title: "Standar Penilaian Berlapis",
    desc: "Setiap program dinilai dari karya nyata: dokumen, presentasi, dan simulasi penugasan — dinilai oleh penilai berpengalaman 17+ tahun praktik.",
  },
  {
    title: "Kurikulum dari Lapangan",
    desc: "Materi disusun dari penugasan konsultansi nyata lintas sektor — bukan teori yang belum pernah menyentuh meja klien.",
  },
  {
    title: "Rekognosi Berkelanjutan",
    desc: "Sertifikat yang terbit mencantumkan kompetensi yang terverifikasi secara spesifik — mudah diperiksa oleh pemberi kerja atau klien.",
  },
  {
    title: "Komitmen Akreditasi Terbaik",
    desc: "Pusat sertifikasi berkomitmen mengikuti standar akreditasi terbaik yang berlaku bagi lembaga pelatihan dan sertifikasi profesi — diukur, diaudit, dan ditingkatkan terus-menerus.",
  },
];

export type Service = {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  longDesc: string[];
  deliverables: string[];
  process: { title: string; desc: string }[];
  idealFor: string[];
  timeline: string;
  price: string;
};

export const services: Service[] = [
  {
    id: "enterprise-blueprint",
    slug: "enterprise-blueprint",
    name: "Enterprise Blueprint 39 Dokumen",
    icon: "DraftingCompass",
    description:
      "Merancang seluruh arsitektur perusahaan Anda: governance, bisnis, operasional, teknologi, hingga SDM — 39 dokumen siap eksekusi.",
    longDesc: [
      "Ini adalah layanan bintang lima kami: perancangan lengkap arsitektur organisasi dalam 39 dokumen master — dari konstitusi internal hingga blueprint suksesi.",
      "Setiap dokumen disusun lewat wawancara, audit, dan workshop bersama tim Anda — bukan template yang diisi cepat, melainkan sistem yang lahir dari realitas organisasi Anda.",
      "Cocok bagi organisasi yang sedang bertransformasi besar: scale-up, corporate turnaround, konsolidasi bisnis, atau institusi publik yang ingin tata kelola kelas dunia.",
    ],
    deliverables: [
      "39 dokumen blueprint lengkap",
      "Sesi briefing & workshop eksekutif",
      "Roadmap implementasi 12 bulan",
      "Pendampingan review kuartalan",
      "Akses pembaruan dokumen",
      "Eksklusif: buku Blueprint 39 edisi terbatas",
    ],
    process: [
      { title: "Deep Dive (2–3 minggu)", desc: "Wawancara lintas level, audit dokumen, pemetaan masalah." },
      { title: "Arsitektur (4–6 minggu)", desc: "Penyusunan kategori governance & bisnis bersama pimpinan." },
      { title: "Operasional & Teknologi (4–6 minggu)", desc: "SOP, jaringan, sistem, dan data yang saling mengunci." },
      { title: "Manusia & Warisan (2–3 minggu)", desc: "Budaya, akademi, komunikasi, dan suksesi." },
      { title: "Serah Terima & Kawal", desc: "Workshop internalisasi dan review kuartalan setahun penuh." },
    ],
    idealFor: [
      "Korporasi menengah-besar & grup usaha",
      "BUMN / BUMD & instansi strategis",
      "Scale-up menuju profesionalisasi",
      "Konsorsium / holding lintas bisnis",
    ],
    timeline: "3–4 bulan penyusunan + 12 bulan pendampingan",
    price: "Mulai Rp 250jt / proyek",
  },
  {
    id: "strategi-bisnis",
    slug: "konsultasi-strategis",
    name: "Konsultasi Strategis & Transformation",
    icon: "Target",
    description:
      "Pendampingan strategis untuk CEO, dinas, dan BUMN: strategy sprint, OKR, turnaround, hingga ekspansi bisnis.",
    longDesc: [
      "Format ringkas dan tajam untuk masalah yang membutuhkan keputusan cepat: strategy sprint dua minggu yang menghasilkan arah, prioritas, dan quick wins.",
      "Di luar sprint, tersedia engagement bulanan sebagai penasihat strategis — kami duduk bersama Anda mengambil keputusan-keputusan besar dengan kerangka yang disiplin.",
      "Bidang yang paling sering diminta: turnaround, restrukturisasi portofolio, ekspansi pasar, dan pembangunan sistem OKR/KPI.",
    ],
    deliverables: [
      "Strategy sprint 2 minggu",
      "Diagnosa & quick wins",
      "OKR & performance system",
      "Laporan eksekutif board-ready",
      "Sesi pendampingan keputusan",
    ],
    process: [
      { title: "Hari 1–3: Diagnosa", desc: "Data, wawancara, dan pemetaan masalah inti." },
      { title: "Hari 4–7: Opsi Strategis", desc: "Merumuskan opsi dengan proyeksi dampak." },
      { title: "Hari 8–10: Keputusan", desc: "Workshop keputusan bersama pimpinan." },
      { title: "Hari 11–14: Rencana", desc: "Peta eksekusi 90 hari dan quick wins." },
    ],
    idealFor: [
      "CEO & founder yang membutuhkan arah",
      "Unit bisnis yang stagnan",
      "Organisasi memasuki pasar baru",
    ],
    timeline: "2 minggu sprint / engagement bulanan",
    price: "Mulai Rp 75jt / engagement",
  },
  {
    id: "pangan-logistik",
    slug: "ketahanan-pangan-logistik",
    name: "Ketahanan Pangan & Logistik",
    icon: "Wheat",
    description:
      "Desain sistem pangan dan rantai pasok wilayah/korporasi: food estate, buffer stock, cold chain, hingga distribusi kepulauan.",
    longDesc: [
      "Layanan untuk pemerintah daerah, agribisnis, dan pelaku logistik yang ingin membangun sistem pangan yang tangguh dan bermartabat.",
      "Cakupannya dari hulu ke hilir: pemetaan ekosistem pangan, desain produksi & kemitraan petani, hilirisasi, buffer stock, hingga jaringan distribusi dan cold chain.",
      "Semua rancangan diuji dengan simulasi badai: fluktuasi harga, musim gagal panen, dan gangguan distribusi.",
    ],
    deliverables: [
      "Peta sistem pangan wilayah",
      "Desain buffer stock & SOP",
      "Network design distribusi",
      "Studi kelayakan & model bisnis",
      "Rencana kemitraan petani",
      "Dasbor pemantauan",
    ],
    process: [
      { title: "Pemetaan Ekosistem", desc: "Musim, pasar, infrastruktur, dan aktor kunci." },
      { title: "Desain Sistem", desc: "Produksi-hilirisasi-distribusi yang saling mengunci." },
      { title: "Pilot Terukur", desc: "Uji coba dengan indikator jelas." },
      { title: "Scale-up", desc: "Ekspansi bertahap dengan kawalan." },
    ],
    idealFor: [
      "Dinas ketahanan pangan & pertanian",
      "Perusahaan agribisnis & food estate",
      "Distributor pangan nasional",
    ],
    timeline: "2–4 bulan per tahap",
    price: "Mulai Rp 120jt / proyek",
  },
  {
    id: "energi-kimia",
    slug: "energi-kimia-industri",
    name: "Energi Terbarukan & Kimia Industri",
    icon: "Sun",
    description:
      "Feasibility study PLTS/biomassa, hilirisasi kimia, dan struktur pembiayaan hijau — dari konsep hingga financial close.",
    longDesc: [
      "Untuk developer energi, kawasan industri, dan korporasi yang serius memasuki transisi energi dan hilirisasi kimia.",
      "Kami menangani studi kelayakan penuh: sumber daya, teknologi, lingkungan, legal, hingga struktur keuangan — dan mendampingi hingga keputusan investasi diambil.",
      "Pada sisi kimia: kajian hilirisasi, review proses, HSE, dan strategi offtake produk.",
    ],
    deliverables: [
      "Pre-feasibility & full FS",
      "Techno-economic analysis",
      "Struktur PPA & green financing",
      "Peta jalur perizinan",
      "Kajian hilirisasi & HSE",
    ],
    process: [
      { title: "Skrining", desc: "Sumber daya, lokasi, dan beban." },
      { title: "Studi Kelayakan", desc: "Teknis, ekonomi, lingkungan, legal." },
      { title: "Pembiayaan", desc: "PPA, term sheet, dialog investor." },
      { title: "Eksekusi", desc: "Pendampingan hingga komisioning." },
    ],
    idealFor: [
      "Developer EBT & IPP",
      "Kawasan industri & korporasi besar",
      "Pemerintah daerah berinisiatif energi",
    ],
    timeline: "6–12 minggu per studi",
    price: "Mulai Rp 150jt / studi",
  },
  {
    id: "it-ai-solution",
    slug: "transformasi-digital-ai",
    name: "Transformasi Digital & AI",
    icon: "Cpu",
    description:
      "Membangun sistem, aplikasi, dan AI untuk perusahaan & pemerintah: dari arsitektur data hingga produk digital yang langsung dipakai.",
    longDesc: [
      "Kami membangun sistem yang benar-benar dipakai — bukan demo yang mati setelah serah terima. Mulai dari pemetaan proses, arsitektur, pengembangan, hingga adopsi pengguna.",
      "Spesialisasi kami: aplikasi operasional, platform data & dasbor, model AI (prediksi permintaan, deteksi anomali, otomasi dokumen), dan integrasi sistem lama.",
      "Setiap proyek ditutup dengan pelatihan tim internal agar organisasi Anda mandiri, bukan bergantung.",
    ],
    deliverables: [
      "Enterprise & data architecture",
      "Pengembangan aplikasi/AI",
      "Integrasi sistem & migrasi",
      "Dasbor & pelaporan",
      "Pelatihan tim internal",
    ],
    process: [
      { title: "Pemetaan Proses", desc: "Alur kerja nyata dan friction." },
      { title: "Arsitektur", desc: "Sistem, data, dan keamanan." },
      { title: "Build Iteratif", desc: "Rilis cepat dengan umpan balik." },
      { title: "Adopsi", desc: "Pelatihan hingga mandiri." },
    ],
    idealFor: [
      "Perusahaan dengan proses manual kompleks",
      "Dinas yang butuh sistem layanan publik",
      "Ritel/logistik dengan data besar",
    ],
    timeline: "4–16 minggu per modul",
    price: "Mulai Rp 100jt / modul",
  },
  {
    id: "penerbitan",
    slug: "penerbitan-buku-jurnal",
    name: "Penerbitan Buku & Jurnal Internasional",
    icon: "PenLine",
    description:
      "Program unggulan: menuliskan buku Anda (ghostwriting senior), menerbitkan bestseller, hingga mengantar paper ke jurnal Q1/Q2.",
    longDesc: [
      "Dua jalur dalam satu layanan: jalur buku (arsitektur, ghostwriting, editing, layout, penerbitan, distribusi) dan jalur jurnal (mentoring publikasi Q1/Q2 dari naskah mentah hingga terbit).",
      "Untuk jalur buku, Anda ditangani editor senior dengan ritme review dua mingguan — tidak ada naskah yang menghilang berbulan-bulan tanpa kabar.",
      "Untuk jalur jurnal, program mencakup penilaian kesiapan, perbaikan metodologi, pemilihan jurnal target, dan pendampingan merespons reviewer.",
    ],
    deliverables: [
      "Book architecture & ghostwriting",
      "Editing senior & layout premium",
      "Distribusi & hak cipta global",
      "Journal mentoring Q1/Q2",
      "Strategi peluncuran karya",
    ],
    process: [
      { title: "Konsultasi Karya", desc: "Memetakan tujuan, pembaca, dan format." },
      { title: "Arsitektur", desc: "Peta bab dan janji karya." },
      { title: "Produksi", desc: "Menulis/menyunting dengan ritme ketat." },
      { title: "Terbit & Sebar", desc: "Penerbitan, distribusi, peluncuran." },
    ],
    idealFor: [
      "Pemimpin yang ingin menulis buku",
      "Dosen & peneliti menuju Q1/Q2",
      "Organisasi yang membangun kurikulum",
    ],
    timeline: "3–9 bulan per karya",
    price: "Mulai Rp 60jt / judul",
  },
];

export type PricingTier = {
  slug: string;
  name: string;
  ideal: string;
  price: string;
  unit: string;
  features: string[];
  highlight: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "strategy-call",
    name: "Strategy Call",
    ideal: "Untuk pemula & UMKM naik kelas",
    price: "Rp 1,5jt",
    unit: "/ sesi 90 menit",
    features: [
      "Video call privat 90 menit",
      "Diagnosa cepat bisnis/ide",
      "Catatan rekomendasi 5 halaman",
      "Follow-up WhatsApp 7 hari",
    ],
    highlight: false,
  },
  {
    slug: "enterprise-engagement",
    name: "Enterprise Engagement",
    ideal: "Untuk korporasi, dinas & BUMN",
    price: "Custom",
    unit: "/ proyek",
    features: [
      "Blueprint 39 dokumen penuh",
      "Tim konsultan multi-disiplin",
      "Workshop & pelatihan internal",
      "Pendampingan 12 bulan",
      "Garansi revisi dokumentasi",
    ],
    highlight: true,
  },
  {
    slug: "partnership-peradaban",
    name: "Partnership Peradaban",
    ideal: "Untuk yayasan, kampus & ekosistem",
    price: "Kemitraan",
    unit: "/ program tahunan",
    features: [
      "Program 1 miliar jiwa bersama",
      "Kurikulum & akademi khusus",
      "Riset & jurnal kolaboratif",
      "Kurasi buku & publikasi",
      "Jaringan ekosistem Gunara",
    ],
    highlight: false,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Direktur Utama, BUMN Agribisnis",
    role: "Enterprise Blueprint Client",
    quote:
      "Blueprint 39 dokumen yang dirancang Gugun Gunara mengubah cara kami melihat organisasi. Dalam 6 bulan, efisiensi rantai pasok kami naik 23%.",
  },
  {
    name: "Rektor Perguruan Tinggi Swasta",
    role: "Kolaborasi Akademik",
    quote:
      "Mentoring jurnal internasional dari tim Muhammad Lutfi Azmi mengantar 7 dosen kami terbit di jurnal terindeks Scopus dalam satu tahun.",
  },
  {
    name: "Founder Startup Logistik",
    role: "Strategy Engagement",
    quote:
      "Satu sesi strategy call membuka mata: kami mereposisi bisnis dan dalam 4 bulan meraih pendanaan seri A. Presisi, tajam, dan tetap hangat.",
  },
  {
    name: "Kepala Dinas Ketahanan Pangan Kabupaten",
    role: "Program Pangan Daerah",
    quote:
      "Desain buffer stock dan SOP distribusinya realistis di lapangan, bukan sekadar dokumen. Rakyat di desa yang merasakan manfaatnya.",
  },
  {
    name: "Pendiri Grup Industri Kimia",
    role: "Hilirisasi & Kajian Proses",
    quote:
      "Kajian hilirisasinya jujur: ada peluang yang dikatakan layak, ada yang justru disarankan batal. Kejujuran seperti ini langka dan berharga.",
  },
  {
    name: "Peserta Mentoring Angon",
    role: "Program Pemulihan 90 Hari",
    quote:
      "Saya datang dalam keadaan hancur. Tidak pernah dinasihati panjang lebar — hanya didampingi dengan benar. Hari ke-90, saya berdiri lagi.",
  },
];

export type NewsletterEdition = {
  slug: string;
  no: string;
  title: string;
  summary: string;
  date: string;
  body: string[];
};

export const newsletterEditions: NewsletterEdition[] = [
  {
    slug: "edisi-042-buffer-stock",
    no: "Edisi 042",
    title: "Buffer Stock Bukan Gudang Besar — Ia Keputusan Cepat",
    summary: "Mengapa kegagalan cadangan pangan hampir selalu masalah keputusan, bukan kapasitas.",
    date: "Jumat, pekan ini",
    body: [
      "Setiap kali program cadangan pangan gagal, narasi publik hampir selalu sama: gudangnya kurang, anggarannya kurang, truknya kurang. Namun dalam 17+ tahun praktik kami menelusuri sistem pangan daerah, pola kegagalannya justru berulang di titik lain — di meja keputusan yang lambat bereaksi ketika harga mulai bergerak.",
      "Buffer stock yang sehat bukan gudang terbesar, melainkan keputusan tercepat: kapan membeli, di mana membeli, dari siapa membeli, dan kapan melepas. Empat keputusan ini harus tertulis sebagai aturan main sebelum krisis datang — bukan diimprovisasi di tengah krisis.",
      "Dalam penugasan kami, checklist yang paling menolong hanya lima baris: pemicu harga, pemicu stok, daftar pemasok cadangan, saluran distribusi siaga, dan papan pengumuman publik. Lima baris ini yang membedakan daerah yang panik dan daerah yang tenang.",
      "Jika Anda memegang mandat ketahanan pangan, mulailah dari situ: tulis aturan keputusannya. Gudang bisa dibangun kemudian; keputusan yang lambat tidak bisa ditambal gudang mana pun.",
    ],
  },
  {
    slug: "edisi-041-bab-pertama",
    no: "Edisi 041",
    title: "Menulis Bab 1 yang Tidak Ditinggalkan Pembaca",
    summary: "Tiga arsitektur pembuka yang membuat pembaca bersedia menghabiskan buku Anda.",
    date: "Jumat lalu",
    body: [
      "Statistik penerbitan yang paling menyakitkan bukan soal penjualan — melainkan soal bab satu. Mayoritas buku ditinggalkan pembacanya di bab yang sama: bab pertama. Bukan karena isinya buruk, melainkan karena pembukanya tidak menjanjikan perjalanan.",
      "Ada tiga arsitektur pembuka yang kami pakai di setiap ghostwriting senior: (1) kabar dulu, cerita kemudian — beri pembaca hasil akhir di halaman pertama; (2) pertanyaan yang menggigit — buka dengan persoalan yang pembaca rasakan sendiri; (3) adegan yang menahan — satu momen nyata yang membuat pembaca duduk lebih tegak.",
      "Yang ketiga paling sering dilupakan penulis pemula: buku strategi sekalipun boleh membuka dengan adegan. Prabu Danling membuka buku-buku strateginya dengan momen di meja klien — bukan dengan definisi.",
      "Coba periksa bab satu Anda malam ini: apakah ia menjanjikan perjalanan, atau hanya memperkenalkan penulis? Kalau yang kedua, tulis ulang. Pembaca tidak menunggu.",
    ],
  },
  {
    slug: "edisi-040-ai-dinas-berkas",
    no: "Edisi 040",
    title: "AI untuk Dinas: Mulai dari Berkas, Bukan Robot",
    summary: "Use-case AI paling murah dan paling cepat berdampak untuk layanan publik.",
    date: "2 pekan lalu",
    body: [
      "Banyak kepala dinas bertanya kepada kami: harus mulai AI dari mana? Pertanyaan itu sering datang bersama bayangan robot layanan publik dan dasbor tiga dimensi. Jawaban kami selalu mengejutkan: mulailah dari berkas.",
      "Berkas adalah tempat waktu instansi hilang paling banyak: surat masuk yang dicari berjam-jam, lampiran yang tertukar, rekap yang diketik ulang tiga kali. AI klasifikasi dokumen, ekstraksi data, dan penyusunan draf balasan adalah teknologi paling matang hari ini — dan paling murah untuk diujicobakan.",
      "Pilot terbaik kami lihat berjalan 4–6 pekan: satu jenis berkas, satu tim kecil, satu ukuran keberhasilan (misalnya waktu olah per berkas turun 50%). Setelah pilot itu hidup, barulah bicara dasbor, bicara integrasi, bicara layanan publik berbasis AI.",
      "Prinsipnya sama dengan konsultansi: sistem kecil yang benar-benar dipakai mengalahkan sistem besar yang hanya diluncurkan.",
    ],
  },
  {
    slug: "edisi-039-lima-pertanyaan-ppa",
    no: "Edisi 039",
    title: "Lima Pertanyaan Sebelum Menandatangani PPA",
    summary: "Checklist pemimpin daerah sebelum terikat kontrak energi 20 tahun.",
    date: "3 pekan lalu",
    body: [
      "Power Purchase Agreement adalah salah satu kontrak terpanjang yang akan tanda tangan satu daerah — dua puluh tahun atau lebih, melintasi tiga periode kepemimpinan. Namun checklist yang dipakai pihak daerah sering lebih tipis daripada checklist membeli armada.",
      "Lima pertanyaan yang kami ajak klien bertanya sebelum tanda tangan: Siapa menanggung risiko bahan bakar/sumber daya? Bagaimana formula tarif dihitung ulang di tahun ke-10? Apa jalan keluar bila performa turun? Siapa memverifikasi meter? Dan siapa yang mewarisi aset setelah kontrak berakhir?",
      "Pertanyaan-pertanyaan ini bukan urusan legal semata — ia urusan generasi. BUMD atau dinas yang menjawabnya dengan angka dan lampiran akan duduk jauh lebih tegak di meja negosiasi.",
      "Simpan edisi ini. Bila suatu hari tim Anda duduk di meja PPA, lima pertanyaan ini layak jadi halaman pertama berkas negosiasi.",
    ],
  },
  {
    slug: "edisi-038-angon-menyerah",
    no: "Edisi 038",
    title: "Angon: Ketika Menyerah Juga Bentuk Sabar",
    summary: "Puisi dan refleksi tentang memilih kembali bertarung dengan cara yang baru.",
    date: "4 pekan lalu",
    body: [
      "Edisi ini berbeda dari surat-surat sebelumnya — tidak ada kerangka, tidak ada checklist. Hanya satu puisi dari Santri Angon dan satu refleksi singkat di belakangnya.",
      "\"Menyerah\" dari satu cara bertarung bukanlah kekalahan — kadang ia justru bentuk sabar yang paling jujur: mengakui bahwa jalan ini tidak lagi membawa kita ke mana pun, dan Tuhan sedang menyiapkan jalan yang lain.",
      "Kami menerima banyak balasan dari pembaca yang sedang berjuang dalam sunyi. Bila edisi ini sampai kepada Anda di malam yang berat: Anda tidak terlambat, Anda sedang dipindahkan.",
      "Surat pekan depan kembali ke urusan sistem dan angka. Malam ini, izinkan kami menutup dengan syair.",
    ],
  },
  {
    slug: "edisi-037-unit-economics-petani",
    no: "Edisi 037",
    title: "Unit Economics Petani: Angka yang Jarang Diceritakan",
    summary: "Bedah arus kas 1 hektar dan implikasinya bagi kebijakan harga.",
    date: "5 pekan lalu",
    body: [
      "Kebijakan harga pangan sering dirancang dari sisi konsumen — sementara sisi yang menentukan nasib pasokan justru jarang dibedah: arus kas petani per hektar.",
      "Dalam penugasan kami, bedah sederhana satu hektar selalu mengejutkan pihak daerah: dari harga jual gabah, berapa yang tersisa setelah benih, pupuk, sewa alat, dan tenaga kerja — dan berapa bulan petani menanggung biaya sebelum panen pertama. Angka-angka ini yang menjelaskan mengapa petani muda pergi ke kota.",
      "Implikasinya bagi kebijakan sangat konkret: subsidi yang tepat sasaran bukan yang memotong harga di pasar, melainkan yang memperbaiki struktur biaya di hulu — benih, irigasi, alat, dan akses pembiayaan pra-panen.",
      "Coba duduk bersama penyuluh Anda pekan ini dan hitung ulang satu hektar milik petani binaan. Kebijakan yang baik selalu mulai dari angka yang jujur.",
    ],
  },
];

export type MentoringPhase = {
  slug: string;
  phase: string;
  period: string;
  title: string;
  desc: string;
  items: string[];
};

export const mentoringPhases: MentoringPhase[] = [
  {
    slug: "fase-1-detoks-stabilisasi",
    phase: "Fase 1",
    period: "Hari 1–30",
    title: "Detoks & Stabilisasi",
    desc: "Menenangkan badai: tidur, makan, napas, dan membersihkan luka lama. Tidak ada target besar — hanya bertahan dengan terang.",
    items: [
      "Sesi pendampingan privat 2×/pekan",
      "Rutinitas harian yang realistis",
      "Refleksi tertulis ringan",
      "Kontak darurat kapan pun dibutuhkan",
    ],
  },
  {
    slug: "fase-2-kebiasaan-ilahi",
    phase: "Fase 2",
    period: "Hari 31–60",
    title: "Membangun Kebiasaan Ilahi",
    desc: "Menghidupkan kembali tiang-tiang: shalat yang diperjuangkan, tilawah yang jujur, doa yang tidak lagi formalitas.",
    items: [
      "Sesi pendampingan 1×/pekan",
      "Peta kebiasaan personal",
      "Kajian reflektif ringan",
      "Latihan syukur & pemaafan",
    ],
  },
  {
    slug: "fase-3-misi-hidup-baru",
    phase: "Fase 3",
    period: "Hari 61–90",
    title: "Misi Hidup Baru",
    desc: "Kembali ke dunia dengan nama baru: merancang kontribusi, pekerjaan, dan relasi yang memuliakan diri dan orang lain.",
    items: [
      "Sesi perencanaan hidup",
      "Rancangan kontribusi 12 bulan",
      "Jejaring komunitas Angon",
      "Rencana menjaga diri ke depan",
    ],
  },
];

// ------------------------------------------------------------
// GALERI FOTO — 6 foto asli pemilik (bukan AI), kurasi resmi
// ------------------------------------------------------------
export type Photo = {
  slug: string;
  src: string;
  title: string;
  alt: string;
  caption: string;
  story: string[];
  moment: string;
  context: string;
  contextHref: string;
};

export const photos: Photo[] = [
  {
    slug: "konsultan-bisnis-senior",
    src: "/gunara/foto/gugun-gunara-konsultan-bisnis-senior.jpeg",
    title: "Konsultan Bisnis Senior",
    alt: "Gugun Gunara, konsultan bisnis senior dengan pengalaman 17+ tahun",
    caption: "Wajah praktik: 17+ tahun menuntun organisasi dari diagnosis hingga eksekusi.",
    story: [
      "Foto ini dipakai sebagai potret utama situs karena paling mewakili pekerjaan sehari-hari: seorang konsultan yang hadir di meja klien, bukan di balik slide.",
      "Sejak 2009, praktik konsultansi Gugun Gunara berdiri di satu keyakinan yang sama: Indonesia tidak kekurangan gagasan — ia kekurangan sistem yang mengeksekusi gagasan itu dengan disiplin.",
    ],
    moment: "Sesi potret resmi gunara.web.id",
    context: "Kisah lengkap perjalanan 2009–2026",
    contextHref: "/rekam-jejak",
  },
  {
    slug: "pemilik-lima-perusahaan",
    src: "/gunara/foto/gugun-gunara-owner-lima-perusahaan.jpeg",
    title: "Pemilik Lima Perusahaan",
    alt: "Gugun Gunara, pendiri dan pemilik lima perusahaan layanan bisnis",
    caption: "Satu ekosistem: lima perusahaan, satu standar pekerjaan.",
    story: [
      "Ekosistem lima perusahaan — pusatperizinan.com, topkonsultan.web.id, komitehaji.id, pppdigital.id, dan pppbisnis.com — lahir bertahap dari kebutuhan nyata klien, bukan dari rencana di atas kertas.",
      "Setiap perusahaan mengurus satu masalah yang paling sering menghambat pengusaha Indonesia: legalitas, konsultansi, perhajian, transformasi digital, dan kemitraan bisnis.",
    ],
    moment: "Potret kepemilikan ekosistem Gunara Group",
    context: "Kenali kelima perusahaan",
    contextHref: "/perusahaan",
  },
  {
    slug: "prabu-danling",
    src: "/gunara/foto/gugun-gunara-prabu-danling.jpeg",
    title: "Prabu Danling — Pena Eksekusi",
    alt: "Gugun Gunara sebagai Prabu Danling, pena buku strategi dan kepemimpinan",
    caption: "Identitas kedua: pena yang menulis buku strategi dan kepemimpinan.",
    story: [
      "Prabu Danling adalah identitas sastra untuk pekerjaan strategi: menuliskan metode yang teruji di lapangan menjadi buku yang bisa dipakai generasi penerus.",
      "Pustaka yang terbit di bawah pena ini bisa dijelajahi di ruang Karya — dari blueprint bisnis hingga kepemimpinan sistemik.",
    ],
    moment: "Potret identitas Prabu Danling",
    context: "Jelajahi pustaka Prabu Danling",
    contextHref: "/karya",
  },
  {
    slug: "m-lutfi-azmi-riset",
    src: "/gunara/foto/gugun-gunara-jurnal-puisi.jpeg",
    title: "M. Lutfi Azmi — Riset & Jurnal",
    alt: "Gugun Gunara sebagai Muhammad Lutfi Azmi, identitas riset dan publikasi jurnal internasional",
    caption: "Identitas riset: jembatan antara wahyu, ilmu, dan teknologi.",
    story: [
      "Muhammad Lutfi Azmi adalah identitas akademik: jalur riset dan publikasi internasional yang menjaga agar setiap metode konsultansi tetap teruji secara ilmiah.",
      "Jalur ini memayungi 12 jurnal berjalan menuju 100 publikasi Q1/Q2 dan program mentoring publikasi bagi dosen serta peneliti.",
    ],
    moment: "Potret identitas M. Lutfi Azmi",
    context: "Lihat arsip jurnal & riset",
    contextHref: "/jurnal",
  },
  {
    slug: "awal-karier-2009",
    src: "/gunara/foto/gugun-gunara-awal-karier-2009.jpeg",
    title: "Awal Karier — 2009",
    alt: "Foto Gugun Gunara pada awal karier konsultansi tahun 2009",
    caption: "Titik nol: satu meja, satu keyakinan, tahun 2009.",
    story: [
      "Karier konsultansi dimulai pada 2009 tanpa nama besar dan tanpa jaringan — hanya satu keyakinan yang terus dipakai hingga kini.",
      "Tahun-tahun awal dihabiskan langsung di meja klien: perizinan, keuangan, operasional, dan tata kelola. Fondasi yang kemudian menjadi metodologi 39 dokumen.",
    ],
    moment: "Arsip perjalanan: 2009",
    context: "Telusuri garis waktu lengkap",
    contextHref: "/rekam-jejak",
  },
  {
    slug: "masa-muda",
    src: "/gunara/foto/gugun-gunara-masa-muda.jpeg",
    title: "Tahun-Tahun Pembentukan",
    alt: "Foto masa muda Gugun Gunara di tahun-tahun pembentukan karier",
    caption: "Sekolah lapangan: belajar dari pekerjaan yang nyata.",
    story: [
      "Periode 2010–2013 adalah sekolah lapangan: semua dilakukan langsung — bukan dari balik slide.",
      "Belajar dari lapangan inilah yang membuat blueprint dan SOP yang dirancang hari ini realistis untuk dijalankan, bukan hanya indah di dokumen.",
    ],
    moment: "Arsip perjalanan: 2010–2013",
    context: "Lihat titik-titik perjalanan",
    contextHref: "/rekam-jejak",
  },
];

// ------------------------------------------------------------
// HELPER TURUNAN — item tanpa slug asli diberi slug deterministik
// agar setiap item punya halaman mandiri sendiri.
// ------------------------------------------------------------
export type QuoteItem = { slug: string; text: string; reflection: string };

const quoteReflections: string[] = [
  "Kesetiaan pada amanah adalah bakat yang paling langka. Kemampuan bisa diajarkan, gelar bisa dicetak — tapi orang yang tetap setia ketika tidak ada yang mengawasi, itulah modal utama peradaban.",
  "Ilmu dan amal bukan dua jalan pilihan, melainkan satu jalan dua kaki. Yang satu memberi arah, yang lain memberi langkah — hilang satu, berhentilah perjalanan.",
  "Karya tulis adalah cara paling demokratis untuk hidup lebih lama dari umur penulisnya. Satu larik yang benar bisa bekerja ratusan tahun setelah penulisnya pergi.",
  "Dalam praktik konsultansi, hampir semua krisis besar akhirnya bermuara di rantai pasok. Menghormati pekerja logistik adalah menghormati denyut bangsa itu sendiri.",
  "Sistem terbaik bukan yang paling canggih, melainkan yang membuat kejujuran menjadi pilihan paling mudah dan paling menguntungkan bagi semua orang.",
  "Doa dan kerja bukan dua pintu pilihan — ia satu gerakan: tangan yang bekerja dan hati yang bersandar. Keduanya bersama-sama menjaga kesombongan tetap jauh.",
  "Karier berhenti di pensiun; titipan terus bekerja setelah kita pergi. Karena itu ukuran keberhasilan terbaik bukan apa yang kita kumpulkan, tapi apa yang kita titipkan.",
  "Merawat bumi adalah amanah lintas generasi: kita hanya pemegang titipan sementara, dan titipan harus dikembalikan lebih baik dari diterimanya.",
];

export const quoteItems: QuoteItem[] = quotes.map((text, i) => ({
  slug: `kutipan-${String(i + 1).padStart(2, "0")}`,
  text,
  reflection: quoteReflections[i],
}));

export type TestimonialItem = Testimonial & { slug: string };
export const testimonialItems: TestimonialItem[] = testimonials.map((t, i) => ({
  ...t,
  slug: `testimoni-${i + 1}`,
}));

export type FaqItemWithSlug = FaqItem & { slug: string };
export const faqItems: FaqItemWithSlug[] = faqs.map((f, i) => ({
  ...f,
  slug: `faq-${i + 1}`,
}));
