import React, { useState, useEffect } from "react";

const DynamicTitle = () => {
  const [text, setText] = useState("");
  const[count,setCount]=useState(0)
 const handelStart=()=>{
       
        setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
   
 }
  useEffect(() => {
    document.title = text || "React App";
  }, [text]);
  return (
    <div>
      <h2>Dynamic Document Title:{count}</h2>

      <input
        type="text"
        placeholder="Enter something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handelStart}>start</button>
    </div>
  );
};

export default DynamicTitle;