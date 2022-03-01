import React, {createContext, useState} from 'react'

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState([{}]);

    const todoValue = {
        todos, setTodos
    }
  return (
    <TodoContext.Provider value={todoValue}>
        {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;