# Panduan Modul 02: Katalog Destinasi Wisata

Modul ini bertanggung jawab menampilkan katalog objek wisata di Yogyakarta yang dapat difilter berdasarkan kategori dan dicari berdasarkan kata kunci secara langsung.

---

## Berkas yang Dikerjakan
* `destinations.html`: Struktur halaman katalog.
* `destinations.css`: Tata letak grid kartu wisata.
* `filter.js`: Logika penyaringan kategori dan pencarian teks.

---

## Langkah Pengerjaan

### 1. Struktur HTML (`destinations.html`)
1. Hubungkan `../core/global.css` dan `destinations.css` di tag `<head>`.
2. Gunakan komponen `<header class="main-header">` dan `<footer class="main-footer">` yang seragam.
3. Buat pembungkus tombol filter kategori dengan atribut `data-category`:
   * Tombol 1: `data-category="all"` (Semua Wisata)
   * Tombol 2: `data-category="candi"` (Candi & Sejarah)
   * Tombol 3: `data-category="alam"` (Alam & Pegunungan)
   * Tombol 4: `data-category="pantai"` (Pantai & Pesisir)
4. Buat kontainer kisi menggunakan `<div class="destinasi-grid">`.
5. Buat minimal 6 kartu wisata (`.card .dest-card`) dengan atribut data yang sesuai. Setiap kartu memuat:
   * Foto tempat wisata (`<img>`)
   * Badge kategori (`<span class="badge">`)
   * Judul tempat (`<h3>`)
   * Deskripsi ringkas (`<p>`)
   * Lokasi dan tautan menuju `../03-detail-wisata/detail.html`.

### 2. Penataan Gaya (`destinations.css`)
1. Tata tombol filter dengan Flexbox sejajar di tengah.
2. Beri gaya status aktif tombol: kelas `.btn-filter.active` diberi latar `var(--primary)` dan teks putih.
3. Gunakan CSS Grid responsif untuk daftar kartu:
   ```css
   .destinasi-grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
     gap: 26px;
   }

   Logika JavaScript (filter.js)
   
Ambil seluruh tombol filter dan kartu menggunakan querySelectorAll.

Pasang event klik pada tombol:

Sembunyikan kartu yang kategorinya tidak cocok (card.style.display = 'none').

Tampilkan kartu yang sesuai (card.style.display = 'flex').

Sambungkan event input pada elemen #searchInput agar kartu otomatis tersaring saat pengguna mengetik nama tempat.