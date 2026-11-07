// =====================================================================
// SEMUA ISI PORTOFOLIO ADA DI FILE INI. Edit di sini, tampilan ikut berubah.
// =====================================================================

export const profile = {
  name: 'Ilman Nafian',
  roles: 'Fullstack Developer & Graphic Designer',
  location: 'Tanah Bumbu, Kalimantan Selatan',
  intro:
    'Saya membangun website dari antarmuka sampai database, lalu merapikan tampilannya lewat desain grafis. Dua keahlian itu membuat hasil kerja saya berfungsi dengan baik dan enak dilihat.',
  about: [
    'Saya Ilman Nafian, fullstack developer dan desainer grafis. Di sisi pengembangan, saya mengerjakan website dengan Laravel, React, dan Next.js, termasuk back-end dan database.',
    'Di sisi desain, saya membuat poster dan konten media sosial dengan Figma dan Canva, dengan branding, warna, dan tipografi yang konsisten. Pengalaman magang di Codelab Indonesia dan PT. Arutmin Indonesia mengajarkan saya bekerja dengan pemangku kepentingan nyata dan tenggat yang jelas.',
  ],
  facts: [
    { label: 'Lokasi', value: 'Tanah Bumbu, Kalimantan Selatan' },
    { label: 'Fokus', value: 'Web fullstack dan desain grafis' },
  ],
  email: 'ilmannafian587@gmail.com',
  phone: '085349994825',
  // WhatsApp butuh format internasional tanpa tanda +
  whatsapp: '6285349994825',
  linkedin: 'https://www.linkedin.com/in/nafianilman',
  instagram: 'https://www.instagram.com/_nfnman',
  instagramHandle: '_nfnman',
  github: 'https://github.com/ilman011004',
  // Foto ada di public/foto.jpg
  photo: '/foto.jpg',
  // Taruh CV di public/cv-ilman-nafian.pdf lalu ganti jadi '/cv-ilman-nafian.pdf'
  cv: '',
}

export const skills = [
  {
    group: 'Pengembangan',
    items: ['Laravel', 'PHP', 'React', 'Next.js', 'Express.js', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
  },
  { group: 'Desain', items: ['Figma', 'Canva'] },
]

// type: 'Web' atau 'Aplikasi'. Lengkapi stack dan description sesuai repo kamu.
export const projects = [
  {
    title: 'Yayasan Permata Batulicin',
    type: 'Web',
    description:
      'Website profil yayasan CSR PT. Arutmin Indonesia. Dibangun dari hasil observasi dan wawancara dengan pemangku kepentingan, diuji lewat UAT, lalu berhasil dideploy. Website ini membuat dokumentasi dan transparansi program PPM lebih mudah diakses.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    repo: 'https://github.com/ilman011004/yayasan-permata-batulicin',
    demo: 'https://permatabtl.org/',
    image: '/projects/yayasan-permata-batulicin.png',
    featured: true,
  },
  {
    title: 'Sekolah Ar-Rasyid',
    type: 'Web',
    description:
      'Website yayasan yang menaungi sekolah dari jenjang PAUD sampai SMA. Tiap jenjang punya halaman sendiri berisi profil, program, tenaga pengajar, galeri, dan berita, serta pendaftaran siswa baru (PPDB) secara online. Pengelola mengatur semuanya lewat panel admin.',
    stack: ['Laravel', 'PHP', 'Tailwind CSS', 'Vite'],
    repo: 'https://github.com/ilman011004/Sch_AR-RASYID_Web',
    demo: '',
    image: '/projects/sekolah-ar-rasyid.png',
  },
  {
    title: 'Wisata Tanah Bumbu',
    type: 'Web',
    description:
      'Panduan wisata Tanah Bumbu yang memuat destinasi wisata, wisata kuliner, dan hotel, lengkap dengan ulasan pengunjung dan agenda kegiatan. Isinya diatur lewat panel admin.',
    stack: ['Laravel', 'PHP', 'Tailwind CSS', 'Vite'],
    repo: 'https://github.com/ilman011004/Wisata.Tanbu-web',
    demo: '',
    image: '/projects/wisata-tanah-bumbu.png',
  },
  {
    title: 'Anime Web',
    type: 'Web',
    description:
      'Website katalog anime dengan pencarian, halaman detail, dan pemutar episode. Data anime terhubung ke AniList dan video ke YouTube, sementara admin mengelola anime dan episode lewat dashboard yang memakai login.',
    stack: ['React', 'Tailwind CSS', 'Express.js', 'PostgreSQL'],
    repo: 'https://github.com/ilman011004/Anime-web',
    demo: '',
    image: '/projects/anime-web.png',
  },
  {
    title: 'Laundry App',
    type: 'Aplikasi',
    description:
      'Aplikasi manajemen laundry untuk pemilik usaha yang punya beberapa cabang. Satu pemilik bisa memiliki banyak kasir. Kasir mencatat pesanan dan menyusun nota, sedangkan pemilik memantau pelanggan, pengiriman, kas, pengeluaran, dan laporan.',
    stack: ['Flutter', 'Express.js', 'Prisma', 'PostgreSQL'],
    repo: 'https://github.com/ilman011004/Laundry-App',
    demo: '',
    image: '',
  },
  {
    title: 'Social App RI',
    type: 'Aplikasi',
    description:
      'Aplikasi media sosial bergaya microblog dengan fitur Focs-C (Focus Content), mode untuk tetap terhubung tanpa gangguan. Pengguna bisa membuat postingan, berkomentar, berkirim pesan, mencari tren, dan mengatur privasi serta notifikasi. Proyek kelompok kuliah.',
    stack: ['Flutter', 'Dart', 'Firebase', 'GetX'],
    repo: 'https://github.com/SulthanRiq/SocialAppRI',
    demo: '',
    image: '',
  },
  {
    title: 'Tanbu Mobile',
    type: 'Aplikasi',
    description:
      'Aplikasi mobile untuk mahasiswa Tanah Bumbu di Malang. Fiturnya mencakup pembayaran asrama dan iuran, informasi kegiatan, absensi dengan pemindai QR, serta informasi pendaftaran tiap kampus bagi calon mahasiswa. Ada juga sisi admin untuk keuangan, jadwal, absen, dan program.',
    stack: ['Flutter', 'Dart', 'Firebase', 'GetX'],
    repo: 'https://github.com/ilman011004/tanbumobile',
    demo: '',
    image: '',
  },
]

// ratio: 'portrait' | 'square' | 'landscape'. Isi image dengan '/designs/nama-file.png'
export const designs = [
  { title: 'Poster Summercamp Codelab Bootcamp', client: 'Codelab Indonesia', image: '', ratio: 'portrait' },
  { title: 'Poster TechSprint Innovation Cup 2026', client: 'Codelab Indonesia', image: '', ratio: 'portrait' },
  { title: 'Konten edukasi teknologi', client: 'Codelab Indonesia', image: '', ratio: 'square' },
  { title: 'Konten edukasi karier', client: 'Codelab Indonesia', image: '', ratio: 'square' },
  { title: 'Poster pelatihan desain Canva', client: 'Batulicin Community Center', image: '', ratio: 'landscape' },
  { title: 'Konten media sosial', client: 'Batulicin Community Center', image: '', ratio: 'square' },
]

export const experiences = [
  {
    role: 'Magang Desain Grafis',
    org: 'Codelab Indonesia',
    place: 'Remote',
    period: 'Maret 2026 – Mei 2026',
    duration: '3 bulan',
    kind: 'Desain',
    points: [
      'Membuat konten visual edukatif seputar teknologi dan karier.',
      'Mendesain poster dan materi visual untuk event Summercamp Codelab Bootcamp dan TechSprint Innovation Cup 2026.',
      'Menjaga konsistensi visual (branding, warna, tipografi) pada seluruh konten yang dipublikasikan.',
    ],
  },
  {
    role: 'Staff Administrasi & Operator Komputer (Part-Time)',
    org: 'Prodi Doktor Sosiologi, Universitas Muhammadiyah Malang',
    place: 'Malang, Jawa Timur',
    period: 'Oktober 2025 – Maret 2026',
    duration: '6 bulan',
    kind: 'Administrasi',
    points: [
      'Menginput dan mengelola data administratif program studi dengan Microsoft Word dan Excel.',
      'Mengarsipkan dokumen akademik dan administratif secara digital maupun fisik.',
      'Mengoperasikan komputer dan sistem internet untuk operasional harian program studi.',
      'Membantu menyiapkan dokumen dan data pendukung untuk proses akreditasi program studi.',
    ],
  },
  {
    role: 'Magang Web Developer, Community Development & External Affairs (CDEA)',
    org: 'PT. Arutmin Indonesia, Tambang Batulicin',
    place: 'Tanah Bumbu, Kalimantan Selatan',
    period: 'Agustus 2025 – September 2025',
    duration: '1,5 bulan',
    kind: 'Pengembangan',
    points: [
      'Observasi dan wawancara dengan pemangku kepentingan untuk menganalisis kebutuhan website profil yayasan CSR.',
      'Membangun UI, front-end, dan back-end website dengan Bootstrap CSS, JavaScript, Laravel, PHP, dan MySQL.',
      'Menjalankan User Acceptance Testing (UAT) bersama pemangku kepentingan sampai deployment berhasil, sehingga dokumentasi dan transparansi program PPM lebih mudah diakses.',
    ],
  },
    {
    role: 'Asiten Trainer Kursus Komputer & Desain Grafis, Batulicin Community Center (BCC)',
    org: 'PT. Arutmin Indonesia, Tambang Batulicin',
    place: 'Tanah Bumbu, Kalimantan Selatan',
    period: 'Agustus 2025 – September 2025',
    duration: '1,5 bulan',
    kind: 'Pelatihan',
    points: [
      'Membantu instruktur melatih masyarakat binaan dalam pengoperasian dasar komputer dan Microsoft Office (Word & Excel), termasuk pendampingan one-on-one.',
      'Membantu praktik desain grafis dengan Canva, dari ide sampai produk digital seperti poster dan konten media sosial.',
    ],
  },
]

// Taruh gambar sertifikat di public/certificates/, lalu isi image, contoh '/certificates/desain-grafis.jpg'
export const certificates = [
  {
    title: 'Sertifikat Desain Grafis',
    issuer: 'Codelab Indonesia',
    year: '2026',
    image: '/certificates/sertif-desain.png',
  },
  {
    title: 'Sertifikat Asisten Pelatihan Komputer & Desain Grafis',
    issuer: 'Batulicin Community Center',
    year: '2025',
    image: '/certificates/Sertif-AsistenTrainer.jpg',
  },
  {
    title: 'Sertifikat Bootcamp Data Analyst',
    issuer: 'Special Skill',
    year: '2025',
    image: '/certificates/Sertif-DataAnalis.jpg',
  },
  {
    title: 'English Proficiency (Advanced Command of English, C1)',
    issuer: 'Language Center Universitas Muhammadiyah Malang',
    year: '2026',
    image: '/certificates/Sertif-Taep.jpg',
  },
]