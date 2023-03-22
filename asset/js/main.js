// Add Constan
const buyBtns = document.querySelectorAll(".js-buy-tickets");
const showModal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalCloser = document.querySelector(".js-modal-close");
// Show Modal
function showBuyticket() {
  showModal.classList.add("open");
}
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyticket);
}
// Close Modal
function closeModal() {
  showModal.classList.remove("open");
}
modalCloser.addEventListener("click", closeModal);
showModal.addEventListener("click", closeModal);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
