const todos = [
  { id: 1, task: "Wake up early", completed: false },
  { id: 2, task: "Go to gym", completed: true },
  { id: 3, task: "Study React", completed: false },
  { id: 4, task: "Complete project", completed: false },
  { id: 5, task: "Read a book", completed: true },
  { id: 6, task: "Practice coding", completed: false },
  { id: 7, task: "Drink 3L water", completed: true },
  { id: 8, task: "Call parents", completed: false },
  { id: 9, task: "Update resume", completed: true },
  { id: 10, task: "Sleep on time", completed: false }
];
const Todo=(props)=>{
 const {id,task,completed}=props.data
    return(
        <tr>
            <td>{id}</td>
             <td>{task}</td>
              <td style={{ color: completed ? "green" : "red" }}>
  {completed ? "True" : "False"}
</td>
        </tr>
      
        
    )
}
const App=()=>{
    return(
        <>
          <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                 {todos.map((elem,index)=>(
            <Todo key={index}
             data={elem}
             />
        ))}
            </tbody>
        </table>
        </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)