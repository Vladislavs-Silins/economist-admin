import React from 'react';
import { Col, Button, Card, CardBody, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Campaign } from 'model/Campaign';
import { PropTypes } from 'prop-types';

class CampaignItemEdit extends React.Component {
  static propTypes = {
    campaign: PropTypes.instanceOf(Campaign)
  }
  constructor(props) {
    super(props)

    this.state = {
      campaign: props.campaign
    }
  }

  render = () => (
    <Card>
      <CardBody>
        <Form action="" method="post" className="form-horizontal">
          <FormGroup className="pr-1" row>
            <Col lg={3}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Code</InputGroupText>
                </InputGroupAddon>
                <Input type="text" id="code" placeholder={this.state.campaign.code} required />
              </InputGroup>
            </Col>
            <Col lg={7}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Description</InputGroupText>
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
  )
}

export default CampaignItemEdit;
