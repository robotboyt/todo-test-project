import axios from "axios";

export const getTodos = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/`);
  return res.data;
};

// export const createTodo = (text: string) => {
//   const res = await axios.post();
//   return res.data;
// };

// export const deleteTodo = async (id: number) => {
//   const res = await axios.delete();
//   return res.data;
// };

// export const updateTodo = async (text: string, id: number) => {
//   const res = await axios.put();

//   return res.data;
// };
