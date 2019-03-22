import { combineReducers } from "redux";
import todoReducer from "./todo.reducer";
import todosFilterReducer from "./todos-filter.reducer";
import { TodoItem } from "../components/todo-page/todo/class/todo";

export interface IRootStoreState {
  todos: TodoItem[];
  filter: string;
}

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: todosFilterReducer
});

export default rootReducer;
