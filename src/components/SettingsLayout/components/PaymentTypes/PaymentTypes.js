import React from 'react';
import { PAYMENTTYPEMAP } from 'mock-data';

import uuid from 'uuid';
import PaymentTypeItem from './components/PaymentTypeItem';
import PaymentTypeEdit from './components/PaymentTypeEdit';
import { PaymentType } from 'model/PaymentType';

class PaymentTypes extends React.Component {
  static propTypes = {

  }
  state = {
    types: [],
    currentType: new PaymentType(),
  }

  componentDidMount = () => {
    this.setState(() => {
      return {
        typesMap: PAYMENTTYPEMAP,
        types: Array.from(PAYMENTTYPEMAP.keys())
      };
    });
  }
  handleChooseType = (code) => () => {

    this.setState((prevState) => {
      return {
        currentType: this.state.typesMap.get(code),
      };
    });
  }
  handleResetType = () => {

    this.setState((prevState) => {
      return {
        currentType: new PaymentType(),
      };
    });
  }

  render = () => (
    <div className="animated fadeIn">
      <ul>
        {this.state.types.map((typeCode, index) => {
          return (
            <li key={uuid()}>
              <PaymentTypeItem click={this.handleChooseType(typeCode)} type={this.state.typesMap.get(typeCode)}></PaymentTypeItem>
            </li>
          )
        })
        }
      </ul>
      <PaymentTypeEdit type={this.state.currentType} reset={this.handleResetType} />
    </div>
  )
}

export default PaymentTypes;
