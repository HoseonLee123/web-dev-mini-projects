import "./style.css";

const showModal = document.querySelector(".show-modal");
const modalContainer = document.querySelector(".modal-container");
const close = document.querySelector(".close");

showModal.addEventListener("click", () => {
    modalContainer.classList.add("display");

    setTimeout(() => {
        modalContainer.classList.add("opacity");
    }, 100);
});

close.addEventListener("click", () => {
    modalContainer.classList.remove("display");
    modalContainer.classList.remove("opacity");
});
