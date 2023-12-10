export const addItem = ({ id, img, title, price, count, max_count }) => {
    return {
        type: "ADD_ITEM",
        payLoad: {
            id,
            img,
            title,
            price,
            count,
            max_count,
        },
    };
};

export const incrementCount = (id) => {
    return {
        type: "INCREMENT_COUNT",
        payLoad: {
            id
        }
    }
}

export const decrementCount = (id) => {
    return {
        type: "DECREMENT_COUNT",
        payLoad: {
            id
        }
    }
}

export const deleteItem = (id) => {
    return {
        type: "DELETE_ITEM",
        payLoad: {
            id
        }
    }
}

export const deleteAll = () => {
    return {
        type: "CLEAR_ITEMS",
        payLoad: {}
    }
}