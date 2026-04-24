import { expenseReducer } from "./reducer";
import {createStore} from "redux"
export const store = createStore(expenseReducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())