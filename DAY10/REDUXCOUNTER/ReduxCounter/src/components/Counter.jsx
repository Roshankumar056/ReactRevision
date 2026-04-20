import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/action'

 const Counter = () => {
    const dispatch=useDispatch()
    const Count=useSelector((state)=>state.value)
   
    
  return (
    <div>
      <h1>Counter:{Count}</h1>
      <button onClick={()=>dispatch(increment(1))}>INCREMENT1</button>
      <button onClick={()=>dispatch(decrement(1))}>DECREMENT1</button>
      <button onClick={()=>dispatch(increment(4))}>INCREMENT4</button>
      <button onClick={()=>dispatch(decrement(4))}>DECREMENT4</button>
      <button onClick={()=>dispatch(reset())}>RESET</button>
    </div>
  )
}

export default Counter
