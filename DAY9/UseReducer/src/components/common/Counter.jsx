// import React, { useReducer } from 'react'

// const initialState=0
// const CountReducer=(currState,action)=>{
//     switch (action) {
//         case "incre":
//             return currState+1;
//         case "decre":
//             return currState-1;
//         case "reset":
//             return initialState;
//         default:
//             return currState
//     }
// }
// const Counter = () => {

//     const [count,dispatch]=useReducer(CountReducer,initialState)
//   return (
//     <>
//     <h1>Count:{count}</h1>
//       <button onClick={()=>dispatch("incre")}>Inc</button>
//       <button onClick={()=>dispatch("decre")}>Dec</button>
//       <button onClick={()=>dispatch("reset")}>Reset</button>
//     </>
//   )
// }

// export default Counter



import React, { useReducer } from 'react'

const initialState={
    counter:0
}
const CountReducer=(currState,action)=>{
    switch (action.type) {
        case "incre":
            return {counter: currState.counter+action.value};
        case "decre":
            return {counter: currState.counter-action.value};
        case "reset":
            return initialState;
        default:
            return currState
    }
}
const Counter = () => {

    const [count,dispatch]=useReducer(CountReducer,initialState)
  return (
    <>
    <h1>Count:{count.counter}</h1>
      <button onClick={()=>dispatch({type:"incre",value:1})}>Inc</button>
      <button onClick={()=>dispatch({type:"decre",value:1})}>Dec</button>

      <button onClick={()=>dispatch({type:"incre",value:5})}>IncBy5</button>
      <button onClick={()=>dispatch({type:"decre",value:5})}>DecBy5</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </>
  )
}

export default Counter
