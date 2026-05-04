import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchPost } from '../store/actions/postActions';
const PostList = () => {
    const postStore=useSelector((store)=>store.post)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])

    console.log(postStore);
    
    if(postStore.loading)
        return <div>Loading........</div>
    
     if(postStore.error)
        return <div>Error........</div>
    
  return (
    <div>
        <h1>Posts</h1>
        {
             postStore && postStore?.post?.map((post)=>{
                
                   return <li>{post.title}</li>
                
                
})
        }
      
    </div>
  )
}

export default PostList
