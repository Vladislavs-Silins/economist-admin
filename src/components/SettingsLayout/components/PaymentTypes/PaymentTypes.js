import React from 'react';
import uuid from 'uuid';
import PaymentTypeItem from './components/PaymentTypeItem';
import PaymentTypeEdit from './components/PaymentTypeEdit';
import { PaymentType } from 'model/PaymentType';
import { connect } from 'react-redux';
import selectPaymentTypes from 'store/selectors/paymentTypes';

class PaymentTypes extends React.Component {
  static propTypes = {

  }
  state = {
    types: [],
    currentType: new PaymentType(),
  }

  handleChooseType = (currentType) => () => {

    this.setState(() => ({
      currentType
    }));
  }
  handleResetType = () => {

    this.setState((prevState) => ({
      currentType: new PaymentType(),
    }));
  }

  render = () => (
    <div className="animated fadeIn">
      <ul>
        {this.props.paymentTypes.map((type) => (
          <li key={uuid()}>
            <PaymentTypeItem click={this.handleChooseType(type)} type={type}></PaymentTypeItem>
          </li>
        ))
        }
      </ul>
      <PaymentTypeEdit type={this.state.currentType} reset={this.handleResetType} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    paymentTypes: selectPaymentTypes(state.paymentTypes, state.filters),
  }
};
export default connect(mapStateToProps)(PaymentTypes);

