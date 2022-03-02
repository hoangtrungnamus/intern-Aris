import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([{ id: "123" }]);

  const deleteItem = (id) => {
    let newArrTodo = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        // Thêm phần tử vào cuối mảng mới
        newArrTodo.push(todos[i]);
      }
    }
    console.log(newArrTodo);
    setTodos(newArrTodo);
  };

  const todoValue = {
    todos,
    setTodos,
    deleteItem,
  };
  return (
    <TodoContext.Provider value={todoValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
