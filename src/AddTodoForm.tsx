import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}
export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(e.target.value);
  };
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const addedTodo = newTodo.trim();
    if (addedTodo) {
      addTodo(addedTodo);
    }
    setNewTodo("");
  };
  return (
    <form action="" onSubmit={onSubmitHandler}>
      <input type="text" value={newTodo} onChange={onChangeHandler} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
