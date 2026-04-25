import React from 'react'
import Todo from './components/Todo'
import TodoThunk from './Redux/TodoThunk'

const App = () => {
  return (
    <div>
      <h1>Redux thunk</h1>
      {/* <Todo/> */}
      <TodoThunk/>
    </div>
  )
}

export default App
