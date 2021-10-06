let sisezModal = document.getElementById("sizes-modal");
let openModalBtn = document.getElementById("open-modal");
let closeModalBtn = document.getElementById("close-modal");
let bodyElem = document.body;

// check if items exist before calling any function
// to avoid null or undefined errors
if (sisezModal && openModalBtn && closeModalBtn) {
  openModalBtn.onclick = function () {
    bodyElem.style.overflow = "hidden";
    sisezModal.style.display = "flex";
  };

  closeModalBtn.onclick = function () {
    bodyElem.style.overflow = "auto";
    sisezModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (sisezModal && event.target === sisezModal) {
      bodyElem.style.overflow = "auto";
      sisezModal.style.display = "none";
    }
  };
}
