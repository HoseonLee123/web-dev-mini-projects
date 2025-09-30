import "./style.css";

const menu = document.querySelector(".menu");
const mores = document.querySelectorAll(".more");

menu.addEventListener("click", () => {
    document.documentElement.classList.toggle("spring");
});

mores.forEach((more) =>
    more.addEventListener("click", () => {
        more.closest("ul").classList.toggle("show");
    }),
);
