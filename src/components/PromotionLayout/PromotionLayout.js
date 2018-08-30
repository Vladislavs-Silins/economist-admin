import React from 'react';
import { Col, Row, Table, Badge, Pagination, PaginationItem, PaginationLink, Card, CardHeader, NavLink } from 'reactstrap';
import uuid from "uuid";
import Tools from "tools";
import { connect } from 'react-redux';
import selectPromotions from 'store/selectors/promotions';
import selectCampaigns from 'store/selectors/campaigns';
import { Campaign } from 'model/Campaign';


class PromotionLayout extends React.Component {

  static propTypes = {

  }

  state = {
    redirect: false,
    redirectCode: ''
  };

  componentDidMount = () => {
    this.getPromotionList();
  }

  // TODO: change function that gets mock's data to correct one
  getPromotionList = () => {
  };

  render = () => (
    <div>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h3>Promotion list</h3>
            </CardHeader>
            <Table hover bordered striped responsive size="sm">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Campaign</th>
                  <th>Promotion progress</th>
                </tr>
              </thead>
              <tbody>
                {this.props.promotions.sort((a, b) => {
                  const compaignCodeA = a.campaignCode;
                  const compaignCodeB = b.campaignCode;
                  if (compaignCodeA > compaignCodeB) {
                    return 1;
                  } else if (compaignCodeA === compaignCodeB) {
                    if (a.code > b.code) {
                      return 1;
                    } else {
                      return -1;
                    }

                  } else {
                    return -1;
                  }
                }).map((promotion, index) => {
                  const campaign = this.props.campaigns.filter((item) => item.code === promotion.campaignCode).pop() || new Campaign();
                  return (
                    <tr key={uuid()}>
                      <td>{promotion.code}</td>
                      <td><NavLink href={`/#/promotion/${promotion.code}`}>{promotion.description}</NavLink></td>
                      <td>{promotion.startDate.toString()}</td>
                      <td>{promotion.endDate.toString()}</td>

                      <td>
                        <Badge className="mr-1" href={`/#/campaign/${campaign.code}`} color={Tools.getCampaignColor(campaign.code)}>{campaign.description}</Badge>
                      </td>
                      <td>
                        {(() => {
                          switch (Math.floor(promotion.getPromotionProgress() / 25)) {
                            case 1:
                              return (<i className="fa fa-battery-1 fa-lg"></i>);
                            case 2:
                              return (<i className="fa fa-battery-2 fa-lg"></i>);
                            case 3:
                              return (<i className="fa fa-battery-3 fa-lg"></i>);
                            case 4:
                              return (<i className="fa fa-battery-full fa-lg"></i>);
                            default:
                              return (<i className="fa fa-battery-empty fa-lg"></i>);
                          }
                        })()}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
            <nav>
              <Pagination>
                <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem>
                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
              </Pagination>
            </nav>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

PromotionLayout.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    promotions: selectPromotions(state.promotions, state.filters),
    campaigns: selectCampaigns(state.campaigns, state.filters),
  }
};
export default connect(mapStateToProps)(PromotionLayout);
