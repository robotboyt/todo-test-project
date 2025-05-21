import React from "react";

interface TodoNameProps {
  todoName: string;
}

const TodoItem: React.FC<TodoNameProps> = ({ todoName }) => {
  return (
    <div>
      <h3>{todoName}</h3>
    </div>
  );
};

export default TodoItem;
