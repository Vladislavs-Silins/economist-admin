import React from 'react';
import { Col, Row } from 'reactstrap';
import { CAMPAIGNMAP } from 'mock-data/index';
import CampaignItemEdit from './components/CampaignItemEdit';
import CampaignItemPromotionList from './components/CampaignItemPromotionList';

class CampaignItemLayout extends React.Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);
    const unsubscribe = this.props.history.listen((location) => {
      const currentCampaignCode = location.pathname.split('/').pop();

      this.setState((prevState) => {
        return {
          campaign: CAMPAIGNMAP.get(currentCampaignCode),
          code: currentCampaignCode
        };
      });
    });

    this.state = {
      campaign: CAMPAIGNMAP.get(props.match.params.code),
      code: props.match.params.code,
      unsubscribe: unsubscribe
    }
  }
  componentWillUnmount = () => {
    this.state.unsubscribe();
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


export default CampaignItemLayout;
