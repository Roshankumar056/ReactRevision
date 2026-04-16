import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Register = () => {
const {isLoggedIn,handelLogin,handelLogout}=useContext(AuthContext)
  return (
  <div className="h-screen flex justify-center items-center text-5xl">
 <h1>{isLoggedIn ? "You are logged in ":"You are not logged in"}</h1>
 {isLoggedIn ? (
<button
    onClick={handelLogout}
    className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-800 transition"
  >
    Logout
  </button>
 ):(
 <button
    onClick={handelLogin}
    className="bg-red-500 text-white p-4 mr-3 rounded-lg hover:bg-red-600 transition"
  >
    Login
  </button>
 )}
</div>
  )
}

export default Register
