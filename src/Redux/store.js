import { createStore } from "redux";
import todoReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhancers = composeWithDevTools();
const store = createStore(todoReducer, composedEnhancers);
export default store;
