import {
    renderItemsList,
    getInputValues,
    clearInputs,
    fillInputValues
} from "./dom_util.js"

const countButton = document.getElementById("count_button");
const middleAgeText = document.getElementById("middle_age_text");
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");
const searchCancelButton = document.getElementById("search_cancel_button");
const submitButton = document.getElementById("submit_button");
const cancelButton = document.getElementById("cancel_button");
const sortInsectsCheckBox = document.getElementById("sort_insects");
const homePageButton = document.getElementById("home_page_btn");
const createPageButton = document.getElementById("create_page_btn");
const homePage = document.getElementById("home_page");
const createPage = document.getElementById("create_page");
const searchForm = document.getElementById("search_form");
const createPageTitle = document.getElementById("create_page_title");

let editMode = false;
let editItemId = "";

let insects = [{id: 0, name: "Ant", species: "Ants", "number_of_legs": 6, has_wings: false, is_dangerous: false, "age": 3},
{id: 1, name: "Bee", species: "Bees", "number_of_legs": 6, has_wings: true, is_dangerous: true, "age": 2},
{id: 2, name: "Arush-footed butterflies", species: "Butterflies", "number_of_legs": 6, has_wings: true, is_dangerous: false, "age": 5},
{id: 3, name: "Hornet", species: "Wasps", "number_of_legs": 6, has_wings: true, is_dangerous: true, "age": 1},
{id: 4, name: "Antlike flower beetles", species: "Weevils", "number_of_legs": 6, has_wings: false, is_dangerous: false, "age": 2},
{id: 5, name: "Mosquito", species: "Flies", "number_of_legs": 6, has_wings: true, is_dangerous: false, "age": 8}];
let insectsToDisplay = [];

const onRemoveItem = (id) => {
    insects = insects.filter(
        (insect) => insect.id !== id
    );

    refetchAllInsects(insects);
};

const onEditItem = (id) => {
    editMode = true;
    editItemId = id;

    const insect = insects.find(({ id: insect_id }) => id == insect_id);

    showCreatePage();

    fillInputValues(insect);
};

const refetchAllInsects = (items = insects) => {
    insectsToDisplay = [...items];

    renderItemsList(insectsToDisplay, onRemoveItem, onEditItem);
};

const addItem = ({ name, species, number_of_legs, has_wings, is_dangerous, age }) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        name,
        species,
        age,
        number_of_legs,
        has_wings,
        is_dangerous
    };

    insects.push(newItem);

    refetchAllInsects();
};

const showHomePage = () => {
    if (!homePageButton.classList.contains("selected_page")) {
        homePageButton.classList.add("selected_page");
    }
    if (createPageButton.classList.contains("selected_page")) {
        createPageButton.classList.remove("selected_page");
    }
    homePage.style.display = "flex";
    createPage.style.display = "none";
    searchForm.style.display = "flex";
};

const showCreatePage = () => {
    if (!createPageButton.classList.contains("selected_page")) {
        createPageButton.classList.add("selected_page");
    }
    if (homePageButton.classList.contains("selected_page")) {
        homePageButton.classList.remove("selected_page");
    }
    homePage.style.display = "none";
    createPage.style.display = "flex";
    searchForm.style.display = "none";

    if (editMode) {
        createPageTitle.innerText = "Edit Insect";
        cancelButton.style.display = "block";
    } else {
        createPageTitle.innerText = "Create Insect";
        cancelButton.style.display = "none";
    }
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { name, species, number_of_legs, has_wings, is_dangerous, age } = getInputValues();

    if (!name || !species) {
        alert("You must input name and species");
        return;
    }

    if (age < 0 || number_of_legs < 0) {
        alert("Are you stupid! How can you imagine negative age or number of legs?!");
        return;
    }

    for (const insect of insects) {
        if (insect.name == name) {
            if (editMode && editItemId == insect.id) {
                continue;
            }
            alert("You can't add insects with same names!");
            return;
        }
    }

    clearInputs();

    if (editMode) {
        let insect = insects.find(({ id: insect_id }) => editItemId == insect_id);
        insect.name = name;
        insect.species = species;
        insect.number_of_legs = number_of_legs;
        insect.has_wings = has_wings;
        insect.is_dangerous = is_dangerous;
        insect.age = age;
        
    } else {
        addItem({ name, species, number_of_legs, has_wings, is_dangerous, age });
    }

    showHomePage();
    editMode = false;
    editItemId = "";

    refetchAllInsects();
});

cancelButton.addEventListener("click", () => {
    editMode = false;
    editItemId = "";

    clearInputs();

    showHomePage();
});

searchButton.addEventListener("click", () => {
    const re = new RegExp(searchInput.value, "i");
    const foundInsects = insects.filter(
        (insect) => re.test(insect.name) || re.test(insect.species)
    );

    refetchAllInsects(foundInsects);
});

searchCancelButton.addEventListener("click", () => {
    refetchAllInsects();

    searchInput.value = "";
});

sortInsectsCheckBox.addEventListener("click", () => {
    refetchAllInsects(insectsToDisplay);
});

countButton.addEventListener("click", () => {
    if (insectsToDisplay.length === 0) {
        return;
    }

    let sum = 0;

    for (const insect of insectsToDisplay) {
        sum += Number(insect.age);
    }


    middleAgeText.textContent = `${(sum / insectsToDisplay.length).toFixed(2)} mounths`;
});

homePageButton.addEventListener("click", () => {
    showHomePage();
});

createPageButton.addEventListener("click", () => {
    showCreatePage();
});

refetchAllInsects();