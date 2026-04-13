import React, { useEffect, useRef } from 'react'

const FocusInput = () => {

    const focusRef=useRef(null)
    useEffect(()=>{
        focusRef.current.focus()
    },[])
  return (
    <div>
      <input ref={focusRef} type="text" placeholder='Focus on mount'/>
    </div>
  )
}

export default FocusInput
