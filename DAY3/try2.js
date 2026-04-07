

const ArrayExample=()=>{
    let fruitsArr=["Apple","Mango"]
    const [fruits,setFruits]=React.useState(fruitsArr)

    const addBanana=()=>{
        setFruits([...fruits, "banana"])
    }
    return(
        <>
        <h1>Fruits</h1>
        <ul>
            {fruits.map((elem)=>(
                <li>{elem}</li>
            ))}
        </ul>
        <button onClick={addBanana}>Add Banana</button>
        </>
    )
}
ReactDOM.createRoot(document.querySelector("#root")).render(<ArrayExample />);