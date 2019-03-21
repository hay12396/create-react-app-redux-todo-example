import { Action } from "../action";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPELTED } from "./action-types";

export function filter(currentFilter: string): Action {
  return { type: currentFilter, payload: currentFilter };
}

// function showAll(): Action {
//   return { type: SHOW_ALL, payload: SHOW_ALL };
// }

// function showCompleted(): Action {
//   return { type: SHOW_COMPLETED, payload: SHOW_COMPLETED };
// }

// function showUncompleted(): Action {
//   return { type: SHOW_UNCOMPELTED, payload: SHOW_UNCOMPELTED };
// }
