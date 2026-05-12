import React, { useMemo, useState } from "react";
import { findNthPrime } from "./util";

const Prime = () => {
  const [num, setNum] = useState(0);
  const [theme,setTheme]=useState("light")
 
  const prime = useMemo(() => {
    return findNthPrime(num);
  }, [num]);
  console.log(prime);
const style={
    padding:"10px",
    height:"600px",
    width:"600px",
    border:"3px solid black",
    backgroundColor:theme==="light"?"green":"black",
    color:theme==="dark"?"green":"black"
}
  const ToggleTheme=()=>{
    setTheme(theme==="light"?"dark":"light")
  }
  return (
    <div style={style}>
       
      <input
        type="number"
        placeholder="Enter a Number"
        onChange={(e) => setNum(Number(e.target.value))}
      />
       <h1>{num}th prime Number is {prime} </h1>
      <button onClick={ToggleTheme}>Toggle  {theme==="light"?"dark":"light"} Theme</button>
    </div>
  );
};

export default Prime;
