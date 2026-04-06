function App(){

const [FormData,setFormData]=React.useState({
    username:"",
    email:"",
    phone:""
})


const[users,setUsers]=React.useState([])



const handelChange=(e)=>{
    const{name,value}=e.target
    setFormData({...FormData,[name]:value})
}



const handelFetchData=async()=>{
    const res=await axios.get("https://react-ee842-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
    
    const out=Object.entries(res.data)
    setUsers(out);
    
}
console.log(users)


const handelSubmit=(e)=>{
    e.preventDefault()
    
    const payload={
        username:FormData.username,
        email:FormData.email,
        phone:FormData.phone,
    }

    const res=axios.post(
        "https://react-ee842-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        payload
    )
    console.log(res);
    setFormData({
        username:"",email:"",phone:"" 
    })
    
}


    return(
        <>
            <form onSubmit={handelSubmit}>
                <input 
                    onChange={handelChange}
                    type="text"
                    placeholder="Enter Name"
                    name="username"
                    value={FormData.username}
                  />
                <input 
                    onChange={handelChange}
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={FormData.email}
                    />
                
                <input 
                    onChange={handelChange}
                    type="number"
                    placeholder="Enter Number"
                    name="phone"
                    value={FormData.phone}
                    />

                <input type="submit"/>
                
            </form>
            <button onClick={handelFetchData} style={{marginTop:"25px"}}>fetchData</button>
            <div className="container">
            {users.map((elem)=>(
                <Displaydata data={elem} handelFetchData={handelFetchData}/>
                
            ))}
            </div>
        </>
    )
}



function Displaydata(props){

    const{data,handelFetchData}=props
    
    console.log(props);
    
    const Deleteuser=async(id)=>{
        const res=await axios.delete(`https://react-ee842-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`)
        console.log(res);
        handelFetchData()
    
    }
    console.log(props,"props");
    return(
        <>
            <div className="card">
                    <h3>{data[1].username}</h3>
                    <h3>{data[1].email}</h3>
                    <h3>{data[1].phone}</h3>
                    <button onClick={()=>Deleteuser(props.data[0])}>Delete</button>
            </div>
        </>
    )
    
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)