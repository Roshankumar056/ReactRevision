import React from 'react'
import Login from './componentsContextApi/Login'
import UserProfile from './componentsContextApi/UserProfile'
import AuthProvider from './context/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
    
      <Login/>
      <UserProfile/>
    
    </AuthProvider>
  )
}

export default App
