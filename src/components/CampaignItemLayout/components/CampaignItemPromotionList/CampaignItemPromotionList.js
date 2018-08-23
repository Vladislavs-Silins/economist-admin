import React from 'react';
import { Campaign } from 'model/Campaign';
import { PropTypes } from 'prop-types';
import { PROMOTIONMAP } from 'mock-data';
import { Row, Col, Button } from 'reactstrap';
import uuid from 'uuid';
import tools from 'tools';
import PromotionItem from './components/PromotionItem';
import { Redirect } from 'react-router-dom';

class CampaignItemPromotionList extends React.Component {
  // static propTypes = {
  //   campaign: PropTypes.instanceOf(Campaign),
  //   history: PropTypes.array
  // }
  state = {
    promotions: [],
    redirect: false,
    redirectCode: ''
  };

  componentDidMount = () => {
    this.getPromotionList();
  }

  // TODO: change function that gets mock's data to correct one
  getPromotionList = () => {
    const promotions = this.props.campaign.promotions;
    this.setState(() => {
      return {
        promotionMap: PROMOTIONMAP,
        promotions: promotions,
      };
    });
  };

  handleOpenPropertyItemForEdit = (code) => () => {
    this.setState(() => {
      return {
        redirect: true,
        redirectCode: code
      };
    });

  }

  render = () => {
    if (this.state.redirect) {
      return <Redirect push to={`/promotion/${this.state.redirectCode}`} />;
    } else {
      return (
        <div className="animated fadeIn">
          <Row>
            {this.state.promotions.map((promotionCode, index) => {
              return (
                <Col key={uuid()} xs="12" sm="6" lg="3">
                  <PromotionItem click={this.handleOpenPropertyItemForEdit(promotionCode)} promotion={this.state.promotionMap.get(promotionCode)} color={tools.getColor(index)}></PromotionItem>
                </Col>
              )
            })}
          </Row>
          <Button size="lg" color="info" className="btn btn-pill p-3 px-4 border border-dark items-add-button"><i className="fa fa-plus"></i></Button>
        </div>
      )
    }
  }
}
export default CampaignItemPromotionList;
