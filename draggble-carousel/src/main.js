import "./style.css";

const carousel = document.querySelector(".carousel");
const arrowButtons = document.querySelectorAll(".material-symbols-outlined");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const container = document.querySelector(".container");

// Mouse move
let isDragging = false;
let startX = null;
let startScrollLeft = null;

carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("dragging");
});

// Click buttons
arrowButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

// Auto play
let timeoutId = null;

autoPlay();

carousel.addEventListener("scroll", () => {
    clearTimeout(timeoutId);

    if (!container.matches(":hover")) {
        autoPlay();
    }
});

carousel.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
});

carousel.addEventListener("mouseleave", autoPlay);

function autoPlay() {
    timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
    }, 1500);
}
