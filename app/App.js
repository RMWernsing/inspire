import { AuthController } from "./Auth/AuthController.js"
import { ImagesController } from "./controllers/ImagesController.js"
import { TodosController } from "./controllers/TodosController.js"

class App {

  authController = new AuthController()

  todosController = new TodosController()

  imagesController = new ImagesController()

}

window['app'] = new App()


