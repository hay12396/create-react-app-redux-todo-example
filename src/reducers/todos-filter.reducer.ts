import * as types from "../actions/filter/action-types";
import { Action } from "../actions/action";

export default function todosFilterReducer(
  state: string = types.SHOW_ALL,
  action: Action
) {
  switch (action.type) {
    case types.SHOW_ALL:
      return types.SHOW_ALL;
    case types.SHOW_COMPLETED:
      return types.SHOW_COMPLETED;
    case types.SHOW_UNCOMPELTED:
      return types.SHOW_UNCOMPELTED;
    default:
      return state;
  }
}
