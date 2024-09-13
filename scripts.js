// Mostrar/Ocultar el botón según la posición del scroll
window.onscroll = function() {
    const btn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Función para subir al top cuando se hace clic en el botón
document.getElementById("back-to-top-btn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    const openScannerBtn = document.getElementById('openScannerBtn');
    const scannerModal = document.getElementById('scannerModal');
    const closeModal = document.querySelector('.close');

    console.log("Script cargado correctamente");

    // Verifica si el botón existe
    if (openScannerBtn) {
        console.log("Botón de abrir escáner encontrado");
        
        // Abrir el modal del escáner de QR
        openScannerBtn.addEventListener('click', function() {
            console.log("Botón de abrir escáner clickeado");
            scannerModal.style.display = 'block';
        });
    } else {
        console.log("Botón de abrir escáner no encontrado");
    }

    // Verifica si el botón de cerrar el modal existe
    if (closeModal) {
        // Cerrar el modal del escáner de QR
        closeModal.addEventListener('click', function() {
            console.log("Botón de cerrar clickeado");
            scannerModal.style.display = 'none';
        });
    }

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === scannerModal) {
            console.log("Clic fuera del modal detectado");
            scannerModal.style.display = 'none';
        }
    });
});
