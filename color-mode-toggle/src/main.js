import "./style.css";

const modeToggle1 = document.querySelector(".mode-toggle-1");
const modeToggle2 = document.querySelector(".mode-toggle-2");

modeToggle1.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
});

modeToggle2.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
});

// Initial User Preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDark) {
    document.documentElement.classList.add("dark-mode");
}
