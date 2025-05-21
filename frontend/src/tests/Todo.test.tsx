import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Todo from "../components/Todo";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/api";

jest.mock("../api/api", () => ({
  getTodos: jest.fn(),
  createTodo: jest.fn(),
  updateTodo: jest.fn(),
  deleteTodo: jest.fn(),
}));

const testTodos = [
  { id: 1, name: "Test task 1" },
  { id: 2, name: "Test task 2" },
];

beforeAll(() => {
  jest.clearAllMocks();
});

test("render Todo with data", async () => {
  (getTodos as jest.Mock).mockResolvedValueOnce(testTodos);

  render(<Todo />);

  for (let todo of testTodos) {
    expect(await screen.findByText(todo.name)).toBeInTheDocument();
  }
  expect(getTodos).toHaveBeenCalledTimes(1);
});

test("crete new todo", async () => {
  (getTodos as jest.Mock).mockResolvedValueOnce([]);
  (createTodo as jest.Mock).mockResolvedValueOnce(undefined);
  (getTodos as jest.Mock).mockResolvedValueOnce([
    ...testTodos,
    { id: 3, name: "New Task" },
  ]);

  render(<Todo />);

  fireEvent.change(screen.getByPlaceholderText("Task"), {
    target: { value: "New Task" },
  });

  fireEvent.click(screen.getByText("Add"));

  await waitFor(() => {
    expect(createTodo).toHaveBeenCalledWith("New Task");
    expect(getTodos).toHaveBeenCalledTimes(2);
  });

  expect(await screen.findByText("New Task")).toBeInTheDocument();
});

test("delete todo", async () => {
  (getTodos as jest.Mock).mockResolvedValueOnce(testTodos);
  (deleteTodo as jest.Mock).mockResolvedValueOnce(undefined);
  (getTodos as jest.Mock).mockResolvedValueOnce([]);

  render(<Todo />);

  await screen.findByText("Test task 1");

  const checkbox = screen.getAllByRole("checkbox");
  fireEvent.click(checkbox[0]);

  await waitFor(() => {
    expect(deleteTodo).toHaveBeenCalledWith(1);
  });
});

test("edit todo", async () => {
  (getTodos as jest.Mock).mockResolvedValueOnce(testTodos);
  (updateTodo as jest.Mock).mockResolvedValueOnce(undefined);
  (getTodos as jest.Mock).mockResolvedValueOnce([]);

  render(<Todo />);

  await screen.findByText("Test task 1");

  const editButton = screen.getAllByText("Edit");
  fireEvent.click(editButton[0]);

  const input = screen.getByPlaceholderText("Task");
  fireEvent.change(input, { target: { value: "Test task 1 was changed" } });

  const addButton = screen.getByText("Change");
  fireEvent.click(addButton);

  await waitFor(() => {
    expect(updateTodo).toHaveBeenCalledWith("Test task 1 was changed", 1);
  });
});
