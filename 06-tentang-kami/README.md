### 5. Simpan di: `06-tentang-kami/README.md`

```markdown
# Panduan Modul 06: Profil Tim & Formulir Kontak

Modul ini menyajikan latar belakang proyek pembuatan website serta kartu profil 6 orang anggota kelompok.

---

## Berkas yang Dikerjakan
* `about.html`: Konten visi platform dan portofolio 6 anggota tim.
* `about.css`: Tata letak kisi kartu profil dan form pesan.

---

## Langkah Pengerjaan

### 1. Struktur HTML (`about.html`)
1. Hubungkan berkas `../core/global.css` dan `about.css`.
2. Buat bagian pengantar mengenai latar belakang proyek web ini.
3. Buat kisi profil tim:
   * Sediakan tepat 6 buah kartu dengan kelas `.card .team-card`.
   * Setiap kartu memuat foto anggota, nama lengkap, NIM, peran tugas modul, serta tautan profil GitHub/media sosial.
4. Buat bagian formulir kontak:
   * Sediakan input Nama, Email, Subjek, dan Pesan.
   * Beri tombol pengiriman `<button class="btn-primary">Kirim Pesan</button>`.

### 2. Penataan Gaya (`about.css`)
1. Susun kartu tim dalam pola grid responsif 3 kolom:
   ```css
   .team-grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
     gap: 24px;
   }
Format foto profil berukuran seragam menggunakan properti object-fit: cover;.

Beri jarak vertikal antar-input form agar nyaman dilihat dan mudah diisi.