import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { TodoContext } from "./TodoContext";

export const TodoItem = (props) => {
  const { deleteItem, getItem } = useContext(TodoContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const [showEdit, setShowEdit] = useState(false);

  const [editForm, setEditForm] = useState({
    does: "",
    time: "",
    date: "",
    place: "",
  });

  const { does, time, date, place } = editForm;

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => {
    const res = getItem(props.id);
    setEditForm(res);
    console.log(does, time, date, place);
    setShowEdit(true);
  };

  function deleteTodoItem() {
    deleteItem(props.id);
    handleClose();
  }

  function editTodoItem() {
    handleCloseEdit();
  }

  function onChangeEditForm(event) {
    const newObj = {
      does: event.target.value,
      time: event.target.value,
      date: event.target.value,
      place: event.target.value,
    };
    console.log(newObj);
  }

  return (
    <tr>
      <td>{props.does}</td>
      <td>
        {props.date} {props.time}
      </td>
      <td>{props.place}</td>
      <td>
        <button onClick={handleShowEdit} className="btn-mod">
          Edit
        </button>
        <button onClick={handleShow} className="btn-del">
          Delete
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btnModal"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="btnModal"
            onClick={deleteTodoItem}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            onChange={onChangeEditForm}
            type="text"
            name="does-edit"
            value={does}
          />
          <br />
          <div className="time-date-form-edit">
            <Form.Control
              onChange={onChangeEditForm}
              className="time-edit"
              type="time"
              name="time-edit"
              value={time}
            />
            <Form.Control
              onChange={onChangeEditForm}
              className="date-edit"
              type="date"
              name="date-edit"
              value={date}
            />
          </div>
          <br />
          <Form.Control
            onChange={onChangeEditForm}
            type="text"
            name="place-edit"
            value={place}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={editTodoItem}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

export default TodoItem;
