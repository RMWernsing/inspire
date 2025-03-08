import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "../utils/Axios.js"

class QuotesService {
  async getQuotes() {
    const response = await api.get('api/quotes')
    // console.log('here is your quote', response.data);
    let newQuote = new Quote(response.data)
    AppState.quote = newQuote
    // console.log('quote in the appstate', AppState.quote);
  }

}

export const quotesService = new QuotesService()