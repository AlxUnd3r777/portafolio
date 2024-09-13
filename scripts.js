window.onscroll = function() {
    const btn = document.getElementById("back-to-top-btn");
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("back-to-top-btn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    const openScannerBtn
