import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { CAMPAIGNMAP } from '../../mock-data';
import CampaignItem from './components/CampaignItem';
import uuid from 'uuid';


class CampaignLayout extends React.Component {
  static propTypes = {

  }
  campaigns = [];
  campaignMap = {};

  componentWillMount = () => {
    this.getCompaignList();
  }

  // TODO: change function that gets mock's data to correct one
  getCompaignList = () => {
    this.campaignMap = CAMPAIGNMAP;
    this.campaigns = Array.from(this.campaignMap.keys());
  };
  getColor = (index = 0) => {
    const colors = ['blue', 'yellow', 'pink', 'green', 'indigo', 'teal', 'purple', 'orange', 'cyan'];
    return colors[index % 9];

  }

  render = () => (
    <div className="animated fadeIn">
      <Row>
        {this.campaigns.map((campaignCode, index) => {
          return (
            <Col key={uuid()} xs="12" sm="6" lg="3">
              <CampaignItem campaign={this.campaignMap.get(campaignCode)} color={this.getColor(index)} value={this.campaignMap.get(campaignCode).getPromotionsProgress()}></CampaignItem>
            </Col>
          )
        })}
      </Row>
      <Button size="lg" color="info" className="btn btn-pill p-3 px-4 border border-dark items-add-button"><i className="fa fa-plus"></i></Button>
    </div>
  )
}

export default CampaignLayout;


