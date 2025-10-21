import "./style.css";

const starContainer = document.querySelector(".star-container");
const stars = document.querySelectorAll(".star");
const formContainer = document.querySelector(".form-container");
const faces = document.querySelector(".faces");
const experience = document.querySelector(".experience");
const post = document.querySelector(".post");
const finishContainer = document.querySelector(".finish-container");
const edit = document.querySelector(".edit");

stars.forEach((star) => {
    star.isClicked = false;

    const length = +star.getAttribute("id");

    // Paint stars gold temporarily
    star.addEventListener("mouseenter", () => {
        for (let i = 0; i < length; i++) {
            stars[i].style.color = "gold";
        }
    });

    // Paint stars gray temporarily
    star.addEventListener("mouseleave", () => {
        for (let i = 0; i < length; i++) {
            if (stars[i].isClicked === false) {
                stars[i].style.color = "gray";
            }
        }
    });

    star.addEventListener("click", () => {
        // Paint stars gold or gray
        for (let i = 0; i < stars.length; i++) {
            if (i < length) {
                stars[i].isClicked = true;
                stars[i].style.color = "gold";
            } else {
                stars[i].isClicked = false;
                stars[i].style.color = "gray";
            }
        }

        // Shine the full stars
        if (length === stars.length) {
            for (let i = 0; i < stars.length; i++) {
                stars[i].style.textShadow = "0 0 10px gold";
            }
        } else {
            for (let i = 0; i < stars.length; i++) {
                stars[i].style.textShadow = "none";
            }
        }

        // Show the form container
        formContainer.style.display = "flex";

        // Slide the faces
        const height = parseInt(window.getComputedStyle(faces).height);
        faces.scrollTop = height * (length - 1);
    });
});

for (const face of faces.children) {
    face.addEventListener("click", () => {
        experience.focus();
    });
}

post.addEventListener("click", (e) => {
    e.preventDefault();

    starContainer.style.display = "none";
    formContainer.style.display = "none";
    finishContainer.style.display = "block";
});

edit.addEventListener("click", () => {
    starContainer.style.display = "block";
    formContainer.style.display = "flex";
    finishContainer.style.display = "none";
});
