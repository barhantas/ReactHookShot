import { useState } from "react";

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      setTodos([{ text: todoText }, ...todos]);
    }
  };
};
