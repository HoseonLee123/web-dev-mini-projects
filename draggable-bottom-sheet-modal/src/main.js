import "./style.css";

const button = document.querySelector("button");
const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const content = document.querySelector(".content");
const dragSpace = document.querySelector(".drag-space");
const main = document.querySelector("main");

let isDragging = false;
let startY = 0;
let startHeight = 0;

button.addEventListener("click", initModal);

overlay.addEventListener("click", removeModal);

dragSpace.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    startHeight = parseInt(content.style.height);

    container.classList.add("dragging");
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const delta = startY - e.clientY;
    const newHeight = startHeight + (delta / window.innerHeight) * 100;
    updateContentHeight(newHeight);
});

document.addEventListener("mouseup", () => {
    if (!isDragging) return;

    isDragging = false;

    const height = parseInt(content.style.height);
    if (height < 10) {
        removeModal();
    } else if (height > 90) {
        updateContentHeight(100);
    }

    container.classList.remove("dragging");
});

function initModal() {
    document.body.style.overflow = "hidden";

    container.classList.add("show");

    updateContentHeight(50);

    main.scrollTop = 0;
}

function removeModal() {
    document.body.style.overflow = "auto";

    container.classList.remove("show");
}

function updateContentHeight(height) {
    content.style.height = `${height}vh`;

    container.classList.toggle("fullscreen", height === 100);
}
