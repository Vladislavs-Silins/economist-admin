import React from 'react';
import { Col, Row, Table, Badge, Pagination, PaginationItem, PaginationLink, Card, CardHeader, NavLink } from 'reactstrap';
import { PROMOTIONMAP, CAMPAIGNMAP } from 'mock-data';
import uuid from "uuid";
import Tools from "tools";


class PromotionLayout extends React.Component {

  static propTypes = {

  }

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
    this.setState(() => {
      return {
        promotionMap: PROMOTIONMAP,
        campaignMap: CAMPAIGNMAP,
        promotions: Array.from(PROMOTIONMAP.keys()).sort((a, b) => {
          const compaignCodeA = PROMOTIONMAP.get(a).code;
          const compaignCodeB = PROMOTIONMAP.get(b).code;
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
        }),
      };
    });
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
                {this.state.promotions.map((promotionCode, index) => {
                  const promotion = this.state.promotionMap.get(promotionCode);
                  const campaign = this.state.campaignMap.get(promotion.campaignCode);

                  return (
                    <tr key={uuid()}>
                      <td>{promotion.code}</td>
                      <td><NavLink href={`/#/promotion/${promotionCode}`}>{promotion.description}</NavLink></td>
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

export default PromotionLayout;
