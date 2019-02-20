import { useState } from "react";

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todo => setTodos([todo, ...todos]),
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((todo, index) => index !== todoIndex);
      setTodos(newTodos);
    }
  };
};
