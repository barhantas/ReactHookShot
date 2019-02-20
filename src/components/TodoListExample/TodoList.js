import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <React.Fragment>
      {todos.map((todo, index) => (
        <ul key={index}>
          {todo}
          <i
            onClick={() => deleteTodo(index)}
            className="fas fa-window-close"
            style={{ color: "white", padding: 5 }}
          />
        </ul>
      ))}
    </React.Fragment>
  );
};
export default TodoList;
