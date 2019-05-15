// import action constants here
import { ADD_ITEM, FINISH_TASK } from '../actions';


const initialList = {
    todo: [
        { name: "Laundry", completed: false, id: "0" },
        { name: "Grocery", completed: false, id: "1" }
    ]
}


function reducer(state = initialList, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                // some functionality/state change without mutating original array
                ...state,
                todo: [...state.todo, { name: `${action.payload}`, completed: false, id: `${state.todo.length}` }]
            }

        case FINISH_TASK:
        console.log(action.payload);
            return {
                // some functionality/state change without mutating original array
                ...state,
                todo: state.todo.map(task => {
                    // console.log(task.id)
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task;
                })
            }

        default:
            return state;
    };
}

export default reducer;