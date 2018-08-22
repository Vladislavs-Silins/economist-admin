export class Campaign {
  code = '';
  description = '';
  promotions = []; // array of promotion's id
  constructor(code, description) {
    this.code = code;
    this.description = description;
  };

  // TODO change mock method
  getPromotionsProgress() {
    const progress = Math.ceil(Math.random() * 100);
    return this.code === '3'? 100: progress;
  }
  // TODO change mock method
  getExpiredStateFlag() {
    return this.code === '3';
  }
}

