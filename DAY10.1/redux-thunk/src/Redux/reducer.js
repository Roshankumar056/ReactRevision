import { FETCH_TODOS_FAILURE, FETCH_TODOS_LOADING, FETCH_TODOS_SUCESS } from "./actionType"

const initialState={
    loading:false,
    todos:[],
    err:""
}

export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_TODOS_LOADING:
        return{
            ...state,
            loading:true,
        }
case FETCH_TODOS_SUCESS:
    return{
        loading:false,
        todos:action.payload,
        error:""
    }
    case FETCH_TODOS_FAILURE:
        return{
            loading:false,
            todos:[],
            error:action.payload
        }
        default:
            return state
    }
}