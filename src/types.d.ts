type Todo = {
  text: string;
  complete: boolean;
  id: number;
};
type ToggleTodo = (TodoId: number) => void;
type AddTodo = (newTodo: string) => void;
type DeleteTodo = (TodoId: number) => void;
