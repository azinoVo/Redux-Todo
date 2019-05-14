export const ADD_ITEM = "ADD_ITEM";
export const addTask = newTask => {
    return {
        type: ADD_ITEM,
        payload: newTask
    };
};
