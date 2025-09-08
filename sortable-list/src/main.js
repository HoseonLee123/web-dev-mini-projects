import "./style.css";

const items = document.querySelectorAll(".item");
const sortableList = document.querySelector(".sortable-list");

items.forEach((item) => {
    item.addEventListener("dragstart", () => setTimeout(() => item.classList.add("dragging"), 0));
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

sortableList.addEventListener("dragenter", (event) => event.preventDefault());
sortableList.addEventListener("dragover", initSortableList);

function initSortableList(event) {
    event.preventDefault();

    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    const nextSibling = siblings.find((sibling) => {
        const rect = sibling.getBoundingClientRect();

        return event.clientY < rect.top + rect.height / 2;
    });

    console.log(nextSibling);
    const draggingItem = sortableList.querySelector(".dragging");

    if (draggingItem === null) return;

    sortableList.insertBefore(draggingItem, nextSibling);
}
