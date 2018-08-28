import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import CampaignItem from './components/CampaignItem';
import uuid from 'uuid';
import Tools from 'tools';
import { connect } from 'react-redux';
import selectCampaigns from 'store/selectors/campaigns';
import { Redirect } from 'react-router-dom';


class CampaignLayout extends React.Component {
  static propTypes = {

  }
  state = {
    redirect: false,
    redirectCode: '',
  }

  handleOpenCompaignItemForEdit = (code) => () => {
    this.setState(() => {
      return {
        redirect: true,
        redirectCode: code
      };
    });
    this.props.history.push(`/campaign/${code}`);
  }

  render = () => {
    if (this.state.redirect) {
      return <Redirect push to={`/promotion/${this.state.redirectCode}`} />;
    } else {
      return (
        <div className="animated fadeIn">
          <Row>
            {this.props.campaigns.map((campaign, index) => {
              return (
                <Col key={uuid()} xs="12" sm="6" lg="3">
                  <CampaignItem click={this.handleOpenCompaignItemForEdit(campaign.code)} campaign={campaign} color={Tools.getCampaignColor(campaign.code)}></CampaignItem>
                </Col>
              )
            })}
          </Row>
          <Button size="lg" color="primary" className="btn p-3 px-4 border border-dark items-add-button"><i className="fa fa-plus">Add</i></Button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    campaigns: selectCampaigns(state.campaigns, state.filters),
  };
};

export default connect(mapStateToProps)(CampaignLayout);


