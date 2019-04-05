import * as types from "../actions/todo/action-types";
import { Action } from "../actions/action";
import { TodoItem } from "../components/todo-page/todo/class/todo";

export default function todoReducer(state: TodoItem[] = [], action: Action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, { ...action.payload }];

    case types.REMOVE_TODO:
    {
      const newState = [...state];
      return newState.filter(t => t.id != action.payload.id);
    }

    case types.TOGGLE_TODO:
    {
      const newState = [...state];
      return newState.map(t => {
        if (t.id === action.payload.id) {
          t.completed = !t.completed;
          return {...t};
        }

        return {...t};
      });
    }

    case types.TODOS_LOADED_FROM_SERVER:
      return action.payload;

    default:
      return state;
  }
}
