// import action constants here
import { ADD_ITEM, FINISH_TASK, DELETE_TASK, SAVE_TASK, DELETE_RANDOM, SALVAGE_ITEM } from '../actions';


const initialList = {
    todo: [
        { name: "Do Laundry", completed: false, id: "0" },
        { name: "Take Kraken for Swim", completed: false, id: "1" }
    ],

    saved: [
        { name: "Polish Old Shoes", completed: false, id: "0a"}
    ],
    count: [0],
    health: 100

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

            case DELETE_TASK:
            return {
                ...state,
                todo: state.todo.filter(task => {
                    return task.completed === false
                }),
                health: state.health + 10
            }

            case SAVE_TASK:
            return {
                ...state,
                todo: state.todo.filter(task => {
                    return task.name !== action.payload
                }),
                saved: [...state.saved, {name: `${action.payload}`, completed: false, id: `${state.saved.length}a`}],
                count: [...state.count, state.count.length]
                
            }

            case DELETE_RANDOM:
            console.log(action.payload)
            return {
                ...state,
                saved: state.saved.filter(task => {
                    return `${task.id}` !== `${action.payload}a`
                }),
                health: state.health - 5
            }

            case SALVAGE_ITEM:
            return {
                ...state,
                todo: [...state.todo, { name: `${action.payload}`, completed: false, id: `${state.todo.length}` } ],
                saved: state.saved.filter(task =>{
                    return task.name !== action.payload
                })
            }

        default:
            return state;
    };
}

export default reducer;