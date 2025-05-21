import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import axios from "axios";
import type { TodoItemInterface } from "../types/types";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../api/api";

const Todo: React.FC = () => {
  const [data, setData] = useState<TodoItemInterface[]>([]);
  const [todoText, setTodoText] = useState<string>("");
  const [todoId, setTodoId] = useState<number>(0);

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

  const editTodoHandler = async (value: string, id: number) => {
    setTodoText(value);
    setTodoId(id);
  };

  const formSubmitHandler = async (value: string, id?: number) => {
    if (!value) return;
    const submit = async () => {
      value && id ? await updateTodo(value, id) : await createTodo(value);
    };

    try {
      await submit();
      setTodoText("");
      setTodoId(0);
      await fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodoHandler = async (id: number) => {
    try {
      await deleteTodo(id);
      await fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="todo-block">
      <TodoList
        todosData={data}
        deleteTodoItem={deleteTodoHandler}
        editTodoItem={editTodoHandler}
      />
      <TodoForm
        setTodoText={setTodoText}
        todoText={todoText}
        formSubmit={formSubmitHandler}
        id={todoId}
      />
    </section>
  );
};

export default Todo;
