
export class Temp {
  constructor(data) {
    this.temp = data.main.feels_like
    this.id = data.sys.id
  }
}