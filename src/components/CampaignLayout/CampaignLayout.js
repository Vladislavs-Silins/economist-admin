import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { CAMPAIGNMAP } from '../../mock-data';
import CampaignItem from './components/CampaignItem';
import uuid from 'uuid';
import Tools from 'tools';


class CampaignLayout extends React.Component {
  static propTypes = {

  }
  state = {
    campaigns: [],
    campaignMap: {}
  }


  componentDidMount = () => {
    this.getCompaignList();
  }

  // TODO: change function that gets mock's data to correct one
  getCompaignList = () => {
    this.setState((prevState) => {
      return {
        campaignMap: CAMPAIGNMAP,
        campaigns: Array.from(CAMPAIGNMAP.keys())
      };
    });

  };

  handleOpenCompaignItemForEdit = (code) => () => {
    this.props.history.push(`/campaign/${code}`);
  }

  render = () => (
    <div className="animated fadeIn">
      <Row>
        {this.state.campaigns.map((campaignCode, index) => {
          return (
            <Col key={uuid()} xs="12" sm="6" lg="3">
              <CampaignItem click={this.handleOpenCompaignItemForEdit(campaignCode)} campaign={this.state.campaignMap.get(campaignCode)} color={Tools.getCampaignColor(campaignCode)}></CampaignItem>
            </Col>
          )
        })}
      </Row>
      <Button size="lg" color="info" className="btn btn-pill p-3 px-4 border border-dark items-add-button"><i className="fa fa-plus"></i></Button>
    </div>
  )
}

export default CampaignLayout;


