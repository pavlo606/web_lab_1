export const addItem = ({ id, img, title, price, count, max_count, user }) => {
    return {
        type: "ADD_ITEM",
        payLoad: {
            id,
            img,
            title,
            price,
            count,
            max_count,
            user,
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

export const addUser = ({ username, email, password, }) => {
    return {
        type: "ADD_USER",
        payLoad: {
            username,
            email,
            password,
        },
    };
};

export const deleteUser = (username) => {
    return {
        type: "DELETE_USER",
        payLoad: {
            username
        }
    }
}

export const deleteAllUsers = () => {
    return {
        type: "CLEAR_USERS",
        payLoad: {}
    }
}