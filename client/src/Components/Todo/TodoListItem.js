import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import * as TodoService from 'Services/TodoService'
import { Link } from '@reach/router'

const TodoListItem = ({ todo, handleDelete }) => {

    return (
        <ListGroup.Item className="mb-0">
            <Row>
                <Col className="d-flex justify-content-start">
                    <div>
                        <h5 className="t-align-l">{todo.title}</h5>
                        <p className="t-align-l mb-0">{todo.description}</p>
                    </div>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Link to={`/edit/${todo._id}`}>
                        <Button className="mr-2"><FontAwesomeIcon icon={faEdit} /></Button>
                    </Link>
                    <Button onClick={handleDelete}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default TodoListItem