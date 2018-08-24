import React from 'react';
import { Col, Button, Card, CardBody, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { PropTypes } from 'prop-types';
import { PriceZone } from 'model/PriceZone';

class PriceZonesEdit extends React.Component {
  static propTypes = {
    item: PropTypes.instanceOf(PriceZone),
    reset: PropTypes.func.isRequired
  }

  state = {

  }

  render = () => (
    <Card>
      <CardBody>
        <Form action="" method="post" className="form-horizontal">
          <FormGroup className="pr-1" row>
            <Col lg={6}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Country</InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="country" defaultValue={this.props.item.country} placeholder="" required />
              </InputGroup>
            </Col>
            <Col lg={2}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Country Code</InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="countryCode" value={this.props.item.countryCode} placeholder="" required />
              </InputGroup>
            </Col>
            <Col lg={2}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Currency</InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="currency" value={this.props.item.currency} placeholder="" required />
              </InputGroup>
            </Col>

            <Col lg={1}>
              <Button block active color="ghost-primary" aria-pressed="true" onClick={this.props.reset}>Reset</Button>
            </Col>
            <Col lg={1}>
              <Button block active color="ghost-success" aria-pressed="true">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default PriceZonesEdit;
