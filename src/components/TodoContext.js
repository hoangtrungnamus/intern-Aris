import React, {createContext, useState} from 'react'

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState([{}]);

    const deleteItem = (id) =>{
      const newTodos = todos.filter(todo => {
          console.log(todo.id, id);
          return todo.id !== id;
      })
      console.log(newTodos);
      setTodos([newTodos]);
  }

    const todoValue = {
        todos, 
        setTodos, 
        deleteItem,
    }
  return (
    <TodoContext.Provider value={todoValue}>
        {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;