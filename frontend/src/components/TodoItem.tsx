import React from "react";
import type { TodoProps } from "../types/types";

const TodoItem: React.FC<TodoProps> = ({
  todoItem,
  deleteTodoItem,
  editTodoItem,
}) => {
  if (!todoItem) return null;
  return (
    <article className="todo-item">
      <input
        type="checkbox"
        onClick={() => deleteTodoItem(todoItem.id)}
        className="checkbox"
      />
      <h3>{todoItem.name}</h3>
      <button
        className="edit"
        onClick={() => editTodoItem(todoItem.name, todoItem.id)}
      >
        Edit
      </button>
    </article>
  );
};

export default TodoItem;
