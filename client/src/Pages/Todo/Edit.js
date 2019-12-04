import React, { useState, useEffect } from 'react';
import CreateTodoForm from 'Components/Todo/CreateTodoForm';
import * as TodoService from 'Services/TodoService'
import { toast } from 'react-toastify';
import { navigate } from "@reach/router"

const Edit = ({ todoId }) => {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        (async() => {
            try {
                const todo = await TodoService.getTodo(todoId)
                setTodo(todo)
            } catch (err) {
                alert(err)
            }
        })()
    }, [todoId])

    const updateTodo = (data) => {
        (async () => {
            try {
                await TodoService.editTodo(data, todoId)
                toast.success('✔ Todo has been updated!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                })
                navigate('/')
            } catch (err) {
                alert(err)
            }
        })()
    }

    if (!todo._id) {
        return (<p>loading...</p>)
    }

    return <CreateTodoForm onSubmitForm={updateTodo} formData={todo} />
}

export default Edit;