

const Counter = () => {
    const [count,setCount]=React.useState(0)
    const [name,setName]=React.useState("Ravi")
  const increment = () => {
    setCount(count+1)
    console.log(count);
    
  };

  const decrement=()=>{
    setCount(count-1)
  }
  const changeName=()=>{
    setName("Roshan")
  }
  return (
    <>
        <h1>Name:{name}</h1>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={changeName}>Change Name to Roshan</button>

    </>
  );
};
ReactDOM.createRoot(document.querySelector("#root")).render(<Counter />);

