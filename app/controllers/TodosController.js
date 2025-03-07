import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { Pop } from "../utils/Pop.js";

export class TodosController {
  constructor() {
    AppState.on('identity', this.getTodos)

  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error("COULD NOT GET TO DO LIST", error);
      Pop.error(error, 'Could not get to do list')
    }
  }
}
