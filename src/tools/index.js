// Tools library 
import { CAMPAIGNMAP } from 'mock-data';

class Tools {

  // TODO: implement more suitable function for coloring blocks
  static getColor = (index = 0) => {
    const colors = ['blue', 'yellow', 'pink', 'green', 'teal', 'indigo', 'red', 'purple', 'cyan', 'orange'];
    return colors[index % 9];
  }
  static getTechnicalColor = (index = 0) => {
    const colors = ['primary', 'success', 'danger', 'warning', 'info'];
    return colors[index % 9];
  }
  static getCampaignColor = (code) => {
    const campaignArray = Array.from(CAMPAIGNMAP.keys());
    const index = campaignArray.indexOf(code);
    return Tools.getTechnicalColor(index);
  }
}

export default Tools;