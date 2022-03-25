import { TodoAction, TodoActionTypes, ITodoItem } from "../types/todo";

export function setTodoButton(id: string): TodoAction {
    return {
        type: TodoActionTypes.VISIBILITY_TODOS,
        payload: id,
    }
}

export function addTodoItem(id: string, text: string, checked: boolean): TodoAction {
    return {
        type: TodoActionTypes.ADD_TODO,
        payload: {
            id: id,
            text: text,
            checked: checked,
            order: 0,
        },
    }
}

export function toogleCheckedItem(id: string): TodoAction{
    return {
        type: TodoActionTypes.CHECKED_TODO,
        payload: id,
    }
}

export function deleteItem(id: string): TodoAction{
    return {
        type: TodoActionTypes.DELETE_TODO,
        payload: id,
    }
}

export function deleteChecked(): TodoAction {
    return {
        type: TodoActionTypes.DELETE_CHECKED
    }
}

export function changeArray(newList: ITodoItem[]): TodoAction {
    return {
        type: TodoActionTypes.CHANGE_ARRAY,
        payload: newList,
    }
}