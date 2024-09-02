document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    const openScannerBtn = document.getElementById('openScannerBtn');
    const openPageBtn = document.getElementById('openPageBtn');
    const scannerModal = document.getElementById('scannerModal');
    const closeModal = document.querySelector('.close');

    // Abrir el modal del escáner de QR
    openScannerBtn.addEventListener('click', function() {
        scannerModal.style.display = 'block';
    });

    // Cerrar el modal del escáner de QR
    closeModal.addEventListener('click', function() {
        scannerModal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target == scannerModal) {
            scannerModal.style.display = 'none';
        }
    });
});
