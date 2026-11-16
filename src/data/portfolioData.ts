export interface ArchitectureDetail {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  company?: string;
  year: string;
  summary: string;
  role: string;
  stack: string[];
  link?: string;
  github?: string;
  metrics?: string;
  featured: boolean;
  architecture?: ArchitectureDetail;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type?: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export const PERSONAL_INFO = {
  name: "Galih",
  fullName: "Galih Nur Ikhsan",
  title: "Web Developer",
  tagline: "Sehari-hari membangun dan merawat aplikasi web untuk kebutuhan bisnis dan operasional perusahaan. Terbiasa pegang backend, optimasi database, sampai infrastruktur server.",
  bio: "Web developer yang terbiasa menangani aplikasi web untuk proses bisnis dan operasional. Fokus utama saya ada di PHP, Laravel, JavaScript, Vue.js, serta database relasional seperti PostgreSQL dan MySQL. Memiliki pengalaman merancang alur sistem manufaktur, integrasi REST API antar layanan, optimasi query yang lambat, hingga urusan server Linux (VPS maupun Shared Hosting). Terbiasa memecahkan masalah teknis secara mandiri maupun berdiskusi bersama tim.",
  location: "Bandung, Indonesia",
  currentRole: "Web Developer di PT. Sipatex Putri Lestari",
  email: "galihnurikhsan24@gmail.com",
  github: "https://github.com/galihnrkhsn",
  linkedin: "https://www.linkedin.com/in/galih-nur-ikhsan-46a549278/",
  competencies: [
    "Web Application Development",
    "Backend & REST API",
    "Database Design & SQL Optimization",
    "Server & VPS Administration",
    "Problem Solving & Debugging",
    "Data Integrity & Workflow Automation"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Digitalisasi Operasional Produksi Tekstil (Sipatex)",
    category: "Full Stack Developer",
    company: "PT. Sipatex Putri Lestari",
    year: "2025 - Sekarang",
    summary: "Merancang dan mengembangkan sistem berbasis web untuk mendigitalkan proses operasional di lingkungan produksi tekstil. Sistem ini menggantikan pencatatan manual dengan alur kerja terintegrasi, sehingga data lebih akurat, mudah dilacak, dan dapat diakses secara real-time oleh tiap departemen.",
    role: "Full Stack Developer",
    stack: ["PHP", "Laravel", "Vue.js", "JavaScript", "PostgreSQL", "REST API", "DataTables"],
    metrics: "Digitalisasi, Konsistensi data transaksi pabrik",
    featured: true,
    architecture: {
      challenge: "Alur produksi tekstil dan pemakaian chemical melibatkan banyak departemen sekaligus. Kalau ada transaksi macet atau data selisih di database, operasional di lapangan bisa langsung terganggu.",
      solution: "Merancang skema database PostgreSQL yang ternormalisasi dengan constraint, mengamankan transaksi SQL dari risiko data race, dan menghubungkan data antar modul lewat REST API yang terstruktur."
    }
  },
  {
    id: "project-2",
    title: "Platform E-Commerce dan Manajemen Distribusi Terintegrasi",
    category: "Server Administration & Web Develover",
    company: "CV. Kafaa Billahi Syahida",
    year: "2025 - 2026",
    summary: "Mengembangkan dan memelihara sistem web yang menopang operasional bisnis, mulai dari e-commerce, pendataan, dan alur pengerjaan sisi distribusi, hingga aplikasi manajemen, finance, dan surat jalan. Selain pengembangan aplikasi, saya juga mengelola infrastruktur server (VPS dan shared hosting) agar seluruh sistem berjalan stabil.",
    role: "Server Administrator & Web Developer",
    stack: ["PHP", "JavaScript", "Bootstrap", "MySQL", "Linux VPS", "Shared Hosting", "Git"],
    metrics: "Sistem Ecommerce, Workflow Distribusi, Optimasi Query, Administrasi Server, Maintenance",
    featured: true,
    architecture: {
      challenge: "Menjaga konsistensi data dan performa aplikasi pada alur distribusi, sambil menyesuaikan sistem saat migrasi dari VPS ke shared hosting dan terus mengembangkan fitur tanpa mengganggu operasional harian.",
      solution: "Mengintegrasikan frontend, backend, dan database secara rapi, mengoptimalkan query dan struktur MySQL, melakukan migrasi terstruktur (PHP, Composer, database, Git, email), serta menjalankan monitoring, maintenance, dan pengembangan iteratif bersama user."
    }
  },
  {
    id: "project-3",
    title: "Aplikasi Pengolahan Data & Laporan Bisnis",
    category: "Business Application",
    company: "CV. Kafaa Billahi Syahida",
    year: "2024 - 2025",
    summary: "Mengembangkan dan memelihara aplikasi web Ecommerce berbasis PHP, JavaScript, dan MySQL sesuai kebutuhan operasional, mencakup pengembangan fitur baru, penyempurnaan sistem yang sudah berjalan, serta pembuatan antarmuka responsif yang mudah digunakan tim.",
    role: "Web Developer",
    stack: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    metrics: "Pengembangan Fitur, Integrasi Frontend-Backend, Optimasi Query, UI Responsive",
    featured: false,
    architecture: {
      challenge: "Menerjemahkan kebutuhan user yang terus berkembang menjadi fitur yang tepat, sambil menjaga data tetap konsisten dan performa aplikasi tetap cepat seiring bertambahnya data.",
      solution: "Berkoordinasi langsung dengan user untuk menganalisis kebutuhan, mengintegrasikan frontend, backend, dan database secara konsisten, serta mengoptimalkan query dan struktur tabel MySQL disertai troubleshooting masalah aplikasi dan data."
    }
  },
  {
    id: "project-4",
    title: "Pengembangan Web Kustom & Integrasi Modul CMS",
    category: "CMS Development",
    company: "CV. Karyain Digital Kreatif",
    year: "2022",
    summary: "Pembuatan dan penyesuaian website berbasis WordPress sesuai kebutuhan klien: mulai dari kustomisasi tema, pembuatan plugin mandiri, hingga optimasi kecepatan dan keamanan.",
    role: "WordPress Developer",
    stack: ["WordPress", "PHP", "MySQL", "CSS3", "JavaScript"],
    featured: false,
    architecture: {
      challenge: "Perusahaan butuh fitur spesifik tanpa membuat website jadi berat karena terlalu banyak memasang plugin pihak ketiga.",
      solution: "Membangun tema kustom yang ramping dan memanfaatkan WordPress hooks secara modular, jadi websitenya tetap cepat dan gampang dirawat."
    }
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Agustus 2025 - Sekarang",
    role: "Full Stack Developer",
    company: "PT. Sipatex Putri Lestari",
    type: "Full-time",
    location: "Bandung, Indonesia",
    highlights: [
      "Mengembangkan dan merawat sistem web internal perusahaan (PHP, Laravel, Vue.js, PostgreSQL) untuk digitalisasi alur operasional pabrik tekstil.",
      "Merancang modul operasional utama: inventory bahan baku, chemical management, alur fabric processing, material receiving, workflow produksi, dan monitoring data harian.",
      "Membangun integrasi antar sistem melalui REST API agar pertukaran data antar aplikasi berjalan sinkron dan akurat.",
      "Mendesain struktur database, menulis query SQL teroptimasi, dan menjaga konsistensi transaksi data saat sistem diakses banyak divisi.",
      "Membuat antarmuka interaktif yang mudah dipakai tim operasional menggunakan Vue.js, DataTables, jQuery, dan Bootstrap dengan server-side processing."
    ],
    skills: ["PHP", "Laravel", "Vue.js", "JavaScript", "PostgreSQL", "REST API", "Database Design", "SQL Optimization"]
  },
  {
    period: "Agustus 2025 - September 2026",
    role: "Server Administrator & Web Developer",
    company: "CV. Kafaa Billahi Syahida",
    type: "Freelance",
    location: "Indonesia",
    highlights: [
      "Mengelola infrastruktur server berbasis VPS dan Shared Hosting: setup environment, deployment aplikasi, domain, SSL, dan layanan pendukung.",
      "Memantau kesehatan server dan performa aplikasi secara rutin serta cepat melakukan troubleshooting jika ada kendala.",
      "Mengeksekusi proses migrasi aplikasi dari VPS ke shared hosting (penyesuaian runtime PHP, Composer, database MySQL, Git, dan akun email).",
      "Mengembangkan fitur baru, merawat sistem yang berjalan, serta debugging dan perbaikan bug agar aplikasi tetap aman dan stabil."
    ],
    skills: ["Linux VPS", "Shared Hosting", "SSL / DNS", "Server Monitoring", "PHP", "Git", "Bug Fixing"]
  },
  {
    period: "Mei 2024 - Agustus 2025",
    role: "Web Developer",
    company: "CV. Kafaa Billahi Syahida",
    type: "Full-time",
    location: "Indonesia",
    highlights: [
      "Mengembangkan dan memelihara aplikasi web berbasis PHP, JavaScript, MySQL, dan Bootstrap untuk mendukung kebutuhan bisnis perusahaan.",
      "Menambah fitur baru sesuai kebutuhan pengguna serta menyempurnakan alur sistem yang sudah ada.",
      "Menghubungkan frontend, backend, dan database agar alur pemrosesan data berlangsung konsisten dan rapi.",
      "Mengoptimalkan query dan struktur database MySQL agar halaman laporan memuat data lebih cepat.",
      "Membangun antarmuka yang responsif dan mudah dipahami oleh pengguna awam.",
      "Berdiskusi langsung dengan pengguna untuk membedah kebutuhan sistem dan menerjemahkannya ke dalam solusi teknis."
    ],
    skills: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Query Optimization", "System Analysis"]
  },
  {
    period: "Agustus 2022 - Desember 2022",
    role: "WordPress Developer",
    company: "CV. Karyain Digital Kreatif",
    type: "Praktik Kerja Lapangan",
    location: "Indonesia",
    highlights: [
      "Mengembangkan dan merawat website berbasis WordPress sesuai kebutuhan klien dengan memperhatikan performa dan kemudahan penggunaan.",
      "Melakukan konfigurasi dan kustomisasi theme, plugin, layout, serta fitur pelengkap website.",
      "Melakukan troubleshooting, debugging, maintenance, dan optimasi performa agar website tetap stabil dan aman.",
      "Berkoordinasi dengan tim terkait dalam mengimplementasikan konten dan kebutuhan teknis website."
    ],
    skills: ["WordPress", "PHP", "MySQL", "Theme Customization", "Troubleshooting"]
  }
];

export const HARD_SKILLS: SkillCategory[] = [
  {
    category: "Programming & Framework",
    items: ["PHP", "Laravel", "JavaScript", "Vue.js", "jQuery", "Bootstrap", "HTML5 / CSS3"]
  },
  {
    category: "Database & SQL",
    items: ["PostgreSQL", "MySQL", "Relational Database Design", "SQL Query Optimization", "Data Integrity"]
  },
  {
    category: "API & Integrasi",
    items: ["RESTful API", "System Integration", "Data Synchronization", "Postman"]
  },
  {
    category: "Server, DevOps & Tooling",
    items: ["Linux", "Shared Hosting", "Git / GitHub / Bitbucket", "Composer", "DataTables"]
  }
];

export const SOFT_SKILLS: string[] = [
  "Problem Solving & Troubleshooting",
  "Analytical Thinking",
  "Adaptability & Continuous Learning",
  "Communication & Cross-Functional Collaboration",
  "Attention to Detail",
  "Time Management",
  "Responsibility & Ownership",
  "Teamwork & Independent Working"
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Data Structures & Algorithm",
    issuer: "Udemy",
    year: "2026"
  },
  {
    title: "Object Oriented Programming & Design Crash",
    issuer: "Udemy",
    year: "2026"
  },
  {
    title: "Relational Database Design",
    issuer: "Udemy",
    year: "2026"
  },
  {
    title: "SQL For Business & Data Analytic",
    issuer: "Udemy",
    year: "2026"
  },
  {
    title: "SQL Bootcamp",
    issuer: "Udemy",
    year: "2026"
  }
];

export const EDUCATION = {
  school: "SMK MVP ARS INTERNATIONAL",
  major: "Rekayasa Perangkat Lunak (RPL)",
  period: "2020 - 2023"
};
