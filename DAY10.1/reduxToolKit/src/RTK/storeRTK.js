import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./ExpenseSlice";
export const storeRTK=configureStore({
    reducer:{
        expenses:expenseReducer
    }
})