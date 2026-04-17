import React, { useReducer, useState } from 'react'
const initialState=[]
const todoReducer=(currState,action)=>{
    switch (action.type) {
        case "ADD_TODO" :
            return [...currState,action.payload]

        case "DELETE_TODO":
            return currState.filter(todo=>todo.id!==action.payload)
        default:
        return currState
    }
}

const Todo = () => {
    const [inputText,setInputText]=useState("")
    const [todos,dispatch]=useReducer(todoReducer,initialState)
    console.log(todos);
    

    const handelSubmit=(e)=>{
        e.preventDefault()
        const newTodo={
            id:Date.now(),
            text:inputText
        }
        dispatch({type:"ADD_TODO",payload:newTodo})
        setInputText("")
    }

    const handelDelete=(id)=>{
        dispatch({type:"DELETE_TODO",payload:id})
    }
  return (
    <div>
      <h1>Task</h1>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={(e)=>setInputText(e.target.value)} 
        placeholder='Enter Task' value={inputText} />
        <input type="submit" />
      </form>
      <ul>
        {todos.map(todo=>(
            <li key={todo.id}>{todo.text} <button  onClick={()=>(handelDelete(todo.id))}>Delete</button> </li>
            
        ))}
      </ul>
    </div>
  )
}

export default Todo
