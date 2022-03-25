import {
    TodoState,
    TodoAction,
    TodoActionTypes,
} from "../types/todo";

const initialState: TodoState = {
    todoList: [],
    todoActive: "all",
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.VISIBILITY_TODOS:
            return {...state, todoActive: action.payload}
        case TodoActionTypes.ADD_TODO:
            return {...state, todoList: [...state.todoList, action.payload]}
        case TodoActionTypes.CHECKED_TODO:
            const listItem = state.todoList.map((item) => {
                if (item.id === action.payload) {
                    item.checked = !item.checked
                }
                return item
            })
            return {...state, todoList: listItem}
        case TodoActionTypes.DELETE_TODO:
            return {...state, todoList: state.todoList.filter(item => item.id !== action.payload)}
        case TodoActionTypes.DELETE_CHECKED:
            return {...state, todoList: state.todoList.filter(item => item.checked === false)}
        case TodoActionTypes.CHANGE_ARRAY:
            const changeArray = () => {
                if (state.todoList.length === action.payload.length) {
                    return action.payload
                }
                const arr = state.todoList.map((item) => {
                    const itemOrder = action.payload.findIndex((todo) => todo.id === item.id);
                    item.order = itemOrder === -1 ? itemOrder : action.payload[itemOrder].order;
                    return item
                })
                return arr.sort((a, b) => a.order > b.order ? 1 : -1)
            }
            return {...state, todoList: changeArray()}
        default:
            return state
    }
};