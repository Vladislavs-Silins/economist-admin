export class OfferTerm {
  code = '';
  duration = 0;
  description = '';
  constructor({ code = '', description = '', duration = 0 } = {}) {
    this.code = code;
    this.description = description;
    this.duration = duration;
  }
}

