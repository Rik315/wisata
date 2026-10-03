```markdown
# Panduan Modul 04: Paket Perjalanan (Itinerary)

Modul ini menyajikan rancangan paket perjalanan wisata siap pakai dengan fitur rincian jadwal buka-tutup (accordion) interaktif.

---

## Berkas yang Dikerjakan
* `packages.html`: Pilihan paket wisata (1 Hari, 2D1N, dsb).
* `packages.css`: Penataan kartu paket dan komponen accordion.
* `accordion.js`: Logika buka-tutup rincian kegiatan.

---

## Langkah Pengerjaan

### 1. Struktur HTML (`packages.html`)
1. Hubungkan berkas `../core/global.css` dan `packages.css`.
2. Sediakan minimal 2 atau 3 kartu paket besar menggunakan kelas `.card`.
3. Di dalam setiap kartu paket, buat daftar rincian jadwal berformat accordion:
   ```html
   <div class="accordion-item">
     <button class="accordion-header">
       <span>08.00 - 11.00 WIB: Eksplorasi Candi & Peninggalan Sejarah</span>
       <span class="accordion-icon">+</span>
     </button>
     <div class="accordion-body">
       <p>Rincian kegiatan: Mengunjungi situs bersejarah didampingi pemandu lokal...</p>
     </div>
   </div>

   2. Penataan Gaya (packages.css)
Atur .accordion-header: teks rata kiri, hilangkan border bawaan tombol, dan beri cursor: pointer;.

Sembunyikan isi rincian secara default:

CSS
.accordion-body {
  display: none;
  padding: 14px 18px;
  color: var(--text-sub);
}
Buat kelas aktif: .accordion-item.active .accordion-body { display: block; }.

3. Logika JavaScript (accordion.js)
Ambil seluruh tombol .accordion-header menggunakan querySelectorAll.

Pasang event klik pada setiap tombol:

Dapatkan elemen induknya (.accordion-item).

Gunakan metode classList.toggle('active') pada elemen induk.

Ubah teks ikon dari + menjadi − saat accordion terbuka.