// import { Promotion } from './Promotion';
// import { PROMOTIONMAP } from 'mock-data';


export class Offer {
  id = '';
  description = '';
  priceZone = '';
  offerItems = [];
  promotionCode = ''; // promotion id
  //TODO: create constructor, that can work with redux store
  constructor({ code = '', description = '', promotionCode = '', priceZone = '' } = {}) {

    this.code = code;
    this.description = description;
    this.promotionCode = promotionCode;
    this.priceZone = priceZone;

  };
}

