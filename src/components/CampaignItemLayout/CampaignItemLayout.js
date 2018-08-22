import React from 'react';
import { Col, Row, Card } from 'reactstrap';
// import cssModule from 'react-css-modules';
// import styles from './CampaignItemLayout.css';
import { CAMPAIGNMAP } from 'mock-data/index';
import CampaignItemEdit from './components/CampaignItemEdit';
import CampaignItemPromotionList from './components/CampaignItemPromotionList';

class CampaignItemLayout extends React.Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)

    this.state = {
      campaign: CAMPAIGNMAP.get(props.match.params.code),
      code: props.match.params.cod
    }
  }

  render = () => (
    <div>
      <Row>
        <Col>
          <CampaignItemEdit campaign={this.state.campaign} />          
          <CampaignItemPromotionList campaign={this.state.campaign} />
          
        </Col>
      </Row>
    </div>
  )
}

// export default cssModule(CampaignItemLayout, styles);
export default CampaignItemLayout;
