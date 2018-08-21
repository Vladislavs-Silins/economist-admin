export class Campaign {
  code = '';
  description = '';
  promotions = []; // array of promotion's id
  constructor(code, description) {
    this.code = code;
    this.description = description;
  };
  getPromotionsProgress() {
    const progress = Math.ceil(Math.random() * 100);
    return progress;
  }
}

