import { tempsService } from "../services/TempsService.js";
import { Pop } from "../utils/Pop.js";

export class TempsController {
  constructor() {
    this.getTemp()
  }

  async getTemp() {
    try {
      await tempsService.getTemp()
    } catch (error) {
      console.log('COULD NOT GET TEMP', error);
      Pop.error(error, 'Could not get temperature')
    }
  }
}