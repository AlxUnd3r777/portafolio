document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    const openScannerBtn = document.getElementById('openScannerBtn');
    const scannerModal = document.getElementById('scannerModal');
    const closeModal = document.querySelector('.close');

    console.log("Script cargado correctamente");

    // Verifica si el botón existe
    if (openScannerBtn) {
        console.log("Botón de abrir escáner encontrado");
    } else {
        console.log("Botón de abrir escáner no encontrado");
    }

    // Abrir el modal del escáner de QR....
    openScannerBtn.addEventListener('click', function() {
        console.log("Botón de abrir escáner clickeado");
        scannerModal.style.display = 'block';
    });

    // Cerrar el modal del escáner de QR
    closeModal.addEventListener('click', function() {
        console.log("Botón de cerrar clickeado");
        scannerModal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target == scannerModal) {
            console.log("Clic fuera del modal detectado");
            scannerModal.style.display = 'none';
        }
    });
});
