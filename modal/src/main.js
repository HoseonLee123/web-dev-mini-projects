import "./style.css";

const showModal = document.querySelector(".show-modal");
const modalContainer = document.querySelector(".modal-container");
const close = document.querySelector(".close");

setTimeout(() => {
    modalContainer.style.transition = "all 0.5s allow-discrete";
});

showModal.addEventListener("click", () => {
    modalContainer.classList.add("toggle");
});

close.addEventListener("click", () => {
    modalContainer.classList.remove("toggle");
});
