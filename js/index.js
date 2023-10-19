import {
    renderItemsList,
    getInputValues,
    clearInputs,
    fillInputValues,
    setPage,
    changePage
} from "./dom_util.js"
import {
    getAllInsects,
    postInsects,
    putInsects,
    deleteInsects
} from "./api.js"

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
const prevPage = document.getElementById("prev_page");
const nextPage = document.getElementById("next_page");

let editMode = false;
let editItemId = "";

let insects = [];

const onRemoveItem = async (id) => {
    await deleteInsects(id);

    refetchAllInsects(insects);
};

const onEditItem = (id) => {
    editMode = true;
    editItemId = id;

    const insect = insects.find(({ id: insect_id }) => id == insect_id);

    showCreatePage();

    fillInputValues(insect);
};

const refetchAllInsects = async () => {
    const allInsects = await getAllInsects();

    insects = allInsects;

    renderItemsList(insects, onRemoveItem, onEditItem);
};

const showHomePage = () => {
    if (!homePageButton.classList.contains("selected_page")) {
        homePageButton.classList.add("selected_page");
    }
    if (createPageButton.classList.contains("selected_page")) {
        createPageButton.classList.remove("selected_page");
    }
    homePage.style.display = "block";
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

submitButton.addEventListener("click", async (event) => {
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
        await putInsects({
            id: editItemId,
            name, 
            species, 
            number_of_legs, 
            has_wings, 
            is_dangerous,
            age
        });
    } else {
        await postInsects({ 
            id: uuid.v1(), 
            name, 
            species, 
            number_of_legs, 
            has_wings, 
            is_dangerous,
            age 
        });
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
    insects = insects.filter(
        (insect) => re.test(insect.name) || re.test(insect.species)
    );
    setPage(0);

    renderItemsList(insects, onRemoveItem, onEditItem);
});

searchCancelButton.addEventListener("click", () => {
    setPage(0);

    refetchAllInsects();

    searchInput.value = "";
});

sortInsectsCheckBox.addEventListener("click", () => {
    renderItemsList(insects, onRemoveItem, onEditItem);
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
});

prevPage.addEventListener("click", () => {
    changePage(-1);
    
    renderItemsList(insects, onRemoveItem, onEditItem);
});

nextPage.addEventListener("click", () => {
    changePage(1);
    
    renderItemsList(insects, onRemoveItem, onEditItem);
});

homePageButton.addEventListener("click", () => {
    showHomePage();
});

createPageButton.addEventListener("click", () => {
    showCreatePage();
});

refetchAllInsects();