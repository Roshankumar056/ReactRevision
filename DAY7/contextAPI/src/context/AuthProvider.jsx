import React, { createContext, useState } from 'react'
export const AuthContext=createContext(null)
   const details={
        name:"Roshan",
        email:"roshankr056@gmail.com"
    }
const AuthProvider = ({children}) => {
    
    
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    const[userData,setUserData]=useState(null)

 const login=()=>{
setIsAuthenticated(true)
setUserData(details)
 }

  const logout=()=>{
    setIsAuthenticated(false)
    setUserData(null)
 }
  return (
    <AuthContext.Provider value={{isAuthenticated,login,logout,userData}} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
