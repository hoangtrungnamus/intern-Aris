import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [clearInput, setClearInput] = useState(false);
  const [newTodo, setNewTodo] = useState({
    id: uuidv4().toString(),
    does: "",
    time: "",
    date: "",
    place: "",
  });

  function onChangeToDoForm(e) {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  }

  function checkValid() {
    if (!newTodo.does || !newTodo.time || !newTodo.date || !newTodo.place) {
      return true;
    }
    return false;
  }

  const { does, time, date, place } = newTodo;

  function addTodo(e) {
    e.preventDefault();
    if (checkValid()) {
      return;
    }
    setTodos([newTodo]);
    setTodos([...todos, newTodo]);
    setNewTodo({
      id: uuidv4().toString(),
      does: "",
      time: "",
      date: "",
      place: "",
    });
  }

  return (
    <div className="add">
      <form>
        <div className="tbname">Add Todo</div>
        <div className="addDo">
          <textarea
            onChange={onChangeToDoForm}
            placeholder="Add any thing"
            className="do"
            name="does"
            value={does}
          />
        </div>
        <div className="addTime">
          <input
            onChange={onChangeToDoForm}
            type="time"
            placeholder="Add any thing"
            className="time"
            name="time"
            value={time}
          />
          <input
            onChange={onChangeToDoForm}
            type="date"
            placeholder="Add any thing"
            className="date"
            name="date"
            value={date}
          />
          <input
            onChange={onChangeToDoForm}
            placeholder="Add any thing"
            className="place"
            name="place"
            value={place}
          />
        </div>
        <div className="btn-add">
          <button type="submit" onClick={addTodo} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
