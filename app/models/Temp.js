
export class Temp {
  constructor(data) {
    this.temp = data.main.temp
    this.id = data.sys.id
    this.isFahrenheit = true
  }

  get tempFahrenheit() {
    let temp = (this.temp - 273.15) * 9 / 5 + 32

    return Math.floor(temp)
  }

  get tempCelsius() {
    let temp = this.temp - 273.15

    return Math.floor(temp)
  }

  get changeTempFormat() {
    if (this.isFahrenheit) {
      return `<span class="fs-4">${this.tempFahrenheit}</span><span class="fs-4 mdi mdi-temperature-fahrenheit"></span>`
    }
    return `<span class="fs-4">${this.tempCelsius}</span><span class="fs-4 mdi mdi-temperature-celsius"></span>`
  }

  get tempTemplate() {
    return `${this.changeTempFormat}`
  }

}