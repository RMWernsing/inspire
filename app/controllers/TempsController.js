import { AppState } from "../AppState.js";
import { Temp } from "../models/temp.js";
import { tempsService } from "../services/TempsService.js";
import { Pop } from "../utils/Pop.js";

export class TempsController {
  constructor() {
    this.getTemp()
    AppState.on('temp', this.drawTemp)
  }

  async getTemp() {
    try {
      await tempsService.getTemp()
    } catch (error) {
      console.log('COULD NOT GET TEMP', error);
      Pop.error(error, 'Could not get temperature')
    }
  }

  changeFahrenheitToCelsius() {
    const temp = AppState.temp
    temp.isFahrenheit = !temp.isFahrenheit
    console.log(temp.isFahrenheit);

  }

  drawTemp() {
    const temp = AppState.temp
    const tempElem = document.getElementById('temp')
    tempElem.innerHTML = temp.tempTemplate
  }
}