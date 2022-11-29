import "./Todo.css";

import React, { Fragment } from "react";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  const renderTodo = todos.map((todo, i) => {
    return (
      <div
        key={i}
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
      >
        <div>{todo.text}</div>
        <div className="icons">
          <div onClick={() => removeTodo(todo.id)} className="delete-icon">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div onClick={() => completeTodo(todo.id)} className="edit-icon">
            <i className="fa-solid fa-check"></i>
          </div>
        </div>
      </div>
    );
  });

  return <Fragment>{renderTodo}</Fragment>;
};

export default Todo;
