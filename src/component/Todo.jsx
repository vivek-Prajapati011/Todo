import React, { useState } from "react";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const submitHandler = (e) => {};
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
