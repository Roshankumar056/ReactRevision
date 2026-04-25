import { FETCH_TODOS_FAILURE, FETCH_TODOS_LOADING, FETCH_TODOS_SUCESS } from "./actionType"

export const fetchTodoLoading=()=>{
    return {type:FETCH_TODOS_LOADING}
}

export const fetchTodoSucess=(todos)=>{
    return{
        type:FETCH_TODOS_SUCESS,
        payload:todos
    }
}

export const fetchTodosFailure=(err)=>{
    return{
        type:FETCH_TODOS_FAILURE,
        payload:err
    }
}

export const fetchTodos=()=>{
    return async (dispatch)=>{
        dispatch(fetchTodoLoading)
        try {
            const res= await fetch("https://jsonplaceholder.typicode.com/todos")
            const data=await res.json()
            dispatch(fetchTodoSucess(data))
        } catch (error) {
            dispatch(fetchTodosFailure(error.message))
        }
    }
}