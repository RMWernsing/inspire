
export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.id = data.id
  }

  get todoListTemplate() {
    return `
      <input type="checkbox">
      <p class="ms-3">Todo goes here</p>
    `
  }
}