import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { api } from "../utils/Axios.js"

class ImagesService {

  async getImage() {
    const response = await api.get('api/images')
    console.log('here is your image!', response.data);
    const image = new Image(response.data)
    AppState.activeImage = image
    console.log('here is your active image', AppState.activeImage);
  }

}

export const imagesService = new ImagesService()