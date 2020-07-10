import React, { FormEvent, useRef } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}
export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const addedTodo = inputRef.current!.value.trim();
    if (addedTodo) {
      addTodo(addedTodo);
    }
    inputRef.current!.value = "";
  };
  return (
    <form action="" onSubmit={onSubmitHandler}>
      <input type="text" ref={inputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
