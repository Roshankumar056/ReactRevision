import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const PostCard = ({post}) => {
    const{theme,toggleTheme}=useContext(ThemeContext)
    const cardStyle=theme==="light"?"post-card-light":"post-card-dark"
  return (
    <div className={cardStyle}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default PostCard
