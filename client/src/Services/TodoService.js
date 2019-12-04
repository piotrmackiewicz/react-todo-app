import Api from 'Libs/Api'

const getTodos = (params={}) => Api.get('/todo', params)
const getTodo = (todoId) => Api.get(`/todo/${todoId}`)
const postTodo = (todoData) => Api.post('/todo', todoData)
const deleteTodo = (todoId) => Api.delete(`/todo/${todoId}`)
const editTodo = (todoData, todoId) => Api.put(`/todo/${todoId}`, todoData)

export { getTodos, getTodo, postTodo, deleteTodo, editTodo };