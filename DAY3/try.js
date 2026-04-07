const ObjectExample=()=>{
    let details={
        name:"Roshan",
        age:24
    }

    const [user,setuser]=React.useState(details)

    const ageInc=()=>{
        setuser({...user,age:user.age+1})
    }
    return(
        <>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <button onClick={ageInc}>IncrementAge by 1</button>
        </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<ObjectExample />);