import React from 'react';
import { Col, Row } from 'reactstrap';
import CampaignItemEdit from './components/CampaignItemEdit';
import CampaignItemPromotionList from './components/CampaignItemPromotionList';
import { connect } from 'react-redux';
import selectCampaigns from 'store/selectors/campaigns';
import { Redirect } from 'react-router-dom';
import { Campaign } from 'model/Campaign';

class CampaignItemLayout extends React.Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);
    const unsubscribe = this.props.history.listen((location) => {
      const currentCampaignCode = location.pathname.split('/').pop();

      this.setState(() => {
        return {
          campaign: this.props.campaigns.filter((item) => item.code === currentCampaignCode).pop() || new Campaign(),
          code: currentCampaignCode
        };
      });
    });

    this.state = {
      campaign: this.props.campaigns.filter((item) => item.code === props.match.params.code).pop() || new Campaign(),
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
          {this.state.campaign ?
            (<div>
              <CampaignItemEdit campaign={this.state.campaign} />
              <CampaignItemPromotionList campaign={this.state.campaign} />
            </div>) :
            (<Redirect push to={'/404'} />)
          }


        </Col>
      </Row>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    campaigns: selectCampaigns(state.campaigns, state.filters),
  };
};

export default connect(mapStateToProps)(CampaignItemLayout);
