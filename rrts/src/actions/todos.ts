import {ActionTypes} from "./types";
import {Dispatch} from "redux";
import axios from "axios";

export interface Todo {
    id: number;
    title: string;
    completed: boolean
}

export interface FetchTodoAction {
    type: ActionTypes.FETCH_TODOS;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.DELETE_TODO;
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const {data} = await axios.get<Todo[]>(url);
        dispatch<FetchTodoAction>({type: ActionTypes.FETCH_TODOS, payload: data});
    }
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {type: ActionTypes.DELETE_TODO, payload: id}
};