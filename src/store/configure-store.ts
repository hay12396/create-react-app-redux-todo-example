import { loadState, saveState } from "../class/storage-handler";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root.reducer";

export default function configureStore() {
  const persistanceState = loadState();

  const store = createStore(
    rootReducer,
    { todos: persistanceState.todos },
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
}
