export interface ITodoItem {
    id: string,
    text: string,
    checked: boolean,
    order: number;
}

export interface TodoState {
    todoList: ITodoItem[];
    todoActive: string;
}

export enum TodoActionTypes {
    VISIBILITY_TODOS = 'VISIBILITY_TODOS',
    CHECKED_TODO = 'CHECKED_TODO',
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    DELETE_CHECKED = 'DELETE_CHECKED',
    CHANGE_ARRAY = 'CHANGE_ARRAY',
};

interface TodoVisibilityList {
    type: TodoActionTypes.VISIBILITY_TODOS,
    payload: string,
};

interface TodoCheckedItem {
    type: TodoActionTypes.CHECKED_TODO,
    payload: string,
};

interface TodoAddItem {
    type: TodoActionTypes.ADD_TODO,
    payload: ITodoItem,
};

interface TodoDeleteItem {
    type: TodoActionTypes.DELETE_TODO,
    payload: string,
};

interface TodoDeleteChecked {
    type: TodoActionTypes.DELETE_CHECKED
};

interface TodoChangeArray {
    type: TodoActionTypes.CHANGE_ARRAY,
    payload: ITodoItem[],
};

export type TodoAction =
    TodoVisibilityList
    | TodoCheckedItem
    | TodoAddItem
    | TodoDeleteItem
    | TodoDeleteChecked
    | TodoChangeArray;