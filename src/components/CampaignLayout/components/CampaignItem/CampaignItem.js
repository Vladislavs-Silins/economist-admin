import React from 'react';
import cssModule from 'react-css-modules';
import styles from './CampaignItem.css';
import { PropTypes } from 'prop-types';
import { Campaign } from './../../../../model/Campaign';
import Widget01 from '../../../../views/Widgets/Widget01';

const CampaignItem = ({ campaign, color, value }) => (
  <div>
    < Widget01 color={color} value={value.toString()} variant="inverse" header={campaign.code} mainText={campaign.description} ></Widget01>
  </div>
);

CampaignItem.propTypes = {
  campaign: PropTypes.instanceOf(Campaign),
  color: PropTypes.string,
  value: PropTypes.number
};

export default cssModule(CampaignItem, styles);


