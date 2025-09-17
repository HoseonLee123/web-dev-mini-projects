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
    const length = +star.getAttribute("id");

    star.addEventListener("mouseenter", () => {
        for (let i = 0; i < length; i++) {
            stars[i].style.color = "gold";
        }
    });

    star.addEventListener("mouseleave", () => {
        for (let i = 0; i < length; i++) {
            if (stars[i].getAttribute("data-is-clicked") === "false") {
                stars[i].style.color = "gray";
            }
        }
    });

    star.addEventListener("click", () => {
        for (let i = 0; i < stars.length; i++) {
            if (i < length) {
                stars[i].setAttribute("data-is-clicked", "true");
                stars[i].style.color = "gold";
            } else {
                stars[i].setAttribute("data-is-clicked", "false");
                stars[i].style.color = "gray";
                stars[i].style.textShadow = "none";
            }
        }

        if (length === stars.length) {
            for (let i = 0; i < stars.length; i++) {
                stars[i].style.textShadow = "0 0 10px gold";
            }
        } else {
            for (let i = 0; i < stars.length; i++) {
                stars[i].style.textShadow = "none";
            }
        }

        formContainer.style.display = "block";

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
