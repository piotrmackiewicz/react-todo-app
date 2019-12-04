import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: Number
})

const Todo = mongoose.model('todos', todoSchema)

export default Todo