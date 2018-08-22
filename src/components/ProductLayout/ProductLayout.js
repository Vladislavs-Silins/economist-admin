import React from 'react';
import cssModule from 'react-css-modules';
import styles from './ProductLayout.css';
import { Col, Row, Button, Jumbotron } from 'reactstrap';
const ProductLayout = () => (
  <div>
    <Row>
      <Col>
        <Jumbotron>
          <h1 className="display-3">ProductLayout</h1>
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
);

ProductLayout.propTypes = {

};

export default cssModule(ProductLayout, styles);
