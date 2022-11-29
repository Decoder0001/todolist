import React, { useState, useEffect, useRef } from "react";

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({ text: input, id: Math.floor(Math.random() * 10000) });

    setInput("");
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <input
        type="text"
        name="todo"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button className="todo-button">Add a todo</button>
    </form>
  );
};

export default TodoForm;
