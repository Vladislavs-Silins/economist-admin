export class PriceZone {
  country = '';
  currency = '';
  countryCode = '';
  code = '';
  constructor({ code = '', country = '', currency = '', countryCode = '' } = {}) {
    this.country = country;
    this.code = code;
    this.currency = currency;
    this.countryCode = countryCode;
  }
}

