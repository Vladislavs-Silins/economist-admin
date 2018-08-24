import React from 'react';
import { Col, Button, Card, CardBody, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { PropTypes } from 'prop-types';
import { OfferTerm } from 'model/OfferTerm';

class OfferTermEdit extends React.Component {
  static propTypes = {
    term: PropTypes.instanceOf(OfferTerm),
    reset: PropTypes.func.isRequired
  }

  state = {

  }

  render = () => (
    <Card>
      <CardBody>
        <Form action="" method="post" className="form-horizontal">
          <FormGroup className="pr-1" row>
            <Col lg={8}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Description</InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="description" defaultValue={this.props.term.description} placeholder="" required />
              </InputGroup>
            </Col>
            <Col lg={2}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Duration</InputGroupText>
                </InputGroupAddon>
                <Input type="number" name="duration" value={this.props.term.duration} placeholder="" required />
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

export default OfferTermEdit;
