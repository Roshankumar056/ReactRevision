import React, { useRef, useState } from 'react'

const UseRef = () => {
let Normalcount=0
  const [count,setCount]=useState(0)
  const handelNormalCount=()=>{
   ( Normalcount++)
    console.log(Normalcount);
    
  }
const handelbyUseState=()=>{
  setCount(count+1)
}

const ref=useRef(0)


const handelByRef=()=>{
  ref.current=ref.current+1
  console.log(ref.current);
  
}



  return (
    <div>
      <h1>Normal Count:{Normalcount}</h1>
      <h1>UseState:{count}</h1>
      <h1>REfCount:{ref.current}</h1>

      <button onClick={handelNormalCount}>NORINc</button>
    <button onClick={handelbyUseState}>IncByUseState</button>
    <button onClick={handelByRef}>IncbyRef</button>
    </div>
  )
}

export default UseRef
