import React, { useReducer } from 'react'


  const reducer=(state,action)=>{
    switch (action.type) {
      case "SET_VAL1":
        return{
          ...state,
          val1:action.payload
        }
       case "SET_VAL2":
        return{
          ...state,val2:action.payload
        }
        case "SET_OPERATOR":
        return{
          ...state,operator:action.payload
        }
        case "CALCULATE":
          let result="";
          switch(state.operator){
            case "+":result=Number(state.val1)+Number(state.val2);
            break;
            case "-":result=Number(state.val1)-Number(state.val2);
            break;
            case "*":result=Number(state.val1)*Number(state.val2);
            break;
          }
          return{
           ...state,result:result
          }
      default:
        return state
       
    }
  }
const App = () => {

  const[state,dispatch]=useReducer(reducer,{
    val1:"",
    val2:"",
    operator:"",
    result:""
  })


console.log(state);

  return (
    <div>
      <h1>Calculater</h1>
      <input type="number" onChange={(e)=>dispatch({type:"SET_VAL1",payload:e.target.value})} />
      <select  onChange={(e)=>dispatch({type:"SET_OPERATOR",payload:e.target.value})}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
      </select>
      <input type="number" onChange={(e)=>dispatch({type:"SET_VAL2",payload:e.target.value})} />
      <button onClick={(e)=>dispatch({type:"CALCULATE"})}>Calcultae</button>
      <div>Ans:{state.result}</div>
    </div>
  )
}

export default App
