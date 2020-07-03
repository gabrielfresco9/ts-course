import {DeleteTodoAction, FetchTodoAction} from "./todos";

export enum ActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    DELETE_TODO = 'DELETE_TODO'
}

export type TodoAction = FetchTodoAction | DeleteTodoAction;