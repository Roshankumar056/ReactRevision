import React, { useState } from 'react'
import "../styles/expense.css"
import { useDispatch } from 'react-redux'
import {v4 as uuidv4} from "uuid"
import { addExpense } from '../RTK/ExpenseSlice'
const ExpenseForm = () => {

  const [des, setDes] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("other")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const expense = {
      id:uuidv4(),  
      des,
      amount,
      category
    }

    dispatch(addExpense(expense))

    // ✅ reset form after submit
    setDes("")
    setAmount("")
    setCategory("other")
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter description"
        value={des||""}
        onChange={(e) => setDes(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount || ""}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category || ""}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="other">Other</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>

      <button type="submit">Add Expense</button>

    </form>
  )
}

export default ExpenseForm