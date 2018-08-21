import { PriceZone } from "./PriceZone";
export class Offer {
  id = '';
  description = '';
  priceZone = new PriceZone();
  offerItems = [];
  promotionCode = ''; // promotion id
}

