import React, { useState } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = (todo) => {
    const newTodo = [todo, ...todos];

    setTodos(newTodo);
    console.log(...todos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={onSubmit} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoList;
