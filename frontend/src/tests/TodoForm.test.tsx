import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../components/TodoForm";

describe("TodoForm", () => {
  const mocSetTodoText = jest.fn();
  const mocFormSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("render input and Add button, id is 0", () => {
    render(
      <TodoForm
        todoText=""
        id={0}
        setTodoText={mocSetTodoText}
        formSubmit={mocFormSubmit}
      />
    );

    expect(screen.getByPlaceholderText("Task")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("render button Change", () => {
    render(
      <TodoForm
        todoText=""
        id={1}
        setTodoText={mocSetTodoText}
        formSubmit={mocFormSubmit}
      />
    );
    expect(screen.getByText("Change")).toBeInTheDocument();
  });

  test("call setTodoText in input", () => {
    render(
      <TodoForm
        todoText=""
        id={1}
        setTodoText={mocSetTodoText}
        formSubmit={mocFormSubmit}
      />
    );
    const input = screen.getByPlaceholderText("Task");
    fireEvent.change(input, {
      target: {
        value: "pet a dog",
      },
    });
    expect(mocSetTodoText).toHaveBeenCalledWith("pet a dog");
  });

  test("call formSubmit for Add task", () => {
    render(
      <TodoForm
        todoText="some new task"
        setTodoText={mocSetTodoText}
        formSubmit={mocFormSubmit}
      />
    );
    fireEvent.click(screen.getByText("Add"));
    expect(mocFormSubmit).toHaveBeenCalledWith("some new task", undefined);
  });

  test("call formSubmit with Change task", () => {
    render(
      <TodoForm
        todoText="task is changed"
        setTodoText={mocSetTodoText}
        id={5}
        formSubmit={mocFormSubmit}
      />
    );
    fireEvent.click(screen.getByText("Change"));
    expect(mocFormSubmit).toHaveBeenCalledWith("task is changed", 5);
  });
});
