import React, { useState } from 'react'
import PostList from './components/PostList'
import { Link, Route, Routes } from 'react-router'
import InitialFocus from './components/AddPost'

const App = () => {
  return (
    <div>
      <div>Navabr</div>
      <Link to="/">Home</Link>
      <Link to="/post">Post</Link>
      <Routes>
        <Route path='/' element={<>This is home Page</>}/>
        <Route path='/post' element={<PostList/>}/>
      </Routes>
     {/* <PostList/> */}
     <InitialFocus/>
    </div>
  )
}

export default App
