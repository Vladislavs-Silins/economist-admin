import { CAMPAIGNMAP } from 'mock-data';
export class Promotion {
  code = '';
  description = '';
  campaignCode = '';
  uxJourneyCode = '';
  url = '';
  offers = [] // array of offer id
  startDate = new Date();
  endDate = new Date();

  //TODO: create constructor, that can work with redux store
  constructor({ code = "", description = "", campaignCode = "", url = "" } = {}) {
    this.code = code;
    this.description = description;
    this.campaignCode = campaignCode;
    this.url = url;
    if (campaignCode) {
      CAMPAIGNMAP.get(campaignCode).addPromotion(code);
    }
  };
  // TODO change mock method
  getPromotionProgress() {
    const progress = Math.ceil(Math.random() * 100);
    return this.code === '3.1' ? 100 : progress;
  }
  // TODO change mock method
  getExpiredStateFlag() {
    return this.code === '3.1';
  }
}

