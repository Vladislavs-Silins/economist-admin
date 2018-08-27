import React from 'react';
import cssModule from 'react-css-modules';
import styles from './PremiaItem.css';
import { PropTypes } from 'prop-types';
import { Premia } from 'model/Premia';



const PremiaItem = ({ item, click }) => {

  return (
    <tr onClick={click} className="tr--clicable">
      <td>{item.description}</td>
    </tr >
  )
};

PremiaItem.propTypes = {
  item: PropTypes.instanceOf(Premia),
  click: PropTypes.func.isRequired
};

export default cssModule(PremiaItem, styles);
