import "./style.css";
import Sortable from "sortablejs"; // npm install sortablejs --save

const sortableList = document.querySelector(".sortable-list");

const sortable = Sortable.create(sortableList, {
    animation: 300,
    handle: ".handle",
    ghostClass: "ghost",
    dragClass: "drag",
});
