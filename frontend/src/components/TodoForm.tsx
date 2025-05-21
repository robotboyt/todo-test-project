import React from "react";
import type { TodoFormProps } from "../types/types";

const TodoForm: React.FC<TodoFormProps> = ({
  setTodoText,
  todoText,
  formSubmit,
  id,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formSubmit(todoText, id);
      }}
      className="todo-form"
    >
      <input
        placeholder="Task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button>{id ? "Change" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
