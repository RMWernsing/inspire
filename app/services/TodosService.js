import { AppState } from "../AppState.js";
import { Todo } from "../models/TodoModel.js";
import { api } from "../utils/Axios.js"

class TodosService {
  async getTodos() {
    const response = await api.get('api/todos')
    console.log('here are your todos', response.data);
    const todos = response.data.map(pojo => new Todo(pojo))
    AppState.todos = todos
    console.log('here are your todos in your appstate', AppState.todos);
  }
}
export const todosService = new TodosService()