export class OfferCategory {
  code = '';
  description = '';
  constructor({ code = '', description = '' } = {}) {
    this.code = code;
    this.description = description;
  }
}

