import { todoReducer } from "./reducer";
import {createStore,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store=createStore(todoReducer,composeEnhancers(applyMiddleware(thunk)))
