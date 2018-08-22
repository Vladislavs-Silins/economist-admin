export class Promotion {
  code = '';
  description = '';
  campaignCode = '';
  uxJourneyCode = '';
  url = '';
  offers = [] // array of offer id
  startDate = new Date();
  endDate = new Date();

  constructor({ code, description, campaignCode, url }) {
    this.code = code;
    this.description = description;
    this.campaignCode = campaignCode;
    this.url = url;
  };
  // TODO change mock method
  getPromotionProgress() {
    const progress = Math.ceil(Math.random() * 100);
    return this.code === '3' ? 100 : progress;
  }
  // TODO change mock method
  getExpiredStateFlag() {
    return this.code === '3';
  }
}

