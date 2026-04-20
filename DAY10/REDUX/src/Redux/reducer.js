import { ADD_TASK, DELETE_TASK } from "./actionType";

const initialState = {
  tasks: []
};

export const taskReducer = (currState = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...currState,
        tasks: [...currState.tasks, action.payload],
      };

    case DELETE_TASK:
      const updatedTask=currState.tasks.filter((curTask,index)=>{
        return index!==action.payload
      })
      return {
        ...currState,
        tasks:updatedTask
      }

    default:
      return currState;
  }
};