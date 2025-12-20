import "./style.css";

const buttons = document.querySelector("ul");
const firstButton = document.querySelector(".first-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        buttons.classList.add("show");
    } else {
        buttons.classList.remove("show");
    }
});

firstButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
