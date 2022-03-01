import React, { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {TodoContext} from './TodoContext';

export const TodoItem = (props) => {
    const {deleteItem} = useContext(TodoContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        
        setShow(true);console.log(props.id)};

    function deleteTodoItem(){
        deleteItem(props.id);
    }
    
    return (
        <tr>
            <td>{props.do}</td>
            <td>{props.date} {props.time}</td>
            <td>{props.place} {props.id}</td>
            <td>
                <button onClick={handleShow} className="btn-mod">
                    Delete
                </button>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this item?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="btnModal" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className="btnModal" onClick={deleteTodoItem}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>

    )
}

export default TodoItem;