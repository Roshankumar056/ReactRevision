import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/expenseList.css"
import { deleteExpense } from '../RTK/ExpenseSlice'

const ExpenseList = () => {
    const dispatch=useDispatch()
    const expenses = useSelector((state) => state.expenses.expenses);
  console.log(expenses);
  
  const handelDelete=(id)=>{
    dispatch(deleteExpense(id))
  }
    return (
    <div className="table-container">
      <h2>Expense List</h2>

     
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((item) => (
          <tr key={item.id}>
            <td>{item.des}</td>
            <td>₹ {item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button onClick={()=>handelDelete(item.id)} >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </div>
  )
}

export default ExpenseList
