import { combineReducers } from "redux";
import { postReducer } from "./postReducers";
import { themeReducer } from "./themeReducers";


export const rootReducer=combineReducers(
   { post:postReducer,
    theme:themeReducer
})
