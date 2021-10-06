let sisezModal = document.getElementById("sizes-modal");
let openModalBtn = document.getElementById("open-modal");
let closeModalBtn = document.getElementById("close-modal");

// check if items exist before calling any function
// to avoid null or undefined errors
if(sisezModal && openModalBtn && closeModalBtn) {
  openModalBtn.onclick = function () {
    sisezModal.style.display = "flex";
  };

  closeModalBtn.onclick = function() {
    sisezModal.style.display = "none";
  }

  window.onclick = function(event) {
    if (sisezModal && event.target === sisezModal) {
      sisezModal.style.display = "none";
    }
  }
}

