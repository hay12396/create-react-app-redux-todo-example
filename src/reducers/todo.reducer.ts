import { TodoItem } from "../components/todo/class/todo";
import * as types from "../actions/todo/action-types";
import { Action } from "../actions/action";

export default function todoReducer(state: TodoItem[] = [], action: Action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, { ...action.payload }];

    case types.REMOVE_TODO:
      return [...state.filter(t => t.id != action.payload.id)];

    case types.TOGGLE_TODO:
      return state.map(t => {
        if (t.id === action.payload.id) {
          t.completed = !t.completed;
          return t;
        }

        return t;
      });

    case types.TODOS_LOADED_FROM_SERVER:
      return action.payload;

    default:
      return state;
  }
}
