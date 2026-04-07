
const Todo=()=>{

  
    const [currtodo,setCurrTodo]=React.useState("")
    const[todo,setTodo]=React.useState([])
    const handelInput=(e)=>{
        setCurrTodo(e.target.value)
        
    }
    const handelAddTodo=()=>{
        setTodo([...todo,currtodo])
        setCurrTodo("")
    }
    console.log(todo);
    
    return(
        <>
        <h1>Todo</h1>
        <input value={currtodo} onChange={handelInput} type="text"
            placeholder="enter task"
            
        />
        <button onClick={handelAddTodo}>Add task</button>
        
        <ul>
        {todo.map((elem ,i)=>(
            <li key={i}>{elem}</li>
        ))}
        </ul>
        </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Todo/>);