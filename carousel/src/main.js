import "./style.css";

const container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const carouselDummy = document.querySelector(".carousel-dummy");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const currentNumber = document.querySelector(".current-number");
const totalNumber = document.querySelector(".total-number");
const circleStatus = document.querySelector(".circle-status");

currentNumber.textContent = "1";
totalNumber.textContent = carousel.childElementCount.toString();

const movingInterval = carousel.offsetWidth;
resetCarousel();

carousel.addEventListener("scroll", () => {
    // Scroll Infinitely
    if (carousel.scrollLeft === 0) {
        carousel.scrollTo({
            left: movingInterval * (carousel.childElementCount - 2),
            behavior: "instant",
        });
    } else if (carousel.scrollLeft === movingInterval * (carousel.childElementCount - 1)) {
        carousel.scrollTo({
            left: movingInterval,
            behavior: "instant",
        });
    }

    // Change the current number and circle status
    const carouselPosInfo = carousel.getBoundingClientRect();
    const targetElement = document.elementFromPoint(
        carouselPosInfo.x + carouselPosInfo.width / 2,
        carouselPosInfo.y + carouselPosInfo.height / 2,
    );

    currentNumber.textContent = targetElement.textContent;
    circleStatus.querySelector(".active").classList.remove("active");
    circleStatus.children[targetElement.textContent - 1].classList.add("active");
});

// Scroll Automatically
let needAutoScrolling = null;
let intervalID = autoScrolling();

function autoScrolling() {
    return setInterval(() => {
        carousel.scrollLeft += movingInterval;
    }, 2000);
}

container.addEventListener("mouseenter", () => {
    clearInterval(intervalID);
});
container.addEventListener("mouseleave", () => {
    if (document.onmousemove !== null) {
        needAutoScrolling = true;
        return;
    }

    intervalID = autoScrolling();
});

// Handle Drag and Drop
carousel.addEventListener("mousedown", (event) => {
    // Prevent this event during snapping
    if (carousel.scrollLeft % movingInterval !== 0) return;

    resetCarousel();

    carousel.classList.add("dragging");

    const startX = event.clientX;
    const startScrollLeft = carousel.scrollLeft;
    let deltaX = 0;
    document.onmousemove = (event) => {
        deltaX = startX - event.clientX;
        carousel.scrollLeft = startScrollLeft + deltaX;
    };

    const dragStartTime = performance.now();
    document.onmouseup = handleDrop;
    function handleDrop() {
        const dropTime = performance.now();
        const dragDuration = dropTime - dragStartTime;

        if (dragDuration < 200 && deltaX > 0) {
            // Go Right: Smooth Quick
            carousel.scrollTo({
                left: startScrollLeft + movingInterval,
                behavior: "smooth",
            });
        } else if (dragDuration < 200 && deltaX < 0) {
            // Go Left: Smooth Quick
            carousel.scrollTo({
                left: startScrollLeft - movingInterval,
                behavior: "smooth",
            });
        } else {
            if (deltaX > 0 && deltaX < movingInterval / 2) {
                // Come Back from Right
                carousel.scrollTo({
                    left: startScrollLeft,
                    behavior: "smooth",
                });
            } else if (deltaX >= movingInterval / 2) {
                // Go Right: Smooth
                const quotient = Math.floor(deltaX / movingInterval);
                const remainder = deltaX % movingInterval;

                if (remainder >= movingInterval / 2) {
                    carousel.scrollTo({
                        left: startScrollLeft + movingInterval * (quotient + 1),
                        behavior: "smooth",
                    });
                } else {
                    carousel.scrollTo({
                        left: startScrollLeft + movingInterval * quotient,
                        behavior: "smooth",
                    });
                }
            } else if (deltaX < 0 && deltaX > -movingInterval / 2) {
                // Come Back from Left
                carousel.scrollTo({
                    left: startScrollLeft,
                    behavior: "smooth",
                });
            } else if (deltaX <= -movingInterval / 2) {
                // Go Left: Smooth
                const quotient = Math.floor(-deltaX / movingInterval);
                const remainder = -deltaX % movingInterval;

                if (remainder >= movingInterval / 2) {
                    carousel.scrollTo({
                        left: startScrollLeft - movingInterval * (quotient + 1),
                        behavior: "smooth",
                    });
                } else {
                    carousel.scrollTo({
                        left: startScrollLeft - movingInterval * quotient,
                        behavior: "smooth",
                    });
                }
            }
        }

        carousel.classList.remove("dragging");

        document.onmousemove = null;
        document.onmouseup = null;

        if (needAutoScrolling) {
            intervalID = autoScrolling();
            needAutoScrolling = false;
        }
    }
});

// Handle Left Button Click
left.addEventListener("click", () => {
    // Prevent this event during snapping
    if (carousel.scrollLeft % movingInterval !== 0) return;

    carousel.scrollLeft -= movingInterval;
});

// Handle Right Button Click
right.addEventListener("click", () => {
    // Prevent this event during snapping
    if (carousel.scrollLeft % movingInterval !== 0) return;

    carousel.scrollLeft += movingInterval;
});

// Handle Circle Status Click
circleStatus.querySelectorAll("li").forEach((targetLi) => {
    targetLi.addEventListener("click", () => {
        // Prevent this event during snapping
        if (carousel.scrollLeft % movingInterval !== 0) return;

        resetCarousel();

        carousel.scrollLeft +=
            movingInterval *
            (targetLi.dataset.circleOrder -
                circleStatus.querySelector(".active").dataset.circleOrder);
    });
});

function resetCarousel() {
    const rectInfo = carousel.getBoundingClientRect();
    const targetElement = document.elementFromPoint(
        rectInfo.x + rectInfo.width / 2,
        rectInfo.y + rectInfo.height / 2,
    );

    carousel.innerHTML = "";

    for (const child of carouselDummy.children) {
        if (child.textContent === targetElement.textContent) {
            let startIndex = child.textContent - 1;
            carousel.append(carouselDummy.children[startIndex].cloneNode(true));

            startIndex++;
            if (startIndex > carouselDummy.children.length - 1) {
                startIndex = 0;
            }
            for (let i = 0; i < 12; i++) {
                carousel.append(carouselDummy.children[startIndex].cloneNode(true));

                startIndex++;
                if (startIndex > carouselDummy.children.length - 1) {
                    startIndex = 0;
                }
            }

            startIndex = child.textContent - 2;
            if (startIndex < 0) {
                startIndex = carouselDummy.children.length - 1;
            }
            for (let i = 0; i < 7; i++) {
                carousel.prepend(carouselDummy.children[startIndex].cloneNode(true));

                startIndex--;
                if (startIndex < 0) {
                    startIndex = carouselDummy.children.length - 1;
                }
            }

            carousel.scrollTo({
                left: movingInterval * 7,
                behavior: "instant",
            });

            break;
        }
    }
}
