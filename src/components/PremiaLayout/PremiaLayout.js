import React from 'react';
import { Col, Row, Table, Pagination, PaginationItem, PaginationLink, Card, CardHeader } from 'reactstrap';
import uuid from "uuid";
import PremiaItem from './components/PremiaItem';
import PremiaEdit from './components/PremiaEdit';
import { Premia } from 'model/Premia';
import selectPremias from 'store/selectors/premias';
import { connect } from 'react-redux';

class PremiaLayout extends React.Component {
  static propTypes = {

  }

  state = {
    premia: new Premia(),
  };

  handleChooseItem = (premia) => () => {
    this.setState(() => {
      return {
        premia
      };
    });
  }
  handleResetItem = () => {

    this.setState(() => {
      return {
        premia: new Premia(),
      };
    });
  }

  render = () => (
    <div>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h3>Premias list</h3>
            </CardHeader>
            <Table hover bordered striped responsive size="sm">
              <thead>
                <tr>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.props.premias.map((premia, index) => {
                  return (
                    <PremiaItem key={uuid()} item={premia} click={this.handleChooseItem(premia)} />
                  )
                })}
              </tbody>
            </Table>
            <nav>
              <PremiaEdit item={this.state.premia} reset={this.handleResetItem} />
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

PremiaLayout.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    premias: selectPremias(state.premias, state.filters),
  }
};

export default connect(mapStateToProps)(PremiaLayout);



