import React, { useRef } from 'react'

const UserForm = () => {
      const userRef=useRef(null)
    const emailRef=useRef(null)
    const handelSubmit=(e)=>{
        e.preventDefault()
        console.log(userRef.current.value,"userName",emailRef.current.value, "Email");
    }


    console.log("render");
    
  return (
  
    <div>
        <h1>Uncntrolled-Form</h1>
      <form onSubmit={handelSubmit}>
        <input ref={userRef} type='text' placeholder='Enter Your Name'/>
        <input ref={emailRef} type='email' placeholder='Enter Your Email'/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default UserForm
