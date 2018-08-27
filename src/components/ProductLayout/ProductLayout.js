import React from 'react';
import { Col, Row, Table, Pagination, PaginationItem, PaginationLink, Card, CardHeader } from 'reactstrap';
import uuid from "uuid";
import { Product } from 'model/Product';
import { PRODUCTMAP } from 'mock-data';
import ProductItem from './components/ProductItem/index';
import ProductEdit from './components/ProductEdit/ProductEdit';


class ProductLayout extends React.Component {
  static propTypes = {

  }

  state = {
    products: [],
    product: new Product(),
    productMap: new Map()
  };

  componentDidMount = () => {
    this.getProductList();
  }

  // TODO: change function that gets mock's data to correct one
  getProductList = () => {
    this.setState((prevState) => {
      return {
        productMap: PRODUCTMAP,
        products: Array.from(PRODUCTMAP.keys())
      };
    });

  };

  handleChooseItem = (code) => () => {
    this.setState((prevState) => {
      return {
        product: this.state.productMap.get(code),
      };
    });
  }
  handleResetItem = () => {

    this.setState((prevState) => {
      return {
        product: new Product(),
      };
    });
  }

  render = () => (
    <div>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h3>Products list</h3>
            </CardHeader>
            <Table hover bordered striped responsive size="sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((productCode, index) => {
                  const product = this.state.productMap.get(productCode);
                  return (
                    <ProductItem key={uuid()} item={product} click={this.handleChooseItem(productCode)} />
                  )
                })}
              </tbody>
            </Table>
            <nav>
              <ProductEdit item={this.state.product} reset={this.handleResetItem} />
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

ProductLayout.propTypes = {

};

export default ProductLayout;
