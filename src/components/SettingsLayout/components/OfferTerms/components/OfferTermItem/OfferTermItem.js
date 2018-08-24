import React from 'react';
import cssModule from 'react-css-modules';
import styles from './OfferTermItem.css';
import { PropTypes } from 'prop-types';
import { OfferTerm } from 'model/OfferTerm';
import Widget02 from 'views/Widgets/Widget02';



const OfferTermItem = ({ term, click }) => {
  const weeksText = term.duration === 1 ? 'week' : 'weeks';
  return (
    <div>
      <Widget02 className="widget--clicable" onClick={click} color="blue" icon="fa fa-calendar-o" header={`${term.duration} ${weeksText}`} mainText={term.description} variant='0'></Widget02>
    </div >
  )
};

OfferTermItem.propTypes = {
  term: PropTypes.instanceOf(OfferTerm),
  color: PropTypes.string,
  click: PropTypes.func.isRequired
};

export default cssModule(OfferTermItem, styles);
