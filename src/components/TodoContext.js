import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([{ id: "123" }]);

  const deleteItem = (id) => {
    let newArrTodo = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        newArrTodo.push(todos[i]);
      }
    }
    setTodos(newArrTodo);
  };

  const getItem = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        return todos[i];
      }
    }
  };

  const editItem = (id, newValue) => {
    let newArrTodo = [];
    for (let i = 0; i < todos.length; i++) {
      newArrTodo.push(todos[i]);
      if (todos[i].id === id) {
        newArrTodo[i] = newValue;
      }
    }
    setTodos(newArrTodo);
  };

  const todoValue = {
    todos,
    setTodos,
    deleteItem,
    getItem,
    editItem,
  };
  return (
    <TodoContext.Provider value={todoValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
