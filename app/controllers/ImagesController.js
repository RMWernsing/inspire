import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";

export class ImagesController {
  constructor() {
    AppState.on('activeImage', this.drawActiveImage)
    this.getImage()
  }

  async drawActiveImage() {
    const image = AppState.activeImage
    document.body.style.backgroundImage = `url(${image.raw}), url(${image.small})`
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