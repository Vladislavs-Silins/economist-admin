import React from 'react';
import { PRICEZONESMAP } from 'mock-data';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import uuid from 'uuid';
import PriceZoneItem from './components/PriceZoneItem';
import PriceZonesEdit from './components/PriceZonesEdit';
import { PriceZone } from 'model/PriceZone';

class Countries extends React.Component {
  static propTypes = {

  }
  state = {
    priceZones: [],
    priceZone: new PriceZone(),
    page: 1
  }

  componentDidMount = () => {
    this.setState(() => {
      return {
        priceZonesMap: PRICEZONESMAP,
        priceZones: Array.from(PRICEZONESMAP.keys())
      };
    });
  }
  handleChooseItem = (code) => () => {
    this.setState((prevState) => {
      return {
        priceZone: this.state.priceZonesMap.get(code),
      };
    });
  }
  handleResetItem = () => {

    this.setState((prevState) => {
      return {
        priceZone: new PriceZone(),
      };
    });
  }

  setPage = (page) => () => {
    this.setState((prevState) => {
      return {
        page: page
      };
    });
  }

  render = () => (
    <div className="animated fadeIn">
      <Table hover bordered striped responsive size="sm">
        <thead>
          <tr>
            <th>Country flag</th>
            <th>Country</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {this.state.priceZones.slice((this.state.page - 1) * 10, (this.state.page) * 10 - 1).map((priceZoneCode, index) => {
            return (
              <PriceZoneItem key={uuid()} click={this.handleChooseItem(priceZoneCode)} priceZone={this.state.priceZonesMap.get(priceZoneCode)}></PriceZoneItem>
            )
          })
          }
        </tbody>
      </Table>
      <nav>
        <PriceZonesEdit item={this.state.priceZone} reset={this.handleResetItem} />
        <Pagination>
          <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
          <PaginationItem active={this.state.page === 1}>
            <PaginationLink tag="button" onClick={this.setPage(1)}>1</PaginationLink>
          </PaginationItem >
          <PaginationItem active={this.state.page === 2}><PaginationLink tag="button" onClick={this.setPage(2)}>2</PaginationLink></PaginationItem>
          <PaginationItem active={this.state.page === 3}><PaginationLink tag="button" onClick={this.setPage(3)}>3</PaginationLink></PaginationItem>
          <PaginationItem active={this.state.page === 4}><PaginationLink tag="button" onClick={this.setPage(4)}>4</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
        </Pagination>
      </nav>
    </div>
  )
}

export default Countries;
