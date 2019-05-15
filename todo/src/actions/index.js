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