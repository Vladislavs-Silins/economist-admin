import React from 'react';
import cssModule from 'react-css-modules';
import styles from './PaymentTypeItem.css';
import { PropTypes } from 'prop-types';
import { PaymentType } from 'model/PaymentType';
import Widget02 from 'views/Widgets/Widget02';

const PaymentTypeItem = ({ type, click }) => (
  <div>
    <Widget02 className="widget--clicable" onClick={click} color="indigo" icon="fa fa-bank" header={type.code} mainText={type.description} variant='0'></Widget02>
  </div>
);

PaymentTypeItem.propTypes = {
  type: PropTypes.instanceOf(PaymentType),
  color: PropTypes.string,
  click: PropTypes.func.isRequired
};

export default cssModule(PaymentTypeItem, styles);
