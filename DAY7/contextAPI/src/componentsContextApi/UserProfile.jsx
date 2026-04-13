import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const UserProfile = () => {
    const {login,logout,isAuthenticated,userData}=useContext(AuthContext)
if(!isAuthenticated)
    return(
<h1>You Login first to see Profile</h1>
    )

  return (
    <div>
        <h1>UserProfile</h1>
      <h3>User:{userData.name}</h3>
      <p>Email:{userData.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default UserProfile
