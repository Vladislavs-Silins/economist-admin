import React from 'react';
import { Campaign } from './../../../../model/Campaign';
import { PropTypes } from 'prop-types';
import { PROMOTIONMAP } from '../../../../mock-data';
import { Row, Col, Button } from 'reactstrap';
import uuid from 'uuid';
import tools from '../../../../tools';
import PromotionItem from './components/PromotionItem';

class CampaignItemPromotionList extends React.Component {
  static propTypes = {
    campaign: PropTypes.instanceOf(Campaign)
  }

  constructor(props) {
    super(props)

    this.state = {
      promotions: [],
      promotionMap: {}
    }
  }
  componentWillMount = () => {
    this.getPromotionList();
  }

  // TODO: change function that gets mock's data to correct one
  getPromotionList = () => {
    this.setState((prevState) => {
      return {
        promotionMap: PROMOTIONMAP,
        promotions: Array.from(PROMOTIONMAP.keys())
      };
    });

  };

  handleOpenPropertyItemForEdit = (code) => () => {
    this.props.history.push(`/property/${code}`);
    console.log('handleOpenPropertyItemForEdit');
  }

  render = () => (
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
export default CampaignItemPromotionList;
