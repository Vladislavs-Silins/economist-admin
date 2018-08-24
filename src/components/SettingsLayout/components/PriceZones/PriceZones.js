import React from 'react';
import { PRICEZONESMAP } from 'mock-data';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import uuid from 'uuid';
import PriceZoneItem from './components/PriceZoneItem';
import PriceZonesEdit from './components/PriceZonesEdit';
import { OfferTerm } from 'model/OfferTerm';

class Countries extends React.Component {
  static propTypes = {

  }
  state = {
    priceZones: [],
    currentTerm: new OfferTerm(),
    page: 0
  }

  componentDidMount = () => {
    this.setState(() => {
      return {
        priceZonesMap: PRICEZONESMAP,
        priceZones: Array.from(PRICEZONESMAP.keys())
      };
    });
  }
  handleChooseTerm = (code) => () => {
    this.setState((prevState) => {
      return {
        currentTerm: this.state.priceZonesMap.get(code),
      };
    });
  }
  handleResetTerm = () => {

    this.setState((prevState) => {
      return {
        currentTerm: new OfferTerm(),
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
          {this.state.priceZones.slice(this.state.page * 10, (this.state.page + 1) * 10 - 1).map((priceZoneCode, index) => {
            return (
              <PriceZoneItem key={uuid()} click={this.handleChooseTerm(priceZoneCode)} priceZone={this.state.priceZonesMap.get(priceZoneCode)}></PriceZoneItem>
            )
          })
          }
        </tbody>
      </Table>
      <nav>
        <PriceZonesEdit item={this.state.currentTerm} reset={this.handleResetTerm} />
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
    </div>
  )
}

export default Countries;
