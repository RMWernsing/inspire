import { AppState } from "../AppState.js";
import { Temp } from "../models/temp.js";
import { api } from "../utils/Axios.js";

class TempsService {
  async getTemp() {
    const response = await api.get('api/Weather')
    // console.log('here is the weather', response.data)
    const temp = new Temp(response.data)
    AppState.temp = temp
    console.log('temp in fahrenheit', AppState.temp.tempFahrenheit);
  }

}

export const tempsService = new TempsService()