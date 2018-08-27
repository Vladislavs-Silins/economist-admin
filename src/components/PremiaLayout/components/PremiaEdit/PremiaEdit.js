import React from 'react';
import { Col, Button, Card, CardBody, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { PropTypes } from 'prop-types';
import { Premia } from 'model/Premia';

class PremiaEdit extends React.Component {
  static propTypes = {
    item: PropTypes.instanceOf(Premia),
    reset: PropTypes.func.isRequired
  }

  state = {

  }

  render = () => (
    <Card>
      <CardBody>
        <Form action="" method="post" className="form-horizontal">
          <FormGroup className="pr-1" row>
            <Col lg={10}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Description</InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="description" defaultValue={this.props.item.description} placeholder="" required />
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

export default PremiaEdit;
