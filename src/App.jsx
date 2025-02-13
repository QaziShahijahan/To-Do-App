import "react";
import { useState } from "react";
import To_do_list from "./Components/To_do_list";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <To_do_list todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
    </>
  );
}

export default App;
