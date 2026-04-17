import React from 'react'
import Counter from './components/common/Counter'
import Todo from './components/common/Todo'
import PostReducer from './components/Fetch/PostReducer'

const App = () => {
  return (
    <div>
      <Counter/>
      <Todo/>
      <PostReducer/>
    </div>
  )
}

export default App
