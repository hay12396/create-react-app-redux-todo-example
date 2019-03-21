import { combineReducers } from "redux";
import todoReducer from "./todo.reducer";
import { TodoItem } from "../components/todo/class/todo";
import todosFilterReducer from "./todos-filter.reducer";

export interface IRootStoreState {
  todos: TodoItem[];
  filter: string;
}

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: todosFilterReducer
});

export default rootReducer;
