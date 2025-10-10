// src/components/TodoList.js
import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  // Initial static array of todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice JavaScript", completed: true },
    { id: 3, text: "Build a Todo App", completed: false },
  ]);

  // ✅ Add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // ✅ Toggle completion status
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✅ Delete a todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>📝 Todo List</h2>
      <AddTodoForm onAddTodo={addTodo} />

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              ...styles.item,
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "black",
            }}
            data-testid="todo-item"
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              style={styles.deleteButton}
              data-testid="delete-button"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { width: "300px", margin: "auto", textAlign: "center" },
  list: { listStyle: "none", padding: 0 },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    marginTop: "8px",
    cursor: "pointer",
  },
  deleteButton: {
    background: "transparent",
    border: "none",
    color: "red",
    cursor: "pointer",
  },
};

export default TodoList;