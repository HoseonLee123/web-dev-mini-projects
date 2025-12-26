import "./style.css";

const animationButtons = document.querySelector(".animation-container").querySelectorAll("button");
const transitionButtons = document
    .querySelector(".transition-container")
    .querySelectorAll("button");

const animationStyleInfo = {
    "animation-display-btn": {
        "fade-in": "animation-display-fade-in",
        "fade-out": "animation-display-fade-out",
    },
    "animation-content-visibility-btn": {
        "fade-in": "animation-content-visibility-fade-in",
        "fade-out": "animation-content-visibility-fade-out",
    },
    "animation-visibility-btn": {
        "fade-in": "animation-visibility-fade-in",
        "fade-out": "animation-visibility-fade-out",
    },
};

animationButtons.forEach((button) => {
    const target = document.querySelector(`#${button.id} ~ p`);

    button.addEventListener("click", () => {
        if (target.classList.contains(animationStyleInfo[button.id]["fade-in"])) {
            target.classList.remove(animationStyleInfo[button.id]["fade-in"]);
            target.classList.add(animationStyleInfo[button.id]["fade-out"]);
        } else {
            target.classList.add(animationStyleInfo[button.id]["fade-in"]);
            target.classList.remove(animationStyleInfo[button.id]["fade-out"]);
        }
    });
});

const transitionStyleInfo = {
    "transition-display-btn": {
        toggle: "transition-display-toggle",
        transition: "display 1s allow-discrete, opacity 1s",
    },
    "transition-content-visibility-btn": {
        toggle: "transition-content-visibility-toggle",
        transition: "content-visibility 1s allow-discrete, opacity 1s",
    },
    "transition-visibility-btn": {
        toggle: "transition-visibility-toggle",
        transition: "visibility 1s, opacity 1s",
    },
};

transitionButtons.forEach((button) => {
    const target = document.querySelector(`#${button.id} ~ p`);

    button.addEventListener("click", () => {
        target.classList.toggle(transitionStyleInfo[button.id].toggle);
    });

    // Setting the transition in JavaScript rather than in CSS can prevent the first loading transition problem
    setTimeout(() => {
        target.style.transition = transitionStyleInfo[button.id].transition;
    });
});
