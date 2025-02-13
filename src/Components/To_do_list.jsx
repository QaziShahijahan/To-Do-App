/* eslint-disable react/prop-types */
import "react";
import { useState } from "react";
import "./To_do_list.css";

const To_do_list = ({ todos, addTodo, removeTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1 style={{color:'white'}}>To Do App </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add a task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default To_do_list;
