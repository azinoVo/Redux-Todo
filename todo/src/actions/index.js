export const ADD_ITEM = "ADD_ITEM";
export const addTask = newTask => {
    return {
        type: ADD_ITEM,
        payload: newTask
    };
};

export const FINISH_TASK = "FINISH_TASK";
export const finishTask = id => {
    return {
        type: FINISH_TASK,
        payload:id
    };
};

export const DELETE_TASK = "DELETE_TASK";
export const deleteTask = () => {
    return {
        type: DELETE_TASK,
    };
};

export const SAVE_TASK = "SAVE_TASK";
export const saveTask = name => {
    return {
        type: SAVE_TASK,
        payload:name

    };
};

export const DELETE_RANDOM = "DELETE_RANDOM";
export const deleteRandom = id => {
    return {
        type: DELETE_RANDOM,
        payload:id

    };
};

export const SALVAGE_ITEM = "SALVAGE_ITEM";
export const salvageItem = name => {
    return {
        type: SALVAGE_ITEM,
        payload:name

    };
};