import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayTodos from "./DisplayTodos";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res.data);
    };
    fetchTodos();
  }, []);
  return (
    <div>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead style={{background:"red"}}>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((elem, index) => (
            <DisplayTodos key={index} data={elem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
