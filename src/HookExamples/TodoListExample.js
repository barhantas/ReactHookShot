import React from "react";
import TodoList from "../components/TodoListExample/TodoList";
import TodoForm from "../components/TodoListExample/TodoForm";
import useTodoListExampleState from "../states/useTodoListExampleState";

const TodoListExample = () => {
  const initialValues = ["learn x", "learn y", "learn something else"];
  const { todos, addTodo, deleteTodo } = useTodoListExampleState(initialValues);

  return (
    <div style={{ maxHeight: 400, overflow: "auto" }}>
      <h1>TodoList Example</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
export default TodoListExample;
