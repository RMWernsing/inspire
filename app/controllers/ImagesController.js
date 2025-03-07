import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";

export class ImagesController {
  constructor() {
    console.log('Images Controller Working🎉🎉🎉');
    this.getImage()
  }

  async getImage() {
    try {
      console.log('getting image');
      await imagesService.getImage()

    } catch (error) {
      console.log('COULD NOT GET IMAGE', error);
      Pop.error(error, 'Could note get image')

    }
  }
}