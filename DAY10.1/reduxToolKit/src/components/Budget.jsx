import React from 'react'
import "../styles/budget.css"
import { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { setBudget } from '../RTK/ExpenseSlice'

const Budget = () => {
    const[newBudget,setNewBudget]=useState()
    const dispatch=useDispatch()
const budget = useSelector((state) => state.expenses.budget);
const expenses = useSelector((state) => state.expenses.expenses);
   const totalExpenses=expenses.reduce((acc,cv)=>acc+Number(cv.amount),0)
    const remaining=budget-totalExpenses
    const handelSubmit=()=>{
            dispatch(setBudget(newBudget))
    }
  return (
    <div className='budget-container'>
      <div className='budget-input'> 
        <input type="number" 
        value={newBudget||""}
        onChange={(e)=>setNewBudget(e.target.value)}
        />
        <button onClick={handelSubmit}>Set Budget</button>
      </div>
      <div className='budget-stats'>
        <div className='stat-box'>
            <h2>Total Budget</h2>
            <p className='amount'>{budget}</p>
        </div>

        <div className='stat-box'>
            <h3>Total Expenses</h3>
            <p className='amount'>{totalExpenses}</p>
        </div>
        <div className='stat-box'>
            <h3>Remaining</h3>
            <p className='amount'>{remaining}</p>
        </div>
      </div>
    </div>
  )
}

export default Budget
