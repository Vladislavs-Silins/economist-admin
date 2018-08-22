import React from 'react';
import { Col, Row, Button, Jumbotron, Card, CardBody, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
// import cssModule from 'react-css-modules';
// import styles from './CampaignItemLayout.css';
import { CAMPAIGNMAP } from './../../mock-data/index';

class CampaignItemLayout extends React.Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)

    this.state = {
      campaign: CAMPAIGNMAP.get(props.match.params.code)
    }
  }

  render = () => (
    <div>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Form action="" method="post" className="form-horizontal">
                <FormGroup className="pr-1" row>
                  <Col lg={3}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Username</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="code" placeholder={this.props.match.params.code} required />
                    </InputGroup>
                  </Col>
                  <Col lg={7}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Username</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="description" id="description" placeholder={this.state.campaign.description} required />
                    </InputGroup>
                  </Col>
                  <Col lg={2}>
                    <Button block active color="ghost-primary" aria-pressed="true">Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <Card>

          </Card>
          <Jumbotron>
            <h1 className="display-3">CampaignItemLayout</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
            <hr className="my-2" />
            <p>Under construction</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  )
}

// export default cssModule(CampaignItemLayout, styles);
export default CampaignItemLayout;
