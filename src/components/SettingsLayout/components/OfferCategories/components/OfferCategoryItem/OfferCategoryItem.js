import React from 'react';
import cssModule from 'react-css-modules';
import styles from './OfferCategoryItem.css';
import { PropTypes } from 'prop-types';
import { OfferCategory } from 'model/OfferCategory';
import Widget02 from 'views/Widgets/Widget02';

const OfferCategoryItem = ({ category, click }) => (
  <div>    
      <Widget02 className="widget--clicable" onClick={click} color="green" header={category.code} mainText={category.description} variant = '0'></Widget02>        
  </div>
);

OfferCategoryItem.propTypes = {
  category: PropTypes.instanceOf(OfferCategory),
  color: PropTypes.string,
  click: PropTypes.func.isRequired  
};

export default cssModule(OfferCategoryItem, styles);
