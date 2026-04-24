import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  budget: 0,
  expenses:[]
};

const  expenseSlice=createSlice({
    name:"Expense",
    initialState,
    reducers:{
        setBudget:(state,action)=>{
            state.budget=action.payload
        },
        addExpense:(state,action)=>{
            state.expenses.push(action.payload)
        },
        deleteExpense:(state,action)=>{
            state.expenses=state.expenses.filter(expense=>expense.id!==action.payload)
        }
    }
})
export const {addExpense,deleteExpense,setBudget}=expenseSlice.actions

export default expenseSlice.reducer
