import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import uuid from 'uuid';
import tools from 'tools';
import PromotionItem from './components/PromotionItem';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import selectPromotions from 'store/selectors/promotions';
import { PropTypes } from 'prop-types';
import { Campaign } from 'model/Campaign';

class CampaignItemPromotionList extends React.Component {
  static propTypes = {
    campaign: PropTypes.instanceOf(Campaign),
    history: PropTypes.array
  }

  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      redirectCode: ''
    }
  }

  handleOpenPropertyItemForEdit = (redirectCode) => () => {
    this.setState(() => {
      return {
        redirect: true,
        redirectCode
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
            {this.props.promotions.filter((item) => item.campaignCode === this.props.campaign.code).map((promotion, index) => {

              return (
                <Col key={uuid()} xs="12" sm="6" lg="3">
                  <PromotionItem click={this.handleOpenPropertyItemForEdit(promotion.code)} promotion={promotion} color={tools.getColor(index)}></PromotionItem>
                </Col>
              )
            })}
          </Row>
          <Button size="lg" color="primary" className="btn p-3 px-4 border border-dark items-add-button"><i className="fa fa-plus"></i>Add</Button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    promotions: selectPromotions(state.promotions, state.filters),
  }
};

export default connect(mapStateToProps)(CampaignItemPromotionList);

