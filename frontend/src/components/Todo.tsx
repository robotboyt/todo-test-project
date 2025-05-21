import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import axios from "axios";

interface TodoItem {
  name: string;
  id: number;
}

const Todo: React.FC = () => {
  const [data, setData] = useState<TodoItem[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  return (
    <section className="todo-block">
      <TodoList />
      <TodoForm />
    </section>
  );
};

export default Todo;
