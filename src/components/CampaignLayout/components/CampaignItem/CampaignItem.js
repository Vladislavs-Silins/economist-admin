import React from 'react';
import cssModule from 'react-css-modules';
import styles from './CampaignItem.css';
import { PropTypes } from 'prop-types';
import { Campaign } from 'model/Campaign';
import Widget01 from 'views/Widgets/Widget01';

const CampaignItem = ({ campaign, color, click }) => (
  <div>
    {campaign.getExpiredStateFlag()
      ?
      < Widget01 onClick={click} className="widget--clicable" color="success" value={campaign.getPromotionsProgress().toString()} variant="inverse" header={campaign.code} mainText={campaign.description} smallText="Campaign is expired! Click to edit Campaign info" ></Widget01>
      :
      < Widget01 onClick={click} className="widget--clicable" color={color} value={campaign.getPromotionsProgress().toString()} variant="" header={campaign.code} mainText={campaign.description} smallText="Click to edit Campaign info" ></Widget01>
    }
  </div>
);

CampaignItem.propTypes = {
  campaign: PropTypes.instanceOf(Campaign),
  color: PropTypes.string,
  click: PropTypes.func.isRequired
};

export default cssModule(CampaignItem, styles);


