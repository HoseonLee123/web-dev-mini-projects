import "./style.css";

const indicator = document.querySelector(".indicator");

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    indicator.style.width = `${scrolled}%`;
});
