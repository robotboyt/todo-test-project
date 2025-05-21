import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

const testData = [
  { name: "some task", id: 1 },
  { name: "one more task", id: 2 },
];

describe("TodoList", () => {
  const mocDeleteTodoItem = jest.fn();
  const mocEditTodoItem = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();
  });

  test("render with ui, input, item and button", () => {
    render(
      <TodoList
        todosData={testData}
        deleteTodoItem={mocDeleteTodoItem}
        editTodoItem={mocEditTodoItem}
      />
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(2);
    expect(screen.getByText("one more task")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "Edit" })).toHaveLength(2);
  });

  test("chech if edit item function is working", () => {
    render(
      <TodoList
        todosData={testData}
        deleteTodoItem={mocDeleteTodoItem}
        editTodoItem={mocEditTodoItem}
      />
    );
    fireEvent.click(screen.getAllByText("Edit")[1]);
    expect(mocEditTodoItem).toHaveBeenCalled();
  });

  test("chech if delete item function is working", () => {
    render(
      <TodoList
        todosData={testData}
        deleteTodoItem={mocDeleteTodoItem}
        editTodoItem={mocEditTodoItem}
      />
    );
    fireEvent.click(screen.getAllByRole("checkbox")[1]);
    expect(mocDeleteTodoItem).toHaveBeenCalled();
  });
});
