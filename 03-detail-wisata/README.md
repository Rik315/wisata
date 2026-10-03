```markdown
# Panduan Modul 03: Detail Informasi Destinasi

Modul ini menyajikan informasi mendalam tentang satu objek wisata unggulan (Candi Prambanan), dilengkapi galeri foto interaktif yang memunculkan jendela sembulan (modal popup) saat gambar diklik.

---

## Berkas yang Dikerjakan
* `detail.html`: Halaman informasi lengkap tempat wisata.
* `detail.css`: Tata letak konten 2 kolom dan komponen modal.
* `modal.js`: Logika buka-tutup jendela modal gambar perbesaran.

---

## Langkah Pengerjaan

### 1. Struktur HTML (`detail.html`)
1. Hubungkan berkas `../core/global.css` dan `detail.css`.
2. Buat bagian judul tempat, lokasi, dan remah roti (breadcrumb).
3. Buat kisi galeri foto dengan class `.gallery-img` pada setiap gambar.
4. Buat tata letak dua kolom:
   * **Kolom Kiri (Utama):** Sejarah objek wisata, daya tarik utama, dan tips berkunjung.
   * **Kolom Kanan (Informasi):** Kartu info operasional (harga tiket, jam buka, fasilitas) dan sematan Google Maps (`<iframe>`).
5. Buat struktur elemen modal pop-up sebelum tag penutup `</body>`:
   ```html
   <div class="modal" id="imageModal">
     <span class="modal-close">&times;</span>
     <img class="modal-content" id="modalImg" alt="Pratinjau Foto">
   </div>

   2. Penataan Gaya (detail.css)
Tata halaman menjadi dua kolom berdampingan menggunakan Flexbox atau CSS Grid.

Atur gaya sembulan modal:

Gunakan position: fixed; top: 0; left: 0; width: 100%; height: 100%;.

Beri latar belakang semi-transparan hitam (rgba(0, 0, 0, 0.8)).

Nilai tampilan awal disembunyikan menggunakan display: none;.

3. Logika JavaScript (modal.js)
Ambil elemen gambar galeri, wadah modal, gambar modal, dan tombol tutup.

Saat salah satu gambar galeri diklik:

Ubah tampilan modal menjadi modal.style.display = "flex".

Salin atribut src gambar yang diklik ke gambar modal (#modalImg).

Saat tombol silang atau area latar luar diklik, ubah kembali tampilan menjadi modal.style.display = "none".