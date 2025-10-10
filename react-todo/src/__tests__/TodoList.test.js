import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  // --- INITIAL RENDER TEST ---
  test("renders the TodoList component and initial todos", () => {
    render(<TodoList />);

    // Check that title is rendered
    expect(screen.getByText("📝 Todo List")).toBeInTheDocument();

    // Ensure demo todos appear
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Practice JavaScript")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  // --- ADD TODO TEST ---
  test("adds a new todo item", () => {
    render(<TodoList />);

    // Get input and button
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("add-button");

    // Simulate typing and submitting
    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(button);

    // Verify new todo appears
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  // --- TOGGLE TODO TEST ---
  test("toggles a todo item between completed and not completed", () => {
    render(<TodoList />);

    // Select an existing todo
    const todoItem = screen.getByText("Learn React");

    // Initially not completed
    expect(todoItem).toHaveStyle("text-decoration: none");

    // Click to toggle
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to untoggle
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  // --- DELETE TODO TEST ---
  test("deletes a todo item", () => {
    render(<TodoList />);

    // Get the item and its delete button
    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = screen.getAllByTestId("delete-button")[2]; // index 2 matches 3rd todo

    // Click delete button
    fireEvent.click(deleteButton);

    // Verify it’s removed from DOM
    expect(todoItem).not.toBeInTheDocument();
  });
});
