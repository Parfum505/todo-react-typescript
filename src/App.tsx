import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[] | []>([]);

  const toggleTodo: ToggleTodo = (todoId) => {
    const newTodos = (todos as Todo[]).map((todo: Todo) => {
      if (todo.id === todoId) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (todoText) => {
    const newTodo: Todo = {
      text: todoText,
      complete: false,
      id: new Date().getTime(),
    };
    setTodos([...(todos as Todo[]), newTodo]);
  };
  const deleteTodo: DeleteTodo = (todoId) => {
    const newTodos = (todos as Todo[]).filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };
  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
