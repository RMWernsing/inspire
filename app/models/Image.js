export class Image {
  constructor(data) {
    this.id = data.id
    this.originalLink = data.originalLink
    this.raw = data.imgUrls.raw
    this.full = data.imgUrls.full
    this.regular = data.imgUrls.regular
    this.small = data.imgUrls.small
    this.thumb = data.imgUrls.thumb
    this.attribution = data.attribution
  }

  get attributionTemplate() {
    return `
    
    `
  }
}