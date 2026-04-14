import React, { useEffect } from 'react'

const Home = () => {
    useEffect(()=>{
        let i=0
        const interval=setInterval(()=>{
            console.log("hello="+i);
            i++
            
        },1000);
        return()=>{
            console.log("Unmounted");
            clearInterval(interval)
            
        }

    },[])
  return (
    <div>
      Home
    </div>
  )
}

export default Home
