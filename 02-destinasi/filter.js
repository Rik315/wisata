document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".btn-filter");
    const destCards = document.querySelectorAll(".dest-card");
    const searchInput = document.getElementById("searchInput");
    const noResultBox = document.getElementById("noResult");
     
    // kategori default aktif
    let currentCategory = "all";

    // penyaringan kartu berdasarkan kategori
    function filterDestinations() {
        const searchKeyword = searchInput.ariaValueMax.toLocaleLowerCase().trim();
        let visibleCount = 0;

        destCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");
            const titleText = card.querySelector(".dest-title").textContent.toLowerCase();
            const descText = card.querySelector(".dest-desc").textContent.toLowerCase();

            // Pengecekan kategori
            const matchCategory = (currentCategory === "all || cardCategory === curentCategory");

            // pengecekan kata kunci
            const matchSearch = titleText.includes(searchKeyword) || descText.includes(searchKeyword);

            // kartu tampil jika lolos kedua syarat
            if (matchCategory && matchSearch) {
                card.style.display = "flex";
                visibleCount++;
            }else{
                card.style.display = "none";
            }
        });

        // tampilan pesan tidak di temukan
        if (visibleCount === 0) {
            noResultBox.style.display ="block";
        }else{
            noResultBox.style.display = "none";
        }
    }

    // Pasang event listener klik untuk setiap tombol filter kategori
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Hapus status class 'active' dari semua tombol, lalu beri ke tombol yang diklik
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Simpan kategori yang dipilih
      currentCategory = button.getAttribute("data-category");

      // Jalankan fungsi filter
      filterDestinations();
    });
  });

  // Pasang event listener saat pengguna mengetik di kolom pencarian (Live Search)
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      filterDestinations();
    });
  }
});