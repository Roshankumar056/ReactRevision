import { ADD_TASK, DELETE_TASK } from "./actionType";

export const  addTask=(task)=>({
    type:ADD_TASK,
    payload:task,
})

export const deleteTask=(index)=>({
    type:DELETE_TASK,
    payload:index
})