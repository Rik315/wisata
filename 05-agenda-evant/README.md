```markdown
# Panduan Modul 05: Agenda Event & Festival Budaya

Modul ini menyajikan kalender acara festival tahunan daerah, dilengkapi banner hitung mundur (countdown timer) interaktif menuju perhelatan terdekat.

---

## Berkas yang Dikerjakan
* `events.html`: Halaman kalender agenda dan festival seni.
* `events.css`: Tata letak kartu agenda dan kotak hitung mundur.
* `events.js`: Logika perhitungan hitung mundur waktu nyata.

---

## Langkah Pengerjaan

### 1. Struktur HTML (`events.html`)
1. Hubungkan berkas `../core/global.css` dan `events.css`.
2. Buat banner utama acara terdekat yang memuat kontainer angka hitung mundur:
   * `<span id="days">00</span> Hari`
   * `<span id="hours">00</span> Jam`
   * `<span id="minutes">00</span> Menit`
   * `<span id="seconds">00</span> Detik`
3. Buat daftar kartu agenda tahunan menggunakan kelas `.card`:
   * Tampilkan tanggal acara di sisi kiri dan detail acara di sisi kanan.

### 2. Penataan Gaya (`events.css`)
1. Buat kotak hitung mundur berjajar rapi ke samping:
   ```css
   .countdown-container {
     display: flex;
     gap: 16px;
     justify-content: center;
   }

   Berikan ukuran font tebal dan aksen warna var(--primary) pada elemen angka.

3. Logika JavaScript (events.js)
Tetapkan tanggal target kegiatan di masa mendatang:
const targetDate = new Date("Dec 31, 2026 08:00:00").getTime();

Jalankan fungsi berulang setiap 1 detik menggunakan setInterval():

Hitung selisih waktu antara waktu sekarang dan target.

Konversikan ke satuan hari, jam, menit, dan detik.

Tampilkan hasil angka tersebut ke masing-masing elemen HTML dengan innerText.