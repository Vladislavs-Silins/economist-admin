import React from 'react';
import cssModule from 'react-css-modules';
import styles from './ProductItem.css';
import { PropTypes } from 'prop-types';
import { Product } from 'model/Product';



const ProductItem = ({ item, click }) => {

  return (
    <tr onClick={click} className="tr--clicable">
      <td>{item.id}</td>
      <td>{item.description}</td>
    </tr >
  )
};

ProductItem.propTypes = {
  item: PropTypes.instanceOf(Product),
  click: PropTypes.func.isRequired
};

export default cssModule(ProductItem, styles);
