import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";

export class QuotesController {
  constructor() {
    this.getQuotes()
    AppState.on('quote', this.drawQuote)
  }

  drawQuote() {
    const quote = AppState.quote
    const quoteElem = document.getElementById('quoteCard')
    quoteElem.innerHTML = quote.quoteTemplate
  }



  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.log('COULD NOT GET QUOTES', error);
      Pop.error(error, 'Could not get quotes')

    }
  }
}