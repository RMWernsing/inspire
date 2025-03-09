export class Quote {
  constructor(data) {
    this.quote = data.quote
    this.author = data.author
    this.source = data.source
  }

  get quoteTemplate() {
    return `
      <p class="quote-author-reveal">${this.quote}</p>
      <div class="quote-author">-${this.author}</div>
    `
  }

  get todoButtonTemplate() {
    return `
      <a class="btn btn-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
        aria-controls="offcanvasExample">
        Todo List
      </a>
    `
  }

}

