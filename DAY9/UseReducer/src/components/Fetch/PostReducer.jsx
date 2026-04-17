import React, { useEffect, useReducer } from 'react'
import axios from "axios"

const initialState={
    loading:true,
    err:"",
    post:null
}


const  reducer=(curState,action)=>{
    switch (action.type) {
        case "FETCH_SUCESS":
            return {
                loading:false,
                err:"",
                post:action.payload
            }
          case "FETCH_ERR":
            return{
                loading:false,
                post:{},
                err:"Something went wrong"
            }
    
        default:
            
    }
}
const PostReducer = () => {

    const[postTitle,dispatch]=useReducer(reducer,initialState)
  
    useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res=>dispatch({type:"FETCH_SUCESS",payload:res.data}))
            .catch((err)=>dispatch({type:"FETCH_ERR"}))
    },[])
    return (
    <div>
      {postTitle?.post?.body}
    </div>
  )
}

export default PostReducer
