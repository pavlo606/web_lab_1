import {
    renderItemsList,
    getInputValues,
    clearInputs,
    addItemToPage,
} from "./dom_util.js"

const countButton = document.getElementById("count_button");
const middleAgeText = document.getElementById("middle_age");
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");
const searchCancelButton = document.getElementById("search_cancel_button");
const submitButton = document.getElementById("submit_button");
const sortInsectsCheckBox = document.getElementById("sort_insects");

let insects = [];

const onRemoveItem = (id) => {
    insects = insects.filter(
        (insect) => insect.id !== id
    );
    refetchAllInsects();
};

const refetchAllInsects = () => {
    renderItemsList(insects, onRemoveItem);
};

const addItem = ({ title, description, age}) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        title,
        description,
        age,
    };

    insects.push(newItem);

    refetchAllInsects();
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, description, age } = getInputValues();

    clearInputs();

    addItem({ title, description, age })
});

searchButton.addEventListener("click", () => {
    const foundInsects = insects.filter(
        (insect) => insect.title.search(searchInput.value) !== -1
    );

    renderItemsList(foundInsects, onRemoveItem);
});

searchCancelButton.addEventListener("click", () => {
    refetchAllInsects();

    searchInput.value = "";
});

sortInsectsCheckBox.addEventListener("click", () => {
    refetchAllInsects();
});

countButton.addEventListener("click", () => {
    if (insects.length === 0) {
        return;
    }

    let sum = 0;

    for (const insect of insects) {
        sum += Number(insect.age);
    }


    middleAgeText.textContent = `${(sum / insects.length).toFixed(2)} mounths`;
})

refetchAllInsects();