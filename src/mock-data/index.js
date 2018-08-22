import { Campaign } from "../model/Campaign";
import { Promotion } from './../model/Promotion';
export const CAMPAIGNMAP = new Map();
CAMPAIGNMAP.set('1', new Campaign({ code: '1', description: 'Campaign 1' }));
CAMPAIGNMAP.set('2', new Campaign({ code: '2', description: 'Campaign 2' }));
CAMPAIGNMAP.set('3', new Campaign({ code: '3', description: 'Campaign 3' }));
CAMPAIGNMAP.set('4', new Campaign({ code: '4', description: 'Campaign 4' }));
CAMPAIGNMAP.set('5', new Campaign({ code: '5', description: 'Campaign 5' }));

export const PROMOTIONMAP = new Map();
PROMOTIONMAP.set('1.1', new Promotion({ code: '1.1', description: "Promotion 1 for Campaign 1", campaignCode: '1', url: "https://www.wearethebest.com" }));
PROMOTIONMAP.set('1.1', new Promotion({ code: '1.2', description: "Promotion 2 for Campaign 1", campaignCode: '2', url: "https://www.wearethebest.com" }));
PROMOTIONMAP.set('1.1', new Promotion({ code: '1.3', description: "Promotion 3 for Campaign 1", campaignCode: '3', url: "https://www.wearethebest.com" }));
PROMOTIONMAP.set('1.1', new Promotion({ code: '1.4', description: "Promotion 4 for Campaign 1", campaignCode: '4', url: "https://www.wearethebest.com" }));

PROMOTIONMAP.set('2.1', new Promotion({ code: '2.1', description: "Promotion 1 for Campaign 2", campaignCode: '2', url: "https://www.bestcampaigninwholeworld.yes" }));

PROMOTIONMAP.set('3.1', new Promotion({ code: '3.1', description: "Promotion 1 for Campaign 3", campaignCode: '3', url: "https://www.bestcampaigninmylife.aha" }));

PROMOTIONMAP.set('5.1', new Promotion({ code: '5.1', description: "Promotion 1 for Campaign 5", campaignCode: '5', url: "https://www.bestcampaignonthispage.wow" }));
PROMOTIONMAP.set('5.1', new Promotion({ code: '5.2', description: "Promotion 2 for Campaign 5", campaignCode: '5', url: "https://www.bestcampaignonthispage.wow" }));
PROMOTIONMAP.set('5.1', new Promotion({ code: '5.3', description: "Promotion 3 for Campaign 5", campaignCode: '5', url: "https://www.bestcampaignonthispage.wow" }));


