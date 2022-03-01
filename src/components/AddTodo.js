import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';
import { v4 as uuidv4 } from 'uuid'

const AddTodo = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState({
        id: uuidv4().toString(),
        do: "",
        time: "",
        date: "",
        place: ""
    })

    function onChangeToDoForm(e) {
        setNewTodo({...newTodo, [e.target.name]: e.target.value});
    }


    function checkValid() {
        if (!newTodo.do || !newTodo.time || !newTodo.date || !newTodo.place) {
            return false;
        }
        return true;
    }

    function addTodo(e) {
        e.preventDefault();
        setNewTodo({...newTodo, id: uuidv4().toString()})
        if (checkValid()) {
            if(!todos[0]){
                setTodos([newTodo]);
            }
           else{
            setTodos([...todos, newTodo]);
           }
        }
        console.log(newTodo);
    }

    return (
        <div className='add'>
            <form>
                <div className='tbname'>Add Todo</div>
                <div className='addDo'>
                    <textarea onChange={onChangeToDoForm} placeholder='Add any thing' className='do' name="do" />
                </div>
                <div className='addTime'>
                    <input onChange={onChangeToDoForm} type='time' placeholder='Add any thing' className='time' name="time" />
                    <input onChange={onChangeToDoForm} type='date' placeholder='Add any thing' className='date' name="date" />
                    <input onChange={onChangeToDoForm} placeholder='Add any thing' className='place' name="place" />
                </div>
                <div className='btn-add'>
                    <button type='submit' onClick={addTodo} className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;