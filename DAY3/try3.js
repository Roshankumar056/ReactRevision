
const BooleanExample=()=>{

    const [login,setLogin]=React.useState(false)

      const loginTrue=()=>{
          setLogin(!login)  

        }
    return(
        <>
        <h1>{login?"Your are logged out":"Your are Logged In"}</h1>
        <button onClick={loginTrue}>{login?"Login":"Logout"}</button>
        </>
    )
}
ReactDOM.createRoot(document.querySelector("#root")).render(<BooleanExample />);