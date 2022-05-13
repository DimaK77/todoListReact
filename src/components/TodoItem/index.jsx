import React from "react";

export const TodoItem = ({ id, title, isChecked, setTodoItems }) => {
  const handleCheckboxChange = () => {
    setTodoItems((prevState) => (
      prevState.map((todoItem) => (
        todoItem.id !== id
          ? todoItem
          : {
              id: todoItem.id,
              title: todoItem.title,
              isChecked: !todoItem.isChecked,
            }
      ))
    ));
  };

  const handleButtonClick = () => {
    setTodoItems((prevState) => (
      prevState.filter((todoItem) => todoItem.id !== id)
    ))
  }

  return (
    <li>
        <input
          checked={isChecked}
          type="checkbox"
          onClick={handleCheckboxChange}
        />
        <p className={isChecked ? 'default checked' : 'default'}>{title}</p>
        <button onClick={handleButtonClick}>Delete</button>
    </li>
  );
};
