let lastModalId = null;
document.querySelectorAll(".modalButton").forEach(function (modalButton) {
  modalButton.addEventListener("click", function () {
    showModal(this.getAttribute("data-modalId"));
  });
});

document.querySelectorAll(".close").forEach(function (close) {
  close.addEventListener("click", function () {
    document.getElementById(lastModalId).classList.toggle("show-modal");
    lastModalId = null;
  });
});

const showModal = (modalId) => {
  if (lastModalId) {
    document.getElementById(lastModalId).classList.toggle("show-modal");
  }
  lastModalId = modalId;
  document.getElementById(modalId).classList.toggle("show-modal");
};
