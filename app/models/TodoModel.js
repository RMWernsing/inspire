import { AppState } from "../AppState.js"

export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.id = data.id
  }

  get todoListTemplate() {
    return `
      <div class="d-flex align-items-baseline justify-content-between">
        <input onchange="app.todosController.toggleTodoCompletion('${this.id}')" title="Complete Todo" type="checkbox" ${this.completed ? 'checked' : ''}>
        <p class="ms-3">${this.description}</p>
        <button onclick="app.todosController.deleteTodo('${this.id}')" class="btn"><span class="text-danger mdi mdi-trash-can-outline"></span></button>
      </div>
    `
  }
}