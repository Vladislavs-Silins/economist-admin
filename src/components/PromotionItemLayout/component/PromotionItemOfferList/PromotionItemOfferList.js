import React from 'react';
import { Card, CardHeader, Table } from 'reactstrap';
import { Offer } from 'model/Offer';
import { OFFERMAP } from 'mock-data';
import OfferItem from './../OfferItem';
import uuid from 'uuid';
import { PropTypes } from 'prop-types';
import { Promotion } from 'model/Promotion';


class PromotionItemOfferList extends React.Component {
  static propTypes = {
    promotion: PropTypes.instanceOf(Promotion)
  }

  state = {
    offer: new Offer(),
    offerMap: new Map(),
    promotionCode: ''

  };

  componentDidMount = () => {
    this.getOfferList();
  }

  // TODO: change function that gets mock's data to correct one
  getOfferList = () => {
    this.setState((prevState) => {
      return {
        offerMap: OFFERMAP,
      };
    });

  };

  handleChooseItem = (code) => () => {
    this.setState((prevState) => {
      return {
        offer: this.state.offerMap.get(code),
      };
    });
  }
  handleResetItem = () => {

    this.setState((prevState) => {
      return {
        offer: new Offer(),
      };
    });
  }


  render = () => (
    <Card>
      <CardHeader>
        <h3>Offer list for promotion "{this.props.promotion.description}"</h3>
      </CardHeader>
      <Table hover bordered striped responsive size="sm">
        <thead>
          <tr>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.promotion.offers.map((offerCode, index) => {
            const offer = this.state.offerMap.get(offerCode);
            return (
              <OfferItem key={uuid()} item={offer} />
            )
          })}
        </tbody>
      </Table>
    </Card>
  )
}

export default PromotionItemOfferList;
