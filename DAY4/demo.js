const data = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
  { id: 4, name: "user4" },
  { id: 5, name: "user5" },
  { id: 6, name: "user6" },
  { id: 7, name: "user7" },
  { id: 8, name: "user8" },
  { id: 9, name: "user9" },
  { id: 10, name: "user10" }
];


const Demo=()=>{
    const [users,setUsers]=React.useState(data)

    const handelRemove=(id)=>{
        const newUsers=users.filter((elem)=>elem.id!=id)
        setUsers(newUsers)
        
    }
    return(
        <>
        <div>
        {users.map((elem,i)=>(
            <button key={elem.id} onClick={()=>handelRemove(elem.id)} >{elem.name}</button>
        ))}
        </div>
        </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Demo/>);