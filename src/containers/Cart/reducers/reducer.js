const defaultState = {
    itemList: [],
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const foundIndex = state.itemList.findIndex(
                (item) => item.id === action.payLoad.id
            );
            if (foundIndex === -1) {
                return {
                    ...state,
                    itemList: [...state.itemList, action.payLoad],
                };
            } else {
                let updatedList = [...state.itemList];
                updatedList[foundIndex] = {
                    ...updatedList[foundIndex],
                    count: updatedList[foundIndex].count + 1,
                };
                return { ...state, itemList: updatedList };
            }
        case "INCREMENT_COUNT":
            return {
                ...state,
                itemList: state.itemList.map((item) => {
                    if (item.id === action.payLoad.id) {
                        return { ...item, count: item.count + 1 };
                    }
                    return item;
                }),
            };
        case "DECREMENT_COUNT":
            return {
                ...state,
                itemList: state.itemList.map((item) => {
                    if (item.id === action.payLoad.id) {
                        return { ...item, count: item.count - 1 };
                    }
                    return item;
                }),
            };
        case "DELETE_ITEM":
            return {
                ...state,
                itemList: state.itemList.filter((item) => item.id !== action.payLoad.id),
            };
        default:
            return state;
    }
};