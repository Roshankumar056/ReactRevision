import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask } from '../Redux/actions'

const Todo = () => {
    const [taskInput,setTaskInput]=useState("")
    const dispatch =useDispatch()
    const todos=useSelector((currState)=>currState.tasks)
    console.log(todos);
    
    const handelSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTask(taskInput))
        setTaskInput("")
    }
    const handelDelete=(index)=>{
        dispatch(deleteTask(index))
    }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input onChange={(e)=>setTaskInput(e.target.value)} value={taskInput} type="text" placeholder='Enter Task' />
        <input type="submit" />
      </form>
    <ul>
              {todos.map((task,index)=>(
                    <li key={index}>{task}
                    <button onClick={()=>handelDelete(index)}>delete</button>
                    </li>
      ))}
    </ul>

    </div>
  )
}

export default Todo
