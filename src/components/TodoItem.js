import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export const TodoItem = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

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
                    <Button variant="primary" className="btnModal" onClick={props.del}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>

    )
}

export default TodoItem;