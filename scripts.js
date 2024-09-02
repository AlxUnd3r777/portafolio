document.addEventListener("DOMContentLoaded", () => {
    // Modal para escáner de QR
    const scannerModal = document.getElementById("scannerModal");
    const openScannerBtn = document.getElementById("openScannerBtn");
    const closeScanner = scannerModal.querySelector(".close");
    
    openScannerBtn.addEventListener("click", () => {
        scannerModal.style.display = "block";
    });

    closeScanner.addEventListener("click", () => {
        scannerModal.style.display = "none";
    });

    // Modal para la cámara
    const cameraModal = document.getElementById("cameraModal");
    const openCameraBtn = document.getElementById("openCameraBtn");
    const closeCamera = cameraModal.querySelector(".close-camera");
    const cameraFeed = document.getElementById("cameraFeed");

    openCameraBtn.addEventListener("click", async () => {
        cameraModal.style.display = "block";
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraFeed.srcObject = stream;
        } catch (err) {
            console.error("Error accessing the camera: ", err);
        }
    });

    closeCamera.addEventListener("click", () => {
        cameraModal.style.display = "none";
        if (cameraFeed.srcObject) {
            const stream = cameraFeed.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            cameraFeed.srcObject = null;
        }
    });
});
