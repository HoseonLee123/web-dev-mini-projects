import "./style.css";

const container = document.querySelector(".container");

window.addEventListener("scroll", () => {
    if (window.scrollY > container.offsetHeight) {
        container.classList.add("pop-up");
    } else {
        container.classList.remove("pop-up");
    }
});
