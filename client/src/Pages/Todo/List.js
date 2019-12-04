import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { Button, ListGroup, Row, Col } from 'react-bootstrap'
import * as TodoService from 'Services/TodoService'
import TodoListItem from 'Components/Todo/TodoListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const List = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const fetchedTodos = await TodoService.getTodos({ sort: 'priority' })
                setTodos(fetchedTodos)
            } catch (err) {
                alert(err)
            }
        })();   
    }, [])

    const deleteTodo = (todoId) => {
        (async () => {
            try {
                const deletedTodo = await TodoService.deleteTodo(todoId)
                setTodos(todos.filter(todo => todo._id !== deletedTodo._id))
                toast.success('✔ Todo has been deleted!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                })
            } catch (err) {
                alert(err)
            }
        })()
    }

    const renderTodos = () => (
        todos.map((todo) => <TodoListItem todo={todo} key={todo._id} handleDelete={() => deleteTodo(todo._id)} />)
    )

    return (
        <React.Fragment>
            <Row className="justify-content-center">
                <Col sm={12} lg={8}>
                    <Row className="justify-content-center">
                        <Col>
                            <ListGroup className="mb-3">
                                {renderTodos()}
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-end">
                            <Link to="/create">
                                <Button><FontAwesomeIcon icon={faPlus} /> New</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default List;