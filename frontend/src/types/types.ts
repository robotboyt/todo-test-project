export interface TodoItemInterface {
  name: string;
  id: number;
}

export type TodoProps = {
  item?: TodoItemInterface;
  deleteTodoItem: (id: number) => void;
  editTodoItem: (name: string, id: number) => void;
};

export type TodoListProps = TodoProps & {
  todosData: TodoItemInterface[];
};

export type TodoFormProps = {
  todoText: string;
  id?: number;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  formSubmit: (name: string, id?: number) => void;
};
