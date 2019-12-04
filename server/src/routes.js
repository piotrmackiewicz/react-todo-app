import express from 'express';
const router = express.Router();
import Todo from './models/Todo';

router.get('/ping', (_req, res) => {
    return res.status(200).json({ data: 'pong' })
});

router.get('/todo', async (req, res) => {
    try {
        const options = {};
        if (req.query.sort) {
            options.sort = { [req.query.sort]: -1 }
        }
        const todos = await Todo.find({}, null, options)
        return res.json(todos)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

router.get('/todo/:todoId', async (req, res) => {
    try {
        const todoId = req.params.todoId
        const todo = await Todo.findOne({ _id: todoId })
        return res.status(200).json(todo)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
})

router.post('/todo', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority
    })

    try {
        const newTodo = await todo.save()
        return res.status(201).json(newTodo)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})

router.delete('/todo/:todoId', async (req, res) => {
    try {
        const todoId = req.params.todoId
        const deletedTodo = await Todo.findOne({ _id: todoId })
        const result = await Todo.deleteOne({ _id: todoId })
        if (result.n > 0) {
            return res.status(200).json(deletedTodo)
        } else {
            return res.status(404).json({ message: err.message })
        }
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
})

router.put('/todo/:todoId', async (req, res) => {
    try {
        const todoId = req.params.todoId
        const update = {
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority
        }
        const todo = await Todo.findOneAndUpdate(
            { _id: todoId },
            update,
            { returnOriginal: false }
        )
        res.status(200).json(todo)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
})


export default router;