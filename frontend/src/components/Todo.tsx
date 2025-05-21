import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import axios from "axios";
import type { TodoItemInterface } from "../types/types";
import { getTodos } from "../api/api";

const Todo: React.FC = () => {
  const [data, setData] = useState<TodoItemInterface[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let apiData = await getTodos();
      setData(apiData);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  return (
    <section className="todo-block">
      <TodoList todosData={data} />
      <TodoForm />
    </section>
  );
};

export default Todo;
