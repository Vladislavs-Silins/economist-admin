import React from 'react';
import { Col, Row, Card } from 'reactstrap';
import PromotionItemOfferList from './component/PromotionItemOfferList/PromotionItemOfferList';
import PromotionItemOfferDetails from './component/PromotionItemOfferDetails/index';
import { PROMOTIONMAP } from 'mock-data';
import { Promotion } from 'model/Promotion';

class PromotionItemLayout extends React.Component {
  state = { promotion: new Promotion() }

  constructor(props) {
    super(props);

    const code = this.props.match.params.code;
    const promotion = PROMOTIONMAP.get(code);
    this.state = {
      promotion
    };


  }

  render = () => (
    <div>
      <Card>
        <Row>
          <Col lg={4}>
            <PromotionItemOfferList promotion={this.state.promotion} />
          </Col>
          <Col lg={8}>
            <PromotionItemOfferDetails />
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default PromotionItemLayout;
