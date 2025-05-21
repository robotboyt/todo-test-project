import React from "react";
import type { TodoItemInterface } from "../types/types";
import TodoItem from "./TodoItem";

interface todosDataProps {
  todosData: TodoItemInterface[];
}

const TodoList: React.FC<todosDataProps> = ({ todosData }) => {
  return (
    <section>
      {todosData.map((item) => (
        <TodoItem todoName={item.name} />
      ))}
    </section>
  );
};

export default TodoList;
