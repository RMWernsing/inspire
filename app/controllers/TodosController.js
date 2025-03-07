import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
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

  async createTodo() {
    try {
      event.preventDefault()
      const formElem = event.target
      const rawTodoData = getFormData(formElem)
      // console.log('data from form', rawTodoData);

      await todosService.createTodo(rawTodoData)
    } catch (error) {
      console.error("COULD NOT CREATE TODO", error);
      Pop.error(error, 'Could not create todo')
    }
  }

  async deleteTodo(todoId) {
    try {
      const confirmed = await Pop.confirm('Are You Sure You Want To Delete This Note?', 'If you do, you will not be able to recover it.', 'YES', 'NO')
      if (!confirmed) {
        return
      }
      await todosService.deleteTodo(todoId)
    } catch (error) {
      console.error("COULD NOT DELETE TODO", error);
      Pop.error(error, 'Could not delete todo')
    }
  }
}
