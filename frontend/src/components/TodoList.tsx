import React from "react";
import type { TodoListProps } from "../types/types";
import TodoItem from "./TodoItem";

const TodoList: React.FC<TodoListProps> = ({
  todosData,
  deleteTodoItem,
  editTodoItem,
}) => {
  return (
    <section className="todo-list">
      {todosData ? (
        <ul>
          {todosData.map((item) => (
            <li key={item.id}>
              <TodoItem
                item={item}
                deleteTodoItem={deleteTodoItem}
                editTodoItem={editTodoItem}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h3>Loading...</h3>
      )}
    </section>
  );
};

export default TodoList;
