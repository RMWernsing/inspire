export class TimeController {
  constructor() {
    setInterval(this.drawCurrentTime, 1000);
  }

  drawCurrentTime() {
    const now = new Date()
    const time = now.toLocaleTimeString()
    const currentTimeElem = document.getElementById('currentTime')
    currentTimeElem.innerText = time
  }
}