import { AuthController } from "./Auth/AuthController.js"
import { ImagesController } from "./controllers/ImagesController.js"
import { QuotesController } from "./controllers/QuotesController.js"
import { TempsController } from "./controllers/TempsController.js"
import { TimeController } from "./controllers/TimeControler.js"
import { TodosController } from "./controllers/TodosController.js"

class App {

  authController = new AuthController()

  todosController = new TodosController()

  imagesController = new ImagesController()

  tempsController = new TempsController()

  timeController = new TimeController()

  quotesController = new QuotesController()

}

window['app'] = new App()


