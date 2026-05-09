

export const fetchPostRequest=()=>{
    return{type:"FETCH_POST_REQUEST"}
}

export const fetchPostFail=()=>{
    return{type:"FETCH_POST_FAILURE"}
}

export const fetchPostSuccess=(data)=>{
    return{type:"FETCH_POST_SUCCESS",payload:data}
}



export const fetchPost=()=>async(dispatch)=>{
     dispatch(fetchPostRequest())
    try{
       
        const response=await fetch("http://localhost:8080/posts")
        const data=await response.json()
        dispatch(fetchPostSuccess(data))
    }
    catch(error){
        dispatch(fetchPostFail())
    }
    
}






export const AddPostRequest=()=>{
    return{type:"ADD_POST_REQUEST"}
}

export const AddPostFail=()=>{
    return{type:"ADD_POST_FAILURE"}
}

export const AddPostSuccess=(data)=>{
    return{type:"ADD_POST_SUCCESS",payload:data}
}



export const AddPost=(data)=>async(dispatch)=>{
     dispatch(AddPostRequest())
    try{
       
        const response=await fetch("http://localhost:8080/posts",{
            method:"POST",
            headers:{
                "content-type":"Application/json"
            },
            body:JSON.stringify(data)
        })
        const resdata=await response.json()
        dispatch(AddPostSuccess(resdata))
    }
    catch(error){
        dispatch(AddPostFail())
    }
    
}