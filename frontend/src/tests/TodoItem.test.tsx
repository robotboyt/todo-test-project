import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

const testItem = {
  name: "first item",
  id: 1,
};

describe("TodoItem", () => {
  const mocDeleteTodoItem = jest.fn();
  const mocEditTodoItem = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();
  });

  test("item is exist", () => {
    render(
      <TodoItem
        item={testItem}
        deleteTodoItem={mocDeleteTodoItem}
        editTodoItem={mocEditTodoItem}
      />
    );
    expect(screen.getByText("first item")).toBeInTheDocument();
  });

  test("chech if item editing is working", () => {
    render(
      <TodoItem
        item={testItem}
        deleteTodoItem={mocDeleteTodoItem}
        editTodoItem={mocEditTodoItem}
      />
    );
    fireEvent.click(screen.getByText("Edit"));
    expect(mocEditTodoItem).toHaveBeenCalled();
  });

  test("chech if item deleting  is working", () => {
    render(
      <TodoItem
        item={testItem}
        deleteTodoItem={mocDeleteTodoItem}
        editTodoItem={mocEditTodoItem}
      />
    );
    fireEvent.click(screen.getByRole("checkbox"));
    expect(mocDeleteTodoItem).toHaveBeenCalled();
  });
});
