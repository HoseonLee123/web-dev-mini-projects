import "./style.css";

const container = document.querySelector(".container");

container.addEventListener("mousedown", handleMouseDown);

container.addEventListener("mouseup", handleClear);

container.addEventListener("mouseleave", handleClear);

function handleMouseDown() {
    container.classList.add("active");

    container.addEventListener("mousemove", handleMouseMove);
}

function handleClear() {
    container.classList.remove("active");

    container.removeEventListener("mousemove", handleMouseMove);
}

function handleMouseMove({ movementX, movementY }) {
    const style = window.getComputedStyle(container);
    const { left, top } = style;

    container.style.left = `${parseInt(left) + movementX}px`;
    container.style.top = `${parseInt(top) + movementY}px`;
}
