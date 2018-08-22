import React from 'react';
import cssModule from 'react-css-modules';
import styles from './PromotionItem.css';
import { Promotion } from 'model/Promotion';
import PropTypes from 'prop-types';
import Widget01 from 'views/Widgets/Widget01';



const PromotionItem = ({ promotion, color, click }) => (
  <div>
    {promotion.getExpiredStateFlag()
      ?
      <Widget01 onClick={click} className="widget--clicable" color="success" value={promotion.getPromotionProgress().toString()} variant="inverse" header={promotion.code} mainText={promotion.description} smallText="Campaign is expired! Click to edit Campaign info" ></Widget01>
      :
      <Widget01 onClick={click} className="widget--clicable" color={color} value={promotion.getPromotionProgress().toString()} variant="" header={promotion.code} mainText={promotion.description} smallText="Click to edit Campaign info" ></Widget01>
    }
  </div>
);

PromotionItem.propTypes = {
  promotion: PropTypes.instanceOf(Promotion),
  color: PropTypes.string,
  click: PropTypes.func.isRequired
};

export default cssModule(PromotionItem, styles);