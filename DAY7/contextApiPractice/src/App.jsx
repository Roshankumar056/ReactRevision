
import React, { useContext } from 'react'
import Post from './components/Post'
import { ThemeContext } from './context/ThemeProvider'

const App = () => {
  const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div style={{ backgroundColor:theme==="light"?"black":"white"}} >
    
      <button onClick={toggleTheme}>{theme==="light"?"Dark":"light"}</button>
      <Post/>
   
    </div>
  )
}

export default App
