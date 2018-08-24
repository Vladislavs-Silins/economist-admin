export class PaymentType {
  code = '';
  description = '';
  constructor({ code = '', description = '' } = {}) {
    this.code = code;
    this.description = description;
  }
}

