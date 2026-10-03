# Dokumentasi Folder Core (Pondasi Proyek)

Folder ini berisi aset global bersama yang menjadi acuan desain seluruh halaman website. Dibuat agar tampilan antar-halaman tetap seragam, rapi, dan konsisten.

---

## 1. Daftar File & Fungsinya

* **`global.css`**: Berisi variabel warna (`:root`), reset margin/padding browser, bentuk tipografi, tata letak navbar atas, kartu konten, dan footer.
* **`global.js`**: Mengatur interaksi dasar navbar (menambahkan efek bayangan saat halaman di-scroll).

---

## 2. Cara Menghubungkan ke Halaman Masing-Masing

Setiap anggota tim wajib memanggil kedua file ini di dalam file HTML masing-masing dengan menggunakan path relatif `../core/`.

### Contoh Penulisan di Bagian `<head>`:
```html
<head>
  <!-- 1. Panggil CSS Global TERLEBIH DAHULU -->
  <link rel="stylesheet" href="../core/global.css">

  <!-- 2. Panggil CSS khusus halaman sendiri setelahnya -->
  <link rel="stylesheet" href="nama-file-kamu.css">
</head>
Contoh Penulisan Sebelum Penutup </body>:HTML  <!-- 1. Panggil JavaScript Global -->
  <script src="../core/global.js"></script>

  <!-- 2. Panggil JavaScript khusus fitur halaman sendiri -->
  <script src="nama-script-kamu.js"></script>
</body>

3. Variabel Warna & Komponen yang Siap DipakaiAnggota tim tidak perlu mengarang warna atau kode CSS dari nol. 

Cukup panggil variabel atau class bawaan berikut:

Variabel Warna (:root)
color: var(--text-main); $\rightarrow$ Teks judul utama (arang pekat)

.color: var(--text-sub); $\rightarrow$ Teks paragraf / deskripsi (abu-abu gelap)

.color: var(--primary); $\rightarrow$ Warna biru laut (untuk tombol atau tautan aktif)

.background-color: var(--bg-page); $\rightarrow$ Latar belakang abu-abu terang

.border-radius: var(--radius-md); $\rightarrow$ Sudut melengkung 12px untuk wadah/gambar

.Class HTML Siap Pakaiclass="card" $\rightarrow$ Otomatis membuat kotak putih dengan border tipis dan bayangan lembut

.class="btn-primary" $\rightarrow$ Otomatis membuat tombol biru berbentuk kapsul

.class="badge" $\rightarrow$ Otomatis membuat label kategori kecil (misal: "Wisata Alam").

4. Aturan Penting untuk Seluruh AnggotaDILARANG MENGUBAH ISI FILE core/global.css & core/global.js tanpa persetujuan ketua tim.Jika butuh tata letak atau warna khusus untuk halaman sendiri, tulis kodenya di file CSS milik masing-masing modul (misal: destinations.css, detail.css).