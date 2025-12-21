/* =====================================================
   BOTÓN VOLVER ARRIBA
===================================================== */
window.onscroll = function () {
    const btn = document.getElementById("back-to-top-btn");
    if (!btn) return;

    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SCROLL SUAVE AL TOP
    ===================================================== */
    const backToTopBtn = document.getElementById("back-to-top-btn");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* =====================================================
       MODAL ESCÁNER QR
    ===================================================== */
    const openScannerBtn = document.getElementById("openScannerBtn");
    const scannerModal = document.getElementById("scannerModal");
    const closeModal = document.querySelector(".close");

    if (openScannerBtn && scannerModal) {
        openScannerBtn.addEventListener("click", function () {
            scannerModal.style.display = "block";
        });
    }

    if (closeModal && scannerModal) {
        closeModal.addEventListener("click", function () {
            scannerModal.style.display = "none";
        });
    }

    window.addEventListener("click", function (event) {
        if (scannerModal && event.target === scannerModal) {
            scannerModal.style.display = "none";
        }
    });

    /* =====================================================
       EFECTO 1: REVEAL ON SCROLL (SECCIONES)
    ===================================================== */
    const sections = document.querySelectorAll(".section");

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.15 }
    );

    sections.forEach(section => revealObserver.observe(section));

    /* =====================================================
       EFECTO 2: GLOW REACTIVO AL MOUSE (CYBER)
    ===================================================== */
    const glowElements = document.querySelectorAll(
        ".section-content, .nav-list a, .btn-primary"
    );

    document.addEventListener("mousemove", e => {
        glowElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
                el.style.background = `
                    radial-gradient(
                        circle at ${x}px ${y}px,
                        rgba(0,255,156,0.18),
                        rgba(255,255,255,0.05)
                    )
                `;
            } else {
                el.style.background = "";
            }
        });
    });

});
/* =====================================================
   GLASS INTERACTIVO (REFLEJO DINÁMICO)
===================================================== */
const glassElements = document.querySelectorAll('.glass');

document.addEventListener('mousemove', e => {
    glassElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        if (x >= 0 && y >= 0 && x <= 100 && y <= 100) {
            el.style.setProperty('--mx', `${x}%`);
            el.style.setProperty('--my', `${y}%`);
        }
    });
});
/* ===============================
   GLASS REACTIVO AL MOUSE
=============================== */
const glassEls = document.querySelectorAll('.glass');

document.addEventListener('mousemove', e => {
    glassEls.forEach(el => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;

        if (x >= 0 && y >= 0 && x <= 100 && y <= 100) {
            el.style.setProperty('--mx', `${x}%`);
            el.style.setProperty('--my', `${y}%`);
        }
    });
});


