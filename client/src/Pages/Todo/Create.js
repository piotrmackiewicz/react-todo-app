import React from 'react';
import CreateTodoForm from 'Components/Todo/CreateTodoForm'
import * as TodoService from 'Services/TodoService';
import { navigate } from "@reach/router"
import { toast } from 'react-toastify';

const Create = () => {
    const createTodo = (data) => {
        (async () => {
            try {
                await TodoService.postTodo(data)
                toast.success('✔ Todo has been created!', {
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

    return (
        <CreateTodoForm onSubmitForm={createTodo} />
    )
}

export default Create;