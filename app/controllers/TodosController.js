import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { Pop } from "../utils/Pop.js";

export class TodosController {
  constructor() {
    AppState.on('identity', this.getTodos)
    AppState.on('todos', this.drawTodoList)

  }

  drawTodoList() {
    const todoList = AppState.todos
    let todoListContent = ''
    todoList.forEach(todo => todoListContent += todo.todoListTemplate)
    const todoListElem = document.getElementById('todoList')
    todoListElem.innerHTML = todoListContent
  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error("COULD NOT GET TO DO LIST", error);
      Pop.error(error, 'Could not get to do list')
    }
  }

  async toggleTodoCompletion(todoId) {
    try {
      await todosService.toggleTodoCompletion(todoId)
    } catch (error) {
      console.error("COULD NOT CHANGE COMPLETION", error);
      Pop.error(error, 'Could not change completion')
    }
  }
}
