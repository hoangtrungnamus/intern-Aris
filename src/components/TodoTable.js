import React, { useContext } from 'react'
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoTable = (props) => {

  const { todos, setTodos } = useContext(TodoContext);
 
  return (
    <div>
      <div className='family'>
        <table className='table-bordered'>
          <tbody>
            <tr>
              <th className='text-center' style={{ textAlige: 'center', fontSize: '3em' }} colSpan={4}>
                Things to do
              </th>
            </tr>
            <tr>
              <th>
                Do
              </th>
              <th>
                Time
              </th>
              <th>
                Place
              </th>
              <th>
                Edit
              </th>
            </tr>
            <tr>

            </tr>
            {
              todos.map((todo, index) => {
                return (
                  todo.do && (<TodoItem
                    key={index}
                    id={todo.id}
                    do={todo.do}
                    time={todo.time}
                    date={todo.date}
                    place={todo.place}
                  >
                  </TodoItem>)
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TodoTable;