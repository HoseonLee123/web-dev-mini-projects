import "./style.css";

const nav = document.querySelector("nav");
const buttons = document.querySelectorAll("button");

window.addEventListener("scroll", () => {
    if (window.scrollY > nav.offsetHeight) {
        buttons.forEach((button) => {
            button.classList.add("show");
        });
    } else {
        buttons.forEach((button) => {
            button.classList.remove("show");
        });
    }
});

buttons[1].addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
