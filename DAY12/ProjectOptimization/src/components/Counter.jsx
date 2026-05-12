import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Counter = () => {
  const [count, setCount] = useState(0);
  const details = useMemo(() => {
    return { name: "Roshan" };
  }, []);

  const test=useCallback(()=>{
    console.log("I am test function");
    
  },[])
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={(e) => setCount(count + 1)}>Inc</button>
      <Child details={details} test={test} />
    </div>
  );
};

export default Counter;
