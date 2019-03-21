import * as types from "./action-types";
import { TodoItem } from "../../components/todo/class/todo";
import { Action } from "../action";
import { Dispatch } from "redux";
import TodosApi from "../../api/todos/todos-api";

export function addTodo(todo: TodoItem): Action {
  return { type: types.ADD_TODO, payload: todo };
}

export function removeTodo(todo: TodoItem): Action {
  return { type: types.REMOVE_TODO, payload: todo };
}

export function toggleTodo(todo: TodoItem): Action {
  return { type: types.TOGGLE_TODO, payload: todo };
}

export function todosLoadedSuccessfully(todos: TodoItem[]): Action {
  return { type: types.TODOS_LOADED_FROM_SERVER, payload: todos };
}

export function loadTodosFromServer() {
  return async function(dispatch: Dispatch) {
    const ts = await TodosApi.GetTodos();
    dispatch(todosLoadedSuccessfully(ts));
  };
}
