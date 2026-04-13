import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Login = () => {
    const {login,logout,isAuthenticated}=useContext(AuthContext)

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
