import React from 'react';
import cssModule from 'react-css-modules';
import styles from './PriceZoneItem.css';
import { PropTypes } from 'prop-types';
import { PriceZone } from 'model/PriceZone';



const PriceZoneItem = ({ priceZone, click }) => {
  const countryIdForIcon = priceZone.countryCode.toLocaleLowerCase();
  const flagIcon = `flag-icon flag-icon-${countryIdForIcon}`
  return (
    <tr onClick={click} className="tr--clicable">
      <td><i className={flagIcon} title="ad" id="ad"></i></td>
      <td>{priceZone.country}</td>
      <td>{priceZone.currency}</td>
    </tr >
  )
};

PriceZoneItem.propTypes = {
  priceZone: PropTypes.instanceOf(PriceZone),
  color: PropTypes.string,
  click: PropTypes.func.isRequired
};

export default cssModule(PriceZoneItem, styles);
