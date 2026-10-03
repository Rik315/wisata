# 🏛️ — Web Pariwisata Daerah Istimewa

Portal web informasi pariwisata yang dikembangkan secara kolaboratif menggunakan **HTML5 semantik**, **CSS3 modern (Design Tokens)**, dan **Modular JavaScript**. Proyek ini dirancang responsif, ramah aksesibilitas (*a11y*), serta terstruktur rapi untuk mempermudah pengerjaan tim.

---

## Cara penginstalan
``` text
- Lewat Terminal:

1.Buka terminal atau Git Bash di folder tempat kamu ingin menyimpan proyek.

2.Jalankan perintah berikut:
git clone https://github.com/Rik315/wisata.git

3.Masuk ke folder proyek yang baru saja terunduh:
cd wisata

4.Buka langsung di VS Code:
code .

- Unduh Berkas Zip:

1.Buka tautan repositori di browser: [https://github.com/Rik315/wisata](https://github.com/Rik315/wisata).

2.Klik tombol hijau bertuliskan <> Code di sebelah kanan atas daftar berkas.

3.Pilih opsi Download ZIP.

4.Ekstrak (unzip) berkas yang sudah selesai diunduh.

5.Buka folder hasil ekstrak tersebut menggunakan Text Editor/VS Code.
```

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
```

