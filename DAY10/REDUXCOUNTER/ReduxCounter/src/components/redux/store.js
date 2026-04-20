import { createStore } from "redux";
import { counterReducer } from "./reducer";

export const store =createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())