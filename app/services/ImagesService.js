import { api } from "../utils/Axios.js"

class ImagesService {

  async getImage() {
    const response = await api.get('api/images')
    console.log('here is your image!', response.data);


  }

}

export const imagesService = new ImagesService()