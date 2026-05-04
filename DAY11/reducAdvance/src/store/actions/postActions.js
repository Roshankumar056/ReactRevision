

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
       
        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await response.json()
        dispatch(fetchPostSuccess(data))
    }
    catch(error){
        dispatch(fetchPostFail())
    }
    
}