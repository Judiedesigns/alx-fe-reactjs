// src/components/AddTodoForm.js
import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAddTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        style={{ padding: "8px", width: "70%" }}
        data-testid="todo-input"
      />
      <button type="submit" style={{ padding: "8px" }} data-testid="add-button">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
