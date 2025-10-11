import "./style.css";

const container = document.querySelector(".container");

container.addEventListener("mousedown", (event) => {
    const shiftX = event.clientX - container.getBoundingClientRect().left;
    const shiftY = event.clientY - container.getBoundingClientRect().top;

    function moveAt(event) {
        container.style.left = event.clientX - shiftX + "px";
        container.style.top = event.clientY - shiftY + "px";
    }

    function handleMouseMove(event) {
        moveAt(event);
    }

    container.classList.add("active");
    document.addEventListener("mousemove", handleMouseMove);

    container.addEventListener("mouseup", () => {
        container.classList.remove("active");
        document.removeEventListener("mousemove", handleMouseMove);
    });
});
