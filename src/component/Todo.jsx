import React, { useState } from "react";
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
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </label>
          <button onClick={addTask}>Add</button>
        </div>
        <div>
            <ul>
              {todo.map((item, index) => (
            <li key={index}>{item}</li> 
          ))}
            </ul>
        </div>
      </div>
    </>
  );
};
export default Todo;
