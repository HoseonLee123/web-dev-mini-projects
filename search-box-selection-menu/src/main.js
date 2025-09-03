import "./style.css";
import { countryNames } from "./data.js";

const wrapper = document.querySelector(".wrapper");
const selectBtn = document.querySelector(".select-btn");
const input = document.querySelector(".input");
const options = document.querySelector(".options");

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");

    if (wrapper.classList.contains("active")) {
        initInput();
        addCountries(countryNames);
    }
});

input.addEventListener("keyup", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredOptions = countryNames.filter((country) =>
        country.toLowerCase().includes(searchTerm),
    );

    addCountries(filteredOptions);
});

function initInput() {
    input.value = "";
    input.focus();
}

function addCountries(list) {
    options.innerHTML = "";

    if (list.length === 0) {
        return (options.innerHTML = "<li>Oops! Country Not Found</li>");
    }

    const selectedCountry = selectBtn.firstElementChild.textContent;

    list.forEach((country) => {
        const option = document.createElement("li");
        option.textContent = country;
        option.addEventListener("click", () => {
            selectBtn.firstElementChild.textContent = country;
            wrapper.classList.remove("active");
        });
        if (country === selectedCountry) {
            option.classList.add("selected");
        }

        options.appendChild(option);
    });

    options.scrollTop = 0;
}
