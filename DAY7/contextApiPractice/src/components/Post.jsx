import React, { useContext, useEffect, useState } from 'react'
import PostCard from './PostCard'
import { ThemeContext } from '../context/ThemeProvider'
// https://jsonplaceholder.typicode.com/posts

const Post = () => {
    const {theme,toggleTheme}=useContext(ThemeContext)
const [posts,setPosts]=useState([])
    useEffect(()=>{
const fetchData=async()=>{
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await res.json()
        setPosts(data)
        
    } catch (error) {
        console.log(error);
        
    }
        
}
 fetchData()
    },[])




  return (
    <>
    <h1 style={{color:theme==="light"?"white":"black"}}>Post</h1>
    <div className='container'>
      {posts.map(post=>(
        <PostCard  key={post.id} post={post}/>
      ))}
      </div>
    </>
  )
}

export default Post
