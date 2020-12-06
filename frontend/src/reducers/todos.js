import {GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "../actions/types";


const initialState = {
    todos: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_LIST:
            return {
                ...state,
                todos: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.payload)
            }
        case TOGGLE_TODO:
            let new_arr = state.todos.map(todo => {
                if (todo.id == action.payload.id) {
                    todo = action.payload;
                }
                return todo
            })
            return {
                ...state,
                todos: new_arr
            }
        case ADD_TODO:
            return {
               ...state,
               todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
}




