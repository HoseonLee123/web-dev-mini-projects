import "./style.css";

const starContainer = document.querySelector(".star-container");
const stars = document.querySelectorAll(".star");
const formContainer = document.querySelector(".form-container");
const faceContainer = document.querySelector(".face-container");
const faces = document.querySelector(".faces");
const faceAll = document.querySelectorAll(".face");
const experience = document.querySelector(".experience");
const post = document.querySelector(".post");
const finishContainer = document.querySelector(".finish-container");
const edit = document.querySelector(".edit");

stars.forEach((star) => {
    star.isClicked = false;

    const length = +star.getAttribute("id");

    // To be gold temporarily
    star.addEventListener("mouseenter", () => {
        for (let i = 0; i < length; i++) {
            stars[i].style.color = "gold";
        }
    });

    // To be gray temporarily
    star.addEventListener("mouseleave", () => {
        for (let i = 0; i < length; i++) {
            if (stars[i].isClicked === false) {
                stars[i].style.color = "gray";
            }
        }
    });

    star.addEventListener("click", () => {
        // To be gold
        for (let i = 0; i < stars.length; i++) {
            if (i < length) {
                stars[i].isClicked = true;
                stars[i].style.color = "gold";
            } else {
                stars[i].isClicked = false;
                stars[i].style.color = "gray";
            }
        }

        // To shine the full stars
        if (length === stars.length) {
            for (let i = 0; i < stars.length; i++) {
                stars[i].style.textShadow = "0 0 10px gold";
            }
        } else {
            for (let i = 0; i < stars.length; i++) {
                stars[i].style.textShadow = "none";
            }
        }

        // To slide the faces
        const height = parseInt(window.getComputedStyle(faceContainer).height);

        switch (length) {
            case 1:
                faces.style.marginTop = "0px";
                break;
            case 2:
            case 3:
            case 4:
            case 5:
                faces.style.marginTop = `-${height * (length - 1)}px`;
                break;
        }

        // To show the form
        formContainer.style.display = "block";
    });
});

faceAll.forEach((face) => {
    face.addEventListener("click", () => {
        experience.focus();
    });
});

post.addEventListener("click", (e) => {
    e.preventDefault();

    starContainer.style.display = "none";
    formContainer.style.display = "none";
    finishContainer.style.display = "block";
});

edit.addEventListener("click", () => {
    starContainer.style.display = "block";
    formContainer.style.display = "block";
    finishContainer.style.display = "none";
});
