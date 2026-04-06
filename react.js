const Todo=()=>{
    const [currTodo,setCurrTodo]=React.useState("")
    const [todoList,setTodoList]=React.useState([])
function handelInput(e){
        setCurrTodo(e.target.value)
    }
function handelAddTask(){
    setTodoList([...todoList,currTodo])
    
}
console.log(todoList);


 return(
    <>
     <h1>Todo</h1>
    <input onChange={handelInput} type="text" placeholder="Enter your Task"/>
    <button onClick={handelAddTask}>Add Task</button>
    <ul>
        {todoList.map((ele)=>(
                <li>{ele}</li>
        ))}
        
    </ul>
 </>
    
 )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Todo/>)