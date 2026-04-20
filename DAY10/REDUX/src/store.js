import { createStore } from "redux";

const initialState = {
  tasks: []
};

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";

const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

const taskReducer = (currState = initialState, action) => {
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

const store = createStore(taskReducer);

// console.log("Initial:", store.getState());

store.dispatch(addTask("Complete Assignment"));
store.dispatch(addTask("Learn Redux"));

// console.log("After Add:", store.getState());

store.dispatch(deleteTask(0));

// console.log("After Delete:", store.getState());