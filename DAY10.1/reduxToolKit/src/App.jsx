import React from 'react'
import Budget from './components/Budget'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

const App = () => {
  return (
    <div>
      <Budget/>
      <ExpenseForm/>
      <ExpenseList/>
    </div>
  )
}

export default App
