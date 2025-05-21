import axios from "axios";

export const getTodos = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/`);
  return res.data;
};

export const createTodo = async (name: string) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/items/create`,
    { name }
  );
  return res.data;
};

export const deleteTodo = async (id: number) => {
  const res = await axios.delete(
    `${process.env.REACT_APP_API_URL}/items/delete/${id}`
  );
  return res.data;
};

export const updateTodo = async (name: string, id: number) => {
  const res = await axios.put(
    `${process.env.REACT_APP_API_URL}/items/update/${id}`,
    {
      name,
      id,
    }
  );
  return res.data;
};
