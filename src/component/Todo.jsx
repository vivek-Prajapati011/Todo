import React, { useState } from "react";
import { use } from "react";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("")
  const addTask = () => { 
    if(task.trim() !== "") {
        setTodo([...todo, task])
        setTask("")
    }
  }
  
  return (
    <>
      <div className="container">
        <div>
          <label>
            <input
              className="search-bar"
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </label>
          <button onClick={submitHandler}>Add</button>
        </div>
      </div>
    </>
  );
};
export default Todo;
