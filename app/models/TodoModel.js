
export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.id = data.id
  }

  get todoListTemplate() {
    return `
      <div class="d-flex mt-2 align-items-baseline">
        <input onchange="app.todosController.toggleTodoCompletion('${this.id}')" title="Complete Todo" type="checkbox" ${this.completed ? 'checked' : ''}>
        <p class="ms-3">${this.description}</p>
      </div>
    `
  }
}