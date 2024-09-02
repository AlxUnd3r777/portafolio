// Animación de desvanecimiento en el scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    // Observador de intersección para detectar cuando una sección es visible
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 } // Ajuste del umbral para activar la visibilidad
    );

    // Añade la clase "hidden" a las secciones y las observa
    sections.forEach((section) => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Referencias a elementos
    const openScannerBtn = document.getElementById("openScannerBtn");
    const scannerModal = document.getElementById("scannerModal");
    const closeBtn = document.querySelector(".close");

    // Abrir la ventana modal con el escáner
    openScannerBtn?.addEventListener("click", () => {
        scannerModal.style.display = "block";
    });

    // Cerrar la ventana modal
    closeBtn?.addEventListener("click", () => {
        scannerModal.style.display = "none";
    });

    // Cerrar la ventana modal si se hace clic fuera de ella
    window.addEventListener("click", (event) => {
        if (event.target === scannerModal) {
            scannerModal.style.display = "none";
        }
    });
});
