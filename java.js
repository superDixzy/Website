document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let logoContainer = document.querySelector(".logo-container");
        let mainContent = document.querySelector(".main-content");
        let header = document.querySelector("header");

        if (logoContainer) {
            logoContainer.classList.add("hide"); // Mulai fade-out
            setTimeout(() => {
                logoContainer.style.display = "none"; // Hapus elemen setelah fade-out selesai
                
                if (mainContent) {
                    mainContent.style.display = "block"; // Tampilkan halaman
                    setTimeout(() => {
                        mainContent.classList.add("show"); // Aktifkan fade-in
                    }, 50);
                }

                if (header) {
                    setTimeout(() => {
                        header.classList.add("show"); // Aktifkan animasi turun header
                    }, 500); // Header muncul sedikit lebih lambat agar lebih smooth
                }

            }, 1000); // Tunggu hingga fade-out selesai
        }
    }, 3000); // Logo tampil selama 3 detik sebelum fade-out
});
