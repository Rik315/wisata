/* ==========================================================================
   GLOBAL JAVASCRIPT (core/global.js)
   Fungsi: Mengatur efek bayangan pada navbar saat halaman digulir (scroll)
   ========================================================================== */

// Menunggu dokumen HTML selesai dimuat seutuhnya sebelum menjalankan kode
document.addEventListener("DOMContentLoaded", () => {
  // Mengambil elemen header dengan class .main-header dari file HTML
  const header = document.querySelector(".main-header");

  // Memastikan elemen header benar-benar ada di halaman sebelum memasang event
  if (header) {
    // Memasang pendengar peristiwa (event listener) saat jendela browser digulir
    window.addEventListener("scroll", () => {
      // Memeriksa apakah jarak gulir dari puncak layar sudah lebih dari 10 pixel
      if (window.scrollY > 10) {
        // Jika ya, beri bayangan yang lebih tegas agar navbar terlihat terangkat dari konten
        header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
      } else {
        // Jika kembali ke posisi paling atas (0px), kembalikan ke bayangan tipis bawaan
        header.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.08)";
      }
    });
  }
});