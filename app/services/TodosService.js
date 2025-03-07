import { AppState } from "../AppState.js";
import { Todo } from "../models/TodoModel.js";
import { api } from "../utils/Axios.js"

class TodosService {

  async deleteTodo(todoId) {
    const todos = AppState.todos
    const response = await api.delete(`api/todos/${todoId}`)
    console.log('deleted todo', response.data);
    const todoIndex = todos.findIndex(todo => todo.id == todoId)
    todos.splice(todoIndex, 1)

  }

  async createTodo(todoData) {
    const todos = AppState.todos
    const response = await api.post('api/todos', todoData)
    console.log('here is your new todo', response.data);
    const newTodo = new Todo(response.data)
    AppState.todos.push(newTodo)

  }

  async toggleTodoCompletion(todoId) {
    const foundTodo = AppState.todos.find(todo => todo.id == todoId)
    foundTodo.completed = !foundTodo.completed

    const response = await api.put(`api/todos/${todoId}`, foundTodo)
    // console.log('udated todo', response.data);

  }

  async getTodos() {
    const response = await api.get('api/todos')
    console.log('here are your todos', response.data);
    const todos = response.data.map(pojo => new Todo(pojo))
    AppState.todos = todos
    console.log('here are your todos in your appstate', AppState.todos);
  }
}
export const todosService = new TodosService()