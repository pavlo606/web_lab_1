export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const REMOVE_BUTTON_PREFIX = 'remove-button-';

const sortInsectsCheckBox = document.getElementById("sort_insects");
const itemsContainer = document.getElementById("items_container");
const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const ageInput = document.getElementById("age_input");

const itemTemplate = ({ id, title, description, age}) => `
<li id="${id}" class="card">
    <img src="./assets/Ladybug.webp" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title">${title}</h4>
        <p class="card-text">${description}</p>
        <p>${age} mounths</p><br>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="btn btn-primary">Edit</button>
        <button id="${REMOVE_BUTTON_PREFIX}${id}"type="button" class="btn btn-danger">Remove</button>
    </div>
</li>`;

export const addItemToPage = ({ id, title, description, age }, onRemoveItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, description, age })
    );

    const removeButton = document.getElementById(`${REMOVE_BUTTON_PREFIX}${id}`);

    removeButton.addEventListener("click", () => {
        onRemoveItem(id);
    });
};

export const renderItemsList = (items, onRemoveItem) => {
    itemsContainer.innerHTML = "";

    if (sortInsectsCheckBox.checked) {
        items = items.sort(
            (item1, item2) => (item1.age < item2.age) ? 1 : (item1.age > item2.age) ? -1 : 0
        );
    }

    for (const item of items) {
        addItemToPage(item, onRemoveItem);
    }
};

export const clearInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    ageInput.value = 0;
};

export const getInputValues = () => {
    return {
        title: titleInput.value,
        description: descriptionInput.value,
        age: ageInput.value,
    };
};