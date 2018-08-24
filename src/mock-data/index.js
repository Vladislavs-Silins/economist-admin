import { Campaign } from "model/Campaign";
import { Promotion } from 'model/Promotion';
import { OfferCategory } from "model/OfferCategory";
import { PaymentType } from './../model/PaymentType';
import { OfferTerm } from "../model/OfferTerm";
export const CAMPAIGNMAP = new Map();
export const PROMOTIONMAP = new Map();
export const OFFERCATEGORYMAP = new Map();
export const PAYMENTTYPEMAP = new Map();
export const OFFERTERMMAP = new Map();

CAMPAIGNMAP.set('1', new Campaign({ code: '1', description: 'Campaign 1' }));
CAMPAIGNMAP.set('2', new Campaign({ code: '2', description: 'Campaign 2' }));
CAMPAIGNMAP.set('3', new Campaign({ code: '3', description: 'Campaign 3' }));
CAMPAIGNMAP.set('4', new Campaign({ code: '4', description: 'Campaign 4' }));
CAMPAIGNMAP.set('5', new Campaign({ code: '5', description: 'Campaign 5' }));


PROMOTIONMAP.set('1.1', new Promotion({ code: '1.1', description: "Promotion 1 for Campaign 1", campaignCode: '1', url: "https://www.wearethebest.com" }));
PROMOTIONMAP.set('1.2', new Promotion({ code: '1.2', description: "Promotion 2 for Campaign 1", campaignCode: '1', url: "https://www.wearethebest.com" }));
PROMOTIONMAP.set('1.3', new Promotion({ code: '1.3', description: "Promotion 3 for Campaign 1", campaignCode: '1', url: "https://www.wearethebest.com" }));
PROMOTIONMAP.set('1.4', new Promotion({ code: '1.4', description: "Promotion 4 for Campaign 1", campaignCode: '1', url: "https://www.wearethebest.com" }));

PROMOTIONMAP.set('2.1', new Promotion({ code: '2.1', description: "Promotion 1 for Campaign 2", campaignCode: '2', url: "https://www.bestcampaigninwholeworld.yes" }));

PROMOTIONMAP.set('3.1', new Promotion({ code: '3.1', description: "Promotion 1 for Campaign 3", campaignCode: '3', url: "https://www.bestcampaigninmylife.aha" }));

PROMOTIONMAP.set('5.1', new Promotion({ code: '5.1', description: "Promotion 1 for Campaign 5", campaignCode: '5', url: "https://www.bestcampaignonthispage.wow" }));
PROMOTIONMAP.set('5.2', new Promotion({ code: '5.2', description: "Promotion 2 for Campaign 5", campaignCode: '5', url: "https://www.bestcampaignonthispage.wow" }));
PROMOTIONMAP.set('5.3', new Promotion({ code: '5.3', description: "Promotion 3 for Campaign 5", campaignCode: '5', url: "https://www.bestcampaignonthispage.wow" }));

OFFERCATEGORYMAP.set('1', new OfferCategory({ code: '1', description: 'Category 1' }));
OFFERCATEGORYMAP.set('2', new OfferCategory({ code: '2', description: 'Category 2' }));
OFFERCATEGORYMAP.set('3', new OfferCategory({ code: '3', description: 'Category 3' }));

PAYMENTTYPEMAP.set('1', new PaymentType({ code: '1', description: 'Payment Type 1' }));
PAYMENTTYPEMAP.set('2', new PaymentType({ code: '2', description: 'Payment Type 2' }));
PAYMENTTYPEMAP.set('3', new PaymentType({ code: '3', description: 'Payment Type 3' }));
PAYMENTTYPEMAP.set('4', new PaymentType({ code: '4', description: 'Payment Type 4' }));

OFFERTERMMAP.set('1', new OfferTerm({ code: '1', description: 'Offer Term 1', duration: 1 }));
OFFERTERMMAP.set('2', new OfferTerm({ code: '2', description: 'Offer Term 2', duration: 5 }));
OFFERTERMMAP.set('3', new OfferTerm({ code: '3', description: 'Offer Term 3', duration: 10 }));
OFFERTERMMAP.set('4', new OfferTerm({ code: '4', description: 'Offer Term 4', duration: 40 }));
