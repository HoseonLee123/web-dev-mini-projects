import "./style.css";

const starContainer = document.querySelector(".star-container");
const stars = document.querySelectorAll(".star");
const formContainer = document.querySelector(".form-container");
const result = document.querySelector(".result");
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

        switch (length) {
            case 1:
                result.textContent = "😠";
                break;
            case 2:
                result.textContent = "🙁";
                break;
            case 3:
                result.textContent = "😊";
                break;
            case 4:
                result.textContent = "😃";
                break;
            case 5:
                result.textContent = "😍";
                break;
        }
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
