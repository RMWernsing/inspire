import { api } from "../utils/Axios.js";

class TempsService {
  async getTemp() {
    const response = await api.get('api/Weather')
    console.log('here is the weather', response.data);

  }

}

export const tempsService = new TempsService()