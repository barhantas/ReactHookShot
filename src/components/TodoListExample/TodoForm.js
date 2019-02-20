import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        todoText && addTodo(todoText);
        setTodoText("");
      }}
    >
      <input
        style={{ fontSize: 20, textAlign: "center" }}
        placeholder="Add todo"
        onChange={e => setTodoText(e.target.value)}
        value={todoText}
      />
    </form>
  );
};
export default TodoForm;
