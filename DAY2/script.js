
const App=()=>{
    return (
        <>
        <Navbar/>
        <Body/>
        <Fotter/>
        </>
    )
}
const Navbar=()=>{
    return(
        <>
        <a href={"#home"}>Home</a>
        <a href={"#home"}>Body</a>
        <a href={"#home"}>Fotter</a>
        </>
    )
}

const Body=()=>{
    return(
        <>
        <p>Iam body</p>
        </>
    )
}
const Fotter=()=>{
    return(
        <p>@2026 copyright by Masai</p>
    )
}


ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)