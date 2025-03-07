import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";

export class ImagesController {
  constructor() {
    AppState.on('activeImage', this.drawActiveImage)
    AppState.on('activeImage', this.drawAttribution)
    this.getImage()
  }

  async drawActiveImage() {
    const image = AppState.activeImage
    document.body.style.backgroundImage = `url(${image.raw}), url(${image.small})`
  }

  async drawAttribution() {
    const image = AppState.activeImage
    const attributionElem = document.getElementById('attribution')
    attributionElem.innerText = image.attribution
  }

  async getImage() {
    try {
      // console.log('getting image');
      await imagesService.getImage()

    } catch (error) {
      console.log('COULD NOT GET IMAGE', error);
      Pop.error(error, 'Could note get image')

    }
  }


}