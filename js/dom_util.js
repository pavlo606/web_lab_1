export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const REMOVE_BUTTON_PREFIX = 'remove-button-';

const sortInsectsCheckBox = document.getElementById("sort_insects");
const itemsContainer = document.getElementById("items_container");
const nameInput = document.getElementById("name_input");
const speciesSelect = document.getElementById("species_select");
const ageInput = document.getElementById("age_input");
const legsCountInput = document.getElementById("legs_input");
const hasWingsCheckbox = document.getElementById("has_wings");
const isDangerousCheckbox = document.getElementById("is_dangerous");
const pagination = document.getElementById("pagination");

let itemsLimit = 8;
let itemsPage = 0;
let pagesCount = 1;

const speciesImages = {"Ants": "Ant.webp",
                    "Bees": "Bee.webp",
                    "Wasps": "Wasp.webp",
                    "Butterflies": "Butterfly.webp",
                    "Beetles": "Ladybug.webp",
                    "Weevils": "Weevil.webp",
                    "Crickets": "Cricket.webp",
                    "Dragonflies": "Dragonfly.webp",
                    "Flies": "Housefly.webp",
                    "Homopterans": "Homopterans.webp",
                    "Walkingsticks": "Walkingstick.webp",
                    "Apterygote": "Apterygote.webp",
                    "Lice": "Lice.webp"
};

const itemTemplate = ({ id, name, species, number_of_legs, has_wings, is_dangerous, age }) => `
<li id="${id}" class="card">
    <img src="./assets/${speciesImages[species]}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title">${name}</h4>
        <p class="card-text m-0">Species: ${species}</p>
        <p class="card-text m-0">Number of legs: ${number_of_legs}</p>
        <p class="card-text m-0">${has_wings ? "Has": "Has no"} wings</p>
        <p class="card-text m-0">${is_dangerous ? "Is": "Isn't"} dangerous</p>
        <p class="card-text">Age: ${age} mounthes</p>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="btn btn-primary">Edit</button>
        <button id="${REMOVE_BUTTON_PREFIX}${id}"type="button" class="btn btn-danger">Remove</button>
    </div>
</li>`;

const paginationTemplate = (pageNumer) => `<li id="page-${pageNumer}" class="page-item"><a class="page-link" href="#${pageNumer}">${pageNumer + 1}</a></li>`;

export const addItemToPage = ({ id, name, species, number_of_legs, has_wings, is_dangerous, age }, onRemoveItem, onEditItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, species, number_of_legs, has_wings, is_dangerous, age })
    );

    const removeButton = document.getElementById(`${REMOVE_BUTTON_PREFIX}${id}`);
    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);

    removeButton.addEventListener("click", () => {
        onRemoveItem(id);
    });

    editButton.addEventListener("click", () => {
        onEditItem(id);
    });
};

export const renderItemsList = (items, onRemoveItem, onEditItem) => {
    itemsContainer.innerHTML = "";

    let final_items = [...items].reverse();

    if (sortInsectsCheckBox.checked) {
        final_items.sort(
            (item1, item2) => (item1.age < item2.age) ? 1 : (item1.age > item2.age) ? -1 : 0
        );
    }

    for (let i = itemsPage * itemsLimit + itemsLimit; i > itemsPage * itemsLimit; i--) {
        if (i > final_items.length && final_items.length > itemsPage * itemsLimit) {
            i = final_items.length;
        }
        try {
            addItemToPage(final_items[i - 1], onRemoveItem, onEditItem);
        } catch (error) {
            if (i === itemsPage * itemsLimit + itemsLimit) {
                itemsContainer.innerHTML = `<h2>No insects</h2>`;
            }
            break;
        }
    }

    renderPagination(items, onRemoveItem, onEditItem);
};

export const setPage = (page) => {
    itemsPage = page;
}

export const changePage = (page) => {
    if (page > 0 && itemsPage < pagesCount - 1) {
        itemsPage += 1;
    } else if (page < 0 && itemsPage > 0) {
        itemsPage -= 1;
    }
    console.log(itemsPage);
}

const renderPagination = (items, onRemoveItem, onEditItem) => {
    pagination.innerHTML = "";

    pagesCount = Math.ceil(items.length / itemsLimit);

    for (let page = 0; page < pagesCount; page++) {
        pagination.insertAdjacentHTML("beforeend", paginationTemplate(page));

        const pageBtn = document.getElementById(`page-${page}`);

        pageBtn.addEventListener("click", () => {
            itemsPage = page;
            renderItemsList(items, onRemoveItem, onEditItem);
        })

        if (page === itemsPage) {
            pageBtn.classList.add("active");
        }
    }
}

export const clearInputs = () => {
    nameInput.value = "";
    speciesSelect.value = "";
    legsCountInput.value = 0;
    ageInput.value = 0;
    hasWingsCheckbox.checked = false;
    isDangerousCheckbox.checked = false;
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        species: speciesSelect.value,
        age: ageInput.value,
        number_of_legs: legsCountInput.value,
        has_wings: hasWingsCheckbox.checked,
        is_dangerous: isDangerousCheckbox.checked,
    };
};

export const fillInputValues = ({ name, species, number_of_legs, has_wings, is_dangerous, age }) => {
    nameInput.value = name;
    speciesSelect.value = species;
    legsCountInput.value = number_of_legs;
    ageInput.value = age;
    hasWingsCheckbox.checked = has_wings;
    isDangerousCheckbox.checked = is_dangerous;
};