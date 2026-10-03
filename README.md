# 🏛️ Explore Yogyakarta — Web Pariwisata Daerah Istimewa

Portal web informasi pariwisata Daerah Istimewa Yogyakarta yang dikembangkan secara kolaboratif menggunakan **HTML5 semantik**, **CSS3 modern (Design Tokens)**, dan **Modular JavaScript**. Proyek ini dirancang responsif, ramah aksesibilitas (*a11y*), serta terstruktur rapi untuk mempermudah pengerjaan tim.

---

## 📂 Struktur Proyek & Pembagian Modul

```text
wisata-project/
├── core/                  # Sistem Desain Global (CSS variables, reset, navbar/footer)
│   ├── global.css
|   ├── Readme.md
│   └── global.js
├── assets/                # Aset gambar bersama & ikon
│   └── images/
├── 01-homepage/           # [Anggota 1] Halaman Utama / Landing Page
│   ├── index.html
|   ├── Readme.md
|   ├── Blueprint.md
│   └── home.css
├── 02-destinasi/          # [Anggota 2] Katalog Objek Wisata + Filter Kategori
│   ├── destinations.html
│   ├── destinations.css
│   ├── filter.js
|   ├── Blueprint.md
│   └── README.md
├── 03-detail-wisata/      # [Anggota 3] Detail Destinasi Unggulan + Galeri Modal Popup
│   ├── detail.html
│   ├── detail.css
│   ├── modal.js
|   ├── Blueprint.md
│   └── README.md
├── 04-paket-tur/          # [Anggota 4] Pilihan Paket Wisata + Jadwal Accordion
│   ├── packages.html
│   ├── packages.css
│   ├── accordion.js
|   ├── Blueprint.md
│   └── README.md
├── 05-agenda-event/       # [Anggota 5] Kalender Festival Budaya + Countdown Timer
│   ├── events.html
│   ├── events.css
│   ├── events.js
|   ├── Blueprint.md
│   └── README.md
├── 06-tentang-kami/       # [Anggota 6] Profil Anggota Tim & Form Kontak
│   ├── about.html
│   ├── about.css
|   ├── Blueprint.md
│   └── README.md
├── .gitignore
└── README.md              # Dokumentasi Utama Proyek