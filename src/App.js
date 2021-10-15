import React, { useState } from "react";
import { useTodoValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [{ todos }, dispatch] = useTodoValue();
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) return;
    const newTodo = {
      id: Math.floor(Math.random() * 123245),
      content,
      isCompleted: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="todo-input"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <button className="todo-button">Ekle</button>
      </form>
      {/* TODO LIST */}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
