import React, { useState } from 'react'
import { createContext } from 'react'
 export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
      let token=Boolean(localStorage.getItem("authToken"))
      const [isLoggedIn,setIsLoggedIn]=useState(token)
    
      const handelLogin=()=>{
        localStorage.setItem("authToken" ,"bahubali")
        setIsLoggedIn(true)
      }
    
      const handelLogout=()=>{
        localStorage.removeItem("authToken")
        setIsLoggedIn(false)
        
      }
  return (
    <AuthContext.Provider value={{isLoggedIn, handelLogin, handelLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
