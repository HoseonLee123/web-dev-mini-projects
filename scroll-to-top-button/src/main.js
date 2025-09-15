import "./style.css";

const nav = document.querySelector("nav");
const topButton = document.querySelector(".top-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > nav.offsetHeight) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
