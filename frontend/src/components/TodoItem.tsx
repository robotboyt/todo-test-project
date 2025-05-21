import React from "react";
import type { TodoProps } from "../types/types";

const TodoItem: React.FC<TodoProps> = ({
  item,
  deleteTodoItem,
  editTodoItem,
}) => {
  if (!item) return null;
  return (
    <article className="todo-item">
      <input
        type="checkbox"
        onClick={() => deleteTodoItem(item.id)}
        className="checkbox"
      />
      <h3>{item.name}</h3>
      <button className="edit" onClick={() => editTodoItem(item.name, item.id)}>
        Edit
      </button>
    </article>
  );
};

export default TodoItem;
