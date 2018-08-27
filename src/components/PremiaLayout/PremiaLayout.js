import React from 'react';
import { Col, Row, Table, Pagination, PaginationItem, PaginationLink, Card, CardHeader } from 'reactstrap';
import uuid from "uuid";
import { Map } from 'core-js';
import PremiaItem from './components/PremiaItem';
import { PREMIAMAP } from 'mock-data';
import PremiaEdit from './components/PremiaEdit';
import { Premia } from 'model/Premia';

class PremiaLayout extends React.Component {
  static propTypes = {

  }

  state = {
    premias: [],
    premia: new Premia(),
    premiaMap: new Map()
  };

  componentDidMount = () => {
    this.getPremiaList();
  }

  // TODO: change function that gets mock's data to correct one
  getPremiaList = () => {
    this.setState((prevState) => {
      return {
        premiaMap: PREMIAMAP,
        premias: Array.from(PREMIAMAP.keys())
      };
    });

  };

  handleChooseItem = (code) => () => {
    this.setState((prevState) => {
      return {
        premia: this.state.premiaMap.get(code),
      };
    });
  }
  handleResetItem = () => {

    this.setState((prevState) => {
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
                {this.state.premias.map((premiaCode, index) => {
                  const premia = this.state.premiaMap.get(premiaCode);
                  return (
                    <PremiaItem key={uuid()} item={premia} click={this.handleChooseItem(premiaCode)} />
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

export default PremiaLayout;


