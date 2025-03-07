export class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.originalLink
    this.attribution = data.attribution
  }
}