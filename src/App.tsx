import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { text: "Text", complete: true },
  { text: "Text2", complete: false },
];
const App: React.FC = () => {
  return (
    <>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </>
  );
};

export default App;
